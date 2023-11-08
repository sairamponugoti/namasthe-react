import { useSelector } from "react-redux";

const Header = () => {
    // Subscribing to the Store using a Selector
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="header-container">
            Header Container
        </div>
    );
}

export default Header;