import { Container, Message,Loader } from './styles';



function Loading() {
    return (
        <Container>
            <Loader
                style={{ justifyContent: 'center', alignItems: 'center' }}
                size={'large'}
                color={'#e72f49'}
            />
            <Message>Carregando</Message>
        </Container>
    )
}

export default Loading