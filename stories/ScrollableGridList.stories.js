import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import personImage from "./assets/person_1.png";

import { ScrollableGridList } from "@/commons-ui/core";

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
  title: "Core/Components/ScrollableGridList",
  argTypes: {
    tiles: {
      control: {
        type: "object",
      },
    },
  },
};

const Template = ({ tiles }) => {
  const classes = makeStyles((theme) => ({
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
    scrollBar: {},
  }))();

  return (
    <ScrollableGridList
      xs={2}
      classes={{
        root: classes.root,
        gridList: classes.scrollableGridList,
        scrollBar: classes.scrollBar,
      }}
    >
      <GridList className={classes.gridList} cols={2.5}>
        {tiles.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </ScrollableGridList>
  );
};

export const Default = Template.bind({});

Default.args = {
  tiles: tileData,
};
