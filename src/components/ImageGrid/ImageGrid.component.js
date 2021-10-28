import React, {useEffect} from "react"

import {Button} from "../index"
import {Container, Grid} from "./ImageGrid.style";
import {connect} from "react-redux";


const ImageGrid = ({isLoading, images, loadImages, error, imageStats}) => {

    useEffect(() => {
        loadImages()
    }, [])

    return (
        <Container>
            <Grid>
                Image Grid
            </Grid>
            {error && <div>{JSON.stringify(error.message)}</div>}
            <Button onClick={() => loadImages()}>
                Load more...
            </Button>
        </Container>
    )
}


const mapStateToProps = ({images, isLoading, error, imageStats}) => ({
    images,
    isLoading,
    error,
    imageStats,
})

const mapDispatchToProps = dispatch => ({
    loadImages: dispatch(loadImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid)