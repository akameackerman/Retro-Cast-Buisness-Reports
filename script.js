document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reports-form");
  if (!form) return; 

  const frequencySelect = document.getElementById("frequency");
  const metricSelect = document.getElementById("metric");
  const reportTitle = document.querySelector(".report-title");
  const reportNote = document.querySelector(".report-note");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const frequency = frequencySelect.value;
    const metric = metricSelect.value;

    if (!frequency || !metric) {
      alert("Please choose both a report frequency and a focus metric 📊");
      return;
    }
      
    const prettyMetric = getMetricLabel(metric);
    const prettyFrequency = getFrequencyLabel(frequency);

    if (reportTitle) {
      reportTitle.textContent = `${prettyFrequency} report – ${prettyMetric}`;
    }

    if (reportNote) {
      reportNote.textContent =
        `This sample report simulates what a ${prettyFrequency.toLowerCase()} ${
          prettyMetric.toLowerCase()
        } report would look like using data from the SearchQueries, Favorites, and Shows tables in our RetroCast database.`;
    }

    alert(
      `Generating a ${prettyFrequency.toLowerCase()} report focusing on "${prettyMetric}" for your business 📈 (demo only)`
    );

    console.log("Demo report settings:", { frequency, metric });
  });
});

function getMetricLabel(value) {
  switch (value) {
    case "searches":
      return "Most searched shows";
    case "favorites":
      return "Most favorited shows";
    case "platforms":
      return "Top streaming platforms";
    default:
      return "Selected metric";
  }
}

function getFrequencyLabel(value) {
  switch (value) {
    case "monthly":
      return "Monthly";
    case "quarterly":
      return "Quarterly";
    case "biannually":
      return "Biannual";
    case "yearly":
      return "Yearly";
    default:
      return "Analytics";
  }
}
