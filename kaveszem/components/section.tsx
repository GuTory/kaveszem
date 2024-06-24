import { useBgColor } from "@/theme/theme";
import { Container, Stack, StackDirection } from "@chakra-ui/react";
import { Reveal } from "./reveal";

interface ISectionProps {
	direction: StackDirection;
	children: React.ReactNode;
}

export default function Section(props: ISectionProps) {
	return (
		<Container
			maxW={"6xl"}
			centerContent
			bg={useBgColor()}
		>
			<Stack
				align={{ base: "left", md: "center" }}
				w={"full"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 10, md: 14 }}
				px={{ base: 2, md: 4 }}
				direction={props.direction}
			>
				{props.children}
			</Stack>
		</Container>
	);
}
