import React from "react";
import styled from "styled-components";
import Img from 'gatsby-image';

interface Prop{
  src?: string,
  fluid?: string,
  alt: string,
  height?: number
}

const FullImage = ({src, fluid, alt, height= 30 }:Prop) => {  
  return fluid ? <ImgS fluid={fluid} alt={alt} height={height} /> : <ImgReg src={src} alt={alt} height={height} />
};


const ImgReg = styled.img`
  height: ${props => `${props.height}vh`} ;
  object-fit: cover;
  @media screen and (min-width: 768px){
    height: ${props => `calc(${props.height.toString()}vh * 1.5)`}
      
  }
  @media screen and (min-width: 1440px){
    height: ${props => `calc(${props.height.toString()}vh * 2.5)`}
  }
`

const ImgS = styled(Img)`
  display: grid;
  height: ${props => `${props.height}vh`};
  width: 100%;
  @media screen and (min-width: 768px){
    height: ${props => `calc(${props.height.toString()}vh * 1.5)`}
  }
  @media screen and (min-width: 1440px){
    height: ${props => `calc(${props.height.toString()}vh * 2.5)`}
  }
`;

export default FullImage;
