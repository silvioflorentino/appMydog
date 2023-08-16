import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Fotos de Dogs engraçados</Text>
      <ScrollView>
      <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/dog1.jpg')}
        />
        <Text style={styles.subtitulo}>Que olhar lindinho</Text>
      </View>

      <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/dog2.jpg')}
        />
        <Text style={styles.subtitulo}>Sorriso Belizimo </Text>
      </View>

      <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/dog3.jpg')}
        />
        <Text style={styles.subtitulo}>Sorriso Belizimo </Text>
      </View>

      <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/dog4.jpg')}
        />
        <Text style={styles.subtitulo}>Sorriso Belizimo </Text>
      </View>
           <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/dog5.jpg')}
        />
        <Text style={styles.subtitulo}>Sorriso Belizimo </Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    marginTop:40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    width: 250,
    height:200,
    borderRadius: 8,
    paddingTop:10
  },
  subtitulo:{
    fontSize:20
  },
  cxfoto:{
    flex: 1,
    backgroundColor: '#602C6E99',
    marginTop: 20,
    alignItems:"center",
    borderRadius:15,
    width: 320
  }
});
