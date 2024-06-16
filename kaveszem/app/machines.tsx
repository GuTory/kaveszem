"use client";

import {
	Heading,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
} from "@chakra-ui/react";
import { MdCoffeeMaker } from "react-icons/md";

export default function Machines() {
	const title = "Gépeink";
	const textColor = "gray.500";
	const machines = [
		"Karos kávéfőző gépek minden felszerelésével (1 és 2 karos kivitelben)",
		"Kapszulás (1 és 2 fejes kávéfőző gépek)",
		"Asztali italautómaták",
		"Automate kávéfőző gépek (napi 50 adag alatt)",
		"Nagy strapabírású gépek Party Service esetére",
	];

	return (
		<Stack
			flex={1}
			spacing={{ base: 3, md: 6 }}
		>
			<Heading
				lineHeight={1.1}
				fontWeight={600}
				fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
			>
				<Text
					as={"span"}
					position={"relative"}
					_after={{
						content: "''",
						width: "full",
						height: "30%",
						position: "absolute",
						bottom: 1,
						left: 0,
						bg: "#b86f3c",
						zIndex: -1,
					}}
				>
					{title}
				</Text>
			</Heading>

			<List spacing={{ base: 3, md: 6 }}>
				{machines.map((machine, index) => {
					return (
						<ListItem
							color={textColor}
							key={index}
						>
							<ListIcon
								as={MdCoffeeMaker}
								color="green.500"
							/>
							{machine}
						</ListItem>
					);
				})}
			</List>
		</Stack>
	);
}
