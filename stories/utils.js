import React, { useEffect, useState } from "react";

export function getProfiles() {
  return [
    {
      id: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url:
          "https://dashboard.takwimu.africa/wp-content/uploads/2020/01/will_ruto.jpg",
      },
      name: "William Ruto",
      title: "Deputy President",
    },
    {
      id: 2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url:
          "https://dashboard.takwimu.africa/wp-content/uploads/2020/01/will_ruto.jpg",
      },
      name: "William Ruto",
      title: "Deputy President",
    },
    {
      id: 3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url:
          "https://dashboard.takwimu.africa/wp-content/uploads/2020/01/will_ruto.jpg",
      },
      name: "William Ruto",
      title: "Deputy President",
    },
    {
      id: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url:
          "https://dashboard.takwimu.africa/wp-content/uploads/2020/01/will_ruto.jpg",
      },
      name: "William Ruto",
      title: "Deputy President",
    },
    {
      id: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url:
          "https://dashboard.takwimu.africa/wp-content/uploads/2020/01/will_ruto.jpg",
      },
      name: "William Ruto",
      title: "Deputy President",
    },
    {
      id: 6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url:
          "https://dashboard.takwimu.africa/wp-content/uploads/2020/01/will_ruto.jpg",
      },
      name: "William Ruto",
      title: "Deputy President",
    },
  ];
}

export function fromTimestamp(timestamp) {
  return new Date(timestamp).toLocaleString("en-GB", {
    year: "numeric",
    day: "2-digit",
    month: "short",
  });
}

export function useStories(url) {
  const urlJson = `https://corsio.devops.codeforafrica.org/?${url}?format=json`;
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function fetchStories() {
      const response = await fetch(urlJson);
      const jsonClean = await (await response.text()).replace(
        "])}while(1);</x>",
        ""
      );
      const json = await JSON.parse(jsonClean);
      const streamItems = await json.payload.streamItems;
      const foundStories = await streamItems.map(
        (item) => json.payload.references.Post[item.postPreview.postId]
      );
      setStories(foundStories);
    }
    fetchStories();
  }, [urlJson, setStories]);

  return stories;
}
