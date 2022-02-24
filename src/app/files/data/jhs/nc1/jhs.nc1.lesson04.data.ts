import { TreeNode } from '@app/files/file.tree.data';
import { faFilePdf, faFileWord, faFileImage } from '@fortawesome/free-regular-svg-icons';

export const JhsNc1Lesson04: TreeNode =
  {
    name: 'Lesson 04', type: 'lesson', children: [
      {
        name: '4-2', type: 'chapter', children: [
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L04.02.HowManyWS.JPG', type: 'fileImage'
              },
              {
                name: 'NC1.L04.02.Worksheet.pdf', type: 'filePdf'
              }
            ]
          }
        ]
      },
      {
        name: '4-3', type: 'chapter', children: [
          {
            name: 'Bingo', type: 'folder', children: [
              {
                name: 'NC1.L04.03.Bingo.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Card Grab', type: 'folder', children: [
              {
                name: 'NC1.L04.03.CardGrab.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L04.03.Worksheet.pdf', type: 'filePdf'
              }
            ]
          }
        ]
      },
      {
        name: 'Lets Talk 4', type: 'chapter', children: [
          {
            name: 'The Price is Right', type: 'folder', children: [
              {
                name: 'NC1.L04.Talking.PriceIsRightPictures.docx', type: 'fileWord'
              }
            ]
          }
        ]
      },
      {
        name: 'Lesson Overview', type: 'chapter', children: [
          {
            name: 'Word Search', type: 'folder', children: [
              {
                name: 'NC1.L04.Review.WordSearch.docx', type: 'fileWord'
              },
              {
                name: 'NC1.L04.Review.WordSearchAnswers.docx', type: 'fileWord'
              }
            ]
          }
        ]
      }
    ]
  }
;