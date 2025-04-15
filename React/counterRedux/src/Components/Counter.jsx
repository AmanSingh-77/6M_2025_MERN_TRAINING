import { useDispatch, useSelector } from "react-redux"
import { dec, inc, reset } from "./action/counterAction"

export default function Counter(){
    const count = useSelector((state)=>state.counterReducer.count)
    const dispatch = useDispatch()
    return(
        <>
            <h1 className="border rounded border-3 border-light my-3 p-3 text-bg-dark">
                Count is {count}
            </h1>

            <button className="btn btn-danger mx-1 px-4" onClick={()=>{dispatch(dec())}}>
                --
            </button>

            <button className="btn btn-success mx-1 px-4" onClick={()=>{dispatch(inc())}}>
                ++
            </button>

            <button className="btn btn-primary mx-1 px-4 d-block mx-auto mt-2" onClick={()=>{dispatch(reset())}}>
                RESET
            </button>

        </>
    )
}