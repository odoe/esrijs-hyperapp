import { app } from "hyperapp";

import { actions } from "./actions/app";
import { state  } from "./state/app";
import { main } from "./views/main";

import { Actions, State } from "./interfaces";

app<State, Actions>(state, actions, main, document.body);

