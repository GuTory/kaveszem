"use client";

import React from "react";
import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
	children: React.ReactNode;
}

const SmoothScroll = (props: SmoothScrollProps) => {
	useEffect(() => {
		const lenis = new Lenis();

		lenis.on("scroll", (e: any) => {
			console.log(e);
		});

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return <>{props.children}</>;
};

export default SmoothScroll;