import * as svgIcons from '@fortawesome/free-regular-svg-icons';

export interface TreeNode {
    name: string;
    type: "header" | "lesson" | "chapter" | "folder" | "fileWord" | "fileExcel" | "filePdf" | "fileImage" | "fileOther"
    downloadLink?: string;
    children?: TreeNode[];
}
  