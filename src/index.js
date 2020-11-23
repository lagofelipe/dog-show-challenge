const dogsUrl =  "http://localhost:3000/dogs";


//once document loads
//1
document.addEventListener('DOMContentLoaded', function(e) {
   fetchDogsUrl();
submitEditedForm();
});


//fetch dogs url 
//2
function fetchAllDogs(){
 fetch(dogsUrl)
.then(res => res.json())
.then(data => renderAllDogs(data))
};


function renderAllDogs (data){
const tableBody = document.getElementByID('table-body');

data.forEach(dog => {

    const tr = document.createElement('tr');
    tr.id = dog.id;

    const dogName = document.createElement('td');
    const dogBreed = document.createElement('td');
    const dogSex = document.createElement('td');
    const editBtncontainer = document.createElement('td');
    const editBtn = document.createElement('button');

    dogName.innerText = dog.name;
    dogBreed.innerText = dog.breed;
    dogSex.innerText = dog.sex;
    editBtn.innerText = 'Edit Dog';

    editBtn.classList.add('edit-btn')
    dogName.id = 'name';
    dogBreed.id = 'breed';
    dogSex.id = 'sex';

    editBtncontainer.appendChild(editBtn);
    tr.appendChild(dogName);
    tr.appendChild(dogBreed);
    tr.appendChild(dogSex);
    tr.appendChild(editBtncontainer);

    tableBody.appendChild('tr');
    editBtnListener(editBtn);
})
};

function editBtnListener(button){
const form = document.getElementById('dog-form')

button.addEventListener('click', (event) => {
    const tableRow = event.target.parentNode.parentNode.children;
    const name = tableRow.name;
    const breed = tableRow.breed;
    const sex = tableRow.sex;

    form.name.value = name.innerText;
    form.breed.value = breed.innerText;
    form.sex.value = sex.innerText;
    form.onsubmit.id = `${event.target.parentNode.parentNode.id}`;

    submitEditedForm(tableRow);
})
};

function submitEditedForm(tableRow){
const form = document.getElementById('dog-form');

form.addEventListener('submit',(event) =>{
fetch(dogUrl + `/${form.submit.id}`, {
    method:  'PATCH',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        name: form.name.value,
        breed: form.breed.value,
        sex: form.sex.value
    })
})
.then(res => res.json())
.then(data => renderAllDogs)

});
};






//once document loads 

//fetch dogs url 


//create values



//appended them


///element should look like 
// <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>
//use string interpolation to grab values from dogs URL to new table

