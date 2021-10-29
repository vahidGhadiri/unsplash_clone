import React from "react"
import {connect} from "react-redux";

import {fetchImages} from "../../redux/actions/images.action";
import {Button} from "../index"

import {Container, Grid} from "./ImageGrid.style";


class ImageGrid extends React.Component {
    componentDidMount() {
        console.log(this.props.page)
    }

    handleFetchImages = () => {
        this.props.fetchImages(this.props.page)
    }

    render() {
        return (
            <Container>
                <Grid>
                    {this.props.images.map(image => (
                        <div key={image.id}>
                            <img src={image.urls.small} alt=""/>
                        </div>
                    ))}
                </Grid>
                <Button onClick={() => this.handleFetchImages()}>
                    Load more...
                </Button>
            </Container>
        )

    }
}


const mapStateToProps = state => ({
    images: state.images.images,
    page: state.images.page
})

const mapDispatchToProps = dispatch => ({
    fetchImages: (page) => dispatch(fetchImages(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid)