import { ImageBackground } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

import { _itemFullSize, _itemSize, _spacing, height } from "@/constants/constants";

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
					flex: 1
				}}
				source={require('@/assets/images/wallpaper.jpg')}
				blurRadius={20}
			>
				<Animated.ScrollView
					onScroll={onScroll}
					scrollEventThrottle={1000 / 60} // 16 fps
					snapToInterval={height}
					decelerationRate={"fast"}
				>

					<FirstScreen />
					<SecondScreen />
					<ThirdScreen />
					<ForthScreen />

				</Animated.ScrollView>
			</ImageBackground>
		</>
	);
};

export default ControlCenter;

