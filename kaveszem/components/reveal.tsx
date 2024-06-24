import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
	children: React.ReactNode;
}

export const Reveal = ({ children }: RevealProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView, mainControls]);

	return (
		<motion.div
			ref={ref}
			variants={{
				hidden: { opacity: 0, y: 75 },
				visible: { opacity: 1, y: 0 },
			}}
			initial="hidden"
			animate={mainControls}
			transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
			style={{ width: "100%" }}
		>
			{children}
		</motion.div>
	);
};
