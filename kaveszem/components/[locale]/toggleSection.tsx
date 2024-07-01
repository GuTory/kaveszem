import { Flex, Stack } from "@chakra-ui/react";
import ToggleColorModeButton from "./toggleColorModeButton";
import ToggleLocaleButton from "./toggleLocaleButton";

export default function ToggleSection() {
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
