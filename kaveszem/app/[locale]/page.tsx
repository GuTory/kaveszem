"use client";

import Nav from "@/components/[locale]/navbar";
import ImageComponent from "@/components/[locale]/imageComponent";
import Section from "@/components/[locale]/section";
import ListSection from "@/components/[locale]/listSection";
import ContactSection from "@/components/[locale]/contact";
import { useTranslations } from "next-intl";
import { RevealAnimation } from "@/components/[locale]/revealAnimation";
import { SectionInfo } from "@/providers/sectioninfo";
import Footer from "@/components/[locale]/footer";
import { Image, Spacer } from "@chakra-ui/react";
import { unsplashUrls } from "@/providers/url";

export default function Home() {
	const t = useTranslations();

	const links = [
		[t("Services.Title"), t("Services.Id")],
		[t("Machines.Title"), t("Machines.Id")],
		[t("Pricing.Title"), t("Pricing.Id")],
		[t("Contact.Title"), t("Contact.Id")],
	];

	const sections: SectionInfo[] = SectionInfo();

	return (
		<>
			<Nav links={links} />
			<Image
				position={"absolute"}
				top={0}
				left={0}
				fit={"cover"}
				src={unsplashUrls.cover}
				alt="Coffee beans"
				align={"center"}
				w={"100dvw"}
				h={"100dvh"}
				zIndex={-1}
			/>
			{sections.map((section, index) => (
				<Section
					key={index}
					direction={section.direction}
				>
					<RevealAnimation>
						{section.isContactSection ? (
							<ContactSection />
						) : (
							<ListSection
								{...{
									id: section.id,
									title: section.title,
									items: section.items,
									icon: section.icon,
									fontSize: section.fontSize,
								}}
							/>
						)}
					</RevealAnimation>
					<RevealAnimation>
						<ImageComponent src={section.imgSrc} />
					</RevealAnimation>
				</Section>
			))}
			<Spacer />
			<Footer />
		</>
	);
}
