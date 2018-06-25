import styled from 'styled-components'
import { Flex } from 'commonStyled'

const Ul = Flex.withComponent('ul')
const MovieListUl = Ul.extend`
    margin: 0 15px;
`

export {
    MovieListUl
}