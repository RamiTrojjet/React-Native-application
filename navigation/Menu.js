import React from "react";
import {
	TouchableWithoutFeedback,
	ScrollView,
	StyleSheet,
	Image,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeArea, useSafeAreaInsets } from "react-native-safe-area-context";

import { Icon, Drawer as DrawerCustomItem } from "../components/";
import { Images, materialTheme } from "../constants/";

function CustomDrawerContent({
	drawerPosition,
	navigation,
	profile,
	focused,
	state,
	...rest
}) {
	const insets = useSafeAreaInsets();
	const screens = [
		"Accueil",
		"Collection",
		"Devises",
		"Reclamations",
		"Options",
		"Profile",
		"Components",
		"Product",
	];
	return (
		<Block
			hidden
			style={styles.container}
			forceInset={{ top: "always", horizontal: "never" }}
		>
			<Block flex={0.15} style={styles.header}>
				<TouchableWithoutFeedback
					onPress={() => navigation.navigate("Profile")}
				>
					<Block style={styles.profile}>
						<Image source={{ uri: profile.avatar }} style={styles.avatar} />
						<Text h5 color={"white"}>
							{profile.name}
						</Text>
					</Block>
				</TouchableWithoutFeedback>
			</Block>
			<Block flex style={{ paddingLeft: 7, paddingRight: 14 }}>
				<ScrollView
					contentContainerStyle={[
						{
							paddingTop: insets.top * 0.4,
							paddingLeft: drawerPosition === "left" ? insets.left : 0,
							paddingRight: drawerPosition === "right" ? insets.right : 0,
						},
					]}
					showsVerticalScrollIndicator={false}
				>
					{screens.map((item, index) => {
						return (
							<DrawerCustomItem
								title={item}
								key={index}
								navigation={navigation}
								focused={state.index === index ? true : false}
							/>
						);
					})}
				</ScrollView>
			</Block>
			<Block flex={0.15} style={{ paddingLeft: 7, paddingRight: 14 }}>
				<DrawerCustomItem
					title="Login"
					navigation={navigation}
					focused={state.index === 8 ? true : false}
				/>
			</Block>
		</Block>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		backgroundColor: "#ff5b5c",
		paddingHorizontal: 28,
		paddingBottom: theme.SIZES.BASE,
		paddingTop: theme.SIZES.BASE * 2,
		justifyContent: "center",
	},
	footer: {
		paddingHorizontal: 28,
		justifyContent: "flex-end",
	},
	profile: {
		marginBottom: theme.SIZES.BASE / 2,
	},
	avatar: {
		height: 40,
		width: 40,
		borderRadius: 20,
		marginBottom: theme.SIZES.BASE,
	},
});

export default CustomDrawerContent;
