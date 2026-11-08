export const freyaMini = {
  capacity: { min: 1, max: 2 },
  dimensionsCm: { width: 115, depth: 110, height: 210 },
  electrical: { voltage: 230, phases: 1, amperes: 16 },
  heater: { name: "Harvia Vega Compact", powerKw: 3.5 },
  control: "Wellmatic digitális külső fali vezérlőegység",
  glassThicknessMm: 8,
  warrantyYears: { structure: 5, heaterAndElectronics: 2 },
} as const;