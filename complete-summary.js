//function to create UBB code
function createUBBCode(ubbtitle, ubbcategories) {
 let ubbCode = `[b]${ubbtitle}[/b]\n\n`;

 categories.forEach((ubbcategory) => {
  ubbCode += `[h3]${ubbcategory.categoryname}[/h3]\n`;
  ubbCode += `${ubbcategory.categorydefinition}\n`;
  ubbCode += `[list]\n`;

  ubbcategory.categoryelements.forEach((element) => {
   ubbCode += `[*]${element.categoryelement}\n  →${element.elementtooltip}\n`;
  });

  ubbCode += `[/list]\n\n`;
 });

 return ubbCode;
}

//function to copy text to clipboard
function copyToClipboard(text) {
 const tempInput = document.createElement("textarea");
 tempInput.value = text;
 document.body.appendChild(tempInput);
 tempInput.select();
 document.execCommand("copy");
 document.body.removeChild(tempInput);
}

//add click event listener to button
const completeSummaryButton = document.getElementById("complete-summary");
completeSummaryButton.addEventListener("click", () => {
 const outputDiv = document.querySelector(".header-box");
 const ubbtitle = outputDiv.querySelector("h1").textContent;
 const categories = Array.from(outputDiv.querySelectorAll(".category-container")).map((categoryDiv) => {
  const ubbcategory = {};
  ubbcategory.categoryname = categoryDiv.querySelector(".category-title").textContent;
  ubbcategory.categorydefinition = categoryDiv.querySelector(".category-definition").textContent;
  ubbcategory.categoryelements = Array.from(categoryDiv.querySelectorAll(".elementcontainer")).map((elementDiv) => {
   const element = {};
   element.categoryelement = elementDiv.querySelector(".element-label").textContent;
   element.elementtooltip = elementDiv.querySelector(".element-checkbox, .element-radio").getAttribute("ubbtitle");
   return element;
  });
  return ubbcategory;
 });
 const ubbCode = createUBBCode(ubbtitle, categories);
 copyToClipboard(ubbCode);
});
