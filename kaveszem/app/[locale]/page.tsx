"use client";

import Nav from "../../components/nav/nav";
import ImageComponent from "../../components/image";
import Section from "../../components/section";
import ListSection from "../../components/list";
import ContactSection from "../../components/contact";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { SectionInfo } from "@/providers/sectioninfo";
import Footer from "../../components/footer";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import QuoteModal from "../../components/quoteModal";
import { useTextColor, useNavBarColor } from "@/theme/theme";

export default function Home() {
	const t = useTranslations();
	const sections: SectionInfo[] = SectionInfo();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const textColor = useTextColor();
	const bgColor = useNavBarColor();

	const links = sections.map((s) => [s.title, s.id]);

	return (
		<Box overflowX="hidden">
			<Nav links={links} onQuoteClick={onOpen} />
			<QuoteModal isOpen={isOpen} onClose={onClose} />
			
			{sections.map((section, index) => {
				const isFirst = index === 0;
				const isEven = index % 2 === 0;

				return (
					<Box 
						key={index} 
						id={section.id}
						minH={isFirst ? "100vh" : "auto"}
						display="flex"
						alignItems="center"
						py={isFirst ? 0 : { base: 16, md: 24 }}
						position="relative"
						_before={!isFirst && isEven ? {
							content: '""',
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							bg: "blackAlpha.50",
							_dark: { bg: "whiteAlpha.50" },
							zIndex: -1,
							transform: "skewY(-2deg)",
							transformOrigin: "top left",
						} : {}}
					>
						<Section direction={section.direction}>
							<Reveal direction={
								(typeof section.direction === "string" && section.direction === "row") || 
								(typeof section.direction === "object" && !Array.isArray(section.direction) && section.direction?.md === "row") 
									? "left" 
									: "right"
							}>
								{section.isContactSection ? (
									<ContactSection />
								) : (
									<Box>
										<ListSection
											{...{
												id: `${section.id}-content`, // Avoid duplicate IDs
												title: section.title,
												items: section.items,
												icon: section.icon,
												fontSize: isFirst ? { base: "4xl", sm: "5xl", lg: "7xl" } : section.fontSize,
											}}
										/>
										{section.id === t("Pricing.Id") && (
											<motion.div
												initial={{ opacity: 0, y: 20 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ delay: 0.5 }}
											>
												<Button
													mt={8}
													size="lg"
													onClick={onOpen}
													bg={textColor}
													color={bgColor}
													_hover={{ opacity: 0.8, transform: "translateY(-2px)" }}
													rounded="full"
													px={8}
													shadow="xl"
													fontWeight="bold"
												>
													{t("Quote.Button")}
												</Button>
											</motion.div>
										)}
									</Box>
								)}
							</Reveal>
							
							<Reveal direction={
								(typeof section.direction === "string" && section.direction === "row") || 
								(typeof section.direction === "object" && !Array.isArray(section.direction) && section.direction?.md === "row") 
									? "right" 
									: "left"
							} delay={0.2}>
								<motion.div
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
								>
									<ImageComponent src={section.imgSrc} />
								</motion.div>
							</Reveal>
						</Section>
					</Box>
				);
			})}
			
			<Reveal direction="up">
				<Footer />
			</Reveal>
		</Box>
	);
}
