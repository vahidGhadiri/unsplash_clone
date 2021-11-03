import React from "react"
import {connect} from "react-redux";

import {fetchImages} from "../../redux/actions/images.action";
import {Button} from "../index"

import {Container, Grid, Image} from "./ImageGrid.style";


class ImageGrid extends React.Component {

    componentDidMount() {
        this.props.fetchImages()
    }


    render() {
        return (
            <Container>
                <Grid>
                    {this.props.images.map((image, index) => (
                        <Image key={index}
                               style={{position: "relative", gridRow: `span ${Math.ceil(image.height / image.width)}`}}>
                            <img src={image.urls.small} alt={image.description}/>
                        </Image>
                    ))}
                </Grid>
                <Button onClick={() => this.props.fetchImages()}>
                    Load More...
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
    fetchImages: () => dispatch(fetchImages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid)