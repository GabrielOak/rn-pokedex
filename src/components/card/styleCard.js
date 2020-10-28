import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styleCard = StyleSheet.create({
  card: {
    flex: 1 / 2,
    // width: 170,
    maxWidth: windowWidth / 2,
    height: 150,
    borderRadius: 6,
    backgroundColor: '#7159c1',
    elevation: 3,
    marginHorizontal: 4,
    marginVertical: 4,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: '#333',
    shadowOffset: { width: 1, height: 1 },
  },
  titleContainer: {
    margin: 10,
    // backgroundColor: 'blue',
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: "bold",
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  typeContainer: {
    // flex: 1,
    height: 100,
    width: 70,
    // backgroundColor: 'black',

  },
  imageContainer: {
    // backgroundColor: 'white',
    // borderRadius: 35,
    // opacity: 0.5,
    height: 100,
    width: 100,
  },
  image: {
    flex: 1,
  }
});

export default styleCard;
