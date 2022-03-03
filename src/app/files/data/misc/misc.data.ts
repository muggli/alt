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
            name: 'Template.CalvinHobbesBoardGame.xlsx', type: 'fileExcel'
          },
          {
            name: 'Template.Karuta.docx', type: 'fileWord'
          },
          {
            name: 'Template.SorryBoardGame.xlsx', type: 'fileExcel'
          },
          {
            name: 'Template.SorryCards.xlsx', type: 'fileExcel'
          },
          {
            name: 'Template.SorrySpecialCardExamples.docx', type: 'fileWord'
          }
        ]
      }
    ]