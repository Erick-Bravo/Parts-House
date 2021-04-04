import React from "react";
import { fetch } from "../../store/csrf"

const S3Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/uploadS3", { method: "POST" });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default S3Form