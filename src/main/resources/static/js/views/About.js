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
        <div>
            <br>
            <h1 class="about-title">Meet the Team</h1>
        </div>
        <div id="container-cards">
            <div class="container-card">
                <div class="card">
                    <div class="image-box">
                        <img width="400" src="../../img/headshot4.jpg">
                    </div>
                    <div class="card-details">
                        <a class="social-link" href="https://github.com/jordanfoote">GitHub</a>
                        <a class="social-link" href="https://www.linkedin.com/in/footejordan/">LinkedIn</a>
                        <h1>Jordan Foote<br><span>Full-Stack Developer</span></h1>
                    </div>
                </div>
            </div>
            <div class="container-card">
                <div class="card">
                    <div class="image-box">
                        <img width="400" src="../../img/headshot3.jpg">
                    </div>
                    <div class="card-details">
                        <a href="https://github.com/romeorpj" class="social-link">GitHub</a>
                        <a href="https://www.linkedin.com/in/richard-jackson09/" class="social-link" >LinkedIn</a>
                        <h1>Richard Jackson<br><span>Full-Stack Developer</span></h1>
                    </div>
                </div>
            </div>
            <div class="container-card">
                <div class="card">
                    <div class="image-box">
                        <img width="310" src="../../img/headshot.jpg">
                    </div>
                    <div class="card-details">
                        <a class="social-link" href="https://github.com/AnthonyHernandez34">GitHub</a>
                        <a class="social-link" href="https://www.linkedin.com/in/anthony-hernandez-b5a9b5231/">LinkedIn</a>
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