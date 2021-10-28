import React from "react"
import {Container} from "./Button.style";

import PropTypes from "prop-types"


const Button = ({children, loading, ...props}) => {
    return (
        <Container disabled={loading} {...props}>
            {loading ? "loading..." : children}
        </Container>
    )
}

Button.defaultProps = {
    loading: false,
    children: "Submit"
}

Button.defultProps = {
    loading: PropTypes.string,
    children: PropTypes.node
}

export default Button