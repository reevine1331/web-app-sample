interface Ihometable {
 label: string
 key: string
 width: number
 visible?: boolean
}

export const HOME_LIST: Ihometable[] = [
 {
  label: 'テキスト',
  key: 'text',
  width: 25,
  visible: true,
 },
 {
  label: 'フォントサイズ',
  key: 'fontSize',
  width: 25,
  visible: true,
 },
 {
  label: '色',
  key: 'color',
  width: 25,
  visible: true,
 },
 {
  label: '背景色',
  key: 'backgroundColor',
  width: 25,
  visible: true,
 },
]
