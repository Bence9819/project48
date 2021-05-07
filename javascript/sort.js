

/*
------------------------------------------------------------------------------------<Bubble>------------------------------------------------------------------------------------
*/
function delay(ms){
    return new Promise( resolve => {
    
    
    
        setTimeout(()=> {resolve('')} ,ms );
    
    
    })
    }
document.getElementById('bubble').onclick = function bubble() {
    async function printBubble()  {
        const div_shadow = document.querySelectorAll(".div-shadow");
        for(var j = 0; j < div_shadow.length; j++) {
            for (var i = 0; i < div_shadow.length-1; i++) {
                var plusOne = i + 1;
                document.getElementById('_id_'+i).style.backgroundColor = 'coral';
                document.getElementById('_id_'+plusOne).style.backgroundColor = 'coral';
                //await delay(500)
                
                var left = parseInt(div_shadow[i].style.height);
                //document.getElementById('_id_'+i).style.backgroundColor = 'green';
                //await delay(10)

                var right = parseInt(div_shadow[i + 1].style.height);
                //document.getElementById('_id_'+ i ).style.backgroundColor = 'green';

                var seged = 0;
                if (left > right){
                    //console.log('nagyobb');
                    seged = left;
                    //document.getElementById('_id_'+i).style.backgroundColor = 'red';
                    //await delay(10)
                    await delay(500)
                    document.getElementById('_id_'+ i).style.height = right + 'px';
                    //await delay(1000)
                    document.getElementById('_id_'+ (i + 1)).style.height = seged + 'px';
                    await delay(500)
                    
                }
                
                document.getElementById('_id_'+i).style.backgroundColor = 'cyan';
                document.getElementById('_id_'+plusOne).style.backgroundColor = 'cyan';
            }
            
        }
    }
    printBubble();
}
/*
------------------------------------------------------------------------------------<Insertion>------------------------------------------------------------------------------------
*/

document.getElementById('insertion').onclick = function insertion() {
    async function printInsertion()  {
        const div_shadow = document.querySelectorAll(".div-shadow");

        for(var i = 0; i < div_shadow.length; i++ ){
            document.getElementById('_id_'+i).style.backgroundColor = 'coral';
            var key = parseInt(document.getElementById('_id_'+ i).style.height);
            var j = i - 1;
            while(j >= 0 && parseInt(document.getElementById('_id_'+ j).style.height) > key ){
                document.getElementById('_id_'+i).style.backgroundColor = 'red';
                //plusOne = j + 1
                var k = parseInt(document.getElementById('_id_'+ i).style.height)
                document.getElementById('_id_'+ (i)).style.height  = parseInt(document.getElementById('_id_'+ (j)).style.height) + 'px';
                document.getElementById('_id_'+ j).style.height = k + 'px';
                j = j - 1;
            }
            key = parseInt(document.getElementById('_id_'+ i).style.height);
        }
    }
    printInsertion();
}


/*
------------------------------------------------------------------------------------<Merge>------------------------------------------------------------------------------------
*/
document.getElementById('insertion').onclick = function insertion() {
    async function printMerge()  {
        
    }
    printMerge();
}

