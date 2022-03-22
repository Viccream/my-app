import _ from "lodash";

function KebabCharacter (props) {
    return (
        <h1>{_.kebabCase(props.name)}</h1>
    )
}


export default KebabCharacter