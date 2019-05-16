var maxBucketLiter=(buckername)=>{
        if(buckername=="8-liter-bucket")
                return 8;
        if(buckername=="5-liter-bucket")
                return 5;
        if(buckername=="3-liter-bucket")
                return 3;
        return 0;
}
module.exports.pourWater=(state,action)=>{
        if(action.type!="POUR_WATER")
                return state;
        //from为0
        if(state[action.from]==0)
                return state;
        //计算to剩余空间
        var spaceleft = maxBucketLiter(action.to) - state[action.to];
        //to剩余空间为0
        if(spaceleft==0)
                return state;
        
        var newstate=Object.assign({}, state);
        
        //console.log("一次倒水");
        //console.log(state);
        //console.log("from "+action.from);
        //console.log("to "+action.to);
        //console.log("to剩余空间"+spaceleft);
        //to的剩余空间大于from桶中的水
        if(spaceleft>=state[action.from]){
                newstate[action.to]=state[action.to]+state[action.from];
                newstate[action.from]=0; //倒空from到to里
        }

        //to的剩余空间小于from桶中的水
        if(spaceleft<state[action.from]){
                newstate[action.to]=maxBucketLiter(action.to);//倒满to
                newstate[action.from]=state[action.from]-spaceleft;
        }
       // console.log(newstate);
       // console.log("------------------------------------------------");
        return newstate;

}
