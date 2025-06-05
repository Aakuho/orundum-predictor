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
  const anniOrundum = weeksRemaining * weeklyAnni;

  const missionsOrundum = data.includeMissions ? (daysRemaining * 100 + weeksRemaining * 500) : 0;
  const membershipOrundum = data.includeMembership ? daysRemaining * 200 : 0;
  const opOrundum = data.willSpendOp ? opAmount * 300 : 0;

  const totalOrundum =
    currentOrundum +
    anniOrundum +
    missionsOrundum +
    membershipOrundum;

  const totalPulls = Math.floor(totalOrundum / 600) + pulls;

  const pullsNeededForSpark = Math.max(0, sparkCap - totalPulls);
  const orundumNeededForSpark = Math.max(0, (sparkCap - totalPulls) * 600);
  const originitePrimeNeeded = Math.max(0, Math.ceil((orundumNeededForSpark - opOrundum) / 180));

  const willReachSpark = totalPulls >= sparkCap;
  console.log(totalOrundum, sparkCap);

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
