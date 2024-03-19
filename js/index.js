import { groceriesItem } from "../js/groceriesItem.mjs";

function displayItem() {
  var cigaretes = document.getElementById("cigaretes");
  var groceries = document.getElementById("groceries");
  var snack = document.getElementById("snack");
  var drink = document.getElementById("drink");

  const cigaretesData = groceriesItem.filter(
    (item) => item.category == "cigaretes"
  );
  const groceriesData = groceriesItem.filter(
    (item) => item.category == "groceries"
  );
  const snackData = groceriesItem.filter((item) => item.category == "snack");
  const drinkData = groceriesItem.filter((item) => item.category == "drink");

  cigaretesData.map((item) => {
    var cardItem = document.createElement("div");
    cardItem.setAttribute("id", "card-item");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = " Rp " + item.price;

    cardItem.appendChild(cardTop);
    cardItem.appendChild(img);
    cardItem.appendChild(itemName);
    cardItem.appendChild(itemPrice);

    cigaretes.appendChild(cardItem);
  });

  groceriesData.map((item) => {
    var cardItem = document.createElement("div");
    cardItem.setAttribute("id", "card-item");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = " Rp " + item.price;

    cardItem.appendChild(cardTop);
    cardItem.appendChild(img);
    cardItem.appendChild(itemName);
    cardItem.appendChild(itemPrice);

    groceries.appendChild(cardItem);
  });

  snackData.map((item) => {
    var cardItem = document.createElement("div");
    cardItem.setAttribute("id", "card-item");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = " Rp " + item.price;

    cardItem.appendChild(cardTop);
    cardItem.appendChild(img);
    cardItem.appendChild(itemName);
    cardItem.appendChild(itemPrice);

    snack.appendChild(cardItem);
  });

  drinkData.map((item) => {
    var cardItem = document.createElement("div");
    cardItem.setAttribute("id", "card-item");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = " Rp " + item.price;

    cardItem.appendChild(cardTop);
    cardItem.appendChild(img);
    cardItem.appendChild(itemName);
    cardItem.appendChild(itemPrice);

    drink.appendChild(cardItem);
  });
}
displayItem();

const needLIst = [
  ...new Map(groceriesItem.map((item) => [item["category"], item])).values(),
];
console.log(needLIst);

function selectGroceries() {
  var categoryList = document.getElementById("category-list");

  needLIst.map((item) => {
    console.log(item);

    var listGroceries = document.createElement("div");
    listGroceries.setAttribute("class", "list-groceries");

    var listimg = document.createElement("img");
    listimg.src = item.img;

    var listName = document.createElement("a");
    listName.setAttribute("class", "list-name");
    listName.setAttribute("href", "#" + item.category);
    listName.innerText = item.category;

    listGroceries.appendChild(listimg);
    listGroceries.appendChild(listName);

    var clonelistGroceries = listGroceries.cloneNode(true);
    categoryList.appendChild(listGroceries);
    document.querySelector(".category-header").appendChild(clonelistGroceries);
  });
}
selectGroceries();

document.querySelectorAll(".add-to-cart").forEach((item) => {
  item.addEventListener("click", addToCart);
});

var cartData = [];
function addToCart() {
  var itemtoAdd = this.parentNode.nextSibling.nextSibling.innerText;
  var itemObj = groceriesItem.find((Element) => Element.name == itemtoAdd);

  var index = cartData.indexOf(itemObj);
  if (index === -1) {
    document.getElementById(itemObj.id).classList.add("toggle-heart");
    cartData = [...cartData, itemObj];
  } else if (index > -1) {
    alert("Added To Cart!");
  }

  document.getElementById("cart-plus").innerText =
    " " + cartData.length + " items";
  document.getElementById("m-cart-plus").innerText = " " + cartData.length;
  cartItem();
  totalAmount();
}

function cartItem() {
  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = " ";

  cartData.map((item) => {
    var tableRow = document.createElement("tr");

    var rowData1 = document.createElement("td");
    var img = document.createElement("img");
    img.src = item.img;
    rowData1.appendChild(img);

    var rowData2 = document.createElement("td");
    rowData2.innerText = item.name;

    var rowData3 = document.createElement("td");
    var btn1 = document.createElement("button");
    btn1.setAttribute("class", "decrease-item");
    btn1.innerText = "-";
    var span = document.createElement("span");
    span.innerText = item.quantity;
    var btn2 = document.createElement("button");
    btn2.setAttribute("class", "increase-item");
    btn2.innerText = "+";

    rowData3.appendChild(btn1);
    rowData3.appendChild(span);
    rowData3.appendChild(btn2);

    var rowData4 = document.createElement("td");
    rowData4.innerText = item.price;

    tableRow.appendChild(rowData1);
    tableRow.appendChild(rowData2);
    tableRow.appendChild(rowData3);
    tableRow.appendChild(rowData4);

    tableBody.appendChild(tableRow);
  });

  document.querySelectorAll(".decrease-item").forEach((item) => {
    item.addEventListener("click", decrementItem);
  });

  document.querySelectorAll(".increase-item").forEach((item) => {
    item.addEventListener("click", incrementItem);
  });
}

function incrementItem() {
  let itemToInc = this.parentNode.previousSibling.innerText;
  console.log(itemToInc);
  var incObj = cartData.find((element) => element.name == itemToInc);
  incObj.quantity += 1;

  currPrice =
    (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
    (incObj.quantity - 1);
  incObj.price = currPrice * incObj.quantity;
  totalAmount();
  cartItem();
}

var currPrice = 0;
function decrementItem() {
  let itemToInc = this.parentNode.previousSibling.innerText;
  let decObj = cartData.find((element) => element.name == itemToInc);
  let ind = cartData.indexOf(decObj);
  if (decObj.quantity > 1) {
    currPrice =
      (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) /
      decObj.quantity;
    decObj.quantity -= 1;
    decObj.price = currPrice * decObj.quantity;
  } else {
    document.getElementById(decObj.id).classList.remove("toggle-heart");
    cartData.splice(ind, 1);
    document.getElementById("cart-plus").innerText =
      " " + cartData.length + " items";
    document.getElementById("m-cart-plus").innerText = " " + cartData.length;
    if (cartData.length < 1 && flag) {
      document
        .getElementById("groceries-item")
        .classList.toggle("groceries-item");
      document
        .getElementById("category-list")
        .classList.toggle("groceries-item");
      document.getElementById("m-cart-plus").classList.toggle("m-cart-plus");
      document.getElementById("cart-page").classList.toggle("cart-toggle");
      document
        .getElementById("category-header")
        .classList.toggle("toggle-category");
      document.getElementById("chekout").classList.toggle("cart-toggle");
      flag = false;
      alert("Curently no item in cart!");
      console.log(flag);
    }
  }
  totalAmount();
  cartItem();
}

function totalAmount() {
  var sum = 0;
  cartData.map((item) => {
    sum += item.price;
  });
  document.getElementById("total-item").innerText =
    "Total Item : " + cartData.length;
  document.getElementById("total-price").innerText = "Total Price : Rp " + sum;
  document.getElementById("m-total-amount").innerText =
    "Total Price : Rp" + sum;
}

document.getElementById("cart-plus").addEventListener("click", cartToggle);
document.getElementById("m-cart-plus").addEventListener("click", cartToggle);

var flag = false;
function cartToggle() {
  if (cartData.length > 0) {
    document
      .getElementById("groceries-item")
      .classList.toggle("groceries-item");
    document.getElementById("category-list").classList.toggle("groceries-item");
    document
      .getElementById("category-header")
      .classList.toggle("toggle-category");
    document.getElementById("m-cart-plus").classList.toggle("m-cart-toggle");
    document.getElementById("cart-page").classList.toggle("cart-toggle");
    document.getElementById("chekout").classList.toggle("cart-toggle");
    flag = true;
    console.log(flag);
  } else {
    alert("Curently no item in cart !");
  }
}

function addEvents() {
  document.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCart);
  });
  document.querySelectorAll(".decrease-item").forEach((item) => {
    item.addEventListener("click", decrementItem);
  });
  document.querySelectorAll(".increase-item").forEach((item) => {
    item.addEventListener("click", incrementItem);
  });
}

window.onresize = window.onload = function () {
  var size = window.screen.width;
  if (size < 800) {
    var cloneGroceriesItems = document
      .getElementById("groceries-item")
      .cloneNode(true);
    var cloneCartPage = document.getElementById("cart-page").cloneNode(true);
    document.getElementById("groceries-item").remove();
    document.getElementById("cart-page").remove();
    document.getElementById("category-header").after(cloneGroceriesItems);
    document.getElementById("groceries-item").after(cloneCartPage);
    addEvents();
  }

  if (size > 800) {
    var cloneGroceriesItems = document
      .getElementById("groceries-item")
      .cloneNode(true);
    document.getElementById("groceries-item").remove();
    document.getElementById("header").after(cloneGroceriesItems);

    var cloneCartPage = document.getElementById("cart-page").cloneNode(true);
    document.getElementById("cart-page").remove();
    document.getElementById("groceries-item").after(cloneCartPage);
    addEvents();
  }
};

document.getElementById("add-address").addEventListener("click", addAddress);
document.getElementById("m-add-address").addEventListener("click", addAddress);
function addAddress() {
  var address = prompt("Enter Your Address", "");
  if (address) {
    document.getElementById("add-address").innerText = " " + address;
  } else {
    alert("Address not added");
  }
}
