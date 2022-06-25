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
                    <div class="profile-seller__seller-info-wrapper">
                        <p class="profile-seller__seller-name">Tony Hawk<br><span
                                class="profile-seller__talent-description">Hip-Hop DJ</span></p>
                        <div class="profile-seller__seller-bio">
                            <p class="profile-seller__seller-bio-title">Bio:</p>
                            <p class="profile-seller__seller-bio">Made in the USA. Made to DJ. I'm gonna blowout your speaks.</p>
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

        <!--SCRIPTS-->
<!--        <script src="app.js"></script>-->
        </body>
        </html>




    `;
}
