import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";

import { default_motion } from "../../styles/default_motion";

import Navbar from "../navbar/Navbar";
import { useAppSelector } from "../../redux/hooks";
import { selectWeatherApi } from "../../redux/features/weatherApiSlice";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const theme = useTheme();
	let apiInfo = useAppSelector(selectWeatherApi);

	let season = apiInfo.season;

	return (
		<Main {...default_motion} variants={_MotionVariants(theme, season).Main}>
			<Content>{children}</Content>
			<Footer>
				<Navbar />
			</Footer>
		</Main>
	);
};

const Main = styled(motion.main)(
	({ theme }) => `
  height: inherit;
  overflow-y: scroll;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 0 2.5%;
`
);

const Footer = styled(motion.section)(
	({ theme }) => `
	padding: 1rem;
  height: 7%;
`
);

const Content = styled(motion.section)(
	({ theme }) => `
  height: 89%;
`
);

const _MotionVariants = (theme: any, season?: string) => {
	return {
		Main: {
			initial: {
				background: theme.layout.background[season + "initial"],
			},
			animate: {
				background: theme.layout.background[season + "animate"],
				transition: {
					duration: 1,
				},
			},
		},
	};
};

export default Layout;
