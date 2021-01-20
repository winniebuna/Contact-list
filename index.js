const nameInput = document.querySelector(".name-input");
const numberInput = document.querySelector(".number-input");
const addBtn = document.querySelector(".add-btn");
const contactItem = document.querySelector(".contact-item");

//EVENT LISTENER
addBtn.addEventListener("click", addContact);
contactItem.addEventListener("click", doneDelete);

//FUNCTIONS
function addContact(event){
    //prevent form from submitting
    event.preventDefault();

    //create the li element
    const nameLi = document.createElement("li");
    const nameContent = document.createTextNode(nameInput.value)
    
    const numberLi = document.createElement("li");
    const numberContent = document.createTextNode(numberInput.value);
    
    //append the content to the li and a class to them
    nameLi.appendChild(nameContent);
    nameLi.classList.add("contact-name")

    numberLi.appendChild(numberContent);
    numberLi.classList.add("contact-number")

    //create done and delete button
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.classList.add("done-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete"
    deleteBtn.classList.add("delete-btn");

    //create div for li
    const liDiv = document.createElement("div");
    liDiv.classList.add("li-div");

    //create div for buttons
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");

    //crate a div for both elements
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-div");

    //append the li to the liDiv
    liDiv.appendChild(nameLi);
    liDiv.appendChild(numberLi);

    //append the buttons to the btnDiv
    btnDiv.appendChild(doneBtn);
    btnDiv.appendChild(deleteBtn);

    //append the divs to the contactDiv
    contactDiv.appendChild(liDiv)
    contactDiv.appendChild(btnDiv)

    //append contsctDiv to the ul
    contactItem.appendChild(contactDiv)

    //clear Input field
    nameInput.value = "";
    numberInput.value = "";

};

function doneDelete(e){
    const item = e.target;
    //Star Contact
    if (item.classList[0] === "done-btn"){
        const contact = item.parentElement;
        const contactDad = contact.parentElement;
        contactDad.classList.toggle("blur");
        
        function toggle(doneBtn){
            if( doneBtn.value == "Done"){
                doneBtn.childNodes[0].nodeValue = "unstar";
            }
            else{
                doneBtn.value = "star";
            }
        }
          
    }
    //Delete Contact
    if (item.classList[0] === "delete-btn"){
        const contact = item.parentElement;
        const contactDad = contact.parentElement;
        contactDad.classList.add("fall");
        //Animation
        contactDad.addEventListener('transitionend', function(){
            contactDad.remove();
        })
    }
        
        
}



