import { Actions } from "../interfaces";

const years = {
  "1915": "CNSTRCT_YR < 1915",
  "2015": "CNSTRCT_YR > 2015",
  "all": "1=1"
};

export const actions: Actions = {
  addMapView: element => state => {
    state.view.container = element;
  },
  filterScene: year => state => {
    state.scene.definitionExpression = years[year];
  }
}
