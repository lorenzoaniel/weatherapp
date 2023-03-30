import React, { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Routes, Route, Outlet } from "react-router";
import Loading from "./pages/loading/Loading";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import { default_Theme } from "./styles/themes/default_Theme";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={default_Theme}>
			<GlobalStyle />

			<Suspense fallback={<Loading />}>
				<Routes key={location.pathname} location={location}>
					<Route
						path="/"
						element={
							<Layout>
								<AnimatePresence mode="wait">
									<Outlet />
								</AnimatePresence>
							</Layout>
						}
					>
						<Route index element={<Home />} />
						<Route path="home" element={<Home />} />
						<Route path="*" element={<Home />} />
					</Route>
				</Routes>
			</Suspense>
		</ThemeProvider>
	);
};

export default App;
