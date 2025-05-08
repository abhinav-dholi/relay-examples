import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, usePaginationFragment } from "react-relay";
import type { StoryCommentsSectionFragment$key } from "./__generated__/StoryCommentsSectionFragment.graphql";
import Comment from "./Comment";
import LoadMoreCommentsButton from "./LoadMoreCommentsButton";

export type Props = {
  story: StoryCommentsSectionFragment$key;
};

const StoryCommentsSectionFragment = graphql`
  fragment StoryCommentsSectionFragment on Story
  @refetchable(queryName: "StoryCommentsSectionPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  ) {
    comments(after: $cursor, first: $count)
      @connection(key: "StoryCommentsSectionFragment_comments") # key is used when editing the connections contents during mutations
      {
      edges {
        node {
          id
          ...CommentFragment
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export default function StoryCommentsSection({ story }: Props) {
  const {data, loadNext} = usePaginationFragment(StoryCommentsSectionFragment, story)
  const onLoadMore = () => {
    loadNext(3)
  };
  return (
    <div>
      {data.comments.edges.map((edge) => (
        <Comment key={edge.node.id} comment={edge.node} />
      ))}
      {data.comments.pageInfo.hasNextPage && (
        <LoadMoreCommentsButton onClick={onLoadMore} />
      )}
    </div>
  );
}
