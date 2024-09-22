import { StyleSheet, View } from "react-native";
import { _borderRadiusCard, height } from "@/constants/constants";
import { AirdropIcon, AirplaneIcon, BluetoothIcon, CellularBars, NetworkIcon, PersonalHotspotIcon, WifiIcon } from "@/assets/icons";
import IconContainer from "../icon.container";
import ContentContainer from "../content.container";

const FirstScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<ContentContainer>
					<IconContainer
						icon={<AirplaneIcon />}
					/>

					<IconContainer
						icon={<AirdropIcon />}
					/>

					<IconContainer
						icon={<WifiIcon />}
					/>

					<IconContainer
						icon={<CellularBars />}
					/>

					<IconContainer
						icon={<BluetoothIcon />}
					/>

					<IconContainer
						icon={<PersonalHotspotIcon />}
					/>

					<IconContainer
						icon={<NetworkIcon />}
					/>

				</ContentContainer>
				<View style={{ flex: 1 }}>

				</View>
			</View>
		</View>
	);
};

export default FirstScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height,
		justifyContent: 'center',
		marginHorizontal: 32
	},
	content: {
		height: "70%",
		justifyContent: "center",
		flexDirection: 'row'
	}
});
