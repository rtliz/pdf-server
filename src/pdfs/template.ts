
export const setTemplatePdf: SetTemplatePdf[] = [
  {
    colorPrimary: '#4E4E4E',
    fontColorHeader: '#000',

    fontSize: 7.5,// default
    fontSizeHeader: 14,
    fontSizeHeader1: 11,

    boldHeader: true,
    boldHeader1: true,

    tableFill: '#e38844',
    tableBorder: '#e38844',

    fontStyleTh: 'AP'
  }
];

export interface SetTemplatePdf {
  colorPrimary?: string,
  fontColorHeader: string,

  fontSize: number,// default
  fontSizeHeader: number,
  fontSizeHeader1: number,

  boldHeader: boolean,// default
  boldHeader1: boolean,

  tableFill: string,
  tableBorder: string,

  fontStyleTh: string,
}
