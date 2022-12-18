import styled from "styled-components"

export const StyledHome = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 100%;

    & > div > Header{
        align-items:  center;
        display: flex;
        justify-content: space-between;
        max-width: 90rem!important;
        width: 100%!important;
        margin: 0 auto;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    & > div{
        border-bottom: 1px solid var(--color-grey-3);
        width: 100%;
    }
    & > div:nth-child(1){
        width: 100%;
    }

    & > div:nth-child(2){
        display: flex;
        justify-content: center;
        padding:3.5rem 0;
        width: 100%;
        &>div {
            width: 100%;
            max-width: 90rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1rem;
            box-sizing: border-box;
        }
    }
    & > div:nth-child(3){
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        padding:3rem ;

        & > div{
            justify-content: space-between ;
            display: flex;
            width: 100%;
            max-width: 90rem;
            padding: 0 1rem;
            box-sizing: border-box;
            gap: 3rem;
        }
    }
    & h3{
        color: var(--color-grey-0)
    }
    & > div h2 {
        color: var(--color-grey-0)
    }
    & > div span{
        color: var(--color-grey-0)
    }
`



export const StyledList = styled.ul`
    list-style: none;
    width: 88.75rem;
    max-width: 100%;
    background-color: var(--color-grey-3);
    border-radius: 0.5rem;
    box-sizing: border-box;
    padding: 1.5rem 1.5rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
`