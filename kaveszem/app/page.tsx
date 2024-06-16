import Image from "next/image";
import Nav from "./navbar";
import Section from './section';
import About from "./about";
import Services from "./services";
import Maschines from './machines';
import Machines from './machines';
import ImageComponent from './image';

export default function Home() {
	return (
		<>
			<Nav />
			<main>
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
