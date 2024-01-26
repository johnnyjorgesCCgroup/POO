function countItems(x) {
    return x.toString().length;
  }
  
  console.log(countItems(3000));
  console.log(countItems("hola mundo"));
  
  function sum(x = 0, y = 0, z = 0) {
    return x + y + z;
  }
  
  console.log(sum(10, 20));
  console.log(sum(10, 20, 70));
  