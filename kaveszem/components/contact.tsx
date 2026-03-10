import { useNavBarColor, useTextColor } from "@/theme/theme";
import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MdPhone } from "react-icons/md";
import { ListSectionProps } from "./list";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: { 
		opacity: 1, 
		x: 0,
		transition: { type: "spring", stiffness: 100 }
	},
};

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
			spacing={{ base: 4, md: 8 }}
			zIndex={10}
			id={contactInfo.id}
		>
			<Heading
				lineHeight={1.2}
				fontWeight={700}
				color={textColor}
				fontSize={
					contactInfo.fontSize
						? contactInfo.fontSize
						: { base: "2xl", sm: "3xl", lg: "4xl" }
				}
				bgGradient={`linear(to-r, ${textColor}, ${afterElementcolor})`}
				bgClip="text"
				display="inline-block"
				pb={2}
			>
				{contactInfo.title}
			</Heading>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
			>
				<List spacing={{ base: 4, md: 6 }}>
					<motion.div variants={itemVariants}>
						<ListItem color={textColor} fontSize={{ base: "md", md: "lg" }} display="flex" alignItems="center" _hover={{ transform: "translateX(10px)", color: afterElementcolor }} transition="all 0.2s ease-in-out">
							{contactInfo.icon ? (
								<ListIcon
									as={contactInfo.icon}
									color={afterElementcolor}
									fontSize="xl"
									mr={4}
								/>
							) : null}
							<Link href="mailto:urszulycs@t-online.hu">
								{contactInfo.items[0]}
							</Link>
						</ListItem>
					</motion.div>
					<motion.div variants={itemVariants}>
						<ListItem color={textColor} fontSize={{ base: "md", md: "lg" }} display="flex" alignItems="center" _hover={{ transform: "translateX(10px)", color: afterElementcolor }} transition="all 0.2s ease-in-out">
							{contactInfo.icon ? (
								<ListIcon
									as={contactInfo.icon}
									color={afterElementcolor}
									fontSize="xl"
									mr={4}
								/>
							) : null}
							<Link href="tel:+36209594226">{contactInfo.items[1]}</Link>
						</ListItem>
					</motion.div>
					<motion.div variants={itemVariants}>
						<ListItem color={textColor} fontSize={{ base: "md", md: "lg" }} display="flex" alignItems="center" _hover={{ transform: "translateX(10px)", color: afterElementcolor }} transition="all 0.2s ease-in-out">
							{contactInfo.icon ? (
								<ListIcon
									as={contactInfo.icon}
									color={afterElementcolor}
									fontSize="xl"
									mr={4}
								/>
							) : null}
							<Link href="tel:+36202938244">{contactInfo.items[2]}</Link>
						</ListItem>
					</motion.div>
				</List>
			</motion.div>
		</Stack>
	);
}
