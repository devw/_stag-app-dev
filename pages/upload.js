import React, { useState } from "react";
import axios from "axios";

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        };
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
        });
    };

    onChange = (e) => {
        this.setState({ file: e.target.files[0] });
    };

    fileUpload = async (file) => {
        const { AWS_ENDPOINT } = process.env;
        return axios.get(`${AWS_ENDPOINT}/dev/file-upload/`).then((res) => {
            const url = res.data.url;
            const config = {
                headers: {
                    "content-type": file.type,
                },
            };
            return axios.put(url, file, config);
        });
    };

    render = () => (
        <form onSubmit={this.onFormSubmit}>
            <input type="file" onChange={this.onChange} />
            <button type="submit">Upload</button>
        </form>
    );
}

export default Upload;
