export default function Student(){
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
                <td>Amanpreet Singh</td>
                <td>CSE</td>
                <td>56</td>
            </tr>
         
            <tr>
                <td>Shruti</td>
                <td>ENC</td>
                <td>12</td>
            </tr>
        </table>
        <br/>
        </>
    )
}