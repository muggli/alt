import { TreeNode } from '@app/files/file.tree.data';

export const JhsNc2Lesson01: TreeNode =
  {
    name: 'Lesson 01', type: 'lesson', children: [
      {
        name: '1-1', type: 'chapter', children: [
          {
            name: 'Battleship', type: 'folder', children: [
              {
                name: 'NC2.L01.01.Battleship.docx', type: 'fileWord'
              }
            ]
          }
        ]
      },
      {
        name: 'Lets Talk 1', type: 'chapter', children: [
          {
            name: 'Directions', type: 'folder', children: [
              {
                name: 'NC2.L01.Talking.Directions.docx', type: 'fileWord'
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
                name: 'NC2.L01.Review.Jeopardy.docx', type: 'fileWord'
              }
            ]
          }
        ]
      }
    ]
  }
;