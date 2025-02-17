// Create an array of object named employee with key name, dept and salary, Print each data using map in form of cards

var employee = [
    {
        name:'Aman',
        dept:'I.T',
        salary:'$100,000'
    },
    {
        name:'Ram',
        dept:'Sales',
        salary:'$125,000'
    },
    {
        name:'Muskan',
        dept:'H.R',
        salary:'$80,000'
    }
]
export default function Employee(){
    return(
        <>
            {employee.map((el,index)=>{
                return(
                    <div key={index} style={{height:'auto', width:'250px', backgroundColor:'Black',margin:'auto', marginBottom:'20px', display:'flex', flexDirection:'column', padding:'20px', color:'lightgreen', border:'3px solid green', borderRadius:'10px', fontSize:'18px'}}>

                        <span><strong>NAME :</strong>  {el.name} </span>
                        <span><strong>DEPARTMENT :</strong>  {el.dept}</span>
                        <span><strong>SALARY :</strong>  {el.salary}</span>

                    </div>
                )
                
            })}
        </>
    )
}