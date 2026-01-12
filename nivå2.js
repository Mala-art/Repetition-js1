//En låda som heter names och i den ligger flera strängar (barnens namn)
const names = ["Lilo", "Elba", "Sabi", "Pino", "Ollie", "Bello"];

//Rad 7: hämtar ett element från HTML. "Box" ->
//blir en referens till den här listan i HTML ->
//JS kan nu lägga till, ta bort eller ändra innehållet där.
const box = document.getElementById("box");

//Rad 13: Skapar en funktion/instruktion !!!()!!! ->
//En funktion är en samling instruktioner som körs
//först när vi ber om det.
//function renderNames () gör inget specifikt, den raden säger
//bara: När renderNames körs "gör det här"
function renderNames() {
  //Rad 19: innerHMTL (allt som finns inuti HTML-elementet)
  //""= tomt (betyder, töm listan helt) om man inte gör det
  //renderas namnen/listan om och om igen.Rensar listan så ->
  //att den inte upprepar sig vid klick.
  box.innerHTML = ""; // SYFTE:Rensar listan, så att den inte upprepar sig vid klick

  //forEach är en loop som betyder gör samma sak för varje sak i listan
  //första varvet: name = "Lilo"
  names.forEach((name) => {
    console.log(names);
    //Skapa nytt li (listIten)
    const listItem = document.createElement("li");
    //Lägg in ett namn
    listItem.innerText = name;
    //Stoppa det i ul = förälder (kom ihåg: Stoppa in i)
    box.appendChild(listItem);
  });
}

//förklaring för mig själv för rad 14-32:
//const korg(box) = document.getElementById("box");=<ul id="box"(html)
//const lapp(listItem) = document.createElement("li")"Lilo"=listItem (lappen)
//korg.appendChild(lapp);=Lägg lappen(li) i korgen (box) upprepa
//med nästa namn.
//Kom ihåg, UL=förälder LI=barn APPENDCHILD=Lägg till ett barn inuti föräldern.

//förklaring för mig själv rad 46:
//const pressBtn=document.getElementById("klick"); ->
//betyder hitta knappen som heter "klick" i HTML och kalla den ->
//för pressBtn.
const pressBtn = document.getElementById("klick");
//Förklaring för mig själv rad:
//pressBtn.addEventListerner("click", renderNames); ->
//När någon klickar på knappen, kör funktionen renderNames
pressBtn.addEventListener("click", renderNames);

//Kort sammanfattning:
//pressBtn = namnet på knappen
//addEventListerner = Lyssna efter något (klick)
//renderNames = Kör instruktionerna som skapar listan

//När sidan laddas körs JS uppifrån och ner. Koden letar först upp
//knappen i HTML och sparar den i en variabel. Sen talar den om för
//webbläsaren att lyssna efter ett klick på knappen. Inget händer
//direkt eftersom klicket inte har skett än.
//När användaren klickar på knappen märker JS det och kör funktionen
//som skickades in till addEventListener. Funktionen skapar då nya
//listelement och lägger in dem i listan på sidan.
//=inget händer vid laddning->js väntar->klicket sker->funktionen-
//körs->innehållet syns.
