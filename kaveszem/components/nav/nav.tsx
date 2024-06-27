"use client";

import {
	Box,
	Flex,
	HStack,
	Button,
	Stack,
	useColorMode,
	useBreakpointValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavBarColor, useTextColor } from "@/theme/theme";
import AnimatedHamburgerButton from "./hamburger";
import NavLink from "./navlink";
import {
	motion,
	useScroll,
	useMotionValueEvent,
	MotionConfig,
} from "framer-motion";
import { useState } from "react";
import { Locale } from "@/locales";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

interface NavProps {
	links: string[][];
}

export default function Nav(props: NavProps) {
	const { colorMode, toggleColorMode } = useColorMode();
	const [isOpen, setIsOpen] = useState(false);
	const [isRoundedAndNarrow, setIsNarrow] = useState(false);
	const companyName = "Kávészem";
	const locale = useLocale() as Locale;
	const router = useRouter();

	const getOffset = () => {
		return isOpen ? -280 : -80;
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

	let breakPointValue = useBreakpointValue({ base: false, md: true });

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", () => {
		if (scrollY.get() > 100 && breakPointValue) {
			setIsNarrow(true);
		} else {
			setIsNarrow(false);
		}
	});

	function handleLocaleChange(newLocale: Locale): void {
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
		router.refresh();
	}

	return (
		<MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
			<motion.nav
				initial={false}
				className="glassy z-50 px-5 m-auto box-border"
				style={{
					backgroundColor: useNavBarColor(),
				}}
				variants={{
					full: {
						position: "sticky",
						width: "100%",
						top: 0,
						minWidth: "fit-content",
						maxWidth: "100%",
						borderRadius: "0",
					},
					narrow: {
						position: "sticky",
						top: "0.5rem",
						minWidth: "fit-content",
						maxWidth: "40%",
						borderRadius: "9999px",
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
					<AnimatedHamburgerButton
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
							spacing={2}
							alignItems={"center"}
						>
							<Button
								onClick={() =>
									handleLocaleChange(locale === "en" ? "hu" : "en")
								}
								rounded={"full"}
								variant="ghost"
								ml={20}
								color={useTextColor()}
								cursor={"pointer"}
								_hover={{ bg: useNavBarColor() }}
							>
								{locale === "en" ? "EN" : "HU"}
							</Button>
							<Button
								px={0}
								onClick={toggleColorMode}
								rounded={"full"}
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
			</motion.nav>
		</MotionConfig>
	);
}
