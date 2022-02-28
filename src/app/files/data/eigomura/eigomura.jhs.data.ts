import { TreeNode } from '@app/files/file.tree.data';

export const EigomuraJhsHeader: TreeNode =

{
  name: '中学校', type: 'lesson', children: [
    {
      name: 'Interview Activities', type: 'folder', children: [
        {
          name: 'Eigomura.JHS.NC3.Interview1.docx', type: 'fileWord'
        },
        {
          name: 'Eigomura.JHS.NC3.Interview2.docx', type: 'fileWord'
        },
        {
          name: 'Eigomura.JHS.NC3.Interview2.pdf', type: 'filePdf'
        },
        {
          name: 'Eigomura.JHS.NC3.Interview2Dice.docx', type: 'fileWord'
        },
        {
          name: 'Eigomura.JHS.NC3.Interview3.docx', type: 'fileWord'
        }
      ]
    },
    {
      name: 'Hint Game', type: 'folder', children: [
        {
          name: 'Eigomura.JHS.HintGame.pptx', type: 'filePowerpoint'
        },
        {
          name: 'Eigomura.JHS.NC3.HintGamePictures.docx', type: 'fileWord'
        },
        {
          name: 'Eigomura.JHS.NC3.HintGameWords.docx', type: 'fileWord'
        }
      ]
    }
  ]
}