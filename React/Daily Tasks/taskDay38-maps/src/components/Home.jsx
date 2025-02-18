import {Link } from "react-router-dom";


export default function Home(){
    return(
        <>
        <h1 style={{marginTop:'-100px', marginBottom:'100px'}}>HOME PAGE</h1>
        
        <table border={'4px'} cellPadding={'20px'} cellSpacing={'5px'} style={{fontSize:'20px'}}>
            <thead style={{fontSize:'50px'}}>
                <tr>
                    <th>Table of Contents</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Link to="/employee">Ques-1 Employee</Link></td>
                </tr>
                <tr>
                    <td><Link to="/students">Ques-2 Students</Link></td>
                </tr>
                <tr>
                    <td><Link to="/zomato">Ques-3 Zomato</Link></td>
                </tr>
            </tbody>
        </table>

        </>
    )
}