import type { Metadata } from "next";
import "./globals.css";

import React from "react";
import SmoothScroll from "@/components/[locale]/utils/smoothScroll";
import Providers from "@/components/[locale]/utils/chakra";

export const metadata: Metadata = {
	title: "Kávészem",
	description: "made by Kristoth",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<main>
					<Providers>
						<SmoothScroll>{children}</SmoothScroll>
					</Providers>
				</main>
			</body>
		</html>
	);
}
