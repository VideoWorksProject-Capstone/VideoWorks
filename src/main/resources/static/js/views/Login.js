import createView from "../createView.js";

export default function Login(props) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Log In</title>
        </head>
        <body>
        <style type="text/css">
            body{
                margin:0;
                color:white;
                background:var(--main-black);
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
                background:#28203f;
            }
            .login-html .tab{
                font-size:22px;
                margin-right:15px;
                padding-bottom:5px;
                margin:0 15px 10px 0;
                display:inline-block;
                border-bottom:2px solid transparent;
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
            .login-form .group .login-btn{
                width:100%;
                color:#fff;
                display:block;
            }
            .login-form .group .input,
            .login-form .group .login-btn{
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
            .login-form .group .login-btn{
                background:#1161ee;
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