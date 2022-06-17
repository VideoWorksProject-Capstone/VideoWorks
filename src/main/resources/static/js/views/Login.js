import createView from "../createView.js";

export default function Login(props) {
    return `
        

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login | Login to your profile</title>
</head>
        <body>
            <div class="login-wrap">
                <div class="login-html">
                    <label for="tab-1" class="tab">Sign In</label>
                    <form class="login-form">
                        <div class="sign-in-htm">
                            <div class="group">
                                <label for="email">Email</label>
                                <input id="email" type="text" class="input">
                            </div>
                            <div class="group">
                                <label for="password">Password</label>
                                <input id="password" type="password" class="input" data-type="password">
                            </div>
                            <div class="group">
                                <input type="submit" class="login-btn" value="Sign In">
                            </div>
                            <div class="hr"></div>
                            <div class="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </body>
        </html>
    `;
}
createView( "/login");