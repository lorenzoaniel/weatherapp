import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { default_motion } from "../../styles/default_motion";

interface Props {
	children: ReactElement;
	isLeft: boolean;
}

const NavButton: React.FC<Props> = ({ children, isLeft }) => {
	return (
		<Main {...default_motion} variants={_MotionVariants.Main} isLeft={isLeft}>
			{children}
		</Main>
	);
};

interface Main {
	isLeft: boolean;
}

const Main = styled(motion.button)<Main>(
	({ theme, isLeft }) => `
	${theme.mixins.flex.flxCntrCntr}
	background: transparent;
  height: 100%;
	width: 50%;

	border-radius: ${isLeft ? theme.border.radius.navbuttonLeft : theme.border.radius.navbuttonRight};
	color: red;
`
);

const _MotionVariants = {
	Main: {
		initial: {
			boxShadow: "0 0 0rem 0rem rgba(255,255,255,0.4) inset",
		},
		whileHover: {
			boxShadow: "0 0 0.1rem 5rem rgba(255,255,255,0.4) inset",
			transition: {
				ease: "easeInOut",
			},
		},
		whileTap: {
			boxShadow: "0 0 0.1rem 5rem rgba(0,0,0,0.1) inset",
			transition: {
				ease: "easeInOut",
			},
		},
	},
};

export default NavButton;
