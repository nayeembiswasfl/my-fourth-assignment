// -----------------------------
// SELECT ELEMENTS
// -----------------------------

const tabs = document.querySelectorAll(".tab-btn")
const jobNumber = document.getElementById("jobNumber")

const totalCount = document.getElementById("totalCount")
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")

const emptyState = document.getElementById("emptyState")

let currentTab = "all"


// -----------------------------
// TAB SWITCH
// -----------------------------

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"))
        tab.classList.add("active")

        currentTab = tab.dataset.tab

        filterJobs()

    })

})


// -----------------------------
// INTERVIEW BUTTON
// -----------------------------

document.querySelectorAll(".interview").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".job")
        const badge = card.querySelector(".statusBadge")

        card.dataset.status = "interview"
        badge.textContent = "INTERVIEW"

        updateDashboard()
        filterJobs()

    })

})


// -----------------------------
// REJECTED BUTTON
// -----------------------------

document.querySelectorAll(".rejected").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".job")
        const badge = card.querySelector(".statusBadge")

        card.dataset.status = "rejected"
        badge.textContent = "REJECTED"

        updateDashboard()
        filterJobs()

    })

})


// -----------------------------
// DELETE JOB
// -----------------------------

document.querySelectorAll(".delete").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".job")
        card.remove()

        updateDashboard()
        filterJobs()

    })

})


// -----------------------------
// FILTER JOBS
// -----------------------------

function filterJobs(){

    const allJobs = document.querySelectorAll(".job")

    let visibleCount = 0
    let totalJobs = allJobs.length

    allJobs.forEach(job => {

        const status = job.dataset.status

        if(currentTab === "all"){
            job.style.display = "block"
            visibleCount++
        }

        else if(currentTab === status){
            job.style.display = "block"
            visibleCount++
        }

        else{
            job.style.display = "none"
        }

    })

    jobNumber.textContent = visibleCount + " of " + totalJobs + " jobs"

    if(visibleCount === 0){
        emptyState.classList.remove("hidden")
    }
    else{
        emptyState.classList.add("hidden")
    }

}





function updateDashboard(){

    const allJobs = document.querySelectorAll(".job")

    let interview = 0
    let rejected = 0

    allJobs.forEach(job => {

        if(job.dataset.status === "interview"){
            interview++
        }

        if(job.dataset.status === "rejected"){
            rejected++
        }

    })

    totalCount.textContent = allJobs.length
    interviewCount.textContent = interview
    rejectedCount.textContent = rejected

}


// intial page load

updateDashboard()
filterJobs()