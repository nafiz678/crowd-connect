import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";


const PrivetRoute = ({ children }) => {

    const { user, loader } = useContext(authContext);

    const location = useLocation();


    if(loader){
        return <Loader></Loader>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={`/login`}></Navigate>
};

export default PrivetRoute;