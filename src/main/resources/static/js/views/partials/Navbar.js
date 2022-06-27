export default function Navbar(props) {
    return `
    <div class="hero">
        <header class="mobile-header-container">
            <nav class="mobile-nav">
                <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="40">
                    <path
                            class="line top"
                            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"/>
                    <path
                            class="line middle"
                            d="m 30,50 h 40"/>
                    <path
                            class="line bottom"
                            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"/>
                </svg>
                <div class="mobile-logo-wrapper">
                    <h1 id="mobile-logo"><a href="#">videoWorks</a></h1>
                </div>
                <div class="nav-login-btn-wrapper">
                    <button class="nav-login-btn">Login</button>
                </div>
            </nav>
        </header>
        <div class="mobile-menu">
            <ul class="mobile-menu__list">
                <li><a href="/" data-link>Home</a></li>
                <li><a href="/categories" data-link>Categories</a></li>
                <li><a href="/profile" data-link>Profile</a></li>
                <li><a href="/login" data-link>Login</a></li>
                <li><a href="/register" data-link>Register</a></li>
            </ul>
        </div>
        <header class="large-header-container">
            <nav class="large-nav">
                <ul class="large-menu__list">
                    <li><a href="/categories-section" data-link>Categories</a></li>
                    <li><a href="/profile" data-link>Profile</a></li>
                    <li class="large-logo-wrapper">
                        <h1 id="large-logo"><a href="/" data-link>videoWorks</a></h1>
                    </li>
                    <li><a href="/login" data-link>Login</a></li>
                    <li><a href="/register" data-link>Register</a></li>
                </ul>
                <!--            <div class="large-nav-login-btn-wrapper">-->
                <!--                <button class="large-nav-login-btn">Login</button>-->
                <!--            </div>-->
            </nav>
        </header>
    </div>
    `;
}

