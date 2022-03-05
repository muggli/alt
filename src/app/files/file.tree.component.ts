import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeNode } from './file.tree.data';
import { faFolderOpen, faChalkboardTeacher, faBook, faFileExcel, faFile, faFileWord, faFilePdf, faFileImage, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogNoFileFound } from '@app/dialog/no.file.found.dialog';
import * as Nc1Lessons from './data/jhs/nc1';
import * as Nc2Lessons from './data/jhs/nc2';
import * as Nc3Lessons from './data/jhs/nc3';
import * as HolidayLessons from './data/jhs/holiday';
import * as Bunkasai from './data/jhs/bunkasai';
import * as Misc from './data/misc';
import * as Eigomura from './data/eigomura';

@Component({
    selector: 'file-tree',
    templateUrl: './file.tree.component.html',
    styleUrls: ['./file.tree.component.scss']
  })

export class FileTreeComponent {

  constructor(private dialog: MatDialog) {}

  @Input() page: string = '';
  title: string = '';
  subtitle: string = '';
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  loadTreeOnPage: TreeNode[] = [];
  lessons: TreeNode[] = [];
  EigomuraEsHeader: TreeNode = Eigomura.EigomuraEsHeader;
  EigomuraJhsHeader: TreeNode = Eigomura.EigomuraJhsHeader;
  HolidayHeader: TreeNode[] = HolidayLessons.JhsHolidayLesson;
  BunkasaiHeader: TreeNode[] = Bunkasai.BunkasaiData;
  MiscHeader: TreeNode[] = Misc.MiscData;
  faFolderOpen = faFolderOpen;
  faChalkboardTeacher = faChalkboardTeacher;
  faBook = faBook;
  faFileExcel = faFileExcel;
  faFile = faFile;
  faFileWord = faFileWord;
  faFilePdf = faFilePdf;
  faFileImage = faFileImage;
  faFilePowerpoint = faFilePowerpoint;

  ngOnInit() {
    switch ( this.page ) {
        case 'jhs-nc1':
          this.title = 'Junior High School';
          this.subtitle = 'New Crown 1';
          this.lessons.push(Nc1Lessons.JhsNc1Lesson00Warmup);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson00GetReady);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson01);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson02);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson03);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson04);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson05);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson06);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson07);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson08);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson09);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson99EndOfYear);
          this.lessons.push(Nc1Lessons.JhsNc1Lesson99Optional);
          this.dataSource.data = this.lessons;
          break;
        case 'jhs-nc2':
          this.title = 'Junior High School';
          this.subtitle = 'New Crown 2';
          this.lessons.push(Nc2Lessons.JhsNc2Lesson00Warmup);
          this.lessons.push(Nc2Lessons.JhsNc2Lesson01);
          this.lessons.push(Nc2Lessons.JhsNc2Lesson02);
          this.lessons.push(Nc2Lessons.JhsNc2Lesson03);
          this.lessons.push(Nc2Lessons.JhsNc2Lesson04);
          this.lessons.push(Nc2Lessons.JhsNc2Lesson05);
          this.lessons.push(Nc2Lessons.JhsNc2Lesson06);
          this.lessons.push(Nc2Lessons.JhsNc2Lesson07);
          this.lessons.push(Nc2Lessons.JhsNc2Lesson08);
          this.lessons.push(Nc2Lessons.JhsNc2Lesson99EndOfYear);
          this.lessons.push(Nc2Lessons.JhsNc2Lesson99Optional);
          this.dataSource.data = this.lessons;
          break;
        case 'jhs-nc3':
          this.title = 'Junior High School';
          this.subtitle = 'New Crown 3';
          this.lessons.push(Nc3Lessons.JhsNc3Lesson01);
          this.lessons.push(Nc3Lessons.JhsNc3Lesson02);
          this.lessons.push(Nc3Lessons.JhsNc3Lesson03);
          this.lessons.push(Nc3Lessons.JhsNc3Lesson04);
          this.lessons.push(Nc3Lessons.JhsNc3Lesson05);
          this.lessons.push(Nc3Lessons.JhsNc3Lesson06);
          this.lessons.push(Nc3Lessons.JhsNc3Lesson07);
          this.lessons.push(Nc3Lessons.JhsNc3Lesson08);
          this.lessons.push(Nc3Lessons.JhsNc3Lesson99EndOfYear);
          this.lessons.push(Nc3Lessons.JhsNc3Lesson99Optional);
          this.dataSource.data = this.lessons;
          break;
        case 'jhs-holiday':
          this.title = 'Junior High School';
          this.subtitle = 'Holiday Lessons';
          this.dataSource.data = this.HolidayHeader;
          break;
        case 'jhs-bunkasai':
          this.title = 'Junior High School';
          this.subtitle = '文化祭';
          this.dataSource.data = this.BunkasaiHeader;
          break;
        case 'eigomura':
          this.title = "英語村";
          this.subtitle = '';
          this.loadTreeOnPage.push(this.EigomuraEsHeader); 
          this.loadTreeOnPage.push(this.EigomuraJhsHeader); 
          this.dataSource.data = this.loadTreeOnPage;
          break;
        case 'misc':
          this.title = "Miscellaneous";
          this.subtitle = '';
          this.dataSource.data = this.MiscHeader;
          break;
        default:
          this.title = "NO PAGE FOUND";
          this.subtitle = '';
          this.dataSource.data = [];
    }
  }

  downloadFile(fileName: string) {

    let filePath = `./assets/${fileName}`;

    if (this.doesFileExist(filePath)) {
      let link = document.createElement('a');
      link.setAttribute('type', 'hidden');
      link.href = filePath;
      link.download = `${fileName}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } else {
      this.dialog.open(DialogNoFileFound);
    }

  }

  doesFileExist(urlToFile: string) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status === 404) {
        return false;
    } else {
        return true;
    }
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

}
