import { Image, StyleSheet, Text, View } from "react-native";
import Animated, { Extrapolation, interpolate, runOnJS, SharedValue, useAnimatedReaction, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { Item } from "@/constants/mock.data";
import { _borderRadius, _itemSize, _spacing } from "@/constants/constants";

type AnimatedCardProps = {
	item: Item,
	index: number,
	scrollY: SharedValue<number>
}

const AnimatedCard = ({ item, index, scrollY }: AnimatedCardProps) => {

	const isPlaying = useSharedValue(false)

	const play = () => {
		isPlaying.value = true
	}

	const pause = () => {
		isPlaying.value = false
	}

	useAnimatedReaction(() => {
		return scrollY.value
	},
		(value, previousValue) => {
			if ((value >= index - 0.2 || value <= index + 0.2) && !isPlaying.value) {
				// play video
				runOnJS(play)()
			} else {
				// pause
				runOnJS(pause)()
			}
		})

	const styles = useAnimatedStyle(() => {
		return {
			opacity: interpolate(
				scrollY.value, [index - 1, index, index + 1], [0.4, 1, 0.4]
			),
			transform: [{
				scale: interpolate(scrollY.value, [index - 1, index, index + 1], [0.92, 1, 0.92], Extrapolation.CLAMP)
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
				style={[StyleSheet.absoluteFillObject, { borderRadius: _borderRadius, opacity: 0.6 }]}
				blurRadius={50}
			/>

			<Image
				source={{ uri: item.image }}
				style={{
					borderRadius: _borderRadius,
					flex: 1,
					height: _itemSize * 0.4,
					objectFit: 'cover',
					margin: -_spacing
				}}
			/>
			<View style={{ gap: _spacing }}>
				<Text style={{ fontSize: 24, color: '#fff', fontWeight: '700' }}>{item.title}</Text>
				<Text style={{ fontWeight: '300', color: '#ddd' }} numberOfLines={3}>{item.description}</Text>
			</View>
			<View
				style={{ flexDirection: 'row', alignItems: 'center', gap: _spacing }}
			>
				<Image
					source={{ uri: item.author.avatar }}
					style={{ width: 24, aspectRatio: 1, borderRadius: 30 }}
				/>
				<Text style={{ color: '#ddd', fontSize: 12 }}>{item.author.name}</Text>
			</View>
		</Animated.View>
	)
};

export default AnimatedCard;

