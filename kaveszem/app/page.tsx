"use client";

import Nav from "../components/navbar";
import About from "../components/about";
import ImageComponent from "../components/image";
import Section from "../components/main";
import { ListSectionProps } from "../components/list";
import { MdCheck, MdCoffeeMaker, MdPhone } from "react-icons/md";
import ListSection from "../components/list";
import { useColorModeValue } from "@chakra-ui/react";
import { useRef } from "react";

export default function Home() {
	//const bgColor = "#EAD7BB";
	const bgColor = useColorModeValue("#EAD7BB", "#6F4E37");

	const links = [["Szolgáltatásaink", "services"], ["Gépeink", "machines"], ["Árazás", "pricing"], ["Elérhetőség", "contact"]];

	const servicesInfo: ListSectionProps = {
		id: links[0][1],
		title: links[0][0],
		items: [
			"Ügyfeleink kérésének megfelelő kávéfőző gépek bérbeadása",
			"24 órán belüli szervíz partnereink részére",
			"Ön által választott szemes kávé az árban",
		],
		icon: MdCheck,
	};

	const machinesInfo: ListSectionProps = {
		id: links[1][1],
		title: links[1][0],
		items: [
			"Karos kávéfőző gépek minden felszerelésével (1 és 2 karos kivitelben)",
			"Kapszulás (1 és 2 fejes kávéfőző gépek)",
			"Asztali italautómaták",
			"Automate kávéfőző gépek (napi 50 adag alatt)",
			"Nagy strapabírású gépek Party Service esetére",
		],
		icon: MdCoffeeMaker,
	};

	const pricingInfo: ListSectionProps = {
		id: links[2][1],
		title: links[2][0],
		items: [
			"Utólagos adagelszámolási konstrukció",
			"Így 0 Ft befektetett tőkével veheti igénybe szolgáltatásunkat",
			"Az áraink tartalmazzák a gép bérlését, a felhasznált kávét és az esetleges szervízt is",
			"Extra üzemeltetési díj és egyéb rejtett költségek nélkül!",
		],
		icon: MdCheck,
	};

	const contactInfo: ListSectionProps = {
		id: links[3][1],
		title: links[3][0],
		items: [
			"E-mail: urszulycs@t-online.hu",
			"Telefon - Szeged: +36-20-9594226",
			"Telefon - Budapest: +36-20-2938244",
		],
		icon: MdPhone,
	};

	const aboutRef = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<Nav links={links} />
			<main style={{ backgroundColor: bgColor }}>
				<Section align="center">
					<About  id="about" />
					<ImageComponent src={"coffee_machine.jpg"} />
				</Section>
				<Section align="center">
					<ImageComponent src={"latte_art.jpg"} />
					<ListSection {...servicesInfo} />
				</Section>
				<Section align="center">
					<ListSection {...machinesInfo} />
					<ImageComponent src={"coffee_machine_steam.jpg"} />
				</Section>
				<Section align="top">
					<ListSection {...pricingInfo} />
					<ListSection {...contactInfo} />
				</Section>
			</main>
		</>
	);
}
