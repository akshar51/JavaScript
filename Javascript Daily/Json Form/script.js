let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");
let tableRow = document.querySelector("#table tbody");
let updateBtn = document.getElementById("updateBtn")
let dataStore = [];
let editIdx = -1;
username.focus();

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj ={
        username : username.value,
        password : password.value
    }
    if(editIdx == -1){
        dataStore.push(obj);
    }
    else{
        dataStore[editIdx]=obj;
        editIdx = -1;
        updateBtn.innerText = "Register";
        updateBtn.classList.add("btn-success")
        updateBtn.classList.remove("btn-primary")

    }
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
         <td><button class="btn btn-warning px-3 me-2"  onclick="editData(${idx})">Edit</button>
             <button class="btn btn-danger" onclick="deleteData(${idx})">Delete</button>
         </td>
        `
        tableRow.append(row);
    })
}
displayData();

let deleteData = (idx)=>{
    dataStore.splice(idx,1);
    displayData();
}

let editData = (idx)=>{
    username.value = dataStore[idx].username;
    password.value = dataStore[idx].password;
    editIdx = idx;
    updateBtn.innerText = "Update";
    updateBtn.classList.remove("btn-success")
    updateBtn.classList.add("btn-primary")
}