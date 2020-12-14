export interface IcanvasState {
  canvas: Array<IcanvasForm>;
  canvasList: Array<Object>;
}

export interface IcanvasForm {
  id: number;
  label: string;
  keyName: string;
  value: any;
  formType: string;
}

export class CanvasState implements IcanvasState {
  canvas = [
    {
      id: 1,
      label: "テキスト",
      keyName: "text",
      value: "",
      formType: "TextField",
    },
    {
      id: 2,
      label: "フォントサイズ",
      keyName: "fontSize",
      value: NaN,
      formType: "NumberField",
    },
    {
      id: 3,
      label: "色",
      keyName: "color",
      value: "",
      formType: "TextField",
    },
    {
      id: 4,
      label: "背景色",
      keyName: "backgroundColor",
      value: "",
      formType: "TextField",
    },
  ];
  canvasList = [];
}
