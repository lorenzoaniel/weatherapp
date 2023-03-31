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
			<NavButton isLeft={true}>
				<CgHome style={icon_Mixins.navButtonStyle} />
			</NavButton>
			{userLoggedInTest ? (
				<NavButton isLeft={false}>
					<CgLogOut style={icon_Mixins.navButtonStyle} />
				</NavButton>
			) : (
				<NavButton isLeft={false}>
					<CgProfile style={icon_Mixins.navButtonStyle} />
				</NavButton>
			)}
		</Main>
	);
};

const Main = styled(motion.nav)(
	({ theme }) => `
	background: rgba(255,255,255,0.2);
	height: 100%;
  display: flex;
	justify-content: space-around;

	// padding: 1rem;
	column-gap: 0.2rem;
	border-radius: ${theme.border.radius.navbar};
	backdrop-filter: blur(5rem);
	box-shadow: 0 0.5rem 0.5rem 0.1rem rgba(0,0,0,0.2);
`
);

export default Navbar;
