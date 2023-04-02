import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import WeatherIcons from "../icons/WeatherIcons";

interface Props {
	data: {
		weather: any;
		location: any;
		userId: any;
		tempHigh: any;
		tempLow: any;
		date: any;
		percipitation: any;
		humidity: any;
		wind: any;
	};
}

const Card: React.FC<Props> = ({ data }) => {
	return (
		<Main>
			<WeatherIcons iconId={"113"} isDay={false} />
		</Main>
	);
};

const Main = styled(motion.div)(
	({ theme }) => `
  background: orange;
  height: 80%;
  width: 70%;
`
);

export default Card;
