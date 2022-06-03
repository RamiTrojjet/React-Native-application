import React from "react";
import {
	StyleSheet,
	Dimensions,
	ScrollView,
	ImageBackground,
	Alert,
	TouchableOpacity,
	View,
} from "react-native";
import { Button, Block, Text, Input, theme } from "galio-framework";

const { width } = Dimensions.get("screen");

import { Images } from "../constants/";
import Dialog, {
	DialogFooter,
	DialogButton,
	DialogContent,
} from "react-native-popup-dialog";

export default class Categories extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clothesDialogueVisibility: false,
			numberOfProducts: 1,
		};
	}

	renderProducts = () => {
		return (
			<Block>
				<Dialog
					style="margin = 50"
					visible={this.state.clothesDialogueVisibility}
					onTouchOutside={() => {
						this.setState({ clothesDialogueVisibility: false });
					}}
					footer={
						<DialogFooter>
							<DialogButton
								text=""
								textStyle="size:2px"
								align="center"
								onPress={() => {
									this.setState({ clothesDialogueVisibility: false });
								}}
							/>
						</DialogFooter>
					}
				>
					<DialogContent align="center">
						<Button round color="black" onPress={() => {}}>
							T-shirts
						</Button>
						<Button round color="black" onPress={() => {}}>
							Tops
						</Button>
						<Button round color="black" onPress={() => {}}>
							Polos
						</Button>
						<Button round color="black" onPress={() => {}}>
							Capuches
						</Button>
						<Button round color="black" onPress={() => {}}>
							Capuches Zippées
						</Button>
						<Button round color="black" onPress={() => {}}>
							Sweatshirts
						</Button>
					</DialogContent>
				</Dialog>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.products}
				>
					<Block flex style={styles.group}>
						<TouchableOpacity
							flex
							card
							shadow
							style={styles.category}
							onPress={() => {
								this.setState({ clothesDialogueVisibility: true });
							}}
						>
							<ImageBackground
								source={{ uri: Images.Products["clothes"] }}
								style={[
									styles.imageBlock,
									{ width: width - theme.SIZES.BASE * 2, height: 200 },
								]}
								imageStyle={{
									width: width - theme.SIZES.BASE * 2,
									height: 200,
								}}
							>
								<Block style={styles.categoryTitle}>
									<Text size={18} bold color={theme.COLORS.WHITE}>
										Vêtements
									</Text>
								</Block>
							</ImageBackground>
						</TouchableOpacity>
						<Block flex card shadow style={styles.category}>
							<ImageBackground
								source={{ uri: Images.Products["Accessories"] }}
								style={[
									styles.imageBlock,
									{ width: width - theme.SIZES.BASE * 2, height: 200 },
								]}
								imageStyle={{
									width: width - theme.SIZES.BASE * 2,
									height: 200,
								}}
							>
								<Block style={styles.categoryTitle}>
									<Text size={18} bold color={theme.COLORS.WHITE}>
										Accessoires
									</Text>
								</Block>
							</ImageBackground>
						</Block>
					</Block>
				</ScrollView>
			</Block>
		);
	};

	onCategorychosen(value) {
		const { navigation } = this.props;
		navigation.navigate("Product", value);
	}

	render() {
		return <Block>{this.renderProducts()}</Block>;
	}
}

const styles = StyleSheet.create({
	home: {
		width: width,
	},
	divider: {
		borderRightWidth: 0.3,
		borderRightColor: theme.COLORS.MUTED,
	},
	group: {
		paddingTop: theme.SIZES.BASE * 3.75,
	},
	category: {
		backgroundColor: theme.COLORS.WHITE,
		marginVertical: theme.SIZES.BASE / 2,
		marginHorizontal: theme.SIZES.BASE / 2,
		borderWidth: 0.5,
		borderColor: "black",
	},
	categoryTitle: {
		height: "100%",
		paddingHorizontal: theme.SIZES.BASE,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
});
