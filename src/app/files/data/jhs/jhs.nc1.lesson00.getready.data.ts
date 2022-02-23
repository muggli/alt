import { TreeNode } from '../../file.tree.data';
import { faFileImage, faFileWord } from '@fortawesome/free-regular-svg-icons';

export const JhsNc1Lesson00GetReady: TreeNode =
  {
    name: 'Get Ready', type: 'lesson', children: [
      {
        name: 'ALT Introduction', type: 'chapter', children: [
          {
            name: 'Worsheet', type: 'folder', children: [
              {
                name: 'NC1.L00.Extra.IntroductionWS.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          }
        ]
      },
      {
        name: 'Get Ready 3!', type: 'chapter', children: [
          {
            name: 'Card Grab', type: 'folder', children: [
              {
                name: 'NC1.L00.GetReady3.CardGrabLower.docx', type: 'file', svgIcon: faFileWord
              },
              {
                name: 'NC1.L00.GetReady3.CardGrabUpper.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Alphabet Listening Challenge', type: 'folder', children: [
              {
                name: 'NC1.L00.GetReady3.LettersDrawAPicture.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          },
          {
            name: 'Katakana Chart', type: 'folder', children: [
              {
                name: 'NC1.L00.Extra.KatakanaChart.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          }
        ]
      },
      {
        name: 'Get Ready 4!', type: 'chapter', children: [
          {
            name: 'Card Grab', type: 'folder', children: [
              {
                name: 'NC1.L00.GetReady4.CardGrabWordList.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Dictionary', type: 'folder', children: [
              {
                name: 'NC1.L00.Extra.UseADictionary.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          },
          {
            name: 'Bingo', type: 'folder', children: [
              {
                name: 'NC1.L00.GetReady4.Bingo.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          }
        ]
      }
    ]
  }
;