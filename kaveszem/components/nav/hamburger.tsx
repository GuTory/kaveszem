import { useNavBarColor, useTextColor } from "@/theme/theme";
import { MotionConfig, motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

interface HamburgerButtonProps {
	onClick: () => void;
}

const AnimatedHamburgerButton = (props: HamburgerButtonProps) => {
	const [active, setActive] = useState(false);
	const controls = useAnimationControls();

	return (
		<MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
			<motion.button
				initial={false}
				className="relative h-10 w-10 rounded-full md:hidden"
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

export default AnimatedHamburgerButton;
