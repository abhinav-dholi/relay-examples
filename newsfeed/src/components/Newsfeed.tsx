import * as React from "react";
import Story from "./Story";

import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    # topStory {
    #   ...StoryFragment
    # }
    topStories {
      id
      ...StoryFragment
    }
  }
`;

export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  // const story = data.topStory;
  const stories = data.topStories;
  return (
    <div className="newsfeed">
      {/* <Story story={story} /> */}
      {stories.map(story => <Story key={story.id} story={story}/>)}
    </div>
  );
}
