import { useNavBarColor, useTextColor } from "@/theme/theme";
import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MdPhone } from "react-icons/md";

export default function ContactSection() {
	const afterElementcolor = useNavBarColor();
	const textColor = useTextColor();
	const t = useTranslations("Contact");

	const contactInfo = {
		id: t("Id"),
		title: t("Title"),
		items: t("Description").split("\n"),
		metaInfo: t("MetaDescription").split("\n"),
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
				fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
			>
				{contactInfo.title}
			</Heading>

			<List spacing={{ base: 3, md: 6 }}>
				{contactInfo.items.map((item, index) => {
					return (
						<ListItem
							color={textColor}
							key={index}
						>
							<ListIcon
								as={contactInfo.icon}
								color={afterElementcolor}
							/>
							<Link href={contactInfo.metaInfo[index]}>{item}</Link>
						</ListItem>
					);
				})}
			</List>
		</Stack>
	);
}
