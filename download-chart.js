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
            });
const fullReviewButton = document.getElementById("full-review-button");