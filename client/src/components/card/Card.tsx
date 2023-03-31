import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
	weather: any;
	location: any;
	userId: any;
	tempHigh: any;
	tempLow: any;
	date: any;
	percipitation: any;
	humidty: any;
	wind: any;
}

const Card: React.FC<Props> = ({
	tempHigh,
	tempLow,
	weather,
	location,
	userId,
	date,
	percipitation,
	humidty,
	wind,
}) => {
	return <div>Card</div>;
};

export default Card;
