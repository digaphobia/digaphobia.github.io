// Get the button element
const barButton = document.getElementById("bar-button");

// Add a click event listener to the button
barButton.addEventListener("click", () => {
  // Get the category containers and chart labels
  const categoryContainers = [...document.querySelectorAll(".category-container")];
  const chartLabel = document.getElementById("chart-label").value;

  // Get all checked checkboxes and radio buttons
  const checkedElements = [...document.querySelectorAll(".element-checkbox:checked, .element-radio:checked")];

  // Check if at least one checkbox or radio button is checked
  if (checkedElements.length === 0) {
    // Display an error dialog to the user
    alert("Please check at least one checkbox or radio button before generating the ASCII chart.");
    return;
  }

  // Create the data rows of the ASCII chart
  const dataRows = categoryContainers.map(container => {
    const categoryTitle = container.querySelector(".category-title").textContent.padEnd(18, " ");
    const categoryDefinition = container.querySelector(".category-definition").textContent;
    const categoryElements = [...container.querySelectorAll(".element-checkbox:checked, .element-radio:checked")];
    const total = categoryElements.reduce((acc, element) => acc + parseInt(element.value), 0);
    const filledPoints = "█".repeat(Math.min(total, 10));
    const emptyPoints = "─".repeat(Math.max(0, 10 - total));
    return { categoryTitle, filledPoints, emptyPoints, categoryDefinition, total };
  });

  // Sort the data rows by the "total" value in descending order
  dataRows.sort((a, b) => b.total - a.total);

  // Create the table from the sorted data rows
  const table = dataRows.map(row => {
    return [
      row.categoryTitle,
      row.filledPoints + row.emptyPoints,
      row.categoryDefinition
    ];
  });

  // Convert the table to an ASCII string
  const asciiChart = table.map(row => row.join("|")).join("\n");

  // Add the header and footer to the ASCII chart
  const header = `[code][url=https://steamcommunity.com/groups/beyond0451]Beyond 0451[/url] chart for ${chartLabel}\n`;
  const footer = "[/code]";
  const asciiChartWithHeaderAndFooter = header + asciiChart + footer;

  // Copy the ASCII chart to the clipboard
  navigator.clipboard.writeText(asciiChartWithHeaderAndFooter);

  // Alert the user that the ASCII chart has been copied to the clipboard
  alert(`The ASCII review chart for "${chartLabel}" has been copied to the clipboard!`);
});
