"use strict";
(self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [911], {
    441: (e, r, s) => {
      var t = s(9087);
      r.s = t.createRoot, t.hydrateRoot
    },
    6911: (e, r, s) => {
      s.r(r), s(7842);
      var t = s(441),
        a = s(4175),
        c = s(5269),
        n = s.n(c),
        i = s(4859),
        o = s(6331),
        d = s(1968),
        h = s(1458),
        l = s(1484),
        v = s(3705);
      (0, o.init)();
      const k = window?.env?.graphEnv ?? "dev",
        u = (0, i.withReactiveState)((() => (0, v.jsx)(d.ScrollProvider, {
          children: (0, v.jsx)(a.BrowserRouter, {
            basename: "/",
            children: (0, v.jsx)(h.RockstarUserProvider, {
              children: (0, v.jsx)(l.Z, {})
            })
          })
        })), {
          state: null
        }),
        w = (0, i.withRockstarGraph)(u, {
          env: k,
          typePolicies: {
            ...n()
          }
        });
      (0, t.s)(document.getElementById("main")).render((0, v.jsx)(w, {}))
    }
  }
]);