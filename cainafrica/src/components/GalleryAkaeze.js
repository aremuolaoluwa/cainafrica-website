import React from "react";
import styled from "styled-components";
import Toolbar from "./Toolbar/Toolbar.js";
import { TopImage, TextWrapper, TopHeaderText } from "./StyledComponents.js";
import PropTypes from "prop-types";
import Gallery from "react-grid-gallery";
import GalleryHeader3 from "../images/Gallery/GalleryHeader3.jpg";
import ASR0 from "../images/ProjectsData/AKAEZE summer program.jpg";
import ASR1 from "../images/Gallery/AKAEZE PROGRAM/1 (11).jpg";
import ASR2 from "../images/Gallery/AKAEZE PROGRAM/A (14).jpg";
import ASR3 from "../images/Gallery/AKAEZE PROGRAM/A (1).jpg";
import ASR4 from "../images/Gallery/AKAEZE PROGRAM/A (2).jpg";
import ASR5 from "../images/Gallery/AKAEZE PROGRAM/A (3).jpg";
import ASR8 from "../images/Gallery/AKAEZE PROGRAM/A (6).jpg";
import ASR10 from "../images/Gallery/AKAEZE PROGRAM/A (8).jpg";
import ASR11 from "../images/Gallery/AKAEZE PROGRAM/A (9).jpg";
import ASR12 from "../images/Gallery/AKAEZE PROGRAM/A (10).jpg";
import ASR13 from "../images/Gallery/AKAEZE PROGRAM/A (11).jpg";
import ASR14 from "../images/Gallery/AKAEZE PROGRAM/A (12).jpg";

const PhotoBox = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  display: block;
  minheight: 1rem;
  width: 80%;
  //border:1px solid #ddd;
  border: 0.15rem solid #d8aa35;
  border-radius: 1rem;
  overflow: auto;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

class Demo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
    };
  }

  setCustomTags(i) {
    return i.tags.map((t) => {
      return (
        <div key={t.value} style={customTagStyle}>
          {t.title}
        </div>
      );
    });
  }

  render() {
    var images = this.state.images.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
          {i.hasOwnProperty("tags") && this.setCustomTags(i)}
        </div>
      );
      return i;
    });
    return (
      <div>
        <TopImage style={{ backgroundImage: `url(${GalleryHeader3})` }}>
          <Toolbar drawerClickHandler={this.props.drawerToggleClickHandler} />
          {this.props.sideDrawer}
          <TextWrapper>
            <TopHeaderText>Akaeze Summer Reading Program</TopHeaderText>
          </TextWrapper>
        </TopImage>

        <PhotoBox>
          <Gallery images={images} enableImageSelection={false} />
        </PhotoBox>
      </div>
    );
  }
}

Demo4.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%",
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px",
};

Demo4.defaultProps = {
  images: [
    {
      src: `${ASR0}`,
      thumbnail: `${ASR0}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${ASR1}`,
      thumbnail: `${ASR1}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${ASR2}`,
      thumbnail: `${ASR2}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${ASR3}`,
      thumbnail: `${ASR3}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${ASR4}`,
      thumbnail: `${ASR4}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${ASR5}`,
      thumbnail: `${ASR5}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },

    {
      src: `${ASR8}`,
      thumbnail: `${ASR8}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },

    {
      src: `${ASR10}`,
      thumbnail: `${ASR10}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${ASR11}`,
      thumbnail: `${ASR11}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${ASR12}`,
      thumbnail: `${ASR12}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${ASR13}`,
      thumbnail: `${ASR13}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${ASR14}`,
      thumbnail: `${ASR14}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
  ],
};

export default Demo4;
