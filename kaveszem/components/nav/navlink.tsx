import { useTextColor } from "@/theme/theme";
import { Box } from "@chakra-ui/react";

interface NavLinkProps {
	key: string;
	links: string[];
}

const NavLink = (props: NavLinkProps) => {
	return (
		<Box
			as="a"
			px={1}
			py={0}
			w={"fit-content"}
			rounded={"md"}
			position={"relative"}
			color={useTextColor()}
			_after={{
				content: "''",
				position: "absolute",
				width: "0",
				height: "1px",
				background: useTextColor(),
				bottom: "0",
				left: "0",
			}}
			_hover={{
				_after: {
					width: "100%",
					transition: "width 0.3s",
				},
			}}
			href={"#" + props.links[1]}
		>
			{props.links[0]}
		</Box>
	);
};

export default NavLink;
