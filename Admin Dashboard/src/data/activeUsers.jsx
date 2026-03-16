const MAX = 300;
const GAP = 2;
export const activeUsers = [
    { time: "1", value: 280 },
    { time: "2", value: 220 },
    { time: "3", value: 250 },
    { time: "4", value: 200 },
    { time: "5", value: 150 },
    { time: "6", value: 290 },
].map((d) => ({
    ...d,
    gap: GAP,
    base: MAX - d.value - GAP,
}));
