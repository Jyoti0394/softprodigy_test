import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:15,
        justifyContent: 'center'
    },
    gridView : {
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});

export default styles;