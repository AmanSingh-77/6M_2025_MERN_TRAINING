import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Admin(){
  const styles = {
    container: {
      display: "flex",
      height: "103vh",
      width:'209vh',
      fontFamily: "Arial, sans-serif",
      marginBottom:'-151px',
      marginTop:'-55px',
      marginLeft:'-160px'
    },
    sidebar: {
      width: "30vh",
      backgroundColor: "#343a40",
      color: "#fff",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
    },
    main: {
      width:"150vh",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f4f4f4",
      padding: "20px",
    },
    navbar: {
      backgroundColor: "transparent",
      color: "#000000",
      padding: "10px",
      textAlign: "center",
      fontSize: "40px",
      fontWeight: "bold",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "80%",
      textAlign: "center",
      marginBottom: "20px",
    },
  }
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 800 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 900 },
    { name: "May", value: 700 },
  ]
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 className='text-success'>Dashboard</h2>
        <br/>
        <a href='#' className='text-light mb-2'>Profile</a>
        <a href='#' className='text-light mb-2'>Settings</a>
        <Link to={'/'} className='text-light'>Log Out</Link>
      </div>
      <div style={styles.main}>
        <div style={styles.navbar}>Admin Panel</div>
        <div style={styles.content}>
          <div style={styles.card}>
            <h3>Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#007bff" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}


