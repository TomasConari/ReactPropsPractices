const BestFoodList = ({compStyle, tittle, el1, el2, el3}) => {
    return(
        <div style={compStyle}>
            <h3>{tittle}'s best food</h3>
            <ol>
                <li>{el1}</li>
                <li>{el2}</li>
                <li>{el3}</li>
            </ol>
        </div>
    );
};
export default BestFoodList