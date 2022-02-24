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
                name: 'NC1.L01.01.ActivityInterview.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Quiz', type: 'folder', children: [
              {
                name: 'NC1.L01.01.GreetingsTest.pdf', type: 'filePdf'
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
                name: 'NC1.L01.02.WordTest.pdf', type: 'filePdf'
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
                name: 'NC1.L01.03.HowAreYouWS.JPG', type: 'fileImage'
              },
              {
                name: 'NC1.L01.03.Worksheet.docx', type: 'fileWord'
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
                name: 'NC1.L01.WordsAndSounds.Battleship.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Card Grab', type: 'folder', children: [
              {
                name: 'NC1.L01.WordsAndSounds.CardGrab.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Number Challenge', type: 'folder', children: [
              {
                name: 'NC1.L01.WordsAndSounds.NumberChallenge1.docx', type: 'fileWord'
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberChallenge2.docx', type: 'fileWord'
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberLizard1.pdf', type: 'filePdf'
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberLizard2.pdf', type: 'filePdf'
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberM.pdf', type: 'filePdf'
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberPenguin1.pdf', type: 'filePdf'
              },
              {
                name: 'NC1.L01.WordsAndSounds.NumberPenguin2.pdf', type: 'filePdf'
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L01.WordsAndSounds.TelephoneWS.JPG', type: 'fileImage'
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
                name: 'NC1.L01.Review.Jeopardy.docx', type: 'fileWord'
              }
            ]
          }
        ]
      }
    ],
  }
;