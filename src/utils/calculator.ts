// src/utils/calculator.ts

type FormValues = {
  currentOrundum: string;
  annihilationCap: string;
  endDate: string;
  sparkCap: string;
  includeMissions: boolean;
  includeMembership: boolean;
  willSpendOp: boolean;
  opAmount: string;
  showExtender: boolean;
  shards: string;
  pulls: string;
};




export function calculateOrundum(data: FormValues) {
  const toNum = (val: string) => {
    const n = Number(val);
    return isNaN(n) ? 0 : n;
  };

  const currentOrundum = toNum(data.currentOrundum);
  const annihilationCap = toNum(data.annihilationCap);
  const sparkCap = toNum(data.sparkCap);
  const opAmount = toNum(data.opAmount);
  const pulls = toNum(data.pulls);

  const today = new Date();
  const endDate = new Date(data.endDate);
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.max(0, Math.ceil((endDate.getTime() - today.getTime()) / msPerDay));
  const weeksRemaining = Math.floor(daysRemaining / 7);
  const weeklyAnni = Math.min(annihilationCap, 1800);

  const anniOrundum = annihilationCap && endDate ? weeksRemaining * weeklyAnni : NaN;                   // NaNs, so user knows it's an input failure, and not just "yeah you get 0 bro"
  const missionsOrundum = data.includeMissions ? (daysRemaining * 100 + weeksRemaining * 500) : NaN;
  const membershipOrundum = data.includeMembership ? daysRemaining * 200 : NaN;

  // kill me?

  const allOrundumSources = [currentOrundum, anniOrundum, missionsOrundum, membershipOrundum];

  const allAreNaN = allOrundumSources.every(v => isNaN(v));
  const validValues = allOrundumSources.filter(v => !isNaN(v));

  const totalOrundum = allAreNaN ? NaN : validValues.reduce((a, b) => a + b, 0);

  const totalPulls = isNaN(totalOrundum) ? NaN : Math.floor(totalOrundum / 600) + pulls;
  const pullsNeededForSpark = isNaN(totalPulls) ? NaN : Math.max(0, sparkCap - totalPulls);
  const orundumNeededForSpark = isNaN(pullsNeededForSpark) ? NaN : pullsNeededForSpark * 600;

  const opOrundum = data.willSpendOp ? opAmount * 180 : NaN;
  const originitePrimeNeeded = isNaN(orundumNeededForSpark) || isNaN(opOrundum) ? -1 : Math.max(0, Math.ceil((orundumNeededForSpark - opOrundum) / 180));

  const willReachSpark = totalPulls >= sparkCap;

  return {
    sparkCap,
    daysRemaining,
    weeksRemaining,
    anniOrundum,
    missionsOrundum,
    membershipOrundum,
    totalOrundum,
    totalPulls,
    willReachSpark,
    pullsNeededForSpark,
    orundumNeededForSpark,
    originitePrimeNeeded,
  };
}
