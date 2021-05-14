
  var array_A=[1,2,3, 5,6];
  var array_B=[1,2,3, 8,7];

  var arrayUnionFunction=function  (inputA,inputB) {
    var result=[];
    inputA.forEach (function  (element) {
      // if (result.indexOf (element)===-1) {
      //   result.push (element);
      // }
      result.push (element);
    });
    inputB.forEach (function  (element) {

      // tomb indexOf (element) visszajon a tomb elem indexevel, ha letezik az az elem a tombben, -1 el jon vissza, ha nem letezik
      // az elso iteracioban nem kell vizsgalodni (ha tudjuk, hogy nem redundansak a tombok), mert meg ures a result
      // csak itt,  a masodik iteracioban vizsgalodunk
      if (result.indexOf (element)===-1) {
        result.push (element);
      }
    });
    return result;
  }

  console.log ( arrayUnionFunction (array_A,array_B) );
