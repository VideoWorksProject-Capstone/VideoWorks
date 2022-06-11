export default function Register(){
    //language=HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Register</title>
            <style type="text/css">

                body{
                    margin:0;
                    color:white;
                    background:white;
                    font:600 16px/18px 'Open Sans',sans-serif;
                }

                .login-wrap{
                    width:100%;
                    margin:auto;
                    max-width:525px;
                    min-height:670px;
                    position:relative;
                    box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
                }
                .login-html{
                    width:100%;
                    height:100%;
                    position:absolute;
                    padding:90px 70px 50px 70px;
                    background:rgba(40,57,101,.9);
                }
                
                .login-html .tab{
                    font-size:22px;
                    margin-right:15px;
                    padding-bottom:5px;
                    margin:0 15px 10px 0;
                    display:inline-block;
                    border-bottom:2px solid transparent;
                }
                .login-html .sign-up:checked + .tab{
                    color:#fff;
                    border-color:black;
                }
                .login-form{
                    min-height:345px;
                    position:relative;
                    perspective:1000px;
                    transform-style:preserve-3d;
                }
                .login-form .group{
                    margin-bottom:15px;
                }
                .login-form .group .label,
                .login-form .group .input,
                .login-form .group .button{
                    width:100%;
                    color:#fff;
                    display:block;
                }
                .login-form .group .input,
                .login-form .group .button{
                    border:none;
                    padding:15px 20px;
                    border-radius:25px;
                    background:rgba(255,255,255,.1);
                }
                .login-form .group input[data-type="password"]{
                    text-security:circle;
                    -webkit-text-security:circle;
                }
                .login-form .group .label{
                    color:#aaa;
                    font-size:12px;
                }
                .login-form .group .button{
                    background:#1161ee;
                }
                .login-form .group label .icon{
                    width:15px;
                    height:15px;
                    border-radius:2px;
                    position:relative;
                    display:inline-block;
                    background:rgba(255,255,255,.1);
                }

                .hr{
                    height:2px;
                    margin:05px 0 50px 0;
                    background:rgba(255,255,255,.2);
                }
                .foot-lnk{
                    text-align:center;
                    font-size: 20px;
                }
            </style>
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
                        <label for="dob" class="label">Date of Birth</label>
                        <input id="dob" name="dob" class="input" type="number" data-type="number"/>
                        </div>
                        <div class="group">
                        <input class="button" type="button" value="Register"/>
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <label for="tab-1">Already Member?</a></label>
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
            dob: $('#dob').val()
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