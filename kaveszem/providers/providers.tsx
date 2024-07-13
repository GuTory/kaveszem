"use client";

import { Provider } from "react-redux";
import { theme } from "@/theme/theme";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "../state";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ChakraProvider theme={theme}>
			<Provider store={store}>{children}</Provider>
		</ChakraProvider>
	);
};

export default Providers;
