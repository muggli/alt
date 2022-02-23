import * as svgIcons from '@fortawesome/free-regular-svg-icons';

export interface TreeNode {
    name: string;
    type: string;
    svgIcon?: svgIcons.IconDefinition;
    downloadLink?: string;
    children?: TreeNode[];
}
  