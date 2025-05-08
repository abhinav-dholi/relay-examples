import * as React from "react";
import Story from "./Story";

import { graphql } from "relay-runtime";
import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`;

const NewsfeedContentsFragment = graphql`
  fragment NewsfeedContentsFragment on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "NewsfeedContentsRefetchQuery") {
    viewer {
      newsfeedStories(after: $cursor, first: $count)
        @connection(key: "NewsfeedContentsFragment_newsfeedStories") {
        edges {
          node {
            id
            ...StoryFragment
          }
        }
      }
    }
  }
`;

export default function Newsfeed() {
  const queryData = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    NewsfeedContentsRefetchQueryType,
    NewsfeedContentsFragment$key
  >(NewsfeedContentsFragment, queryData);
  function onEndReached() {
    loadNext(1);
  }
  const storyEdges = data.viewer.newsfeedStories.edges;
  const stories = data.topStories;
  return (
    <div className="newsfeed">
      {storyEdges.map((storyEdge) => (
        <Story key={storyEdge.node.id} story={storyEdge.node} />
      ))}
      <InfiniteScrollTrigger
        onEndReached={onEndReached}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
      />
    </div>
  );
}
