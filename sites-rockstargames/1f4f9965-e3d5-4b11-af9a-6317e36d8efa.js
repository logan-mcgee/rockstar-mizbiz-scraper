try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1f4f9965-e3d5-4b11-af9a-6317e36d8efa", e._sentryDebugIdIdentifier = "sentry-dbid-1f4f9965-e3d5-4b11-af9a-6317e36d8efa")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5853], {
    57377(e, t, n) {
      const o = {
        "./de-DE.json": [65949, [5949]],
        "./defaultMessages.json": [29077, [9077]],
        "./en-US.json": [66650, [6650]],
        "./es-ES.json": [20407, [407]],
        "./es-MX.json": [33734, [3734]],
        "./fr-FR.json": [94431, [4431]],
        "./it-IT.json": [28901, [8901]],
        "./ja-JP.json": [73834, [3834]],
        "./ko-KR.json": [53524, [3524]],
        "./pl-PL.json": [14059, [4059]],
        "./pt-BR.json": [99071, [9071]],
        "./ru-RU.json": [17957, [7957]],
        "./zh-CN.json": [97728, [7728]],
        "./zh-TW.json": [36952, [6952]]
      };

      function r(e) {
        try {
          if (!n.o(o, e)) return Promise.resolve().then(() => {
            const t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        const t = o[e],
          r = t[0];
        return n.e(t[1][0]).then(() => n.t(r, 19))
      }
      r.keys = () => Object.keys(o), r.id = 57377, e.exports = r
    },
    12011(e, t, n) {
      const o = {
        "./de": [95298, [5259]],
        "./en": [83862, [4799]],
        "./es": [82097, [3370]],
        "./fr": [33033, [7010]],
        "./it": [78088, [4913]],
        "./ja": [95228, [6285]],
        "./ko": [48543, [6664]],
        "./pl": [46629, [1054]],
        "./pt": [84605, [662]],
        "./ru": [24392, [5233]],
        "./zh": [54619, [4700]]
      };

      function r(e) {
        try {
          if (!n.o(o, e)) return Promise.resolve().then(() => {
            const t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        const t = o[e],
          r = t[0];
        return n.e(t[1][0]).then(() => n.t(r, 23))
      }
      r.keys = () => Object.keys(o), r.id = 12011, e.exports = r
    },
    60375(e, t, n) {
      const o = {
        "./de": [59937, [5639]],
        "./en": [27753, [6267]],
        "./es": [71774, [5742]],
        "./fr": [84294, [2678]],
        "./it": [71035, [6997]],
        "./ja": [25047, [6361]],
        "./ko": [62264, [7452]],
        "./pl": [55790, [2642]],
        "./pt": [6006, [3034]],
        "./ru": [44139, [3941]],
        "./zh": [68504, [5832]]
      };

      function r(e) {
        try {
          if (!n.o(o, e)) return Promise.resolve().then(() => {
            const t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        const t = o[e],
          r = t[0];
        return n.e(t[1][0]).then(() => n.t(r, 23))
      }
      r.keys = () => Object.keys(o), r.id = 60375, e.exports = r
    },
    42768(e, t, n) {
      const o = {
        "./de": [74655, [4710]],
        "./en": [67675, [3486]],
        "./es": [2160, [4011]],
        "./fr": [23276, [4851]],
        "./it": [66257, [9936]],
        "./ja": [43321, [2156]],
        "./ko": [18222, [3885]],
        "./pl": [90756, [6891]],
        "./pt": [27788, [3475]],
        "./ru": [10493, [4528]],
        "./zh": [66402, [4861]]
      };

      function r(e) {
        try {
          if (!n.o(o, e)) return Promise.resolve().then(() => {
            const t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        const t = o[e],
          r = t[0];
        return n.e(t[1][0]).then(() => n.t(r, 23))
      }
      r.keys = () => Object.keys(o), r.id = 42768, e.exports = r
    },
    19051(e, t, n) {
      const o = {
        "./de": [80671, [299]],
        "./en": [73691, [5663]],
        "./es": [27408, [5530]],
        "./fr": [62924, [2466]],
        "./it": [22257, [7073]],
        "./ja": [84921, [4621]],
        "./ko": [66766, [824]],
        "./pl": [39300, [2398]],
        "./pt": [50156, [9126]],
        "./ru": [32861, [3697]],
        "./zh": [79874, [1868]]
      };

      function r(e) {
        try {
          if (!n.o(o, e)) return Promise.resolve().then(() => {
            const t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        const t = o[e],
          r = t[0];
        return n.e(t[1][0]).then(() => n.t(r, 23))
      }
      r.keys = () => Object.keys(o), r.id = 19051, e.exports = r
    },
    9742(e, t, n) {
      const o = {
        "./de": [33380, [9990]],
        "./en": [11564, [1822]],
        "./es": [60431, [2347]],
        "./fr": [30899, [131]],
        "./it": [4354, [8272]],
        "./ja": [73954, [7436]],
        "./ko": [22817, [2221]],
        "./pl": [61551, [2171]],
        "./pt": [40951, [8755]],
        "./ru": [45526, [2864]],
        "./zh": [74969, [3197]]
      };

      function r(e) {
        try {
          if (!n.o(o, e)) return Promise.resolve().then(() => {
            const t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        const t = o[e],
          r = t[0];
        return n.e(t[1][0]).then(() => n.t(r, 23))
      }
      r.keys = () => Object.keys(o), r.id = 9742, e.exports = r
    },
    94911(e, t, n) {
      const o = {
        "./de": [46095, [6879]],
        "./en": [4427, [2243]],
        "./es": [56928, [278]],
        "./fr": [19164, [9022]],
        "./it": [51777, [2365]],
        "./ja": [91465, [9377]],
        "./ko": [24766, [9028]],
        "./pl": [15636, [1242]],
        "./pt": [85180, [7970]],
        "./ru": [2573, [7453]],
        "./zh": [11410, [8880]]
      };

      function r(e) {
        try {
          if (!n.o(o, e)) return Promise.resolve().then(() => {
            const t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        const t = o[e],
          r = t[0];
        return n.e(t[1][0]).then(() => n.t(r, 23))
      }
      r.keys = () => Object.keys(o), r.id = 94911, e.exports = r
    }
  }
]);