import { TreeNode } from '@app/files/file.tree.data';

export const Lesson02: TreeNode =
  {
    name: 'Lesson 02', type: 'lesson', children: [
      {
        name: '2-1', type: 'chapter', children: [
          {
            name: 'Battleship', type: 'folder', children: [
              {
                name: 'NC2.L02.01.Battleship.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Mastermind', type: 'folder', children: [
              {
                name: 'NC2.L02.01.Mastermind.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Survival Game', type: 'folder', children: [
              {
                name: 'NC2.L02.01.SurvivalGame.docx', type: 'fileWord'
              }
            ]
          }
        ]
      },
      {
        name: '2-2', type: 'chapter', children: [
          {
            name: 'Battleship', type: 'folder', children: [
              {
                name: 'NC2.L02.02.Battleship.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Gesture Game', type: 'folder', children: [
              {
                name: 'NC2.L02.02.GestureGame.docx', type: 'fileWord'
              }
            ]
          }
        ]
      },
      {
        name: 'Read: Peter Rabbit', type: 'chapter', children: [
          {
            name: 'Speech', type: 'folder', children: [
              {
                name: 'NC2.L02.Read.PeterRabbitSpeech.JPG', type: 'fileImage'
              },
              {
                name: 'NC2.L02.Read.PeterRabbitSpeechGradeSheetExample.JPG', type: 'fileImage'
              }
            ]
          }
        ]
      },
      {
        name: 'Lesson Overview', type: 'chapter', children: [
          {
            name: 'Card Grab, Memory', type: 'folder', children: [
              {
                name: 'NC2.L02.Review.Cards.docx', type: 'fileWord'
              }
            ]
          }
        ]
      }
    ]
  }
;