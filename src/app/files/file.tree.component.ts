import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Input} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {TreeNode} from './file.tree.data';
import { faFolderOpen, faChalkboardTeacher, faBook } from '@fortawesome/free-solid-svg-icons';
import * as lessons from './data/jhs/index';

@Component({
    selector: 'file-tree',
    templateUrl: './file.tree.component.html',
    styleUrls: ['./file.tree.component.scss']
  })

export class FileTreeComponent {

  @Input() page: string = '';
  @Input() title: string = '';
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  loadTreeOnPage: TreeNode[] = [];
  lessons: TreeNode[] = [];
  JhsNc1Header: TreeNode = lessons.JhsNc1Header;
  faFolderOpen = faFolderOpen;
  faChalkboardTeacher = faChalkboardTeacher;
  faBook = faBook;

  ngOnInit() {
    switch ( this.page ) {
        case 'jhs':
            this.lessons.push(lessons.JhsNc1Lesson00Warmup);
            this.lessons.push(lessons.JhsNc1Lesson00GetReady);
            this.lessons.push(lessons.JhsNc1Lesson01);
            this.JhsNc1Header.children = this.lessons;
            this.loadTreeOnPage.push(lessons.JhsNc1Header); 
            
            this.dataSource.data = this.loadTreeOnPage;
            break;
        default:
            this.dataSource.data = [];
    }
  }

  downloadFile(fileName: string) {

    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = `../../assets/${fileName}`;
    link.download = `${fileName}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

}
