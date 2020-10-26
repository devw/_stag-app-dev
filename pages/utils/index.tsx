import React from 'react';

type TableProps = {
    title: string,
    json: Array<object>
  }

export function JS2TBL({ title, json } : TableProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>{title}</th>
                </tr>
            </thead>
            <tbody>
                { json?.map((o) =>
                    Reflect.ownKeys(o).map((e) => (
                        <tr>
                            <td>{e}</td>
                            <td>{o[e].toString()}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}
