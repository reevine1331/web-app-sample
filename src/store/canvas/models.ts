export interface IcanvasState {
  canvas: Object;
  canvasList: Array<Object>;
}

export class CanvasState implements IcanvasState {
  canvas = {
    backgrounColor: ""
  };
  canvasList = [];
}
