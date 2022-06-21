export default function Profile(props) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>
                .profile {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .header {
                    border: 5px solid lightgray;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-content: center;
                }
                #img {
                    height: 300px;
                    width: 300px;
                    border-radius: 50%;
                }
                .name {
                    font-size: 4em;
                    display: flex;
                    color: black;
                    justify-content: center;
                }
                #bio {
                    font-size: 2em;
                    display: flex;
                    color: black;
                    justify-content: center;
                    padding-left: 300px;
                    padding-right: 300px;
                }
                .services {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-grow: 3;
                }
                .service-heading {
                    font-size: 4em;
                }
            </style>
        </head>
        <body>
            <div class="profile">
                <div class="header">
                    <div>
                        <input type="image" id="img" src="${props.user.photo}" alt="user" readonly> 
                    </div>
                    <br>
                    <div>
                        <h2 class="name">${props.user.name}</h2>
                    </div>
                    <br>
                    <div>
                        <p id="bio">${props.user.bio}</p>
                    </div>
                    <br>
                </div>
                <text class="service-heading">Services</text>
                <div class="services">
                                   ${props.user.jobs.map(job => getJobCard(job)).join('')}
                </div>
            </div>
        </body>
        </html>
    `;
}

function getJobCard(job) {
    return `<div class='card' id='${job.id}' data-id="${job.id}">
            <div class='card-body'>
                <h5>${job.title}</h5>
                <input class='card-photo' src="${job.photo}" readonly>
                <input class="card-description" value="${job.description}" readonly>
                <input class="card-price" value="${job.price}" readonly>
            </div>
        </div>`
}