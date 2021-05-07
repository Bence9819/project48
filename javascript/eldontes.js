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

document.getElementById('paros').onclick = function() {
    const div_shadow = document.querySelectorAll(".div-shadow");
    var i = 0;
    async function printy()  {
    

  
        for (var i = 0; i < div_shadow.length; i++) {
            document.getElementById('_id_'+i).style.backgroundColor = 'coral';
            await delay(500);
            document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
            //await delay(5);
            if(parseInt(document.getElementById('_id_'+i).style.height) % 2 == 0){
                document.getElementById('_id_'+i).style.backgroundColor = 'green';
            }
            
            //await delay(500);
        }

}
    printy();
}
document.getElementById('paratlan').onclick = function() {
    const div_shadow = document.querySelectorAll(".div-shadow");
    var i = 0;
    
   async function printy()  {
        for (var i = 0; i < div_shadow.length; i++) {
            document.getElementById('_id_'+i).style.backgroundColor = 'coral';
            await delay(500);
            document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
            //await delay(5);
            if(parseInt(document.getElementById('_id_'+i).style.height) % 2 == 1){
                document.getElementById('_id_'+i).style.backgroundColor = 'red';
            }
            
            //await delay(500);
        }
    }
    printy();
}