import React from "react";
import {
	Alert,
	Dimensions,
	KeyboardAvoidingView,
	StyleSheet,
	Platform,
	ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
// galio component
import { Block, Button, Input, NavBar, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("window");

class Quotation extends React.Component {
	render() {
		const { navigation } = this.props;

		return (
			<ScrollView style={{ backgroundColor: theme.COLORS.WHITE }}>
				<NavBar
					title=""
					onLeftPress={() => navigation.openDrawer()}
					style={
						Platform.OS === "android" ? { marginTop: theme.SIZES.BASE } : null
					}
				/>
				<KeyboardAvoidingView
					style={styles.container}
					behavior="height"
					enabled
				>
					<Block flex={4} space="evenly">
						<Block flex={2}>
							<Text
								color={theme.COLORS.BASE}
								size={theme.SIZES.FONT}
								style={{
									alignSelf: "center",
									lineHeight: theme.SIZES.FONT * 2,
								}}
							>
								Nom et Prénom *
							</Text>
							<Input
								rounded
								type="email-address"
								placeholder="Email"
								autoCapitalize="none"
								style={{ width: width * 0.9 }}
								onChangeText={(text) => this.handleChange("email", text)}
							/>
							<Text
								color={theme.COLORS.BASE}
								size={theme.SIZES.FONT}
								style={{
									alignSelf: "center",
									lineHeight: theme.SIZES.FONT * 2,
								}}
							>
								Nom de l'entreprise
							</Text>
							<Input
								rounded
								type="email-address"
								placeholder="Email"
								autoCapitalize="none"
								style={{ width: width * 0.9 }}
								onChangeText={(text) => this.handleChange("email", text)}
							/>
							<Text
								color={theme.COLORS.BASE}
								size={theme.SIZES.FONT}
								style={{
									alignSelf: "center",
									lineHeight: theme.SIZES.FONT * 2,
								}}
							>
								Adresse email *
							</Text>
							<Input
								rounded
								type="email-address"
								placeholder="Email"
								autoCapitalize="none"
								style={{ width: width * 0.9 }}
								onChangeText={(text) => this.handleChange("email", text)}
							/>
							<Text
								color={theme.COLORS.BASE}
								size={theme.SIZES.FONT}
								style={{
									alignSelf: "center",
									lineHeight: theme.SIZES.FONT * 2,
								}}
							>
								Numéro de téléphone *
							</Text>
							<Input
								rounded
								type="phone-pad"
								placeholder="Email"
								autoCapitalize="none"
								style={{ width: width * 0.9 }}
								onChangeText={(text) => this.handleChange("email", text)}
							/>
							<Text
								color={theme.COLORS.BASE}
								size={theme.SIZES.FONT}
								style={{
									alignSelf: "center",
									lineHeight: theme.SIZES.FONT * 2,
								}}
							>
								Type de client
							</Text>
							<Block>
								<Picker>
									<Picker.Item label="Personnel" value="Personnel" />
									<Picker.Item label="Industriel" value="M" />
									<Picker.Item label="Revendeur" value="L" />
									<Picker.Item label="Produit Bac" value="XL" />
									<Picker.Item label="Autre" value="2XL" />
								</Picker>
							</Block>
							<Text
								color={theme.COLORS.BASE}
								size={theme.SIZES.FONT}
								style={{
									alignSelf: "center",
									lineHeight: theme.SIZES.FONT * 2,
								}}
							>
								Information produit
							</Text>
							<Block>
								<Picker>
									<Picker.Item label="T-shirt col V" value="Personnel" />
									<Picker.Item label="T-shirt col rond" value="M" />
									<Picker.Item label="T-shirt polo" value="L" />
									<Picker.Item label="Produit Bac" value="XL" />
									<Picker.Item label="Autre" value="2XL" />
								</Picker>
							</Block>
							<Input
								rounded
								type="decimal-pad"
								placeholder="Email"
								autoCapitalize="none"
								style={{ width: width * 0.9 }}
								onChangeText={(text) => this.handleChange("email", text)}
							/>
							<Text
								color={theme.COLORS.BASE}
								size={theme.SIZES.FONT}
								style={{
									alignSelf: "center",
									lineHeight: theme.SIZES.FONT * 2,
								}}
							>
								Type d'impression
							</Text>
							<Block>
								<Picker>
									<Picker.Item label="Flex" value="Personnel" />
									<Picker.Item label="Flex imprimable" value="M" />
									<Picker.Item label="T-shirt polo" value="L" />
									<Picker.Item label="Produit Bac" value="XL" />
									<Picker.Item label="Autre" value="2XL" />
								</Picker>
							</Block>
							<Block flex middle>
								<Button round color="black">
									Se connecter
								</Button>
							</Block>
						</Block>
					</Block>
				</KeyboardAvoidingView>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
		paddingTop: theme.SIZES.BASE * 0.3,
		paddingHorizontal: theme.SIZES.BASE,
		backgroundColor: theme.COLORS.WHITE,
	},
	social: {
		width: theme.SIZES.BASE * 3.5,
		height: theme.SIZES.BASE * 3.5,
		borderRadius: theme.SIZES.BASE * 1.75,
		justifyContent: "center",
	},
});

export default Quotation;
