const dogsUrl =  "http://localhost:3000/dogs";


//once document loads
//1
document.addEventListener('DOMContentLoaded', function(e) {
   fetchDogsUrl();
});


//fetch dogs url 
//2
function fetchDogsUrl(){
    let table = document.getElementById("table-body")
    fetch(dogsUrl)
  .then(function(response){
      return response.json();
 })
  .then(function(dogData){
  
    for(const dog of dogData){
         #console.log(dog)
     
    let tableRow = document.createElement('tr');
    table.append(tableRow);
    tableRow.innerHTML = `<td> ${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button>Edit</button></td>`
    tableRow.append(editButton)
    



  }
  })
}

//2
// function tableBuilder(name, breed, sex, id){
// const newTable = document.getElementById("table-body")



// }






//once document loads 

//fetch dogs url 


//create values



//appended them


///element should look like 
// <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>
//use string interpolation to grab values from dogs URL to new table

