import {getHeaders} from "../auth.js";
import createView from "../createView.js";

const BASE_URL = "http://localhost:8080/api/services"

export default function Profile(props) {
    console.log(props.user);
    return `
        <!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/html">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>VidoeWorks | Profile</title>
        </head>
        <body>
            <main class="profile-div">
                <section class="profile-divider">
                    <div class="profile-seller">
                    
                        <!-- PROFILE HEADER -->
                    
                        <div class="profile-details-wrapper">
                            <div class="profile-details">
                                <div class="profile-pic-div">                     
                                    <input width="250" height="250"  type="image" class="main-profile-img" id="profile-photo" src="${props.user.photo}" alt="user" readonly> 
                                    <input type="file" name="img-file" id="img-file"/>
                                    <label for="img-file" id="upload-btn">Choose photo</label>
                                </div>
                                <br>
                                <div class="user-edit">
                                    <h2 class="profile-username">${props.user.name}</h2>
                                    <button class="profile-edit-btn">Edit</button>
                                </div>
                            </div>
                        </div>     
                        <br>   
                        <div class="seller-profile-description-wrapper">
                            <div>
                                <p class="seller-profile-description">${props.user.bio}</p>
                            </div>                               
                        </div>         
                        <br>
                        <div class="profile-services__card-form">      
                            <label for="job-title">Title</label>
                            <input type="text" id="job-title" placeholder="Title">
                            <br>
                            <label for="job-category">Select a category</label>
                            <select name="category" id="job-category">
                                <option value="./img/music.png">Music</option>
                                <option value="./img/tutoring.png">Tutoring</option>
                                <option value="./img/reading.png">Reading</option>
                                <option value="./img/dj.png">DJ</option>
                                <option value="./img/cooking.png">Cooking</option>
                                <option value="./img/speaking.png">Speaking</option>
                            </select>
                            <br>    
                            <label for="job-description">Description</label>                
                            <textarea type="text" id="job-description" placeholder="Description"></textarea>
                            <br>
                            <label for="job-price">Rate per hour</label>
                            <input type="number" id="job-price" placeholder="$0.00/hr">                      
                            <br>
                            <input type="button" id="submit-btn" value="Create Service +"/>
                        </div>   
                    </div>
                        
                        <!-- SERVICES -->
                        
                    <section class="profile-elements">
                        <div class="services-profile__services-container">
                            <h2 class="profile-services__title profile-section-titles">Services</h2>
                            <div>
                                      ${props.user.jobs.map(job => getJobCard(job)).join('')}
                                     
                            </div>   
                        </div>  
                        <div class="bookings-profile">
                            <h2 class="profile-services__title profile-section-titles">Bookings</h2>
                            <div>
                                
                            </div>
                        </div>                                           
                    </section>
                </section>
            </main>
        </body>
        </html>
    `;
}

export function JobEvent() {
    createJobEvent();
    editJobEvent();
    updateJobEvent();
    deleteJobEvent();
}

function getJobCard(job) {
    return `
        <div class="profile-services__card" id="${job.id}" data-id="${job.id}">              
            <input class="profile-services__service-image" type="image" src="${job.category}" alt="category" readonly>
            <div class="profile-services__profile-ddetails">
                <div class="profile-details__element-wrapper">
                    <input class="profile-details__title" value="${job.title}" readonly>
                </div>
                <div class="profile-details-delivery-container">
                    <input class="services-profile-card__description" value="${job.description}" readonly>        
                    <input class="services-profile-card-price" value="${job.price}" readonly>  
                    <button type="submit" data-edit-id="${job.id}">Edit</button>
                    <button type="submit" id="delete-btn" data-delete-id="${job.id}">Delete</button>                   
                </div>
            </div>        
        </div>
`
}
// ${props.user.bookings.map(booking => getBookingCard(booking)).join('')}
function getBookingCard(booking) {
    return `
        <div class="profile-services__card" id="${booking.id}" data-id="${booking.id}">              
            <div class="profile-services__profile-ddetails">
                <div class="profile-details__element-wrapper">
                    <input class="profile-details__title" value="${booking.job.title}" readonly>
                </div>
                <div class="profile-details-delivery-container">
                    <input class="services-profile-card__description" value="${booking.dateTime}" readonly>        
                    <button type="submit" data-edit-id="${job.id}">Edit</button>
                    <button type="submit" id="delete-btn" data-delete-id="${job.id}">Delete</button>                   
                </div>
            </div>        
        </div>
`
}

function createJobEvent() {
    $(document).on('click', '#submit-btn', function (e) {
        console.log("button clicked");
        e.preventDefault();
        const newJob = {
            title: $("#job-title").val(),
            category: $("#job-category").val(),
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

function editJobEvent() {
    $(document).off('click', '.edit-btn', editJobEvent)
    let jobId = $(this).attr('data-id');
    let jobCard = $(`.profile-services__card[data-id=${jobId}]`);
    let editButton = jobCard.find(`.edit-btn`)
    jobCard.find(`input`).attr('readonly', false)
    editButton.text('Save')
    $(document).on('click', '.edit-btn', updateJobEvent)
}

function updateJobEvent() {
    $(document).on('click', '.save-btn', function(e) {
        console.log("button clicked");
        e.preventDefault();

        const jobCategory = $(`.profile-services__service-image-${$(this).data("id")}`).text();
        const jobTitle = $(`.profile-details__title-${$(this).data("id")}`).text();
        const jobDescription = $(`.services-profile-card__description-${$(this).data("id")}`).text();
        const jobPrice = $(`.services-profile-card-price-${$(this).data("id")}`).text();

        const request = {
            method: "PUT",
            body: JSON.stringify({
                category: jobCategory,
                title: jobTitle,
                description: jobDescription,
                price: jobPrice
            })
        };

        fetch(`${BASE_URL}/${$(this).data("id")}`, request)
            .then((response) => {
                createView("/profile");
            }).catch((function (err) {

        }))
    })
}

function deleteJobEvent() {
    $(document).on('click', '#delete-btn', function (e) {
        console.log("button clicked");
        e.preventDefault();

        const id = $(this).data("delete-id");
        console.log(id);

        const request = {
            method: "DELETE"
        };

        fetch(`${BASE_URL}/${id}`, request)
            .then(response => {
                console.log(response);
                createView("/profile");
                //$(`#job-${id}`).remove();
            })
            .catch(error => {
                console.log(error);
            });
    })
}