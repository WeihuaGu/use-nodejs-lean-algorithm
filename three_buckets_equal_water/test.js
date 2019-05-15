var action = require('./action');
var reducer = require('./reducers');
var initstate={
        "8-liter-bucket":7,
        "5-liter-bucket":5,
        "3-liter-bucket":1
}

////////////////////////
var max=5;
parseInt(Math.random()*(max+1),10);
var rindex=Math.floor(Math.random()*(max+1));
var fromandto = action.generatePourActionAlignment()[rindex];
console.log(fromandto);
var pouraction=action.pourAction(fromandto.from,fromandto.to);
console.log(reducer.pourWater(initstate,pouraction));




