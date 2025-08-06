import { jsx } from "react/jsx-runtime";
import { c } from "react-compiler-runtime";
import MuxPlayer from "@mux/mux-player-react";
function VideoPlayer(t0) {
  const $ = c(3), {
    playbackId
  } = t0;
  let t1;
  $[0] === Symbol.for("react.memo_cache_sentinel") ? (t1 = {
    position: "absolute",
    inset: 0
  }, $[0] = t1) : t1 = $[0];
  let t2;
  return $[1] !== playbackId ? (t2 = /* @__PURE__ */ jsx(MuxPlayer, { theme: "sutro", playbackId, autoPlay: !1, loop: !1, style: t1 }), $[1] = playbackId, $[2] = t2) : t2 = $[2], t2;
}
export {
  VideoPlayer
};
//# sourceMappingURL=VideoPlayer.mjs.map
