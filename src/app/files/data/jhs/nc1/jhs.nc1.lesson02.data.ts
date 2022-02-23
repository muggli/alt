import { TreeNode } from '@app/files/file.tree.data';
import { faFilePdf, faFileWord, faFileImage } from '@fortawesome/free-regular-svg-icons';

export const JhsNc1Lesson02: TreeNode =
  {
    name: 'Lesson 02', type: 'lesson', children: [
      {
        name: '2-1', type: 'chapter', children: [
          {
            name: 'Line Game', type: 'folder', children: [
              {
                name: 'NC1.L02.01.LineGame.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          }
        ]
      },
      {
        name: '2-2', type: 'chapter', children: [
          {
            name: 'Guessing Game', type: 'folder', children: [
              {
                name: 'NC1.L02.02.GuessingGame.docx', type: 'file', svgIcon: faFileWord
              },
              {
                name: 'NC1.L02.02.GuessingGamePictures.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L02.02.WhatsThisWS.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          }
        ]
      },
      {
        name: '2-3', type: 'chapter', children: [
          {
            name: '3-Hint Quiz', type: 'folder', children: [
              {
                name: 'NC1.L02.03.ThreeHintQuizExample.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: '"Who is it?" Game', type: 'folder', children: [
              {
                name: 'NC1.L02.03.WhoIsIt.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L02.03.GoodAtWS.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          }
        ]
      },
      {
        name: 'Words and Sounds 2', type: 'chapter', children: [
          {
            name: 'Bingo', type: 'folder', children: [
              {
                name: 'NC1.L02.WordsAndSounds.Bingo.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Card Grab, Memory', type: 'folder', children: [
              {
                name: 'NC1.L02.WordsAndSounds.SubjectCards.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Quiz', type: 'folder', children: [
              {
                name: 'NC1.L02.WordsAndSounds.WordTest.pdf', type: 'file', svgIcon: faFilePdf
              }
            ]
          },
          {
            name: 'Scramble', type: 'folder', children: [
              {
                name: 'NC1.L02.WordsAndSounds.Scramble.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L02.WordsAndSounds.Worksheet.JPG', type: 'file', svgIcon: faFileImage
              },
              {
                name: 'NC1.L02.WordsAndSounds.WorksheetAnswers.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          }
        ]
      },
      {
        name: 'Lets Talk 2', type: 'chapter', children: [
          {
            name: 'Card Grab, Memory', type: 'folder', children: [
              {
                name: 'NC1.L02.Talking.Cards.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          }
        ]
      },
    ]
  }
;