import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "../providers/chakra";

export const metadata: Metadata = {
	title: "Kávészem",
	description: "made by Kristoth",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning={true}
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
