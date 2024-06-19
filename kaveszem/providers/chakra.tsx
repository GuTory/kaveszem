// app/providers.tsx
"use client";
import { lightTheme } from "../theme/theme";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {} from "@chakra-ui/color-mode";

export function Providers({ children }: { children: React.ReactNode }) {
	return <ChakraProvider theme={lightTheme}>{children}</ChakraProvider>;
}
