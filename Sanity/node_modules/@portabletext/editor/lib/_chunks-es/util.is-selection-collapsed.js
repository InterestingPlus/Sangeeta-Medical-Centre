import { isTextBlock, isSpan, getTextBlockText } from "./util.slice-blocks.js";
function getBlockEndPoint({
  context,
  block
}) {
  if (isTextBlock(context, block.node)) {
    const lastChild = block.node.children[block.node.children.length - 1];
    if (lastChild)
      return {
        path: [...block.path, "children", {
          _key: lastChild._key
        }],
        offset: isSpan(context, lastChild) ? lastChild.text.length : 0
      };
  }
  return {
    path: block.path,
    offset: 0
  };
}
function isEmptyTextBlock(context, block) {
  if (!isTextBlock(context, block))
    return !1;
  const onlyText = block.children.every((child) => isSpan(context, child)), blockText = getTextBlockText(block);
  return onlyText && blockText === "";
}
function isEqualSelectionPoints(a, b) {
  return a.offset === b.offset && JSON.stringify(a.path) === JSON.stringify(b.path);
}
function isSelectionCollapsed(selection) {
  return selection ? JSON.stringify(selection.anchor.path) === JSON.stringify(selection.focus.path) && selection.anchor.offset === selection.focus.offset : !1;
}
export {
  getBlockEndPoint,
  isEmptyTextBlock,
  isEqualSelectionPoints,
  isSelectionCollapsed
};
//# sourceMappingURL=util.is-selection-collapsed.js.map
