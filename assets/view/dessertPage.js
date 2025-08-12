const dessertList = fetch("../../product-list-with-cart/data.json");

dessertList
  .then((response) => response.json())
  .then((data) => {
    const list = document.querySelector(".list-container"); //this is the ul
    const template = document.querySelector(".list-item"); //this is the li template
    data.forEach((item) => {
      // console.log("item", item.name);
      const clone = template.cloneNode(true);
      clone.style.display = "flex"; // Ensure the template is displayed as flex

      clone.querySelector("img.list-image").src = item.image.desktop;
      clone.querySelector(".item-category").textContent = item.category;
      clone.querySelector(".item-name").textContent = item.name;
      clone.querySelector(".item-cost").textContent = `$${item.price}`;

      const addOneQuantity = clone.querySelector(".addOneQuantity");
      const removeOneQuantity = clone.querySelector(".removeOneQuantity");

      addOneQuantity.addEventListener("click", () => {
        let itemQuantity = clone.querySelector(".item-quantity");
        let quantity = Number(itemQuantity.textContent);
        if (quantity < 20) {
          quantity = quantity + 1;
        }
        itemQuantity.textContent = quantity;
      });

      removeOneQuantity.addEventListener("click", () => {
        let itemQuantity = clone.querySelector(".item-quantity");
        let quantity = Number(itemQuantity.textContent);
        if (quantity > 0) {
          quantity -= 1;
        }
        itemQuantity.textContent = quantity;
      });

      list.appendChild(clone);
    });
    template.remove();
  })
  .catch((err) => {
    console.log("unable to fetch data", +err);
  });
