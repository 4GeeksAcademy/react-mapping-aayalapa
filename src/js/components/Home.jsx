import React from "react";


const step1Array = ["Michael Scott", "Dwight Schrute", "Jim Halpert", "Pam Beesly", "Stanley Hudson"]; 


const step2Array = ["World's Best Boss Mug", "Bears, Beets, Battlestar Galactica", "Pranking Dwight", "Office Gossip", "Chili Disaster"];

const step3Array = [
	{ id: 1, name: "Michael Scott", role: "Regional Manager", habit: "That's what she said!" },
	{ id: 2, name: "Dwight Schrute", role: "Assistant to the Regional Manager", habit: "Owns a beet farm" },
	{ id: 3, name: "Jim Halpert", role: "Sales Representative", habit: "Pulls pranks on Dwight" },
	{ id: 4, name: "Pam Beesly", role: "Receptionist", habit: "Aspiring artist" },
	{ id: 5, name: "Kevin Malone", role: "Accountant", habit: "Spills chili everywhere" }
  ]; 

const Home = () => {
	return (
		<div className="text-center">
            {/* Step 1: Mapping an array of names and rendering them as <h1> */}
       

			 {/* Step 2: Step2Component that takes a name as a prop */}


			 {/* Step 3: Step3Component that takes object as prop */}



		</div>
	);
};

export default Home;