import React from 'react'
import Card from '../Components/Card'
import devgrub from '../Assets/images/devgrub.png'
import youtube from '../Assets/images/youtube.png'
import evverest from '../Assets/images/evverest.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Lorem Ipsum',
                    subTitle: 'Lorem Ipsum',
                    imgSrc: devgrub,
                    link: '#',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Lorem Ipsum',
                    subTitle: 'Lorem Ipsum',
                    imgSrc: youtube,
                    link: '#',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Lorem Ipsum',
                    subTitle: 'Lorem Ipsum',
                    imgSrc: evverest,
                    link: '#',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel