"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [19], {
    19: (e, t, a) => {
      a.r(t), a.d(t, {
        mutateLSSettings: () => c,
        settingsReactive: () => n,
        useRockstarWebLSSettings: () => i
      });
      var s = a(859);
      const r = "rockstar-games-web";
      let l;
      try {
        l = JSON.parse(window.localStorage.getItem(r) ?? null)
      } catch (e) {
        l = {}
      }
      const n = (0, s.makeVar)(l),
        c = async e => {
          let {
            key: t,
            value: a
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const s = n() ?? {};
          return s[t] = a, null === a && delete s[t], await window.localStorage.setItem(r, JSON.stringify(s)), s
        }, i = () => ({
          lsSettings: (0, s.useReactiveVar)(n),
          settingsReactive: n,
          mutateLSSettings: c
        })
    }
  }
]);