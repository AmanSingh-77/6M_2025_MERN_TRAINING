import { useSelector } from "react-redux"

export default function ShowLists(){
    const list = useSelector((state)=>state.listReducer.arr)
    return(
        <>
            <div className="container mt-4 ">
                <div className="row">
                    <div className="col">
                        <table className="table table-bordered table-primary table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>SR.NO</th>
                                    <th>LIST TITLE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list?.map((el,index)=>{
                                return(
                                <tr key={index}>
                                    <td className="w-25">{index+1}</td>
                                    <td>{el}</td>
                                </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </>
    )
}