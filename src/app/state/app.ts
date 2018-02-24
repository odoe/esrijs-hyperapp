import SceneLayer = require("esri/layers/SceneLayer");
import EsriMap = require("esri/Map");
import SceneView = require("esri/views/SceneView");
import Legend = require("esri/widgets/Legend");

import { renderer } from "./config";

import { State } from "../interfaces";

const sceneLayer = new SceneLayer({
  portalItem: {
    id: "6fce72d1a3df4b309a317f1e2faae05e"
  },
  title: "New York City buildings",
  renderer: renderer as any
});

export const state: State = {
  webmap: new EsriMap({
    basemap: {
      portalItem: {
        id: "4f2e99ba65e34bb8af49733d9778fb8e"
      }
    },
    ground: "world-elevation",
    layers: [sceneLayer]
  }),
  view: new SceneView({
    camera: {
      position: {
        x: -8241124,
        y: 4968029,
        z: 580,
        spatialReference: 3857
      },
      heading: 58,
      tilt: 86
    } as any
  }),
  scene: sceneLayer
}

state.view.map = state.webmap;

const legend = new Legend({
  view: state.view
});

state.view.ui.add(legend, "bottom-right");
