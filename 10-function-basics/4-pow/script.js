function pow(x, n){
      if(n > 0) {
            return (x ** parseInt(n));
      }

      else{
            "Le nombre doit être superieur à 'n'";
      }
}

alert(pow(+prompt("Entrez un  nombre"), +prompt("Entrez un second nombre")));