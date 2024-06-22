import { useNavBarColor, useTextColor } from "@/theme/theme";
import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";

export interface ListSectionProps
	extends ListSectionContentProps,
		ListSectionAppearanceProps {}

interface ListSectionContentProps {
	id: string;
	title: string;
	items: Array<string>;
}

interface ListSectionAppearanceProps {
	icon?: IconType;
	fontSize?: { base: string; sm: string; lg: string };
}

export default function ContactSection(props: ListSectionProps) {
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
				<ListItem color={textColor}>
					{props.icon ? (
						<ListIcon
							as={props.icon}
							color={afterElementcolor}
						/>
					) : null}
					<Link href="mailto:urszulycs@t-online.hu">urszulycs@t-online.hu</Link>
				</ListItem>
				<ListItem color={textColor}>
					{props.icon ? (
						<ListIcon
							as={props.icon}
							color={afterElementcolor}
						/>
					) : null}
					<Link href="tel:+36209594226">Telefon - Szeged: +36-20-9594226</Link>
				</ListItem>
				<ListItem color={textColor}>
					{props.icon ? (
						<ListIcon
							as={props.icon}
							color={afterElementcolor}
						/>
					) : null}
					<Link href="tel:+36202938244">
						Telefon - Budapest: +36-20-2938244
					</Link>
				</ListItem>
			</List>
		</Stack>
	);
}
