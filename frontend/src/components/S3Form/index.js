import React from "react";

const S3Form = () => {
    return (
        <>
            <form onSubmit={() => {
                fetch("/uploadS3", { method: "POST" });
            }}>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default S3Form