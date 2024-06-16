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

interface Props {
	children: React.ReactNode;
}

const Links = ["Szolgáltatásaink", "Kávégépek", "Árazás", "Elérhetőség"];

const NavLink = (props: Props) => {
	const { children } = props;

	return (
		<Box
			as="a"
			px={2}
			py={1}
			rounded={"md"}
			_hover={{
				textDecoration: "none",
				bg: useColorModeValue("gray.200", "gray.700"),
			}}
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
				bg={useColorModeValue("#4B6041", "#4B6041")}
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
								<Text
									key={link}
									color={textColor}
								>
									{link}
								</Text>
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
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("#68865a", "#2c3926"),
								}}
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
