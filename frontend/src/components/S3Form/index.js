import React from "react";
import { fetch } from "../../store/csrf"

const S3Form = () => {



    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input
                    type="file"
                    onChange={async (e) => {
                        const rawInputElement = e.target;
                        const fileUpload = rawInputElement.files[0];
                        const formData = new FormData();

                        formData.append("image", fileUpload);

                        await fetch("/uploadS3", {
                            method: "POST",
                            body: formData,
                            headers: {
                                "Content-Type": "multipart/form-data",
                              },
                        });
                    }}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default S3Form