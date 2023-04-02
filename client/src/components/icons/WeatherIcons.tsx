import { motion } from "framer-motion";
import React, { lazy } from "react";
import styled from "styled-components";

interface Props {
	iconId: string;
	isDay: boolean;
}

const WeatherIcons: React.FC<Props> = ({ iconId, isDay }) => {
	// let iconImgSrc = `./client/public/assets/weather_icons/64x64/${
	// 	isDay ? "day" : "night"
	// }/${iconId}.png`;
	let iconImgSrc = `./public/assets/weather_icons/64x64/day/113.png`;
	return (
		<Main>
			<IconImg src={iconImgSrc} />
		</Main>
	);
};

const Main = styled(motion.div)(
	({ theme }) => `
  background: green;
`
);

const IconImg = styled(motion.img)(
	({ theme }) => `
  // height: 20rem;
  // width: 20rem;
`
);

export default WeatherIcons;
