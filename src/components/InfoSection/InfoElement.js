import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#f7f7f7")};
  padding: 5rem 0px;
  @media screen and (max-width: 768px) {
    padding: 100px 0px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  width: 100%;
//   height: 500px;
  // padding:0 24px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 60px;
  padding-top: 0px;
`;

export const TopLine = styled.p`
  color: #ee846d;
  font-size: 16px;
  line-height: 1.4;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 0px;
  letter-spacing: 1.4px;
`;

export const Heading = styled.h1`
  color: ${({ lightText }) => (lightText ? "#2b2b2b" : "#f7f7f7")};
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 24px;
  margin-top: 0px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  color: ${({ darkText }) => (darkText ? "#f7f7f7" : "#5b5b5b")};
  font-size: 18px;
  line-height: 1.5;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  margin: 0px 0px 10px 0px;
  width: 100%;
  padding: 0px;
`;
