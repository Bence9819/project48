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

document.getElementById('random1').onclick = function() {
    

    var limit = arrayMax + 1;
    for (var i = 0; i < arrayMax; i++) {
        myArray[i] = getRandomArbitrary(3,50);

        currentItemReference=AddNewDivs();


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
    
    document.getElementById('plus_btn').onclick = function() {
        var summa = 0;
        const div_shadow = document.querySelectorAll(".div-shadow");
        const kod = document.querySelectorAll("code");
        
        
        async function printy()  {
            
            for (var i = 0; i < div_shadow.length; i++) {
                summa +=  parseInt(div_shadow[i].style.height);
                document.getElementById('line_1').style.backgroundColor = 'coral';
                
                    document.getElementById('_id_'+i).style.backgroundColor = 'coral';
                    document.getElementById('sum').style.width = (summa/2) +'px';
                    
                    document.getElementById('line_1').innerHTML = ('Összeg = ' + summa);
                    document.getElementById('p_sum').innerHTML = (summa);
            
            
                    console.log(summa);
                    await delay(500);
                    document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
                
               
                
                //document.getElementById('line_'+i).innerHTML = '(summa)';
               
            }//console.log(summa);
        }
        printy();
    }
   
}

