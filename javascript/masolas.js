var
  referencies=[],
  currentItemReference=null,

  temporarlySearchedItem=7,
  myArray = [],
  arrayMax = 10
;
function delay(ms){
    return new Promise( resolve => {
    
    
    
        setTimeout(()=> {resolve('')} ,ms );
    
    
    })
    }

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById('random').onclick = function() {
    //var myArray = [];
    //var arrayMax = 40;
    var limit = arrayMax + 1;
    for (var i = 0; i < arrayMax; i++) {
        myArray[i] = getRandomArbitrary(1,15);

        currentItemReference=AddNewDivs();

        // igy tudsz hozzaadni bmilyen attributumot
        currentItemReference.setAttribute('id', '_id_' + i);
        currentItemReference.setAttribute('data-tmp', 'this is the ' + i + '. element');

        referencies.push(currentItemReference);
        
        
        
    }
    
    for(var i = 0; i < myArray.length; i++){
        //console.log(myArray[i]);
        var setHeigt = (myArray[i])*5;
        //currentItemReference.setAttribute('style', 'height:500px');
        document.getElementById('_id_'+ i).style.height = setHeigt+'px';
        document.getElementById('_id_'+ i).innerHTML = parseInt(myArray[i]*5);
        

    }
    const div_shadow = document.querySelectorAll(".div-shadow");

    
    var
        referencies2=[],
        currentItemReference2=null,

        
        myBarray = [],
        arrayMax2 = 10
        ;
    for (var i = 0; i < div_shadow.length; i++) {
            

        const DivContainer2 = document.getElementById("div-container2");

        function AddNewDivs2(){
            const newDiv2 = document.createElement("div");
            console.log("add");
            newDiv2.classList.add('div-shadower');
        
            
            DivContainer2.appendChild(newDiv2);
        
            // itt visszaadjuk a referenciat
            return newDiv2;
        }
        
            myBarray[i] = 5;
    
            currentItemReference2=AddNewDivs2();
    
            // igy tudsz hozzaadni bmilyen attributumot
            currentItemReference2.setAttribute('id', 'id_' + i);
            currentItemReference2.setAttribute('data-tmp', 'this is the ' + i + '. element');
    
            referencies2.push(currentItemReference2);
            
            
            
            
        
    
    
    
}
}




document.getElementById('pow').onclick = function() {
    const div_shadow = document.querySelectorAll(".div-shadow");
    const div_shadower = document.querySelectorAll(".div-shadower");
   async function printy()  {
        for (var i = 0; i < div_shadow.length; i++) {
            var height2 = parseInt(document.getElementById('_id_'+ i).style.height) * parseInt(document.getElementById('_id_'+ i).style.height);
            
                document.getElementById('_id_'+i).style.backgroundColor = 'coral';
                await delay(500);
                for (var j = 0; j < div_shadower.length; j++) {
                    //document.getElementById.style.height = "10px";
                    document.getElementById('id_'+ i).style.height = document.getElementById('_id_'+ i).style.height;
                    document.getElementById('id_'+ i).innerHTML = height2;
                    document.getElementById('id_'+ i).style.width = 35 + 'px';
                    document.getElementById('id_'+i).style.backgroundColor = 'coral';
                    await delay(500);
                    document.getElementById('id_'+i).style.backgroundColor = 'cyan';
                    break;
                }
                await delay(500);
                document.getElementById('id_'+i).style.backgroundColor = 'cyan';
                document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
                
                    
                    
                
            
            
            
        }
    }
    printy();
}






 
    


