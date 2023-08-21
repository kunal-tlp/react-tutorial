import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to='./about'>About</Link>
            <br /> <br />
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Navbar;