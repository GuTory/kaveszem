import { extendTheme, useColorModeValue } from "@chakra-ui/react";

export const customTheme = extendTheme({
	fonts: {
		heading: `"Rubik", sans-serif`,
		body: `"Rubik", sans-serif`,
	},
});

export const useTextColor = () => useColorModeValue("#gray.700", "#FED8B1");

export const useNavBarColor = () => useColorModeValue("#b86f3c", "#361500");
//export const useNavBarColor = () => useColorModeValue('linear(to-r, gray.300, yellow.400, pink.200)', 'linear(to-r, gray.300, yellow.400, pink.200)');

export const useHoverProps = () => ({
	textDecoration: "none",
	bg: useColorModeValue("#84502b", "#1C0A00"),
});