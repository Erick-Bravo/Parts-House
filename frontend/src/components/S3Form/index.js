import React from "react";
import { fetch } from "../../store/csrf"



const S3Form = () => {

    const S3SOnChange = async(e) => {
        const rawInputElement = e.target;
        const fileUpload = rawInputElement.files[0];
        const formData = new FormData();

        formData.append("image", fileUpload);

        const response = await fetch("/uploadS3", {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data",
              },
        });

        console.log(response.data)
    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input
                    type="file"
                    onChange={S3SOnChange} 
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default S3Form