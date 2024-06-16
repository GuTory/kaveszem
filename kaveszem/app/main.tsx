import { Container, Stack } from "@chakra-ui/react";

export default function Section({ children }: { children: React.ReactNode }) {
	return (
		<Container
			maxW={"6xl"}
			centerContent
		>
			<Stack
				align={"center"}
				w={"full"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 10, md: 14 }}
				px={{ base: 2, md: 4 }}
				direction={{ base: "column", md: "row" }}
			>
				{children}
			</Stack>
		</Container>
	);
}
