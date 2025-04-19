reviewObjects = [
    {
        "enName": "Welcome to the N.H.K", 
        "jpName": "NHK ni Youkoso", 
        "jacket":  "welcome to the NHK/jacket.png",
        "inside": "welcome to the NHK/inside.png",
    },

    {
        "enName": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability",
        "jpName": "Tensei Shitara Dai Nana Ōji Datta no de, Kimama ni Majutsu o Kiwamemasu", 
        "jacket":  "I was reincarnated as the 7th Prince/I was Reincarnated as the 7th Prince.jpg",
        "inside": "I was reincarnated as the 7th Prince/Page 2.jpg",
    },

    {
        "enName": "", 
        "jpName": "", 
        "jacket":  "",
        "inside": "",
    }

]

function addRow(tableID, review) {
    // Get a reference to the table
    let tableRef = document.getElementById(tableID);
  
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
  
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
    let inside = new Image();
    inside.src = review.inside;

    cellEnName.appendChild(enName);
    cellJpName.appendChild(jpName);
    cellJacket.appendChild(jacket);
    cellInside.appendChild(inside);
        
  }



addRow("reviewTable", reviewObjects[0]);


