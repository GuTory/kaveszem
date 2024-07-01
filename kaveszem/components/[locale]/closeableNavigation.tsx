import { Box, Stack } from "@chakra-ui/react";
import NavLink from "./navLink";

interface CloseAbleNavigationProps {
	links: string[][];
	isOpen: boolean;
}

const CloseableNavigation = (props: CloseAbleNavigationProps) => {
	const getOffset = () => {
		return props.isOpen ? -280 : -80;
	};

	const clickEvent = (event: React.SyntheticEvent) => {
		event.preventDefault();
		const target = event.target as HTMLElement;
		const id = target.getAttribute("href")?.replace("#", "");
		const element = document.getElementById(String(id));
		const yOffset = getOffset();
		if (!element) return;
		const y = element?.getBoundingClientRect().top + window.scrollY + yOffset;
		window.scrollTo({
			top: y,
			behavior: "smooth",
		});
	};

	return (
		<>
			{props.isOpen ? (
				<Box
					pb={4}
					display={{ md: "none" }}
				>
					<Stack
						as={"nav"}
						spacing={4}
						onClick={clickEvent}
					>
						{props.links.map((link) => (
							<NavLink
								key={link[0]}
								links={link}
							/>
						))}
					</Stack>
				</Box>
			) : null}
		</>
	);
};

export default CloseableNavigation;
