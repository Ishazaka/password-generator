

 document.getElementById('btn').addEventListener('click', function(){
  var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+_-&@*()0123456789!$^%#/?';
 var length = 12;
  var password = '';
  for(let i = 0; i < length; i++ ){
  
   
       password +=char.charAt(Math.floor(Math.random()*char.length));
  //  var randomNBR= Math.floor(Math.random()*char.length);
  //   password += char.substring(randomNBR , randomNBR + 1 );
  }
 document.getElementById('password').value=password;
 })


   
   


