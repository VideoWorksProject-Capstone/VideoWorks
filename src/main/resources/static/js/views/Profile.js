export default function Profile(props) {
    //language=HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
<style>
:root{
    --color:black;
    --t-color:darkblue;
    --d-c:black;
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box
}
body {
    overflow-x: hidden;
    background: black;
    background-position: center;
    background: repeat;
}
ul, li{
    list-style:none;
}
a{
    text-decoration:none;
}
header{
    display: flex;
    justify-content: space-between;
    align-item: center;
    background: #ffffff;
    box-shadow: 0 0 4px rgba(0,0,0.15),0 4px 5px rgba(0,0,0.3);
    height: 69px;
    z-index:10;
    position: relative;
    top: 0;
    left: 0;
}
header .logo {
    padding: 15px 25px;
}
header .logo h1 {
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    color: var(--t-color) ;
}
header .nav{
    position: relative;
    border-left: 1px solid #e9e9e9;
}
header .nav ul {
    display: flex;
    justify-content: space-between;
}

header .nav ul li {
    padding: 26px 20px 24px 20px;
    transition: all .4s ease-in;
    cursor: pointer;
}
header .nav ul li h3{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    text-transform:uppercase ;
    font-size: 1em;
}
header .nav ul li.active,header .nav ul li:hover {
    background: var(--d-c);
    box-shadow: 0 -4px 0px var(--color) inset;
    color: red;
}
.bars {
    /*display: none;*/
    margin-right: 20px;
    color:#797979;
    cursor: pointer;
    font-size: 1.6em;
}
.nav-mobile {
    display: none;
}
aside{
    position: relative;
    top: 4px;
    box-shadow: 0 0 4px rgba(0,0,0.15),0 4px 5px rgba(0,0,0.3);
   width: 270px;
    height: 100%;
    z-index: 10;
    float: left;
    background: #fff;
    font-family: 'Poppins', sans-serif;
    overflow: auto;
}
aside h1 {
    padding: 20px;
    text-transform: uppercase;
    color: var(--t-color);
}
.close{
    float: right;
    font-size: .9em;
    display: none;
    cursor: pointer;
}
aside .user-side{
    padding: 20px;
    border-top: 1px solid#e9e9e9;
}
aside .user-pic{
    float: left;
    width: 70px;
    height: 70px;
    padding: 2px;
    border-radius: 12px;
    margin-right: 15px;
    overflow: hidden;
}
aside .user-pic image {
    width: 100%;
    height: 100%;
}
aside .user-info {
    display: flex;
    flex-direction: column;
    color: var(--t-color);
}
aside .name {
    margin-bottom: 4px;
    font-size: 1.3em;
    text-transform: uppercase;
    font-weight: 900;
}
aside .mail,
aside .status {
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
}
aside .status {
    margin-top: 3px;
    position: relative;
    margin-left: 10px;
}
aside .status:before::before{
    content:"";
    position: absolute;
    width: 7px;
    height: 7px;
    background: lightgreen;
    border-radius: 50%;
    left: -10px;
    top: 5.5px;
}
aside .search {
    border-top:1px solid #e9e9e9e9;
    padding: 20px;
}
aside .search .row {
    position: relative;
    display: flex;
    width: 100%;
}
aside .search input{
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 1rem;
    line-height: 1.5;
    border:1px solid #dfdfdfdf;
    border-radius: 4px 0 0 4px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}
aside .search input button{
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: 0 4px 4px 0;
    border: 1px solid var(--d-c);
    color: #ffff;
    outline: none;
    cursor: pointer;
    border-left: 0;
}
.side-nav{
    border-top: solid #e9e9e9;
    padding: 20px 0 10px;
    padding-bottom: 10px;
    margin-bottom: 40px;
}
.side-nav h2 {
    font-size: 1.2em;
    padding: 10px 0px 5px 20px;
    color: var(--t-color);
    margin-bottom: 10px;
}
.side-nav ul li {
    display: flex;
    width: 100%;
    position: relative;
    padding: 8px 0px 8px 20px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all .4s ease;
}
.side-nav ul li.active,
.side-nav ul li:hover {
    background: #eee;
}
.side-nav ul li span {
    margin-right: 10px;
    font-size: 12px;
    width:  30px;
    height:  30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
    background: darkblue;
    color: #fff;
}
.side-nav ul li h3 {
    line-height: 30px;
    font-size: 1.2em;
    color:var(--t-color);
    font-weight: 100;
}
.bt-nav{
    background: var(--t-color);
    position: absolute;
    bottom: 0;
    width: 100%;
}
.bt-nav ul {
    display: flex;
    justify-content: space-between;
}
.bt-nav ul li {
    line-height: 30px;
    position: relative;
    color: #fff;
    cursor: pointer;
}
.alert::after,
.message::after{
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    top: 2px;
    background: red;
}
.alert::after{
    background: lightgreen;
}
.m-bar {
    display: none;
}

</style>
<body>
<div class="container">
    <header>
        <div class="logo">
            <h1>test</h1>
        </div>
        <div class="bars">
            <span><i class="fa fa-bars"></i> </span>
        </div>
        <div class="nav">
            <ul>
                <li>
                    <h3>Home</h3>
                </li>
                <li>
                    <h3>about</h3>
                </li>
                <li>
                    <h3>contacts</h3>
                </li>
                <li class="active">
                    <h3>account</h3>
                </li>
            </ul>
        </div>
    </header>
    <div class="nav-mobile">
        <ul>
            <li>
            <li>
                <span><i class="fa fa-house"></i> </span>
                <h3>Home</h3>
            </li>
            <li>
                <span><i class="fa fa-address-card"></i> </span>
                <h3>about</h3>
            </li>
            <li>
                <span><i class="fa fa-phone-square-alt"></i> </span>
                <h3>contacts</h3>
            </li>
            <li class="active">
                <span><i class="fa fa-user-circle"></i> </span>
                <h3>account</h3>
            </li>
        </ul>
    </div>
    <div class="m-bar">
        <m-bar>
            <span><i class="fa fa-ellipsis-y"></i> </span>
        </m-bar>
    </div>
    <aside class="sidebar">
        <h1>Profile<span><i class="fa fa-times"></i> </span></h1>
        <div class="user-pic">
            <img width="75" src=../src/main/resources/static/js/views/img/avatars/Artist.png alt=""><img>
        </div>
        <br>
        <div class="user-info">
            <span class="name">Anthony</span>
            <span class="mail">ants.hernandez@gmail.com</span>
            <span class="status">online</span>
        </div>
        <div class="search">
            <form>
                <div class="row">
                    <input type="text" placeholder="Search Profile..">
                    <button type="submit"><span><i class="fa fa-search"></i> </span></button>
                </div>
            </form>
        </div>
        <div class="side-nav">
            <nav>
                <ul>
                    <li class="active" onclick="show(0)">
                        <span><i class="fa fa-tachometer"></i></span>
                        <h3>Dashboard</h3>
                    </li>
                    <li onclick="show(1)">
                        <span><i class="fa fa-star"></i></span>
                        <h3>Reviews</h3>
                    </li>
                    <li onclick="show(2)">
                        <span><i class="fa fa-comments"></i></span>
                        <h3>Bio</h3>
                    </li>
                    <li onclick="show(3)">
                        <span><i class="fa fa-cog"></i></span>
                        <h3>Setting</h3>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="bt-nav">
            <ul>
                <li class="alert" title="Alert">
                    <span><i class="fa fa-bell"></i></span>
                </li>
                <li class="message" title="Message">
                    <span><i class="fa fa-envelope"></i></span>
                </li>
                <li class="set" title="Settings">
                    <span><i class="fa fa-cog"></i></span>
                </li>
            </ul>
        </div>
    </aside>
    <div class="main">
        <section class="profile tabs">
            <h1>Services</h1>
            <div class="userpost">
                <div class="posts">
                    <span><i class="fa fa-plus"></i> </span>
                </div>
                <div class="posts">
                    <img width="200" src="../src/main/resources/static/js/views/img/avatars/Asian Man.png" alt=""/>
                    <p>Title or name</p>
                </div>
                <div class="posts">
                    <img width="200" src="../src/main/resources/static/js/views/img/avatars/Asian Man.png" alt=""/>
                    <p>Title or name</p>
                </div>
                <div class="posts">
                    <img width="200" src="../src/main/resources/static/js/views/img/avatars/Asian Man.png" alt=""/>
                    <p>Title or name</p>
                </div>
            </div>
        </section>
        <section>
            <h1>Reviews</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit
                anim id est laborum."</p>
        </section>
        <section>
            <h1>Comments</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat ."</p>
        </section>
        <section>
            <h1>setting</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam,</p>
        </section>
    </div>
</div>
</body>
</html>
    `;
}
