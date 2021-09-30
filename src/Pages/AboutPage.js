import React from 'react'
import Hero from '../Components/Hero'
import Content from '../Components/Content'

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <h2>
                Heloo. I'm Gian Akbar
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius inventore, id pariatur iure deserunt, iste molestiae mollitia quibusdam velit quis illum illo esse dolorem vel voluptates voluptatum, nihil necessitatibus animi. </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius inventore, id pariatur iure deserunt, iste molestiae mollitia quibusdam velit quis illum illo esse dolorem vel voluptates voluptatum, nihil necessitatibus animi. </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius inventore, id pariatur iure deserunt, iste molestiae mollitia quibusdam velit quis illum illo esse dolorem vel voluptates voluptatum, nihil necessitatibus animi. </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius inventore, id pariatur iure deserunt, iste molestiae mollitia quibusdam velit quis illum illo esse dolorem vel voluptates voluptatum, nihil necessitatibus animi. </p>

            
            </Content>
        </div>
    )
}


export default AboutPage