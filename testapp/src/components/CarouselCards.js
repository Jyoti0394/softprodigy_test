import React, { useState, useRef } from 'react'
import { View, Image, Dimensions } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import styles from './styles'
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCards = (props) => {
    const [index, setIndex] = useState(0)
    const isCarousel = useRef(null)

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: item }} />
            </View>
        );
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Carousel
                layout="default"
                ref={isCarousel}
                data={props.data}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(idx) => setIndex(idx)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={props.data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>

    )
}

export default CarouselCards