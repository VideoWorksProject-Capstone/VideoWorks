export default function Home(props) {
    return `
        <header>   
        </header> 
        
        <body>
        <style>
        /* BEGIN CARD DESIGN */
.hero {
    display: inline-block;
    position: relative;
    width: 400px;
    min-width: 400px;
    height: 400px;
    border-radius: 30px;
    overflow:hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    margin: 30px;
}

.hero-profile-img {
    height: 70%;
}

.hero-description-bk {
    background-image: linear-gradient(0deg , #3f5efb, #fc466b);
    border-radius: 30px;
    position: absolute;
    top: 55%;
    left: -5px;
    height: 65%;
    width: 108%;
    transform: skew(19deg, -9deg);
}

.second .hero-description-bk {
    background-image: linear-gradient(-20deg , #bb7413, #e7d25c)
}

.hero-logo {
    height: 80px;
    width: 80px;
    border-radius: 20px;
    background-color: #fff;
    position: absolute;
    bottom: 30%;
    left: 30px;
    overflow:hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.7);
}

.hero-logo img {
    height: 100%;
}

.hero-description {
    position: absolute;
    color: #fff;
    font-weight: 900;
    left: 150px;
    bottom: 26%;
}

.category-card-btn {
    position: absolute;
    color: #fff;
    right: 30px;
    bottom: 10%;
    padding: 10px 20px;
    border: 1px solid #fff;
}

.hero-btn a {
    color: #fff;
}

.hero-date {
    position: absolute;
    color: #fff;
    left: 30px;
    bottom: 10%;
}

.media-element{
    scroll-snap-align: center;
    border-radius: 13px;
    overflow: hidden;
    width: 280px;
    /*height: 450px;*/
    background-color: var(--white);
    box-shadow: 0 7px 21px 0 rgb(0 0 0 / 10%);
    border-top: var(--green) solid 5px;
    border-bottom: var(--green) solid 5px;
    padding-bottom: 20px;
}
.media-element__border{
    /*padding: 5px 1rem;*/
    width: 100%;
    border-top: 4px var(--green)dashed;
    /*background-color: var(--green);*/
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
background-color: var(--green);
    width: 170px;
    height: 170px;
    margin:20px auto 2rem auto;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transition: all 350ms ease;
}

.media-element:hover .user-avatar-box{
    border-radius: 25px;
    /*width: 90px;*/
    /*height: 90px;*/
    width: 205px;
    height: 205px;
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
    /*aspect-ratio: 1/1;*/
    /*object-fit: cover;*/
    inline-size: 100%; /*logical property for vertical text*/
}
.media-element__title-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-around;

}

.media-scroller{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 275px;

    /*border: limegreen 3px solid;*/
    grid-column-gap: 20px;
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
.hero-slider-title{
    color: var(--white);
    text-transform: uppercase;
    font-size: 2.7rem;
    letter-spacing: 0.08rem;
}
/*TODO: TABLET AND DESKTOP MEDIA QUERIES*/
@media screen and (min-width: 768px) {
    /*.media-scroller {*/
    /*    display: grid;*/
    /*    grid-auto-flow: column;*/
    /*    grid-auto-columns: 250px;*/
    /*}*/
}
</style>
<!--start of homepage -->
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
                    <img src="" alt="" class="falling-lady">
                </section>
            </div>
            <section class="hero-slider">
                <h2 class="hero-slider-title">Seller Spotlight</h2>
                <div class="media-scroller scroller-controls">
                    <div class="media-element">
                        <div class="avatar-hover-box">
                            <div class="user-avatar-box">
                                <img class="user-avatar-image1" src="img/avatars/woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/West%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Muslim%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Astronaut.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Farmer.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Designer.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Doctor.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Artist.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Asia%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/College%20Student.png"
                                     alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Nerd%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Asian%20Man.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Baby.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                                <img class="user-avatar-image1" src="src/main/resources/static/img/avatars/Black%20Woman.png" alt="lady">
                            </div>
                        </div>
                        <!--                        <div class="media-element__creator-details">-->

                        <!--                        </div>-->
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
                </div>
            </section>
        </div>
    </main>
    <section class="category-grid">
        <div class="first category-card">
            <img class="category-card-img"
                 src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
                 alt="">
            <div class="category-card-description-bk"></div>
            <!--            <div class="hero-logo">-->
            <!--                <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt="">-->
            <!--            </div>-->
            <div class="category-card-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="category-card-title">
                <p>20.02.2019</p>
            </div>
            <button type="submit"><a href="#" class="category-card-btn">Get Started</a></button>
        </div>
        <div class="second category-card">
            <img class="category-card-img"
                 src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
                 alt="">
            <div class="category-card-description-bk"></div>
            <!--            <div class="hero-logo">-->
            <!--                <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt="">-->
            <!--            </div>-->
            <div class="category-card-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="category-card-title">
                <p>20.02.2019</p>
            </div>
            <button type="submit"><a href="#" class="category-card-btn">Get Started</a></button>
        </div>
    </section>
</div>
    `;
}
