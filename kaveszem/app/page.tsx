"use client";

import Nav from "./navbar";
import About from "./about";
import ImageComponent from "./image";
import Section from "./mainsection";
import { ListSectionProps } from "./listSection";
import { MdCheck, MdCoffeeMaker } from "react-icons/md";
import ListSection from "./listSection";

export default function Home() {
	const bgColor = "#EAD7BB";

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

	return (
		<>
			<Nav />
			<main style={{ backgroundColor: bgColor }}>
				<Section>
					<About />
					<ImageComponent src={"coffee_machine.jpg"} />
				</Section>
				<Section>
					<ImageComponent src={"latte_art.jpg"} />
					<ListSection {...servicesInfo} />
				</Section>
				<Section>
					<ListSection {...machinesInfo} />
					<ImageComponent src={"coffee_machine_steam.jpg"} />
				</Section>
			</main>
		</>
	);
}
