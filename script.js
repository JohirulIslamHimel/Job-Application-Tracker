const totalCount = document.getElementById("total-count");
const mainJobCount = document.getElementById("main-job-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

const allCards = document.querySelectorAll(".card");

for (const card of allCards) {
  const intBtn = card.querySelector(".int-btn");
  const rejBtn = card.querySelector(".rej-btn");
  const deleteBtn = card.querySelector(".delete-btn");
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

    if (allBtn.classList.contains("bg-[#3B82F6]")) {
      filterCards("ALL");
    } else if (interviewTabBtn.classList.contains("bg-[#3B82F6]")) {
      filterCards("INTERVIEW");
    } else {
      filterCards("REJECTED");
    }
  };
}

// button selection

const allBtn = document.getElementById("all-btn");
const interviewTabBtn = document.getElementById("interview-btn");
const rejectedTabBtn = document.getElementById("rejected-btn");

// filter function
function filterCards(status) {
  const currentCards = document.querySelectorAll(".card");

  const noJobsMsg = document.getElementById("no-jobs-msg");

  let visibleCount = 0;

  for (const card of currentCards) {
    const cardStatus = card.querySelector(".status").innerText.toUpperCase();

    if (status === "ALL") {
      card.style.display = "flex";
      visibleCount++;
    } else if (cardStatus === status) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  }
  mainJobCount.innerText = visibleCount;

  if (visibleCount === 0) {
    noJobsMsg.classList.remove("hidden");
    noJobsMsg.classList.add("flex");
  } else {
    noJobsMsg.classList.add("hidden");
    noJobsMsg.classList.remove("flex");
  }
}

// all btn :
allBtn.addEventListener("click", function () {
  filterCards("ALL");
  updateTabStyle(allBtn);
});

// interview btn:
interviewTabBtn.addEventListener("click", function () {
  filterCards("INTERVIEW");
  updateTabStyle(interviewTabBtn);
});

// rejected btn:
rejectedTabBtn.addEventListener("click", function () {
  filterCards("REJECTED");
  updateTabStyle(rejectedTabBtn);
});

function updateTabStyle(activeBtn) {
  const tabs = [allBtn, interviewTabBtn, rejectedTabBtn];
  for (const btn of tabs) {
    btn.classList.remove("bg-[#3B82F6]", "text-white");
    btn.classList.add("border", "border-gray-200");
  }
  activeBtn.classList.add("bg-[#3B82F6]", "text-white");
  activeBtn.classList.remove("border", "border-gray-200");
}
