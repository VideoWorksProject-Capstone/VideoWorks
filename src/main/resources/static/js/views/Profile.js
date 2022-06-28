import {getHeaders} from "../auth.js";
import createView from "../createView.js";

const BASE_URL = "http://lovalhost:8080/api/services"

export default function Profile(props) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>VidoeWorks | Profile</title>
            
        </head>
        <body>
   <section class="h-100 gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card">
              <div class="profile-details-wrapper">
                            <div class="profile-details">
          <div class="profile-pic-div">                     
                                    <input width="250" height="500"  type="image" class="main-profile-img" id="profile-photo" src="${props.user.photo}" alt="user" readonly> 
              </div>
            </div>
            <div class="ms-3" style="margin-top: 130px;">
              <h2 class="profile-username">${props.user.name}</h2>
            </div>
          </div>
          <div class="p-4 text-black">
            <div class="d-flex justify-content-end text-center py-1">
              <div>
                <p class="mb-1 h5">253</p>
                <p class="small text-muted mb-0">Photos</p>
              </div>
              <div class="px-3">
                <p class="mb-1 h5">1026</p>
                <p class="small text-muted mb-0">Followers</p>
              </div>
              <div>
                <p class="mb-1 h5">478</p>
                <p class="small text-muted mb-0">Following</p>
              </div>
            </div>
          </div>
          <div class="card-body p-4 text-black">
            <div class="mb-5">
              <p class="lead fw-normal mb-1">About</p>
               <div>
                                <p class="seller-profile-description">${props.user.bio}</p>
                            </div>    
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0">Services</p>
              <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
            </div>
            <div class="row g-2">
              <div class="col mb-2">
                            <main class="services-profile">
                            <div class="services-profile__services-container">
                                <h3 class="latest-services-title">Services</h3>
                                    <div id="create-job">           
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
                ${props.user.jobs.map(job => getJobCard(job)).join('')}
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </body>
        </html>
    `;
}

export function JobEvent() {
    getJobCard();
    createJobEvent();
    editJobEvent();
    deleteJobEvent();
}

export function getJobCard(job) {
    return `
            <div class="services-profile-card__flex-wrapper">
                <div class="services-profile__cards" id="${job.id}" data-id="${job.id}">              
                    <img class="card-category" type="image" src="${job.category}" alt="category"/>
                    <div class="services-profile-card__username">${job.title}</div>
                    <div class="services-profile__cards-bottom">
                        <p class="services-profile-card__description">${job.description}</p>
                        <div class="services-profile-card__description-wrapper">
                            <p class="services-profile-card-price">${job.price}</p>
                        </div>
                    </div>        
                </div>
            </div>
`
}

export function createJobEvent() {
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

export function editJobEvent() {
    $(document).on('click', '.edit-btn', function (e) {
        console.log("button clicked");
        e.preventDefault();

        const jobTitle = $(`.card-title-${$(this).data("id")}`).text();
        const jobDescription = $(`.card-description-${$(this).data("id")}`).text();
        const jobPrice = $(`.card-price-${$(this).data("id")}`).text();

        const request = {
            method: "PUT",
            body: JSON.stringify({
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

export function deleteJobEvent() {
    $(document).on('click', '.delete-btn', function (e) {
        console.log("button clicked");
        e.preventDefault();

        const id = $(this).data("id");

        const request = {
            method: "DELETE"
        };

        fetch(`${BASE_URL}/${$(this).data("id")}`, request)
            .then((response) => {
                $(`#job-${id}`).remove();
            })
            .catch(error => {
                console.log(error);
            });
    })
}