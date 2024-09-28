import { useRef, useState } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import Animated, { runOnJS, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

import { _itemFullSize, _itemSize, _spacing, height } from "@/constants/constants";
import { HeartFillSmallIcon, HomekitSmallIcon, WifiSmallIcon, MusicSmallIcon } from "@/assets/icons";
import { FirstScreen, ForthScreen, SecondScreen, ThirdScreen } from "./elements";

const ControlCenter = () => {

	const scrollY = useSharedValue(0)
	const scrollViewRef = useRef<Animated.ScrollView | null>(null);

	const [selectedIndex, setSelectedIndex] = useState(0)

	const onScroll = useAnimatedScrollHandler({
		onScroll: (e) => {
			scrollY.value = e.contentOffset.y / _itemFullSize;
		},
		onMomentumEnd: (e) => {
			const index = Math.round(e.contentOffset.y / height);
			runOnJS(setSelectedIndex)(index);
		},
	});

	const scrollToScreen = (screenIndex: number) => {
		setSelectedIndex(screenIndex)
		if (scrollViewRef.current) {
			scrollViewRef.current.scrollTo({
				y: screenIndex * height,
				animated: true,
			});
		}
	};

	return (
		<>
			<ImageBackground
				style={{
					flex: 1,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center'
				}}
				source={require('@/assets/images/wallpaper.jpg')}
				blurRadius={20}
			>
				<Animated.ScrollView
					ref={scrollViewRef}
					onScroll={onScroll}
					scrollEventThrottle={1000 / 60} // 16 fps
					snapToInterval={height}
					decelerationRate={"fast"}
					contentContainerStyle={{ marginLeft: 40 }}
					showsVerticalScrollIndicator={false}
				>

					<FirstScreen />
					<SecondScreen />
					<ThirdScreen />
					<ForthScreen />

				</Animated.ScrollView>

				<View
					style={{
						gap: 40,
						paddingHorizontal: 12
					}}
				>
					<TouchableOpacity onPress={() => scrollToScreen(0)}>
						<HeartFillSmallIcon color={selectedIndex === 0 ? "#FFFFFF" : "#00000080"} />
					</TouchableOpacity>

					<TouchableOpacity onPress={() => scrollToScreen(1)}>
						<MusicSmallIcon color={selectedIndex === 1 ? "#FFFFFF" : "#00000080"} />
					</TouchableOpacity>

					<TouchableOpacity onPress={() => scrollToScreen(2)}>
						<HomekitSmallIcon color={selectedIndex === 2 ? "#FFFFFF" : "#00000080"} />
					</TouchableOpacity>

					<TouchableOpacity onPress={() => scrollToScreen(3)}>
						<WifiSmallIcon color={selectedIndex === 3 ? "#FFFFFF" : "#00000080"} />
					</TouchableOpacity>

				</View>
			</ImageBackground>
		</>
	);
};

export default ControlCenter;

