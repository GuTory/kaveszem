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
			{sections.map((section, index) => (
				<Section
					key={index}
					direction={section.direction}
				>
					<Reveal>
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
					</Reveal>
					<Reveal>
						<ImageComponent src={section.imgSrc} />
					</Reveal>
				</Section>
			))}
			<Reveal>
				<Footer />
			</Reveal>
		</>
	);
}
