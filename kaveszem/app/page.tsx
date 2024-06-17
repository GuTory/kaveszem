"use client";

import Nav from "../components/navbar";
import About from "../components/about";
import ImageComponent from "../components/image";
import Section from "../components/main";
import { ListSectionProps } from "../components/list";
import { MdCheck, MdCoffeeMaker, MdPhone } from "react-icons/md";
import ListSection from "../components/list";
import { useColorModeValue } from "@chakra-ui/react";

export default function Home() {
	//const bgColor = "#EAD7BB";
	const bgColor = useColorModeValue("#EAD7BB", "#6F4E37");

	const servicesInfo: ListSectionProps = {
		title: "Szolgáltatásaink",
		items: [
			"Ügyfeleink kérésének megfelelő kávéfőző gépek bérbeadása",
			"24 órán belüli szervíz partnereink részére",
			"Ön által választott szemes kávé az árban",
		],
		icon: MdCheck,
	};

	const machinesInfo: ListSectionProps = {
		title: "Gépeink",
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
		title: "Áraink",
		items: [
			"Utólagos adagelszámolási konstrukció",
			"Így 0 Ft befektetett tőkével veheti igénybe szolgáltatásunkat",
			"Az áraink tartalmazzák a gép bérlését, a felhasznált kávét és az esetleges szervízt is",
			"Extra üzemeltetési díj és egyéb rejtett költségek nélkül!",
		],
		icon: MdCheck,
	};

	const contactInfo: ListSectionProps = {
		title: "Kapcsolat",
		items: [
			"E-mail: urszulycs@t-online.hu",
			"Telefon - Szeged: +36-20-9594226",
			"Telefon - Budapest: +36-20-2938244",
		],
		icon: MdPhone,
	};

	return (
		<>
			<Nav />
			<main style={{ backgroundColor: bgColor }}>
				<Section align="center">
					<About />
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
