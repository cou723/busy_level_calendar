import { TreeNode } from '@/types/treeNode';

// type Undefinedable<T> = {
//   [P in keyof T]: T[P] | undefined;
// };

// export function generateLeaf<T extends TreeNode>(o: T, root?: string): T {
//   const result: TreeNode = {};

//   for (const [k, v] of Object.entries(o)) {
//     if (typeof v !== 'string') {
//       result[k] = generateLeaf(v, [root, k].join('/'));
//     } else result[k] = [root, k, v].join('/');
//   }
//   return result;
// }
