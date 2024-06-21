"use client";

import Nav from "../components/nav/nav";
import ImageComponent from "../components/image";
import Section from "../components/section";
import { ListSectionProps } from "../components/list";
import { MdCheck, MdCoffeeMaker, MdPhone } from "react-icons/md";
import ListSection from "../components/list";
import { StackDirection } from "@chakra-ui/react";

export default function Home() {
	const links = [
		["Szolgáltatásaink", "services"],
		["Gépeink", "machines"],
		["Árazás", "pricing"],
		["Elérhetőség", "contact"],
	];

	const aboutInfo: ListSectionProps = {
		id: "about",
		title: "Cégünkről",
		items: [
			"Cégünk több mint 24 éve áll az Önök szolgálatában, és kiemelt specializációnk a kávégépek bérbeadása. Büszkék vagyunk arra, hogy több mint 100 partnerrel dolgozunk együtt nap mint nap.",
			"Megbízható kávégépeinkkel és szakértelmünkkel garantáltan kiváló minőségű kávéélményt nyújtunk ügyfeleinknek! Legyen szó kisvállalkozásról vagy nagyobb vendéglátóegységről. Célunk, hogy kielégítsük ügyfeleink igényeit és hozzájáruljunk az üzleti sikerükhöz.",
			"Legyen részese Ön is a kávézás élményének, és bízza ránk a kávégépekkel kapcsolatos igényeit, problémáit!",
		],
		fontSize: { base: "3xl", sm: "4xl", lg: "6xl" },
	};

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
				<ListSection {...contactInfo} />
				<ImageComponent
					src={
						"https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
				/>
			</Section>
		</>
	);
}
