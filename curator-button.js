const curatorButton = document.getElementById("curator-button");

curatorButton.addEventListener("click", () => {
  // check if at least one checkbox or radio has been clicked
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const radios = document.querySelectorAll('input[type="radio"]');
  const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
  const checkedRadios = Array.from(radios).filter(radio => radio.checked);
  if (checkedCheckboxes.length === 0 && checkedRadios.length === 0) {
    const dialog = document.createElement("dialog");
    dialog.textContent = "Please select at least one category before generating a summary.";
    document.body.appendChild(dialog);
    dialog.showModal();
    setTimeout(() => dialog.close(), 2000);
    return;
  }

  // sort categories by score (highest to lowest)
  const sortedCategories = categories.sort((a, b) => {
    const aScore = data.datasets[0].data[categoryTitles.indexOf(a.categoryname)];
    const bScore = data.datasets[0].data[categoryTitles.indexOf(b.categoryname)];
    return bScore - aScore;
  });

  // create a summary of the sorted categories
  const summary = sortedCategories.reduce((acc, category) => {
    const score = data.datasets[0].data[categoryTitles.indexOf(category.categoryname)];
    if (score >= 7) {
      acc += `${category.categoryname}→ high ; `;
    } else if (score >= 4) {
      acc += `${category.categoryname}→ mid ; `;
    } else if (score >= 2) {
      acc += `${category.categoryname}→ low ; `;
    }
    return acc;
  }, "");

  // remove the final arrow
  const summaryWithoutArrow = summary.slice(0, -3);

  // copy the summary to the clipboard
  const maxLength = 200;
  const textToCopy = summaryWithoutArrow.substring(0, maxLength);
  navigator.clipboard.writeText(textToCopy);

  // show dialog upon success
  const chartLabel = document.getElementById("chart-label").value;
  const dialogText = `Curator review for ${chartLabel} has been copied to the clipboard!`;
  const dialog = document.createElement("dialog");
  dialog.textContent = dialogText;
  document.body.appendChild(dialog);
  dialog.showModal();
  setTimeout(() => dialog.close(), 2000);
});

