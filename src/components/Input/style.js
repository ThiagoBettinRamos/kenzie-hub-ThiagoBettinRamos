import styled from "styled-components"

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    gap:  0.5rem;

    & > input {
        width: 20.375rem;
        height: 3rem;
        border: 2px solid var(--color-grey-0);
        background-color: var(--color-grey-2);
        padding: 1rem;
    }
    & > label{
        font-weight: 400;
        font-size: 12.182px;
        color: var(--color-grey-0);
    }
 
`