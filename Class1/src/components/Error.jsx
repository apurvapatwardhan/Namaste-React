import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (<>
<h1>OOOPS</h1> <h2>Something went wrong</h2>
    <h2>{error.error.message}</h2></>)
}

export default Error;