import { useNavBarColor, useTextColor } from "@/theme/theme";
import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

export interface ListSectionProps
	extends ListSectionContentProps,
		ListSectionAppearanceProps {}

interface ListSectionContentProps {
	id: string;
	title: string;
	items: Array<string>;
}

interface ListSectionAppearanceProps {
	icon?: IconType | null;
	fontSize?: { base: string; sm: string; lg: string };
}

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

export default function ListSection(props: ListSectionProps) {
	const afterElementcolor = useNavBarColor();
	const textColor = useTextColor();

	return (
		<Stack
			flex={1}
			spacing={{ base: 4, md: 8 }}
			zIndex={10}
			id={props.id}
		>
			<Heading
				lineHeight={1.2}
				fontWeight={700}
				color={textColor}
				fontSize={
					props.fontSize ? props.fontSize : { base: "2xl", sm: "3xl", lg: "4xl" }
				}
				bgGradient={`linear(to-r, ${textColor}, ${afterElementcolor})`}
				bgClip="text"
				display="inline-block"
				pb={2}
			>
				{props.title}
			</Heading>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
			>
				<List spacing={{ base: 4, md: 6 }}>
					{props.items.map((service, index) => {
						return (
							<motion.div key={index} variants={itemVariants}>
								<ListItem
									color={textColor}
									fontSize={{ base: "md", md: "lg" }}
									display="flex"
									alignItems="center"
									_hover={{ transform: "translateX(10px)", color: afterElementcolor }}
									transition="all 0.2s ease-in-out"
									cursor="default"
								>
									{props.icon ? (
										<ListIcon
											as={props.icon}
											color={afterElementcolor}
											fontSize="xl"
											mr={4}
										/>
									) : null}
									{service}
								</ListItem>
							</motion.div>
						);
					})}
				</List>
			</motion.div>
		</Stack>
	);
}
