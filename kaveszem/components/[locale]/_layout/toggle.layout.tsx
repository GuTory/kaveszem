import { Flex, Stack } from "@chakra-ui/react";
import ToggleColorModeButton from "../_button/toggle.colorMode";
import ToggleLocaleButton from "../_button/toggle.locale";

export default function ToggleLayout() {
	return (
		<Flex alignItems={"center"}>
			<Stack
				direction={"row"}
				spacing={2}
				alignItems={"center"}
			>
				<ToggleLocaleButton />
				<ToggleColorModeButton />
			</Stack>
		</Flex>
	);
}
