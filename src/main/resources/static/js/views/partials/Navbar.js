export default function Navbar(props) {
    return `
        <nav>
            <a href="/" data-link>Home</a>
            <a href="/profile" data-link>Profile</a>
            <a href="/services" data-link>Services</a>
            <a href="/login" data-link>Login</a>
            <a href="/register" data-link>Register</a>
        </nav>
    `;
}

