"use strict";
var jsxRuntime = require("react/jsx-runtime"), reactCompilerRuntime = require("react-compiler-runtime"), MuxPlayer = require("@mux/mux-player-react");
function _interopDefaultCompat(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var MuxPlayer__default = /* @__PURE__ */ _interopDefaultCompat(MuxPlayer);
function VideoPlayer(t0) {
  const $ = reactCompilerRuntime.c(3), {
    playbackId
  } = t0;
  let t1;
  $[0] === Symbol.for("react.memo_cache_sentinel") ? (t1 = {
    position: "absolute",
    inset: 0
  }, $[0] = t1) : t1 = $[0];
  let t2;
  return $[1] !== playbackId ? (t2 = /* @__PURE__ */ jsxRuntime.jsx(MuxPlayer__default.default, { theme: "sutro", playbackId, autoPlay: !1, loop: !1, style: t1 }), $[1] = playbackId, $[2] = t2) : t2 = $[2], t2;
}
exports.VideoPlayer = VideoPlayer;
//# sourceMappingURL=VideoPlayer.js.map
