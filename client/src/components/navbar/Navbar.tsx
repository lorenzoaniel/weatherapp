import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import { CgProfile, CgHome, CgLogOut } from "react-icons/cg";
import NavButton from "../button/NavButton";
import { icon_Mixins } from "../../styles/mixins/icon_Mixins";

const Navbar: React.FC = () => {
	const userLoggedInTest = false; //TODO: move to redux

	return (
		<Main>
			<NavButton>
				<CgHome style={icon_Mixins.navButtonStyle} />
			</NavButton>
			{userLoggedInTest ? (
				<NavButton>
					<CgLogOut style={icon_Mixins.navButtonStyle} />
				</NavButton>
			) : (
				<NavButton>
					<CgProfile style={icon_Mixins.navButtonStyle} />
				</NavButton>
			)}
		</Main>
	);
};

const Main = styled(motion.nav)(
	({ theme }) => `
	// background: ;
	height: 100%;
  display: flex;
	justify-content: space-around;

	padding: 0.5rem;
`
);

export default Navbar;
