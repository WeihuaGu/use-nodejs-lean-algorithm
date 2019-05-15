var maxBucketLiter=(buckername)=>{
        if(buckername="8-liter-bucket")
                return 8;
        if(buckername="5-liter-bucket")
                return 5;
        if(buckername="3-liter-bucket")
                return 3;
        return 0;
}
module.exports.pourWater=(state,action)=>{
        if (action.type!="POUR_WATER")
                return state;
        //倒水的量大于桶里的水
        if(action.watervolume>state[action.from])
                return state;
        //倒的水加上桶里的超过桶的容量
        if((state[action.to]+action.watervolume)>maxBucketLiter(action.to))
                return state;
        var newstate=state;
        newstate[action.from]=newstate[action.from]-action.watervolume;
        newstate[action.to]=newstate[action.to]+action.watervolume;
        return newstate;
        





}
