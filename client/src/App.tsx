import React, { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Routes, Route, Outlet } from "react-router";
import Loading from "./pages/loading/Loading";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={{}}>
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
