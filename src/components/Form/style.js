import styled from "styled-components";

export const StyledForm = styled.form`
    width: 23.125rem;
    max-width: 100%;
    height: 31.25rem;
    padding: 2.5rem 0;

    background-color: var(--color-grey-3);
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    box-sizing: border-box;

    & > h2{
        font-weight: 700;
        font-size: 18px;
        color: var(--color-grey-0);    
    }
    
    & > span{
        font-weight: 600;
        font-size: 12px;
        color: var(--color-grey-1);
    }
`