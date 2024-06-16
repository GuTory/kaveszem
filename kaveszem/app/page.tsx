import Image from "next/image";
import Nav from "./navbar";
import Section from './section';
import About from "./about";
import Services from "./services";
import Machines from './machines';
import ImageComponent from './image';
import { useColorModeValue } from "@chakra-ui/react";

export default function Home() {
	const bgColor = "#EAD7BB";

	return (
		<>
			<Nav />
			<main style={{backgroundColor: bgColor}}>
				<Section>
					<About />
					<ImageComponent src={"coffee_machine.jpg"} />
				</Section>
				<Section>
					<ImageComponent src={"latte_art.jpg"} />
					<Services />
					
				</Section>
				<Section>
					<Machines />
					<ImageComponent src={"coffee_machine_steam.jpg"} />
				</Section>
			</main>
		</>
	);
}
