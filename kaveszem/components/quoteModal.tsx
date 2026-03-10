"use client";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	FormLabel,
	Input,
	Select,
	NumberInput,
	NumberInputField,
	useDisclosure,
	VStack,
	useToast,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useNavBarColor, useTextColor } from "@/theme/theme";

interface QuoteModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
	const t = useTranslations("Quote");
	const bgColor = useNavBarColor();
	const textColor = useTextColor();
	const toast = useToast();

	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		city: "",
		company: "",
		type: "",
		consumption: "",
		coffeeBrand: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		
		try {
			const response = await fetch('/api/quote', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (data.success) {
				toast({
					title: t("SuccessTitle"),
					description: t("SuccessMessage"),
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "top",
				});
				setFormData({
					email: "",
					city: "",
					company: "",
					type: "",
					consumption: "",
					coffeeBrand: "",
				});
				onClose();
			} else {
				throw new Error("Failed to send");
			}
		} catch (error) {
			toast({
				title: t("ErrorTitle"),
				description: t("ErrorMessage"),
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "top",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
			<ModalOverlay backdropFilter="blur(10px)" />
			<ModalContent bg={bgColor} color={textColor} borderRadius="2xl" p={2}>
				<ModalHeader fontSize="2xl" fontWeight="bold">
					{t("Title")}
				</ModalHeader>
				<ModalCloseButton />
				<form onSubmit={handleSubmit}>
					<ModalBody>
						<VStack spacing={4}>
							<FormControl isRequired>
								<FormLabel>{t("Email")}</FormLabel>
								<Input
									name="email"
									type="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="pelda@email.hu"
									variant="filled"
									_focus={{ borderColor: textColor }}
								/>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>{t("Company")}</FormLabel>
								<Input
									name="company"
									value={formData.company}
									onChange={handleChange}
									placeholder="Cég Kft."
									variant="filled"
									_focus={{ borderColor: textColor }}
								/>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>{t("City")}</FormLabel>
								<Input
									name="city"
									value={formData.city}
									onChange={handleChange}
									placeholder="Budapest"
									variant="filled"
									_focus={{ borderColor: textColor }}
								/>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>{t("Type")}</FormLabel>
								<Select
									name="type"
									value={formData.type}
									onChange={handleChange}
									placeholder="Válasszon..."
									variant="filled"
									_focus={{ borderColor: textColor }}
								>
									<option value={t("TypeOptions.Tobacco")}>{t("TypeOptions.Tobacco")}</option>
									<option value={t("TypeOptions.Restaurant")}>{t("TypeOptions.Restaurant")}</option>
									<option value={t("TypeOptions.Cafe")}>{t("TypeOptions.Cafe")}</option>
									<option value={t("TypeOptions.Office")}>{t("TypeOptions.Office")}</option>
									<option value={t("TypeOptions.Other")}>{t("TypeOptions.Other")}</option>
								</Select>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>{t("Consumption")}</FormLabel>
								<NumberInput min={0}>
									<NumberInputField
										name="consumption"
										value={formData.consumption}
										onChange={handleChange}
										placeholder="pl. 50"
										variant="filled"
										_focus={{ borderColor: textColor }}
									/>
								</NumberInput>
							</FormControl>

							<FormControl>
								<FormLabel>{t("CoffeeBrand")}</FormLabel>
								<Input
									name="coffeeBrand"
									value={formData.coffeeBrand}
									onChange={handleChange}
									placeholder="pl. Lavazza, Illy..."
									variant="filled"
									_focus={{ borderColor: textColor }}
								/>
							</FormControl>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button variant="ghost" mr={3} onClick={onClose} isDisabled={isLoading}>
							{t("Close")}
						</Button>
						<Button
							type="submit"
							bg={textColor}
							color={bgColor}
							_hover={{ opacity: 0.8 }}
							px={8}
							rounded="full"
							isLoading={isLoading}
							loadingText={t("Sending")}
						>
							{t("Submit")}
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
}
