import React from "react";
import SetColor from "./SetColor";

const Home = () => {
	return (
		<div className="text-center">
			<h3 className="text-center mt-5" >Traffic Signal</h3>
			<p></p>
			<p></p>
			
			<SetColor />
			
			<p></p>
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