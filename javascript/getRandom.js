var
  referencies=[],
  currentItemReference=null,

  temporarlySearchedItem=7,
  myArray = [],
  arrayMax = 40
;


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById('random').onclick = function() {
    //var myArray = [];
    //var arrayMax = 40;
    var limit = arrayMax + 1;
    for (var i = 0; i < arrayMax; i++) {
        myArray[i] = getRandomArbitrary(3,100);

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
    }
    


}
document.getElementById('swap').onclick = function swap() {

    const fakeImages = document.querySelectorAll(".div-shadow");
	for (var i = 0; i < fakeImages.length-1; i++) {
	  //console.log('fakeImage: ', fakeImages[i].style.height);
      
      var left = parseInt(fakeImages[i].style.height);
      var right = parseInt(fakeImages[i + 1].style.height);
      var seged = 0;
      if (left > right){

        seged = left;
        document.getElementById('_id_'+ i).style.height = right + 'px';
        document.getElementById('_id_'+ (i + 1)).style.height = seged + 'px';
        
    }

      console.log('----------------');

      
	}
    


}



/*
-----------------------------------------------------------------------Bubble------------------------------
*/
/*
document.getElementById('bubble').onclick = function bubble() {

    const div_shadow = document.querySelectorAll(".div-shadow");
    for(var j = 0; j < div_shadow.length; j++) {
        for (var i = 0; i < div_shadow.length-1; i++) {
        //console.log('fakeImage: ', fakeImages[i].style.height);
        
        var left = parseInt(div_shadow[i].style.height);
        var right = parseInt(div_shadow[i + 1].style.height);
        var seged = 0;
            if (left > right){
                //console.log('nagyobb');
                seged = left;
                document.getElementById('_id_'+ i).style.height = right + 'px';
                document.getElementById('_id_'+ (i + 1)).style.height = seged + 'px';
                
            }

	    }
    
    }
}
*/