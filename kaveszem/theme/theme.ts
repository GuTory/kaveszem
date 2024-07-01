import { extendTheme, useColorModeValue } from "@chakra-ui/react";

export const theme = extendTheme({
	styles: {
		global: (props: any) => ({
			body: {
				bg: props.colorMode === "light" ? "#EAD7BB" : "#6F4E37",
			},
		}),
	},
});

export const useBgColor = () => useColorModeValue("#EAD7BB", "#6F4E37");

export const useTextColor = () => useColorModeValue("#2D3748", "#FED8B1");

export const useNavBarColor = () =>
	useColorModeValue("rgba(184, 111, 60, 0.7)", "rgba(54, 21, 0, 0.8)");
//export const useNavBarColor = () => useColorModeValue('linear(to-r, gray.300, yellow.400, pink.200)', 'linear(to-r, gray.300, yellow.400, pink.200)');
