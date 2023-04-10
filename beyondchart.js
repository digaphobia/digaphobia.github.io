// Chart label listener
const chartLabelInput = document.getElementById("chart-label");
const categoryTitles = [...document.querySelectorAll(".category-title")].map((category) => category.textContent);

chartLabelInput.addEventListener("input", (event) => {
 const chartLabel = event.target.value;
 data.datasets[0].label = chartLabel;
 radarChart.options.plugins.legend.labels.text = chartLabel; // Update legend label
 radarChart.update();
});


// Initialize the data object with default values
let data = {
 labels: categoryTitles,
 datasets: [
  {
   label: "",
   data: Array(categoryTitles.length).fill(0),
   backgroundColor: "rgba(153, 102, 255, 0.2)",
   borderColor: "rgba(153, 102, 255, 1)",
   pointBackgroundColor: "rgba(153, 102, 255, 1)",
   pointBorderColor: "#fff",
   pointHoverBackgroundColor: "#fff",
   pointHoverBorderColor: "rgba(153, 102, 255, 1)",
   borderWidth: 1,
   lineTension: 0.2,
  },
 ],
};

// Set up the configuration object
const config = {
 type: "radar",
 data: data,
 options: {
  responsive: false,
  maintainAspectRatio: true,
  plugins: {
   legend: {
    display: true,
    labels: {
     boxWidth: 0,
     color: "rgba(153, 102, 255, 1)",
     font: {
      size: 28,
      weight: "bold",
     },
    },
   },
   tooltip: {
    callbacks: {
     label: ({ raw }) => raw,
    },
   },
  },
  scales: {
   r: {
    suggestedMin: 0,
    suggestedMax: 10,
    ticks: {
     display: false,
     stepSize: 1,
    },
    grid: {
     circular: true,
     color: "rgba(255, 255, 255, 0.1)",
    },
    angleLines: {
     color: 'rgba(255, 255, 255, 0.2)'
    },
    pointLabels: {
     color: "white",
     font: {
      size: 14,
      style: "bold",
     },
    },
   },
  },
 },
};

// Create a new instance of Chart.js
const radarChart = new Chart(document.getElementById("radar-chart"), config);

// Listen for changes to the checkboxes and radios and update the chart data
[...document.querySelectorAll(".element-checkbox")].forEach((checkbox) => {
 checkbox.addEventListener("change", () => {
  const categoryIndex = categoryTitles.indexOf(checkbox.closest(".category-container").querySelector(".category-title").textContent);
  const dataIndex = data.datasets[0].data[categoryIndex];
  data.datasets[0].data[categoryIndex] = checkbox.checked ? dataIndex + parseInt(checkbox.value) : dataIndex - parseInt(checkbox.value);
  radarChart.update();
 });
});
[...document.querySelectorAll(".element-radio")].forEach((radio) => {
 radio.addEventListener("change", () => {
  const categoryContainer = radio.closest(".category-container");
  const categoryIndex = categoryTitles.indexOf(categoryContainer.querySelector(".category-title").textContent);

  let newData = 0;
  const radios = [...categoryContainer.querySelectorAll('input[type="radio"]')];
  radios.forEach((radio) => {
   if (radio.checked) {
    newData += parseInt(radio.value);
   }
  });

  const checkboxes = [...categoryContainer.querySelectorAll(".element-checkbox")];
  const checkedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
  if (checkedCheckboxes.length > 0) {
   const checkboxValues = checkedCheckboxes.map((checkbox) => parseInt(checkbox.value));
   newData += checkboxValues.reduce((acc, curr) => acc + curr);
  }

  data.datasets[0].data[categoryIndex] = newData;
  radarChart.update();
 });
});
