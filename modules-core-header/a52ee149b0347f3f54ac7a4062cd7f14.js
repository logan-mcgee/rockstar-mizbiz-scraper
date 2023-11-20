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
        d = o(441),
        a = o(2376),
        s = o(3705);
      const c = window?.env?.graphEnv ?? "prod",
        {
          pingBearer: i
        } = (0, r.E$)();

      function l() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const n = (0, d.s)(e),
          o = (0, t.dd)(a.Z, {
            env: c,
            token: (0, t.QS)(null),
            tokenPing: i,
            tokenPingExpires: (0, t.QS)(null),
            typePolicies: {}
          });
        n.render((0, s.jsx)(o, {}))
      }
      "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", l) : l()
    }
  }
]);