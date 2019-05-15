var POUR_WATER = 'POUR_WATER';
module.exports.pourActionWithNum = (from, to, watervolume) => {
        return {
                type: POUR_WATER,
                from: from,
                to: to,
                watervolume: watervolume
        }
}
//生成倒水action
module.exports.pourAction = (from, to) => {
        return {
                type: POUR_WATER,
                from: from,
                to: to
        }
}
//生成倒水时所有的6种from,to
module.exports.generatePourActionAlignment = () => {
        return [
                {
                        from:"8-liter-bucket",
                        to:"5-liter-bucket"
                },
                {
                        from:"5-liter-bucket" ,
                        to:"8-liter-bucket"
                },
                {
                        from:"8-liter-bucket" ,
                        to:"3-liter-bucket"
                },
                {
                        from:"3-liter-bucket" ,
                        to:"8-liter-bucket"
                },
                {
                        from:"5-liter-bucket",
                        to:"3-liter-bucket"
                },
                {
                        from:"3-liter-bucket",
                        to:"5-liter-bucket"
                }
        ]
}
