/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minDig(node) {
      if (node.left === null && node.right === null) {
        return 1;
      } else if (node.left !== null) {
        return (minDig(node.left) + 1)
      } else if (node.right !== null) {
      return (minDig(node.right) + 1)
      }

      return (Math.min(minDig(node.left), minDig(node.right)) + 1)
    }

    return minDig(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maxDig(node) {
      if (node.left === null && node.right === null) {
        return 1;
      } 
      if (node.left === null) {
        return (maxDig(node.right) + 1)
      }
      if (node.right === null) {
      return (maxDig(node.left) + 1)
      }

      return (Math.max(maxDig(node.left), maxDig(node.right)) + 1)
    }

    return maxDig(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    
    let total = 0;
    
    function sum(node) {
      if (node === null) return 0;
      const lefty = sum(node.left)
      const right = sum(node.right)

      total = Math.max(total, node.val + lefty + right);
      return Math.max(0, lefty + node.val, right + node.val);
    }
    sum(this.root)
    return total;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let currentVal = null;
    let next = [this.root];

    while(next.length) {
      let current = next.shift();

      if(current.val > lowerBound && (current.val < currentVal || currentVal === null) ){
        currentVal = current.val
      }
      if (current.left) {
        next.push(current.left)
      }
      if (current.right) {
        next.push(current.right)
      }
    }

    return currentVal;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (!this.root) return 0;


  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {
    if (!this.root) return 0;


  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {
    if (!this.root) return 0;


  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
  if (!this.root) return 0;
  
  
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
