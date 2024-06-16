"use client";

import { MdCheck } from "react-icons/md";
import {
	Heading,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
} from "@chakra-ui/react";
export default function Services() {
	const title = "Szolgáltatásaink";
	const textColor = "gray.700";
	const services = [
		"Ügyfeleink kérésének megfelelő kávéfőző gépek bérbeadása",
		"24 órán belüli szervíz partnereink részére",
		"Ön által választott szemes kávé az árban",
	];

	return (
		<Stack
			flex={1}
			spacing={{ base: 3, md: 6 }}
			zIndex={10}
		>
			<Heading
				lineHeight={1.1}
				fontWeight={600}
				fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
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
						bg: "#b86f3c",
						zIndex: -1,
					}}
				>
					{title}
				</Text>
			</Heading>

			<List spacing={{ base: 3, md: 6 }}>
				{services.map((service, index) => {
					return (
						<ListItem key={index} color={textColor}>
							<ListIcon
								as={MdCheck}
								color="green.500"
							/>
							{service}
						</ListItem>
					);
				})}
			</List>
		</Stack>
	);
}
