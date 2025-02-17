// Create a Weather component that displays weather information such as temperature, humidity, and weather condition. Show weather details of three different city in it

export default function Weather({city,temp,humidity,weather}){
    return(
        <>
            <div style={{border:'3px solid blue', padding:'10px', fontSize:'25px', borderRadius:'10px', backgroundColor:'black', color:'royalblue', width:'250px', display:'inline-block', margin:'10px'}}>
                <span>{city}</span>
                <br/>
                <span>{temp}</span>
                <br/>
                <span>{humidity} Humidity</span>
                <br/>
                <span>{weather}</span>
            </div>
        </>
        
    )
}