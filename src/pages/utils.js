// Simple demo data for pointsInner and pointsOuter
export const pointsInner = Array.from({ length: 20 }, (_, i) => ({
  idx: i,
  position: [Math.cos((i / 20) * 2 * Math.PI) * 3, Math.sin((i / 20) * 2 * Math.PI) * 3, 0],
  color: '#FFD700',
}));

export const pointsOuter = Array.from({ length: 30 }, (_, i) => ({
  idx: i + 100,
  position: [Math.cos((i / 30) * 2 * Math.PI) * 5, Math.sin((i / 30) * 2 * Math.PI) * 5, 0],
  color: '#0d6efd',
})); 