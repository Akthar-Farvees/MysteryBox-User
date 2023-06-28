import { StyleSheet } from "react-native";


export default  StyleSheet.create({
    page: {
        flex: 1,
    },
    iconContainer: {
        position: "absolute",
        top: 30,
        left: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 15,
        color: 'grey',
    },
    container: {
        margin: 10,
    },

    button: {
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: "center",
        margin: 10,
    },
      buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
      },
   
});
