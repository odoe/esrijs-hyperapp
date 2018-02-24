import {h} from "hyperapp";

import { filter } from "./filter";

import { Actions, State } from "../interfaces";

export const footer = (state: State, actions: Actions) =>
  h("footer",
    {
      class: "footer"
    },
    [
      h("span",
        {
          class: "title footer-item"
        },
        ["ArcGIS API for JavaScript Hyperapp"]
      ),
      filter(state, actions)
    ]
  );
