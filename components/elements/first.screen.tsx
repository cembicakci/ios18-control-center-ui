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

					<View style={styles.flexEvenly}>
						<IconContainer
							icon={<AirplaneIcon />}
						/>

						<IconContainer
							icon={<AirdropIcon />}
						/>
					</View>

					<View
						style={[styles.flexEvenly, { marginTop: 8 }]}
					>
						<IconContainer
							icon={<WifiIcon />}
							color="#3478f6"
						/>

						<View>
							<View style={[styles.flexEvenly, { gap: 3 }]}>
								<IconContainer
									icon={<CellularBars />}
									size="small"
								/>

								<IconContainer
									icon={<BluetoothIcon />}
									size="small"
									color="#3478f6"
								/>
							</View>

							<View style={[styles.flexEvenly, { gap: 3, marginTop: 3 }]}>
								<IconContainer
									icon={<PersonalHotspotIcon />}
									size="small"
								/>

								<IconContainer
									icon={<NetworkIcon />}
									size="small"
								/>
							</View>
						</View>

					</View>

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
	},
	flexEvenly: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	}
});
