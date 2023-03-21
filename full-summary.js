const button = document.getElementById("full-review-button");

button.addEventListener("click", () => {
  let summary = "[url=https://steamcommunity.com/groups/beyond0451/]Beyond 0451[/url] review for [b]" + document.getElementById("chart-label").value + "[/b]\n\n";

  const categories = document.querySelectorAll(".category-container");

  categories.forEach((category) => {
    const categoryTitle = category.querySelector(".category-title").textContent;
    const categoryDefinition = category.querySelector(".category-definition").textContent;

    let checkedElements = "";
    const checkedBoxes = [...category.querySelectorAll('input[type="checkbox"]:checked')];
    checkedBoxes.forEach((checkbox) => {
      checkedElements += `[*]${checkbox.nextSibling.textContent}\n`;
    });

    const checkedRadios = category.querySelector('input[type="radio"]:checked');
    if (checkedRadios !== null) {
      checkedElements += `[*]${checkedRadios.nextSibling.textContent}\n`;
    }

    if (checkedElements !== "") {
      summary += `[b]${categoryTitle}[/b]\n${categoryDefinition}\n[list]\n${checkedElements}[/list]\n\n`;
    }
  });

  const textArea = document.createElement("textarea");
  textArea.value = summary;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  
  alert("The full text review for `"${chartLabel}"` has been copied to the clipboard!");
});
