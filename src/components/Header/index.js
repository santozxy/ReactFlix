import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, Title, MenuButton } from './styled'
import { useNavigation } from '@react-navigation/native'

const Header = ({ title }) => {
    const navigation = useNavigation();
    return (
        <Container>
            <MenuButton onPress={() => navigation.openDrawer()}>
                <Feather name='menu' size={36} color={"#fff"} />
            </MenuButton>
            <Title>{title}</Title>
        </Container>
    )
}

export default Header

const styles = StyleSheet.create({})