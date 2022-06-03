import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Button, Block, Text, Input, theme } from "galio-framework";

import { Icon, ProductCart } from "../components/";

const { width } = Dimensions.get("screen");
import products from "../constants/products";

export default class Cart extends React.Component {
	renderProducts = () => {
		return (
			<ScrollView
				showsVerticalScrollIndicator={true}
				contentContainerStyle={styles.products}
			>
				<Block flex>
					<ProductCart product={products[0]} horizontal />
					<ProductCart product={products[1]} horizontal />
				</Block>
			</ScrollView>
		);
	};

	render() {
		const { navigation } = this.props;
		return (
			<Block flex center style={styles.home}>
				<Button color="primary" shadowless>
					passer commande
				</Button>
				<Text> Total : 105 TND</Text>
				{this.renderProducts()}
			</Block>
		);
	}
}

const styles = StyleSheet.create({
	home: {
		width: width,
	},
	search: {
		height: 48,
		width: width - 32,
		marginHorizontal: 16,
		borderWidth: 1,
		borderRadius: 3,
	},
	header: {
		backgroundColor: theme.COLORS.WHITE,
		shadowColor: theme.COLORS.BLACK,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 8,
		shadowOpacity: 0.2,
		elevation: 4,
		zIndex: 2,
	},
	tabs: {
		marginBottom: 24,
		marginTop: 10,
		elevation: 4,
	},
	tab: {
		backgroundColor: theme.COLORS.TRANSPARENT,
		width: width * 0.5,
		borderRadius: 0,
		borderWidth: 0,
		height: 24,
		elevation: 0,
	},
	tabTitle: {
		lineHeight: 19,
		fontWeight: "300",
	},
	divider: {
		borderRightWidth: 0.3,
		borderRightColor: theme.COLORS.MUTED,
	},
	products: {
		width: width - theme.SIZES.BASE * 2,
		paddingVertical: theme.SIZES.BASE * 2,
	},
});
