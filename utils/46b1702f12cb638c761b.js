"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [923], {
    923: (e, t, s) => {
      s.r(t), s.d(t, {
        mutateLSSettings: () => c,
        settingsReactive: () => n,
        useRockstarWebLSSettings: () => o
      });
      var a = s(859);
      const r = "rockstar-games-web";
      let l;
      try {
        l = JSON.parse(window.localStorage.getItem(r) ?? null)
      } catch (e) {
        l = {}
      }
      const n = (0, a.makeVar)(l),
        c = e => {
          let {
            key: t,
            value: s
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const a = n() ?? {};
          return a[t] = s, null === s && delete a[t], window.localStorage.setItem(r, JSON.stringify(a)), a
        },
        o = () => ({
          lsSettings: (0, a.useReactiveVar)(n),
          mutateLSSettings: c
        })
    }
  }
]);