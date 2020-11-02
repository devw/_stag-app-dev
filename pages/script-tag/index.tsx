import React, { MouseEvent } from 'react';
import { JS2TBL } from "../utils";

interface IState {
    data: object[];
}

interface IProps { }

export default class ScriptTag extends React.Component<IProps, IState>{
    api = async (e: MouseEvent): Promise<void> => {
        const target = e.target as HTMLTextAreaElement;
        const result = await fetch(`/api/script-tag/?query=${target.value}`);
        this.setState(await result.json());
    }

    render = (): JSX.Element => {
        return <div>
            <input type="button" value="list" onClick={this.api} />
            <input type="button" value="create" onClick={this.api} />
            <JS2TBL json={this.state?.data} title="Script Tag" />
        </div>
    }
}
