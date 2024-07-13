import type { Metadata } from "next";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Providers from "@/providers/providers";
import { Locale } from "@/locales";
import React from "react";

export const metadata: Metadata = {
	title: "Kávészem",
	description: "made by Kristoth",
};

type Props = {
	children: React.ReactNode;
	params: {
		locale: Locale;
	};
};

const RootLayout: React.FC<Props> = async (props) => {
	const messages = await getMessages();

	return (
		<html
			lang={props.params.locale}
			suppressHydrationWarning={true}
		>
			<body>
				<NextIntlClientProvider messages={messages}>
					<React.StrictMode>
						<Providers>{props.children}</Providers>
					</React.StrictMode>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
