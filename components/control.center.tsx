import { ImageBackground, View } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

import { _itemFullSize, _itemSize, _spacing, height } from "@/constants/constants";
import { HeartFillIcon, HomekitIcon, MusicIcon, WifiIcon } from "@/assets/icons";

import FirstScreen from "./elements/first.screen";
import SecondScreen from "./elements/second.screen";
import ThirdScreen from "./elements/third.screen";
import ForthScreen from "./elements/forth.screen";

const ControlCenter = () => {

	const scrollY = useSharedValue(0)

	const onScroll = useAnimatedScrollHandler(e => {
		scrollY.value = e.contentOffset.y / _itemFullSize; // 0 - 1 - 2 - 3 - ...
	})

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
					onScroll={onScroll}
					scrollEventThrottle={1000 / 60} // 16 fps
					snapToInterval={height}
					decelerationRate={"fast"}
					contentContainerStyle={{ marginLeft: 16 }}
					showsVerticalScrollIndicator={false}
				>

					<FirstScreen />
					<SecondScreen />
					<ThirdScreen />
					<ForthScreen />

				</Animated.ScrollView>

				<View
					style={{
						gap: 16,
						paddingHorizontal: 8
					}}
				>
					<HeartFillIcon />
					<MusicIcon />
					<HomekitIcon />
					<WifiIcon />

				</View>
			</ImageBackground>
		</>
	);
};

export default ControlCenter;

