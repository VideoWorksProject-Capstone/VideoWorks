import {getHeaders} from "../auth.js";
import createView from "../createView.js";

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
                    flex-direction: row;
                    justify-content: space-evenly;
                    flex-wrap: wrap;
                    flex-grow: 3;
                }
                .service-heading {
                    font-size: 4em;
                }
                .card {
                    height: 400px;
                    width: 300px;
                    border: 3px solid lightgray;
                    border-radius: 5px;
                }
                .card-title {
                    font-size: 2em;
                }
                #create-job {
                    height: 400px;
                    width: 300px;
                    border: 3px solid lightgray;
                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                #job-title {
                    font-size: 2em;
                    border: 1px solid lightgray;
                }
                #job-description {
                    height: 200px;
                    width: 200px;
                    border: 1px solid lightgray;
                }
                #job-price {
                    border: 1px solid lightgray;
                    font-size: 1.5em;
                }
                #submit-btn {
                    height: 50px;
                    width: 150px;
                    background-color: #4c2fa1;
                    color: wheat;
                    border-radius: 20px;
                }
            </style>
        </head>
        <body>
            <div class="profile">
                <div class="header">
                <p id="userId">${props.user.id}</p>
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
                    <div id="create-job">             
                        <input type="text" id="job-title" placeholder="Title">
                        <br>
                        <textarea type="text" id="job-description" placeholder="Description"></textarea>
                        <br>
                        <input type="number" id="job-price" placeholder="$0.00">                      
                        <br>
                        <input type="image" id="job-image" alt="Submit">
                        <br>
                        <input type="button" id="submit-btn" value="Create Service +"/>
                    </div>
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
                <h5 class="card-title">${job.title}</h5>
                <input class='card-photo' src="${job.photo}" readonly>
                <input class="card-description" value="${job.description}" readonly>
                <input class="card-price" value="${job.price}" readonly>
            </div>
        </div>`
}

export function createJobEvent() {
    $(document).on('click', '#submit-btn', function (e) {
        e.preventDefault();
        const newJob = {
            title: $("#job-title").val(),
            description: $("#job-description").val(),
            price: $("#job-price").val(),
            // user: $("#userId").val()
        }
        console.log(newJob);
        const token = localStorage.getItem("access_token");
        const request = {
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': 'Bearer ' + `${token}`
            // },
            headers: getHeaders(),
            body: JSON.stringify(newJob)
        }

        fetch("http://localhost:8080/api/services/create", request)
            .then((response) => {
                console.log(response.status)
                //redirect to view events page
                createView("/profile");
            }).catch(function (err) {
            console.log("There was an error of " + err)
            })
    })
}