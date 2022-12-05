import styled from "styled-components"

export const StyledHeader = styled.header`
    width: 23.125rem;
    height: 4.5rem;
    max-width: 100%;
    width: ${props => {
        if (props.size === "low") {
            return "23.125rem"
        }
        if (props.size === "medium") {
            return "1.25rem"
        }
        return "90rem"
    }};
`