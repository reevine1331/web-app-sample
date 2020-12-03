export interface IcanvasState {
  canvas: object;
  canvasList: Array<Object>;
}

export class CanvasState implements IcanvasState {
  canvas = {
    backgrounColor: ""
  };
  canvasList = [];
}
