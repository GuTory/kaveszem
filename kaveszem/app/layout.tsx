import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "../providers/chakra";

//const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
