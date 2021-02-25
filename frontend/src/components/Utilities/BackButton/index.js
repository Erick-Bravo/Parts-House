import React from "react";
import { useHistory } from "react-router-dom";

const BackButton = () => {
    
    const history = useHistory();

    const goBack = (e) => {
        history.go(-1);
    };

    return (
        <>
            <button onClick={goBack}>Back</button>
        </>
    );
};

export default BackButton