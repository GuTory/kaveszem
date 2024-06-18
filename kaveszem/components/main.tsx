import { Container, Stack } from "@chakra-ui/react";

interface ISectionProps {
	align: "top" | "center";
	children: React.ReactNode;
}

export default function Section(props: ISectionProps) {
	return (
		<Container
			maxW={"6xl"}
			centerContent
		>
			<Stack
				align={props.align}
				w={"full"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 10, md: 14 }}
				px={{ base: 2, md: 4 }}
				direction={{ base: "column", md: "row" }}
			>
				{props.children}
			</Stack>
		</Container>
	);
}
