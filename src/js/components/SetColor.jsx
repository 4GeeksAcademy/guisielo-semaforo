import React from "react";
import { useState, useEffect} from "react";

const SetColor = () => {
    const colors = ["red","yellow","green"];
    const [color, setColor] = useState("red");

     return (
		<div className="d-flex flex-column align-items-center">
			<div className="bg-dark">
			    <div className="bg-danger rounded-circle p-3 m-1 border border-5 border-white active"></div>
			    <div className="bg-warning rounded-circle p-3 m-1"></div>
			    <div className="bg-success rounded-circle p-3 m-1"></div>
            </div>
		</div>
     );
 };

export default SetColor;

