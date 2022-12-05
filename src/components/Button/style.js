import styled from "styled-components"

export const StyledButton = styled.button`
    border-radius: 0.25rem;
    box-sizing: border-box;
    color: var(--color-grey-0);
    transition: 300ms;

    background-color: ${props => {
        if (props.theme === "pink") {
            return "var(--color-1)"
        }
        if (props.theme === "pink") {
            return "var(--color-grey-3)"
        }
        return "var(--color-grey-1)"
    }};

    width: ${props => {
        if (props.large === "long") {
            return "20.375rem"
        }
        return "3.5rem"
    }};

    height: ${props => {
        if (props.size === "long") {
            return "3rem"
        }
        return "2rem"
    }};


    &:hover{
        background-color: ${props => {
        if (props.theme === "pink") {
            return "var(--color-negativ)"
        }
        if (props.theme === "short-grey") {
            return "var(--color-grey-3)"
        }
        return "var(--color-grey-2)"
    }};
    }
` 