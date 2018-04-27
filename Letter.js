
function Letter(char){
    //If a char is not a number ot letter we make it visible
    this.visible = !/[a-z1-9]/i.test(char);
    //save the char
    this.char = char;
}

Letter.prototype.toSttring = function(){
    if(this.visible === true){
        return this.char;
    }
    return "_";
};

//Accept the user input
Letter.prototype.guess = function(CharGuess){
    if(charGuess.toUpperCase()===this.char.toUpperCase()){
        this.visible = true;
        return true;
    }

    return false;
};

module.exports = Letter;