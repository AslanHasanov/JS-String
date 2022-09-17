function get(){
    var input=document.getElementById("group").value
    var number=input.slice(-3,-2)
    
    document.getElementById("g-name").innerHTML=input
    
    if(number==1){
        document.getElementById("g-name").style.color="bisque"
        alert("Morning groups")
    }
    else if(number==2){
        document.getElementById("g-name").style.color="yellow"
        alert("Afternoon groups")
    }
    else if(number==3){
        if(document.body.style.backgroundColor=="black"){
            document.getElementById("g-name").style.color="white"
        }
        else{
            document.getElementById("g-name").style.color="black"
        }
        alert("Night groups")
    }

}
function mode(){
    if(document.body.style.backgroundColor=="white"){
        document.body.style.backgroundColor="black"
        document.getElementById("modes").textContent="Light mode"
    }
    else{
        document.body.style.backgroundColor="white"
        document.getElementById("modes").textContent="Dark mode"
    }
}