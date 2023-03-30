import { motion } from "framer-motion";
import React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";
import Navbar from "../navbar/Navbar";
import { default_motion } from "../../styles/default_motion";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const theme = useTheme();

	//TODO: replace static "season" with dynamic redux from API
	return (
		<Main {...default_motion} variants={_MotionVariants(theme, "winter").Main}>
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
	// background: yellow;
  height: 5%;
`
);

const Content = styled(motion.section)(
	({ theme }) => `
  height: 90%;
	// background: green;
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
