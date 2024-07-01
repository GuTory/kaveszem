import { useBgColor, useNavBarColor } from "@/theme/theme";
import { Box, Divider, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
	const t = useTranslations();

	return (
		<Box
			as="footer"
			className="flex"
			w={"100%"}
			backgroundColor={useNavBarColor()}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Box
				className="flex"
				w={"100%"}
				maxW={"6xl"}
				m={0}
				p={0}
				flexDirection={"column"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Text py={4}>{t("Footer.Description")} </Text>
				<Divider orientation="horizontal" />
				<Box className="flex flex-row py-4">
					<Text>{t("Footer.WebsiteBy")} </Text>
					<Box
						as="a"
						mx={2}
						px={2}
						className="flex cursor-pointer"
						flexDir={"row"}
						justifyContent={"center"}
						alignItems={"center"}
						background={useBgColor()}
						_hover={{ bg: useNavBarColor() }}
						rounded={"full"}
						href="https://github.com/GuTory"
					>
						<Text>Gutory</Text>
						<Box pl={4}>
							<FaGithub />
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
