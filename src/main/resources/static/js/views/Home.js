import createView from "../createView.js";

export default function Home(props) {
    // language=HTML
    console.log(props);
    console.log(props.jobs);
    return `
        <body>
        <!--Mobile First-->
        <!-- MAIN -->
        <main>
            <!-- INTERACTIVE VR -->
            <section id="about" class="container">
                <div class="interactive">
                    <div class="interactive-img">
                        <img src="https://raw.githubusercontent.com/ViktoriiaZaichuk/Frontend-Mentor-Loopstudios-landing-page/main/images/desktop/image-interactive.jpg" alt="Leader interactive VR">
                    </div>
                    <div class="interactive-txt">
                        <h2>The leader in interactive VR</h2>
                        <p>Founded in 2022, Loopstudios has been producing world-class virtual reality
                            projects for some of the best companies around the globe. Our award-winning
                            creations have transformed businesses through digital experiences that bind
                            to their brand.</p>
                    </div>
                </div>
            </section>

            <!-- OUR CREATIONS -->
            <section id="products" class="container">
                <div class="creations color-inherit">
                    <h2>Our creations</h2>

                    <button>See all</button>

                    <!-- GALLERY -->
                    <div class="creations-deepearth flex flex-ai-fe">
                        <a href="">
                            <h3>Deep<br>earth</h3>
                        </a>
                    </div>

                    <div class="creations-nightarcade flex flex-ai-fe">
                        <a href="">
                            <h3>Night<br>arcade</h3>
                        </a>
                    </div>

                    <div class="creations-soccerteam flex flex-ai-fe">
                        <a href="">
                            <h3>Soccer<br>team VR</h3>
                        </a>
                    </div>

                    <div class="creations-thegrid flex flex-ai-fe">
                        <a href="">
                            <h3>The<br>grid</h3>
                        </a>
                    </div>

                    <div class="creations-fromup flex flex-ai-fe">
                        <a href="">
                            <h3>From up<br>above VR</h3>
                        </a>
                    </div>

                    <div class="creations-pocketborealis flex flex-ai-fe">
                        <a href="">
                            <h3>Pocket<br>borealis</h3>
                        </a>
                    </div>

                    <div class="creations-curiosity flex flex-ai-fe">
                        <a href="">
                            <h3>The<br>curiosity</h3>
                        </a>
                    </div>

                    <div class="creations-makeit flex flex-ai-fe">
                        <a href="">
                            <h3>Make it<br>fisheye</h3>
                        </a>
                    </div>
                </div>

            </section>
        </main>

        <!-- FOOTER -->
        <footer>
            <div class="footer container">
                <!-- LOGO -->
                <div class="footer-logo flex flex-jc-c">
                    <img src=" alt="Logo">
                </div>

                <!-- NAVIGATION -->
                <div class="footer-navigation">
                    <ul class="flex flex-ai-c flex-fd-c">
                        <li><a href="">About</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>

                <!-- SOCIAL -->
                <div class="footer-social">
                    <ul class="flex flex-ai-c flex-jc-c">
                        <li><a href=""><img src="" alt="Facebook"></a></li>
                        <li><a href=""><img src="" alt="Twitter"></a></li>
                        <li><a href=""><img src=""></a></li>
                        <li><a href=""><img src="" alt="Instagram"></a></li>
                    </ul>
                </div>
        </html>
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