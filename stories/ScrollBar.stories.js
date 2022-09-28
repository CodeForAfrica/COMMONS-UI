import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { makeStyles } from 'tss-react/mui';
import React from "react";

import personImage from "./assets/person_1.png";

import { ScrollBar } from "@/commons-ui/core";

import "simplebar/dist/simplebar.min.css";

// Example data for the scrollbar story
const tileData = [
  {
    title: "Example title one",
    img: personImage,
  },
  {
    title: "Example title two",
    img: personImage,
  },
  {
    title: "Example title three",
    img: personImage,
  },
  {
    title: "Example title four",
    img: personImage,
  },
  {
    title: "Example title five",
    img: personImage,
  },
  {
    title: "Another Example title Five",
    img: personImage,
  },
];

export default {
  title: "Core/Components/ScrollBar",
  argTypes: {
    titles: {
      control: {
        type: "object",
      },
    },
  },
};

const Template = ({ tiles }) => {
  const classes = makeStyles()((theme) => ({
    root: {},
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
  }))();

  return (
    <ScrollBar>
      <ImageList className={classes.gridList} cols={5}>
        {tiles.map((tile) => (
          <ImageListItem key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <ImageListItemBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </ScrollBar>
  );
};

export const Default = Template.bind({});

Default.args = {
  tiles: tileData,
};
