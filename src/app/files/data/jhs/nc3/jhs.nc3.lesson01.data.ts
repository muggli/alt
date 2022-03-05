import { TreeNode } from '@app/files/file.tree.data';

export const Lesson01: TreeNode =
  {
    name: 'Lesson 01', type: 'lesson', children: [
      {
        name: '1-1', type: 'chapter', children: [
          {
            name: 'Gesture Game', type: 'folder', children: [
              {
                name: 'NC3.L01.01.GestureGame.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Pictionary', type: 'folder', children: [
              {
                name: 'NC3.L01.01.Pictionary.docx', type: 'fileWord'
              }
            ]
          }
        ]
      },
      {
        name: 'Lets Talk 1', type: 'chapter', children: [
          {
            name: 'Street Directions Activity', type: 'folder', children: [
              {
                name: 'NC3.L01.Talking.StreetDirections.docx', type: 'fileWord'
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
                name: 'NC3.L01.Review.Jeopardy.docx', type: 'fileWord'
              }
            ]
          }
        ]
      }
    ]
  }
;