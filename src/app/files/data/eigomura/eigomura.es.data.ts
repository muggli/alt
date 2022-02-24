import {TreeNode} from '@app/files/file.tree.data';

export const EigomuraEsHeader: TreeNode =
  
{
  name: '小学校', type: 'header', children: [
    {
      name: 'Board Game (Short Version)', type: 'folder', children: [
        {
          name: 'Eigomura.ES.Sugoroku.Board.xlsx', type: 'fileExcel'
        },
        {
          name: 'Eigomura.ES.Sugoroku.Cards.docx', type: 'fileWord'
        },
        {
          name: 'Eigomura.ES.Sugoroku.Key.docx.docx', type: 'fileWord'
        }
      ]
    },
    {
      name: 'Board Game (Long Version)', type: 'folder', children: [
        {
          name: 'Eigomura.ES.LongVersion.Sugoroku.xlsx', type: 'fileExcel'
        },
        {
          name: 'Eigomura.ES.LongVersion.SugorokuCards.docx', type: 'fileWord'
        },
        {
          name: 'Eigomura.ES.LongVersion.SugorokuRules.doc', type: 'fileWord'
        }
      ]
    },
    {
      name: 'Kamekichi Card Game (Colors)', type: 'folder', children: [
        {
          name: 'Eigomura.ES.Kamekichi.Cards.docx', type: 'fileWord'
        },
        {
          name: 'Eigomura.ES.Kamekichi.PNG', type: 'fileImage'
        }
      ]
    },
    {
      name: 'Introduction (Pictures)', type: 'folder', children: [
        {
          name: 'Eigomura.ES.Pictures.docx', type: 'fileWord'
        }
      ]
    }
  ]
}