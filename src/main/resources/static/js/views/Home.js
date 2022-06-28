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

