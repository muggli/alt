import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeNode } from './file.tree.data';
import { faFolderOpen, faChalkboardTeacher, faBook } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogNoFileFound } from '../dialog/no.file.found.dialog';
import * as Nc1Lessons from './data/jhs/nc1/index';

@Component({
    selector: 'file-tree',
    templateUrl: './file.tree.component.html',
    styleUrls: ['./file.tree.component.scss']
  })

export class FileTreeComponent {

  constructor(private dialog: MatDialog) {}

  @Input() page: string = '';
  title: string = '';
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  loadTreeOnPage: TreeNode[] = [];
  lessons: TreeNode[] = [];
  JhsNc1Header: TreeNode = Nc1Lessons.JhsNc1Header;
  faFolderOpen = faFolderOpen;
  faChalkboardTeacher = faChalkboardTeacher;
  faBook = faBook;

  ngOnInit() {
    switch ( this.page ) {
        case 'jhs':
            this.title = "Junior High School";
            this.lessons.push(Nc1Lessons.JhsNc1Lesson00Warmup);
            this.lessons.push(Nc1Lessons.JhsNc1Lesson00GetReady);
            this.lessons.push(Nc1Lessons.JhsNc1Lesson01);
            this.lessons.push(Nc1Lessons.JhsNc1Lesson02);
            this.lessons.push(Nc1Lessons.JhsNc1Lesson03);
            this.lessons.push(Nc1Lessons.JhsNc1Lesson04);
            this.lessons.push(Nc1Lessons.JhsNc1Lesson05);
            this.JhsNc1Header.children = this.lessons;
            this.loadTreeOnPage.push(Nc1Lessons.JhsNc1Header); 
            
            this.dataSource.data = this.loadTreeOnPage;
            break;
        default:
            this.title = "NO PAGE FOUND";
            this.dataSource.data = [];
    }
  }

  downloadFile(fileName: string) {

    let filePath = `../../assets/${fileName}`;

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
