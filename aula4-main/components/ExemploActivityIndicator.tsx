import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

const ExemploActivityIndicator = () => {
    const [loading, setLoading] = useState(false);

    const iniciarCarga = () => {
        setLoading(true);
        // meu Codigo 

        //setLoading(false);
        //simula uma atividade assincrona
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <View>
                    <Text>Pressione o botão para iniciar a carga</Text>
                    <Button title="Iniciar Carga" onPress={iniciarCarga} />
                </View>
            )}
        </View>
    );
};

export default ExemploActivityIndicator;

