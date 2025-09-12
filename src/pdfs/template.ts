
export const setTemplatePdf: SetTemplatePdf[] = [
  {
    colorPrimary: '#4E4E4E',
    fontSize: 7.5,
    layoutTable: {
      defaultBorder: false,
      hLineWidth: () => 0,
      vLineWidth: () => 0,
      paddingTop: () => 0,
      paddingBottom: () => 0,
    },
    fontStyleTh: 'AP'
  }
];

export interface SetTemplatePdf {
  colorPrimary?: string,

  fontSize: number,

  layoutTable: any,

  fontStyleTh: string,
}
