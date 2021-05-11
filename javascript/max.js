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
        myArray[i] = getRandomArbitrary(3,50);

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
}
const div_shadow = document.querySelectorAll(".div-shadow");
/*
document.getElementById('paros').onclick = function() {
    const div_shadow = document.querySelectorAll(".div-shadow");
    var i = 0;
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

                document.getElementById('line_3').style.backgroundColor = 'coral';
                await delay(500);
                document.getElementById('line_3').style.backgroundColor = '#292b2c';
                        
            document.getElementById('_id_'+i).style.backgroundColor = 'coral';
            await delay(500);
            document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
            //await delay(5);
            if(parseInt(document.getElementById('_id_'+i).style.height) % 2 == 0){
                document.getElementById('_id_'+i).style.backgroundColor = 'green';

                document.getElementById('line_5').style.backgroundColor = 'coral';
                await delay(500);
                document.getElementById('line_5').style.backgroundColor = '#292b2c';

                break;
            }
            
                document.getElementById('line_4').style.backgroundColor = 'coral';
                await delay(500);
                document.getElementById('line_4').style.backgroundColor = '#292b2c';
        }
                document.getElementById('line_6').style.backgroundColor = 'coral';
                await delay(500);
                document.getElementById('line_6').style.backgroundColor = '#292b2c';

}
    printy();
}
document.getElementById('paratlan').onclick = function() {
    const div_shadow = document.querySelectorAll(".div-shadow");
    var i = 0;
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

                document.getElementById('line_3').style.backgroundColor = 'coral';
                await delay(500);
                document.getElementById('line_3').style.backgroundColor = '#292b2c';
                        
            document.getElementById('_id_'+i).style.backgroundColor = 'coral';
            await delay(500);
            document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
            //await delay(5);
            if(parseInt(document.getElementById('_id_'+i).style.height) % 2 == 1){
                document.getElementById('_id_'+i).style.backgroundColor = 'red';

                document.getElementById('line_5').style.backgroundColor = 'coral';
                await delay(500);
                document.getElementById('line_5').style.backgroundColor = '#292b2c';

                break;
            }
            
                document.getElementById('line_4').style.backgroundColor = 'coral';
                await delay(500);
                document.getElementById('line_4').style.backgroundColor = '#292b2c';
        }
                document.getElementById('line_6').style.backgroundColor = 'coral';
                await delay(500);
                document.getElementById('line_6').style.backgroundColor = '#292b2c';

}
    printy();
}
*/
document.getElementById('max').onclick = function() {
    const div_shadow = document.querySelectorAll(".div-shadow");
    var i = 0;
    var max = 0;
    var maxIndex = 0;
    var elozoMaxIndex = 0;
   async function printy()  {
        for (var i = 0; i < div_shadow.length; i++) {
            document.getElementById('_id_'+i).style.backgroundColor = 'coral';
            await delay(500);
            document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
            
            if(parseInt(document.getElementById('_id_'+i).style.height) > max){
                max = parseInt(document.getElementById('_id_'+i).style.height);

                maxIndex = i;

                document.getElementById('_id_'+i).style.backgroundColor = 'green';

                if(parseInt(document.getElementById('_id_'+elozoMaxIndex).style.height) < parseInt(document.getElementById('_id_'+maxIndex).style.height)) {
                    document.getElementById('_id_'+elozoMaxIndex).style.backgroundColor = 'cyan';
                    console.log(elozoMaxIndex);
                }
                elozoMaxIndex = maxIndex;
            }
            
            
        }
    }
    printy();
}
document.getElementById('min').onclick = function() {
    const div_shadow = document.querySelectorAll(".div-shadow");
    var i = 0;
    var min = 1000;
    var minIndex = 0;
    var elozoMinIndex = 0;
   async function printy()  {
        for (var i = 0; i < div_shadow.length; i++) {
            document.getElementById('_id_'+i).style.backgroundColor = 'coral';
            await delay(500);
            document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
            //min = (parseInt(document.getElementById('_id_'+i).style.height) +2 )
            if(parseInt(document.getElementById('_id_'+i).style.height) < min){
                min = parseInt(document.getElementById('_id_'+i).style.height);

                minIndex = i;

                document.getElementById('_id_'+i).style.backgroundColor = 'red';

                if(parseInt(document.getElementById('_id_'+elozoMinIndex).style.height) > parseInt(document.getElementById('_id_'+minIndex).style.height)) {
                    document.getElementById('_id_'+elozoMinIndex).style.backgroundColor = 'cyan';
                    console.log(elozoMinIndex);
                }
                elozoMinIndex = minIndex;
            }
            
            
        }
    }
    printy();
}