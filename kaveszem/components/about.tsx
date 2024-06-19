"use client";

import { useNavBarColor, useTextColor } from "@/theme/theme";
import { Stack, Heading, Text } from "@chakra-ui/react";

interface AboutProps {
	id: string;
}

export default function About(props: AboutProps) {
	const title = "Cégünkről";
	const aboutText = [
		"Cégünk több mint 24 éve áll az Önök szolgálatában, és kiemelt specializációnk a kávégépek bérbeadása. Büszkék vagyunk arra, hogy több mint 100 partnerrel dolgozunk együtt nap mint nap.",
		"Megbízható kávégépeinkkel és szakértelmünkkel garantáltan kiváló minőségű kávéélményt nyújtunk ügyfeleinknek! Legyen szó kisvállalkozásról vagy nagyobb vendéglátóegységről. Célunk, hogy kielégítsük ügyfeleink igényeit és hozzájáruljunk az üzleti sikerükhöz.",
		"Legyen részese Ön is a kávézás élményének, és bízza ránk a kávégépekkel kapcsolatos igényeit, problémáit!",
	];
	const textColor = useTextColor();

	return (
		<>
			<Stack
				flex={1}
				spacing={{ base: 3, md: 6 }}
				zIndex={10}
				id={props.id}
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
