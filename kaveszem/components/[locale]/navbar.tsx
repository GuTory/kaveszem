"use client";

import { Box, Flex, HStack, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useNavBarColor, useTextColor } from "@/theme/theme";
import HamburgerButton from "./hamburgerButton";
import NavLink from "./navLink";
import {
	motion,
	useScroll,
	useMotionValueEvent,
	MotionConfig,
} from "framer-motion";
import { useState } from "react";
import ToggleSection from "./toggleSection";
import CloseableNavigation from "./closeableNavigation";

interface NavProps {
	links: string[][];
}

export default function Navbar(props: NavProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isRoundedAndNarrow, setIsNarrow] = useState(false);
	const companyName = "Kávészem";

	const getOffset = () => {
		return isOpen ? -280 : -80;
	};

	let breakPointValue = useBreakpointValue({ base: false, md: true });

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", () => {
		if (scrollY.get() > 100 && breakPointValue) {
			setIsNarrow(true);
		} else {
			setIsNarrow(false);
		}
	});

	return (
		<MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
			<motion.nav
				initial={false}
				className="z-50 px-5 m-auto box-border"
				variants={{
					full: {
						position: "sticky",
						width: "100%",
						top: 0,
						minWidth: "fit-content",
						maxWidth: "100%",
						borderRadius: "0",
						backgroundColor: "transparent",
						className: "",
					},
					narrow: {
						position: "sticky",
						top: "0.5rem",
						minWidth: "fit-content",
						maxWidth: "40%",
						borderRadius: "9999px",
						backgroundColor: useNavBarColor(),
						className: "glassy",
					},
				}}
				animate={isRoundedAndNarrow ? "narrow" : "full"}
			>
				<Flex
					w={"full"}
					h={12}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<HamburgerButton
						onClick={() => {
							setIsOpen(!isOpen);
							if (isOpen) {
								setIsNarrow(false);
							}
						}}
					/>
					<HStack
						spacing={8}
						alignItems={"center"}
					>
						<Box
							color={useTextColor()}
							cursor={"pointer"}
							fontWeight={"bold"}
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth",
								});
							}}
						>
							{companyName}
						</Box>
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}
							onClick={(event: React.SyntheticEvent) => {
								event.preventDefault();
								const target = event.target as HTMLElement;
								const id = target.getAttribute("href")?.replace("#", "");
								const element = document.getElementById(String(id));
								const yOffset = getOffset();
								if (!element) return;
								const y =
									element?.getBoundingClientRect().top +
									window.scrollY +
									yOffset;
								window.scrollTo({
									top: y,
									behavior: "smooth",
								});
							}}
						>
							{props.links.map((link) => (
								<NavLink
									key={link[0]}
									links={link}
								/>
							))}
						</HStack>
					</HStack>
					<ToggleSection />
				</Flex>
				<CloseableNavigation
					links={props.links}
					isOpen={isOpen}
				/>
			</motion.nav>
		</MotionConfig>
	);
}
