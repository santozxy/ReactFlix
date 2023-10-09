import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, Title, MenuButton } from './styled'
const Header = ({ title }) => {
    return (
        <Container>
            <MenuButton>
                <Feather name='video' size={36} color={"#e72f49"} />
            </MenuButton>
            <Title>{title}</Title>
        </Container>
    )
}

export default Header

const styles = StyleSheet.create({})