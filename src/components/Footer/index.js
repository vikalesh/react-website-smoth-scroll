import { FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItems, FooterLinkTitle, FooterLinkWrapper, FooterWrap, WebsiteRights } from "./FooterElement"


const Footer = () => {
    return (
        <>
           <FooterContainer>
                <FooterWrap>
                    <FooterLinkContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Content Types</FooterLinkTitle>
                                <FooterLink to="about">List</FooterLink>
                                <FooterLink to="about">Title</FooterLink>
                                <FooterLink to="about">Email</FooterLink>
                                <FooterLink to="about">Sentences</FooterLink>
                                <FooterLink to="about">Image</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Touch us</FooterLinkTitle>
                                <FooterLink to="about">Pricing</FooterLink>
                                <FooterLink to="about">FAQ</FooterLink>
                                <FooterLink to="about">Contact us</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Vector</FooterLinkTitle>
                                <FooterLink to="about">Illustration</FooterLink>
                                <FooterLink to="about">Art</FooterLink>
                                <FooterLink to="about">Minimal</FooterLink>
                                <FooterLink to="about">Interface</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Technology</FooterLinkTitle>
                                <FooterLink to="about">C++</FooterLink>
                                <FooterLink to="about">C</FooterLink>
                                <FooterLink to="about">Javascript</FooterLink>
                                <FooterLink to="about">React</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                    </FooterLinkContainer>
                    <WebsiteRights>@c {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                </FooterWrap>
            </FooterContainer> 
        </>
    )
}

export default Footer
