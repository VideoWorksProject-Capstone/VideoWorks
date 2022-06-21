export default function Profile(props){
    //language=HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>videoWorks | Profile Page</title>

        </head>
        <body>
        <div id="hero-area-section">
            <div class="hero-area-section-wrapper">
                <div class="profile-container">
                    <div class="profile-details-wrapper">
                        <div class="profile-details">
                            <div class="profile-pic-div">
                                <img src="../../img/3.jpeg" alt="testing" class="main-profile-img" id="profile-photo"/>
                                <input type="file" name="img-file" id="img-file">
                                <label for="img-file" id="upload-btn">Choose photo</label>
                            </div>
                            <div class="user-edit">
                                <h2 class="profile-username">Donald<br/>Duck</h2>
                                <button class="profile-edit-btn">Edit</button>
                            </div>
                            </div>
                            
                        </div>
                        <div class="seller-profile-description-wrapper">
<!--                            <i class="fa-solid fa-pencil"></i>-->
                            <p class="seller-profile-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate debitis dignissimos quam reiciendis, repellat sunt tempore? Consequuntur doloribus, error, facilis fugit inventore nobis nostrum quis recusandae, reprehenderit sint vitae!
                            </p>
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
