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
                    <p>Connect with hand-picked talent, that is vetted and expertly matched to fit your needs.
                    </p>
                    <button class="hero-area-lede-btn">Get Started <i class="fa-solid fa-arrow-right"></i></button>
                    <input type="search" name="search-services" id="">
                </section>
                <section class="hero-area-graphic">
                    <img src="../../img/MetaverseGirl(1).png" alt="" class="falling-lady">
                </section>
            </div>
            <section class="hero-area-slider">
                <h2 id="hero-area-slider-title" class="hero-area-slider-title section-titles">Categories</h2>
                <div class="media-scroller scroller-controls">
                    <div class="category-cards">
                        <div class="category-image-container">
                            <img src="" alt="DJ BOOTH" class="category-cards__img">
                        </div>
                        <div class="category-cards__shape"></div>
                        <img src="" alt="face avatar" class="category-cards__person-popup">
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
                            <img src="" alt="DJ BOOTH" class="category-cards__img">
                        </div>
                        <div class="category-cards__shape"></div>
                        <img src="" alt="face avatar" class="category-cards__person-popup">
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
                            <img src="" alt="DJ BOOTH" class="category-cards__img">
                        </div>
                        <div class="category-cards__shape"></div>
                        <img src="" alt="face avatar" class="category-cards__person-popup">
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
                            <img src="" alt="DJ BOOTH" class="category-cards__img">
                        </div>
                        <div class="category-cards__shape"></div>
                        <img src="" alt="face avatar" class="category-cards__person-popup">
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
                            <img src="" alt="DJ BOOTH" class="category-cards__img">
                        </div>
                        <div class="category-cards__shape"></div>
                        <img src="" alt="face avatar" class="category-cards__person-popup">
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
                            <img src="" alt="DJ BOOTH" class="category-cards__img">
                        </div>
                        <div class="category-cards__shape"></div>
                        <img src="" alt="face avatar" class="category-cards__person-popup">
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
                            <img src="" alt="DJ BOOTH" class="category-cards__img">
                        </div>
                        <div class="category-cards__shape"></div>
                        <img src="" alt="face avatar" class="category-cards__person-popup">
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
                            <img src="" alt="DJ BOOTH" class="category-cards__img">
                        </div>
                        <div class="category-cards__shape"></div>
                        <img src="" alt="face avatar" class="category-cards__person-popup">
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
                            <img src="" alt="DJ BOOTH" class="category-cards__img">
                        </div>
                        <div class="category-cards__shape"></div>
                        <img src="" alt="face avatar" class="category-cards__person-popup">
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
                    </div>
                </div>
`
}

