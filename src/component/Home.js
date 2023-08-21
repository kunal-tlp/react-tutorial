import { Link } from "react-router-dom";

function Home() {
    return <>
        <h1>Home Page</h1>
        <p>This is Home Page of our awesome App</p>
        <p>And here we are learning home Router</p>
        <Link to='/about'>Go to About Page</Link>
    </>
}

export default Home;