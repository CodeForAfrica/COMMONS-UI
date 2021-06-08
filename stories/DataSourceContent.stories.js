import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  DescriptionOutlined as DescriptionIcon,
  StorageOutlined as StorageIcon,
} from "@material-ui/icons";
import React from "react";

import { DataSourceContent } from "@/commons-ui/core";

export default {
  title: "Core/Components/DataSourceContent",
  argTypes: {
    datasets: {
      control: {
        type: "object",
      },
    },
    documents: {
      control: {
        type: "object",
      },
    },
  },
};

const Template = ({ datasets, documents, ...args }) => {
  const classes = makeStyles(() => ({
    section: {
      margin: "0 auto",
      width: "90%",
    },
    datasetsLink: {
      marginTop: "2rem",
    },
    datasetsIcon: {
      marginTop: "2rem",
    },
    documentLink: {
      marginTop: "2rem",
    },
    documentIcon: {
      marginTop: "2rem",
    },
  }))();

  return (
    <Grid
      {...args}
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={8}
    >
      <Grid item xs={6}>
        <DataSourceContent
          datasource={{
            ...datasets,
            icon: <StorageIcon fontSize="large" />,
          }}
          classes={{
            section: classes.section,
            icon: classes.datasetsIcon,
            link: classes.datasetsLink,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <DataSourceContent
          datasource={{
            ...documents,
            icon: <DescriptionIcon fontSize="large" />,
          }}
          classes={{
            section: classes.section,
            link: classes.documentsLink,
            icon: classes.documentsLink,
          }}
        />
      </Grid>
    </Grid>
  );
};

export const Default = Template.bind({});

Default.args = {
  datasets: {
    contentType: "Datasets",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  documents: {
    contentType: "Documents",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};
