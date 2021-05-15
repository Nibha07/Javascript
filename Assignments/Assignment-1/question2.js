function myFunction(x,y,z){
  if(x>y && x>z){
      console.log(x);
  }
 else if(y>x && y>z){
      console.log(y);
  }
  else{
      console.log(z);
  }
};
myFunction(1,2,3);