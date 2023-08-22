import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return <>
        <h1>Home Page</h1>
        <p>This is Home Page of our awesome App</p>
        <p>And here we are learning home Router</p>
        <Link to='/about'>Go to About Page</Link>
        <li><Link to='/user/kunal'>Kunal</Link></li>
        <li><Link to='/user/rahul'>Rahul</Link></li>
        <br />
        <button onClick={()=> navigate('/about')}>Go to About Page</button>
        <br />
        <button onClick={()=> navigate('/filter')}>Go to Filter Page</button>
    </>
}

export default Home;