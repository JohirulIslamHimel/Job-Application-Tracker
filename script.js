const totalCount = document.getElementById("total-count");
const mainJobCount = document.getElementById("main-job-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

const allCards = document.querySelectorAll(".card");

for (const card of allCards) {
  const intBtn = card.querySelector(".int-btn");
  const rejBtn = card.querySelector(".rej-btn");
  const deleteBtn = card.querySelector(".fa-trash").parentElement;
  const statusBadge = card.querySelector(".status");

  // Interview btn click
  intBtn.onclick = function () {
    const currentStatus = statusBadge.innerText.toUpperCase();

    if (currentStatus !== "INTERVIEW") {
      if (currentStatus === "REJECTED") {
        rejectedCount.innerText = parseInt(rejectedCount.innerText) - 1;
      }
      interviewCount.innerText = parseInt(interviewCount.innerText) + 1;
      statusBadge.innerText = "INTERVIEW";
      statusBadge.style.backgroundColor = "#DCFCE7";
      statusBadge.style.color = "#166534";
    }
  };

  // Reject btn click
  rejBtn.onclick = function () {
    const currentStatus = statusBadge.innerText.toUpperCase();

    if (currentStatus !== "REJECTED") {
      if (currentStatus === "INTERVIEW") {
        interviewCount.innerText = parseInt(interviewCount.innerText) - 1;
      }
      rejectedCount.innerText = parseInt(rejectedCount.innerText) + 1;
      statusBadge.innerText = "REJECTED";
      statusBadge.style.backgroundColor = "#FEE2E2";
      statusBadge.style.color = "#991B1B";
    }
  };

  // Delete btn click
  deleteBtn.onclick = function () {
    const currentStatus = statusBadge.innerText.toUpperCase();

    if (currentStatus === "INTERVIEW") {
      interviewCount.innerText = parseInt(interviewCount.innerText) - 1;
    } else if (currentStatus === "REJECTED") {
      rejectedCount.innerText = parseInt(rejectedCount.innerText) - 1;
    }

    card.remove();

    const currentTotal = parseInt(totalCount.innerText);
    totalCount.innerText = currentTotal - 1;
    mainJobCount.innerText = currentTotal - 1;
  };
}
