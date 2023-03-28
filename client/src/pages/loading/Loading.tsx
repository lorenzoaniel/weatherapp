import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Loading: React.FC = () => {
	return <Main>Loading</Main>;
};
const Main = styled(motion.main)(
	({ theme }) => `
  
`
);
export default Loading;
