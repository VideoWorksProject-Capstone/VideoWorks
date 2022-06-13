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
                <li><a href="/support" data-link>Support</a></li>
            </ul>
        </div>
        <header class="large-header-container">
            <nav class="large-nav">
                <ul class="large-menu__list">
                    <li><a href="/categories" data-link>Categories</a></li>
                    <li><a href="/profile" data-link>Profile</a></li>
                    <li class="large-logo-wrapper">
                        <h1 id="large-logo"><a href="/" data-link>video<span>Works</span></a></h1>
                    </li>
                    <li><a href="/login" data-link>Login</a></li>
                    <li><a href="/register" data-link>Register</a></li>
                    <li><a href="/support" data-link>Support</a></li>
                </ul>
                <!--            <div class="large-nav-login-btn-wrapper">-->
                <!--                <button class="large-nav-login-btn">Login</button>-->
                <!--            </div>-->
            </nav>
        </header>
    </div>
    <style>
    /*Mobile First*/


.large-header-container {
    display: none;
    pointer-events: none;
}

.mobile-header-container {
    padding: 0 20px 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    max-height: 117.5px;
    transition: background 600ms ease-out 500ms;
    /*position: fixed;*/
    /*margin-bottom: 60px;*/
}

.mobile-header-container.purp-container-background {
    background: var(--main-purple);
}

.mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: auto;

    /*background: white;*/
}

/*TODO: Logo*/
.hero .mobile-logo-wrapper #mobile-logo > a{
    color: var(--white);
    font-size: 2rem;
    font-weight: 200;
    cursor: pointer;
}

/*TODO: Nav Login Button*/
.nav-login-btn {
    width: 60px;
    height: 30px;
    border-radius: 15px;
    background: var(--btn-accent);
    color: var(--white);
    font-size: 1.4rem;
    letter-spacing: .070em;
    /*font-weight: 600;*/
    transition: all 400ms ease;
}

.nav-login-btn:hover {
    background-image: linear-gradient(to left, var(--left-gradient), var(--right-gradient));
}

.nav-login-btn:active {
    transform: scale(.9);
}

/*TODO: Animated Hamburger*/
.ham1 .top {
    stroke-dasharray: 40 139;
}

.ham1 .bottom {
    stroke-dasharray: 40 180;
}

.ham1.active .top {
    stroke-dashoffset: -98px;
}

.ham1.active .bottom {
    stroke-dashoffset: -138px;
}

.ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 999;
}

.hamRotate.active {
    transform: rotate(45deg);
}

.hamRotate180.active {
    transform: rotate(180deg);
}

.line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: var(--white);
    stroke-width: 4;
    stroke-linecap: round;
}

/*TODO: MOBILE MENU SLIDEOUT*/
.mobile-menu {
    width: 100%;
    height: 90%;/*80px is the header height - removes overflow*/
    background: var(--main-purple);
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    position: fixed;
    bottom: 0;
    transform: translatey(20%);
    opacity: 0;
    pointer-events: none;
    /*transition: all 600ms ease 150ms;*/
    transition: all 600ms ease;
    /*overflow: hidden;*/
    display: none;
    z-index: 44;
    overflow: hidden;
}

.mobile-menu.open {
    transition: all 600ms ease 150ms;
    opacity: 1;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    /*position: fixed;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    height: 90%;
    transform: translatey(0px);
}

.mobile-menu__list {
    width: 90%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
}

.mobile-menu__list li {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: rgba(245, 245, 245, 0.47) 1px solid;
}

.mobile-menu__list li a {
    color: var(--white);
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.07rem;
    cursor: pointer;
}


/*TODO: TABLET AND DESKTOP MEDIA QUERIES*/
@media screen and (min-width: 768px) {
    .mobile-header-container, .mobile-menu {
        display: none;
        pointer-events: none;
    }

    /*header*/
    .large-header-container {
        display: block;
        pointer-events: all;
        width: 100%;
        padding: 20px 20px 60px 20px;
    }

    /*nav*/
    .large-nav {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        margin: auto;
    }

    /*nav ul*/
    .large-menu__list {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        max-width: 1000px;
    }
#large-logo{
    cursor: pointer;
}
    /*logo*/
    .large-logo-wrapper span {
        color: var(--text-accent);
    }

    .large-logo-wrapper {
        width: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero .large-header-container #large-logo {
        color: var(--white);
        font-size: 2.5rem;
        font-weight: 500;
    }

    /*hyperlinks - large nav*/
    .large-menu__list li a {
        color: var(--white);
        font-size: 1.5rem;
        font-weight: 300;
        letter-spacing: 0.07rem;
        cursor: pointer;
    }
}
</style>
    <script>
    
let hamburgerImg = document.querySelector(".ham1");
let mobileMenu = document.querySelector(".mobile-menu");
let headerContainer = document.querySelector(".mobile-header-container");

let slideInMobileMenu = () => {
    mobileMenu.classList.toggle("open");
    hamburgerImg.classList.toggle("active");
    headerContainer.classList.toggle("purp-container-background");
}


hamburgerImg.addEventListener("click",slideInMobileMenu);
</script>
    `;
}

