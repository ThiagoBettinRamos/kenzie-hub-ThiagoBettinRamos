import styled from "styled-components"

export const StyledModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.719) ;

    & > div > div{
        background-color: var(--color-grey-2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        font-size: 14px;
        padding: .75rem;
        border-radius: 0.5rem 0.5rem 0 0 ;
    }


`