import logo from "../icons_assets/Logo.svg";

const Footer = () => {
    return(<footer>
        <img src={logo} alt="Little Lemon Logo" />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <h2>Contact Information</h2>
        <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <il>Email Address</il>
        </ul>
        <h2>Follow Our Socials!</h2>
        <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
        </ul>
    </footer>)
}

export default Footer