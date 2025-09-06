import { setTemplatePdf } from "./template";
export const leftpage = {
  text: 'leftpage'
}

export const rightpage = {
  text: 'rightpage'
}


export const content = [
  {
			alignment: 'justify',
			columns: [
				 leftpage,
				rightpage
			]
		}

  ]

export function getEQReviewForm(data: any) {
  let setting = setTemplatePdf[0];
  var documentForm = data;
  console.log('documentForm: ', documentForm);
  return {
    pageSize:  'A4', 
    pageOrientation: 'landscape',
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

