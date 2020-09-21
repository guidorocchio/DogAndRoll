window.addEventListener("load", function (){
    let selectKg = document.getElementsByClassName("selectKg");
    for(let i=0; i<selectKg.length; i++){
        let  selected= selectKg[i];
        selected.addEventListener("change", function(event){
            console.log(selected.value)
            selected.nextElementSibling.innerHTML= selected.value;
        })      
    }     

    let cardContainers= document.getElementsByClassName("container-card");
    for(let i=0; i< cardContainers.length; i++){
        let card= cardContainers[i];
        card.addEventListener("mouseover", function(event){
           card.querySelector(".comprar").style.display="block"
        })
        card.addEventListener("mouseout", function(event){
            card.querySelector(".comprar").style.display="none"
         })
    }



});

