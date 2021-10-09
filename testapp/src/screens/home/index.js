import React, { useEffect } from 'react';
import { View, Image, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../redux/actions';
import styles from './styles';
import CarouselCards from '../../components/CarouselCards';

const HomeScreen = () => {
    const images = useSelector(state => state.response);
    const isProgress = useSelector(state => state.isProgress);
    console.log('images', images)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchImages('30'));
    }, [])

    const filteredData = images ? images.slice(0, 5) : []

    return (
        <SafeAreaView style={styles.container}>
            {images ?
                <CarouselCards data={filteredData} />
                : null}
            {isProgress ?
                <ActivityIndicator size="large" color="#3772e0" animating={isProgress} />
                : null}
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <View
                        style={styles.gridView}>
                        <Image
                            style={styles.imageThumbnail}
                            source={{ uri: item }}
                        />
                    </View>
                )}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}
export default HomeScreen;