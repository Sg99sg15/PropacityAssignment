import { StyleSheet } from 'react-native';
const homeStyles = StyleSheet.create({
    search: {
        padding: 10,
        fontSize: 16,
        width: '85%'
    },
    mainContainer: {
        margin: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    addButtonContainer: {
        position: 'absolute',
        backgroundColor: '#800080',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        zIndex: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30,
        right: 10,
    },
    addButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 5,
        color: 'white',
    },
    flatListContainer: {
        paddingHorizontal: 16,
        backgroundColor: 'white',
        flexGrow: 1,
        paddingBottom: 100
    },
    noteCard: {
        padding: 15,
        borderRadius: 7,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'grey',
    },
    readMore: {
        color: '#800080',
        fontWeight: 'bold',
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    noteHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    noteTitle: {
        fontSize: 16,
        fontWeight: '600',
        width: '80%',
    },
    noteActions: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 10,
    },
    noteContent: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 10,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContainer: {
        paddingHorizontal: 15,
        paddingTop: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: 'transparent',
        marginBottom: 10,
    },
    colorPickerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 7,
    },
    colorCircle: {
        marginRight: 20,
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    addButton: {
        backgroundColor: '#800080',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 25
    },
    addText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
export default homeStyles;
