module.exports.isFinalState=(state)=>{
        if(state["8-liter-bucket"]==4&&state["5-liter-bucket"]==4&&state["3-liter-bucket"]==0)
                return true;
        else
                return false;
}
