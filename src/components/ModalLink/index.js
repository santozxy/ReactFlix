import { View, Text } from 'react-native'
import React from 'react'

import { Backbutton, Name, Alert, Error } from './styles'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { WebView } from 'react-native-webview'

function ModalLink({ link, title, closeModal }) {
    return (
        <>
            <Backbutton onPress={closeModal}>
                <Feather name='x' size={35} color='#e72f49' />
                <Name>{title}</Name>
            </Backbutton>
            {link === "" ?
                <Alert>
                    <MaterialCommunityIcons name='web-remove' size={50} color='#e72f49' />
                    <Error>Este filme não possui um site</Error>
                </Alert>
                :
                <WebView source={{ uri: link }} />}
        </>
    )
}

export default ModalLink