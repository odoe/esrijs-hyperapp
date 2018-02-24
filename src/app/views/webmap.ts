import {h} from "hyperapp";

import { Actions, State } from "../interfaces";

export const webmap = (state: State, actions: Actions) =>
  h("webmap",
    {
      oncreate: (element: HTMLDivElement) => {
        actions.addMapView(element);
      }
    },
    []
  );
