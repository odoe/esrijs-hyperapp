export const renderer = {
  type: "simple",
  symbol: {
    type: "mesh-3d"
  },
  visualVariables: [{
    type: "color",
    field: "CNSTRCT_YR",
    legendOptions: {
      title: "Construction year"
    },
    stops: [
    {
      value: 1915,
      color: "#FBE789",
      label: "before 1915"
    },
    {
      value: 2015,
      color: "#1B90A7",
      label: "after 2015"
    }]
  }]
};
