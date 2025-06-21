const dessertList = fetch("../../product-list-with-cart/data.json");

dessertList
  .then((response) => response.json())
  .then((data) => {
    const list = document.querySelector(".list-container"); //this is the ul
    const template = document.querySelector(".list-item"); //this is the li template
    data.forEach((item) => {
      console.log("item", item.name);
      const clone = template.cloneNode(true);
      template.style.display = "flex"; // Ensure the template is displayed as flex

      clone.querySelector("img.list-image").src = item.image.desktop;
      clone.querySelector(".item-category").textContent = item.category;
      clone.querySelector(".item-name").textContent = item.name;
      clone.querySelector(".item-cost").textContent = `$${item.price}`;

      list.appendChild(clone);
    });
  })
  .catch((err) => {
    console.log("unable to fetch data", +err);
  });
