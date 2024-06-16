import { Container, Stack } from "@chakra-ui/react";

export default function Section({ children }: { children: React.ReactNode }) {
	return (
		<article className="flex flex-col items-center justify-center px-16 py-8">
			<Container maxW={"7xl"}>
				<Stack
					align={"center"}
					spacing={{ base: 8, md: 10 }}
					py={{ base: 20, md: 28 }}
					direction={{ base: "column", md: "row" }}
				>
					{children}
				</Stack>
			</Container>
		</article>
	);
}
