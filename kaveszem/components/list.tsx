import { useNavBarColor, useTextColor } from "@/theme/theme";
import {
	Heading,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface ListSectionProps {
	id: string;
	title: string;
	items: Array<string>;
	icon?: IconType;
	fontSize?: string;
}

export default function ListSection(props: ListSectionProps) {
	const afterElementcolor = useNavBarColor();
	const textColor = useTextColor();

	return (
		<Stack
			flex={1}
			spacing={{ base: 3, md: 6 }}
			zIndex={10}
			id={props.id}
		>
			<Heading
				lineHeight={1.1}
				fontWeight={600}
				color={textColor}
				fontSize={
					props.fontSize ? props.fontSize : { base: "xl", sm: "2xl", lg: "3xl" }
				}
			>
				{props.title}
			</Heading>

			<List spacing={{ base: 3, md: 6 }}>
				{props.items.map((service, index) => {
					return (
						<ListItem
							key={index}
							color={textColor}
						>
							{props.icon ? (
								<ListIcon
									as={props.icon}
									color={afterElementcolor}
								/>
							) : null}
							{service}
						</ListItem>
					);
				})}
			</List>
		</Stack>
	);
}
