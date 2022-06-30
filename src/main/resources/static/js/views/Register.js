import createView from "../createView.js";

export default function Register(){
    //language=HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Register</title>
        </head>
        <body>
        <div class="login-wrap">
            <div class="login-html">
                <label for="tab-2" class="tab">Sign Up</label>
                <form class="login-form">
                    <div class="sign-up-htm">
                        <div class="group">
                        <label for="name" class="label">Name</label>
                        <input id="name" name="name" class="input" type="text"/>
                        </div>
                        <div class="group">
                        <label for="username" class="label">Username</label>
                        <input id="username" name="username" class="input" type="text"/>
                        </div>
                        <div class="group">
                        <label for="email" class="label">Email</label>
                        <input id="email" type="email" class="input" name="email">
                        </div>
                        <div class="group">
                        <label for="password" class="label">Password</label>
                        <input id="password" name="password" class="input" type="password" data-type="password"/>
                        </div>
                        <div class="group">
                        <label for="boi" class="label">Tell us about yourself</label>
                        <input id="bio" name="bio" class="input" type="text"/>
                        </div>
                        <div class="group">
                        <input class="button" type="button" value="Register"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </body>
        </html>
    `;
}

export function RegisterEvent(){
    $(document).on('click', '.button', function(e){
        const reqBody = {
            name: $('#name').val(),
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            bio: $('#bio').val()
        }

        const options = {
            headers: {
                "Content-Type":"application/json"
            },
            method: 'POST',
            body: JSON.stringify(reqBody)
        }

        fetch("https://videoworks.fulgentcorp.com:8080/api/users/create", options)
            .then(response => {
                console.log(response)
                console.log(response.status);
                if (response.status === 500) {
                    document.getElementById("emailOrUsernameExists").style.display = "block";
                    document.getElementById("emailOrUsernameExists").style.color = "red";
                    return;
                }
                createView( "/login")
            });
    });
}