import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
	children: React.ReactNode;
	direction?: "up" | "down" | "left" | "right";
	delay?: number;
}

export const Reveal = ({ children, direction = "up", delay = 0 }: RevealProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView, mainControls]);

	const getHiddenVariants = () => {
		switch (direction) {
			case "up":
				return { opacity: 0, y: 75, x: 0 };
			case "down":
				return { opacity: 0, y: -75, x: 0 };
			case "left":
				return { opacity: 0, x: -75, y: 0 };
			case "right":
				return { opacity: 0, x: 75, y: 0 };
			default:
				return { opacity: 0, y: 75, x: 0 };
		}
	};

	return (
		<motion.div
			ref={ref}
			variants={{
				hidden: getHiddenVariants(),
				visible: { opacity: 1, y: 0, x: 0 },
			}}
			initial="hidden"
			animate={mainControls}
			transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
			style={{ width: "100%" }}
		>
			{children}
		</motion.div>
	);
};
