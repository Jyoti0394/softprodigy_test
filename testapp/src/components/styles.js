import { StyleSheet } from 'react-native';
import { ITEM_WIDTH } from './CarouselCards';

const styles = StyleSheet.create({
    image: {
        width: ITEM_WIDTH,
        height: 200,
    },
    slide:{
        backgroundColor: '#fff',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    }
});

export default styles;