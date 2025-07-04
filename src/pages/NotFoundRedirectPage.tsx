import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function NotFoundRedirectPage() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/404', {replace: true})
    }, []);
    return <div/>
}