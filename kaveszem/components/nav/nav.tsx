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
import { useState, useEffect } from "react";
import { Locale } from "@/locales";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface NavProps {
	links: string[][];
	onQuoteClick: () => void;
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
		setIsOpen(false);
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

	const textColor = useTextColor();
	const navBarColor = useNavBarColor();
	const t = useTranslations("Quote");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
			<motion.nav
				initial={false}
				className="glassy z-50 px-5 m-auto box-border"
				style={{
					backgroundColor: navBarColor,
					opacity: mounted ? 1 : 0,
				}}
				variants={{
					full: {
						position: "fixed",
						width: "100%",
						top: 0,
						minWidth: "fit-content",
						maxWidth: "100%",
						borderRadius: "0",
					},
					narrow: {
						position: "fixed",
						top: "1rem",
						minWidth: "fit-content",
						maxWidth: "50%",
						left: "0",
						right: "0",
						margin: "0 auto",
						borderRadius: "9999px",
						boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
					},
				}}
				animate={isRoundedAndNarrow ? "narrow" : "full"}
			>
				<Flex
					w={"full"}
					h={16}
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
							color={textColor}
							cursor={"pointer"}
							fontWeight={"extrabold"}
							fontSize="xl"
							letterSpacing="widest"
							textTransform="uppercase"
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
							spacing={6}
							display={{ base: "none", md: "flex" }}
							onClick={clickEvent}
						>
							{props.links.slice(0, -1).map((link) => (
								<NavLink
									key={link[0]}
									links={link}
								/>
							))}
							<Button
								onClick={props.onQuoteClick}
								variant="solid"
								bg={textColor}
								color={navBarColor}
								rounded="full"
								px={6}
								_hover={{ opacity: 0.8 }}
								fontWeight="bold"
							>
								{t("Button")}
							</Button>
							<NavLink
								key={props.links[props.links.length - 1][0]}
								links={props.links[props.links.length - 1]}
							/>
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
								ml={{ base: 2, md: 10 }}
								color={textColor}
								cursor={"pointer"}
								_hover={{ bg: "blackAlpha.200", _dark: { bg: "whiteAlpha.200" } }}
							>
								{locale === "en" ? "EN" : "HU"}
							</Button>
							<Button
								px={0}
								onClick={toggleColorMode}
								rounded={"full"}
								variant="ghost"
								color={textColor}
								cursor={"pointer"}
								_hover={{ bg: "blackAlpha.200", _dark: { bg: "whiteAlpha.200" } }}
							>
								{mounted ? (colorMode === "light" ? <SunIcon /> : <MoonIcon />) : <Box w={4} h={4} />}
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
							{props.links.slice(0, -1).map((link) => (
								<NavLink
									key={link[0]}
									links={link}
								/>
							))}
							<Button
								onClick={props.onQuoteClick}
								variant="solid"
								bg={textColor}
								color={navBarColor}
								rounded="full"
								w="fit-content"
								px={6}
								_hover={{ opacity: 0.8 }}
								fontWeight="bold"
							>
								{t("Button")}
							</Button>
							<NavLink
								key={props.links[props.links.length - 1][0]}
								links={props.links[props.links.length - 1]}
							/>
						</Stack>
					</Box>
				) : null}
			</motion.nav>
		</MotionConfig>
	);
}
