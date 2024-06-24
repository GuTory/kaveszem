import { useNavBarColor, useTextColor } from "@/theme/theme";
import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { IconType } from "react-icons";
import { MdPhone } from "react-icons/md";
import { ListSectionProps } from "./list";

export default function ContactSection() {
	const afterElementcolor = useNavBarColor();
	const textColor = useTextColor();
	const t = useTranslations("Contact");

	const contactInfo: ListSectionProps = {
		id: t("Id"),
		title: t("Title"),
		items: t("Description").split("\n"),
		icon: MdPhone,
	};

	return (
		<Stack
			flex={1}
			spacing={{ base: 3, md: 6 }}
			zIndex={10}
			id={contactInfo.id}
		>
			<Heading
				lineHeight={1.1}
				fontWeight={600}
				color={textColor}
				fontSize={
					contactInfo.fontSize
						? contactInfo.fontSize
						: { base: "xl", sm: "2xl", lg: "3xl" }
				}
			>
				{contactInfo.title}
			</Heading>

			<List spacing={{ base: 3, md: 6 }}>
				<ListItem color={textColor}>
					{contactInfo.icon ? (
						<ListIcon
							as={contactInfo.icon}
							color={afterElementcolor}
						/>
					) : null}
					<Link href="mailto:urszulycs@t-online.hu">
						{contactInfo.items[0]}
					</Link>
				</ListItem>
				<ListItem color={textColor}>
					{contactInfo.icon ? (
						<ListIcon
							as={contactInfo.icon}
							color={afterElementcolor}
						/>
					) : null}
					<Link href="tel:+36209594226">{contactInfo.items[1]}</Link>
				</ListItem>
				<ListItem color={textColor}>
					{contactInfo.icon ? (
						<ListIcon
							as={contactInfo.icon}
							color={afterElementcolor}
						/>
					) : null}
					<Link href="tel:+36202938244">{contactInfo.items[2]}</Link>
				</ListItem>
			</List>
		</Stack>
	);
}
