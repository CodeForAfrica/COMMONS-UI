import React, { useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";

import { Showcase } from "@commons-ui/core";


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

storiesOf("COMMONS UI|Component", module)
  .add('ShowCase', () => (
      show()
  ))
  .add('Featured Research', () => (
    <div>
    </div>
  ))
