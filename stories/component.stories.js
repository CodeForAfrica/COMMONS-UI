import React, { useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { CenterDecorator } from './common';
import { makeStyles } from '@material-ui/core';
import plugIcon from './assets/images/icons/group-6.png';
import menuIcon from './assets/images/icons/group-7.png';
import imgHighlight from './assets/images/covid-highlight.png';

import { Showcase, DocumentsAndDatasets } from "@commons-ui/core";


function timeStamp(timestamp) {
  return new Date(timestamp).toLocaleString("en-GB", {
    year: "numeric",
    day: "2-digit",
    month: "short",
  });
}

function useStories(url) {
  const urlJson = `https://corsio.devops.codeforafrica.org/?${url}?format=json`;
  const [reports, setReports] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(urlJson);
      const jsonClean = await (await response.text()).replace(
        '])}while(1);</x>',
        ''
      );
      const json = await JSON.parse(jsonClean);
      const reportStreamItems = await json.payload.streamItems;
      const reportItems = [];
      await reportStreamItems.forEach(function extractReports(
        reportStreamItem
      ) {
        reportItems.push(
          json.payload.references.Post[reportStreamItem.postPreview.postId]
        );
      });
      setReports(reportItems);
    }
    fetchData();
  }, [url, urlJson]);

  return [reports];
}

function show() {
  const [posts] = useStories('https://pesacheck.org/tagged/public-finance');
  posts.forEach(function fixTimestamp(post) {
    post.createdAt = timeStamp(post.createdAt);
    post.virtuals.previewImage.imageId = `https://cdn-images-1.medium.com/max/480/${post.virtuals.previewImage.imageId}`
  });
  console.log(posts[0]);
  return <Showcase
    stories={posts}
    title="Showcase"
    description="View and explore how we visualise Kenya’s budget data to show how much money each county has received from the national government, and how the money is allocated and utilized based on each county’spriorities"
    xs={12}
    cellHeight={320}
    height={370}
    minHeight={20}
  />
}

storiesOf("COMMONS UI|Component/ShowCase", module)
  .add('ShowCase', () => (
      show()
  ));

  storiesOf('COMMONS UI|Component/DocumentsAndDatasets', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => 
  React.createElement(() => {
    const classes = makeStyles(() => ({
      dataWrapper: {
        backgroundColor: '#ccdcff'
      },
      datasetData: {
        backgroundColor: '#b7ceff'
      }
    }))();
    return (
      <div>
      <DocumentsAndDatasets
        title={text('title', 'Featured Research')}
        highlightChildren={<div style={{ width: '100%',
        backgroundImage: `url(${imgHighlight})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',}} />}
        description={text(
          'description', 
          'Get access to the best original scientific and medical research by African experts who understand local context.')}
        documentContent={
          { 
            contentType: 'Document',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            linkTitle: 'LEARN MORE',
            children: <img src={menuIcon} alt="Menu Icon" />
          }
        }
        datasetContent={{
            contentType: 'Dataset',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            linkTitle: 'LEARN MORE',
            children: <img src={plugIcon} alt="Plug Icon" />
        }}
        classes={{
          datasetData: classes.datasetData,
          dataWrapper: classes.dataWrapper,
          imageHighlight: classes.imageHighlight
        }}
      />
      </div>
    );
  }
  ))

