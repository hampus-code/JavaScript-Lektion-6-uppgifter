function changeHeaderStyle() {
    document.getElementById("header-style").style.color = "blue" //Ändrar färg på h1
    document.getElementById("header-style").style.border = "thick solid red" // Ger en border runt h1
}

function varItems() {

    var wholenumber = 2;

    var decimalnumber = 0.7;

    var varText = " A Text Variable "

    var boolean = true /*Jag tolkade detta som att jag bara skulle skapa en
    boolean var som var sann eller falsk men vet ej om det är rätt tolkat*/

    alert(wholenumber + decimalnumber + varText + boolean)
}

function arrays() {

    var score = [10, 27, "Howdy", 96, 58, "An array text"]

    alert(score[5])
    
}

/* Försök till att lösa Tough Nut uppgifterna */

function userInformation() {

    var userName = prompt("Please type in your username")

    alert(userName) //Vet inte om jag förstod denna rätt men det var såhär jag tolkade den.
    //Känns dock lite för enkelt för att vara detta men det är detta jag kan tolka just nu
}