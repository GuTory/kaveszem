import { Locale } from "@/locales";
import { useNavBarColor, useTextColor } from "@/theme/theme";
import { Button } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function ToggleLocaleButton() {
	const locale = useLocale() as Locale;
	const router = useRouter();

	function handleLocaleChange(newLocale: Locale): void {
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
		router.refresh();
	}

	return (
		<Button
			onClick={() => handleLocaleChange(locale === "en" ? "hu" : "en")}
			rounded={"full"}
			variant="ghost"
			ml={20}
			color={useTextColor()}
			cursor={"pointer"}
			_hover={{ bg: useNavBarColor() }}
		>
			{locale === "en" ? "EN" : "HU"}
		</Button>
	);
}
