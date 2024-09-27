import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { height } from "@/constants/constants";
import { ForthScreenList } from "@/constants/forth.screen.list";
import { defaultStyles } from "@/constants/default.styles";

const ForthScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<FlatList
					scrollEnabled={false}
					data={ForthScreenList}
					contentContainerStyle={styles.list}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity style={styles.item}>
								<View style={styles.icon}>{item.icon}</View>
								<View>
									<Text style={styles.title}>{item.title}</Text>
									<Text style={styles.text}>{item.text}</Text>
								</View>
							</TouchableOpacity>
						)
					}}
				/>

			</View>
		</View>
	);
};

export default ForthScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height,
		justifyContent: 'center'
	},
	content: {
		height: "80%",
		justifyContent: "center",
		marginHorizontal: 30
	},
	list: {
		gap: 16
	},
	item: {
		...defaultStyles.card,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 14
	},
	icon: {
		backgroundColor: '#FFFFFF40',
		width: 44,
		height: 44,
		borderRadius: 22,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: '#FFF',
		fontSize: 12,
		fontWeight: '700'
	},
	text: {
		color: '#bdbdbd',
		fontSize: 12,
		fontWeight: '500'
	}
});
