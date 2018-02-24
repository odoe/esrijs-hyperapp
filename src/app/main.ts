import { app } from "hyperapp";

import { actions } from "./actions/app";
import { state  } from "./state/app";
import { main } from "./views/main";


app(state, actions, main, document.body);

