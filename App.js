import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>2°ano</Text>
      <Text style={styles.texto}>3°Bimestre</Text>
      <Text style={styles.texto}>Gabriel Müller Ferreira Neves</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  }
});
