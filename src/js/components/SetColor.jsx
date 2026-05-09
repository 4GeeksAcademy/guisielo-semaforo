import React from "react";
import { useState, useEffect} from "react";

const SetColor = () => {
    const colors = ["red","yellow","green"];
    const [color, setColor] = useState("red");

	const nextColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

	useEffect(() => {
		const interval = setInterval (() => {
			nextColor();
		}, 3000);

       return () => clearInterval(interval);

    }, [color]);

    return (
		<div className="d-flex flex-column align-items-center">
			<div className="bg-dark" style={{ width: "15px", height: "80px" }}></div>
			<div className="bg-dark p-2">
			    <div  onClick={() => setColor("red")} className={`rounded-circle p-4 m-2 bg-danger ${color === "red" ? "resaltar" : ""}`}></div>
			    <div  onClick={() => setColor("yellow")} className={`rounded-circle p-4 m-2 bg-warning ${color === "yellow" ? "resaltar" : ""}`}></div>
			    <div  onClick={() => setColor("green")} className={`rounded-circle p-4 m-2 bg-success ${color === "green" ? "resaltar" : ""}`}></div>
            </div>
			<button className="btn btn-success mt-3" onClick={nextColor}>Change</button>
		</div>
     );
 };

export default SetColor;