import { Box, Flex, Image } from "@chakra-ui/react";
import { useNavBarColor } from "@/theme/theme";

interface ImageComponentProps {
	src: string;
}

export default function ImageComponent(props: ImageComponentProps) {
	const glowColor = useNavBarColor();

	return (
		<Flex
			flex={1}
			justify={"center"}
			align={"center"}
			position={"relative"}
			w={"full"}
		>
			<Box
				position={"relative"}
				height={{ base: "300px", md: "400px", lg: "500px" }}
				rounded={"3xl"}
				boxShadow={"2xl"}
				width={"full"}
				_after={{
					content: "''",
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					borderRadius: "3xl",
					boxShadow: `0 20px 40px -15px ${glowColor}`,
					opacity: 0.5,
					zIndex: -1,
					transition: "opacity 0.3s ease",
				}}
				_hover={{
					_after: {
						opacity: 0.8,
					}
				}}
			>
				<Image
					alt={"Coffee Image"}
					fit={"cover"}
					align={"center"}
					w={"100%"}
					h={"100%"}
					src={props.src}
					borderRadius={"3xl"}
					transition="transform 0.5s ease"
				/>
			</Box>
		</Flex>
	);
}
