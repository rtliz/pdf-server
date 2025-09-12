import { Questionnaire } from "../models/Questionnaire";
import { setTemplatePdf } from "./template";

function logoAP() {
  return {
    margin: [0, 1, 0, 1],
    padding: [0, 0, 0, 0],
    table: {
      body: [
        [
          {
            canvas: [
              {
                type: 'line',
                x1: 0, y1: 2,
                x2: 0, y2: 43,
                lineWidth: 1,
                lineColor: '#731f1d'
              }
            ]
          },
          {
            image:
              "data:image/png;base64,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",
            height: 45,
            width: 45,
          }]
      ],
    }, layout: "noBorders",
  }

}
function logoProject(logo) {
  return {
    image: logo,
  };
}
function checkbox(y = 2, x = 0) {
  return {
    canvas: [
      {
        type: 'rect',
        x: x, y: y,
        w: 8, h: 8,
        lineWidth: 0.3,
        lineColor: '#4E4E4E'
      }
    ],
    width: 8
  }
}
function circle() {
  return {
    canvas: [
      {
        type: 'ellipse',
        x: 1.5,
        y: 7,
        r1: 8,
        r2: 8,
        lineWidth: 0.3,
        lineColor: '#4E4E4E'
      }
    ],
    width: 16
  }
}
function borderBottom(color?, margin?) {
  return {
    text: '',
    borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', color],
    border: [false, false, false, true],
    margin: margin || [0, 0, 5, 0]
  }
}

function textLabel(text, color?, margin?) {
  return {
    text: text,
    color: color,
    margin: margin || [0, 0, 0, -6]
  }
}

function layoutFormDescription(body, widths, margin?) {
  return {
    margin: margin || [0, 1, 0, 1],
    padding: [0, 0, 0, 0],
    table: {
      widths: widths,
      body: [
        body
      ],
    },
    layout: {
      defaultBorder: false,
      hLineWidth: () => 1, // ความหนาเส้น
      vLineWidth: () => 1,
      hLineStyle: function () {
        return { dash: { length: 0.2, space: 2 } }; // เส้นประ
      }
    }
  }
}


function headers(data) {
  return {
    table: {
      widths: ["*", 'auto'],
      body: [
        [
          {
            table: {
              body: [
                [
                  logoProject(data.Logo), logoAP(),
                ],
              ],
            },
            layout: "noBorders",
          },
          {
            margin: [0, 18, 0, 0],
            table: {
              body: [
                [
                  {
                    text: "วันที่ ..............................................",
                    alignment: 'right',
                  }
                ],
                [{
                  text: "ชื่อพนักงาน ..............................................",
                  alignment: 'right',
                }]
              ],
            },
            layout: "noBorders",
          }

        ]
      ],
    },
    layout: "noBorders",
  }

}

function formDescription(collection) {
  let part1 = collection?.find(f => f.PartNo === '1');
  let part5 = collection?.find(f => f.PartNo === '5');
  let result = [[], [], [], [], [], []];

  let widthLine0 = ['*'];
  part1?.Questions?.find(f => f.CRMInterface === 'title_name')?.Answers?.forEach(m => {
    result[0].push(checkbox(3));
    result[0].push(textLabel(m.AnswerText, null, [0, 2.8, 0, 0]));
    widthLine0.unshift('auto');
    widthLine0.unshift('auto');
  });



  let resultLine0 = []

  resultLine0.push(textLabel(part1?.Questions?.find(f => f.CRMInterface === 'first_name')?.QuestionTitle))
  resultLine0.push(borderBottom())
  resultLine0.push(textLabel(part1?.Questions?.find(f => f.CRMInterface === 'last_name')?.QuestionTitle))
  resultLine0.push(borderBottom())
  result[0].push(layoutFormDescription(resultLine0, ['auto', '*', 'auto', '*'], [0, 0, -5, 0]));

  let basic_address_no = part5?.Questions?.find(f => f.CRMInterface === 'basic_address_no')
  result[1].push(textLabel(part5?.Questions?.find(f => f.CRMInterface === 'PersonalID')?.QuestionTitle))
  result[1].push(borderBottom())
  result[1].push(textLabel((basic_address_no ? "ที่อยู่ที่ติดต่อได้ " : '') + basic_address_no?.QuestionTitle))
  result[1].push(borderBottom())
  result[1].push(textLabel(part5?.Questions?.find(f => f.CRMInterface === 'Moo')?.QuestionTitle))
  result[1].push(borderBottom())

  result[2].push(textLabel(part5?.Questions?.find(f => f.CRMInterface === 'Soi')?.QuestionTitle))
  result[2].push(borderBottom())
  result[2].push(textLabel(part5?.Questions?.find(f => f.CRMInterface === 'basic_road')?.QuestionTitle))
  result[2].push(borderBottom())
  result[2].push(textLabel(part1?.Questions?.find(f => f.CRMInterface === 'basic_subdistrict')?.QuestionTitle))
  result[2].push(borderBottom())


  result[3].push(textLabel(part1?.Questions?.find(f => f.CRMInterface === 'basic_district')?.QuestionTitle))
  result[3].push(borderBottom())
  result[3].push(textLabel(part1?.Questions?.find(f => f.CRMInterface === 'basic_province')?.QuestionTitle))
  result[3].push(borderBottom())
  result[3].push(textLabel(part1?.Questions?.find(f => f.CRMInterface === 'basic_work_district')?.QuestionTitle))
  result[3].push(borderBottom())


  result[4].push(textLabel(part1?.Questions?.find(f => f.CRMInterface === 'mobile_no')?.QuestionTitle, null, [0, 3.2, 0, 0]))
  result[4].push({
    margins: [0, 3, 0, 0],
    padding: [0, 0, 0, 0],
    table: {
      body: [
        [
          circle(),
          circle(),
          circle(), {
            margin: [-5, 0, 0, 0],
            text: "-"
          },
          circle(),
          circle(),
          circle(),
          {
            margin: [-5, 0, 0, 0],
            text: "-"
          },
          circle(),
          circle(),
          circle(),
          circle()
        ]
      ],
    },
    layout: "noBorders",
  })

  let resultLine4 = []

  resultLine4.push(textLabel(part1?.Questions?.find(f => f.CRMInterface === 'email')?.QuestionTitle, null, [0, 1, 0, -4]))
  resultLine4.push(borderBottom())
  result[4].push(layoutFormDescription(resultLine4, ['auto', '*'], [0, 0, -5, 0]));


  result[5].push(textLabel(part5?.Questions?.find(f => f.CRMInterface === 'OfficeName')?.QuestionTitle, '#B66612'))
  result[5].push(borderBottom('#B66612'))
  result[5].push(textLabel("ประเภทธุรกิจ", '#B66612'))
  result[5].push(borderBottom('#B66612'))
  result[5].push(textLabel(part1?.Questions?.find(f => f.CRMInterface === 'basic_work_district')?.QuestionTitle, '#B66612'))
  result[5].push(borderBottom('#B66612'))


  return [
    layoutFormDescription(result[0], widthLine0),
    layoutFormDescription(result[1], ['auto', '*', 'auto', '*', 'auto', '*'], [0, -5, 0, 0]),
    layoutFormDescription(result[2], ['auto', '*', 'auto', '*', 'auto', '*']),
    layoutFormDescription(result[3], ['auto', '*', 'auto', '*', 'auto', '*']),
    layoutFormDescription(result[4], ['auto', 'auto', '*']),
    layoutFormDescription(result[5], ['auto', '*', 'auto', '*', 'auto', '*'], [0, -4, 0, 5]),
  ]
}

function questionSectionHeader(text, body?) {
  if (body) {
    return {
      margin: [0, 3, 0, 0],
      table: {
        widths: ['*', '*'],
        body: [
          body
        ]
      },
      layout: 'noBorders',
    }
  }
  return {
    margin: [0, 3, 0, 0],
    table: {
      widths: ['*'],
      body: [
        [
          {
            text: text,      // ข้อความ
            color: 'white',        // สีตัวอักษร
            fillColor: '#186771',     // สีพื้นหลัง
            bold: true,            // ตัวหนา (ถ้าต้องการ )
            margin: [10, -2, 0, -2]  // ใส่ระยะขอบบนล่าง
          }
        ]
      ]
    },
    layout: 'noBorders',
  }
}
let setting = setTemplatePdf[0];
const { createCanvas } = require('canvas');
function getTextWidth(text, font = 'AP') {
  const canvas = createCanvas(1, 1);
  const ctx = canvas.getContext('2d');
  ctx.font = setting.fontSize + ' "' + setting.colorPrimary + '"';
  return ctx.measureText(text).width;
}

function genarateAnswers(data, maxCol?, part2Questions?, CRMInterface?) {
  let maxColumnsPerRow = maxCol || 4; // จำนวน column สูงสุดต่อ row
  let maxColumnWidth = 150; // ความกว้างสูงสุดต่อ column
  let occupationContent = [];
  let currentRow = [];

  data?.Answers?.forEach((m, i) => {
    const approxWidth = getTextWidth(m.AnswerText, 'AP');
    console.log('approxWidth: ', m.AnswerText, approxWidth);
    let widthCol = ['auto', '*']
    let body: any = [checkbox(), { text: m.AnswerText, margin: [-2, 0, 0, 0] }]
    let layout: any = 'noBorders'
    if (m.AnswerType == 2) {
      let answerOther = []
      answerOther.push(textLabel(m.AnswerText, null, [0, 0, 0, -4]))
      answerOther.push(borderBottom())
      body = [checkbox(2, -5), layoutFormDescription(answerOther, ['auto', '*'], [-7, -2, 0, 0])]
      layout = {
        defaultBorder: false,
        hLineWidth: () => 0,
        vLineWidth: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
        hLineStyle: function () {
          return { dash: { length: 1, space: 1 } }
        }
      }
    }

    if (CRMInterface == "marital_status" && i == data.Answers.length - 1) {
      let children_numb = part2Questions?.find(f => f.CRMInterface === "children_numb")
      children_numb = { text: m.AnswerText + " " + children_numb?.QuestionTitle + ".........คน" }
      body = [checkbox(2, -5), children_numb]
    }

    const col = {
      table: {
        widths: widthCol,
        body: [body]
      },
      layout: layout
    };

    if (CRMInterface == "marital_status") {

    }
    if (approxWidth > maxColumnWidth) {
      if (m.AnswerText == "เพื่อพักอาศัยเป็นครั้งคราว") {
        col["colSpan"] = 2;
      }
      const currentRowLength = currentRow.length || 3;
      col["colSpan"] = maxColumnsPerRow - currentRow.length;
      currentRow.push(col);
      while (currentRow.length < maxColumnsPerRow) currentRow.push({}); // เติมช่องว่างสำหรับ colSpan

      occupationContent.push({
        table: {
          widths: Array(maxColumnsPerRow).fill(100),
          body: [currentRow],
        },
        layout: {
          defaultBorder: false,
          hLineWidth: () => 0,
          vLineWidth: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        }
      });
      currentRow = [];
    } else {
      if (CRMInterface == "marital_status" && i == data.Answers.length - 1) {
        col["colSpan"] = 2;
      };
      currentRow.push(col);
      if (currentRow.length === maxColumnsPerRow) {
        occupationContent.push({
          padding: [0, 0, 0, 0],
          table: {
            widths: Array(maxColumnsPerRow).fill(100),
            body: [currentRow]
          },
          layout: {
            defaultBorder: false,
            hLineWidth: () => 0,
            vLineWidth: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          }
        });
        currentRow = [];
      }
    }

  });

  if (currentRow.length > 0) {
    while (currentRow.length < maxColumnsPerRow) currentRow.push({});
    occupationContent.push({
      margin: [0, 0, 0, 0],
      padding: [0, 0, 0, 0],
      table: {
        widths: Array(maxColumnsPerRow).fill(100), body: [currentRow]
      },
      layout: {
        defaultBorder: false,
        hLineWidth: () => 0,
        vLineWidth: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
    });
  }

  return occupationContent
}

function questionSectionAge(collection) {
  let part2 = collection?.find(f => f.PartNo === '2');

  let age = part2?.Questions?.find(f => f.CRMInterface === 'age')
  return [
    questionSectionHeader("1. " + age?.QuestionTitle),
    layoutFormDescription([borderBottom(), textLabel("ปี")], [50, 'auto'], [0, 3, 0, 5]),

  ]
}
function questionSectionMedia(collection) {
  let part4 = collection?.find(f => f.PartNo === '4');

  let csseen_media = part4?.Questions?.find(f => f.CRMInterface === 'csseen_media')
  const words = csseen_media?.QuestionTitle.split("(");
  const coloredWords = words.map((word, idx) => ({
    text: (idx == 0 ? '9. ' : '') + (idx === words.length - 1 ? '(' : '') + word,
    color: idx === words.length - 1 ? '#FFFF00' : 'white',
    bold: true,
    fillColor: '#186771',
    margin: [10, -2, 0, -2]
  }));
  let dataContent = genarateAnswers(csseen_media, null, part4?.Questions, 'csseen_media')

  return [
    questionSectionHeader(coloredWords),
    dataContent
  ]
}
function questionSectionMediaOnlineOffline(collection) {
  let part4 = collection?.find(f => f.PartNo === '4');

  let online_media = part4?.Questions?.find(f => f.CRMInterface === 'online_media')
  let offline_media = part4?.Questions?.find(f => f.CRMInterface === 'offline_media')
  let dataContentOnline = genarateAnswers(online_media, null, part4?.Questions, 'online_media')
  let dataContentOffline = genarateAnswers(offline_media, null, part4?.Questions, 'offline_media')
  return [
    questionSectionHeader([
      {
        text: "10. สื่ออื่นๆที่ท่าพบเห็น",
        color: 'white',
        fillColor: '#186771',
        bold: true,
        margin: [10, -2, 0, -2]
      },
      {
        text: " นอกจากข้อ 9 (ตอบได้มากกว่า 1 ข้อ)",
        color: '#FFFF00',
        fillColor: '#186771',
        bold: true,
        margin: [10, -2, 0, -2]
      }
    ]),
    {
      text: "สื่ออื่นๆที่ท่านพบเห็น Online",
      color: '#B66612',
      decoration: "underline",
      margin: [0, 3, 0, 0],
      bold: true,
    },
    dataContentOnline,

    {
      text: "สื่ออื่นๆที่ท่านพบเห็น Offline",
      color: '#B66612',
      decoration: "underline",
      bold: true,
    },
    dataContentOffline

  ]
}

function questionSection(collection, no, CRMInterface, PartNo) {
  let part2 = collection?.find(f => f.PartNo === PartNo);
  let data = part2?.Questions?.find(f => f.CRMInterface === CRMInterface)
  let dataContent = genarateAnswers(data, null, part2?.Questions, CRMInterface)
  return [
    questionSectionHeader(no + ". " + data?.QuestionTitle),
    dataContent
  ]
}

function content(data) {
  let collection = data.Data as Questionnaire;
  return [
    headers(data),
    formDescription(collection),
    questionSectionAge(collection),
    questionSection(collection, 2, "occupation", '2'),
    questionSection(collection, 3, "csincome", '2'),
    questionSection(collection, 4, "family_income", '2'),
    questionSection(collection, 5, "marital_status", '2'),
    questionSection(collection, 6, "objective_considering", '3'),
    questionSection(collection, 7, "housing_characteristics", '3'),
    questionSection(collection, 8, "csbudget", '3'),
    questionSectionMedia(collection),
    questionSectionMediaOnlineOffline(collection),
    questionSection(collection, 11, "visit_route", '4'),
  ];
}

function consentContent(consent) {
  return {
    table: {
      widths: ['auto', '*'],
      body: [
        [{ text: 'ความยินยอมในการเก็บรวบรวมใช้เปิดเผยข้อมูลส่วนบุคคล', colSpan: 2, bold: true }, {}],
        [checkbox(2, -5),

        {
          table: {
            body: [
              [{ text: 'Ads Consent*', color: "#C92028", fontSize: 6 }, { text: consent?.AdsConsentTextTH, fontSize: 6, margin: [-5, 0, 0, 0] }],
            ]
          },
          layout: 'noBorders',
        }],
        [checkbox(2, -5),
        {
          table: {
            widths: [40, '*'],
            body: [
              [{ text: 'BC Consent*', color: "#C92028", fontSize: 6 }, { text: consent?.BCConsentTextTH, fontSize: 6, margin: [-5, 0, 0, 0] }],
            ]
          },
          layout: 'noBorders',
        }],
      ]
    },
    layout: {
      defaultBorder: false,
      hLineWidth: () => 0,
      vLineWidth: () => 0,
      paddingTop: () => 0,
      paddingBottom: () => 0,
    }
  }

}


function layout(data) {
  let items = []
  items = content(data)
  let consent = data.Consent;

  let half = Math.ceil(items.length / 2) + 1;
  let footerLayout = [
    consentContent(consent),
    layoutFormDescription([textLabel("สำหรับเจ้าหน้าที่", '#B66612'), borderBottom('#B66612')], ['auto', '*'], [0, -4, 0, 5]),
  ]
  items.push([...footerLayout])
  return [
    {
      columns: [
        { stack: items.slice(0, half), width: 398 },
        { stack: items.slice(half), width: 398 }
      ],
      columnGap: 15
    },
    {
      "image": `data:image/png;base64,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`,
      width: 50,
      absolutePosition: {
        x: 775,
        y: 565
      },
    },
  ];
}

// function background() {

// }

export function getEQReviewForm(data: any) {
  var documentForm = data;
  return {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [15, 10, 15, 0],
    info: {
      title: "EQReviewForm",
      author: "equestionnaire",
      subject: "subject of document",
      keywords: "keywords for document",
      creator: "AP",
      producer: "AP",
    },
    // userPassword: data.serial,
    ownerPassword: "P@ssw0rd",
    permissions: {
      printing: "highResolution", //'lowResolution'
      modifying: false,
      copying: false,
      annotating: true,
      fillingForms: true,
      contentAccessibility: true,
      documentAssembly: true,
    },
    // background: background(),
    content: layout(documentForm),
    styles: {
    },
    defaultStyle: {
      font: setting.fontStyleTh,
      fontSize: setting.fontSize,
      fontColor: setting.colorPrimary,
    },
  };
}
