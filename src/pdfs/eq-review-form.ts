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
        lineWidth: 0.5,
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
        lineWidth: 0.5,
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
      hLineStyle: function () {
        return { dash: { length: 1, space: 1 } }; // เส้นประ
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
    layoutFormDescription(result[1], ['auto', '*', 'auto', '*', 'auto', '*']),
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

function genarateAnswers(data, maxCol?, part2Questions?, CRMInterface?) {
  let maxColumnsPerRow = maxCol || 4; // จำนวน column สูงสุดต่อ row
  let maxColumnWidth = 150; // ความกว้างสูงสุดต่อ column
  let occupationContent = [];
  let currentRow = [];

  data?.Answers?.forEach((m, i) => {
    const approxWidth = 15 + m.AnswerText.length * 6; // ประมาณความกว้าง

    let widthCol = ['auto', '*']
    let body = [checkbox(), m.AnswerText]
    let layout: any = 'noBorders'
    if (m.AnswerType == 2) {
      let answerOther = []
      answerOther.push(textLabel(m.AnswerText, null, [0, 0, 0, -4]))
      answerOther.push(borderBottom())
      body = [checkbox(2, -5), layoutFormDescription(answerOther, ['auto', '*'], [-5, -2, 0, 0])]
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

    if (approxWidth > maxColumnWidth) {
      col["colSpan"] = maxColumnsPerRow - currentRow.length;
      currentRow.push(col);
      while (currentRow.length < maxColumnsPerRow) currentRow.push({}); // เติมช่องว่างสำหรับ colSpan

      occupationContent.push({
        table: {
          widths: Array(maxColumnsPerRow).fill('*'),
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
            widths: Array(maxColumnsPerRow).fill('*'),
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
        widths: Array(maxColumnsPerRow).fill('*'), body: [currentRow]
      },
      layout: {
        defaultBorder: false,
        hLineWidth: () => 0,
        vLineWidth: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      }
    });
  }

  return occupationContent
}

function questionSectionAge(collection) {
  let part2 = collection?.find(f => f.PartNo === '2');

  let age = part2?.Questions?.find(f => f.CRMInterface === 'age')
  return [
    questionSectionHeader("1. " + age.QuestionTitle),
    layoutFormDescription([borderBottom(null, [10, 7, 0, 0])], [50])
  ]
}
function questionSectionMedia(collection) {
  let part4 = collection?.find(f => f.PartNo === '4');

  let csseen_media = part4?.Questions?.find(f => f.CRMInterface === 'csseen_media')
  const words = csseen_media.QuestionTitle.split("(");
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

  let media = part4?.Questions?.find(f => f.CRMInterface === 'online_media')
  let dataContent = genarateAnswers(media, null, part4?.Questions, 'online_media')
  return [
    questionSectionHeader([
      {
        text: "10. สื่ออื่นๆที่ท่าพบเห็น",      // ข้อความ
        color: 'white',        // สีตัวอักษร
        fillColor: '#186771',     // สีพื้นหลัง
        bold: true,            // ตัวหนา (ถ้าต้องการ )
        margin: [10, -2, 0, -2]  // ใส่ระยะขอบบนล่าง
      },
      {
        text: " นอกจากข้อ 9 (ตอบได้มากกว่า 1 ข้อ)",      // ข้อความ
        color: '#FFFF00',        // สีตัวอักษร
        fillColor: '#186771',     // สีพื้นหลัง
        bold: true,            // ตัวหนา (ถ้าต้องการ )
        margin: [10, -2, 0, -2]  // ใส่ระยะขอบบนล่าง
      }
    ]),
    dataContent
  ]
}

function questionSection(collection, no, CRMInterface, PartNo) {
  let part2 = collection?.find(f => f.PartNo === PartNo);
  let data = part2?.Questions?.find(f => f.CRMInterface === CRMInterface)


  let dataContent = genarateAnswers(data, null, part2?.Questions, CRMInterface)


  return [
    questionSectionHeader(no + ". " + data.QuestionTitle),
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


function layout(data) {
  let items = content(data)

  let half = Math.ceil(items.length / 2) + 1;

  return [
    {
      columns: [
        { stack: items.slice(0, half) },
        { stack: items.slice(half) }
      ],
      columnGap: 15
    }
  ];
}

export function getEQReviewForm(data: any) {
  let setting = setTemplatePdf[0];
  var documentForm = data;
  return {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [20, 10, 20, 10],
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
    // background: bg,
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
