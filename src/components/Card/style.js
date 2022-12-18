import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: var(--color-grey-4);
    border-radius: 0.5rem;
    box-sizing: border-box;
    padding: .7614rem;
    align-items: center;
    width: 100%;

    & > div{
        display: flex;
        gap: 4rem;
        align-items: center;
    }
    
    & > div > button{
        width: 2rem;
        height: 2rem;
        background-color: var(--color-grey-4);
        border: none;
        border-radius: 0.25rem;
    }
    & > div > button:hover{
         background-color: var(--color-grey-3);
         transition: 300ms
    }

    & > h3 {
        color: var(--color-grey-0);
    }

    & > div > span {
        color: var(--color-grey-2);
    }

    &:hover{
        cursor: pointer;
        background-color: var(--color-grey-2);
        
        & > div > span{
            color: var(--color-grey-1);
        }
    }
`