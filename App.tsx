import { View, Text, Image, TextInput } from 'react-native';


export default function App() {
  return (
    <View>
      <Image
        src={'https://picsum.photos/536/354'}
        style={{ width: 100, height: 100 }}
      />
      <Text>Bem-vindo ao MyPizzal</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry={true}
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />

    </View>
  );
}