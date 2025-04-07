import { categoryList } from "./categories";
import { countriesData } from "./countriesData";
import { daysFilter } from "./daysFilter";
import {
  connectionsData,
  impressionsData,
  interactionsData,
  visitorsData,
} from "./graphData";
import { dateLabels } from "./dateLables";

export const graphData = {
  Visitors: visitorsData,
  Connections: connectionsData,
  Interactions: interactionsData,
  Impressions: impressionsData,
};

export { categoryList, daysFilter, dateLabels, countriesData };
