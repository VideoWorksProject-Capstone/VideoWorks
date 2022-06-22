import createView from "../createView.js";

export default function Home(props) {
    return `
        <header>
            <h1>Home Page</h1>
        </header>
        <main>
            <div>
                <p>
                     ${props.jobs.map(job => getJobCard(job)).join('')}
                </p>    
            </div>
        </main>
    `;
}

function getJobCard(job) {
    return `<div class='card' id='${job.id}' data-id="${job.id}">
            <div class='card-body'>
                <h5 class="card-title">${job.title}</h5>
                <input class='card-photo' src="${job.photo}" readonly>
                <input class="card-description" value="${job.description}" readonly>
                <input class="card-price" value="${job.price}" readonly>
            </div>
        </div>`
}