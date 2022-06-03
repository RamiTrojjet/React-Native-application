import React from "react";
import { Easing, Animated, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Block, Text, theme } from "galio-framework";

import ComponentsScreen from "../screens/Components";
import HomeScreen from "../screens/Home";
import OnboardingScreen from "../screens/Onboarding";
import CollectionScreen from "../screens/Collection";
import CategoriesScreen from "../screens/Categories";
import SettingsScreen from "../screens/Settings";
import ProfileScreen from "../screens/Profile";
import LoginScreen from "../screens/Login";
import ProductScreen from "../screens/Product";
import CartScreen from "../screens/Cart";
import QuotationScreen from "../screens/Quotation";
import ComplaintsScreen from "../screens/Complaints";
import CustomDrawerContent from "./Menu";
import { Icon, Header } from "../components";
import { Images, materialTheme } from "../constants/";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
	avatar: Images.Avatar,
	name: "Rami Trojjet",
};

function ProfileStack(props) {
	return (
		<Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
			<Stack.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							white
							transparent
							title="Profile"
							scene={scene}
							navigation={navigation}
						/>
					),
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}
function LoginStack(props) {
	return (
		<Stack.Navigator initialRouteName="Login" mode="card" headerMode="screen">
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							transparent
							title="Login"
							scene={scene}
							navigation={navigation}
						/>
					),
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}
function QuotationStack(props) {
	return (
		<Stack.Navigator
			initialRouteName="Quotation"
			mode="card"
			headerMode="screen"
		>
			<Stack.Screen
				name="Quotation"
				component={QuotationScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							transparent
							title="Quotation"
							scene={scene}
							navigation={navigation}
						/>
					),
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}
function ComplaintsStack(props) {
	return (
		<Stack.Navigator
			initialRouteName="Complaints"
			mode="card"
			headerMode="screen"
		>
			<Stack.Screen
				name="Complaints"
				component={ComplaintsScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							transparent
							title="Reclamation"
							scene={scene}
							navigation={navigation}
						/>
					),
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}

function ComponentsStack(props) {
	return (
		<Stack.Navigator mode="card" headerMode="screen">
			<Stack.Screen
				name="Components"
				component={ComponentsScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header title="Components" scene={scene} navigation={navigation} />
					),
				}}
			/>
		</Stack.Navigator>
	);
}
function SettingsStack(props) {
	return (
		<Stack.Navigator initialRouteName="Options" mode="card" headerMode="screen">
			<Stack.Screen
				name="Options"
				component={SettingsScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header title="Options" scene={scene} navigation={navigation} />
					),
				}}
			/>
		</Stack.Navigator>
	);
}

function CartStack(props) {
	return (
		<Stack.Navigator initialRouteName="Cart" mode="card" headerMode="screen">
			<Stack.Screen
				name="Options"
				component={CartScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header title="Cart" scene={scene} navigation={navigation} />
					),
				}}
			/>
		</Stack.Navigator>
	);
}

function HomeStack(props) {
	return (
		<Stack.Navigator mode="card" headerMode="screen">
			<Stack.Screen
				name="Accueil"
				component={HomeScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							search
							title="Accueil"
							navigation={navigation}
							scene={scene}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}
function CollectionStack(props) {
	return (
		<Stack.Navigator mode="card" headerMode="screen">
			<Stack.Screen
				name="Collection"
				component={CollectionScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							search
							tabs
							title="Collection"
							navigation={navigation}
							scene={scene}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}
function ProductStack(props) {
	return (
		<Stack.Navigator mode="card" headerMode="screen">
			<Stack.Screen
				name="Product"
				component={ProductScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							back
							title="Product"
							navigation={navigation}
							scene={scene}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}
function CategoriesStack(props) {
	return (
		<Stack.Navigator mode="card" headerMode="screen">
			<Stack.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							back
							title="Categories"
							navigation={navigation}
							scene={scene}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}

function AppStack(props) {
	return (
		<Drawer.Navigator
			style={{ flex: 1 }}
			drawerContent={(props) => (
				<CustomDrawerContent {...props} profile={profile} />
			)}
			drawerStyle={{
				backgroundColor: "white",
				width: width * 0.8,
			}}
			drawerContentOptions={{
				activeTintColor: "white",
				inactiveTintColor: "#000",
				activeBackgroundColor: materialTheme.COLORS.ACTIVE,
				inactiveBackgroundColor: "transparent",
				itemStyle: {
					width: width * 0.74,
					paddingHorizontal: 12,
					// paddingVertical: 4,
					justifyContent: "center",
					alignContent: "center",
					// alignItems: 'center',
					overflow: "hidden",
				},
				labelStyle: {
					fontSize: 18,
					fontWeight: "normal",
				},
			}}
			initialRouteName="Home"
		>
			<Drawer.Screen
				name="Home"
				component={HomeStack}
				options={{
					drawerIcon: ({ focused }) => (
						<Icon
							size={16}
							name="shop"
							family="GalioExtra"
							color={focused ? "white" : materialTheme.COLORS.MUTED}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Collection"
				component={CollectionStack}
				options={{
					drawerIcon: ({ focused }) => (
						<Icon
							size={16}
							name="shop"
							family="GalioExtra"
							color={focused ? "white" : materialTheme.COLORS.MUTED}
						/>
					),
				}}
			/>

			<Drawer.Screen
				name="Options"
				component={SettingsStack}
				options={{
					drawerIcon: ({ focused }) => (
						<Icon
							size={16}
							name="gears"
							family="font-awesome"
							color={focused ? "white" : materialTheme.COLORS.MUTED}
							style={{ marginRight: -3 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Profile"
				component={ProfileStack}
				options={{
					drawerIcon: ({ focused }) => (
						<Icon
							size={16}
							name="circle-10"
							family="GalioExtra"
							color={focused ? "white" : materialTheme.COLORS.MUTED}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Components"
				component={ComponentsStack}
				options={{
					drawerIcon: ({ focused }) => (
						<Icon
							size={16}
							name="gears"
							family="font-awesome"
							color={focused ? "white" : materialTheme.COLORS.MUTED}
							style={{ marginRight: 2, marginLeft: 2 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Devises"
				component={QuotationStack}
				options={{
					drawerIcon: ({ focused }) => (
						<Icon
							size={16}
							name="gears"
							family="font-awesome"
							color={focused ? "white" : materialTheme.COLORS.MUTED}
							style={{ marginRight: 2, marginLeft: 2 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Reclamations"
				component={ComplaintsStack}
				options={{
					drawerIcon: ({ focused }) => (
						<Icon
							size={16}
							name="gears"
							family="font-awesome"
							color={focused ? "white" : materialTheme.COLORS.MUTED}
							style={{ marginRight: 2, marginLeft: 2 }}
						/>
					),
				}}
			/>
			<Drawer.Screen name="Categories" component={CategoriesStack} />
			<Drawer.Screen name="Product" component={CartStack} />
			<Drawer.Screen name="Login" component={LoginStack} options={{}} />
		</Drawer.Navigator>
	);
}

export default function OnboardingStack(props) {
	return (
		<Stack.Navigator mode="card" headerMode="none">
			<Stack.Screen
				name="Onboarding"
				component={OnboardingScreen}
				option={{
					headerTransparent: true,
				}}
			/>
			<Stack.Screen name="App" component={AppStack} />
		</Stack.Navigator>
	);
}
