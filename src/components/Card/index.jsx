import { useContext } from "react";
import { BsTrashFill } from "react-icons/bs";
import { TechsContext } from "../Context/TechsContext";
import { StyledCard } from "./style";

export function Card ({title, status, id}) {
    const { deleteTech } = useContext(TechsContext)

    return (
        <StyledCard>
            <h3> {title} </h3>
            <div>
            <span> {status} </span>  
            <button
                onClick={() => deleteTech(id)}
            >
                <BsTrashFill color="white"/>
            </button>
            </div>
        </StyledCard>
    )
}