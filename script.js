reviewObjects = [
    {
        "enName": "Welcome to the N.H.K", 
        "jpName": "NHK ni Youkoso", 
        "jacket":  "welcome to the NHK/jacket.jpg",
        "inside": "welcome to the NHK/inside.jpg",
    },

    {
        "enName": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability",
        "jpName": "Tensei Shitara Dai Nana Oji Datta no de, Kimama ni Majutsu o Kiwamemasu", 
        "jacket":  "I was reincarnated as the 7th Prince/I was Reincarnated as the 7th Prince.jpg",
        "inside": "I was reincarnated as the 7th Prince/Page 2.jpg",
    },

    {
        "enName": "From the New World", 
        "jpName": "Shin Sekai Yori", 
        "jacket":  "From the New World/From the New World Front.jpg",
        "inside": "From the New World/Page 2.jpg",
    },

    {
        "enName": "Land of the Lustrous", 
        "jpName": "Houseki no Kuni", 
        "jacket":  "Land of the Lustrous/Page 1.jpg",
        "inside": "Land of the Lustrous/Page 2.jpg",
    },

    {
        "enName": "My Instant Death Ability is So Overpowered, No One in This Other World Stands a Chance Against Me!", 
        "jpName": "Sokushi Cheat ga Saikyou sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga", 
        "jacket":  "My instant death ability/my instant death ability.jpg",
        "inside": "My instant death ability/Page 2.jpg",
    },

    {
        "enName": "The Eminence in Shadow", 
        "jpName": "Kage no Jitsuryokusha ni Naritakute!", 
        "jacket":  "The eminence in shadow/Page 1.png",
        "inside": "The eminence in shadow/Page 2.png",
    },

    {
        "enName": "The Dangers in My Heart", 
        "jpName": "Boku no Kokoro no Yabai Yatsu", 
        "jacket":  "The Danger in My Heart/the dangers in my heart 1.jpg",
        "inside": "The Danger in My Heart/the dangers in my heart 2.jpg",
    },

    {
        "enName": "Dark Gathering", 
        "jpName": "Dark Gathering", 
        "jacket":  "Dark Gathering/Front cover dark gathering.jpg",
        "inside": "",
    },
    
    {
        "enName": "Sound of the Sky ", 
        "jpName": "So Ra No Wo To", 
        "jacket":  "Sound of the Sky/sound of the sky.jpg",
        "inside": "Sound of the Sky/Sound of the Sky inside.jpg",
    },

    //keep this entry as a template
    {
        "enName": "", 
        "jpName": "", 
        "jacket":  "",
        "inside": "",
    }

]

function addRow(tableBody, review) {

    // Insert a row at the end of the table
    let newRow = tableBody.insertRow(-1);
    newRow.setAttribute("class", "tableEntry");
  
    // Insert cells
    let cellEnName = newRow.insertCell(0);
    let cellJpName = newRow.insertCell(1);
    let cellJacket = newRow.insertCell(2);
    let cellInside = newRow.insertCell(3);


    // Append a text node to the cell
    let enName = document.createTextNode(review.enName);
    let jpName = document.createTextNode(review.jpName);
    let jacket = new Image();
    jacket.src = review.jacket
    jacket.setAttribute("class", "thumbnail");
    let inside = new Image();
    inside.src = review.inside;
    inside.setAttribute("class", "thumbnail");

    cellEnName.appendChild(enName);
    cellJpName.appendChild(jpName);
    cellJacket.appendChild(jacket);
    cellInside.appendChild(inside);

        
}

function createTable(){
    let table = document.createElement("table");
    table.setAttribute("class", "reviewTable");
    let tableBody = document.createElement("tbody");

    for (let i = 0; i < reviewObjects.length - 2; i++){
        addRow(tableBody, reviewObjects[i]);
    } 

    table.appendChild(tableBody);
    document.body.appendChild(table);

    return table;

}

const table = createTable()
document.body.appendChild(table);

/*
const tb1 = document.createElement("table");
const tb1body = document.createElement("tbody");
const row = document.createElement("tr");
const cell = document.createElement("td");
const cellText = document.createTextNode("hello");
cell.appendChild(cellText);
row.appendChild(cell);
tb1body.appendChild(row);

tb1.appendChild(tb1body);
document.body.appendChild(tb1);
*/

//const newTable = createTable(sect);

//addRow(newTable, reviewObjects[0]);


