import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Olá mundo!
      </Text>

      <Buttom title='Send 1' />
      <Buttom title='Send 2' />
      <Buttom title='Send 3' />

      <StatusBar style="auto" />
    </View>
  );
}

interface ButtomProps {
  title: string
}

function Buttom(props: ButtomProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
  },
});
