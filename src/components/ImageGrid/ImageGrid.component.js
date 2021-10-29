import React from "react"

import {Button} from "../index"
import {Container, Grid} from "./ImageGrid.style";
import {connect} from "react-redux";
import {fetchImages} from "../../redux/actions/images.action";


const ImageGrid = (props) => {


    return (
        <Container>
            <Grid>
                Image Grid
            </Grid>
            <Button onClick={() => props.fetchImages()}>
                Load more...
            </Button>
        </Container>
    )
}


const mapStateToProps = state => ({
    images: state.images.images
})

const mapDispatchToProps = dispatch => ({
    fetchImages: () => dispatch(fetchImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid)