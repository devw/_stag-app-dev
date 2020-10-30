import React from "react";
import { JS2TBL } from "../utils";

export default class ScriptTag extends React.Component {
    constructor(props) {
        super(props);
    }

    api = async (e) => {
        const result = await fetch(`/api/script-tag/?query=${e.target.value}`);
        this.setState(await result.json());
    }

    render = () => {
        return <div>
            <input type="button" value="list" onClick={this.api} />
            <input type="button" value="create" onClick={this.api} />
            <JS2TBL json={this.state?.data} title="Script Tag" />
        </div>
    }
}
