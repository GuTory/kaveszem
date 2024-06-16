"use client";

import {
	Box,
	Flex,
	HStack,
	IconButton,
	Button,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { use } from "react";

interface Props {
	children: React.ReactNode;
}

const Links = ["Szolgáltatásaink", "Kávégépek", "Árazás", "Elérhetőség"];

const useHoverProps = () => ({
	textDecoration: "none",
	bg: useColorModeValue("#84502b", "#2c3926"),
});

const NavLink = (props: Props) => {
	const { children } = props;

	return (
		<Box
			as="a"
			px={2}
			py={1}
			rounded={"md"}
			_hover={useHoverProps()}
			href={"#"}
		>
			{children}
		</Box>
	);
};

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const textColor = useColorModeValue("#211505", "#211505");
	const companyName = "Kávészem Bt.";

	return (
		<>
			<Box
				bg={useColorModeValue("#b86f3c", "#4B6041")}
				px={4}
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
						_hover={useHoverProps()}
					/>
					<HStack
						spacing={8}
						alignItems={"center"}
					>
						<Box color={textColor}>{companyName}</Box>
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}
						>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
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
						>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}
