//konstantera listorna

const breads = [
    {name: "Baguette", price: 7.99},
    {name: "Sourdough bread", price: 8.99},
    {name: "Focaccia", price: 4.55},
];

const sweets = [
    {name: "Cinnamonbun", price: 1.2},
    {name: "Wiener bread", price: 1.8},
    {name: "Carrot cake", price: 1.3},
];

const customs = [
    {name: "Birthday cake", price: 15.9},
    {name: "Graduation cake", price: 17.99},
    {name: "Wedding cake", price: 59.99},
];

const carts = [];

//hämta referenser till de olika listorna mha id 

const breadList = document.getElementById("breadList");

const orderList = document.getElementById("orderList");

const sweetsList = document.getElementById("sweetsList");

const cartList = document.getElementById("cartList");

//hantera alla funktioner

function createBreadsList() {
    for (const bread of breads) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        breadList.appendChild(li);

        const img = document.createElement("img");
        img.src = `../img/${bread.name.toLowerCase()}.jpg`;
        img.alt = bread.name;
        img.classList.add("bread-image");
        li.appendChild(img);
        
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("bread-details");
        
        detailsDiv.innerHTML = `<strong>${bread.name}</strong> - $${bread.price.toFixed(2)}`;
        li.appendChild(detailsDiv);

        const plusBtn = document.createElement("button");
        plusBtn.classList.add("btn", "btn-success", "btn-sm", "float-right");
        plusBtn.innerText = "+";
        plusBtn.dataset.item = JSON.stringify(bread);
        li.appendChild(plusBtn);

        const minusBtn = document.createElement("button");
        minusBtn.classList.add("btn", "btn-danger","btn-sm", "float-right");        
        minusBtn.innerText = "-";
        minusBtn.dataset.item = JSON.stringify(bread); 
        li.appendChild(minusBtn);

        plusBtn.addEventListener('click', function() {
            const itemToAdd = JSON.parse(this.dataset.item);
            carts.push(itemToAdd);
            console.log('Item added to array:', carts);
            updateCartList();
        });

        minusBtn.addEventListener('click', function() {
            const itemToRemove = JSON.parse(this.dataset.item);
            const index = carts.findIndex(item => item.name === itemToRemove.name && item.price === itemToRemove.price);
            
            if (index !== -1) {

            carts.splice(index, 1);
        }

        console.log('Item removed from array:', carts);
        updateCartList();  
        });

    }
}


function createSweetsList() {
    for (const sweet of sweets) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        sweetsList.appendChild(li);

        const img = document.createElement("img");
        img.src = `../img/${sweet.name.toLowerCase()}.jpg`;
        img.alt = sweet.name;
        img.classList.add("sweet-image");
        li.appendChild(img);
        
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("sweet-details");
        
        detailsDiv.innerHTML = `<strong>${sweet.name}</strong> - $${sweet.price.toFixed(2)}`;
        li.appendChild(detailsDiv);

        const plusBtn = document.createElement("button");
        plusBtn.classList.add("btn", "btn-success", "btn-sm", "float-right");
        plusBtn.innerText = "+";
        plusBtn.dataset.item = JSON.stringify(sweet);
        li.appendChild(plusBtn);

        const minusBtn = document.createElement("button");
        minusBtn.classList.add("btn", "btn-danger","btn-sm", "float-right");        
        minusBtn.innerText = "-";
        minusBtn.dataset.item = JSON.stringify(sweet); 
        li.appendChild(minusBtn);

        plusBtn.addEventListener('click', function() {
            const itemToAdd = JSON.parse(this.dataset.item);
            carts.push(itemToAdd);
            console.log('Item added to array:', carts);
            updateCartList();
        });

        minusBtn.addEventListener('click', function() {
            const itemToRemove = JSON.parse(this.dataset.item);
            const index = carts.findIndex(item => item.name === itemToRemove.name && item.price === itemToRemove.price);
            
            if (index !== -1) {

            carts.splice(index, 1);
        }

        console.log('Item removed from array:', carts);
        updateCartList();  
        });

    }
}

function createOrdersList() {
    for (const order of customs) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        orderList.appendChild(li);

        const img = document.createElement("img");
        img.src = `../img/${order.name.toLowerCase()}.jpg`;
        img.alt = order.name;
        img.classList.add("order-image");
        li.appendChild(img);
        
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("order-details");
        
        detailsDiv.innerHTML = `<strong>${order.name}</strong> - $${order.price.toFixed(2)}`;
        li.appendChild(detailsDiv);

        const plusBtn = document.createElement("button");
        plusBtn.classList.add("btn", "btn-success", "btn-sm", "float-right");
        plusBtn.innerText = "+";
        plusBtn.dataset.item = JSON.stringify(order);
        li.appendChild(plusBtn);

        const minusBtn = document.createElement("button");
        minusBtn.classList.add("btn", "btn-danger","btn-sm", "float-right");        
        minusBtn.innerText = "-";
        minusBtn.dataset.item = JSON.stringify(order); 
        li.appendChild(minusBtn);

        plusBtn.addEventListener('click', function() {
            const itemToAdd = JSON.parse(this.dataset.item);
            carts.push(itemToAdd);
            console.log('Item added to array:', carts);
            updateCartList();
        });

        minusBtn.addEventListener('click', function() {
            const itemToRemove = JSON.parse(this.dataset.item);
            const index = carts.findIndex(item => item.name === itemToRemove.name && item.price === itemToRemove.price);
            
            if (index !== -1) {

            carts.splice(index, 1);
        }

        console.log('Item removed from array:', carts);
        updateCartList();  
        });

    }
}

createBreadsList();
createSweetsList();
createOrdersList();

function updateCartList() {
    cartList.innerHTML = "";

    let totalPrice = 0;
    for (const item of carts) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        totalPrice += item.price;
    }

    const totalList = document.createElement("li");
    totalList.classList.add("list-group-item", "font-weight-bold", "text-primary");
    totalList.innerText = `Total: $${totalPrice.toFixed(2)}`;
    cartList.appendChild(totalList);

    const checkOut = document.createElement("button");
    checkOut.classList.add("button");
    checkOut.innerText = "Checkout";
    cartList.appendChild(checkOut);

    checkOut.addEventListener('click', function() {
    console.log("Checkout button clicked!");
    const message = "Thank you for your purchase!";
        alert(message);
    });

}


