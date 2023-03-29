import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Main>
			<Content>{children}</Content>
			<Footer>
				<Navbar />
			</Footer>
		</Main>
	);
};

const Main = styled(motion.main)(
	({ theme }) => `
  background: grey;
  height: inherit;
  overflow-y: scroll;
	display: flex;
	flex-direction: column;
`
);

const Footer = styled(motion.section)(
	({ theme }) => `
	background: yellow;
  flex: 1 1 fit-content;
`
);

const Content = styled(motion.section)(
	({ theme }) => `
  flex: 25 25 fit-content;
	background: green;
`
);

export default Layout;
