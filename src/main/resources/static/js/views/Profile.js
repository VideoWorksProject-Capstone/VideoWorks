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
        <main class="profile-div">
            <section class="profile-divider">
                <!--Begin Profile Seller-->
                <div class="profile-seller">
                    <div class="profile-seller__user-image-wrapper">
                        <img src="../../img/smiling-woman1.jpg" alt="" class="profile-seller__user-image">
                        <img src="../../img/Chat.png" alt="" tabindex="0" class="profile-seller__contact-bubble">
                        <div class="profile-seller__contact-dropdown" tabindex="0">
                            <ul>
                                <li tabindex="0"><a href="#">Get a quote <i class="fa-solid fa-arrow-right"></i></a></li>
                                <li
                                        tabindex="0"><a href="https://google.com">Ask a question
                                    <i class="fa-solid fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                                    <div class="profile-details-wrapper">
                            <div class="profile-details">
                                <div class="profile-pic-div">                     
                                    <input width="250" height="250" type="image" class="main-profile-img" id="profile-photo" src="${props.user.photo}" alt="user" readonly> 
                                    <input type="file" name="img-file" id="img-file"/>
                                    <label for="img-file" id="upload-btn">Choose photo</label>
                                </div>
                                <br>
                                <div class="user-edit">
                                    <h2 class="profile-username">${props.user.name}</h2>
<!--                                    <button class="profile-edit-btn">Edit</button>-->
                                </div>
                            </div>
                        </div>        
                        <br>
                        <div class="seller-profile-description-wrapper">
                            <div>
                                <p class="seller-profile-description">${props.user.bio}</p>
                            </div>                               
                        </div>            
                        </div>
                        
                <!--End Profile Seller-->
                <!--Begin Profile-Elements-->
                <section class="profile-elements">
                    <div class="profile-services section-cards">
                        <h2 class="profile-services__title profile-section-titles">Services Offered</h2>
                        <div class="profile-services__card">
                            <img src="https://source.unsplash.com/200x200" alt="random"
                                 class="profile-services__service-image">
                            <div class="profile-services__profile-details">
                                <div class="profile-details__element-wrapper">
                                    <!--                            <i class="fa-solid fa-crown"></i>-->
                                    <p class="profile-details__title">I will DJ your party for 4 hours</p>
                                </div>
                                <div class="profile-details-delivery-container">
                                    <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                        delivery</p>
                                    <button class="profile-details__booking-btn">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="profile-services__card">
                            <img src="https://source.unsplash.com/200x200" alt="random"
                                 class="profile-services__service-image">
                            <div class="profile-services__profile-details">
                                <div class="profile-details__element-wrapper">
                                    <!--                            <i class="fa-solid fa-crown"></i>-->
                                    <p class="profile-details__title">I will DJ your party for 4 hours</p>
                                </div>
                                <div class="profile-details-delivery-container">
                                    <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                        delivery</p>
                                    <button class="profile-details__booking-btn">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="profile-services__card">
                            <img src="https://source.unsplash.com/200x200" alt="random"
                                 class="profile-services__service-image">
                            <div class="profile-services__profile-details">
                                <div class="profile-details__element-wrapper">
                                    <!--                            <i class="fa-solid fa-crown"></i>-->
                                    <p class="profile-details__title">I will DJ your party for 4 hours</p>
                                </div>
                                <div class="profile-details-delivery-container">
                                    <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                        delivery</p>
                                    <button class="profile-details__booking-btn">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="profile-services__card">
                            <img src="https://source.unsplash.com/200x200" alt="random"
                                 class="profile-services__service-image">
                            <div class="profile-services__profile-details">
                                <div class="profile-details__element-wrapper">
                                    <!--                            <i class="fa-solid fa-crown"></i>-->
                                    <p class="profile-details__title">I will DJ your party for 4 hours</p>
                                </div>
                                <div class="profile-details-delivery-container">
                                    <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                        delivery</p>
                                    <button class="profile-details__booking-btn">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="profile-services__card">
                            <img src="https://source.unsplash.com/200x200" alt="random"
                                 class="profile-services__service-image">
                            <div class="profile-services__profile-details">
                                <div class="profile-details__element-wrapper">
                                    <!--                            <i class="fa-solid fa-crown"></i>-->
                                    <p class="profile-details__title">I will DJ your party for 4 hours</p>
                                </div>
                                <div class="profile-details-delivery-container">
                                    <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                        delivery</p>
                                    <button class="profile-details__booking-btn">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="profile-services__card">
                            <img src="https://source.unsplash.com/200x200" alt="random"
                                 class="profile-services__service-image">
                            <div class="profile-services__profile-details">
                                <div class="profile-details__element-wrapper">
                                    <!--                            <i class="fa-solid fa-crown"></i>-->
                                    <p class="profile-details__title">I will DJ your party for 4 hours</p>
                                </div>
                                <div class="profile-details-delivery-container">
                                    <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                        delivery</p>
                                    <button class="profile-details__booking-btn">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="profile-reviews section-cards">
                        <h2 class="profile-reviews__title profile-section-titles">Reviews</h2>
                        <div class="profile-reviews-wrapper">
                            <img src="https://source.unsplash.com/800x800/?fruit,red" alt="">
                            <img src="https://source.unsplash.com/800x800/?fruit,yellow" alt="">
                            <img src="https://source.unsplash.com/800x800/?fruit,blue" alt="">
                            <img src="https://source.unsplash.com/800x800/?fruit,green" alt="">
                            <img src="https://source.unsplash.com/800x800/?fruit,orange" alt="">
                            <img src="https://source.unsplash.com/800x800/?fruit" alt="">
                        </div>
                    </section>
                </section>
                <!--End Profile-Elements-->
            </section>
        </main>
        </body>
        </html>
    `;
}

// export function JobEvent() {
//     getJobCard();
//     createJobEvent();
//     editJobEvent();
//     deleteJobEvent();
// }

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