import React from 'react'
import Section from './Section'
import styled from 'styled-components'
const Home = () => {
    return (
        <Container>
            <Section 
            title = 'Model S' 
            description = "Oder Online For"
            link = "Touchless Delivery"
            buttonLeft = "CUSTOM ORDER"
            buttonRight ="EXISTING INVOTORY"
            bgimg = "../image/2.jpg"
            />
             <Section 
            title = 'Model Y' 
            description = "Oder Online For"
            link = "Touchless Delivery"
            buttonLeft = "CUSTOM ORDER"
            buttonRight ="EXISTING INVOTORY"
            bgimg = "../image/4.jpg"
            />
             <Section 
            title = 'Model 3' 
            description = "Oder Online For"
            link = "Touchless Delivery"
            buttonLeft = "CUSTOM ORDER"
            buttonRight ="EXISTING INVOTORY"
            bgimg = "../image/1.jpg"
            />
             <Section 
            title = 'Model X' 
            description = "Oder Online For"
            link = "Touchless Delivery"
            buttonLeft = "CUSTOM ORDER"
            buttonRight ="EXISTING INVOTORY"
            bgimg = "../image/3.jpg"
            />
             <Section 
            title = 'Solar Panels' 
            description = "Lowest Cost Solar Panels in America"
            buttonLeft = " ORDER NOW"
            buttonRight ="LEARN MORE"
            bgimg = "../image/6.jpg"
            />
             <Section 
            title = 'Solar Roof' 
            description = "Produce Clean Energy From Your Roof"
            buttonLeft = " ORDER NOW"
            buttonRight ="LEARN MORE"
            bgimg = "../image/7.jpg"
            />
        </Container>
    )
}

export default Home
const Container = styled.div``