import { TreeNode } from '@app/files/file.tree.data';
import { faFilePdf, faFileWord, faFileImage } from '@fortawesome/free-regular-svg-icons';

export const JhsNc1Lesson05: TreeNode =
  {
    name: 'Lesson 05', type: 'lesson', children: [
      {
        name: '5-1', type: 'chapter', children: [
          {
            name: 'Bingo', type: 'folder', children: [
              {
                name: 'NC1.L05.01.Bingo.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Interview Card Game', type: 'folder', children: [
              {
                name: 'NC1.L05.01.InterviewCardGame.doc', type: 'file', svgIcon: faFileWord
              },
              {
                name: 'NC1.L05.01.InterviewSheetV1.JPG', type: 'file', svgIcon: faFileImage
              },
              {
                name: 'NC1.L05.01.InterviewSheetV2.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          },
          {
            name: 'Who is it? (Game)', type: 'folder', children: [
              {
                name: 'NC1.L05.01.WhoIsItPictures.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L05.01.Worksheet.pdf', type: 'file', svgIcon: faFilePdf
              }
            ]
          }
        ]
      },
      {
        name: '5-2', type: 'chapter', children: [
          {
            name: 'Card Grab, Memory', type: 'folder', children: [
              {
                name: 'NC1.L05.02.Cards.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Guess Who (Game)', type: 'folder', children: [
              {
                name: 'NC1.L05.02.GuessWho.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Jeopardy', type: 'folder', children: [
              {
                name: 'NC1.L05.02.Jeopardy.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L05.02.Worksheet.pdf', type: 'file', svgIcon: faFilePdf
              }
            ]
          }
        ]
      },
      {
        name: 'Words and Sounds 5', type: 'chapter', children: [
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L05.WordsAndSounds.WordTest.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          }
        ]
      },
      {
        name: 'Lets Talk 5', type: 'chapter', children: [
          {
            name: 'Whose is this? (Cups)', type: 'folder', children: [
              {
                name: 'NC1.L05.Talking.WorksheetCups.pdf', type: 'file', svgIcon: faFilePdf
              }
            ]
          },
          {
            name: 'Whose is this? (Things)', type: 'folder', children: [
              {
                name: 'NC1.L05.Talking.WhoseIsThisExamples.docx', type: 'file', svgIcon: faFileWord
              },
              {
                name: 'NC1.L05.Talking.WhoseIsThisGame.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Whose is this? (Worksheet)', type: 'folder', children: [
              {
                name: 'NC1.L05.Talking.WorksheetReview.pdf', type: 'file', svgIcon: faFilePdf
              }
            ]
          }
        ]
      },
      {
        name: 'Lesson Overview', type: 'chapter', children: [
          {
            name: 'Jeopardy', type: 'folder', children: [
              {
                name: 'NC1.L05.Review.Jeopardy.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          }
        ]
      }
    ]
  }
;