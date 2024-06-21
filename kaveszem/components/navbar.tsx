"use client";

import {
	Box,
	Flex,
	HStack,
	IconButton,
	Button,
	useDisclosure,
	Stack,
	useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavBarColor, useTextColor } from "@/theme/theme";
import { motion, MotionConfig, useAnimationControls } from "framer-motion";
import { useState } from "react";

interface NavProps {
	links: string[][];
}

interface NavLinkProps {
	key: string;
	links: string[];
}

interface HamburgerButtonProps {
	onClick: () => void;
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

const AnimatedHamburgerButton = (props: HamburgerButtonProps) => {
	const [active, setActive] = useState(false);
	const controls = useAnimationControls();

	return (
		<MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
			<motion.button
				initial={false}
				className="relative h-10 w-10 rounded-md md:hidden"
				aria-label={"Open Menu"}
				onClick={() =>
					setActive((val: boolean) => {
						const newValue = !val;
						props.onClick();
						controls.start(newValue ? "open" : "closed");
						return newValue;
					})
				}
				color={useTextColor()}
				whileHover={{ background: useNavBarColor() }}
				animate={controls}
			>
				<motion.span
					className="absolute h-0.5 w-5"
					style={{
						left: "50%",
						top: "35%",
						x: "-50%",
						y: "-50%",
						backgroundColor: useTextColor(),
					}}
					variants={{
						open: {
							rotate: ["0deg", "0deg", "45deg"],
							top: ["35%", "50%", "50%"],
						},
						closed: {
							rotate: ["45deg", "0deg", "0deg"],
							top: ["50%", "50%", "35%"],
						},
					}}
				/>
				<motion.span
					className="absolute h-0.5 w-5"
					style={{
						left: "50%",
						top: "50%",
						x: "-50%",
						y: "-50%",
						backgroundColor: useTextColor(),
					}}
					variants={{
						open: {
							visibility: ["visible", "hidden", "hidden"],
						},
						closed: {
							visibility: ["hidden", "hidden", "visible"],
						},
					}}
				/>
				<motion.span
					className="absolute h-0.5 w-5"
					style={{
						left: "50%",
						bottom: "35%",
						x: "-50%",
						y: "50%",
						backgroundColor: useTextColor(),
					}}
					variants={{
						open: {
							rotate: ["0deg", "0deg", "-45deg"],
							bottom: ["35%", "50%", "50%"],
						},
						closed: {
							rotate: ["-45deg", "0deg", "0deg"],
							bottom: ["50%", "50%", "35%"],
						},
					}}
				/>
			</motion.button>
		</MotionConfig>
	);
};

export default function Nav(props: NavProps) {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const companyName = "Kávészem";

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

	const getOffset = () => {
		return isOpen ? -280 : -80;
	};

	return (
		<Box
			bg={useNavBarColor()}
			px={4}
			className="glassy sticky z-50 top-0 w-full"
		>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<AnimatedHamburgerButton onClick={isOpen ? onClose : onOpen} />
				<HStack
					spacing={8}
					alignItems={"center"}
				>
					<Box
						color={useTextColor()}
						cursor={"pointer"}
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
						onClick={clickEvent}
					>
						{props.links.map((link) => (
							<NavLink
								key={link[0]}
								links={link}
							/>
						))}
					</HStack>
				</HStack>
				<Flex alignItems={"center"}>
					<Stack
						direction={"row"}
						spacing={7}
					>
						<Button
							onClick={toggleColorMode}
							variant="ghost"
							color={useTextColor()}
							cursor={"pointer"}
							_hover={{ bg: useNavBarColor() }}
						>
							{colorMode === "light" ? <SunIcon /> : <MoonIcon />}
						</Button>
					</Stack>
				</Flex>
			</Flex>

			{isOpen ? (
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
		</Box>
	);
}
