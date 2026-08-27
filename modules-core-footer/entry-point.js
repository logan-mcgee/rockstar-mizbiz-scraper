try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d6180287-ad1e-49ad-88fd-22a5297de176", e._sentryDebugIdIdentifier = "sentry-dbid-d6180287-ad1e-49ad-88fd-22a5297de176")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e = {
          85946(e, t, r) {
            (0, r(69e3).w)(1)
          },
          69e3(e, t, r) {
            const a = r(31364).y;
            t.w = function(e) {
              if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p = a(r.y.meta.url, e)
            }
          },
          64769(e, t, r) {
            r(85946)
          },
          31364(e, t, r) {
            t.y = function(e, t) {
              var r = document.createElement("a");
              r.href = e;
              for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
              if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
              var d = a.slice(0, n + 1);
              return r.protocol + "//" + r.host + d
            };
            Number.isInteger
          },
          98478(e, t, r) {
            "use strict";
            const a = {
                "./root": () => Promise.all([r.e(6910), r.e(2145), r.e(31), r.e(1849), r.e(8061), r.e(7133), r.e(4637), r.e(4017), r.e(4378), r.e(4251), r.e(1801), r.e(25)]).then(() => () => r(20025))
              },
              o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), r.R = void 0, t),
              n = (e, t) => {
                if (!r.S) return;
                const a = "default",
                  o = r.S[a];
                if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return r.S[a] = e, r.I(a, t)
              };
            r.d(t, {
              get: () => o,
              init: () => n
            })
          }
        };
        const r = {};

        function a(t) {
          const o = r[t];
          if (void 0 !== o) return o.exports;
          const n = r[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports
        }
        return a.m = e, a.c = r, a.y = t, a.amdO = {}, a.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return a.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          a.t = function(r, o) {
            if (1 & o && (r = this(r)), 8 & o) return r;
            if ("object" == typeof r && r) {
              if (4 & o && r.__esModule) return r;
              if (16 & o && "function" == typeof r.then) return r
            }
            const n = Object.create(null);
            a.r(n);
            const d = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var c = 2 & o && r;
              ("object" == typeof c || "function" == typeof c) && !~t.indexOf(c); c = e(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => r[e]);
            return d.default = () => r, a.d(n, d), n
          }
        })(), a.d = (e, t) => {
          if (Array.isArray(t))
            for (var r = 0; r < t.length;) {
              var o = t[r++],
                n = t[r++];
              a.o(e, o) ? 0 === n && r++ : 0 === n ? Object.defineProperty(e, o, {
                enumerable: !0,
                value: t[r++]
              }) : Object.defineProperty(e, o, {
                enumerable: !0,
                get: n
              })
            } else
              for (var o in t) a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
              })
        }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce((t, r) => (a.f[r](e, t), t), [])), a.u = e => "js/" + {
          25: "4565ed685720c795c82adad417adddf9",
          31: "7aaa04a1ec1f1cd2af7e80aa7f28b0fe",
          162: "d3ad0c8d5aac76af284de387ef80061b",
          414: "c17b16898afbfe138f4cdaf6f2de4a9b",
          761: "fa02d2a0d7d7c254e55c2229c93106d9",
          1125: "331a1730a81b08997462f2be3648fb4d",
          1430: "db2d424ab0f828c49c4aa7706673e113",
          1731: "4c25aca410b605c54542616fcebf9d57",
          1849: "67cb57d6b082ad1e85f0cd7c161e7ad6",
          2145: "4ff27aa6adf46794845c52850cbb782d",
          2272: "fdd84c82a92b892e48c3a7befcb1b824",
          2309: "95445822d663935ffae1546fe4ef6367",
          2329: "ec2739a2bb4b3ef7004b665e1c90fc57",
          2346: "c97f2e12c35c30dfe9662065218d235d",
          2581: "c8be11b03afd5817cebbcd6867551e9d",
          2656: "4bc50ba160c26d8b8b0b47f12476351d",
          3004: "5e3f6e54ab3d22bb1fb932afd7eeb636",
          3195: "8fa1975f88a42019f02891ab241f924f",
          3329: "1725ddf739d9c37eb86940ca06bf68a4",
          3506: "4ea2967c1d801e9d6ba02874544f535f",
          3769: "c1cd7ebe72d293295f3e9975f1154ca1",
          4251: "fc7cb3a88d4e1ae902155c780f99d964",
          4326: "95074248f7f856aeec6dfef715805cfa",
          4597: "6a5b61c8ae47d93c003101b43e423f85",
          4607: "855375e4a5e56589386a2f22ad77917b",
          4630: "98667f288285322f2ca3786e1ccd2341",
          4962: "853798ae3d6d0b4bda92e682c1b08ade",
          4971: "7a82e9dbb75fb37b186cc32a26cac8dc",
          4997: "b8ecd96586ec331bab619d59babb14c0",
          5096: "e0d21181b42135fc3b1fb60b324ff7cf",
          5505: "4e51c64d5cc1e5c61792f006b2dd2ac2",
          5529: "80a476cefe6e68d64a3794ede4e25b95",
          5660: "c96c47889b4b1e7ccf90a0a1dc50ff82",
          5847: "5fe14cdc3f200e10214d7541b6b1fae7",
          6405: "3e2b9ee195bcbbb62dcaf5a6aea0ff6a",
          6464: "383b5aab257691817b5c73bfb4a14789",
          6516: "a270ff977e7f73bd8fe795f325f812e1",
          6865: "178f128eb55a0c504854717d5fec33bb",
          6910: "73f6717d8ac133af0fc3e09c7db34c2e",
          6918: "f7bf1722a8692b0f3f0aaf3768f70154",
          6972: "7a415e4a80cebfff16fe8d389d654bf1",
          7110: "80644301c343a11b0e514daa065665ea",
          7133: "f159c9da2994035494fda59ecb37234c",
          7278: "b6ecca376691ead0a361341630a8f855",
          7390: "b276e5f799fb9f0b9a7a0e6e2093ebca",
          7465: "79244158b1bbb5543df3c70364aa2258",
          7602: "0edba3944f985bb54eff1ef3697c6d21",
          7725: "5f2cc7630dd51cf057070c21ca50c603",
          8061: "4820afa0a00c7e0055d388109ffb515d",
          8134: "4af4e651b978c240b5634fe97b6054d7",
          8509: "74992728cb4807da1a59e2604ebb6d16",
          8696: "03826aa575d7df98f0ae158c884823d0",
          8910: "36bfe5ac966c114713d146a95b14f481",
          9089: "ec205df28b1ecbc10ead57ec9d479a0a",
          9103: "e314bb9d01b48e823d6757b39f177335",
          9269: "1c0b9db45bf4efe492f1c049ae9c757b",
          9708: "b47b069cb07d53e06bcc82040564a515",
          9860: "2375d1fd5c57eb0ff66e476044c259f5",
          9933: "a1634953c477d354589bc612b793224b"
        } [e] + ".js", a.miniCssF = e => "css/" + {
          25: "38a9993fb0a9980c049d8402b24f6791",
          414: "8ec511c1968e9e8789d1dc978fb2109b",
          704: "d2745e930c785d241cc9f63c62148327",
          1430: "4ba734fb81e8b0242a48f7e0acc00343",
          3004: "d2745e930c785d241cc9f63c62148327",
          3329: "d2745e930c785d241cc9f63c62148327",
          4251: "c0357684ec379ccbeaa659264ca0c02c",
          4630: "c570fa62fac16e1975b6b730b848b3d3",
          5129: "d2745e930c785d241cc9f63c62148327",
          6865: "1a4a75888d6cd6d7ed0b49ad1ddc46b4",
          7133: "76ea2f6631dd5301ab9a3340604e46c1"
        } [e] + ".css", a.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-footer:";
          a.l = (r, o, n, d) => {
            if (e[r]) return void e[r].push(o);
            let c, f;
            if (void 0 !== n) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const a = e[s];
                if (a.getAttribute("src") == r || a.getAttribute("data-webpack") == t + n) {
                  c = a;
                  break
                }
              }
            }
            c || (f = !0, c = document.createElement("script"), c.charset = "utf-8", a.nc && c.setAttribute("nonce", a.nc), c.setAttribute("data-webpack", t + n), c.src = r), e[r] = [o];
            const l = (t, a) => {
                c.onerror = c.onload = null, clearTimeout(i);
                const o = e[r];
                if (delete e[r], c.parentNode?.removeChild(c), o?.forEach(e => e(a)), t) return t(a)
              },
              i = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), f && document.head.appendChild(c)
          }
        })(), a.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          a.S = {};
          const e = {},
            t = {};
          a.I = (r, o) => {
            o || (o = []);
            let n = t[r];
            if (n || (n = t[r] = {}), o.indexOf(n) >= 0) return;
            if (o.push(n), e[r]) return e[r];
            a.o(a.S, r) || (a.S[r] = {});
            const d = a.S[r],
              c = "@rockstargames/modules-core-footer",
              f = (e, t, r, a) => {
                const o = d[e] = d[e] || {},
                  n = o[t];
                (!n || !n.loaded && (!a != !n.eager ? a : c > n.from)) && (o[t] = {
                  get: r,
                  from: c,
                  eager: !!a
                })
              },
              s = [];
            switch (r) {
              case "default":
                f("@foundry/icons", "6.6.1", () => Promise.all([a.e(6910), a.e(7725), a.e(4637), a.e(4017), a.e(3004)]).then(() => () => a(47725))), f("@foundry/icons", "6.6.1", () => Promise.all([a.e(6910), a.e(7278), a.e(4637), a.e(4017), a.e(3329)]).then(() => () => a(77278))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([a.e(761), a.e(2145), a.e(31), a.e(4637), a.e(3506)]).then(() => () => a(93506))), f("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([a.e(6910), a.e(2145), a.e(8134), a.e(6464), a.e(31), a.e(1849), a.e(6516), a.e(4637), a.e(4017), a.e(2272), a.e(5866), a.e(4378), a.e(3331), a.e(6865), a.e(4251), a.e(4997)]).then(() => () => a(49140))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([a.e(6464), a.e(31), a.e(6918), a.e(4637), a.e(2272), a.e(4378), a.e(3331), a.e(9089)]).then(() => () => a(18509))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([a.e(2145), a.e(6464), a.e(31), a.e(3769), a.e(4637), a.e(2272), a.e(4378), a.e(8910), a.e(4597)]).then(() => () => a(98910))), f("react-dom", "18.3.1", () => Promise.all([a.e(162), a.e(4637)]).then(() => () => a(30162))), f("react-router-dom", "6.30.4", () => Promise.all([a.e(9860), a.e(4637), a.e(4017)]).then(() => () => a(79860))), f("react", "18.3.1", () => a.e(2581).then(() => () => a(22581)));
                break;
              case "footer":
                f("@foundry/react", "6.6.1", () => Promise.all([a.e(761), a.e(6910), a.e(8134), a.e(1430), a.e(1849), a.e(8061), a.e(4630), a.e(4637), a.e(4017), a.e(5866)]).then(() => () => a(89663))), f("@foundry/react", "6.6.1", () => Promise.all([a.e(761), a.e(6910), a.e(8134), a.e(1430), a.e(1849), a.e(8061), a.e(414), a.e(7133), a.e(4637), a.e(4017), a.e(5866), a.e(1801)]).then(() => () => a(40414)))
            }
            return e[r] = s.length ? Promise.all(s).then(() => e[r] = 1) : 1
          }
        })(), (() => {
          let e;
          a.g.importScripts && (e = a.g.location + "");
          const t = a.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const r = t.getElementsByTagName("script");
            if (r.length) {
              let t = r.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (t, r) => {
              t = e(t), r = e(r);
              for (var a = 0;;) {
                if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                var o = t[a],
                  n = (typeof o)[0];
                if (a >= r.length) return "u" == n;
                var d = r[a],
                  c = (typeof d)[0];
                if (n != c) return "o" == n && "n" == c || "s" == c || "u" == n;
                if ("o" != n && "u" != n && o != d) return o < d;
                a++
              }
            },
            r = e => {
              var t = e[0],
                a = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                a += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var o = 1, n = 1; n < e.length; n++) o--, a += "u" == (typeof(c = e[n]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, c);
                return a
              }
              var d = [];
              for (n = 1; n < e.length; n++) {
                var c = e[n];
                d.push(0 === c ? "not(" + f() + ")" : 1 === c ? "(" + f() + " || " + f() + ")" : 2 === c ? d.pop() + " " + d.pop() : r(c))
              }
              return f();

              function f() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            o = (t, r) => {
              if (0 in t) {
                r = e(r);
                var a = t[0],
                  n = a < 0;
                n && (a = -a - 1);
                for (var d = 0, c = 1, f = !0;; c++, d++) {
                  var s, l, i = c < t.length ? (typeof t[c])[0] : "";
                  if (d >= r.length || "o" == (l = (typeof(s = r[d]))[0])) return !f || ("u" == i ? c > a && !n : "" == i != n);
                  if ("u" == l) {
                    if (!f || "u" != i) return !1
                  } else if (f)
                    if (i == l)
                      if (c <= a) {
                        if (s != t[c]) return !1
                      } else {
                        if (n ? s > t[c] : s < t[c]) return !1;
                        s != t[c] && (f = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (n || c <= a) return !1;
                    f = !1, c--
                  } else {
                    if (c <= a || l < i != n) return !1;
                    f = !1
                  } else "s" != i && "n" != i && (f = !1, c--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < t.length; d++) {
                var h = t[d];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? o(h, r) : !b())
              }
              return !!b()
            };
          const n = (e, t) => e && a.o(e, t),
            d = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}),
            f = e => function(t, r, o, n, d) {
              const c = a.I(t);
              return c?.then && !o ? c.then(e.bind(e, t, a.S[t], r, !1, n, d)) : e(t, a.S[t], r, o, n, d)
            },
            s = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            l = f((e, r, a, o, f) => n(r, a) ? d(((e, r, a) => {
              const o = a ? c(e[r]) : e[r];
              return (r = Object.keys(o).reduce((e, r) => !e || t(e, r) ? r : e, 0)) && o[r]
            })(r, a, o)) : s(e, a, f)),
            i = f((e, a, f, l, i, u) => {
              if (!n(a, f)) return s(e, f, u);
              const b = ((e, r, a) => {
                const o = a ? c(e[r]) : e[r];
                return Object.keys(o).reduce((e, r) => !e || !o[e].loaded && t(e, r) ? r : e, 0)
              })(a, f, l);
              return o(i, b) || (h = ((e, t, a, o) => "Unsatisfied version " + a + " from " + (a && e[t][a].from) + " of shared singleton module " + t + " (required " + r(o) + ")")(a, f, b, i), "undefined" != typeof console && console.warn && console.warn(h)), d(a[f][b]);
              var h
            }),
            u = {},
            b = {
              4637: () => i("default", "react", !1, [1, 18, 2, 0], () => a.e(2581).then(() => () => a(22581))),
              84017: () => i("default", "react-dom", !1, [1, 18, 2, 0], () => a.e(162).then(() => () => a(30162))),
              942: () => i("default", "react-router-dom", !1, [1, 6, 30, 4], () => Promise.all([a.e(9860), a.e(4017)]).then(() => () => a(79860))),
              42909: () => i("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([a.e(761), a.e(2145), a.e(1125)]).then(() => () => a(93506))),
              82199: () => i("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([a.e(6464), a.e(6918), a.e(2272), a.e(3331), a.e(8509)]).then(() => () => a(18509))),
              41801: () => i("default", "@foundry/icons", !1, [0], () => Promise.all([a.e(7278), a.e(5129)]).then(() => () => a(77278))),
              44972: () => l("footer", "@foundry/react", !1, () => Promise.all([a.e(761), a.e(8134), a.e(1430), a.e(414), a.e(5866)]).then(() => () => a(40414))),
              76923: () => i("default", "@rsgweb/modules-core-user-action-menu", !1, [0], () => Promise.all([a.e(8134), a.e(6464), a.e(6516), a.e(2272), a.e(5866), a.e(3331), a.e(6865)]).then(() => () => a(49140))),
              45866: () => i("default", "@foundry/icons", !1, [0], () => Promise.all([a.e(7725), a.e(704)]).then(() => () => a(47725))),
              13331: () => i("default", "@rsgweb/utils", !1, [0], () => Promise.all([a.e(2145), a.e(3769), a.e(8910)]).then(() => () => a(98910))),
              77411: () => l("footer", "@foundry/react", !1, () => Promise.all([a.e(761), a.e(1430), a.e(8061), a.e(4630)]).then(() => () => a(89663)))
            },
            h = {
              25: [44972, 76923],
              1801: [41801],
              3331: [13331],
              4017: [84017],
              4251: [82199],
              4378: [942, 42909],
              4637: [4637],
              5866: [45866],
              6865: [77411]
            },
            p = {};
          a.f.consumes = (e, t) => {
            a.o(h, e) && h[e].forEach(e => {
              if (a.o(u, e)) return t.push(u[e]);
              if (!p[e]) {
                const r = t => {
                  u[e] = 0, a.m[e] = r => {
                    delete a.c[e], r.exports = t()
                  }
                };
                p[e] = !0;
                const o = t => {
                  delete u[e], a.m[e] = r => {
                    throw delete a.c[e], t
                  }
                };
                try {
                  const a = b[e]();
                  a.then ? t.push(u[e] = a.then(r).catch(o)) : r(a)
                } catch (e) {
                  o(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            a.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                25: 1,
                414: 1,
                704: 1,
                1430: 1,
                3004: 1,
                3329: 1,
                4251: 1,
                4630: 1,
                5129: 1,
                6865: 1,
                7133: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var o = a.miniCssF(e),
                  n = a.p + o;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var d;
                      if ((o = (d = n[a]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(o, n)) return t();
                ((e, t, r, o, n) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", a.nc && (d.nonce = a.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) o();
                    else {
                      var a = r && r.type,
                        c = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + c + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = a, f.request = c, d.parentNode && d.parentNode.removeChild(d), n(f)
                    }
                  }, d.href = t, document.head.appendChild(d)
                })(e, n, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          const e = {
            417: 0
          };
          a.f.j = (t, r) => {
            let o = a.o(e, t) ? e[t] : void 0;
            if (0 !== o)
              if (o) r.push(o[2]);
              else if (/^(4(017|378|637)|1801|3331|5129|5866|704)$/.test(t)) e[t] = 0;
            else {
              const n = new Promise((r, a) => o = e[t] = [r, a]);
              r.push(o[2] = n);
              const d = a.p + a.u(t),
                c = new Error,
                f = r => {
                  if (a.o(e, t) && (o = e[t], 0 !== o && (e[t] = void 0), o)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      a = r && r.target && r.target.src;
                    c.message = "Loading chunk " + t + " failed.\n(" + e + ": " + a + ")", c.name = "ChunkLoadError", c.type = e, c.request = a, c.event = r, o[1](c)
                  }
                };
              a.l(d, f, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [o, n, d] = r;
              var c, f, s = 0;
              if (o.some(t => 0 !== e[t])) {
                for (c in n) a.o(n, c) && (a.m[c] = n[c]);
                d && d(a)
              }
              for (t && t(r); s < o.length; s++) f = o[s], a.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), a.nc = void 0, a(64769), a(98478)
      })())
    }
  }
});