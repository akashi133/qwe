import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Добро пожаловать в <br /> {Bio.name}</Title>
                        <TextLoop>
                            Предоставляем вам услуги
                        </TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    />
                            </Span>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href="#skills">Начать</ResumeButton>
                    </HeroLeftContainer>

                    {/* <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer> */}
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection