/**
 * @generated SignedSource<<020378db6e902e42b986b1d875259e63>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsListRefetchQuery$variables = {
  search?: string | null;
};
export type ContactsListRefetchQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ContactsListFragment">;
  } | null;
};
export type ContactsListRefetchQuery = {
  response: ContactsListRefetchQuery$data;
  variables: ContactsListRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "search"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactsListRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "ContactsListFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContactsListRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "contacts",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isActor"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "altText",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "aa8ec0cae764bcfe1b1c41aaeb02a103",
    "id": null,
    "metadata": {},
    "name": "ContactsListRefetchQuery",
    "operationKind": "query",
    "text": "query ContactsListRefetchQuery(\n  $search: String = \"\"\n) {\n  viewer {\n    ...ContactsListFragment_40zwac\n  }\n}\n\nfragment ContactRowFragment on Actor {\n  __isActor: __typename\n  name\n  profilePicture {\n    ...ImageFragment\n  }\n}\n\nfragment ContactsListFragment_40zwac on Viewer {\n  contacts(search: $search) {\n    __typename\n    id\n    ...ContactRowFragment\n  }\n}\n\nfragment ImageFragment on Image {\n  url\n  altText\n}\n"
  }
};
})();

(node as any).hash = "8a0ee17a7865abda9581e1a626d9f10c";

export default node;
