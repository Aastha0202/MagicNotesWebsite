shownotes();
    // function to add notes in local-storage
    let addbtn = document.getElementById('Addbtn');
    addbtn.addEventListener('click', function addnotes(e) {
        let addtitle=document.getElementById("addTitle");
        let addtxt = document.getElementById('addTxt');
        let notes = localStorage.getItem('notes');
            if (notes == null) {
                notesObj = []; // create array of local storage item
            }
            else {
                notesObj = JSON.parse(notes);
            }
            let obj={
                title:addtitle.value,
                txt:addtxt.value,
            }
        notesObj.push(obj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addtitle.value="";
        addtxt.value = "";
        // console.log(notesObj);
        shownotes();
    })
    // function to show notes in the D.O.M 
    function shownotes() {
        let notes = localStorage.getItem('notes');
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        let html = "";
        notesObj.forEach(function (element, index) {
            if(element.title===undefined || element.txt===undefined){
                alert('please enter the details !!!! ');
            }
            else{
            html += `
        <div class="card2">
                <h5 class="card-tittle2">${element.title} </h5>
                    <p>${element.txt}</p>
                    <button onclick="deleteNotes(this.id)" class="btn3 btn" id="${index}">Delete</button>
            </div> 
        `;
        }

        });
        let noteselm = document.getElementById('notes');
        if (notesObj.length != 0) {
            noteselm.innerHTML = html;
        }
        else {
            noteselm.innerHTML = ` Nothing to show! Use "Add note" section to add notes`
        }
    }
    // show important Notes 
    function showimportant(){

    }
    function deleteNotes(index) {
        let notes = localStorage.getItem('notes');
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        shownotes();


    }
    let searchcn=document.getElementById("searchcn");
    searchcn.addEventListener('input',function(){
        let inputval=searchcn.value;
        let noteclass=document.getElementsByClassName("card2")
        Array.from(noteclass).forEach(function(element){
            let cardtitle=element.getElementsByTagName("h5")[0].innerText;
            let cardTxt=element.getElementsByTagName("p")[0].innerText;
            if(cardTxt.includes(inputval)){
                element.style.display="block";
            }
            else if(cardtitle.includes(inputval)){
                element.style.display="block";
            }
            else{
                element.style.display="none";
            }

        })
    })
    let clearbtn=document.getElementById("clearbtn");
    clearbtn.addEventListener("click",function(){
        localStorage.clear();
    })