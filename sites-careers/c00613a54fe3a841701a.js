"use strict";
(self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [641], {
    663: (e, r, s) => {
      s.r(r), s(7842);
      var t = s(3468),
        a = s.n(t),
        i = s(6803),
        n = s(5269),
        c = s.n(n),
        o = s(4859),
        l = s(6331),
        d = s(1968),
        h = s(1458),
        k = s(8521),
        v = s(3322);
      (0, l.init)();
      const p = window?.env?.graphEnv ?? "dev",
        u = (0, o.withReactiveState)((() => (0, v.jsx)(d.ScrollProvider, {
          children: (0, v.jsx)(i.BrowserRouter, {
            basename: "/",
            children: (0, v.jsx)(h.RockstarUserProvider, {
              pingPeriodically: 6e4,
              children: (0, v.jsx)(k.Z, {})
            })
          })
        })), {
          state: null
        }),
        w = (0, o.withRockstarGraph)(u, {
          env: p,
          typePolicies: {
            ...c()
          }
        });
      a().render((0, v.jsx)(w, {}), document.getElementById("main"))
    }
  }
]);