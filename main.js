const products =[
    {name: "Nike Jordan 1", price: 200, quantity: 92},
    {name: "Nike Jordan 4", price: 250, quantity: 47},
    {name: "Adidas Campus 00s", price: 120, quantity: 98},
    {name: "Champion T-Shirt", price: 50, quantity: 12},
    {name: "Nike Air Force 1", price: 130, quantity: 76},
    {name: "Nike Dunk Low", price: 150, quantity: 65},
    {name: "Adidas Samba", price: 110, quantity: 84},
    {name: "Adidas Yeezy Boost 350", price: 300, quantity: 23},
    {name: "New Balance 550", price: 140, quantity: 54},
    {name: "New Balance 990v5", price: 190, quantity: 31},
    {name: "Puma Suede Classic", price: 90, quantity: 62},
    {name: "Reebok Club C 85", price: 95, quantity: 0},
    {name: "Converse Chuck Taylor", price: 70, quantity: 0},
    {name: "Vans Old Skool", price: 75, quantity: 73},
    {name: "Nike Tech Fleece Hoodie", price: 120, quantity: 34},
    {name: "Adidas Originals Hoodie", price: 100, quantity: 41},
    {name: "Champion Hoodie", price: 85, quantity: 27},
    {name: "Supreme Box Logo Tee", price: 180, quantity: 5},
    {name: "Stüssy Graphic Tee", price: 60, quantity: 38},
    {name: "Nike Sportswear Shorts", price: 55, quantity: 44},
    {name: "Adidas Track Pants", price: 70, quantity: 36},
    {name: "Carhartt WIP Cargo Pants", price: 120, quantity: 0},
    {name: "Nike Cap", price: 35, quantity: 59},
    {name: "Adidas Backpack", price: 65, quantity: 19},
    {name: "The North Face Jacket", price: 220, quantity: 14}
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

function renderProducts() {

    tableProducts.innerHTML = 
                        `<tr>
                            <th class="th-name">Name</th>
                            <th class="th-price">Price</th>
                            <th class="th-quantity">Quantity</th>
                            <th class="th-quantity"></th>
                        </tr>`;

    products.forEach(showTab);
}


function sortBy(){

    const value = document.getElementById("selectSort").value;

    switch (value){
        case "sort-desc":
            products.sort((a,b) => b.price - a.price);
            break;
        case "sort-asc":
            products.sort((a,b) => a.price - b.price);
            break;
        case "sort-quantity":
            products.sort((a,b) => b.quantity - a.quantity);
            break;
        case "sort-random":
            products.sort(() => Math.random() - 0.5);
            break;
    }

    renderProducts();
    
}

function checkboxSort() {
    const checkboxOutOfStock = document.getElementById("checkboxOutOfStock");
    
    if (checkboxOutOfStock.checked) {
        const outOfStockProducts = products.filter(p => p.quantity === 0);
        renderProductsChecbox(outOfStockProducts);
    } else {
        renderProducts(products); // jeśli checkbox nie jest zaznaczony, pokaż wszystkie
    }
}

function renderProductsChecbox(list) {

    tableProducts.innerHTML = 
                        `<tr>
                            <th class="th-name">Name</th>
                            <th class="th-price">Price</th>
                            <th class="th-quantity">Quantity</th>
                            <th class="th-quantity"></th>
                        </tr>`;

    list.forEach(showTab);
}

