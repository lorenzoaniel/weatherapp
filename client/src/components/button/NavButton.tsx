import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
	children: ReactElement;
}

const NavButton: React.FC<Props> = ({ children }) => {
	return <Main>{children}</Main>;
};

const Main = styled(motion.button)(
	({ theme }) => `
  // background: orange;
  height: 100%
`
);

export default NavButton;
