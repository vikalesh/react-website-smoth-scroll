import React from "react";
import { Button } from "../ButtonElement";
import {
  Column1,
  Column2,
  Heading,
  SubTitle,
  Img,
  ImgWrap,
  TextWrapper,
  TopLine,
  BtnWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
} from "./InfoElement";

const InfoSection = ({
  lightBg,
  id,
  Imgsrc,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLable,
  alt,
  primary,dark
}
) => {

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Button 
                    to="home"
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-88}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >{buttonLable}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Imgsrc} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
