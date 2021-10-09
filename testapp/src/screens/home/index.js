import React, { useEffect } from 'react';
import { View, Text, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../redux/actions';
import { store } from '../../redux/store';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {
    const images = useSelector(state=>state.response);
    const dispatch = useDispatch();
    useEffect(()=>{     
        dispatch(fetchImages('5'));
    },[])

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.image} source={{uri:item}}/>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            {images?
            <Carousel
                layout={'default'}
                data={images}
                renderItem={renderItem}
                sliderWidth={300}
                itemWidth={300}
            />
            :null}
        </View>
    )
}
export default HomeScreen;