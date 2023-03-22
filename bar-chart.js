// Get the button element
const barButton = document.getElementById("bar-button");

// Initialize chart window variable
let chartWindow = null;

// Add a click event listener to the button
barButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Check if the chart window is already open
  if (chartWindow && !chartWindow.closed) {
    chartWindow.focus();
    return;
  }

  // Get the category containers and chart labels
  const categoryContainers = [...document.querySelectorAll(".category-container")];
  const chartLabel = document.getElementById("chart-label").value;

  // Check if the chart label is empty
  if (!chartLabel) {
    // Display an error dialog to the user
    const dialog = document.createElement("dialog");
    dialog.innerHTML = "Please enter a chart label before generating the ASCII chart.";
    document.body.appendChild(dialog);
    dialog.showModal();
    setTimeout(() => {
      dialog.close();
    }, 2000);
    return;
  }

  // Get all checked checkboxes and radio buttons
  const checkedElements = [...document.querySelectorAll(".element-checkbox:checked, .element-radio:checked")];

  // Check if at least one checkbox or radio button is checked
  if (checkedElements.length === 0) {
    // Display an error dialog to the user
    const dialog = document.createElement("dialog");
    dialog.innerHTML = "Please check at least one checkbox or radio button before generating the ASCII chart.";
    document.body.appendChild(dialog);
    dialog.showModal();
    setTimeout(() => {
      dialog.close();
    }, 2000);
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

  

  // Add the ASCII chart and copy button to the chart window
const chartContainer = document.createElement("div");
chartContainer.style.position = "fixed";
chartContainer.style.top = "50%";
chartContainer.style.left = "50%";
chartContainer.style.transform = "translate(-50%, -50%)";
chartContainer.style.zIndex = "9999";
chartContainer.style.backgroundColor = "black";
chartContainer.style.padding = "20px";
chartContainer.style.borderRadius = "5px";
chartContainer.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
chartContainer.style.maxWidth = "80%";
chartContainer.style.maxHeight = "80%";

const asciiChartEl = document.createElement("pre");
asciiChartEl.textContent = asciiChartWithHeaderAndFooter;
asciiChartEl.style.overflow = "auto";
asciiChartEl.style.maxHeight = "70%";
chartContainer.appendChild(asciiChartEl);

const copyButton = document.createElement("button");
copyButton.textContent = "Copy to clipboard";
copyButton.style.margin = "10px";
copyButton.style.padding = "10px";
copyButton.style.backgroundColor = "#BB86FC";
copyButton.style.color = "#fff";
copyButton.style.border = "none";
copyButton.style.borderRadius = "5px";
copyButton.style.cursor = "pointer";
chartContainer.appendChild(copyButton);

const closeButton = document.createElement("button");
closeButton.textContent = "Close";
closeButton.style.margin = "10px";
closeButton.style.padding = "10px";
closeButton.style.backgroundColor = "#f44336";
closeButton.style.color = "#fff";
closeButton.style.border = "none";
closeButton.style.borderRadius = "5px";
closeButton.style.cursor = "pointer";
chartContainer.appendChild(closeButton);

// Add event listener to copy button
copyButton.addEventListener("click", () => {
navigator.clipboard.writeText(asciiChartWithHeaderAndFooter);

// Display a success dialog to the user
const successDialog = document.createElement("dialog");
successDialog.innerHTML = "The ASCII chart has been copied to the clipboard!";
document.body.appendChild(successDialog);
successDialog.showModal();
setTimeout(() => {
  successDialog.close();
}, 2000);
});

// Add event listener to close button
closeButton.addEventListener("click", () => {
chartContainer.remove();
});

// Check if chart container already exists
const existingChartContainer = document.getElementById("chart-container");
if (existingChartContainer) {
existingChartContainer.remove();
}

// Add chart container to the document
document.body.appendChild(chartContainer);
});

