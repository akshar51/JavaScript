let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");
let tableRow = document.querySelector("#table tbody");
let dataStore = [];
username.focus();

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj ={
        username : username.value,
        password : password.value
    }
    dataStore.push(obj);
    username.value = "";
    password.value = "";
    username.focus();
    displayData();
})

function displayData(){
    tableRow.innerHTML = "";
    dataStore.map((data,idx)=>{
        let row = document.createElement("tr");
        row.innerHTML = 
        `<td>${idx+1}</td>
         <td>${data.username}</td>
         <td>${data.password}</td>
        `
        tableRow.append(row);
    })
}
displayData();