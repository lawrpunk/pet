const productSectionItems = document.querySelector(".product-section-items");

function addItem(n) {
  // Removing everything
  productSectionItems.innerHTML = "";

  // Creating arrow for the left and right
  const arrowLeft = document.createElement("h1");
  const arrowRight = document.createElement("h1");
  arrowLeft.textContent = "<";
  arrowRight.textContent = ">";
  arrowLeft.classList.add("product-section-arrow-left");
  arrowRight.classList.add("product-section-arrow-right");

  // Appending the arrows to the product section item div
  productSectionItems.appendChild(arrowLeft);
  productSectionItems.appendChild(arrowRight);

  // Loop through as many times it needs to render the items
  for (let i = 0; i < n; i++) {
    // Creating the product section item div
    const productSectionItem = document.createElement("div");
    productSectionItem.classList.add("product-section-item");

    // Creating the image element
    const image = document.createElement("img");
    image.src = "images/item.png";
    image.alt = "item";

    // Creating the button element
    const button = document.createElement("button");
    button.textContent = "Lorem Ipsum";

    // Appending the image and button to the product section item div
    productSectionItem.appendChild(image);
    productSectionItem.appendChild(button);

    // Appending the product section item div to the container
    productSectionItems.appendChild(productSectionItem);
  }
}

function checkScreenSize() {
  // Getting the current screen size width
  const screenWidth = window.innerWidth;

  // Checking if the screen size is lower 768px width then adding just one item
  if (screenWidth > 768) {
    addItem(4);
  } else {
    addItem(1);
  }
}

checkScreenSize();

// Event Listener for checking the screen size
window.addEventListener("resize", checkScreenSize);
