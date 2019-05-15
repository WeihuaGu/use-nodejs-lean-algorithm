var POUR_WATER = 'POUR_WATER';
module.exports.pourAction=(from,to,watervolume)=>{
  return { type: POUR_WATER, from: from, to: to,watervolume: watervolume }
}
