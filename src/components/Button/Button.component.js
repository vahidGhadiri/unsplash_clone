import React from "react"
import {Container} from "./Button.style";

import PropTypes from "prop-types"


const Button = ({children, isLoading, ...props}) => {
    return (
        <Container disabled={isLoading} {...props}>
            {isLoading ? "loading..." : children}
        </Container>
    )
}

Button.defaultProps = {
    isLoading: false,
    children: "Submit"
}

Button.defultProps = {
    isLoading: PropTypes.bool,
    children: PropTypes.node
}

export default Button