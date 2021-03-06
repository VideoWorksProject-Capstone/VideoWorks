import Home, {createBookingEvent} from "./views/Home.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register, {RegisterEvent} from "./views/Register.js";
import Profile, {JobEvent} from "./views/Profile.js";
import About from "./views/About.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {jobs: '/api/services/job'},
            uri: '/',
            title: 'Home',
            viewEvent: createBookingEvent
        },
        '/profile': {
            returnView: Profile,
            state: {
                user: '/api/users/me'
            },
            uri: '/profile',
            title: "Profile",
            viewEvent: JobEvent
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/about': {
            returnView: About,
            state: {},
            uri: '/about',
            title: "About",
            viewEvent:  About
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: "Register",
            viewEvent: RegisterEvent
        }
    };
    return routes[URI];
}
