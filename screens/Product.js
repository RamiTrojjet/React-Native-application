import React, { useState } from "react";
import {
	StyleSheet,
	Dimensions,
	ScrollView,
	ImageBackground,
	Platform,
	Alert,
	View,
} from "react-native";
import { Block, Text, theme, Button } from "galio-framework";
import { LinearGradient } from "expo-linear-gradient";

import { Icon } from "../components";
import { Images, materialTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { Picker } from "@react-native-picker/picker";
import NumericInput from "react-native-numeric-input";
const { width, height } = Dimensions.get("screen");

const ProductName = "T-shirt one piece luffy";

export default class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedSize: "S",
			numberOfProducts: 1,
		};
	}

	render() {
		return (
			<Block style={{ flex: 1 }}>
				<Block flex style={styles.profile}>
					<Block flex>
						<ImageBackground
							resizeMode="cover"
							source={{ uri: Images.ProductImage }}
							style={styles.profileContainer}
							imageStyle={styles.profileImage}
						>
							<Block flex style={styles.profileDetails}>
								<Block style={styles.profileTexts}>
									<Text color="white" size={28} style={{ paddingBottom: 8 }}>
										{ProductName}
									</Text>
									<Block row space="between">
										<Block row>
											<Text color="white" size={16} muted style={styles.seller}>
												Prix
											</Text>
											<Text size={16} color={materialTheme.COLORS.PRIMARY}>
												35.00 <Text size={14}>TND</Text>
											</Text>
										</Block>
									</Block>
								</Block>
								<LinearGradient
									colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
									style={styles.gradient}
								/>
							</Block>
						</ImageBackground>
					</Block>

					<Block flex style={styles.options}>
						<ScrollView showsVerticalScrollIndicator={false}>
							<Block>
								<Picker
									selectedValue={this.state.selectedSize}
									onValueChange={(itemValue, itemIndex) =>
										this._setSelectedSize(itemValue)
									}
								>
									<Picker.Item label="Taille: S" value="S" />
									<Picker.Item label="Taille: M" value="M" />
									<Picker.Item label="Taille: L" value="L" />
									<Picker.Item label="Taille: XL" value="XL" />
									<Picker.Item label="Taille: 2XL" value="2XL" />
									<Picker.Item label="Taille: 3XL" value="3XL" />
								</Picker>
							</Block>
							<Block row space="between" style={{ padding: -theme.SIZES.BASE }}>
								<Block flex middle row>
									<NumericInput
										value={this.state.numberOfProducts}
										step={1}
										minValue={1}
										onChange={(value) =>
											this.setState({ numberOfProducts: value })
										}
									/>
									<Button
										marginHorizontal="50"
										round
										color="black"
										onPress={() =>
											Alert.alert(
												"",
												`item size: ${this.state.selectedSize}
number of products: ${this.state.numberOfProducts} to add to cart`
											)
										}
									>
										Ajouter au panier
									</Button>
								</Block>
							</Block>
							<Block
								row
								space="between"
								style={{ paddingVertical: 16, alignItems: "baseline" }}
							>
								<Text size={16}>Description</Text>
							</Block>
							<Block style={{ paddingBottom: -HeaderHeight * 2 }}>
								<Block row space="between" style={{ flexWrap: "wrap" }}>
									<Text>
										Ce T-shirt court personnalisable est idéal pour les vacances
										de printemps, les fêtes d’été ou simplement pour avoir l’air
										mignon et branché.{"\n"}
										Crop Top bien coupé imprimé en Tunisie.{"\n"}
										Col rond et manches courtes disponible en Noir.{"\n"}
										Très agréable à porter, ce produit taille légèrement cintré.
										{"\n"}
									</Text>
								</Block>
							</Block>
						</ScrollView>
					</Block>
				</Block>
			</Block>
		);
	}
	_setSelectedSize(value) {
		this.setState({
			selectedSize: value,
		});
	}
	_resetSelectedSize() {
		this.setState({
			selectedSize: "S",
		});
	}
}

const styles = StyleSheet.create({
	profile: {
		marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
		marginBottom: -HeaderHeight * 2,
	},
	profileImage: {
		width: width * 0.95,
		height: height * 0.6,
	},
	profileContainer: {
		width: width,
		height: height / 2,
	},
	profileDetails: {
		paddingTop: theme.SIZES.BASE * 4,
		justifyContent: "flex-end",
		position: "relative",
	},
	profileTexts: {
		paddingHorizontal: theme.SIZES.BASE * 2,
		paddingVertical: theme.SIZES.BASE * 2,
		zIndex: 2,
	},
	pro: {
		backgroundColor: materialTheme.COLORS.LABEL,
		paddingHorizontal: 6,
		marginRight: theme.SIZES.BASE / 2,
		borderRadius: 4,
		height: 19,
		width: 38,
	},
	seller: {
		marginRight: theme.SIZES.BASE / 2,
	},
	options: {
		position: "relative",
		padding: theme.SIZES.BASE,
		marginHorizontal: theme.SIZES.BASE,
		marginTop: -theme.SIZES.BASE * 7,
		borderTopLeftRadius: 13,
		borderTopRightRadius: 13,
		backgroundColor: theme.COLORS.WHITE,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 8,
		shadowOpacity: 0.2,
		zIndex: 3,
	},
	gradient: {
		zIndex: 1,
		left: 0,
		right: 0,
		bottom: 0,
		height: "30%",
		position: "absolute",
	},
});
