import propertyForSaleArr from "./properties/propertyForSaleArr.js";
import placeholderPropertyObj from "./properties/placeholderPropertyObj.js";

function getPropertyHtml(properties = [placeholderPropertyObj]) {
  return properties
    .map(({ propertyLocation, priceGBP, roomsM2, comment, image }) => {
      const totalSize = roomsM2.reduce((sum, current) => sum + current, 0);
      return `<section class="card">
  <img src="/images/${image}">
  <div class="card-right">
    <h2>${propertyLocation}</h2>
    <h3>£${priceGBP.toLocaleString()}</h3>
    <p>${comment}</p>
    <h3>${totalSize} m&sup2;</h3>
  </div>
</section>`;
    })
    .join("");
}

document.getElementById("container").innerHTML =
  getPropertyHtml(propertyForSaleArr);
