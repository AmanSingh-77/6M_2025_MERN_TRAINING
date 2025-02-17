export default function Student({sname,dept,roll}){
    return(
        <>
        <h1>Student Information</h1>
        
        <table cellPadding={10} border={4}>
            <tr>
                <th>NAME</th>
                <th>Department</th>
                <th>Roll No.</th>
            </tr>

            <tr>
                <td>{sname}</td>
                <td>{dept}</td>
                <td>{roll}</td>
            </tr>
         
            
        </table>
        <br/>
        </>
    )
}