import { Link, useLocation} from "react-router-dom";

export default function Header(){
    const loc = useLocation()
    return(
        <>
            <div className="container-fluid header d-flex align-items-center" style={{width:"100%", height:"10vh"}}>
                <div className="row w-100">
                    <div className="col-9">
                        <span className="fs-2 text-light fw-bolder d-flex align-items-end">TO DO LISTS</span>
                    </div>

                    <div className="col-3 d-flex justify-content-evenly align-items-center">
                        <Link className={`text-decoration-none fs-5 ${loc.pathname=='/'?"text-primary":"text-light"}`} to="/">Home</Link>
                        <Link className={`text-decoration-none fs-5 ${loc.pathname=='/add'?"text-primary":"text-light"}`} to="/add">Add List</Link>
                        <Link className={`text-decoration-none fs-5 ${loc.pathname=='/show'?"text-primary":"text-light"}`} to="/show">Show Lists</Link>
                    </div>
                </div>
            </div>
        </>
    )
}