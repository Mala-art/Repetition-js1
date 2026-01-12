let people = [
  { name: "Anna", age: 25 },
  { name: "Sam", age: 32 },
  { name: "Jim", age: 54 },
  { name: "Hannes", age: 38 },
  { name: "Liv", age: 27 },
];

//Förklaring rader 19-23:
//1.JS hittar input-fältet
//2.JS hittar knappen
//3.JS börjar lyssna efter klick
//4.Jag klickar
//5.Funktionen körs
//6.input.value läses
//7.Värdet skrivs ut i konsolen

let input = document.getElementById("age");
const pressBtn = document.getElementById("info");
pressBtn.addEventListener("click", function () {
  const minAge = Number(input.value);
  const result = people.filter((person) => person.age > minAge);
  renderPeople(result);
});

//Nästa steg:Värdet från inputfältet är text -,
//även om det ser ut som en siffra, det behöver
//jag korrigera se rad 21.
//OBS! Det är INTE konsolen som gör det till text->
//det är inputfältet som alltid leverar text.
//Innan korrigering kommer jämförelser inte att-
// funka.
//Jag måste göra om värdet till en siffra,
//rad 21= const minAge = Number(input.value) =
//gör om värdet i input fältet till en siffra.

//Jämförelse funktionen rad 20-24:
// Notera att det går bra att->
//använda const eftersom det endast betyder:->
//den här variabeln får inte ändras inom samma ->
//körning(jag trodde att det skulle vara let för ->
//att jag ville kunna ändra värdet i input-fältet)->
//men varje gång jag klickar på knappen körs funktionen.
//allt börjar om nästa klick, minAge skapas på nytt.
//"vad står i input just NU?->då skapas en ny minAge
// baserat på det aktuella värdet"
//let hade varit rätt val om samma variabel ska leva
//kvar och ändras flera ggr utan att funktionen ->
//startar om.

function renderPeople(list) {
  result.innerHTML = "";
  list.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${person.name} (${person.age})`;
    result.appendChild(listItem);
  });
}

//Good to know!
//1.person.name + "(" + person.age + ")" ->
//är samma sak som att skriva `${person.name} (${person.age})`;
//2.List är bara ett namn på det ->
//värde som skickas in när funktionen ->
//anropas, det finns inte förrän ->
//funktionen körs.
//3.Result = min filtrerade array
//4.Den skickas in i funktionen
//5.Inne i funktionen kallas den list
//list === result
//6.result.innerHTML=""; =>inga dubletter alltid nytt resultat
//7.listForEach((person)={ =>varje varv är {name, age}
//8.skapar ett <li>, skriver ut namn+ålder lägger <li> i listan ->
//på sidan.

//Kort sammanfattning funktioner och flöde:
//Det börjar med en array(people) som innehåller objekt med namn och
//ålder. När sidan laddas hämtar JavaScript inputfältet och knappen->
//från HTML och kopplar en klick lyssnare till knappen. Ingenting ->
//händer förrän användaren klickar.
//När knappen klickas läses värdet från inputfältet med input.value ->
//Värdet är text och görs därför om till en siffra med Number() ->
//Den siffran används för att filtrera arrayen med filter, så att ->
//bara personer vars ålder är större än den inskrivna siffran blir ->
//kvar. Resultatet av filtreringen sparas i en ny lista.
//Den filtrerade listan skickas sen in i funktionen renderPeople ->
//Funktionen ansvarar endast för DOM: den tömmer listan i HTML ->
//loopar igenom den mottagna listan och skapar ett <li>-element ->
//varje personens namn och ålder och läggs till i listan med ->
//appendChild.
//SAMMANFATTNING:
//Input->klick->läsvärde->gör om till nummer->filtrera data->
//rendera resultat i DOM.
