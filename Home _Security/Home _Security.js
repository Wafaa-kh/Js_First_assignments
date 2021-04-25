function key(check){
   if (check === true){
   console.log ("True"); 
   }else
   {console.log("False");}
}
key(true);  

function person(check){
    if (check === "Mohammad"){
    console.log ("True");} 
    else
    {console.log("False");}
}
person("Mohammad");


function security (keyVar,nameVar){
    if (keyVar === true && nameVar === "Mohammad"){
        console.log("Welcome");}
        else{
            console.log("You can't access");}
    }
    const result = security(true,"Mohammad")
    alert (result);
    security(true,"Mohammad");