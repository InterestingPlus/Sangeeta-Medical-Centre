"use strict";
var util_sliceBlocks = require("./util.slice-blocks.cjs");
function getBlockEndPoint({
  context,
  block
}) {
  if (util_sliceBlocks.isTextBlock(context, block.node)) {
    const lastChild = block.node.children[block.node.children.length - 1];
    if (lastChild)
      return {
        path: [...block.path, "children", {
          _key: lastChild._key
        }],
        offset: util_sliceBlocks.isSpan(context, lastChild) ? lastChild.text.length : 0
      };
  }
  return {
    path: block.path,
    offset: 0
  };
}
function isEmptyTextBlock(context, block) {
  if (!util_sliceBlocks.isTextBlock(context, block))
    return !1;
  const onlyText = block.children.every((child) => util_sliceBlocks.isSpan(context, child)), blockText = util_sliceBlocks.getTextBlockText(block);
  return onlyText && blockText === "";
}
function isEqualSelectionPoints(a, b) {
  return a.offset === b.offset && JSON.stringify(a.path) === JSON.stringify(b.path);
}
function isSelectionCollapsed(selection) {
  return selection ? JSON.stringify(selection.anchor.path) === JSON.stringify(selection.focus.path) && selection.anchor.offset === selection.focus.offset : !1;
}
exports.getBlockEndPoint = getBlockEndPoint;
exports.isEmptyTextBlock = isEmptyTextBlock;
exports.isEqualSelectionPoints = isEqualSelectionPoints;
exports.isSelectionCollapsed = isSelectionCollapsed;
//# sourceMappingURL=util.is-selection-collapsed.cjs.map
