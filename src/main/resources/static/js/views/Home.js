export default function Home(props) {
    return `
        <body>
        <main id="hero-section">
        <div class="hero-section-wrapper">
            <div class="hero-section-wrapper__main">
                <section class="hero-lede">
                    <h2>Talented Virtual Creators.<br>At Your Service.</h2>
                    <p>Connect with hand-picked talent, that is vetted and expertly matched to fit your needs.
                    </p>
                    <button class="hero-lede-btn">Get Started <i class="fa-solid fa-arrow-right"></i></button>
                </section>
                <section class="hero-graphic">
                    <img src="../../img/MetaverseGirl(1).png" alt="" class="falling-lady">
                </section>
            </div>
            <section class="hero-slider">
                <h2 id="hero-slider-title" class="hero-slider-title section-titles">Seller Spotlight</h2>
                <div class="media-scroller scroller-controls">
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Artist.png" alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will dj Nyango Star Metal for your party in
                            VR</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <button id="modal-btn"> Hire me</button>
<div class="modal">
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <label>name</label>
        <input type="text">
        <label>time/date</label>
        <input type="text">
        <label>email</label>
        <input type="text">
        <button>submit</button>
    </div>
</div>
<div class="modal">
    <form class="form" method="dialog">
    <div class="modal-header">
        </div>
    </form>
</div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Asian Man.png" alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will teach you how to make a nice bento
                            lunch</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <button id="modal-btn"> Hire me</button>
<div class="modal">
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <label>name</label>
        <input type="text">
        <label>time/date</label>
        <input type="text">
        <label>email</label>
        <input type="text">
        <button>submit</button>
    </div>
</div>
<div class="modal">
    <form class="form" method="dialog">
    <div class="modal-header">
        </div>
    </form>
</div>

                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Astronaut.png" alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will be your Yeezyology tutor</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <div class="creator-price-box">
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
                        </div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Baby.png" alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will read a book to you in my finest Boston
                            accent</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <div class="creator-price-box">
                            <div class='column is-4-tablet is-10-mobile name'>
                    <p>
                        <br>
                        <a class='button is-primary is-outlined' href='#' id='edit-preferences' style='margin: 5px 0'>
                            Hire Me
                        </a>
                        <br>
                    </p>
                </div>
                        </div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Black Man.png" alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator2</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will play the piccolo, dressed as Piccolo</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <div class="creator-price-box">
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
                        </div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Black Woman.png" alt="lady">
                            </div>
                        </div>
                       <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will dj Nyango Star Metal for your party in
                            VR</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <div class="creator-price-box">
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
                        </div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/College Student.png" alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will develop 100 Bitcoin for you</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <div class="creator-price-box">
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
                        </div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Designer.png" alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will style you like the Kardashian's</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <div class="creator-price-box">
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
                        </div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Doctor.png" alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will promote your business to my grandma,
                            once everyday</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <div class="creator-price-box">
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
                        </div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Farmer.png" alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will help you start a carpet cleaning
                            business in
                            the metaverse</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <div class="creator-price-box">
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
                        </div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Muslim Woman.png"
                                     alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I will teach you about the planet Bruno Mars</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <div class="creator-price-box">
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
                        </div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/Nerd Woman.png" alt="lady">
                            </div>
                        </div>
                        <div class="username-box">
                            <i class="fa-solid fa-person-rays"></i>
                            <p>creator22</p>
                        </div>
                        <div class="media-element__border"></div>
                        <p class="media-element__creator-description">I can even haz build things</p>
                        <div class="ratings-box">
                            <i class="fa-solid fa-star"></i>
                            <p class="user-rating">4.5</p>
                            <p class="number-of-jobs">(149)</p>
                        </div>
                        <div class="creator-price-box">
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </main>
</div>
<!--End of hero section-->
<!--Start of Wheel-->
<!--*****-->
<!--START CATEGORY SECTION-->
<section class="homepage-category-section">
    <div class="homepage-category-section__title-wrapper">
        <h2 id="categories-section" class="section-titles">Categories</h2>
    </div>
<div class="category-grid">
    <!--loosely following BEM-->
    <div class="category-cards">
        <div class="category-image-container">
            <img src="../../img/avatars/Nerd%20Woman.png" alt="DJ BOOTH" class="category-cards__img">
        </div>
        <div class="category-cards__shape"></div>
        <img src="../../img/avatars/Nerd%20Woman.png" alt="face avatar" class="category-cards__person-popup">
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
            <img src="../../img/avatars/Artist.png" alt="DJ BOOTH" class="category-cards__img">
        </div>
        <div class="category-cards__shape"></div>
        <img src="../../img/avatars/West%20Woman.png" alt="face avatar" class="category-cards__person-popup">
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
            <img src="../../img/avatars/Doctor.png" alt="DJ BOOTH" class="category-cards__img">
        </div>
        <div class="category-cards__shape"></div>
        <img src="../../img/avatars/Black%20Man.png" alt="face avatar" class="category-cards__person-popup">
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
            <img src="../../img/avatars/Artist.png" alt="DJ BOOTH" class="category-cards__img">
        </div>
        <div class="category-cards__shape"></div>
        <img src="../../img/avatars/Farmer.png" alt="face avatar" class="category-cards__person-popup">
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
            <img src="../../img/avatars/Asian%20Man.png" alt="DJ BOOTH" class="category-cards__img">
        </div>
        <div class="category-cards__shape"></div>
        <img src="../../img/avatars/West%20Woman.png" alt="face avatar" class="category-cards__person-popup">
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
            <img src="../../img/avatars/Artist.png" alt="DJ BOOTH" class="category-cards__img">
        </div>
        <div class="category-cards__shape"></div>
        <img src="../../img/avatars/Doctor.png" alt="face avatar" class="category-cards__person-popup">
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
            <img src="../../img/avatars/Black%20Man.png" alt="DJ BOOTH" class="category-cards__img">
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
            <img src="../../img/avatars/Baby.png" alt="DJ BOOTH" class="category-cards__img">
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
            <img src="../../img/avatars/West%20Woman.png" alt="DJ BOOTH" class="category-cards__img">
        </div>
        <div class="category-cards__shape"></div>
        <img src="../../img/avatars/Western%20Man.png" alt="face avatar" class="category-cards__person-popup">
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
        </body>

    `;
    let modalBtn = document.getElementById("modal-btn")
    let modal = document.querySelector(".modal")
    let closeBtn = document.querySelector(".close-btn")
    modalBtn.onclick = function () {
        modal.style.display = "block"
    }
    closeBtn.onclick = function () {
        modal.style.display = "none"
    }
    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none"
        }
    }
}

