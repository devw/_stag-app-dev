type IProps = { props: { SK: string } };

export const Option: React.FC<IProps> = ({ props }): JSX.Element => {
    console.log(props)
    const { SK } = props;
    return (
        <option>{SK}</option>
    );
}

