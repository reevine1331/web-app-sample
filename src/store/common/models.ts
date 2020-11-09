export interface IcommonState {
  videoId: string;
  referenceVideoId: string;
  lightMode: boolean;
  fullScreen: boolean;
}

export class CommonState implements IcommonState {
  videoId = "";
  referenceVideoId = "";
  lightMode = false;
  fullScreen = false;
}
