import { Link } from "react-router-dom";

export default function PageTitile({current}){
    return(
        <>
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">{current}</h1>
                    <nav className="breadcrumbs">
                    <ol>
                        <li>
                        <Link to={'/user'}>Home</Link>
                        </li>
                        <li className="current">{current}</li>
                    </ol>
                    </nav>
                </div>
                </div>
        </>
    )
}