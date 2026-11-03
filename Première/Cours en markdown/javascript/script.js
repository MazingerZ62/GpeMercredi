
    let titre = document.querySelector(".t2");
    let titre1 = document.querySelector(".t1");
    
    let pas = document.getElementById("pass");
    console.log(pas)
    
    let a = true ;
    titre1.addEventListener("mouseover", function(){

        if (a == true) {titre1.style.color = "green";
        a = false;}

        else {titre1.style.color = "purple";
        a = true;}
    });
    
    //console.log(titre.value);
    
    //let curseur = document.getElementById("range");
    //console.log(curseur.value);

    let pression = false;

    let bouton = document.getElementById("btn");
    bouton.addEventListener("click",function(){
        
        if(pression == false){titre.style.color = "red" ;
            pression = true;
            
        }
        else {titre.style.color = "blue" ;
            pression = false;
        }

    });