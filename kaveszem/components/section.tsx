import { Container, Stack, StackDirection } from "@chakra-ui/react";

interface ISectionProps {
	direction: StackDirection;
	children: React.ReactNode;
}

export default function Section(props: ISectionProps) {
	return (
		<Container
			maxW={"7xl"}
			centerContent
			position="relative"
			zIndex={1}
		>
			<Stack
				align={{ base: "center", md: "center" }}
				justify="space-between"
				w={"full"}
				spacing={{ base: 12, md: 24 }}
				py={{ base: 10, md: 14 }}
				px={{ base: 4, md: 8 }}
				direction={props.direction}
			>
				{props.children}
			</Stack>
		</Container>
	);
}
