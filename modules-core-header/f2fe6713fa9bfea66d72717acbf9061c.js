"use strict";
(self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [823], {
    441: (e, n, o) => {
      var t = o(6763);
      n.s = t.createRoot, t.hydrateRoot
    },
    823: (e, n, o) => {
      o.r(n);
      var t = o(1787),
        r = o(6210),
        a = o(441),
        d = o(8528),
        s = o(3705);
      const {
        graphEnv: c,
        pingBearer: l
      } = (0, r.E$)();

      function u() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const n = (0, a.s)(e),
          o = (0, t.dd)(d.Z, {
            env: c,
            token: (0, t.QS)(null),
            tokenPing: (0, t.QS)(l),
            tokenPingExpires: (0, t.QS)(null),
            typePolicies: {}
          });
        n.render((0, s.jsx)(o, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", u) : u()
    }
  }
]);