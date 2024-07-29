import { Image } from "@chakra-ui/react";
import unsplashUrls from "@/providers/url";
import SmoothScroll from "@/components/[locale]/utils/smoothScroll";

export default function Home() {
	return (
		<>
			<Image
				fit={"cover"}
				src={unsplashUrls.cover}
				alt="Coffee beans"
				w={"100dvw"}
				h={"100dvh"}
			/>
			<Image
				fit={"cover"}
				src={unsplashUrls.machines}
				alt="Coffee beans"
				w={"100dvw"}
				h={"100dvh"}
			/>
		</>
	);
}
