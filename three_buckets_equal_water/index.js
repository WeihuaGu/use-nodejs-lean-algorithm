var action = require('./action');
var reducer = require('./reducers');
var check = require('./check');
var initstate = {
        "8-liter-bucket": 8,
        "5-liter-bucket": 0,
        "3-liter-bucket": 0
}

var stateToString = (state) => {
        return state["8-liter-bucket"] + "," + state["5-liter-bucket"] + "," + state["3-liter-bucket"];
}
var stateInList = (state,list)=>{
        for (let j=0;j<list.length;j++){
            if((list[j]["8-liter-bucket"]==state["8-liter-bucket"])&&(list[j]["5-liter-bucket"]==state["5-liter-bucket"])&&(list[j]["3-liter-bucket"]==state["3-liter-bucket"]))
                return true;

        }
                return false;
}

var staterecordlist = [];
staterecordlist.push(initstate);
var printFind=(finalstate)=>{
    console.log("找到最终状态");
    staterecordlist.push(finalstate);
    console.log(staterecordlist);

}

var searchState = (state) => {
        if (check.isFinalState(state)) {
                printFind(state);
                return;
        }
        var fromandtolist = action.generatePourActionAlignment();
        for (var i = 0; i < fromandtolist.length; i++) {
                var currentpouraction = action.pourAction(fromandtolist[i].from, fromandtolist[i].to);
                var maynewstate = reducer.pourWater(state, currentpouraction);
                //console.log("fuck"+stateToString(state));
                //console.log("fuck"+stateToString(maynewstate));
                if (maynewstate != state) {
                        if (check.isFinalState(maynewstate)) {
                                printFind(maynewstate);
                                return;
                        } else {

                                if (!stateInList(maynewstate,staterecordlist)) {
                                        staterecordlist.push(maynewstate);
                                        //console.log(staterecordlist);
                                        //console.log("产生新状态,递归searchState函数");
                                        searchState(maynewstate);
                                } else
                                        ;
                        }
                } else {
                        //console.log("没产生新状态，说明倒水动作无效，跳过");
                        continue;
                }

        }
}

searchState(initstate);
