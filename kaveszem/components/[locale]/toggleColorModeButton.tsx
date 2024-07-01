import { useNavBarColor, useTextColor } from "@/theme/theme";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

export default function ToggleColorModeButton() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button
			onClick={toggleColorMode}
			rounded={"full"}
			variant="ghost"
			color={useTextColor()}
			cursor={"pointer"}
			_hover={{ bg: useNavBarColor() }}
		>
			{colorMode === "light" ? <SunIcon /> : <MoonIcon />}
		</Button>
	);
}
