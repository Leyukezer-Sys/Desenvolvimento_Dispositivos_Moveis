import React, {useState, useEffect, useRef} from 'react';
import { View, Text, Image, TouchbleOpacity, StyleSheet } from 'react-native-web';
import * as Font from 'expo-font'; 

export default function App() {

  const [nomePet, setNomePet] = useState('Luan');

  // normal, fome, feliz, coco
  const [estadoPet, setEstadoPet] = useState('normal');

  // posicao do fundo
  const [fundoAtual, setFundoAtual] = useState(0);

  // chapeu atual
  const  [chapeuAtual, setChapeuAtual] = useState(0);

  const [fala, setFala] = useState('');

  const [quantidadeCoco, setQuantidadeCoco] = useState(0);

  // tempo de fala atual
  const falaTimeout = useRef(null);

  const [fonteCarregada, setFonteCarregada] = useState(false);

  const TEMPO_PARA_SENTIR_FOME = 9000;

  const fundos = [
    require('./assets/fundos/fundo1.jpg'),
    require('./assets/fundos/fundo2.jpg'),
    require('./assets/fundos/fundo3.jpg'),
    require('./assets/fundos/fundo4.jpg'),
    require('./assets/fundos/fundo5.jpg'),
    require('./assets/fundos/fundo6.jpg'),
    require('./assets/fundos/fundo7.jpg'),
    require('./assets/fundos/fundo8.jpg'),
    require('./assets/fundos/fundo9.jpg'),
    require('./assets/fundos/fundo10.jpg'),
  ];

  const chapeus = [
    null,
    require('./assets/chapeus/chapeu1.png'),
    require('./assets/chapeus/chapeu2.png'),
    require('./assets/chapeus/chapeu3.png'),
  ];

  const estilosChapeus = {
    1: {width:240, height:200, top:-75},
    2: {width:240, height:200, top:-55},
    3: {width:240, height:200, top:-65}
  };

  const mensagens = {
    normal: ['QUERO JOGAR!', 'NEWBAA!', 'Eu sou o Aspas de Rondônia!', 'Meu segundo nome é Oruan!!'],
    fome: ['Quero papa!', 'Desce um prato de comida pro pai!'],
    coco: ['Me caguei todo buehehehe!', 'Eu sou Suju!'],
    feliz: ['Cola no pai!', 'Confia no pai!'],
  }

  const imagemPet = {
    normal:require('./assets/gifs/petChild.gif'),
    fome: require('./assets/gifs/petChildCry.gif'),
    coco: require('./assets/gifs/petChild.gif'),
    feliz: require('./assets/gifs/petChild.gif'),
  }

  const efeitos = {
    coracao: require('./assets/gifs/petBigSparkles.gif'),
    coco: require('./assets/gifs/petPoo.gif'),
  }

  useEffect(() => {
    async function carregarFonte() {
      await Font.loadAsync({
        pixel: require('./assets/fonts/PressStart2P-Regular.ttf'),
      });
      setFonteCarregada(true);
    }
    carregarFonte();
  }, []);

  useEffect(() => {
    const opcoes = mensagens[estadoPet] || [''];
    const falaAleatoria = opcoes[Math.floor(Math.random() * opcoes.length)];
    setFala(falaAleatoria);

    if (falaTimeout.current) clearTimeout(falaTimeout.current);
    falaTimeout.current = setTimeout(() => setFala(''), 2000);

    return () => clearTimeout(falaTimeout.current);
  }, [estadoPet]);

  useEffect(() => {
    if (estadoPet !== 'normal') return;

    const id = setTimeout(() => {
      setEstadoPet('fome');
    }, TEMPO_PARA_SENTIR_FOME);

    return () => clearTimeout(id);
  }, [estadoPet]);

  function alimentarPet() {
    if (estadoPet === 'fome' || estadoPet === 'coco') {
      setEstadoPet('feliz');

      setTimeout(() => {
        setQuantidadeCoco(prev => prev + 1);
        setEstadoPet('coco');
      }, 8000);
    }
  }

  function limparCoco() {
    setQuantidadeCoco(0);
    setEstadoPet('feliz');
    setTimeout(() => {
      setEstadoPet('normal');
    }, 800);
  }

  function trocarFundo() {
    setFundoAtual((fundoAtual + 1) % fundos.length);
  }

  function trocarChapeu() {
    setChapeuAtual((chapeuAtual + 1) % chapeus.length);
  }

  if (!fonteCarregada) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>$& v°(& &$t@ |&^d° &$t& t&$t°, p@r@b&^$, ^&m &ü (°^$ig° &^t&^d&r!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'red',
  }
});
