import { TreeNode } from '@app/files/file.tree.data';

export const Lesson07: TreeNode =
  {
    name: 'Lesson 07', type: 'lesson', children: [
      {
        name: '7-2', type: 'chapter', children: [
          {
            name: 'Survival Game', type: 'folder', children: [
              {
                name: 'NC2.L07.02.SurvivalGameVerMore.docx', type: 'fileWord'
              },
              {
                name: 'NC2.L07.02.SurvivalGameVerMost.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC2.L07.02.Worksheet.pdf', type: 'filePdf'
              }
            ]
          },
          {
            name: 'Comparative Cards', type: 'folder', children: [
              {
                name: 'NC2.L07.02.ComparativeCards.docx', type: 'fileWord'
              }
            ]
          }
        ]
      },
      {
        name: '7-3', type: 'chapter', children: [
          {
            name: 'Battleship', type: 'folder', children: [
              {
                name: 'NC2.L07.03.BattleshipVerShibukawa.docx', type: 'fileWord'
              },
              {
                name: 'NC2.L07.03.BattleshipVerTakenaga.docx', type: 'fileWord'
              }
            ]
          },
          {
            name: 'Interview Activity', type: 'folder', children: [
              {
                name: 'NC2.L07.03.InterviewGame.docx', type: 'fileWord'
              }
            ]
          }
        ]
      },
      {
        name: 'Speak: Presentations', type: 'chapter', children: [
          {
            name: 'Group Presentation', type: 'folder', children: [
              {
                name: 'NC2.L07.Presentations.Group1.doc', type: 'fileWord'
              },
              {
                name: 'NC2.L07.Presentations.Group2.doc', type: 'fileWord'
              },
              {
                name: 'NC2.L07.Presentations.Topics.doc', type: 'fileWord'
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
                name: 'NC2.L07.Review.Jeopardy.docx', type: 'fileWord'
              }
            ]
          }
        ]
      }
    ]
  }
;