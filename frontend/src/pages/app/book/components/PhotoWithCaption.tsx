import styled from "styled-components";

// Define the types for the props
interface PhotoWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}

// Styled component for the container
const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

// Styled component for the image
const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Styled component for the caption
const Caption = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: var(--white);
`;

// The main component
const PhotoWithCaption: React.FC<PhotoWithCaptionProps> = ({
  src,
  alt,
  caption,
}) => {
  return (
    <PhotoContainer>
      <StyledImage src={src} alt={alt} />
      <Caption>{caption}</Caption>
    </PhotoContainer>
  );
};

export default PhotoWithCaption;
