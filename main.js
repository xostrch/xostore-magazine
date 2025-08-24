const products =[
    {name: "Nike Jordan 1", price: 200, quantity: 92},
    {name: "Nike Jordan 4", price: 250, quantity: 47},
    {name: "Adidas Campus 00s", price: 120,quantity: 98}
]

const tableProducts = document.getElementById("productsTable");

function showTab(products){

const row = document.createElement("tr");
row.innerHTML = `
        <td>${products.name}</td>
        <td>${products.price}</td>
        <td>${products.quantity}</td>
        <td><button class="table-delete-button">Remove</button></td>
    `;

    row.querySelector(".table-delete-button").addEventListener("click", () => {
        row.remove();
    })

    tableProducts.appendChild(row);
}

products.forEach(showTab);

function addProduct(){
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productQuantity = document.getElementById("productQuantity").value;

    const newProduct = {name: productName, price: productPrice, quantity: productQuantity};

    document.getElementById("productName").value = ""
    document.getElementById("productPrice").value = "";
    document.getElementById("productQuantity").value = "";

    if(productName=="" || productPrice=="" || productQuantity=="")
    {
        alert("error");
    }
    else
    {
        products.push(newProduct);
        showTab(newProduct)
    }
}



