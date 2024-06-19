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
import { useHoverProps, useNavBarColor, useTextColor } from "@/theme/theme";

interface NavProps {
	links: string[][];
}

interface NavLinkProps {
	key: string;
	links: string[];
}

const NavLink = (props: NavLinkProps) => {
	return (
		<Box
			as="a"
			px={2}
			py={1}
			rounded={"md"}
			color={useTextColor()}
			_hover={useHoverProps()}
			href={"#" + props.links[1]}
		>
			{props.links[0]}
		</Box>
	);
};

export default function Nav(props: NavProps) {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const companyName = "Kávészem Bt.";

	const clickEvent = (event: React.SyntheticEvent) => {
		event.preventDefault();
		const target = event.target as HTMLElement;
		const id = target.getAttribute("href")?.replace("#", "");
		const element = document.getElementById(String(id));
		const yOffset = getOffset();
		if (!element) return;
		const y =
			element?.getBoundingClientRect().top + window.scrollY + yOffset;
		window.scrollTo({
			top: y,
			behavior: "smooth",
		});
	};

	const getOffset = () => {
		return isOpen ? -280 : -80;
	};

	return (
		<>
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
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
						variant="ghost"
						color={useTextColor()}
						_hover={useHoverProps()}
					/>
					<HStack
						spacing={8}
						alignItems={"center"}
					>
						<Box
							color={useTextColor()}
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
								_hover={useHoverProps()}
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
		</>
	);
}
