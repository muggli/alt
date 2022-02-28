import * as svgIcons from '@fortawesome/free-regular-svg-icons';

export interface TreeNode {
    name: string;
    type: "lesson" | "chapter" | "folder" | "fileWord" | "fileExcel" | "filePowerpoint" | "filePdf" | "fileImage" | "fileOther"
    downloadLink?: string;
    children?: TreeNode[];
}
  