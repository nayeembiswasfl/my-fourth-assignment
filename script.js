let currentTab = "all"



function updateCounts() {

    const jobs = document.querySelectorAll(".job")

    const totalCount = document.getElementById("totalCount")
    const interviewCount = document.getElementById("interviewCount")
    const rejectedCount = document.getElementById("rejectedCount")

    let interview = 0
    let rejected = 0

    jobs.forEach(job => {

        if (job.dataset.status === "interview") {
            interview++
        }

        if (job.dataset.status === "rejected") {
            rejected++
        }

    })

    totalCount.textContent = jobs.length
    interviewCount.textContent = interview
    rejectedCount.textContent = rejected

}



function filterJobs() {

    const jobs = document.querySelectorAll(".job")
    const emptyState = document.getElementById("emptyState")
    const jobNumber = document.getElementById("jobNumber")

    let visible = 0
    let total = jobs.length

    jobs.forEach(job => {

        const status = job.dataset.status

        if (currentTab === "all") {

            job.style.display = ""
            visible++

        }

        else if (status === currentTab) {

            job.style.display = ""
            visible++

        }

        else {

            job.style.display = "none"

        }

    })

    if (visible === total) {

        jobNumber.textContent = `${total} jobs`

    }

    else {

        jobNumber.textContent = `${visible} of ${total} jobs`

    }

    if (visible === 0) {

        emptyState.classList.remove("hidden")

    }

    else {

        emptyState.classList.add("hidden")

    }

}



function setupTabs() {

   const tabs = document.querySelectorAll(".tab-btn")

tabs.forEach(tab => {

    tab.addEventListener("click", function () {

        tabs.forEach(t => t.classList.remove("active"))

        tab.classList.add("active")

        currentTab = tab.dataset.tab

        filterJobs()

    })

})
}



function handleButtons() {

    document.addEventListener("click", function (e) {

        const interviewBtn = e.target.closest(".interview")
        const rejectedBtn = e.target.closest(".rejected")
        const deleteBtn = e.target.closest(".delete")



        if (interviewBtn) {

            const card = interviewBtn.closest(".job")
            const badge = card.querySelector(".statusBadge")

            card.dataset.status = "interview"

            badge.textContent = "INTERVIEW"
            badge.className = "badge badge-success badge-outline badge-sm uppercase statusBadge"

            updateCounts()
            filterJobs()

        }



        if (rejectedBtn) {

            const card = rejectedBtn.closest(".job")
            const badge = card.querySelector(".statusBadge")

            card.dataset.status = "rejected"

            badge.textContent = "REJECTED"
            badge.className = "badge badge-error badge-outline badge-sm uppercase statusBadge"

            updateCounts()
            filterJobs()

        }



        if (deleteBtn) {

            const card = deleteBtn.closest(".job")

            card.remove()

            updateCounts()
            filterJobs()

        }

    })

}



function initApp() {

    setupTabs()
    handleButtons()
    updateCounts()
    filterJobs()

}



initApp()