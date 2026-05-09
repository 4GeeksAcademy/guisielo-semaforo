import React from "react";
import SetColor from "./SetColor";

const Home = () => {
	return (
		<div className="text-center">
			<h3 className="text-center mt-5" >Traffic Signal</h3>

			<SetColor />
			
			<p></p>
			<a href="#" className="btn btn-success">
				Change
			</a>
			<p></p>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love from Guisielo!
			</p>
		</div>
	);
};

export default Home;