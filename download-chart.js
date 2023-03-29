//Radar chart download
const saveButton = document.querySelector("#download-button");
saveButton.addEventListener("click", (event) => {
 const canvas = document.querySelector("#radar-chart");
 const dataURL = canvas.toDataURL("image/png");
 const link = document.createElement("a");
 link.download = "radar-chart.png";
 link.href = dataURL;
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link);
 showDownloadConfirmation();
});

const fullReviewButton = document.getElementById("full-review-button");

function showDownloadConfirmation() {
 const message = "Chart image has been copied to clipboard!";
 const dialog = document.createElement("dialog");
 dialog.textContent = message;
 document.body.appendChild(dialog);
 dialog.showModal();
 setTimeout(() => {
  dialog.close();
 }, 2000);
}
