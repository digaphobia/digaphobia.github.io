//select output div
const outputDiv = document.getElementById("output");

//function to create html elements dynamically
function createElement(elementType, className, dataTooltip, textContent) {
 const element = document.createElement(elementType);
 if (className) {
  element.classList.add(className);
 }
 if (dataTooltip) {
  element.setAttribute("data-tooltip", dataTooltip);
 }
 if (textContent) {
  element.textContent = textContent;
 }
 return element;
}

//function to create category html dynamically
function createCategory(category) {
 const categoryDiv = document.createElement("div");
 categoryDiv.classList.add("category-container");
 const categoryTitle = createElement("h2", "category-title", "", category.categoryname);
 const categoryDefinition = createElement("p", "category-definition", "", category.categorydefinition);
 categoryDiv.appendChild(categoryTitle);
 categoryDiv.appendChild(categoryDefinition);
 category.categoryelements.forEach((element) => {
  const elementDiv = document.createElement("div");
  elementDiv.classList.add("elementcontainer");
  const elementInput = createElement("input", element.checkbox ? "element-checkbox" : "element-radio", element.elementtooltip, null);
  elementInput.setAttribute("type", element.checkbox ? "checkbox" : "radio");
  elementInput.setAttribute("value", element.value);
  elementInput.setAttribute("name", element.groupname);
  const elementLabel = createElement("label", "element-label", "", null);
  elementLabel.appendChild(elementInput);
  elementLabel.appendChild(createElement("span", "", element.elementtooltip, element.categoryelement));
  elementDiv.appendChild(elementLabel);
  categoryDiv.appendChild(elementDiv);
 });
 return categoryDiv;
}

//array of categories
const categories = [category1, category2, category3, category4, category5, category6, category7, category8, category9, category10];

//loop through categories and add to output div
categories.forEach((category) => {
 const categoryDiv = createCategory(category);
 outputDiv.appendChild(categoryDiv);
});

$(document).ready(function () {
 $(".elementcontainer, p").hide();
 $(".category-title").click(function () {
  // hide all other categories except the clicked one
  $(".category-title").not($(this)).siblings(".elementcontainer, p").slideUp();
  // toggle the clicked category
  $(this).siblings(".elementcontainer, p").slideToggle();
 });
});
