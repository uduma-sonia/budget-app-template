const itemName = document.querySelector("#item");
const itemPrice = document.querySelector("#price");
const budget = document.querySelector("#budget");
const submitBtn = document.querySelector(".submit");
const listContainer = document.querySelector("#list-container");
let list = [];
let price = [];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const itemValue = itemName.value;
  const PriceValue = parseInt(itemPrice.value);

  list.push(itemValue);
  price.push(PriceValue);

  display();
  console.log(typeof PriceValue);
  itemPrice.value = "";
});

function display() {
  listContainer.innerHTML = "";
  for (var i = 0; i < list.length && i < price.length; i++) {
    listContainer.innerHTML += `
        <li>${list[i]} ${price[i]}</li>
        `;
  }
}

function sumUp() {
  const priceSum = price.reduce((a, b) => a + b, 0);
  const budgetValue = parseInt(budget.value);

  console.log(priceSum);

  if (priceSum <= budgetValue) {
    console.log("you have enough money");
  } else {
    console.log("your money is not enough");
  }
}
