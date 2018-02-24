import {h} from "hyperapp";

import { footer } from "./footer";
import { webmap } from "./webmap";

import { Actions, State } from "../interfaces";

export const main = (state: State, actions: Actions) =>
  h("main",
    {
      class: "main"
    },
    [
      webmap(state, actions),
      footer(state, actions)
    ]
  );
