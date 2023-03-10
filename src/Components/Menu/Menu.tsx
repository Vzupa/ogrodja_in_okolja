interface Props {
    ime: string;
}
export const Menu: React.FC<Props> = ({ ime }) => {
    return (
        <div className="menu">
            <h1>{ime}</h1>
        </div>
    );
}