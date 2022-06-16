export default function Home(props) {
    return `
        <header>   
        </header> 
        <style>
        /*media scroller*/
.hero-slider{
    position: relative;
}
.media-scroller{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 275px;
/*position: absolute;*/
    /*border: limegreen 3px solid;*/
    grid-column-gap: 10px;
    overflow-x: auto;
}
.media-scroller::-webkit-scrollbar {
    display: none;
}

.scroller-controls{
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;
    /*scroll-padding-inline:20px ;*/
}

/*media element*/
.media-element{
    scroll-snap-align: center;
    border-radius: 13px;
    overflow: hidden;
    width: 270px;
    /*height: 450px;*/
    background-color: var(--white);
    box-shadow: 0 7px 21px 0 rgb(0 0 0 / 10%);
    /*border-top: var(--green) solid 5px;*/
    /*border-bottom: var(--green) solid 5px;*/
    padding-bottom: 20px;
}
.media-element__border{
    /*padding: 5px 1rem;*/
    width: 100%;
    /*border-top: 4px var(--green)dashed;*/
    /*background-color: var(--green);*/
    opacity: .2;
    margin-bottom: 1.5rem;
}
/*AVATAR CONTAINER*/
.avatar-hover-box{
    min-width: 100%;
    min-height: 212px;
    /*border: red 1px solid;*/
    /*background-color: #1c2bca;*/

}

.media-element .user-avatar-box{
/*background-color: var(--green);*/
    width: 170px;
    height: 170px;
    margin:20px auto 2rem auto;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    opacity: .9;
    transition: all 350ms ease;
}


.media-element:hover .user-avatar-box{
    border-radius: 25px;
    /*width: 90px;*/
    /*height: 90px;*/
    width: 205px;
    height: 205px;
    opacity: 1;
    /*padding-bottom: 80px;*/
}


.media-element .user-avatar-box .user-avatar-image1{
    position: absolute;
    width: 200px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.media-element .user-avatar-box .user-avatar-image1.hovered{
    position: absolute;
    width: 400px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
/*USERNAME*/
.media-element .username-box{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 25px;
    margin-bottom: 1rem;
}

.media-element  p, .username-box  i{
    color: var(--main-black);
    font-size: 1.8rem;
}
.media-element .username-box p{
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: .7px;
}
.username-box  i{
    /*color: var(--main-purple);*/
    margin-right: 1rem;
}

/*DESCRIPTION*/
.media-element__creator-description{
    padding: 0 25px;
    margin-bottom: 2rem;
}
/*RATINGS*/
.ratings-box{
display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 25px;
    margin-bottom: 1rem;
}
.ratings-box .fa-star,.ratings-box .user-rating{
    color: var(--orange);
    margin-right: .5rem;
}
.ratings-box .fa-star{
    margin-right: .5rem;
}
.ratings-box .number-of-jobs{
    color: #b2b2b2;
    font-weight: 300;
    font-size: 1.5rem;
}

/*creator price*/
.creator-price-box{
    padding: 0 25px;
}


.media-scroller .media-element > img{
    /*margin-bottom: 2rem;*/
    inline-size: 100%; /*logical property for vertical text*/
}
.media-element__title-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-around;

}



/*TODO: TABLET AND DESKTOP MEDIA QUERIES*/
@media screen and (min-width: 768px) {
    /*.media-scroller {*/
    /*    display: grid;*/
    /*    grid-auto-flow: column;*/
    /*    grid-auto-columns: 250px;*/
    /*}*/
}
.homepage-category-section{
    background-color: var(--main-purple);
    width: 100%;
    padding-bottom: 40px;
}
.category-grid {
    width: calc(100% - 60px);
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-gap: 25px;

}
.homepage-category-section__title-wrapper{
    width: calc(100% - 60px);
    max-width: 1400px;
    margin: 0 auto;
}
.homepage-category-section__title-wrapper h2{
/*override style in utilities*/
    padding: 100px 0 20px 0;
}
.category-cards{
    width: 100%;
    height: 400px;
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    border: 2px solid var(--purple);
}

.category-cards__img{
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
}

.category-cards__shape {
    background-image: linear-gradient(0deg , #3f5efb, #fc466b);
    border-radius: 25px;
    position: absolute;
    top: 40%;
    left: -30px;
    height: 69%;
    width: 120%;
    transform: skew(19deg, -9deg);
    transition: all 300ms ease-in;
    z-index: 21;
}

/*.category-cards__shape:hover*/
.category-cards:hover .category-cards__shape{
    transform: skew(0deg, 0deg);
    top: 45%;
}
/*.category-cards .category-cards__shape.hovered {*/
/*    transform: skew(0deg, 0deg);*/
/*    top: 45%;*/
/*}*/
.category-cards .category-cards__img {
    filter: blur(0);
    transition: filter 450ms ease-in;
}
.category-cards:hover .category-cards__img {
    filter: blur(4px);
}
/*.category-cards:hover .category-cards__img.hovered {*/
/*    filter: blur(4px);*/
/*}*/
.category-cards__person-popup{
    position: absolute;
    width: 50%;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -60%);
    transition: all 300ms ease-in-out 250ms;
}
.category-cards:hover .category-cards__person-popup{
    position: absolute;
    /*z-index: 20;*/
    width: 50%;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -35%);
    opacity: 1;
}
/*.category-cards__person-popup.hovered{*/
/*    position: absolute;*/
/*    !*z-index: 20;*!*/
/*    width: 50%;*/
/*    left: 50%;*/
/*    top: 35%;*/
/*    transform: translate(-50%, -35%);*/
/*    opacity: 1;*/
/*}*/




.category-cards__description {
    position: absolute;
    width: 90%;
    height: min-content;
top: 50%;
    left: 50%;
    transform: translateX(-50%);
/*    bottom: 0;*/
    z-index: 22;
}

.category-cards__description p{
    font-size: clamp(1.4rem, 1.325rem + 0.4286vw, 1.7rem);
    text-align: center;
    font-weight: 200;
    letter-spacing: var(--spacing4);
}
.category-cards__details {
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 22;
    padding: 0 10px;

}
.category-cards__details p{
   font-weight: bold;
    font-size: clamp(1.7rem, 1.6rem + 0.4200vw, 2rem);
    letter-spacing: var(--spacing4);
flex: 1;
}
.category-cards__details a{
    background-color: transparent;
    color: #fff;
    right: 30px;
    bottom: 10%;
    padding: 5px 10px;
    margin-left: 5px;
    border: 1px solid #fff;
    font-size: 1.4rem;
    letter-spacing: var(--spacing10);
    text-decoration: underline;
    text-underline-offset: 2px;
    /*width: max-content;*/
    max-width: 120px;
    flex: 2;
}

@media (min-width: 350px) and (max-width: 767px) {
    .category-cards__shape {
        background-image: linear-gradient(0deg , #3f5efb, #fc466b);
        border-radius: 25px;
        position: absolute;
        top: 45%;
        left: -30px;
        height: 69%;
        width: 115%;
        transform: skew(19deg, -9deg);
        transition: all 300ms ease-in;
        z-index: 21;
    }

    /*.category-cards__shape:hover*/
    .category-cards:hover .category-cards__shape{
        transform: skew(0deg, 0deg);
        top: 45%;
    }
    .category-cards__person-popup{
        position: absolute;
        width: 35%;
        left: 50%;
        top: 90%;
        transform: translate(-50%, -0%);
        transition: all 300ms ease-in-out 250ms;
    }
    .category-cards:hover .category-cards__person-popup{
        position: absolute;
        /*z-index: 20;*/
        width: 40%;
        left: 50%;
        top: 35%;
        transform: translate(-50%, -35%);
        opacity: 1;
    }
    .category-cards__description {
        position: absolute;
        width: 50%;
        height: min-content;
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
        /*    bottom: 0;*/
        z-index: 22;
    }

    .category-cards__details {
        justify-content: space-around;
    }
}

@media (min-width: 350px){
    /*.category-cards__details a {*/
    /*    padding: 8px 18px;*/
    /*    font-size: 1.5rem;*/
    /*}*/
    .category-cards__details p{
        letter-spacing: var(--spacing4);
        width: max-content;
    }
}
@media (min-width: 768px){
    .category-grid {
        grid-template-columns: repeat(2,1fr);
    }
    .category-cards__person-popup{
        left: 50%;
        top: 68%;
        transform: translate(-50%, -68%);
    }
    .category-cards__person-popup.hovered{

        width: 55%;
        left: 50%;
        top: 27%;
        transform: translate(-50%, -27%);
    }
}
@media (min-width: 960px){
    .category-grid {
        grid-template-columns: repeat(3,1fr);
    }
}
@media (min-width: 1200px){
    .category-grid {
        grid-template-columns: repeat(4,1fr);
    }
}
</style>
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
                                <img class="user-avatar-image1" src="../../img/avatars/Western Man.png" alt="lady">
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
                        <div class="creator-price-box">
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
                        </div>
                    </div>
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="../../img/avatars/woman.png" alt="lady">
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
                                <img class="user-avatar-image1" src="../../img/avatars/Muslim Woman.png" alt="lady">
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
                            <p>starting at <span class="creator-price-box__amount">$47</span></p>
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
                                <img class="user-avatar-image1" src="../../img/avatars/Farmer.png" alt="lady">
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
                                <img class="user-avatar-image1" src="../../img/avatars/Designer.png" alt="lady">
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
                                <img class="user-avatar-image1" src="../../img/avatars/Doctor.png" alt="lady">
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
                                <img class="user-avatar-image1" src="../../img/avatars/Artist.png" alt="lady">
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
                                <img class="user-avatar-image1" src="../../img/avatars/West%20Woman.png"
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
                                <img class="user-avatar-image1" src="../../img/avatars/Baby.png" alt="lady">
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
}
