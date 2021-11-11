'use strict';

{
  // const my_array = ["忍者", "CO", "DE"];
  // function ninzya(my_array) {
  //   ninzya.every(function(val){
  //     let type = val.typeof;
  //   });
  //   if(type == 'string'){
  //     alert(my_array.join(''));
  //   } else if (type == 'number'){
  //     let total = my_array.reduce(function(sum, element){
  //       return sum + element;
  //     });
  //     alert(total);
  //   }
  // }

  const my_array = ["忍者", "CO", "DE"];

  function ninja( my_array ){ 

  let res = null;
  
  const array_string = my_array.every((item) => {
    return typeof item == "string";
  });


  if(array_string){
    res = my_array.join('');
  }else{
    res = my_array.reduce(function(p, c) {
      return p + c;
    }); 
  }

  ninja();
  alert(res);
  }

  
}