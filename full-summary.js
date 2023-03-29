const button = document.getElementById("full-review-button");

let isModalOpen = false; // initialize flag variable to false

button.addEventListener("click", () => {
 const chartLabel = document.getElementById("chart-label").value;

 if (chartLabel.trim() === "") {
  displayModal("Please enter a game name before generating the text summary.");
  return;
 }

 let summary = "[url=https://steamcommunity.com/groups/beyond0451/]Beyond 0451[/url] summary for [b]" + chartLabel + "[/b]\n\n";

 const categories = document.querySelectorAll(".category-container");
 let checkboxesOrRadiosSelected = false;

 categories.forEach((category) => {
  const categoryTitle = category.querySelector(".category-title").textContent;
  const categoryDefinition = category.querySelector(".category-definition").textContent;

  let checkedElements = "";
  const checkedBoxes = [...category.querySelectorAll('input[type="checkbox"]:checked')];
  checkedBoxes.forEach((checkbox) => {
   checkedElements += `[*]${checkbox.nextSibling.textContent}\n`;
   checkboxesOrRadiosSelected = true;
  });

  const radioGroups = category.querySelectorAll('input[type="radio"]:checked');
  const radioNames = [...new Set(Array.from(radioGroups).map((radio) => radio.name))];
  radioNames.forEach((name) => {
   const radios = category.querySelectorAll(`input[type="radio"][name="${name}"]:checked`);
   if (radios.length > 0) {
    checkedElements += `[*]${radios[0].nextSibling.textContent}\n`;
    checkboxesOrRadiosSelected = true;
   }
  });

  if (checkedElements !== "") {
   summary += `[b]${categoryTitle}[/b]\n${categoryDefinition}\n[list]\n${checkedElements}[/list]\n\n`;
  }
 });

 if (!checkboxesOrRadiosSelected) {
  displayModal("Please fill out the form before generating a text summary.");
  return;
 }

 // check if modal is already open, and return if it is
 if (isModalOpen) {
  return;
 }

 // set flag variable to true since modal is about to open
 isModalOpen = true;

 const modal = document.createElement("div");
 modal.style.position = "fixed";
 modal.style.top = "50%";
 modal.style.left = "50%";
 modal.style.transform = "translate(-50%, -50%)";
 modal.style.zIndex = "9999";
 modal.style.backgroundColor = "black";
 modal.style.padding = "20px";
 modal.style.borderRadius = "5px";
 modal.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
 modal.style.width = "800px"; // set width to 800px
 modal.style.height = "600px"; // set height to 600px

 const output = document.createElement("textarea");
 output.style.width = "100%";
 output.style.height = "90%";
 output.style.padding = "10px";
 output.style.fontSize = "16px";
 output.style.backgroundColor = "black";
 output.style.color = "#fff";
 output.style.border = "none";
 output.style.borderRadius = "5px";
 output.style.boxSizing = "border-box";
 output.style.resize = "none";
 output.value = summary;
 modal.appendChild(output);

 const buttonContainer = document.createElement("div");
 buttonContainer.style.display = "flex";
 buttonContainer.style.marginTop = "16px";

 const copyButton = document.createElement("button");
 copyButton.textContent = "Copy to Clipboard";
 copyButton.style.margin = "10px";
 copyButton.style.padding = "10px";
 copyButton.style.backgroundColor = "#BB86FC";
 copyButton.style.color = "#fff";
 copyButton.style.border = "none";
 copyButton.style.borderRadius = "5px";
 copyButton.style.cursor = "pointer";
 copyButton.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
  displayModal("Full summary text has been copied to the clipboard!");
 });

 const closeButton = document.createElement("button");
 closeButton.textContent = "Close";
 closeButton.style.margin = "10px";
 closeButton.style.padding = "10px";
 closeButton.style.backgroundColor = "#f44336";
 closeButton.style.color = "#fff";
 closeButton.style.border = "none";
 closeButton.style.borderRadius = "5px";
 closeButton.style.cursor = "pointer";
 closeButton.addEventListener("click", () => {
  document.body.removeChild(modal);
  // set flag variable back to false since modal is now closed
  isModalOpen = false;
 });

 buttonContainer.appendChild(copyButton);
 buttonContainer.appendChild(closeButton);
 modal.appendChild(buttonContainer);

 document.body.appendChild(modal);
});

function displayModal(message) {
 const modal = document.createElement("dialog");
 const content = document.createElement("p");
 content.textContent = message;
 modal.appendChild(content);
 document.body.appendChild(modal);
 modal.showModal();
 setTimeout(() => {
  document.body.removeChild(modal);
  // set flag variable back to false since modal is now closed
  isModalOpen = false;
 }, 2000);
}
