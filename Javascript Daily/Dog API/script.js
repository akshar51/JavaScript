let breed = document.getElementById("breed");
let dogImg = document.getElementById("dogImg");

fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        let breedList = Object.keys(data.message)
        breedList.forEach((val)=>{
            let option = document.createElement("option");
            option.value = val;
            option.textContent = val;
            breed.append(option);
        })
    })
    .catch((err)=>{
        console.log(err)
    })



const displayImg = ()=>{
    let selectBreed = document.getElementById("breed").value;
    fetch(`https://dog.ceo/api/breed/${selectBreed}/images/random`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        dogImg.src = data.message
        
    })
    .catch((err)=>{
        console.log(err)
    })
}
