"use strict";
var util_sliceBlocks = require("./util.slice-blocks.cjs"), util_childSelectionPointToBlockOffset = require("./util.child-selection-point-to-block-offset.cjs");
function selectionPointToBlockOffset({
  context,
  selectionPoint
}) {
  const blockKey = util_sliceBlocks.getBlockKeyFromSelectionPoint(selectionPoint);
  return selectionPoint.path.length === 1 && blockKey !== void 0 ? {
    path: [{
      _key: blockKey
    }],
    offset: selectionPoint.offset
  } : util_childSelectionPointToBlockOffset.childSelectionPointToBlockOffset({
    context,
    selectionPoint
  });
}
function sliceTextBlock({
  context,
  block
}) {
  const startPoint = util_sliceBlocks.getSelectionStartPoint(context.selection), endPoint = util_sliceBlocks.getSelectionEndPoint(context.selection);
  if (!startPoint || !endPoint)
    return block;
  const startBlockKey = util_sliceBlocks.getBlockKeyFromSelectionPoint(startPoint), endBlockKey = util_sliceBlocks.getBlockKeyFromSelectionPoint(endPoint);
  if (startBlockKey !== endBlockKey || startBlockKey !== block._key)
    return block;
  const startChildKey = util_sliceBlocks.getChildKeyFromSelectionPoint(startPoint), endChildKey = util_sliceBlocks.getChildKeyFromSelectionPoint(endPoint);
  if (!startChildKey || !endChildKey)
    return block;
  let startChildFound = !1;
  const children = [];
  for (const child of block.children) {
    if (child._key === startChildKey) {
      if (startChildFound = !0, util_sliceBlocks.isSpan(context, child)) {
        const text = child._key === endChildKey ? child.text.slice(startPoint.offset, endPoint.offset) : child.text.slice(startPoint.offset);
        children.push({
          ...child,
          text
        });
      } else
        children.push(child);
      if (startChildKey === endChildKey)
        break;
      continue;
    }
    if (child._key === endChildKey) {
      util_sliceBlocks.isSpan(context, child) ? children.push({
        ...child,
        text: child.text.slice(0, endPoint.offset)
      }) : children.push(child);
      break;
    }
    startChildFound && children.push(child);
  }
  return {
    ...block,
    children
  };
}
exports.selectionPointToBlockOffset = selectionPointToBlockOffset;
exports.sliceTextBlock = sliceTextBlock;
//# sourceMappingURL=util.slice-text-block.cjs.map
