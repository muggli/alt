import { TreeNode } from '@app/files/file.tree.data';

export const MiscData: TreeNode[] =
    [
      {
        name: 'Fonts', type: 'folder', children: [
          {
            name: 'NCGothicRegular.otf', type: 'fileOther'
          }
        ]
      },
      {
        name: 'Templates', type: 'folder', children: [
          {
            name: 'CalvinHobbesBoardGame.xlsx', type: 'fileExcel'
          },
          {
            name: 'KarutaTemplate.docx', type: 'fileWord'
          },
          {
            name: 'SorryBoardGame.xlsx', type: 'fileExcel'
          },
          {
            name: 'SorryCards.xlsx', type: 'fileExcel'
          },
          {
            name: 'SorrySpecialCardExamples.docx', type: 'fileWord'
          }
        ]
      }
    ]