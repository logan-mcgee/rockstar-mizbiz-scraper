"use strict";
(self.webpackChunk_rockstargames_modules_core_agegate = self.webpackChunk_rockstargames_modules_core_agegate || []).push([
  [337], {
    337: (e, a, s) => {
      s.r(a), s.d(a, {
        setUserAgegatePass: () => o,
        userAgegatePass: () => g
      });
      var t = s(859);
      const r = "RockstarGamesAgeRestrictionPassage",
        g = (0, t.makeVar)(JSON.parse(localStorage?.getItem(r) ?? null)),
        o = e => {
          localStorage.setItem(r, String(Boolean(e))), g(e)
        }
    }
  }
]);