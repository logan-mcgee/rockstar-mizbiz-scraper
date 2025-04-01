! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "04a74a33-da35-4e58-9272-286947c780d4", n._sentryDebugIdIdentifier = "sentry-dbid-04a74a33-da35-4e58-9272-286947c780d4")
  } catch (n) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [9950], {
    67094: n => {
      var e = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        o = /[ -,\.\/:-@\[\]\^`\{-~]/,
        t = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        a = function n(a, u) {
          "single" != (u = function(n, r) {
            if (!n) return r;
            var o = {};
            for (var t in r) o[t] = e.call(n, t) ? n[t] : r[t];
            return o
          }(u, n.options)).quotes && "double" != u.quotes && (u.quotes = "single");
          for (var d = "double" == u.quotes ? '"' : "'", i = u.isIdentifier, s = a.charAt(0), l = "", f = 0, c = a.length; f < c;) {
            var A = a.charAt(f++),
              p = A.charCodeAt(),
              y = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && f < c) {
                var b = a.charCodeAt(f++);
                56320 == (64512 & b) ? p = ((1023 & p) << 10) + (1023 & b) + 65536 : f--
              }
              y = "\\" + p.toString(16).toUpperCase() + " "
            } else y = u.escapeEverything ? r.test(A) ? "\\" + A : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(A) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == A || !i && ('"' == A && d == A || "'" == A && d == A) || i && o.test(A) ? "\\" + A : A;
            l += y
          }
          return i && (/^-[-\d]/.test(l) ? l = "\\-" + l.slice(1) : /\d/.test(s) && (l = "\\3" + s + " " + l.slice(1))), l = l.replace(t, (function(n, e, r) {
            return e && e.length % 2 ? n : (e || "") + r
          })), !i && u.wrap ? d + l + d : l
        };
      a.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, a.version = "3.0.0", n.exports = a
    },
    62607: (n, e, r) => {
      var o = r(95463),
        t = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        u = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        d = {};

      function i(n) {
        return o.isMemo(n) ? u : d[n.$$typeof] || t
      }
      d[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, d[o.Memo] = u;
      var s = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        c = Object.getOwnPropertyDescriptor,
        A = Object.getPrototypeOf,
        p = Object.prototype;
      n.exports = function n(e, r, o) {
        if ("string" != typeof r) {
          if (p) {
            var t = A(r);
            t && t !== p && n(e, t, o)
          }
          var u = l(r);
          f && (u = u.concat(f(r)));
          for (var d = i(e), y = i(r), b = 0; b < u.length; ++b) {
            var _ = u[b];
            if (!(a[_] || o && o[_] || y && y[_] || d && d[_])) {
              var C = c(r, _);
              try {
                s(e, _, C)
              } catch (n) {}
            }
          }
        }
        return e
      }
    },
    85075: (n, e) => {
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        t = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        u = r ? Symbol.for("react.strict_mode") : 60108,
        d = r ? Symbol.for("react.profiler") : 60114,
        i = r ? Symbol.for("react.provider") : 60109,
        s = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        c = r ? Symbol.for("react.forward_ref") : 60112,
        A = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        y = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        _ = r ? Symbol.for("react.block") : 60121,
        C = r ? Symbol.for("react.fundamental") : 60117,
        v = r ? Symbol.for("react.responder") : 60118,
        k = r ? Symbol.for("react.scope") : 60119;

      function B(n) {
        if ("object" == typeof n && null !== n) {
          var e = n.$$typeof;
          switch (e) {
            case o:
              switch (n = n.type) {
                case l:
                case f:
                case a:
                case d:
                case u:
                case A:
                  return n;
                default:
                  switch (n = n && n.$$typeof) {
                    case s:
                    case c:
                    case b:
                    case y:
                    case i:
                      return n;
                    default:
                      return e
                  }
              }
            case t:
              return e
          }
        }
      }

      function g(n) {
        return B(n) === f
      }
      e.AsyncMode = l, e.ConcurrentMode = f, e.ContextConsumer = s, e.ContextProvider = i, e.Element = o, e.ForwardRef = c, e.Fragment = a, e.Lazy = b, e.Memo = y, e.Portal = t, e.Profiler = d, e.StrictMode = u, e.Suspense = A, e.isAsyncMode = function(n) {
        return g(n) || B(n) === l
      }, e.isConcurrentMode = g, e.isContextConsumer = function(n) {
        return B(n) === s
      }, e.isContextProvider = function(n) {
        return B(n) === i
      }, e.isElement = function(n) {
        return "object" == typeof n && null !== n && n.$$typeof === o
      }, e.isForwardRef = function(n) {
        return B(n) === c
      }, e.isFragment = function(n) {
        return B(n) === a
      }, e.isLazy = function(n) {
        return B(n) === b
      }, e.isMemo = function(n) {
        return B(n) === y
      }, e.isPortal = function(n) {
        return B(n) === t
      }, e.isProfiler = function(n) {
        return B(n) === d
      }, e.isStrictMode = function(n) {
        return B(n) === u
      }, e.isSuspense = function(n) {
        return B(n) === A
      }, e.isValidElementType = function(n) {
        return "string" == typeof n || "function" == typeof n || n === a || n === f || n === d || n === u || n === A || n === p || "object" == typeof n && null !== n && (n.$$typeof === b || n.$$typeof === y || n.$$typeof === i || n.$$typeof === s || n.$$typeof === c || n.$$typeof === C || n.$$typeof === v || n.$$typeof === k || n.$$typeof === _)
      }, e.typeOf = B
    },
    95463: (n, e, r) => {
      n.exports = r(85075)
    },
    19856: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_nu8bkp1 {\n  --foundry_nu8bkp2: 0px;\n  --foundry_nu8bkp3: 2px;\n  --foundry_nu8bkp4: 4px;\n  --foundry_nu8bkp5: 8px;\n  --foundry_nu8bkp6: 12px;\n  --foundry_nu8bkp7: 16px;\n  --foundry_nu8bkp8: 24px;\n  --foundry_nu8bkp9: 32px;\n  --foundry_nu8bkpa: 9999px;\n  --foundry_nu8bkpb: 1000px;\n  --foundry_nu8bkpc: 0px;\n  --foundry_nu8bkpd: 1px;\n  --foundry_nu8bkpe: 2px;\n  --foundry_nu8bkpf: 3px;\n  --foundry_nu8bkpg: 4px;\n  --foundry_nu8bkph: calc(2px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpi: calc(4px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpj: calc(8px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpk: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpl: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpm: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpn: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpo: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpp: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpq: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpr: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkps: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpt: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpu: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpv: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpw: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpx: calc(96px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpy: calc(112px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpz: calc(128px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp10: calc(2px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp11: calc(4px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp12: calc(8px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp13: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp14: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp15: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp16: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp17: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp18: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp19: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1a: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1b: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1c: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1d: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1e: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1f: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1g: calc(96px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1h: calc(112px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1i: calc(128px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1j: calc(144px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1k: calc(160px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1l: calc(176px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1m: calc(200px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1n: calc(240px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1o: calc(280px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1p: calc(320px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1q: calc(360px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1r: calc(400px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1s: calc(500px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1t: Arial;\n  --foundry_nu8bkp1u: Helvetica Now Display;\n  --foundry_nu8bkp1v: Helvetica Now Text;\n  --foundry_nu8bkp1w: Consolas;\n  --foundry_nu8bkp1x: 400;\n  --foundry_nu8bkp1y: 700;\n  --foundry_nu8bkp1z: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp20: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp21: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp22: calc(18px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp23: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp24: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp25: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp26: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp27: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp28: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp29: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2a: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2b: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2c: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2d: 0%;\n  --foundry_nu8bkp2e: 1%;\n  --foundry_nu8bkp2f: 2.5%;\n  --foundry_nu8bkp2g: -2.5%;\n  --foundry_nu8bkp2h: -1%;\n  --foundry_nu8bkp2i: 130%;\n  --foundry_nu8bkp2j: 150%;\n  --foundry_nu8bkp2k: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2l: Helvetica Now Display;\n  --foundry_nu8bkp2m: Arial;\n  --foundry_nu8bkp2n: Helvetica Now Text;\n  --foundry_nu8bkp2o: Arial;\n  --foundry_nu8bkp2p: Consolas;\n  --foundry_nu8bkp2q: Consolas;\n  --foundry_nu8bkp2r: -2.5%;\n  --foundry_nu8bkp2s: -2.5%;\n  --foundry_nu8bkp2t: -2.5%;\n  --foundry_nu8bkp2u: -2.5%;\n  --foundry_nu8bkp2v: 1%;\n  --foundry_nu8bkp2w: 1%;\n  --foundry_nu8bkp2x: 400;\n  --foundry_nu8bkp2y: 700;\n  --foundry_nu8bkp2z: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp30: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp31: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp32: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp33: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp34: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp35: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp36: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp37: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp38: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp39: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp3a: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp3b: 130%;\n  --foundry_nu8bkp3c: 150%;\n}\n.foundry_nu8bkpaq {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #eaeaea;\n  --foundry_nu8bkp3i: #d8d8d8;\n  --foundry_nu8bkp3j: #b2b2b2;\n  --foundry_nu8bkp3k: #919191;\n  --foundry_nu8bkp3l: #6d6d6d;\n  --foundry_nu8bkp3m: #464646;\n  --foundry_nu8bkp3n: #212121;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #ffffff;\n  --foundry_nu8bkp3q: #ffffff;\n  --foundry_nu8bkp3r: #f5f5f5;\n  --foundry_nu8bkp3s: #e4e4e4;\n  --foundry_nu8bkp3t: #d1d1d1;\n  --foundry_nu8bkp3u: #c0c0c0;\n  --foundry_nu8bkp3v: #9f9f9f;\n  --foundry_nu8bkp3w: #767676;\n  --foundry_nu8bkp3x: #585858;\n  --foundry_nu8bkp3y: #414141;\n  --foundry_nu8bkp3z: #2d2d2d;\n  --foundry_nu8bkp40: #151515;\n  --foundry_nu8bkp41: #fff3f3;\n  --foundry_nu8bkp42: #ffe3e3;\n  --foundry_nu8bkp43: #ffd3d3;\n  --foundry_nu8bkp44: #ffbdbd;\n  --foundry_nu8bkp45: #ffa5a5;\n  --foundry_nu8bkp46: #ff8181;\n  --foundry_nu8bkp47: #ff5c5c;\n  --foundry_nu8bkp48: #e74646;\n  --foundry_nu8bkp49: #c93838;\n  --foundry_nu8bkp4a: #a92d2d;\n  --foundry_nu8bkp4b: #8b2323;\n  --foundry_nu8bkp4c: #6d1c1c;\n  --foundry_nu8bkp4d: #541515;\n  --foundry_nu8bkp4e: #401010;\n  --foundry_nu8bkp4f: #fecccc;\n  --foundry_nu8bkp4g: #feb6b6;\n  --foundry_nu8bkp4h: #fd9d9d;\n  --foundry_nu8bkp4i: #fd7d7d;\n  --foundry_nu8bkp4j: #fc5858;\n  --foundry_nu8bkp4k: #fb1e1e;\n  --foundry_nu8bkp4l: #e10404;\n  --foundry_nu8bkp4m: #c50303;\n  --foundry_nu8bkp4n: #aa0303;\n  --foundry_nu8bkp4o: #920303;\n  --foundry_nu8bkp4p: #7e0202;\n  --foundry_nu8bkp4q: #690202;\n  --foundry_nu8bkp4r: #570202;\n  --foundry_nu8bkp4s: #480101;\n  --foundry_nu8bkp4t: #fff4d4;\n  --foundry_nu8bkp4u: #ffe8a4;\n  --foundry_nu8bkp4v: #ffdb72;\n  --foundry_nu8bkp4w: #ffc539;\n  --foundry_nu8bkp4x: #fcaf17;\n  --foundry_nu8bkp4y: #e19808;\n  --foundry_nu8bkp4z: #ca8602;\n  --foundry_nu8bkp50: #b07400;\n  --foundry_nu8bkp51: #976300;\n  --foundry_nu8bkp52: #7e5200;\n  --foundry_nu8bkp53: #654200;\n  --foundry_nu8bkp54: #503400;\n  --foundry_nu8bkp55: #3c2800;\n  --foundry_nu8bkp56: #2e1e00;\n  --foundry_nu8bkp57: #ffd258;\n  --foundry_nu8bkp58: #ffbd29;\n  --foundry_nu8bkp59: #f4a811;\n  --foundry_nu8bkp5a: #dd9507;\n  --foundry_nu8bkp5b: #c68402;\n  --foundry_nu8bkp5c: #af7400;\n  --foundry_nu8bkp5d: #9a6500;\n  --foundry_nu8bkp5e: #855800;\n  --foundry_nu8bkp5f: #734b00;\n  --foundry_nu8bkp5g: #624000;\n  --foundry_nu8bkp5h: #523600;\n  --foundry_nu8bkp5i: #442c00;\n  --foundry_nu8bkp5j: #372400;\n  --foundry_nu8bkp5k: #2d1d00;\n  --foundry_nu8bkp5l: #e0fbea;\n  --foundry_nu8bkp5m: #bef7d5;\n  --foundry_nu8bkp5n: #93f2b9;\n  --foundry_nu8bkp5o: #5ce693;\n  --foundry_nu8bkp5p: #39d878;\n  --foundry_nu8bkp5q: #20c05f;\n  --foundry_nu8bkp5r: #15aa51;\n  --foundry_nu8bkp5s: #0f9444;\n  --foundry_nu8bkp5t: #0b7f39;\n  --foundry_nu8bkp5u: #08692f;\n  --foundry_nu8bkp5v: #065626;\n  --foundry_nu8bkp5w: #05431e;\n  --foundry_nu8bkp5x: #043317;\n  --foundry_nu8bkp5y: #032712;\n  --foundry_nu8bkp5z: #96eab8;\n  --foundry_nu8bkp60: #64e096;\n  --foundry_nu8bkp61: #2ad16c;\n  --foundry_nu8bkp62: #26bb61;\n  --foundry_nu8bkp63: #21a657;\n  --foundry_nu8bkp64: #1e934c;\n  --foundry_nu8bkp65: #1a8043;\n  --foundry_nu8bkp66: #166f3a;\n  --foundry_nu8bkp67: #135f32;\n  --foundry_nu8bkp68: #10522a;\n  --foundry_nu8bkp69: #0e4424;\n  --foundry_nu8bkp6a: #0b381d;\n  --foundry_nu8bkp6b: #092e18;\n  --foundry_nu8bkp6c: #082513;\n  --foundry_nu8bkp6d: #f1f4f9;\n  --foundry_nu8bkp6e: #e3eaf4;\n  --foundry_nu8bkp6f: #d4dfee;\n  --foundry_nu8bkp6g: #bdcfe6;\n  --foundry_nu8bkp6h: #a9c0de;\n  --foundry_nu8bkp6i: #8ba9d2;\n  --foundry_nu8bkp6j: #7296c8;\n  --foundry_nu8bkp6k: #5882bc;\n  --foundry_nu8bkp6l: #406faf;\n  --foundry_nu8bkp6m: #295b9f;\n  --foundry_nu8bkp6n: #17498b;\n  --foundry_nu8bkp6o: #0c3874;\n  --foundry_nu8bkp6p: #062a5b;\n  --foundry_nu8bkp6q: #032047;\n  --foundry_nu8bkp6r: #ccd9eb;\n  --foundry_nu8bkp6s: #b7cae4;\n  --foundry_nu8bkp6t: #9fb9db;\n  --foundry_nu8bkp6u: #86a6d1;\n  --foundry_nu8bkp6v: #6e94c6;\n  --foundry_nu8bkp6w: #5782bc;\n  --foundry_nu8bkp6x: #4271b0;\n  --foundry_nu8bkp6y: #2f61a4;\n  --foundry_nu8bkp6z: #205396;\n  --foundry_nu8bkp70: #144587;\n  --foundry_nu8bkp71: #0d3a76;\n  --foundry_nu8bkp72: #082f64;\n  --foundry_nu8bkp73: #052654;\n  --foundry_nu8bkp74: #031f45;\n  --foundry_nu8bkp75: #f2f4f6;\n  --foundry_nu8bkp76: #e7ebee;\n  --foundry_nu8bkp77: #d9dfe4;\n  --foundry_nu8bkp78: #c5cfd6;\n  --foundry_nu8bkp79: #b2c0c8;\n  --foundry_nu8bkp7a: #98aab6;\n  --foundry_nu8bkp7b: #8297a5;\n  --foundry_nu8bkp7c: #6b8495;\n  --foundry_nu8bkp7d: #5a717f;\n  --foundry_nu8bkp7e: #4b5e6a;\n  --foundry_nu8bkp7f: #3d4c55;\n  --foundry_nu8bkp7g: #303b43;\n  --foundry_nu8bkp7h: #242d33;\n  --foundry_nu8bkp7i: #1b2226;\n  --foundry_nu8bkp7j: #d6d8da;\n  --foundry_nu8bkp7k: #c6cacc;\n  --foundry_nu8bkp7l: #b3b7ba;\n  --foundry_nu8bkp7m: #9fa5a9;\n  --foundry_nu8bkp7n: #8b9297;\n  --foundry_nu8bkp7o: #798187;\n  --foundry_nu8bkp7p: #697177;\n  --foundry_nu8bkp7q: #596269;\n  --foundry_nu8bkp7r: #4a555b;\n  --foundry_nu8bkp7s: #3e484f;\n  --foundry_nu8bkp7t: #323d43;\n  --foundry_nu8bkp7u: #273239;\n  --foundry_nu8bkp7v: #1f2930;\n  --foundry_nu8bkp7w: #182128;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #96eab8;\n  --foundry_nu8bkp87: #ccd9eb;\n  --foundry_nu8bkp88: #ffd258;\n  --foundry_nu8bkp89: #fecccc;\n  --foundry_nu8bkp8a: #d6d8da;\n  --foundry_nu8bkp8b: #ffffff;\n  --foundry_nu8bkp8c: #f5f5f5;\n  --foundry_nu8bkp8d: #e4e4e4;\n  --foundry_nu8bkp8e: #ffffff;\n  --foundry_nu8bkp8f: #f5f5f5;\n  --foundry_nu8bkp8g: #e4e4e4;\n  --foundry_nu8bkp8h: #ffffff;\n  --foundry_nu8bkp8i: #464646;\n  --foundry_nu8bkp8j: #2d2d2d;\n  --foundry_nu8bkp8k: #767676;\n  --foundry_nu8bkp8l: #585858;\n  --foundry_nu8bkp8m: #151515;\n  --foundry_nu8bkp8n: #135f32;\n  --foundry_nu8bkp8o: #205396;\n  --foundry_nu8bkp8p: #734b00;\n  --foundry_nu8bkp8q: #aa0303;\n  --foundry_nu8bkp8r: #4a555b;\n  --foundry_nu8bkp8s: #2d2d2d;\n  --foundry_nu8bkp8t: #767676;\n  --foundry_nu8bkp8u: #585858;\n  --foundry_nu8bkp8v: #414141;\n  --foundry_nu8bkp8w: #585858;\n  --foundry_nu8bkp8x: #205396;\n  --foundry_nu8bkp8y: #2f61a4;\n  --foundry_nu8bkp8z: #144587;\n  --foundry_nu8bkp90: #4271b0;\n  --foundry_nu8bkp91: #0d3a76;\n  --foundry_nu8bkp92: #135f32;\n  --foundry_nu8bkp93: #166f3a;\n  --foundry_nu8bkp94: #10522a;\n  --foundry_nu8bkp95: #1a8043;\n  --foundry_nu8bkp96: #0e4424;\n  --foundry_nu8bkp97: #734b00;\n  --foundry_nu8bkp98: #855800;\n  --foundry_nu8bkp99: #624000;\n  --foundry_nu8bkp9a: #9a6500;\n  --foundry_nu8bkp9b: #523600;\n  --foundry_nu8bkp9c: #aa0303;\n  --foundry_nu8bkp9d: #c50303;\n  --foundry_nu8bkp9e: #920303;\n  --foundry_nu8bkp9f: #e10404;\n  --foundry_nu8bkp9g: #7e0202;\n  --foundry_nu8bkp9h: #4a555b;\n  --foundry_nu8bkp9i: #596269;\n  --foundry_nu8bkp9j: #3e484f;\n  --foundry_nu8bkp9k: #697177;\n  --foundry_nu8bkp9l: #323d43;\n  --foundry_nu8bkp9m: #c0c0c0;\n  --foundry_nu8bkp9n: #d1d1d1;\n  --foundry_nu8bkp9o: #9f9f9f;\n  --foundry_nu8bkp9p: #585858;\n  --foundry_nu8bkp9q: #4271b0;\n  --foundry_nu8bkp9r: #5782bc;\n  --foundry_nu8bkp9s: #2f61a4;\n  --foundry_nu8bkp9t: #1a8043;\n  --foundry_nu8bkp9u: #1e934c;\n  --foundry_nu8bkp9v: #166f3a;\n  --foundry_nu8bkp9w: #9a6500;\n  --foundry_nu8bkp9x: #af7400;\n  --foundry_nu8bkp9y: #855800;\n  --foundry_nu8bkp9z: #e10404;\n  --foundry_nu8bkpa0: #fb1e1e;\n  --foundry_nu8bkpa1: #c50303;\n  --foundry_nu8bkpa2: #697177;\n  --foundry_nu8bkpa3: #798187;\n  --foundry_nu8bkpa4: #596269;\n  --foundry_nu8bkpa5: #c0c0c0;\n  --foundry_nu8bkpa6: rgba(0, 0, 0, 0);\n  --foundry_nu8bkpa7: #6e94c6;\n  --foundry_nu8bkpa8: #86a6d1;\n  --foundry_nu8bkpa9: #5782bc;\n  --foundry_nu8bkpaa: #21a657;\n  --foundry_nu8bkpab: #26bb61;\n  --foundry_nu8bkpac: #1e934c;\n  --foundry_nu8bkpad: #c68402;\n  --foundry_nu8bkpae: #dd9507;\n  --foundry_nu8bkpaf: #af7400;\n  --foundry_nu8bkpag: #fc5858;\n  --foundry_nu8bkpah: #fd7d7d;\n  --foundry_nu8bkpai: #fb1e1e;\n  --foundry_nu8bkpaj: #8b9297;\n  --foundry_nu8bkpak: #9fa5a9;\n  --foundry_nu8bkpal: #798187;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #fcaf17;\n}\n.foundry_nu8bkpar {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #eaeaea;\n  --foundry_nu8bkp3i: #d8d8d8;\n  --foundry_nu8bkp3j: #b2b2b2;\n  --foundry_nu8bkp3k: #919191;\n  --foundry_nu8bkp3l: #6d6d6d;\n  --foundry_nu8bkp3m: #464646;\n  --foundry_nu8bkp3n: #212121;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #000000;\n  --foundry_nu8bkp3q: #0e0e0e;\n  --foundry_nu8bkp3r: #141414;\n  --foundry_nu8bkp3s: #1a1a1a;\n  --foundry_nu8bkp3t: #222222;\n  --foundry_nu8bkp3u: #3f3f3f;\n  --foundry_nu8bkp3v: #5b5b5b;\n  --foundry_nu8bkp3w: #797979;\n  --foundry_nu8bkp3x: #989898;\n  --foundry_nu8bkp3y: #b3b3b3;\n  --foundry_nu8bkp3z: #cecece;\n  --foundry_nu8bkp40: #ebebeb;\n  --foundry_nu8bkp41: #fff3f3;\n  --foundry_nu8bkp42: #ffe3e3;\n  --foundry_nu8bkp43: #ffd3d3;\n  --foundry_nu8bkp44: #ffbdbd;\n  --foundry_nu8bkp45: #ffa5a5;\n  --foundry_nu8bkp46: #ff8181;\n  --foundry_nu8bkp47: #ff5c5c;\n  --foundry_nu8bkp48: #e74646;\n  --foundry_nu8bkp49: #c93838;\n  --foundry_nu8bkp4a: #a92d2d;\n  --foundry_nu8bkp4b: #8b2323;\n  --foundry_nu8bkp4c: #6d1c1c;\n  --foundry_nu8bkp4d: #541515;\n  --foundry_nu8bkp4e: #401010;\n  --foundry_nu8bkp4f: #4b0808;\n  --foundry_nu8bkp4g: #610b0b;\n  --foundry_nu8bkp4h: #7a0e0e;\n  --foundry_nu8bkp4i: #941111;\n  --foundry_nu8bkp4j: #b01414;\n  --foundry_nu8bkp4k: #cc1717;\n  --foundry_nu8bkp4l: #e72424;\n  --foundry_nu8bkp4m: #eb5050;\n  --foundry_nu8bkp4n: #ef6f6f;\n  --foundry_nu8bkp4o: #f28989;\n  --foundry_nu8bkp4p: #f5a4a4;\n  --foundry_nu8bkp4q: #f7b5b5;\n  --foundry_nu8bkp4r: #f9c5c5;\n  --foundry_nu8bkp4s: #fad3d3;\n  --foundry_nu8bkp4t: #fff4d4;\n  --foundry_nu8bkp4u: #ffe8a4;\n  --foundry_nu8bkp4v: #ffdb72;\n  --foundry_nu8bkp4w: #ffc539;\n  --foundry_nu8bkp4x: #fcaf17;\n  --foundry_nu8bkp4y: #e19808;\n  --foundry_nu8bkp4z: #ca8602;\n  --foundry_nu8bkp50: #b07400;\n  --foundry_nu8bkp51: #976300;\n  --foundry_nu8bkp52: #7e5200;\n  --foundry_nu8bkp53: #654200;\n  --foundry_nu8bkp54: #503400;\n  --foundry_nu8bkp55: #3c2800;\n  --foundry_nu8bkp56: #2e1e00;\n  --foundry_nu8bkp57: #312000;\n  --foundry_nu8bkp58: #402a00;\n  --foundry_nu8bkp59: #533600;\n  --foundry_nu8bkp5a: #654200;\n  --foundry_nu8bkp5b: #794f00;\n  --foundry_nu8bkp5c: #8e5d00;\n  --foundry_nu8bkp5d: #a36b00;\n  --foundry_nu8bkp5e: #b87a00;\n  --foundry_nu8bkp5f: #ce8903;\n  --foundry_nu8bkp5g: #e29808;\n  --foundry_nu8bkp5h: #f7aa13;\n  --foundry_nu8bkp5i: #ffb923;\n  --foundry_nu8bkp5j: #ffcb47;\n  --foundry_nu8bkp5k: #ffd86c;\n  --foundry_nu8bkp5l: #e0fbea;\n  --foundry_nu8bkp5m: #bef7d5;\n  --foundry_nu8bkp5n: #93f2b9;\n  --foundry_nu8bkp5o: #5ce693;\n  --foundry_nu8bkp5p: #39d878;\n  --foundry_nu8bkp5q: #20c05f;\n  --foundry_nu8bkp5r: #15aa51;\n  --foundry_nu8bkp5s: #0f9444;\n  --foundry_nu8bkp5t: #0b7f39;\n  --foundry_nu8bkp5u: #08692f;\n  --foundry_nu8bkp5v: #065626;\n  --foundry_nu8bkp5w: #05431e;\n  --foundry_nu8bkp5x: #043317;\n  --foundry_nu8bkp5y: #032712;\n  --foundry_nu8bkp5z: #082915;\n  --foundry_nu8bkp60: #0b361c;\n  --foundry_nu8bkp61: #0e4524;\n  --foundry_nu8bkp62: #11552c;\n  --foundry_nu8bkp63: #146535;\n  --foundry_nu8bkp64: #18763d;\n  --foundry_nu8bkp65: #1b8847;\n  --foundry_nu8bkp66: #1f9a50;\n  --foundry_nu8bkp67: #23ad5a;\n  --foundry_nu8bkp68: #26bf63;\n  --foundry_nu8bkp69: #2bd46f;\n  --foundry_nu8bkp6a: #58dd8d;\n  --foundry_nu8bkp6b: #84e6ab;\n  --foundry_nu8bkp6c: #a3ecc0;\n  --foundry_nu8bkp6d: #f1f4f9;\n  --foundry_nu8bkp6e: #e3eaf4;\n  --foundry_nu8bkp6f: #d4dfee;\n  --foundry_nu8bkp6g: #bdcfe6;\n  --foundry_nu8bkp6h: #a9c0de;\n  --foundry_nu8bkp6i: #8ba9d2;\n  --foundry_nu8bkp6j: #7296c8;\n  --foundry_nu8bkp6k: #5882bc;\n  --foundry_nu8bkp6l: #406faf;\n  --foundry_nu8bkp6m: #295b9f;\n  --foundry_nu8bkp6n: #17498b;\n  --foundry_nu8bkp6o: #0c3874;\n  --foundry_nu8bkp6p: #062a5b;\n  --foundry_nu8bkp6q: #032047;\n  --foundry_nu8bkp6r: #02234c;\n  --foundry_nu8bkp6s: #052e61;\n  --foundry_nu8bkp6t: #0c3b76;\n  --foundry_nu8bkp6u: #17498a;\n  --foundry_nu8bkp6v: #265899;\n  --foundry_nu8bkp6w: #3868a6;\n  --foundry_nu8bkp6x: #4c78b2;\n  --foundry_nu8bkp6y: #6189bd;\n  --foundry_nu8bkp6z: #7699c7;\n  --foundry_nu8bkp70: #8baad0;\n  --foundry_nu8bkp71: #a4bbda;\n  --foundry_nu8bkp72: #b4c7e0;\n  --foundry_nu8bkp73: #c4d3e7;\n  --foundry_nu8bkp74: #d2ddec;\n  --foundry_nu8bkp75: #f2f4f6;\n  --foundry_nu8bkp76: #e7ebee;\n  --foundry_nu8bkp77: #d9dfe4;\n  --foundry_nu8bkp78: #c5cfd6;\n  --foundry_nu8bkp79: #b2c0c8;\n  --foundry_nu8bkp7a: #98aab6;\n  --foundry_nu8bkp7b: #8297a5;\n  --foundry_nu8bkp7c: #6b8495;\n  --foundry_nu8bkp7d: #5a717f;\n  --foundry_nu8bkp7e: #4b5e6a;\n  --foundry_nu8bkp7f: #3d4c55;\n  --foundry_nu8bkp7g: #303b43;\n  --foundry_nu8bkp7h: #242d33;\n  --foundry_nu8bkp7i: #1b2226;\n  --foundry_nu8bkp7j: #1b252c;\n  --foundry_nu8bkp7k: #253037;\n  --foundry_nu8bkp7l: #323d44;\n  --foundry_nu8bkp7m: #404b52;\n  --foundry_nu8bkp7n: #4f5960;\n  --foundry_nu8bkp7o: #5f686e;\n  --foundry_nu8bkp7p: #6f787d;\n  --foundry_nu8bkp7q: #80888c;\n  --foundry_nu8bkp7r: #92989c;\n  --foundry_nu8bkp7s: #a3a8ac;\n  --foundry_nu8bkp7t: #b6babd;\n  --foundry_nu8bkp7u: #c2c6c8;\n  --foundry_nu8bkp7v: #d0d2d4;\n  --foundry_nu8bkp7w: #dadcde;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #082915;\n  --foundry_nu8bkp87: #02234c;\n  --foundry_nu8bkp88: #312000;\n  --foundry_nu8bkp89: #4b0808;\n  --foundry_nu8bkp8a: #1b252c;\n  --foundry_nu8bkp8b: #000000;\n  --foundry_nu8bkp8c: #141414;\n  --foundry_nu8bkp8d: #222222;\n  --foundry_nu8bkp8e: #3f3f3f;\n  --foundry_nu8bkp8f: #1a1a1a;\n  --foundry_nu8bkp8g: #141414;\n  --foundry_nu8bkp8h: #0e0e0e;\n  --foundry_nu8bkp8i: #212121;\n  --foundry_nu8bkp8j: #cecece;\n  --foundry_nu8bkp8k: #797979;\n  --foundry_nu8bkp8l: #989898;\n  --foundry_nu8bkp8m: #ebebeb;\n  --foundry_nu8bkp8n: #23ad5a;\n  --foundry_nu8bkp8o: #7699c7;\n  --foundry_nu8bkp8p: #ce8903;\n  --foundry_nu8bkp8q: #ef6f6f;\n  --foundry_nu8bkp8r: #92989c;\n  --foundry_nu8bkp8s: #cecece;\n  --foundry_nu8bkp8t: #797979;\n  --foundry_nu8bkp8u: #989898;\n  --foundry_nu8bkp8v: #b3b3b3;\n  --foundry_nu8bkp8w: #989898;\n  --foundry_nu8bkp8x: #7699c7;\n  --foundry_nu8bkp8y: #6189bd;\n  --foundry_nu8bkp8z: #8baad0;\n  --foundry_nu8bkp90: #4c78b2;\n  --foundry_nu8bkp91: #a4bbda;\n  --foundry_nu8bkp92: #23ad5a;\n  --foundry_nu8bkp93: #1f9a50;\n  --foundry_nu8bkp94: #26bf63;\n  --foundry_nu8bkp95: #1b8847;\n  --foundry_nu8bkp96: #2bd46f;\n  --foundry_nu8bkp97: #ce8903;\n  --foundry_nu8bkp98: #b87a00;\n  --foundry_nu8bkp99: #e29808;\n  --foundry_nu8bkp9a: #a36b00;\n  --foundry_nu8bkp9b: #f7aa13;\n  --foundry_nu8bkp9c: #ef6f6f;\n  --foundry_nu8bkp9d: #eb5050;\n  --foundry_nu8bkp9e: #f28989;\n  --foundry_nu8bkp9f: #e72424;\n  --foundry_nu8bkp9g: #f5a4a4;\n  --foundry_nu8bkp9h: #92989c;\n  --foundry_nu8bkp9i: #80888c;\n  --foundry_nu8bkp9j: #a3a8ac;\n  --foundry_nu8bkp9k: #6f787d;\n  --foundry_nu8bkp9l: #b6babd;\n  --foundry_nu8bkp9m: #3f3f3f;\n  --foundry_nu8bkp9n: #222222;\n  --foundry_nu8bkp9o: #5b5b5b;\n  --foundry_nu8bkp9p: #989898;\n  --foundry_nu8bkp9q: #4c78b2;\n  --foundry_nu8bkp9r: #3868a6;\n  --foundry_nu8bkp9s: #6189bd;\n  --foundry_nu8bkp9t: #1b8847;\n  --foundry_nu8bkp9u: #18763d;\n  --foundry_nu8bkp9v: #1f9a50;\n  --foundry_nu8bkp9w: #a36b00;\n  --foundry_nu8bkp9x: #8e5d00;\n  --foundry_nu8bkp9y: #b87a00;\n  --foundry_nu8bkp9z: #e72424;\n  --foundry_nu8bkpa0: #cc1717;\n  --foundry_nu8bkpa1: #eb5050;\n  --foundry_nu8bkpa2: #6f787d;\n  --foundry_nu8bkpa3: #5f686e;\n  --foundry_nu8bkpa4: #80888c;\n  --foundry_nu8bkpa5: #3f3f3f;\n  --foundry_nu8bkpa6: #222222;\n  --foundry_nu8bkpa7: #265899;\n  --foundry_nu8bkpa8: #17498a;\n  --foundry_nu8bkpa9: #3868a6;\n  --foundry_nu8bkpaa: #146535;\n  --foundry_nu8bkpab: #11552c;\n  --foundry_nu8bkpac: #18763d;\n  --foundry_nu8bkpad: #794f00;\n  --foundry_nu8bkpae: #654200;\n  --foundry_nu8bkpaf: #8e5d00;\n  --foundry_nu8bkpag: #b01414;\n  --foundry_nu8bkpah: #941111;\n  --foundry_nu8bkpai: #cc1717;\n  --foundry_nu8bkpaj: #4f5960;\n  --foundry_nu8bkpak: #404b52;\n  --foundry_nu8bkpal: #5f686e;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #fcaf17;\n}\n.foundry_nu8bkpas {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #cdcdcd;\n  --foundry_nu8bkp3i: #adadad;\n  --foundry_nu8bkp3j: #797979;\n  --foundry_nu8bkp3k: #555555;\n  --foundry_nu8bkp3l: #2e2e2e;\n  --foundry_nu8bkp3m: #000000;\n  --foundry_nu8bkp3n: #000000;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #ffffff;\n  --foundry_nu8bkp3q: #ffffff;\n  --foundry_nu8bkp3r: #ffffff;\n  --foundry_nu8bkp3s: #e4e4e4;\n  --foundry_nu8bkp3t: #b5b5b5;\n  --foundry_nu8bkp3u: #979797;\n  --foundry_nu8bkp3v: #6a6a6a;\n  --foundry_nu8bkp3w: #3c3c3c;\n  --foundry_nu8bkp3x: #111111;\n  --foundry_nu8bkp3y: #000000;\n  --foundry_nu8bkp3z: #000000;\n  --foundry_nu8bkp40: #000000;\n  --foundry_nu8bkp41: #ffdddd;\n  --foundry_nu8bkp42: #ffbdbd;\n  --foundry_nu8bkp43: #ff9c9c;\n  --foundry_nu8bkp44: #ff6d6d;\n  --foundry_nu8bkp45: #f04c4c;\n  --foundry_nu8bkp46: #c73737;\n  --foundry_nu8bkp47: #a42b2b;\n  --foundry_nu8bkp48: #802121;\n  --foundry_nu8bkp49: #5a1717;\n  --foundry_nu8bkp4a: #290b0b;\n  --foundry_nu8bkp4b: #000000;\n  --foundry_nu8bkp4c: #000000;\n  --foundry_nu8bkp4d: #000000;\n  --foundry_nu8bkp4e: #000000;\n  --foundry_nu8bkp4f: #feb1b1;\n  --foundry_nu8bkp4g: #fd8181;\n  --foundry_nu8bkp4h: #fc4242;\n  --foundry_nu8bkp4i: #e20404;\n  --foundry_nu8bkp4j: #b90303;\n  --foundry_nu8bkp4k: #940303;\n  --foundry_nu8bkp4l: #710202;\n  --foundry_nu8bkp4m: #4b0101;\n  --foundry_nu8bkp4n: #130000;\n  --foundry_nu8bkp4o: #000000;\n  --foundry_nu8bkp4p: #000000;\n  --foundry_nu8bkp4q: #000000;\n  --foundry_nu8bkp4r: #000000;\n  --foundry_nu8bkp4s: #000000;\n  --foundry_nu8bkp4t: #ffe492;\n  --foundry_nu8bkp4u: #ffc539;\n  --foundry_nu8bkp4v: #f4a811;\n  --foundry_nu8bkp4w: #d48e04;\n  --foundry_nu8bkp4x: #b87a00;\n  --foundry_nu8bkp4y: #966200;\n  --foundry_nu8bkp4z: #7a5000;\n  --foundry_nu8bkp50: #5e3e00;\n  --foundry_nu8bkp51: #412b00;\n  --foundry_nu8bkp52: #1d1300;\n  --foundry_nu8bkp53: #000000;\n  --foundry_nu8bkp54: #000000;\n  --foundry_nu8bkp55: #000000;\n  --foundry_nu8bkp56: #000000;\n  --foundry_nu8bkp57: #ffb720;\n  --foundry_nu8bkp58: #e19808;\n  --foundry_nu8bkp59: #bb7c00;\n  --foundry_nu8bkp5a: #9a6500;\n  --foundry_nu8bkp5b: #7c5200;\n  --foundry_nu8bkp5c: #624000;\n  --foundry_nu8bkp5d: #483000;\n  --foundry_nu8bkp5e: #2e1e00;\n  --foundry_nu8bkp5f: #070400;\n  --foundry_nu8bkp5g: #000000;\n  --foundry_nu8bkp5h: #000000;\n  --foundry_nu8bkp5i: #000000;\n  --foundry_nu8bkp5j: #000000;\n  --foundry_nu8bkp5k: #000000;\n  --foundry_nu8bkp5l: #adf5ca;\n  --foundry_nu8bkp5m: #5ce693;\n  --foundry_nu8bkp5n: #2ed16f;\n  --foundry_nu8bkp5o: #19b357;\n  --foundry_nu8bkp5p: #119c48;\n  --foundry_nu8bkp5q: #0a7e38;\n  --foundry_nu8bkp5r: #07662d;\n  --foundry_nu8bkp5s: #064f23;\n  --foundry_nu8bkp5t: #043719;\n  --foundry_nu8bkp5u: #03190c;\n  --foundry_nu8bkp5v: #000000;\n  --foundry_nu8bkp5w: #000000;\n  --foundry_nu8bkp5x: #000000;\n  --foundry_nu8bkp5y: #000000;\n  --foundry_nu8bkp5z: #57dd8c;\n  --foundry_nu8bkp60: #26be63;\n  --foundry_nu8bkp61: #1f9d51;\n  --foundry_nu8bkp62: #1a8043;\n  --foundry_nu8bkp63: #156836;\n  --foundry_nu8bkp64: #10522b;\n  --foundry_nu8bkp65: #0c3d1f;\n  --foundry_nu8bkp66: #082614;\n  --foundry_nu8bkp67: #010603;\n  --foundry_nu8bkp68: #000000;\n  --foundry_nu8bkp69: #000000;\n  --foundry_nu8bkp6a: #000000;\n  --foundry_nu8bkp6b: #000000;\n  --foundry_nu8bkp6c: #000000;\n  --foundry_nu8bkp6d: #dee6f2;\n  --foundry_nu8bkp6e: #bdcfe6;\n  --foundry_nu8bkp6f: #9fb9db;\n  --foundry_nu8bkp6g: #7c9fcc;\n  --foundry_nu8bkp6h: #6189c0;\n  --foundry_nu8bkp6i: #3e6eae;\n  --foundry_nu8bkp6j: #26589c;\n  --foundry_nu8bkp6k: #134384;\n  --foundry_nu8bkp6l: #072e62;\n  --foundry_nu8bkp6m: #02152e;\n  --foundry_nu8bkp6n: #000000;\n  --foundry_nu8bkp6o: #000000;\n  --foundry_nu8bkp6p: #000000;\n  --foundry_nu8bkp6q: #000000;\n  --foundry_nu8bkp6r: #b2c7e2;\n  --foundry_nu8bkp6s: #8aa9d2;\n  --foundry_nu8bkp6t: #638bc1;\n  --foundry_nu8bkp6u: #4271b0;\n  --foundry_nu8bkp6v: #285a9e;\n  --foundry_nu8bkp6w: #154688;\n  --foundry_nu8bkp6x: #09336c;\n  --foundry_nu8bkp6y: #032047;\n  --foundry_nu8bkp6z: #01050b;\n  --foundry_nu8bkp70: #000000;\n  --foundry_nu8bkp71: #000000;\n  --foundry_nu8bkp72: #000000;\n  --foundry_nu8bkp73: #000000;\n  --foundry_nu8bkp74: #000000;\n  --foundry_nu8bkp75: #e0e6e9;\n  --foundry_nu8bkp76: #c5cfd6;\n  --foundry_nu8bkp77: #aab9c2;\n  --foundry_nu8bkp78: #8b9fac;\n  --foundry_nu8bkp79: #728a9a;\n  --foundry_nu8bkp7a: #5a707e;\n  --foundry_nu8bkp7b: #495b67;\n  --foundry_nu8bkp7c: #39464f;\n  --foundry_nu8bkp7d: #273037;\n  --foundry_nu8bkp7e: #111518;\n  --foundry_nu8bkp7f: #000000;\n  --foundry_nu8bkp7g: #000000;\n  --foundry_nu8bkp7h: #000000;\n  --foundry_nu8bkp7i: #000000;\n  --foundry_nu8bkp7j: #c1c5c8;\n  --foundry_nu8bkp7k: #a1a7ab;\n  --foundry_nu8bkp7l: #838a8f;\n  --foundry_nu8bkp7m: #697177;\n  --foundry_nu8bkp7n: #525c62;\n  --foundry_nu8bkp7o: #3e484f;\n  --foundry_nu8bkp7p: #2b363d;\n  --foundry_nu8bkp7q: #182229;\n  --foundry_nu8bkp7r: #030506;\n  --foundry_nu8bkp7s: #000000;\n  --foundry_nu8bkp7t: #000000;\n  --foundry_nu8bkp7u: #000000;\n  --foundry_nu8bkp7v: #000000;\n  --foundry_nu8bkp7w: #000000;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #57dd8c;\n  --foundry_nu8bkp87: #b2c7e2;\n  --foundry_nu8bkp88: #ffb720;\n  --foundry_nu8bkp89: #feb1b1;\n  --foundry_nu8bkp8a: #c1c5c8;\n  --foundry_nu8bkp8b: #ffffff;\n  --foundry_nu8bkp8c: #ffffff;\n  --foundry_nu8bkp8d: #e4e4e4;\n  --foundry_nu8bkp8e: #ffffff;\n  --foundry_nu8bkp8f: #ffffff;\n  --foundry_nu8bkp8g: #e4e4e4;\n  --foundry_nu8bkp8h: #ffffff;\n  --foundry_nu8bkp8i: #000000;\n  --foundry_nu8bkp8j: #000000;\n  --foundry_nu8bkp8k: #3c3c3c;\n  --foundry_nu8bkp8l: #111111;\n  --foundry_nu8bkp8m: #000000;\n  --foundry_nu8bkp8n: #010603;\n  --foundry_nu8bkp8o: #01050b;\n  --foundry_nu8bkp8p: #070400;\n  --foundry_nu8bkp8q: #130000;\n  --foundry_nu8bkp8r: #030506;\n  --foundry_nu8bkp8s: #000000;\n  --foundry_nu8bkp8t: #3c3c3c;\n  --foundry_nu8bkp8u: #111111;\n  --foundry_nu8bkp8v: #000000;\n  --foundry_nu8bkp8w: #111111;\n  --foundry_nu8bkp8x: #01050b;\n  --foundry_nu8bkp8y: #032047;\n  --foundry_nu8bkp8z: #000000;\n  --foundry_nu8bkp90: #09336c;\n  --foundry_nu8bkp91: #000000;\n  --foundry_nu8bkp92: #010603;\n  --foundry_nu8bkp93: #082614;\n  --foundry_nu8bkp94: #000000;\n  --foundry_nu8bkp95: #0c3d1f;\n  --foundry_nu8bkp96: #000000;\n  --foundry_nu8bkp97: #070400;\n  --foundry_nu8bkp98: #2e1e00;\n  --foundry_nu8bkp99: #000000;\n  --foundry_nu8bkp9a: #483000;\n  --foundry_nu8bkp9b: #000000;\n  --foundry_nu8bkp9c: #130000;\n  --foundry_nu8bkp9d: #4b0101;\n  --foundry_nu8bkp9e: #000000;\n  --foundry_nu8bkp9f: #710202;\n  --foundry_nu8bkp9g: #000000;\n  --foundry_nu8bkp9h: #030506;\n  --foundry_nu8bkp9i: #182229;\n  --foundry_nu8bkp9j: #000000;\n  --foundry_nu8bkp9k: #2b363d;\n  --foundry_nu8bkp9l: #000000;\n  --foundry_nu8bkp9m: #979797;\n  --foundry_nu8bkp9n: #b5b5b5;\n  --foundry_nu8bkp9o: #6a6a6a;\n  --foundry_nu8bkp9p: #111111;\n  --foundry_nu8bkp9q: #09336c;\n  --foundry_nu8bkp9r: #154688;\n  --foundry_nu8bkp9s: #032047;\n  --foundry_nu8bkp9t: #0c3d1f;\n  --foundry_nu8bkp9u: #10522b;\n  --foundry_nu8bkp9v: #082614;\n  --foundry_nu8bkp9w: #483000;\n  --foundry_nu8bkp9x: #624000;\n  --foundry_nu8bkp9y: #2e1e00;\n  --foundry_nu8bkp9z: #710202;\n  --foundry_nu8bkpa0: #940303;\n  --foundry_nu8bkpa1: #4b0101;\n  --foundry_nu8bkpa2: #2b363d;\n  --foundry_nu8bkpa3: #3e484f;\n  --foundry_nu8bkpa4: #182229;\n  --foundry_nu8bkpa5: #979797;\n  --foundry_nu8bkpa6: rgba(0, 0, 0, 0);\n  --foundry_nu8bkpa7: #285a9e;\n  --foundry_nu8bkpa8: #4271b0;\n  --foundry_nu8bkpa9: #154688;\n  --foundry_nu8bkpaa: #156836;\n  --foundry_nu8bkpab: #1a8043;\n  --foundry_nu8bkpac: #10522b;\n  --foundry_nu8bkpad: #7c5200;\n  --foundry_nu8bkpae: #9a6500;\n  --foundry_nu8bkpaf: #624000;\n  --foundry_nu8bkpag: #b90303;\n  --foundry_nu8bkpah: #e20404;\n  --foundry_nu8bkpai: #940303;\n  --foundry_nu8bkpaj: #525c62;\n  --foundry_nu8bkpak: #697177;\n  --foundry_nu8bkpal: #3e484f;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #b87a00;\n}\n.foundry_nu8bkpat {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #cdcdcd;\n  --foundry_nu8bkp3i: #adadad;\n  --foundry_nu8bkp3j: #797979;\n  --foundry_nu8bkp3k: #555555;\n  --foundry_nu8bkp3l: #2e2e2e;\n  --foundry_nu8bkp3m: #000000;\n  --foundry_nu8bkp3n: #000000;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #000000;\n  --foundry_nu8bkp3q: #000000;\n  --foundry_nu8bkp3r: #070707;\n  --foundry_nu8bkp3s: #1a1a1a;\n  --foundry_nu8bkp3t: #2f2f2f;\n  --foundry_nu8bkp3u: #656565;\n  --foundry_nu8bkp3v: #939393;\n  --foundry_nu8bkp3w: #c4c4c4;\n  --foundry_nu8bkp3x: #f5f5f5;\n  --foundry_nu8bkp3y: #ffffff;\n  --foundry_nu8bkp3z: #ffffff;\n  --foundry_nu8bkp40: #ffffff;\n  --foundry_nu8bkp41: #ffdddd;\n  --foundry_nu8bkp42: #ffbdbd;\n  --foundry_nu8bkp43: #ff9c9c;\n  --foundry_nu8bkp44: #ff6d6d;\n  --foundry_nu8bkp45: #f04c4c;\n  --foundry_nu8bkp46: #c73737;\n  --foundry_nu8bkp47: #a42b2b;\n  --foundry_nu8bkp48: #802121;\n  --foundry_nu8bkp49: #5a1717;\n  --foundry_nu8bkp4a: #290b0b;\n  --foundry_nu8bkp4b: #000000;\n  --foundry_nu8bkp4c: #000000;\n  --foundry_nu8bkp4d: #000000;\n  --foundry_nu8bkp4e: #000000;\n  --foundry_nu8bkp4f: #670b0b;\n  --foundry_nu8bkp4g: #911010;\n  --foundry_nu8bkp4h: #bd1515;\n  --foundry_nu8bkp4i: #e62323;\n  --foundry_nu8bkp4j: #ed6060;\n  --foundry_nu8bkp4k: #f28989;\n  --foundry_nu8bkp4l: #f6aeae;\n  --foundry_nu8bkp4m: #fad0d0;\n  --foundry_nu8bkp4n: #fef2f2;\n  --foundry_nu8bkp4o: #ffffff;\n  --foundry_nu8bkp4p: #ffffff;\n  --foundry_nu8bkp4q: #ffffff;\n  --foundry_nu8bkp4r: #ffffff;\n  --foundry_nu8bkp4s: #ffffff;\n  --foundry_nu8bkp4t: #ffe492;\n  --foundry_nu8bkp4u: #ffc539;\n  --foundry_nu8bkp4v: #f4a811;\n  --foundry_nu8bkp4w: #d48e04;\n  --foundry_nu8bkp4x: #b87a00;\n  --foundry_nu8bkp4y: #966200;\n  --foundry_nu8bkp4z: #7a5000;\n  --foundry_nu8bkp50: #5e3e00;\n  --foundry_nu8bkp51: #412b00;\n  --foundry_nu8bkp52: #1d1300;\n  --foundry_nu8bkp53: #000000;\n  --foundry_nu8bkp54: #000000;\n  --foundry_nu8bkp55: #000000;\n  --foundry_nu8bkp56: #000000;\n  --foundry_nu8bkp57: #442d00;\n  --foundry_nu8bkp58: #634100;\n  --foundry_nu8bkp59: #825600;\n  --foundry_nu8bkp5a: #a26b00;\n  --foundry_nu8bkp5b: #c28101;\n  --foundry_nu8bkp5c: #e29808;\n  --foundry_nu8bkp5d: #feb21a;\n  --foundry_nu8bkp5e: #ffd665;\n  --foundry_nu8bkp5f: #fff4d7;\n  --foundry_nu8bkp5g: #ffffff;\n  --foundry_nu8bkp5h: #ffffff;\n  --foundry_nu8bkp5i: #ffffff;\n  --foundry_nu8bkp5j: #ffffff;\n  --foundry_nu8bkp5k: #ffffff;\n  --foundry_nu8bkp5l: #adf5ca;\n  --foundry_nu8bkp5m: #5ce693;\n  --foundry_nu8bkp5n: #2ed16f;\n  --foundry_nu8bkp5o: #19b357;\n  --foundry_nu8bkp5p: #119c48;\n  --foundry_nu8bkp5q: #0a7e38;\n  --foundry_nu8bkp5r: #07662d;\n  --foundry_nu8bkp5s: #064f23;\n  --foundry_nu8bkp5t: #043719;\n  --foundry_nu8bkp5u: #03190c;\n  --foundry_nu8bkp5v: #000000;\n  --foundry_nu8bkp5w: #000000;\n  --foundry_nu8bkp5x: #000000;\n  --foundry_nu8bkp5y: #000000;\n  --foundry_nu8bkp5z: #0c3a1e;\n  --foundry_nu8bkp60: #11522b;\n  --foundry_nu8bkp61: #166d39;\n  --foundry_nu8bkp62: #1b8746;\n  --foundry_nu8bkp63: #21a355;\n  --foundry_nu8bkp64: #26bf63;\n  --foundry_nu8bkp65: #44da80;\n  --foundry_nu8bkp66: #9eebbd;\n  --foundry_nu8bkp67: #e4faec;\n  --foundry_nu8bkp68: #ffffff;\n  --foundry_nu8bkp69: #ffffff;\n  --foundry_nu8bkp6a: #ffffff;\n  --foundry_nu8bkp6b: #ffffff;\n  --foundry_nu8bkp6c: #ffffff;\n  --foundry_nu8bkp6d: #dee6f2;\n  --foundry_nu8bkp6e: #bdcfe6;\n  --foundry_nu8bkp6f: #9fb9db;\n  --foundry_nu8bkp6g: #7c9fcc;\n  --foundry_nu8bkp6h: #6189c0;\n  --foundry_nu8bkp6i: #3e6eae;\n  --foundry_nu8bkp6j: #26589c;\n  --foundry_nu8bkp6k: #134384;\n  --foundry_nu8bkp6l: #072e62;\n  --foundry_nu8bkp6m: #02152e;\n  --foundry_nu8bkp6n: #000000;\n  --foundry_nu8bkp6o: #000000;\n  --foundry_nu8bkp6p: #000000;\n  --foundry_nu8bkp6q: #000000;\n  --foundry_nu8bkp6r: #073065;\n  --foundry_nu8bkp6s: #154787;\n  --foundry_nu8bkp6t: #2e609f;\n  --foundry_nu8bkp6u: #4b78b2;\n  --foundry_nu8bkp6v: #6a91c1;\n  --foundry_nu8bkp6w: #8ba9d0;\n  --foundry_nu8bkp6x: #adc2de;\n  --foundry_nu8bkp6y: #cfdbeb;\n  --foundry_nu8bkp6z: #f1f5f9;\n  --foundry_nu8bkp70: #ffffff;\n  --foundry_nu8bkp71: #ffffff;\n  --foundry_nu8bkp72: #ffffff;\n  --foundry_nu8bkp73: #ffffff;\n  --foundry_nu8bkp74: #ffffff;\n  --foundry_nu8bkp75: #e0e6e9;\n  --foundry_nu8bkp76: #c5cfd6;\n  --foundry_nu8bkp77: #aab9c2;\n  --foundry_nu8bkp78: #8b9fac;\n  --foundry_nu8bkp79: #728a9a;\n  --foundry_nu8bkp7a: #5a707e;\n  --foundry_nu8bkp7b: #495b67;\n  --foundry_nu8bkp7c: #39464f;\n  --foundry_nu8bkp7d: #273037;\n  --foundry_nu8bkp7e: #111518;\n  --foundry_nu8bkp7f: #000000;\n  --foundry_nu8bkp7g: #000000;\n  --foundry_nu8bkp7h: #000000;\n  --foundry_nu8bkp7i: #000000;\n  --foundry_nu8bkp7j: #28333a;\n  --foundry_nu8bkp7k: #3e4950;\n  --foundry_nu8bkp7l: #576067;\n  --foundry_nu8bkp7m: #6f777d;\n  --foundry_nu8bkp7n: #888f94;\n  --foundry_nu8bkp7o: #a2a8ab;\n  --foundry_nu8bkp7p: #bdc1c4;\n  --foundry_nu8bkp7q: #d8dadc;\n  --foundry_nu8bkp7r: #f4f4f5;\n  --foundry_nu8bkp7s: #ffffff;\n  --foundry_nu8bkp7t: #ffffff;\n  --foundry_nu8bkp7u: #ffffff;\n  --foundry_nu8bkp7v: #ffffff;\n  --foundry_nu8bkp7w: #ffffff;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #0c3a1e;\n  --foundry_nu8bkp87: #073065;\n  --foundry_nu8bkp88: #442d00;\n  --foundry_nu8bkp89: #670b0b;\n  --foundry_nu8bkp8a: #28333a;\n  --foundry_nu8bkp8b: #000000;\n  --foundry_nu8bkp8c: #070707;\n  --foundry_nu8bkp8d: #2f2f2f;\n  --foundry_nu8bkp8e: #656565;\n  --foundry_nu8bkp8f: #1a1a1a;\n  --foundry_nu8bkp8g: #070707;\n  --foundry_nu8bkp8h: #000000;\n  --foundry_nu8bkp8i: #000000;\n  --foundry_nu8bkp8j: #ffffff;\n  --foundry_nu8bkp8k: #c4c4c4;\n  --foundry_nu8bkp8l: #f5f5f5;\n  --foundry_nu8bkp8m: #ffffff;\n  --foundry_nu8bkp8n: #e4faec;\n  --foundry_nu8bkp8o: #f1f5f9;\n  --foundry_nu8bkp8p: #fff4d7;\n  --foundry_nu8bkp8q: #fef2f2;\n  --foundry_nu8bkp8r: #f4f4f5;\n  --foundry_nu8bkp8s: #ffffff;\n  --foundry_nu8bkp8t: #c4c4c4;\n  --foundry_nu8bkp8u: #f5f5f5;\n  --foundry_nu8bkp8v: #ffffff;\n  --foundry_nu8bkp8w: #f5f5f5;\n  --foundry_nu8bkp8x: #f1f5f9;\n  --foundry_nu8bkp8y: #cfdbeb;\n  --foundry_nu8bkp8z: #ffffff;\n  --foundry_nu8bkp90: #adc2de;\n  --foundry_nu8bkp91: #ffffff;\n  --foundry_nu8bkp92: #e4faec;\n  --foundry_nu8bkp93: #9eebbd;\n  --foundry_nu8bkp94: #ffffff;\n  --foundry_nu8bkp95: #44da80;\n  --foundry_nu8bkp96: #ffffff;\n  --foundry_nu8bkp97: #fff4d7;\n  --foundry_nu8bkp98: #ffd665;\n  --foundry_nu8bkp99: #ffffff;\n  --foundry_nu8bkp9a: #feb21a;\n  --foundry_nu8bkp9b: #ffffff;\n  --foundry_nu8bkp9c: #fef2f2;\n  --foundry_nu8bkp9d: #fad0d0;\n  --foundry_nu8bkp9e: #ffffff;\n  --foundry_nu8bkp9f: #f6aeae;\n  --foundry_nu8bkp9g: #ffffff;\n  --foundry_nu8bkp9h: #f4f4f5;\n  --foundry_nu8bkp9i: #d8dadc;\n  --foundry_nu8bkp9j: #ffffff;\n  --foundry_nu8bkp9k: #bdc1c4;\n  --foundry_nu8bkp9l: #ffffff;\n  --foundry_nu8bkp9m: #656565;\n  --foundry_nu8bkp9n: #2f2f2f;\n  --foundry_nu8bkp9o: #939393;\n  --foundry_nu8bkp9p: #f5f5f5;\n  --foundry_nu8bkp9q: #adc2de;\n  --foundry_nu8bkp9r: #8ba9d0;\n  --foundry_nu8bkp9s: #cfdbeb;\n  --foundry_nu8bkp9t: #44da80;\n  --foundry_nu8bkp9u: #26bf63;\n  --foundry_nu8bkp9v: #9eebbd;\n  --foundry_nu8bkp9w: #feb21a;\n  --foundry_nu8bkp9x: #e29808;\n  --foundry_nu8bkp9y: #ffd665;\n  --foundry_nu8bkp9z: #f6aeae;\n  --foundry_nu8bkpa0: #f28989;\n  --foundry_nu8bkpa1: #fad0d0;\n  --foundry_nu8bkpa2: #bdc1c4;\n  --foundry_nu8bkpa3: #a2a8ab;\n  --foundry_nu8bkpa4: #d8dadc;\n  --foundry_nu8bkpa5: #656565;\n  --foundry_nu8bkpa6: #2f2f2f;\n  --foundry_nu8bkpa7: #6a91c1;\n  --foundry_nu8bkpa8: #4b78b2;\n  --foundry_nu8bkpa9: #8ba9d0;\n  --foundry_nu8bkpaa: #21a355;\n  --foundry_nu8bkpab: #1b8746;\n  --foundry_nu8bkpac: #26bf63;\n  --foundry_nu8bkpad: #c28101;\n  --foundry_nu8bkpae: #a26b00;\n  --foundry_nu8bkpaf: #e29808;\n  --foundry_nu8bkpag: #ed6060;\n  --foundry_nu8bkpah: #e62323;\n  --foundry_nu8bkpai: #f28989;\n  --foundry_nu8bkpaj: #888f94;\n  --foundry_nu8bkpak: #6f777d;\n  --foundry_nu8bkpal: #a2a8ab;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #b87a00;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry-int/tokens/dist/client/tokens/tokens.css"],
        names: [],
        mappings: "AAAA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,qDAAqD;EACrD,qDAAqD;EACrD,qDAAqD;EACrD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,uDAAuD;EACvD,uDAAuD;EACvD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,yBAAyB;EACzB,yCAAyC;EACzC,sCAAsC;EACtC,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,sBAAsB;EACtB,sBAAsB;EACtB,wBAAwB;EACxB,yBAAyB;EACzB,uBAAuB;EACvB,wBAAwB;EACxB,wBAAwB;EACxB,uDAAuD;EACvD,yCAAyC;EACzC,yBAAyB;EACzB,sCAAsC;EACtC,yBAAyB;EACzB,4BAA4B;EAC5B,4BAA4B;EAC5B,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,wBAAwB;EACxB,wBAAwB;AAC1B;AACA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,oCAAoC;EACpC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;AAC7B;AACA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;AAC7B;AACA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,oCAAoC;EACpC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;AAC7B;AACA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;AAC7B",
        sourcesContent: [".foundry_nu8bkp1 {\n  --foundry_nu8bkp2: 0px;\n  --foundry_nu8bkp3: 2px;\n  --foundry_nu8bkp4: 4px;\n  --foundry_nu8bkp5: 8px;\n  --foundry_nu8bkp6: 12px;\n  --foundry_nu8bkp7: 16px;\n  --foundry_nu8bkp8: 24px;\n  --foundry_nu8bkp9: 32px;\n  --foundry_nu8bkpa: 9999px;\n  --foundry_nu8bkpb: 1000px;\n  --foundry_nu8bkpc: 0px;\n  --foundry_nu8bkpd: 1px;\n  --foundry_nu8bkpe: 2px;\n  --foundry_nu8bkpf: 3px;\n  --foundry_nu8bkpg: 4px;\n  --foundry_nu8bkph: calc(2px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpi: calc(4px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpj: calc(8px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpk: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpl: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpm: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpn: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpo: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpp: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpq: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpr: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkps: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpt: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpu: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpv: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpw: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpx: calc(96px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpy: calc(112px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpz: calc(128px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp10: calc(2px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp11: calc(4px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp12: calc(8px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp13: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp14: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp15: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp16: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp17: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp18: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp19: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1a: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1b: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1c: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1d: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1e: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1f: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1g: calc(96px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1h: calc(112px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1i: calc(128px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1j: calc(144px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1k: calc(160px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1l: calc(176px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1m: calc(200px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1n: calc(240px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1o: calc(280px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1p: calc(320px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1q: calc(360px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1r: calc(400px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1s: calc(500px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1t: Arial;\n  --foundry_nu8bkp1u: Helvetica Now Display;\n  --foundry_nu8bkp1v: Helvetica Now Text;\n  --foundry_nu8bkp1w: Consolas;\n  --foundry_nu8bkp1x: 400;\n  --foundry_nu8bkp1y: 700;\n  --foundry_nu8bkp1z: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp20: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp21: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp22: calc(18px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp23: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp24: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp25: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp26: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp27: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp28: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp29: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2a: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2b: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2c: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2d: 0%;\n  --foundry_nu8bkp2e: 1%;\n  --foundry_nu8bkp2f: 2.5%;\n  --foundry_nu8bkp2g: -2.5%;\n  --foundry_nu8bkp2h: -1%;\n  --foundry_nu8bkp2i: 130%;\n  --foundry_nu8bkp2j: 150%;\n  --foundry_nu8bkp2k: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2l: Helvetica Now Display;\n  --foundry_nu8bkp2m: Arial;\n  --foundry_nu8bkp2n: Helvetica Now Text;\n  --foundry_nu8bkp2o: Arial;\n  --foundry_nu8bkp2p: Consolas;\n  --foundry_nu8bkp2q: Consolas;\n  --foundry_nu8bkp2r: -2.5%;\n  --foundry_nu8bkp2s: -2.5%;\n  --foundry_nu8bkp2t: -2.5%;\n  --foundry_nu8bkp2u: -2.5%;\n  --foundry_nu8bkp2v: 1%;\n  --foundry_nu8bkp2w: 1%;\n  --foundry_nu8bkp2x: 400;\n  --foundry_nu8bkp2y: 700;\n  --foundry_nu8bkp2z: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp30: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp31: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp32: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp33: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp34: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp35: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp36: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp37: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp38: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp39: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp3a: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp3b: 130%;\n  --foundry_nu8bkp3c: 150%;\n}\n.foundry_nu8bkpaq {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #eaeaea;\n  --foundry_nu8bkp3i: #d8d8d8;\n  --foundry_nu8bkp3j: #b2b2b2;\n  --foundry_nu8bkp3k: #919191;\n  --foundry_nu8bkp3l: #6d6d6d;\n  --foundry_nu8bkp3m: #464646;\n  --foundry_nu8bkp3n: #212121;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #ffffff;\n  --foundry_nu8bkp3q: #ffffff;\n  --foundry_nu8bkp3r: #f5f5f5;\n  --foundry_nu8bkp3s: #e4e4e4;\n  --foundry_nu8bkp3t: #d1d1d1;\n  --foundry_nu8bkp3u: #c0c0c0;\n  --foundry_nu8bkp3v: #9f9f9f;\n  --foundry_nu8bkp3w: #767676;\n  --foundry_nu8bkp3x: #585858;\n  --foundry_nu8bkp3y: #414141;\n  --foundry_nu8bkp3z: #2d2d2d;\n  --foundry_nu8bkp40: #151515;\n  --foundry_nu8bkp41: #fff3f3;\n  --foundry_nu8bkp42: #ffe3e3;\n  --foundry_nu8bkp43: #ffd3d3;\n  --foundry_nu8bkp44: #ffbdbd;\n  --foundry_nu8bkp45: #ffa5a5;\n  --foundry_nu8bkp46: #ff8181;\n  --foundry_nu8bkp47: #ff5c5c;\n  --foundry_nu8bkp48: #e74646;\n  --foundry_nu8bkp49: #c93838;\n  --foundry_nu8bkp4a: #a92d2d;\n  --foundry_nu8bkp4b: #8b2323;\n  --foundry_nu8bkp4c: #6d1c1c;\n  --foundry_nu8bkp4d: #541515;\n  --foundry_nu8bkp4e: #401010;\n  --foundry_nu8bkp4f: #fecccc;\n  --foundry_nu8bkp4g: #feb6b6;\n  --foundry_nu8bkp4h: #fd9d9d;\n  --foundry_nu8bkp4i: #fd7d7d;\n  --foundry_nu8bkp4j: #fc5858;\n  --foundry_nu8bkp4k: #fb1e1e;\n  --foundry_nu8bkp4l: #e10404;\n  --foundry_nu8bkp4m: #c50303;\n  --foundry_nu8bkp4n: #aa0303;\n  --foundry_nu8bkp4o: #920303;\n  --foundry_nu8bkp4p: #7e0202;\n  --foundry_nu8bkp4q: #690202;\n  --foundry_nu8bkp4r: #570202;\n  --foundry_nu8bkp4s: #480101;\n  --foundry_nu8bkp4t: #fff4d4;\n  --foundry_nu8bkp4u: #ffe8a4;\n  --foundry_nu8bkp4v: #ffdb72;\n  --foundry_nu8bkp4w: #ffc539;\n  --foundry_nu8bkp4x: #fcaf17;\n  --foundry_nu8bkp4y: #e19808;\n  --foundry_nu8bkp4z: #ca8602;\n  --foundry_nu8bkp50: #b07400;\n  --foundry_nu8bkp51: #976300;\n  --foundry_nu8bkp52: #7e5200;\n  --foundry_nu8bkp53: #654200;\n  --foundry_nu8bkp54: #503400;\n  --foundry_nu8bkp55: #3c2800;\n  --foundry_nu8bkp56: #2e1e00;\n  --foundry_nu8bkp57: #ffd258;\n  --foundry_nu8bkp58: #ffbd29;\n  --foundry_nu8bkp59: #f4a811;\n  --foundry_nu8bkp5a: #dd9507;\n  --foundry_nu8bkp5b: #c68402;\n  --foundry_nu8bkp5c: #af7400;\n  --foundry_nu8bkp5d: #9a6500;\n  --foundry_nu8bkp5e: #855800;\n  --foundry_nu8bkp5f: #734b00;\n  --foundry_nu8bkp5g: #624000;\n  --foundry_nu8bkp5h: #523600;\n  --foundry_nu8bkp5i: #442c00;\n  --foundry_nu8bkp5j: #372400;\n  --foundry_nu8bkp5k: #2d1d00;\n  --foundry_nu8bkp5l: #e0fbea;\n  --foundry_nu8bkp5m: #bef7d5;\n  --foundry_nu8bkp5n: #93f2b9;\n  --foundry_nu8bkp5o: #5ce693;\n  --foundry_nu8bkp5p: #39d878;\n  --foundry_nu8bkp5q: #20c05f;\n  --foundry_nu8bkp5r: #15aa51;\n  --foundry_nu8bkp5s: #0f9444;\n  --foundry_nu8bkp5t: #0b7f39;\n  --foundry_nu8bkp5u: #08692f;\n  --foundry_nu8bkp5v: #065626;\n  --foundry_nu8bkp5w: #05431e;\n  --foundry_nu8bkp5x: #043317;\n  --foundry_nu8bkp5y: #032712;\n  --foundry_nu8bkp5z: #96eab8;\n  --foundry_nu8bkp60: #64e096;\n  --foundry_nu8bkp61: #2ad16c;\n  --foundry_nu8bkp62: #26bb61;\n  --foundry_nu8bkp63: #21a657;\n  --foundry_nu8bkp64: #1e934c;\n  --foundry_nu8bkp65: #1a8043;\n  --foundry_nu8bkp66: #166f3a;\n  --foundry_nu8bkp67: #135f32;\n  --foundry_nu8bkp68: #10522a;\n  --foundry_nu8bkp69: #0e4424;\n  --foundry_nu8bkp6a: #0b381d;\n  --foundry_nu8bkp6b: #092e18;\n  --foundry_nu8bkp6c: #082513;\n  --foundry_nu8bkp6d: #f1f4f9;\n  --foundry_nu8bkp6e: #e3eaf4;\n  --foundry_nu8bkp6f: #d4dfee;\n  --foundry_nu8bkp6g: #bdcfe6;\n  --foundry_nu8bkp6h: #a9c0de;\n  --foundry_nu8bkp6i: #8ba9d2;\n  --foundry_nu8bkp6j: #7296c8;\n  --foundry_nu8bkp6k: #5882bc;\n  --foundry_nu8bkp6l: #406faf;\n  --foundry_nu8bkp6m: #295b9f;\n  --foundry_nu8bkp6n: #17498b;\n  --foundry_nu8bkp6o: #0c3874;\n  --foundry_nu8bkp6p: #062a5b;\n  --foundry_nu8bkp6q: #032047;\n  --foundry_nu8bkp6r: #ccd9eb;\n  --foundry_nu8bkp6s: #b7cae4;\n  --foundry_nu8bkp6t: #9fb9db;\n  --foundry_nu8bkp6u: #86a6d1;\n  --foundry_nu8bkp6v: #6e94c6;\n  --foundry_nu8bkp6w: #5782bc;\n  --foundry_nu8bkp6x: #4271b0;\n  --foundry_nu8bkp6y: #2f61a4;\n  --foundry_nu8bkp6z: #205396;\n  --foundry_nu8bkp70: #144587;\n  --foundry_nu8bkp71: #0d3a76;\n  --foundry_nu8bkp72: #082f64;\n  --foundry_nu8bkp73: #052654;\n  --foundry_nu8bkp74: #031f45;\n  --foundry_nu8bkp75: #f2f4f6;\n  --foundry_nu8bkp76: #e7ebee;\n  --foundry_nu8bkp77: #d9dfe4;\n  --foundry_nu8bkp78: #c5cfd6;\n  --foundry_nu8bkp79: #b2c0c8;\n  --foundry_nu8bkp7a: #98aab6;\n  --foundry_nu8bkp7b: #8297a5;\n  --foundry_nu8bkp7c: #6b8495;\n  --foundry_nu8bkp7d: #5a717f;\n  --foundry_nu8bkp7e: #4b5e6a;\n  --foundry_nu8bkp7f: #3d4c55;\n  --foundry_nu8bkp7g: #303b43;\n  --foundry_nu8bkp7h: #242d33;\n  --foundry_nu8bkp7i: #1b2226;\n  --foundry_nu8bkp7j: #d6d8da;\n  --foundry_nu8bkp7k: #c6cacc;\n  --foundry_nu8bkp7l: #b3b7ba;\n  --foundry_nu8bkp7m: #9fa5a9;\n  --foundry_nu8bkp7n: #8b9297;\n  --foundry_nu8bkp7o: #798187;\n  --foundry_nu8bkp7p: #697177;\n  --foundry_nu8bkp7q: #596269;\n  --foundry_nu8bkp7r: #4a555b;\n  --foundry_nu8bkp7s: #3e484f;\n  --foundry_nu8bkp7t: #323d43;\n  --foundry_nu8bkp7u: #273239;\n  --foundry_nu8bkp7v: #1f2930;\n  --foundry_nu8bkp7w: #182128;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #96eab8;\n  --foundry_nu8bkp87: #ccd9eb;\n  --foundry_nu8bkp88: #ffd258;\n  --foundry_nu8bkp89: #fecccc;\n  --foundry_nu8bkp8a: #d6d8da;\n  --foundry_nu8bkp8b: #ffffff;\n  --foundry_nu8bkp8c: #f5f5f5;\n  --foundry_nu8bkp8d: #e4e4e4;\n  --foundry_nu8bkp8e: #ffffff;\n  --foundry_nu8bkp8f: #f5f5f5;\n  --foundry_nu8bkp8g: #e4e4e4;\n  --foundry_nu8bkp8h: #ffffff;\n  --foundry_nu8bkp8i: #464646;\n  --foundry_nu8bkp8j: #2d2d2d;\n  --foundry_nu8bkp8k: #767676;\n  --foundry_nu8bkp8l: #585858;\n  --foundry_nu8bkp8m: #151515;\n  --foundry_nu8bkp8n: #135f32;\n  --foundry_nu8bkp8o: #205396;\n  --foundry_nu8bkp8p: #734b00;\n  --foundry_nu8bkp8q: #aa0303;\n  --foundry_nu8bkp8r: #4a555b;\n  --foundry_nu8bkp8s: #2d2d2d;\n  --foundry_nu8bkp8t: #767676;\n  --foundry_nu8bkp8u: #585858;\n  --foundry_nu8bkp8v: #414141;\n  --foundry_nu8bkp8w: #585858;\n  --foundry_nu8bkp8x: #205396;\n  --foundry_nu8bkp8y: #2f61a4;\n  --foundry_nu8bkp8z: #144587;\n  --foundry_nu8bkp90: #4271b0;\n  --foundry_nu8bkp91: #0d3a76;\n  --foundry_nu8bkp92: #135f32;\n  --foundry_nu8bkp93: #166f3a;\n  --foundry_nu8bkp94: #10522a;\n  --foundry_nu8bkp95: #1a8043;\n  --foundry_nu8bkp96: #0e4424;\n  --foundry_nu8bkp97: #734b00;\n  --foundry_nu8bkp98: #855800;\n  --foundry_nu8bkp99: #624000;\n  --foundry_nu8bkp9a: #9a6500;\n  --foundry_nu8bkp9b: #523600;\n  --foundry_nu8bkp9c: #aa0303;\n  --foundry_nu8bkp9d: #c50303;\n  --foundry_nu8bkp9e: #920303;\n  --foundry_nu8bkp9f: #e10404;\n  --foundry_nu8bkp9g: #7e0202;\n  --foundry_nu8bkp9h: #4a555b;\n  --foundry_nu8bkp9i: #596269;\n  --foundry_nu8bkp9j: #3e484f;\n  --foundry_nu8bkp9k: #697177;\n  --foundry_nu8bkp9l: #323d43;\n  --foundry_nu8bkp9m: #c0c0c0;\n  --foundry_nu8bkp9n: #d1d1d1;\n  --foundry_nu8bkp9o: #9f9f9f;\n  --foundry_nu8bkp9p: #585858;\n  --foundry_nu8bkp9q: #4271b0;\n  --foundry_nu8bkp9r: #5782bc;\n  --foundry_nu8bkp9s: #2f61a4;\n  --foundry_nu8bkp9t: #1a8043;\n  --foundry_nu8bkp9u: #1e934c;\n  --foundry_nu8bkp9v: #166f3a;\n  --foundry_nu8bkp9w: #9a6500;\n  --foundry_nu8bkp9x: #af7400;\n  --foundry_nu8bkp9y: #855800;\n  --foundry_nu8bkp9z: #e10404;\n  --foundry_nu8bkpa0: #fb1e1e;\n  --foundry_nu8bkpa1: #c50303;\n  --foundry_nu8bkpa2: #697177;\n  --foundry_nu8bkpa3: #798187;\n  --foundry_nu8bkpa4: #596269;\n  --foundry_nu8bkpa5: #c0c0c0;\n  --foundry_nu8bkpa6: rgba(0, 0, 0, 0);\n  --foundry_nu8bkpa7: #6e94c6;\n  --foundry_nu8bkpa8: #86a6d1;\n  --foundry_nu8bkpa9: #5782bc;\n  --foundry_nu8bkpaa: #21a657;\n  --foundry_nu8bkpab: #26bb61;\n  --foundry_nu8bkpac: #1e934c;\n  --foundry_nu8bkpad: #c68402;\n  --foundry_nu8bkpae: #dd9507;\n  --foundry_nu8bkpaf: #af7400;\n  --foundry_nu8bkpag: #fc5858;\n  --foundry_nu8bkpah: #fd7d7d;\n  --foundry_nu8bkpai: #fb1e1e;\n  --foundry_nu8bkpaj: #8b9297;\n  --foundry_nu8bkpak: #9fa5a9;\n  --foundry_nu8bkpal: #798187;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #fcaf17;\n}\n.foundry_nu8bkpar {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #eaeaea;\n  --foundry_nu8bkp3i: #d8d8d8;\n  --foundry_nu8bkp3j: #b2b2b2;\n  --foundry_nu8bkp3k: #919191;\n  --foundry_nu8bkp3l: #6d6d6d;\n  --foundry_nu8bkp3m: #464646;\n  --foundry_nu8bkp3n: #212121;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #000000;\n  --foundry_nu8bkp3q: #0e0e0e;\n  --foundry_nu8bkp3r: #141414;\n  --foundry_nu8bkp3s: #1a1a1a;\n  --foundry_nu8bkp3t: #222222;\n  --foundry_nu8bkp3u: #3f3f3f;\n  --foundry_nu8bkp3v: #5b5b5b;\n  --foundry_nu8bkp3w: #797979;\n  --foundry_nu8bkp3x: #989898;\n  --foundry_nu8bkp3y: #b3b3b3;\n  --foundry_nu8bkp3z: #cecece;\n  --foundry_nu8bkp40: #ebebeb;\n  --foundry_nu8bkp41: #fff3f3;\n  --foundry_nu8bkp42: #ffe3e3;\n  --foundry_nu8bkp43: #ffd3d3;\n  --foundry_nu8bkp44: #ffbdbd;\n  --foundry_nu8bkp45: #ffa5a5;\n  --foundry_nu8bkp46: #ff8181;\n  --foundry_nu8bkp47: #ff5c5c;\n  --foundry_nu8bkp48: #e74646;\n  --foundry_nu8bkp49: #c93838;\n  --foundry_nu8bkp4a: #a92d2d;\n  --foundry_nu8bkp4b: #8b2323;\n  --foundry_nu8bkp4c: #6d1c1c;\n  --foundry_nu8bkp4d: #541515;\n  --foundry_nu8bkp4e: #401010;\n  --foundry_nu8bkp4f: #4b0808;\n  --foundry_nu8bkp4g: #610b0b;\n  --foundry_nu8bkp4h: #7a0e0e;\n  --foundry_nu8bkp4i: #941111;\n  --foundry_nu8bkp4j: #b01414;\n  --foundry_nu8bkp4k: #cc1717;\n  --foundry_nu8bkp4l: #e72424;\n  --foundry_nu8bkp4m: #eb5050;\n  --foundry_nu8bkp4n: #ef6f6f;\n  --foundry_nu8bkp4o: #f28989;\n  --foundry_nu8bkp4p: #f5a4a4;\n  --foundry_nu8bkp4q: #f7b5b5;\n  --foundry_nu8bkp4r: #f9c5c5;\n  --foundry_nu8bkp4s: #fad3d3;\n  --foundry_nu8bkp4t: #fff4d4;\n  --foundry_nu8bkp4u: #ffe8a4;\n  --foundry_nu8bkp4v: #ffdb72;\n  --foundry_nu8bkp4w: #ffc539;\n  --foundry_nu8bkp4x: #fcaf17;\n  --foundry_nu8bkp4y: #e19808;\n  --foundry_nu8bkp4z: #ca8602;\n  --foundry_nu8bkp50: #b07400;\n  --foundry_nu8bkp51: #976300;\n  --foundry_nu8bkp52: #7e5200;\n  --foundry_nu8bkp53: #654200;\n  --foundry_nu8bkp54: #503400;\n  --foundry_nu8bkp55: #3c2800;\n  --foundry_nu8bkp56: #2e1e00;\n  --foundry_nu8bkp57: #312000;\n  --foundry_nu8bkp58: #402a00;\n  --foundry_nu8bkp59: #533600;\n  --foundry_nu8bkp5a: #654200;\n  --foundry_nu8bkp5b: #794f00;\n  --foundry_nu8bkp5c: #8e5d00;\n  --foundry_nu8bkp5d: #a36b00;\n  --foundry_nu8bkp5e: #b87a00;\n  --foundry_nu8bkp5f: #ce8903;\n  --foundry_nu8bkp5g: #e29808;\n  --foundry_nu8bkp5h: #f7aa13;\n  --foundry_nu8bkp5i: #ffb923;\n  --foundry_nu8bkp5j: #ffcb47;\n  --foundry_nu8bkp5k: #ffd86c;\n  --foundry_nu8bkp5l: #e0fbea;\n  --foundry_nu8bkp5m: #bef7d5;\n  --foundry_nu8bkp5n: #93f2b9;\n  --foundry_nu8bkp5o: #5ce693;\n  --foundry_nu8bkp5p: #39d878;\n  --foundry_nu8bkp5q: #20c05f;\n  --foundry_nu8bkp5r: #15aa51;\n  --foundry_nu8bkp5s: #0f9444;\n  --foundry_nu8bkp5t: #0b7f39;\n  --foundry_nu8bkp5u: #08692f;\n  --foundry_nu8bkp5v: #065626;\n  --foundry_nu8bkp5w: #05431e;\n  --foundry_nu8bkp5x: #043317;\n  --foundry_nu8bkp5y: #032712;\n  --foundry_nu8bkp5z: #082915;\n  --foundry_nu8bkp60: #0b361c;\n  --foundry_nu8bkp61: #0e4524;\n  --foundry_nu8bkp62: #11552c;\n  --foundry_nu8bkp63: #146535;\n  --foundry_nu8bkp64: #18763d;\n  --foundry_nu8bkp65: #1b8847;\n  --foundry_nu8bkp66: #1f9a50;\n  --foundry_nu8bkp67: #23ad5a;\n  --foundry_nu8bkp68: #26bf63;\n  --foundry_nu8bkp69: #2bd46f;\n  --foundry_nu8bkp6a: #58dd8d;\n  --foundry_nu8bkp6b: #84e6ab;\n  --foundry_nu8bkp6c: #a3ecc0;\n  --foundry_nu8bkp6d: #f1f4f9;\n  --foundry_nu8bkp6e: #e3eaf4;\n  --foundry_nu8bkp6f: #d4dfee;\n  --foundry_nu8bkp6g: #bdcfe6;\n  --foundry_nu8bkp6h: #a9c0de;\n  --foundry_nu8bkp6i: #8ba9d2;\n  --foundry_nu8bkp6j: #7296c8;\n  --foundry_nu8bkp6k: #5882bc;\n  --foundry_nu8bkp6l: #406faf;\n  --foundry_nu8bkp6m: #295b9f;\n  --foundry_nu8bkp6n: #17498b;\n  --foundry_nu8bkp6o: #0c3874;\n  --foundry_nu8bkp6p: #062a5b;\n  --foundry_nu8bkp6q: #032047;\n  --foundry_nu8bkp6r: #02234c;\n  --foundry_nu8bkp6s: #052e61;\n  --foundry_nu8bkp6t: #0c3b76;\n  --foundry_nu8bkp6u: #17498a;\n  --foundry_nu8bkp6v: #265899;\n  --foundry_nu8bkp6w: #3868a6;\n  --foundry_nu8bkp6x: #4c78b2;\n  --foundry_nu8bkp6y: #6189bd;\n  --foundry_nu8bkp6z: #7699c7;\n  --foundry_nu8bkp70: #8baad0;\n  --foundry_nu8bkp71: #a4bbda;\n  --foundry_nu8bkp72: #b4c7e0;\n  --foundry_nu8bkp73: #c4d3e7;\n  --foundry_nu8bkp74: #d2ddec;\n  --foundry_nu8bkp75: #f2f4f6;\n  --foundry_nu8bkp76: #e7ebee;\n  --foundry_nu8bkp77: #d9dfe4;\n  --foundry_nu8bkp78: #c5cfd6;\n  --foundry_nu8bkp79: #b2c0c8;\n  --foundry_nu8bkp7a: #98aab6;\n  --foundry_nu8bkp7b: #8297a5;\n  --foundry_nu8bkp7c: #6b8495;\n  --foundry_nu8bkp7d: #5a717f;\n  --foundry_nu8bkp7e: #4b5e6a;\n  --foundry_nu8bkp7f: #3d4c55;\n  --foundry_nu8bkp7g: #303b43;\n  --foundry_nu8bkp7h: #242d33;\n  --foundry_nu8bkp7i: #1b2226;\n  --foundry_nu8bkp7j: #1b252c;\n  --foundry_nu8bkp7k: #253037;\n  --foundry_nu8bkp7l: #323d44;\n  --foundry_nu8bkp7m: #404b52;\n  --foundry_nu8bkp7n: #4f5960;\n  --foundry_nu8bkp7o: #5f686e;\n  --foundry_nu8bkp7p: #6f787d;\n  --foundry_nu8bkp7q: #80888c;\n  --foundry_nu8bkp7r: #92989c;\n  --foundry_nu8bkp7s: #a3a8ac;\n  --foundry_nu8bkp7t: #b6babd;\n  --foundry_nu8bkp7u: #c2c6c8;\n  --foundry_nu8bkp7v: #d0d2d4;\n  --foundry_nu8bkp7w: #dadcde;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #082915;\n  --foundry_nu8bkp87: #02234c;\n  --foundry_nu8bkp88: #312000;\n  --foundry_nu8bkp89: #4b0808;\n  --foundry_nu8bkp8a: #1b252c;\n  --foundry_nu8bkp8b: #000000;\n  --foundry_nu8bkp8c: #141414;\n  --foundry_nu8bkp8d: #222222;\n  --foundry_nu8bkp8e: #3f3f3f;\n  --foundry_nu8bkp8f: #1a1a1a;\n  --foundry_nu8bkp8g: #141414;\n  --foundry_nu8bkp8h: #0e0e0e;\n  --foundry_nu8bkp8i: #212121;\n  --foundry_nu8bkp8j: #cecece;\n  --foundry_nu8bkp8k: #797979;\n  --foundry_nu8bkp8l: #989898;\n  --foundry_nu8bkp8m: #ebebeb;\n  --foundry_nu8bkp8n: #23ad5a;\n  --foundry_nu8bkp8o: #7699c7;\n  --foundry_nu8bkp8p: #ce8903;\n  --foundry_nu8bkp8q: #ef6f6f;\n  --foundry_nu8bkp8r: #92989c;\n  --foundry_nu8bkp8s: #cecece;\n  --foundry_nu8bkp8t: #797979;\n  --foundry_nu8bkp8u: #989898;\n  --foundry_nu8bkp8v: #b3b3b3;\n  --foundry_nu8bkp8w: #989898;\n  --foundry_nu8bkp8x: #7699c7;\n  --foundry_nu8bkp8y: #6189bd;\n  --foundry_nu8bkp8z: #8baad0;\n  --foundry_nu8bkp90: #4c78b2;\n  --foundry_nu8bkp91: #a4bbda;\n  --foundry_nu8bkp92: #23ad5a;\n  --foundry_nu8bkp93: #1f9a50;\n  --foundry_nu8bkp94: #26bf63;\n  --foundry_nu8bkp95: #1b8847;\n  --foundry_nu8bkp96: #2bd46f;\n  --foundry_nu8bkp97: #ce8903;\n  --foundry_nu8bkp98: #b87a00;\n  --foundry_nu8bkp99: #e29808;\n  --foundry_nu8bkp9a: #a36b00;\n  --foundry_nu8bkp9b: #f7aa13;\n  --foundry_nu8bkp9c: #ef6f6f;\n  --foundry_nu8bkp9d: #eb5050;\n  --foundry_nu8bkp9e: #f28989;\n  --foundry_nu8bkp9f: #e72424;\n  --foundry_nu8bkp9g: #f5a4a4;\n  --foundry_nu8bkp9h: #92989c;\n  --foundry_nu8bkp9i: #80888c;\n  --foundry_nu8bkp9j: #a3a8ac;\n  --foundry_nu8bkp9k: #6f787d;\n  --foundry_nu8bkp9l: #b6babd;\n  --foundry_nu8bkp9m: #3f3f3f;\n  --foundry_nu8bkp9n: #222222;\n  --foundry_nu8bkp9o: #5b5b5b;\n  --foundry_nu8bkp9p: #989898;\n  --foundry_nu8bkp9q: #4c78b2;\n  --foundry_nu8bkp9r: #3868a6;\n  --foundry_nu8bkp9s: #6189bd;\n  --foundry_nu8bkp9t: #1b8847;\n  --foundry_nu8bkp9u: #18763d;\n  --foundry_nu8bkp9v: #1f9a50;\n  --foundry_nu8bkp9w: #a36b00;\n  --foundry_nu8bkp9x: #8e5d00;\n  --foundry_nu8bkp9y: #b87a00;\n  --foundry_nu8bkp9z: #e72424;\n  --foundry_nu8bkpa0: #cc1717;\n  --foundry_nu8bkpa1: #eb5050;\n  --foundry_nu8bkpa2: #6f787d;\n  --foundry_nu8bkpa3: #5f686e;\n  --foundry_nu8bkpa4: #80888c;\n  --foundry_nu8bkpa5: #3f3f3f;\n  --foundry_nu8bkpa6: #222222;\n  --foundry_nu8bkpa7: #265899;\n  --foundry_nu8bkpa8: #17498a;\n  --foundry_nu8bkpa9: #3868a6;\n  --foundry_nu8bkpaa: #146535;\n  --foundry_nu8bkpab: #11552c;\n  --foundry_nu8bkpac: #18763d;\n  --foundry_nu8bkpad: #794f00;\n  --foundry_nu8bkpae: #654200;\n  --foundry_nu8bkpaf: #8e5d00;\n  --foundry_nu8bkpag: #b01414;\n  --foundry_nu8bkpah: #941111;\n  --foundry_nu8bkpai: #cc1717;\n  --foundry_nu8bkpaj: #4f5960;\n  --foundry_nu8bkpak: #404b52;\n  --foundry_nu8bkpal: #5f686e;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #fcaf17;\n}\n.foundry_nu8bkpas {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #cdcdcd;\n  --foundry_nu8bkp3i: #adadad;\n  --foundry_nu8bkp3j: #797979;\n  --foundry_nu8bkp3k: #555555;\n  --foundry_nu8bkp3l: #2e2e2e;\n  --foundry_nu8bkp3m: #000000;\n  --foundry_nu8bkp3n: #000000;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #ffffff;\n  --foundry_nu8bkp3q: #ffffff;\n  --foundry_nu8bkp3r: #ffffff;\n  --foundry_nu8bkp3s: #e4e4e4;\n  --foundry_nu8bkp3t: #b5b5b5;\n  --foundry_nu8bkp3u: #979797;\n  --foundry_nu8bkp3v: #6a6a6a;\n  --foundry_nu8bkp3w: #3c3c3c;\n  --foundry_nu8bkp3x: #111111;\n  --foundry_nu8bkp3y: #000000;\n  --foundry_nu8bkp3z: #000000;\n  --foundry_nu8bkp40: #000000;\n  --foundry_nu8bkp41: #ffdddd;\n  --foundry_nu8bkp42: #ffbdbd;\n  --foundry_nu8bkp43: #ff9c9c;\n  --foundry_nu8bkp44: #ff6d6d;\n  --foundry_nu8bkp45: #f04c4c;\n  --foundry_nu8bkp46: #c73737;\n  --foundry_nu8bkp47: #a42b2b;\n  --foundry_nu8bkp48: #802121;\n  --foundry_nu8bkp49: #5a1717;\n  --foundry_nu8bkp4a: #290b0b;\n  --foundry_nu8bkp4b: #000000;\n  --foundry_nu8bkp4c: #000000;\n  --foundry_nu8bkp4d: #000000;\n  --foundry_nu8bkp4e: #000000;\n  --foundry_nu8bkp4f: #feb1b1;\n  --foundry_nu8bkp4g: #fd8181;\n  --foundry_nu8bkp4h: #fc4242;\n  --foundry_nu8bkp4i: #e20404;\n  --foundry_nu8bkp4j: #b90303;\n  --foundry_nu8bkp4k: #940303;\n  --foundry_nu8bkp4l: #710202;\n  --foundry_nu8bkp4m: #4b0101;\n  --foundry_nu8bkp4n: #130000;\n  --foundry_nu8bkp4o: #000000;\n  --foundry_nu8bkp4p: #000000;\n  --foundry_nu8bkp4q: #000000;\n  --foundry_nu8bkp4r: #000000;\n  --foundry_nu8bkp4s: #000000;\n  --foundry_nu8bkp4t: #ffe492;\n  --foundry_nu8bkp4u: #ffc539;\n  --foundry_nu8bkp4v: #f4a811;\n  --foundry_nu8bkp4w: #d48e04;\n  --foundry_nu8bkp4x: #b87a00;\n  --foundry_nu8bkp4y: #966200;\n  --foundry_nu8bkp4z: #7a5000;\n  --foundry_nu8bkp50: #5e3e00;\n  --foundry_nu8bkp51: #412b00;\n  --foundry_nu8bkp52: #1d1300;\n  --foundry_nu8bkp53: #000000;\n  --foundry_nu8bkp54: #000000;\n  --foundry_nu8bkp55: #000000;\n  --foundry_nu8bkp56: #000000;\n  --foundry_nu8bkp57: #ffb720;\n  --foundry_nu8bkp58: #e19808;\n  --foundry_nu8bkp59: #bb7c00;\n  --foundry_nu8bkp5a: #9a6500;\n  --foundry_nu8bkp5b: #7c5200;\n  --foundry_nu8bkp5c: #624000;\n  --foundry_nu8bkp5d: #483000;\n  --foundry_nu8bkp5e: #2e1e00;\n  --foundry_nu8bkp5f: #070400;\n  --foundry_nu8bkp5g: #000000;\n  --foundry_nu8bkp5h: #000000;\n  --foundry_nu8bkp5i: #000000;\n  --foundry_nu8bkp5j: #000000;\n  --foundry_nu8bkp5k: #000000;\n  --foundry_nu8bkp5l: #adf5ca;\n  --foundry_nu8bkp5m: #5ce693;\n  --foundry_nu8bkp5n: #2ed16f;\n  --foundry_nu8bkp5o: #19b357;\n  --foundry_nu8bkp5p: #119c48;\n  --foundry_nu8bkp5q: #0a7e38;\n  --foundry_nu8bkp5r: #07662d;\n  --foundry_nu8bkp5s: #064f23;\n  --foundry_nu8bkp5t: #043719;\n  --foundry_nu8bkp5u: #03190c;\n  --foundry_nu8bkp5v: #000000;\n  --foundry_nu8bkp5w: #000000;\n  --foundry_nu8bkp5x: #000000;\n  --foundry_nu8bkp5y: #000000;\n  --foundry_nu8bkp5z: #57dd8c;\n  --foundry_nu8bkp60: #26be63;\n  --foundry_nu8bkp61: #1f9d51;\n  --foundry_nu8bkp62: #1a8043;\n  --foundry_nu8bkp63: #156836;\n  --foundry_nu8bkp64: #10522b;\n  --foundry_nu8bkp65: #0c3d1f;\n  --foundry_nu8bkp66: #082614;\n  --foundry_nu8bkp67: #010603;\n  --foundry_nu8bkp68: #000000;\n  --foundry_nu8bkp69: #000000;\n  --foundry_nu8bkp6a: #000000;\n  --foundry_nu8bkp6b: #000000;\n  --foundry_nu8bkp6c: #000000;\n  --foundry_nu8bkp6d: #dee6f2;\n  --foundry_nu8bkp6e: #bdcfe6;\n  --foundry_nu8bkp6f: #9fb9db;\n  --foundry_nu8bkp6g: #7c9fcc;\n  --foundry_nu8bkp6h: #6189c0;\n  --foundry_nu8bkp6i: #3e6eae;\n  --foundry_nu8bkp6j: #26589c;\n  --foundry_nu8bkp6k: #134384;\n  --foundry_nu8bkp6l: #072e62;\n  --foundry_nu8bkp6m: #02152e;\n  --foundry_nu8bkp6n: #000000;\n  --foundry_nu8bkp6o: #000000;\n  --foundry_nu8bkp6p: #000000;\n  --foundry_nu8bkp6q: #000000;\n  --foundry_nu8bkp6r: #b2c7e2;\n  --foundry_nu8bkp6s: #8aa9d2;\n  --foundry_nu8bkp6t: #638bc1;\n  --foundry_nu8bkp6u: #4271b0;\n  --foundry_nu8bkp6v: #285a9e;\n  --foundry_nu8bkp6w: #154688;\n  --foundry_nu8bkp6x: #09336c;\n  --foundry_nu8bkp6y: #032047;\n  --foundry_nu8bkp6z: #01050b;\n  --foundry_nu8bkp70: #000000;\n  --foundry_nu8bkp71: #000000;\n  --foundry_nu8bkp72: #000000;\n  --foundry_nu8bkp73: #000000;\n  --foundry_nu8bkp74: #000000;\n  --foundry_nu8bkp75: #e0e6e9;\n  --foundry_nu8bkp76: #c5cfd6;\n  --foundry_nu8bkp77: #aab9c2;\n  --foundry_nu8bkp78: #8b9fac;\n  --foundry_nu8bkp79: #728a9a;\n  --foundry_nu8bkp7a: #5a707e;\n  --foundry_nu8bkp7b: #495b67;\n  --foundry_nu8bkp7c: #39464f;\n  --foundry_nu8bkp7d: #273037;\n  --foundry_nu8bkp7e: #111518;\n  --foundry_nu8bkp7f: #000000;\n  --foundry_nu8bkp7g: #000000;\n  --foundry_nu8bkp7h: #000000;\n  --foundry_nu8bkp7i: #000000;\n  --foundry_nu8bkp7j: #c1c5c8;\n  --foundry_nu8bkp7k: #a1a7ab;\n  --foundry_nu8bkp7l: #838a8f;\n  --foundry_nu8bkp7m: #697177;\n  --foundry_nu8bkp7n: #525c62;\n  --foundry_nu8bkp7o: #3e484f;\n  --foundry_nu8bkp7p: #2b363d;\n  --foundry_nu8bkp7q: #182229;\n  --foundry_nu8bkp7r: #030506;\n  --foundry_nu8bkp7s: #000000;\n  --foundry_nu8bkp7t: #000000;\n  --foundry_nu8bkp7u: #000000;\n  --foundry_nu8bkp7v: #000000;\n  --foundry_nu8bkp7w: #000000;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #57dd8c;\n  --foundry_nu8bkp87: #b2c7e2;\n  --foundry_nu8bkp88: #ffb720;\n  --foundry_nu8bkp89: #feb1b1;\n  --foundry_nu8bkp8a: #c1c5c8;\n  --foundry_nu8bkp8b: #ffffff;\n  --foundry_nu8bkp8c: #ffffff;\n  --foundry_nu8bkp8d: #e4e4e4;\n  --foundry_nu8bkp8e: #ffffff;\n  --foundry_nu8bkp8f: #ffffff;\n  --foundry_nu8bkp8g: #e4e4e4;\n  --foundry_nu8bkp8h: #ffffff;\n  --foundry_nu8bkp8i: #000000;\n  --foundry_nu8bkp8j: #000000;\n  --foundry_nu8bkp8k: #3c3c3c;\n  --foundry_nu8bkp8l: #111111;\n  --foundry_nu8bkp8m: #000000;\n  --foundry_nu8bkp8n: #010603;\n  --foundry_nu8bkp8o: #01050b;\n  --foundry_nu8bkp8p: #070400;\n  --foundry_nu8bkp8q: #130000;\n  --foundry_nu8bkp8r: #030506;\n  --foundry_nu8bkp8s: #000000;\n  --foundry_nu8bkp8t: #3c3c3c;\n  --foundry_nu8bkp8u: #111111;\n  --foundry_nu8bkp8v: #000000;\n  --foundry_nu8bkp8w: #111111;\n  --foundry_nu8bkp8x: #01050b;\n  --foundry_nu8bkp8y: #032047;\n  --foundry_nu8bkp8z: #000000;\n  --foundry_nu8bkp90: #09336c;\n  --foundry_nu8bkp91: #000000;\n  --foundry_nu8bkp92: #010603;\n  --foundry_nu8bkp93: #082614;\n  --foundry_nu8bkp94: #000000;\n  --foundry_nu8bkp95: #0c3d1f;\n  --foundry_nu8bkp96: #000000;\n  --foundry_nu8bkp97: #070400;\n  --foundry_nu8bkp98: #2e1e00;\n  --foundry_nu8bkp99: #000000;\n  --foundry_nu8bkp9a: #483000;\n  --foundry_nu8bkp9b: #000000;\n  --foundry_nu8bkp9c: #130000;\n  --foundry_nu8bkp9d: #4b0101;\n  --foundry_nu8bkp9e: #000000;\n  --foundry_nu8bkp9f: #710202;\n  --foundry_nu8bkp9g: #000000;\n  --foundry_nu8bkp9h: #030506;\n  --foundry_nu8bkp9i: #182229;\n  --foundry_nu8bkp9j: #000000;\n  --foundry_nu8bkp9k: #2b363d;\n  --foundry_nu8bkp9l: #000000;\n  --foundry_nu8bkp9m: #979797;\n  --foundry_nu8bkp9n: #b5b5b5;\n  --foundry_nu8bkp9o: #6a6a6a;\n  --foundry_nu8bkp9p: #111111;\n  --foundry_nu8bkp9q: #09336c;\n  --foundry_nu8bkp9r: #154688;\n  --foundry_nu8bkp9s: #032047;\n  --foundry_nu8bkp9t: #0c3d1f;\n  --foundry_nu8bkp9u: #10522b;\n  --foundry_nu8bkp9v: #082614;\n  --foundry_nu8bkp9w: #483000;\n  --foundry_nu8bkp9x: #624000;\n  --foundry_nu8bkp9y: #2e1e00;\n  --foundry_nu8bkp9z: #710202;\n  --foundry_nu8bkpa0: #940303;\n  --foundry_nu8bkpa1: #4b0101;\n  --foundry_nu8bkpa2: #2b363d;\n  --foundry_nu8bkpa3: #3e484f;\n  --foundry_nu8bkpa4: #182229;\n  --foundry_nu8bkpa5: #979797;\n  --foundry_nu8bkpa6: rgba(0, 0, 0, 0);\n  --foundry_nu8bkpa7: #285a9e;\n  --foundry_nu8bkpa8: #4271b0;\n  --foundry_nu8bkpa9: #154688;\n  --foundry_nu8bkpaa: #156836;\n  --foundry_nu8bkpab: #1a8043;\n  --foundry_nu8bkpac: #10522b;\n  --foundry_nu8bkpad: #7c5200;\n  --foundry_nu8bkpae: #9a6500;\n  --foundry_nu8bkpaf: #624000;\n  --foundry_nu8bkpag: #b90303;\n  --foundry_nu8bkpah: #e20404;\n  --foundry_nu8bkpai: #940303;\n  --foundry_nu8bkpaj: #525c62;\n  --foundry_nu8bkpak: #697177;\n  --foundry_nu8bkpal: #3e484f;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #b87a00;\n}\n.foundry_nu8bkpat {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #cdcdcd;\n  --foundry_nu8bkp3i: #adadad;\n  --foundry_nu8bkp3j: #797979;\n  --foundry_nu8bkp3k: #555555;\n  --foundry_nu8bkp3l: #2e2e2e;\n  --foundry_nu8bkp3m: #000000;\n  --foundry_nu8bkp3n: #000000;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #000000;\n  --foundry_nu8bkp3q: #000000;\n  --foundry_nu8bkp3r: #070707;\n  --foundry_nu8bkp3s: #1a1a1a;\n  --foundry_nu8bkp3t: #2f2f2f;\n  --foundry_nu8bkp3u: #656565;\n  --foundry_nu8bkp3v: #939393;\n  --foundry_nu8bkp3w: #c4c4c4;\n  --foundry_nu8bkp3x: #f5f5f5;\n  --foundry_nu8bkp3y: #ffffff;\n  --foundry_nu8bkp3z: #ffffff;\n  --foundry_nu8bkp40: #ffffff;\n  --foundry_nu8bkp41: #ffdddd;\n  --foundry_nu8bkp42: #ffbdbd;\n  --foundry_nu8bkp43: #ff9c9c;\n  --foundry_nu8bkp44: #ff6d6d;\n  --foundry_nu8bkp45: #f04c4c;\n  --foundry_nu8bkp46: #c73737;\n  --foundry_nu8bkp47: #a42b2b;\n  --foundry_nu8bkp48: #802121;\n  --foundry_nu8bkp49: #5a1717;\n  --foundry_nu8bkp4a: #290b0b;\n  --foundry_nu8bkp4b: #000000;\n  --foundry_nu8bkp4c: #000000;\n  --foundry_nu8bkp4d: #000000;\n  --foundry_nu8bkp4e: #000000;\n  --foundry_nu8bkp4f: #670b0b;\n  --foundry_nu8bkp4g: #911010;\n  --foundry_nu8bkp4h: #bd1515;\n  --foundry_nu8bkp4i: #e62323;\n  --foundry_nu8bkp4j: #ed6060;\n  --foundry_nu8bkp4k: #f28989;\n  --foundry_nu8bkp4l: #f6aeae;\n  --foundry_nu8bkp4m: #fad0d0;\n  --foundry_nu8bkp4n: #fef2f2;\n  --foundry_nu8bkp4o: #ffffff;\n  --foundry_nu8bkp4p: #ffffff;\n  --foundry_nu8bkp4q: #ffffff;\n  --foundry_nu8bkp4r: #ffffff;\n  --foundry_nu8bkp4s: #ffffff;\n  --foundry_nu8bkp4t: #ffe492;\n  --foundry_nu8bkp4u: #ffc539;\n  --foundry_nu8bkp4v: #f4a811;\n  --foundry_nu8bkp4w: #d48e04;\n  --foundry_nu8bkp4x: #b87a00;\n  --foundry_nu8bkp4y: #966200;\n  --foundry_nu8bkp4z: #7a5000;\n  --foundry_nu8bkp50: #5e3e00;\n  --foundry_nu8bkp51: #412b00;\n  --foundry_nu8bkp52: #1d1300;\n  --foundry_nu8bkp53: #000000;\n  --foundry_nu8bkp54: #000000;\n  --foundry_nu8bkp55: #000000;\n  --foundry_nu8bkp56: #000000;\n  --foundry_nu8bkp57: #442d00;\n  --foundry_nu8bkp58: #634100;\n  --foundry_nu8bkp59: #825600;\n  --foundry_nu8bkp5a: #a26b00;\n  --foundry_nu8bkp5b: #c28101;\n  --foundry_nu8bkp5c: #e29808;\n  --foundry_nu8bkp5d: #feb21a;\n  --foundry_nu8bkp5e: #ffd665;\n  --foundry_nu8bkp5f: #fff4d7;\n  --foundry_nu8bkp5g: #ffffff;\n  --foundry_nu8bkp5h: #ffffff;\n  --foundry_nu8bkp5i: #ffffff;\n  --foundry_nu8bkp5j: #ffffff;\n  --foundry_nu8bkp5k: #ffffff;\n  --foundry_nu8bkp5l: #adf5ca;\n  --foundry_nu8bkp5m: #5ce693;\n  --foundry_nu8bkp5n: #2ed16f;\n  --foundry_nu8bkp5o: #19b357;\n  --foundry_nu8bkp5p: #119c48;\n  --foundry_nu8bkp5q: #0a7e38;\n  --foundry_nu8bkp5r: #07662d;\n  --foundry_nu8bkp5s: #064f23;\n  --foundry_nu8bkp5t: #043719;\n  --foundry_nu8bkp5u: #03190c;\n  --foundry_nu8bkp5v: #000000;\n  --foundry_nu8bkp5w: #000000;\n  --foundry_nu8bkp5x: #000000;\n  --foundry_nu8bkp5y: #000000;\n  --foundry_nu8bkp5z: #0c3a1e;\n  --foundry_nu8bkp60: #11522b;\n  --foundry_nu8bkp61: #166d39;\n  --foundry_nu8bkp62: #1b8746;\n  --foundry_nu8bkp63: #21a355;\n  --foundry_nu8bkp64: #26bf63;\n  --foundry_nu8bkp65: #44da80;\n  --foundry_nu8bkp66: #9eebbd;\n  --foundry_nu8bkp67: #e4faec;\n  --foundry_nu8bkp68: #ffffff;\n  --foundry_nu8bkp69: #ffffff;\n  --foundry_nu8bkp6a: #ffffff;\n  --foundry_nu8bkp6b: #ffffff;\n  --foundry_nu8bkp6c: #ffffff;\n  --foundry_nu8bkp6d: #dee6f2;\n  --foundry_nu8bkp6e: #bdcfe6;\n  --foundry_nu8bkp6f: #9fb9db;\n  --foundry_nu8bkp6g: #7c9fcc;\n  --foundry_nu8bkp6h: #6189c0;\n  --foundry_nu8bkp6i: #3e6eae;\n  --foundry_nu8bkp6j: #26589c;\n  --foundry_nu8bkp6k: #134384;\n  --foundry_nu8bkp6l: #072e62;\n  --foundry_nu8bkp6m: #02152e;\n  --foundry_nu8bkp6n: #000000;\n  --foundry_nu8bkp6o: #000000;\n  --foundry_nu8bkp6p: #000000;\n  --foundry_nu8bkp6q: #000000;\n  --foundry_nu8bkp6r: #073065;\n  --foundry_nu8bkp6s: #154787;\n  --foundry_nu8bkp6t: #2e609f;\n  --foundry_nu8bkp6u: #4b78b2;\n  --foundry_nu8bkp6v: #6a91c1;\n  --foundry_nu8bkp6w: #8ba9d0;\n  --foundry_nu8bkp6x: #adc2de;\n  --foundry_nu8bkp6y: #cfdbeb;\n  --foundry_nu8bkp6z: #f1f5f9;\n  --foundry_nu8bkp70: #ffffff;\n  --foundry_nu8bkp71: #ffffff;\n  --foundry_nu8bkp72: #ffffff;\n  --foundry_nu8bkp73: #ffffff;\n  --foundry_nu8bkp74: #ffffff;\n  --foundry_nu8bkp75: #e0e6e9;\n  --foundry_nu8bkp76: #c5cfd6;\n  --foundry_nu8bkp77: #aab9c2;\n  --foundry_nu8bkp78: #8b9fac;\n  --foundry_nu8bkp79: #728a9a;\n  --foundry_nu8bkp7a: #5a707e;\n  --foundry_nu8bkp7b: #495b67;\n  --foundry_nu8bkp7c: #39464f;\n  --foundry_nu8bkp7d: #273037;\n  --foundry_nu8bkp7e: #111518;\n  --foundry_nu8bkp7f: #000000;\n  --foundry_nu8bkp7g: #000000;\n  --foundry_nu8bkp7h: #000000;\n  --foundry_nu8bkp7i: #000000;\n  --foundry_nu8bkp7j: #28333a;\n  --foundry_nu8bkp7k: #3e4950;\n  --foundry_nu8bkp7l: #576067;\n  --foundry_nu8bkp7m: #6f777d;\n  --foundry_nu8bkp7n: #888f94;\n  --foundry_nu8bkp7o: #a2a8ab;\n  --foundry_nu8bkp7p: #bdc1c4;\n  --foundry_nu8bkp7q: #d8dadc;\n  --foundry_nu8bkp7r: #f4f4f5;\n  --foundry_nu8bkp7s: #ffffff;\n  --foundry_nu8bkp7t: #ffffff;\n  --foundry_nu8bkp7u: #ffffff;\n  --foundry_nu8bkp7v: #ffffff;\n  --foundry_nu8bkp7w: #ffffff;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #0c3a1e;\n  --foundry_nu8bkp87: #073065;\n  --foundry_nu8bkp88: #442d00;\n  --foundry_nu8bkp89: #670b0b;\n  --foundry_nu8bkp8a: #28333a;\n  --foundry_nu8bkp8b: #000000;\n  --foundry_nu8bkp8c: #070707;\n  --foundry_nu8bkp8d: #2f2f2f;\n  --foundry_nu8bkp8e: #656565;\n  --foundry_nu8bkp8f: #1a1a1a;\n  --foundry_nu8bkp8g: #070707;\n  --foundry_nu8bkp8h: #000000;\n  --foundry_nu8bkp8i: #000000;\n  --foundry_nu8bkp8j: #ffffff;\n  --foundry_nu8bkp8k: #c4c4c4;\n  --foundry_nu8bkp8l: #f5f5f5;\n  --foundry_nu8bkp8m: #ffffff;\n  --foundry_nu8bkp8n: #e4faec;\n  --foundry_nu8bkp8o: #f1f5f9;\n  --foundry_nu8bkp8p: #fff4d7;\n  --foundry_nu8bkp8q: #fef2f2;\n  --foundry_nu8bkp8r: #f4f4f5;\n  --foundry_nu8bkp8s: #ffffff;\n  --foundry_nu8bkp8t: #c4c4c4;\n  --foundry_nu8bkp8u: #f5f5f5;\n  --foundry_nu8bkp8v: #ffffff;\n  --foundry_nu8bkp8w: #f5f5f5;\n  --foundry_nu8bkp8x: #f1f5f9;\n  --foundry_nu8bkp8y: #cfdbeb;\n  --foundry_nu8bkp8z: #ffffff;\n  --foundry_nu8bkp90: #adc2de;\n  --foundry_nu8bkp91: #ffffff;\n  --foundry_nu8bkp92: #e4faec;\n  --foundry_nu8bkp93: #9eebbd;\n  --foundry_nu8bkp94: #ffffff;\n  --foundry_nu8bkp95: #44da80;\n  --foundry_nu8bkp96: #ffffff;\n  --foundry_nu8bkp97: #fff4d7;\n  --foundry_nu8bkp98: #ffd665;\n  --foundry_nu8bkp99: #ffffff;\n  --foundry_nu8bkp9a: #feb21a;\n  --foundry_nu8bkp9b: #ffffff;\n  --foundry_nu8bkp9c: #fef2f2;\n  --foundry_nu8bkp9d: #fad0d0;\n  --foundry_nu8bkp9e: #ffffff;\n  --foundry_nu8bkp9f: #f6aeae;\n  --foundry_nu8bkp9g: #ffffff;\n  --foundry_nu8bkp9h: #f4f4f5;\n  --foundry_nu8bkp9i: #d8dadc;\n  --foundry_nu8bkp9j: #ffffff;\n  --foundry_nu8bkp9k: #bdc1c4;\n  --foundry_nu8bkp9l: #ffffff;\n  --foundry_nu8bkp9m: #656565;\n  --foundry_nu8bkp9n: #2f2f2f;\n  --foundry_nu8bkp9o: #939393;\n  --foundry_nu8bkp9p: #f5f5f5;\n  --foundry_nu8bkp9q: #adc2de;\n  --foundry_nu8bkp9r: #8ba9d0;\n  --foundry_nu8bkp9s: #cfdbeb;\n  --foundry_nu8bkp9t: #44da80;\n  --foundry_nu8bkp9u: #26bf63;\n  --foundry_nu8bkp9v: #9eebbd;\n  --foundry_nu8bkp9w: #feb21a;\n  --foundry_nu8bkp9x: #e29808;\n  --foundry_nu8bkp9y: #ffd665;\n  --foundry_nu8bkp9z: #f6aeae;\n  --foundry_nu8bkpa0: #f28989;\n  --foundry_nu8bkpa1: #fad0d0;\n  --foundry_nu8bkpa2: #bdc1c4;\n  --foundry_nu8bkpa3: #a2a8ab;\n  --foundry_nu8bkpa4: #d8dadc;\n  --foundry_nu8bkpa5: #656565;\n  --foundry_nu8bkpa6: #2f2f2f;\n  --foundry_nu8bkpa7: #6a91c1;\n  --foundry_nu8bkpa8: #4b78b2;\n  --foundry_nu8bkpa9: #8ba9d0;\n  --foundry_nu8bkpaa: #21a355;\n  --foundry_nu8bkpab: #1b8746;\n  --foundry_nu8bkpac: #26bf63;\n  --foundry_nu8bkpad: #c28101;\n  --foundry_nu8bkpae: #a26b00;\n  --foundry_nu8bkpaf: #e29808;\n  --foundry_nu8bkpag: #ed6060;\n  --foundry_nu8bkpah: #e62323;\n  --foundry_nu8bkpai: #f28989;\n  --foundry_nu8bkpaj: #888f94;\n  --foundry_nu8bkpak: #6f777d;\n  --foundry_nu8bkpal: #a2a8ab;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #b87a00;\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    77802: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, '.foundry_1m368qh2 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: var(--foundry_nu8bkpn);\n  border-width: 1px;\n  border-radius: var(--foundry_nu8bkp5);\n  border-style: solid;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_1m368qh3 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp89);\n  --foundry_1m368qh1: var(--foundry_nu8bkp4h);\n}\n.foundry_1m368qh4 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp87);\n  --foundry_1m368qh1: var(--foundry_nu8bkp6t);\n}\n.foundry_1m368qh5 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp86);\n  --foundry_1m368qh1: var(--foundry_nu8bkp61);\n}\n.foundry_1m368qh6 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp88);\n  --foundry_1m368qh1: var(--foundry_nu8bkp59);\n}\n.foundry_1m368qh7 {\n  background-color: var(--foundry_1m368qh0);\n  border-color: var(--foundry_1m368qh1);\n}\n.foundry_1m368qh8 {\n  background-color: var(--foundry_nu8bkp3s);\n  border-color: var(--foundry_nu8bkp9n);\n}\n.foundry_1m368qh9 {\n  padding: 0;\n  background-color: transparent;\n  border-color: transparent;\n}\n.foundry_1m368qha {\n  display: grid;\n  grid-template-areas: "icon title";\n  grid-template-columns: min-content 1fr;\n  grid-column-gap: var(--foundry_nu8bkpk);\n  grid-row-gap: var(--foundry_nu8bkpm);\n  padding-right: var(--foundry_nu8bkpq);\n  position: relative;\n}\n.foundry_1m368qhb {\n  display: grid;\n  grid-row-gap: var(--foundry_nu8bkpi);\n}\n.foundry_1m368qhc {\n  height: var(--foundry_nu8bkp18);\n  display: flex;\n  align-items: center;\n}\n.foundry_1m368qhd {\n  grid-area: icon;\n}\n.foundry_1m368qhe {\n  color: var(--foundry_nu8bkp90);\n}\n.foundry_1m368qhf {\n  color: var(--foundry_nu8bkp9f);\n}\n.foundry_1m368qhg {\n  color: var(--foundry_nu8bkp95);\n}\n.foundry_1m368qhh {\n  color: var(--foundry_nu8bkp9a);\n}\n.foundry_1m368qhi {\n  color: var(--foundry_nu8bkp8j);\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n}\n.foundry_1m368qhj {\n  color: var(--foundry_nu8bkp8j);\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n}\n.foundry_1m368qhk {\n  width: max-content;\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n  color: var(--foundry_nu8bkp8m);\n  border-radius: var(--foundry_nu8bkp3);\n  outline-offset: 2px;\n}\n.foundry_1m368qhk:not([data-pressed="true"]):not([disabled]):hover {\n  color: var(--foundry_nu8bkp3x);\n}\n.foundry_1m368qhk[data-pressed="true"] {\n  color: var(--foundry_nu8bkp3y);\n  outline-color: transparent;\n}\n.foundry_1m368qhk:disabled {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_1m368qhk:visited {\n  color: var(--foundry_nu8bkp40);\n}\n.foundry_1m368qhl {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--foundry_nu8bkpj);\n  color: var(--foundry_nu8bkp8l);\n  border-top: 1px solid var(--foundry_nu8bkp3w);\n  padding-top: var(--foundry_nu8bkp15);\n}\n.foundry_1m368qhm {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: var(--foundry_nu8bkpj);\n  outline-offset: 0;\n}\n.foundry_1m368qhm[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp7z);\n  border-color: var(--foundry_nu8bkp7z);\n}\n.foundry_1m368qhm:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp7y);\n  border-color: var(--foundry_nu8bkp7y);\n}\n.foundry_1m368qhm:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp7y);\n  border-color: var(--foundry_nu8bkp7y);\n}\n.foundry_1m368qhn {\n  top: 0;\n  right: 0;\n}\n.foundry_1m368qho {\n  color: var(--foundry_nu8bkp8l);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/alert/dist/alert/alert.css"],
        names: [],
        mappings: "AAAA;EACE,WAAW;EACX,sBAAsB;EACtB,+BAA+B;EAC/B,iBAAiB;EACjB,qCAAqC;EACrC,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;EACE,2CAA2C;EAC3C,2CAA2C;AAC7C;AACA;EACE,2CAA2C;EAC3C,2CAA2C;AAC7C;AACA;EACE,2CAA2C;EAC3C,2CAA2C;AAC7C;AACA;EACE,2CAA2C;EAC3C,2CAA2C;AAC7C;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,UAAU;EACV,6BAA6B;EAC7B,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,iCAAiC;EACjC,sCAAsC;EACtC,uCAAuC;EACvC,oCAAoC;EACpC,qCAAqC;EACrC,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,+BAA+B;EAC/B,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;EAC9B,oBAAoB;EACpB,mBAAmB;EACnB,mCAAmC;AACrC;AACA;EACE,8BAA8B;EAC9B,oBAAoB;EACpB,mBAAmB;EACnB,mCAAmC;AACrC;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,mCAAmC;EACnC,8BAA8B;EAC9B,qCAAqC;EACrC,mBAAmB;AACrB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;EAC9B,0BAA0B;AAC5B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;EAC9B,6CAA6C;EAC7C,oCAAoC;AACtC;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,+BAA+B;EAC/B,iBAAiB;AACnB;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,MAAM;EACN,QAAQ;AACV;AACA;EACE,8BAA8B;AAChC",
        sourcesContent: ['.foundry_1m368qh2 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: var(--foundry_nu8bkpn);\n  border-width: 1px;\n  border-radius: var(--foundry_nu8bkp5);\n  border-style: solid;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_1m368qh3 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp89);\n  --foundry_1m368qh1: var(--foundry_nu8bkp4h);\n}\n.foundry_1m368qh4 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp87);\n  --foundry_1m368qh1: var(--foundry_nu8bkp6t);\n}\n.foundry_1m368qh5 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp86);\n  --foundry_1m368qh1: var(--foundry_nu8bkp61);\n}\n.foundry_1m368qh6 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp88);\n  --foundry_1m368qh1: var(--foundry_nu8bkp59);\n}\n.foundry_1m368qh7 {\n  background-color: var(--foundry_1m368qh0);\n  border-color: var(--foundry_1m368qh1);\n}\n.foundry_1m368qh8 {\n  background-color: var(--foundry_nu8bkp3s);\n  border-color: var(--foundry_nu8bkp9n);\n}\n.foundry_1m368qh9 {\n  padding: 0;\n  background-color: transparent;\n  border-color: transparent;\n}\n.foundry_1m368qha {\n  display: grid;\n  grid-template-areas: "icon title";\n  grid-template-columns: min-content 1fr;\n  grid-column-gap: var(--foundry_nu8bkpk);\n  grid-row-gap: var(--foundry_nu8bkpm);\n  padding-right: var(--foundry_nu8bkpq);\n  position: relative;\n}\n.foundry_1m368qhb {\n  display: grid;\n  grid-row-gap: var(--foundry_nu8bkpi);\n}\n.foundry_1m368qhc {\n  height: var(--foundry_nu8bkp18);\n  display: flex;\n  align-items: center;\n}\n.foundry_1m368qhd {\n  grid-area: icon;\n}\n.foundry_1m368qhe {\n  color: var(--foundry_nu8bkp90);\n}\n.foundry_1m368qhf {\n  color: var(--foundry_nu8bkp9f);\n}\n.foundry_1m368qhg {\n  color: var(--foundry_nu8bkp95);\n}\n.foundry_1m368qhh {\n  color: var(--foundry_nu8bkp9a);\n}\n.foundry_1m368qhi {\n  color: var(--foundry_nu8bkp8j);\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n}\n.foundry_1m368qhj {\n  color: var(--foundry_nu8bkp8j);\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n}\n.foundry_1m368qhk {\n  width: max-content;\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n  color: var(--foundry_nu8bkp8m);\n  border-radius: var(--foundry_nu8bkp3);\n  outline-offset: 2px;\n}\n.foundry_1m368qhk:not([data-pressed="true"]):not([disabled]):hover {\n  color: var(--foundry_nu8bkp3x);\n}\n.foundry_1m368qhk[data-pressed="true"] {\n  color: var(--foundry_nu8bkp3y);\n  outline-color: transparent;\n}\n.foundry_1m368qhk:disabled {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_1m368qhk:visited {\n  color: var(--foundry_nu8bkp40);\n}\n.foundry_1m368qhl {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--foundry_nu8bkpj);\n  color: var(--foundry_nu8bkp8l);\n  border-top: 1px solid var(--foundry_nu8bkp3w);\n  padding-top: var(--foundry_nu8bkp15);\n}\n.foundry_1m368qhm {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: var(--foundry_nu8bkpj);\n  outline-offset: 0;\n}\n.foundry_1m368qhm[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp7z);\n  border-color: var(--foundry_nu8bkp7z);\n}\n.foundry_1m368qhm:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp7y);\n  border-color: var(--foundry_nu8bkp7y);\n}\n.foundry_1m368qhm:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp7y);\n  border-color: var(--foundry_nu8bkp7y);\n}\n.foundry_1m368qhn {\n  top: 0;\n  right: 0;\n}\n.foundry_1m368qho {\n  color: var(--foundry_nu8bkp8l);\n}'],
        sourceRoot: ""
      }]);
      const d = u
    },
    79370: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, '.foundry_m1icrx0 {\n  position: relative;\n  width: 100%;\n}\n.foundry_m1icrx1 {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.foundry_m1icrx2 {\n  gap: var(--foundry_nu8bkph);\n}\n.foundry_m1icrx3 {\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx4 {\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.foundry_m1icrx7 {\n  color: var(--foundry_nu8bkp3x);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx7:after {\n  content: "/";\n  padding: 0 var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx7:hover {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_m1icrx7:last-child:after {\n  content: "";\n}\n.foundry_m1icrxa {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--foundry_nu8bkp3x);\n  border-radius: var(--foundry_nu8bkp3);\n  text-decoration: none;\n  outline-offset: -1px;\n  white-space: nowrap;\n}\n.foundry_m1icrxa:hover {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxb {\n  padding: var(--foundry_nu8bkph) var(--foundry_nu8bkpi) var(--foundry_nu8bkph) var(--foundry_nu8bkph);\n  gap: var(--foundry_nu8bkph);\n}\n.foundry_m1icrxc {\n  padding: var(--foundry_nu8bkpi) var(--foundry_nu8bkpj) var(--foundry_nu8bkpi) var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrxd {\n  color: var(--foundry_nu8bkp8j);\n  white-space: normal;\n}\n.foundry_m1icrxd:hover {\n  color: var(--foundry_nu8bkp8j);\n  text-decoration: none;\n}\n.foundry_m1icrxe {\n  background: transparent;\n  color: var(--foundry_nu8bkp3x);\n  border-radius: var(--foundry_nu8bkp3);\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n}\n.foundry_m1icrxe:hover {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxe[data-state="open"] {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxf {\n  border: 1px solid var(--foundry_nu8bkpa6);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_m1icrxg {\n  margin: 0;\n  padding: 0;\n  background: var(--foundry_nu8bkp3p);\n  border-radius: var(--foundry_nu8bkp5);\n  box-shadow: 0px 0px 2px 0px var(--foundry_nu8bkp7z), 0px 8px 24px 0px var(--foundry_nu8bkp7z);\n  min-width: var(--foundry_nu8bkp1l);\n}\n.foundry_m1icrxh {\n  margin: 0;\n  padding: var(--foundry_nu8bkpk);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: 0;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_m1icrxh:focus {\n  outline: none;\n}\n.foundry_m1icrxh:hover {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_m1icrxh:active {\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_m1icrxh:hover:not(:focus-visible) {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_m1icrxh:not(:hover):focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_m1icrxh[data-state="checked"] {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_m1icrxh[data-disabled] {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_m1icrxh[data-disabled]:hover {\n  background: var(--foundry_nu8bkp3r);\n}\n.foundry_m1icrxg .foundry_m1icrxh:first-of-type {\n  border-top-left-radius: var(--foundry_nu8bkp5);\n  border-top-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_m1icrxg .foundry_m1icrxh:last-of-type {\n  border-bottom-left-radius: var(--foundry_nu8bkp5);\n  border-bottom-right-radius: var(--foundry_nu8bkp5);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/breadcrumbs/dist/breadcrumbs/breadcrumbs.css"],
        names: [],
        mappings: "AAAA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,WAAW;AACb;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT;AACA;EACE,8BAA8B;EAC9B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,YAAY;EACZ,iCAAiC;AACnC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,8BAA8B;EAC9B,qCAAqC;EACrC,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,0BAA0B;AAC5B;AACA;EACE,oGAAoG;EACpG,2BAA2B;AAC7B;AACA;EACE,oGAAoG;EACpG,2BAA2B;AAC7B;AACA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,qBAAqB;AACvB;AACA;EACE,uBAAuB;EACvB,8BAA8B;EAC9B,qCAAqC;EACrC,qBAAqB;EACrB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,8BAA8B;EAC9B,0BAA0B;AAC5B;AACA;EACE,8BAA8B;EAC9B,0BAA0B;AAC5B;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,SAAS;EACT,UAAU;EACV,mCAAmC;EACnC,qCAAqC;EACrC,6FAA6F;EAC7F,kCAAkC;AACpC;AACA;EACE,SAAS;EACT,+BAA+B;EAC/B,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,aAAa;AACf;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,0CAA0C;EAC1C,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,oCAAoC;AACtC;AACA;EACE,mCAAmC;EACnC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,mCAAmC;AACrC;AACA;EACE,8CAA8C;EAC9C,+CAA+C;AACjD;AACA;EACE,iDAAiD;EACjD,kDAAkD;AACpD",
        sourcesContent: ['.foundry_m1icrx0 {\n  position: relative;\n  width: 100%;\n}\n.foundry_m1icrx1 {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.foundry_m1icrx2 {\n  gap: var(--foundry_nu8bkph);\n}\n.foundry_m1icrx3 {\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx4 {\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.foundry_m1icrx7 {\n  color: var(--foundry_nu8bkp3x);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx7:after {\n  content: "/";\n  padding: 0 var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx7:hover {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_m1icrx7:last-child:after {\n  content: "";\n}\n.foundry_m1icrxa {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--foundry_nu8bkp3x);\n  border-radius: var(--foundry_nu8bkp3);\n  text-decoration: none;\n  outline-offset: -1px;\n  white-space: nowrap;\n}\n.foundry_m1icrxa:hover {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxb {\n  padding: var(--foundry_nu8bkph) var(--foundry_nu8bkpi) var(--foundry_nu8bkph) var(--foundry_nu8bkph);\n  gap: var(--foundry_nu8bkph);\n}\n.foundry_m1icrxc {\n  padding: var(--foundry_nu8bkpi) var(--foundry_nu8bkpj) var(--foundry_nu8bkpi) var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrxd {\n  color: var(--foundry_nu8bkp8j);\n  white-space: normal;\n}\n.foundry_m1icrxd:hover {\n  color: var(--foundry_nu8bkp8j);\n  text-decoration: none;\n}\n.foundry_m1icrxe {\n  background: transparent;\n  color: var(--foundry_nu8bkp3x);\n  border-radius: var(--foundry_nu8bkp3);\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n}\n.foundry_m1icrxe:hover {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxe[data-state="open"] {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxf {\n  border: 1px solid var(--foundry_nu8bkpa6);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_m1icrxg {\n  margin: 0;\n  padding: 0;\n  background: var(--foundry_nu8bkp3p);\n  border-radius: var(--foundry_nu8bkp5);\n  box-shadow: 0px 0px 2px 0px var(--foundry_nu8bkp7z), 0px 8px 24px 0px var(--foundry_nu8bkp7z);\n  min-width: var(--foundry_nu8bkp1l);\n}\n.foundry_m1icrxh {\n  margin: 0;\n  padding: var(--foundry_nu8bkpk);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: 0;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_m1icrxh:focus {\n  outline: none;\n}\n.foundry_m1icrxh:hover {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_m1icrxh:active {\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_m1icrxh:hover:not(:focus-visible) {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_m1icrxh:not(:hover):focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_m1icrxh[data-state="checked"] {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_m1icrxh[data-disabled] {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_m1icrxh[data-disabled]:hover {\n  background: var(--foundry_nu8bkp3r);\n}\n.foundry_m1icrxg .foundry_m1icrxh:first-of-type {\n  border-top-left-radius: var(--foundry_nu8bkp5);\n  border-top-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_m1icrxg .foundry_m1icrxh:last-of-type {\n  border-bottom-left-radius: var(--foundry_nu8bkp5);\n  border-bottom-right-radius: var(--foundry_nu8bkp5);\n}'],
        sourceRoot: ""
      }]);
      const d = u
    },
    86706: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_17pcofy1 {\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border-radius: var(--foundry_nu8bkp5);\n  border-width: 1px;\n  border-style: solid;\n  transition: all 0.15s ease-out;\n  transition-property: color, background-color, border-color, outline-color;\n}\n.foundry_17pcofy1:disabled {\n  cursor: not-allowed;\n}\n.foundry_17pcofya {\n  --foundry_17pcofy0: var(--foundry_nu8bkpj);\n  padding: var(--foundry_nu8bkpk) var(--foundry_nu8bkpo);\n}\n.foundry_17pcofyb {\n  --foundry_17pcofy0: var(--foundry_nu8bkpk);\n  padding: var(--foundry_nu8bkpm) var(--foundry_nu8bkpp);\n}\n.foundry_17pcofyc {\n  width: 100%;\n}\n.foundry_17pcofyk {\n  margin-right: var(--foundry_17pcofy0);\n}\n.foundry_17pcofym {\n  margin-left: auto;\n}\n.foundry_17pcofyn {\n  margin-left: var(--foundry_17pcofy0);\n}\n.foundry_17pcofyo {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  margin-right: auto;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/button/dist/button/button.css"],
        names: [],
        mappings: "AAAA;EACE,eAAe;EACf,oBAAoB;EACpB,cAAc;EACd,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,qCAAqC;EACrC,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,yEAAyE;AAC3E;AACA;EACE,mBAAmB;AACrB;AACA;EACE,0CAA0C;EAC1C,sDAAsD;AACxD;AACA;EACE,0CAA0C;EAC1C,sDAAsD;AACxD;AACA;EACE,WAAW;AACb;AACA;EACE,qCAAqC;AACvC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,kBAAkB;AACpB",
        sourcesContent: [".foundry_17pcofy1 {\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border-radius: var(--foundry_nu8bkp5);\n  border-width: 1px;\n  border-style: solid;\n  transition: all 0.15s ease-out;\n  transition-property: color, background-color, border-color, outline-color;\n}\n.foundry_17pcofy1:disabled {\n  cursor: not-allowed;\n}\n.foundry_17pcofya {\n  --foundry_17pcofy0: var(--foundry_nu8bkpj);\n  padding: var(--foundry_nu8bkpk) var(--foundry_nu8bkpo);\n}\n.foundry_17pcofyb {\n  --foundry_17pcofy0: var(--foundry_nu8bkpk);\n  padding: var(--foundry_nu8bkpm) var(--foundry_nu8bkpp);\n}\n.foundry_17pcofyc {\n  width: 100%;\n}\n.foundry_17pcofyk {\n  margin-right: var(--foundry_17pcofy0);\n}\n.foundry_17pcofym {\n  margin-left: auto;\n}\n.foundry_17pcofyn {\n  margin-left: var(--foundry_17pcofy0);\n}\n.foundry_17pcofyo {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  margin-right: auto;\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    22718: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_tv8xa40 {\n  display: block;\n  color: var(--foundry_nu8bkp8j);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/caption/dist/caption/caption.css"],
        names: [],
        mappings: "AAAA;EACE,cAAc;EACd,8BAA8B;AAChC",
        sourcesContent: [".foundry_tv8xa40 {\n  display: block;\n  color: var(--foundry_nu8bkp8j);\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    44161: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, '.foundry_11gbdty0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_11gbdty2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1[aria-invalid="true"]) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9z);\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1[aria-invalid="true"]):hover {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp4m);\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1:focus-visible) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_11gbdty3 {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  padding: 2px;\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdty4 {\n  height: var(--foundry_nu8bkp17);\n  width: var(--foundry_nu8bkp17);\n  padding: 3px;\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_11gbdty5 {\n  height: var(--foundry_nu8bkp18);\n  width: var(--foundry_nu8bkp18);\n  padding: 4px;\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_11gbdty6 {\n  height: 100%;\n  width: 100%;\n  border-radius: var(--foundry_nu8bkp3);\n  box-sizing: border-box;\n  border-width: var(--foundry_nu8bkpe);\n}\n.foundry_11gbdty8 {\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdty9 {\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdtya {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_11gbdtya:hover {\n  border-color: var(--foundry_nu8bkpap);\n}\n.foundry_11gbdtya[data-state="checked"], .foundry_11gbdtya[data-state="mixed"] {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n}\n.foundry_11gbdtya[data-disabled="true"], .foundry_11gbdtya[data-disabled="true"]:hover {\n  color: var(--foundry_nu8bkp8t);\n  background-color: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_11gbdtyb {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_11gbdtyb:hover {\n  border-color: var(--foundry_nu8bkp40);\n}\n.foundry_11gbdtyb[data-state="checked"], .foundry_11gbdtyb[data-state="mixed"] {\n  border-color: var(--foundry_nu8bkp40);\n  background-color: var(--foundry_nu8bkp40);\n}\n.foundry_11gbdtyb[data-disabled="true"], .foundry_11gbdtyb[data-disabled="true"]:hover {\n  color: var(--foundry_nu8bkp8t);\n  background-color: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_11gbdtyc {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: all 0.15s ease-out;\n}\n.foundry_11gbdtyd {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_11gbdtyf {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_11gbdtyg {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_11gbdtyh {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_11gbdtyi {\n  margin: 0;\n}\n.foundry_11gbdtym {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_11gbdtyn {\n  color: var(--foundry_nu8bkp8q);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/checkbox/dist/checkbox/checkbox.css"],
        names: [],
        mappings: "AAAA;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;EACZ,qCAAqC;AACvC;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;EACZ,qCAAqC;AACvC;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;EACZ,qCAAqC;AACvC;AACA;EACE,YAAY;EACZ,WAAW;EACX,qCAAqC;EACrC,sBAAsB;EACtB,oCAAoC;AACtC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,yCAAyC;EACzC,qCAAqC;EACrC,mBAAmB;AACrB;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,yCAAyC;EACzC,qCAAqC;EACrC,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,SAAS;AACX;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC",
        sourcesContent: ['.foundry_11gbdty0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_11gbdty2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1[aria-invalid="true"]) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9z);\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1[aria-invalid="true"]):hover {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp4m);\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1:focus-visible) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_11gbdty3 {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  padding: 2px;\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdty4 {\n  height: var(--foundry_nu8bkp17);\n  width: var(--foundry_nu8bkp17);\n  padding: 3px;\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_11gbdty5 {\n  height: var(--foundry_nu8bkp18);\n  width: var(--foundry_nu8bkp18);\n  padding: 4px;\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_11gbdty6 {\n  height: 100%;\n  width: 100%;\n  border-radius: var(--foundry_nu8bkp3);\n  box-sizing: border-box;\n  border-width: var(--foundry_nu8bkpe);\n}\n.foundry_11gbdty8 {\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdty9 {\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdtya {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_11gbdtya:hover {\n  border-color: var(--foundry_nu8bkpap);\n}\n.foundry_11gbdtya[data-state="checked"], .foundry_11gbdtya[data-state="mixed"] {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n}\n.foundry_11gbdtya[data-disabled="true"], .foundry_11gbdtya[data-disabled="true"]:hover {\n  color: var(--foundry_nu8bkp8t);\n  background-color: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_11gbdtyb {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_11gbdtyb:hover {\n  border-color: var(--foundry_nu8bkp40);\n}\n.foundry_11gbdtyb[data-state="checked"], .foundry_11gbdtyb[data-state="mixed"] {\n  border-color: var(--foundry_nu8bkp40);\n  background-color: var(--foundry_nu8bkp40);\n}\n.foundry_11gbdtyb[data-disabled="true"], .foundry_11gbdtyb[data-disabled="true"]:hover {\n  color: var(--foundry_nu8bkp8t);\n  background-color: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_11gbdtyc {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: all 0.15s ease-out;\n}\n.foundry_11gbdtyd {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_11gbdtyf {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_11gbdtyg {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_11gbdtyh {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_11gbdtyi {\n  margin: 0;\n}\n.foundry_11gbdtym {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_11gbdtyn {\n  color: var(--foundry_nu8bkp8q);\n}'],
        sourceRoot: ""
      }]);
      const d = u
    },
    17401: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_thj3a31 {\n  border: none;\n  margin: 0;\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_thj3a32 {\n  --foundry_thj3a30: 1px;\n}\n.foundry_thj3a33 {\n  --foundry_thj3a30: 2px;\n}\n.foundry_thj3a34 {\n  --foundry_thj3a30: 3px;\n}\n.foundry_thj3a35 {\n  --foundry_thj3a30: 4px;\n}\n.foundry_thj3a36 {\n  height: var(--foundry_thj3a30);\n  width: 100%;\n}\n.foundry_thj3a37 {\n  width: var(--foundry_thj3a30);\n  height: 100%;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/divider/dist/divider/divider.css"],
        names: [],
        mappings: "AAAA;EACE,YAAY;EACZ,SAAS;EACT,yCAAyC;AAC3C;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,8BAA8B;EAC9B,WAAW;AACb;AACA;EACE,6BAA6B;EAC7B,YAAY;AACd",
        sourcesContent: [".foundry_thj3a31 {\n  border: none;\n  margin: 0;\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_thj3a32 {\n  --foundry_thj3a30: 1px;\n}\n.foundry_thj3a33 {\n  --foundry_thj3a30: 2px;\n}\n.foundry_thj3a34 {\n  --foundry_thj3a30: 3px;\n}\n.foundry_thj3a35 {\n  --foundry_thj3a30: 4px;\n}\n.foundry_thj3a36 {\n  height: var(--foundry_thj3a30);\n  width: 100%;\n}\n.foundry_thj3a37 {\n  width: var(--foundry_thj3a30);\n  height: 100%;\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    27949: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, '.foundry_uaq1gw0 {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpj);\n  width: 100%;\n}\n.foundry_uaq1gw1 {\n  display: grid;\n  grid-template-areas: "label hint";\n  grid-template-columns: 1fr max(20%, 100px);\n  gap: var(--foundry_nu8bkpj);\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n.foundry_uaq1gw2 {\n  grid-area: label;\n  word-break: break-all;\n}\n.foundry_uaq1gw3 {\n  grid-area: hint;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gw4 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_uaq1gw5 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  padding: var(--foundry_nu8bkpk);\n  width: 100%;\n  background: var(--foundry_nu8bkp3p);\n  color: var(--foundry_nu8bkp8k);\n  border: 1px solid var(--foundry_nu8bkp9o);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gw5:hover {\n  border-color: var(--foundry_nu8bkp3z);\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gw5:focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  z-index: 1;\n}\n.foundry_uaq1gw5:disabled {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_uaq1gw5:not([data-placeholder]) {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw5[data-state="open"] {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw6 {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_uaq1gw6:hover {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw7 {\n  border-color: var(--foundry_nu8bkp9z);\n  border-width: 2px;\n}\n.foundry_uaq1gw7:hover {\n  border-color: var(--foundry_nu8bkp4m);\n}\n.foundry_uaq1gw7:focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_uaq1gw8 {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.foundry_uaq1gw9 {\n  color: var(--foundry_nu8bkp8s);\n  flex: none;\n}\n.foundry_uaq1gwa {\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_uaq1gwb {\n  border: 1px solid var(--foundry_nu8bkpa6);\n  width: var(--radix-select-trigger-width);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc {\n  margin: 0;\n  padding: 0;\n  background: var(--foundry_nu8bkp3p);\n  border-radius: var(--foundry_nu8bkp5);\n  box-shadow: 0px 0px 2px 0px var(--foundry_nu8bkp7z), 0px 8px 24px 0px var(--foundry_nu8bkp7z);\n  width: var(--radix-select-trigger-width);\n  max-height: calc(var(--radix-select-trigger-height) * 5);\n}\n.foundry_uaq1gwe {\n  margin: 0;\n  padding: var(--foundry_nu8bkpk);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: 0;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_uaq1gwe::after {\n  content: "";\n  position: absolute;\n  margin: auto;\n  bottom: 3px;\n  left: 0;\n  right: 0;\n  width: calc(100% - (var(--foundry_nu8bkp13) * 2));\n  height: 1px;\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_uaq1gwe:focus {\n  outline: none;\n}\n.foundry_uaq1gwe:hover {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_uaq1gwe:active {\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_uaq1gwe:hover:not(:focus-visible) {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_uaq1gwe:not(:hover):focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_uaq1gwe[data-state="checked"] {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_uaq1gwe[data-disabled] {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_uaq1gwe[data-disabled]:hover {\n  background: var(--foundry_nu8bkp3r);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:first-of-type {\n  border-top-left-radius: var(--foundry_nu8bkp5);\n  border-top-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:last-of-type {\n  border-bottom-left-radius: var(--foundry_nu8bkp5);\n  border-bottom-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:last-of-type:after {\n  display: none;\n}\n.foundry_uaq1gwd .foundry_uaq1gwe:after {\n  display: none;\n}\n.foundry_uaq1gwf {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gwg {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_uaq1gwh {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}\n.foundry_uaq1gwi {\n  margin-left: auto;\n}\n.foundry_uaq1gwj {\n  width: 100%;\n  height: 100%;\n}\n.foundry_uaq1gwk {\n  width: 100%;\n  height: 100%;\n}\n.foundry_uaq1gwl {\n  width: 6px;\n  padding: 8px 5px;\n}\n.foundry_uaq1gwm {\n  background: var(--foundry_nu8bkp3u);\n  border-radius: var(--foundry_nu8bkpb);\n}\n.foundry_uaq1gwn {\n  color: var(--foundry_nu8bkp8k);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/dropdown/dist/dropdown/dropdown.css"],
        names: [],
        mappings: "AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,aAAa;EACb,iCAAiC;EACjC,0CAA0C;EAC1C,2BAA2B;EAC3B,qBAAqB;EACrB,8BAA8B;EAC9B,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,8BAA8B;EAC9B,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,+BAA+B;EAC/B,WAAW;EACX,mCAAmC;EACnC,8BAA8B;EAC9B,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,0CAA0C;EAC1C,UAAU;AACZ;AACA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,iBAAiB;AACnB;AACA;EACE,qCAAqC;AACvC;AACA;EACE,0CAA0C;EAC1C,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,8BAA8B;EAC9B,UAAU;AACZ;AACA;EACE,8BAA8B;AAChC;AACA;EACE,yCAAyC;EACzC,wCAAwC;EACxC,qCAAqC;AACvC;AACA;EACE,SAAS;EACT,UAAU;EACV,mCAAmC;EACnC,qCAAqC;EACrC,6FAA6F;EAC7F,wCAAwC;EACxC,wDAAwD;AAC1D;AACA;EACE,SAAS;EACT,+BAA+B;EAC/B,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,OAAO;EACP,QAAQ;EACR,iDAAiD;EACjD,WAAW;EACX,mCAAmC;AACrC;AACA;EACE,aAAa;AACf;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,0CAA0C;EAC1C,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,oCAAoC;AACtC;AACA;EACE,mCAAmC;EACnC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,mCAAmC;AACrC;AACA;EACE,8CAA8C;EAC9C,+CAA+C;AACjD;AACA;EACE,iDAAiD;EACjD,kDAAkD;AACpD;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,oCAAoC;AACtC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,mCAAmC;EACnC,qCAAqC;AACvC;AACA;EACE,8BAA8B;AAChC",
        sourcesContent: ['.foundry_uaq1gw0 {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpj);\n  width: 100%;\n}\n.foundry_uaq1gw1 {\n  display: grid;\n  grid-template-areas: "label hint";\n  grid-template-columns: 1fr max(20%, 100px);\n  gap: var(--foundry_nu8bkpj);\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n.foundry_uaq1gw2 {\n  grid-area: label;\n  word-break: break-all;\n}\n.foundry_uaq1gw3 {\n  grid-area: hint;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gw4 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_uaq1gw5 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  padding: var(--foundry_nu8bkpk);\n  width: 100%;\n  background: var(--foundry_nu8bkp3p);\n  color: var(--foundry_nu8bkp8k);\n  border: 1px solid var(--foundry_nu8bkp9o);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gw5:hover {\n  border-color: var(--foundry_nu8bkp3z);\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gw5:focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  z-index: 1;\n}\n.foundry_uaq1gw5:disabled {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_uaq1gw5:not([data-placeholder]) {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw5[data-state="open"] {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw6 {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_uaq1gw6:hover {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw7 {\n  border-color: var(--foundry_nu8bkp9z);\n  border-width: 2px;\n}\n.foundry_uaq1gw7:hover {\n  border-color: var(--foundry_nu8bkp4m);\n}\n.foundry_uaq1gw7:focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_uaq1gw8 {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.foundry_uaq1gw9 {\n  color: var(--foundry_nu8bkp8s);\n  flex: none;\n}\n.foundry_uaq1gwa {\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_uaq1gwb {\n  border: 1px solid var(--foundry_nu8bkpa6);\n  width: var(--radix-select-trigger-width);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc {\n  margin: 0;\n  padding: 0;\n  background: var(--foundry_nu8bkp3p);\n  border-radius: var(--foundry_nu8bkp5);\n  box-shadow: 0px 0px 2px 0px var(--foundry_nu8bkp7z), 0px 8px 24px 0px var(--foundry_nu8bkp7z);\n  width: var(--radix-select-trigger-width);\n  max-height: calc(var(--radix-select-trigger-height) * 5);\n}\n.foundry_uaq1gwe {\n  margin: 0;\n  padding: var(--foundry_nu8bkpk);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: 0;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_uaq1gwe::after {\n  content: "";\n  position: absolute;\n  margin: auto;\n  bottom: 3px;\n  left: 0;\n  right: 0;\n  width: calc(100% - (var(--foundry_nu8bkp13) * 2));\n  height: 1px;\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_uaq1gwe:focus {\n  outline: none;\n}\n.foundry_uaq1gwe:hover {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_uaq1gwe:active {\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_uaq1gwe:hover:not(:focus-visible) {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_uaq1gwe:not(:hover):focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_uaq1gwe[data-state="checked"] {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_uaq1gwe[data-disabled] {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_uaq1gwe[data-disabled]:hover {\n  background: var(--foundry_nu8bkp3r);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:first-of-type {\n  border-top-left-radius: var(--foundry_nu8bkp5);\n  border-top-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:last-of-type {\n  border-bottom-left-radius: var(--foundry_nu8bkp5);\n  border-bottom-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:last-of-type:after {\n  display: none;\n}\n.foundry_uaq1gwd .foundry_uaq1gwe:after {\n  display: none;\n}\n.foundry_uaq1gwf {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gwg {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_uaq1gwh {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}\n.foundry_uaq1gwi {\n  margin-left: auto;\n}\n.foundry_uaq1gwj {\n  width: 100%;\n  height: 100%;\n}\n.foundry_uaq1gwk {\n  width: 100%;\n  height: 100%;\n}\n.foundry_uaq1gwl {\n  width: 6px;\n  padding: 8px 5px;\n}\n.foundry_uaq1gwm {\n  background: var(--foundry_nu8bkp3u);\n  border-radius: var(--foundry_nu8bkpb);\n}\n.foundry_uaq1gwn {\n  color: var(--foundry_nu8bkp8k);\n}'],
        sourceRoot: ""
      }]);
      const d = u
    },
    31611: (n, e, r) => {
      r.d(e, {
        A: () => k
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a),
        d = r(79908),
        i = r.n(d),
        s = new URL(r(25591), r.b),
        l = new URL(r(78118), r.b),
        f = new URL(r(14928), r.b),
        c = new URL(r(58858), r.b),
        A = new URL(r(78237), r.b),
        p = u()(t()),
        y = i()(s),
        b = i()(l),
        _ = i()(f),
        C = i()(c),
        v = i()(A);
      p.push([n.id, `\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(${y}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: italic;\n    font-display: swap;\n    font-weight: 400;\n    src: url(${b}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(${_}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(${C}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(${v}) format("woff");\n}\n`, "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/fonts/dist/index.css"],
        names: [],
        mappings: ";AACA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAAsD;AAC1D;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAAwD;AAC5D;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAA0D;AAC9D;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAAyD;AAC7D;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAA6D;AACjE",
        sourcesContent: ['\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(./files/HelveticaNowText.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: italic;\n    font-display: swap;\n    font-weight: 400;\n    src: url(./files/HelveticaNowTextIt.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(./files/HelveticaNowTextBold.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(./files/HelveticaNowDisplay.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(./files/HelveticaNowDisplayBold.woff) format("woff");\n}\n'],
        sourceRoot: ""
      }]);
      const k = p
    },
    19602: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_vsn8np0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8m);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/heading/dist/heading/heading.css"],
        names: [],
        mappings: "AAAA;EACE,SAAS;EACT,8BAA8B;AAChC",
        sourcesContent: [".foundry_vsn8np0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8m);\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    40492: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_a5x3kh0 {\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  transition: all 0.15s ease-out;\n  transition-property: color, background-color, border-color, outline-color;\n}\n.foundry_a5x3kh0:disabled {\n  cursor: not-allowed;\n}\n.foundry_a5x3kh9 {\n  padding: var(--foundry_nu8bkpj);\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_a5x3kha {\n  padding: var(--foundry_nu8bkpk);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khb {\n  padding: calc(var(--foundry_nu8bkpj) + 2.5px);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khc {\n  padding: var(--foundry_nu8bkpm);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khd {\n  width: 100%;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/icon-button/dist/icon-button/icon-button.css"],
        names: [],
        mappings: "AAAA;EACE,eAAe;EACf,oBAAoB;EACpB,cAAc;EACd,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,yEAAyE;AAC3E;AACA;EACE,mBAAmB;AACrB;AACA;EACE,+BAA+B;EAC/B,qCAAqC;AACvC;AACA;EACE,+BAA+B;EAC/B,qCAAqC;AACvC;AACA;EACE,6CAA6C;EAC7C,qCAAqC;AACvC;AACA;EACE,+BAA+B;EAC/B,qCAAqC;AACvC;AACA;EACE,WAAW;AACb",
        sourcesContent: [".foundry_a5x3kh0 {\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  transition: all 0.15s ease-out;\n  transition-property: color, background-color, border-color, outline-color;\n}\n.foundry_a5x3kh0:disabled {\n  cursor: not-allowed;\n}\n.foundry_a5x3kh9 {\n  padding: var(--foundry_nu8bkpj);\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_a5x3kha {\n  padding: var(--foundry_nu8bkpk);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khb {\n  padding: calc(var(--foundry_nu8bkpj) + 2.5px);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khc {\n  padding: var(--foundry_nu8bkpm);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khd {\n  width: 100%;\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    86845: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_bc732x0 {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: var(--foundry_nu8bkp4);\n  padding: var(--foundry_nu8bkp11) var(--foundry_nu8bkp12);\n  border-style: solid;\n  border-width: 1px;\n  border-color: var(--foundry_nu8bkp9m);\n  user-select: none;\n  font-family: var(--foundry_nu8bkp2n);\n  font-size: var(--foundry_nu8bkp38);\n  white-space: nowrap;\n}\n.foundry_bc732x1 {\n  display: inline;\n  padding: 0 var(--foundry_nu8bkp11);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/keyboard/dist/keyboard/keyboard.css"],
        names: [],
        mappings: "AAAA;EACE,mCAAmC;EACnC,8BAA8B;EAC9B,qCAAqC;EACrC,wDAAwD;EACxD,mBAAmB;EACnB,iBAAiB;EACjB,qCAAqC;EACrC,iBAAiB;EACjB,oCAAoC;EACpC,kCAAkC;EAClC,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kCAAkC;AACpC",
        sourcesContent: [".foundry_bc732x0 {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: var(--foundry_nu8bkp4);\n  padding: var(--foundry_nu8bkp11) var(--foundry_nu8bkp12);\n  border-style: solid;\n  border-width: 1px;\n  border-color: var(--foundry_nu8bkp9m);\n  user-select: none;\n  font-family: var(--foundry_nu8bkp2n);\n  font-size: var(--foundry_nu8bkp38);\n  white-space: nowrap;\n}\n.foundry_bc732x1 {\n  display: inline;\n  padding: 0 var(--foundry_nu8bkp11);\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    36033: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_bwy1ds0 {\n  display: block;\n  pointer-events: none;\n  position: fixed;\n  inset: 0;\n  z-index: 3;\n}\n.foundry_bwy1ds1:disabled {\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_bwy1ds1:not(:disabled) {\n  pointer-events: auto;\n}\n.foundry_bwy1ds2 {\n  position: fixed;\n  top: var(--foundry_nu8bkp15);\n  left: var(--foundry_nu8bkp15);\n}\n.foundry_bwy1ds3 {\n  top: var(--foundry_nu8bkp15);\n  right: var(--foundry_nu8bkp15);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_bwy1ds4 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--foundry_nu8bkpj);\n  border-color: var(--foundry_nu8bkp3n);\n  background-color: var(--foundry_nu8bkp3n);\n  border-radius: var(--foundry_nu8bkp6);\n  pointer-events: auto;\n}\n.foundry_bwy1ds5 {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.foundry_bwy1ds6 {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.foundry_bwy1ds8 {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: var(--foundry_nu8bkpm);\n  padding: 0 var(--foundry_nu8bkp15) var(--foundry_nu8bkp15);\n  box-sizing: border-box;\n}\n.foundry_bwy1ds9 {\n  margin-left: auto;\n}\n.foundry_bwy1dsa {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  user-select: none;\n  touch-action: none;\n  width: 100%;\n  height: 64px;\n}\n.foundry_bwy1dsb {\n  background-color: var(--foundry_nu8bkp3l);\n  position: relative;\n  flex-grow: 1;\n  width: var(--foundry_nu8bkp10);\n}\n.foundry_bwy1dsc {\n  position: absolute;\n  background-color: var(--foundry_nu8bkp3l);\n  height: 100%;\n}\n.foundry_bwy1dsb + span {\n  width: 100%;\n  pointer-events: none;\n}\n.foundry_bwy1dsd {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.foundry_bwy1dsd:focus-visible {\n  outline: none;\n}\n.foundry_bwy1dse {\n  display: block;\n  width: var(--foundry_nu8bkp13);\n  height: var(--foundry_nu8bkp13);\n  background-color: var(--foundry_nu8bkp3d);\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  cursor: pointer;\n  pointer-events: auto;\n}\n.foundry_bwy1dsd:focus-visible .foundry_bwy1dse {\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_bwy1dsf {\n  display: flex;\n  flex-direction: column;\n}\n.foundry_bwy1dsf .foundry_bwy1dsg {\n  color: var(--foundry_nu8bkp3j);\n}\n.foundry_bwy1dsh {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  min-height: var(--foundry_nu8bkp1l);\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.65) 75%);\n  z-index: -1;\n}\n@media screen and (min-width: 1024px) {\n  .foundry_bwy1ds2 {\n    top: var(--foundry_nu8bkp18);\n    left: var(--foundry_nu8bkp18);\n  }\n  .foundry_bwy1ds3 {\n    top: var(--foundry_nu8bkp18);\n    right: var(--foundry_nu8bkp18);\n  }\n  .foundry_bwy1ds8 {\n    padding: 0 var(--foundry_nu8bkp18) var(--foundry_nu8bkp18);\n  }\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/lightbox/dist/lightbox-controls/lightbox-controls.css"],
        names: [],
        mappings: "AAAA;EACE,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,QAAQ;EACR,UAAU;AACZ;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,4BAA4B;EAC5B,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,qCAAqC;EACrC,yCAAyC;EACzC,qCAAqC;EACrC,oBAAoB;AACtB;AACA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,yBAAyB;EACzB,0BAA0B;AAC5B;AACA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,2BAA2B;EAC3B,0DAA0D;EAC1D,sBAAsB;AACxB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,yCAAyC;EACzC,kBAAkB;EAClB,YAAY;EACZ,8BAA8B;AAChC;AACA;EACE,kBAAkB;EAClB,yCAAyC;EACzC,YAAY;AACd;AACA;EACE,WAAW;EACX,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;EACd,8BAA8B;EAC9B,+BAA+B;EAC/B,yCAAyC;EACzC,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,mCAAmC;EACnC,oFAAoF;EACpF,WAAW;AACb;AACA;EACE;IACE,4BAA4B;IAC5B,6BAA6B;EAC/B;EACA;IACE,4BAA4B;IAC5B,8BAA8B;EAChC;EACA;IACE,0DAA0D;EAC5D;AACF",
        sourcesContent: [".foundry_bwy1ds0 {\n  display: block;\n  pointer-events: none;\n  position: fixed;\n  inset: 0;\n  z-index: 3;\n}\n.foundry_bwy1ds1:disabled {\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_bwy1ds1:not(:disabled) {\n  pointer-events: auto;\n}\n.foundry_bwy1ds2 {\n  position: fixed;\n  top: var(--foundry_nu8bkp15);\n  left: var(--foundry_nu8bkp15);\n}\n.foundry_bwy1ds3 {\n  top: var(--foundry_nu8bkp15);\n  right: var(--foundry_nu8bkp15);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_bwy1ds4 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--foundry_nu8bkpj);\n  border-color: var(--foundry_nu8bkp3n);\n  background-color: var(--foundry_nu8bkp3n);\n  border-radius: var(--foundry_nu8bkp6);\n  pointer-events: auto;\n}\n.foundry_bwy1ds5 {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.foundry_bwy1ds6 {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.foundry_bwy1ds8 {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: var(--foundry_nu8bkpm);\n  padding: 0 var(--foundry_nu8bkp15) var(--foundry_nu8bkp15);\n  box-sizing: border-box;\n}\n.foundry_bwy1ds9 {\n  margin-left: auto;\n}\n.foundry_bwy1dsa {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  user-select: none;\n  touch-action: none;\n  width: 100%;\n  height: 64px;\n}\n.foundry_bwy1dsb {\n  background-color: var(--foundry_nu8bkp3l);\n  position: relative;\n  flex-grow: 1;\n  width: var(--foundry_nu8bkp10);\n}\n.foundry_bwy1dsc {\n  position: absolute;\n  background-color: var(--foundry_nu8bkp3l);\n  height: 100%;\n}\n.foundry_bwy1dsb + span {\n  width: 100%;\n  pointer-events: none;\n}\n.foundry_bwy1dsd {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.foundry_bwy1dsd:focus-visible {\n  outline: none;\n}\n.foundry_bwy1dse {\n  display: block;\n  width: var(--foundry_nu8bkp13);\n  height: var(--foundry_nu8bkp13);\n  background-color: var(--foundry_nu8bkp3d);\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  cursor: pointer;\n  pointer-events: auto;\n}\n.foundry_bwy1dsd:focus-visible .foundry_bwy1dse {\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_bwy1dsf {\n  display: flex;\n  flex-direction: column;\n}\n.foundry_bwy1dsf .foundry_bwy1dsg {\n  color: var(--foundry_nu8bkp3j);\n}\n.foundry_bwy1dsh {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  min-height: var(--foundry_nu8bkp1l);\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.65) 75%);\n  z-index: -1;\n}\n@media screen and (min-width: 1024px) {\n  .foundry_bwy1ds2 {\n    top: var(--foundry_nu8bkp18);\n    left: var(--foundry_nu8bkp18);\n  }\n  .foundry_bwy1ds3 {\n    top: var(--foundry_nu8bkp18);\n    right: var(--foundry_nu8bkp18);\n  }\n  .foundry_bwy1ds8 {\n    padding: 0 var(--foundry_nu8bkp18) var(--foundry_nu8bkp18);\n  }\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    86365: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, '.foundry_1a74xwb0 {\n  position: relative;\n  display: block;\n}\n.foundry_1a74xwb1 {\n  background: none;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: zoom-in;\n  position: relative;\n  width: 100%;\n  transform-origin: center;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  will-change: transform, width, height, top, left, aspect-ratio, position, object-fit, object-position, opacity;\n}\n.foundry_1a74xwb2 {\n  opacity: 0;\n  position: fixed;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 8003;\n}\n.foundry_1a74xwb3 {\n  outline-width: 4px;\n  outline-offset: -4px;\n}\n.foundry_1a74xwb3:focus-visible {\n  outline-color: var(--foundry_nu8bkp7x);\n}\n.foundry_1a74xwb3[data-idle="false"]:focus-visible {\n  outline-color: transparent !important;\n}\n.foundry_1a74xwb3 > * {\n  max-width: 100%;\n  max-height: 100%;\n}\n.foundry_1a74xwb4 {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: inherit;\n  object-position: inherit;\n}\n.foundry_1a74xwb5 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--foundry_nu8bkp1a);\n  width: var(--foundry_nu8bkp1a);\n  position: absolute;\n  bottom: var(--foundry_nu8bkp17);\n  right: var(--foundry_nu8bkp17);\n  color: var(--foundry_nu8bkp3g);\n  background-color: color-mix(in srgb, var(--foundry_nu8bkp85), transparent 50%);\n  border-radius: var(--foundry_nu8bkpa);\n  backdrop-filter: blur(5px);\n  transition: all 0.15s ease-out;\n  will-change: opacity;\n}\n.foundry_1a74xwb3:hover .foundry_1a74xwb5, .foundry_1a74xwb3:focus-visible .foundry_1a74xwb5 {\n  background-color: var(--foundry_nu8bkp3g);\n  color: var(--foundry_nu8bkp3n);\n}\n.foundry_1a74xwb6 {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 8002;\n  will-change: opacity;\n}\n.foundry_1a74xwb7 {\n  touch-action: none;\n  will-change: transform;\n  cursor: grab;\n}\n.foundry_1a74xwb8 {\n  position: fixed;\n  inset: 0;\n  background-color: var(--foundry_nu8bkp85);\n  z-index: 8001;\n  will-change: opacity;\n}\n.foundry_1a74xwb9 {\n  position: relative;\n  z-index: 8004;\n  will-change: opacity;\n}\n.foundry_1a74xwba {\n  display: block;\n  object-fit: contain;\n  max-width: 100%;\n  max-height: 100%;\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/lightbox/dist/lightbox/lightbox.css"],
        names: [],
        mappings: "AAAA;EACE,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,wBAAwB;EACxB,iBAAiB;EACjB,uBAAuB;EACvB,cAAc;EACd,8GAA8G;AAChH;AACA;EACE,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,sCAAsC;AACxC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,+BAA+B;EAC/B,8BAA8B;EAC9B,kBAAkB;EAClB,+BAA+B;EAC/B,8BAA8B;EAC9B,8BAA8B;EAC9B,8EAA8E;EAC9E,qCAAqC;EACrC,0BAA0B;EAC1B,8BAA8B;EAC9B,oBAAoB;AACtB;AACA;EACE,yCAAyC;EACzC,8BAA8B;AAChC;AACA;EACE,eAAe;EACf,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,eAAe;EACf,QAAQ;EACR,yCAAyC;EACzC,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB",
        sourcesContent: ['.foundry_1a74xwb0 {\n  position: relative;\n  display: block;\n}\n.foundry_1a74xwb1 {\n  background: none;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: zoom-in;\n  position: relative;\n  width: 100%;\n  transform-origin: center;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  will-change: transform, width, height, top, left, aspect-ratio, position, object-fit, object-position, opacity;\n}\n.foundry_1a74xwb2 {\n  opacity: 0;\n  position: fixed;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 8003;\n}\n.foundry_1a74xwb3 {\n  outline-width: 4px;\n  outline-offset: -4px;\n}\n.foundry_1a74xwb3:focus-visible {\n  outline-color: var(--foundry_nu8bkp7x);\n}\n.foundry_1a74xwb3[data-idle="false"]:focus-visible {\n  outline-color: transparent !important;\n}\n.foundry_1a74xwb3 > * {\n  max-width: 100%;\n  max-height: 100%;\n}\n.foundry_1a74xwb4 {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: inherit;\n  object-position: inherit;\n}\n.foundry_1a74xwb5 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--foundry_nu8bkp1a);\n  width: var(--foundry_nu8bkp1a);\n  position: absolute;\n  bottom: var(--foundry_nu8bkp17);\n  right: var(--foundry_nu8bkp17);\n  color: var(--foundry_nu8bkp3g);\n  background-color: color-mix(in srgb, var(--foundry_nu8bkp85), transparent 50%);\n  border-radius: var(--foundry_nu8bkpa);\n  backdrop-filter: blur(5px);\n  transition: all 0.15s ease-out;\n  will-change: opacity;\n}\n.foundry_1a74xwb3:hover .foundry_1a74xwb5, .foundry_1a74xwb3:focus-visible .foundry_1a74xwb5 {\n  background-color: var(--foundry_nu8bkp3g);\n  color: var(--foundry_nu8bkp3n);\n}\n.foundry_1a74xwb6 {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 8002;\n  will-change: opacity;\n}\n.foundry_1a74xwb7 {\n  touch-action: none;\n  will-change: transform;\n  cursor: grab;\n}\n.foundry_1a74xwb8 {\n  position: fixed;\n  inset: 0;\n  background-color: var(--foundry_nu8bkp85);\n  z-index: 8001;\n  will-change: opacity;\n}\n.foundry_1a74xwb9 {\n  position: relative;\n  z-index: 8004;\n  will-change: opacity;\n}\n.foundry_1a74xwba {\n  display: block;\n  object-fit: contain;\n  max-width: 100%;\n  max-height: 100%;\n}'],
        sourceRoot: ""
      }]);
      const d = u
    },
    59509: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_148vt480 {\n  z-index: 1;\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n.foundry_148vt481 {\n  will-change: transform;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  touch-action: none;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/lightbox/dist/zoom-pan/zoom-pan.css"],
        names: [],
        mappings: "AAAA;EACE,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB",
        sourcesContent: [".foundry_148vt480 {\n  z-index: 1;\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n.foundry_148vt481 {\n  will-change: transform;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  touch-action: none;\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    44533: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_13plll30 {\n  display: block;\n  color: var(--foundry_nu8bkp8j);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/metadata/dist/metadata/metadata.css"],
        names: [],
        mappings: "AAAA;EACE,cAAc;EACd,8BAA8B;AAChC",
        sourcesContent: [".foundry_13plll30 {\n  display: block;\n  color: var(--foundry_nu8bkp8j);\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    22338: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_kwp8su0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_kwp8su0 + .foundry_kwp8su0 {\n  margin-top: var(--foundry_nu8bkp2z);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/paragraph/dist/paragraph/paragraph.css"],
        names: [],
        mappings: "AAAA;EACE,SAAS;EACT,8BAA8B;AAChC;AACA;EACE,mCAAmC;AACrC",
        sourcesContent: [".foundry_kwp8su0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_kwp8su0 + .foundry_kwp8su0 {\n  margin-top: var(--foundry_nu8bkp2z);\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    96295: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, '.foundry_1pfduet0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_1pfduet2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  border-radius: var(--foundry_nu8bkpa);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1[aria-invalid="true"]) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9z);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1[aria-invalid="true"]):hover {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp4m);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1:focus-visible) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_1pfduet3 {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  padding: 1px;\n}\n.foundry_1pfduet4 {\n  height: var(--foundry_nu8bkp17);\n  width: var(--foundry_nu8bkp17);\n  padding: 2px;\n}\n.foundry_1pfduet5 {\n  height: var(--foundry_nu8bkp18);\n  width: var(--foundry_nu8bkp18);\n  padding: 3px;\n}\n.foundry_1pfduet6 {\n  height: 100%;\n  width: 100%;\n  border-radius: var(--foundry_nu8bkpa);\n  box-sizing: border-box;\n  border-width: var(--foundry_nu8bkpe);\n}\n.foundry_1pfduet7 {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_1pfduet7:hover {\n  border-color: var(--foundry_nu8bkpap);\n}\n.foundry_1pfduet7[data-state="checked"] {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n}\n.foundry_1pfduet7[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_1pfduet7[data-state="checked"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1pfduet8 {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1pfduet8:hover {\n  border-color: var(--foundry_nu8bkp40);\n}\n.foundry_1pfduet8[data-state="checked"] {\n  border-color: var(--foundry_nu8bkp40);\n  background-color: var(--foundry_nu8bkp40);\n}\n.foundry_1pfduet8[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_1pfduet8[data-state="checked"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1pfduet9 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: all 0.15s ease-out;\n}\n.foundry_1pfdueta {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_1pfduetc {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_1pfduetd {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_1pfduete {\n  margin: 0;\n}\n.foundry_1pfdueti {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_1pfduetj {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_1pfduetk {\n  color: var(--foundry_nu8bkp8q);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/radio-group/dist/radio-button/radio-button.css"],
        names: [],
        mappings: "AAAA;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,qCAAqC;AACvC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,YAAY;EACZ,WAAW;EACX,qCAAqC;EACrC,sBAAsB;EACtB,oCAAoC;AACtC;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE,SAAS;AACX;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC",
        sourcesContent: ['.foundry_1pfduet0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_1pfduet2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  border-radius: var(--foundry_nu8bkpa);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1[aria-invalid="true"]) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9z);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1[aria-invalid="true"]):hover {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp4m);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1:focus-visible) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_1pfduet3 {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  padding: 1px;\n}\n.foundry_1pfduet4 {\n  height: var(--foundry_nu8bkp17);\n  width: var(--foundry_nu8bkp17);\n  padding: 2px;\n}\n.foundry_1pfduet5 {\n  height: var(--foundry_nu8bkp18);\n  width: var(--foundry_nu8bkp18);\n  padding: 3px;\n}\n.foundry_1pfduet6 {\n  height: 100%;\n  width: 100%;\n  border-radius: var(--foundry_nu8bkpa);\n  box-sizing: border-box;\n  border-width: var(--foundry_nu8bkpe);\n}\n.foundry_1pfduet7 {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_1pfduet7:hover {\n  border-color: var(--foundry_nu8bkpap);\n}\n.foundry_1pfduet7[data-state="checked"] {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n}\n.foundry_1pfduet7[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_1pfduet7[data-state="checked"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1pfduet8 {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1pfduet8:hover {\n  border-color: var(--foundry_nu8bkp40);\n}\n.foundry_1pfduet8[data-state="checked"] {\n  border-color: var(--foundry_nu8bkp40);\n  background-color: var(--foundry_nu8bkp40);\n}\n.foundry_1pfduet8[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_1pfduet8[data-state="checked"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1pfduet9 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: all 0.15s ease-out;\n}\n.foundry_1pfdueta {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_1pfduetc {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_1pfduetd {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_1pfduete {\n  margin: 0;\n}\n.foundry_1pfdueti {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_1pfduetj {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_1pfduetk {\n  color: var(--foundry_nu8bkp8q);\n}'],
        sourceRoot: ""
      }]);
      const d = u
    },
    44625: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_njguqn0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpo);\n}\n.foundry_njguqn1 {\n  display: flex;\n  align-items: flex-start;\n}\n.foundry_njguqn2 {\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_njguqn3 {\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_njguqn4 {\n  gap: var(--foundry_nu8bkpn);\n}\n.foundry_njguqn5 {\n  flex-direction: row;\n}\n.foundry_njguqn6 {\n  flex-direction: column;\n}\n.foundry_njguqn7 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_njguqn8 {\n  margin: 0;\n}\n.foundry_njguqn9 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_njguqna {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_njguqnb {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_njguqnc {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/radio-group/dist/radio-group/radio-group.css"],
        names: [],
        mappings: "AAAA;EACE,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,SAAS;AACX;AACA;EACE,8BAA8B;EAC9B,mCAAmC;AACrC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,oCAAoC;AACtC",
        sourcesContent: [".foundry_njguqn0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpo);\n}\n.foundry_njguqn1 {\n  display: flex;\n  align-items: flex-start;\n}\n.foundry_njguqn2 {\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_njguqn3 {\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_njguqn4 {\n  gap: var(--foundry_nu8bkpn);\n}\n.foundry_njguqn5 {\n  flex-direction: row;\n}\n.foundry_njguqn6 {\n  flex-direction: column;\n}\n.foundry_njguqn7 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_njguqn8 {\n  margin: 0;\n}\n.foundry_njguqn9 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_njguqna {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_njguqnb {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_njguqnc {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    13786: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_xnp8ik0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8j);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/subtitle/dist/subtitle/subtitle.css"],
        names: [],
        mappings: "AAAA;EACE,SAAS;EACT,8BAA8B;AAChC",
        sourcesContent: [".foundry_xnp8ik0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8j);\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    96722: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, '.foundry_okz6z20 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_okz6z21 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  border-radius: var(--foundry_nu8bkpb);\n  border-width: var(--foundry_nu8bkpe);\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  transition: all 100ms ease-in-out;\n}\n.foundry_okz6z21:has(input:focus-visible) {\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_okz6z22 {\n  background-color: transparent;\n  color: var(--foundry_nu8bkp8v);\n}\n.foundry_okz6z22:hover {\n  border-color: var(--foundry_nu8bkpap);\n  color: var(--foundry_nu8bkpap);\n}\n.foundry_okz6z22[data-state="selected"], .foundry_okz6z22[data-state="selected"]:hover {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_okz6z22[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  color: var(--foundry_nu8bkp3v);\n  cursor: not-allowed;\n}\n.foundry_okz6z22[data-state="selected"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_okz6z23 {\n  background-color: transparent;\n  border-color: var(--foundry_nu8bkp8s);\n  color: var(--foundry_nu8bkp8s);\n}\n.foundry_okz6z23:hover {\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp40);\n}\n.foundry_okz6z23[data-state="selected"], .foundry_okz6z23[data-state="selected"]:hover {\n  background-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_okz6z23[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  color: var(--foundry_nu8bkp3v);\n  cursor: not-allowed;\n}\n.foundry_okz6z23[data-state="selected"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_okz6z24 {\n  width: var(--foundry_nu8bkp19);\n}\n.foundry_okz6z25 {\n  height: var(--foundry_nu8bkp16);\n}\n.foundry_okz6z26 {\n  width: var(--foundry_nu8bkp1a);\n}\n.foundry_okz6z27 {\n  height: var(--foundry_nu8bkp17);\n}\n.foundry_okz6z28 {\n  box-sizing: border-box;\n  border-radius: var(--foundry_nu8bkpb);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n}\n.foundry_okz6z29 {\n  padding-left: 4px;\n}\n.foundry_okz6z2a {\n  padding-left: 5px;\n}\n.foundry_okz6z2b {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_okz6z2c {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_okz6z2d {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_okz6z2e {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_okz6z2f {\n  margin: 0;\n}\n.foundry_okz6z2i {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_okz6z2k {\n  width: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2l {\n  height: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2m {\n  width: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2n {\n  height: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2o {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  margin: auto;\n  transition: opacity 50ms ease-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.foundry_okz6z2p {\n  --foundry_okz6z2j: 5px;\n}\n.foundry_okz6z2q {\n  --foundry_okz6z2j: 7px;\n}\n.foundry_okz6z2r {\n  left: var(--foundry_okz6z2j);\n  right: auto;\n}\n.foundry_okz6z2s {\n  left: auto;\n  right: var(--foundry_okz6z2j);\n}\n.foundry_okz6z2v {\n  opacity: 1;\n}\n.foundry_okz6z2w {\n  opacity: 1;\n}\n.foundry_okz6z2y {\n  width: var(--foundry_nu8bkp13);\n}\n.foundry_okz6z2z {\n  height: var(--foundry_nu8bkp13);\n}\n.foundry_okz6z210 {\n  width: var(--foundry_nu8bkp14);\n}\n.foundry_okz6z211 {\n  height: var(--foundry_nu8bkp14);\n}\n.foundry_okz6z212 {\n  display: flex;\n  transition: transform 80ms ease-out;\n  will-change: transform;\n}\n.foundry_okz6z213 {\n  --foundry_okz6z2x: var(--foundry_nu8bkp16);\n}\n.foundry_okz6z214 {\n  --foundry_okz6z2x: var(--foundry_nu8bkp17);\n}\n.foundry_okz6z215 {\n  transform: translateX(var(--foundry_okz6z2x));\n}\n@supports (width: round(1px, 1px)) {\n  .foundry_okz6z24 {\n    width: round(var(--foundry_nu8bkp19), 2px);\n  }\n  .foundry_okz6z26 {\n    width: round(var(--foundry_nu8bkp1a), 2px);\n  }\n  .foundry_okz6z2k {\n    width: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2m {\n    width: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2y {\n    width: round(var(--foundry_nu8bkp13), 2px);\n  }\n  .foundry_okz6z210 {\n    width: round(var(--foundry_nu8bkp14), 2px);\n  }\n}\n@supports (height: round(1px, 1px)) {\n  .foundry_okz6z25 {\n    height: round(var(--foundry_nu8bkp16), 2px);\n  }\n  .foundry_okz6z27 {\n    height: round(var(--foundry_nu8bkp17), 2px);\n  }\n  .foundry_okz6z2l {\n    height: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2n {\n    height: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2z {\n    height: round(var(--foundry_nu8bkp13), 2px);\n  }\n  .foundry_okz6z211 {\n    height: round(var(--foundry_nu8bkp14), 2px);\n  }\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/switch/dist/switch/switch.css"],
        names: [],
        mappings: "AAAA;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,qCAAqC;EACrC,oCAAoC;EACpC,mBAAmB;EACnB,qCAAqC;EACrC,iCAAiC;AACnC;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,6BAA6B;EAC7B,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,8BAA8B;AAChC;AACA;EACE,6BAA6B;EAC7B,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,yCAAyC;EACzC,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,sBAAsB;EACtB,qCAAqC;EACrC,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE,SAAS;AACX;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,4BAA4B;EAC5B,WAAW;AACb;AACA;EACE,UAAU;EACV,6BAA6B;AAC/B;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,aAAa;EACb,mCAAmC;EACnC,sBAAsB;AACxB;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,6CAA6C;AAC/C;AACA;EACE;IACE,0CAA0C;EAC5C;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,0CAA0C;EAC5C;AACF;AACA;EACE;IACE,2CAA2C;EAC7C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,2CAA2C;EAC7C;AACF",
        sourcesContent: ['.foundry_okz6z20 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_okz6z21 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  border-radius: var(--foundry_nu8bkpb);\n  border-width: var(--foundry_nu8bkpe);\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  transition: all 100ms ease-in-out;\n}\n.foundry_okz6z21:has(input:focus-visible) {\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_okz6z22 {\n  background-color: transparent;\n  color: var(--foundry_nu8bkp8v);\n}\n.foundry_okz6z22:hover {\n  border-color: var(--foundry_nu8bkpap);\n  color: var(--foundry_nu8bkpap);\n}\n.foundry_okz6z22[data-state="selected"], .foundry_okz6z22[data-state="selected"]:hover {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_okz6z22[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  color: var(--foundry_nu8bkp3v);\n  cursor: not-allowed;\n}\n.foundry_okz6z22[data-state="selected"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_okz6z23 {\n  background-color: transparent;\n  border-color: var(--foundry_nu8bkp8s);\n  color: var(--foundry_nu8bkp8s);\n}\n.foundry_okz6z23:hover {\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp40);\n}\n.foundry_okz6z23[data-state="selected"], .foundry_okz6z23[data-state="selected"]:hover {\n  background-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_okz6z23[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  color: var(--foundry_nu8bkp3v);\n  cursor: not-allowed;\n}\n.foundry_okz6z23[data-state="selected"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_okz6z24 {\n  width: var(--foundry_nu8bkp19);\n}\n.foundry_okz6z25 {\n  height: var(--foundry_nu8bkp16);\n}\n.foundry_okz6z26 {\n  width: var(--foundry_nu8bkp1a);\n}\n.foundry_okz6z27 {\n  height: var(--foundry_nu8bkp17);\n}\n.foundry_okz6z28 {\n  box-sizing: border-box;\n  border-radius: var(--foundry_nu8bkpb);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n}\n.foundry_okz6z29 {\n  padding-left: 4px;\n}\n.foundry_okz6z2a {\n  padding-left: 5px;\n}\n.foundry_okz6z2b {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_okz6z2c {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_okz6z2d {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_okz6z2e {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_okz6z2f {\n  margin: 0;\n}\n.foundry_okz6z2i {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_okz6z2k {\n  width: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2l {\n  height: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2m {\n  width: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2n {\n  height: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2o {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  margin: auto;\n  transition: opacity 50ms ease-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.foundry_okz6z2p {\n  --foundry_okz6z2j: 5px;\n}\n.foundry_okz6z2q {\n  --foundry_okz6z2j: 7px;\n}\n.foundry_okz6z2r {\n  left: var(--foundry_okz6z2j);\n  right: auto;\n}\n.foundry_okz6z2s {\n  left: auto;\n  right: var(--foundry_okz6z2j);\n}\n.foundry_okz6z2v {\n  opacity: 1;\n}\n.foundry_okz6z2w {\n  opacity: 1;\n}\n.foundry_okz6z2y {\n  width: var(--foundry_nu8bkp13);\n}\n.foundry_okz6z2z {\n  height: var(--foundry_nu8bkp13);\n}\n.foundry_okz6z210 {\n  width: var(--foundry_nu8bkp14);\n}\n.foundry_okz6z211 {\n  height: var(--foundry_nu8bkp14);\n}\n.foundry_okz6z212 {\n  display: flex;\n  transition: transform 80ms ease-out;\n  will-change: transform;\n}\n.foundry_okz6z213 {\n  --foundry_okz6z2x: var(--foundry_nu8bkp16);\n}\n.foundry_okz6z214 {\n  --foundry_okz6z2x: var(--foundry_nu8bkp17);\n}\n.foundry_okz6z215 {\n  transform: translateX(var(--foundry_okz6z2x));\n}\n@supports (width: round(1px, 1px)) {\n  .foundry_okz6z24 {\n    width: round(var(--foundry_nu8bkp19), 2px);\n  }\n  .foundry_okz6z26 {\n    width: round(var(--foundry_nu8bkp1a), 2px);\n  }\n  .foundry_okz6z2k {\n    width: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2m {\n    width: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2y {\n    width: round(var(--foundry_nu8bkp13), 2px);\n  }\n  .foundry_okz6z210 {\n    width: round(var(--foundry_nu8bkp14), 2px);\n  }\n}\n@supports (height: round(1px, 1px)) {\n  .foundry_okz6z25 {\n    height: round(var(--foundry_nu8bkp16), 2px);\n  }\n  .foundry_okz6z27 {\n    height: round(var(--foundry_nu8bkp17), 2px);\n  }\n  .foundry_okz6z2l {\n    height: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2n {\n    height: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2z {\n    height: round(var(--foundry_nu8bkp13), 2px);\n  }\n  .foundry_okz6z211 {\n    height: round(var(--foundry_nu8bkp14), 2px);\n  }\n}'],
        sourceRoot: ""
      }]);
      const d = u
    },
    88691: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, '.foundry_vq8c3j0 {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpj);\n  width: 100%;\n}\n.foundry_vq8c3j1 {\n  display: grid;\n  grid-template-areas: "label hint";\n  grid-template-columns: 1fr max(20%, 100px);\n  gap: var(--foundry_nu8bkpj);\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n.foundry_vq8c3j2 {\n  grid-area: label;\n  word-break: break-all;\n}\n.foundry_vq8c3j3 {\n  grid-area: hint;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j4 {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j5 {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_vq8c3j6 {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}\n.foundry_vq8c3j7 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_vq8c3j8 {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9 {\n  resize: none;\n  padding: var(--foundry_nu8bkpk);\n  padding-right: 0;\n  border-radius: var(--foundry_nu8bkp5);\n  background: var(--foundry_nu8bkp3p);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp9o);\n  color: var(--foundry_nu8bkp8j);\n  width: 100%;\n  box-sizing: border-box;\n  scrollbar-gutter: stable;\n}\n.foundry_vq8c3j9:hover {\n  border-color: var(--foundry_nu8bkp3z);\n}\n.foundry_vq8c3j9:focus-visible {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-offset: -2px;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_vq8c3j9::placeholder {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9:disabled {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_vq8c3j9:read-only {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9::-webkit-scrollbar {\n  width: calc(var(--foundry_nu8bkpm) + var(--foundry_nu8bkpj));\n}\n.foundry_vq8c3j9::-webkit-scrollbar-track {\n  display: none;\n  user-select: none;\n  touch-action: none;\n}\n.foundry_vq8c3j9::-webkit-scrollbar-thumb {\n  border-width: calc((var(--foundry_nu8bkpm) + var(--foundry_nu8bkpj) - 6px) / 2);\n  border-style: solid;\n  border-color: transparent;\n  background-color: var(--foundry_nu8bkp9m);\n  border-radius: var(--foundry_nu8bkpb);\n  background-clip: content-box;\n}\n.foundry_vq8c3j9:hover::placeholder {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j9[aria-invalid="true"]:disabled, .foundry_vq8c3j9[aria-invalid="true"][readonly] {\n  border-color: var(--foundry_nu8bkp9z);\n}\n.foundry_vq8c3jb {\n  border-width: 2px;\n  border-color: var(--foundry_nu8bkp9z);\n}\n.foundry_vq8c3jb:hover {\n  border-color: var(--foundry_nu8bkp4m);\n}\n.foundry_vq8c3jb:focus-visible {\n  border-color: transparent;\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/text-area/dist/text-area/text-area.css"],
        names: [],
        mappings: "AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,aAAa;EACb,iCAAiC;EACjC,0CAA0C;EAC1C,2BAA2B;EAC3B,qBAAqB;EACrB,8BAA8B;EAC9B,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,oCAAoC;AACtC;AACA;EACE,8BAA8B;EAC9B,mCAAmC;AACrC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,+BAA+B;EAC/B,gBAAgB;EAChB,qCAAqC;EACrC,mCAAmC;EACnC,iBAAiB;EACjB,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;EAC9B,WAAW;EACX,sBAAsB;EACtB,wBAAwB;AAC1B;AACA;EACE,qCAAqC;AACvC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,4DAA4D;AAC9D;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,+EAA+E;EAC/E,mBAAmB;EACnB,yBAAyB;EACzB,yCAAyC;EACzC,qCAAqC;EACrC,4BAA4B;AAC9B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,iBAAiB;EACjB,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,yBAAyB;AAC3B",
        sourcesContent: ['.foundry_vq8c3j0 {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpj);\n  width: 100%;\n}\n.foundry_vq8c3j1 {\n  display: grid;\n  grid-template-areas: "label hint";\n  grid-template-columns: 1fr max(20%, 100px);\n  gap: var(--foundry_nu8bkpj);\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n.foundry_vq8c3j2 {\n  grid-area: label;\n  word-break: break-all;\n}\n.foundry_vq8c3j3 {\n  grid-area: hint;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j4 {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j5 {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_vq8c3j6 {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}\n.foundry_vq8c3j7 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_vq8c3j8 {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9 {\n  resize: none;\n  padding: var(--foundry_nu8bkpk);\n  padding-right: 0;\n  border-radius: var(--foundry_nu8bkp5);\n  background: var(--foundry_nu8bkp3p);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp9o);\n  color: var(--foundry_nu8bkp8j);\n  width: 100%;\n  box-sizing: border-box;\n  scrollbar-gutter: stable;\n}\n.foundry_vq8c3j9:hover {\n  border-color: var(--foundry_nu8bkp3z);\n}\n.foundry_vq8c3j9:focus-visible {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-offset: -2px;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_vq8c3j9::placeholder {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9:disabled {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_vq8c3j9:read-only {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9::-webkit-scrollbar {\n  width: calc(var(--foundry_nu8bkpm) + var(--foundry_nu8bkpj));\n}\n.foundry_vq8c3j9::-webkit-scrollbar-track {\n  display: none;\n  user-select: none;\n  touch-action: none;\n}\n.foundry_vq8c3j9::-webkit-scrollbar-thumb {\n  border-width: calc((var(--foundry_nu8bkpm) + var(--foundry_nu8bkpj) - 6px) / 2);\n  border-style: solid;\n  border-color: transparent;\n  background-color: var(--foundry_nu8bkp9m);\n  border-radius: var(--foundry_nu8bkpb);\n  background-clip: content-box;\n}\n.foundry_vq8c3j9:hover::placeholder {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j9[aria-invalid="true"]:disabled, .foundry_vq8c3j9[aria-invalid="true"][readonly] {\n  border-color: var(--foundry_nu8bkp9z);\n}\n.foundry_vq8c3jb {\n  border-width: 2px;\n  border-color: var(--foundry_nu8bkp9z);\n}\n.foundry_vq8c3jb:hover {\n  border-color: var(--foundry_nu8bkp4m);\n}\n.foundry_vq8c3jb:focus-visible {\n  border-color: transparent;\n}'],
        sourceRoot: ""
      }]);
      const d = u
    },
    95075: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_12nwidl1 {\n  text-decoration-line: underline;\n}\n.foundry_12nwidl2 {\n  font-style: italic;\n}\n.foundry_12nwidl3 {\n  font-style: italic;\n}\n.foundry_12nwidl4 {\n  font-style: italic;\n}\n.foundry_12nwidl5 {\n  background: var(--foundry_nu8bkp4x);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_12nwidl6 {\n  text-decoration-line: strikethrough;\n}\n.foundry_12nwidl7 {\n  font-weight: bold;\n}\n.foundry_12nwidla {\n  text-decoration-line: underline;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/text/dist/text/text.css"],
        names: [],
        mappings: "AAAA;EACE,+BAA+B;AACjC;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,8BAA8B;AAChC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,+BAA+B;AACjC",
        sourcesContent: [".foundry_12nwidl1 {\n  text-decoration-line: underline;\n}\n.foundry_12nwidl2 {\n  font-style: italic;\n}\n.foundry_12nwidl3 {\n  font-style: italic;\n}\n.foundry_12nwidl4 {\n  font-style: italic;\n}\n.foundry_12nwidl5 {\n  background: var(--foundry_nu8bkp4x);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_12nwidl6 {\n  text-decoration-line: strikethrough;\n}\n.foundry_12nwidl7 {\n  font-weight: bold;\n}\n.foundry_12nwidla {\n  text-decoration-line: underline;\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    56108: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, '.foundry_1qqcnua0:disabled {\n  color: var(--foundry_nu8bkp8k);\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua1 {\n  color: var(--foundry_nu8bkp85);\n  border-color: var(--foundry_nu8bkp4x);\n  background-color: var(--foundry_nu8bkp4x);\n}\n.foundry_1qqcnua1[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp4z);\n  background-color: var(--foundry_nu8bkp4z);\n}\n.foundry_1qqcnua1:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp4y);\n  background-color: var(--foundry_nu8bkp4y);\n}\n.foundry_1qqcnua1:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp4y);\n  background-color: var(--foundry_nu8bkp4y);\n}\n.foundry_1qqcnua1:focus-visible {\n  outline-color: var(--foundry_nu8bkp4v);\n}\n.foundry_1qqcnua2 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: var(--foundry_nu8bkp9p);\n  background-color: transparent;\n}\n.foundry_1qqcnua2[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua2:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua2:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua3 {\n  color: var(--foundry_nu8bkp8m);\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua3[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  background-color: var(--foundry_nu8bkp3v);\n}\n.foundry_1qqcnua3:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua3:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua4 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: transparent;\n  background-color: transparent;\n}\n.foundry_1qqcnua4:disabled {\n  color: var(--foundry_nu8bkp8k);\n  border-color: transparent;\n  background-color: transparent;\n}\n.foundry_1qqcnua4[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua4:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp3s);\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua4:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp3s);\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua5 {\n  color: var(--foundry_nu8bkp7x);\n  border-color: var(--foundry_nu8bkp6m);\n  background-color: var(--foundry_nu8bkp6m);\n}\n.foundry_1qqcnua5[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp6o);\n  background-color: var(--foundry_nu8bkp6o);\n}\n.foundry_1qqcnua5:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp6n);\n  background-color: var(--foundry_nu8bkp6n);\n}\n.foundry_1qqcnua5:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp6n);\n  background-color: var(--foundry_nu8bkp6n);\n}\n.foundry_1qqcnua5:focus-visible {\n  outline-color: var(--foundry_nu8bkp6j);\n}\n.foundry_1qqcnua6 {\n  color: var(--foundry_nu8bkp7x);\n  border-color: var(--foundry_nu8bkp49);\n  background-color: var(--foundry_nu8bkp49);\n}\n.foundry_1qqcnua6[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp4b);\n  background-color: var(--foundry_nu8bkp4b);\n}\n.foundry_1qqcnua6:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp4a);\n  background-color: var(--foundry_nu8bkp4a);\n}\n.foundry_1qqcnua6:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp4a);\n  background-color: var(--foundry_nu8bkp4a);\n}\n.foundry_1qqcnua6:focus-visible {\n  outline-color: var(--foundry_nu8bkp47);\n}\n.foundry_1qqcnua7 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: var(--foundry_nu8bkp9p);\n  background-color: transparent;\n}\n.foundry_1qqcnua7[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp3y);\n  border-color: var(--foundry_nu8bkp3y);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1qqcnua7:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp40);\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1qqcnua7:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp40);\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/theme/dist/client/mixins/buttons.css"],
        names: [],
        mappings: "AAAA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,sCAAsC;AACxC;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,6BAA6B;AAC/B;AACA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,6BAA6B;AAC/B;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,sCAAsC;AACxC;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,sCAAsC;AACxC;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE,yCAAyC;EACzC,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,yCAAyC;EACzC,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,yCAAyC;EACzC,qCAAqC;EACrC,8BAA8B;AAChC",
        sourcesContent: ['.foundry_1qqcnua0:disabled {\n  color: var(--foundry_nu8bkp8k);\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua1 {\n  color: var(--foundry_nu8bkp85);\n  border-color: var(--foundry_nu8bkp4x);\n  background-color: var(--foundry_nu8bkp4x);\n}\n.foundry_1qqcnua1[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp4z);\n  background-color: var(--foundry_nu8bkp4z);\n}\n.foundry_1qqcnua1:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp4y);\n  background-color: var(--foundry_nu8bkp4y);\n}\n.foundry_1qqcnua1:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp4y);\n  background-color: var(--foundry_nu8bkp4y);\n}\n.foundry_1qqcnua1:focus-visible {\n  outline-color: var(--foundry_nu8bkp4v);\n}\n.foundry_1qqcnua2 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: var(--foundry_nu8bkp9p);\n  background-color: transparent;\n}\n.foundry_1qqcnua2[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua2:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua2:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua3 {\n  color: var(--foundry_nu8bkp8m);\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua3[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  background-color: var(--foundry_nu8bkp3v);\n}\n.foundry_1qqcnua3:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua3:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua4 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: transparent;\n  background-color: transparent;\n}\n.foundry_1qqcnua4:disabled {\n  color: var(--foundry_nu8bkp8k);\n  border-color: transparent;\n  background-color: transparent;\n}\n.foundry_1qqcnua4[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua4:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp3s);\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua4:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp3s);\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua5 {\n  color: var(--foundry_nu8bkp7x);\n  border-color: var(--foundry_nu8bkp6m);\n  background-color: var(--foundry_nu8bkp6m);\n}\n.foundry_1qqcnua5[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp6o);\n  background-color: var(--foundry_nu8bkp6o);\n}\n.foundry_1qqcnua5:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp6n);\n  background-color: var(--foundry_nu8bkp6n);\n}\n.foundry_1qqcnua5:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp6n);\n  background-color: var(--foundry_nu8bkp6n);\n}\n.foundry_1qqcnua5:focus-visible {\n  outline-color: var(--foundry_nu8bkp6j);\n}\n.foundry_1qqcnua6 {\n  color: var(--foundry_nu8bkp7x);\n  border-color: var(--foundry_nu8bkp49);\n  background-color: var(--foundry_nu8bkp49);\n}\n.foundry_1qqcnua6[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp4b);\n  background-color: var(--foundry_nu8bkp4b);\n}\n.foundry_1qqcnua6:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp4a);\n  background-color: var(--foundry_nu8bkp4a);\n}\n.foundry_1qqcnua6:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp4a);\n  background-color: var(--foundry_nu8bkp4a);\n}\n.foundry_1qqcnua6:focus-visible {\n  outline-color: var(--foundry_nu8bkp47);\n}\n.foundry_1qqcnua7 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: var(--foundry_nu8bkp9p);\n  background-color: transparent;\n}\n.foundry_1qqcnua7[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp3y);\n  border-color: var(--foundry_nu8bkp3y);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1qqcnua7:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp40);\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1qqcnua7:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp40);\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}'],
        sourceRoot: ""
      }]);
      const d = u
    },
    96619: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_1d5mo5m0 {\n  outline-width: 2px;\n  outline-style: solid;\n  outline-offset: 4px;\n  outline-color: transparent;\n}\n.foundry_1d5mo5m0:focus-visible {\n  outline-color: var(--foundry_nu8bkp9q);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/theme/dist/client/mixins/focus.css"],
        names: [],
        mappings: "AAAA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,sCAAsC;AACxC",
        sourcesContent: [".foundry_1d5mo5m0 {\n  outline-width: 2px;\n  outline-style: solid;\n  outline-offset: 4px;\n  outline-color: transparent;\n}\n.foundry_1d5mo5m0:focus-visible {\n  outline-color: var(--foundry_nu8bkp9q);\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    53994: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, "@layer foundry_8kowh40;\n@layer foundry_8kowh40 {\n  .foundry_8kowh41 {\n    all: unset;\n  }\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/theme/dist/client/mixins/reset.css"],
        names: [],
        mappings: "AAAA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;AACF",
        sourcesContent: ["@layer foundry_8kowh40;\n@layer foundry_8kowh40 {\n  .foundry_8kowh41 {\n    all: unset;\n  }\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    90412: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_tdsdcd0 {\n  -webkit-font-smoothing: antialiased;\n  font-feature-settings: 'ss01' on, 'salt' on;\n}\n.foundry_tdsdcd1 {\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2y);\n  line-height: var(--foundry_nu8bkp3b);\n  font-family: var(--foundry_nu8bkp2l), var(--foundry_nu8bkp2m);\n  letter-spacing: var(--foundry_nu8bkp2r);\n}\n.foundry_tdsdcd3 {\n  font-size: var(--foundry_nu8bkp30);\n}\n.foundry_tdsdcd4 {\n  font-size: var(--foundry_nu8bkp31);\n}\n.foundry_tdsdcd5 {\n  font-size: var(--foundry_nu8bkp32);\n}\n.foundry_tdsdcd6 {\n  font-size: var(--foundry_nu8bkp33);\n}\n.foundry_tdsdcd7 {\n  font-size: var(--foundry_nu8bkp34);\n}\n.foundry_tdsdcd8 {\n  font-size: var(--foundry_nu8bkp35);\n  font-weight: var(--foundry_nu8bkp2x);\n}\n.foundry_tdsdcd9 {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp39);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdc {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdd {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp36);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcdg {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdh {\n  font-weight: var(--foundry_nu8bkp2y);\n  text-decoration-line: underline;\n}\n.foundry_tdsdcdi {\n  font-weight: var(--foundry_nu8bkp2y);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdj {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp37);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcdm {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdn {\n  font-weight: var(--foundry_nu8bkp2y);\n  text-decoration-line: underline;\n}\n.foundry_tdsdcdo {\n  font-weight: var(--foundry_nu8bkp2y);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdp {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp38);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcds {\n  font-weight: var(--foundry_nu8bkp2y);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/theme/dist/client/mixins/typography.css"],
        names: [],
        mappings: "AAAA;EACE,mCAAmC;EACnC,2CAA2C;AAC7C;AACA;EACE,kBAAkB;EAClB,oCAAoC;EACpC,oCAAoC;EACpC,6DAA6D;EAC7D,uCAAuC;AACzC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;EAClC,oCAAoC;AACtC;AACA;EACE,6DAA6D;EAC7D,oCAAoC;EACpC,kBAAkB;EAClB,oCAAoC;EACpC,kCAAkC;EAClC,uCAAuC;EACvC,yBAAyB;AAC3B;AACA;EACE,oCAAoC;AACtC;AACA;EACE,6DAA6D;EAC7D,oCAAoC;EACpC,kBAAkB;EAClB,oCAAoC;EACpC,kCAAkC;EAClC,uCAAuC;AACzC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;EACpC,+BAA+B;AACjC;AACA;EACE,oCAAoC;EACpC,uCAAuC;EACvC,yBAAyB;AAC3B;AACA;EACE,6DAA6D;EAC7D,oCAAoC;EACpC,kBAAkB;EAClB,oCAAoC;EACpC,kCAAkC;EAClC,uCAAuC;AACzC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;EACpC,+BAA+B;AACjC;AACA;EACE,oCAAoC;EACpC,uCAAuC;EACvC,yBAAyB;AAC3B;AACA;EACE,6DAA6D;EAC7D,oCAAoC;EACpC,kBAAkB;EAClB,oCAAoC;EACpC,kCAAkC;EAClC,uCAAuC;AACzC;AACA;EACE,oCAAoC;AACtC",
        sourcesContent: [".foundry_tdsdcd0 {\n  -webkit-font-smoothing: antialiased;\n  font-feature-settings: 'ss01' on, 'salt' on;\n}\n.foundry_tdsdcd1 {\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2y);\n  line-height: var(--foundry_nu8bkp3b);\n  font-family: var(--foundry_nu8bkp2l), var(--foundry_nu8bkp2m);\n  letter-spacing: var(--foundry_nu8bkp2r);\n}\n.foundry_tdsdcd3 {\n  font-size: var(--foundry_nu8bkp30);\n}\n.foundry_tdsdcd4 {\n  font-size: var(--foundry_nu8bkp31);\n}\n.foundry_tdsdcd5 {\n  font-size: var(--foundry_nu8bkp32);\n}\n.foundry_tdsdcd6 {\n  font-size: var(--foundry_nu8bkp33);\n}\n.foundry_tdsdcd7 {\n  font-size: var(--foundry_nu8bkp34);\n}\n.foundry_tdsdcd8 {\n  font-size: var(--foundry_nu8bkp35);\n  font-weight: var(--foundry_nu8bkp2x);\n}\n.foundry_tdsdcd9 {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp39);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdc {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdd {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp36);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcdg {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdh {\n  font-weight: var(--foundry_nu8bkp2y);\n  text-decoration-line: underline;\n}\n.foundry_tdsdcdi {\n  font-weight: var(--foundry_nu8bkp2y);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdj {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp37);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcdm {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdn {\n  font-weight: var(--foundry_nu8bkp2y);\n  text-decoration-line: underline;\n}\n.foundry_tdsdcdo {\n  font-weight: var(--foundry_nu8bkp2y);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdp {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp38);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcds {\n  font-weight: var(--foundry_nu8bkp2y);\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    95923: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ".foundry_h3lgaa0 {\n  border-radius: var(--foundry_nu8bkp4);\n  background-color: var(--foundry_nu8bkp8i);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8i);\n  box-shadow: 0 0 2px var(--foundry_nu8bkp7z), 0 8px 24px var(--foundry_nu8bkp7z);\n  user-select: none;\n  max-width: var(--foundry_nu8bkp1p);\n  position: relative;\n  z-index: 110;\n}\n.foundry_h3lgaa1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--foundry_nu8bkpi) var(--foundry_nu8bkpk);\n  gap: var(--foundry_nu8bkpj);\n  color: var(--foundry_nu8bkp7x);\n}\n.foundry_h3lgaa2 {\n  fill: var(--foundry_nu8bkp8i);\n  width: var(--foundry_nu8bkp12);\n  height: var(--foundry_nu8bkp11);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/tooltip/dist/tooltip/tooltip.css"],
        names: [],
        mappings: "AAAA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,iBAAiB;EACjB,mBAAmB;EACnB,qCAAqC;EACrC,+EAA+E;EAC/E,iBAAiB;EACjB,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sDAAsD;EACtD,2BAA2B;EAC3B,8BAA8B;AAChC;AACA;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;AACjC",
        sourcesContent: [".foundry_h3lgaa0 {\n  border-radius: var(--foundry_nu8bkp4);\n  background-color: var(--foundry_nu8bkp8i);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8i);\n  box-shadow: 0 0 2px var(--foundry_nu8bkp7z), 0 8px 24px var(--foundry_nu8bkp7z);\n  user-select: none;\n  max-width: var(--foundry_nu8bkp1p);\n  position: relative;\n  z-index: 110;\n}\n.foundry_h3lgaa1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--foundry_nu8bkpi) var(--foundry_nu8bkpk);\n  gap: var(--foundry_nu8bkpj);\n  color: var(--foundry_nu8bkp7x);\n}\n.foundry_h3lgaa2 {\n  fill: var(--foundry_nu8bkp8i);\n  width: var(--foundry_nu8bkp12);\n  height: var(--foundry_nu8bkp11);\n}"],
        sourceRoot: ""
      }]);
      const d = u
    },
    44051: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ':root{--foundry-global-font-line-height-150:150%;--foundry-global-font-line-height-130:130%;--foundry-global-font-letter-spacing-neg-10:-1%;--foundry-global-font-letter-spacing-neg-33:-2.5%;--foundry-global-font-letter-spacing-33:2.5%;--foundry-global-font-letter-spacing-10:1%;--foundry-global-font-letter-spacing-0:0%;--foundry-global-font-weight-700:700;--foundry-global-font-weight-400:400;--foundry-global-font-family-consolas:"Consolas";--foundry-global-font-family-helvetica-now-text:"Helvetica Now Text";--foundry-global-font-family-helvetica-now-display:"Helvetica Now Display";--foundry-global-font-family-arial:"Arial";--foundry-global-border-width-50:4px;--foundry-global-border-width-33:3px;--foundry-global-border-width-25:2px;--foundry-global-border-width-10:1px;--foundry-global-border-width-0:0px;--foundry-global-border-radius-pill:1000px;--foundry-global-border-radius-circle:9999px;--foundry-global-border-radius-400:32px;--foundry-global-border-radius-300:24px;--foundry-global-border-radius-200:16px;--foundry-global-border-radius-150:12px;--foundry-global-border-radius-100:8px;--foundry-global-border-radius-50:4px;--foundry-global-border-radius-25:2px;--foundry-global-border-radius-0:0px;--foundry-alias-font-line-height-body:var(--foundry-global-font-line-height-150);--foundry-alias-font-line-height-heading:var(--foundry-global-font-line-height-130);--foundry-alias-font-weight-bold:var(--foundry-global-font-weight-700);--foundry-alias-font-weight-regular:var(--foundry-global-font-weight-400);--foundry-alias-font-letter-spacing-all-caps-fallback:var(--foundry-global-font-letter-spacing-10);--foundry-alias-font-letter-spacing-all-caps-primary:var(--foundry-global-font-letter-spacing-10);--foundry-alias-font-letter-spacing-body-fallback:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-letter-spacing-body-primary:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-letter-spacing-heading-fallback:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-letter-spacing-heading-primary:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-family-code-fallback:var(--foundry-global-font-family-consolas);--foundry-alias-font-family-code-primary:var(--foundry-global-font-family-consolas);--foundry-alias-font-family-body-fallback:var(--foundry-global-font-family-arial);--foundry-alias-font-family-body-primary:var(--foundry-global-font-family-helvetica-now-text);--foundry-alias-font-family-heading-fallback:var(--foundry-global-font-family-arial);--foundry-alias-font-family-heading-primary:var(--foundry-global-font-family-helvetica-now-display);--__foundry-global-platform-scales-scale-6250:calc(500px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-5000:calc(400px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-4500:calc(360px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-4000:calc(320px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-3500:calc(280px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-3000:calc(240px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-2500:calc(200px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-2200:calc(176px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-2000:calc(160px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1800:calc(144px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1600:calc(128px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1400:calc(112px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1200:calc(96px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1100:calc(88px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1000:calc(80px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-900:calc(72px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-800:calc(64px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-700:calc(56px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-600:calc(48px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-500:calc(40px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-400:calc(32px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-300:calc(24px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-250:calc(20px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-225:calc(18px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-200:calc(16px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-175:calc(14px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-150:calc(12px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-100:calc(8px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-50:calc(4px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-33:calc(3px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-25:calc(2px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-10:calc(1px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-0:calc(0px * var(--__foundry-global-platform-scales-ratio));--foundry-global-font-spacing-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-font-size-1100:var(--__foundry-global-platform-scales-scale-1100);--foundry-global-font-size-1000:var(--__foundry-global-platform-scales-scale-1000);--foundry-global-font-size-900:var(--__foundry-global-platform-scales-scale-900);--foundry-global-font-size-800:var(--__foundry-global-platform-scales-scale-800);--foundry-global-font-size-700:var(--__foundry-global-platform-scales-scale-700);--foundry-global-font-size-600:var(--__foundry-global-platform-scales-scale-600);--foundry-global-font-size-500:var(--__foundry-global-platform-scales-scale-500);--foundry-global-font-size-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-font-size-300:var(--__foundry-global-platform-scales-scale-300);--foundry-global-font-size-250:var(--__foundry-global-platform-scales-scale-250);--foundry-global-font-size-225:var(--__foundry-global-platform-scales-scale-225);--foundry-global-font-size-200:var(--__foundry-global-platform-scales-scale-200);--foundry-global-font-size-175:var(--__foundry-global-platform-scales-scale-175);--foundry-global-font-size-150:var(--__foundry-global-platform-scales-scale-150);--foundry-global-spacing-dimensions-6250:var(--__foundry-global-platform-scales-scale-6250);--foundry-global-spacing-dimensions-5000:var(--__foundry-global-platform-scales-scale-5000);--foundry-global-spacing-dimensions-4500:var(--__foundry-global-platform-scales-scale-4500);--foundry-global-spacing-dimensions-4000:var(--__foundry-global-platform-scales-scale-4000);--foundry-global-spacing-dimensions-3500:var(--__foundry-global-platform-scales-scale-3500);--foundry-global-spacing-dimensions-3000:var(--__foundry-global-platform-scales-scale-3000);--foundry-global-spacing-dimensions-2500:var(--__foundry-global-platform-scales-scale-2500);--foundry-global-spacing-dimensions-2200:var(--__foundry-global-platform-scales-scale-2200);--foundry-global-spacing-dimensions-2000:var(--__foundry-global-platform-scales-scale-2000);--foundry-global-spacing-dimensions-1800:var(--__foundry-global-platform-scales-scale-1800);--foundry-global-spacing-dimensions-1600:var(--__foundry-global-platform-scales-scale-1600);--foundry-global-spacing-dimensions-1400:var(--__foundry-global-platform-scales-scale-1400);--foundry-global-spacing-dimensions-1200:var(--__foundry-global-platform-scales-scale-1200);--foundry-global-spacing-dimensions-1100:var(--__foundry-global-platform-scales-scale-1100);--foundry-global-spacing-dimensions-1000:var(--__foundry-global-platform-scales-scale-1000);--foundry-global-spacing-dimensions-900:var(--__foundry-global-platform-scales-scale-900);--foundry-global-spacing-dimensions-800:var(--__foundry-global-platform-scales-scale-800);--foundry-global-spacing-dimensions-700:var(--__foundry-global-platform-scales-scale-700);--foundry-global-spacing-dimensions-600:var(--__foundry-global-platform-scales-scale-600);--foundry-global-spacing-dimensions-500:var(--__foundry-global-platform-scales-scale-500);--foundry-global-spacing-dimensions-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-spacing-dimensions-300:var(--__foundry-global-platform-scales-scale-300);--foundry-global-spacing-dimensions-250:var(--__foundry-global-platform-scales-scale-250);--foundry-global-spacing-dimensions-200:var(--__foundry-global-platform-scales-scale-200);--foundry-global-spacing-dimensions-175:var(--__foundry-global-platform-scales-scale-175);--foundry-global-spacing-dimensions-150:var(--__foundry-global-platform-scales-scale-150);--foundry-global-spacing-dimensions-100:var(--__foundry-global-platform-scales-scale-100);--foundry-global-spacing-dimensions-50:var(--__foundry-global-platform-scales-scale-50);--foundry-global-spacing-dimensions-25:var(--__foundry-global-platform-scales-scale-25);--foundry-global-spacing-gap-1600:var(--__foundry-global-platform-scales-scale-1600);--foundry-global-spacing-gap-1400:var(--__foundry-global-platform-scales-scale-1400);--foundry-global-spacing-gap-1200:var(--__foundry-global-platform-scales-scale-1200);--foundry-global-spacing-gap-1100:var(--__foundry-global-platform-scales-scale-1100);--foundry-global-spacing-gap-1000:var(--__foundry-global-platform-scales-scale-1000);--foundry-global-spacing-gap-900:var(--__foundry-global-platform-scales-scale-900);--foundry-global-spacing-gap-800:var(--__foundry-global-platform-scales-scale-800);--foundry-global-spacing-gap-700:var(--__foundry-global-platform-scales-scale-700);--foundry-global-spacing-gap-600:var(--__foundry-global-platform-scales-scale-600);--foundry-global-spacing-gap-500:var(--__foundry-global-platform-scales-scale-500);--foundry-global-spacing-gap-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-spacing-gap-300:var(--__foundry-global-platform-scales-scale-300);--foundry-global-spacing-gap-250:var(--__foundry-global-platform-scales-scale-250);--foundry-global-spacing-gap-200:var(--__foundry-global-platform-scales-scale-200);--foundry-global-spacing-gap-175:var(--__foundry-global-platform-scales-scale-175);--foundry-global-spacing-gap-150:var(--__foundry-global-platform-scales-scale-150);--foundry-global-spacing-gap-100:var(--__foundry-global-platform-scales-scale-100);--foundry-global-spacing-gap-50:var(--__foundry-global-platform-scales-scale-50);--foundry-global-spacing-gap-25:var(--__foundry-global-platform-scales-scale-25);--foundry-alias-font-size-body-code:var(--foundry-global-font-size-200);--foundry-alias-font-size-body-all-caps:var(--foundry-global-font-size-150);--foundry-alias-font-size-body-metadata:var(--foundry-global-font-size-150);--foundry-alias-font-size-body-caption:var(--foundry-global-font-size-175);--foundry-alias-font-size-body-paragraph:var(--foundry-global-font-size-200);--foundry-alias-font-size-heading-06:var(--foundry-global-font-size-250);--foundry-alias-font-size-heading-05:var(--foundry-global-font-size-250);--foundry-alias-font-size-heading-04:var(--foundry-global-font-size-300);--foundry-alias-font-size-heading-03:var(--foundry-global-font-size-400);--foundry-alias-font-size-heading-02:var(--foundry-global-font-size-500);--foundry-alias-font-size-heading-01:var(--foundry-global-font-size-700);--foundry-alias-font-spacing-paragraph:var(--foundry-global-font-spacing-400)}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/tokens/dist/css/common.css"],
        names: [],
        mappings: "AAKA,MACE,0CAA2C,CAC3C,0CAA2C,CAC3C,+CAAgD,CAChD,iDAAkD,CAClD,4CAA6C,CAC7C,0CAA2C,CAC3C,yCAA0C,CAC1C,oCAAqC,CACrC,oCAAqC,CACrC,gDAAiD,CACjD,oEAAqE,CACrE,0EAA2E,CAC3E,0CAA2C,CAC3C,oCAAqC,CACrC,oCAAqC,CACrC,oCAAqC,CACrC,oCAAqC,CACrC,mCAAoC,CACpC,0CAA2C,CAC3C,4CAA6C,CAC7C,uCAAwC,CACxC,uCAAwC,CACxC,uCAAwC,CACxC,uCAAwC,CACxC,sCAAuC,CACvC,qCAAsC,CACtC,qCAAsC,CACtC,oCAAqC,CACrC,gFAAiF,CACjF,mFAAoF,CACpF,sEAAuE,CACvE,yEAA0E,CAC1E,kGAAmG,CACnG,iGAAkG,CAClG,kGAAmG,CACnG,iGAAkG,CAClG,qGAAsG,CACtG,oGAAqG,CACrG,oFAAqF,CACrF,mFAAoF,CACpF,iFAAkF,CAClF,6FAA8F,CAC9F,oFAAqF,CACrF,mGAAoG,CACpG,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,wGAAyG,CACzG,wGAAyG,CACzG,wGAAyG,CACzG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,sGAAuG,CACvG,qGAAsG,CACtG,qGAAsG,CACtG,qGAAsG,CACtG,qGAAsG,CACtG,oGAAqG,CACrG,mFAAoF,CACpF,kFAAmF,CACnF,kFAAmF,CACnF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,uFAAwF,CACxF,uFAAwF,CACxF,oFAAqF,CACrF,oFAAqF,CACrF,oFAAqF,CACrF,oFAAqF,CACrF,oFAAqF,CACrF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,gFAAiF,CACjF,gFAAiF,CACjF,uEAAwE,CACxE,2EAA4E,CAC5E,2EAA4E,CAC5E,0EAA2E,CAC3E,4EAA6E,CAC7E,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,6EACF",
        sourcesContent: ['/**\n * Do not edit directly\n * Generated on Thu, 08 Aug 2024 09:34:15 GMT\n */\n\n:root {\n  --foundry-global-font-line-height-150: 150%;\n  --foundry-global-font-line-height-130: 130%;\n  --foundry-global-font-letter-spacing-neg-10: -1%;\n  --foundry-global-font-letter-spacing-neg-33: -2.5%;\n  --foundry-global-font-letter-spacing-33: 2.5%;\n  --foundry-global-font-letter-spacing-10: 1%;\n  --foundry-global-font-letter-spacing-0: 0%;\n  --foundry-global-font-weight-700: 700;\n  --foundry-global-font-weight-400: 400;\n  --foundry-global-font-family-consolas: "Consolas";\n  --foundry-global-font-family-helvetica-now-text: "Helvetica Now Text";\n  --foundry-global-font-family-helvetica-now-display: "Helvetica Now Display";\n  --foundry-global-font-family-arial: "Arial";\n  --foundry-global-border-width-50: 4px;\n  --foundry-global-border-width-33: 3px;\n  --foundry-global-border-width-25: 2px;\n  --foundry-global-border-width-10: 1px;\n  --foundry-global-border-width-0: 0px;\n  --foundry-global-border-radius-pill: 1000px;\n  --foundry-global-border-radius-circle: 9999px;\n  --foundry-global-border-radius-400: 32px;\n  --foundry-global-border-radius-300: 24px;\n  --foundry-global-border-radius-200: 16px;\n  --foundry-global-border-radius-150: 12px;\n  --foundry-global-border-radius-100: 8px;\n  --foundry-global-border-radius-50: 4px;\n  --foundry-global-border-radius-25: 2px;\n  --foundry-global-border-radius-0: 0px;\n  --foundry-alias-font-line-height-body: var(--foundry-global-font-line-height-150);\n  --foundry-alias-font-line-height-heading: var(--foundry-global-font-line-height-130);\n  --foundry-alias-font-weight-bold: var(--foundry-global-font-weight-700);\n  --foundry-alias-font-weight-regular: var(--foundry-global-font-weight-400);\n  --foundry-alias-font-letter-spacing-all-caps-fallback: var(--foundry-global-font-letter-spacing-10);\n  --foundry-alias-font-letter-spacing-all-caps-primary: var(--foundry-global-font-letter-spacing-10);\n  --foundry-alias-font-letter-spacing-body-fallback: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-letter-spacing-body-primary: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-letter-spacing-heading-fallback: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-letter-spacing-heading-primary: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-family-code-fallback: var(--foundry-global-font-family-consolas);\n  --foundry-alias-font-family-code-primary: var(--foundry-global-font-family-consolas);\n  --foundry-alias-font-family-body-fallback: var(--foundry-global-font-family-arial);\n  --foundry-alias-font-family-body-primary: var(--foundry-global-font-family-helvetica-now-text);\n  --foundry-alias-font-family-heading-fallback: var(--foundry-global-font-family-arial);\n  --foundry-alias-font-family-heading-primary: var(--foundry-global-font-family-helvetica-now-display);\n  --__foundry-global-platform-scales-scale-6250: calc(500px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-5000: calc(400px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-4500: calc(360px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-4000: calc(320px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-3500: calc(280px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-3000: calc(240px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-2500: calc(200px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-2200: calc(176px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-2000: calc(160px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1800: calc(144px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1600: calc(128px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1400: calc(112px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1200: calc(96px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1100: calc(88px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1000: calc(80px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-900: calc(72px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-800: calc(64px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-700: calc(56px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-600: calc(48px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-500: calc(40px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-400: calc(32px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-300: calc(24px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-250: calc(20px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-225: calc(18px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-200: calc(16px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-175: calc(14px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-150: calc(12px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-100: calc(8px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-50: calc(4px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-33: calc(3px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-25: calc(2px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-10: calc(1px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-0: calc(0px * var(--__foundry-global-platform-scales-ratio));\n  --foundry-global-font-spacing-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-font-size-1100: var(--__foundry-global-platform-scales-scale-1100);\n  --foundry-global-font-size-1000: var(--__foundry-global-platform-scales-scale-1000);\n  --foundry-global-font-size-900: var(--__foundry-global-platform-scales-scale-900);\n  --foundry-global-font-size-800: var(--__foundry-global-platform-scales-scale-800);\n  --foundry-global-font-size-700: var(--__foundry-global-platform-scales-scale-700);\n  --foundry-global-font-size-600: var(--__foundry-global-platform-scales-scale-600);\n  --foundry-global-font-size-500: var(--__foundry-global-platform-scales-scale-500);\n  --foundry-global-font-size-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-font-size-300: var(--__foundry-global-platform-scales-scale-300);\n  --foundry-global-font-size-250: var(--__foundry-global-platform-scales-scale-250);\n  --foundry-global-font-size-225: var(--__foundry-global-platform-scales-scale-225);\n  --foundry-global-font-size-200: var(--__foundry-global-platform-scales-scale-200);\n  --foundry-global-font-size-175: var(--__foundry-global-platform-scales-scale-175);\n  --foundry-global-font-size-150: var(--__foundry-global-platform-scales-scale-150);\n  --foundry-global-spacing-dimensions-6250: var(--__foundry-global-platform-scales-scale-6250);\n  --foundry-global-spacing-dimensions-5000: var(--__foundry-global-platform-scales-scale-5000);\n  --foundry-global-spacing-dimensions-4500: var(--__foundry-global-platform-scales-scale-4500);\n  --foundry-global-spacing-dimensions-4000: var(--__foundry-global-platform-scales-scale-4000);\n  --foundry-global-spacing-dimensions-3500: var(--__foundry-global-platform-scales-scale-3500);\n  --foundry-global-spacing-dimensions-3000: var(--__foundry-global-platform-scales-scale-3000);\n  --foundry-global-spacing-dimensions-2500: var(--__foundry-global-platform-scales-scale-2500);\n  --foundry-global-spacing-dimensions-2200: var(--__foundry-global-platform-scales-scale-2200);\n  --foundry-global-spacing-dimensions-2000: var(--__foundry-global-platform-scales-scale-2000);\n  --foundry-global-spacing-dimensions-1800: var(--__foundry-global-platform-scales-scale-1800);\n  --foundry-global-spacing-dimensions-1600: var(--__foundry-global-platform-scales-scale-1600);\n  --foundry-global-spacing-dimensions-1400: var(--__foundry-global-platform-scales-scale-1400);\n  --foundry-global-spacing-dimensions-1200: var(--__foundry-global-platform-scales-scale-1200);\n  --foundry-global-spacing-dimensions-1100: var(--__foundry-global-platform-scales-scale-1100);\n  --foundry-global-spacing-dimensions-1000: var(--__foundry-global-platform-scales-scale-1000);\n  --foundry-global-spacing-dimensions-900: var(--__foundry-global-platform-scales-scale-900);\n  --foundry-global-spacing-dimensions-800: var(--__foundry-global-platform-scales-scale-800);\n  --foundry-global-spacing-dimensions-700: var(--__foundry-global-platform-scales-scale-700);\n  --foundry-global-spacing-dimensions-600: var(--__foundry-global-platform-scales-scale-600);\n  --foundry-global-spacing-dimensions-500: var(--__foundry-global-platform-scales-scale-500);\n  --foundry-global-spacing-dimensions-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-spacing-dimensions-300: var(--__foundry-global-platform-scales-scale-300);\n  --foundry-global-spacing-dimensions-250: var(--__foundry-global-platform-scales-scale-250);\n  --foundry-global-spacing-dimensions-200: var(--__foundry-global-platform-scales-scale-200);\n  --foundry-global-spacing-dimensions-175: var(--__foundry-global-platform-scales-scale-175);\n  --foundry-global-spacing-dimensions-150: var(--__foundry-global-platform-scales-scale-150);\n  --foundry-global-spacing-dimensions-100: var(--__foundry-global-platform-scales-scale-100);\n  --foundry-global-spacing-dimensions-50: var(--__foundry-global-platform-scales-scale-50);\n  --foundry-global-spacing-dimensions-25: var(--__foundry-global-platform-scales-scale-25);\n  --foundry-global-spacing-gap-1600: var(--__foundry-global-platform-scales-scale-1600);\n  --foundry-global-spacing-gap-1400: var(--__foundry-global-platform-scales-scale-1400);\n  --foundry-global-spacing-gap-1200: var(--__foundry-global-platform-scales-scale-1200);\n  --foundry-global-spacing-gap-1100: var(--__foundry-global-platform-scales-scale-1100);\n  --foundry-global-spacing-gap-1000: var(--__foundry-global-platform-scales-scale-1000);\n  --foundry-global-spacing-gap-900: var(--__foundry-global-platform-scales-scale-900);\n  --foundry-global-spacing-gap-800: var(--__foundry-global-platform-scales-scale-800);\n  --foundry-global-spacing-gap-700: var(--__foundry-global-platform-scales-scale-700);\n  --foundry-global-spacing-gap-600: var(--__foundry-global-platform-scales-scale-600);\n  --foundry-global-spacing-gap-500: var(--__foundry-global-platform-scales-scale-500);\n  --foundry-global-spacing-gap-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-spacing-gap-300: var(--__foundry-global-platform-scales-scale-300);\n  --foundry-global-spacing-gap-250: var(--__foundry-global-platform-scales-scale-250);\n  --foundry-global-spacing-gap-200: var(--__foundry-global-platform-scales-scale-200);\n  --foundry-global-spacing-gap-175: var(--__foundry-global-platform-scales-scale-175);\n  --foundry-global-spacing-gap-150: var(--__foundry-global-platform-scales-scale-150);\n  --foundry-global-spacing-gap-100: var(--__foundry-global-platform-scales-scale-100);\n  --foundry-global-spacing-gap-50: var(--__foundry-global-platform-scales-scale-50);\n  --foundry-global-spacing-gap-25: var(--__foundry-global-platform-scales-scale-25);\n  --foundry-alias-font-size-body-code: var(--foundry-global-font-size-200);\n  --foundry-alias-font-size-body-all-caps: var(--foundry-global-font-size-150);\n  --foundry-alias-font-size-body-metadata: var(--foundry-global-font-size-150);\n  --foundry-alias-font-size-body-caption: var(--foundry-global-font-size-175);\n  --foundry-alias-font-size-body-paragraph: var(--foundry-global-font-size-200);\n  --foundry-alias-font-size-heading-06: var(--foundry-global-font-size-250);\n  --foundry-alias-font-size-heading-05: var(--foundry-global-font-size-250);\n  --foundry-alias-font-size-heading-04: var(--foundry-global-font-size-300);\n  --foundry-alias-font-size-heading-03: var(--foundry-global-font-size-400);\n  --foundry-alias-font-size-heading-02: var(--foundry-global-font-size-500);\n  --foundry-alias-font-size-heading-01: var(--foundry-global-font-size-700);\n  --foundry-alias-font-spacing-paragraph: var(--foundry-global-font-spacing-400);\n}\n'],
        sourceRoot: ""
      }]), u.locals = {};
      const d = u
    },
    22758: (n, e, r) => {
      r.d(e, {
        A: () => d
      });
      var o = r(42587),
        t = r.n(o),
        a = r(15081),
        u = r.n(a)()(t());
      u.push([n.id, ":root{--__foundry-global-platform-scales-ratio:1}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/tokens/dist/css/mobile.css"],
        names: [],
        mappings: "AAKA,MACE,0CACF",
        sourcesContent: ["/**\n * Do not edit directly\n * Generated on Thu, 08 Aug 2024 09:34:15 GMT\n */\n\n:root {\n  --__foundry-global-platform-scales-ratio: 1;\n}\n"],
        sourceRoot: ""
      }]), u.locals = {};
      const d = u
    },
    58858: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/8a7bed18c779bf815ff56c24ab6207e5.woff"
    },
    78237: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/2182248632b4e44ebf3764bc8ac7aba2.woff"
    },
    25591: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/63cfc284c204bd1597bc68464e18042b.woff"
    },
    14928: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/064abecda5d2f269d95fa7fd0f340e87.woff"
    },
    78118: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ddff8a927395b3bbeb442818124b332e.woff"
    },
    62269: (n, e, r) => {
      r.d(e, {
        ms: () => uy,
        c$: () => dy
      });
      var o = {};
      r.r(o), r.d(o, {
        CheckLG: () => v_,
        CheckMD: () => C_,
        CheckXL: () => k_,
        DashLG: () => g_,
        DashMD: () => B_,
        DashXL: () => m_
      });
      var t = {};
      r.r(t), r.d(t, {
        DotLG: () => gC,
        DotMD: () => BC,
        DotXL: () => mC
      });
      var a = r(73855),
        u = r(4255),
        d = r(62229),
        i = r(42406),
        s = r(75199);
      const l = ({
        enabled: n = !0,
        ...e
      }) => {
        const r = n ? s.VisuallyHidden : d.Fragment;
        return (0, a.jsx)(r, {
          ...e
        })
      };
      var f = r(53178),
        c = r.n(f),
        A = r(94566),
        p = r.n(A),
        y = r(31610),
        b = r.n(y),
        _ = r(82510),
        C = r.n(_),
        v = r(19602),
        k = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function B(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function g(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function m(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? g(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = B(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function h(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      k.setAttributes = b(), k.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, k.domAPI = p(), k.insertStyleElement = C(), c()(v.A, k), v.A && v.A.locals && v.A.locals;
      var E, w, x = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        j = (E = {
          defaultClassName: "foundry_vsn8np0",
          variantClassNames: {
            level: {
              1: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd3",
              2: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd4",
              3: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd5",
              4: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd6",
              5: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7",
              6: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, w = n => {
          var e = E.defaultClassName,
            r = m(m({}, E.defaultVariants), n);
          for (var o in r) {
            var t, a = null !== (t = r[o]) && void 0 !== t ? t : E.defaultVariants[o];
            if (null != a) {
              var u = a;
              "boolean" == typeof u && (u = !0 === u ? "true" : "false");
              var d = E.variantClassNames[o][u];
              d && (e += " " + d)
            }
          }
          for (var [i, s] of E.compoundVariants) x(i, r, E.defaultVariants) && (e += " " + s);
          return e
        }, w.variants = () => Object.keys(E.variantClassNames), w.classNames = {
          get base() {
            return E.defaultClassName.split(" ")[0]
          },
          get variants() {
            return h(E.variantClassNames, (n => h(n, (n => n.split(" ")[0]))))
          }
        }, w);
      const S = (0, d.forwardRef)((({
        asChild: n,
        level: e,
        testId: r,
        ...o
      }, t) => {
        const d = n ? i.Slot : `h${e}`,
          s = (0, u.v6)(o, {
            className: j({
              level: e
            })
          });
        return (0, a.jsx)(d, {
          ref: t,
          "data-testid": r,
          ...s
        })
      }));
      var O = r(22338),
        P = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function q(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function z(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function D(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? z(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = q(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function L(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      P.setAttributes = b(), P.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, P.domAPI = p(), P.insertStyleElement = C(), c()(O.A, P), O.A && O.A.locals && O.A.locals;
      var T = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        N = (n => {
          var e = e => {
            var r = n.defaultClassName,
              o = D(D({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) T(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return L(n.variantClassNames, (n => L(n, (n => n.split(" ")[0]))))
            }
          }, e
        })({
          defaultClassName: "foundry_kwp8su0",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
              bold: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg",
              hyperlink: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdh",
              allCaps: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const M = (0, d.forwardRef)((({
        asChild: n,
        testId: e,
        appearance: r = "default",
        ...o
      }, t) => {
        const d = n ? i.Slot : "p",
          s = (0, u.v6)(o, {
            className: N({
              appearance: r
            })
          });
        return (0, a.jsx)(d, {
          ref: t,
          "data-testid": e,
          ...s
        })
      }));
      var F = r(22718),
        R = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function I(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function G(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function V(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? G(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = I(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function K(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      R.setAttributes = b(), R.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, R.domAPI = p(), R.insertStyleElement = C(), c()(F.A, R), F.A && F.A.locals && F.A.locals;
      var H = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        W = (n => {
          var e = e => {
            var r = n.defaultClassName,
              o = V(V({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) H(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return K(n.variantClassNames, (n => K(n, (n => n.split(" ")[0]))))
            }
          }, e
        })({
          defaultClassName: "foundry_tv8xa40",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              bold: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm",
              hyperlink: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn",
              allCaps: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdo"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const $ = (0, d.forwardRef)((({
        asChild: n,
        testId: e,
        appearance: r = "default",
        ...o
      }, t) => {
        const d = n ? i.Slot : "span",
          s = (0, u.v6)(o, {
            className: W({
              appearance: r
            })
          });
        return (0, a.jsx)(d, {
          ref: t,
          "data-testid": e,
          ...s
        })
      }));
      var U = r(44533),
        Y = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function X(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function Z(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function Q(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? Z(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = X(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function J(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      Y.setAttributes = b(), Y.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, Y.domAPI = p(), Y.insertStyleElement = C(), c()(U.A, Y), U.A && U.A.locals && U.A.locals;
      var nn = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        en = (n => {
          var e = e => {
            var r = n.defaultClassName,
              o = Q(Q({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) nn(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return J(n.variantClassNames, (n => J(n, (n => n.split(" ")[0]))))
            }
          }, e
        })({
          defaultClassName: "foundry_13plll30",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
              bold: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcds"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const rn = (0, d.forwardRef)((({
        asChild: n,
        testId: e,
        appearance: r = "default",
        ...o
      }, t) => {
        const d = n ? i.Slot : "span",
          s = (0, u.v6)(o, {
            className: en({
              appearance: r
            })
          });
        return (0, a.jsx)(d, {
          ref: t,
          "data-testid": e,
          ...s
        })
      }));
      var on = r(13786),
        tn = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function an(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function un(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function dn(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? un(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = an(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : un(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function sn(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      tn.setAttributes = b(), tn.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, tn.domAPI = p(), tn.insertStyleElement = C(), c()(on.A, tn), on.A && on.A.locals && on.A.locals;
      var ln = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        fn = (n => {
          var e = e => {
            var r = n.defaultClassName,
              o = dn(dn({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) ln(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sn(n.variantClassNames, (n => sn(n, (n => n.split(" ")[0]))))
            }
          }, e
        })({
          defaultClassName: "foundry_xnp8ik0",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcd9 foundry_tdsdcd0 foundry_tdsdcdb",
              bold: "foundry_tdsdcd9 foundry_tdsdcd0 foundry_tdsdcdc"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, d.forwardRef)((({
        asChild: n,
        testId: e,
        appearance: r = "default",
        ...o
      }, t) => {
        const d = n ? i.Slot : "p",
          s = (0, u.v6)(o, {
            className: fn({
              appearance: r
            })
          });
        return (0, a.jsx)(d, {
          ref: t,
          "data-testid": e,
          ...s
        })
      }));
      var cn = r(95075),
        An = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function pn(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function yn(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function bn(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? yn(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = pn(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : yn(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function _n(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      An.setAttributes = b(), An.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, An.domAPI = p(), An.insertStyleElement = C(), c()(cn.A, An), cn.A && cn.A.locals && cn.A.locals;
      var Cn = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        vn = (n => {
          var e = e => {
            var r = n.defaultClassName,
              o = bn(bn({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) Cn(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _n(n.variantClassNames, (n => _n(n, (n => n.split(" ")[0]))))
            }
          }, e
        })({
          defaultClassName: "foundry_12nwidl0",
          variantClassNames: {
            semantic: {
              abbr: "foundry_12nwidl1",
              cite: "foundry_12nwidl2",
              emphasis: "foundry_12nwidl3",
              idiomatic: "foundry_12nwidl4",
              mark: "foundry_12nwidl5",
              "strike-through": "foundry_12nwidl6",
              strong: "foundry_12nwidl7",
              sub: "foundry_12nwidl8",
              sup: "foundry_12nwidl9",
              underline: "foundry_12nwidla",
              default: "foundry_12nwidlb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const kn = {
        abbr: "abbr",
        cite: "cite",
        emphasis: "em",
        idiomatic: "i",
        mark: "mark",
        "strike-through": "s",
        strong: "strong",
        sub: "sub",
        sup: "sup",
        underline: "u",
        default: "span"
      };
      (0, d.forwardRef)((({
        asChild: n,
        testId: e,
        semantic: r = "default",
        ...o
      }, t) => {
        const d = n ? i.Slot : kn[r] || "span",
          s = (0, u.v6)(o, {
            className: vn({
              semantic: r
            })
          });
        return (0, a.jsx)(d, {
          ref: t,
          "data-testid": e,
          ...s
        })
      }));
      var Bn = r(81409),
        gn = r.t(Bn, 2);
      const mn = new Set(["id"]),
        hn = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        En = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        wn = /^(data-.*)$/;
      const xn = "undefined" != typeof document ? d.useLayoutEffect : () => {};

      function jn(n) {
        const e = (0, d.useRef)(null);
        return xn((() => {
          e.current = n
        }), [n]), (0, d.useCallback)(((...n) => {
          const r = e.current;
          return null == r ? void 0 : r(...n)
        }), [])
      }
      const Sn = n => {
          var e;
          return null !== (e = null == n ? void 0 : n.ownerDocument) && void 0 !== e ? e : document
        },
        On = n => n && "window" in n && n.window === n ? n : Sn(n).defaultView || window;

      function Pn(...n) {
        return (...e) => {
          for (let r of n) "function" == typeof r && r(...e)
        }
      }
      const qn = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        zn = d.createContext(qn),
        Dn = d.createContext(!1);
      let Ln = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Tn = new WeakMap;
      const Nn = "function" == typeof d.useId ? function(n) {
        let e = d.useId(),
          [r] = (0, d.useState)("function" == typeof d.useSyncExternalStore ? d.useSyncExternalStore(Rn, Mn, Fn) : (0, d.useContext)(Dn));
        return n || `${r?"react-aria":`react-aria${qn.prefix}`}-${e}`
      } : function(n) {
        let e = (0, d.useContext)(zn);
        e !== qn || Ln || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let r = function(n = !1) {
            let e = (0, d.useContext)(zn),
              r = (0, d.useRef)(null);
            if (null === r.current && !n) {
              var o, t;
              let n = null === (t = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === t || null === (o = t.ReactCurrentOwner) || void 0 === o ? void 0 : o.current;
              if (n) {
                let r = Tn.get(n);
                null == r ? Tn.set(n, {
                  id: e.current,
                  state: n.memoizedState
                }) : n.memoizedState !== r.state && (e.current = r.id, Tn.delete(n))
              }
              r.current = ++e.current
            }
            return r.current
          }(!!n),
          o = `react-aria${e.prefix}`;
        return n || `${o}-${r}`
      };

      function Mn() {
        return !1
      }

      function Fn() {
        return !0
      }

      function Rn(n) {
        return () => {}
      }
      let In = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Gn = new Map;

      function Vn(n) {
        let [e, r] = (0, d.useState)(n), o = (0, d.useRef)(null), t = Nn(e), a = (0, d.useCallback)((n => {
          o.current = n
        }), []);
        return In && Gn.set(t, a), xn((() => {
          let n = t;
          return () => {
            Gn.delete(n)
          }
        }), [t]), (0, d.useEffect)((() => {
          let n = o.current;
          n && (o.current = null, r(n))
        })), t
      }

      function Kn(n, e) {
        if (n === e) return n;
        let r = Gn.get(n);
        if (r) return r(e), e;
        let o = Gn.get(e);
        return o ? (o(n), n) : e
      }

      function Hn(n = []) {
        let e = Vn(),
          [r, o] = function(n) {
            let [e, r] = (0, d.useState)(n), o = (0, d.useRef)(null), t = jn((() => {
              if (!o.current) return;
              let n = o.current.next();
              n.done ? o.current = null : e === n.value ? t() : r(n.value)
            }));
            xn((() => {
              o.current && t()
            }));
            let a = jn((n => {
              o.current = n(e), t()
            }));
            return [e, a]
          }(e),
          t = (0, d.useCallback)((() => {
            o((function*() {
              yield e, yield document.getElementById(e) ? e : void 0
            }))
          }), [e, o]);
        return xn(t, [e, t, ...n]), r
      }
      var Wn = r(5060);

      function $n(...n) {
        let e = {
          ...n[0]
        };
        for (let r = 1; r < n.length; r++) {
          let o = n[r];
          for (let n in o) {
            let r = e[n],
              t = o[n];
            "function" == typeof r && "function" == typeof t && "o" === n[0] && "n" === n[1] && n.charCodeAt(2) >= 65 && n.charCodeAt(2) <= 90 ? e[n] = Pn(r, t) : "className" !== n && "UNSAFE_className" !== n || "string" != typeof r || "string" != typeof t ? "id" === n && r && t ? e.id = Kn(r, t) : e[n] = void 0 !== t ? t : r : e[n] = (0, Wn.A)(r, t)
          }
        }
        return e
      }

      function Un(n, e) {
        let {
          id: r,
          "aria-label": o,
          "aria-labelledby": t
        } = n;
        if (r = Vn(r), t && o) {
          let n = new Set([r, ...t.trim().split(/\s+/)]);
          t = [...n].join(" ")
        } else t && (t = t.trim().split(/\s+/).join(" "));
        return o || t || !e || (o = e), {
          id: r,
          "aria-label": o,
          "aria-labelledby": t
        }
      }

      function Yn(n) {
        let {
          description: e,
          errorMessage: r,
          isInvalid: o,
          validationState: t
        } = n, {
          labelProps: a,
          fieldProps: u
        } = function(n) {
          let {
            id: e,
            label: r,
            "aria-labelledby": o,
            "aria-label": t,
            labelElementType: a = "label"
          } = n;
          e = Vn(e);
          let u = Vn(),
            d = {};
          return r ? (o = o ? `${u} ${o}` : u, d = {
            id: u,
            htmlFor: "label" === a ? e : void 0
          }) : o || t || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: d,
            fieldProps: Un({
              id: e,
              "aria-label": t,
              "aria-labelledby": o
            })
          }
        }(n), d = Hn([Boolean(e), Boolean(r), o, t]), i = Hn([Boolean(e), Boolean(r), o, t]);
        return u = $n(u, {
          "aria-describedby": [d, i, n["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: a,
          fieldProps: u,
          descriptionProps: {
            id: d
          },
          errorMessageProps: {
            id: i
          }
        }
      }
      let Xn = new Map,
        Zn = new Set;

      function Qn() {
        if ("undefined" == typeof window) return;

        function n(n) {
          return "propertyName" in n
        }
        let e = r => {
          if (!n(r) || !r.target) return;
          let o = Xn.get(r.target);
          if (o && (o.delete(r.propertyName), 0 === o.size && (r.target.removeEventListener("transitioncancel", e), Xn.delete(r.target)), 0 === Xn.size)) {
            for (let n of Zn) n();
            Zn.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!n(r) || !r.target) return;
          let o = Xn.get(r.target);
          o || (o = new Set, Xn.set(r.target, o), r.target.addEventListener("transitioncancel", e, {
            once: !0
          })), o.add(r.propertyName)
        })), document.body.addEventListener("transitionend", e)
      }

      function Jn(n) {
        if (function() {
            if (null == ne) {
              ne = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return ne = !0, !0
                  }
                })
              } catch (n) {}
            }
            return ne
          }()) n.focus({
          preventScroll: !0
        });
        else {
          let e = function(n) {
            let e = n.parentNode,
              r = [],
              o = document.scrollingElement || document.documentElement;
            for (; e instanceof HTMLElement && e !== o;)(e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && r.push({
              element: e,
              scrollTop: e.scrollTop,
              scrollLeft: e.scrollLeft
            }), e = e.parentNode;
            return o instanceof HTMLElement && r.push({
              element: o,
              scrollTop: o.scrollTop,
              scrollLeft: o.scrollLeft
            }), r
          }(n);
          n.focus(),
            function(n) {
              for (let {
                  element: e,
                  scrollTop: r,
                  scrollLeft: o
                }
                of n) e.scrollTop = r, e.scrollLeft = o
            }(e)
        }
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Qn() : document.addEventListener("DOMContentLoaded", Qn));
      let ne = null;

      function ee() {
        return n = /^Mac/i, "undefined" != typeof window && null != window.navigator && n.test((null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.platform) || window.navigator.platform);
        var n, e
      }

      function re(n) {
        return !(0 !== n.mozInputSource || !n.isTrusted) || (e = /Android/i, "undefined" != typeof window && null != window.navigator && ((null === (r = window.navigator.userAgentData) || void 0 === r ? void 0 : r.brands.some((n => e.test(n.brand)))) || e.test(window.navigator.userAgent)) && n.pointerType ? "click" === n.type && 1 === n.buttons : 0 === n.detail && !n.pointerType);
        var e, r
      }
      let oe = null,
        te = new Set,
        ae = new Map,
        ue = !1,
        de = !1;

      function ie(n, e) {
        for (let r of te) r(n, e)
      }

      function se(n) {
        ue = !0,
          function(n) {
            return !(n.metaKey || !ee() && n.altKey || n.ctrlKey || "Control" === n.key || "Shift" === n.key || "Meta" === n.key)
          }(n) && (oe = "keyboard", ie("keyboard", n))
      }

      function le(n) {
        oe = "pointer", "mousedown" !== n.type && "pointerdown" !== n.type || (ue = !0, ie("pointer", n))
      }

      function fe(n) {
        re(n) && (ue = !0, oe = "virtual")
      }

      function ce(n) {
        n.target !== window && n.target !== document && (ue || de || (oe = "virtual", ie("virtual", n)), ue = !1, de = !1)
      }

      function Ae() {
        ue = !1, de = !0
      }

      function pe(n) {
        if ("undefined" == typeof window || ae.get(On(n))) return;
        const e = On(n),
          r = Sn(n);
        let o = e.HTMLElement.prototype.focus;
        e.HTMLElement.prototype.focus = function() {
          ue = !0, o.apply(this, arguments)
        }, r.addEventListener("keydown", se, !0), r.addEventListener("keyup", se, !0), r.addEventListener("click", fe, !0), e.addEventListener("focus", ce, !0), e.addEventListener("blur", Ae, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", le, !0), r.addEventListener("pointermove", le, !0), r.addEventListener("pointerup", le, !0)) : (r.addEventListener("mousedown", le, !0), r.addEventListener("mousemove", le, !0), r.addEventListener("mouseup", le, !0)), e.addEventListener("beforeunload", (() => {
          ye(n)
        }), {
          once: !0
        }), ae.set(e, {
          focus: o
        })
      }
      const ye = (n, e) => {
        const r = On(n),
          o = Sn(n);
        e && o.removeEventListener("DOMContentLoaded", e), ae.has(r) && (r.HTMLElement.prototype.focus = ae.get(r).focus, o.removeEventListener("keydown", se, !0), o.removeEventListener("keyup", se, !0), o.removeEventListener("click", fe, !0), r.removeEventListener("focus", ce, !0), r.removeEventListener("blur", Ae, !1), "undefined" != typeof PointerEvent ? (o.removeEventListener("pointerdown", le, !0), o.removeEventListener("pointermove", le, !0), o.removeEventListener("pointerup", le, !0)) : (o.removeEventListener("mousedown", le, !0), o.removeEventListener("mousemove", le, !0), o.removeEventListener("mouseup", le, !0)), ae.delete(r))
      };
      "undefined" != typeof document && function(n) {
        const e = Sn(n);
        let r;
        "loading" !== e.readyState ? pe(n) : (r = () => {
          pe(n)
        }, e.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class be {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(n, e) {
          this.nativeEvent = e, this.target = e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget, this.bubbles = e.bubbles, this.cancelable = e.cancelable, this.defaultPrevented = e.defaultPrevented, this.eventPhase = e.eventPhase, this.isTrusted = e.isTrusted, this.timeStamp = e.timeStamp, this.type = n
        }
      }

      function _e(n) {
        let {
          isDisabled: e,
          onFocus: r,
          onBlur: o,
          onFocusChange: t
        } = n;
        const a = (0, d.useCallback)((n => {
            if (n.target === n.currentTarget) return o && o(n), t && t(!1), !0
          }), [o, t]),
          u = function(n) {
            let e = (0, d.useRef)({
              isFocused: !1,
              observer: null
            });
            xn((() => {
              const n = e.current;
              return () => {
                n.observer && (n.observer.disconnect(), n.observer = null)
              }
            }), []);
            let r = jn((e => {
              null == n || n(e)
            }));
            return (0, d.useCallback)((n => {
              if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
                e.current.isFocused = !0;
                let o = n.target,
                  t = n => {
                    e.current.isFocused = !1, o.disabled && r(new be("blur", n)), e.current.observer && (e.current.observer.disconnect(), e.current.observer = null)
                  };
                o.addEventListener("focusout", t, {
                  once: !0
                }), e.current.observer = new MutationObserver((() => {
                  if (e.current.isFocused && o.disabled) {
                    var n;
                    null === (n = e.current.observer) || void 0 === n || n.disconnect();
                    let r = o === document.activeElement ? null : document.activeElement;
                    o.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: r
                    })), o.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: r
                    }))
                  }
                })), e.current.observer.observe(o, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [r])
          }(a),
          i = (0, d.useCallback)((n => {
            const e = Sn(n.target);
            n.target === n.currentTarget && e.activeElement === n.target && (r && r(n), t && t(!0), u(n))
          }), [t, r, u]);
        return {
          focusProps: {
            onFocus: !e && (r || t || o) ? i : void 0,
            onBlur: e || !o && !t ? void 0 : a
          }
        }
      }

      function Ce(n) {
        if (!n) return;
        let e = !0;
        return r => {
          let o = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              e = !1
            }
          };
          n(o), e && r.stopPropagation()
        }
      }
      let ve = d.createContext(null);

      function ke(n) {
        let e = (0, d.useContext)(ve) || {};
        ! function(n, e) {
          xn((() => {
            if (n && n.ref && e) return n.ref.current = e.current, () => {
              n.ref && (n.ref.current = null)
            }
          }))
        }(e, n);
        let {
          ref: r,
          ...o
        } = e;
        return o
      }

      function Be(n, e) {
        let {
          focusProps: r
        } = _e(n), {
          keyboardProps: o
        } = function(n) {
          return {
            keyboardProps: n.isDisabled ? {} : {
              onKeyDown: Ce(n.onKeyDown),
              onKeyUp: Ce(n.onKeyUp)
            }
          }
        }(n), t = $n(r, o), a = ke(e), u = n.isDisabled ? {} : a, i = (0, d.useRef)(n.autoFocus);
        return (0, d.useEffect)((() => {
          i.current && e.current && function(n) {
            const e = Sn(n);
            if ("virtual" === oe) {
              let o = e.activeElement;
              r = () => {
                e.activeElement === o && n.isConnected && Jn(n)
              }, requestAnimationFrame((() => {
                0 === Xn.size ? r() : Zn.add(r)
              }))
            } else Jn(n);
            var r
          }(e.current), i.current = !1
        }), [e]), {
          focusableProps: $n({
            ...t,
            tabIndex: n.excludeFromTabOrder && !n.isDisabled ? -1 : void 0
          }, u)
        }
      }

      function ge(n) {
        let e = n.validity;
        return {
          badInput: e.badInput,
          customError: e.customError,
          patternMismatch: e.patternMismatch,
          rangeOverflow: e.rangeOverflow,
          rangeUnderflow: e.rangeUnderflow,
          stepMismatch: e.stepMismatch,
          tooLong: e.tooLong,
          tooShort: e.tooShort,
          typeMismatch: e.typeMismatch,
          valueMissing: e.valueMissing,
          valid: e.valid
        }
      }
      const me = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        he = {
          ...me,
          customError: !0,
          valid: !1
        },
        Ee = {
          isInvalid: !1,
          validationDetails: me,
          validationErrors: []
        },
        we = (0, d.createContext)({}),
        xe = "__formValidationState" + Date.now();

      function je(n) {
        return n ? Array.isArray(n) ? n : [n] : []
      }

      function Se(n) {
        return n.length ? {
          isInvalid: !0,
          validationErrors: n,
          validationDetails: he
        } : null
      }

      function Oe(n, e) {
        return n === e || n && e && n.isInvalid === e.isInvalid && n.validationErrors.length === e.validationErrors.length && n.validationErrors.every(((n, r) => n === e.validationErrors[r])) && Object.entries(n.validationDetails).every((([n, r]) => e.validationDetails[n] === r))
      }

      function Pe(n, e) {
        let {
          inputElementType: r = "input",
          isDisabled: o = !1,
          isRequired: t = !1,
          isReadOnly: a = !1,
          type: u = "text",
          validationBehavior: i = "aria"
        } = n, [s, l] = function(n, e, r) {
          let [o, t] = (0, d.useState)(n || e), a = (0, d.useRef)(void 0 !== n), u = void 0 !== n;
          (0, d.useEffect)((() => {
            let n = a.current;
            n !== u && console.warn(`WARN: A component changed from ${n?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}.`), a.current = u
          }), [u]);
          let i = u ? n : o,
            s = (0, d.useCallback)(((n, ...e) => {
              let o = (n, ...e) => {
                r && (Object.is(i, n) || r(n, ...e)), u || (i = n)
              };
              "function" == typeof n ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), t(((r, ...t) => {
                let a = n(u ? i : r, ...t);
                return o(a, ...e), u ? r : a
              }))) : (u || t(n), o(n, ...e))
            }), [u, i, r]);
          return [i, s]
        }(n.value, n.defaultValue || "", n.onChange), {
          focusableProps: f
        } = Be(n, e), c = function(n) {
          if (n[xe]) {
            let {
              realtimeValidation: e,
              displayValidation: r,
              updateValidation: o,
              resetValidation: t,
              commitValidation: a
            } = n[xe];
            return {
              realtimeValidation: e,
              displayValidation: r,
              updateValidation: o,
              resetValidation: t,
              commitValidation: a
            }
          }
          return function(n) {
            let {
              isInvalid: e,
              validationState: r,
              name: o,
              value: t,
              builtinValidation: a,
              validate: u,
              validationBehavior: i = "aria"
            } = n;
            r && (e || (e = "invalid" === r));
            let s = void 0 !== e ? {
                isInvalid: e,
                validationErrors: [],
                validationDetails: he
              } : null,
              l = (0, d.useMemo)((() => Se(function(n, e) {
                if ("function" == typeof n) {
                  let r = n(e);
                  if (r && "boolean" != typeof r) return je(r)
                }
                return []
              }(u, t))), [u, t]);
            (null == a ? void 0 : a.validationDetails.valid) && (a = null);
            let f = (0, d.useContext)(we),
              c = (0, d.useMemo)((() => o ? Array.isArray(o) ? o.flatMap((n => je(f[n]))) : je(f[o]) : []), [f, o]),
              [A, p] = (0, d.useState)(f),
              [y, b] = (0, d.useState)(!1);
            f !== A && (p(f), b(!1));
            let _ = (0, d.useMemo)((() => Se(y ? [] : c)), [y, c]),
              C = (0, d.useRef)(Ee),
              [v, k] = (0, d.useState)(Ee),
              B = (0, d.useRef)(Ee),
              [g, m] = (0, d.useState)(!1);
            return (0, d.useEffect)((() => {
              if (!g) return;
              m(!1);
              let n = l || a || C.current;
              Oe(n, B.current) || (B.current = n, k(n))
            })), {
              realtimeValidation: s || _ || l || a || Ee,
              displayValidation: "native" === i ? s || _ || v : s || _ || l || a || v,
              updateValidation(n) {
                "aria" !== i || Oe(v, n) ? C.current = n : k(n)
              },
              resetValidation() {
                let n = Ee;
                Oe(n, B.current) || (B.current = n, k(n)), "native" === i && m(!1), b(!0)
              },
              commitValidation() {
                "native" === i && m(!0), b(!0)
              }
            }
          }(n)
        }({
          ...n,
          value: s
        }), {
          isInvalid: A,
          validationErrors: p,
          validationDetails: y
        } = c.displayValidation, {
          labelProps: b,
          fieldProps: _,
          descriptionProps: C,
          errorMessageProps: v
        } = Yn({
          ...n,
          isInvalid: A,
          errorMessage: n.errorMessage || p
        }), k = function(n, e = {}) {
          let {
            labelable: r,
            isLink: o,
            propNames: t
          } = e, a = {};
          for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && (mn.has(e) || r && hn.has(e) || o && En.has(e) || (null == t ? void 0 : t.has(e)) || wn.test(e)) && (a[e] = n[e]);
          return a
        }(n, {
          labelable: !0
        });
        const B = {
          type: u,
          pattern: n.pattern
        };
        return function(n, e, r) {
            let o = (0, d.useRef)(e),
              t = jn((() => {
                r && r(o.current)
              }));
            (0, d.useEffect)((() => {
              var e;
              let r = null == n || null === (e = n.current) || void 0 === e ? void 0 : e.form;
              return null == r || r.addEventListener("reset", t), () => {
                null == r || r.removeEventListener("reset", t)
              }
            }), [n, t])
          }(e, s, l),
          function(n, e, r) {
            let {
              validationBehavior: o,
              focus: t
            } = n;
            xn((() => {
              if ("native" === o && (null == r ? void 0 : r.current)) {
                let o = e.realtimeValidation.isInvalid ? e.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                r.current.setCustomValidity(o), r.current.hasAttribute("title") || (r.current.title = ""), e.realtimeValidation.isInvalid || e.updateValidation({
                  isInvalid: !(n = r.current).validity.valid,
                  validationDetails: ge(n),
                  validationErrors: n.validationMessage ? [n.validationMessage] : []
                })
              }
              var n
            }));
            let a = jn((() => {
                e.resetValidation()
              })),
              u = jn((n => {
                var o;
                e.displayValidation.isInvalid || e.commitValidation();
                let a = null == r || null === (o = r.current) || void 0 === o ? void 0 : o.form;
                var u;
                !n.defaultPrevented && r && a && function(n) {
                  for (let e = 0; e < n.elements.length; e++) {
                    let r = n.elements[e];
                    if (!r.validity.valid) return r
                  }
                  return null
                }(a) === r.current && (t ? t() : null === (u = r.current) || void 0 === u || u.focus(), oe = "keyboard", ie("keyboard", null)), n.preventDefault()
              })),
              i = jn((() => {
                e.commitValidation()
              }));
            (0, d.useEffect)((() => {
              let n = null == r ? void 0 : r.current;
              if (!n) return;
              let e = n.form;
              return n.addEventListener("invalid", u), n.addEventListener("change", i), null == e || e.addEventListener("reset", a), () => {
                n.removeEventListener("invalid", u), n.removeEventListener("change", i), null == e || e.removeEventListener("reset", a)
              }
            }), [r, u, i, a, o])
          }(n, c, e), (0, d.useEffect)((() => {
            if (e.current instanceof On(e.current).HTMLTextAreaElement) {
              let n = e.current;
              Object.defineProperty(n, "defaultValue", {
                get: () => n.value,
                set: () => {},
                configurable: !0
              })
            }
          }), [e]), {
            labelProps: b,
            inputProps: $n(k, "input" === r && B, {
              disabled: o,
              readOnly: a,
              required: t && "native" === i,
              "aria-required": t && "aria" === i || void 0,
              "aria-invalid": A || void 0,
              "aria-errormessage": n["aria-errormessage"],
              "aria-activedescendant": n["aria-activedescendant"],
              "aria-autocomplete": n["aria-autocomplete"],
              "aria-haspopup": n["aria-haspopup"],
              value: s,
              onChange: n => l(n.target.value),
              autoComplete: n.autoComplete,
              autoCapitalize: n.autoCapitalize,
              maxLength: n.maxLength,
              minLength: n.minLength,
              name: n.name,
              placeholder: n.placeholder,
              inputMode: n.inputMode,
              onCopy: n.onCopy,
              onCut: n.onCut,
              onPaste: n.onPaste,
              onCompositionEnd: n.onCompositionEnd,
              onCompositionStart: n.onCompositionStart,
              onCompositionUpdate: n.onCompositionUpdate,
              onSelect: n.onSelect,
              onBeforeInput: n.onBeforeInput,
              onInput: n.onInput,
              ...f,
              ..._
            }),
            descriptionProps: C,
            errorMessageProps: v,
            isInvalid: A,
            validationErrors: p,
            validationDetails: y
          }
      }
      var qe = r(51838);

      function ze(n, {
        defaultValue: e = !1,
        initializeWithValue: r = !0
      } = {}) {
        const o = n => qe.X || !window.matchMedia ? e : window.matchMedia(n).matches,
          [t, a] = (0, d.useState)((() => r ? o(n) : e));

        function u() {
          a(o(n))
        }
        return (0, d.useEffect)((() => {
          const e = window.matchMedia?.(n);
          return u(), e?.addListener ? e?.addListener(u) : e?.addEventListener("change", u), () => {
            e?.removeListener ? e?.removeListener(u) : e?.removeEventListener("change", u)
          }
        }), [n]), t
      }

      function De(n) {
        const e = (0, d.useRef)({
            value: n,
            prev: void 0
          }),
          r = e.current.value;
        return n !== r && (e.current = {
          value: n,
          prev: r
        }), e.current.prev
      }

      function Le(...n) {
        const e = (0, d.useRef)(null);
        return e.current || (e.current = e => {
          n.forEach((n => {
            "function" == typeof n ? n(e) : null != n && (n.current = e)
          }))
        }), e.current
      }

      function Te(n) {
        const e = (0, d.useRef)(n);
        return (0, d.useEffect)((() => {
          e.current = n
        })), (0, d.useMemo)((() => (...n) => e.current?.(...n)), [])
      }

      function Ne({
        prop: n,
        defaultProp: e,
        onChange: r = (() => {})
      }) {
        const [o, t] = function({
          defaultProp: n,
          onChange: e
        }) {
          const r = (0, d.useState)(n),
            [o] = r,
            t = (0, d.useRef)(o),
            a = Te(e);
          return (0, d.useEffect)((() => {
            t.current !== o && (a(o), t.current = o)
          }), [o, t, a]), r
        }({
          defaultProp: e,
          onChange: r
        }), a = void 0 !== n, u = a ? n : o, i = Te(r), s = (0, d.useCallback)((e => {
          if (a) {
            const r = "function" == typeof e ? e(n) : e;
            r !== n && i(r)
          } else t(e)
        }), [a, n, t, i]);
        return [u, s]
      }
      var Me = r(88691),
        Fe = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function Re(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function Ie(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function Ge(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? Ie(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = Re(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Ie(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function Ve(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      Fe.setAttributes = b(), Fe.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, Fe.domAPI = p(), Fe.insertStyleElement = C(), c()(Me.A, Fe), Me.A && Me.A.locals && Me.A.locals;
      var Ke = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        He = "foundry_vq8c3j8",
        We = (n => {
          var e = e => {
            var r = n.defaultClassName,
              o = Ge(Ge({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) Ke(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ve(n.variantClassNames, (n => Ve(n, (n => n.split(" ")[0]))))
            }
          }, e
        })({
          defaultClassName: "foundry_vq8c3j9 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isInvalid: {
              false: "foundry_vq8c3ja",
              true: "foundry_vq8c3jb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function $e(...n) {
        return (...e) => {
          for (let r of n) "function" == typeof r && r(...e)
        }
      }(0, d.forwardRef)((({
        asChild: n,
        label: e,
        isRequired: r,
        hint: o,
        children: t,
        description: s,
        testId: f,
        className: c,
        rows: A = 5,
        hideLabel: p,
        hideDescription: y,
        hideRequiredAsterisk: b,
        validate: _,
        errorMessage: C,
        ...v
      }, k) => {
        const B = (0, d.useRef)(null),
          g = Le(B, k),
          {
            inputProps: m,
            labelProps: h,
            descriptionProps: E,
            isInvalid: w,
            errorMessageProps: x,
            validationErrors: j
          } = Pe({
            ...v,
            label: e,
            description: s,
            isRequired: r,
            inputElementType: "textarea",
            validate: n => _?.(n) ?? (!C || [C])
          }, B),
          S = (0, u.v6)({
            ...m,
            className: c
          }, {
            className: We({
              isInvalid: w
            }),
            "aria-errormessage": x?.id
          }),
          O = n ? i.Slot : "textarea";
        return (0, a.jsxs)("div", {
          className: "foundry_vq8c3j0",
          children: [(e || o) && (0, a.jsxs)("div", {
            className: "foundry_vq8c3j1",
            children: [(0, a.jsx)(l, {
              enabled: !!p,
              children: (0, a.jsx)($, {
                ...h,
                className: (0, Wn.$)("foundry_vq8c3j2", m.disabled && He),
                asChild: !0,
                children: (0, a.jsxs)("label", {
                  children: [e, r && !b && (0, a.jsx)("span", {
                    className: "foundry_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), o && (0, a.jsx)(rn, {
              className: "foundry_vq8c3j3",
              children: o
            })]
          }), (0, a.jsx)(O, {
            rows: A,
            ref: g,
            "data-testid": f,
            ...S,
            children: t
          }), s && (0, a.jsx)(l, {
            enabled: j.length > 0 || !!y,
            children: (0, a.jsx)($, {
              ...E,
              className: (0, Wn.$)("foundry_vq8c3j4", m.disabled && He),
              children: s
            })
          }), j.length > 0 && (0, a.jsxs)($, {
            ...x,
            appearance: "bold",
            className: "foundry_vq8c3j5",
            children: [(0, a.jsx)(Bn.X, {
              size: "MD",
              label: "",
              className: "foundry_vq8c3j6"
            }), j.join(". ")]
          })]
        })
      })), Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Ue = new Map;

      function Ye(n, e) {
        if (n === e) return n;
        let r = Ue.get(n);
        if (r) return r(e), e;
        let o = Ue.get(e);
        return o ? (o(n), n) : e
      }

      function Xe(...n) {
        let e = {
          ...n[0]
        };
        for (let r = 1; r < n.length; r++) {
          let o = n[r];
          for (let n in o) {
            let r = e[n],
              t = o[n];
            "function" == typeof r && "function" == typeof t && "o" === n[0] && "n" === n[1] && n.charCodeAt(2) >= 65 && n.charCodeAt(2) <= 90 ? e[n] = $e(r, t) : "className" !== n && "UNSAFE_className" !== n || "string" != typeof r || "string" != typeof t ? "id" === n && r && t ? e.id = Ye(r, t) : e[n] = void 0 !== t ? t : r : e[n] = (0, Wn.A)(r, t)
          }
        }
        return e
      }
      const Ze = new Set(["id"]),
        Qe = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Je = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        nr = /^(data-.*)$/;
      const er = n => {
          var e;
          return null !== (e = null == n ? void 0 : n.ownerDocument) && void 0 !== e ? e : document
        },
        rr = n => n && "window" in n && n.window === n ? n : er(n).defaultView || window;
      let or = new Map,
        tr = new Set;

      function ar() {
        if ("undefined" == typeof window) return;

        function n(n) {
          return "propertyName" in n
        }
        let e = r => {
          if (!n(r) || !r.target) return;
          let o = or.get(r.target);
          if (o && (o.delete(r.propertyName), 0 === o.size && (r.target.removeEventListener("transitioncancel", e), or.delete(r.target)), 0 === or.size)) {
            for (let n of tr) n();
            tr.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!n(r) || !r.target) return;
          let o = or.get(r.target);
          o || (o = new Set, or.set(r.target, o), r.target.addEventListener("transitioncancel", e, {
            once: !0
          })), o.add(r.propertyName)
        })), document.body.addEventListener("transitionend", e)
      }

      function ur(n) {
        requestAnimationFrame((() => {
          0 === or.size ? n() : tr.add(n)
        }))
      }

      function dr(n) {
        if (function() {
            if (null == ir) {
              ir = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return ir = !0, !0
                  }
                })
              } catch (n) {}
            }
            return ir
          }()) n.focus({
          preventScroll: !0
        });
        else {
          let e = function(n) {
            let e = n.parentNode,
              r = [],
              o = document.scrollingElement || document.documentElement;
            for (; e instanceof HTMLElement && e !== o;)(e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && r.push({
              element: e,
              scrollTop: e.scrollTop,
              scrollLeft: e.scrollLeft
            }), e = e.parentNode;
            return o instanceof HTMLElement && r.push({
              element: o,
              scrollTop: o.scrollTop,
              scrollLeft: o.scrollLeft
            }), r
          }(n);
          n.focus(),
            function(n) {
              for (let {
                  element: e,
                  scrollTop: r,
                  scrollLeft: o
                }
                of n) e.scrollTop = r, e.scrollLeft = o
            }(e)
        }
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? ar() : document.addEventListener("DOMContentLoaded", ar));
      let ir = null;

      function sr(n) {
        var e;
        return "undefined" != typeof window && null != window.navigator && ((null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.brands.some((e => n.test(e.brand)))) || n.test(window.navigator.userAgent))
      }

      function lr(n) {
        var e;
        return "undefined" != typeof window && null != window.navigator && n.test((null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.platform) || window.navigator.platform)
      }

      function fr() {
        return lr(/^Mac/i)
      }

      function cr() {
        return lr(/^iPad/i) || fr() && navigator.maxTouchPoints > 1
      }

      function Ar() {
        return lr(/^iPhone/i) || cr()
      }

      function pr() {
        return sr(/Android/i)
      }

      function yr(n) {
        return !(0 !== n.mozInputSource || !n.isTrusted) || (pr() && n.pointerType ? "click" === n.type && 1 === n.buttons : 0 === n.detail && !n.pointerType)
      }
      let br = null,
        _r = new Set,
        Cr = new Map,
        vr = !1,
        kr = !1;

      function Br(n, e) {
        for (let r of _r) r(n, e)
      }

      function gr(n) {
        vr = !0,
          function(n) {
            return !(n.metaKey || !fr() && n.altKey || n.ctrlKey || "Control" === n.key || "Shift" === n.key || "Meta" === n.key)
          }(n) && (br = "keyboard", Br("keyboard", n))
      }

      function mr(n) {
        br = "pointer", "mousedown" !== n.type && "pointerdown" !== n.type || (vr = !0, Br("pointer", n))
      }

      function hr(n) {
        yr(n) && (vr = !0, br = "virtual")
      }

      function Er(n) {
        n.target !== window && n.target !== document && (vr || kr || (br = "virtual", Br("virtual", n)), vr = !1, kr = !1)
      }

      function wr() {
        vr = !1, kr = !0
      }

      function xr(n) {
        if ("undefined" == typeof window || Cr.get(rr(n))) return;
        const e = rr(n),
          r = er(n);
        let o = e.HTMLElement.prototype.focus;
        e.HTMLElement.prototype.focus = function() {
          vr = !0, o.apply(this, arguments)
        }, r.addEventListener("keydown", gr, !0), r.addEventListener("keyup", gr, !0), r.addEventListener("click", hr, !0), e.addEventListener("focus", Er, !0), e.addEventListener("blur", wr, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", mr, !0), r.addEventListener("pointermove", mr, !0), r.addEventListener("pointerup", mr, !0)) : (r.addEventListener("mousedown", mr, !0), r.addEventListener("mousemove", mr, !0), r.addEventListener("mouseup", mr, !0)), e.addEventListener("beforeunload", (() => {
          jr(n)
        }), {
          once: !0
        }), Cr.set(e, {
          focus: o
        })
      }
      const jr = (n, e) => {
        const r = rr(n),
          o = er(n);
        e && o.removeEventListener("DOMContentLoaded", e), Cr.has(r) && (r.HTMLElement.prototype.focus = Cr.get(r).focus, o.removeEventListener("keydown", gr, !0), o.removeEventListener("keyup", gr, !0), o.removeEventListener("click", hr, !0), r.removeEventListener("focus", Er, !0), r.removeEventListener("blur", wr, !1), "undefined" != typeof PointerEvent ? (o.removeEventListener("pointerdown", mr, !0), o.removeEventListener("pointermove", mr, !0), o.removeEventListener("pointerup", mr, !0)) : (o.removeEventListener("mousedown", mr, !0), o.removeEventListener("mousemove", mr, !0), o.removeEventListener("mouseup", mr, !0)), Cr.delete(r))
      };
      "undefined" != typeof document && function(n) {
        const e = er(n);
        let r;
        "loading" !== e.readyState ? xr(n) : (r = () => {
          xr(n)
        }, e.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      const Sr = "undefined" != typeof document ? d.useLayoutEffect : () => {};

      function Or(n, e) {
        Sr((() => {
          if (n && n.ref && e) return n.ref.current = e.current, () => {
            n.ref && (n.ref.current = null)
          }
        }))
      }

      function Pr(n) {
        const e = (0, d.useRef)(null);
        return Sr((() => {
          e.current = n
        }), [n]), (0, d.useCallback)(((...n) => {
          const r = e.current;
          return null == r ? void 0 : r(...n)
        }), [])
      }
      class qr {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(n, e) {
          this.nativeEvent = e, this.target = e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget, this.bubbles = e.bubbles, this.cancelable = e.cancelable, this.defaultPrevented = e.defaultPrevented, this.eventPhase = e.eventPhase, this.isTrusted = e.isTrusted, this.timeStamp = e.timeStamp, this.type = n
        }
      }

      function zr(n) {
        let {
          isDisabled: e,
          onFocus: r,
          onBlur: o,
          onFocusChange: t
        } = n;
        const a = (0, d.useCallback)((n => {
            if (n.target === n.currentTarget) return o && o(n), t && t(!1), !0
          }), [o, t]),
          u = function(n) {
            let e = (0, d.useRef)({
              isFocused: !1,
              observer: null
            });
            Sr((() => {
              const n = e.current;
              return () => {
                n.observer && (n.observer.disconnect(), n.observer = null)
              }
            }), []);
            let r = Pr((e => {
              null == n || n(e)
            }));
            return (0, d.useCallback)((n => {
              if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
                e.current.isFocused = !0;
                let o = n.target,
                  t = n => {
                    e.current.isFocused = !1, o.disabled && r(new qr("blur", n)), e.current.observer && (e.current.observer.disconnect(), e.current.observer = null)
                  };
                o.addEventListener("focusout", t, {
                  once: !0
                }), e.current.observer = new MutationObserver((() => {
                  if (e.current.isFocused && o.disabled) {
                    var n;
                    null === (n = e.current.observer) || void 0 === n || n.disconnect();
                    let r = o === document.activeElement ? null : document.activeElement;
                    o.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: r
                    })), o.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: r
                    }))
                  }
                })), e.current.observer.observe(o, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [r])
          }(a),
          i = (0, d.useCallback)((n => {
            const e = er(n.target);
            n.target === n.currentTarget && e.activeElement === n.target && (r && r(n), t && t(!0), u(n))
          }), [t, r, u]);
        return {
          focusProps: {
            onFocus: !e && (r || t || o) ? i : void 0,
            onBlur: e || !o && !t ? void 0 : a
          }
        }
      }

      function Dr(n) {
        if (!n) return;
        let e = !0;
        return r => {
          let o = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              e = !1
            }
          };
          n(o), e && r.stopPropagation()
        }
      }
      let Lr = d.createContext(null);

      function Tr(n, e) {
        let {
          focusProps: r
        } = zr(n), {
          keyboardProps: o
        } = function(n) {
          return {
            keyboardProps: n.isDisabled ? {} : {
              onKeyDown: Dr(n.onKeyDown),
              onKeyUp: Dr(n.onKeyUp)
            }
          }
        }(n), t = Xe(r, o), a = function(n) {
          let e = (0, d.useContext)(Lr) || {};
          Or(e, n);
          let {
            ref: r,
            ...o
          } = e;
          return o
        }(e), u = n.isDisabled ? {} : a, i = (0, d.useRef)(n.autoFocus);
        return (0, d.useEffect)((() => {
          i.current && e.current && function(n) {
            const e = er(n);
            if ("virtual" === br) {
              let r = e.activeElement;
              ur((() => {
                e.activeElement === r && n.isConnected && dr(n)
              }))
            } else dr(n)
          }(e.current), i.current = !1
        }), [e]), {
          focusableProps: Xe({
            ...t,
            tabIndex: n.excludeFromTabOrder && !n.isDisabled ? -1 : void 0
          }, u)
        }
      }
      let Nr = "default",
        Mr = "",
        Fr = new WeakMap;

      function Rr(n) {
        if (Ar()) {
          if ("default" === Nr) {
            const e = er(n);
            Mr = e.documentElement.style.webkitUserSelect, e.documentElement.style.webkitUserSelect = "none"
          }
          Nr = "disabled"
        } else(n instanceof HTMLElement || n instanceof SVGElement) && (Fr.set(n, n.style.userSelect), n.style.userSelect = "none")
      }

      function Ir(n) {
        if (Ar()) {
          if ("disabled" !== Nr) return;
          Nr = "restoring", setTimeout((() => {
            ur((() => {
              if ("restoring" === Nr) {
                const e = er(n);
                "none" === e.documentElement.style.webkitUserSelect && (e.documentElement.style.webkitUserSelect = Mr || ""), Mr = "", Nr = "default"
              }
            }))
          }), 300)
        } else if ((n instanceof HTMLElement || n instanceof SVGElement) && n && Fr.has(n)) {
          let e = Fr.get(n);
          "none" === n.style.userSelect && (n.style.userSelect = e), "" === n.getAttribute("style") && n.removeAttribute("style"), Fr.delete(n)
        }
      }
      const Gr = d.createContext({
        register: () => {}
      });

      function Vr(n, e, r) {
        if (!e.has(n)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return e.get(n)
      }

      function Kr(n, e) {
        return function(n, e) {
          return e.get ? e.get.call(n) : e.value
        }(n, Vr(n, e, "get"))
      }

      function Hr(n, e, r) {
        ! function(n, e) {
          if (e.has(n)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(n, e), e.set(n, r)
      }

      function Wr(n, e, r) {
        return function(n, e, r) {
          if (e.set) e.set.call(n, r);
          else {
            if (!e.writable) throw new TypeError("attempted to set read only private field");
            e.value = r
          }
        }(n, Vr(n, e, "set"), r), r
      }

      function $r(n, e, r = !0) {
        var o, t;
        let {
          metaKey: a,
          ctrlKey: u,
          altKey: d,
          shiftKey: i
        } = e;
        sr(/Firefox/i) && (null === (t = window.event) || void 0 === t || null === (o = t.type) || void 0 === o ? void 0 : o.startsWith("key")) && "_blank" === n.target && (fr() ? a = !0 : u = !0);
        let s = sr(/AppleWebKit/i) && !sr(/Chrome/i) && fr() && !cr() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: u,
          altKey: d,
          shiftKey: i
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: u,
          altKey: d,
          shiftKey: i,
          bubbles: !0,
          cancelable: !0
        });
        $r.isOpening = r, dr(n), n.dispatchEvent(s), $r.isOpening = !1
      }
      Gr.displayName = "PressResponderContext", $r.isOpening = !1;
      var Ur = new WeakMap;
      class Yr {
        continuePropagation() {
          Wr(this, Ur, !1)
        }
        get shouldStopPropagation() {
          return Kr(this, Ur)
        }
        constructor(n, e, r) {
          Hr(this, Ur, {
            writable: !0,
            value: void 0
          }), Wr(this, Ur, !0), this.type = n, this.pointerType = e, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey
        }
      }
      const Xr = Symbol("linkClicked");

      function Zr(n) {
        let {
          onPress: e,
          onPressChange: r,
          onPressStart: o,
          onPressEnd: t,
          onPressUp: a,
          isDisabled: u,
          isPressed: i,
          preventFocusOnPress: s,
          shouldCancelOnPointerExit: l,
          allowTextSelectionOnPress: f,
          ref: c,
          ...A
        } = function(n) {
          let e = (0, d.useContext)(Gr);
          if (e) {
            let {
              register: r,
              ...o
            } = e;
            n = Xe(o, n), r()
          }
          return Or(e, n.ref), n
        }(n), [p, y] = (0, d.useState)(!1), b = (0, d.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          ignoreClickAfterPress: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null
        }), {
          addGlobalListener: _,
          removeAllGlobalListeners: C
        } = function() {
          let n = (0, d.useRef)(new Map),
            e = (0, d.useCallback)(((e, r, o, t) => {
              let a = (null == t ? void 0 : t.once) ? (...e) => {
                n.current.delete(o), o(...e)
              } : o;
              n.current.set(o, {
                type: r,
                eventTarget: e,
                fn: a,
                options: t
              }), e.addEventListener(r, o, t)
            }), []),
            r = (0, d.useCallback)(((e, r, o, t) => {
              var a;
              let u = (null === (a = n.current.get(o)) || void 0 === a ? void 0 : a.fn) || o;
              e.removeEventListener(r, u, t), n.current.delete(o)
            }), []),
            o = (0, d.useCallback)((() => {
              n.current.forEach(((n, e) => {
                r(n.eventTarget, n.type, e, n.options)
              }))
            }), [r]);
          return (0, d.useEffect)((() => o), [o]), {
            addGlobalListener: e,
            removeGlobalListener: r,
            removeAllGlobalListeners: o
          }
        }(), v = Pr(((n, e) => {
          let t = b.current;
          if (u || t.didFirePressStart) return !1;
          let a = !0;
          if (t.isTriggeringEvent = !0, o) {
            let r = new Yr("pressstart", e, n);
            o(r), a = r.shouldStopPropagation
          }
          return r && r(!0), t.isTriggeringEvent = !1, t.didFirePressStart = !0, y(!0), a
        })), k = Pr(((n, o, a = !0) => {
          let d = b.current;
          if (!d.didFirePressStart) return !1;
          d.ignoreClickAfterPress = !0, d.didFirePressStart = !1, d.isTriggeringEvent = !0;
          let i = !0;
          if (t) {
            let e = new Yr("pressend", o, n);
            t(e), i = e.shouldStopPropagation
          }
          if (r && r(!1), y(!1), e && a && !u) {
            let r = new Yr("press", o, n);
            e(r), i && (i = r.shouldStopPropagation)
          }
          return d.isTriggeringEvent = !1, i
        })), B = Pr(((n, e) => {
          let r = b.current;
          if (u) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let o = new Yr("pressup", e, n);
            return a(o), r.isTriggeringEvent = !1, o.shouldStopPropagation
          }
          return !0
        })), g = Pr((n => {
          let e = b.current;
          e.isPressed && e.target && (e.isOverTarget && null != e.pointerType && k(eo(e.target, n), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, C(), f || Ir(e.target))
        })), m = Pr((n => {
          l && g(n)
        })), h = (0, d.useMemo)((() => {
          let n = b.current,
            e = {
              onKeyDown(e) {
                if (Jr(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
                  var o;
                  to(e.target, e.key) && e.preventDefault();
                  let t = !0;
                  if (!n.isPressed && !e.repeat) {
                    n.target = e.currentTarget, n.isPressed = !0, t = v(e, "keyboard");
                    let o = e.currentTarget,
                      a = e => {
                        Jr(e, o) && !e.repeat && o.contains(e.target) && n.target && B(eo(n.target, e), "keyboard")
                      };
                    _(er(e.currentTarget), "keyup", $e(a, r), !0)
                  }
                  t && e.stopPropagation(), e.metaKey && fr() && (null === (o = n.metaKeyEvents) || void 0 === o || o.set(e.key, e.nativeEvent))
                } else "Meta" === e.key && (n.metaKeyEvents = new Map)
              },
              onClick(e) {
                if ((!e || e.currentTarget.contains(e.target)) && e && 0 === e.button && !n.isTriggeringEvent && !$r.isOpening) {
                  let r = !0;
                  if (u && e.preventDefault(), !n.ignoreClickAfterPress && !n.ignoreEmulatedMouseEvents && !n.isPressed && ("virtual" === n.pointerType || yr(e.nativeEvent))) {
                    u || s || dr(e.currentTarget);
                    let n = v(e, "virtual"),
                      o = B(e, "virtual"),
                      t = k(e, "virtual");
                    r = n && o && t
                  }
                  n.ignoreEmulatedMouseEvents = !1, n.ignoreClickAfterPress = !1, r && e.stopPropagation()
                }
              }
            },
            r = e => {
              var r;
              if (n.isPressed && n.target && Jr(e, n.target)) {
                var o;
                to(e.target, e.key) && e.preventDefault();
                let r = e.target;
                k(eo(n.target, e), "keyboard", n.target.contains(r)), C(), "Enter" !== e.key && Qr(n.target) && n.target.contains(r) && !e[Xr] && (e[Xr] = !0, $r(n.target, e, !1)), n.isPressed = !1, null === (o = n.metaKeyEvents) || void 0 === o || o.delete(e.key)
              } else if ("Meta" === e.key && (null === (r = n.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var t;
                let e = n.metaKeyEvents;
                n.metaKeyEvents = void 0;
                for (let r of e.values()) null === (t = n.target) || void 0 === t || t.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            e.onPointerDown = e => {
              if (0 !== e.button || !e.currentTarget.contains(e.target)) return;
              if (a = e.nativeEvent, !pr() && 0 === a.width && 0 === a.height || 1 === a.width && 1 === a.height && 0 === a.pressure && 0 === a.detail && "mouse" === a.pointerType) return void(n.pointerType = "virtual");
              var a;
              oo(e.currentTarget) && e.preventDefault(), n.pointerType = e.pointerType;
              let d = !0;
              n.isPressed || (n.isPressed = !0, n.isOverTarget = !0, n.activePointerId = e.pointerId, n.target = e.currentTarget, u || s || dr(e.currentTarget), f || Rr(n.target), d = v(e, n.pointerType), _(er(e.currentTarget), "pointermove", r, !1), _(er(e.currentTarget), "pointerup", o, !1), _(er(e.currentTarget), "pointercancel", t, !1)), d && e.stopPropagation()
            }, e.onMouseDown = n => {
              n.currentTarget.contains(n.target) && 0 === n.button && (oo(n.currentTarget) && n.preventDefault(), n.stopPropagation())
            }, e.onPointerUp = e => {
              e.currentTarget.contains(e.target) && "virtual" !== n.pointerType && 0 === e.button && ro(e, e.currentTarget) && B(e, n.pointerType || e.pointerType)
            };
            let r = e => {
                e.pointerId === n.activePointerId && (n.target && ro(e, n.target) ? n.isOverTarget || null == n.pointerType || (n.isOverTarget = !0, v(eo(n.target, e), n.pointerType)) : n.target && n.isOverTarget && null != n.pointerType && (n.isOverTarget = !1, k(eo(n.target, e), n.pointerType, !1), m(e)))
              },
              o = e => {
                e.pointerId === n.activePointerId && n.isPressed && 0 === e.button && n.target && (ro(e, n.target) && null != n.pointerType ? k(eo(n.target, e), n.pointerType) : n.isOverTarget && null != n.pointerType && k(eo(n.target, e), n.pointerType, !1), n.isPressed = !1, n.isOverTarget = !1, n.activePointerId = null, n.pointerType = null, C(), f || Ir(n.target))
              },
              t = n => {
                g(n)
              };
            e.onDragStart = n => {
              n.currentTarget.contains(n.target) && g(n)
            }
          } else {
            e.onMouseDown = e => {
              0 === e.button && e.currentTarget.contains(e.target) && (oo(e.currentTarget) && e.preventDefault(), n.ignoreEmulatedMouseEvents ? e.stopPropagation() : (n.isPressed = !0, n.isOverTarget = !0, n.target = e.currentTarget, n.pointerType = yr(e.nativeEvent) ? "virtual" : "mouse", u || s || dr(e.currentTarget), v(e, n.pointerType) && e.stopPropagation(), _(er(e.currentTarget), "mouseup", r, !1)))
            }, e.onMouseEnter = e => {
              if (!e.currentTarget.contains(e.target)) return;
              let r = !0;
              n.isPressed && !n.ignoreEmulatedMouseEvents && null != n.pointerType && (n.isOverTarget = !0, r = v(e, n.pointerType)), r && e.stopPropagation()
            }, e.onMouseLeave = e => {
              if (!e.currentTarget.contains(e.target)) return;
              let r = !0;
              n.isPressed && !n.ignoreEmulatedMouseEvents && null != n.pointerType && (n.isOverTarget = !1, r = k(e, n.pointerType, !1), m(e)), r && e.stopPropagation()
            }, e.onMouseUp = e => {
              e.currentTarget.contains(e.target) && (n.ignoreEmulatedMouseEvents || 0 !== e.button || B(e, n.pointerType || "mouse"))
            };
            let r = e => {
              0 === e.button && (n.isPressed = !1, C(), n.ignoreEmulatedMouseEvents ? n.ignoreEmulatedMouseEvents = !1 : (n.target && ro(e, n.target) && null != n.pointerType ? k(eo(n.target, e), n.pointerType) : n.target && n.isOverTarget && null != n.pointerType && k(eo(n.target, e), n.pointerType, !1), n.isOverTarget = !1))
            };
            e.onTouchStart = e => {
              if (!e.currentTarget.contains(e.target)) return;
              let r = function(n) {
                const {
                  targetTouches: e
                } = n;
                return e.length > 0 ? e[0] : null
              }(e.nativeEvent);
              r && (n.activePointerId = r.identifier, n.ignoreEmulatedMouseEvents = !0, n.isOverTarget = !0, n.isPressed = !0, n.target = e.currentTarget, n.pointerType = "touch", u || s || dr(e.currentTarget), f || Rr(n.target), v(e, n.pointerType) && e.stopPropagation(), _(rr(e.currentTarget), "scroll", o, !0))
            }, e.onTouchMove = e => {
              if (!e.currentTarget.contains(e.target)) return;
              if (!n.isPressed) return void e.stopPropagation();
              let r = no(e.nativeEvent, n.activePointerId),
                o = !0;
              r && ro(r, e.currentTarget) ? n.isOverTarget || null == n.pointerType || (n.isOverTarget = !0, o = v(e, n.pointerType)) : n.isOverTarget && null != n.pointerType && (n.isOverTarget = !1, o = k(e, n.pointerType, !1), m(e)), o && e.stopPropagation()
            }, e.onTouchEnd = e => {
              if (!e.currentTarget.contains(e.target)) return;
              if (!n.isPressed) return void e.stopPropagation();
              let r = no(e.nativeEvent, n.activePointerId),
                o = !0;
              r && ro(r, e.currentTarget) && null != n.pointerType ? (B(e, n.pointerType), o = k(e, n.pointerType)) : n.isOverTarget && null != n.pointerType && (o = k(e, n.pointerType, !1)), o && e.stopPropagation(), n.isPressed = !1, n.activePointerId = null, n.isOverTarget = !1, n.ignoreEmulatedMouseEvents = !0, n.target && !f && Ir(n.target), C()
            }, e.onTouchCancel = e => {
              e.currentTarget.contains(e.target) && (e.stopPropagation(), n.isPressed && g(e))
            };
            let o = e => {
              n.isPressed && e.target.contains(n.target) && g({
                currentTarget: n.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            e.onDragStart = n => {
              n.currentTarget.contains(n.target) && g(n)
            }
          }
          return e
        }), [_, u, s, C, f, g, m, k, v, B]);
        return (0, d.useEffect)((() => () => {
          var n;
          f || Ir(null !== (n = b.current.target) && void 0 !== n ? n : void 0)
        }), [f]), {
          isPressed: i || p,
          pressProps: Xe(A, h)
        }
      }

      function Qr(n) {
        return "A" === n.tagName && n.hasAttribute("href")
      }

      function Jr(n, e) {
        const {
          key: r,
          code: o
        } = n, t = e, a = t.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== o || t instanceof rr(t).HTMLInputElement && !uo(t, r) || t instanceof rr(t).HTMLTextAreaElement || t.isContentEditable || ("link" === a || !a && Qr(t)) && "Enter" !== r)
      }

      function no(n, e) {
        const r = n.changedTouches;
        for (let n = 0; n < r.length; n++) {
          const o = r[n];
          if (o.identifier === e) return o
        }
        return null
      }

      function eo(n, e) {
        return {
          currentTarget: n,
          shiftKey: e.shiftKey,
          ctrlKey: e.ctrlKey,
          metaKey: e.metaKey,
          altKey: e.altKey
        }
      }

      function ro(n, e) {
        let r = e.getBoundingClientRect(),
          o = function(n) {
            let e = 0,
              r = 0;
            return void 0 !== n.width ? e = n.width / 2 : void 0 !== n.radiusX && (e = n.radiusX), void 0 !== n.height ? r = n.height / 2 : void 0 !== n.radiusY && (r = n.radiusY), {
              top: n.clientY - r,
              right: n.clientX + e,
              bottom: n.clientY + r,
              left: n.clientX - e
            }
          }(n);
        return a = o, !((t = r).left > a.right || a.left > t.right || t.top > a.bottom || a.top > t.bottom);
        var t, a
      }

      function oo(n) {
        return !(n instanceof HTMLElement && n.hasAttribute("draggable"))
      }

      function to(n, e) {
        return n instanceof HTMLInputElement ? !uo(n, e) : n instanceof HTMLButtonElement ? "submit" !== n.type && "reset" !== n.type : !Qr(n)
      }
      const ao = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function uo(n, e) {
        return "checkbox" === n.type || "radio" === n.type ? " " === e : ao.has(n.type)
      }

      function io(n, e) {
        let r, {
          elementType: o = "button",
          isDisabled: t,
          onPress: a,
          onPressStart: u,
          onPressEnd: d,
          onPressUp: i,
          onPressChange: s,
          preventFocusOnPress: l,
          allowFocusWhenDisabled: f,
          onClick: c,
          href: A,
          target: p,
          rel: y,
          type: b = "button"
        } = n;
        r = "button" === o ? {
          type: b,
          disabled: t
        } : {
          role: "button",
          tabIndex: t ? void 0 : 0,
          href: "a" === o && t ? void 0 : A,
          target: "a" === o ? p : void 0,
          type: "input" === o ? b : void 0,
          disabled: "input" === o ? t : void 0,
          "aria-disabled": t && "input" !== o ? t : void 0,
          rel: "a" === o ? y : void 0
        };
        let {
          pressProps: _,
          isPressed: C
        } = Zr({
          onPressStart: u,
          onPressEnd: d,
          onPressChange: s,
          onPress: a,
          onPressUp: i,
          isDisabled: t,
          preventFocusOnPress: l,
          ref: e
        }), {
          focusableProps: v
        } = Tr(n, e);
        f && (v.tabIndex = t ? -1 : v.tabIndex);
        let k = Xe(v, _, function(n, e = {}) {
          let {
            labelable: r,
            isLink: o,
            propNames: t
          } = e, a = {};
          for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && (Ze.has(e) || r && Qe.has(e) || o && Je.has(e) || (null == t ? void 0 : t.has(e)) || nr.test(e)) && (a[e] = n[e]);
          return a
        }(n, {
          labelable: !0
        }));
        return {
          isPressed: C,
          buttonProps: Xe(r, k, {
            "aria-haspopup": n["aria-haspopup"],
            "aria-expanded": n["aria-expanded"],
            "aria-controls": n["aria-controls"],
            "aria-pressed": n["aria-pressed"],
            onClick: n => {
              c && (c(n), console.warn("onClick is deprecated, please use onPress"))
            }
          })
        }
      }
      var so = r(86706),
        lo = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function fo(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function co(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function Ao(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? co(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = fo(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : co(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function po(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      lo.setAttributes = b(), lo.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, lo.domAPI = p(), lo.insertStyleElement = C(), c()(so.A, lo), so.A && so.A.locals && so.A.locals;
      var yo = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        bo = n => {
          var e = e => {
            var r = n.defaultClassName,
              o = Ao(Ao({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) yo(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return po(n.variantClassNames, (n => po(n, (n => n.split(" ")[0]))))
            }
          }, e
        },
        _o = bo({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy1",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnua0 foundry_1qqcnua1",
              secondary: "foundry_1qqcnua0 foundry_1qqcnua2",
              tertiary: "foundry_1qqcnua0 foundry_1qqcnua3",
              ghost: "foundry_1qqcnua0 foundry_1qqcnua4",
              danger: "foundry_1qqcnua0 foundry_1qqcnua6",
              information: "foundry_1qqcnua0 foundry_1qqcnua5",
              monochrome: "foundry_1qqcnua0 foundry_1qqcnua7"
            },
            size: {
              MD: "foundry_17pcofya",
              LG: "foundry_17pcofyb"
            },
            fullWidth: {
              true: "foundry_17pcofyc",
              false: "foundry_17pcofyd"
            },
            allCaps: {
              true: "foundry_17pcofye",
              false: "foundry_17pcofyf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "MD",
              allCaps: !1
            }, "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm"],
            [{
              size: "MD",
              allCaps: !0
            }, "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdo"],
            [{
              size: "LG",
              allCaps: !1
            }, "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg"],
            [{
              size: "LG",
              allCaps: !0
            }, "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdi"]
          ]
        }),
        Co = bo({
          defaultClassName: "foundry_17pcofyl",
          variantClassNames: {
            fullWidth: {
              true: "foundry_17pcofym",
              false: "foundry_17pcofyn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, d.forwardRef)((({
        testId: n,
        asChild: e,
        className: r,
        children: o,
        onClick: t,
        iconLeft: s,
        iconLeftLabel: l,
        iconRight: f,
        iconRightLabel: c,
        appearance: A,
        size: p = "MD",
        allCaps: y = !1,
        fullWidth: b = !1,
        ..._
      }, C) => {
        const v = (0, d.useRef)(null),
          k = Le(v, C),
          {
            events: B,
            others: g
          } = (0, u.bZ)(_, {
            onPress: !1
          }),
          {
            buttonProps: m,
            isPressed: h
          } = io({
            ...g,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: n => g.onPress?.(n) ?? t?.(n)
          }, v),
          E = (0, u.v6)({
            ...m,
            className: r
          }, {
            ...B,
            role: "button",
            "data-pressed": h,
            "data-testid": n,
            className: _o({
              appearance: A,
              size: p,
              fullWidth: b,
              allCaps: y
            })
          }),
          w = s && gn[s],
          x = f && gn[f],
          j = e ? i.Slot : "button",
          S = b && (x || x && w);
        return (0, a.jsxs)(j, {
          ref: k,
          ...E,
          children: [S && (0, a.jsx)("div", {
            className: "foundry_17pcofyo"
          }), w && (0, a.jsx)(w, {
            label: l || "",
            size: p,
            className: "foundry_17pcofyk"
          }), (0, a.jsx)(i.Slottable, {
            children: o
          }), x && (0, a.jsx)(x, {
            label: c || "",
            size: p,
            className: Co({
              fullWidth: b
            })
          })]
        })
      }));
      var vo = r(53994),
        ko = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      ko.setAttributes = b(), ko.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, ko.domAPI = p(), ko.insertStyleElement = C(), c()(vo.A, ko), vo.A && vo.A.locals && vo.A.locals;
      var Bo = r(96619),
        go = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      go.setAttributes = b(), go.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, go.domAPI = p(), go.insertStyleElement = C(), c()(Bo.A, go), Bo.A && Bo.A.locals && Bo.A.locals;
      var mo = r(56108),
        ho = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      ho.setAttributes = b(), ho.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, ho.domAPI = p(), ho.insertStyleElement = C(), c()(mo.A, ho), mo.A && mo.A.locals && mo.A.locals;
      var Eo = r(90412),
        wo = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      wo.setAttributes = b(), wo.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, wo.domAPI = p(), wo.insertStyleElement = C(), c()(Eo.A, wo), Eo.A && Eo.A.locals && Eo.A.locals;
      var xo = {},
        jo = r(67094),
        So = r.n(jo);
      class Oo {
        constructor(n) {
          const {
            failure: e,
            gotoFn: r,
            output: o
          } = this._buildTables(n);
          this.gotoFn = r, this.output = o, this.failure = e
        }
        _buildTables(n) {
          const e = {
              0: {}
            },
            r = {};
          let o = 0;
          for (const t of n) {
            let n = 0;
            for (const a of t) e[n] && a in e[n] ? n = e[n][a] : (o++, e[n][a] = o, e[o] = {}, n = o, r[o] = []);
            r[n].push(t)
          }
          const t = {},
            a = [];
          for (const n in e[0]) {
            const r = e[0][n];
            t[r] = 0, a.push(r)
          }
          for (; a.length > 0;) {
            const n = a.shift();
            if (void 0 !== n)
              for (const o in e[n]) {
                const u = e[n][o];
                a.push(u);
                let d = t[n];
                for (; d > 0 && !(o in e[d]);) d = t[d];
                if (o in e[d]) {
                  const n = e[d][o];
                  t[u] = n, r[u] = [...r[u], ...r[n]]
                } else t[u] = 0
              }
          }
          return {
            gotoFn: e,
            output: r,
            failure: t
          }
        }
        search(n) {
          let e = 0;
          const r = [];
          for (let o = 0; o < n.length; o++) {
            const t = n[o];
            for (; e > 0 && !(t in this.gotoFn[e]);) e = this.failure[e];
            if (t in this.gotoFn[e] && (e = this.gotoFn[e][t], this.output[e].length > 0)) {
              const n = this.output[e];
              r.push([o, n])
            }
          }
          return r
        }
      }
      var Po, qo, zo = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        Do = !1;

      function Lo(n, e) {
        return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
          raw: {
            value: Object.freeze(e)
          }
        }))
      }! function(n) {
        n.Attribute = "attribute", n.Pseudo = "pseudo", n.PseudoElement = "pseudo-element", n.Tag = "tag", n.Universal = "universal", n.Adjacent = "adjacent", n.Child = "child", n.Descendant = "descendant", n.Parent = "parent", n.Sibling = "sibling", n.ColumnCombinator = "column-combinator"
      }(Po || (Po = {})),
      function(n) {
        n.Any = "any", n.Element = "element", n.End = "end", n.Equals = "equals", n.Exists = "exists", n.Hyphen = "hyphen", n.Not = "not", n.Start = "start"
      }(qo || (qo = {}));
      const To = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        No = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        Mo = new Map([
          [126, qo.Element],
          [94, qo.Start],
          [36, qo.End],
          [42, qo.Any],
          [33, qo.Not],
          [124, qo.Hyphen]
        ]),
        Fo = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        Ro = new Set(["contains", "icontains"]);

      function Io(n, e, r) {
        const o = parseInt(e, 16) - 65536;
        return o != o || r ? e : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
      }

      function Go(n) {
        return n.replace(No, Io)
      }

      function Vo(n) {
        return 39 === n || 34 === n
      }

      function Ko(n) {
        return 32 === n || 9 === n || 10 === n || 12 === n || 13 === n
      }

      function Ho(n) {
        const e = [],
          r = Wo(e, `${n}`, 0);
        if (r < n.length) throw new Error(`Unmatched selector: ${n.slice(r)}`);
        return e
      }

      function Wo(n, e, r) {
        let o = [];

        function t(n) {
          const o = e.slice(r + n).match(To);
          if (!o) throw new Error(`Expected name, found ${e.slice(r)}`);
          const [t] = o;
          return r += n + t.length, Go(t)
        }

        function a(n) {
          for (r += n; r < e.length && Ko(e.charCodeAt(r));) r++
        }

        function u() {
          const n = r += 1;
          let o = 1;
          for (; o > 0 && r < e.length; r++) 40 !== e.charCodeAt(r) || d(r) ? 41 !== e.charCodeAt(r) || d(r) || o-- : o++;
          if (o) throw new Error("Parenthesis not matched");
          return Go(e.slice(n, r - 1))
        }

        function d(n) {
          let r = 0;
          for (; 92 === e.charCodeAt(--n);) r++;
          return 1 == (1 & r)
        }

        function i() {
          if (o.length > 0 && function(n) {
              switch (n.type) {
                case Po.Adjacent:
                case Po.Child:
                case Po.Descendant:
                case Po.Parent:
                case Po.Sibling:
                case Po.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(o[o.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function s(n) {
          o.length > 0 && o[o.length - 1].type === Po.Descendant ? o[o.length - 1].type = n : (i(), o.push({
            type: n
          }))
        }

        function l(n, e) {
          o.push({
            type: Po.Attribute,
            name: n,
            action: e,
            value: t(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function f() {
          if (o.length && o[o.length - 1].type === Po.Descendant && o.pop(), 0 === o.length) throw new Error("Empty sub-selector");
          n.push(o)
        }
        if (a(0), e.length === r) return r;
        n: for (; r < e.length;) {
          const n = e.charCodeAt(r);
          switch (n) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== o.length && o[0].type === Po.Descendant || (i(), o.push({
                type: Po.Descendant
              })), a(1);
              break;
            case 62:
              s(Po.Child), a(1);
              break;
            case 60:
              s(Po.Parent), a(1);
              break;
            case 126:
              s(Po.Sibling), a(1);
              break;
            case 43:
              s(Po.Adjacent), a(1);
              break;
            case 46:
              l("class", qo.Element);
              break;
            case 35:
              l("id", qo.Equals);
              break;
            case 91: {
              let n;
              a(1);
              let u = null;
              124 === e.charCodeAt(r) ? n = t(1) : e.startsWith("*|", r) ? (u = "*", n = t(2)) : (n = t(0), 124 === e.charCodeAt(r) && 61 !== e.charCodeAt(r + 1) && (u = n, n = t(1))), a(0);
              let i = qo.Exists;
              const s = Mo.get(e.charCodeAt(r));
              if (s) {
                if (i = s, 61 !== e.charCodeAt(r + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === e.charCodeAt(r) && (i = qo.Equals, a(1));
              let l = "",
                f = null;
              if ("exists" !== i) {
                if (Vo(e.charCodeAt(r))) {
                  const n = e.charCodeAt(r);
                  let o = r + 1;
                  for (; o < e.length && (e.charCodeAt(o) !== n || d(o));) o += 1;
                  if (e.charCodeAt(o) !== n) throw new Error("Attribute value didn't end");
                  l = Go(e.slice(r + 1, o)), r = o + 1
                } else {
                  const n = r;
                  for (; r < e.length && (!Ko(e.charCodeAt(r)) && 93 !== e.charCodeAt(r) || d(r));) r += 1;
                  l = Go(e.slice(n, r))
                }
                a(0);
                const n = 32 | e.charCodeAt(r);
                115 === n ? (f = !1, a(1)) : 105 === n && (f = !0, a(1))
              }
              if (93 !== e.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const c = {
                type: Po.Attribute,
                name: n,
                action: i,
                value: l,
                namespace: u,
                ignoreCase: f
              };
              o.push(c);
              break
            }
            case 58: {
              if (58 === e.charCodeAt(r + 1)) {
                o.push({
                  type: Po.PseudoElement,
                  name: t(2).toLowerCase(),
                  data: 40 === e.charCodeAt(r) ? u() : null
                });
                continue
              }
              const n = t(1).toLowerCase();
              let a = null;
              if (40 === e.charCodeAt(r))
                if (Fo.has(n)) {
                  if (Vo(e.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${n} cannot be quoted`);
                  if (a = [], r = Wo(a, e, r + 1), 41 !== e.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${n} (${e})`);
                  r += 1
                } else {
                  if (a = u(), Ro.has(n)) {
                    const n = a.charCodeAt(0);
                    n === a.charCodeAt(a.length - 1) && Vo(n) && (a = a.slice(1, -1))
                  }
                  a = Go(a)
                } o.push({
                type: Po.Pseudo,
                name: n,
                data: a
              });
              break
            }
            case 44:
              f(), o = [], a(1);
              break;
            default: {
              if (e.startsWith("/*", r)) {
                const n = e.indexOf("*/", r + 2);
                if (n < 0) throw new Error("Comment was not terminated");
                r = n + 2, 0 === o.length && a(0);
                break
              }
              let u, d = null;
              if (42 === n) r += 1, u = "*";
              else if (124 === n) {
                if (u = "", 124 === e.charCodeAt(r + 1)) {
                  s(Po.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!To.test(e.slice(r))) break n;
                u = t(0)
              }
              124 === e.charCodeAt(r) && 124 !== e.charCodeAt(r + 1) && (d = u, 42 === e.charCodeAt(r + 1) ? (u = "*", r += 2) : u = t(1)), o.push("*" === u ? {
                type: Po.Universal,
                namespace: d
              } : {
                type: Po.Tag,
                name: u,
                namespace: d
              })
            }
          }
        }
        return f(), r
      }

      function $o(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function Uo(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? $o(Object(r), !0).forEach((function(e) {
            Yo(n, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : $o(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function Yo(n, e, r) {
        return (e = function(n) {
          var e = function(n, e) {
            if ("object" != typeof n || null === n) return n;
            var r = n[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(n, "string");
              if ("object" != typeof o) return o;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(n)
          }(n);
          return "symbol" == typeof e ? e : String(e)
        }(e)) in n ? Object.defineProperty(n, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : n[e] = r, n
      }
      const Xo = function n(e) {
          return r.withOptions = r => n(Uo(Uo({}, e), r)), r;

          function r(n, ...r) {
            const o = "string" == typeof n ? [n] : n.raw,
              {
                escapeSpecialCharacters: t = Array.isArray(n)
              } = e;
            let a = "";
            for (let n = 0; n < o.length; n++) {
              let e = o[n];
              t && (e = e.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), a += e, n < r.length && (a += r[n])
            }
            const u = a.split("\n");
            let d = null;
            for (const n of u) {
              const e = n.match(/^(\s+)\S+/);
              if (e) {
                const n = e[1].length;
                d = d ? Math.min(d, n) : n
              }
            }
            if (null !== d) {
              const n = d;
              a = u.map((e => " " === e[0] || "\t" === e[0] ? e.slice(n) : e)).join("\n")
            }
            return a = a.trim(), t && (a = a.replace(/\\n/g, "\n")), a
          }
        }({}),
        Zo = Xo;
      var Qo = function() {
        return Qo = Object.assign || function(n) {
          for (var e, r = 1, o = arguments.length; r < o; r++)
            for (var t in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
          return n
        }, Qo.apply(this, arguments)
      };

      function Jo(n, e) {
        var r = {};
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && e.indexOf(o) < 0 && (r[o] = n[o]);
        if (null != n && "function" == typeof Object.getOwnPropertySymbols) {
          var t = 0;
          for (o = Object.getOwnPropertySymbols(n); t < o.length; t++) e.indexOf(o[t]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[t]) && (r[o[t]] = n[o[t]])
        }
        return r
      }

      function nt(n, e) {
        var r = "function" == typeof Symbol && n[Symbol.iterator];
        if (!r) return n;
        var o, t, a = r.call(n),
          u = [];
        try {
          for (;
            (void 0 === e || e-- > 0) && !(o = a.next()).done;) u.push(o.value)
        } catch (n) {
          t = {
            error: n
          }
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a)
          } finally {
            if (t) throw t.error
          }
        }
        return u
      }
      var et, rt = /(\u000D|\u000C|\u000D\u000A)/g,
        ot = /[\u0000\uD800-\uDFFF]/g,
        tt = /(\/\*)[\s\S]*?(\*\/)/g,
        at = function(n, e) {
          if (n.length <= e + 1) return null;
          for (var r = n.charCodeAt(e), o = [], t = e + 1; t < n.length; t += 1) {
            var a = n.charCodeAt(t);
            if (a === r) return [t, String.fromCharCode.apply(null, o)];
            if (92 === a) {
              var u = dt(n, t);
              if (null === u) return null;
              var d = nt(u, 2),
                i = d[0],
                s = d[1];
              o.push(s), t = i
            } else {
              if (10 === a) return null;
              o.push(a)
            }
          }
          return null
        },
        ut = function(n, e) {
          if (n.length <= e) return !1;
          var r, o = n.charCodeAt(e);
          return 45 === o ? !(n.length <= e + 1) && (45 === (r = n.charCodeAt(e + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(n.length <= e + 2) && 10 !== n.charCodeAt(e + 2)) : 95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128 || 92 === o && !(n.length <= e + 1) && 10 !== (r = n.charCodeAt(e + 1))
        },
        dt = function(n, e) {
          if (n.length <= e + 1) return null;
          if (92 !== n.charCodeAt(e)) return null;
          var r = n.charCodeAt(e + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var o = [r], t = Math.min(e + 7, n.length), a = e + 2; a < t; a += 1) {
              var u = n.charCodeAt(a);
              if (!(u >= 48 && u <= 57 || u >= 65 && u <= 70 || u >= 97 && u <= 102)) break;
              o.push(u)
            }
            if (a < n.length) {
              var d = n.charCodeAt(a);
              9 !== d && 32 !== d && 10 !== d || (a += 1)
            }
            return [a - 1, parseInt(String.fromCharCode.apply(null, o), 16)]
          }
          return [e + 1, r]
        },
        it = function(n, e) {
          var r = st(n, e);
          if (null === r) return null;
          var o = nt(r, 3),
            t = o[0],
            a = o[1],
            u = o[2],
            d = ft(n, t + 1);
          if (null !== d) {
            var i = nt(d, 2);
            return [i[0],
              ["<dimension-token>", a, i[1]]
            ]
          }
          return t + 1 < n.length && 37 === n.charCodeAt(t + 1) ? [t + 1, ["<percentage-token>", a]] : [t, ["<number-token>", a, u]]
        },
        st = function(n, e) {
          if (n.length <= e) return null;
          var r = "integer",
            o = [],
            t = n.charCodeAt(e);
          for (43 !== t && 45 !== t || (e += 1, 45 === t && o.push(45)); e < n.length && ((s = n.charCodeAt(e)) >= 48 && s <= 57);) o.push(s), e += 1;
          if (e + 1 < n.length) {
            var a = n.charCodeAt(e),
              u = n.charCodeAt(e + 1);
            if (46 === a && u >= 48 && u <= 57)
              for (o.push(a, u), r = "number", e += 2; e < n.length && ((s = n.charCodeAt(e)) >= 48 && s <= 57);) o.push(s), e += 1
          }
          if (e + 1 < n.length) {
            a = n.charCodeAt(e), u = n.charCodeAt(e + 1);
            var d = n.charCodeAt(e + 2);
            if (69 === a || 101 === a) {
              var i = u >= 48 && u <= 57;
              if (i || (43 === u || 45 === u) && d >= 48 && d <= 57)
                for (r = "number", i ? (o.push(69, u), e += 2) : 45 === u ? (o.push(69, 45, d), e += 3) : (o.push(69, d), e += 3); e < n.length;) {
                  var s;
                  if (!((s = n.charCodeAt(e)) >= 48 && s <= 57)) break;
                  o.push(s), e += 1
                }
            }
          }
          var l = String.fromCharCode.apply(null, o),
            f = "number" === r ? parseFloat(l) : parseInt(l);
          return -0 === f && (f = 0), Number.isNaN(f) ? null : [e - 1, f, r]
        },
        lt = function(n, e) {
          if (n.length <= e) return null;
          for (var r = [], o = n.charCodeAt(e); e < n.length; o = n.charCodeAt(++e))
            if (45 === o || 95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128 || o >= 48 && o <= 57) r.push(o);
            else {
              var t = dt(n, e);
              if (null === t) break;
              var a = nt(t, 2),
                u = a[0],
                d = a[1];
              r.push(d), e = u
            } return 0 === e ? null : [e - 1, String.fromCharCode.apply(null, r)]
        },
        ft = function(n, e) {
          if (n.length <= e || !ut(n, e)) return null;
          for (var r = [], o = n.charCodeAt(e); e < n.length; o = n.charCodeAt(++e))
            if (45 === o || 95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128 || o >= 48 && o <= 57) r.push(o);
            else {
              var t = dt(n, e);
              if (null === t) break;
              var a = nt(t, 2),
                u = a[0],
                d = a[1];
              r.push(d), e = u
            } return [e - 1, String.fromCharCode.apply(null, r)]
        },
        ct = function(n, e) {
          for (var r = n.charCodeAt(e); 9 === r || 32 === r || 10 === r;) r = n.charCodeAt(++e);
          for (var o = [], t = !1; e < n.length;) {
            if (41 === r) return [e, String.fromCharCode.apply(null, o)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) t || 0 === o.length || (t = !0);
            else if (92 === r) {
              var a = dt(n, e);
              if (null === a || t) return null;
              var u = nt(a, 2),
                d = u[0],
                i = u[1];
              o.push(i), e = d
            } else {
              if (t) return null;
              o.push(r)
            }
            r = n.charCodeAt(++e)
          }
          return null
        },
        At = function(n, e) {
          var r = ft(n, e);
          if (null === r) return null;
          var o = nt(r, 2),
            t = o[0],
            a = o[1];
          if ("url" === a.toLowerCase()) {
            if (n.length > t + 1 && 40 === n.charCodeAt(t + 1)) {
              for (var u = 2; t + u < n.length; u += 1) {
                var d = n.charCodeAt(t + u);
                if (34 === d || 39 === d) return [t + 1, a.toLowerCase(), "<function-token>"];
                if (9 !== d && 32 !== d && 10 !== d) {
                  var i = ct(n, t + u);
                  if (null === i) return null;
                  var s = nt(i, 2);
                  return [s[0], s[1], "<url-token>"]
                }
              }
              return [t + 1, a.toLowerCase(), "<function-token>"]
            }
          } else if (n.length > t + 1 && 40 === n.charCodeAt(t + 1)) return [t + 1, a.toLowerCase(), "<function-token>"];
          return [t, a.toLowerCase(), "<ident-token>"]
        },
        pt = function(n) {
          if (null === n.mediaCondition) return n;
          var e = yt(n.mediaCondition);
          return null === e.operator && 1 === e.children.length && "children" in e.children[0] && (e = e.children[0]), {
            mediaPrefix: n.mediaPrefix,
            mediaType: n.mediaType,
            mediaCondition: e
          }
        },
        yt = function n(e) {
          for (var r = e.children.length - 1; r >= 0; r--) {
            var o = e.children[r];
            if (!("context" in o)) {
              var t = n(o);
              if (null === t.operator && 1 === t.children.length) e.children[r] = t.children[0];
              else if (t.operator === e.operator && ("and" === t.operator || "or" === t.operator)) {
                for (var a = [r, 1], u = 0; u < t.children.length; u++) a.push(t.children[u]);
                e.children.splice.apply(e.children, a)
              }
            }
          }
          return e
        },
        bt = function(n, e) {
          return e instanceof Error ? new Error("".concat(e.message.trim(), "\n").concat(n.trim())) : new Error(n.trim())
        },
        _t = function(n) {
          var e = function(n, e) {
            void 0 === e && (e = 0), n = (n = n.replace(rt, "\n").replace(ot, "�")).replace(tt, "");
            for (var r = []; e < n.length; e += 1) {
              var o = n.charCodeAt(e);
              if (9 === o || 32 === o || 10 === o) {
                for (var t = n.charCodeAt(++e); 9 === t || 32 === t || 10 === t;) t = n.charCodeAt(++e);
                e -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === o) {
                if (null === (E = at(n, e))) return null;
                var a = nt(E, 2),
                  u = a[0],
                  d = a[1];
                r.push({
                  type: "<string-token>",
                  value: d
                }), e = u
              } else if (35 === o) {
                if (e + 1 < n.length && (95 === (p = n.charCodeAt(e + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && e + 2 < n.length && 10 !== n.charCodeAt(e + 2))) {
                  var i = ut(n, e + 1) ? "id" : "unrestricted";
                  if (null !== (E = lt(n, e + 1))) {
                    var s = nt(E, 2);
                    u = s[0], d = s[1], r.push({
                      type: "<hash-token>",
                      value: d.toLowerCase(),
                      flag: i
                    }), e = u;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (39 === o) {
                if (null === (E = at(n, e))) return null;
                var l = nt(E, 2);
                u = l[0], d = l[1], r.push({
                  type: "<string-token>",
                  value: d
                }), e = u
              } else if (40 === o) r.push({
                type: "<(-token>"
              });
              else if (41 === o) r.push({
                type: "<)-token>"
              });
              else if (43 === o) {
                var f = it(n, e);
                if (null === f) r.push({
                  type: "<delim-token>",
                  value: o
                });
                else {
                  var c = nt(f, 2);
                  u = c[0], "<dimension-token>" === (m = c[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: m[1],
                    unit: m[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === m[0] ? r.push({
                    type: m[0],
                    value: m[1],
                    flag: m[2]
                  }) : r.push({
                    type: m[0],
                    value: m[1],
                    flag: "number"
                  }), e = u
                }
              } else if (44 === o) r.push({
                type: "<comma-token>"
              });
              else if (45 === o) {
                if (null !== (C = it(n, e))) {
                  var A = nt(C, 2);
                  u = A[0], "<dimension-token>" === (m = A[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: m[1],
                    unit: m[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === m[0] ? r.push({
                    type: m[0],
                    value: m[1],
                    flag: m[2]
                  }) : r.push({
                    type: m[0],
                    value: m[1],
                    flag: "number"
                  }), e = u;
                  continue
                }
                if (e + 2 < n.length) {
                  var p = n.charCodeAt(e + 1),
                    y = n.charCodeAt(e + 2);
                  if (45 === p && 62 === y) {
                    r.push({
                      type: "<CDC-token>"
                    }), e += 2;
                    continue
                  }
                }
                if (null !== (E = At(n, e))) {
                  var b = nt(E, 3),
                    _ = (u = b[0], d = b[1], b[2]);
                  r.push({
                    type: _,
                    value: d
                  }), e = u;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (46 === o) {
                var C;
                if (null !== (C = it(n, e))) {
                  var v = nt(C, 2);
                  u = v[0], "<dimension-token>" === (m = v[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: m[1],
                    unit: m[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === m[0] ? r.push({
                    type: m[0],
                    value: m[1],
                    flag: m[2]
                  }) : r.push({
                    type: m[0],
                    value: m[1],
                    flag: "number"
                  }), e = u;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (58 === o) r.push({
                type: "<colon-token>"
              });
              else if (59 === o) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === o) {
                if (e + 3 < n.length) {
                  p = n.charCodeAt(e + 1), y = n.charCodeAt(e + 2);
                  var k = n.charCodeAt(e + 3);
                  if (33 === p && 45 === y && 45 === k) {
                    r.push({
                      type: "<CDO-token>"
                    }), e += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (64 === o) {
                if (null !== (E = ft(n, e + 1))) {
                  var B = nt(E, 2);
                  u = B[0], d = B[1], r.push({
                    type: "<at-keyword-token>",
                    value: d.toLowerCase()
                  }), e = u;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (91 === o) r.push({
                type: "<[-token>"
              });
              else if (92 === o) {
                if (null === (E = dt(n, e))) return null;
                var g = nt(E, 2);
                u = g[0], d = g[1], n = n.slice(0, e) + d + n.slice(u + 1), e -= 1
              } else if (93 === o) r.push({
                type: "<]-token>"
              });
              else if (123 === o) r.push({
                type: "<{-token>"
              });
              else if (125 === o) r.push({
                type: "<}-token>"
              });
              else if (o >= 48 && o <= 57) {
                var m, h = nt(E = it(n, e), 2);
                u = h[0], "<dimension-token>" === (m = h[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: m[1],
                  unit: m[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === m[0] ? r.push({
                  type: m[0],
                  value: m[1],
                  flag: m[2]
                }) : r.push({
                  type: m[0],
                  value: m[1],
                  flag: "number"
                }), e = u
              } else if (95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128) {
                var E;
                if (null === (E = At(n, e))) return null;
                var w = nt(E, 3);
                u = w[0], d = w[1], _ = w[2], r.push({
                  type: _,
                  value: d
                }), e = u
              } else r.push({
                type: "<delim-token>",
                value: o
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(n.trim());
          if (null === e) throw bt("Failed tokenizing");
          var r = 0,
            o = e.length - 1;
          if ("<at-keyword-token>" === e[0].type && "media" === e[0].value) {
            if ("<whitespace-token>" !== e[1].type) throw bt("Expected whitespace after media");
            r = 2;
            for (var t = 2; t < e.length - 1; t++) {
              var a = e[t];
              if ("<{-token>" === a.type) {
                o = t;
                break
              }
              if ("<semicolon-token>" === a.type) throw bt("Expected '{' in media query but found ';'")
            }
          }
          return e = e.slice(r, o), vt(e)
        },
        Ct = function(n) {
          for (var e = [], r = !1, o = 0; o < n.length; o++) "<whitespace-token>" === n[o].type ? (r = !0, e.length > 0 && (e[e.length - 1].wsAfter = !0)) : (e.push(Qo(Qo({}, n[o]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return e
        },
        vt = function(n) {
          for (var e, r, o = [
              []
            ], t = 0; t < n.length; t++) {
            var a = n[t];
            "<comma-token>" === a.type ? o.push([]) : o[o.length - 1].push(a)
          }
          var u = o.map(Ct);
          if (1 === u.length && 0 === u[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var d = u.map((function(n) {
              return 0 === n.length ? null : kt(n)
            })),
            i = [];
          try {
            for (var s = function(n) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  r = e && n[e],
                  o = 0;
                if (r) return r.call(n);
                if (n && "number" == typeof n.length) return {
                  next: function() {
                    return n && o >= n.length && (n = void 0), {
                      value: n && n[o++],
                      done: !n
                    }
                  }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(d), l = s.next(); !l.done; l = s.next()) {
              var f = l.value;
              null !== f && i.push(f)
            }
          } catch (n) {
            e = {
              error: n
            }
          } finally {
            try {
              l && !l.done && (r = s.return) && r.call(s)
            } finally {
              if (e) throw e.error
            }
          }
          if (0 === i.length) throw bt("No valid media queries");
          return i
        },
        kt = function(n) {
          var e = n[0];
          if ("<(-token>" === e.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Bt(n, !0)
            }
          } catch (n) {
            throw bt("Expected media condition after '('", n)
          } else {
            if ("<ident-token>" !== e.type) throw bt("Expected media condition or media prefix");
            var r = null,
              o = void 0,
              t = e.value;
            "only" !== t && "not" !== t || (r = t);
            var a = null === r ? 0 : 1;
            if (n.length <= a) throw bt("Expected extra token in media query");
            var u = n[a];
            if ("<ident-token>" === u.type) {
              var d = u.value;
              if ("all" === d) o = "all";
              else if ("print" === d || "screen" === d) o = d;
              else {
                if ("tty" !== d && "tv" !== d && "projection" !== d && "handheld" !== d && "braille" !== d && "embossed" !== d && "aural" !== d && "speech" !== d) throw bt("Unknown ident '".concat(d, "' in media query"));
                r = "not" === r ? null : "not", o = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== u.type) throw bt("Invalid media query");
              var i = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              i.push.apply(i, n), i.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: Bt(i, !0)
                }
              } catch (n) {
                throw bt("Expected media condition after '('", n)
              }
            }
            if (a + 1 === n.length) return {
              mediaPrefix: r,
              mediaType: o,
              mediaCondition: null
            };
            if (!(a + 4 < n.length)) throw bt("Expected media condition after media prefix");
            var s = n[a + 1];
            if ("<ident-token>" !== s.type || "and" !== s.value) throw bt("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: o,
                mediaCondition: Bt(n.slice(a + 2), !1)
              }
            } catch (n) {
              throw bt("Expected media condition after 'and'", n)
            }
          }
        },
        Bt = function n(e, r, o) {
          if (void 0 === o && (o = null), e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media condition");
          for (var t, a = e.length - 1, u = 0, d = 0, i = 0; i < e.length; i++) {
            var s = e[i];
            if ("<(-token>" === s.type ? (d += 1, u = Math.max(u, d)) : "<)-token>" === s.type && (d -= 1), 0 === d) {
              a = i;
              break
            }
          }
          if (0 !== d) throw new Error("Mismatched parens\nInvalid media condition");
          var l = e.slice(0, a + 1);
          if (t = 1 === u ? gt(l) : "<ident-token>" === l[1].type && "not" === l[1].value ? n(l.slice(2, -1), !0, "not") : n(l.slice(1, -1), !0), a === e.length - 1) return {
            operator: o,
            children: [t]
          };
          var f = e[a + 1];
          if ("<ident-token>" !== f.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== o && o !== f.value) throw new Error("'".concat(f.value, "' and '").concat(o, "' must not be at same level\nInvalid media condition"));
          if ("or" === f.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== f.value && "or" !== f.value) throw new Error("Invalid operator: '".concat(f.value, "'\nInvalid media condition"));
          var c = n(e.slice(a + 2), r, f.value);
          return {
            operator: f.value,
            children: [t].concat(c.children)
          }
        },
        gt = function(n) {
          if (n.length < 3 || "<(-token>" !== n[0].type || "<)-token>" !== n[n.length - 1].type) throw new Error("Invalid media feature");
          for (var e = [n[0]], r = 1; r < n.length; r++) {
            if (r < n.length - 2) {
              var o = n[r],
                t = n[r + 1],
                a = n[r + 2];
              if ("<number-token>" === o.type && o.value > 0 && "<delim-token>" === t.type && 47 === t.value && "<number-token>" === a.type && a.value > 0) {
                e.push({
                  type: "<ratio-token>",
                  numerator: o.value,
                  denominator: a.value,
                  wsBefore: o.wsBefore,
                  wsAfter: a.wsAfter
                }), r += 2;
                continue
              }
            }
            e.push(n[r])
          }
          var u = e[1];
          if ("<ident-token>" === u.type && 3 === e.length) return {
            context: "boolean",
            feature: u.value
          };
          if (5 === e.length && "<ident-token>" === e[1].type && "<colon-token>" === e[2].type) {
            var d = e[3];
            if ("<number-token>" === d.type || "<dimension-token>" === d.type || "<ratio-token>" === d.type || "<ident-token>" === d.type) {
              var i = e[1].value,
                s = null,
                l = i.slice(0, 4);
              return "min-" === l ? (s = "min", i = i.slice(4)) : "max-" === l && (s = "max", i = i.slice(4)), d.wsBefore, d.wsAfter, {
                context: "value",
                prefix: s,
                feature: i,
                value: Jo(d, ["wsBefore", "wsAfter"])
              }
            }
          } else if (e.length >= 5) try {
            var f = mt(e);
            return {
              context: "range",
              feature: f.featureName,
              range: f
            }
          } catch (n) {
            throw bt("Invalid media feature", n)
          }
          throw new Error("Invalid media feature")
        },
        mt = function(n) {
          var e, r, o, t;
          if (n.length < 5 || "<(-token>" !== n[0].type || "<)-token>" !== n[n.length - 1].type) throw new Error("Invalid range");
          var a = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            u = "<number-token>" === n[1].type || "<dimension-token>" === n[1].type || "<ratio-token>" === n[1].type || "<ident-token>" === n[1].type && "infinite" === n[1].value;
          if ("<delim-token>" === n[2].type) {
            if (60 === n[2].value) "<delim-token>" !== n[3].type || 61 !== n[3].value || n[3].wsBefore ? a[u ? "leftOp" : "rightOp"] = "<" : a[u ? "leftOp" : "rightOp"] = "<=";
            else if (62 === n[2].value) "<delim-token>" !== n[3].type || 61 !== n[3].value || n[3].wsBefore ? a[u ? "leftOp" : "rightOp"] = ">" : a[u ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== n[2].value) throw new Error("Invalid range");
              a[u ? "leftOp" : "rightOp"] = "="
            }
            if (u) a.leftToken = n[1];
            else {
              if ("<ident-token>" !== n[1].type) throw new Error("Invalid range");
              a.featureName = n[1].value
            }
            var d = 2 + (null !== (r = null === (e = a[u ? "leftOp" : "rightOp"]) || void 0 === e ? void 0 : e.length) && void 0 !== r ? r : 0),
              i = n[d];
            if (u) {
              if ("<ident-token>" !== i.type) throw new Error("Invalid range");
              if (a.featureName = i.value, n.length >= 7) {
                var s = n[d + 1],
                  l = n[d + 2];
                if ("<delim-token>" !== s.type) throw new Error("Invalid range");
                var f = s.value;
                if (60 === f) "<delim-token>" !== l.type || 61 !== l.value || l.wsBefore ? a.rightOp = "<" : a.rightOp = "<=";
                else {
                  if (62 !== f) throw new Error("Invalid range");
                  "<delim-token>" !== l.type || 61 !== l.value || l.wsBefore ? a.rightOp = ">" : a.rightOp = ">="
                }
                var c = n[d + 1 + (null !== (t = null === (o = a.rightOp) || void 0 === o ? void 0 : o.length) && void 0 !== t ? t : 0)];
                a.rightToken = c
              } else if (d + 2 !== n.length) throw new Error("Invalid range")
            } else a.rightToken = i;
            var A = null,
              p = a.leftToken,
              y = a.leftOp,
              b = a.featureName,
              _ = a.rightOp,
              C = a.rightToken,
              v = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var k = p.type;
                "infinite" === (g = p.value) && (v = {
                  type: k,
                  value: g
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, v = Jo(p, ["wsBefore", "wsAfter"]));
            var B = null;
            if (null !== C)
              if ("<ident-token>" === C.type) {
                var g;
                k = C.type, "infinite" === (g = C.value) && (B = {
                  type: k,
                  value: g
                })
              } else "<number-token>" !== C.type && "<dimension-token>" !== C.type && "<ratio-token>" !== C.type || (C.wsBefore, C.wsAfter, B = Jo(C, ["wsBefore", "wsAfter"]));
            if (null !== v && null !== B)
              if ("<" !== y && "<=" !== y || "<" !== _ && "<=" !== _) {
                if (">" !== y && ">=" !== y || ">" !== _ && ">=" !== _) throw new Error("Invalid range");
                A = {
                  leftToken: v,
                  leftOp: y,
                  featureName: b,
                  rightOp: _,
                  rightToken: B
                }
              } else A = {
                leftToken: v,
                leftOp: y,
                featureName: b,
                rightOp: _,
                rightToken: B
              };
            else(null === v && null === y && null !== _ && null !== B || null !== v && null !== y && null === _ && null === B) && (A = {
              leftToken: v,
              leftOp: y,
              featureName: b,
              rightOp: _,
              rightToken: B
            });
            return A
          }
          throw new Error("Invalid range")
        };

      function ht(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function Et(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function wt(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? Et(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = ht(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Et(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function xt(n, e) {
        if (null == n) return {};
        var r, o, t = function(n, e) {
          if (null == n) return {};
          var r, o, t = {},
            a = Object.keys(n);
          for (o = 0; o < a.length; o++) r = a[o], e.indexOf(r) >= 0 || (t[r] = n[r]);
          return t
        }(n, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(n);
          for (o = 0; o < a.length; o++) r = a[o], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r])
        }
        return t
      }

      function jt(n, e) {
        for (var r in n) e(n[r], r)
      }

      function St(n, e) {
        var r = {};
        for (var o in n) - 1 === e.indexOf(o) && (r[o] = n[o]);
        return r
      }
      class Ot {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(n) {
          var e = this.ruleset.get(n);
          return e || (e = {
            query: n,
            rules: [],
            children: new Ot
          }, this.ruleset.set(n, e)), e
        }
        getConditionalRulesetByPath(n) {
          var e = this;
          for (var r of n) {
            var o = e.findOrCreateCondition(r);
            e = o.children
          }
          return e
        }
        addRule(n, e, r) {
          var o = this.getConditionalRulesetByPath(r).findOrCreateCondition(e);
          if (!o) throw new Error("Failed to add conditional rule");
          o.rules.push(n)
        }
        addConditionPrecedence(n, e) {
          for (var r = this.getConditionalRulesetByPath(n), o = 0; o < e.length; o++) {
            var t, a = e[o],
              u = null !== (t = r.precedenceLookup.get(a)) && void 0 !== t ? t : new Set;
            for (var d of e.slice(o + 1)) u.add(d);
            r.precedenceLookup.set(a, u)
          }
        }
        isCompatible(n) {
          for (var [e, r] of this.precedenceLookup.entries())
            for (var o of r) {
              var t;
              if (null !== (t = n.precedenceLookup.get(o)) && void 0 !== t && t.has(e)) return !1
            }
          for (var {
              query: a,
              children: u
            }
            of n.ruleset.values()) {
            var d = this.ruleset.get(a);
            if (d && !d.children.isCompatible(u)) return !1
          }
          return !0
        }
        merge(n) {
          for (var {
              query: e,
              rules: r,
              children: o
            }
            of n.ruleset.values()) {
            var t = this.ruleset.get(e);
            t ? (t.rules.push(...r), t.children.merge(o)) : this.ruleset.set(e, {
              query: e,
              rules: r,
              children: o
            })
          }
          for (var [a, u] of n.precedenceLookup.entries()) {
            var d, i = null !== (d = this.precedenceLookup.get(a)) && void 0 !== d ? d : new Set;
            this.precedenceLookup.set(a, new Set([...i, ...u]))
          }
        }
        mergeIfCompatible(n) {
          return !!this.isCompatible(n) && (this.merge(n), !0)
        }
        getSortedRuleset() {
          var n = this,
            e = [],
            r = function(r) {
              var t = n.ruleset.get(o);
              if (!t) throw new Error("Can't find condition for ".concat(o));
              var a = e.findIndex((n => r.has(n.query)));
              a > -1 ? e.splice(a, 0, t) : e.push(t)
            };
          for (var [o, t] of this.precedenceLookup.entries()) r(t);
          return e
        }
        renderToArray() {
          var n = [];
          for (var {
              query: e,
              rules: r,
              children: o
            }
            of this.getSortedRuleset()) {
            var t = {};
            for (var a of r) t[a.selector] = a.rule;
            Object.assign(t, ...o.renderToArray()), n.push({
              [e]: t
            })
          }
          return n
        }
      }
      var Pt, qt = {
          ":-moz-any-link": !0,
          ":-moz-full-screen": !0,
          ":-moz-placeholder": !0,
          ":-moz-read-only": !0,
          ":-moz-read-write": !0,
          ":-ms-fullscreen": !0,
          ":-ms-input-placeholder": !0,
          ":-webkit-any-link": !0,
          ":-webkit-full-screen": !0,
          "::-moz-color-swatch": !0,
          "::-moz-list-bullet": !0,
          "::-moz-list-number": !0,
          "::-moz-page-sequence": !0,
          "::-moz-page": !0,
          "::-moz-placeholder": !0,
          "::-moz-progress-bar": !0,
          "::-moz-range-progress": !0,
          "::-moz-range-thumb": !0,
          "::-moz-range-track": !0,
          "::-moz-scrolled-page-sequence": !0,
          "::-moz-selection": !0,
          "::-ms-backdrop": !0,
          "::-ms-browse": !0,
          "::-ms-check": !0,
          "::-ms-clear": !0,
          "::-ms-fill-lower": !0,
          "::-ms-fill-upper": !0,
          "::-ms-fill": !0,
          "::-ms-reveal": !0,
          "::-ms-thumb": !0,
          "::-ms-ticks-after": !0,
          "::-ms-ticks-before": !0,
          "::-ms-tooltip": !0,
          "::-ms-track": !0,
          "::-ms-value": !0,
          "::-webkit-backdrop": !0,
          "::-webkit-inner-spin-button": !0,
          "::-webkit-input-placeholder": !0,
          "::-webkit-meter-bar": !0,
          "::-webkit-meter-even-less-good-value": !0,
          "::-webkit-meter-inner-element": !0,
          "::-webkit-meter-optimum-value": !0,
          "::-webkit-meter-suboptimum-value": !0,
          "::-webkit-outer-spin-button": !0,
          "::-webkit-progress-bar": !0,
          "::-webkit-progress-inner-element": !0,
          "::-webkit-progress-inner-value": !0,
          "::-webkit-progress-value": !0,
          "::-webkit-resizer": !0,
          "::-webkit-scrollbar-button": !0,
          "::-webkit-scrollbar-corner": !0,
          "::-webkit-scrollbar-thumb": !0,
          "::-webkit-scrollbar-track-piece": !0,
          "::-webkit-scrollbar-track": !0,
          "::-webkit-scrollbar": !0,
          "::-webkit-search-cancel-button": !0,
          "::-webkit-search-results-button": !0,
          "::-webkit-slider-runnable-track": !0,
          "::-webkit-slider-thumb": !0,
          "::after": !0,
          "::backdrop": !0,
          "::before": !0,
          "::cue": !0,
          "::file-selector-button": !0,
          "::first-letter": !0,
          "::first-line": !0,
          "::grammar-error": !0,
          "::marker": !0,
          "::placeholder": !0,
          "::selection": !0,
          "::spelling-error": !0,
          "::target-text": !0,
          "::view-transition-group": !0,
          "::view-transition-image-pair": !0,
          "::view-transition-new": !0,
          "::view-transition-old": !0,
          "::view-transition": !0,
          ":active": !0,
          ":after": !0,
          ":any-link": !0,
          ":before": !0,
          ":blank": !0,
          ":checked": !0,
          ":default": !0,
          ":defined": !0,
          ":disabled": !0,
          ":empty": !0,
          ":enabled": !0,
          ":first-child": !0,
          ":first-letter": !0,
          ":first-line": !0,
          ":first-of-type": !0,
          ":first": !0,
          ":focus-visible": !0,
          ":focus-within": !0,
          ":focus": !0,
          ":fullscreen": !0,
          ":hover": !0,
          ":in-range": !0,
          ":indeterminate": !0,
          ":invalid": !0,
          ":last-child": !0,
          ":last-of-type": !0,
          ":left": !0,
          ":link": !0,
          ":only-child": !0,
          ":only-of-type": !0,
          ":optional": !0,
          ":out-of-range": !0,
          ":placeholder-shown": !0,
          ":read-only": !0,
          ":read-write": !0,
          ":required": !0,
          ":right": !0,
          ":root": !0,
          ":scope": !0,
          ":target": !0,
          ":valid": !0,
          ":visited": !0
        },
        zt = Object.keys(qt),
        Dt = qt,
        Lt = (n, e) => new Error(Zo(Pt || (Pt = Lo(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), n, e)),
        Tt = n => {
          if ("@media " === n) throw Lt(n, "Query is empty");
          try {
            (function(n) {
              for (var e = n.length - 1; e >= 0; e--) n[e] = pt(n[e])
            })(_t(n))
          } catch (e) {
            throw Lt(n, e.message)
          }
        },
        Nt = ["vars"],
        Mt = ["content"],
        Ft = "__DECLARATION",
        Rt = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        };

      function It(n, e, r, o) {
        var t = n.slice(0, e),
          a = n.slice(r);
        return "".concat(t).concat(o).concat(a)
      }
      var Gt = [...zt, "@layer", "@media", "@supports", "@container", "selectors"];
      class Vt {
        constructor(n, e) {
          this.rules = [], this.conditionalRulesets = [new Ot], this.fontFaceRules = [], this.keyframesRules = [], this.localClassNamesMap = new Map(n.map((n => [n, n]))), this.localClassNamesSearch = new Oo(n), this.layers = new Map, this.composedClassLists = e.map((n => {
            var {
              identifier: e,
              classList: r
            } = n;
            return {
              identifier: e,
              regex: RegExp("(".concat(r, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(n) {
          if ("fontFace" !== n.type) {
            if ("keyframes" === n.type) return n.rule = Object.fromEntries(Object.entries(n.rule).map((n => {
              var [e, r] = n;
              return [e, this.transformProperties(r)]
            }))), void this.keyframesRules.push(n);
            if (this.currConditionalRuleset = new Ot, "layer" === n.type) {
              var e = "@layer ".concat(n.name);
              this.addLayer([e])
            } else {
              var r = St(n.rule, Gt);
              this.addRule({
                selector: n.selector,
                rule: r
              }), this.transformLayer(n, n.rule["@layer"]), this.transformMedia(n, n.rule["@media"]), this.transformSupports(n, n.rule["@supports"]), this.transformContainer(n, n.rule["@container"]), this.transformSimplePseudos(n, n.rule), this.transformSelectors(n, n.rule)
            }
            this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
          } else this.fontFaceRules.push(n.rule)
        }
        addConditionalRule(n, e) {
          var r = this.transformVars(this.transformProperties(n.rule)),
            o = this.transformSelector(n.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var t = e[e.length - 1],
            a = e.slice(0, e.length - 1);
          this.currConditionalRuleset.addRule({
            selector: o,
            rule: r
          }, t, a)
        }
        addRule(n) {
          var e = this.transformVars(this.transformProperties(n.rule)),
            r = this.transformSelector(n.selector);
          this.rules.push({
            selector: r,
            rule: e
          })
        }
        addLayer(n) {
          var e = n.join(" - ");
          this.layers.set(e, n)
        }
        transformProperties(n) {
          return this.transformContent(this.pixelifyProperties(n))
        }
        pixelifyProperties(n) {
          return jt(n, ((e, r) => {
            "number" != typeof e || 0 === e || Rt[r] || (n[r] = "".concat(e, "px"))
          })), n
        }
        transformVars(n) {
          var {
            vars: e
          } = n, r = xt(n, Nt);
          return e ? wt(wt({}, function(n, e) {
            var r, o, t, a = {};
            for (var u in n) a[(n[u], r = u, o = void 0, t = void 0, (t = (o = r).match(/^var\((.*)\)$/)) ? t[1] : o)] = n[u];
            return a
          }(e)), r) : r
        }
        transformContent(n) {
          var {
            content: e
          } = n, r = xt(n, Mt);
          return void 0 === e ? r : wt({
            content: (Array.isArray(e) ? e : [e]).map((n => n && (n.includes('"') || n.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(n)) ? n : '"'.concat(n, '"')))
          }, r)
        }
        transformClassname(n) {
          return ".".concat(So()(n, {
            isIdentifier: !0
          }))
        }
        transformSelector(n) {
          var e = n,
            r = function(n) {
              e = e.replace(t, (() => (function() {
                (() => {
                  if (zo.length < 1) throw new Error("No adapter configured");
                  return zo[zo.length - 1]
                })().markCompositionUsed(...arguments)
              }(n), n)))
            };
          for (var {
              identifier: o,
              regex: t
            }
            of this.composedClassLists) r(o);
          if (this.localClassNamesMap.has(e)) return this.transformClassname(e);
          for (var a = this.localClassNamesSearch.search(e), u = e.length, d = a.length - 1; d >= 0; d--) {
            var [i, [s]] = a[d], l = i - s.length + 1;
            l >= u || (u = l, "." !== e[l - 1] && (e = It(e, l, i + 1, this.transformClassname(s))))
          }
          return e
        }
        transformSelectors(n, e, r) {
          jt(e.selectors, ((e, o) => {
            if ("local" !== n.type) throw new Error("Selectors are not allowed within ".concat("global" === n.type ? '"globalStyle"' : '"selectors"'));
            var t = this.transformSelector(o.replace(RegExp("&", "g"), n.selector));
            ((n, e) => {
              var r, o = () => {
                var r = new RegExp(".".concat(So()(e, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return n.replace(r, "&")
              };
              try {
                r = Ho(n)
              } catch (n) {
                throw new Error("Invalid selector: ".concat(o()))
              }
              r.forEach((n => {
                try {
                  for (var r = n.length - 1; r >= -1; r--) {
                    if (!n[r]) throw new Error;
                    var t = n[r];
                    if ("child" === t.type || "parent" === t.type || "sibling" === t.type || "adjacent" === t.type || "descendant" === t.type) throw new Error;
                    if ("attribute" === t.type && "class" === t.name && t.value === e) return
                  }
                } catch (n) {
                  throw new Error(Zo(et || (et = Lo(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), o(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(t, n.selector);
            var a = {
              selector: t,
              rule: St(e, Gt)
            };
            r ? this.addConditionalRule(a, r) : this.addRule(a);
            var u = {
              type: "selector",
              selector: t,
              rule: e
            };
            this.transformLayer(u, e["@layer"], r), this.transformSupports(u, e["@supports"], r), this.transformMedia(u, e["@media"], r)
          }))
        }
        transformMedia(n, e) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (e)
            for (var [t, a] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(e).map((n => "@media ".concat(n)))), Object.entries(e))) {
              var u = "@media ".concat(t);
              Tt(u);
              var d = [...o, u];
              this.addConditionalRule({
                selector: n.selector,
                rule: St(a, Gt)
              }, d), "local" === n.type && (this.transformSimplePseudos(n, a, d), this.transformSelectors(n, a, d)), this.transformLayer(n, a["@layer"], d), this.transformSupports(n, a["@supports"], d), this.transformContainer(n, a["@container"], d)
            }
        }
        transformContainer(n, e) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          e && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(e).map((n => "@container ".concat(n)))), jt(e, ((e, r) => {
            var t = "@container ".concat(r),
              a = [...o, t];
            this.addConditionalRule({
              selector: n.selector,
              rule: St(e, Gt)
            }, a), "local" === n.type && (this.transformSimplePseudos(n, e, a), this.transformSelectors(n, e, a)), this.transformLayer(n, e["@layer"], a), this.transformSupports(n, e["@supports"], a), this.transformMedia(n, e["@media"], a)
          })))
        }
        transformLayer(n, e) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          e && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(e).map((n => "@layer ".concat(n)))), jt(e, ((e, r) => {
            var t = [...o, "@layer ".concat(r)];
            this.addLayer(t), this.addConditionalRule({
              selector: n.selector,
              rule: St(e, Gt)
            }, t), "local" === n.type && (this.transformSimplePseudos(n, e, t), this.transformSelectors(n, e, t)), this.transformMedia(n, e["@media"], t), this.transformSupports(n, e["@supports"], t), this.transformContainer(n, e["@container"], t)
          })))
        }
        transformSupports(n, e) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          e && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(e).map((n => "@supports ".concat(n)))), jt(e, ((e, r) => {
            var t = [...o, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: n.selector,
              rule: St(e, Gt)
            }, t), "local" === n.type && (this.transformSimplePseudos(n, e, t), this.transformSelectors(n, e, t)), this.transformLayer(n, e["@layer"], t), this.transformMedia(n, e["@media"], t), this.transformContainer(n, e["@container"], t)
          })))
        }
        transformSimplePseudos(n, e, r) {
          for (var o of Object.keys(e))
            if (Dt[o]) {
              if ("local" !== n.type) throw new Error("Simple pseudos are not valid in ".concat("global" === n.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(n.selector).concat(o),
                rule: e[o]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(n.selector).concat(o),
                rule: e[o]
              })
            }
        }
        toCss() {
          var n = [];
          for (var e of this.fontFaceRules) n.push(Kt({
            "@font-face": e
          }));
          for (var r of this.keyframesRules) n.push(Kt({
            ["@keyframes ".concat(r.name)]: r.rule
          }));
          for (var o of this.layers.values()) {
            var [t, ...a] = o.reverse(), u = {
              [t]: Ft
            };
            for (var d of a) u = {
              [d]: u
            };
            n.push(Kt(u))
          }
          for (var i of this.rules) n.push(Kt({
            [i.selector]: i.rule
          }));
          for (var s of this.conditionalRulesets)
            for (var l of s.renderToArray()) n.push(Kt(l));
          return n.filter(Boolean)
        }
      }

      function Kt(n) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          o = function(o) {
            var t, a = n[o];
            a && Array.isArray(a) ? r.push(...a.map((n => Kt({
              [o]: n
            }, e)))) : a && "object" == typeof a ? 0 === Object.keys(a).length || r.push("".concat(e).concat(o, " {\n").concat(Kt(a, e + "  "), "\n").concat(e, "}")) : a === Ft ? r.push("".concat(e).concat(o, ";")) : r.push("".concat(e).concat(o.startsWith("--") ? o : (t = o, t.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(a, ";"))
          };
        for (var t of Object.keys(n)) o(t);
        return r.join("\n")
      }
      r(7393);
      var Ht = new Set,
        Wt = [],
        $t = [],
        Ut = {
          appendCss: n => {
            $t.push(n)
          },
          registerClassName: n => {
            Ht.add(n)
          },
          registerComposition: n => {
            Wt.push(n)
          },
          markCompositionUsed: () => {},
          onEndFileScope: n => {
            var e = function(n) {
              var {
                localClassNames: e,
                cssObjs: r,
                composedClassLists: o
              } = n, t = new Vt(e, o);
              for (var a of r) t.processCssObj(a);
              return t.toCss()
            }({
              localClassNames: Array.from(Ht),
              composedClassLists: Wt,
              cssObjs: $t
            }).join("\n");
            (n => {
              var {
                fileScope: e,
                css: r
              } = n, o = e.packageName ? [e.packageName, e.filePath].join("/") : e.filePath, t = xo[o];
              if (!t) {
                var a = document.createElement("style");
                e.packageName && a.setAttribute("data-package", e.packageName), a.setAttribute("data-file", e.filePath), a.setAttribute("type", "text/css"), t = xo[o] = a, document.head.appendChild(a)
              }
              t.innerHTML = r
            })({
              fileScope: n,
              css: e
            }), $t = []
          },
          getIdentOption: () => "short"
        };
      Do || (n => {
        if (!n) throw new Error('No adapter provided when calling "setAdapter"');
        Do = !0, zo.push(n)
      })(Ut);
      var Yt = r(31611),
        Xt = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Xt.setAttributes = b(), Xt.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, Xt.domAPI = p(), Xt.insertStyleElement = C(), c()(Yt.A, Xt), Yt.A && Yt.A.locals && Yt.A.locals;
      var Zt = r(19856),
        Qt = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Qt.setAttributes = b(), Qt.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, Qt.domAPI = p(), Qt.insertStyleElement = C(), c()(Zt.A, Qt), Zt.A && Zt.A.locals && Zt.A.locals;
      var Jt = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        na = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        ea = "foundry_nu8bkpar",
        ra = "foundry_nu8bkpat",
        oa = "foundry_nu8bkpaq",
        ta = "foundry_nu8bkpas",
        aa = "--foundry_nu8bkp0",
        ua = "foundry_nu8bkp1";
      const da = (0, d.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: na,
          platformScaleBreakpoints: Jt,
          locale: "en-US"
        }),
        ia = (n, e) => "dark" === n ? "more" === e ? ra : ea : "more" === e ? ta : oa;
      const sa = () => u.X3 ? null : document.body;
      (0, d.forwardRef)((({
        children: n,
        className: e,
        container: r = sa(),
        asChild: o,
        colorScheme: t,
        defaultColorScheme: s,
        contrastMode: l,
        defaultContrastMode: f,
        platformScaleBreakpoints: c,
        platformScaleRatios: A,
        defaultPlatformScale: p,
        platformScale: y,
        locale: b = "en-US"
      }, _) => {
        const C = (0, d.useRef)(null),
          v = Le(C, _),
          k = (0, d.useRef)(r),
          {
            ratio: B,
            scale: g
          } = function(n) {
            const e = (0, d.useMemo)((() => ({
                ...na,
                ...n.platformScaleRatios
              })), [n.platformScaleRatios]),
              r = (0, d.useMemo)((() => ({
                ...Jt,
                ...n.platformScaleBreakpoints
              })), [n.platformScaleBreakpoints]),
              [o, t] = (0, d.useState)(n.platformScale || n.defaultPlatformScale),
              a = (0, d.useRef)([]),
              i = () => {
                if (!u.X3) {
                  for (const {
                      handler: n,
                      matchMedia: e
                    }
                    of a.current) e.removeEventListener("change", n);
                  a.current = []
                }
              };
            return (0, d.useEffect)((() => (n.platformScale ? t(n.platformScale) : (() => {
              if (!u.X3) {
                i();
                for (const n in r) {
                  const e = window.matchMedia(r[n]),
                    o = e => {
                      e.matches && t(n)
                    };
                  e.addEventListener("change", o), e.matches && t(n), a.current.push({
                    handler: o,
                    matchMedia: e
                  })
                }
              }
            })(), i)), [r, n.platformScale]), {
              scale: o,
              ratio: e[o]
            }
          }({
            platformScaleBreakpoints: c,
            platformScaleRatios: A,
            defaultPlatformScale: p,
            platformScale: y
          }),
          {
            appearanceClass: m,
            otherAppearanceClasses: h,
            providerColor: E,
            providerContrast: w
          } = function({
            colorScheme: n,
            defaultColorScheme: e = "dark",
            contrastMode: r,
            defaultContrastMode: o = "normal"
          }) {
            const t = ze("(prefers-color-scheme: light)"),
              a = ze("(prefers-color-scheme: dark)"),
              u = ze("(prefers-contrast: more)"),
              i = "system" !== n && n || t && "light" || a && "dark" || e,
              s = r || u && "more" || o,
              l = (0, d.useMemo)((() => ia(i, s)), [i, s]),
              f = (0, d.useMemo)((() => ((n, e) => {
                const r = ia(n, e);
                return [oa, ea, ta, ra].filter((n => n !== r))
              })(i, s)), [i, s]);
            return {
              appearanceClass: l,
              otherAppearanceClasses: f,
              providerColor: i,
              providerContrast: s
            }
          }({
            colorScheme: t,
            defaultColorScheme: s,
            contrastMode: l,
            defaultContrastMode: f
          });
        return ((n, e, r, o, t) => {
          const a = De(t),
            u = De(n.current);
          (0, d.useEffect)((() => {
            n.current?.classList.contains(ua) || n.current?.classList.add(ua), n.current?.classList.add(r), n.current?.classList.remove(...o), a && t && n.current?.classList.contains(a) ? n.current?.classList.replace(a, t) : a && !t && n.current?.classList.contains(a) ? n.current?.classList.remove(a) : t && n.current?.classList.add(t)
          }), [r, t]), (0, d.useEffect)((() => {
            n.current?.style.setProperty(aa, e.toString())
          }), [e]), (0, d.useEffect)((() => {
            u?.classList.remove(ua), u?.classList.remove(r), u?.style.removeProperty(aa), t && u?.classList.remove(t)
          }), [u])
        })(o ? C : k, B, m, h, e), (0, a.jsx)(da.Provider, {
          value: {
            locale: b,
            defaultColorScheme: s,
            colorScheme: E,
            defaultContrastMode: f,
            contrastMode: w,
            defaultPlatformScale: p,
            platformScale: g,
            platformScaleRatios: A,
            platformScaleBreakpoints: c
          },
          children: o ? (0, a.jsx)(i.Slot, {
            ref: v,
            children: n
          }) : n
        })
      }));
      var la = wa(),
        fa = n => ga(n, la),
        ca = wa();
      fa.write = n => ga(n, ca);
      var Aa = wa();
      fa.onStart = n => ga(n, Aa);
      var pa = wa();
      fa.onFrame = n => ga(n, pa);
      var ya = wa();
      fa.onFinish = n => ga(n, ya);
      var ba = [];
      fa.setTimeout = (n, e) => {
        const r = fa.now() + e,
          o = () => {
            const n = ba.findIndex((n => n.cancel == o));
            ~n && ba.splice(n, 1), ka -= ~n ? 1 : 0
          },
          t = {
            time: r,
            handler: n,
            cancel: o
          };
        return ba.splice(_a(r), 0, t), ka += 1, ma(), t
      };
      var _a = n => ~(~ba.findIndex((e => e.time > n)) || ~ba.length);
      fa.cancel = n => {
        Aa.delete(n), pa.delete(n), ya.delete(n), la.delete(n), ca.delete(n)
      }, fa.sync = n => {
        Ba = !0, fa.batchedUpdates(n), Ba = !1
      }, fa.throttle = n => {
        let e;

        function r() {
          try {
            n(...e)
          } finally {
            e = null
          }
        }

        function o(...n) {
          e = n, fa.onStart(r)
        }
        return o.handler = n, o.cancel = () => {
          Aa.delete(r), e = null
        }, o
      };
      var Ca = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      fa.use = n => Ca = n, fa.now = "undefined" != typeof performance ? () => performance.now() : Date.now, fa.batchedUpdates = n => n(), fa.catch = console.error, fa.frameLoop = "always", fa.advance = () => {
        "demand" !== fa.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Ea()
      };
      var va = -1,
        ka = 0,
        Ba = !1;

      function ga(n, e) {
        Ba ? (e.delete(n), n(0)) : (e.add(n), ma())
      }

      function ma() {
        va < 0 && (va = 0, "demand" !== fa.frameLoop && Ca(ha))
      }

      function ha() {
        ~va && (Ca(ha), fa.batchedUpdates(Ea))
      }

      function Ea() {
        const n = va;
        va = fa.now();
        const e = _a(va);
        e && (xa(ba.splice(0, e), (n => n.handler())), ka -= e), ka ? (Aa.flush(), la.flush(n ? Math.min(64, va - n) : 16.667), pa.flush(), ca.flush(), ya.flush()) : va = -1
      }

      function wa() {
        let n = new Set,
          e = n;
        return {
          add(r) {
            ka += e != n || n.has(r) ? 0 : 1, n.add(r)
          },
          delete: r => (ka -= e == n && n.has(r) ? 1 : 0, n.delete(r)),
          flush(r) {
            e.size && (n = new Set, ka -= e.size, xa(e, (e => e(r) && n.add(e))), ka += n.size, e = n)
          }
        }
      }

      function xa(n, e) {
        n.forEach((n => {
          try {
            e(n)
          } catch (n) {
            fa.catch(n)
          }
        }))
      }
      var ja = Object.defineProperty,
        Sa = {};

      function Oa() {}((n, e) => {
        for (var r in e) ja(n, r, {
          get: e[r],
          enumerable: !0
        })
      })(Sa, {
        assign: () => Ka,
        colors: () => Ia,
        createStringInterpolator: () => Na,
        skipAnimation: () => Ga,
        to: () => Ma,
        willAdvance: () => Va
      });
      var Pa = {
        arr: Array.isArray,
        obj: n => !!n && "Object" === n.constructor.name,
        fun: n => "function" == typeof n,
        str: n => "string" == typeof n,
        num: n => "number" == typeof n,
        und: n => void 0 === n
      };

      function qa(n, e) {
        if (Pa.arr(n)) {
          if (!Pa.arr(e) || n.length !== e.length) return !1;
          for (let r = 0; r < n.length; r++)
            if (n[r] !== e[r]) return !1;
          return !0
        }
        return n === e
      }
      var za = (n, e) => n.forEach(e);

      function Da(n, e, r) {
        if (Pa.arr(n))
          for (let o = 0; o < n.length; o++) e.call(r, n[o], `${o}`);
        else
          for (const o in n) n.hasOwnProperty(o) && e.call(r, n[o], o)
      }
      var La = n => Pa.und(n) ? [] : Pa.arr(n) ? n : [n];

      function Ta(n, e) {
        if (n.size) {
          const r = Array.from(n);
          n.clear(), za(r, e)
        }
      }
      var Na, Ma, Fa = (n, ...e) => Ta(n, (n => n(...e))),
        Ra = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Ia = null,
        Ga = !1,
        Va = Oa,
        Ka = n => {
          n.to && (Ma = n.to), n.now && (fa.now = n.now), void 0 !== n.colors && (Ia = n.colors), null != n.skipAnimation && (Ga = n.skipAnimation), n.createStringInterpolator && (Na = n.createStringInterpolator), n.requestAnimationFrame && fa.use(n.requestAnimationFrame), n.batchedUpdates && (fa.batchedUpdates = n.batchedUpdates), n.willAdvance && (Va = n.willAdvance), n.frameLoop && (fa.frameLoop = n.frameLoop)
        },
        Ha = new Set,
        Wa = [],
        $a = [],
        Ua = 0,
        Ya = {
          get idle() {
            return !Ha.size && !Wa.length
          },
          start(n) {
            Ua > n.priority ? (Ha.add(n), fa.onStart(Xa)) : (Za(n), fa(Ja))
          },
          advance: Ja,
          sort(n) {
            if (Ua) fa.onFrame((() => Ya.sort(n)));
            else {
              const e = Wa.indexOf(n);
              ~e && (Wa.splice(e, 1), Qa(n))
            }
          },
          clear() {
            Wa = [], Ha.clear()
          }
        };

      function Xa() {
        Ha.forEach(Za), Ha.clear(), fa(Ja)
      }

      function Za(n) {
        Wa.includes(n) || Qa(n)
      }

      function Qa(n) {
        Wa.splice(function(e, r) {
          const o = e.findIndex((e => e.priority > n.priority));
          return o < 0 ? e.length : o
        }(Wa), 0, n)
      }

      function Ja(n) {
        const e = $a;
        for (let r = 0; r < Wa.length; r++) {
          const o = Wa[r];
          Ua = o.priority, o.idle || (Va(o), o.advance(n), o.idle || e.push(o))
        }
        return Ua = 0, ($a = Wa).length = 0, (Wa = e).length > 0
      }
      var nu = {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199
        },
        eu = "[-+]?\\d*\\.?\\d+",
        ru = eu + "%";

      function ou(...n) {
        return "\\(\\s*(" + n.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var tu = new RegExp("rgb" + ou(eu, eu, eu)),
        au = new RegExp("rgba" + ou(eu, eu, eu, eu)),
        uu = new RegExp("hsl" + ou(eu, ru, ru)),
        du = new RegExp("hsla" + ou(eu, ru, ru, eu)),
        iu = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        su = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        lu = /^#([0-9a-fA-F]{6})$/,
        fu = /^#([0-9a-fA-F]{8})$/;

      function cu(n, e, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? n + 6 * (e - n) * r : r < .5 ? e : r < 2 / 3 ? n + (e - n) * (2 / 3 - r) * 6 : n
      }

      function Au(n, e, r) {
        const o = r < .5 ? r * (1 + e) : r + e - r * e,
          t = 2 * r - o,
          a = cu(t, o, n + 1 / 3),
          u = cu(t, o, n),
          d = cu(t, o, n - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * u) << 16 | Math.round(255 * d) << 8
      }

      function pu(n) {
        const e = parseInt(n, 10);
        return e < 0 ? 0 : e > 255 ? 255 : e
      }

      function yu(n) {
        return (parseFloat(n) % 360 + 360) % 360 / 360
      }

      function bu(n) {
        const e = parseFloat(n);
        return e < 0 ? 0 : e > 1 ? 255 : Math.round(255 * e)
      }

      function _u(n) {
        const e = parseFloat(n);
        return e < 0 ? 0 : e > 100 ? 1 : e / 100
      }

      function Cu(n) {
        let e = function(n) {
          let e;
          return "number" == typeof n ? n >>> 0 === n && n >= 0 && n <= 4294967295 ? n : null : (e = lu.exec(n)) ? parseInt(e[1] + "ff", 16) >>> 0 : Ia && void 0 !== Ia[n] ? Ia[n] : (e = tu.exec(n)) ? (pu(e[1]) << 24 | pu(e[2]) << 16 | pu(e[3]) << 8 | 255) >>> 0 : (e = au.exec(n)) ? (pu(e[1]) << 24 | pu(e[2]) << 16 | pu(e[3]) << 8 | bu(e[4])) >>> 0 : (e = iu.exec(n)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0 : (e = fu.exec(n)) ? parseInt(e[1], 16) >>> 0 : (e = su.exec(n)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0 : (e = uu.exec(n)) ? (255 | Au(yu(e[1]), _u(e[2]), _u(e[3]))) >>> 0 : (e = du.exec(n)) ? (Au(yu(e[1]), _u(e[2]), _u(e[3])) | bu(e[4])) >>> 0 : null
        }(n);
        return null === e ? n : (e = e || 0, `rgba(${(4278190080&e)>>>24}, ${(16711680&e)>>>16}, ${(65280&e)>>>8}, ${(255&e)/255})`)
      }
      var vu = (n, e, r) => {
          if (Pa.fun(n)) return n;
          if (Pa.arr(n)) return vu({
            range: n,
            output: e,
            extrapolate: r
          });
          if (Pa.str(n.output[0])) return Na(n);
          const o = n,
            t = o.output,
            a = o.range || [0, 1],
            u = o.extrapolateLeft || o.extrapolate || "extend",
            d = o.extrapolateRight || o.extrapolate || "extend",
            i = o.easing || (n => n);
          return n => {
            const e = function(n, e) {
              for (var r = 1; r < e.length - 1 && !(e[r] >= n); ++r);
              return r - 1
            }(n, a);
            return function(n, e, r, o, t, a, u, d, i) {
              let s = i ? i(n) : n;
              if (s < e) {
                if ("identity" === u) return s;
                "clamp" === u && (s = e)
              }
              if (s > r) {
                if ("identity" === d) return s;
                "clamp" === d && (s = r)
              }
              return o === t ? o : e === r ? n <= e ? o : t : (e === -1 / 0 ? s = -s : r === 1 / 0 ? s -= e : s = (s - e) / (r - e), s = a(s), o === -1 / 0 ? s = -s : t === 1 / 0 ? s += o : s = s * (t - o) + o, s)
            }(n, a[e], a[e + 1], t[e], t[e + 1], i, u, d, o.map)
          }
        },
        ku = 1.70158,
        Bu = 1.525 * ku,
        gu = ku + 1,
        mu = 2 * Math.PI / 3,
        hu = 2 * Math.PI / 4.5,
        Eu = n => {
          const e = 7.5625,
            r = 2.75;
          return n < 1 / r ? e * n * n : n < 2 / r ? e * (n -= 1.5 / r) * n + .75 : n < 2.5 / r ? e * (n -= 2.25 / r) * n + .9375 : e * (n -= 2.625 / r) * n + .984375
        },
        wu = {
          linear: n => n,
          easeInQuad: n => n * n,
          easeOutQuad: n => 1 - (1 - n) * (1 - n),
          easeInOutQuad: n => n < .5 ? 2 * n * n : 1 - Math.pow(-2 * n + 2, 2) / 2,
          easeInCubic: n => n * n * n,
          easeOutCubic: n => 1 - Math.pow(1 - n, 3),
          easeInOutCubic: n => n < .5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2,
          easeInQuart: n => n * n * n * n,
          easeOutQuart: n => 1 - Math.pow(1 - n, 4),
          easeInOutQuart: n => n < .5 ? 8 * n * n * n * n : 1 - Math.pow(-2 * n + 2, 4) / 2,
          easeInQuint: n => n * n * n * n * n,
          easeOutQuint: n => 1 - Math.pow(1 - n, 5),
          easeInOutQuint: n => n < .5 ? 16 * n * n * n * n * n : 1 - Math.pow(-2 * n + 2, 5) / 2,
          easeInSine: n => 1 - Math.cos(n * Math.PI / 2),
          easeOutSine: n => Math.sin(n * Math.PI / 2),
          easeInOutSine: n => -(Math.cos(Math.PI * n) - 1) / 2,
          easeInExpo: n => 0 === n ? 0 : Math.pow(2, 10 * n - 10),
          easeOutExpo: n => 1 === n ? 1 : 1 - Math.pow(2, -10 * n),
          easeInOutExpo: n => 0 === n ? 0 : 1 === n ? 1 : n < .5 ? Math.pow(2, 20 * n - 10) / 2 : (2 - Math.pow(2, -20 * n + 10)) / 2,
          easeInCirc: n => 1 - Math.sqrt(1 - Math.pow(n, 2)),
          easeOutCirc: n => Math.sqrt(1 - Math.pow(n - 1, 2)),
          easeInOutCirc: n => n < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * n, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * n + 2, 2)) + 1) / 2,
          easeInBack: n => gu * n * n * n - ku * n * n,
          easeOutBack: n => 1 + gu * Math.pow(n - 1, 3) + ku * Math.pow(n - 1, 2),
          easeInOutBack: n => n < .5 ? Math.pow(2 * n, 2) * (7.189819 * n - Bu) / 2 : (Math.pow(2 * n - 2, 2) * ((Bu + 1) * (2 * n - 2) + Bu) + 2) / 2,
          easeInElastic: n => 0 === n ? 0 : 1 === n ? 1 : -Math.pow(2, 10 * n - 10) * Math.sin((10 * n - 10.75) * mu),
          easeOutElastic: n => 0 === n ? 0 : 1 === n ? 1 : Math.pow(2, -10 * n) * Math.sin((10 * n - .75) * mu) + 1,
          easeInOutElastic: n => 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -Math.pow(2, 20 * n - 10) * Math.sin((20 * n - 11.125) * hu) / 2 : Math.pow(2, -20 * n + 10) * Math.sin((20 * n - 11.125) * hu) / 2 + 1,
          easeInBounce: n => 1 - Eu(1 - n),
          easeOutBounce: Eu,
          easeInOutBounce: n => n < .5 ? (1 - Eu(1 - 2 * n)) / 2 : (1 + Eu(2 * n - 1)) / 2,
          steps: (n, e = "end") => r => {
            const o = (r = "end" === e ? Math.min(r, .999) : Math.max(r, .001)) * n;
            return 0, 1, t = ("end" === e ? Math.floor(o) : Math.ceil(o)) / n, Math.min(Math.max(t, 0), 1);
            var t
          }
        },
        xu = Symbol.for("FluidValue.get"),
        ju = Symbol.for("FluidValue.observers"),
        Su = n => Boolean(n && n[xu]),
        Ou = n => n && n[xu] ? n[xu]() : n,
        Pu = n => n[ju] || null;

      function qu(n, e) {
        const r = n[ju];
        r && r.forEach((n => {
          ! function(n, e) {
            n.eventObserved ? n.eventObserved(e) : n(e)
          }(n, e)
        }))
      }
      var zu = class {
          constructor(n) {
            if (!n && !(n = this.get)) throw Error("Unknown getter");
            Du(this, n)
          }
        },
        Du = (n, e) => Mu(n, xu, e);

      function Lu(n, e) {
        if (n[xu]) {
          let r = n[ju];
          r || Mu(n, ju, r = new Set), r.has(e) || (r.add(e), n.observerAdded && n.observerAdded(r.size, e))
        }
        return e
      }

      function Tu(n, e) {
        const r = n[ju];
        if (r && r.has(e)) {
          const o = r.size - 1;
          o ? r.delete(e) : n[ju] = null, n.observerRemoved && n.observerRemoved(o, e)
        }
      }
      var Nu, Mu = (n, e, r) => Object.defineProperty(n, e, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Fu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ru = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Iu = new RegExp(`(${Fu.source})(%|[a-z]+)`, "i"),
        Gu = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Vu = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Ku = n => {
          const [e, r] = Hu(n);
          if (!e || Ra()) return n;
          const o = window.getComputedStyle(document.documentElement).getPropertyValue(e);
          if (o) return o.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || n
          }
          return r && Vu.test(r) ? Ku(r) : r || n
        },
        Hu = n => {
          const e = Vu.exec(n);
          if (!e) return [, ];
          const [, r, o] = e;
          return [r, o]
        },
        Wu = (n, e, r, o, t) => `rgba(${Math.round(e)}, ${Math.round(r)}, ${Math.round(o)}, ${t})`,
        $u = n => {
          Nu || (Nu = Ia ? new RegExp(`(${Object.keys(Ia).join("|")})(?!\\w)`, "g") : /^\b$/);
          const e = n.output.map((n => Ou(n).replace(Vu, Ku).replace(Ru, Cu).replace(Nu, Cu))),
            r = e.map((n => n.match(Fu).map(Number))),
            o = r[0].map(((n, e) => r.map((n => {
              if (!(e in n)) throw Error('The arity of each "output" value must be equal');
              return n[e]
            })))).map((e => vu({
              ...n,
              output: e
            })));
          return n => {
            const r = !Iu.test(e[0]) && e.find((n => Iu.test(n)))?.replace(Fu, "");
            let t = 0;
            return e[0].replace(Fu, (() => `${o[t++](n)}${r||""}`)).replace(Gu, Wu)
          }
        },
        Uu = "react-spring: ",
        Yu = n => {
          const e = n;
          let r = !1;
          if ("function" != typeof e) throw new TypeError(`${Uu}once requires a function parameter`);
          return (...n) => {
            r || (e(...n), r = !0)
          }
        },
        Xu = Yu(console.warn),
        Zu = Yu(console.warn);

      function Qu(n) {
        return Pa.str(n) && ("#" == n[0] || /\d/.test(n) || !Ra() && Vu.test(n) || n in (Ia || {}))
      }
      var Ju = Ra() ? d.useEffect : d.useLayoutEffect,
        nd = () => {
          const n = (0, d.useRef)(!1);
          return Ju((() => (n.current = !0, () => {
            n.current = !1
          })), []), n
        };

      function ed() {
        const n = (0, d.useState)()[1],
          e = nd();
        return () => {
          e.current && n(Math.random())
        }
      }
      var rd = n => (0, d.useEffect)(n, od),
        od = [];

      function td(n) {
        const e = (0, d.useRef)();
        return (0, d.useEffect)((() => {
          e.current = n
        })), e.current
      }
      var ad = Symbol.for("Animated:node"),
        ud = n => n && n[ad],
        dd = (n, e) => {
          return r = n, o = ad, t = e, Object.defineProperty(r, o, {
            value: t,
            writable: !0,
            configurable: !0
          });
          var r, o, t
        },
        id = n => n && n[ad] && n[ad].getPayload(),
        sd = class {
          constructor() {
            dd(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        ld = class extends sd {
          constructor(n) {
            super(), this._value = n, this.done = !0, this.durationProgress = 0, Pa.num(this._value) && (this.lastPosition = this._value)
          }
          static create(n) {
            return new ld(n)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(n, e) {
            return Pa.num(n) && (this.lastPosition = n, e && (n = Math.round(n / e) * e, this.done && (this.lastPosition = n))), this._value !== n && (this._value = n, !0)
          }
          reset() {
            const {
              done: n
            } = this;
            this.done = !1, Pa.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, n && (this.lastVelocity = null), this.v0 = null)
          }
        },
        fd = class extends ld {
          constructor(n) {
            super(0), this._string = null, this._toString = vu({
              output: [n, n]
            })
          }
          static create(n) {
            return new fd(n)
          }
          getValue() {
            const n = this._string;
            return null == n ? this._string = this._toString(this._value) : n
          }
          setValue(n) {
            if (Pa.str(n)) {
              if (n == this._string) return !1;
              this._string = n, this._value = 1
            } else {
              if (!super.setValue(n)) return !1;
              this._string = null
            }
            return !0
          }
          reset(n) {
            n && (this._toString = vu({
              output: [this.getValue(), n]
            })), this._value = 0, super.reset()
          }
        },
        cd = {
          dependencies: null
        },
        Ad = class extends sd {
          constructor(n) {
            super(), this.source = n, this.setValue(n)
          }
          getValue(n) {
            const e = {};
            return Da(this.source, ((r, o) => {
              var t;
              (t = r) && t[ad] === t ? e[o] = r.getValue(n) : Su(r) ? e[o] = Ou(r) : n || (e[o] = r)
            })), e
          }
          setValue(n) {
            this.source = n, this.payload = this._makePayload(n)
          }
          reset() {
            this.payload && za(this.payload, (n => n.reset()))
          }
          _makePayload(n) {
            if (n) {
              const e = new Set;
              return Da(n, this._addToPayload, e), Array.from(e)
            }
          }
          _addToPayload(n) {
            cd.dependencies && Su(n) && cd.dependencies.add(n);
            const e = id(n);
            e && za(e, (n => this.add(n)))
          }
        },
        pd = class extends Ad {
          constructor(n) {
            super(n)
          }
          static create(n) {
            return new pd(n)
          }
          getValue() {
            return this.source.map((n => n.getValue()))
          }
          setValue(n) {
            const e = this.getPayload();
            return n.length == e.length ? e.map(((e, r) => e.setValue(n[r]))).some(Boolean) : (super.setValue(n.map(yd)), !0)
          }
        };

      function yd(n) {
        return (Qu(n) ? fd : ld).create(n)
      }

      function bd(n) {
        const e = ud(n);
        return e ? e.constructor : Pa.arr(n) ? pd : Qu(n) ? fd : ld
      }
      var _d = (n, e) => {
          const r = !Pa.fun(n) || n.prototype && n.prototype.isReactComponent;
          return (0, d.forwardRef)(((o, t) => {
            const a = (0, d.useRef)(null),
              u = r && (0, d.useCallback)((n => {
                a.current = function(n, e) {
                  return n && (Pa.fun(n) ? n(e) : n.current = e), e
                }(t, n)
              }), [t]),
              [i, s] = function(n, e) {
                const r = new Set;
                return cd.dependencies = r, n.style && (n = {
                  ...n,
                  style: e.createAnimatedStyle(n.style)
                }), n = new Ad(n), cd.dependencies = null, [n, r]
              }(o, e),
              l = ed(),
              f = () => {
                const n = a.current;
                r && !n || !1 === (!!n && e.applyAnimatedValues(n, i.getValue(!0))) && l()
              },
              c = new Cd(f, s),
              A = (0, d.useRef)();
            Ju((() => (A.current = c, za(s, (n => Lu(n, c))), () => {
              A.current && (za(A.current.deps, (n => Tu(n, A.current))), fa.cancel(A.current.update))
            }))), (0, d.useEffect)(f, []), rd((() => () => {
              const n = A.current;
              za(n.deps, (e => Tu(e, n)))
            }));
            const p = e.getComponentProps(i.getValue());
            return d.createElement(n, {
              ...p,
              ref: u
            })
          }))
        },
        Cd = class {
          constructor(n, e) {
            this.update = n, this.deps = e
          }
          eventObserved(n) {
            "change" == n.type && fa.write(this.update)
          }
        },
        vd = Symbol.for("AnimatedComponent"),
        kd = (n, {
          applyAnimatedValues: e = (() => !1),
          createAnimatedStyle: r = (n => new Ad(n)),
          getComponentProps: o = (n => n)
        } = {}) => {
          const t = {
              applyAnimatedValues: e,
              createAnimatedStyle: r,
              getComponentProps: o
            },
            a = n => {
              const e = Bd(n) || "Anonymous";
              return (n = Pa.str(n) ? a[n] || (a[n] = _d(n, t)) : n[vd] || (n[vd] = _d(n, t))).displayName = `Animated(${e})`, n
            };
          return Da(n, ((e, r) => {
            Pa.arr(n) && (r = Bd(e)), a[r] = a(e)
          })), {
            animated: a
          }
        },
        Bd = n => Pa.str(n) ? n : n && Pa.str(n.displayName) ? n.displayName : Pa.fun(n) && n.name || null;

      function gd(n, ...e) {
        return Pa.fun(n) ? n(...e) : n
      }
      var md = (n, e) => !0 === n || !!(e && n && (Pa.fun(n) ? n(e) : La(n).includes(e))),
        hd = (n, e) => Pa.obj(n) ? e && n[e] : n,
        Ed = (n, e) => !0 === n.default ? n[e] : n.default ? n.default[e] : void 0,
        wd = n => n,
        xd = (n, e = wd) => {
          let r = jd;
          n.default && !0 !== n.default && (n = n.default, r = Object.keys(n));
          const o = {};
          for (const t of r) {
            const r = e(n[t], t);
            Pa.und(r) || (o[t] = r)
          }
          return o
        },
        jd = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Sd = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1
        };

      function Od(n) {
        const e = function(n) {
          const e = {};
          let r = 0;
          if (Da(n, ((n, o) => {
              Sd[o] || (e[o] = n, r++)
            })), r) return e
        }(n);
        if (e) {
          const r = {
            to: e
          };
          return Da(n, ((n, o) => o in e || (r[o] = n))), r
        }
        return {
          ...n
        }
      }

      function Pd(n) {
        return n = Ou(n), Pa.arr(n) ? n.map(Pd) : Qu(n) ? Sa.createStringInterpolator({
          range: [0, 1],
          output: [n, n]
        })(1) : n
      }

      function qd(n) {
        return Pa.fun(n) || Pa.arr(n) && Pa.obj(n[0])
      }
      var zd = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: wu.linear,
          clamp: !1
        },
        Dd = class {
          constructor() {
            this.velocity = 0, Object.assign(this, zd)
          }
        };

      function Ld(n, e) {
        if (Pa.und(e.decay)) {
          const r = !Pa.und(e.tension) || !Pa.und(e.friction);
          !r && Pa.und(e.frequency) && Pa.und(e.damping) && Pa.und(e.mass) || (n.duration = void 0, n.decay = void 0), r && (n.frequency = void 0)
        } else n.duration = void 0
      }
      var Td = [],
        Nd = class {
          constructor() {
            this.changed = !1, this.values = Td, this.toValues = null, this.fromValues = Td, this.config = new Dd, this.immediate = !1
          }
        };

      function Md(n, {
        key: e,
        props: r,
        defaultProps: o,
        state: t,
        actions: a
      }) {
        return new Promise(((u, d) => {
          let i, s, l = md(r.cancel ?? o?.cancel, e);
          if (l) A();
          else {
            Pa.und(r.pause) || (t.paused = md(r.pause, e));
            let n = o?.pause;
            !0 !== n && (n = t.paused || md(n, e)), i = gd(r.delay || 0, e), n ? (t.resumeQueue.add(c), a.pause()) : (a.resume(), c())
          }

          function f() {
            t.resumeQueue.add(c), t.timeouts.delete(s), s.cancel(), i = s.time - fa.now()
          }

          function c() {
            i > 0 && !Sa.skipAnimation ? (t.delayed = !0, s = fa.setTimeout(A, i), t.pauseQueue.add(f), t.timeouts.add(s)) : A()
          }

          function A() {
            t.delayed && (t.delayed = !1), t.pauseQueue.delete(f), t.timeouts.delete(s), n <= (t.cancelId || 0) && (l = !0);
            try {
              a.start({
                ...r,
                callId: n,
                cancel: l
              }, u)
            } catch (n) {
              d(n)
            }
          }
        }))
      }
      var Fd = (n, e) => 1 == e.length ? e[0] : e.some((n => n.cancelled)) ? Gd(n.get()) : e.every((n => n.noop)) ? Rd(n.get()) : Id(n.get(), e.every((n => n.finished))),
        Rd = n => ({
          value: n,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Id = (n, e, r = !1) => ({
          value: n,
          finished: e,
          cancelled: r
        }),
        Gd = n => ({
          value: n,
          cancelled: !0,
          finished: !1
        });

      function Vd(n, e, r, o) {
        const {
          callId: t,
          parentId: a,
          onRest: u
        } = e, {
          asyncTo: d,
          promise: i
        } = r;
        return a || n !== d || e.reset ? r.promise = (async () => {
          r.asyncId = t, r.asyncTo = n;
          const s = xd(e, ((n, e) => "onRest" === e ? void 0 : n));
          let l, f;
          const c = new Promise(((n, e) => (l = n, f = e))),
            A = n => {
              const e = t <= (r.cancelId || 0) && Gd(o) || t !== r.asyncId && Id(o, !1);
              if (e) throw n.result = e, f(n), n
            },
            p = (n, e) => {
              const a = new Hd,
                u = new Wd;
              return (async () => {
                if (Sa.skipAnimation) throw Kd(r), u.result = Id(o, !1), f(u), u;
                A(a);
                const d = Pa.obj(n) ? {
                  ...n
                } : {
                  ...e,
                  to: n
                };
                d.parentId = t, Da(s, ((n, e) => {
                  Pa.und(d[e]) && (d[e] = n)
                }));
                const i = await o.start(d);
                return A(a), r.paused && await new Promise((n => {
                  r.resumeQueue.add(n)
                })), i
              })()
            };
          let y;
          if (Sa.skipAnimation) return Kd(r), Id(o, !1);
          try {
            let e;
            e = Pa.arr(n) ? (async n => {
              for (const e of n) await p(e)
            })(n) : Promise.resolve(n(p, o.stop.bind(o))), await Promise.all([e.then(l), c]), y = Id(o.get(), !0, !1)
          } catch (n) {
            if (n instanceof Hd) y = n.result;
            else {
              if (!(n instanceof Wd)) throw n;
              y = n.result
            }
          } finally {
            t == r.asyncId && (r.asyncId = a, r.asyncTo = a ? d : void 0, r.promise = a ? i : void 0)
          }
          return Pa.fun(u) && fa.batchedUpdates((() => {
            u(y, o, o.item)
          })), y
        })() : i
      }

      function Kd(n, e) {
        Ta(n.timeouts, (n => n.cancel())), n.pauseQueue.clear(), n.resumeQueue.clear(), n.asyncId = n.asyncTo = n.promise = void 0, e && (n.cancelId = e)
      }
      var Hd = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Wd = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        $d = n => n instanceof Yd,
        Ud = 1,
        Yd = class extends zu {
          constructor() {
            super(...arguments), this.id = Ud++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(n) {
            this._priority != n && (this._priority = n, this._onPriorityChange(n))
          }
          get() {
            const n = ud(this);
            return n && n.getValue()
          }
          to(...n) {
            return Sa.to(this, n)
          }
          interpolate(...n) {
            return Xu(`${Uu}The "interpolate" function is deprecated in v9 (use "to" instead)`), Sa.to(this, n)
          }
          toJSON() {
            return this.get()
          }
          observerAdded(n) {
            1 == n && this._attach()
          }
          observerRemoved(n) {
            0 == n && this._detach()
          }
          _attach() {}
          _detach() {}
          _onChange(n, e = !1) {
            qu(this, {
              type: "change",
              parent: this,
              value: n,
              idle: e
            })
          }
          _onPriorityChange(n) {
            this.idle || Ya.sort(this), qu(this, {
              type: "priority",
              parent: this,
              priority: n
            })
          }
        },
        Xd = Symbol.for("SpringPhase"),
        Zd = n => (1 & n[Xd]) > 0,
        Qd = n => (2 & n[Xd]) > 0,
        Jd = n => (4 & n[Xd]) > 0,
        ni = (n, e) => e ? n[Xd] |= 3 : n[Xd] &= -3,
        ei = (n, e) => e ? n[Xd] |= 4 : n[Xd] &= -5,
        ri = class extends Yd {
          constructor(n, e) {
            if (super(), this.animation = new Nd, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Pa.und(n) || !Pa.und(e)) {
              const r = Pa.obj(n) ? {
                ...n
              } : {
                ...e,
                from: n
              };
              Pa.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Qd(this) || this._state.asyncTo) || Jd(this)
          }
          get goal() {
            return Ou(this.animation.to)
          }
          get velocity() {
            const n = ud(this);
            return n instanceof ld ? n.lastVelocity || 0 : n.getPayload().map((n => n.lastVelocity || 0))
          }
          get hasAnimated() {
            return Zd(this)
          }
          get isAnimating() {
            return Qd(this)
          }
          get isPaused() {
            return Jd(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(n) {
            let e = !0,
              r = !1;
            const o = this.animation;
            let {
              toValues: t
            } = o;
            const {
              config: a
            } = o, u = id(o.to);
            !u && Su(o.to) && (t = La(Ou(o.to))), o.values.forEach(((d, i) => {
              if (d.done) return;
              const s = d.constructor == fd ? 1 : u ? u[i].lastPosition : t[i];
              let l = o.immediate,
                f = s;
              if (!l) {
                if (f = d.lastPosition, a.tension <= 0) return void(d.done = !0);
                let e = d.elapsedTime += n;
                const r = o.fromValues[i],
                  t = null != d.v0 ? d.v0 : d.v0 = Pa.arr(a.velocity) ? a.velocity[i] : a.velocity;
                let u;
                const c = a.precision || (r == s ? .005 : Math.min(1, .001 * Math.abs(s - r)));
                if (Pa.und(a.duration))
                  if (a.decay) {
                    const n = !0 === a.decay ? .998 : a.decay,
                      o = Math.exp(-(1 - n) * e);
                    f = r + t / (1 - n) * (1 - o), l = Math.abs(d.lastPosition - f) <= c, u = t * o
                  } else {
                    u = null == d.lastVelocity ? t : d.lastVelocity;
                    const e = a.restVelocity || c / 10,
                      o = a.clamp ? 0 : a.bounce,
                      i = !Pa.und(o),
                      A = r == s ? d.v0 > 0 : r < s;
                    let p, y = !1;
                    const b = 1,
                      _ = Math.ceil(n / b);
                    for (let n = 0; n < _ && (p = Math.abs(u) > e, p || (l = Math.abs(s - f) <= c, !l)); ++n) i && (y = f == s || f > s == A, y && (u = -u * o, f = s)), u += (1e-6 * -a.tension * (f - s) + .001 * -a.friction * u) / a.mass * b, f += u * b
                  }
                else {
                  let o = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, d.durationProgress > 0 && (d.elapsedTime = a.duration * d.durationProgress, e = d.elapsedTime += n)), o = (a.progress || 0) + e / this._memoizedDuration, o = o > 1 ? 1 : o < 0 ? 0 : o, d.durationProgress = o), f = r + a.easing(o) * (s - r), u = (f - d.lastPosition) / n, l = 1 == o
                }
                d.lastVelocity = u, Number.isNaN(f) && (console.warn("Got NaN while animating:", this), l = !0)
              }
              u && !u[i].done && (l = !1), l ? d.done = !0 : e = !1, d.setValue(f, a.round) && (r = !0)
            }));
            const d = ud(this),
              i = d.getValue();
            if (e) {
              const n = Ou(o.to);
              i === n && !r || a.decay ? r && a.decay && this._onChange(i) : (d.setValue(n), this._onChange(n)), this._stop()
            } else r && this._onChange(i)
          }
          set(n) {
            return fa.batchedUpdates((() => {
              this._stop(), this._focus(n), this._set(n)
            })), this
          }
          pause() {
            this._update({
              pause: !0
            })
          }
          resume() {
            this._update({
              pause: !1
            })
          }
          finish() {
            if (Qd(this)) {
              const {
                to: n,
                config: e
              } = this.animation;
              fa.batchedUpdates((() => {
                this._onStart(), e.decay || this._set(n, !1), this._stop()
              }))
            }
            return this
          }
          update(n) {
            return (this.queue || (this.queue = [])).push(n), this
          }
          start(n, e) {
            let r;
            return Pa.und(n) ? (r = this.queue || [], this.queue = []) : r = [Pa.obj(n) ? n : {
              ...e,
              to: n
            }], Promise.all(r.map((n => this._update(n)))).then((n => Fd(this, n)))
          }
          stop(n) {
            const {
              to: e
            } = this.animation;
            return this._focus(this.get()), Kd(this._state, n && this._lastCallId), fa.batchedUpdates((() => this._stop(e, n))), this
          }
          reset() {
            this._update({
              reset: !0
            })
          }
          eventObserved(n) {
            "change" == n.type ? this._start() : "priority" == n.type && (this.priority = n.priority + 1)
          }
          _prepareNode(n) {
            const e = this.key || "";
            let {
              to: r,
              from: o
            } = n;
            r = Pa.obj(r) ? r[e] : r, (null == r || qd(r)) && (r = void 0), o = Pa.obj(o) ? o[e] : o, null == o && (o = void 0);
            const t = {
              to: r,
              from: o
            };
            return Zd(this) || (n.reverse && ([r, o] = [o, r]), o = Ou(o), Pa.und(o) ? ud(this) || this._set(r) : this._set(o)), t
          }
          _update({
            ...n
          }, e) {
            const {
              key: r,
              defaultProps: o
            } = this;
            n.default && Object.assign(o, xd(n, ((n, e) => /^on/.test(e) ? hd(n, r) : n))), si(this, n, "onProps"), li(this, "onProps", n, this);
            const t = this._prepareNode(n);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return Md(++this._lastCallId, {
              key: r,
              props: n,
              defaultProps: o,
              state: a,
              actions: {
                pause: () => {
                  Jd(this) || (ei(this, !0), Fa(a.pauseQueue), li(this, "onPause", Id(this, oi(this, this.animation.to)), this))
                },
                resume: () => {
                  Jd(this) && (ei(this, !1), Qd(this) && this._resume(), Fa(a.resumeQueue), li(this, "onResume", Id(this, oi(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, t)
              }
            }).then((r => {
              if (n.loop && r.finished && (!e || !r.noop)) {
                const e = ti(n);
                if (e) return this._update(e, !0)
              }
              return r
            }))
          }
          _merge(n, e, r) {
            if (e.cancel) return this.stop(!0), r(Gd(this));
            const o = !Pa.und(n.to),
              t = !Pa.und(n.from);
            if (o || t) {
              if (!(e.callId > this._lastToId)) return r(Gd(this));
              this._lastToId = e.callId
            }
            const {
              key: a,
              defaultProps: u,
              animation: d
            } = this, {
              to: i,
              from: s
            } = d;
            let {
              to: l = i,
              from: f = s
            } = n;
            !t || o || e.default && !Pa.und(l) || (l = f), e.reverse && ([l, f] = [f, l]);
            const c = !qa(f, s);
            c && (d.from = f), f = Ou(f);
            const A = !qa(l, i);
            A && this._focus(l);
            const p = qd(e.to),
              {
                config: y
              } = d,
              {
                decay: b,
                velocity: _
              } = y;
            (o || t) && (y.velocity = 0), e.config && !p && function(n, e, r) {
              r && (Ld(r = {
                ...r
              }, e), e = {
                ...r,
                ...e
              }), Ld(n, e), Object.assign(n, e);
              for (const e in zd) null == n[e] && (n[e] = zd[e]);
              let {
                frequency: o,
                damping: t
              } = n;
              const {
                mass: a
              } = n;
              Pa.und(o) || (o < .01 && (o = .01), t < 0 && (t = 0), n.tension = Math.pow(2 * Math.PI / o, 2) * a, n.friction = 4 * Math.PI * t * a / o)
            }(y, gd(e.config, a), e.config !== u.config ? gd(u.config, a) : void 0);
            let C = ud(this);
            if (!C || Pa.und(l)) return r(Id(this, !0));
            const v = Pa.und(e.reset) ? t && !e.default : !Pa.und(f) && md(e.reset, a),
              k = v ? f : this.get(),
              B = Pd(l),
              g = Pa.num(B) || Pa.arr(B) || Qu(B),
              m = !p && (!g || md(u.immediate || e.immediate, a));
            if (A) {
              const n = bd(l);
              if (n !== C.constructor) {
                if (!m) throw Error(`Cannot animate between ${C.constructor.name} and ${n.name}, as the "to" prop suggests`);
                C = this._set(B)
              }
            }
            const h = C.constructor;
            let E = Su(l),
              w = !1;
            if (!E) {
              const n = v || !Zd(this) && c;
              (A || n) && (w = qa(Pd(k), B), E = !w), (qa(d.immediate, m) || m) && qa(y.decay, b) && qa(y.velocity, _) || (E = !0)
            }
            if (w && Qd(this) && (d.changed && !v ? E = !0 : E || this._stop(i)), !p && ((E || Su(i)) && (d.values = C.getPayload(), d.toValues = Su(l) ? null : h == fd ? [1] : La(B)), d.immediate != m && (d.immediate = m, m || v || this._set(i)), E)) {
              const {
                onRest: n
              } = d;
              za(ii, (n => si(this, e, n)));
              const o = Id(this, oi(this, i));
              Fa(this._pendingCalls, o), this._pendingCalls.add(r), d.changed && fa.batchedUpdates((() => {
                d.changed = !v, n?.(o, this), v ? gd(u.onRest, o) : d.onStart?.(o, this)
              }))
            }
            v && this._set(k), p ? r(Vd(e.to, e, this._state, this)) : E ? this._start() : Qd(this) && !A ? this._pendingCalls.add(r) : r(Rd(k))
          }
          _focus(n) {
            const e = this.animation;
            n !== e.to && (Pu(this) && this._detach(), e.to = n, Pu(this) && this._attach())
          }
          _attach() {
            let n = 0;
            const {
              to: e
            } = this.animation;
            Su(e) && (Lu(e, this), $d(e) && (n = e.priority + 1)), this.priority = n
          }
          _detach() {
            const {
              to: n
            } = this.animation;
            Su(n) && Tu(n, this)
          }
          _set(n, e = !0) {
            const r = Ou(n);
            if (!Pa.und(r)) {
              const n = ud(this);
              if (!n || !qa(r, n.getValue())) {
                const o = bd(r);
                n && n.constructor == o ? n.setValue(r) : dd(this, o.create(r)), n && fa.batchedUpdates((() => {
                  this._onChange(r, e)
                }))
              }
            }
            return ud(this)
          }
          _onStart() {
            const n = this.animation;
            n.changed || (n.changed = !0, li(this, "onStart", Id(this, oi(this, n.to)), this))
          }
          _onChange(n, e) {
            e || (this._onStart(), gd(this.animation.onChange, n, this)), gd(this.defaultProps.onChange, n, this), super._onChange(n, e)
          }
          _start() {
            const n = this.animation;
            ud(this).reset(Ou(n.to)), n.immediate || (n.fromValues = n.values.map((n => n.lastPosition))), Qd(this) || (ni(this, !0), Jd(this) || this._resume())
          }
          _resume() {
            Sa.skipAnimation ? this.finish() : Ya.start(this)
          }
          _stop(n, e) {
            if (Qd(this)) {
              ni(this, !1);
              const r = this.animation;
              za(r.values, (n => {
                n.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), qu(this, {
                type: "idle",
                parent: this
              });
              const o = e ? Gd(this.get()) : Id(this.get(), oi(this, n ?? r.to));
              Fa(this._pendingCalls, o), r.changed && (r.changed = !1, li(this, "onRest", o, this))
            }
          }
        };

      function oi(n, e) {
        const r = Pd(e);
        return qa(Pd(n.get()), r)
      }

      function ti(n, e = n.loop, r = n.to) {
        const o = gd(e);
        if (o) {
          const t = !0 !== o && Od(o),
            a = (t || n).reverse,
            u = !t || t.reset;
          return ai({
            ...n,
            loop: e,
            default: !1,
            pause: void 0,
            to: !a || qd(r) ? r : void 0,
            from: u ? n.from : void 0,
            reset: u,
            ...t
          })
        }
      }

      function ai(n) {
        const {
          to: e,
          from: r
        } = n = Od(n), o = new Set;
        return Pa.obj(e) && di(e, o), Pa.obj(r) && di(r, o), n.keys = o.size ? Array.from(o) : null, n
      }

      function ui(n) {
        const e = ai(n);
        return Pa.und(e.default) && (e.default = xd(e)), e
      }

      function di(n, e) {
        Da(n, ((n, r) => null != n && e.add(r)))
      }
      var ii = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function si(n, e, r) {
        n.animation[r] = e[r] !== Ed(e, r) ? hd(e[r], n.key) : void 0
      }

      function li(n, e, ...r) {
        n.animation[e]?.(...r), n.defaultProps[e]?.(...r)
      }
      var fi = ["onStart", "onChange", "onRest"],
        ci = 1,
        Ai = class {
          constructor(n, e) {
            this.id = ci++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._events = {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), e && (this._flush = e), n && this.start({
              default: !0,
              ...n
            })
          }
          get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every((n => n.idle && !n.isDelayed && !n.isPaused))
          }
          get item() {
            return this._item
          }
          set item(n) {
            this._item = n
          }
          get() {
            const n = {};
            return this.each(((e, r) => n[r] = e.get())), n
          }
          set(n) {
            for (const e in n) {
              const r = n[e];
              Pa.und(r) || this.springs[e].set(r)
            }
          }
          update(n) {
            return n && this.queue.push(ai(n)), this
          }
          start(n) {
            let {
              queue: e
            } = this;
            return n ? e = La(n).map(ai) : this.queue = [], this._flush ? this._flush(this, e) : (ki(this, e), pi(this, e))
          }
          stop(n, e) {
            if (n !== !!n && (e = n), e) {
              const r = this.springs;
              za(La(e), (e => r[e].stop(!!n)))
            } else Kd(this._state, this._lastAsyncId), this.each((e => e.stop(!!n)));
            return this
          }
          pause(n) {
            if (Pa.und(n)) this.start({
              pause: !0
            });
            else {
              const e = this.springs;
              za(La(n), (n => e[n].pause()))
            }
            return this
          }
          resume(n) {
            if (Pa.und(n)) this.start({
              pause: !1
            });
            else {
              const e = this.springs;
              za(La(n), (n => e[n].resume()))
            }
            return this
          }
          each(n) {
            Da(this.springs, n)
          }
          _onFrame() {
            const {
              onStart: n,
              onChange: e,
              onRest: r
            } = this._events, o = this._active.size > 0, t = this._changed.size > 0;
            (o && !this._started || t && !this._started) && (this._started = !0, Ta(n, (([n, e]) => {
              e.value = this.get(), n(e, this, this._item)
            })));
            const a = !o && this._started,
              u = t || a && r.size ? this.get() : null;
            t && e.size && Ta(e, (([n, e]) => {
              e.value = u, n(e, this, this._item)
            })), a && (this._started = !1, Ta(r, (([n, e]) => {
              e.value = u, n(e, this, this._item)
            })))
          }
          eventObserved(n) {
            if ("change" == n.type) this._changed.add(n.parent), n.idle || this._active.add(n.parent);
            else {
              if ("idle" != n.type) return;
              this._active.delete(n.parent)
            }
            fa.onFrame(this._onFrame)
          }
        };

      function pi(n, e) {
        return Promise.all(e.map((e => yi(n, e)))).then((e => Fd(n, e)))
      }
      async function yi(n, e, r) {
        const {
          keys: o,
          to: t,
          from: a,
          loop: u,
          onRest: d,
          onResolve: i
        } = e, s = Pa.obj(e.default) && e.default;
        u && (e.loop = !1), !1 === t && (e.to = null), !1 === a && (e.from = null);
        const l = Pa.arr(t) || Pa.fun(t) ? t : void 0;
        l ? (e.to = void 0, e.onRest = void 0, s && (s.onRest = void 0)) : za(fi, (r => {
          const o = e[r];
          if (Pa.fun(o)) {
            const t = n._events[r];
            e[r] = ({
              finished: n,
              cancelled: e
            }) => {
              const r = t.get(o);
              r ? (n || (r.finished = !1), e && (r.cancelled = !0)) : t.set(o, {
                value: null,
                finished: n || !1,
                cancelled: e || !1
              })
            }, s && (s[r] = e[r])
          }
        }));
        const f = n._state;
        e.pause === !f.paused ? (f.paused = e.pause, Fa(e.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (e.pause = !0);
        const c = (o || Object.keys(n.springs)).map((r => n.springs[r].start(e))),
          A = !0 === e.cancel || !0 === Ed(e, "cancel");
        (l || A && f.asyncId) && c.push(Md(++n._lastAsyncId, {
          props: e,
          state: f,
          actions: {
            pause: Oa,
            resume: Oa,
            start(e, r) {
              A ? (Kd(f, n._lastAsyncId), r(Gd(n))) : (e.onRest = d, r(Vd(l, e, f, n)))
            }
          }
        })), f.paused && await new Promise((n => {
          f.resumeQueue.add(n)
        }));
        const p = Fd(n, await Promise.all(c));
        if (u && p.finished && (!r || !p.noop)) {
          const r = ti(e, u, t);
          if (r) return ki(n, [r]), yi(n, r, !0)
        }
        return i && fa.batchedUpdates((() => i(p, n, n.item))), p
      }

      function bi(n, e) {
        const r = {
          ...n.springs
        };
        return e && za(La(e), (n => {
          Pa.und(n.keys) && (n = ai(n)), Pa.obj(n.to) || (n = {
            ...n,
            to: void 0
          }), vi(r, n, (n => Ci(n)))
        })), _i(n, r), r
      }

      function _i(n, e) {
        Da(e, ((e, r) => {
          n.springs[r] || (n.springs[r] = e, Lu(e, n))
        }))
      }

      function Ci(n, e) {
        const r = new ri;
        return r.key = n, e && Lu(r, e), r
      }

      function vi(n, e, r) {
        e.keys && za(e.keys, (o => {
          (n[o] || (n[o] = r(o)))._prepareNode(e)
        }))
      }

      function ki(n, e) {
        za(e, (e => {
          vi(n.springs, e, (e => Ci(e, n)))
        }))
      }
      var Bi, gi, mi = ({
          children: n,
          ...e
        }) => {
          const r = (0, d.useContext)(hi),
            o = e.pause || !!r.pause,
            t = e.immediate || !!r.immediate;
          e = function(n, e) {
            const [r] = (0, d.useState)((() => ({
              inputs: e,
              result: n()
            }))), o = (0, d.useRef)(), t = o.current;
            let a = t;
            return a ? Boolean(e && a.inputs && function(n, e) {
              if (n.length !== e.length) return !1;
              for (let r = 0; r < n.length; r++)
                if (n[r] !== e[r]) return !1;
              return !0
            }(e, a.inputs)) || (a = {
              inputs: e,
              result: n()
            }) : a = r, (0, d.useEffect)((() => {
              o.current = a, t == r && (r.inputs = r.result = void 0)
            }), [a]), a.result
          }((() => ({
            pause: o,
            immediate: t
          })), [o, t]);
          const {
            Provider: a
          } = hi;
          return d.createElement(a, {
            value: e
          }, n)
        },
        hi = (Bi = mi, gi = {}, Object.assign(Bi, d.createContext(gi)), Bi.Provider._context = Bi, Bi.Consumer._context = Bi, Bi);
      mi.Provider = hi.Provider, mi.Consumer = hi.Consumer;
      var Ei = () => {
        const n = [],
          e = function(e) {
            Zu(`${Uu}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const o = [];
            return za(n, ((n, t) => {
              if (Pa.und(e)) o.push(n.start());
              else {
                const a = r(e, n, t);
                a && o.push(n.start(a))
              }
            })), o
          };
        e.current = n, e.add = function(e) {
          n.includes(e) || n.push(e)
        }, e.delete = function(e) {
          const r = n.indexOf(e);
          ~r && n.splice(r, 1)
        }, e.pause = function() {
          return za(n, (n => n.pause(...arguments))), this
        }, e.resume = function() {
          return za(n, (n => n.resume(...arguments))), this
        }, e.set = function(e) {
          za(n, ((n, r) => {
            const o = Pa.fun(e) ? e(r, n) : e;
            o && n.set(o)
          }))
        }, e.start = function(e) {
          const r = [];
          return za(n, ((n, o) => {
            if (Pa.und(e)) r.push(n.start());
            else {
              const t = this._getProps(e, n, o);
              t && r.push(n.start(t))
            }
          })), r
        }, e.stop = function() {
          return za(n, (n => n.stop(...arguments))), this
        }, e.update = function(e) {
          return za(n, ((n, r) => n.update(this._getProps(e, n, r)))), this
        };
        const r = function(n, e, r) {
          return Pa.fun(n) ? n(r, e) : n
        };
        return e._getProps = r, e
      };

      function wi(n, e) {
        const r = Pa.fun(n),
          [
            [o], t
          ] = function(n, e, r) {
            const o = Pa.fun(e) && e;
            o && !r && (r = []);
            const t = (0, d.useMemo)((() => o || 3 == arguments.length ? Ei() : void 0), []),
              a = (0, d.useRef)(0),
              u = ed(),
              i = (0, d.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(n, e) {
                  const r = bi(n, e);
                  return a.current > 0 && !i.queue.length && !Object.keys(r).some((e => !n.springs[e])) ? pi(n, e) : new Promise((o => {
                    _i(n, r), i.queue.push((() => {
                      o(pi(n, e))
                    })), u()
                  }))
                }
              })), []),
              s = (0, d.useRef)([...i.ctrls]),
              l = [],
              f = td(n) || 0;

            function c(n, r) {
              for (let t = n; t < r; t++) {
                const n = s.current[t] || (s.current[t] = new Ai(null, i.flush)),
                  r = o ? o(t, n) : e[t];
                r && (l[t] = ui(r))
              }
            }(0, d.useMemo)((() => {
              za(s.current.slice(n, f), (n => {
                (function(n, e) {
                  n.ref?.delete(n), e?.delete(n)
                })(n, t), n.stop(!0)
              })), s.current.length = n, c(f, n)
            }), [n]), (0, d.useMemo)((() => {
              c(0, Math.min(f, n))
            }), r);
            const A = s.current.map(((n, e) => bi(n, l[e]))),
              p = (0, d.useContext)(mi),
              y = td(p),
              b = p !== y && function(n) {
                for (const e in n) return !0;
                return !1
              }(p);
            Ju((() => {
              a.current++, i.ctrls = s.current;
              const {
                queue: n
              } = i;
              n.length && (i.queue = [], za(n, (n => n()))), za(s.current, ((n, e) => {
                t?.add(n), b && n.start({
                  default: p
                });
                const r = l[e];
                r && (function(n, e) {
                  e && n.ref !== e && (n.ref?.delete(n), e.add(n), n.ref = e)
                }(n, r.ref), n.ref ? n.queue.push(r) : n.start(r))
              }))
            })), rd((() => () => {
              za(i.ctrls, (n => n.stop(!0)))
            }));
            const _ = A.map((n => ({
              ...n
            })));
            return t ? [_, t] : _
          }(1, r ? n : [n], r ? e || [] : e);
        return r || 2 == arguments.length ? [o, t] : o
      }
      var xi = class extends Yd {
        constructor(n, e) {
          super(), this.source = n, this.idle = !0, this._active = new Set, this.calc = vu(...e);
          const r = this._get(),
            o = bd(r);
          dd(this, o.create(r))
        }
        advance(n) {
          const e = this._get();
          qa(e, this.get()) || (ud(this).setValue(e), this._onChange(e, this.idle)), !this.idle && Si(this._active) && Oi(this)
        }
        _get() {
          const n = Pa.arr(this.source) ? this.source.map(Ou) : La(Ou(this.source));
          return this.calc(...n)
        }
        _start() {
          this.idle && !Si(this._active) && (this.idle = !1, za(id(this), (n => {
            n.done = !1
          })), Sa.skipAnimation ? (fa.batchedUpdates((() => this.advance())), Oi(this)) : Ya.start(this))
        }
        _attach() {
          let n = 1;
          za(La(this.source), (e => {
            Su(e) && Lu(e, this), $d(e) && (e.idle || this._active.add(e), n = Math.max(n, e.priority + 1))
          })), this.priority = n, this._start()
        }
        _detach() {
          za(La(this.source), (n => {
            Su(n) && Tu(n, this)
          })), this._active.clear(), Oi(this)
        }
        eventObserved(n) {
          "change" == n.type ? n.idle ? this.advance() : (this._active.add(n.parent), this._start()) : "idle" == n.type ? this._active.delete(n.parent) : "priority" == n.type && (this.priority = La(this.source).reduce(((n, e) => Math.max(n, ($d(e) ? e.priority : 0) + 1)), 0))
        }
      };

      function ji(n) {
        return !1 !== n.idle
      }

      function Si(n) {
        return !n.size || Array.from(n).every(ji)
      }

      function Oi(n) {
        n.idle || (n.idle = !0, za(id(n), (n => {
          n.done = !0
        })), qu(n, {
          type: "idle",
          parent: n
        }))
      }
      Sa.assign({
        createStringInterpolator: $u,
        to: (n, e) => new xi(n, e)
      }), Ya.advance;
      var Pi = r(44853),
        qi = /^--/;

      function zi(n, e) {
        return null == e || "boolean" == typeof e || "" === e ? "" : "number" != typeof e || 0 === e || qi.test(n) || Li.hasOwnProperty(n) && Li[n] ? ("" + e).trim() : e + "px"
      }
      var Di = {},
        Li = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        Ti = ["Webkit", "Ms", "Moz", "O"];
      Li = Object.keys(Li).reduce(((n, e) => (Ti.forEach((r => n[((n, e) => n + e.charAt(0).toUpperCase() + e.substring(1))(r, e)] = n[e])), n)), Li);
      var Ni = /^(matrix|translate|scale|rotate|skew)/,
        Mi = /^(translate)/,
        Fi = /^(rotate|skew)/,
        Ri = (n, e) => Pa.num(n) && 0 !== n ? n + e : n,
        Ii = (n, e) => Pa.arr(n) ? n.every((n => Ii(n, e))) : Pa.num(n) ? n === e : parseFloat(n) === e,
        Gi = class extends Ad {
          constructor({
            x: n,
            y: e,
            z: r,
            ...o
          }) {
            const t = [],
              a = [];
            (n || e || r) && (t.push([n || 0, e || 0, r || 0]), a.push((n => [`translate3d(${n.map((n=>Ri(n,"px"))).join(",")})`, Ii(n, 0)]))), Da(o, ((n, e) => {
              if ("transform" === e) t.push([n || ""]), a.push((n => [n, "" === n]));
              else if (Ni.test(e)) {
                if (delete o[e], Pa.und(n)) return;
                const r = Mi.test(e) ? "px" : Fi.test(e) ? "deg" : "";
                t.push(La(n)), a.push("rotate3d" === e ? ([n, e, o, t]) => [`rotate3d(${n},${e},${o},${Ri(t,r)})`, Ii(t, 0)] : n => [`${e}(${n.map((n=>Ri(n,r))).join(",")})`, Ii(n, e.startsWith("scale") ? 1 : 0)])
              }
            })), t.length && (o.transform = new Vi(t, a)), super(o)
          }
        },
        Vi = class extends zu {
          constructor(n, e) {
            super(), this.inputs = n, this.transforms = e, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let n = "",
              e = !0;
            return za(this.inputs, ((r, o) => {
              const t = Ou(r[0]),
                [a, u] = this.transforms[o](Pa.arr(t) ? t : r.map(Ou));
              n += " " + a, e = e && u
            })), e ? "none" : n
          }
          observerAdded(n) {
            1 == n && za(this.inputs, (n => za(n, (n => Su(n) && Lu(n, this)))))
          }
          observerRemoved(n) {
            0 == n && za(this.inputs, (n => za(n, (n => Su(n) && Tu(n, this)))))
          }
          eventObserved(n) {
            "change" == n.type && (this._value = null), qu(this, n)
          }
        };
      Sa.assign({
        batchedUpdates: Pi.unstable_batchedUpdates,
        createStringInterpolator: $u,
        colors: nu
      });
      var Ki = kd(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(n, e) {
            if (!n.nodeType || !n.setAttribute) return !1;
            const r = "filter" === n.nodeName || n.parentNode && "filter" === n.parentNode.nodeName,
              {
                className: o,
                style: t,
                children: a,
                scrollTop: u,
                scrollLeft: d,
                viewBox: i,
                ...s
              } = e,
              l = Object.values(s),
              f = Object.keys(s).map((e => r || n.hasAttribute(e) ? e : Di[e] || (Di[e] = e.replace(/([A-Z])/g, (n => "-" + n.toLowerCase())))));
            void 0 !== a && (n.textContent = a);
            for (const e in t)
              if (t.hasOwnProperty(e)) {
                const r = zi(e, t[e]);
                qi.test(e) ? n.style.setProperty(e, r) : n.style[e] = r
              } f.forEach(((e, r) => {
              n.setAttribute(e, l[r])
            })), void 0 !== o && (n.className = o), void 0 !== u && (n.scrollTop = u), void 0 !== d && (n.scrollLeft = d), void 0 !== i && n.setAttribute("viewBox", i)
          },
          createAnimatedStyle: n => new Gi(n),
          getComponentProps: ({
            scrollTop: n,
            scrollLeft: e,
            ...r
          }) => r
        }).animated,
        Hi = r(59509),
        Wi = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Wi.setAttributes = b(), Wi.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, Wi.domAPI = p(), Wi.insertStyleElement = C(), c()(Hi.A, Wi), Hi.A && Hi.A.locals && Hi.A.locals;
      var $i = r(91299);
      r(62607);
      var Ui = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? d.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = d.createContext(null)),
        Yi = (Ui.Consumer, Ui.Provider, Ui);

      function Xi() {
        this.cache = Object.create(null)
      }
      Xi.prototype.get = function(n) {
        return this.cache[n]
      }, Xi.prototype.set = function(n, e) {
        this.cache[n] = e
      };
      var Zi, Qi;

      function Ji() {
        var n = d.useContext(Yi);
        return function(n) {
          ! function(n, e, r) {
            if (void 0 === r && (r = Error), !n) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
          }(n)
        }(n), n
      }(0, $i.__assign)((0, $i.__assign)({}, {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(n) {},
        onWarn: function(n) {}
      }), {
        textComponent: d.Fragment
      }),
      function(n) {
        n.formatDate = "FormattedDate", n.formatTime = "FormattedTime", n.formatNumber = "FormattedNumber", n.formatList = "FormattedList", n.formatDisplayName = "FormattedDisplayName"
      }(Zi || (Zi = {})),
      function(n) {
        n.formatDate = "FormattedDateParts", n.formatTime = "FormattedTimeParts", n.formatNumber = "FormattedNumberParts", n.formatList = "FormattedListParts"
      }(Qi || (Qi = {}));
      var ns = function(n) {
        var e = Ji(),
          r = n.value,
          o = n.children,
          t = (0, $i.__rest)(n, ["value", "children"]);
        return o(e.formatNumberToParts(r, t))
      };

      function es(n) {
        var e = function(e) {
          var r = Ji(),
            o = e.value,
            t = e.children,
            a = (0, $i.__rest)(e, ["value", "children"]),
            u = "string" == typeof o ? new Date(o || 0) : o;
          return t("formatDate" === n ? r.formatDateToParts(u, a) : r.formatTimeToParts(u, a))
        };
        return e.displayName = Qi[n], e
      }

      function rs(n) {
        var e = function(e) {
          var r = Ji(),
            o = e.value,
            t = e.children,
            a = (0, $i.__rest)(e, ["value", "children"]),
            u = r[n](o, a);
          if ("function" == typeof t) return t(u);
          var i = r.textComponent || d.Fragment;
          return d.createElement(i, null, u)
        };
        return e.displayName = Zi[n], e
      }

      function os(n, [e, r]) {
        return Math.min(r, Math.max(e, n))
      }

      function ts(n, e, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(o) {
          if (n?.(o), !1 === r || !o.defaultPrevented) return e?.(o)
        }
      }

      function as(...n) {
        return d.useCallback(function(...n) {
          return e => n.forEach((n => function(n, e) {
            "function" == typeof n ? n(e) : null != n && (n.current = e)
          }(n, e)))
        }(...n), n)
      }

      function us(n, e = []) {
        let r = [];
        const o = () => {
          const e = r.map((n => d.createContext(n)));
          return function(r) {
            const o = r?.[n] || e;
            return d.useMemo((() => ({
              [`__scope${n}`]: {
                ...r,
                [n]: o
              }
            })), [r, o])
          }
        };
        return o.scopeName = n, [function(e, o) {
          const t = d.createContext(o),
            u = r.length;

          function i(e) {
            const {
              scope: r,
              children: o,
              ...i
            } = e, s = r?.[n][u] || t, l = d.useMemo((() => i), Object.values(i));
            return (0, a.jsx)(s.Provider, {
              value: l,
              children: o
            })
          }
          return r = [...r, o], i.displayName = e + "Provider", [i, function(r, a) {
            const i = a?.[n][u] || t,
              s = d.useContext(i);
            if (s) return s;
            if (void 0 !== o) return o;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }, ds(o, ...e)]
      }

      function ds(...n) {
        const e = n[0];
        if (1 === n.length) return e;
        const r = () => {
          const r = n.map((n => ({
            useScope: n(),
            scopeName: n.scopeName
          })));
          return function(n) {
            const o = r.reduce(((e, {
              useScope: r,
              scopeName: o
            }) => ({
              ...e,
              ...r(n)[`__scope${o}`]
            })), {});
            return d.useMemo((() => ({
              [`__scope${e.scopeName}`]: o
            })), [o])
          }
        };
        return r.scopeName = e.scopeName, r
      }
      ns.displayName = "FormattedNumberParts", ns.displayName = "FormattedNumberParts", rs("formatDate"), rs("formatTime"), rs("formatNumber"), rs("formatList"), rs("formatDisplayName"), es("formatDate"), es("formatTime"), r.e(7039).then(r.bind(r, 7039)), r.e(4220).then(r.bind(r, 94220)), r.e(4186).then(r.bind(r, 14186)), r.e(1607).then(r.bind(r, 11607)), r.e(3622).then(r.bind(r, 3622)), r.e(6940).then(r.bind(r, 36940)), r.e(5247).then(r.bind(r, 85247)), r.e(2941).then(r.bind(r, 22941)), r.e(9642).then(r.bind(r, 19642)), r.e(9474).then(r.bind(r, 19474)), r.e(888).then(r.bind(r, 10888)), r.e(377).then(r.bind(r, 80377)), r.e(969).then(r.bind(r, 70969));
      var is = r(48087),
        ss = r(59219),
        ls = r(15485),
        fs = r(27977),
        cs = r(21222),
        As = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((n, e) => {
          const r = d.forwardRef(((n, r) => {
            const {
              asChild: o,
              ...t
            } = n, u = o ? cs.Slot : e;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(u, {
              ...t,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${e}`, {
            ...n,
            [e]: r
          }
        }), {}),
        ps = ["PageUp", "PageDown"],
        ys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        bs = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        _s = "Slider",
        [Cs, vs, ks] = function(n) {
          const e = n + "CollectionProvider",
            [r, o] = us(e),
            [t, u] = r(e, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            i = n => {
              const {
                scope: e,
                children: r
              } = n, o = d.useRef(null), u = d.useRef(new Map).current;
              return (0, a.jsx)(t, {
                scope: e,
                itemMap: u,
                collectionRef: o,
                children: r
              })
            };
          i.displayName = e;
          const s = n + "CollectionSlot",
            l = d.forwardRef(((n, e) => {
              const {
                scope: r,
                children: o
              } = n, t = as(e, u(s, r).collectionRef);
              return (0, a.jsx)(cs.Slot, {
                ref: t,
                children: o
              })
            }));
          l.displayName = s;
          const f = n + "CollectionItemSlot",
            c = "data-radix-collection-item",
            A = d.forwardRef(((n, e) => {
              const {
                scope: r,
                children: o,
                ...t
              } = n, i = d.useRef(null), s = as(e, i), l = u(f, r);
              return d.useEffect((() => (l.itemMap.set(i, {
                ref: i,
                ...t
              }), () => {
                l.itemMap.delete(i)
              }))), (0, a.jsx)(cs.Slot, {
                [c]: "",
                ref: s,
                children: o
              })
            }));
          return A.displayName = f, [{
            Provider: i,
            Slot: l,
            ItemSlot: A
          }, function(e) {
            const r = u(n + "CollectionConsumer", e);
            return d.useCallback((() => {
              const n = r.collectionRef.current;
              if (!n) return [];
              const e = Array.from(n.querySelectorAll(`[${c}]`));
              return Array.from(r.itemMap.values()).sort(((n, r) => e.indexOf(n.ref.current) - e.indexOf(r.ref.current)))
            }), [r.collectionRef, r.itemMap])
          }, o]
        }(_s),
        [Bs, gs] = us(_s, [ks]),
        [ms, hs] = Bs(_s),
        Es = d.forwardRef(((n, e) => {
          const {
            name: r,
            min: o = 0,
            max: t = 100,
            step: u = 1,
            orientation: i = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: f = [o],
            value: c,
            onValueChange: A = (() => {}),
            onValueCommit: p = (() => {}),
            inverted: y = !1,
            ...b
          } = n, _ = d.useRef(new Set), C = d.useRef(0), v = "horizontal" === i ? js : Ss, [k = [], B] = (0, is.i)({
            prop: c,
            defaultProp: f,
            onChange: n => {
              const e = [..._.current];
              e[C.current]?.focus(), A(n)
            }
          }), g = d.useRef(k);

          function m(n, e, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = function(n) {
                return (String(n).split(".")[1] || "").length
              }(u),
              d = function(n, e) {
                const r = Math.pow(10, e);
                return Math.round(n * r) / r
              }(Math.round((n - o) / u) * u + o, a),
              i = os(d, [o, t]);
            B(((n = []) => {
              const o = function(n = [], e, r) {
                const o = [...n];
                return o[r] = e, o.sort(((n, e) => n - e))
              }(n, i, e);
              if (function(n, e) {
                  if (e > 0) {
                    const r = function(n) {
                      return n.slice(0, -1).map(((e, r) => n[r + 1] - e))
                    }(n);
                    return Math.min(...r) >= e
                  }
                  return !0
                }(o, l * u)) {
                C.current = o.indexOf(i);
                const e = String(o) !== String(n);
                return e && r && p(o), e ? o : n
              }
              return n
            }))
          }
          return (0, a.jsx)(ms, {
            scope: n.__scopeSlider,
            name: r,
            disabled: s,
            min: o,
            max: t,
            valueIndexToChangeRef: C,
            thumbs: _.current,
            values: k,
            orientation: i,
            children: (0, a.jsx)(Cs.Provider, {
              scope: n.__scopeSlider,
              children: (0, a.jsx)(Cs.Slot, {
                scope: n.__scopeSlider,
                children: (0, a.jsx)(v, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...b,
                  ref: e,
                  onPointerDown: ts(b.onPointerDown, (() => {
                    s || (g.current = k)
                  })),
                  min: o,
                  max: t,
                  inverted: y,
                  onSlideStart: s ? void 0 : function(n) {
                    const e = function(n, e) {
                      if (1 === n.length) return 0;
                      const r = n.map((n => Math.abs(n - e))),
                        o = Math.min(...r);
                      return r.indexOf(o)
                    }(k, n);
                    m(n, e)
                  },
                  onSlideMove: s ? void 0 : function(n) {
                    m(n, C.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const n = g.current[C.current];
                    k[C.current] !== n && p(k)
                  },
                  onHomeKeyDown: () => !s && m(o, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && m(t, k.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: n,
                    direction: e
                  }) => {
                    if (!s) {
                      const r = ps.includes(n.key) || n.shiftKey && ys.includes(n.key) ? 10 : 1,
                        o = C.current;
                      m(k[o] + u * r * e, o, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      Es.displayName = _s;
      var [ws, xs] = Bs(_s, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), js = d.forwardRef(((n, e) => {
        const {
          min: r,
          max: o,
          dir: t,
          inverted: u,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: l,
          onStepKeyDown: f,
          ...c
        } = n, [A, p] = d.useState(null), y = as(e, (n => p(n))), b = d.useRef(), _ = (0, ss.jH)(t), C = "ltr" === _, v = C && !u || !C && u;

        function k(n) {
          const e = b.current || A.getBoundingClientRect(),
            t = Rs([0, e.width], v ? [r, o] : [o, r]);
          return b.current = e, t(n - e.left)
        }
        return (0, a.jsx)(ws, {
          scope: n.__scopeSlider,
          startEdge: v ? "left" : "right",
          endEdge: v ? "right" : "left",
          direction: v ? 1 : -1,
          size: "width",
          children: (0, a.jsx)(Os, {
            dir: _,
            "data-orientation": "horizontal",
            ...c,
            ref: y,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: n => {
              const e = k(n.clientX);
              i?.(e)
            },
            onSlideMove: n => {
              const e = k(n.clientX);
              s?.(e)
            },
            onSlideEnd: () => {
              b.current = void 0, l?.()
            },
            onStepKeyDown: n => {
              const e = bs[v ? "from-left" : "from-right"].includes(n.key);
              f?.({
                event: n,
                direction: e ? -1 : 1
              })
            }
          })
        })
      })), Ss = d.forwardRef(((n, e) => {
        const {
          min: r,
          max: o,
          inverted: t,
          onSlideStart: u,
          onSlideMove: i,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...f
        } = n, c = d.useRef(null), A = as(e, c), p = d.useRef(), y = !t;

        function b(n) {
          const e = p.current || c.current.getBoundingClientRect(),
            t = Rs([0, e.height], y ? [o, r] : [r, o]);
          return p.current = e, t(n - e.top)
        }
        return (0, a.jsx)(ws, {
          scope: n.__scopeSlider,
          startEdge: y ? "bottom" : "top",
          endEdge: y ? "top" : "bottom",
          size: "height",
          direction: y ? 1 : -1,
          children: (0, a.jsx)(Os, {
            "data-orientation": "vertical",
            ...f,
            ref: A,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: n => {
              const e = b(n.clientY);
              u?.(e)
            },
            onSlideMove: n => {
              const e = b(n.clientY);
              i?.(e)
            },
            onSlideEnd: () => {
              p.current = void 0, s?.()
            },
            onStepKeyDown: n => {
              const e = bs[y ? "from-bottom" : "from-top"].includes(n.key);
              l?.({
                event: n,
                direction: e ? -1 : 1
              })
            }
          })
        })
      })), Os = d.forwardRef(((n, e) => {
        const {
          __scopeSlider: r,
          onSlideStart: o,
          onSlideMove: t,
          onSlideEnd: u,
          onHomeKeyDown: d,
          onEndKeyDown: i,
          onStepKeyDown: s,
          ...l
        } = n, f = hs(_s, r);
        return (0, a.jsx)(As.span, {
          ...l,
          ref: e,
          onKeyDown: ts(n.onKeyDown, (n => {
            "Home" === n.key ? (d(n), n.preventDefault()) : "End" === n.key ? (i(n), n.preventDefault()) : ps.concat(ys).includes(n.key) && (s(n), n.preventDefault())
          })),
          onPointerDown: ts(n.onPointerDown, (n => {
            const e = n.target;
            e.setPointerCapture(n.pointerId), n.preventDefault(), f.thumbs.has(e) ? e.focus() : o(n)
          })),
          onPointerMove: ts(n.onPointerMove, (n => {
            n.target.hasPointerCapture(n.pointerId) && t(n)
          })),
          onPointerUp: ts(n.onPointerUp, (n => {
            const e = n.target;
            e.hasPointerCapture(n.pointerId) && (e.releasePointerCapture(n.pointerId), u(n))
          }))
        })
      })), Ps = "SliderTrack", qs = d.forwardRef(((n, e) => {
        const {
          __scopeSlider: r,
          ...o
        } = n, t = hs(Ps, r);
        return (0, a.jsx)(As.span, {
          "data-disabled": t.disabled ? "" : void 0,
          "data-orientation": t.orientation,
          ...o,
          ref: e
        })
      }));
      qs.displayName = Ps;
      var zs = "SliderRange",
        Ds = d.forwardRef(((n, e) => {
          const {
            __scopeSlider: r,
            ...o
          } = n, t = hs(zs, r), u = xs(zs, r), i = as(e, d.useRef(null)), s = t.values.length, l = t.values.map((n => Fs(n, t.min, t.max))), f = s > 1 ? Math.min(...l) : 0, c = 100 - Math.max(...l);
          return (0, a.jsx)(As.span, {
            "data-orientation": t.orientation,
            "data-disabled": t.disabled ? "" : void 0,
            ...o,
            ref: i,
            style: {
              ...n.style,
              [u.startEdge]: f + "%",
              [u.endEdge]: c + "%"
            }
          })
        }));
      Ds.displayName = zs;
      var Ls = "SliderThumb",
        Ts = d.forwardRef(((n, e) => {
          const r = vs(n.__scopeSlider),
            [o, t] = d.useState(null),
            u = as(e, (n => t(n))),
            i = d.useMemo((() => o ? r().findIndex((n => n.ref.current === o)) : -1), [r, o]);
          return (0, a.jsx)(Ns, {
            ...n,
            ref: u,
            index: i
          })
        })),
        Ns = d.forwardRef(((n, e) => {
          const {
            __scopeSlider: r,
            index: o,
            name: t,
            ...u
          } = n, i = hs(Ls, r), s = xs(Ls, r), [l, f] = d.useState(null), c = as(e, (n => f(n))), A = !l || Boolean(l.closest("form")), p = (0, fs.X)(l), y = i.values[o], b = void 0 === y ? 0 : Fs(y, i.min, i.max), _ = function(n, e) {
            return e > 2 ? `Value ${n+1} of ${e}` : 2 === e ? ["Minimum", "Maximum"][n] : void 0
          }(o, i.values.length), C = p?.[s.size], v = C ? function(n, e, r) {
            const o = n / 2;
            return (o - Rs([0, 50], [0, o])(e) * r) * r
          }(C, b, s.direction) : 0;
          return d.useEffect((() => {
            if (l) return i.thumbs.add(l), () => {
              i.thumbs.delete(l)
            }
          }), [l, i.thumbs]), (0, a.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${b}% + ${v}px)`
            },
            children: [(0, a.jsx)(Cs.ItemSlot, {
              scope: n.__scopeSlider,
              children: (0, a.jsx)(As.span, {
                role: "slider",
                "aria-label": n["aria-label"] || _,
                "aria-valuemin": i.min,
                "aria-valuenow": y,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...u,
                ref: c,
                style: void 0 === y ? {
                  display: "none"
                } : n.style,
                onFocus: ts(n.onFocus, (() => {
                  i.valueIndexToChangeRef.current = o
                }))
              })
            }), A && (0, a.jsx)(Ms, {
              name: t ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              value: y
            }, o)]
          })
        }));
      Ts.displayName = Ls;
      var Ms = n => {
        const {
          value: e,
          ...r
        } = n, o = d.useRef(null), t = (0, ls.Z)(e);
        return d.useEffect((() => {
          const n = o.current,
            r = window.HTMLInputElement.prototype,
            a = Object.getOwnPropertyDescriptor(r, "value").set;
          if (t !== e && a) {
            const r = new Event("input", {
              bubbles: !0
            });
            a.call(n, e), n.dispatchEvent(r)
          }
        }), [t, e]), (0, a.jsx)("input", {
          style: {
            display: "none"
          },
          ...r,
          ref: o,
          defaultValue: e
        })
      };

      function Fs(n, e, r) {
        return os(100 / (r - e) * (n - e), [0, 100])
      }

      function Rs(n, e) {
        return r => {
          if (n[0] === n[1] || e[0] === e[1]) return e[0];
          const o = (e[1] - e[0]) / (n[1] - n[0]);
          return e[0] + o * (r - n[0])
        }
      }
      var Is = Es,
        Gs = qs,
        Vs = Ds,
        Ks = Ts;
      const Hs = {
          id: "Lightbox_Close_Button_Label"
        },
        Ws = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        $s = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        Us = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        Ys = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        Xs = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        Zs = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Qs = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        Js = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        nl = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        el = {
          id: "Lightbox_Download_Button_Label"
        },
        rl = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function ol() {
        return ol = Object.assign ? Object.assign.bind() : function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
          }
          return n
        }, ol.apply(this, arguments)
      }
      var tl = ["shift", "alt", "meta", "mod", "ctrl"],
        al = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl"
        };

      function ul(n) {
        return (al[n] || n).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function dl(n, e) {
        return void 0 === e && (e = ","), n.split(e)
      }

      function il(n, e, r) {
        void 0 === e && (e = "+");
        var o = n.toLocaleLowerCase().split(e).map((function(n) {
          return ul(n)
        }));
        return ol({}, {
          alt: o.includes("alt"),
          ctrl: o.includes("ctrl") || o.includes("control"),
          shift: o.includes("shift"),
          meta: o.includes("meta"),
          mod: o.includes("mod")
        }, {
          keys: o.filter((function(n) {
            return !tl.includes(n)
          })),
          description: r
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(n) {
        void 0 !== n.key && fl([ul(n.key), ul(n.code)])
      })), document.addEventListener("keyup", (function(n) {
        void 0 !== n.key && cl([ul(n.key), ul(n.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        sl.clear()
      }));
      var sl = new Set;

      function ll(n) {
        return Array.isArray(n)
      }

      function fl(n) {
        var e = Array.isArray(n) ? n : [n];
        sl.has("meta") && sl.forEach((function(n) {
          return ! function(n) {
            return tl.includes(n)
          }(n) && sl.delete(n.toLowerCase())
        })), e.forEach((function(n) {
          return sl.add(n.toLowerCase())
        }))
      }

      function cl(n) {
        var e = Array.isArray(n) ? n : [n];
        "meta" === n ? sl.clear() : e.forEach((function(n) {
          return sl.delete(n.toLowerCase())
        }))
      }

      function Al(n, e) {
        var r = n.target;
        void 0 === e && (e = !1);
        var o = r && r.tagName;
        return ll(e) ? Boolean(o && e && e.some((function(n) {
          return n.toLowerCase() === o.toLowerCase()
        }))) : Boolean(o && e && !0 === e)
      }
      var pl = (0, d.createContext)(void 0);

      function yl(n) {
        var e = n.addHotkey,
          r = n.removeHotkey,
          o = n.children;
        return (0, a.jsx)(pl.Provider, {
          value: {
            addHotkey: e,
            removeHotkey: r
          },
          children: o
        })
      }

      function bl(n, e) {
        return n && e && "object" == typeof n && "object" == typeof e ? Object.keys(n).length === Object.keys(e).length && Object.keys(n).reduce((function(r, o) {
          return r && bl(n[o], e[o])
        }), !0) : n === e
      }
      var _l = (0, d.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Cl = function(n) {
          var e = n.initiallyActiveScopes,
            r = void 0 === e ? ["*"] : e,
            o = n.children,
            t = (0, d.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            u = t[0],
            i = t[1],
            s = (0, d.useState)([]),
            l = s[0],
            f = s[1],
            c = (0, d.useCallback)((function(n) {
              i((function(e) {
                return e.includes("*") ? [n] : Array.from(new Set([].concat(e, [n])))
              }))
            }), []),
            A = (0, d.useCallback)((function(n) {
              i((function(e) {
                return 0 === e.filter((function(e) {
                  return e !== n
                })).length ? ["*"] : e.filter((function(e) {
                  return e !== n
                }))
              }))
            }), []),
            p = (0, d.useCallback)((function(n) {
              i((function(e) {
                return e.includes(n) ? 0 === e.filter((function(e) {
                  return e !== n
                })).length ? ["*"] : e.filter((function(e) {
                  return e !== n
                })) : e.includes("*") ? [n] : Array.from(new Set([].concat(e, [n])))
              }))
            }), []),
            y = (0, d.useCallback)((function(n) {
              f((function(e) {
                return [].concat(e, [n])
              }))
            }), []),
            b = (0, d.useCallback)((function(n) {
              f((function(e) {
                return e.filter((function(e) {
                  return !bl(e, n)
                }))
              }))
            }), []);
          return (0, a.jsx)(_l.Provider, {
            value: {
              enabledScopes: u,
              hotkeys: l,
              enableScope: c,
              disableScope: A,
              toggleScope: p
            },
            children: (0, a.jsx)(yl, {
              addHotkey: y,
              removeHotkey: b,
              children: o
            })
          })
        },
        vl = function(n) {
          n.stopPropagation(), n.preventDefault(), n.stopImmediatePropagation()
        },
        kl = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect;

      function Bl(n, e, r, o) {
        var t = (0, d.useRef)(null),
          a = (0, d.useRef)(!1),
          u = r instanceof Array ? o instanceof Array ? void 0 : o : r,
          i = ll(n) ? n.join(null == u ? void 0 : u.splitKey) : n,
          s = r instanceof Array ? r : o instanceof Array ? o : void 0,
          l = (0, d.useCallback)(e, null != s ? s : []),
          f = (0, d.useRef)(l);
        f.current = s ? l : e;
        var c = function(n) {
            var e = (0, d.useRef)(void 0);
            return bl(e.current, n) || (e.current = n), e.current
          }(u),
          A = (0, d.useContext)(_l).enabledScopes,
          p = (0, d.useContext)(pl);
        return kl((function() {
          if (!1 !== (null == c ? void 0 : c.enabled) && (n = A, e = null == c ? void 0 : c.scopes, 0 === n.length && e ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !e || n.some((function(n) {
              return e.includes(n)
            })) || n.includes("*"))) {
            var n, e, r = function(n, e) {
                var r;
                if (void 0 === e && (e = !1), !Al(n, ["input", "textarea", "select"]) || Al(n, null == c ? void 0 : c.enableOnFormTags)) {
                  if (null !== t.current) {
                    var o = t.current.getRootNode();
                    if ((o instanceof Document || o instanceof ShadowRoot) && o.activeElement !== t.current && !t.current.contains(o.activeElement)) return void vl(n)
                  }(null == (r = n.target) || !r.isContentEditable || null != c && c.enableOnContentEditable) && dl(i, null == c ? void 0 : c.splitKey).forEach((function(r) {
                    var o, t = il(r, null == c ? void 0 : c.combinationKey);
                    if (function(n, e, r) {
                        void 0 === r && (r = !1);
                        var o, t, a = e.alt,
                          u = e.meta,
                          d = e.mod,
                          i = e.shift,
                          s = e.ctrl,
                          l = e.keys,
                          f = n.key,
                          c = n.code,
                          A = n.ctrlKey,
                          p = n.metaKey,
                          y = n.shiftKey,
                          b = n.altKey,
                          _ = ul(c),
                          C = f.toLowerCase();
                        if (!(null != l && l.includes(_) || null != l && l.includes(C) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(_))) return !1;
                        if (!r) {
                          if (a === !b && "alt" !== C) return !1;
                          if (i === !y && "shift" !== C) return !1;
                          if (d) {
                            if (!p && !A) return !1
                          } else {
                            if (u === !p && "meta" !== C && "os" !== C) return !1;
                            if (s === !A && "ctrl" !== C && "control" !== C) return !1
                          }
                        }
                        return !(!l || 1 !== l.length || !l.includes(C) && !l.includes(_)) || (l ? (void 0 === t && (t = ","), (ll(o = l) ? o : o.split(t)).every((function(n) {
                          return sl.has(n.trim().toLowerCase())
                        }))) : !l)
                      }(n, t, null == c ? void 0 : c.ignoreModifiers) || null != (o = t.keys) && o.includes("*")) {
                      if (null != c && null != c.ignoreEventWhen && c.ignoreEventWhen(n)) return;
                      if (e && a.current) return;
                      if (function(n, e, r) {
                          ("function" == typeof r && r(n, e) || !0 === r) && n.preventDefault()
                        }(n, t, null == c ? void 0 : c.preventDefault), ! function(n, e, r) {
                          return "function" == typeof r ? r(n, e) : !0 === r || void 0 === r
                        }(n, t, null == c ? void 0 : c.enabled)) return void vl(n);
                      f.current(n, t), e || (a.current = !0)
                    }
                  }))
                }
              },
              o = function(n) {
                void 0 !== n.key && (fl(ul(n.code)), (void 0 === (null == c ? void 0 : c.keydown) && !0 !== (null == c ? void 0 : c.keyup) || null != c && c.keydown) && r(n))
              },
              d = function(n) {
                void 0 !== n.key && (cl(ul(n.code)), a.current = !1, null != c && c.keyup && r(n, !0))
              },
              s = t.current || (null == u ? void 0 : u.document) || document;
            return s.addEventListener("keyup", d), s.addEventListener("keydown", o), p && dl(i, null == c ? void 0 : c.splitKey).forEach((function(n) {
                return p.addHotkey(il(n, null == c ? void 0 : c.combinationKey, null == c ? void 0 : c.description))
              })),
              function() {
                s.removeEventListener("keyup", d), s.removeEventListener("keydown", o), p && dl(i, null == c ? void 0 : c.splitKey).forEach((function(n) {
                  return p.removeHotkey(il(n, null == c ? void 0 : c.combinationKey, null == c ? void 0 : c.description))
                }))
              }
          }
        }), [i, c, A]), t
      }
      var gl = r(40492),
        ml = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function hl(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function El(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function wl(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? El(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = hl(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : El(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function xl(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      ml.setAttributes = b(), ml.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, ml.domAPI = p(), ml.insertStyleElement = C(), c()(gl.A, ml), gl.A && gl.A.locals && gl.A.locals;
      var jl = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        Sl = (n => {
          var e = e => {
            var r = n.defaultClassName,
              o = wl(wl({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) jl(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xl(n.variantClassNames, (n => xl(n, (n => n.split(" ")[0]))))
            }
          }, e
        })({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnua0 foundry_1qqcnua1",
              secondary: "foundry_1qqcnua0 foundry_1qqcnua2",
              tertiary: "foundry_1qqcnua0 foundry_1qqcnua3",
              ghost: "foundry_1qqcnua0 foundry_1qqcnua4",
              danger: "foundry_1qqcnua0 foundry_1qqcnua6",
              information: "foundry_1qqcnua0 foundry_1qqcnua5",
              monochrome: "foundry_1qqcnua0 foundry_1qqcnua7"
            },
            size: {
              XS: "foundry_a5x3kh9",
              SM: "foundry_a5x3kha",
              MD: "foundry_a5x3khb",
              LG: "foundry_a5x3khc"
            },
            fullWidth: {
              true: "foundry_a5x3khd",
              false: "foundry_a5x3khe"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ol = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        Pl = (0, d.forwardRef)((({
          testId: n,
          asChild: e,
          className: r,
          icon: o,
          label: t,
          appearance: s,
          size: l = "MD",
          fullWidth: f = !1,
          onClick: c,
          children: A,
          ...p
        }, y) => {
          const b = (0, d.useRef)(null),
            _ = Le(b, y),
            {
              events: C,
              others: v
            } = (0, u.bZ)(p, {
              onPress: !1
            }),
            {
              buttonProps: k,
              isPressed: B
            } = io({
              ...v,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: n => v.onPress?.(n) ?? c?.(n)
            }, b),
            g = (0, u.v6)({
              ...k,
              className: r
            }, {
              ...C,
              role: "button",
              "data-pressed": B,
              "data-testid": n,
              className: Sl({
                appearance: s,
                size: l,
                fullWidth: f
              })
            }),
            m = gn[o],
            h = e ? i.Slot : "button",
            E = Ol[l];
          return (0, a.jsxs)(h, {
            ref: _,
            ...g,
            children: [m && (0, a.jsx)(m, {
              label: t || "",
              size: E
            }), (0, a.jsx)(i.Slottable, {
              children: A
            })]
          })
        }));
      var ql = r(86845),
        zl = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      zl.setAttributes = b(), zl.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, zl.domAPI = p(), zl.insertStyleElement = C(), c()(ql.A, zl), ql.A && ql.A.locals && ql.A.locals;
      const Dl = (0, d.forwardRef)((({
        shortcut: n,
        isInline: e,
        onShortcut: r
      }, o) => (Bl(n, (n => r?.(n)), [r]), (0, a.jsx)(rn, {
        className: (0, Wn.$)("foundry_bc732x0", {
          foundry_bc732x1: e
        }),
        asChild: !0,
        children: (0, a.jsx)("kbd", {
          ref: o,
          children: n
        })
      }))));
      var Ll = /^--/;

      function Tl(n, e) {
        return null == e || "boolean" == typeof e || "" === e ? "" : "number" != typeof e || 0 === e || Ll.test(n) || Ml.hasOwnProperty(n) && Ml[n] ? ("" + e).trim() : e + "px"
      }
      var Nl = {},
        Ml = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        Fl = ["Webkit", "Ms", "Moz", "O"];
      Ml = Object.keys(Ml).reduce(((n, e) => (Fl.forEach((r => n[((n, e) => n + e.charAt(0).toUpperCase() + e.substring(1))(r, e)] = n[e])), n)), Ml);
      var Rl = /^(matrix|translate|scale|rotate|skew)/,
        Il = /^(translate)/,
        Gl = /^(rotate|skew)/,
        Vl = (n, e) => Pa.num(n) && 0 !== n ? n + e : n,
        Kl = (n, e) => Pa.arr(n) ? n.every((n => Kl(n, e))) : Pa.num(n) ? n === e : parseFloat(n) === e,
        Hl = class extends Ad {
          constructor({
            x: n,
            y: e,
            z: r,
            ...o
          }) {
            const t = [],
              a = [];
            (n || e || r) && (t.push([n || 0, e || 0, r || 0]), a.push((n => [`translate3d(${n.map((n=>Vl(n,"px"))).join(",")})`, Kl(n, 0)]))), Da(o, ((n, e) => {
              if ("transform" === e) t.push([n || ""]), a.push((n => [n, "" === n]));
              else if (Rl.test(e)) {
                if (delete o[e], Pa.und(n)) return;
                const r = Il.test(e) ? "px" : Gl.test(e) ? "deg" : "";
                t.push(La(n)), a.push("rotate3d" === e ? ([n, e, o, t]) => [`rotate3d(${n},${e},${o},${Vl(t,r)})`, Kl(t, 0)] : n => [`${e}(${n.map((n=>Vl(n,r))).join(",")})`, Kl(n, e.startsWith("scale") ? 1 : 0)])
              }
            })), t.length && (o.transform = new Wl(t, a)), super(o)
          }
        },
        Wl = class extends zu {
          constructor(n, e) {
            super(), this.inputs = n, this.transforms = e, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let n = "",
              e = !0;
            return za(this.inputs, ((r, o) => {
              const t = Ou(r[0]),
                [a, u] = this.transforms[o](Pa.arr(t) ? t : r.map(Ou));
              n += " " + a, e = e && u
            })), e ? "none" : n
          }
          observerAdded(n) {
            1 == n && za(this.inputs, (n => za(n, (n => Su(n) && Lu(n, this)))))
          }
          observerRemoved(n) {
            0 == n && za(this.inputs, (n => za(n, (n => Su(n) && Tu(n, this)))))
          }
          eventObserved(n) {
            "change" == n.type && (this._value = null), qu(this, n)
          }
        };
      Sa.assign({
        batchedUpdates: Pi.unstable_batchedUpdates,
        createStringInterpolator: $u,
        colors: nu
      });
      var $l = kd(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(n, e) {
            if (!n.nodeType || !n.setAttribute) return !1;
            const r = "filter" === n.nodeName || n.parentNode && "filter" === n.parentNode.nodeName,
              {
                className: o,
                style: t,
                children: a,
                scrollTop: u,
                scrollLeft: d,
                viewBox: i,
                ...s
              } = e,
              l = Object.values(s),
              f = Object.keys(s).map((e => r || n.hasAttribute(e) ? e : Nl[e] || (Nl[e] = e.replace(/([A-Z])/g, (n => "-" + n.toLowerCase())))));
            void 0 !== a && (n.textContent = a);
            for (const e in t)
              if (t.hasOwnProperty(e)) {
                const r = Tl(e, t[e]);
                Ll.test(e) ? n.style.setProperty(e, r) : n.style[e] = r
              } f.forEach(((e, r) => {
              n.setAttribute(e, l[r])
            })), void 0 !== o && (n.className = o), void 0 !== u && (n.scrollTop = u), void 0 !== d && (n.scrollLeft = d), void 0 !== i && n.setAttribute("viewBox", i)
          },
          createAnimatedStyle: n => new Hl(n),
          getComponentProps: ({
            scrollTop: n,
            scrollLeft: e,
            ...r
          }) => r
        }).animated,
        Ul = r(95923),
        Yl = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function Xl(n, e, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(o) {
          if (n?.(o), !1 === r || !o.defaultPrevented) return e?.(o)
        }
      }

      function Zl(...n) {
        return d.useCallback(function(...n) {
          return e => n.forEach((n => function(n, e) {
            "function" == typeof n ? n(e) : null != n && (n.current = e)
          }(n, e)))
        }(...n), n)
      }

      function Ql(...n) {
        const e = n[0];
        if (1 === n.length) return e;
        const r = () => {
          const r = n.map((n => ({
            useScope: n(),
            scopeName: n.scopeName
          })));
          return function(n) {
            const o = r.reduce(((e, {
              useScope: r,
              scopeName: o
            }) => ({
              ...e,
              ...r(n)[`__scope${o}`]
            })), {});
            return d.useMemo((() => ({
              [`__scope${e.scopeName}`]: o
            })), [o])
          }
        };
        return r.scopeName = e.scopeName, r
      }
      Yl.setAttributes = b(), Yl.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, Yl.domAPI = p(), Yl.insertStyleElement = C(), c()(Ul.A, Yl), Ul.A && Ul.A.locals && Ul.A.locals;
      var Jl, nf = r(22728),
        ef = r(26727),
        rf = r(62865),
        of = "dismissableLayer.update",
        tf = d.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        af = d.forwardRef(((n, e) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: t,
            onFocusOutside: u,
            onInteractOutside: i,
            onDismiss: s,
            ...l
          } = n, f = d.useContext(tf), [c, A] = d.useState(null), p = c?.ownerDocument ?? globalThis?.document, [, y] = d.useState({}), b = Zl(e, (n => A(n))), _ = Array.from(f.layers), [C] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), v = _.indexOf(C), k = c ? _.indexOf(c) : -1, B = f.layersWithOutsidePointerEventsDisabled.size > 0, g = k >= v, m = function(n, e = globalThis?.document) {
            const r = (0, ef.c)(n),
              o = d.useRef(!1),
              t = d.useRef((() => {}));
            return d.useEffect((() => {
              const n = n => {
                  if (n.target && !o.current) {
                    let o = function() {
                      df("dismissableLayer.pointerDownOutside", r, a, {
                        discrete: !0
                      })
                    };
                    const a = {
                      originalEvent: n
                    };
                    "touch" === n.pointerType ? (e.removeEventListener("click", t.current), t.current = o, e.addEventListener("click", t.current, {
                      once: !0
                    })) : o()
                  } else e.removeEventListener("click", t.current);
                  o.current = !1
                },
                a = window.setTimeout((() => {
                  e.addEventListener("pointerdown", n)
                }), 0);
              return () => {
                window.clearTimeout(a), e.removeEventListener("pointerdown", n), e.removeEventListener("click", t.current)
              }
            }), [e, r]), {
              onPointerDownCapture: () => o.current = !0
            }
          }((n => {
            const e = n.target,
              r = [...f.branches].some((n => n.contains(e)));
            g && !r && (t?.(n), i?.(n), n.defaultPrevented || s?.())
          }), p), h = function(n, e = globalThis?.document) {
            const r = (0, ef.c)(n),
              o = d.useRef(!1);
            return d.useEffect((() => {
              const n = n => {
                n.target && !o.current && df("dismissableLayer.focusOutside", r, {
                  originalEvent: n
                }, {
                  discrete: !1
                })
              };
              return e.addEventListener("focusin", n), () => e.removeEventListener("focusin", n)
            }), [e, r]), {
              onFocusCapture: () => o.current = !0,
              onBlurCapture: () => o.current = !1
            }
          }((n => {
            const e = n.target;
            [...f.branches].some((n => n.contains(e))) || (u?.(n), i?.(n), n.defaultPrevented || s?.())
          }), p);
          return (0, rf.U)((n => {
            k === f.layers.size - 1 && (o?.(n), !n.defaultPrevented && s && (n.preventDefault(), s()))
          }), p), d.useEffect((() => {
            if (c) return r && (0 === f.layersWithOutsidePointerEventsDisabled.size && (Jl = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(c)), f.layers.add(c), uf(), () => {
              r && 1 === f.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Jl)
            }
          }), [c, p, r, f]), d.useEffect((() => () => {
            c && (f.layers.delete(c), f.layersWithOutsidePointerEventsDisabled.delete(c), uf())
          }), [c, f]), d.useEffect((() => {
            const n = () => y({});
            return document.addEventListener(of, n), () => document.removeEventListener(of, n)
          }), []), (0, a.jsx)(nf.sG.div, {
            ...l,
            ref: b,
            style: {
              pointerEvents: B ? g ? "auto" : "none" : void 0,
              ...n.style
            },
            onFocusCapture: Xl(n.onFocusCapture, h.onFocusCapture),
            onBlurCapture: Xl(n.onBlurCapture, h.onBlurCapture),
            onPointerDownCapture: Xl(n.onPointerDownCapture, m.onPointerDownCapture)
          })
        }));

      function uf() {
        const n = new CustomEvent(of);
        document.dispatchEvent(n)
      }

      function df(n, e, r, {
        discrete: o
      }) {
        const t = r.originalEvent.target,
          a = new CustomEvent(n, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        e && t.addEventListener(n, e, {
          once: !0
        }), o ? (0, nf.hO)(t, a) : t.dispatchEvent(a)
      }
      af.displayName = "DismissableLayer", d.forwardRef(((n, e) => {
        const r = d.useContext(tf),
          o = d.useRef(null),
          t = Zl(e, o);
        return d.useEffect((() => {
          const n = o.current;
          if (n) return r.branches.add(n), () => {
            r.branches.delete(n)
          }
        }), [r.branches]), (0, a.jsx)(nf.sG.div, {
          ...n,
          ref: t
        })
      })).displayName = "DismissableLayerBranch";
      var sf = r(74406),
        lf = r(4519),
        ff = r(77102),
        cf = r(18001),
        Af = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((n, e) => {
          const r = d.forwardRef(((n, r) => {
            const {
              asChild: o,
              ...t
            } = n, u = o ? cs.Slot : e;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(u, {
              ...t,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${e}`, {
            ...n,
            [e]: r
          }
        }), {}),
        pf = d.forwardRef(((n, e) => {
          const {
            children: r,
            width: o = 10,
            height: t = 5,
            ...u
          } = n;
          return (0, a.jsx)(Af.svg, {
            ...u,
            ref: e,
            width: o,
            height: t,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: n.asChild ? r : (0, a.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }));
      pf.displayName = "Arrow";
      var yf = pf;

      function bf(...n) {
        return d.useCallback(function(...n) {
          return e => n.forEach((n => function(n, e) {
            "function" == typeof n ? n(e) : null != n && (n.current = e)
          }(n, e)))
        }(...n), n)
      }

      function _f(...n) {
        const e = n[0];
        if (1 === n.length) return e;
        const r = () => {
          const r = n.map((n => ({
            useScope: n(),
            scopeName: n.scopeName
          })));
          return function(n) {
            const o = r.reduce(((e, {
              useScope: r,
              scopeName: o
            }) => ({
              ...e,
              ...r(n)[`__scope${o}`]
            })), {});
            return d.useMemo((() => ({
              [`__scope${e.scopeName}`]: o
            })), [o])
          }
        };
        return r.scopeName = e.scopeName, r
      }
      var Cf = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((n, e) => {
          const r = d.forwardRef(((n, r) => {
            const {
              asChild: o,
              ...t
            } = n, u = o ? cs.Slot : e;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(u, {
              ...t,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${e}`, {
            ...n,
            [e]: r
          }
        }), {}),
        vf = r(92600),
        kf = "Popper",
        [Bf, gf] = function(n, e = []) {
          let r = [];
          const o = () => {
            const e = r.map((n => d.createContext(n)));
            return function(r) {
              const o = r?.[n] || e;
              return d.useMemo((() => ({
                [`__scope${n}`]: {
                  ...r,
                  [n]: o
                }
              })), [r, o])
            }
          };
          return o.scopeName = n, [function(e, o) {
            const t = d.createContext(o),
              u = r.length;

            function i(e) {
              const {
                scope: r,
                children: o,
                ...i
              } = e, s = r?.[n][u] || t, l = d.useMemo((() => i), Object.values(i));
              return (0, a.jsx)(s.Provider, {
                value: l,
                children: o
              })
            }
            return r = [...r, o], i.displayName = e + "Provider", [i, function(r, a) {
              const i = a?.[n][u] || t,
                s = d.useContext(i);
              if (s) return s;
              if (void 0 !== o) return o;
              throw new Error(`\`${r}\` must be used within \`${e}\``)
            }]
          }, _f(o, ...e)]
        }(kf),
        [mf, hf] = Bf(kf),
        Ef = n => {
          const {
            __scopePopper: e,
            children: r
          } = n, [o, t] = d.useState(null);
          return (0, a.jsx)(mf, {
            scope: e,
            anchor: o,
            onAnchorChange: t,
            children: r
          })
        };
      Ef.displayName = kf;
      var wf = "PopperAnchor",
        xf = d.forwardRef(((n, e) => {
          const {
            __scopePopper: r,
            virtualRef: o,
            ...t
          } = n, u = hf(wf, r), i = d.useRef(null), s = bf(e, i);
          return d.useEffect((() => {
            u.onAnchorChange(o?.current || i.current)
          })), o ? null : (0, a.jsx)(Cf.div, {
            ...t,
            ref: s
          })
        }));
      xf.displayName = wf;
      var jf = "PopperContent",
        [Sf, Of] = Bf(jf),
        Pf = d.forwardRef(((n, e) => {
          const {
            __scopePopper: r,
            side: o = "bottom",
            sideOffset: t = 0,
            align: u = "center",
            alignOffset: i = 0,
            arrowPadding: s = 0,
            avoidCollisions: l = !0,
            collisionBoundary: f = [],
            collisionPadding: c = 0,
            sticky: A = "partial",
            hideWhenDetached: p = !1,
            updatePositionStrategy: y = "optimized",
            onPlaced: b,
            ..._
          } = n, C = hf(jf, r), [v, k] = d.useState(null), B = bf(e, (n => k(n))), [g, m] = d.useState(null), h = (0, fs.X)(g), E = h?.width ?? 0, w = h?.height ?? 0, x = o + ("center" !== u ? "-" + u : ""), j = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, S = Array.isArray(f) ? f : [f], O = S.length > 0, P = {
            padding: j,
            boundary: S.filter(Lf),
            altBoundary: O
          }, {
            refs: q,
            floatingStyles: z,
            placement: D,
            isPositioned: L,
            middlewareData: T
          } = (0, lf.we)({
            strategy: "fixed",
            placement: x,
            whileElementsMounted: (...n) => (0, ff.ll)(...n, {
              animationFrame: "always" === y
            }),
            elements: {
              reference: C.anchor
            },
            middleware: [(0, cf.cY)({
              mainAxis: t + w,
              alignmentAxis: i
            }), l && (0, cf.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === A ? (0, cf.ER)() : void 0,
              ...P
            }), l && (0, cf.UU)({
              ...P
            }), (0, cf.Ej)({
              ...P,
              apply: ({
                elements: n,
                rects: e,
                availableWidth: r,
                availableHeight: o
              }) => {
                const {
                  width: t,
                  height: a
                } = e.reference, u = n.floating.style;
                u.setProperty("--radix-popper-available-width", `${r}px`), u.setProperty("--radix-popper-available-height", `${o}px`), u.setProperty("--radix-popper-anchor-width", `${t}px`), u.setProperty("--radix-popper-anchor-height", `${a}px`)
              }
            }), g && (0, lf.UE)({
              element: g,
              padding: s
            }), Tf({
              arrowWidth: E,
              arrowHeight: w
            }), p && (0, cf.jD)({
              strategy: "referenceHidden",
              ...P
            })]
          }), [N, M] = Nf(D), F = (0, ef.c)(b);
          (0, vf.N)((() => {
            L && F?.()
          }), [L, F]);
          const R = T.arrow?.x,
            I = T.arrow?.y,
            G = 0 !== T.arrow?.centerOffset,
            [V, K] = d.useState();
          return (0, vf.N)((() => {
            v && K(window.getComputedStyle(v).zIndex)
          }), [v]), (0, a.jsx)("div", {
            ref: q.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...z,
              transform: L ? z.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: V,
              "--radix-popper-transform-origin": [T.transformOrigin?.x, T.transformOrigin?.y].join(" "),
              ...T.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: n.dir,
            children: (0, a.jsx)(Sf, {
              scope: r,
              placedSide: N,
              onArrowChange: m,
              arrowX: R,
              arrowY: I,
              shouldHideArrow: G,
              children: (0, a.jsx)(Cf.div, {
                "data-side": N,
                "data-align": M,
                ..._,
                ref: B,
                style: {
                  ..._.style,
                  animation: L ? void 0 : "none"
                }
              })
            })
          })
        }));
      Pf.displayName = jf;
      var qf = "PopperArrow",
        zf = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Df = d.forwardRef((function(n, e) {
          const {
            __scopePopper: r,
            ...o
          } = n, t = Of(qf, r), u = zf[t.placedSide];
          return (0, a.jsx)("span", {
            ref: t.onArrowChange,
            style: {
              position: "absolute",
              left: t.arrowX,
              top: t.arrowY,
              [u]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [t.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [t.placedSide],
              visibility: t.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, a.jsx)(yf, {
              ...o,
              ref: e,
              style: {
                ...o.style,
                display: "block"
              }
            })
          })
        }));

      function Lf(n) {
        return null !== n
      }
      Df.displayName = qf;
      var Tf = n => ({
        name: "transformOrigin",
        options: n,
        fn(e) {
          const {
            placement: r,
            rects: o,
            middlewareData: t
          } = e, a = 0 !== t.arrow?.centerOffset, u = a ? 0 : n.arrowWidth, d = a ? 0 : n.arrowHeight, [i, s] = Nf(r), l = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [s], f = (t.arrow?.x ?? 0) + u / 2, c = (t.arrow?.y ?? 0) + d / 2;
          let A = "",
            p = "";
          return "bottom" === i ? (A = a ? l : `${f}px`, p = -d + "px") : "top" === i ? (A = a ? l : `${f}px`, p = `${o.floating.height+d}px`) : "right" === i ? (A = -d + "px", p = a ? l : `${c}px`) : "left" === i && (A = `${o.floating.width+d}px`, p = a ? l : `${c}px`), {
            data: {
              x: A,
              y: p
            }
          }
        }
      });

      function Nf(n) {
        const [e, r = "center"] = n.split("-");
        return [e, r]
      }
      var Mf = Ef,
        Ff = xf,
        Rf = Pf,
        If = Df,
        Gf = r(56679),
        Vf = n => {
          const {
            present: e,
            children: r
          } = n, o = function(n) {
            const [e, r] = d.useState(), o = d.useRef({}), t = d.useRef(n), a = d.useRef("none"), u = n ? "mounted" : "unmounted", [i, s] = function(n, e) {
              return d.useReducer(((n, r) => e[n][r] ?? n), n)
            }(u, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
            return d.useEffect((() => {
              const n = Kf(o.current);
              a.current = "mounted" === i ? n : "none"
            }), [i]), (0, vf.N)((() => {
              const e = o.current,
                r = t.current;
              if (r !== n) {
                const o = a.current,
                  u = Kf(e);
                s(n ? "MOUNT" : "none" === u || "none" === e?.display ? "UNMOUNT" : r && o !== u ? "ANIMATION_OUT" : "UNMOUNT"), t.current = n
              }
            }), [n, s]), (0, vf.N)((() => {
              if (e) {
                const n = n => {
                    const r = Kf(o.current).includes(n.animationName);
                    n.target === e && r && Pi.flushSync((() => s("ANIMATION_END")))
                  },
                  r = n => {
                    n.target === e && (a.current = Kf(o.current))
                  };
                return e.addEventListener("animationstart", r), e.addEventListener("animationcancel", n), e.addEventListener("animationend", n), () => {
                  e.removeEventListener("animationstart", r), e.removeEventListener("animationcancel", n), e.removeEventListener("animationend", n)
                }
              }
              s("ANIMATION_END")
            }), [e, s]), {
              isPresent: ["mounted", "unmountSuspended"].includes(i),
              ref: d.useCallback((n => {
                n && (o.current = getComputedStyle(n)), r(n)
              }), [])
            }
          }(e), t = "function" == typeof r ? r({
            present: o.isPresent
          }) : d.Children.only(r), a = Zl(o.ref, function(n) {
            let e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
              r = e && "isReactWarning" in e && e.isReactWarning;
            return r ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? n.props.ref : n.props.ref || n.ref)
          }(t));
          return "function" == typeof r || o.isPresent ? d.cloneElement(t, {
            ref: a
          }) : null
        };

      function Kf(n) {
        return n?.animationName || "none"
      }
      Vf.displayName = "Presence";
      var Hf = r(47773),
        [Wf, $f] = function(n, e = []) {
          let r = [];
          const o = () => {
            const e = r.map((n => d.createContext(n)));
            return function(r) {
              const o = r?.[n] || e;
              return d.useMemo((() => ({
                [`__scope${n}`]: {
                  ...r,
                  [n]: o
                }
              })), [r, o])
            }
          };
          return o.scopeName = n, [function(e, o) {
            const t = d.createContext(o),
              u = r.length;

            function i(e) {
              const {
                scope: r,
                children: o,
                ...i
              } = e, s = r?.[n][u] || t, l = d.useMemo((() => i), Object.values(i));
              return (0, a.jsx)(s.Provider, {
                value: l,
                children: o
              })
            }
            return r = [...r, o], i.displayName = e + "Provider", [i, function(r, a) {
              const i = a?.[n][u] || t,
                s = d.useContext(i);
              if (s) return s;
              if (void 0 !== o) return o;
              throw new Error(`\`${r}\` must be used within \`${e}\``)
            }]
          }, Ql(o, ...e)]
        }("Tooltip", [gf]),
        Uf = gf(),
        Yf = "TooltipProvider",
        Xf = 700,
        Zf = "tooltip.open",
        [Qf, Jf] = Wf(Yf),
        nc = n => {
          const {
            __scopeTooltip: e,
            delayDuration: r = Xf,
            skipDelayDuration: o = 300,
            disableHoverableContent: t = !1,
            children: u
          } = n, [i, s] = d.useState(!0), l = d.useRef(!1), f = d.useRef(0);
          return d.useEffect((() => {
            const n = f.current;
            return () => window.clearTimeout(n)
          }), []), (0, a.jsx)(Qf, {
            scope: e,
            isOpenDelayed: i,
            delayDuration: r,
            onOpen: d.useCallback((() => {
              window.clearTimeout(f.current), s(!1)
            }), []),
            onClose: d.useCallback((() => {
              window.clearTimeout(f.current), f.current = window.setTimeout((() => s(!0)), o)
            }), [o]),
            isPointerInTransitRef: l,
            onPointerInTransitChange: d.useCallback((n => {
              l.current = n
            }), []),
            disableHoverableContent: t,
            children: u
          })
        };
      nc.displayName = Yf;
      var ec = "Tooltip",
        [rc, oc] = Wf(ec),
        tc = n => {
          const {
            __scopeTooltip: e,
            children: r,
            open: o,
            defaultOpen: t = !1,
            onOpenChange: u,
            disableHoverableContent: i,
            delayDuration: s
          } = n, l = Jf(ec, n.__scopeTooltip), f = Uf(e), [c, A] = d.useState(null), p = (0, sf.useId)(), y = d.useRef(0), b = i ?? l.disableHoverableContent, _ = s ?? l.delayDuration, C = d.useRef(!1), [v = !1, k] = (0, is.i)({
            prop: o,
            defaultProp: t,
            onChange: n => {
              n ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Zf))) : l.onClose(), u?.(n)
            }
          }), B = d.useMemo((() => v ? C.current ? "delayed-open" : "instant-open" : "closed"), [v]), g = d.useCallback((() => {
            window.clearTimeout(y.current), C.current = !1, k(!0)
          }), [k]), m = d.useCallback((() => {
            window.clearTimeout(y.current), k(!1)
          }), [k]), h = d.useCallback((() => {
            window.clearTimeout(y.current), y.current = window.setTimeout((() => {
              C.current = !0, k(!0)
            }), _)
          }), [_, k]);
          return d.useEffect((() => () => window.clearTimeout(y.current)), []), (0, a.jsx)(Mf, {
            ...f,
            children: (0, a.jsx)(rc, {
              scope: e,
              contentId: p,
              open: v,
              stateAttribute: B,
              trigger: c,
              onTriggerChange: A,
              onTriggerEnter: d.useCallback((() => {
                l.isOpenDelayed ? h() : g()
              }), [l.isOpenDelayed, h, g]),
              onTriggerLeave: d.useCallback((() => {
                b ? m() : window.clearTimeout(y.current)
              }), [m, b]),
              onOpen: g,
              onClose: m,
              disableHoverableContent: b,
              children: r
            })
          })
        };
      tc.displayName = ec;
      var ac = "TooltipTrigger",
        uc = d.forwardRef(((n, e) => {
          const {
            __scopeTooltip: r,
            ...o
          } = n, t = oc(ac, r), u = Jf(ac, r), i = Uf(r), s = Zl(e, d.useRef(null), t.onTriggerChange), l = d.useRef(!1), f = d.useRef(!1), c = d.useCallback((() => l.current = !1), []);
          return d.useEffect((() => () => document.removeEventListener("pointerup", c)), [c]), (0, a.jsx)(Ff, {
            asChild: !0,
            ...i,
            children: (0, a.jsx)(nf.sG.button, {
              "aria-describedby": t.open ? t.contentId : void 0,
              "data-state": t.stateAttribute,
              ...o,
              ref: s,
              onPointerMove: Xl(n.onPointerMove, (n => {
                "touch" !== n.pointerType && (f.current || u.isPointerInTransitRef.current || (t.onTriggerEnter(), f.current = !0))
              })),
              onPointerLeave: Xl(n.onPointerLeave, (() => {
                t.onTriggerLeave(), f.current = !1
              })),
              onPointerDown: Xl(n.onPointerDown, (() => {
                l.current = !0, document.addEventListener("pointerup", c, {
                  once: !0
                })
              })),
              onFocus: Xl(n.onFocus, (() => {
                l.current || t.onOpen()
              })),
              onBlur: Xl(n.onBlur, t.onClose),
              onClick: Xl(n.onClick, t.onClose)
            })
          })
        }));
      uc.displayName = ac;
      var dc = "TooltipPortal",
        [ic, sc] = Wf(dc, {
          forceMount: void 0
        }),
        lc = n => {
          const {
            __scopeTooltip: e,
            forceMount: r,
            children: o,
            container: t
          } = n, u = oc(dc, e);
          return (0, a.jsx)(ic, {
            scope: e,
            forceMount: r,
            children: (0, a.jsx)(Vf, {
              present: r || u.open,
              children: (0, a.jsx)(Gf.Portal, {
                asChild: !0,
                container: t,
                children: o
              })
            })
          })
        };
      lc.displayName = dc;
      var fc = "TooltipContent",
        cc = d.forwardRef(((n, e) => {
          const r = sc(fc, n.__scopeTooltip),
            {
              forceMount: o = r.forceMount,
              side: t = "top",
              ...u
            } = n,
            d = oc(fc, n.__scopeTooltip);
          return (0, a.jsx)(Vf, {
            present: o || d.open,
            children: d.disableHoverableContent ? (0, a.jsx)(bc, {
              side: t,
              ...u,
              ref: e
            }) : (0, a.jsx)(Ac, {
              side: t,
              ...u,
              ref: e
            })
          })
        })),
        Ac = d.forwardRef(((n, e) => {
          const r = oc(fc, n.__scopeTooltip),
            o = Jf(fc, n.__scopeTooltip),
            t = d.useRef(null),
            u = Zl(e, t),
            [i, s] = d.useState(null),
            {
              trigger: l,
              onClose: f
            } = r,
            c = t.current,
            {
              onPointerInTransitChange: A
            } = o,
            p = d.useCallback((() => {
              s(null), A(!1)
            }), [A]),
            y = d.useCallback(((n, e) => {
              const r = n.currentTarget,
                o = {
                  x: n.clientX,
                  y: n.clientY
                },
                t = function(n, e, r = 5) {
                  const o = [];
                  switch (e) {
                    case "top":
                      o.push({
                        x: n.x - r,
                        y: n.y + r
                      }, {
                        x: n.x + r,
                        y: n.y + r
                      });
                      break;
                    case "bottom":
                      o.push({
                        x: n.x - r,
                        y: n.y - r
                      }, {
                        x: n.x + r,
                        y: n.y - r
                      });
                      break;
                    case "left":
                      o.push({
                        x: n.x + r,
                        y: n.y - r
                      }, {
                        x: n.x + r,
                        y: n.y + r
                      });
                      break;
                    case "right":
                      o.push({
                        x: n.x - r,
                        y: n.y - r
                      }, {
                        x: n.x - r,
                        y: n.y + r
                      })
                  }
                  return o
                }(o, function(n, e) {
                  const r = Math.abs(e.top - n.y),
                    o = Math.abs(e.bottom - n.y),
                    t = Math.abs(e.right - n.x),
                    a = Math.abs(e.left - n.x);
                  switch (Math.min(r, o, t, a)) {
                    case a:
                      return "left";
                    case t:
                      return "right";
                    case r:
                      return "top";
                    case o:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(o, r.getBoundingClientRect())),
                a = function(n) {
                  const e = n.slice();
                  return e.sort(((n, e) => n.x < e.x ? -1 : n.x > e.x ? 1 : n.y < e.y ? -1 : n.y > e.y ? 1 : 0)),
                    function(n) {
                      if (n.length <= 1) return n.slice();
                      const e = [];
                      for (let r = 0; r < n.length; r++) {
                        const o = n[r];
                        for (; e.length >= 2;) {
                          const n = e[e.length - 1],
                            r = e[e.length - 2];
                          if (!((n.x - r.x) * (o.y - r.y) >= (n.y - r.y) * (o.x - r.x))) break;
                          e.pop()
                        }
                        e.push(o)
                      }
                      e.pop();
                      const r = [];
                      for (let e = n.length - 1; e >= 0; e--) {
                        const o = n[e];
                        for (; r.length >= 2;) {
                          const n = r[r.length - 1],
                            e = r[r.length - 2];
                          if (!((n.x - e.x) * (o.y - e.y) >= (n.y - e.y) * (o.x - e.x))) break;
                          r.pop()
                        }
                        r.push(o)
                      }
                      return r.pop(), 1 === e.length && 1 === r.length && e[0].x === r[0].x && e[0].y === r[0].y ? e : e.concat(r)
                    }(e)
                }([...t, ... function(n) {
                  const {
                    top: e,
                    right: r,
                    bottom: o,
                    left: t
                  } = n;
                  return [{
                    x: t,
                    y: e
                  }, {
                    x: r,
                    y: e
                  }, {
                    x: r,
                    y: o
                  }, {
                    x: t,
                    y: o
                  }]
                }(e.getBoundingClientRect())]);
              s(a), A(!0)
            }), [A]);
          return d.useEffect((() => () => p()), [p]), d.useEffect((() => {
            if (l && c) {
              const n = n => y(n, c),
                e = n => y(n, l);
              return l.addEventListener("pointerleave", n), c.addEventListener("pointerleave", e), () => {
                l.removeEventListener("pointerleave", n), c.removeEventListener("pointerleave", e)
              }
            }
          }), [l, c, y, p]), d.useEffect((() => {
            if (i) {
              const n = n => {
                const e = n.target,
                  r = {
                    x: n.clientX,
                    y: n.clientY
                  },
                  o = l?.contains(e) || c?.contains(e),
                  t = ! function(n, e) {
                    const {
                      x: r,
                      y: o
                    } = n;
                    let t = !1;
                    for (let n = 0, a = e.length - 1; n < e.length; a = n++) {
                      const u = e[n].x,
                        d = e[n].y,
                        i = e[a].x,
                        s = e[a].y;
                      d > o != s > o && r < (i - u) * (o - d) / (s - d) + u && (t = !t)
                    }
                    return t
                  }(r, i);
                o ? p() : t && (p(), f())
              };
              return document.addEventListener("pointermove", n), () => document.removeEventListener("pointermove", n)
            }
          }), [l, c, i, f, p]), (0, a.jsx)(bc, {
            ...n,
            ref: u
          })
        })),
        [pc, yc] = Wf(ec, {
          isInside: !1
        }),
        bc = d.forwardRef(((n, e) => {
          const {
            __scopeTooltip: r,
            children: o,
            "aria-label": t,
            onEscapeKeyDown: u,
            onPointerDownOutside: i,
            ...s
          } = n, l = oc(fc, r), f = Uf(r), {
            onClose: c
          } = l;
          return d.useEffect((() => (document.addEventListener(Zf, c), () => document.removeEventListener(Zf, c))), [c]), d.useEffect((() => {
            if (l.trigger) {
              const n = n => {
                const e = n.target;
                e?.contains(l.trigger) && c()
              };
              return window.addEventListener("scroll", n, {
                capture: !0
              }), () => window.removeEventListener("scroll", n, {
                capture: !0
              })
            }
          }), [l.trigger, c]), (0, a.jsx)(af, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: u,
            onPointerDownOutside: i,
            onFocusOutside: n => n.preventDefault(),
            onDismiss: c,
            children: (0, a.jsxs)(Rf, {
              "data-state": l.stateAttribute,
              ...f,
              ...s,
              ref: e,
              style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, a.jsx)(cs.Slottable, {
                children: o
              }), (0, a.jsx)(pc, {
                scope: r,
                isInside: !0,
                children: (0, a.jsx)(Hf.Root, {
                  id: l.contentId,
                  role: "tooltip",
                  children: t || o
                })
              })]
            })
          })
        }));
      cc.displayName = fc;
      var _c = "TooltipArrow",
        Cc = d.forwardRef(((n, e) => {
          const {
            __scopeTooltip: r,
            ...o
          } = n, t = Uf(r);
          return yc(_c, r).isInside ? null : (0, a.jsx)(If, {
            ...t,
            ...o,
            ref: e
          })
        }));
      Cc.displayName = _c;
      var vc = nc,
        kc = tc,
        Bc = uc,
        gc = lc,
        mc = cc,
        hc = Cc;
      const Ec = ({
        content: n,
        children: e,
        side: r = "top",
        sideOffset: o = 8,
        align: t = "center",
        alignOffset: u = 0,
        avoidCollisions: i = !0,
        collisionBoundary: s,
        collisionPadding: l,
        sticky: f = "partial",
        onEscapeKeyDown: c,
        onPointerDownOutside: A,
        label: p,
        defaultOpen: y,
        open: b,
        onOpenChange: _,
        delayDuration: C = 400,
        portal: v = !0,
        arrow: k = !0,
        portalContainer: B,
        testId: g
      }) => {
        const [m = !1, h] = Ne({
          defaultProp: y,
          prop: b,
          onChange: _
        }), E = De(m), w = wi({
          opacity: m ? 1 : 0,
          immediate: m && !E
        }), x = "left" === r || "right" === r ? "center" : t, j = v ? {
          container: B
        } : {}, S = v ? gc : d.Fragment, O = k ? {
          className: "foundry_h3lgaa2"
        } : {}, P = k ? hc : d.Fragment;
        return (0, a.jsx)(vc, {
          delayDuration: C,
          children: (0, a.jsxs)(kc, {
            open: m,
            onOpenChange: h,
            children: [(0, a.jsx)(Bc, {
              asChild: !0,
              className: "foundry_h3lgaa3",
              onClick: n => n.preventDefault?.(),
              children: e
            }), (0, a.jsx)(S, {
              ...j,
              children: (0, a.jsx)(mc, {
                side: r,
                align: x,
                sticky: f,
                forceMount: !0,
                "aria-label": p,
                "data-testid": g,
                sideOffset: o,
                alignOffset: u,
                onEscapeKeyDown: c,
                avoidCollisions: i,
                collisionPadding: l,
                collisionBoundary: s,
                onPointerDownOutside: A,
                children: (0, a.jsxs)($l.div, {
                  className: "foundry_h3lgaa0",
                  style: w,
                  children: [(0, a.jsx)($, {
                    className: "foundry_h3lgaa1",
                    children: n
                  }), (0, a.jsx)(P, {
                    ...O
                  })]
                })
              })
            })]
          })
        })
      };
      var wc = r(36033),
        xc = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      xc.setAttributes = b(), xc.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, xc.domAPI = p(), xc.insertStyleElement = C(), c()(wc.A, xc), wc.A && wc.A.locals && wc.A.locals;
      var jc = "foundry_bwy1ds1",
        Sc = "foundry_bwy1dsg",
        Oc = "foundry_bwy1dsf";
      const Pc = n => {
        n.preventDefault?.()
      };
      (0, d.forwardRef)((({
        onClose: n,
        onDownload: e,
        zoomLevel: r,
        zoomIn: o,
        zoomOut: t,
        zoomTo: u,
        minZoomLevel: d,
        maxZoomLevel: i,
        canZoomIn: s,
        canZoomOut: l,
        resetZoom: f,
        caption: c,
        showDownloadButton: A,
        defaultZoomLevel: p,
        showZoomControls: y
      }, b) => {
        const _ = Ji(),
          C = ze("screen and (max-width: 1024px)"),
          v = r !== p,
          k = C ? "SM" : "LG",
          B = wi({
            opacity: v ? 1 : 0,
            immediate: ze("(prefers-reduced-motion: reduce)", {
              defaultValue: !1,
              initializeWithValue: !0
            })
          });
        Bl(["+", "=", "add", "plus"], (() => o?.()), {
          preventDefault: !0,
          enabled: y
        }), Bl(["minus", "subtract"], (() => t?.()), {
          preventDefault: !0,
          enabled: y
        }), Bl("r", (() => f?.()), {
          preventDefault: !0,
          enabled: y
        });
        const g = function(n = !0) {
          return !!n && ze("screen and (pointer: coarse) and (hover: none)")
        }() && C;
        return (0, a.jsx)(Cl, {
          children: (0, a.jsxs)("div", {
            className: "foundry_bwy1ds0",
            ref: b,
            children: [(0, a.jsx)(Ec, {
              side: "right",
              portal: !1,
              delayDuration: 0,
              onPointerDownOutside: Pc,
              content: (0, a.jsxs)("div", {
                className: Oc,
                children: [_.formatMessage(Hs), (0, a.jsx)(rn, {
                  className: Sc,
                  children: _.formatMessage(Ws, {
                    shortcut: (0, a.jsx)(Dl, {
                      shortcut: "Esc",
                      isInline: !0
                    })
                  })
                })]
              }),
              children: (0, a.jsx)(Pl, {
                size: k,
                appearance: "tertiary",
                icon: "ArrowLeft",
                label: _.formatMessage(Hs),
                className: (0, Wn.$)(jc, "foundry_bwy1ds2"),
                onPress: n
              })
            }), (0, a.jsxs)("div", {
              className: "foundry_bwy1ds3",
              children: [!g && y && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: "foundry_bwy1ds4",
                  children: [(0, a.jsx)(Ec, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Pc,
                    content: (0, a.jsxs)("div", {
                      className: Oc,
                      children: [_.formatMessage($s), (0, a.jsx)(rn, {
                        className: Sc,
                        children: _.formatMessage(Us, {
                          shortcut: (0, a.jsx)(Dl, {
                            shortcut: "+",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, a.jsx)(Pl, {
                      size: k,
                      appearance: "tertiary",
                      icon: "Plus",
                      label: _.formatMessage($s),
                      className: (0, Wn.$)(jc, "foundry_bwy1ds5"),
                      onPress: () => o(),
                      isDisabled: !s
                    })
                  }), (0, a.jsxs)(Is, {
                    className: "foundry_bwy1dsa",
                    value: [r],
                    max: i,
                    min: d,
                    step: 1,
                    orientation: "vertical",
                    onValueChange: n => u?.(n[0]),
                    children: [(0, a.jsx)(Gs, {
                      className: "foundry_bwy1dsb",
                      children: (0, a.jsx)(Vs, {
                        className: "foundry_bwy1dsc"
                      })
                    }), (0, a.jsx)(Ec, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Pc,
                      content: _.formatMessage(nl, {
                        zoom: r.toFixed(0)
                      }),
                      children: (0, a.jsx)(Ks, {
                        className: "foundry_bwy1dsd",
                        "aria-label": _.formatMessage(Js),
                        children: (0, a.jsx)("span", {
                          className: "foundry_bwy1dse"
                        })
                      })
                    })]
                  }), (0, a.jsx)(Ec, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Pc,
                    content: (0, a.jsxs)("div", {
                      className: Oc,
                      children: [_.formatMessage(Ys), (0, a.jsx)(rn, {
                        className: Sc,
                        children: _.formatMessage(Xs, {
                          shortcut: (0, a.jsx)(Dl, {
                            shortcut: "-",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, a.jsx)(Pl, {
                      size: k,
                      appearance: "tertiary",
                      icon: "Minus",
                      label: _.formatMessage(Ys),
                      className: (0, Wn.$)(jc, "foundry_bwy1ds6"),
                      onPress: () => t(),
                      isDisabled: !l
                    })
                  })]
                }), (0, a.jsx)(Ki.div, {
                  style: B,
                  children: (0, a.jsx)(Ec, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Pc,
                    content: (0, a.jsxs)("div", {
                      className: Oc,
                      children: [_.formatMessage(Zs), (0, a.jsx)(rn, {
                        className: Sc,
                        children: _.formatMessage(Qs, {
                          shortcut: (0, a.jsx)(Dl, {
                            shortcut: "R",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, a.jsx)(Pl, {
                      size: k,
                      appearance: "tertiary",
                      icon: "Revert",
                      label: _.formatMessage(Zs),
                      className: (0, Wn.$)(jc, "foundry_bwy1ds7"),
                      onPress: f,
                      isDisabled: !v,
                      "aria-hidden": !v
                    })
                  })
                })]
              }), A && g && (0, a.jsx)(Ec, {
                side: "left",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: Pc,
                content: _.formatMessage(rl),
                children: (0, a.jsx)(Pl, {
                  size: k,
                  appearance: "tertiary",
                  icon: "Download",
                  label: _.formatMessage(el),
                  className: jc,
                  onPress: n
                })
              })]
            }), (0, a.jsxs)("div", {
              className: "foundry_bwy1ds8",
              children: [c && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                  className: "foundry_bwy1dsh"
                }), (0, a.jsx)(M, {
                  "aria-hidden": !0,
                  asChild: "string" != typeof c,
                  children: c
                })]
              }), A && !g && (0, a.jsx)("div", {
                className: "foundry_bwy1ds9",
                children: (0, a.jsx)(Ec, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: Pc,
                  content: _.formatMessage(rl),
                  children: (0, a.jsx)(Pl, {
                    size: k,
                    appearance: "tertiary",
                    icon: "Download",
                    label: _.formatMessage(el),
                    className: jc,
                    onPress: e
                  })
                })
              })]
            })]
          })
        })
      }));
      var qc = r(86365),
        zc = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      zc.setAttributes = b(), zc.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, zc.domAPI = p(), zc.insertStyleElement = C(), c()(qc.A, zc), qc.A && qc.A.locals && qc.A.locals;
      var Dc = r(35755);

      function Lc(n, e, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(o) {
          if (n?.(o), !1 === r || !o.defaultPrevented) return e?.(o)
        }
      }

      function Tc(n, e = []) {
        let r = [];
        const o = () => {
          const e = r.map((n => d.createContext(n)));
          return function(r) {
            const o = r?.[n] || e;
            return d.useMemo((() => ({
              [`__scope${n}`]: {
                ...r,
                [n]: o
              }
            })), [r, o])
          }
        };
        return o.scopeName = n, [function(e, o) {
          const t = d.createContext(o),
            u = r.length;

          function i(e) {
            const {
              scope: r,
              children: o,
              ...i
            } = e, s = r?.[n][u] || t, l = d.useMemo((() => i), Object.values(i));
            return (0, a.jsx)(s.Provider, {
              value: l,
              children: o
            })
          }
          return r = [...r, o], i.displayName = e + "Provider", [i, function(r, a) {
            const i = a?.[n][u] || t,
              s = d.useContext(i);
            if (s) return s;
            if (void 0 !== o) return o;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }, Nc(o, ...e)]
      }

      function Nc(...n) {
        const e = n[0];
        if (1 === n.length) return e;
        const r = () => {
          const r = n.map((n => ({
            useScope: n(),
            scopeName: n.scopeName
          })));
          return function(n) {
            const o = r.reduce(((e, {
              useScope: r,
              scopeName: o
            }) => ({
              ...e,
              ...r(n)[`__scope${o}`]
            })), {});
            return d.useMemo((() => ({
              [`__scope${e.scopeName}`]: o
            })), [o])
          }
        };
        return r.scopeName = e.scopeName, r
      }

      function Mc(...n) {
        return d.useCallback(function(...n) {
          return e => n.forEach((n => function(n, e) {
            "function" == typeof n ? n(e) : null != n && (n.current = e)
          }(n, e)))
        }(...n), n)
      }
      Ki(Dc.Overlay), Ki(Dc.Content), (0, u.AK)(.77, 0, .175, 1);
      var Fc, Rc = r(85413),
        Ic = "dismissableLayer.update",
        Gc = d.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Vc = d.forwardRef(((n, e) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: t,
            onFocusOutside: u,
            onInteractOutside: i,
            onDismiss: s,
            ...l
          } = n, f = d.useContext(Gc), [c, A] = d.useState(null), p = c?.ownerDocument ?? globalThis?.document, [, y] = d.useState({}), b = Mc(e, (n => A(n))), _ = Array.from(f.layers), [C] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), v = _.indexOf(C), k = c ? _.indexOf(c) : -1, B = f.layersWithOutsidePointerEventsDisabled.size > 0, g = k >= v, m = function(n, e = globalThis?.document) {
            const r = (0, ef.c)(n),
              o = d.useRef(!1),
              t = d.useRef((() => {}));
            return d.useEffect((() => {
              const n = n => {
                  if (n.target && !o.current) {
                    let o = function() {
                      Hc("dismissableLayer.pointerDownOutside", r, a, {
                        discrete: !0
                      })
                    };
                    const a = {
                      originalEvent: n
                    };
                    "touch" === n.pointerType ? (e.removeEventListener("click", t.current), t.current = o, e.addEventListener("click", t.current, {
                      once: !0
                    })) : o()
                  } else e.removeEventListener("click", t.current);
                  o.current = !1
                },
                a = window.setTimeout((() => {
                  e.addEventListener("pointerdown", n)
                }), 0);
              return () => {
                window.clearTimeout(a), e.removeEventListener("pointerdown", n), e.removeEventListener("click", t.current)
              }
            }), [e, r]), {
              onPointerDownCapture: () => o.current = !0
            }
          }((n => {
            const e = n.target,
              r = [...f.branches].some((n => n.contains(e)));
            g && !r && (t?.(n), i?.(n), n.defaultPrevented || s?.())
          }), p), h = function(n, e = globalThis?.document) {
            const r = (0, ef.c)(n),
              o = d.useRef(!1);
            return d.useEffect((() => {
              const n = n => {
                n.target && !o.current && Hc("dismissableLayer.focusOutside", r, {
                  originalEvent: n
                }, {
                  discrete: !1
                })
              };
              return e.addEventListener("focusin", n), () => e.removeEventListener("focusin", n)
            }), [e, r]), {
              onFocusCapture: () => o.current = !0,
              onBlurCapture: () => o.current = !1
            }
          }((n => {
            const e = n.target;
            [...f.branches].some((n => n.contains(e))) || (u?.(n), i?.(n), n.defaultPrevented || s?.())
          }), p);
          return (0, rf.U)((n => {
            k === f.layers.size - 1 && (o?.(n), !n.defaultPrevented && s && (n.preventDefault(), s()))
          }), p), d.useEffect((() => {
            if (c) return r && (0 === f.layersWithOutsidePointerEventsDisabled.size && (Fc = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(c)), f.layers.add(c), Kc(), () => {
              r && 1 === f.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Fc)
            }
          }), [c, p, r, f]), d.useEffect((() => () => {
            c && (f.layers.delete(c), f.layersWithOutsidePointerEventsDisabled.delete(c), Kc())
          }), [c, f]), d.useEffect((() => {
            const n = () => y({});
            return document.addEventListener(Ic, n), () => document.removeEventListener(Ic, n)
          }), []), (0, a.jsx)(Rc.sG.div, {
            ...l,
            ref: b,
            style: {
              pointerEvents: B ? g ? "auto" : "none" : void 0,
              ...n.style
            },
            onFocusCapture: Lc(n.onFocusCapture, h.onFocusCapture),
            onBlurCapture: Lc(n.onBlurCapture, h.onBlurCapture),
            onPointerDownCapture: Lc(n.onPointerDownCapture, m.onPointerDownCapture)
          })
        }));

      function Kc() {
        const n = new CustomEvent(Ic);
        document.dispatchEvent(n)
      }

      function Hc(n, e, r, {
        discrete: o
      }) {
        const t = r.originalEvent.target,
          a = new CustomEvent(n, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        e && t.addEventListener(n, e, {
          once: !0
        }), o ? (0, Rc.hO)(t, a) : t.dispatchEvent(a)
      }
      Vc.displayName = "DismissableLayer", d.forwardRef(((n, e) => {
        const r = d.useContext(Gc),
          o = d.useRef(null),
          t = Mc(e, o);
        return d.useEffect((() => {
          const n = o.current;
          if (n) return r.branches.add(n), () => {
            r.branches.delete(n)
          }
        }), [r.branches]), (0, a.jsx)(Rc.sG.div, {
          ...n,
          ref: t
        })
      })).displayName = "DismissableLayerBranch";
      var Wc = 0;

      function $c() {
        const n = document.createElement("span");
        return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", n
      }
      var Uc = "focusScope.autoFocusOnMount",
        Yc = "focusScope.autoFocusOnUnmount",
        Xc = {
          bubbles: !1,
          cancelable: !0
        },
        Zc = d.forwardRef(((n, e) => {
          const {
            loop: r = !1,
            trapped: o = !1,
            onMountAutoFocus: t,
            onUnmountAutoFocus: u,
            ...i
          } = n, [s, l] = d.useState(null), f = (0, ef.c)(t), c = (0, ef.c)(u), A = d.useRef(null), p = Mc(e, (n => l(n))), y = d.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          d.useEffect((() => {
            if (o) {
              let n = function(n) {
                  if (y.paused || !s) return;
                  const e = n.target;
                  s.contains(e) ? A.current = e : eA(A.current, {
                    select: !0
                  })
                },
                e = function(n) {
                  if (y.paused || !s) return;
                  const e = n.relatedTarget;
                  null !== e && (s.contains(e) || eA(A.current, {
                    select: !0
                  }))
                },
                r = function(n) {
                  if (document.activeElement === document.body)
                    for (const e of n) e.removedNodes.length > 0 && eA(s)
                };
              document.addEventListener("focusin", n), document.addEventListener("focusout", e);
              const o = new MutationObserver(r);
              return s && o.observe(s, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", n), document.removeEventListener("focusout", e), o.disconnect()
              }
            }
          }), [o, s, y.paused]), d.useEffect((() => {
            if (s) {
              rA.add(y);
              const n = document.activeElement;
              if (!s.contains(n)) {
                const e = new CustomEvent(Uc, Xc);
                s.addEventListener(Uc, f), s.dispatchEvent(e), e.defaultPrevented || (function(n, {
                  select: e = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const o of n)
                    if (eA(o, {
                        select: e
                      }), document.activeElement !== r) return
                }(Qc(s).filter((n => "A" !== n.tagName)), {
                  select: !0
                }), document.activeElement === n && eA(s))
              }
              return () => {
                s.removeEventListener(Uc, f), setTimeout((() => {
                  const e = new CustomEvent(Yc, Xc);
                  s.addEventListener(Yc, c), s.dispatchEvent(e), e.defaultPrevented || eA(n ?? document.body, {
                    select: !0
                  }), s.removeEventListener(Yc, c), rA.remove(y)
                }), 0)
              }
            }
          }), [s, f, c, y]);
          const b = d.useCallback((n => {
            if (!r && !o) return;
            if (y.paused) return;
            const e = "Tab" === n.key && !n.altKey && !n.ctrlKey && !n.metaKey,
              t = document.activeElement;
            if (e && t) {
              const e = n.currentTarget,
                [o, a] = function(n) {
                  const e = Qc(n);
                  return [Jc(e, n), Jc(e.reverse(), n)]
                }(e);
              o && a ? n.shiftKey || t !== a ? n.shiftKey && t === o && (n.preventDefault(), r && eA(a, {
                select: !0
              })) : (n.preventDefault(), r && eA(o, {
                select: !0
              })) : t === e && n.preventDefault()
            }
          }), [r, o, y.paused]);
          return (0, a.jsx)(Rc.sG.div, {
            tabIndex: -1,
            ...i,
            ref: p,
            onKeyDown: b
          })
        }));

      function Qc(n) {
        const e = [],
          r = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
            acceptNode: n => {
              const e = "INPUT" === n.tagName && "hidden" === n.type;
              return n.disabled || n.hidden || e ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; r.nextNode();) e.push(r.currentNode);
        return e
      }

      function Jc(n, e) {
        for (const r of n)
          if (!nA(r, {
              upTo: e
            })) return r
      }

      function nA(n, {
        upTo: e
      }) {
        if ("hidden" === getComputedStyle(n).visibility) return !0;
        for (; n;) {
          if (void 0 !== e && n === e) return !1;
          if ("none" === getComputedStyle(n).display) return !0;
          n = n.parentElement
        }
        return !1
      }

      function eA(n, {
        select: e = !1
      } = {}) {
        if (n && n.focus) {
          const r = document.activeElement;
          n.focus({
            preventScroll: !0
          }), n !== r && function(n) {
            return n instanceof HTMLInputElement && "select" in n
          }(n) && e && n.select()
        }
      }
      Zc.displayName = "FocusScope";
      var rA = function() {
        let n = [];
        return {
          add(e) {
            const r = n[0];
            e !== r && r?.pause(), n = oA(n, e), n.unshift(e)
          },
          remove(e) {
            n = oA(n, e), n[0]?.resume()
          }
        }
      }();

      function oA(n, e) {
        const r = [...n],
          o = r.indexOf(e);
        return -1 !== o && r.splice(o, 1), r
      }
      var tA = r(52072),
        aA = r(53648),
        uA = r(91270),
        dA = r(19690),
        iA = [" ", "Enter", "ArrowUp", "ArrowDown"],
        sA = [" ", "Enter"],
        lA = "Select",
        [fA, cA, AA] = function(n) {
          const e = n + "CollectionProvider",
            [r, o] = Tc(e),
            [t, u] = r(e, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            i = n => {
              const {
                scope: e,
                children: r
              } = n, o = d.useRef(null), u = d.useRef(new Map).current;
              return (0, a.jsx)(t, {
                scope: e,
                itemMap: u,
                collectionRef: o,
                children: r
              })
            };
          i.displayName = e;
          const s = n + "CollectionSlot",
            l = d.forwardRef(((n, e) => {
              const {
                scope: r,
                children: o
              } = n, t = Mc(e, u(s, r).collectionRef);
              return (0, a.jsx)(cs.Slot, {
                ref: t,
                children: o
              })
            }));
          l.displayName = s;
          const f = n + "CollectionItemSlot",
            c = "data-radix-collection-item",
            A = d.forwardRef(((n, e) => {
              const {
                scope: r,
                children: o,
                ...t
              } = n, i = d.useRef(null), s = Mc(e, i), l = u(f, r);
              return d.useEffect((() => (l.itemMap.set(i, {
                ref: i,
                ...t
              }), () => {
                l.itemMap.delete(i)
              }))), (0, a.jsx)(cs.Slot, {
                [c]: "",
                ref: s,
                children: o
              })
            }));
          return A.displayName = f, [{
            Provider: i,
            Slot: l,
            ItemSlot: A
          }, function(e) {
            const r = u(n + "CollectionConsumer", e);
            return d.useCallback((() => {
              const n = r.collectionRef.current;
              if (!n) return [];
              const e = Array.from(n.querySelectorAll(`[${c}]`));
              return Array.from(r.itemMap.values()).sort(((n, r) => e.indexOf(n.ref.current) - e.indexOf(r.ref.current)))
            }), [r.collectionRef, r.itemMap])
          }, o]
        }(lA),
        [pA, yA] = Tc(lA, [AA, gf]),
        bA = gf(),
        [_A, CA] = pA(lA),
        [vA, kA] = pA(lA),
        BA = n => {
          const {
            __scopeSelect: e,
            children: r,
            open: o,
            defaultOpen: t,
            onOpenChange: u,
            value: i,
            defaultValue: s,
            onValueChange: l,
            dir: f,
            name: c,
            autoComplete: A,
            disabled: p,
            required: y
          } = n, b = bA(e), [_, C] = d.useState(null), [v, k] = d.useState(null), [B, g] = d.useState(!1), m = (0, ss.jH)(f), [h = !1, E] = (0, is.i)({
            prop: o,
            defaultProp: t,
            onChange: u
          }), [w, x] = (0, is.i)({
            prop: i,
            defaultProp: s,
            onChange: l
          }), j = d.useRef(null), S = !_ || Boolean(_.closest("form")), [O, P] = d.useState(new Set), q = Array.from(O).map((n => n.props.value)).join(";");
          return (0, a.jsx)(Mf, {
            ...b,
            children: (0, a.jsxs)(_A, {
              required: y,
              scope: e,
              trigger: _,
              onTriggerChange: C,
              valueNode: v,
              onValueNodeChange: k,
              valueNodeHasChildren: B,
              onValueNodeHasChildrenChange: g,
              contentId: (0, sf.useId)(),
              value: w,
              onValueChange: x,
              open: h,
              onOpenChange: E,
              dir: m,
              triggerPointerDownPosRef: j,
              disabled: p,
              children: [(0, a.jsx)(fA.Provider, {
                scope: e,
                children: (0, a.jsx)(vA, {
                  scope: n.__scopeSelect,
                  onNativeOptionAdd: d.useCallback((n => {
                    P((e => new Set(e).add(n)))
                  }), []),
                  onNativeOptionRemove: d.useCallback((n => {
                    P((e => {
                      const r = new Set(e);
                      return r.delete(n), r
                    }))
                  }), []),
                  children: r
                })
              }), S ? (0, a.jsxs)(rp, {
                "aria-hidden": !0,
                required: y,
                tabIndex: -1,
                name: c,
                autoComplete: A,
                value: w,
                onChange: n => x(n.target.value),
                disabled: p,
                children: [void 0 === w ? (0, a.jsx)("option", {
                  value: ""
                }) : null, Array.from(O)]
              }, q) : null]
            })
          })
        };
      BA.displayName = lA;
      var gA = "SelectTrigger",
        mA = d.forwardRef(((n, e) => {
          const {
            __scopeSelect: r,
            disabled: o = !1,
            ...t
          } = n, u = bA(r), d = CA(gA, r), i = d.disabled || o, s = Mc(e, d.onTriggerChange), l = cA(r), [f, c, A] = op((n => {
            const e = l().filter((n => !n.disabled)),
              r = e.find((n => n.value === d.value)),
              o = tp(e, n, r);
            void 0 !== o && d.onValueChange(o.value)
          })), p = () => {
            i || (d.onOpenChange(!0), A())
          };
          return (0, a.jsx)(Ff, {
            asChild: !0,
            ...u,
            children: (0, a.jsx)(Rc.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": d.contentId,
              "aria-expanded": d.open,
              "aria-required": d.required,
              "aria-autocomplete": "none",
              dir: d.dir,
              "data-state": d.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": ep(d.value) ? "" : void 0,
              ...t,
              ref: s,
              onClick: Lc(t.onClick, (n => {
                n.currentTarget.focus()
              })),
              onPointerDown: Lc(t.onPointerDown, (n => {
                const e = n.target;
                e.hasPointerCapture(n.pointerId) && e.releasePointerCapture(n.pointerId), 0 === n.button && !1 === n.ctrlKey && (p(), d.triggerPointerDownPosRef.current = {
                  x: Math.round(n.pageX),
                  y: Math.round(n.pageY)
                }, n.preventDefault())
              })),
              onKeyDown: Lc(t.onKeyDown, (n => {
                const e = "" !== f.current;
                n.ctrlKey || n.altKey || n.metaKey || 1 !== n.key.length || c(n.key), e && " " === n.key || iA.includes(n.key) && (p(), n.preventDefault())
              }))
            })
          })
        }));
      mA.displayName = gA;
      var hA = "SelectValue",
        EA = d.forwardRef(((n, e) => {
          const {
            __scopeSelect: r,
            className: o,
            style: t,
            children: u,
            placeholder: d = "",
            ...i
          } = n, s = CA(hA, r), {
            onValueNodeHasChildrenChange: l
          } = s, f = void 0 !== u, c = Mc(e, s.onValueNodeChange);
          return (0, vf.N)((() => {
            l(f)
          }), [l, f]), (0, a.jsx)(Rc.sG.span, {
            ...i,
            ref: c,
            style: {
              pointerEvents: "none"
            },
            children: ep(s.value) ? (0, a.jsx)(a.Fragment, {
              children: d
            }) : u
          })
        }));
      EA.displayName = hA;
      var wA = d.forwardRef(((n, e) => {
        const {
          __scopeSelect: r,
          children: o,
          ...t
        } = n;
        return (0, a.jsx)(Rc.sG.span, {
          "aria-hidden": !0,
          ...t,
          ref: e,
          children: o || "▼"
        })
      }));
      wA.displayName = "SelectIcon";
      var xA = n => (0, a.jsx)(tA.Portal, {
        asChild: !0,
        ...n
      });
      xA.displayName = "SelectPortal";
      var jA = "SelectContent",
        SA = d.forwardRef(((n, e) => {
          const r = CA(jA, n.__scopeSelect),
            [o, t] = d.useState();
          if ((0, vf.N)((() => {
              t(new DocumentFragment)
            }), []), !r.open) {
            const e = o;
            return e ? Pi.createPortal((0, a.jsx)(PA, {
              scope: n.__scopeSelect,
              children: (0, a.jsx)(fA.Slot, {
                scope: n.__scopeSelect,
                children: (0, a.jsx)("div", {
                  children: n.children
                })
              })
            }), e) : null
          }
          return (0, a.jsx)(zA, {
            ...n,
            ref: e
          })
        }));
      SA.displayName = jA;
      var OA = 10,
        [PA, qA] = pA(jA),
        zA = d.forwardRef(((n, e) => {
          const {
            __scopeSelect: r,
            position: o = "item-aligned",
            onCloseAutoFocus: t,
            onEscapeKeyDown: u,
            onPointerDownOutside: i,
            side: s,
            sideOffset: l,
            align: f,
            alignOffset: c,
            arrowPadding: A,
            collisionBoundary: p,
            collisionPadding: y,
            sticky: b,
            hideWhenDetached: _,
            avoidCollisions: C,
            ...v
          } = n, k = CA(jA, r), [B, g] = d.useState(null), [m, h] = d.useState(null), E = Mc(e, (n => g(n))), [w, x] = d.useState(null), [j, S] = d.useState(null), O = cA(r), [P, q] = d.useState(!1), z = d.useRef(!1);
          d.useEffect((() => {
            if (B) return (0, uA.Eq)(B)
          }), [B]), d.useEffect((() => {
            const n = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", n[0] ?? $c()), document.body.insertAdjacentElement("beforeend", n[1] ?? $c()), Wc++, () => {
              1 === Wc && document.querySelectorAll("[data-radix-focus-guard]").forEach((n => n.remove())), Wc--
            }
          }), []);
          const D = d.useCallback((n => {
              const [e, ...r] = O().map((n => n.ref.current)), [o] = r.slice(-1), t = document.activeElement;
              for (const r of n) {
                if (r === t) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === e && m && (m.scrollTop = 0), r === o && m && (m.scrollTop = m.scrollHeight), r?.focus(), document.activeElement !== t) return
              }
            }), [O, m]),
            L = d.useCallback((() => D([w, B])), [D, w, B]);
          d.useEffect((() => {
            P && L()
          }), [P, L]);
          const {
            onOpenChange: T,
            triggerPointerDownPosRef: N
          } = k;
          d.useEffect((() => {
            if (B) {
              let n = {
                x: 0,
                y: 0
              };
              const e = e => {
                  n = {
                    x: Math.abs(Math.round(e.pageX) - (N.current?.x ?? 0)),
                    y: Math.abs(Math.round(e.pageY) - (N.current?.y ?? 0))
                  }
                },
                r = r => {
                  n.x <= 10 && n.y <= 10 ? r.preventDefault() : B.contains(r.target) || T(!1), document.removeEventListener("pointermove", e), N.current = null
                };
              return null !== N.current && (document.addEventListener("pointermove", e), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", e), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }), [B, T, N]), d.useEffect((() => {
            const n = () => T(!1);
            return window.addEventListener("blur", n), window.addEventListener("resize", n), () => {
              window.removeEventListener("blur", n), window.removeEventListener("resize", n)
            }
          }), [T]);
          const [M, F] = op((n => {
            const e = O().filter((n => !n.disabled)),
              r = e.find((n => n.ref.current === document.activeElement)),
              o = tp(e, n, r);
            o && setTimeout((() => o.ref.current.focus()))
          })), R = d.useCallback(((n, e, r) => {
            const o = !z.current && !r;
            (void 0 !== k.value && k.value === e || o) && (x(n), o && (z.current = !0))
          }), [k.value]), I = d.useCallback((() => B?.focus()), [B]), G = d.useCallback(((n, e, r) => {
            const o = !z.current && !r;
            (void 0 !== k.value && k.value === e || o) && S(n)
          }), [k.value]), V = "popper" === o ? LA : DA, K = V === LA ? {
            side: s,
            sideOffset: l,
            align: f,
            alignOffset: c,
            arrowPadding: A,
            collisionBoundary: p,
            collisionPadding: y,
            sticky: b,
            hideWhenDetached: _,
            avoidCollisions: C
          } : {};
          return (0, a.jsx)(PA, {
            scope: r,
            content: B,
            viewport: m,
            onViewportChange: h,
            itemRefCallback: R,
            selectedItem: w,
            onItemLeave: I,
            itemTextRefCallback: G,
            focusSelectedItem: L,
            selectedItemText: j,
            position: o,
            isPositioned: P,
            searchRef: M,
            children: (0, a.jsx)(dA.RemoveScroll, {
              as: cs.Slot,
              allowPinchZoom: !0,
              children: (0, a.jsx)(Zc, {
                asChild: !0,
                trapped: k.open,
                onMountAutoFocus: n => {
                  n.preventDefault()
                },
                onUnmountAutoFocus: Lc(t, (n => {
                  k.trigger?.focus({
                    preventScroll: !0
                  }), n.preventDefault()
                })),
                children: (0, a.jsx)(Vc, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: u,
                  onPointerDownOutside: i,
                  onFocusOutside: n => n.preventDefault(),
                  onDismiss: () => k.onOpenChange(!1),
                  children: (0, a.jsx)(V, {
                    role: "listbox",
                    id: k.contentId,
                    "data-state": k.open ? "open" : "closed",
                    dir: k.dir,
                    onContextMenu: n => n.preventDefault(),
                    ...v,
                    ...K,
                    onPlaced: () => q(!0),
                    ref: E,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...v.style
                    },
                    onKeyDown: Lc(v.onKeyDown, (n => {
                      const e = n.ctrlKey || n.altKey || n.metaKey;
                      if ("Tab" === n.key && n.preventDefault(), e || 1 !== n.key.length || F(n.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
                        const e = O().filter((n => !n.disabled));
                        let r = e.map((n => n.ref.current));
                        if (["ArrowUp", "End"].includes(n.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(n.key)) {
                          const e = n.target,
                            o = r.indexOf(e);
                          r = r.slice(o + 1)
                        }
                        setTimeout((() => D(r))), n.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      zA.displayName = "SelectContentImpl";
      var DA = d.forwardRef(((n, e) => {
        const {
          __scopeSelect: r,
          onPlaced: o,
          ...t
        } = n, u = CA(jA, r), i = qA(jA, r), [s, l] = d.useState(null), [f, c] = d.useState(null), A = Mc(e, (n => c(n))), p = cA(r), y = d.useRef(!1), b = d.useRef(!0), {
          viewport: _,
          selectedItem: C,
          selectedItemText: v,
          focusSelectedItem: k
        } = i, B = d.useCallback((() => {
          if (u.trigger && u.valueNode && s && f && _ && C && v) {
            const n = u.trigger.getBoundingClientRect(),
              e = f.getBoundingClientRect(),
              r = u.valueNode.getBoundingClientRect(),
              t = v.getBoundingClientRect();
            if ("rtl" !== u.dir) {
              const o = t.left - e.left,
                a = r.left - o,
                u = n.left - a,
                d = n.width + u,
                i = Math.max(d, e.width),
                l = window.innerWidth - OA,
                f = os(a, [OA, l - i]);
              s.style.minWidth = d + "px", s.style.left = f + "px"
            } else {
              const o = e.right - t.right,
                a = window.innerWidth - r.right - o,
                u = window.innerWidth - n.right - a,
                d = n.width + u,
                i = Math.max(d, e.width),
                l = window.innerWidth - OA,
                f = os(a, [OA, l - i]);
              s.style.minWidth = d + "px", s.style.right = f + "px"
            }
            const a = p(),
              d = window.innerHeight - 2 * OA,
              i = _.scrollHeight,
              l = window.getComputedStyle(f),
              c = parseInt(l.borderTopWidth, 10),
              A = parseInt(l.paddingTop, 10),
              b = parseInt(l.borderBottomWidth, 10),
              k = c + A + i + parseInt(l.paddingBottom, 10) + b,
              B = Math.min(5 * C.offsetHeight, k),
              g = window.getComputedStyle(_),
              m = parseInt(g.paddingTop, 10),
              h = parseInt(g.paddingBottom, 10),
              E = n.top + n.height / 2 - OA,
              w = d - E,
              x = C.offsetHeight / 2,
              j = c + A + (C.offsetTop + x),
              S = k - j;
            if (j <= E) {
              const n = C === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const e = f.clientHeight - _.offsetTop - _.offsetHeight,
                r = j + Math.max(w, x + (n ? h : 0) + e + b);
              s.style.height = r + "px"
            } else {
              const n = C === a[0].ref.current;
              s.style.top = "0px";
              const e = Math.max(E, c + _.offsetTop + (n ? m : 0) + x) + S;
              s.style.height = e + "px", _.scrollTop = j - E + _.offsetTop
            }
            s.style.margin = `${OA}px 0`, s.style.minHeight = B + "px", s.style.maxHeight = d + "px", o?.(), requestAnimationFrame((() => y.current = !0))
          }
        }), [p, u.trigger, u.valueNode, s, f, _, C, v, u.dir, o]);
        (0, vf.N)((() => B()), [B]);
        const [g, m] = d.useState();
        (0, vf.N)((() => {
          f && m(window.getComputedStyle(f).zIndex)
        }), [f]);
        const h = d.useCallback((n => {
          n && !0 === b.current && (B(), k?.(), b.current = !1)
        }), [B, k]);
        return (0, a.jsx)(TA, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: h,
          children: (0, a.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: g
            },
            children: (0, a.jsx)(Rc.sG.div, {
              ...t,
              ref: A,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...t.style
              }
            })
          })
        })
      }));
      DA.displayName = "SelectItemAlignedPosition";
      var LA = d.forwardRef(((n, e) => {
        const {
          __scopeSelect: r,
          align: o = "start",
          collisionPadding: t = OA,
          ...u
        } = n, d = bA(r);
        return (0, a.jsx)(Rf, {
          ...d,
          ...u,
          ref: e,
          align: o,
          collisionPadding: t,
          style: {
            boxSizing: "border-box",
            ...u.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }));
      LA.displayName = "SelectPopperPosition";
      var [TA, NA] = pA(jA, {}), MA = "SelectViewport", FA = d.forwardRef(((n, e) => {
        const {
          __scopeSelect: r,
          nonce: o,
          ...t
        } = n, u = qA(MA, r), i = NA(MA, r), s = Mc(e, u.onViewportChange), l = d.useRef(0);
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, a.jsx)(fA.Slot, {
            scope: r,
            children: (0, a.jsx)(Rc.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...t,
              ref: s,
              style: {
                position: "relative",
                flex: 1,
                overflow: "auto",
                ...t.style
              },
              onScroll: Lc(t.onScroll, (n => {
                const e = n.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: o
                  } = i;
                if (o?.current && r) {
                  const n = Math.abs(l.current - e.scrollTop);
                  if (n > 0) {
                    const o = window.innerHeight - 2 * OA,
                      t = parseFloat(r.style.minHeight),
                      a = parseFloat(r.style.height),
                      u = Math.max(t, a);
                    if (u < o) {
                      const t = u + n,
                        a = Math.min(o, t),
                        d = t - a;
                      r.style.height = a + "px", "0px" === r.style.bottom && (e.scrollTop = d > 0 ? d : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = e.scrollTop
              }))
            })
          })]
        })
      }));
      FA.displayName = MA;
      var RA = "SelectGroup",
        [IA, GA] = pA(RA);
      d.forwardRef(((n, e) => {
        const {
          __scopeSelect: r,
          ...o
        } = n, t = (0, sf.useId)();
        return (0, a.jsx)(IA, {
          scope: r,
          id: t,
          children: (0, a.jsx)(Rc.sG.div, {
            role: "group",
            "aria-labelledby": t,
            ...o,
            ref: e
          })
        })
      })).displayName = RA;
      var VA = "SelectLabel";
      d.forwardRef(((n, e) => {
        const {
          __scopeSelect: r,
          ...o
        } = n, t = GA(VA, r);
        return (0, a.jsx)(Rc.sG.div, {
          id: t.id,
          ...o,
          ref: e
        })
      })).displayName = VA;
      var KA = "SelectItem",
        [HA, WA] = pA(KA),
        $A = d.forwardRef(((n, e) => {
          const {
            __scopeSelect: r,
            value: o,
            disabled: t = !1,
            textValue: u,
            ...i
          } = n, s = CA(KA, r), l = qA(KA, r), f = s.value === o, [c, A] = d.useState(u ?? ""), [p, y] = d.useState(!1), b = Mc(e, (n => l.itemRefCallback?.(n, o, t))), _ = (0, sf.useId)(), C = () => {
            t || (s.onValueChange(o), s.onOpenChange(!1))
          };
          if ("" === o) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, a.jsx)(HA, {
            scope: r,
            value: o,
            disabled: t,
            textId: _,
            isSelected: f,
            onItemTextChange: d.useCallback((n => {
              A((e => e || (n?.textContent ?? "").trim()))
            }), []),
            children: (0, a.jsx)(fA.ItemSlot, {
              scope: r,
              value: o,
              disabled: t,
              textValue: c,
              children: (0, a.jsx)(Rc.sG.div, {
                role: "option",
                "aria-labelledby": _,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": f && p,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": t || void 0,
                "data-disabled": t ? "" : void 0,
                tabIndex: t ? void 0 : -1,
                ...i,
                ref: b,
                onFocus: Lc(i.onFocus, (() => y(!0))),
                onBlur: Lc(i.onBlur, (() => y(!1))),
                onPointerUp: Lc(i.onPointerUp, C),
                onPointerMove: Lc(i.onPointerMove, (n => {
                  t ? l.onItemLeave?.() : n.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: Lc(i.onPointerLeave, (n => {
                  n.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: Lc(i.onKeyDown, (n => {
                  "" !== l.searchRef?.current && " " === n.key || (sA.includes(n.key) && C(), " " === n.key && n.preventDefault())
                }))
              })
            })
          })
        }));
      $A.displayName = KA;
      var UA = "SelectItemText",
        YA = d.forwardRef(((n, e) => {
          const {
            __scopeSelect: r,
            className: o,
            style: t,
            ...u
          } = n, i = CA(UA, r), s = qA(UA, r), l = WA(UA, r), f = kA(UA, r), [c, A] = d.useState(null), p = Mc(e, (n => A(n)), l.onItemTextChange, (n => s.itemTextRefCallback?.(n, l.value, l.disabled))), y = c?.textContent, b = d.useMemo((() => (0, a.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: y
          }, l.value)), [l.disabled, l.value, y]), {
            onNativeOptionAdd: _,
            onNativeOptionRemove: C
          } = f;
          return (0, vf.N)((() => (_(b), () => C(b))), [_, C, b]), (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(Rc.sG.span, {
              id: l.textId,
              ...u,
              ref: p
            }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Pi.createPortal(u.children, i.valueNode) : null]
          })
        }));
      YA.displayName = UA;
      var XA = "SelectItemIndicator";
      d.forwardRef(((n, e) => {
        const {
          __scopeSelect: r,
          ...o
        } = n;
        return WA(XA, r).isSelected ? (0, a.jsx)(Rc.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: e
        }) : null
      })).displayName = XA;
      var ZA = "SelectScrollUpButton";
      d.forwardRef(((n, e) => {
        const r = qA(ZA, n.__scopeSelect),
          o = NA(ZA, n.__scopeSelect),
          [t, u] = d.useState(!1),
          i = Mc(e, o.onScrollButtonChange);
        return (0, vf.N)((() => {
          if (r.viewport && r.isPositioned) {
            let n = function() {
              const n = e.scrollTop > 0;
              u(n)
            };
            const e = r.viewport;
            return n(), e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
          }
        }), [r.viewport, r.isPositioned]), t ? (0, a.jsx)(JA, {
          ...n,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: n,
              selectedItem: e
            } = r;
            n && e && (n.scrollTop = n.scrollTop - e.offsetHeight)
          }
        }) : null
      })).displayName = ZA;
      var QA = "SelectScrollDownButton";
      d.forwardRef(((n, e) => {
        const r = qA(QA, n.__scopeSelect),
          o = NA(QA, n.__scopeSelect),
          [t, u] = d.useState(!1),
          i = Mc(e, o.onScrollButtonChange);
        return (0, vf.N)((() => {
          if (r.viewport && r.isPositioned) {
            let n = function() {
              const n = e.scrollHeight - e.clientHeight,
                r = Math.ceil(e.scrollTop) < n;
              u(r)
            };
            const e = r.viewport;
            return n(), e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
          }
        }), [r.viewport, r.isPositioned]), t ? (0, a.jsx)(JA, {
          ...n,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: n,
              selectedItem: e
            } = r;
            n && e && (n.scrollTop = n.scrollTop + e.offsetHeight)
          }
        }) : null
      })).displayName = QA;
      var JA = d.forwardRef(((n, e) => {
        const {
          __scopeSelect: r,
          onAutoScroll: o,
          ...t
        } = n, u = qA("SelectScrollButton", r), i = d.useRef(null), s = cA(r), l = d.useCallback((() => {
          null !== i.current && (window.clearInterval(i.current), i.current = null)
        }), []);
        return d.useEffect((() => () => l()), [l]), (0, vf.N)((() => {
          const n = s().find((n => n.ref.current === document.activeElement));
          n?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, a.jsx)(Rc.sG.div, {
          "aria-hidden": !0,
          ...t,
          ref: e,
          style: {
            flexShrink: 0,
            ...t.style
          },
          onPointerDown: Lc(t.onPointerDown, (() => {
            null === i.current && (i.current = window.setInterval(o, 50))
          })),
          onPointerMove: Lc(t.onPointerMove, (() => {
            u.onItemLeave?.(), null === i.current && (i.current = window.setInterval(o, 50))
          })),
          onPointerLeave: Lc(t.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      d.forwardRef(((n, e) => {
        const {
          __scopeSelect: r,
          ...o
        } = n;
        return (0, a.jsx)(Rc.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: e
        })
      })).displayName = "SelectSeparator";
      var np = "SelectArrow";

      function ep(n) {
        return "" === n || void 0 === n
      }
      d.forwardRef(((n, e) => {
        const {
          __scopeSelect: r,
          ...o
        } = n, t = bA(r), u = CA(np, r), d = qA(np, r);
        return u.open && "popper" === d.position ? (0, a.jsx)(If, {
          ...t,
          ...o,
          ref: e
        }) : null
      })).displayName = np;
      var rp = d.forwardRef(((n, e) => {
        const {
          value: r,
          ...o
        } = n, t = d.useRef(null), u = Mc(e, t), i = (0, ls.Z)(r);
        return d.useEffect((() => {
          const n = t.current,
            e = window.HTMLSelectElement.prototype,
            o = Object.getOwnPropertyDescriptor(e, "value").set;
          if (i !== r && o) {
            const e = new Event("change", {
              bubbles: !0
            });
            o.call(n, r), n.dispatchEvent(e)
          }
        }), [i, r]), (0, a.jsx)(aA.VisuallyHidden, {
          asChild: !0,
          children: (0, a.jsx)("select", {
            ...o,
            ref: u,
            defaultValue: r
          })
        })
      }));

      function op(n) {
        const e = (0, ef.c)(n),
          r = d.useRef(""),
          o = d.useRef(0),
          t = d.useCallback((n => {
            const t = r.current + n;
            e(t),
              function n(e) {
                r.current = e, window.clearTimeout(o.current), "" !== e && (o.current = window.setTimeout((() => n("")), 1e3))
              }(t)
          }), [e]),
          a = d.useCallback((() => {
            r.current = "", window.clearTimeout(o.current)
          }), []);
        return d.useEffect((() => () => window.clearTimeout(o.current)), []), [r, t, a]
      }

      function tp(n, e, r) {
        const o = e.length > 1 && Array.from(e).every((n => n === e[0])) ? e[0] : e,
          t = r ? n.indexOf(r) : -1;
        let a = (u = n, d = Math.max(t, 0), u.map(((n, e) => u[(d + e) % u.length])));
        var u, d;
        1 === o.length && (a = a.filter((n => n !== r)));
        const i = a.find((n => n.textValue.toLowerCase().startsWith(o.toLowerCase())));
        return i !== r ? i : void 0
      }
      rp.displayName = "BubbleSelect";
      var ap = BA,
        up = mA,
        dp = EA,
        ip = wA,
        sp = xA,
        lp = SA,
        fp = FA,
        cp = $A,
        Ap = YA,
        pp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((n, e) => {
          const r = d.forwardRef(((n, r) => {
            const {
              asChild: o,
              ...t
            } = n, u = o ? cs.Slot : e;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(u, {
              ...t,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${e}`, {
            ...n,
            [e]: r
          }
        }), {});

      function yp(...n) {
        return d.useCallback(function(...n) {
          return e => n.forEach((n => function(n, e) {
            "function" == typeof n ? n(e) : null != n && (n.current = e)
          }(n, e)))
        }(...n), n)
      }
      var bp = n => {
        const {
          present: e,
          children: r
        } = n, o = function(n) {
          const [e, r] = d.useState(), o = d.useRef({}), t = d.useRef(n), a = d.useRef("none"), u = n ? "mounted" : "unmounted", [i, s] = function(n, e) {
            return d.useReducer(((n, r) => e[n][r] ?? n), n)
          }(u, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted"
            },
            unmounted: {
              MOUNT: "mounted"
            }
          });
          return d.useEffect((() => {
            const n = _p(o.current);
            a.current = "mounted" === i ? n : "none"
          }), [i]), (0, vf.N)((() => {
            const e = o.current,
              r = t.current;
            if (r !== n) {
              const o = a.current,
                u = _p(e);
              s(n ? "MOUNT" : "none" === u || "none" === e?.display ? "UNMOUNT" : r && o !== u ? "ANIMATION_OUT" : "UNMOUNT"), t.current = n
            }
          }), [n, s]), (0, vf.N)((() => {
            if (e) {
              const n = n => {
                  const r = _p(o.current).includes(n.animationName);
                  n.target === e && r && Pi.flushSync((() => s("ANIMATION_END")))
                },
                r = n => {
                  n.target === e && (a.current = _p(o.current))
                };
              return e.addEventListener("animationstart", r), e.addEventListener("animationcancel", n), e.addEventListener("animationend", n), () => {
                e.removeEventListener("animationstart", r), e.removeEventListener("animationcancel", n), e.removeEventListener("animationend", n)
              }
            }
            s("ANIMATION_END")
          }), [e, s]), {
            isPresent: ["mounted", "unmountSuspended"].includes(i),
            ref: d.useCallback((n => {
              n && (o.current = getComputedStyle(n)), r(n)
            }), [])
          }
        }(e), t = "function" == typeof r ? r({
          present: o.isPresent
        }) : d.Children.only(r), a = yp(o.ref, function(n) {
          let e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
            r = e && "isReactWarning" in e && e.isReactWarning;
          return r ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? n.props.ref : n.props.ref || n.ref)
        }(t));
        return "function" == typeof r || o.isPresent ? d.cloneElement(t, {
          ref: a
        }) : null
      };

      function _p(n) {
        return n?.animationName || "none"
      }

      function Cp(...n) {
        const e = n[0];
        if (1 === n.length) return e;
        const r = () => {
          const r = n.map((n => ({
            useScope: n(),
            scopeName: n.scopeName
          })));
          return function(n) {
            const o = r.reduce(((e, {
              useScope: r,
              scopeName: o
            }) => ({
              ...e,
              ...r(n)[`__scope${o}`]
            })), {});
            return d.useMemo((() => ({
              [`__scope${e.scopeName}`]: o
            })), [o])
          }
        };
        return r.scopeName = e.scopeName, r
      }

      function vp(n, e, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(o) {
          if (n?.(o), !1 === r || !o.defaultPrevented) return e?.(o)
        }
      }
      bp.displayName = "Presence";
      var kp = "ScrollArea",
        [Bp, gp] = function(n, e = []) {
          let r = [];
          const o = () => {
            const e = r.map((n => d.createContext(n)));
            return function(r) {
              const o = r?.[n] || e;
              return d.useMemo((() => ({
                [`__scope${n}`]: {
                  ...r,
                  [n]: o
                }
              })), [r, o])
            }
          };
          return o.scopeName = n, [function(e, o) {
            const t = d.createContext(o),
              u = r.length;

            function i(e) {
              const {
                scope: r,
                children: o,
                ...i
              } = e, s = r?.[n][u] || t, l = d.useMemo((() => i), Object.values(i));
              return (0, a.jsx)(s.Provider, {
                value: l,
                children: o
              })
            }
            return r = [...r, o], i.displayName = e + "Provider", [i, function(r, a) {
              const i = a?.[n][u] || t,
                s = d.useContext(i);
              if (s) return s;
              if (void 0 !== o) return o;
              throw new Error(`\`${r}\` must be used within \`${e}\``)
            }]
          }, Cp(o, ...e)]
        }(kp),
        [mp, hp] = Bp(kp),
        Ep = d.forwardRef(((n, e) => {
          const {
            __scopeScrollArea: r,
            type: o = "hover",
            dir: t,
            scrollHideDelay: u = 600,
            ...i
          } = n, [s, l] = d.useState(null), [f, c] = d.useState(null), [A, p] = d.useState(null), [y, b] = d.useState(null), [_, C] = d.useState(null), [v, k] = d.useState(0), [B, g] = d.useState(0), [m, h] = d.useState(!1), [E, w] = d.useState(!1), x = yp(e, (n => l(n))), j = (0, ss.jH)(t);
          return (0, a.jsx)(mp, {
            scope: r,
            type: o,
            dir: j,
            scrollHideDelay: u,
            scrollArea: s,
            viewport: f,
            onViewportChange: c,
            content: A,
            onContentChange: p,
            scrollbarX: y,
            onScrollbarXChange: b,
            scrollbarXEnabled: m,
            onScrollbarXEnabledChange: h,
            scrollbarY: _,
            onScrollbarYChange: C,
            scrollbarYEnabled: E,
            onScrollbarYEnabledChange: w,
            onCornerWidthChange: k,
            onCornerHeightChange: g,
            children: (0, a.jsx)(pp.div, {
              dir: j,
              ...i,
              ref: x,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": v + "px",
                "--radix-scroll-area-corner-height": B + "px",
                ...n.style
              }
            })
          })
        }));
      Ep.displayName = kp;
      var wp = "ScrollAreaViewport",
        xp = d.forwardRef(((n, e) => {
          const {
            __scopeScrollArea: r,
            children: o,
            nonce: t,
            ...u
          } = n, i = hp(wp, r), s = yp(e, d.useRef(null), i.onViewportChange);
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: t
            }), (0, a.jsx)(pp.div, {
              "data-radix-scroll-area-viewport": "",
              ...u,
              ref: s,
              style: {
                overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
                ...n.style
              },
              children: (0, a.jsx)("div", {
                ref: i.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: o
              })
            })]
          })
        }));
      xp.displayName = wp;
      var jp = "ScrollAreaScrollbar",
        Sp = d.forwardRef(((n, e) => {
          const {
            forceMount: r,
            ...o
          } = n, t = hp(jp, n.__scopeScrollArea), {
            onScrollbarXEnabledChange: u,
            onScrollbarYEnabledChange: i
          } = t, s = "horizontal" === n.orientation;
          return d.useEffect((() => (s ? u(!0) : i(!0), () => {
            s ? u(!1) : i(!1)
          })), [s, u, i]), "hover" === t.type ? (0, a.jsx)(Op, {
            ...o,
            ref: e,
            forceMount: r
          }) : "scroll" === t.type ? (0, a.jsx)(Pp, {
            ...o,
            ref: e,
            forceMount: r
          }) : "auto" === t.type ? (0, a.jsx)(qp, {
            ...o,
            ref: e,
            forceMount: r
          }) : "always" === t.type ? (0, a.jsx)(zp, {
            ...o,
            ref: e
          }) : null
        }));
      Sp.displayName = jp;
      var Op = d.forwardRef(((n, e) => {
          const {
            forceMount: r,
            ...o
          } = n, t = hp(jp, n.__scopeScrollArea), [u, i] = d.useState(!1);
          return d.useEffect((() => {
            const n = t.scrollArea;
            let e = 0;
            if (n) {
              const r = () => {
                  window.clearTimeout(e), i(!0)
                },
                o = () => {
                  e = window.setTimeout((() => i(!1)), t.scrollHideDelay)
                };
              return n.addEventListener("pointerenter", r), n.addEventListener("pointerleave", o), () => {
                window.clearTimeout(e), n.removeEventListener("pointerenter", r), n.removeEventListener("pointerleave", o)
              }
            }
          }), [t.scrollArea, t.scrollHideDelay]), (0, a.jsx)(bp, {
            present: r || u,
            children: (0, a.jsx)(qp, {
              "data-state": u ? "visible" : "hidden",
              ...o,
              ref: e
            })
          })
        })),
        Pp = d.forwardRef(((n, e) => {
          const {
            forceMount: r,
            ...o
          } = n, t = hp(jp, n.__scopeScrollArea), u = "horizontal" === n.orientation, i = Zp((() => l("SCROLL_END")), 100), [s, l] = ("hidden", f = {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          }, d.useReducer(((n, e) => f[n][e] ?? n), "hidden"));
          var f;
          return d.useEffect((() => {
            if ("idle" === s) {
              const n = window.setTimeout((() => l("HIDE")), t.scrollHideDelay);
              return () => window.clearTimeout(n)
            }
          }), [s, t.scrollHideDelay, l]), d.useEffect((() => {
            const n = t.viewport,
              e = u ? "scrollLeft" : "scrollTop";
            if (n) {
              let r = n[e];
              const o = () => {
                const o = n[e];
                r !== o && (l("SCROLL"), i()), r = o
              };
              return n.addEventListener("scroll", o), () => n.removeEventListener("scroll", o)
            }
          }), [t.viewport, u, l, i]), (0, a.jsx)(bp, {
            present: r || "hidden" !== s,
            children: (0, a.jsx)(zp, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...o,
              ref: e,
              onPointerEnter: vp(n.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: vp(n.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        qp = d.forwardRef(((n, e) => {
          const r = hp(jp, n.__scopeScrollArea),
            {
              forceMount: o,
              ...t
            } = n,
            [u, i] = d.useState(!1),
            s = "horizontal" === n.orientation,
            l = Zp((() => {
              if (r.viewport) {
                const n = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  e = r.viewport.offsetHeight < r.viewport.scrollHeight;
                i(s ? n : e)
              }
            }), 10);
          return Qp(r.viewport, l), Qp(r.content, l), (0, a.jsx)(bp, {
            present: o || u,
            children: (0, a.jsx)(zp, {
              "data-state": u ? "visible" : "hidden",
              ...t,
              ref: e
            })
          })
        })),
        zp = d.forwardRef(((n, e) => {
          const {
            orientation: r = "vertical",
            ...o
          } = n, t = hp(jp, n.__scopeScrollArea), u = d.useRef(null), i = d.useRef(0), [s, l] = d.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), f = Hp(s.viewport, s.content), c = {
            ...o,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(f > 0 && f < 1),
            onThumbChange: n => u.current = n,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: n => i.current = n
          };

          function A(n, e) {
            return function(n, e, r, o = "ltr") {
              const t = Wp(r),
                a = e || t / 2,
                u = t - a,
                d = r.scrollbar.paddingStart + a,
                i = r.scrollbar.size - r.scrollbar.paddingEnd - u,
                s = r.content - r.viewport;
              return Up([d, i], "ltr" === o ? [0, s] : [-1 * s, 0])(n)
            }(n, i.current, s, e)
          }
          return "horizontal" === r ? (0, a.jsx)(Dp, {
            ...c,
            ref: e,
            onThumbPositionChange: () => {
              if (t.viewport && u.current) {
                const n = $p(t.viewport.scrollLeft, s, t.dir);
                u.current.style.transform = `translate3d(${n}px, 0, 0)`
              }
            },
            onWheelScroll: n => {
              t.viewport && (t.viewport.scrollLeft = n)
            },
            onDragScroll: n => {
              t.viewport && (t.viewport.scrollLeft = A(n, t.dir))
            }
          }) : "vertical" === r ? (0, a.jsx)(Lp, {
            ...c,
            ref: e,
            onThumbPositionChange: () => {
              if (t.viewport && u.current) {
                const n = $p(t.viewport.scrollTop, s);
                u.current.style.transform = `translate3d(0, ${n}px, 0)`
              }
            },
            onWheelScroll: n => {
              t.viewport && (t.viewport.scrollTop = n)
            },
            onDragScroll: n => {
              t.viewport && (t.viewport.scrollTop = A(n))
            }
          }) : null
        })),
        Dp = d.forwardRef(((n, e) => {
          const {
            sizes: r,
            onSizesChange: o,
            ...t
          } = n, u = hp(jp, n.__scopeScrollArea), [i, s] = d.useState(), l = d.useRef(null), f = yp(e, l, u.onScrollbarXChange);
          return d.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, a.jsx)(Mp, {
            "data-orientation": "horizontal",
            ...t,
            ref: f,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === u.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === u.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Wp(r) + "px",
              ...n.style
            },
            onThumbPointerDown: e => n.onThumbPointerDown(e.x),
            onDragScroll: e => n.onDragScroll(e.x),
            onWheelScroll: (e, r) => {
              if (u.viewport) {
                const o = u.viewport.scrollLeft + e.deltaX;
                n.onWheelScroll(o), Yp(o, r) && e.preventDefault()
              }
            },
            onResize: () => {
              l.current && u.viewport && i && o({
                content: u.viewport.scrollWidth,
                viewport: u.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Kp(i.paddingLeft),
                  paddingEnd: Kp(i.paddingRight)
                }
              })
            }
          })
        })),
        Lp = d.forwardRef(((n, e) => {
          const {
            sizes: r,
            onSizesChange: o,
            ...t
          } = n, u = hp(jp, n.__scopeScrollArea), [i, s] = d.useState(), l = d.useRef(null), f = yp(e, l, u.onScrollbarYChange);
          return d.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, a.jsx)(Mp, {
            "data-orientation": "vertical",
            ...t,
            ref: f,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === u.dir ? 0 : void 0,
              left: "rtl" === u.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Wp(r) + "px",
              ...n.style
            },
            onThumbPointerDown: e => n.onThumbPointerDown(e.y),
            onDragScroll: e => n.onDragScroll(e.y),
            onWheelScroll: (e, r) => {
              if (u.viewport) {
                const o = u.viewport.scrollTop + e.deltaY;
                n.onWheelScroll(o), Yp(o, r) && e.preventDefault()
              }
            },
            onResize: () => {
              l.current && u.viewport && i && o({
                content: u.viewport.scrollHeight,
                viewport: u.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Kp(i.paddingTop),
                  paddingEnd: Kp(i.paddingBottom)
                }
              })
            }
          })
        })),
        [Tp, Np] = Bp(jp),
        Mp = d.forwardRef(((n, e) => {
          const {
            __scopeScrollArea: r,
            sizes: o,
            hasThumb: t,
            onThumbChange: u,
            onThumbPointerUp: i,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: f,
            onWheelScroll: c,
            onResize: A,
            ...p
          } = n, y = hp(jp, r), [b, _] = d.useState(null), C = yp(e, (n => _(n))), v = d.useRef(null), k = d.useRef(""), B = y.viewport, g = o.content - o.viewport, m = (0, ef.c)(c), h = (0, ef.c)(l), E = Zp(A, 10);

          function w(n) {
            if (v.current) {
              const e = n.clientX - v.current.left,
                r = n.clientY - v.current.top;
              f({
                x: e,
                y: r
              })
            }
          }
          return d.useEffect((() => {
            const n = n => {
              const e = n.target,
                r = b?.contains(e);
              r && m(n, g)
            };
            return document.addEventListener("wheel", n, {
              passive: !1
            }), () => document.removeEventListener("wheel", n, {
              passive: !1
            })
          }), [B, b, g, m]), d.useEffect(h, [o, h]), Qp(b, E), Qp(y.content, E), (0, a.jsx)(Tp, {
            scope: r,
            scrollbar: b,
            hasThumb: t,
            onThumbChange: (0, ef.c)(u),
            onThumbPointerUp: (0, ef.c)(i),
            onThumbPositionChange: h,
            onThumbPointerDown: (0, ef.c)(s),
            children: (0, a.jsx)(pp.div, {
              ...p,
              ref: C,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: vp(n.onPointerDown, (n => {
                0 === n.button && (n.target.setPointerCapture(n.pointerId), v.current = b.getBoundingClientRect(), k.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", y.viewport && (y.viewport.style.scrollBehavior = "auto"), w(n))
              })),
              onPointerMove: vp(n.onPointerMove, w),
              onPointerUp: vp(n.onPointerUp, (n => {
                const e = n.target;
                e.hasPointerCapture(n.pointerId) && e.releasePointerCapture(n.pointerId), document.body.style.webkitUserSelect = k.current, y.viewport && (y.viewport.style.scrollBehavior = ""), v.current = null
              }))
            })
          })
        })),
        Fp = "ScrollAreaThumb",
        Rp = d.forwardRef(((n, e) => {
          const {
            forceMount: r,
            ...o
          } = n, t = Np(Fp, n.__scopeScrollArea);
          return (0, a.jsx)(bp, {
            present: r || t.hasThumb,
            children: (0, a.jsx)(Ip, {
              ref: e,
              ...o
            })
          })
        })),
        Ip = d.forwardRef(((n, e) => {
          const {
            __scopeScrollArea: r,
            style: o,
            ...t
          } = n, u = hp(Fp, r), i = Np(Fp, r), {
            onThumbPositionChange: s
          } = i, l = yp(e, (n => i.onThumbChange(n))), f = d.useRef(), c = Zp((() => {
            f.current && (f.current(), f.current = void 0)
          }), 100);
          return d.useEffect((() => {
            const n = u.viewport;
            if (n) {
              const e = () => {
                if (c(), !f.current) {
                  const e = Xp(n, s);
                  f.current = e, s()
                }
              };
              return s(), n.addEventListener("scroll", e), () => n.removeEventListener("scroll", e)
            }
          }), [u.viewport, c, s]), (0, a.jsx)(pp.div, {
            "data-state": i.hasThumb ? "visible" : "hidden",
            ...t,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...o
            },
            onPointerDownCapture: vp(n.onPointerDownCapture, (n => {
              const e = n.target.getBoundingClientRect(),
                r = n.clientX - e.left,
                o = n.clientY - e.top;
              i.onThumbPointerDown({
                x: r,
                y: o
              })
            })),
            onPointerUp: vp(n.onPointerUp, i.onThumbPointerUp)
          })
        }));
      Rp.displayName = Fp;
      var Gp = "ScrollAreaCorner";
      d.forwardRef(((n, e) => {
        const r = hp(Gp, n.__scopeScrollArea),
          o = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && o ? (0, a.jsx)(Vp, {
          ...n,
          ref: e
        }) : null
      })).displayName = Gp;
      var Vp = d.forwardRef(((n, e) => {
        const {
          __scopeScrollArea: r,
          ...o
        } = n, t = hp(Gp, r), [u, i] = d.useState(0), [s, l] = d.useState(0), f = Boolean(u && s);
        return Qp(t.scrollbarX, (() => {
          const n = t.scrollbarX?.offsetHeight || 0;
          t.onCornerHeightChange(n), l(n)
        })), Qp(t.scrollbarY, (() => {
          const n = t.scrollbarY?.offsetWidth || 0;
          t.onCornerWidthChange(n), i(n)
        })), f ? (0, a.jsx)(pp.div, {
          ...o,
          ref: e,
          style: {
            width: u,
            height: s,
            position: "absolute",
            right: "ltr" === t.dir ? 0 : void 0,
            left: "rtl" === t.dir ? 0 : void 0,
            bottom: 0,
            ...n.style
          }
        }) : null
      }));

      function Kp(n) {
        return n ? parseInt(n, 10) : 0
      }

      function Hp(n, e) {
        const r = n / e;
        return isNaN(r) ? 0 : r
      }

      function Wp(n) {
        const e = Hp(n.viewport, n.content),
          r = n.scrollbar.paddingStart + n.scrollbar.paddingEnd,
          o = (n.scrollbar.size - r) * e;
        return Math.max(o, 18)
      }

      function $p(n, e, r = "ltr") {
        const o = Wp(e),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          a = e.scrollbar.size - t,
          u = e.content - e.viewport,
          d = a - o,
          i = os(n, "ltr" === r ? [0, u] : [-1 * u, 0]);
        return Up([0, u], [0, d])(i)
      }

      function Up(n, e) {
        return r => {
          if (n[0] === n[1] || e[0] === e[1]) return e[0];
          const o = (e[1] - e[0]) / (n[1] - n[0]);
          return e[0] + o * (r - n[0])
        }
      }

      function Yp(n, e) {
        return n > 0 && n < e
      }
      var Xp = (n, e = (() => {})) => {
        let r = {
            left: n.scrollLeft,
            top: n.scrollTop
          },
          o = 0;
        return function t() {
          const a = {
              left: n.scrollLeft,
              top: n.scrollTop
            },
            u = r.left !== a.left,
            d = r.top !== a.top;
          (u || d) && e(), r = a, o = window.requestAnimationFrame(t)
        }(), () => window.cancelAnimationFrame(o)
      };

      function Zp(n, e) {
        const r = (0, ef.c)(n),
          o = d.useRef(0);
        return d.useEffect((() => () => window.clearTimeout(o.current)), []), d.useCallback((() => {
          window.clearTimeout(o.current), o.current = window.setTimeout(r, e)
        }), [r, e])
      }

      function Qp(n, e) {
        const r = (0, ef.c)(e);
        (0, vf.N)((() => {
          let e = 0;
          if (n) {
            const o = new ResizeObserver((() => {
              cancelAnimationFrame(e), e = window.requestAnimationFrame(r)
            }));
            return o.observe(n), () => {
              window.cancelAnimationFrame(e), o.unobserve(n)
            }
          }
        }), [n, r])
      }
      var Jp = Ep,
        ny = xp,
        ey = Sp,
        ry = Rp,
        oy = r(27949),
        ty = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      ty.setAttributes = b(), ty.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, ty.domAPI = p(), ty.insertStyleElement = C(), c()(oy.A, ty), oy.A && oy.A.locals && oy.A.locals;
      var ay = "foundry_uaq1gwn";
      const uy = (0, d.forwardRef)((({
          children: n,
          label: e,
          hint: r,
          placeholder: o,
          description: t,
          testId: u,
          hideLabel: i,
          hideDescription: s = !1,
          hideRequiredAsterisk: f,
          hideDividers: c,
          errorMessage: A,
          value: p,
          defaultValue: y,
          onValueChange: b,
          open: _,
          defaultOpen: C,
          onOpenChange: v,
          isRequired: k,
          isDisabled: B,
          isReadOnly: g,
          className: m,
          ariaLabelledBy: h
        }, E) => {
          const w = Le((0, d.useRef)(null), E),
            x = (0, d.useId)(),
            j = (0, d.useId)(),
            [S = !1, O] = Ne({
              prop: _,
              defaultProp: C,
              onChange: v
            });
          return (0, a.jsxs)("div", {
            className: (0, Wn.$)("foundry_uaq1gw0", m),
            children: [(e && !i || r) && (0, a.jsxs)("div", {
              className: "foundry_uaq1gw1",
              children: [(0, a.jsx)(l, {
                enabled: !!i,
                children: (0, a.jsx)($, {
                  className: (0, Wn.$)("foundry_uaq1gw2", B && ay),
                  asChild: !0,
                  children: (0, a.jsxs)("label", {
                    id: x,
                    children: [e, k && !f && (0, a.jsx)("span", {
                      className: "foundry_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), r && (0, a.jsx)(rn, {
                className: (0, Wn.$)("foundry_uaq1gw3", B && ay),
                children: r
              })]
            }), (0, a.jsxs)(ap, {
              required: k,
              disabled: B,
              open: S,
              onOpenChange: () => O(!g && !S),
              value: p,
              defaultValue: y,
              onValueChange: b,
              children: [(0, a.jsxs)(up, {
                className: (0, Wn.$)("foundry_uaq1gw5 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf", !!A && "foundry_uaq1gw7", g && "foundry_uaq1gw6"),
                ref: w,
                "data-testid": u,
                "aria-activedescendant": p,
                "aria-labelledby": h || x,
                "aria-controls": j,
                children: [(0, a.jsx)("span", {
                  className: "foundry_uaq1gw8",
                  children: (0, a.jsx)(dp, {
                    placeholder: o,
                    "aria-label": p
                  })
                }), (0, a.jsx)(ip, {
                  asChild: !0,
                  className: (0, Wn.$)("foundry_uaq1gw9", (g || B) && "foundry_uaq1gwa"),
                  children: S ? (0, a.jsx)(Bn.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, a.jsx)(Bn.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, a.jsx)(sp, {
                children: (0, a.jsx)(lp, {
                  id: j,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_uaq1gwb",
                  children: (0, a.jsxs)(Jp, {
                    className: "foundry_uaq1gwj",
                    type: "auto",
                    children: [(0, a.jsx)(fp, {
                      className: (0, Wn.$)("foundry_uaq1gwc", c && "foundry_uaq1gwd"),
                      asChild: !0,
                      children: (0, a.jsx)(ny, {
                        className: "foundry_uaq1gwk",
                        style: {
                          overflowY: void 0
                        },
                        children: n
                      })
                    }), (0, a.jsx)(ey, {
                      className: "foundry_uaq1gwl",
                      orientation: "vertical",
                      children: (0, a.jsx)(ry, {
                        className: "foundry_uaq1gwm"
                      })
                    })]
                  })
                })
              })]
            }), t && (0, a.jsx)(l, {
              enabled: !!A || s || 0 === t.length,
              children: (0, a.jsx)($, {
                className: (0, Wn.$)("foundry_uaq1gwf", B && ay),
                children: t
              })
            }), A && (0, a.jsxs)($, {
              appearance: "bold",
              className: "foundry_uaq1gwg",
              children: [(0, a.jsx)(Bn.X, {
                size: "MD",
                label: "",
                className: "foundry_uaq1gwh"
              }), A]
            })]
          })
        })),
        dy = (0, d.forwardRef)((({
          label: n,
          value: e,
          icon: r,
          iconLabel: o,
          iconPosition: t,
          isDisabled: u,
          testId: i
        }, s) => {
          const l = Le((0, d.useRef)(null), s),
            f = r && gn[r];
          return (0, a.jsxs)(cp, {
            value: e,
            className: "foundry_uaq1gwe foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
            ref: l,
            disabled: u,
            "data-testid": i,
            children: [f && "left" === t && (0, a.jsx)(f, {
              label: o || "",
              size: "LG"
            }), (0, a.jsx)(Ap, {
              children: n
            }), f && "right" === t && (0, a.jsx)(f, {
              label: o || "",
              size: "LG",
              className: "foundry_uaq1gwi"
            })]
          })
        }));
      var iy;
      iy = {
        "ar-AE": {
          breadcrumbs: "عناصر الواجهة"
        },
        "bg-BG": {
          breadcrumbs: "Трохи хляб"
        },
        "cs-CZ": {
          breadcrumbs: "Popis cesty"
        },
        "da-DK": {
          breadcrumbs: "Brødkrummer"
        },
        "de-DE": {
          breadcrumbs: "Breadcrumbs"
        },
        "el-GR": {
          breadcrumbs: "Πλοηγήσεις breadcrumb"
        },
        "en-US": {
          breadcrumbs: "Breadcrumbs"
        },
        "es-ES": {
          breadcrumbs: "Migas de pan"
        },
        "et-EE": {
          breadcrumbs: "Lingiread"
        },
        "fi-FI": {
          breadcrumbs: "Navigointilinkit"
        },
        "fr-FR": {
          breadcrumbs: "Chemin de navigation"
        },
        "he-IL": {
          breadcrumbs: "שבילי ניווט"
        },
        "hr-HR": {
          breadcrumbs: "Navigacijski putovi"
        },
        "hu-HU": {
          breadcrumbs: "Morzsamenü"
        },
        "it-IT": {
          breadcrumbs: "Breadcrumb"
        },
        "ja-JP": {
          breadcrumbs: "パンくずリスト"
        },
        "ko-KR": {
          breadcrumbs: "탐색 표시"
        },
        "lt-LT": {
          breadcrumbs: "Naršymo kelias"
        },
        "lv-LV": {
          breadcrumbs: "Atpakaļceļi"
        },
        "nb-NO": {
          breadcrumbs: "Navigasjonsstier"
        },
        "nl-NL": {
          breadcrumbs: "Broodkruimels"
        },
        "pl-PL": {
          breadcrumbs: "Struktura nawigacyjna"
        },
        "pt-BR": {
          breadcrumbs: "Caminho detalhado"
        },
        "pt-PT": {
          breadcrumbs: "Categorias"
        },
        "ro-RO": {
          breadcrumbs: "Miez de pâine"
        },
        "ru-RU": {
          breadcrumbs: "Навигация"
        },
        "sk-SK": {
          breadcrumbs: "Navigačné prvky Breadcrumbs"
        },
        "sl-SI": {
          breadcrumbs: "Drobtine"
        },
        "sr-SP": {
          breadcrumbs: "Putanje navigacije"
        },
        "sv-SE": {
          breadcrumbs: "Sökvägar"
        },
        "tr-TR": {
          breadcrumbs: "İçerik haritaları"
        },
        "uk-UA": {
          breadcrumbs: "Навігаційна стежка"
        },
        "zh-CN": {
          breadcrumbs: "导航栏"
        },
        "zh-TW": {
          breadcrumbs: "導覽列"
        }
      };
      const sy = new Set(["id"]),
        ly = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        fy = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        cy = /^(data-.*)$/;

      function Ay(n, e = {}) {
        let {
          labelable: r,
          isLink: o,
          propNames: t
        } = e, a = {};
        for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && (sy.has(e) || r && ly.has(e) || o && fy.has(e) || (null == t ? void 0 : t.has(e)) || cy.test(e)) && (a[e] = n[e]);
        return a
      }
      const py = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        yy = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function by(n) {
        if (Intl.Locale) {
          let e = new Intl.Locale(n).maximize(),
            r = "function" == typeof e.getTextInfo ? e.getTextInfo() : e.textInfo;
          if (r) return "rtl" === r.direction;
          if (e.script) return py.has(e.script)
        }
        let e = n.split("-")[0];
        return yy.has(e)
      }
      const _y = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Cy = d.createContext(_y),
        vy = d.createContext(!1);
      let ky = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        By = new WeakMap;
      const gy = "function" == typeof d.useId ? function(n) {
        let e = d.useId(),
          [r] = (0, d.useState)(wy());
        return n || `${r?"react-aria":`react-aria${_y.prefix}`}-${e}`
      } : function(n) {
        let e = (0, d.useContext)(Cy);
        e !== _y || ky || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let r = function(n = !1) {
            let e = (0, d.useContext)(Cy),
              r = (0, d.useRef)(null);
            if (null === r.current && !n) {
              var o, t;
              let n = null === (t = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === t || null === (o = t.ReactCurrentOwner) || void 0 === o ? void 0 : o.current;
              if (n) {
                let r = By.get(n);
                null == r ? By.set(n, {
                  id: e.current,
                  state: n.memoizedState
                }) : n.memoizedState !== r.state && (e.current = r.id, By.delete(n))
              }
              r.current = ++e.current
            }
            return r.current
          }(!!n),
          o = `react-aria${e.prefix}`;
        return n || `${o}-${r}`
      };

      function my() {
        return !1
      }

      function hy() {
        return !0
      }

      function Ey(n) {
        return () => {}
      }

      function wy() {
        return "function" == typeof d.useSyncExternalStore ? d.useSyncExternalStore(Ey, my, hy) : (0, d.useContext)(vy)
      }
      const xy = Symbol.for("react-aria.i18n.locale");

      function jy() {
        let n = "undefined" != typeof window && window[xy] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([n])
        } catch (e) {
          n = "en-US"
        }
        return {
          locale: n,
          direction: by(n) ? "rtl" : "ltr"
        }
      }
      let Sy = jy(),
        Oy = new Set;

      function Py() {
        Sy = jy();
        for (let n of Oy) n(Sy)
      }
      const qy = d.createContext(null);

      function zy() {
        let n = function() {
          let n = wy(),
            [e, r] = (0, d.useState)(Sy);
          return (0, d.useEffect)((() => (0 === Oy.size && window.addEventListener("languagechange", Py), Oy.add(r), () => {
            Oy.delete(r), 0 === Oy.size && window.removeEventListener("languagechange", Py)
          })), []), n ? {
            locale: "en-US",
            direction: "ltr"
          } : e
        }();
        return (0, d.useContext)(qy) || n
      }
      const Dy = Symbol.for("react-aria.i18n.locale"),
        Ly = Symbol.for("react-aria.i18n.strings");
      let Ty;
      class Ny {
        getStringForLocale(n, e) {
          let r = this.getStringsForLocale(e)[n];
          if (!r) throw new Error(`Could not find intl message ${n} in ${e} locale`);
          return r
        }
        getStringsForLocale(n) {
          let e = this.strings[n];
          return e || (e = function(n, e, r = "en-US") {
            if (e[n]) return e[n];
            let o = function(n) {
              return Intl.Locale ? new Intl.Locale(n).language : n.split("-")[0]
            }(n);
            if (e[o]) return e[o];
            for (let n in e)
              if (n.startsWith(o + "-")) return e[n];
            return e[r]
          }(n, this.strings, this.defaultLocale), this.strings[n] = e), e
        }
        static getGlobalDictionaryForPackage(n) {
          if ("undefined" == typeof window) return null;
          let e = window[Dy];
          if (void 0 === Ty) {
            let n = window[Ly];
            if (!n) return null;
            Ty = {};
            for (let r in n) Ty[r] = new Ny({
              [e]: n[r]
            }, e)
          }
          let r = null == Ty ? void 0 : Ty[n];
          if (!r) throw new Error(`Strings for package "${n}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
          return r
        }
        constructor(n, e = "en-US") {
          this.strings = Object.fromEntries(Object.entries(n).filter((([, n]) => n))), this.defaultLocale = e
        }
      }
      const My = new Map,
        Fy = new Map;
      class Ry {
        format(n, e) {
          let r = this.strings.getStringForLocale(n, this.locale);
          return "function" == typeof r ? r(e, this) : r
        }
        plural(n, e, r = "cardinal") {
          let o = e["=" + n];
          if (o) return "function" == typeof o ? o() : o;
          let t = this.locale + ":" + r,
            a = My.get(t);
          return a || (a = new Intl.PluralRules(this.locale, {
            type: r
          }), My.set(t, a)), o = e[a.select(n)] || e.other, "function" == typeof o ? o() : o
        }
        number(n) {
          let e = Fy.get(this.locale);
          return e || (e = new Intl.NumberFormat(this.locale), Fy.set(this.locale, e)), e.format(n)
        }
        select(n, e) {
          let r = n[e] || n.other;
          return "function" == typeof r ? r() : r
        }
        constructor(n, e) {
          this.locale = n, this.strings = e
        }
      }
      const Iy = new WeakMap;

      function Gy(n, e) {
        let {
          locale: r
        } = zy(), o = function(n, e) {
          return e && Ny.getGlobalDictionaryForPackage(e) || function(n) {
            let e = Iy.get(n);
            return e || (e = new Ny(n), Iy.set(n, e)), e
          }(n)
        }(n, e);
        return (0, d.useMemo)((() => new Ry(r, o)), [r, o])
      }

      function Vy(...n) {
        return (...e) => {
          for (let r of n) "function" == typeof r && r(...e)
        }
      }
      const Ky = "undefined" != typeof document ? d.useLayoutEffect : () => {};

      function Hy(n) {
        const e = (0, d.useRef)(null);
        return Ky((() => {
          e.current = n
        }), [n]), (0, d.useCallback)(((...n) => {
          const r = e.current;
          return null == r ? void 0 : r(...n)
        }), [])
      }
      let Wy = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        $y = new Map;

      function Uy(n) {
        let [e, r] = (0, d.useState)(n), o = (0, d.useRef)(null), t = gy(e), a = (0, d.useCallback)((n => {
          o.current = n
        }), []);
        return Wy && ($y.has(t) && !$y.get(t).includes(a) ? $y.set(t, [...$y.get(t), a]) : $y.set(t, [a])), Ky((() => {
          let n = t;
          return () => {
            $y.delete(n)
          }
        }), [t]), (0, d.useEffect)((() => {
          let n = o.current;
          n && (o.current = null, r(n))
        })), t
      }

      function Yy(n, e) {
        if (n === e) return n;
        let r = $y.get(n);
        if (r) return r.forEach((n => n(e))), e;
        let o = $y.get(e);
        return o ? (o.forEach((e => e(n))), n) : e
      }

      function Xy(n = []) {
        let e = Uy(),
          [r, o] = function(n) {
            let [e, r] = (0, d.useState)(n), o = (0, d.useRef)(null), t = Hy((() => {
              if (!o.current) return;
              let n = o.current.next();
              n.done ? o.current = null : e === n.value ? t() : r(n.value)
            }));
            Ky((() => {
              o.current && t()
            }));
            let a = Hy((n => {
              o.current = n(e), t()
            }));
            return [e, a]
          }(e),
          t = (0, d.useCallback)((() => {
            o((function*() {
              yield e, yield document.getElementById(e) ? e : void 0
            }))
          }), [e, o]);
        return Ky(t, [e, t, ...n]), r
      }

      function Zy(...n) {
        let e = {
          ...n[0]
        };
        for (let r = 1; r < n.length; r++) {
          let o = n[r];
          for (let n in o) {
            let r = e[n],
              t = o[n];
            "function" == typeof r && "function" == typeof t && "o" === n[0] && "n" === n[1] && n.charCodeAt(2) >= 65 && n.charCodeAt(2) <= 90 ? e[n] = Vy(r, t) : "className" !== n && "UNSAFE_className" !== n || "string" != typeof r || "string" != typeof t ? "id" === n && r && t ? e.id = Yy(r, t) : e[n] = void 0 !== t ? t : r : e[n] = (0, Wn.A)(r, t)
          }
        }
        return e
      }

      function Qy(n) {
        if (function() {
            if (null == Jy) {
              Jy = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Jy = !0, !0
                  }
                })
              } catch (n) {}
            }
            return Jy
          }()) n.focus({
          preventScroll: !0
        });
        else {
          let e = function(n) {
            let e = n.parentNode,
              r = [],
              o = document.scrollingElement || document.documentElement;
            for (; e instanceof HTMLElement && e !== o;)(e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && r.push({
              element: e,
              scrollTop: e.scrollTop,
              scrollLeft: e.scrollLeft
            }), e = e.parentNode;
            return o instanceof HTMLElement && r.push({
              element: o,
              scrollTop: o.scrollTop,
              scrollLeft: o.scrollLeft
            }), r
          }(n);
          n.focus(),
            function(n) {
              for (let {
                  element: e,
                  scrollTop: r,
                  scrollLeft: o
                }
                of n) e.scrollTop = r, e.scrollLeft = o
            }(e)
        }
      }
      let Jy = null;

      function nb(n) {
        var e;
        return "undefined" != typeof window && null != window.navigator && ((null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.brands.some((e => n.test(e.brand)))) || n.test(window.navigator.userAgent))
      }

      function eb(n) {
        var e;
        return "undefined" != typeof window && null != window.navigator && n.test((null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.platform) || window.navigator.platform)
      }

      function rb(n) {
        let e = null;
        return () => (null == e && (e = n()), e)
      }
      const ob = rb((function() {
          return eb(/^Mac/i)
        })),
        tb = rb((function() {
          return eb(/^iPhone/i)
        })),
        ab = rb((function() {
          return eb(/^iPad/i) || ob() && navigator.maxTouchPoints > 1
        })),
        ub = rb((function() {
          return tb() || ab()
        })),
        db = (rb((function() {
          return ob() || ub()
        })), rb((function() {
          return nb(/AppleWebKit/i) && !ib()
        }))),
        ib = rb((function() {
          return nb(/Chrome/i)
        })),
        sb = rb((function() {
          return nb(/Android/i)
        })),
        lb = rb((function() {
          return nb(/Firefox/i)
        })),
        fb = (0, d.createContext)({
          isNative: !0,
          open: function(n, e) {
            ! function(n, e) {
              if (n instanceof HTMLAnchorElement) e(n);
              else if (n.hasAttribute("data-href")) {
                let r = document.createElement("a");
                r.href = n.getAttribute("data-href"), n.hasAttribute("data-target") && (r.target = n.getAttribute("data-target")), n.hasAttribute("data-rel") && (r.rel = n.getAttribute("data-rel")), n.hasAttribute("data-download") && (r.download = n.getAttribute("data-download")), n.hasAttribute("data-ping") && (r.ping = n.getAttribute("data-ping")), n.hasAttribute("data-referrer-policy") && (r.referrerPolicy = n.getAttribute("data-referrer-policy")), n.appendChild(r), e(r), n.removeChild(r)
              }
            }(n, (n => Ab(n, e)))
          },
          useHref: n => n
        });

      function cb() {
        return (0, d.useContext)(fb)
      }

      function Ab(n, e, r = !0) {
        var o, t;
        let {
          metaKey: a,
          ctrlKey: u,
          altKey: d,
          shiftKey: i
        } = e;
        lb() && (null === (t = window.event) || void 0 === t || null === (o = t.type) || void 0 === o ? void 0 : o.startsWith("key")) && "_blank" === n.target && (ob() ? a = !0 : u = !0);
        let s = db() && ob() && !ab() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: u,
          altKey: d,
          shiftKey: i
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: u,
          altKey: d,
          shiftKey: i,
          bubbles: !0,
          cancelable: !0
        });
        Ab.isOpening = r, Qy(n), n.dispatchEvent(s), Ab.isOpening = !1
      }

      function pb(n) {
        var e;
        const r = cb().useHref(null !== (e = null == n ? void 0 : n.href) && void 0 !== e ? e : "");
        return {
          href: (null == n ? void 0 : n.href) ? r : void 0,
          target: null == n ? void 0 : n.target,
          rel: null == n ? void 0 : n.rel,
          download: null == n ? void 0 : n.download,
          ping: null == n ? void 0 : n.ping,
          referrerPolicy: null == n ? void 0 : n.referrerPolicy
        }
      }
      Ab.isOpening = !1;
      const yb = n => {
          var e;
          return null !== (e = null == n ? void 0 : n.ownerDocument) && void 0 !== e ? e : document
        },
        bb = n => n && "window" in n && n.window === n ? n : yb(n).defaultView || window;
      let _b = new Map,
        Cb = new Set;

      function vb() {
        if ("undefined" == typeof window) return;

        function n(n) {
          return "propertyName" in n
        }
        let e = r => {
          if (!n(r) || !r.target) return;
          let o = _b.get(r.target);
          if (o && (o.delete(r.propertyName), 0 === o.size && (r.target.removeEventListener("transitioncancel", e), _b.delete(r.target)), 0 === _b.size)) {
            for (let n of Cb) n();
            Cb.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!n(r) || !r.target) return;
          let o = _b.get(r.target);
          o || (o = new Set, _b.set(r.target, o), r.target.addEventListener("transitioncancel", e, {
            once: !0
          })), o.add(r.propertyName)
        })), document.body.addEventListener("transitionend", e)
      }

      function kb(n) {
        requestAnimationFrame((() => {
          0 === _b.size ? n() : Cb.add(n)
        }))
      }

      function Bb(n) {
        return !(0 !== n.mozInputSource || !n.isTrusted) || (sb() && n.pointerType ? "click" === n.type && 1 === n.buttons : 0 === n.detail && !n.pointerType)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? vb() : document.addEventListener("DOMContentLoaded", vb));
      let gb = null,
        mb = new Set,
        hb = new Map,
        Eb = !1,
        wb = !1;

      function xb(n, e) {
        for (let r of mb) r(n, e)
      }

      function jb(n) {
        Eb = !0,
          function(n) {
            return !(n.metaKey || !ob() && n.altKey || n.ctrlKey || "Control" === n.key || "Shift" === n.key || "Meta" === n.key)
          }(n) && (gb = "keyboard", xb("keyboard", n))
      }

      function Sb(n) {
        gb = "pointer", "mousedown" !== n.type && "pointerdown" !== n.type || (Eb = !0, xb("pointer", n))
      }

      function Ob(n) {
        Bb(n) && (Eb = !0, gb = "virtual")
      }

      function Pb(n) {
        n.target !== window && n.target !== document && (Eb || wb || (gb = "virtual", xb("virtual", n)), Eb = !1, wb = !1)
      }

      function qb() {
        Eb = !1, wb = !0
      }

      function zb(n) {
        if ("undefined" == typeof window || hb.get(bb(n))) return;
        const e = bb(n),
          r = yb(n);
        let o = e.HTMLElement.prototype.focus;
        e.HTMLElement.prototype.focus = function() {
          Eb = !0, o.apply(this, arguments)
        }, r.addEventListener("keydown", jb, !0), r.addEventListener("keyup", jb, !0), r.addEventListener("click", Ob, !0), e.addEventListener("focus", Pb, !0), e.addEventListener("blur", qb, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", Sb, !0), r.addEventListener("pointermove", Sb, !0), r.addEventListener("pointerup", Sb, !0)) : (r.addEventListener("mousedown", Sb, !0), r.addEventListener("mousemove", Sb, !0), r.addEventListener("mouseup", Sb, !0)), e.addEventListener("beforeunload", (() => {
          Db(n)
        }), {
          once: !0
        }), hb.set(e, {
          focus: o
        })
      }
      const Db = (n, e) => {
        const r = bb(n),
          o = yb(n);
        e && o.removeEventListener("DOMContentLoaded", e), hb.has(r) && (r.HTMLElement.prototype.focus = hb.get(r).focus, o.removeEventListener("keydown", jb, !0), o.removeEventListener("keyup", jb, !0), o.removeEventListener("click", Ob, !0), r.removeEventListener("focus", Pb, !0), r.removeEventListener("blur", qb, !1), "undefined" != typeof PointerEvent ? (o.removeEventListener("pointerdown", Sb, !0), o.removeEventListener("pointermove", Sb, !0), o.removeEventListener("pointerup", Sb, !0)) : (o.removeEventListener("mousedown", Sb, !0), o.removeEventListener("mousemove", Sb, !0), o.removeEventListener("mouseup", Sb, !0)), hb.delete(r))
      };

      function Lb(n, e) {
        Ky((() => {
          if (n && n.ref && e) return n.ref.current = e.current, () => {
            n.ref && (n.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && function(n) {
        const e = yb(n);
        let r;
        "loading" !== e.readyState ? zb(n) : (r = () => {
          zb(n)
        }, e.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class Tb {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(n, e) {
          this.nativeEvent = e, this.target = e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget, this.bubbles = e.bubbles, this.cancelable = e.cancelable, this.defaultPrevented = e.defaultPrevented, this.eventPhase = e.eventPhase, this.isTrusted = e.isTrusted, this.timeStamp = e.timeStamp, this.type = n
        }
      }

      function Nb(n) {
        let e = (0, d.useRef)({
          isFocused: !1,
          observer: null
        });
        Ky((() => {
          const n = e.current;
          return () => {
            n.observer && (n.observer.disconnect(), n.observer = null)
          }
        }), []);
        let r = Hy((e => {
          null == n || n(e)
        }));
        return (0, d.useCallback)((n => {
          if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
            e.current.isFocused = !0;
            let o = n.target,
              t = n => {
                e.current.isFocused = !1, o.disabled && r(new Tb("blur", n)), e.current.observer && (e.current.observer.disconnect(), e.current.observer = null)
              };
            o.addEventListener("focusout", t, {
              once: !0
            }), e.current.observer = new MutationObserver((() => {
              if (e.current.isFocused && o.disabled) {
                var n;
                null === (n = e.current.observer) || void 0 === n || n.disconnect();
                let r = o === document.activeElement ? null : document.activeElement;
                o.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: r
                })), o.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: r
                }))
              }
            })), e.current.observer.observe(o, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [r])
      }

      function Mb(n) {
        if (!n) return;
        let e = !0;
        return r => {
          let o = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              e = !1
            }
          };
          n(o), e && r.stopPropagation()
        }
      }
      let Fb = d.createContext(null);

      function Rb(n, e) {
        let {
          focusProps: r
        } = function(n) {
          let {
            isDisabled: e,
            onFocus: r,
            onBlur: o,
            onFocusChange: t
          } = n;
          const a = (0, d.useCallback)((n => {
              if (n.target === n.currentTarget) return o && o(n), t && t(!1), !0
            }), [o, t]),
            u = Nb(a),
            i = (0, d.useCallback)((n => {
              const e = yb(n.target);
              n.target === n.currentTarget && e.activeElement === n.target && (r && r(n), t && t(!0), u(n))
            }), [t, r, u]);
          return {
            focusProps: {
              onFocus: !e && (r || t || o) ? i : void 0,
              onBlur: e || !o && !t ? void 0 : a
            }
          }
        }(n), {
          keyboardProps: o
        } = function(n) {
          return {
            keyboardProps: n.isDisabled ? {} : {
              onKeyDown: Mb(n.onKeyDown),
              onKeyUp: Mb(n.onKeyUp)
            }
          }
        }(n), t = Zy(r, o), a = function(n) {
          let e = (0, d.useContext)(Fb) || {};
          Lb(e, n);
          let {
            ref: r,
            ...o
          } = e;
          return o
        }(e), u = n.isDisabled ? {} : a, i = (0, d.useRef)(n.autoFocus);
        return (0, d.useEffect)((() => {
          i.current && e.current && function(n) {
            const e = yb(n);
            if ("virtual" === gb) {
              let r = e.activeElement;
              kb((() => {
                e.activeElement === r && n.isConnected && Qy(n)
              }))
            } else Qy(n)
          }(e.current), i.current = !1
        }), [e]), {
          focusableProps: Zy({
            ...t,
            tabIndex: n.excludeFromTabOrder && !n.isDisabled ? -1 : void 0
          }, u)
        }
      }
      let Ib = "default",
        Gb = "",
        Vb = new WeakMap;

      function Kb(n) {
        if (ub()) {
          if ("default" === Ib) {
            const e = yb(n);
            Gb = e.documentElement.style.webkitUserSelect, e.documentElement.style.webkitUserSelect = "none"
          }
          Ib = "disabled"
        } else(n instanceof HTMLElement || n instanceof SVGElement) && (Vb.set(n, n.style.userSelect), n.style.userSelect = "none")
      }

      function Hb(n) {
        if (ub()) {
          if ("disabled" !== Ib) return;
          Ib = "restoring", setTimeout((() => {
            kb((() => {
              if ("restoring" === Ib) {
                const e = yb(n);
                "none" === e.documentElement.style.webkitUserSelect && (e.documentElement.style.webkitUserSelect = Gb || ""), Gb = "", Ib = "default"
              }
            }))
          }), 300)
        } else if ((n instanceof HTMLElement || n instanceof SVGElement) && n && Vb.has(n)) {
          let e = Vb.get(n);
          "none" === n.style.userSelect && (n.style.userSelect = e), "" === n.getAttribute("style") && n.removeAttribute("style"), Vb.delete(n)
        }
      }
      const Wb = d.createContext({
        register: () => {}
      });
      Wb.displayName = "PressResponderContext";
      var $b = new WeakMap;
      class Ub {
        continuePropagation() {
          Wr(this, $b, !1)
        }
        get shouldStopPropagation() {
          return Kr(this, $b)
        }
        constructor(n, e, r, o) {
          var t;
          Hr(this, $b, {
            writable: !0,
            value: void 0
          }), Wr(this, $b, !0);
          let a = null !== (t = null == o ? void 0 : o.target) && void 0 !== t ? t : r.currentTarget;
          const u = null == a ? void 0 : a.getBoundingClientRect();
          let d, i, s = 0,
            l = null;
          null != r.clientX && null != r.clientY && (i = r.clientX, l = r.clientY), u && (null != i && null != l ? (d = i - u.left, s = l - u.top) : (d = u.width / 2, s = u.height / 2)), this.type = n, this.pointerType = e, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = d, this.y = s
        }
      }
      const Yb = Symbol("linkClicked");

      function Xb(n) {
        let {
          onPress: e,
          onPressChange: r,
          onPressStart: o,
          onPressEnd: t,
          onPressUp: a,
          isDisabled: u,
          isPressed: i,
          preventFocusOnPress: s,
          shouldCancelOnPointerExit: l,
          allowTextSelectionOnPress: f,
          ref: c,
          ...A
        } = function(n) {
          let e = (0, d.useContext)(Wb);
          if (e) {
            let {
              register: r,
              ...o
            } = e;
            n = Zy(o, n), r()
          }
          return Lb(e, n.ref), n
        }(n), [p, y] = (0, d.useState)(!1), b = (0, d.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          ignoreClickAfterPress: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null
        }), {
          addGlobalListener: _,
          removeAllGlobalListeners: C
        } = function() {
          let n = (0, d.useRef)(new Map),
            e = (0, d.useCallback)(((e, r, o, t) => {
              let a = (null == t ? void 0 : t.once) ? (...e) => {
                n.current.delete(o), o(...e)
              } : o;
              n.current.set(o, {
                type: r,
                eventTarget: e,
                fn: a,
                options: t
              }), e.addEventListener(r, o, t)
            }), []),
            r = (0, d.useCallback)(((e, r, o, t) => {
              var a;
              let u = (null === (a = n.current.get(o)) || void 0 === a ? void 0 : a.fn) || o;
              e.removeEventListener(r, u, t), n.current.delete(o)
            }), []),
            o = (0, d.useCallback)((() => {
              n.current.forEach(((n, e) => {
                r(n.eventTarget, n.type, e, n.options)
              }))
            }), [r]);
          return (0, d.useEffect)((() => o), [o]), {
            addGlobalListener: e,
            removeGlobalListener: r,
            removeAllGlobalListeners: o
          }
        }(), v = Hy(((n, e) => {
          let t = b.current;
          if (u || t.didFirePressStart) return !1;
          let a = !0;
          if (t.isTriggeringEvent = !0, o) {
            let r = new Ub("pressstart", e, n);
            o(r), a = r.shouldStopPropagation
          }
          return r && r(!0), t.isTriggeringEvent = !1, t.didFirePressStart = !0, y(!0), a
        })), k = Hy(((n, o, a = !0) => {
          let d = b.current;
          if (!d.didFirePressStart) return !1;
          d.ignoreClickAfterPress = !0, d.didFirePressStart = !1, d.isTriggeringEvent = !0;
          let i = !0;
          if (t) {
            let e = new Ub("pressend", o, n);
            t(e), i = e.shouldStopPropagation
          }
          if (r && r(!1), y(!1), e && a && !u) {
            let r = new Ub("press", o, n);
            e(r), i && (i = r.shouldStopPropagation)
          }
          return d.isTriggeringEvent = !1, i
        })), B = Hy(((n, e) => {
          let r = b.current;
          if (u) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let o = new Ub("pressup", e, n);
            return a(o), r.isTriggeringEvent = !1, o.shouldStopPropagation
          }
          return !0
        })), g = Hy((n => {
          let e = b.current;
          e.isPressed && e.target && (e.isOverTarget && null != e.pointerType && k(e_(e.target, n), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, C(), f || Hb(e.target))
        })), m = Hy((n => {
          l && g(n)
        })), h = (0, d.useMemo)((() => {
          let n = b.current,
            e = {
              onKeyDown(e) {
                if (Qb(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
                  var o;
                  a_(e.target, e.key) && e.preventDefault();
                  let t = !0;
                  if (!n.isPressed && !e.repeat) {
                    n.target = e.currentTarget, n.isPressed = !0, t = v(e, "keyboard");
                    let o = e.currentTarget,
                      a = e => {
                        Qb(e, o) && !e.repeat && o.contains(e.target) && n.target && B(e_(n.target, e), "keyboard")
                      };
                    _(yb(e.currentTarget), "keyup", Vy(a, r), !0)
                  }
                  t && e.stopPropagation(), e.metaKey && ob() && (null === (o = n.metaKeyEvents) || void 0 === o || o.set(e.key, e.nativeEvent))
                } else "Meta" === e.key && (n.metaKeyEvents = new Map)
              },
              onClick(e) {
                if ((!e || e.currentTarget.contains(e.target)) && e && 0 === e.button && !n.isTriggeringEvent && !Ab.isOpening) {
                  let r = !0;
                  if (u && e.preventDefault(), !n.ignoreClickAfterPress && !n.ignoreEmulatedMouseEvents && !n.isPressed && ("virtual" === n.pointerType || Bb(e.nativeEvent))) {
                    u || s || Qy(e.currentTarget);
                    let n = v(e, "virtual"),
                      o = B(e, "virtual"),
                      t = k(e, "virtual");
                    r = n && o && t
                  }
                  n.ignoreEmulatedMouseEvents = !1, n.ignoreClickAfterPress = !1, r && e.stopPropagation()
                }
              }
            },
            r = e => {
              var r;
              if (n.isPressed && n.target && Qb(e, n.target)) {
                var o;
                a_(e.target, e.key) && e.preventDefault();
                let r = e.target;
                k(e_(n.target, e), "keyboard", n.target.contains(r)), C(), "Enter" !== e.key && Zb(n.target) && n.target.contains(r) && !e[Yb] && (e[Yb] = !0, Ab(n.target, e, !1)), n.isPressed = !1, null === (o = n.metaKeyEvents) || void 0 === o || o.delete(e.key)
              } else if ("Meta" === e.key && (null === (r = n.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var t;
                let e = n.metaKeyEvents;
                n.metaKeyEvents = void 0;
                for (let r of e.values()) null === (t = n.target) || void 0 === t || t.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            e.onPointerDown = e => {
              if (0 !== e.button || !e.currentTarget.contains(e.target)) return;
              if (t = e.nativeEvent, !sb() && 0 === t.width && 0 === t.height || 1 === t.width && 1 === t.height && 0 === t.pressure && 0 === t.detail && "mouse" === t.pointerType) return void(n.pointerType = "virtual");
              var t;
              o_(e.currentTarget) && e.preventDefault(), n.pointerType = e.pointerType;
              let d = !0;
              n.isPressed || (n.isPressed = !0, n.isOverTarget = !0, n.activePointerId = e.pointerId, n.target = e.currentTarget, u || s || Qy(e.currentTarget), f || Kb(n.target), d = v(e, n.pointerType), _(yb(e.currentTarget), "pointermove", r, !1), _(yb(e.currentTarget), "pointerup", o, !1), _(yb(e.currentTarget), "pointercancel", a, !1)), d && e.stopPropagation()
            }, e.onMouseDown = n => {
              n.currentTarget.contains(n.target) && 0 === n.button && (o_(n.currentTarget) && n.preventDefault(), n.stopPropagation())
            }, e.onPointerUp = e => {
              e.currentTarget.contains(e.target) && "virtual" !== n.pointerType && 0 === e.button && r_(e, e.currentTarget) && B(e, n.pointerType || e.pointerType)
            };
            let r = e => {
                e.pointerId === n.activePointerId && (n.target && r_(e, n.target) ? n.isOverTarget || null == n.pointerType || (n.isOverTarget = !0, v(e_(n.target, e), n.pointerType)) : n.target && n.isOverTarget && null != n.pointerType && (n.isOverTarget = !1, k(e_(n.target, e), n.pointerType, !1), m(e)))
              },
              o = e => {
                e.pointerId === n.activePointerId && n.isPressed && 0 === e.button && n.target && (r_(e, n.target) && null != n.pointerType ? k(e_(n.target, e), n.pointerType) : n.isOverTarget && null != n.pointerType && k(e_(n.target, e), n.pointerType, !1), n.isPressed = !1, n.isOverTarget = !1, n.activePointerId = null, n.pointerType = null, C(), f || Hb(n.target), "ontouchend" in n.target && "mouse" !== e.pointerType && _(n.target, "touchend", t, {
                  once: !0
                }))
              },
              t = n => {
                t_(n.currentTarget) && n.preventDefault()
              },
              a = n => {
                g(n)
              };
            e.onDragStart = n => {
              n.currentTarget.contains(n.target) && g(n)
            }
          } else {
            e.onMouseDown = e => {
              0 === e.button && e.currentTarget.contains(e.target) && (o_(e.currentTarget) && e.preventDefault(), n.ignoreEmulatedMouseEvents ? e.stopPropagation() : (n.isPressed = !0, n.isOverTarget = !0, n.target = e.currentTarget, n.pointerType = Bb(e.nativeEvent) ? "virtual" : "mouse", u || s || Qy(e.currentTarget), v(e, n.pointerType) && e.stopPropagation(), _(yb(e.currentTarget), "mouseup", r, !1)))
            }, e.onMouseEnter = e => {
              if (!e.currentTarget.contains(e.target)) return;
              let r = !0;
              n.isPressed && !n.ignoreEmulatedMouseEvents && null != n.pointerType && (n.isOverTarget = !0, r = v(e, n.pointerType)), r && e.stopPropagation()
            }, e.onMouseLeave = e => {
              if (!e.currentTarget.contains(e.target)) return;
              let r = !0;
              n.isPressed && !n.ignoreEmulatedMouseEvents && null != n.pointerType && (n.isOverTarget = !1, r = k(e, n.pointerType, !1), m(e)), r && e.stopPropagation()
            }, e.onMouseUp = e => {
              e.currentTarget.contains(e.target) && (n.ignoreEmulatedMouseEvents || 0 !== e.button || B(e, n.pointerType || "mouse"))
            };
            let r = e => {
              0 === e.button && (n.isPressed = !1, C(), n.ignoreEmulatedMouseEvents ? n.ignoreEmulatedMouseEvents = !1 : (n.target && r_(e, n.target) && null != n.pointerType ? k(e_(n.target, e), n.pointerType) : n.target && n.isOverTarget && null != n.pointerType && k(e_(n.target, e), n.pointerType, !1), n.isOverTarget = !1))
            };
            e.onTouchStart = e => {
              if (!e.currentTarget.contains(e.target)) return;
              let r = function(n) {
                const {
                  targetTouches: e
                } = n;
                return e.length > 0 ? e[0] : null
              }(e.nativeEvent);
              r && (n.activePointerId = r.identifier, n.ignoreEmulatedMouseEvents = !0, n.isOverTarget = !0, n.isPressed = !0, n.target = e.currentTarget, n.pointerType = "touch", u || s || Qy(e.currentTarget), f || Kb(n.target), v(n_(n.target, e), n.pointerType) && e.stopPropagation(), _(bb(e.currentTarget), "scroll", o, !0))
            }, e.onTouchMove = e => {
              if (!e.currentTarget.contains(e.target)) return;
              if (!n.isPressed) return void e.stopPropagation();
              let r = Jb(e.nativeEvent, n.activePointerId),
                o = !0;
              r && r_(r, e.currentTarget) ? n.isOverTarget || null == n.pointerType || (n.isOverTarget = !0, o = v(n_(n.target, e), n.pointerType)) : n.isOverTarget && null != n.pointerType && (n.isOverTarget = !1, o = k(n_(n.target, e), n.pointerType, !1), m(n_(n.target, e))), o && e.stopPropagation()
            }, e.onTouchEnd = e => {
              if (!e.currentTarget.contains(e.target)) return;
              if (!n.isPressed) return void e.stopPropagation();
              let r = Jb(e.nativeEvent, n.activePointerId),
                o = !0;
              r && r_(r, e.currentTarget) && null != n.pointerType ? (B(n_(n.target, e), n.pointerType), o = k(n_(n.target, e), n.pointerType)) : n.isOverTarget && null != n.pointerType && (o = k(n_(n.target, e), n.pointerType, !1)), o && e.stopPropagation(), n.isPressed = !1, n.activePointerId = null, n.isOverTarget = !1, n.ignoreEmulatedMouseEvents = !0, n.target && !f && Hb(n.target), C()
            }, e.onTouchCancel = e => {
              e.currentTarget.contains(e.target) && (e.stopPropagation(), n.isPressed && g(n_(n.target, e)))
            };
            let o = e => {
              n.isPressed && e.target.contains(n.target) && g({
                currentTarget: n.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            e.onDragStart = n => {
              n.currentTarget.contains(n.target) && g(n)
            }
          }
          return e
        }), [_, u, s, C, f, g, m, k, v, B]);
        return (0, d.useEffect)((() => () => {
          var n;
          f || Hb(null !== (n = b.current.target) && void 0 !== n ? n : void 0)
        }), [f]), {
          isPressed: i || p,
          pressProps: Zy(A, h)
        }
      }

      function Zb(n) {
        return "A" === n.tagName && n.hasAttribute("href")
      }

      function Qb(n, e) {
        const {
          key: r,
          code: o
        } = n, t = e, a = t.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== o || t instanceof bb(t).HTMLInputElement && !d_(t, r) || t instanceof bb(t).HTMLTextAreaElement || t.isContentEditable || ("link" === a || !a && Zb(t)) && "Enter" !== r)
      }

      function Jb(n, e) {
        const r = n.changedTouches;
        for (let n = 0; n < r.length; n++) {
          const o = r[n];
          if (o.identifier === e) return o
        }
        return null
      }

      function n_(n, e) {
        let r = 0,
          o = 0;
        return e.targetTouches && 1 === e.targetTouches.length && (r = e.targetTouches[0].clientX, o = e.targetTouches[0].clientY), {
          currentTarget: n,
          shiftKey: e.shiftKey,
          ctrlKey: e.ctrlKey,
          metaKey: e.metaKey,
          altKey: e.altKey,
          clientX: r,
          clientY: o
        }
      }

      function e_(n, e) {
        let r = e.clientX,
          o = e.clientY;
        return {
          currentTarget: n,
          shiftKey: e.shiftKey,
          ctrlKey: e.ctrlKey,
          metaKey: e.metaKey,
          altKey: e.altKey,
          clientX: r,
          clientY: o
        }
      }

      function r_(n, e) {
        let r = e.getBoundingClientRect(),
          o = function(n) {
            let e = 0,
              r = 0;
            return void 0 !== n.width ? e = n.width / 2 : void 0 !== n.radiusX && (e = n.radiusX), void 0 !== n.height ? r = n.height / 2 : void 0 !== n.radiusY && (r = n.radiusY), {
              top: n.clientY - r,
              right: n.clientX + e,
              bottom: n.clientY + r,
              left: n.clientX - e
            }
          }(n);
        return a = o, !((t = r).left > a.right || a.left > t.right || t.top > a.bottom || a.top > t.bottom);
        var t, a
      }

      function o_(n) {
        return !(n instanceof HTMLElement && n.hasAttribute("draggable"))
      }

      function t_(n) {
        return !(n instanceof HTMLInputElement || (n instanceof HTMLButtonElement ? "submit" === n.type || "reset" === n.type : Zb(n)))
      }

      function a_(n, e) {
        return n instanceof HTMLInputElement ? !d_(n, e) : t_(n)
      }
      const u_ = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function d_(n, e) {
        return "checkbox" === n.type || "radio" === n.type ? " " === e : u_.has(n.type)
      }

      function i_(n, e) {
        let {
          elementType: r = "a",
          onPress: o,
          onPressStart: t,
          onPressEnd: a,
          onClick: u,
          isDisabled: d,
          ...i
        } = n, s = {};
        "a" !== r && (s = {
          role: "link",
          tabIndex: d ? void 0 : 0
        });
        let {
          focusableProps: l
        } = Rb(n, e), {
          pressProps: f,
          isPressed: c
        } = Xb({
          onPress: o,
          onPressStart: t,
          onPressEnd: a,
          isDisabled: d,
          ref: e
        }), A = Ay(i, {
          labelable: !0
        }), p = Zy(l, f), y = cb();
        return {
          isPressed: c,
          linkProps: Zy(A, pb(n), {
            ...p,
            ...s,
            "aria-disabled": d || void 0,
            "aria-current": n["aria-current"],
            onClick: e => {
              var r;
              null === (r = f.onClick) || void 0 === r || r.call(f, e), u && (u(e), console.warn("onClick is deprecated, please use onPress")), !y.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(n, e) {
                let r = n.getAttribute("target");
                return !(r && "_self" !== r || n.origin !== location.origin || n.hasAttribute("download") || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
              }(e.currentTarget, e) && n.href && (e.preventDefault(), y.open(e.currentTarget, e, n.href, n.routerOptions))
            }
          })
        }
      }
      var s_ = r(79370),
        l_ = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      l_.setAttributes = b(), l_.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, l_.domAPI = p(), l_.insertStyleElement = C(), c()(s_.A, l_), s_.A && s_.A.locals && s_.A.locals;
      var f_ = {
          MD: "foundry_m1icrx2 foundry_m1icrx1 foundry_m1icrx4",
          LG: "foundry_m1icrx3 foundry_m1icrx1 foundry_m1icrx4"
        },
        c_ = {
          MD: "foundry_m1icrxb foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrxa foundry_1d5mo5m0",
          LG: "foundry_m1icrxc foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrxa foundry_1d5mo5m0"
        },
        A_ = {
          MD: "foundry_m1icrx8 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrx7",
          LG: "foundry_m1icrx9 foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrx7"
        },
        p_ = "foundry_m1icrxe foundry_1d5mo5m0 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg",
        y_ = {
          MD: "foundry_m1icrx2 foundry_m1icrx1",
          LG: "foundry_m1icrx3 foundry_m1icrx1"
        };
      (0, d.forwardRef)((({
        breadcrumbs: n,
        size: e = "MD",
        isLandmark: r = !0,
        hideRootPage: o,
        showCurrentPage: t,
        testId: u,
        ...i
      }, s) => {
        if (0 === n.length) return null;
        const l = Le((0, d.useRef)(null), s),
          f = (0, d.useRef)(null),
          {
            countWrappedElements: c
          } = {
            countWrappedElements: n => {
              if (!n.current) return;
              const {
                children: e
              } = n.current;
              let r = 0,
                o = 0;
              return Array.from(e).map(((n, e) => {
                const t = n.getBoundingClientRect().top,
                  a = n.getBoundingClientRect().height;
                return 0 === e && (r = t, o = a), t
              })).filter((n => n >= r + o)).length
            }
          },
          A = n[0],
          p = n[n.length - 1],
          y = n.slice(1, n.length - 1),
          [b, _] = (0, d.useState)(y),
          [C, v] = (0, d.useState)([]),
          k = (0, d.useCallback)((() => {
            const n = c(f);
            _(y.slice(n, y.length)), v(y.slice(0, n))
          }), [f]);
        (0, d.useEffect)((() => {
          const n = new ResizeObserver(k);
          return f.current && n.observe(f.current), () => {
            f.current && n.unobserve(f.current)
          }
        }), [f.current]);
        const B = (0, d.useMemo)((() => {
            const n = y.slice().reverse();
            return (0, a.jsxs)("ol", {
              className: f_[e],
              ref: f,
              "aria-hidden": "true",
              children: [!o && A && (0, a.jsx)(b_, {
                href: A.url,
                size: e,
                icon: A.icon,
                iconLabel: A.iconLabel,
                iconPosition: A.iconPosition,
                children: A.label
              }, A.label), C.length > 0 && (0, a.jsx)("li", {
                className: A_[e],
                children: (0, a.jsx)("button", {
                  className: p_,
                  children: "..."
                })
              }), t && p && (0, a.jsx)(b_, {
                href: p.url,
                size: e,
                icon: p.icon,
                iconLabel: p.iconLabel,
                iconPosition: p.iconPosition,
                isCurrent: !0,
                children: p.label
              }, p.label), n.map((n => (0, a.jsx)(b_, {
                href: n.url,
                size: e,
                icon: n.icon,
                iconLabel: n.iconLabel,
                iconPosition: n.iconPosition,
                children: n.label
              }, n.label)))]
            })
          }), [n, C]),
          {
            navProps: g
          } = function(n) {
            let {
              "aria-label": e,
              ...r
            } = n, o = Gy((t = iy) && t.__esModule ? t.default : t, "@react-aria/breadcrumbs");
            var t;
            return {
              navProps: {
                ...Ay(r, {
                  labelable: !0
                }),
                "aria-label": e || o.format("breadcrumbs")
              }
            }
          }(i),
          m = r ? "nav" : "div";
        return (0, a.jsxs)(m, {
          ...g,
          role: r ? "navigation" : null,
          className: "foundry_m1icrx0",
          children: [(0, a.jsxs)("ol", {
            className: y_[e],
            "data-testid": u,
            ref: l,
            children: [!o && A && (0, a.jsx)(b_, {
              href: A.url,
              size: e,
              icon: A.icon,
              iconLabel: A.iconLabel,
              iconPosition: A.iconPosition,
              children: A.label
            }, A.label), C.length > 0 && (0, a.jsx)("li", {
              className: A_[e],
              children: (0, a.jsx)(__, {
                items: C
              })
            }), b.length > 0 && b.map(((n, r) => {
              const {
                label: o,
                url: t,
                icon: u,
                iconLabel: d,
                iconPosition: i
              } = n;
              return (0, a.jsx)(b_, {
                href: t,
                size: e,
                icon: u,
                iconLabel: d,
                iconPosition: i,
                children: o
              }, `${o.replace(/\s/g,"")}-${r}`)
            })), t && p && (0, a.jsx)(b_, {
              href: p.url,
              size: e,
              icon: p.icon,
              iconLabel: p.iconLabel,
              iconPosition: p.iconPosition,
              isCurrent: !0,
              children: p.label
            }, p.label)]
          }), B]
        })
      }));
      const b_ = ({
          size: n,
          icon: e,
          iconLabel: r,
          iconPosition: o = "left",
          ...t
        }) => {
          const u = (0, d.useRef)(null),
            {
              itemProps: i
            } = function(n, e) {
              let {
                isCurrent: r,
                isDisabled: o,
                "aria-current": t,
                elementType: a = "a",
                ...u
              } = n, {
                linkProps: d
              } = i_({
                isDisabled: o || r,
                elementType: a,
                ...u
              }, e), i = {};
              return /^h[1-6]$/.test(a) || (i = d), r && (i["aria-current"] = t || "page", i.tabIndex = n.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": o,
                  ...i
                }
              }
            }({
              ...t,
              elementType: "a"
            }, u),
            {
              isCurrent: s,
              children: l
            } = t,
            f = s ? "span" : "a",
            c = e && gn[e];
          return (0, a.jsx)("li", {
            className: A_[n],
            children: (0, a.jsxs)(f, {
              ...i,
              ref: u,
              className: (0, Wn.$)(c_[n], s && "foundry_m1icrxd"),
              children: [c && "left" === o && (0, a.jsx)(c, {
                label: r || "",
                size: "LG"
              }), l, c && "right" === o && (0, a.jsx)(c, {
                label: r || "",
                size: "LG"
              })]
            })
          })
        },
        __ = ({
          items: n
        }) => {
          const [e, r] = (0, d.useState)(!1);
          return (0, a.jsxs)(ap, {
            open: e,
            onOpenChange: () => r(!e),
            children: [(0, a.jsx)(up, {
              className: p_,
              children: "..."
            }), (0, a.jsx)(sp, {
              children: (0, a.jsx)(lp, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_m1icrxf",
                children: (0, a.jsx)(fp, {
                  className: "foundry_m1icrxg",
                  children: n.map(((n, e) => (0, a.jsx)(cp, {
                    value: n.label,
                    className: "foundry_m1icrxh foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
                    children: (0, a.jsx)(Ap, {
                      children: n.label
                    })
                  }, `${n.label}-${e}`)))
                })
              })
            })]
          })
        },
        C_ = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: n,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        v_ = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: n,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        k_ = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: n,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        B_ = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: n,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        g_ = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: n,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        m_ = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M5 10H15",
            stroke: n,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function h_(n, e, r) {
        let [o, t] = (0, d.useState)(n || e), a = (0, d.useRef)(void 0 !== n), u = void 0 !== n;
        (0, d.useEffect)((() => {
          let n = a.current;
          n !== u && console.warn(`WARN: A component changed from ${n?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}.`), a.current = u
        }), [u]);
        let i = u ? n : o,
          s = (0, d.useCallback)(((n, ...e) => {
            let o = (n, ...e) => {
              r && (Object.is(i, n) || r(n, ...e)), u || (i = n)
            };
            "function" == typeof n ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), t(((r, ...t) => {
              let a = n(u ? i : r, ...t);
              return o(a, ...e), u ? r : a
            }))) : (u || t(n), o(n, ...e))
          }), [u, i, r]);
        return [i, s]
      }

      function E_(n = {}) {
        let {
          isReadOnly: e
        } = n, [r, o] = h_(n.isSelected, n.defaultSelected || !1, n.onChange);
        return {
          isSelected: r,
          setSelected: function(n) {
            e || o(n)
          },
          toggle: function() {
            e || o(!r)
          }
        }
      }

      function w_(n, e, r) {
        let {
          validationBehavior: o,
          focus: t
        } = n;
        Ky((() => {
          if ("native" === o && (null == r ? void 0 : r.current)) {
            let o = e.realtimeValidation.isInvalid ? e.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(o), r.current.hasAttribute("title") || (r.current.title = ""), e.realtimeValidation.isInvalid || e.updateValidation({
              isInvalid: !(n = r.current).validity.valid,
              validationDetails: x_(n),
              validationErrors: n.validationMessage ? [n.validationMessage] : []
            })
          }
          var n
        }));
        let a = Hy((() => {
            e.resetValidation()
          })),
          u = Hy((n => {
            var o;
            e.displayValidation.isInvalid || e.commitValidation();
            let a = null == r || null === (o = r.current) || void 0 === o ? void 0 : o.form;
            var u;
            !n.defaultPrevented && r && a && function(n) {
              for (let e = 0; e < n.elements.length; e++) {
                let r = n.elements[e];
                if (!r.validity.valid) return r
              }
              return null
            }(a) === r.current && (t ? t() : null === (u = r.current) || void 0 === u || u.focus(), gb = "keyboard", xb("keyboard", null)), n.preventDefault()
          })),
          i = Hy((() => {
            e.commitValidation()
          }));
        (0, d.useEffect)((() => {
          let n = null == r ? void 0 : r.current;
          if (!n) return;
          let e = n.form;
          return n.addEventListener("invalid", u), n.addEventListener("change", i), null == e || e.addEventListener("reset", a), () => {
            n.removeEventListener("invalid", u), n.removeEventListener("change", i), null == e || e.removeEventListener("reset", a)
          }
        }), [r, u, i, a, o])
      }

      function x_(n) {
        let e = n.validity;
        return {
          badInput: e.badInput,
          customError: e.customError,
          patternMismatch: e.patternMismatch,
          rangeOverflow: e.rangeOverflow,
          rangeUnderflow: e.rangeUnderflow,
          stepMismatch: e.stepMismatch,
          tooLong: e.tooLong,
          tooShort: e.tooShort,
          typeMismatch: e.typeMismatch,
          valueMissing: e.valueMissing,
          valid: e.valid
        }
      }
      const j_ = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        S_ = {
          ...j_,
          customError: !0,
          valid: !1
        },
        O_ = {
          isInvalid: !1,
          validationDetails: j_,
          validationErrors: []
        },
        P_ = (0, d.createContext)({}),
        q_ = "__formValidationState" + Date.now();

      function z_(n) {
        if (n[q_]) {
          let {
            realtimeValidation: e,
            displayValidation: r,
            updateValidation: o,
            resetValidation: t,
            commitValidation: a
          } = n[q_];
          return {
            realtimeValidation: e,
            displayValidation: r,
            updateValidation: o,
            resetValidation: t,
            commitValidation: a
          }
        }
        return function(n) {
          let {
            isInvalid: e,
            validationState: r,
            name: o,
            value: t,
            builtinValidation: a,
            validate: u,
            validationBehavior: i = "aria"
          } = n;
          r && (e || (e = "invalid" === r));
          let s = void 0 !== e ? {
              isInvalid: e,
              validationErrors: [],
              validationDetails: S_
            } : null,
            l = (0, d.useMemo)((() => L_(function(n, e) {
              if ("function" == typeof n) {
                let r = n(e);
                if (r && "boolean" != typeof r) return D_(r)
              }
              return []
            }(u, t))), [u, t]);
          (null == a ? void 0 : a.validationDetails.valid) && (a = null);
          let f = (0, d.useContext)(P_),
            c = (0, d.useMemo)((() => o ? Array.isArray(o) ? o.flatMap((n => D_(f[n]))) : D_(f[o]) : []), [f, o]),
            [A, p] = (0, d.useState)(f),
            [y, b] = (0, d.useState)(!1);
          f !== A && (p(f), b(!1));
          let _ = (0, d.useMemo)((() => L_(y ? [] : c)), [y, c]),
            C = (0, d.useRef)(O_),
            [v, k] = (0, d.useState)(O_),
            B = (0, d.useRef)(O_),
            [g, m] = (0, d.useState)(!1);
          return (0, d.useEffect)((() => {
            if (!g) return;
            m(!1);
            let n = l || a || C.current;
            T_(n, B.current) || (B.current = n, k(n))
          })), {
            realtimeValidation: s || _ || l || a || O_,
            displayValidation: "native" === i ? s || _ || v : s || _ || l || a || v,
            updateValidation(n) {
              "aria" !== i || T_(v, n) ? C.current = n : k(n)
            },
            resetValidation() {
              let n = O_;
              T_(n, B.current) || (B.current = n, k(n)), "native" === i && m(!1), b(!0)
            },
            commitValidation() {
              "native" === i && m(!0), b(!0)
            }
          }
        }(n)
      }

      function D_(n) {
        return n ? Array.isArray(n) ? n : [n] : []
      }

      function L_(n) {
        return n.length ? {
          isInvalid: !0,
          validationErrors: n,
          validationDetails: S_
        } : null
      }

      function T_(n, e) {
        return n === e || n && e && n.isInvalid === e.isInvalid && n.validationErrors.length === e.validationErrors.length && n.validationErrors.every(((n, r) => n === e.validationErrors[r])) && Object.entries(n.validationDetails).every((([n, r]) => e.validationDetails[n] === r))
      }

      function N_(n, e, r) {
        let o = (0, d.useRef)(e),
          t = Hy((() => {
            r && r(o.current)
          }));
        (0, d.useEffect)((() => {
          var e;
          let r = null == n || null === (e = n.current) || void 0 === e ? void 0 : e.form;
          return null == r || r.addEventListener("reset", t), () => {
            null == r || r.removeEventListener("reset", t)
          }
        }), [n, t])
      }

      function M_(n, e, r) {
        let {
          isDisabled: o = !1,
          isReadOnly: t = !1,
          value: a,
          name: u,
          children: d,
          "aria-label": i,
          "aria-labelledby": s,
          validationState: l = "valid",
          isInvalid: f
        } = n;
        null != d || null != i || null != s || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
        let {
          pressProps: c,
          isPressed: A
        } = Xb({
          isDisabled: o
        }), {
          pressProps: p,
          isPressed: y
        } = Xb({
          isDisabled: o || t,
          onPress() {
            e.toggle()
          }
        }), {
          focusableProps: b
        } = Rb(n, r), _ = Zy(c, b), C = Ay(n, {
          labelable: !0
        });
        return N_(r, e.isSelected, e.setSelected), {
          labelProps: Zy(p, {
            onClick: n => n.preventDefault()
          }),
          inputProps: Zy(C, {
            "aria-invalid": f || "invalid" === l || void 0,
            "aria-errormessage": n["aria-errormessage"],
            "aria-controls": n["aria-controls"],
            "aria-readonly": t || void 0,
            onChange: n => {
              n.stopPropagation(), e.setSelected(n.target.checked)
            },
            disabled: o,
            ...null == a ? {} : {
              value: a
            },
            name: u,
            type: "checkbox",
            ..._
          }),
          isSelected: e.isSelected,
          isPressed: A || y,
          isDisabled: o,
          isReadOnly: t,
          isInvalid: f || "invalid" === l
        }
      }
      var F_ = r(44161),
        R_ = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function I_(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function G_(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function V_(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? G_(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = I_(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : G_(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function K_(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      R_.setAttributes = b(), R_.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, R_.domAPI = p(), R_.insertStyleElement = C(), c()(F_.A, R_), F_.A && F_.A.locals && F_.A.locals;
      var H_ = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        W_ = n => {
          var e = e => {
            var r = n.defaultClassName,
              o = V_(V_({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) H_(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return K_(n.variantClassNames, (n => K_(n, (n => n.split(" ")[0]))))
            }
          }, e
        },
        $_ = W_({
          defaultClassName: "foundry_11gbdty6 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty7",
              LG: "foundry_11gbdty8",
              XL: "foundry_11gbdty9"
            },
            appearance: {
              primary: "foundry_11gbdtya",
              secondary: "foundry_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        U_ = W_({
          defaultClassName: "foundry_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty3",
              LG: "foundry_11gbdty4",
              XL: "foundry_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Y_ = W_({
          defaultClassName: "foundry_11gbdtyi",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
              LG: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              XL: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        X_ = W_({
          defaultClassName: "foundry_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdtye",
              LG: "foundry_11gbdtyf",
              XL: "foundry_11gbdtyg"
            },
            isDisabled: {
              true: "foundry_11gbdtyh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, d.forwardRef)((({
        isChecked: n,
        defaultChecked: e,
        onCheckedChange: r,
        label: t,
        description: i,
        size: s = "MD",
        appearance: f = "primary",
        isIndeterminate: c,
        hideLabel: A,
        testId: p,
        errorMessage: y,
        className: b,
        ..._
      }, C) => {
        const v = (0, d.useRef)(null),
          k = Le(v, C),
          B = (0, d.useId)(),
          {
            setSelected: g,
            ...m
          } = E_({
            isSelected: n,
            defaultSelected: e,
            onChange: r,
            value: _.value
          }),
          {
            inputProps: h,
            isDisabled: E,
            isReadOnly: w,
            isInvalid: x,
            isSelected: j
          } = function(n, e, r) {
            let o = z_({
                ...n,
                value: e.isSelected
              }),
              {
                isInvalid: t,
                validationErrors: a,
                validationDetails: u
              } = o.displayValidation,
              {
                labelProps: i,
                inputProps: s,
                isSelected: l,
                isPressed: f,
                isDisabled: c,
                isReadOnly: A
              } = M_({
                ...n,
                isInvalid: t
              }, e, r);
            w_(n, o, r);
            let {
              isIndeterminate: p,
              isRequired: y,
              validationBehavior: b = "aria"
            } = n;
            return (0, d.useEffect)((() => {
              r.current && (r.current.indeterminate = !!p)
            })), {
              labelProps: i,
              inputProps: {
                ...s,
                checked: l,
                "aria-required": y && "aria" === b || void 0,
                required: y && "native" === b
              },
              isSelected: l,
              isPressed: f,
              isDisabled: c,
              isReadOnly: A,
              isInvalid: t,
              validationErrors: a,
              validationDetails: u
            }
          }({
            ..._,
            "aria-label": t,
            id: B
          }, {
            ...m,
            setSelected: _.isReadOnly ? () => !1 : g
          }, v),
          S = (0, u.v6)({
            ...h,
            "aria-checked": j,
            className: b
          }, {
            className: "foundry_11gbdty1"
          }),
          O = c ? o[`Dash${s}`] : o[`Check${s}`],
          P = x && !!y;
        return (0, a.jsxs)("label", {
          className: "foundry_11gbdty0",
          children: [(0, a.jsxs)("div", {
            className: U_({
              size: s
            }),
            children: [(0, a.jsx)(l, {
              children: (0, a.jsx)("input", {
                ...S,
                ref: k
              })
            }), (0, a.jsx)("div", {
              className: $_({
                size: s,
                appearance: f
              }),
              "aria-hidden": "true",
              "data-state": c ? "mixed" : j ? "checked" : "unchecked",
              "data-disabled": E || w,
              "data-testid": p,
              children: (0, a.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (j || c) && (0, a.jsx)(O, {
                  "aria-hidden": "true"
                })
              })
            })]
          }), (0, a.jsx)(l, {
            enabled: !!A,
            children: (0, a.jsxs)("div", {
              className: X_({
                size: s,
                isDisabled: E
              }),
              children: [(0, a.jsx)("p", {
                className: Y_({
                  size: s
                }),
                children: t
              }), i && !P && (0, a.jsx)("p", {
                className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: i
              }), P && (0, a.jsx)("p", {
                className: "foundry_11gbdtyn foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: y
              })]
            })
          })]
        })
      }));
      const Z_ = new WeakMap;

      function Q_(n, e) {
        return "#comment" !== n.nodeName && function(n) {
          const e = bb(n);
          if (!(n instanceof e.HTMLElement || n instanceof e.SVGElement)) return !1;
          let {
            display: r,
            visibility: o
          } = n.style, t = "none" !== r && "hidden" !== o && "collapse" !== o;
          if (t) {
            const {
              getComputedStyle: e
            } = n.ownerDocument.defaultView;
            let {
              display: r,
              visibility: o
            } = e(n);
            t = "none" !== r && "hidden" !== o && "collapse" !== o
          }
          return t
        }(n) && function(n, e) {
          return !n.hasAttribute("hidden") && !n.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== n.nodeName || !e || "SUMMARY" === e.nodeName || n.hasAttribute("open"))
        }(n, e) && (!n.parentElement || Q_(n.parentElement, n))
      }
      const J_ = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        nC = J_.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      J_.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const eC = J_.join(':not([hidden]):not([tabindex="-1"]),');

      function rC(n, e) {
        return !!n && !!e && e.some((e => e.contains(n)))
      }

      function oC(n, e, r) {
        let o = (null == e ? void 0 : e.tabbable) ? eC : nC,
          t = yb(n).createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
            acceptNode(n) {
              var t;
              return (null == e || null === (t = e.from) || void 0 === t ? void 0 : t.contains(n)) ? NodeFilter.FILTER_REJECT : !n.matches(o) || !Q_(n) || r && !rC(n, r) || (null == e ? void 0 : e.accept) && !e.accept(n) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == e ? void 0 : e.from) && (t.currentNode = e.from), t
      }
      class tC {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(n) {
          return this.fastMap.get(n)
        }
        addTreeNode(n, e, r) {
          let o = this.fastMap.get(null != e ? e : null);
          if (!o) return;
          let t = new aC({
            scopeRef: n
          });
          o.addChild(t), t.parent = o, this.fastMap.set(n, t), r && (t.nodeToRestore = r)
        }
        addNode(n) {
          this.fastMap.set(n.scopeRef, n)
        }
        removeTreeNode(n) {
          if (null === n) return;
          let e = this.fastMap.get(n);
          if (!e) return;
          let r = e.parent;
          for (let n of this.traverse()) n !== e && e.nodeToRestore && n.nodeToRestore && e.scopeRef && e.scopeRef.current && rC(n.nodeToRestore, e.scopeRef.current) && (n.nodeToRestore = e.nodeToRestore);
          let o = e.children;
          r && (r.removeChild(e), o.size > 0 && o.forEach((n => r && r.addChild(n)))), this.fastMap.delete(e.scopeRef)
        }* traverse(n = this.root) {
          if (null != n.scopeRef && (yield n), n.children.size > 0)
            for (let e of n.children) yield* this.traverse(e)
        }
        clone() {
          var n;
          let e = new tC;
          var r;
          for (let o of this.traverse()) e.addTreeNode(o.scopeRef, null !== (r = null === (n = o.parent) || void 0 === n ? void 0 : n.scopeRef) && void 0 !== r ? r : null, o.nodeToRestore);
          return e
        }
        constructor() {
          this.fastMap = new Map, this.root = new aC({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class aC {
        addChild(n) {
          this.children.add(n), n.parent = this
        }
        removeChild(n) {
          this.children.delete(n), n.parent = void 0
        }
        constructor(n) {
          this.children = new Set, this.contain = !1, this.scopeRef = n.scopeRef
        }
      }

      function uC(n, e) {
        let {
          id: r,
          "aria-label": o,
          "aria-labelledby": t
        } = n;
        if (r = Uy(r), t && o) {
          let n = new Set([r, ...t.trim().split(/\s+/)]);
          t = [...n].join(" ")
        } else t && (t = t.trim().split(/\s+/).join(" "));
        return o || t || !e || (o = e), {
          id: r,
          "aria-label": o,
          "aria-labelledby": t
        }
      }

      function dC(n) {
        let {
          description: e,
          errorMessage: r,
          isInvalid: o,
          validationState: t
        } = n, {
          labelProps: a,
          fieldProps: u
        } = function(n) {
          let {
            id: e,
            label: r,
            "aria-labelledby": o,
            "aria-label": t,
            labelElementType: a = "label"
          } = n;
          e = Uy(e);
          let u = Uy(),
            d = {};
          return r ? (o = o ? `${u} ${o}` : u, d = {
            id: u,
            htmlFor: "label" === a ? e : void 0
          }) : o || t || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: d,
            fieldProps: uC({
              id: e,
              "aria-label": t,
              "aria-labelledby": o
            })
          }
        }(n), d = Xy([Boolean(e), Boolean(r), o, t]), i = Xy([Boolean(e), Boolean(r), o, t]);
        return u = Zy(u, {
          "aria-describedby": [d, i, n["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: a,
          fieldProps: u,
          descriptionProps: {
            id: d
          },
          errorMessageProps: {
            id: i
          }
        }
      }

      function iC(n, e) {
        let {
          name: r,
          isReadOnly: o,
          isRequired: t,
          isDisabled: a,
          orientation: u = "vertical",
          validationBehavior: i = "aria"
        } = n, {
          direction: s
        } = zy(), {
          isInvalid: l,
          validationErrors: f,
          validationDetails: c
        } = e.displayValidation, {
          labelProps: A,
          fieldProps: p,
          descriptionProps: y,
          errorMessageProps: b
        } = dC({
          ...n,
          labelElementType: "span",
          isInvalid: e.isInvalid,
          errorMessage: n.errorMessage || f
        }), _ = Ay(n, {
          labelable: !0
        }), {
          focusWithinProps: C
        } = function(n) {
          let {
            isDisabled: e,
            onBlurWithin: r,
            onFocusWithin: o,
            onFocusWithinChange: t
          } = n, a = (0, d.useRef)({
            isFocusWithin: !1
          }), u = (0, d.useCallback)((n => {
            a.current.isFocusWithin && !n.currentTarget.contains(n.relatedTarget) && (a.current.isFocusWithin = !1, r && r(n), t && t(!1))
          }), [r, t, a]), i = Nb(u), s = (0, d.useCallback)((n => {
            a.current.isFocusWithin || document.activeElement !== n.target || (o && o(n), t && t(!0), a.current.isFocusWithin = !0, i(n))
          }), [o, t, i]);
          return e ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: s,
              onBlur: u
            }
          }
        }({
          onBlurWithin(r) {
            var o;
            null === (o = n.onBlur) || void 0 === o || o.call(n, r), e.selectedValue || e.setLastFocusedValue(null)
          },
          onFocusWithin: n.onFocus,
          onFocusWithinChange: n.onFocusChange
        }), v = Uy(r);
        return Z_.set(e, {
          name: v,
          descriptionId: y.id,
          errorMessageId: b.id,
          validationBehavior: i
        }), {
          radioGroupProps: Zy(_, {
            role: "radiogroup",
            onKeyDown: n => {
              let r;
              switch (n.key) {
                case "ArrowRight":
                  r = "rtl" === s && "vertical" !== u ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === s && "vertical" !== u ? "next" : "prev";
                  break;
                case "ArrowDown":
                  r = "next";
                  break;
                case "ArrowUp":
                  r = "prev";
                  break;
                default:
                  return
              }
              n.preventDefault();
              let o, t = oC(n.currentTarget, {
                from: n.target
              });
              "next" === r ? (o = t.nextNode(), o || (t.currentNode = n.currentTarget, o = t.firstChild())) : (o = t.previousNode(), o || (t.currentNode = n.currentTarget, o = t.lastChild())), o && (o.focus(), e.setSelectedValue(o.value))
            },
            "aria-invalid": e.isInvalid || void 0,
            "aria-errormessage": n["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": t || void 0,
            "aria-disabled": a || void 0,
            "aria-orientation": u,
            ...p,
            ...C
          }),
          labelProps: A,
          descriptionProps: y,
          errorMessageProps: b,
          isInvalid: l,
          validationErrors: f,
          validationDetails: c
        }
      }
      new tC;
      let sC = Math.round(1e10 * Math.random()),
        lC = 0;
      var fC = r(44625),
        cC = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function AC(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function pC(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function yC(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? pC(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = AC(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : pC(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function bC(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      cC.setAttributes = b(), cC.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, cC.domAPI = p(), cC.insertStyleElement = C(), c()(fC.A, cC), fC.A && fC.A.locals && fC.A.locals;
      var _C = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        CC = n => {
          var e = e => {
            var r = n.defaultClassName,
              o = yC(yC({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) _C(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bC(n.variantClassNames, (n => bC(n, (n => n.split(" ")[0]))))
            }
          }, e
        },
        vC = CC({
          defaultClassName: "foundry_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_njguqn2",
              LG: "foundry_njguqn3",
              XL: "foundry_njguqn4"
            },
            orientation: {
              horizontal: "foundry_njguqn5",
              vertical: "foundry_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const kC = (0, d.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        BC = ((0, d.forwardRef)((({
          label: n,
          description: e,
          size: r = "MD",
          appearance: o = "primary",
          hideLabel: t,
          isRequired: i,
          hideRequiredAsterisk: s,
          testId: f,
          className: c,
          errorMessage: A,
          orientation: p = "vertical",
          ...y
        }, b) => {
          const {
            children: _
          } = y, C = Le((0, d.useRef)(null), b), v = y.id || (0, d.useId)(), k = function(n) {
            let e = (0, d.useMemo)((() => n.name || `radio-group-${sC}-${++lC}`), [n.name]);
            var r;
            let [o, t] = h_(n.value, null !== (r = n.defaultValue) && void 0 !== r ? r : null, n.onChange), [a, u] = (0, d.useState)(null), i = z_({
              ...n,
              value: o
            }), s = i.displayValidation.isInvalid;
            return {
              ...i,
              name: e,
              selectedValue: o,
              setSelectedValue: e => {
                n.isReadOnly || n.isDisabled || (t(e), i.commitValidation())
              },
              lastFocusedValue: a,
              setLastFocusedValue: u,
              isDisabled: n.isDisabled || !1,
              isReadOnly: n.isReadOnly || !1,
              isRequired: n.isRequired || !1,
              validationState: n.validationState || (s ? "invalid" : null),
              isInvalid: s
            }
          }(y), B = {
            state: k,
            size: r,
            appearance: o
          }, {
            radioGroupProps: g,
            labelProps: m,
            descriptionProps: h,
            isInvalid: E,
            errorMessageProps: w
          } = iC({
            ...y,
            id: v,
            label: n,
            isRequired: i,
            description: e,
            orientation: p
          }, k), x = (0, u.v6)({
            ...g,
            className: c
          }, {
            className: "foundry_njguqn0",
            "aria-errormessage": w?.id
          }), j = E && !!A;
          return (0, a.jsxs)("div", {
            ref: C,
            "data-testid": f,
            ...x,
            children: [(0, a.jsx)(l, {
              enabled: !!t,
              children: (0, a.jsxs)("div", {
                className: "foundry_njguqn7",
                children: [(0, a.jsx)($, {
                  ...m,
                  className: "foundry_njguqn8 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
                  asChild: !0,
                  children: (0, a.jsxs)("label", {
                    children: [n, i && !s && (0, a.jsx)("span", {
                      className: "foundry_njguqn9",
                      children: "*"
                    })]
                  })
                }), e && (0, a.jsx)(rn, {
                  ...h,
                  className: "foundry_njguqna foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: e
                })]
              })
            }), (0, a.jsx)("div", {
              className: vC({
                size: r,
                orientation: p
              }),
              children: (0, a.jsx)(kC.Provider, {
                value: B,
                children: _
              })
            }), j && (0, a.jsxs)($, {
              ...w,
              appearance: "bold",
              className: "foundry_njguqnb",
              children: [(0, a.jsx)(Bn.X, {
                size: "MD",
                label: "",
                className: "foundry_njguqnc"
              }), A]
            })]
          })
        })), ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, a.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: n
          })
        })),
        gC = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, a.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: n
          })
        }),
        mC = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, a.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: n
          })
        });
      var hC = r(96295),
        EC = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      EC.setAttributes = b(), EC.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, EC.domAPI = p(), EC.insertStyleElement = C(), c()(hC.A, EC), hC.A && hC.A.locals && hC.A.locals;
      var wC = CC({
          defaultClassName: "foundry_1pfduete",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
              LG: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              XL: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf"
            },
            isDisabled: {
              true: "foundry_1pfdueti"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xC = CC({
          defaultClassName: "foundry_1pfduet6 foundry_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_1pfduet7",
              secondary: "foundry_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jC = CC({
          defaultClassName: "foundry_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_1pfduet3",
              LG: "foundry_1pfduet4",
              XL: "foundry_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        SC = CC({
          defaultClassName: "foundry_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_1pfduetb",
              LG: "foundry_1pfduetc",
              XL: "foundry_1pfduetd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, d.forwardRef)((({
        label: n,
        description: e,
        hideLabel: r,
        testId: o,
        className: u,
        ...i
      }, s) => {
        const f = (0, d.useRef)(null),
          c = Le(f, s),
          A = i.id || (0, d.useId)(),
          p = (0, d.useContext)(kC),
          {
            state: y,
            appearance: b,
            size: _
          } = p,
          {
            inputProps: C
          } = function(n, e, r) {
            let {
              value: o,
              children: t,
              "aria-label": a,
              "aria-labelledby": u
            } = n;
            const d = n.isDisabled || e.isDisabled;
            null != t || null != a || null != u || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
            let i = e.selectedValue === o,
              {
                pressProps: s,
                isPressed: l
              } = Xb({
                isDisabled: d
              }),
              {
                pressProps: f,
                isPressed: c
              } = Xb({
                isDisabled: d,
                onPress() {
                  e.setSelectedValue(o)
                }
              }),
              {
                focusableProps: A
              } = Rb(Zy(n, {
                onFocus: () => e.setLastFocusedValue(o)
              }), r),
              p = Zy(s, A),
              y = Ay(n, {
                labelable: !0
              }),
              b = -1;
            null != e.selectedValue ? e.selectedValue === o && (b = 0) : e.lastFocusedValue !== o && null != e.lastFocusedValue || (b = 0), d && (b = void 0);
            let {
              name: _,
              descriptionId: C,
              errorMessageId: v,
              validationBehavior: k
            } = Z_.get(e);
            return N_(r, e.selectedValue, e.setSelectedValue), w_({
              validationBehavior: k
            }, e, r), {
              labelProps: Zy(f, {
                onClick: n => n.preventDefault()
              }),
              inputProps: Zy(y, {
                ...p,
                type: "radio",
                name: _,
                tabIndex: b,
                disabled: d,
                required: e.isRequired && "native" === k,
                checked: i,
                value: o,
                onChange: n => {
                  n.stopPropagation(), e.setSelectedValue(o)
                },
                "aria-describedby": [n["aria-describedby"], e.isInvalid ? v : null, C].filter(Boolean).join(" ") || void 0
              }),
              isDisabled: d,
              isSelected: i,
              isPressed: l || c
            }
          }({
            ...i,
            "aria-label": n,
            id: A
          }, y, f),
          v = C.checked,
          k = C.disabled || y?.isReadOnly,
          B = t[`Dot${_}`];
        return (0, a.jsxs)("label", {
          className: (0, Wn.$)("foundry_1pfduet0", u),
          children: [(0, a.jsxs)("div", {
            className: jC({
              size: _
            }),
            children: [(0, a.jsx)(l, {
              children: (0, a.jsx)("input", {
                ...C,
                ref: c,
                className: "foundry_1pfduet1"
              })
            }), (0, a.jsx)("div", {
              className: xC({
                appearance: b
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": k,
              "data-testid": o,
              children: (0, a.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, a.jsx)(B, {})
              })
            })]
          }), (0, a.jsx)(l, {
            enabled: !!r,
            children: (0, a.jsxs)("div", {
              className: SC({
                size: _
              }),
              children: [(0, a.jsx)("p", {
                className: wC({
                  size: _,
                  isDisabled: C.disabled
                }),
                "aria-label": n,
                children: n
              }), e && (0, a.jsx)("p", {
                className: "foundry_1pfduetj foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: e
              })]
            })
          })]
        })
      }));
      var OC = r(17401),
        PC = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function qC(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function zC(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function DC(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? zC(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = qC(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : zC(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function LC(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      PC.setAttributes = b(), PC.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, PC.domAPI = p(), PC.insertStyleElement = C(), c()(OC.A, PC), OC.A && OC.A.locals && OC.A.locals;
      var TC = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        NC = (n => {
          var e = e => {
            var r = n.defaultClassName,
              o = DC(DC({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) TC(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return LC(n.variantClassNames, (n => LC(n, (n => n.split(" ")[0]))))
            }
          }, e
        })({
          defaultClassName: "foundry_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_thj3a32",
              thick: "foundry_thj3a33",
              thicker: "foundry_thj3a34",
              thickest: "foundry_thj3a35"
            },
            orientation: {
              horizontal: "foundry_thj3a36",
              vertical: "foundry_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, d.forwardRef)((({
        className: n,
        orientation: e = "horizontal",
        thickness: r = "thin",
        isDecorative: o = !1,
        asChild: t,
        testId: u,
        ...d
      }, s) => {
        const l = "horizontal" !== e || o ? "div" : "hr",
          f = o || "hr" === l ? void 0 : "separator",
          c = t ? i.Slot : l;
        return (0, a.jsx)(c, {
          ref: s,
          className: (0, Wn.$)(NC({
            thickness: r,
            orientation: e
          }), n),
          role: f,
          "aria-orientation": e,
          "data-testid": u,
          ...d
        })
      }));
      const MC = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, a.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "8",
            fill: n
          })
        }),
        FC = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L8 6.93934L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967C12.8232 3.76256 12.8232 4.23744 12.5303 4.53033L9.06066 8L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L8 9.06066L4.53033 12.5303C4.23744 12.8232 3.76256 12.8232 3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L6.93934 8L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967Z",
            fill: n
          })
        }),
        RC = ({
          color: n = "currentColor"
        }) => (0, a.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.2445 4.04108C14.5374 4.33397 14.5374 4.80884 14.2446 5.10174L6.24469 13.1017C6.10404 13.2424 5.91327 13.3214 5.71436 13.3214C5.51544 13.3214 5.32468 13.2424 5.18402 13.1017L1.75531 9.67296C1.46242 9.38007 1.46242 8.90519 1.75532 8.6123C2.04821 8.31941 2.52309 8.31942 2.81598 8.61231L5.71436 11.5107L13.1839 4.04109C13.4768 3.74819 13.9516 3.74819 14.2445 4.04108Z",
            fill: n
          })
        });
      var IC = r(96722),
        GC = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function VC(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function KC(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function HC(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? KC(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = VC(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : KC(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function WC(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      GC.setAttributes = b(), GC.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, GC.domAPI = p(), GC.insertStyleElement = C(), c()(IC.A, GC), IC.A && IC.A.locals && IC.A.locals;
      var $C = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        UC = n => {
          var e = e => {
            var r = n.defaultClassName,
              o = HC(HC({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) $C(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return WC(n.variantClassNames, (n => WC(n, (n => n.split(" ")[0]))))
            }
          }, e
        },
        YC = UC({
          defaultClassName: "foundry_okz6z212",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z213 foundry_okz6z2y foundry_okz6z2z",
              LG: "foundry_okz6z214 foundry_okz6z210 foundry_okz6z211"
            },
            isSelected: {
              true: "foundry_okz6z215"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        XC = UC({
          defaultClassName: "foundry_okz6z2o",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z2p foundry_okz6z2k foundry_okz6z2l",
              LG: "foundry_okz6z2q foundry_okz6z2m foundry_okz6z2n"
            },
            position: {
              left: "foundry_okz6z2r",
              right: "foundry_okz6z2s"
            },
            isSelected: {
              true: "foundry_okz6z2t",
              false: "foundry_okz6z2u"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              position: "left",
              isSelected: !0
            }, "foundry_okz6z2v"],
            [{
              position: "right",
              isSelected: !1
            }, "foundry_okz6z2w"]
          ]
        }),
        ZC = UC({
          defaultClassName: "foundry_okz6z2f",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              LG: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        QC = UC({
          defaultClassName: "foundry_okz6z28 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z29 foundry_okz6z24 foundry_okz6z25",
              LG: "foundry_okz6z2a foundry_okz6z26 foundry_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        JC = UC({
          defaultClassName: "foundry_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_okz6z22",
              secondary: "foundry_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nv = UC({
          defaultClassName: "foundry_okz6z2b",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2c"
            },
            size: {
              MD: "foundry_okz6z2d",
              LG: "foundry_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, d.forwardRef)((({
        label: n,
        description: e,
        size: r = "MD",
        appearance: o = "primary",
        showIcons: t = !1,
        selectedIcon: u,
        unselectedIcon: i,
        hideLabel: s,
        testId: f,
        ...c
      }, A) => {
        const p = (0, d.useRef)(null),
          y = Le(p, A),
          b = (0, d.useId)(),
          _ = E_(c),
          {
            inputProps: C,
            isDisabled: v,
            isReadOnly: k,
            isSelected: B
          } = function(n, e, r) {
            let {
              labelProps: o,
              inputProps: t,
              isSelected: a,
              isPressed: u,
              isDisabled: d,
              isReadOnly: i
            } = M_(n, e, r);
            return {
              labelProps: o,
              inputProps: {
                ...t,
                role: "switch",
                checked: a
              },
              isSelected: a,
              isPressed: u,
              isDisabled: d,
              isReadOnly: i
            }
          }({
            ...c,
            "aria-label": n,
            id: b
          }, _, p),
          g = u ? gn[u] : RC,
          m = i ? gn[i] : FC;
        return (0, a.jsxs)("label", {
          className: "foundry_okz6z20",
          children: [(0, a.jsxs)("div", {
            className: JC({
              appearance: o
            }),
            "data-state": B ? "selected" : "unselected",
            "data-disabled": v || k,
            "data-testid": f,
            children: [(0, a.jsx)(l, {
              children: (0, a.jsx)("input", {
                ...C,
                ref: y
              })
            }), (0, a.jsxs)("div", {
              className: QC({
                size: r
              }),
              "aria-hidden": "true",
              children: [(0, a.jsx)("div", {
                className: YC({
                  size: r,
                  isSelected: B
                }),
                children: (0, a.jsx)(MC, {})
              }), t && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                  className: XC({
                    size: r,
                    isSelected: B,
                    position: "left"
                  }),
                  children: (0, a.jsx)(g, {
                    label: ""
                  })
                }), (0, a.jsx)("div", {
                  className: XC({
                    size: r,
                    isSelected: B,
                    position: "right"
                  }),
                  children: (0, a.jsx)(m, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, a.jsx)(l, {
            enabled: !!s,
            children: (0, a.jsxs)("div", {
              className: nv({
                size: r,
                isDisabled: v
              }),
              children: [(0, a.jsx)("p", {
                className: ZC({
                  size: r
                }),
                children: n
              }), e && (0, a.jsx)("p", {
                className: "foundry_okz6z2i foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: e
              })]
            })
          })]
        })
      })).displayName = "Switch";
      var ev = r(77802),
        rv = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };

      function ov(n) {
        var e = function(n, e) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof e ? e : String(e)
      }

      function tv(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function av(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? tv(Object(r), !0).forEach((function(e) {
            var o, t, a;
            o = n, t = e, a = r[e], (t = ov(t)) in o ? Object.defineProperty(o, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[t] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : tv(Object(r)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return n
      }

      function uv(n, e) {
        var r = {};
        for (var o in n) r[o] = e(n[o], o);
        return r
      }
      rv.setAttributes = b(), rv.insert = n => {
        const e = n.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: n
          }
        })
      }, rv.domAPI = p(), rv.insertStyleElement = C(), c()(ev.A, rv), ev.A && ev.A.locals && ev.A.locals;
      var dv = (n, e, r) => {
          for (var o of Object.keys(n)) {
            var t;
            if (n[o] !== (null !== (t = e[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        iv = n => {
          var e = e => {
            var r = n.defaultClassName,
              o = av(av({}, n.defaultVariants), e);
            for (var t in o) {
              var a, u = null !== (a = o[t]) && void 0 !== a ? a : n.defaultVariants[t];
              if (null != u) {
                var d = u;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var i = n.variantClassNames[t][d];
                i && (r += " " + i)
              }
            }
            for (var [s, l] of n.compoundVariants) dv(s, o, n.defaultVariants) && (r += " " + l);
            return r
          };
          return e.variants = () => Object.keys(n.variantClassNames), e.classNames = {
            get base() {
              return n.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uv(n.variantClassNames, (n => uv(n, (n => n.split(" ")[0]))))
            }
          }, e
        },
        sv = iv({
          defaultClassName: "foundry_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        lv = iv({
          defaultClassName: "foundry_1m368qhd",
          variantClassNames: {
            status: {
              information: "foundry_1m368qhe",
              danger: "foundry_1m368qhf",
              success: "foundry_1m368qhg",
              warning: "foundry_1m368qhh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fv = iv({
          defaultClassName: "foundry_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_1m368qh3",
              information: "foundry_1m368qh4",
              success: "foundry_1m368qh5",
              warning: "foundry_1m368qh6"
            },
            background: {
              "two-tone": "foundry_1m368qh7",
              neutral: "foundry_1m368qh8",
              none: "foundry_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const cv = (0, d.createContext)(null);

      function Av() {
        const n = (0, d.useContext)(cv);
        if (!n) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return n
      }(0, d.forwardRef)((({
        asChild: n,
        testId: e,
        status: r,
        background: o,
        ...t
      }, d) => {
        const s = n ? i.Slot : "div",
          l = (0, u.v6)(t, {
            className: fv({
              status: r,
              background: o
            })
          });
        return (0, a.jsx)(cv.Provider, {
          value: {
            status: r,
            background: o
          },
          children: (0, a.jsx)(s, {
            ref: d,
            "data-testid": e,
            ...l,
            ...t
          })
        })
      })), (0, d.forwardRef)((({
        asChild: n,
        testId: e,
        ...r
      }, o) => {
        const t = n ? i.Slot : "div",
          d = (0, u.v6)(r, {
            className: "foundry_1m368qha"
          });
        return (0, a.jsx)(t, {
          ref: o,
          "data-testid": e,
          ...d
        })
      })), (0, d.forwardRef)((({
        asChild: n,
        testId: e,
        ...r
      }, o) => {
        const t = n ? i.Slot : "div",
          d = (0, u.v6)(r, {
            className: "foundry_1m368qhb"
          });
        return (0, a.jsx)(t, {
          ref: o,
          "data-testid": e,
          ...d
        })
      }));
      const pv = {
        danger: "XCircleSolid",
        information: "InfoCircleSolid",
        success: "CheckCircleSolid",
        warning: "AlertTriangleSolid"
      };
      (0, d.forwardRef)((({
        icon: n,
        ...e
      }, r) => {
        const {
          status: o
        } = Av(), t = gn[n || pv[o]], d = (0, u.v6)(e, {
          className: lv({
            status: o
          })
        });
        return (0, a.jsx)("div", {
          className: "foundry_1m368qhc",
          children: (0, a.jsx)(t, {
            title: "",
            ref: r,
            ...d
          })
        })
      })), (0, d.forwardRef)((({
        asChild: n,
        testId: e,
        ...r
      }, o) => {
        const t = n ? i.Slot : "div",
          d = (0, u.v6)(r, {
            className: "foundry_1m368qhi"
          });
        return (0, a.jsx)(S, {
          level: 5,
          asChild: !0,
          children: (0, a.jsx)(t, {
            ref: o,
            "data-testid": e,
            ...d
          })
        })
      })), (0, d.forwardRef)((({
        asChild: n,
        testId: e,
        ...r
      }, o) => {
        const t = n ? i.Slot : "div",
          d = (0, u.v6)(r, {
            className: "foundry_1m368qhj"
          });
        return (0, a.jsx)($, {
          asChild: !0,
          children: (0, a.jsx)(t, {
            ref: o,
            "data-testid": e,
            ...d
          })
        })
      })), (0, d.forwardRef)((({
        asChild: n,
        children: e,
        testId: r,
        ...o
      }, t) => {
        const s = (0, d.useRef)(null),
          l = Le(s, t),
          f = n ? i.Slot : "a",
          {
            linkProps: c,
            isPressed: A
          } = i_(o, s),
          p = (0, u.v6)(c, {
            className: "foundry_1m368qhk foundry_1d5mo5m0"
          });
        return (0, a.jsx)($, {
          asChild: !0,
          appearance: "hyperlink",
          children: (0, a.jsx)(f, {
            "data-pressed": A,
            "data-testid": r,
            ref: l,
            ...p,
            children: e
          })
        })
      })), (0, d.forwardRef)((({
        asChild: n,
        children: e,
        testId: r,
        ...o
      }, t) => {
        const d = n ? i.Slot : "div",
          s = (0, u.v6)(o, {
            className: "foundry_1m368qhl"
          });
        return (0, a.jsx)(d, {
          ref: t,
          "data-testid": r,
          ...s,
          children: e
        })
      })), (0, d.forwardRef)((({
        asChild: n,
        testId: e,
        className: r,
        ...o
      }, t) => {
        const u = n ? i.Slot : "div";
        return (0, a.jsx)($, {
          asChild: !0,
          children: (0, a.jsx)(u, {
            ref: t,
            "data-testid": e,
            className: (0, Wn.$)(r, "foundry_1m368qho"),
            ...o
          })
        })
      })), (0, d.forwardRef)((({
        testId: n,
        label: e = "close alert",
        ...r
      }, o) => {
        const {
          background: t
        } = Av(), d = (0, u.v6)(r, {
          className: sv({
            hasBackground: "none" !== t
          })
        });
        return (0, a.jsx)(Pl, {
          ref: o,
          label: e,
          "data-testid": n,
          appearance: "ghost",
          icon: "X",
          size: "XS",
          ...d
        })
      }))
    },
    59219: (n, e, r) => {
      r.d(e, {
        jH: () => a
      });
      var o = r(62229),
        t = (r(73855), o.createContext(void 0));

      function a(n) {
        const e = o.useContext(t);
        return n || e || "ltr"
      }
    },
    85413: (n, e, r) => {
      r.d(e, {
        hO: () => i,
        sG: () => d
      });
      var o = r(62229),
        t = r(44853),
        a = r(21222),
        u = r(73855),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((n, e) => {
          const r = o.forwardRef(((n, r) => {
            const {
              asChild: o,
              ...t
            } = n, d = o ? a.Slot : e;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(d, {
              ...t,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${e}`, {
            ...n,
            [e]: r
          }
        }), {});

      function i(n, e) {
        n && t.flushSync((() => n.dispatchEvent(e)))
      }
    },
    22728: (n, e, r) => {
      r.d(e, {
        hO: () => i,
        sG: () => d
      });
      var o = r(62229),
        t = r(44853),
        a = r(21222),
        u = r(73855),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((n, e) => {
          const r = o.forwardRef(((n, r) => {
            const {
              asChild: o,
              ...t
            } = n, d = o ? a.Slot : e;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(d, {
              ...t,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${e}`, {
            ...n,
            [e]: r
          }
        }), {});

      function i(n, e) {
        n && t.flushSync((() => n.dispatchEvent(e)))
      }
    },
    15485: (n, e, r) => {
      r.d(e, {
        Z: () => t
      });
      var o = r(62229);

      function t(n) {
        const e = o.useRef({
          value: n,
          previous: n
        });
        return o.useMemo((() => (e.current.value !== n && (e.current.previous = e.current.value, e.current.value = n), e.current.previous)), [n])
      }
    }
  }
]);