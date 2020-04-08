// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything(event) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons(event);
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMsh) => {
    if (state.mushrooms) {
      oneMsh.style.visibility = "visible";
    } else {
      oneMsh.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGp) => {
    if (state.greenPeppers) {
      oneGp.style.visibility = "visible";
    } else {
      oneGp.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  var sauce = document.querySelector(".sauce, .sauce-white");
  if (state.whiteSauce) {
    sauce.className = "sauce sauce-white";
  } else {
    sauce.className = "sauce";
  }
}

function renderGlutenFreeCrust() {
  var crust = document.querySelector(".crust, .crust-gluten-free");
  if (state.glutenFreeCrust) {
    crust.className = "crust crust-gluten-free";
  } else {
    crust.className = "crust";
  }
}

function renderButtons(event) {
  if (event) {
    const target = event.currentTarget;
    if (target.classList.contains("active")) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }
  }
}

function renderPrice() {
  const liparent = document.querySelector("#ingredients");
  liparent.innerHTML = "";
  let subtotal = basePrice;
  for (let ingr in ingredients) {
    if (state[ingr]) {
      let newLi = document.createElement("li");
      newLi.innerHTML = `$ ${ingredients[ingr].price} ${ingredients[ingr].name}`;
      liparent.appendChild(newLi);
      subtotal += ingredients[ingr].price;
    }
  }
  let totalPrice = document.querySelector("strong");
  totalPrice.innerHTML = `$ ${subtotal} `;
}

function createListElement() {}

function removeListElement() {}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector(".btn.btn-pepperoni")
  .addEventListener("click", (event) => {
    state.pepperoni = !state.pepperoni;
    renderEverything(event);
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector(".btn.btn-mushrooms")
  .addEventListener("click", (event) => {
    state.mushrooms = !state.mushrooms;
    renderEverything(event);
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", (event) => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything(event);
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", (event) => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything(event);
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", (event) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(event);
});
