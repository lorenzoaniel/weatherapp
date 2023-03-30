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

	return (
		<Main {...default_motion} variants={_MotionVariants(theme).Main}>
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

const _MotionVariants = (theme: DefaultTheme) => {
	return {
		Main: {
			initial: {
				background:
					"linear-gradient(rgb(255,181,167) 100%, rgb(252,213,206) 100%, rgb(248,237,235) 100%, rgb(249,220,196) 100%, rgb(254,200,154) 100%)",
			},
			animate: {
				background:
					"linear-gradient(rgb(255,181,167) 20%, rgb(252,213,206) 40%, rgb(248,237,235) 60%, rgb(249,220,196) 80%, rgb(254,200,154) 100%)",
				transition: {
					duration: 2,
				},
			},
		},
	};
};

export default Layout;
