let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");
let tableRow = document.querySelector("#table tbody");
let updateBtn = document.getElementById("updateBtn");
let gender = document.querySelectorAll("input[type='radio']");
let hobby = document.querySelectorAll("input[type ='checkbox']");
let select = document.querySelectorAll("select option");
let dataStore = JSON.parse(localStorage.getItem("user")) || [];
let editIdx = -1;
username.focus();

form.addEventListener("submit",(event)=>{
    event.preventDefault(); 
    let genders = '';
    let hobbyArr = []; 
    let city = [];
    // Gender
    if(gender[0].checked){
       genders = gender[0].value;
       gender[0].checked = false;
    }
    else{
        genders = gender[1].value;
        gender[1].checked = false;
    }

    // Hobby
    for(let i=0;i<hobby.length;i++){
        if(hobby[i].checked){
            hobbyArr.push(hobby[i].value);
        }
    }    

    // Select
    for(let j=1;j<select.length;j++){
        if(select[j].selected){
            city.push(select[j].value);
        }
    }

    let obj ={
        username : username.value,
        password : password.value,
        gender : genders,
        hobby : hobbyArr,
        select : city
    }
    // Data store
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

    localStorage.setItem("user",JSON.stringify(dataStore));
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
         <td>${data.gender}</td>
         <td>${data.hobby}</td>
         <td>${data.select}</td>
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
    localStorage.setItem("user",JSON.stringify(dataStore));
    displayData();
   
}

let editData = (idx)=>{
    let newUser = dataStore.filter((_,index)=>idx==index)[0];
    username.value = newUser.username;
    password.value = newUser.password;
    gender.value = newUser.gender;
    hobby.value = newUser.hobby;
    select.value = newUser.select
    // username.value = dataStore[idx].username;
    // password.value = dataStore[idx].password;
    editIdx = idx;
    updateBtn.innerText = "Update";
    updateBtn.classList.remove("btn-success")
    updateBtn.classList.add("btn-primary")
}