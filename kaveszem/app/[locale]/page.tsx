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

export default function Home() {
	const t = useTranslations();

	const links = [
		[t("Services.Title"), t("Services.Id")],
		[t("Machines.Title"), t("Machines.Id")],
		[t("Pricing.Title"), t("Pricing.Id")],
		[t("Contact.Title"), t("Contact.Id")],
	];

	const aboutInfo: ListSectionProps = {
		id: t("About.Id"),
		title: t("About.Title"),
		items: t("About.Description").split("\n"),
		fontSize: { base: "3xl", sm: "4xl", lg: "6xl" },
	};

	const servicesInfo: ListSectionProps = {
		id: t("Services.Id"),
		title: t("Services.Title"),
		items: t("Services.Description").split("\n"),
		icon: MdCheck,
	};

	const machinesInfo: ListSectionProps = {
		id: t("Machines.Id"),
		title: t("Machines.Title"),
		items: t("Machines.Description").split("\n"),
		icon: MdCoffeeMaker,
	};

	const pricingInfo: ListSectionProps = {
		id: t("Pricing.Id"),
		title: t("Pricing.Title"),
		items: t("Pricing.Description").split("\n"),
		icon: MdCheck,
	};

	const contactInfo: ListSectionProps = {
		id: t("Contact.Id"),
		title: t("Contact.Title"),
		items: t("Contact.Description").split("\n"),
		icon: MdPhone,
	};

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
				<ListSection {...aboutInfo} />
				<ImageComponent
					src={
						"https://images.unsplash.com/photo-1620807773206-49c1f2957417?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
				/>
			</Section>
			<Section direction={reverseDirection}>
				<ListSection {...servicesInfo} />
				<ImageComponent src={"latte_art.jpg"} />
			</Section>
			<Section direction={normalDirection}>
				<ListSection {...machinesInfo} />
				<ImageComponent
					src={
						"https://images.unsplash.com/photo-1581068106019-5aa70c6ab424?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
				/>
			</Section>
			<Section direction={reverseDirection}>
				<ListSection {...pricingInfo} />
				<ImageComponent
					src={
						"https://plus.unsplash.com/premium_photo-1661284864429-8f4867c2d745?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
				/>
			</Section>
			<Section direction={normalDirection}>
				<ContactSection />
				<ImageComponent
					src={
						"https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
				/>
			</Section>
		</>
	);
}
