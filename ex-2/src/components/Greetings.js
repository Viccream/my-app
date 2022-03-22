import _ from "lodash";
function Greetings (props) {
    return (
    <h1>Hello {_.capitalize(props.name)}</h1>
    );    
}

export default Greetings;





