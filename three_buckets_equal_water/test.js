var action = require('./action');
var reducer = require('./reducers');
var initstate={
        "8-liter-bucket":7,
        "5-liter-bucket":5,
        "3-liter-bucket":1
}
var pouraction=action.pourAction("5-liter-bucket","3-liter-bucket",2);

console.log(reducer.pourWater(initstate,pouraction));
