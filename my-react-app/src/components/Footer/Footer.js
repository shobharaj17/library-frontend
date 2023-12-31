import React from "react";
import {

    Box,

    FooterContainer,

    Row,

    Column,

    FooterLink,

    Heading,

} from "./FooterStyles";
 
const Footer = () => {

    return (

        <Box>

            <h1

                style={{

                    color: "skyblue",

                    textAlign: "center",

                    marginTop: "10px",

                }}

            >

                e-BookShelf

            </h1>
           

            <FooterContainer>

                <Row>

                    <Column>

                        <Heading>About Us</Heading>

                        <FooterLink href="#">

                            Aim

                        </FooterLink>

                        <FooterLink href="#">

                            Vision

                        </FooterLink>

                        

                    </Column>

                    <Column>

                        <Heading>Services</Heading>

                        <FooterLink href="#">

                            Writing

                        </FooterLink>

                        <FooterLink href="#">
                            Library
                        </FooterLink>

                        <FooterLink href="#">

                            Coding

                        </FooterLink>

                       

                    </Column>

                    <Column>

                        <Heading>Contact Us</Heading>

                        <FooterLink href="#">

                           080-123-456-789

                        </FooterLink>

                        <FooterLink href="#">

                            bookshelf@gmail.com

                        </FooterLink>

                        <FooterLink href="#">

                        

                        </FooterLink>

                    </Column>

                    <Column>

                        <Heading>Social Media</Heading>

                        <FooterLink href="#">

                            <i className="fab fa-facebook-f">

                                <span

                                    style={{

                                        marginLeft: "10px",

                                    }}

                                >

                                    Facebook

                                </span>

                            </i>

                        </FooterLink>

                        <FooterLink href="#">

                            <i className="fab fa-instagram">

                                <span

                                    style={{

                                        marginLeft: "10px",

                                    }}

                                >

                                    Instagram

                                </span>

                            </i>

                        </FooterLink>

                        <FooterLink href="#">

                            <i className="fab fa-twitter">

                                <span

                                    style={{

                                        marginLeft: "10px",

                                    }}

                                >

                                    Twitter

                                </span>

                            </i>

                        </FooterLink>

                        <FooterLink href="#">

                            <i className="fab fa-youtube">

                                <span

                                    style={{

                                        marginLeft: "10px",

                                    }}

                                >

                                    Youtube

                                </span>

                            </i>

                        </FooterLink>

                    </Column>

                </Row>
            </FooterContainer>

        </Box>

    );
};

export default Footer;