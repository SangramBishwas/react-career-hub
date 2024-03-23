import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-16 justify-center items-center min-h-screen">
            <h1 className="text-5xl font-extrabold ">Opps!!!</h1>
            <Link to='/'><button className="btn font-bold text-xl">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;