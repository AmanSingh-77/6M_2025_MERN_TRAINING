export default function Employee(){
    return(
        <div style={{border:1,borderColor:'black', borderStyle:'solid', width:400 , padding:20, marginBottom: 10, fontSize:15}}>
            <h1>Employee Details</h1>
            <div>
                <h3 style={{marginBottom:0}}>Amanpreet Singh</h3>
                <span>Employee I.D - 1234</span> <br/>
                <span>City - Jalandhar</span> <br/>
                <span>Department - I.T</span> <br/>
            </div>
            
            <div>
                <h3 style={{marginBottom:0}}>Shruti</h3>
                <span>Employee I.D - 4321</span> <br/>
                <span>City - Amritsar</span> <br/>
                <span>Department - Sales</span> <br/>
            </div>

            <div>
                <h3 style={{marginBottom:0}}>Muskan</h3>
                <span>Employee I.D - 9876</span> <br/>
                <span>City - Ludhiana</span> <br/>
                <span>Department - H.R</span> <br/>
            </div>
        </div>
    )
}