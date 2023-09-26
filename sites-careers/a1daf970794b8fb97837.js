"use strict";
(self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [601], {
    5601: (e, r, s) => {
      s.r(r), s(7842);
      var t = s(2592),
        a = s.n(t),
        n = s(2086),
        c = s(5269),
        i = s.n(c),
        o = s(4859),
        l = s(6331),
        d = s(1968),
        h = s(1458),
        k = s(2609),
        v = s(6160);
      (0, l.init)();
      const u = window?.env?.graphEnv ?? "dev",
        w = (0, o.withReactiveState)((() => (0, v.jsx)(d.ScrollProvider, {
          children: (0, v.jsx)(n.BrowserRouter, {
            basename: "/",
            children: (0, v.jsx)(h.RockstarUserProvider, {
              children: (0, v.jsx)(k.Z, {})
            })
          })
        })), {
          state: null
        }),
        m = (0, o.withRockstarGraph)(w, {
          env: u,
          typePolicies: {
            ...i()
          }
        });
      a().render((0, v.jsx)(m, {}), document.getElementById("main"))
    }
  }
]);
//# sourceMappingURL=a1daf970794b8fb97837.js.map