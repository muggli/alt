import { TreeNode } from '@app/files/file.tree.data';

export const Lesson03: TreeNode =
  {
    name: 'Lesson 03', type: 'lesson', children: [
      {
        name: '3-1', type: 'chapter', children: [
          {
            name: 'Bingo', type: 'folder', children: [
              {
                name: 'NC3.L03.01.Bingo.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Board Game (Calvin and Hobbes)', type: 'folder', children: [
              {
                name: 'NC3.L03.01.BoardGameCardsOption1.doc', type: 'fileWord'
              },
              {
                name: 'NC3.L03.01.BoardGameCardsOption2.docx', type: 'fileWord'
              }
            ]
          }
        ]
      },
      {
        name: 'Speak', type: 'chapter', children: [
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC3.L03.UseSpeak.Worksheet.No13ALT.pdf', type: 'filePdf'
              }
            ]
          }
        ]
      },
      {
        name: 'Lesson Overview', type: 'chapter', children: [
          {
            name: 'Survival Game', type: 'folder', children: [
              {
                name: 'NC3.L03.Review.Survival.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Bingo', type: 'folder', children: [
              {
                name: 'NC3.L03.Review.Bingo.docx', type: 'fileWord'
              }
            ]
          }
        ]
      }
    ]
  }
;