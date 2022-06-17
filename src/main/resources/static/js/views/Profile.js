export default function Profile(props) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>
                .profile {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                }
                .fa {
                  font-size: 25px;
                }
                .checked {
                  color: orange;
                }
                .header {
                    border: 5px solid lightgray;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-content: center;
                }
                #img {
                    height: 300px;
                    width: 300px;
                    border-radius: 50%;
                }
                .name {
                    font-size: 4em;
                    display: flex;
                    justify-content: center;
                }
                #bio {
                    font-size: 2em;
                    display: flex;
                    justify-content: center;
                }
                .rating-number {
                    display: flex;
                    justify-content: center;
                    color: black;
                    font-size: 1.5em;
                }
                .services {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-grow: 3;
                }
                .service-heading {
                    font-size: 4em;
                }
                #edit-btn {
                    height: 30px;
                    width: 60px;
                    font-size: 1.5em;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="profile">
                <div class="header">
                    <div>
                        <input type="image" id="img" value="${props.user.photo}" alt="user"> 
                    </div>
                    <br>
                    <div>
                        <input type="text" class="name" value="${props.user.name}">
                    </div>
                    <br>
                    <div class="rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <input type="number" class="rating-number" value="${props.user.rating}">
                    </div>
                    <br>
                    <div>
                        <input type="textarea" name="Bio" id="bio" value="${props.user.bio}">
                    </div>
                    <div class="edit">
                        <button type="submit" id="edit-btn">Edit</button>
                        <button type="submit" id="done-btn">Done</button>
                    </div>
                </div>
                <div class="services">
                    <text class="service-heading">Services</text>
                </div>
            </div>
        </body>
        </html>
    `;
}