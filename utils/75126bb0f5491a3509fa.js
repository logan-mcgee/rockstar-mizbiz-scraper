"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [923], {
    923: (t, e, s) => {
      s.r(e), s.d(e, {
        mutateLSSettings: () => c,
        settingsReactive: () => n,
        useRockstarWebLSSettings: () => o
      });
      var a = s(859);
      const r = "rockstar-games-web";
      let l;
      try {
        l = JSON.parse(window.localStorage.getItem(r) ?? null)
      } catch (t) {
        l = {}
      }
      const n = (0, a.makeVar)(l),
        c = t => {
          let {
            key: e,
            value: s
          } = t;
          if (null == e || null == s) throw Error("You have to specify a key and a value.");
          const a = n() ?? {};
          return a[e] = s, window.localStorage.setItem(r, JSON.stringify(a)), a
        },
        o = () => ({
          lsSettings: (0, a.useReactiveVar)(n),
          mutateLSSettings: c
        })
    }
  }
]);