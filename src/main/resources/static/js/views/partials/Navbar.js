export default function Navbar(props) {
    return `
        <nav>
            <a href="/" data-link>Home</a>
            <a href="/categories" data-link>Categories</a>
            <a href="/profile" data-link>Profile</a>
            <a href="/login" data-link>Login</a>
            <a href="/register" data-link>Register</a>
            <a href="/support" data-link>Support</a>
        </nav>
    `;
}

