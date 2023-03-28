import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Main>
			<Header></Header>
			<Content>{children}</Content>
		</Main>
	);
};

const Main = styled(motion.main)(
	({ theme }) => `
  background: grey;
  height: inherit;
  overflow-y: scroll;
`
);

const Header = styled(motion.section)(
	({ theme }) => `
  
`
);

const Content = styled(motion.section)(
	({ theme }) => `
  
`
);

export default Layout;
