import React from "react";
import jsPDF  from "jspdf";
import autoTable from "jspdf-autotable";
import { data } from "./zomato";
import { toast } from "react-toastify";

const handleDownload = () => {
  
  const doc = new jsPDF();      //object to save pdf

  // Add Title to PDF
  doc.text("Zomato Data", 14, 10);

  // Define Table Headers
  const tableHeaders = ["Sr.no","Restro ID","Restro Name", "Rating"];

  // Convert Object Data into Rows
  const tableRows = data.map((el,index) => [index+1 , el?.info?.resId,  el.info.name , el?.info?.rating?.rating_text]);

  autoTable(doc, {
    head: [tableHeaders],
    body: tableRows,
    startY:20
  })

  // Save the PDF with the given title
  doc.save("ZomatoData.pdf");


  toast.success('PDF Downloaded')
};

export default function Sample() {
    return (
        <div>
            <h2>Download Zomato Data as PDF</h2>
            <button className="btn btn-danger mt-3" onClick={handleDownload} >Download PDF</button>
        </div> 
  )
}
