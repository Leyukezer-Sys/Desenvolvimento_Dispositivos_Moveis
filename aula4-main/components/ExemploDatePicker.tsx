/*
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ExemploDatePicker = () => {
    const [data, setData] = useState(new Date());
    const [mostrarPicker, setMostrarPicker] = useState(false);

    const aoAlterarData = (dataSelecionada) => {
        const novaData = dataSelecionada || data;
        setMostrarPicker(false);
        setData(novaData);
    };

    return (
        <View>
            <Button title="Selecionar Data" onPress={() => setMostrarPicker(true)} />
            {mostrarPicker && (
                <DateTimePicker
                    value={data}
                    mode="date"
                    display="default"
                    onChange={aoAlterarData}
                />
            )}
            <Text>Data selecionada: {data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</Text>
        </View>
    );
};

export default ExemploDatePicker;
*/
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ExemploDatePicker = () => {
    const [data, setData] = useState(new Date());
    const [mostrarPicker, setMostrarPicker] = useState(false);

    const aoAlterarData = (event, dataSelecionada) => {
        const novaData = dataSelecionada || data;
        setMostrarPicker(false);
        setData(novaData);
    };

    return (
        <View>
            <Button title="Selecionar Data" onPress={() => setMostrarPicker(true)} />
            {mostrarPicker && (
                <DateTimePicker
                    value={data}
                    mode="date"
                    display="default"
                    onChange={aoAlterarData}
                />
            )}
            <Text>Data selecionada: {data instanceof Date ? data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : 'Data inválida'}</Text>
        </View>
    );
};

export default ExemploDatePicker;

