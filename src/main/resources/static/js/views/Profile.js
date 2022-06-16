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
                }
                .img {
                    height: 300px;
                    width: 300px;
                    border-radius: 50%;
                }
                .name {
                    font-size: 4em;
                }
                .bio {
                    font-size: 2em;
                }
                .rating-number {
                    display: flex;
                    justify-content: center;
                    color: black;
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
                .edit-btn {
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
                    <div class="edit">
                        <input type="button" class="edit-btn" value="Edit">
                    </div>
                    <div>
                        <input type="file" class="img" value="${props.user.photo}" alt="user">
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
                        <input type="number" class="rating-number" value="${props.user.rating}">4.0
                    </div>
                    <br>
                    <div>
                        <input type="textarea" name="Bio" class="bio" value="${props.user.bio}">
                    </div>
                    <div>
                        
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