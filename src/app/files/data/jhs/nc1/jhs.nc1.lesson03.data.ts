import { TreeNode } from '@app/files/file.tree.data';
import { faFilePdf, faFileWord, faFileImage } from '@fortawesome/free-regular-svg-icons';

export const JhsNc1Lesson03: TreeNode =
  {
    name: 'Lesson 03', type: 'lesson', children: [
      {
        name: '3-2', type: 'chapter', children: [
          {
            name: 'Line Game', type: 'folder', children: [
              {
                name: 'NC1.L03.02.LineGame.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L03.02.WorkSheet.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          }
        ]
      },
      {
        name: '3-3', type: 'chapter', children: [
          {
            name: 'Presentation', type: 'folder', children: [
              {
                name: 'NC1.L03.03.SelfIntroduction.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          },
          {
            name: 'Worksheet', type: 'folder', children: [
              {
                name: 'NC1.L03.03.WhatDoYouLikeWS.JPG', type: 'file', svgIcon: faFileImage
              }
            ]
          }
        ]
      },
      {
        name: 'Words and Sounds 3', type: 'chapter', children: [
          {
            name: 'Card Grab, Go Fish', type: 'folder', children: [
              {
                name: 'NC1.L03.WordsAndSounds.Cards.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          }
        ]
      },
      {
        name: 'Lets Talk 3', type: 'chapter', children: [
          {
            name: 'Card Grab', type: 'folder', children: [
              {
                name: 'NC1.L03.Talking.CardGrab.docx', type: 'file', svgIcon: faFileWord
              },
              {
                name: 'NC1.L03.Talking.CardGrabList.docx', type: 'file', svgIcon: faFileWord
              }
            ]
          }
        ]
      }
    ]
  }
;