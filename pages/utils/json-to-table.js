export function json2table(json) {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">ScriptTag Data</th>
                </tr>
            </thead>
            <tbody>
                {json.map((o) =>
                    Reflect.ownKeys(o).map((e) => (
                        <tr key={e}>
                            <td>{e}</td>
                            <td>{o[e].toString()}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}
