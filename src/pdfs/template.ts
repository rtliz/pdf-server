
export const setTemplatePdf: SetTemplatePdf[] = [
  {
    fontColorHeader: '#000',

    fontSize: 10,// default
    fontSizeHeader: 14,
    fontSizeHeader1: 11,

    boldHeader: true,
    boldHeader1: true,

    tableFill: '#e38844',
    tableBorder: '#e38844',

    fontStyleTh: 'THSarabun'
  }
];

export interface SetTemplatePdf {
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
