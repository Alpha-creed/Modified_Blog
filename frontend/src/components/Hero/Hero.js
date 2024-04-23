
import React from 'react'
import { ButtomWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from './HeroStyles'
import { Button, Container, MainHeading } from '../../GlobalStyles'
import { Link } from 'react-router-dom'
import vid1 from '../../assest/sololeveling.mp4'

const Hero = () => {
  return (
    <HeroSection>
    <HeroVideo src={vid1} autoPlay loop muted/>
    <Container>
        <MainHeading>The world to be the real you</MainHeading>
        <HeroText>
            We provide the best platform to individuals all over the world to freely express themselves through our blog
        </HeroText>
        <ButtomWrapper>
            <Link to='/register'>
                <Button>Get Started</Button>
            </Link>
            <HeroButton>Find More</HeroButton>
        </ButtomWrapper>
    </Container>
</HeroSection>
  )
}

export default Hero