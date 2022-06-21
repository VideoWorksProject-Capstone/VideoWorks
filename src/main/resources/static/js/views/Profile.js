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
          <div id="hero-area-section">
            <div class="hero-area-section-wrapper">
                <div class="profile-container">
                    <div class="profile-details-wrapper">
                        <div class="profile-details">
                            <div class="profile-pic-div">
                                <input type="image" id="img" src="${props.user.photo}" alt="user" readonly> 
                                <input type="file" name="img-file" id="img-file">
                                <label for="img-file" id="upload-btn">Choose photo</label>
                            </div>
                            <div class="user-edit">
                                <p id="userId">${props.user.id}</p>
                                <button class="profile-edit-btn">Edit</button>
                            </div>
                            </div>
                            
                        </div>
                        <div class="seller-profile-description-wrapper">
<!--                            <i class="fa-solid fa-pencil"></i>-->
                          <p id="bio">${props.user.bio}</p>
                        </div>
                        
                        
<!--Start Modal-->
                    <dialog class="edit-profile-modal">
                        
                    </dialog>
<!--End Modal-->
                    <nav class="profile-navigation">
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                    </nav>
                    <main class="services-profile">
                        <div class="services-profile__services-container">
                            <h3 class="section-titles">Latest services:</h3>
                            <div class="services-profile-card__flex-wrapper">
                                <div class="services-profile__cards">
                                    <img src="../../img/3.jpeg" alt="test alt"/>
                                    <div class="services-profile-card__username">Tomcat77</div>
                                    <div class="services-profile__cards-bottom">
                                        <a href="#" class="services-card-hyperlinks"
                                        ><p class="services-profile-card__description">
                                            I will teach you how to make your bed
                                        </p></a
                                        >
                                        <div class="services-profile-card__description-wrapper">
                                            <div class="services-profile-card__ratings">
                                                <i class="fa-solid fa-star"></i>
                                                <p class="services-profile-card__ratings-percent">
                                                    4.7
                                                </p>
                                                <p class="services-profile-card__ratings-jobs">(167)</p>
                                            </div>
                                            <p class="services-profile-card-price">
                                                starting at
                                                <a href="#" class="services-card-hyperlinks"
                                                ><span class="services-profile-card-price-span"
                                                >$37</span
                                                ></a
                                                >
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="services-profile__cards">
                                    <img src="../../img/3.jpeg" alt="test alt"/>
                                    <div class="services-profile-card__username">Tomcat77</div>
                                    <div class="services-profile__cards-bottom">
                                        <a href="#" class="services-card-hyperlinks"
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
                                        <div class="services-profile-card__description-wrapper">
                                            <div class="services-profile-card__ratings">
                                                <i class="fa-solid fa-star"></i>
                                                <p class="services-profile-card__ratings-percent">
                                                    4.7
                                                </p>
                                                <p class="services-profile-card__ratings-jobs">(167)</p>
                                            </div>
                                            <p class="services-profile-card-price">
                                                starting at
                                                <a href="#" class="services-card-hyperlinks"
                                                ><span class="services-profile-card-price-span"
                                                >$37</span
                                                ></a
                                                >
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="services-profile__cards">
                                    <img src="../../img/3.jpeg" alt="test alt"/>
                                    <div class="services-profile-card__username">Tomcat77</div>
                                    <div class="services-profile__cards-bottom">
                                        <a href="#" class="services-card-hyperlinks"
                                        ><p class="services-profile-card__description">
                                            I will teach you how to make your bed
                                        </p></a
                                        >
                                        <div class="services-profile-card__description-wrapper">
                                            <div class="services-profile-card__ratings">
                                                <i class="fa-solid fa-star"></i>
                                                <p class="services-profile-card__ratings-percent">
                                                    4.7
                                                </p>
                                                <p class="services-profile-card__ratings-jobs">(167)</p>
                                            </div>
                                            <p class="services-profile-card-price">
                                                starting at
                                                <a href="#" class="services-card-hyperlinks"
                                                ><span class="services-profile-card-price-span"
                                                >$37</span
                                                ></a
                                                >
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="services-profile__cards">
                                    <img src="../../img/3.jpeg" alt="test alt"/>
                                    <div class="services-profile-card__username">Tomcat77</div>
                                    <div class="services-profile__cards-bottom">
                                        <a href="#" class="services-card-hyperlinks"
                                        ><p class="services-profile-card__description">
                                            I will teach you how to make your bed
                                        </p></a
                                        >
                                        <div class="services-profile-card__description-wrapper">
                                            <div class="services-profile-card__ratings">
                                                <i class="fa-solid fa-star"></i>
                                                <p class="services-profile-card__ratings-percent">
                                                    4.7
                                                </p>
                                                <p class="services-profile-card__ratings-jobs">(167)</p>
                                            </div>
                                            <p class="services-profile-card-price">
                                                starting at
                                                <a href="#" class="services-card-hyperlinks"
                                                ><span class="services-profile-card-price-span"
                                                >$37</span
                                                ></a
                                                >
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="services-profile__cards">
                                    <img src="../../img/3.jpeg" alt="test alt"/>
                                    <div class="services-profile-card__username">Tomcat77</div>
                                    <div class="services-profile__cards-bottom">
                                        <a href="#" class="services-card-hyperlinks"
                                        ><p class="services-profile-card__description">
                                            I will teach you how to make your bed
                                        </p></a
                                        >
                                        <div class="services-profile-card__description-wrapper">
                                            <div class="services-profile-card__ratings">
                                                <i class="fa-solid fa-star"></i>
                                                <p class="services-profile-card__ratings-percent">
                                                    4.7
                                                </p>
                                                <p class="services-profile-card__ratings-jobs">(167)</p>
                                            </div>
                                            <p class="services-profile-card-price">
                                                starting at
                                                <a href="#" class="services-card-hyperlinks"
                                                ><span class="services-profile-card-price-span"
                                                >$37</span
                                                ></a
                                                >
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="services-profile__cards">
                                    <img src="../../img/3.jpeg" alt="test alt"/>
                                    <div class="services-profile-card__username">Tomcat77</div>
                                    <div class="services-profile__cards-bottom">
                                        <a href="#" class="services-card-hyperlinks"
                                        ><p class="services-profile-card__description">
                                            I will teach you how to make your bed
                                        </p></a
                                        >
                                        <div class="services-profile-card__description-wrapper">
                                            <div class="services-profile-card__ratings">
                                                <i class="fa-solid fa-star"></i>
                                                <p class="services-profile-card__ratings-percent">
                                                    4.7
                                                </p>
                                                <p class="services-profile-card__ratings-jobs">(167)</p>
                                            </div>
                                            <p class="services-profile-card-price">
                                                starting at
                                                <a href="#" class="services-card-hyperlinks"
                                                ><span class="services-profile-card-price-span"
                                                >$37</span
                                                ></a
                                                >
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 class="section-titles">Reviews:</h3>
                        <div class="services-profile__reviews-container">
                            <div class="new-review_customer-wrapper">
                                <div class="customer-username-wrapper">
                                    <p class="customer-username">coolGuy30</p>
                                    <i class="fa-solid fa-star"></i>
                                    <sup class="reviews__customer-rating">4.7</sup>
                                    customers-rating
                                </div>
                                <p class="new-review_customer-review">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Doloribus temporibus non magnam excepturi molestias eaque
                                    cumque sequi molestiae ab praesentium. Lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit. Doloribus temporibus non
                                    magnam excepturi molestias eaque cumque sequi molestiae ab
                                    praesentium.
                                </p>
                            </div>
                            <div class="new-review_customer-wrapper">
                                <div class="customer-username-wrapper">
                                    <p class="customer-username">coolGuy30</p>
                                    <i class="fa-solid fa-star"></i>
                                    <sup class="reviews__customer-rating">4.7</sup>
                                    customers-rating
                                </div>
                                <p class="new-review_customer-review">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Doloribus temporibus non magnam excepturi molestias eaque
                                    cumque sequi molestiae ab praesentium. Lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit. Doloribus temporibus non
                                    magnam excepturi molestias eaque cumque sequi molestiae ab
                                    praesentium.
                                </p>
                            </div>
                            <div class="new-review_customer-wrapper">
                                <div class="customer-username-wrapper">
                                    <p class="customer-username">coolGuy30</p>
                                    <i class="fa-solid fa-star"></i>
                                    <sup class="reviews__customer-rating">4.7</sup>
                                    customers-rating
                                </div>
                                <p class="new-review_customer-review">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Doloribus temporibus non magnam excepturi molestias eaque
                                    cumque sequi molestiae ab praesentium. Lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit. Doloribus temporibus non
                                    magnam excepturi molestias eaque cumque sequi molestiae ab
                                    praesentium.
                                </p>
                            </div>
                            <div class="new-review_customer-wrapper">
                                <div class="customer-username-wrapper">
                                    <p class="customer-username">coolGuy30</p>
                                    <i class="fa-solid fa-star"></i>
                                    <sup class="reviews__customer-rating">4.7</sup>
                                    customers-rating
                                </div>
                                <p class="new-review_customer-review">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Doloribus temporibus non magnam excepturi molestias eaque
                                    cumque sequi molestiae ab praesentium. Lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit. Doloribus temporibus non
                                    magnam excepturi molestias eaque cumque sequi molestiae ab
                                    praesentium.
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
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