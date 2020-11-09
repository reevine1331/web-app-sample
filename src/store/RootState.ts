import { App } from "./app/models/App";
import { IcommonState } from "./common/models";

export interface RootState {
  app: App;
  common: IcommonState;
}
