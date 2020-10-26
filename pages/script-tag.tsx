import React from "react";
import { JS2TBL } from "./utils";

export default class ScriptTag extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount () {
        const result = await fetch("/api/script-tag");
        this.setState(await result.json());
    }

    render = () => <JS2TBL json={this.state?.data} title="Script Tag" />
}
