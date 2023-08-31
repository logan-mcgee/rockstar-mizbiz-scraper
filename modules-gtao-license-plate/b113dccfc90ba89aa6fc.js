"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [830], {
    9170: (e, r, s) => {
      var o = s(1722);
      r.s = o.createRoot, o.hydrateRoot
    },
    2830: (e, r, s) => {
      s.r(r), s(7842);
      var o = s(9170),
        t = s(3102),
        a = s(1458),
        c = s(1968),
        l = s(9401),
        d = s(6160);
      const n = document.createElement("div");
      document.querySelector("body").append(n), (0, o.s)(n).render((0, d.jsx)(c.ScrollProvider, {
        children: (0, d.jsx)(t.BrowserRouter, {
          basename: "/",
          children: (0, d.jsx)(a.RockstarUserProvider, {
            children: (0, d.jsx)(l.Z, {})
          })
        })
      }))
    }
  }
]);