import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Item } from "@/constants/mock.data";

type ListItemProps = {
	data: Item[];
}

type AnimatedCardProps = {
	item: Item,
	index: number,
	scrollY: SharedValue<number>
}

//Constants
const { width, height } = Dimensions.get('screen')
const _spacing = 8;
const _borderRadius = 12;
const _itemSize = height * 0.62;
const _itemFullSize = _itemSize + _spacing * 2;

export function AnimatedCard({ item, index, scrollY }: AnimatedCardProps) {

	const styles = useAnimatedStyle(() => {
		return {
			opacity: interpolate(
				scrollY.value, [index - 1, index, index + 1], [0.4, 1, 0.4]
			),
			transform: [{
				scale: interpolate(scrollY.value, [index - 1, index, index + 1], [0.75, 1, 0.75], Extrapolation.CLAMP)
			}]
		}
	})

	return (
		<Animated.View
			style={[styles, {
				height: _itemSize,
				padding: _spacing * 2,
				borderRadius: _borderRadius,
				gap: _spacing * 2,
				backgroundColor: `${item.bg}cc`,
			}]}
		>

			<Image
				source={{ uri: item.image }}
				style={[StyleSheet.absoluteFillObject, { borderRadius: _borderRadius, opacity: 0.3 }]}
				blurRadius={50}
			/>

			<Image
				source={{ uri: item.image }}
				style={{
					borderRadius: _borderRadius,
					flex: 1,
					height: _itemSize * 0.4,
					objectFit: 'cover'
				}}
			/>
			<View>
				<Text style={{ fontSize: 24 }}>{item.title}</Text>
				<Text style={{ fontSize: 16, fontWeight: '300' }} numberOfLines={3}>{item.description}</Text>
			</View>
			<View
				style={{ flexDirection: 'row', alignItems: 'center', gap: _spacing }}
			>
				<Image
					source={{ uri: item.author.avatar }}
					style={{ width: 30, aspectRatio: 1, borderRadius: 30 }}
				/>
				<Text>{item.author.name}</Text>
			</View>
		</Animated.View>
	)
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
				gap: _spacing * 2
			}}
			onScroll={onScroll}
			scrollEventThrottle={1000 / 60} // 16 fps
			snapToInterval={_itemFullSize}
			decelerationRate={"fast"}
			snapToAlignment="center"
			renderItem={({ item, index }) => (
				<AnimatedCard item={item} index={index} scrollY={scrollY} />
			)}
		/>
	);
};

export default ListElement;

