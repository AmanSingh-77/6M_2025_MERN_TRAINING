// Create a ContactCard component that displays a person's contact information, including name, phone number, and email. Pass these details as props from a parent component and store 4 users details, use inline css to style the card

export default function ContactCard({contactName,phn,email}){
    return(
        <div style={{border:'3px solid darkred', backgroundColor:'#039fbe', fontSize:'25px',textAlign:'left', color:'whitesmoke', width:'350px', padding:'20px 10px', borderRadius:'10px', boxShadow:'0 0 5px darkred', margin:'auto', marginBottom:'15px' }}>

            <span style={{fontWeight:'bold'}}>Name - </span>
            <span>{contactName}</span>
            <br/>
            <span style={{fontWeight:'bold'}}>Phone number - </span>
            <span>{phn}</span>
            <br/>
            <span style={{fontWeight:'bold'}}>E-mail - </span>
            <span>{email}</span>
        </div>
    )
}