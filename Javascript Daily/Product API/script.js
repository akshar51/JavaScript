let root = document.getElementById("root");
let searchBtn = document.getElementById("searchBtn")


const displayProduct = async ()=>{
    let url = await fetch(`https://fakestoreapi.com/products`);
    let data = await url.json();
    root.innerHTML = "";
    data.forEach((product)=>{
        let {image,title,description,price} = product;
        let div = document.createElement("div");
        div.className = "col-md-3";
        div.innerHTML = 
        `
         <div class="card h-100 shadow-sm">
        <img src="${image}" class="card-img-top p-3" alt="${product.title}" style="height: 200px; object-fit: contain;" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${title}</h5>
          <p class="card-text text-truncate">${description}</p>
          <div class="mt-auto">
             <span class="badge bg-success p-3">$${price}</span>
          </div>
        </div>
      </div>
        `
        root.append(div)
    })
}
searchBtn.addEventListener("click",()=>{
    if(searchInput.value.trim() == searchBtn.value){
        
    }
    displayProduct()
})
displayProduct()