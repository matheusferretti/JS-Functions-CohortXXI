const rapid = (str) => {
    var newString = "";
    var i;
    for (i = 0; i < str.length; i++) {
        if(str.charAt(i) != "o"){
            newString += str.charAt(i);
        }
    }
    return newString.toUpperCase();
}
   
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));