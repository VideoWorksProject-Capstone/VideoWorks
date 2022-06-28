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
        <section class="vh-100 bg-image"
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                                    <form>

                                        <div class="form-outline mb-3">
                                            <label for="name" class="label">Name</label>
                                            <input id="name" name="name" class="form-control form-control-md" type="text"/> 
                                        </div>

                                        <div class="form-outline mb-4">
                                            <label for="username" class="label">Username</label>
                                            <input id="username" name="username" class="form-control form-control-lg" type="text"/>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label for="email" class="label">Email</label>
                                            <input id="email" type="email" class="form-control form-control-lg" name="email">
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label for="password" class="label">Password</label>
                                            <input id="password" name="password" class="form-control form-control-lg" type="password" data-type="password"/>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label for="boi" class="label">Tell us about yourself</label>
                                            <input id="bio" name="bio" class="form-control form-control-lg" type="text"/>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                                <input class="button" type="button" value="Register"/>
                                        </div>

                                        <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login" data-link>Login</a></p>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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

        fetch("http://localhost:8080/api/users/create", options)
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