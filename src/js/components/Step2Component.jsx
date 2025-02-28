import React from "react";



const Step2Component = ({name}) => {
	return (
		<div className="text-center">
   
   <h2 style={{ 
      color: "#2c3e50", 
      backgroundColor: "#ecf0f1", 
      padding: "10px", 
      borderRadius: "5px", 
      textAlign: "center", 
      width: "fit-content", 
      margin: "10px auto", 
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" 
    }}>
		{name}
		</h2>



		</div>
	);
};

export default Step2Component;