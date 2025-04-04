let data = [];
let form = document.getElementById("form");
let p_name = document.getElementById("p_name");
let price = document.getElementById("price");
let table = document.querySelector("#table tbody")
p_name.focus()
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let obj = {
        p_name : p_name.value,
        price : price.value
    }

    data.push(obj);
    p_name.value = "";
    price.value="";
    p_name.focus()
    display();
})

const display=()=>{

    data.map((val,idx)=>{
        let tr = document.createElement("tr")
        tr.innerHTML = 
        `
        <td>${idx+1}</td>
        <td>${val.p_name}</td>
        <td>${val.price}</td>
        <td></td>
        <td>
            <button class="btn btn-success" onclick="addTocart()">Add to cart</button>
        </td>
        `
        table.appendChild(tr)
    })
}
display()

const addTocart = ()=>{

}