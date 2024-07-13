"use client";

import { Image, Spacer } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Nav from "@/components/[locale]/_nav/nav";
import ImageComponent from "@/components/[locale]/image";
import Layout from "@/components/[locale]/_layout/layout";
import ListLayout from "@/components/[locale]/_layout/list.layout";
import ContactSection from "@/components/[locale]/contact";
import { RevealAnimation } from "@/components/[locale]/_animation/reveal.animation";
import { SectionInfo } from "@/providers/sectioninfo";
import Footer from "@/components/[locale]/footer";
import unsplashUrls from "@/providers/url";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
	const t = useTranslations();

	useEffect(() => {
		const lenis = new Lenis();

		lenis.on("scroll", (e: any) => {
			console.log(e);
		});

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

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
				<Layout
					key={index}
					direction={section.direction}
				>
					<RevealAnimation>
						{section.isContactSection ? (
							<ContactSection />
						) : (
							<ListLayout
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
				</Layout>
			))}
			<Spacer />
			<Footer />
		</>
	);
}
