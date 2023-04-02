import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Card from "../../components/card/Card";

const Home: React.FC = () => {
	return (
		<Main>
			<Card
				data={{
					weather: "cloudy",
					location: "Calgary, ab",
					userId: "1",
					tempHigh: "10",
					tempLow: "0",
					date: "2023/03/31 4pm",
					percipitation: "6%",
					humidity: "90%",
					wind: "19 km/h",
				}}
			/>
		</Main>
	);
};

const Main = styled(motion.section)(
	({ theme }) => `
	${theme.mixins.flex.flxCntrCntr}
	background: red;
	height: 100%;
`
);
export default Home;
