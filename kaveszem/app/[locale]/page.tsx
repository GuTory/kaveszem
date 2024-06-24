"use client";

import Nav from "../../components/nav/nav";
import ImageComponent from "../../components/image";
import Section from "../../components/section";
import { ListSectionProps } from "../../components/list";
import { MdCheck, MdCoffeeMaker, MdPhone } from "react-icons/md";
import ListSection from "../../components/list";
import { StackDirection } from "@chakra-ui/react";
import ContactSection from "../../components/contact";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { unsplashUrls } from "@/providers/url";

export default function Home() {
	const t = useTranslations();

	const links = [
		[t("Services.Title"), t("Services.Id")],
		[t("Machines.Title"), t("Machines.Id")],
		[t("Pricing.Title"), t("Pricing.Id")],
		[t("Contact.Title"), t("Contact.Id")],
	];

	const normalDirection: StackDirection = { base: "column", md: "row" };
	const reverseDirection: StackDirection = {
		base: "column",
		md: "row-reverse",
	};
	/**
	 * <Example />
	 */
	return (
		<>
			<Nav links={links} />
			<Section direction={normalDirection}>
				<Reveal>
					<ListSection
						{...{
							id: t("About.Id"),
							title: t("About.Title"),
							items: t("About.Description").split("\n"),
							fontSize: { base: "3xl", sm: "4xl", lg: "6xl" },
						}}
					/>
				</Reveal>
				<Reveal>
					<ImageComponent src={unsplashUrls.about} />
				</Reveal>
			</Section>
			<Section direction={reverseDirection}>
				<Reveal>
					<ListSection
						{...{
							id: t("Services.Id"),
							title: t("Services.Title"),
							items: t("Services.Description").split("\n"),
							icon: MdCheck,
						}}
					/>
				</Reveal>
				<Reveal>
					<ImageComponent src={"latte_art.jpg"} />
				</Reveal>
			</Section>
			<Section direction={normalDirection}>
				<Reveal>
					<ListSection
						{...{
							id: t("Machines.Id"),
							title: t("Machines.Title"),
							items: t("Machines.Description").split("\n"),
							icon: MdCoffeeMaker,
						}}
					/>
				</Reveal>
				<Reveal>
					<ImageComponent src={unsplashUrls.machines} />
				</Reveal>
			</Section>
			<Section direction={reverseDirection}>
				<Reveal>
					<ListSection
						{...{
							id: t("Pricing.Id"),
							title: t("Pricing.Title"),
							items: t("Pricing.Description").split("\n"),
							icon: MdCheck,
						}}
					/>
				</Reveal>
				<Reveal>
					<ImageComponent src={unsplashUrls.pricing} />
				</Reveal>
			</Section>
			<Section direction={normalDirection}>
				<Reveal>
					<ContactSection />
				</Reveal>
				<Reveal>
					<ImageComponent src={unsplashUrls.contact} />
				</Reveal>
			</Section>
		</>
	);
}
