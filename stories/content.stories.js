import { storiesOf } from "@storybook/react";
import React from "react";
import { ProfileCarousel } from "@commons-ui/core";

storiesOf("COMMONS UI|Content|Profile Carousel", module).add("Default", () => {
  const profiles = [
    {
      name: "William Ruto",
      title: "Deputy President",
      image: {
        url:
          "https://dashboard.takwimu.africa/wp-content/uploads/2020/01/will_ruto.jpg",
      },
    },
  ];
  return <ProfileCarousel profiles={profiles} />;
});
