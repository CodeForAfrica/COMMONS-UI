import React, { useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";

import Showcase from "@commons-ui/showcase";


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
  return <Showcase
    stories={posts}
    title="Showcase"
    description="View and explore how we visualise Kenya’s budget data to show how much money each county has received from the national government, and how the money is allocated and utilized based on each county’spriorities"
  />
}

storiesOf("COMMONS UI|ShowCase", module)
  .add("ShowCase List", () => (
      show()
  ));
