import { setTemplatePdf } from "./template";

export const content = [
    { text: 'EQ Review', fontSize: 20, bold: true },
    { text: 'รายละเอียดรีวิว', fontSize: 14 },
    // เพิ่มเนื้อหาอื่น ๆ ตามต้องการ
  ]

export function getEQReviewForm(data: any) {
  let setting = setTemplatePdf[0];
  var documentForm = data;
  console.log('documentForm: ', documentForm);
  return {
    pageSize: 'A4',
    pageMargins: [20, 20, 20, 20],
    info: {
      title: 'EQReviewForm',
      author: 'equestionnaire',
      subject: 'subject of document',
      keywords: 'keywords for document',
      creator: 'AP',
      producer: 'AP'
    },
    userPassword: data.serial,
    ownerPassword: 'P@ssw0rd',
    permissions: {
      printing: 'highResolution', //'lowResolution'
      modifying: false,
      copying: false,
      annotating: true,
      fillingForms: true,
      contentAccessibility: true,
      documentAssembly: true
    },
    // background: bg,
    content: content,
    styles: {
      textlayoutRight: {
        margin: [0, 1, 120, 0],
        color: '#383842',
        fontSize: 16,
      },
      textlayoutLeft: {
        margin: [70, 1, 50, 0],
        color: '#383842',
        fontSize: 16,
      },
      textlayoutRightPermanent: {
        color: '#383842',
        fontSize: 16,
      },
      textlayoutLeftPermanent: {
        margin: [70, 1, 0, 0],
        color: '#383842',
        fontSize: 16,
      }
    },
    defaultStyle: {
      font: setting.fontStyleTh
    },
  }
}

