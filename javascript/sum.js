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

                            document.getElementById('line_0').style.backgroundColor = 'coral';
                            await delay(500);
                            document.getElementById('line_0').style.backgroundColor = '#292b2c';

                            document.getElementById('line_1').style.backgroundColor = 'coral';
                            await delay(500);
                            document.getElementById('line_1').style.backgroundColor = '#292b2c';

            for (var i = 0; i < div_shadow.length; i++) {

                            document.getElementById('line_2').style.backgroundColor = 'coral';
                            await delay(500);
                            document.getElementById('line_2').style.backgroundColor = '#292b2c';

                summa +=  parseInt(div_shadow[i].style.height);

                            document.getElementById('line_3').style.backgroundColor = 'coral';
                            await delay(500);
                            document.getElementById('line_3').style.backgroundColor = '#292b2c';

                            document.getElementById('line_1').style.backgroundColor = 'coral';
                            await delay(500);
                            document.getElementById('line_1').style.backgroundColor = '#292b2c';
                
                    document.getElementById('_id_'+i).style.backgroundColor = 'coral';
                    document.getElementById('sum').style.width = (summa/4) +'px';
                    
                    document.getElementById('line_1').innerHTML = ('Összeg = ' + summa);
                    document.getElementById('p_sum').innerHTML = (summa);
            

                    console.log(summa);
                    await delay(500);
                    document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
                        document.getElementById('line_4').style.backgroundColor = 'coral';
                        await delay(500);
                        document.getElementById('line_4').style.backgroundColor = '#292b2c';
               
                
                //document.getElementById('line_'+i).innerHTML = '(summa)';
               
            }           
            document.getElementById('line_5').style.backgroundColor = 'coral';
            await delay(500);
            document.getElementById('line_5').style.backgroundColor = '#292b2c';
        }
        printy();
    }
   
}

