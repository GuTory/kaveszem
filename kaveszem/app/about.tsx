"use client";

import { Stack, Heading, Text } from "@chakra-ui/react";

export default function About() {
	const textColor = "gray.700";
	const title = "Cégünkről";
	const aboutText = [
		"Cégünk több mint 24 éve áll az Önök szolgálatában, és kiemelt specializációnk a kávégépek bérbeadása. Büszkék vagyunk arra, hogy több mint 100 partnerrel dolgozunk együtt nap mint nap.",
		"Megbízható kávégépeinkkel és szakértelmünkkel garantáltan kiváló minőségű kávéélményt nyújtunk ügyfeleinknek! Legyen szó kisvállalkozásról vagy nagyobb vendéglátóegységről. Célunk, hogy kielégítsük ügyfeleink igényeit és hozzájáruljunk az üzleti sikerükhöz.",
		"Legyen részese Ön is a kávézás élményének, és bízza ránk a kávégépekkel kapcsolatos igényeit, problémáit!",
	];
	const afterElementcolor = "#b86f3c";

	return (
		<>
			<Stack
				flex={1}
				spacing={{ base: 3, md: 6 }}
				zIndex={10}
			>
				<Heading
					lineHeight={1.1}
					fontWeight={600}
					fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
				>
					<Text
						as={"span"}
						position={"relative"}
						color={textColor}
						_after={{
							content: "''",
							width: "full",
							height: "30%",
							position: "absolute",
							bottom: 1,
							left: 0,
							bg: afterElementcolor,
							zIndex: -1,
						}}
					>
						{title}
					</Text>
				</Heading>
				{aboutText.map((text, index) => {
					return (
						<Text
							key={index}
							color={textColor}
						>
							{text}
						</Text>
					);
				})}
			</Stack>
		</>
	);
}
