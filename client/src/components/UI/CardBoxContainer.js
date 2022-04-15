import React from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';


const CardBoxContainer = (props) => {

    const CardBox = styled(Box)({
        borderRadius: "12px",
        boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        marginBottom: "2rem",
        padding: "0.5rem",        
    });    

    return (
        <CardBox>
            {props.children}
        </CardBox>
    );
};

export default CardBoxContainer;