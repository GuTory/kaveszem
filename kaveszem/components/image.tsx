import { Box, Flex, Image } from "@chakra-ui/react";

interface ImageComponentProps {
	src: string;
}

export default async function ImageComponent(props: ImageComponentProps) {
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
				height={"360px"}
				rounded={"2xl"}
				boxShadow={"2xl"}
				width={"full"}
			>
				<Image
					alt={"Coffee Image"}
					fit={"cover"}
					align={"center"}
					w={"100%"}
					h={"100%"}
					src={props.src}
					borderRadius={"2xl"}
				/>
			</Box>
		</Flex>
	);
}
