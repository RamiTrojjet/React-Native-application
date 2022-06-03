import React from "react";
import {
	Alert,
	Dimensions,
	KeyboardAvoidingView,
	StyleSheet,
	Platform,
} from "react-native";

// galio component
import { Block, Button, Input, NavBar, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("window");

class Login extends React.Component {
	state = {
		email: "-",
		password: "-",
	};

	handleChange = (name, value) => {
		this.setState({ [name]: value });
	};

	render() {
		const { navigation } = this.props;
		const { email, password } = this.state;

		return (
			<Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
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
					<Block
						flex
						center
						style={{
							marginTop: theme.SIZES.BASE * 1.875,
							marginBottom: height * 0.1,
						}}
					>
						<Text
							muted
							center
							size={theme.SIZES.FONT * 0.875}
							style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}
						>
							Se connecter avec
						</Text>
						<Block
							row
							center
							space="between"
							style={{ marginVertical: theme.SIZES.BASE * 1.875 }}
						>
							<Block flex middle right>
								<Button
									round
									onlyIcon
									iconSize={theme.SIZES.BASE * 1.625}
									icon="facebook"
									iconFamily="font-awesome"
									color={theme.COLORS.FACEBOOK}
									shadowColor={theme.COLORS.FACEBOOK}
									iconColor={theme.COLORS.WHITE}
									style={styles.social}
									onPress={() => Alert.alert("Not implemented")}
								/>
							</Block>

							<Block flex middle left>
								<Button
									round
									onlyIcon
									iconSize={theme.SIZES.BASE * 1.625}
									icon="google"
									iconFamily="font-awesome"
									color={"#db3236"}
									shadowColor={theme.COLORS.DRIBBBLE}
									iconColor={theme.COLORS.WHITE}
									style={styles.social}
									onPress={() => Alert.alert("Not implemented")}
								/>
							</Block>
						</Block>
						<Text muted center size={theme.SIZES.FONT * 0.875}>
							ou
						</Text>
					</Block>

					<Block flex={4} center space="evenly">
						<Block flex={2}>
							<Text
								color={theme.COLORS.BASE}
								size={theme.SIZES.FONT}
								style={{
									alignSelf: "center",
									lineHeight: theme.SIZES.FONT * 2,
								}}
							>
								Adresse e-mail
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
								Mot de passe
							</Text>
							<Input
								rounded
								password
								viewPass
								placeholder="Password"
								style={{ width: width * 0.9 }}
								onChangeText={(text) => this.handleChange("password", text)}
							/>
							<Text
								color={theme.COLORS.ERROR}
								size={theme.SIZES.FONT * 0.75}
								onPress={() => Alert.alert("Not implemented")}
								style={{
									alignSelf: "flex-end",
									lineHeight: theme.SIZES.FONT * 2,
								}}
							>
								Mot de passe oublié?
							</Text>
						</Block>
						<Block flex middle>
							<Button
								round
								color="black"
								onPress={() =>
									Alert.alert(
										"Sign in action",
										`Email: ${email}
Password: ${password}`
									)
								}
							>
								Se connecter
							</Button>
							<Button
								color="transparent"
								shadowless
								onPress={() => navigation.navigate("")}
							>
								<Text
									center
									color={theme.COLORS.ERROR}
									size={theme.SIZES.FONT * 0.75}
								>
									{"Pas de compte? S'enregistrer ici"}
								</Text>
							</Button>
						</Block>
					</Block>
				</KeyboardAvoidingView>
			</Block>
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

export default Login;
