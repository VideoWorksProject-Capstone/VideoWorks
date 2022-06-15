export default function Profile(props) {
    //language=HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
<body>
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
            <img width="75" src="" alt=""><img>
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
