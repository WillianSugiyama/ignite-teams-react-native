import { Container, Icon, Title } from './style';
import { TouchableHighlightProps } from 'react-native';

type Props = TouchableHighlightProps & {
  title: string;
}

export function GroupCard({ title, ...rest }: Props ) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{ title }</Title>
    </Container>
  )
}