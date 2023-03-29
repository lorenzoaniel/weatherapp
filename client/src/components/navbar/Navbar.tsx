import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";

import { CgProfile, CgHome, CgLogOut } from "react-icons/cg";
import NavButton from "../button/NavButton";
import { IconBaseProps } from "react-icons/lib/esm/iconBase";
import { default_ThemeType } from "../../styles/themes/default_Theme";

const Navbar: React.FC = () => {
	const userLoggedInTest = false; //TODO: move to redux
	const theme = useTheme();

	return (
		<Main>
			<NavButton>
				<CgHome />
			</NavButton>
			{userLoggedInTest ? (
				<NavButton>
					<CgLogOut />
				</NavButton>
			) : (
				<NavButton>
					<CgProfile />
				</NavButton>
			)}
		</Main>
	);
};

const Main = styled(motion.nav)(
	({ theme }) => `
	background: red;
  display: flex;
	height: 100%;
	justify-content: space-around;
`
);

export default Navbar;
