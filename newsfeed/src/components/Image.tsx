import * as React from "react";
import { graphql } from "relay-runtime";
import type { ImageFragment$key } from "./__generated__/ImageFragment.graphql";
import { useFragment } from "react-relay";

type Props = {
  image: ImageFragment$key
  width?: number;
  height?: number;
  className?: string;
};

const ImageFragment = graphql`
  fragment ImageFragment on Image
    @argumentDefinitions(
      width: {
        type: "Int",
        defaultValue: null
      }
      height: {
        type: "Int",
        defaultValue: null
      }
    )
  {
    url(
      width: $width,
      height: $height
    )
    altText
  }
`;

export default function Image({
  image,
  width,
  height,
  className,
}: Props): React.ReactElement {
  const data = useFragment(ImageFragment, image);
  if (data == null) {
    return null;
  }
  return (
    <img
      key={data.url}
      src={data.url}
      width={width}
      height={height}
      className={className}
      alt={data.altText}
    />
  );
}
