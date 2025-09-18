
export const setTemplatePdf: SetTemplatePdf[] = [
  {
    colorPrimary: '#4E4E4E',
    fontSize: 7.5,
    layoutTableEmpty: {
      defaultBorder: false,
      hLineWidth: () => 0,
      vLineWidth: () => 0,
      paddingLeft: () => 0,
      paddingRight: () => 0,
      paddingTop: () => 0,
      paddingBottom: () => 0,
    },
    layoutTableBorder: {
      hLineWidth: () => 0,
      // vLineWidth: () => 0.1, // เอาไว้ test ดู ช่อง column นะจ๊ะ
      vLineWidth: () => 0,
      paddingLeft: () => 2,
      paddingRight: () => 2,
      paddingTop: () => 0,
      paddingBottom: () => 0,
    },
    fontStyleTh: 'AP'
  }
];

export interface SetTemplatePdf {
  colorPrimary?: string,

  fontSize: number,

  layoutTableEmpty: any,
  layoutTableBorder: any,

  fontStyleTh: string,
}
