import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { _borderRadius, _borderRadiusCard, height } from "@/constants/constants";
import { defaultStyles } from "@/constants/default.styles";
import { ArrowTriangleForwardFillIcon, BackwardIcon, EllipsisIcon, ForwardFillIcon, SpeakerFillIcon, SpeakerWave3FillIcon } from "@/assets/icons";

const SecondScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image
					source={require('@/assets/images/music-cover.jpg')}
					style={styles.image}
				/>

				<View style={defaultStyles.flexBetween}>
					<View>
						<Text style={defaultStyles.textMain}>Sevecek Sandım</Text>
						<Text style={defaultStyles.textDisabled}>Semicenk</Text>
					</View>

					<TouchableOpacity>
						<EllipsisIcon />
					</TouchableOpacity>
				</View>

				<View>
					<View style={styles.bar}>
						<View style={styles.barItem} />
					</View>

					<View style={defaultStyles.flexBetween}>
						<Text style={styles.barTime}>1:07</Text>
						<Text style={styles.barTime}>-3:30</Text>
					</View>
				</View>

				<View style={styles.player}>
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

				<View style={defaultStyles.flexBetween}>
					<TouchableOpacity>
						<SpeakerFillIcon />
					</TouchableOpacity>

					<View style={[styles.bar, { width: "80%" }]}>
						<View style={styles.barItem} />
					</View>

					<TouchableOpacity>
						<SpeakerWave3FillIcon />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default SecondScreen;

const styles = StyleSheet.create({
	container: {
		height: height,
		justifyContent: 'center',
		marginHorizontal: 30,
	},
	content: {
		...defaultStyles.card,
		justifyContent: "center",
		padding: 24,
	},
	image: {
		width: "100%",
		height: 280,
		objectFit: "cover",
		borderRadius: _borderRadius,
		marginVertical: 8
	},
	player: {
		...defaultStyles.flexEvenly,
		marginVertical: 12
	},
	bar: {
		height: 6,
		backgroundColor: "#757474",
		borderRadius: 3
	},
	barItem: {
		borderRadius: 3,
		height: 6,
		width: "30%",
		backgroundColor: "#f1f2f3",
	},
	barTime: {
		color: "#f1f2f3",
		fontSize: 12,
		fontWeight: "600",
		marginTop: 4
	}
});
