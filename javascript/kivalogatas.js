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
            newDiv2.classList.add('div-shadow2');
        
            
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




document.getElementById('paros').onclick = function() {
    const div_shadow = document.querySelectorAll(".div-shadow");
    const div_shadow2 = document.querySelectorAll(".div-shadow2");
   async function printy()  {
    var db = 0;
        for (var i = 0; i < div_shadow.length; i++) {
            //var height2 = parseInt(document.getElementById('_id_'+ i).style.height) * parseInt(document.getElementById('_id_'+ i).style.height);
            document.getElementById('_id_'+i).style.backgroundColor = 'coral';
            await delay(500);
                document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
                
                if (parseInt(document.getElementById('_id_'+i).style.height) % 2 == 0){
                    document.getElementById('_id_'+i).style.backgroundColor = 'green';
                    db  += 1;
                    height = parseInt(document.getElementById('_id_'+ i).style.height);
                    document.getElementById('id_'+ (db-1)).style.height = document.getElementById('_id_'+ i).style.height;
                    document.getElementById('id_'+ (db-1)).style.backgroundColor = 'green';
                    document.getElementById('id_'+ (db-1)).innerHTML = height;
                }
                document.getElementById('mennyi').style.backgroundColor = 'green';
                document.getElementById('p_mennyi').innerHTML = ("A tömbben " + db + " db páros elem van.");            
        }
        console.log(db);
    }
    printy();
}



document.getElementById('paratlan').onclick = function() {
    const div_shadow = document.querySelectorAll(".div-shadow");
    const div_shadower = document.querySelectorAll(".div-shadow2");
   async function printy()  {
    var db = 0;
        for (var i = 0; i < div_shadow.length; i++) {
            //var height2 = parseInt(document.getElementById('_id_'+ i).style.height) * parseInt(document.getElementById('_id_'+ i).style.height);
            document.getElementById('_id_'+i).style.backgroundColor = 'coral';
            await delay(500);
                document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
                
                if (parseInt(document.getElementById('_id_'+i).style.height) % 2 == 1){
                    document.getElementById('_id_'+i).style.backgroundColor = 'red';
                    db  += 1;
                    height = parseInt(document.getElementById('_id_'+ i).style.height);
                    document.getElementById('id_'+ (db-1)).style.height = document.getElementById('_id_'+ i).style.height;
                    document.getElementById('id_'+ (db-1)).style.backgroundColor = 'red';
                    document.getElementById('id_'+ (db-1)).innerHTML = height;
                }
                document.getElementById('mennyi').style.backgroundColor = 'red';
                document.getElementById('p_mennyi').innerHTML = ("A tömbben " + db + " db páratlan elem van.");            
        }
        console.log(db);
    }
    printy();
}


 
    


