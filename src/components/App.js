import React, { useState } from "react";
import Nav from "./Nav";
import TileList from "./TileList"

import hogs from "../porkers_data";

function App() {
	const [isClickedGreasy, setIsClickedGreasy] = useState(false)
	const [isClickedSort, setIsClickedSort] = useState("")

	const hogsDisplay = hogs.filter((hog)=>{
		if (!isClickedGreasy) {
			return true
		}
		else {
			return hog.greased === true
		}
	
}).sort((hog1, hog2) => {
	if(isClickedSort === "weight"){
		return hog1.weight - hog2.weight
	}
	else if ( isClickedSort === "name") {
		return hog1.name.localeCompare (hog2.name)
	}
})



	return (
		<div className="App">
			<Nav />
			<button onClick={(e)=>setIsClickedGreasy(!isClickedGreasy)}>Click for Greased Hogs.</button>
			<button onClick={(e)=>setIsClickedSort("weight")}>Sort Hogs By Weight.</button>
			<button onClick={(e)=>setIsClickedSort("name")}>Sort Hogs By Name.</button>
			<TileList hogs={hogsDisplay}/>
		</div>
	);
}

export default App;
