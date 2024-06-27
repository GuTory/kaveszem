import { StackDirection } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { unsplashUrls } from "./url";
import { MdCheck, MdCoffeeMaker } from "react-icons/md";

export interface SectionInfo {
	id: string;
	title: string;
	items: string[];
	imgSrc: string;
	icon: any;
	direction: StackDirection;
	fontSize?: { base: string; sm: string; lg: string };
	isContactSection?: boolean;
}

export const SectionInfo = () => {
  const t = useTranslations();
  
  const sections: SectionInfo[] = [
		{
			id: t("About.Id"),
			title: t("About.Title"),
			items: t("About.Description").split("\n"),
			fontSize: { base: "3xl", sm: "4xl", lg: "6xl" },
			imgSrc: unsplashUrls.about,
			icon: null,
			direction: { base: "column", md: "row" } as StackDirection,
		},
		{
			id: t("Services.Id"),
			title: t("Services.Title"),
			items: t("Services.Description").split("\n"),
			imgSrc: "latte_art.jpg",
			icon: MdCheck,
			direction: { base: "column", md: "row-reverse" } as StackDirection,
		},
		{
			id: t("Machines.Id"),
			title: t("Machines.Title"),
			items: t("Machines.Description").split("\n"),
			imgSrc: unsplashUrls.machines,
			icon: MdCoffeeMaker,
			direction: { base: "column", md: "row" } as StackDirection,
		},
		{
			id: t("Pricing.Id"),
			title: t("Pricing.Title"),
			items: t("Pricing.Description").split("\n"),
			imgSrc: unsplashUrls.pricing,
			icon: MdCheck,
			direction: { base: "column", md: "row-reverse" } as StackDirection,
		},
		{
			id: t("Contact.Id"),
			title: t("Contact.Title"),
			items: [],
			imgSrc: unsplashUrls.contact,
			icon: null,
			direction: { base: "column", md: "row" } as StackDirection,
			isContactSection: true,
		},
	];

  return sections;
}