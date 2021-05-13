var
  referencies=[],
  currentItemReference=null,

  temporarlySearchedItem=7,
  myArray = [],
  arrayMax = 10,

  referencies2=[],
  currentItemReference2=null,

  
  myBarray = [],
  arrayMax2 = 10
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
    //---------------------------------------------------------------------------------------------------------------------------------------------------
        
    const DivContainer2 = document.getElementById("div-container2");
    function AddNewDivs2(){
        const newDiv2 = document.createElement("div");
        console.log("add");
        newDiv2.classList.add('div-shadow2');
    
        
        DivContainer2.appendChild(newDiv2);
    
        // itt visszaadjuk a referenciat
        return newDiv2;
    }

    for (var i = 0; i < arrayMax; i++) {
        myBarray[i] = getRandomArbitrary(1,15);
        

        currentItemReference2=AddNewDivs2();

        // igy tudsz hozzaadni bmilyen attributumot
        currentItemReference2.setAttribute('id', 'id_' + i);
        currentItemReference2.setAttribute('data-tmp', 'this is the ' + i + '. element');

        referencies2.push(currentItemReference2);

    }
    for(var i = 0; i < myBarray.length; i++){
        //console.log(myArray[i]);
        var setHeigt = (myBarray[i])*5;
        //currentItemReference.setAttribute('style', 'height:500px');
        document.getElementById('id_'+ i).style.height = setHeigt+'px';
        document.getElementById('id_'+ i).style.backgroundColor = 'cyan';
        document.getElementById('id_'+ i).innerHTML = parseInt(myBarray[i]*5);
        

    }

    var
        referencies3=[],
        currentItemReference3=null,    
        myCarray = [],
        arrayMax3 = 10
        ;
            for (var i = 0; i < div_shadow.length; i++) {
                
    
            const DivContainer3 = document.getElementById("div-container3");
        
            function AddNewDivs3(){
                    const newDiv3 = document.createElement("div");
                    console.log("add");
                    newDiv3.classList.add('div-shadow3');
                
                    
                    DivContainer3.appendChild(newDiv3);
                
                    // itt visszaadjuk a referenciat
                    return newDiv3;
            }
                
                    myCarray[i] = 5;
            
                    currentItemReference3=AddNewDivs3();
            
                    // igy tudsz hozzaadni bmilyen attributumot
                    currentItemReference3.setAttribute('id', 'id' + i);
                    currentItemReference3.setAttribute('data-tmp', 'this is the ' + i + '. element');
            
                    referencies3.push(currentItemReference3);
         
        }
}




document.getElementById('kozos').onclick = function() {
    const div_shadow = document.querySelectorAll(".div-shadow");
    const div_shadow2 = document.querySelectorAll(".div-shadow2");
    const div_shadow3 = document.querySelectorAll(".div-shadow3");
   async function printy()  {
    var a = 0;
    var b = 0;
    var db = 0;
        for (var i = 0; i < div_shadow.length; i++) {
            var a = parseInt(document.getElementById('_id_'+ i).style.height);
            document.getElementById('_id_'+i).style.backgroundColor = 'coral';
            await delay(500);
            for (var j = 0; j < div_shadow2.length; j++) {
                var b = parseInt(document.getElementById('id_'+ j).style.height);
                document.getElementById('id_'+j).style.backgroundColor = 'coral';
                await delay(500);
                if(a == b){
                    db +=1;
                    height = parseInt(document.getElementById('_id_'+ i).style.height);
                    document.getElementById('id'+ (db-1)).style.height = height + 'px';
                    document.getElementById('id'+(db-1)).style.backgroundColor = 'coral';
                    document.getElementById('_id_'+(i)).style.backgroundColor = 'green';
                    document.getElementById('id_'+(j)).style.backgroundColor = 'green';
                    await delay(500);
                    document.getElementById('id'+ (db-1)).innerHTML = height;
                    document.getElementById('id_'+j).style.backgroundColor = 'cyan';
                    
                    break;
                }


                
                document.getElementById('id_'+j).style.backgroundColor = 'cyan';
            }
                document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
                       
        }
        
    }
    printy();
}




 
    


