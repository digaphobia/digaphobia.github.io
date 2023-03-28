//select output div
const outputDiv = document.getElementById("output");

//function to create html elements dynamically
function createElement(elementType, className, textContent, tooltip) {
const element = document.createElement(elementType);
element.classList.add(className);
element.textContent = textContent;
if (tooltip) {
element.setAttribute("title", tooltip);
}
return element;
}

//function to create category html dynamically
function createCategory(category) {
const categoryDiv = document.createElement("div");
categoryDiv.classList.add("category-container");
const categoryTitle = createElement("h2", "category-title", category.categoryname);
const categoryDefinition = createElement("p", "category-definition", category.categorydefinition);
categoryDiv.appendChild(categoryTitle);
categoryDiv.appendChild(categoryDefinition);
category.categoryelements.forEach((element) => {
const elementDiv = document.createElement("div");
elementDiv.classList.add("elementcontainer");
const elementCheckbox = createElement("input", "element-checkbox", null, element.elementtooltip);
elementCheckbox.setAttribute("type", "checkbox");
elementCheckbox.setAttribute("value", element.value);
elementCheckbox.setAttribute("name", element.groupname);
if (element.checkbox) {
elementDiv.appendChild(elementCheckbox);
}
const elementRadio = createElement("input", "element-radio", null, element.elementtooltip);
elementRadio.setAttribute("type", "radio");
elementRadio.setAttribute("value", element.value);
elementRadio.setAttribute("name", element.groupname);
if (element.radio) {
elementDiv.appendChild(elementRadio);
}
const elementLabel = createElement("label", "element-label", `${element.categoryelement}`, element.elementtooltip);
elementLabel.setAttribute("for", elementCheckbox.id);
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