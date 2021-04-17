console.log("Thk Chal Rha hai Bhai");
ShowCard();
let Doc = document.getElementById("AddBtn");
console.log(Doc);

Doc.addEventListener("click", function (e) {
    let Addtxt = document.getElementById("addTxt");
    let Addtitle = document.getElementById("addTitle");
    console.log(Addtitle);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else { 
        notesobj = JSON.parse(notes);
    }
    let Content = Addtxt.value + "." + Addtitle.value;
    notesobj.push(Content);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    Addtxt.value = "";
    Addtitle.value = "";
    console.log(notesobj);
    ShowCard();
})

function ShowCard() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let Html = '';
    notesobj.forEach(function (element, index) {
        Html += `
        <div class="cardnote" style="width: 18rem; margin: 30px 10px;">
        <div class="card-body">
        <h5 class="card-title">${element.split(".")[1]}</h5>
        <p class="card-text">${element.split(".")[0]}</p>
        <button id="${index}"onclick="Delete(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
    </div>
        `
    });

    let Temp = document.getElementById("notes");
    if (notesobj.length != 0) {
        Temp.innerHTML = Html;
    }
    else {
        Temp.innerHTML = `Nothing in LocalStorage "Use Add Note" For Add notes`;
    }
}


// function toDeleteNode
function Delete(index) {
    console.log("I Am Deleting" + index + 1);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    ShowCard()
}

search = document.getElementById("searchtxt");
search.addEventListener("input", function (e) {

    val = search.value.toLowerCase();

    // console.log("Searching "+ val);
    let NoteCard = document.getElementsByClassName("cardnote");
    Array.from(NoteCard).forEach(function (ele) {
        let cardtext = ele.getElementsByClassName("card-text")[0].innerText;
        console.log(cardtext);
        if (cardtext.includes(val)) {
            ele.style.display = "block";
        }
        else {
            ele.style.display = "none";
        }

    })

    console.log(NoteCard[0]);
})