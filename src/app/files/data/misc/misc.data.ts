import { TreeNode } from '@app/files/file.tree.data';
import { faFileWord, faFile, faFileExcel } from '@fortawesome/free-regular-svg-icons';

export const MiscData: TreeNode[] =
    [
      {
        name: 'Fonts', type: 'folder', children: [
          {
            name: 'NCGothicRegular.otf', type: 'file', svgIcon: faFile
          }
        ]
      },
      {
        name: 'Templates', type: 'folder', children: [
          {
            name: 'CalvinHobbesBoardGame.xlsx', type: 'file', svgIcon: faFileExcel
          },
          {
            name: 'KarutaTemplate.docx', type: 'file', svgIcon: faFileWord
          },
          {
            name: 'SorryBoardGame.xlsx', type: 'file', svgIcon: faFileExcel
          },
          {
            name: 'SorryCards.xlsx', type: 'file', svgIcon: faFileExcel
          },
          {
            name: 'SorrySpecialCardExamples.docx', type: 'file', svgIcon: faFileWord
          }
        ]
      }
    ]