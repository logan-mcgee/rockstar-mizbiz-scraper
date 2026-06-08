try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4bc74ff3-df9e-4042-95c0-fc8850ebc09d", e._sentryDebugIdIdentifier = "sentry-dbid-4bc74ff3-df9e-4042-95c0-fc8850ebc09d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, a, o, n, d, f, c, i, l, s, b, u, p, h, m, g, y, v, w, _, k, E, P, S = {
            154(e, r, t) {
              (0, t(9160).w)(1)
            },
            9160(e, r, t) {
              const a = t(1908).y;
              r.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            5649(e, r, t) {
              t(154)
            },
            1908(e, r, t) {
              r.y = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var a = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, n = a.length; o !== r && n >= 0;) "/" === a[--n] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = a.slice(0, n + 1);
                return t.protocol + "//" + t.host + d
              };
              Number.isInteger
            },
            8478(e, r, t) {
              "use strict";
              var a = {
                  "./root": () => Promise.all([t.e(9512), t.e(5470), t.e(8927), t.e(9398), t.e(4637), t.e(4017), t.e(5688), t.e(2270), t.e(4190)]).then(() => () => t(4190))
                },
                o = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, r),
                n = (e, r) => {
                  if (t.S) {
                    var a = "default",
                      o = t.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[a] = e, t.I(a, r)
                  }
                };
              t.d(r, {
                get: () => o,
                init: () => n
              })
            }
          },
          j = {};

        function O(e) {
          var r = j[e];
          if (void 0 !== r) return r.exports;
          var t = j[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return S[e].call(t.exports, t, t.exports, O), t.loaded = !0, t.exports
        }
        return O.m = S, O.c = j, O.y = r, O.amdO = {}, O.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return O.d(r, {
            a: r
          }), r
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, O.t = function(r, a) {
          if (1 & a && (r = this(r)), 8 & a) return r;
          if ("object" == typeof r && r) {
            if (4 & a && r.__esModule) return r;
            if (16 & a && "function" == typeof r.then) return r
          }
          var o = Object.create(null);
          O.r(o);
          var n = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var d = 2 & a && r;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = t(d)) Object.getOwnPropertyNames(d).forEach(e => n[e] = () => r[e]);
          return n.default = () => r, O.d(o, n), o
        }, O.d = (e, r) => {
          for (var t in r) O.o(r, t) && !O.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, O.f = {}, O.e = e => Promise.all(Object.keys(O.f).reduce((r, t) => (O.f[t](e, r), r), [])), O.u = e => "js/" + {
          162: "591c13b2e1dae028d08674f92a8a05e7",
          622: "a65c85c7b5e52bcb7d0f576a2bb01da8",
          784: "ee0c4c507e57882d00c35d9c83e079cc",
          799: "0e7d50ea1bad90acf2ecb9efa0a520bf",
          1569: "07b0d9c57c4154560764d78616bf7ae9",
          1622: "800bee1535648f8f7803b25bbec4df6a",
          1835: "89ce43c09d7b3a998377789a628e4092",
          2099: "7cfbce43f00131b52141a00c9cf900d6",
          2270: "569dc108fcc72148dbf260d90f27c79d",
          2497: "e531697dad6c4ee91a678cdf65b0ae10",
          2581: "657b7a28f77bedfba251a5800fc9ab1e",
          2837: "fd2f23635736b256feff85e6ed00aba6",
          3570: "9a439ad00c3f6f200f95344835a94604",
          4144: "856ad6354165fb094abce409e0498890",
          4190: "79e75e0977a3f196da98409e9bc21775",
          4235: "3ca8c006d394aa47646419ebb84f34e2",
          4269: "b3346d311198c732a20d8da17b5d07a0",
          4572: "d2aab202a8555f550c590a1a7b1463c1",
          4597: "7920cfe80619e97621ac99f10dc83210",
          4756: "9d2ab2257647a14316f375676a8b8dec",
          4974: "278c8387ef24e6742cce89209587cabe",
          5007: "98020a5c175399f2c360aaf24bfaf631",
          5038: "78ced885250beab3706fbb4a6f9032fd",
          5204: "fc9d89e75bd61fd21c05d15de81b4385",
          5389: "6a2b9ba1b281f6c6f55fff86eb689285",
          5470: "3a18d9b3edab19ba7357c5a9a471c799",
          5777: "d5192e4281f3bef6618901ee0a36e007",
          5840: "e50d1ad63e5503fd9c22d847679270da",
          5997: "d9254675dbb92160e5d6a96cb6debb54",
          6148: "7b2e60e55637ad08610201b42703b9f8",
          6458: "a6bb56cb49c27513f51e86e6e56fd538",
          6463: "5b33431edf175fd5e141c764285b412a",
          6501: "3dd6b0ea53ae16052a8d46eed9053ac0",
          6542: "f8baa83c65762de835e9b4cd8296d46e",
          6583: "6f55873dc4da3b2708cd00ee519fc15d",
          6730: "67be6d5f081f18d26de2261142b6f299",
          6883: "d43cb2d7f81d246ab15092babf8e8fa9",
          7158: "5ceb88c0e8fc5b0b7ea3126691ad98a3",
          8013: "475534bda70e0ef57140eb0c9a7395d4",
          8403: "b79c5911adddc464afc0388abf476e48",
          8915: "affe226c9293ff8d8ac94f0024eeff54",
          8927: "e2df966b5098d7be356de275d15c0d45",
          8985: "9476c48a5f194bba0a5527e1fd18f8aa",
          9038: "c6458db90ea8cd2cc6750d33c17ce384",
          9217: "2f78ecd78f1bba56e82e5f17230886f5",
          9398: "9cf9d815b4605760cf36789ab7761c9a",
          9447: "287dbe050e0e47d3495a7d559cd5b87c",
          9512: "c317a98352a7d330783b97d109cb7b49",
          9691: "8d5a9924816997ba3ba90bdcb12595db",
          9889: "cef04670d33b49363276aef84d016fc9",
          9947: "edd524fb579a0644bdbff71180c8c9b8",
          9988: "74eaaca164404566a563f1f6ef53230a"
        } [e] + ".js", O.miniCssF = e => "css/" + {
          2270: "53cb4bb970ac1ab4c7c81f0e8f54045a",
          4190: "8d55bdc42baa2d165a0b1521c1a93bd0",
          5007: "1c4ea6d0d498dcb46f807b54efb5213e",
          6458: "a3283ae12a800b3bb466ac1057031504",
          6542: "a87a37ad3b6ff03313dd2e82a885890f",
          7725: "d2745e930c785d241cc9f63c62148327",
          9217: "5efe0bf77e6a99f4a7dc3ee72bc71556",
          9398: "6877edf34255ca4f3c9e899ce71010ce"
        } [e] + ".css", O.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), O.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), a = {}, o = "@rockstargames/modules-core-footer:", O.l = (e, r, t, n) => {
          if (a[e]) a[e].push(r);
          else {
            var d, f;
            if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), i = 0; i < c.length; i++) {
                var l = c[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + t) {
                  d = l;
                  break
                }
              }
            d || (f = !0, (d = document.createElement("script")).charset = "utf-8", O.nc && d.setAttribute("nonce", O.nc), d.setAttribute("data-webpack", o + t), d.src = e), a[e] = [r];
            var s = (r, t) => {
                d.onerror = d.onload = null, clearTimeout(b);
                var o = a[e];
                if (delete a[e], d.parentNode && d.parentNode.removeChild(d), o && o.forEach(e => e(t)), r) return r(t)
              },
              b = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = s.bind(null, d.onerror), d.onload = s.bind(null, d.onload), f && document.head.appendChild(d)
          }
        }, O.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, O.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          O.S = {};
          var e = {},
            r = {};
          O.I = (t, a) => {
            a || (a = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[t]) return e[t];
              O.o(O.S, t) || (O.S[t] = {});
              var n = O.S[t],
                d = "@rockstargames/modules-core-footer",
                f = (e, r, t, a) => {
                  var o = n[e] = n[e] || {},
                    f = o[r];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (o[r] = {
                    get: t,
                    from: d,
                    eager: !!a
                  })
                },
                c = [];
              switch (t) {
                case "default":
                  f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([O.e(9512), O.e(2497), O.e(4637), O.e(8403)]).then(() => () => O(784))), f("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([O.e(9512), O.e(6463), O.e(1622), O.e(5470), O.e(9889), O.e(4637), O.e(4017), O.e(5997), O.e(5688), O.e(3331), O.e(9217), O.e(2270)]).then(() => () => O(4320))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([O.e(1622), O.e(6583), O.e(4637), O.e(5997), O.e(5688), O.e(3331), O.e(1835)]).then(() => () => O(799))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([O.e(9512), O.e(1622), O.e(9988), O.e(4637), O.e(5997), O.e(5688), O.e(6730), O.e(4597)]).then(() => () => O(6730))), f("react-dom", "18.3.1", () => Promise.all([O.e(162), O.e(4637)]).then(() => () => O(162))), f("react-router-dom", "6.30.3", () => Promise.all([O.e(4269), O.e(4637), O.e(4017)]).then(() => () => O(6650))), f("react", "18.3.1", () => O.e(2581).then(() => () => O(2581)));
                  break;
                case "footer":
                  f("@foundry/react", "6.1.0", () => Promise.all([O.e(9512), O.e(2497), O.e(6463), O.e(5007), O.e(5470), O.e(8927), O.e(6542), O.e(4637), O.e(4017), O.e(7725)]).then(() => () => O(3692))), f("@foundry/react", "6.1.0", () => Promise.all([O.e(9512), O.e(2497), O.e(6463), O.e(5007), O.e(5470), O.e(8927), O.e(6458), O.e(9398), O.e(4637), O.e(4017)]).then(() => () => O(7150)))
              }
              return e[t] = c.length ? Promise.all(c).then(() => e[t] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          O.g.importScripts && (e = O.g.location + "");
          var r = O.g.document;
          if (!e && r && (r.currentScript && "SCRIPT" === r.currentScript.tagName.toUpperCase() && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), O.p = e
        })(), n = e => {
          var r = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            a = t[1] ? r(t[1]) : [];
          return t[2] && (a.length++, a.push.apply(a, r(t[2]))), t[3] && (a.push([]), a.push.apply(a, r(t[3]))), a
        }, d = (e, r) => {
          e = n(e), r = n(r);
          for (var t = 0;;) {
            if (t >= e.length) return t < r.length && "u" != (typeof r[t])[0];
            var a = e[t],
              o = (typeof a)[0];
            if (t >= r.length) return "u" == o;
            var d = r[t],
              f = (typeof d)[0];
            if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
            if ("o" != o && "u" != o && a != d) return a < d;
            t++
          }
        }, f = e => {
          var r = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (r + .5) {
            t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
            for (var a = 1, o = 1; o < e.length; o++) a--, t += "u" == (typeof(d = e[o]))[0] ? "-" : (a > 0 ? "." : "") + (a = 2, d);
            return t
          }
          var n = [];
          for (o = 1; o < e.length; o++) {
            var d = e[o];
            n.push(0 === d ? "not(" + c() + ")" : 1 === d ? "(" + c() + " || " + c() + ")" : 2 === d ? n.pop() + " " + n.pop() : f(d))
          }
          return c();

          function c() {
            return n.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, c = (e, r) => {
          if (0 in e) {
            r = n(r);
            var t = e[0],
              a = t < 0;
            a && (t = -t - 1);
            for (var o = 0, d = 1, f = !0;; d++, o++) {
              var i, l, s = d < e.length ? (typeof e[d])[0] : "";
              if (o >= r.length || "o" == (l = (typeof(i = r[o]))[0])) return !f || ("u" == s ? d > t && !a : "" == s != a);
              if ("u" == l) {
                if (!f || "u" != s) return !1
              } else if (f)
                if (s == l)
                  if (d <= t) {
                    if (i != e[d]) return !1
                  } else {
                    if (a ? i > e[d] : i < e[d]) return !1;
                    i != e[d] && (f = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (a || d <= t) return !1;
                f = !1, d--
              } else {
                if (d <= t || l < s != a) return !1;
                f = !1
              } else "s" != s && "n" != s && (f = !1, d--)
            }
          }
          var b = [],
            u = b.pop.bind(b);
          for (o = 1; o < e.length; o++) {
            var p = e[o];
            b.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? c(p, r) : !u())
          }
          return !!u()
        }, i = (e, r) => e && O.o(e, r), l = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((r, t) => (e[t].eager && (r[t] = e[t]), r), {}), b = (e, r, t) => {
          var a = t ? s(e[r]) : e[r];
          return (r = Object.keys(a).reduce((e, r) => !e || d(e, r) ? r : e, 0)) && a[r]
        }, u = (e, r, t) => {
          var a = t ? s(e[r]) : e[r];
          return Object.keys(a).reduce((e, r) => !e || !a[e].loaded && d(e, r) ? r : e, 0)
        }, p = (e, r, t, a) => "Unsatisfied version " + t + " from " + (t && e[r][t].from) + " of shared singleton module " + r + " (required " + f(a) + ")", h = e => {
          throw new Error(e)
        }, m = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, y = (e, r, t) => t ? t() : ((e, r) => h("Shared module " + r + " doesn't exist in shared scope " + e))(e, r), v = (g = e => function(r, t, a, o, n) {
          var d = O.I(r);
          return d && d.then && !a ? d.then(e.bind(e, r, O.S[r], t, !1, o, n)) : e(r, O.S[r], t, a, o, n)
        })((e, r, t, a, o) => i(r, t) ? l(b(r, t, a)) : y(e, t, o)), w = g((e, r, t, a, o, n) => {
          if (!i(r, t)) return y(e, t, n);
          var d = u(r, t, a);
          return c(o, d) || m(p(r, t, d, o)), l(r[t][d])
        }), _ = {}, k = {
          4637: () => w("default", "react", !1, [1, 18, 2, 0], () => O.e(2581).then(() => () => O(2581))),
          4017: () => w("default", "react-dom", !1, [1, 18, 2, 0], () => O.e(162).then(() => () => O(162))),
          2909: () => w("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([O.e(9512), O.e(2497), O.e(784)]).then(() => () => O(784))),
          6252: () => w("default", "react-router-dom", !1, [1, 6, 30, 3], () => Promise.all([O.e(4269), O.e(4017)]).then(() => () => O(6650))),
          2199: () => w("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([O.e(1622), O.e(6583), O.e(5997), O.e(3331), O.e(799)]).then(() => () => O(799))),
          2003: () => v("footer", "@foundry/react", !1, () => Promise.all([O.e(2497), O.e(6463), O.e(5007), O.e(6458)]).then(() => () => O(7150))),
          6923: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [0], () => Promise.all([O.e(6463), O.e(1622), O.e(9889), O.e(5997), O.e(3331), O.e(9217)]).then(() => () => O(4320))),
          3331: () => w("default", "@rsgweb/utils", !1, [0], () => Promise.all([O.e(9512), O.e(9988), O.e(6730)]).then(() => () => O(6730))),
          9897: () => v("footer", "@foundry/react", !1, () => Promise.all([O.e(2497), O.e(5007), O.e(8927), O.e(6542)]).then(() => () => O(3692)))
        }, E = {
          2270: [2199],
          3331: [3331],
          4017: [4017],
          4190: [2003, 6923],
          4637: [4637],
          5688: [2909, 6252],
          9217: [9897]
        }, P = {}, O.f.consumes = (e, r) => {
          O.o(E, e) && E[e].forEach(e => {
            if (O.o(_, e)) return r.push(_[e]);
            if (!P[e]) {
              var t = r => {
                _[e] = 0, O.m[e] = t => {
                  delete O.c[e], t.exports = r()
                }
              };
              P[e] = !0;
              var a = r => {
                delete _[e], O.m[e] = t => {
                  throw delete O.c[e], r
                }
              };
              try {
                var o = k[e]();
                o.then ? r.push(_[e] = o.then(t).catch(a)) : t(o)
              } catch (e) {
                a(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            O.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                2270: 1,
                4190: 1,
                5007: 1,
                6458: 1,
                6542: 1,
                7725: 1,
                9217: 1,
                9398: 1
              } [r] && t.push(e[r] = (e => new Promise((r, t) => {
                var a = O.miniCssF(e),
                  o = O.p + a;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                      var o = (d = t[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === r)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var d;
                      if ((o = (d = n[a]).getAttribute("data-href")) === e || o === r) return d
                    }
                  })(a, o)) return r();
                ((e, r, t, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", O.nc && (n.nonce = O.nc), n.onerror = n.onload = t => {
                    if (n.onerror = n.onload = null, "load" === t.type) a();
                    else {
                      var d = t && t.type,
                        f = t && t.target && t.target.href || r,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + f + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = f, n.parentNode && n.parentNode.removeChild(n), o(c)
                    }
                  }, n.href = r, document.head.appendChild(n)
                })(e, o, 0, r, t)
              }))(r).then(() => {
                e[r] = 0
              }, t => {
                throw delete e[r], t
              }))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          O.f.j = (r, t) => {
            var a = O.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^(3331|4017|4637|5688|7725)$/.test(r)) e[r] = 0;
            else {
              var o = new Promise((t, o) => a = e[r] = [t, o]);
              t.push(a[2] = o);
              var n = O.p + O.u(r),
                d = new Error;
              O.l(n, t => {
                if (O.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    n = t && t.target && t.target.src;
                  d.message = "Loading chunk " + r + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, a[1](d)
                }
              }, "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var a, o, [n, d, f] = t,
                c = 0;
              if (n.some(r => 0 !== e[r])) {
                for (a in d) O.o(d, a) && (O.m[a] = d[a]);
                f && f(O)
              }
              for (r && r(t); c < n.length; c++) o = n[c], O.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), O.nc = void 0, O(5649), O(8478)
      })())
    }
  }
});