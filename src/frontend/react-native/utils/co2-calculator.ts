/**
 * PlanET Telemetry Unit - Environmental Impact Calculator
 * Path: src/frontend/react-native/utils/co2-calculator.ts
 * 
 * Translates processed material weights into definitive carbon mitigation metrics.
 * "From the urn of life, bringing forth something new."
 */

export interface ImpactMetrics {
  co2SavedKg: number;
  energySavedKwh: number;
  waterSavedLiters: number;
  planetaryPoints: number;
}

/**
 * Raw conversion coefficients mapping 1 kilogram of recycled target material 
 * to environmental savings factors across carbon, grid electrical power, and fluid gallons.
 */
export const MATERIAL_IMPACT_COEFFICIENTS: Record<string, Omit<ImpactMetrics, 'planetaryPoints'>> = {
  plastic_bottle: {
    co2SavedKg: 1.5,      // Saves 1.5kg CO2 per kg recycled
    energySavedKwh: 5.7,   // Reductions in hydrocarbon processing energy
    waterSavedLiters: 2.0
  },
  aluminum_can: {
    co2SavedKg: 9.1,      // Highest return: Bauxite mining mitigation savings
    energySavedKwh: 14.0,  // Bypassing active electrolytic smelting loops
    waterSavedLiters: 40.0
  },
  glass_bottle: {
    co2SavedKg: 0.3,
    energySavedKwh: 0.42,
    waterSavedLiters: 1.2
  },
  cardboard_box: {
    co2SavedKg: 1.0,
    energySavedKwh: 4.1,
    waterSavedLiters: 26.0
  },
  steel_can: {
    co2SavedKg: 1.8,
    energySavedKwh: 3.2,
    waterSavedLiters: 5.5
  }
};

/**
 * Translates raw material descriptors and physical item weights into planetary telemetry data.
 * 
 * @param materialLabel Evaluated naming signature from the computer vision engine.
 * @param weightGrams The calculated weight of the scanned object in grams.
 * @returns Fully mapped telemetry detailing exact ecological savings offsets.
 */
export function calculateEnvironmentalImpact(
  materialLabel: string,
  weightGrams: number
): ImpactMetrics {
  const normalizedLabel = materialLabel.toLowerCase().trim();
  const weightKg = weightGrams / 1000.0;
  
  // Locate specific material metrics. Fallback to generic mixed recycling parameters if missing.
  const metrics = MATERIAL_IMPACT_COEFFICIENTS[normalizedLabel] || {
    co2SavedKg: 0.5,
    energySavedKwh: 1.2,
    waterSavedLiters: 3.0
  };

  const co2Saved = Number((weightKg * metrics.co2SavedKg).toFixed(3));
  const energySaved = Number((weightKg * metrics.energySavedKwh).toFixed(3));
  const waterSaved = Number((weightKg * metrics.waterSavedLiters).toFixed(3));
  
  // Formulate gamified engagement parameters (1 Point awarded per 10g carbon offset)
  const planetaryPoints = Math.max(1, Math.round(co2Saved * 100));

  return {
    co2SavedKg: co2Saved,
    energySavedKwh: energySaved,
    waterSavedLiters: waterSaved,
    planetaryPoints: planetaryPoints
  };
}

/**
 * Aggregates a running tally of multiple scanned logs to calculate overall environmental savings.
 */
export function aggregateImpactSession(items: Array<{ label: string; weight: number }>): ImpactMetrics {
  return items.reduce(
    (accumulator, currentItem) => {
      const itemImpact = calculateEnvironmentalImpact(currentItem.label, currentItem.weight);
      return {
        co2SavedKg: Number((accumulator.co2SavedKg + itemImpact.co2SavedKg).toFixed(3)),
        energySavedKwh: Number((accumulator.energySavedKwh + itemImpact.energySavedKwh).toFixed(3)),
        waterSavedLiters: Number((accumulator.waterSavedLiters + itemImpact.waterSavedLiters).toFixed(3)),
        planetaryPoints: accumulator.planetaryPoints + itemImpact.planetaryPoints
      };
    },
    { co2SavedKg: 0, energySavedKwh: 0, waterSavedLiters: 0, planetaryPoints: 0 }
  );
}
