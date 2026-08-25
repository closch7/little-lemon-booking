import logo from "../icons_assets/Logo.svg";


const Nav = () => {
    return(<nav>
        <img src={logo} alt="Little Lemon Logo" />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>)
}

export default Nav