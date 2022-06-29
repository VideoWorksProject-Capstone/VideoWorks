import createView from "../createView.js";
export default function About(props) {
    //language=HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Register</title>
        </head>
        <body>
        <div id="container-cards">

            <div class="container-card">
                <div class="card">
                    <div class="image-box">
                        <img width="310" src="../../img/headshot4.jpg">
                    </div>
                    <ul class="social-icons">
                        <li><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                    <div class="card-details">
                        <h1>Jordan Foote<br><span>Full-Stack Developer</span></h1>
                    </div>
                </div>
            </div>
            <div class="container-card">
                <div class="card">
                    <div class="image-box">
                        <img width="400" src="../../img/headshot3.jpg">
                    </div>
                    <ul class="social-icons">
                        <li><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                    <div class="card-details">
                        <h1>Richard Jackson<br><span>Full-Stack Developer</span></h1>

                    </div>
                </div>
            </div>

            <div class="container-card">
                <div class="card">
                    <div class="image-box">
                        <img width="310" src="../../img/headshot.jpg">
                    </div>
                    <ul class="social-icons">
                        <li><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                    <div class="card-details">
                        <h1>Anthony Hernandez<br><span>Full-Stack Developer</span></h1>
                    </div>
                </div>
            </div>
            </div>

        </div>
        </body>
    
    
        </html>
    
       `;
}
