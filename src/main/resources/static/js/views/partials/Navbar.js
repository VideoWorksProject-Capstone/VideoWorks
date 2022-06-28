export default function Navbar(props) {
    return `
<div id="mainNavigation">
  <nav role="navigation">
    <div class="py-3 text-center border-bottom">
      <img src="#" alt="" class="invert">
    </div>
  </nav>
  <div class="navbar-expand-md">
    <div class="navbar-dark text-center my-2">
      <button class="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span> <span class="align-middle">Menu</span>
      </button>
    </div>
    <div class="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto ">
        <li class="nav-item">
          <li><a href="/" data-link>Home</a></li>
        </li>
        <li class="nav-item">
          <li><a href="/categories" data-link>Categories</a></li>
        </li>
        <li class="nav-item">
          <li><a href="/profile" data-link>Profile</a></li>
        </li>
        <li class="nav-item">
          <li><a href="/login" data-link>Login</a></li>
        </li>
        <li class="nav-item">
          <li><a href="/register" data-link>Register</a></li>
        </li>
      </ul>
    </div>
  </div>
</div>
    `;
}

