import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
    const usenavigate = useNavigate()
    useEffect(()=>{
        let username = sessionStorage.getItem('username');
        if(username == '' || username== null){
            usenavigate('/login');
        }
    },[]);

    return(
        <div className="bg-dark">
            <div className="header">
                <Link to={'http://localhost:8501'}>Home </Link>
                <Link style={{float:"right"}} to={'/login'}> Login / Logout</Link>

            </div>
        </div>
    );
}

export default Home;