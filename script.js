function onclick1(){
    let computer = Math.ceil(Math.random() * 3);
        if (computer == 1){
            document.getElementById("wynik").innerHTML = ("Komputer wybrał Kamień , Remis!"); 
        }
        if (computer == 2){
            document.getElementById("wynik").innerHTML = ("Komputer wybrał Papier , Przegrałeś!");     
        }
        if (computer == 3){
            document.getElementById("wynik").innerHTML = ("Komputer wybrał Nożyce , Wygrałeś!");    
        }
}
function onclick2(){
    let computer = Math.ceil(Math.random() * 3);
        if (computer == 1){
            document.getElementById("wynik").innerHTML = ("Komputer wybrał Kamień , Wygrałeś!"); 
        }
        if (computer == 2){
            document.getElementById("wynik").innerHTML = ("Komputer wybrał Papier , Remis!"); 
        }
        if (computer == 3){
            document.getElementById("wynik").innerHTML = ("Komputer wybrał Nożyce , Przegrałeś!"); 
        }
}
function onclick3(){
    let computer = Math.ceil(Math.random() * 3);
        if (computer == 1){
            document.getElementById("wynik").innerHTML = ("Komputer wybrał Kamień , Przegrałeś!"); 
        }
        if (computer == 2){
            document.getElementById("wynik").innerHTML = ("Komputer wybrał Papier , Wygrałeś!"); 
        }
        if (computer == 3){
            document.getElementById("wynik").innerHTML = ("Komputer wybrał Nożyce , Remis!"); 
        }
}
