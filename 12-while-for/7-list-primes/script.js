let nombre= +prompt("Entrez un nombre");

for(i = 2; i <= nombre; i++){
      
      let nombrePremier = true;


      for(j = 2; j < i; j++){
            if(i%j == 0) nombrePremier = false;
      }

      if(nombrePremier) 
      
                  alert(i);
}