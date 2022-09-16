function get(){
    var input=document.getElementById("group").value
    var number=input.slice(-3,-2)
    
    document.getElementById("g-name").innerHTML=input
    
    if(number==1){
        document.getElementById("g-name").style.color="bisque"
        alert("seher")
    }
    else if(number==2){
        document.getElementById("g-name").style.color="yellow"
        alert("gunorta")
    }
    else if(number==3){
        document.getElementById("g-name").style.color="black"
        alert("axsham")
    }

}