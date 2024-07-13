"use client";

import { Box, Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { useNavBarColor, useTextColor } from "@/theme/theme";
import ToggleCloseable from "../_button/toggle.closeable";
import NavLink from "./nav.link";
import {
	motion,
	useScroll,
	useMotionValueEvent,
	MotionConfig,
} from "framer-motion";
import ToggleLayout from "../_layout/toggle.layout";
import CloseableNavigation from "./nav.closeable";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "@/state";
import { NavbarState } from "@/state/reducers";
import { navbarStateType } from "@/state/action-types";
import { useEffect, useState } from "react";

interface NavProps {
	links: string[][];
}

export default function Nav(props: NavProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const { setFull, setNarrow, setMobile } = bindActionCreators(
		actionCreators,
		dispatch
	);
	const state = useSelector((state: NavbarState) => state.navbar);

	const companyName = "Kávészem";

	const getOffset = () => {
		return isOpen ? -280 : -80;
	};

	let breakPointValue = useBreakpointValue({
		base: navbarStateType.Mobile,
		md: navbarStateType.Full,
	});
	const { scrollY } = useScroll();

	useEffect(() => {
		switch (breakPointValue) {
			case navbarStateType.Full:
				if (scrollY.get() > 100) setNarrow();
				else setFull();
				break;
			case navbarStateType.Mobile:
				setMobile();
				break;
			default:
				break;
		}
	}, [breakPointValue, scrollY, setFull, setMobile, setNarrow]);

	useMotionValueEvent(scrollY, "change", () => {
		switch (breakPointValue) {
			case navbarStateType.Full:
				if (scrollY.get() > 100) {
					setNarrow();
				} else {
					setFull();
				}
				break;
			case navbarStateType.Mobile:
				setMobile();
				break;
			default:
				break;
		}
	});

	return (
		<MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
			<motion.nav
				className="z-50 px-5 m-auto box-border"
				variants={{
					full: {
						position: "sticky",
						width: "100%",
						top: 0,
						minWidth: "fit-content",
						maxWidth: "100%",
						borderRadius: "0",
						className: "bg-opacity-0",
					},
					narrow: {
						position: "sticky",
						top: "0.5rem",
						minWidth: "fit-content",
						maxWidth: "40%",
						borderRadius: "9999px",
						backgroundColor: useNavBarColor(),
						className: "bg-opacity-100 glassy",
					},
					mobile: {
						position: "sticky",
						width: "100%",
						top: 0,
						minWidth: "fit-content",
						maxWidth: "100%",
						borderRadius: "0",
						backgroundColor: useNavBarColor(),
						className: "bg-opacity-100 glassy",
					},
				}}
				animate={
					state === navbarStateType.Full
						? "full"
						: state === navbarStateType.Narrow
						? "narrow"
						: state === navbarStateType.Mobile
						? "mobile"
						: "full"
				}
			>
				<Flex
					w={"full"}
					h={12}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<ToggleCloseable
						onClick={() => {
							setIsOpen(!isOpen);
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
					<ToggleLayout />
				</Flex>
				<CloseableNavigation
					links={props.links}
					isOpen={isOpen}
				/>
			</motion.nav>
		</MotionConfig>
	);
}
