import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <header style={{padding:"20px", borderBottom: "1px solid #ccc"}}>
            <h2>🏠 Estate Agent</h2>
            <nav>
                <Link to="/">Home</Link>
                </nav>
        </header>

    );
};

export default Header;