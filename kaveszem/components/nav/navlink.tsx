import { useTextColor, useNavBarColor } from "@/theme/theme";
import { Box } from "@chakra-ui/react";

interface NavLinkProps {
	key: string;
	links: string[];
}

const NavLink = (props: NavLinkProps) => {
	const hoverColor = useNavBarColor();

	return (
		<Box
			as="a"
			px={2}
			py={1}
			w={"fit-content"}
			rounded={"md"}
			fontWeight={"bold"}
			position={"relative"}
			color={useTextColor()}
			transition="all 0.3s ease"
			_after={{
				content: "''",
				position: "absolute",
				width: "0",
				height: "3px",
				background: useTextColor(),
				bottom: "-2px",
				left: "50%",
				transform: "translateX(-50%)",
				transition: "width 0.3s ease-in-out",
				borderRadius: "full",
			}}
			_hover={{
				color: useTextColor(),
				transform: "translateY(-2px)",
				_after: {
					width: "100%",
				},
			}}
			href={"#" + props.links[1]}
		>
			{props.links[0]}
		</Box>
	);
};

export default NavLink;
