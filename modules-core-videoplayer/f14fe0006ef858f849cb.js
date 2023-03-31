"use strict";
(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [425], {
    425: (e, r, a) => {
      a.r(r), a.d(r, {
        default: () => o
      });
      var s = a(929),
        t = a(689),
        u = a(322);
      const o = () => {
        const e = (0, s.useQueryParams)();
        return (0, u.jsx)(t.Z, {
          autoplay: "true" === e.get("autoplay"),
          id: Number(e.get("id")),
          context: "embed",
          wrapper: !1
        })
      }
    }
  }
]);