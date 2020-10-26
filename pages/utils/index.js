export function JS2TBL({ title, json }) {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">{title}</th>
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
