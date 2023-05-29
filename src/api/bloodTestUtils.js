export function calculateBloodTestResult(data){
    const { wbc, mcv, rbc, mch, plt, mchc, hgb, dwbc, hct, rbcdw, createdAt} = data;
  
    const wbcResult = wbc > 11.0 ? "How are you alive?" : wbc < 4.0 ? "GO EAT SOMETHING" : "Normal";
    const mcvResult = mcv > 95.0 ? "How are you alive?" : mcv < 80.0 ? "GO EAT SOMETHING" : "Normal";
    const rbcResult = rbc > 6.0 ? "How are you alive?" : rbc < 4.0 ? "GO EAT SOMETHING" : "Normal";
    const mchResult = mch > 34.0 ? "How are you alive?" : mch < 26.0 ? "GO EAT SOMETHING" : "Normal";
    const pltResult = plt > 450 ? "How are you alive?" : plt < 150 ? "GO EAT SOMETHING" : "Normal";
    const mchcResult = mchc > 36.0 ? "How are you alive?" : mchc < 32.0 ? "GO EAT SOMETHING" : "Normal";
    const hgbResult = hgb > 17.5 ? "How are you alive?" : hgb < 13.5 ? "GO EAT SOMETHING" : "Normal";
    const dwbcResult = dwbc > 0.1 ? "How are you alive?" : dwbc < 0.01 ? "GO EAT SOMETHING" : "Normal";
    const hctResult = hct > 52.0 ? "How are you alive?" : hct < 38.0 ? "GO EAT SOMETHING" : "Normal";
    const rbcdwResult = rbcdw > 18.0 ? "How are you alive?" : rbcdw < 10.0 ? "GO EAT SOMETHING" : "Normal";
    const dateResult = createdAt;
  
    const result = {
      wbc: wbcResult,
      mcv: mcvResult,
      rbc: rbcResult,
      mch: mchResult,
      plt: pltResult,
      mchc: mchcResult,
      hgb: hgbResult,
      dwbc: dwbcResult,
      hct: hctResult,
      rbcdw: rbcdwResult,
      createdAt: dateResult,
    };
  
    return result;
  };