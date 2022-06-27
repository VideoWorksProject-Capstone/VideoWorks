import createView from "../createView.js";

export default function Home(props) {
    // language=HTML
    console.log(props);
    console.log(props.jobs);
    return `
        <body>
        <!--Mobile First-->
        <div class="hero-area">
            <!--    Removed navbar-->
            <main id="hero-area-section">
                <div class="hero-area-section-wrapper">
                    <div class="hero-area-section-wrapper__main">
                        <section class="hero-area-lede">
                            <h2>Talented Virtual Creators.<br>At Your Service.</h2>
                            <br>
                            <p>Connect with hand-picked talent, that is vetted and expertly matched to fit your needs.
                            </p>
                            <button class="hero-area-lede-btn">Get Started <i class="fa-solid fa-arrow-right"></i>
                            </button>
                            <input type="search" name="search-services" id="">
                        </section>
                        <section class="hero-area-graphic,floating-woman-animation">
                            <img src="../../img/MetaverseGirl(1).png" alt="" class="falling-lady" width="500" height="500">
                        </section>
                    </div>
                    <section class="hero-area-slider">
                        <h2 id="hero-area-slider-title" class="hero-area-slider-title section-titles">Categories</h2>
                        <div class="media-scroller scroller-controls">
                            <div class="category-cards">
                                <div class="category-image-container">
                                    <img src="../../img/avatars/Artist.png" alt="DJ BOOTH" class="category-cards__img">
                                </div>
                                <div class="category-cards__shape"></div>
                                <img src="../../img/avatars/Black Man.png" alt="face avatar" class="category-cards__person-popup">
                                <div class="category-cards__description">
                                    <p>Host an unforgettable event with our VIP Dj's from around the world </p>
                                </div>
                                <div class="category-cards__details">
                                    <p class="category-cards__details__title">Virtual DJ's</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div class="category-cards">
                                <div class="category-image-container">
                                    <img src="../../img/avatars/Asian Man.png" alt="DJ BOOTH"
                                         class="category-cards__img">
                                </div>
                                <div class="category-cards__shape"></div>
                                <img src="../../img/avatars/Astronaut.png" alt="face avatar"
                                     class="category-cards__person-popup">
                                <div class="category-cards__description">
                                    <p>Learn to cook your favorite dish with one of our elite chef's</p>
                                </div>
                                <div class="category-cards__details">
                                    <p class="category-cards__details__title">Culinary Arts</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div class="category-cards">
                                <div class="category-image-container">
                                    <img src="../../img/avatars/Muslim Woman.png" alt="DJ BOOTH" class="category-cards__img">
                                </div>
                                <div class="category-cards__shape"></div>
                                <img src="../../img/avatars/Black Woman.png" alt="face avatar" class="category-cards__person-popup">
                                <div class="category-cards__description">
                                    <p>Our tutor's cover a wide range of topics</p>
                                </div>
                                <div class="category-cards__details">
                                    <p class="category-cards__details__title">Online Tutor's</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div class="category-cards">
                                <div class="category-image-container">
                                    <img src="../../img/avatars/Black Woman.png" alt="DJ BOOTH" class="category-cards__img">
                                </div>
                                <div class="category-cards__shape"></div>
                                <img src="../../img/avatars/College Student.png" alt="face avatar" class="category-cards__person-popup">
                                <div class="category-cards__description">
                                    <p>Books are better when you can hear them</p>
                                </div>
                                <div class="category-cards__details">
                                    <p class="category-cards__details__title">Book Reading's</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div class="category-cards">
                                <div class="category-image-container">
                                    <img src="../../img/avatars/College Student.png" alt="DJ BOOTH" class="category-cards__img">
                                </div>
                                <div class="category-cards__shape"></div>
                                <img src="../../img/avatars/College Student.png" alt="face avatar" class="category-cards__person-popup">
                                <div class="category-cards__description">
                                    <p>Let our producers mix and master your songs with studio quality</p>
                                </div>
                                <div class="category-cards__details">
                                    <p class="category-cards__details__title">Music Mastering</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div class="category-cards">
                                <div class="category-image-container">
                                    <img src="../../img/avatars/Designer.png" alt="DJ BOOTH" class="category-cards__img">
                                </div>
                                <div class="category-cards__shape"></div>
                                <img src="../../img/avatars/Designer.png" alt="face avatar" class="category-cards__person-popup">
                                <div class="category-cards__description">
                                    <p>Frontend, backend, fullstack. end-to-end IT solutions</p>
                                </div>
                                <div class="category-cards__details">
                                    <p class="category-cards__details__title">Development & IT</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div class="category-cards">
                                <div class="category-image-container">
                                    <img src="../../img/avatars/Doctor.png" alt="DJ BOOTH" class="category-cards__img">
                                </div>
                                <div class="category-cards__shape"></div>
                                <img src="../../img/avatars/Doctor.png" alt="face avatar" class="category-cards__person-popup">
                                <div class="category-cards__description">
                                    <p>World-class design - At your service</p>
                                </div>
                                <div class="category-cards__details">
                                    <p class="category-cards__details__title">Digital Designers</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div class="category-cards">
                                <div class="category-image-container">
                                    <img src="../../img/avatars/Farmer.png" alt="DJ BOOTH" class="category-cards__img">
                                </div>
                                <div class="category-cards__shape"></div>
                                <img src="../../img/avatars/Farmer.png" alt="face avatar" class="category-cards__person-popup">
                                <div class="category-cards__description">
                                    <p>Convert your visitors into leads and then into paying customers</p>
                                </div>
                                <div class="category-cards__details">
                                    <p class="category-cards__details__title">Online Marketing</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div class="category-cards">
                                <div class="category-image-container">
                                    <img src="../../img/avatars/Muslim Woman.png" alt="DJ BOOTH" class="category-cards__img">
                                </div>
                                <div class="category-cards__shape"></div>
                                <img src="../../img/avatars/Muslim Woman.png" alt="face avatar" class="category-cards__person-popup">
                                <div class="category-cards__description">
                                    <p>We handle your business affairs so you and help your business grow</p>
                                </div>
                                <div class="category-cards__details">
                                    <p class="category-cards__details__title">Business</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
        <!--End of hero-area section-->
        <!--Start of Wheel-->
        <!--*****-->
        <!--START CATEGORY SECTION-->
        <section class="homepage-category-section">
            <div class="homepage-category-section__title-wrapper">
                <h2 id="categories-section" class="section-titles">Seller Spotlight</h2>
            </div>
            <div class="category-grid">
                <!--loosely following BEM-->
                ${props.jobs.map(job => getHomeJobCard(job)).join('')}
            </div>
        </section>
        </body>
    `;
}

export function getHomeJobCard(job) {
    return `
                <div class="media-element" id="${job.id}" data-id="${job.id}"> 
                    <div class="avatar-hover-box">    
                        <div class="user-avatar-box"> 
                            <img class="user-avatar-image" type="image" src="${job.user.photo}" alt="category"/>
                        </div>      
                    </div>
                    <div class="username-box">
                        <i class="fa-solid fa-person-rays"></i>
                        <p>${job.user.username}</p>
                    </div>
                    <div class="media-element__border"></div>
                    <p class="media-element__creator-description">${job.description}</p>
                    <div class="creator-price-box">
                        <p>$<span class="creator-price-box__amount">${job.price}</span>/hr</p>
             
    <form action="/form" method="post">
                <div>Name:</div>
                <input type="text" name="name"/>
                <div>date:</div>
                <input type="text" name="date"/>
                <br/><br/>
                <div>Message:</div>
                <textarea rows="2" name="message"></textarea>
                <br/><br/>
                <input type="submit" value="Submit"/>
                <input type="reset" value="Reset"/>
            </form>
                    </div>
                </div>
`
}

function animation() {
    let heroAreaGraphicDiv = document.querySelector(".hero-area-graphic");

// pointing man
    const pointingPerson = new Image(450);
    pointingPerson.src = "hero-area/img/pointingPerson33.png";
    pointingPerson.classList.add("pointing-man-animation");

// floating woman
    const floatingWoman = new Image(525);
    floatingWoman.src = "../../img/MetaverseGirl(1).png";
    floatingWoman.classList.add("floating-woman-animation");

// leaning man
    const leaningMan = new Image(450);
    leaningMan.src = "hero-area/img/3d-Metaverse-man(2).png";
    leaningMan.classList.add("leaning-man-animation");

// diving woman
    const divingWoman = new Image(505);
    divingWoman.src = "hero-area/img/Metaverse Girl (4).png";
    divingWoman.classList.add("diving-woman-animation");

// array of image objects
    let floatingHeroAreaImages = [pointingPerson, floatingWoman, leaningMan, divingWoman];

// random image generator (from floatinghero-areaImages array)
    let setFloatingHeroAreaImage = () => {
        let randNum = Math.floor(Math.random() * 4);
        heroAreaGraphicDiv.appendChild(floatingHeroAreaImages[Math.floor(Math.random() * 4)])
    };
    animation(floatingWoman)
}