// app/providers.tsx
"use client";
import { theme } from "../theme/theme";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {} from "@chakra-ui/color-mode";

export function Providers({ children }: { children: React.ReactNode }) {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
