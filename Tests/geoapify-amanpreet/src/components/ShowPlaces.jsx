import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import {ScaleLoader} from "react-spinners"


export default function ShowPlaces(){
    const [result,setResult] = useState([])
    const [load,setLoad] = useState(true)

    useEffect(()=>{
        fetchPlace()
    },[])
    
    const fetchPlace=()=>{
        var config = {
            method: 'get',
            url: 'https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=01ae89572b754e33bee431f7b3ffdf21',
            headers: { }
        };

        axios(config)
        .then(function (response) {
            toast.success("DATA FETCHED !!")

            setInterval(()=>{
                setLoad(false)
            },1500)

            setResult(response.data.features)
            console.log(response.data.features);
        })

        .catch(function (error) {
            toast.error("ERROR FETCHING DATA !!")
            console.log(error);
        });

    }
    

    return(
        <>          
                    <div className="container-fluid">
                        <div className="row pt-3">
                            <div className="col">
                            <h1 className="mb-3 fw-bolder text-info">GEOAPIFY</h1>
                            </div>
                        </div>

                        {load?
                            <div className="row">
                                <div className="col">
                                    <ScaleLoader color="white" loading={load}/>
                                </div>
                            </div> 
                            
                            :

                            <div className="row">
                                <div className="col table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead className="table-primary">
                                            <tr>
                                                <th>SR.NO</th>
                                                <th>Place Name</th>
                                                <th>Address</th>
                                                <th>Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.map((el,index)=>(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{el?.properties?.name}</td>
                                                    <td>{el?.properties?.address_line2}</td>
                                                    <td>{el?.properties?.categories[1]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }   
                    </div>
                    
                    
                </>
    )
}