let userName = prompt("Who' you (oohooh! oohooh!");

if(userName == "Admin"){
      let password = prompt("Password?");

      if( password == "TheMaster"){
            alert("Welcom!");
      }

      else if( password == null || password == ""){
            alert("Canceled");
      }
      else {
            alert("Wrong password");
      }
}

else{
      alert("Canceled");
}