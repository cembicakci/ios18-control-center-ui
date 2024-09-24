import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { _borderRadiusCard, height } from "@/constants/constants";
import { defaultStyles } from "@/constants/default.styles";
import { AirdropIcon, AirdropIcon2, AirplaneIcon, ArrowTriangleForwardFillIcon, BackwardIcon, BluetoothIcon, CellularBars, ForwardFillIcon, HomekitIcon, LockOpenRotationIcon, MoonFillIcon, NetworkIcon, PersonalHotspotIcon, QRCodeViewFinderIcon, RectangleOnIcon, SmallCircleFilledCircleIcon, SpeakerWave1FillIcon, SunMaxFillIcon, SunMaxIcon, WifiIcon } from "@/assets/icons";

import IconContainer from "../icon.container";

const FirstScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>

				<View style={styles.section1}>
					<View style={defaultStyles.card}>
						<View style={defaultStyles.flexEvenly}>
							<IconContainer
								icon={<AirplaneIcon />}
							/>
							<IconContainer
								icon={<AirdropIcon />}
							/>
						</View>

						<View style={defaultStyles.flexEvenly}>
							<IconContainer
								icon={<WifiIcon />}
								color="#3478f6"
							/>
							<View style={{ gap: 2 }}>
								<View style={[defaultStyles.flexEvenly, { gap: 2 }]}>
									<IconContainer
										icon={<CellularBars />}
										size="small"
									/>

									<IconContainer
										icon={<BluetoothIcon />}
										color="#3478f6"
										size="small"
									/>
								</View>

								<View style={[defaultStyles.flexEvenly, { gap: 2 }]}>
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
					</View>

					<View style={defaultStyles.flexBetween}>
						<TouchableOpacity style={defaultStyles.iconContainer}>
							<LockOpenRotationIcon />
						</TouchableOpacity>
						<TouchableOpacity style={defaultStyles.iconContainer}>
							<RectangleOnIcon />
						</TouchableOpacity>
					</View>

					<TouchableOpacity style={styles.focus}>
						<View style={defaultStyles.iconContainerSmall}>
							<MoonFillIcon />
						</View>
						<Text style={defaultStyles.textMain}>Odak</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.home}>
						<HomekitIcon />
						<Text style={defaultStyles.textMain}>Ev'i Ayarlama Yok</Text>
					</TouchableOpacity>

					<View style={defaultStyles.flexBetween}>
						<TouchableOpacity style={defaultStyles.iconContainer}>
							<SmallCircleFilledCircleIcon />
						</TouchableOpacity>

						<TouchableOpacity style={defaultStyles.iconContainer}>
							<QRCodeViewFinderIcon />
						</TouchableOpacity>
					</View>

				</View>
				{/*  */}
				<View style={styles.section2}>
					<View style={styles.player}>

						<View style={defaultStyles.flexBetween}>
							<Image
								source={require("@/assets/images/music-cover.jpg")}
								style={styles.image}
							/>
							<View style={defaultStyles.iconContainerSmall2}>
								<AirdropIcon2 />
							</View>
						</View>

						<View style={{ marginVertical: 4 }}>
							<Text style={defaultStyles.textMain}>Sevecek Sandım</Text>
							<Text style={defaultStyles.textDisabled}>Semicenk</Text>
						</View>

						<View style={defaultStyles.flexBetween}>
							<TouchableOpacity>
								<BackwardIcon />
							</TouchableOpacity>
							<TouchableOpacity>
								<ArrowTriangleForwardFillIcon />
							</TouchableOpacity>
							<TouchableOpacity>
								<ForwardFillIcon />
							</TouchableOpacity>
						</View>
					</View>

					<View style={[defaultStyles.flex, { gap: 12 }]}>
						<TouchableOpacity style={styles.bar}>
							<View style={[styles.barItem, styles.barItemBig]}>
								<SunMaxFillIcon />
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.bar}>
							<View style={[styles.barItem, styles.barItemSmall]}>
								<SpeakerWave1FillIcon />
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default FirstScreen;

const styles = StyleSheet.create({
	container: {
		height: height,
		justifyContent: 'center',
		marginHorizontal: 30
	},
	content: {
		borderWidth: 1,
		borderColor: "white",
		height: height * 0.70,
		flexDirection: 'row',
		gap: 12

	},
	section1: {
		flex: 1,
		gap: 18
	},
	section2: {
		flex: 1,
		gap: 18
	},
	focus: {
		...defaultStyles.card,
		...defaultStyles.flex,
		padding: 16
	},
	home: {
		...defaultStyles.card,
		alignItems: 'center',
		justifyContent: 'center',
		height: 140
	},
	player: {
		...defaultStyles.card,
		paddingHorizontal: 14,
		paddingVertical: 14
	},
	image: {
		width: 48,
		height: 48,
		objectFit: "contain",
		borderRadius: 14
	},
	bar: {
		...defaultStyles.card,
		flex: 1,
		height: 166,
		paddingVertical: 16,
		justifyContent: 'flex-end',
	},
	barItem: {
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: 'flex-end',
		borderBottomLeftRadius: _borderRadiusCard,
		borderBottomRightRadius: _borderRadiusCard,
		bottom: -15,
		paddingBottom: 20
	},
	barItemBig: {
		height: "90%",
	},
	barItemSmall: {
		height: "35%",
	}
});
