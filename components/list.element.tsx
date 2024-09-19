import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

import { _itemFullSize, _itemSize, _spacing, height } from "@/constants/constants";
import { Item } from "@/constants/mock.data";

import AnimatedCard from "./animated.card";

type ListItemProps = {
	data: Item[];
}

const ListElement = ({ data }: ListItemProps) => {

	const scrollY = useSharedValue(0)

	const onScroll = useAnimatedScrollHandler(e => {
		scrollY.value = e.contentOffset.y / _itemFullSize; // 0 - 1 - 2 - 3 - ...
	})

	return (
		<Animated.FlatList
			data={data}
			contentContainerStyle={{
				gap: _spacing * 2,
				paddingHorizontal: _spacing * 2,
				paddingVertical: (height - _itemSize) / 2
			}}
			onViewableItemsChanged={(e) => {

			}}
			onScroll={onScroll}
			scrollEventThrottle={1000 / 60} // 16 fps
			snapToInterval={_itemFullSize}
			decelerationRate={"fast"}
			// snapToAlignment="center"
			renderItem={({ item, index }) => (
				<AnimatedCard item={item} index={index} scrollY={scrollY} />
			)}
		/>
	);
};

export default ListElement;

