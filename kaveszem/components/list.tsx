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
	title: string;
	items: Array<string>;
	icon: IconType;
}

export default async function ListSection(props: ListSectionProps) {
	const afterElementcolor = useNavBarColor();
	const textColor = useTextColor();

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
						height: "25%",
						position: "absolute",
						bottom: 1,
						left: 1,
						bg: afterElementcolor,
						zIndex: -1,
					}}
				>
					{props.title}
				</Text>
			</Heading>

			<List spacing={{ base: 3, md: 6 }}>
				{props.items.map((service, index) => {
					return (
						<ListItem
							key={index}
							color={textColor}
						>
							<ListIcon
								as={props.icon}
								color={afterElementcolor}
							/>
							{service}
						</ListItem>
					);
				})}
			</List>
		</Stack>
	);
}
