import { TreeNode } from '@app/files/file.tree.data';
import { faFilePdf, faFileWord, faFileImage } from '@fortawesome/free-regular-svg-icons';

export const JhsNc1Lesson01: TreeNode =
  {
    name: 'Lesson 01', type: 'lesson', children: [
      {
        name: '1-1', type: 'chapter', children: [
          {
            name: 'Interview Activity', type: 'folder', children: [
              {
                name: 'NC1.L01.01.ActivityInterview.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Quiz', type: 'folder', children: [
              {
                name: 'NC1.L01.01.GreetingsTest.pdf', type: 'file', svgIcon: faFilePdf
              }
            ]
          }
        ]
      },
      {
        name: '1-2', type: 'chapter', children: [
          {
            name: 'Quiz', type: 'folder', children: [
              {
                name: 'NC1.L01.02.WordTest.pdf', type: 'file', svgIcon: faFilePdf
              }
            ]
          }
        ]
      },
      {
        name: '1-3', type: 'chapter', children: [
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L01.03.HowAreYouWS.JPG', type: 'file', svgIcon: faFileImage
              },
              {
                name: 'NC1.L01.03.Worksheet.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          }
        ]
      },
      {
        name: 'Words and Sounds 1', type: 'chapter', children: [
          {
            name: 'Battleship', type: 'folder', children: [
              {
                name: 'NC1.L01.WordsAndSounds.Battleship.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Card Grab', type: 'folder', children: [
              {
                name: 'NC1.L01.WordsAndSounds.CardGrab.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Number Challenge', type: 'folder', children: [
              {
                name: 'NC1.L01.WordsAndSounds.NumberChallenge1.docx', type: 'file', svgIcon: faFileWord
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberChallenge2.docx', type: 'file', svgIcon: faFileWord
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberLizard1.pdf', type: 'file', svgIcon: faFilePdf
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberLizard2.pdf', type: 'file', svgIcon: faFilePdf
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberM.pdf', type: 'file', svgIcon: faFilePdf
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberPenguin1.pdf', type: 'file', svgIcon: faFilePdf
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberPenguin2.pdf', type: 'file', svgIcon: faFilePdf
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L01.WordsAndSounds.TelephoneWS.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          }
        ]
      },
      {
        name: 'Lesson Review', type: 'chapter', children: [
          {
            name: 'Jeopardy', type: 'folder', children: [
              {
                name: 'NC1.L01.Review.Jeopardy.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          }
        ]
      }
    ],
  }
;