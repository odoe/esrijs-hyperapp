import {h} from "hyperapp";

import { Actions, State } from "../interfaces";

export const filter = (state: State, actions: Actions) =>
  h("nav",
    {
      class: "footer-item"
    },
    [
      h("button",
        {
          class: "btn modifier-class btn-clear btn-grouped",
          onclick: () => actions.filterScene("1915")
        },
        [
          "Before 1915"
        ]
      ),
      h("button",
        {
          class: "btn modifier-class btn-clear btn-grouped",
          onclick: () => actions.filterScene("2015")
        },
        [
          "After 2015"
        ]
      ),
      h("button",
        {
          class: "btn modifier-class btn-clear btn-grouped",
          onclick: () => actions.filterScene("all")
        },
        [
          "Clear filter"
        ]
      )
    ]
  );
