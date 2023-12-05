
function allowCharacters(value){
    try{
        const allowedChar="1234567890-+/*";
        const a=allowedChar.includes(value[value.length-1]);
    }
    catch(e){

        // value.length=value.length-1;
        alert("invalid");
        // value[value.length-1]=null;
    }
    
}
