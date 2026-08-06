try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f55fbdc9-f93c-45b9-916a-417ca91a3ca4", e._sentryDebugIdIdentifier = "sentry-dbid-f55fbdc9-f93c-45b9-916a-417ca91a3ca4")
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
          89863(e, t, r) {
            (0, r(35039).w)(1)
          },
          35039(e, t, r) {
            const a = r(20103).y;
            t.w = function(e) {
              if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p = a(r.y.meta.url, e)
            }
          },
          87732(e, t, r) {
            r(89863)
          },
          20103(e, t, r) {
            t.y = function(e, t) {
              var r = document.createElement("a");
              r.href = e;
              for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
              if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
              var c = a.slice(0, n + 1);
              return r.protocol + "//" + r.host + c
            };
            Number.isInteger
          },
          98478(e, t, r) {
            "use strict";
            const a = {
                "./root": () => Promise.all([r.e(4053), r.e(2145), r.e(31), r.e(4540), r.e(5756), r.e(5933), r.e(4637), r.e(4017), r.e(4378), r.e(1457), r.e(5198), r.e(6993)]).then(() => () => r(56993))
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
            const c = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var d = 2 & o && r;
              ("object" == typeof d || "function" == typeof d) && !~t.indexOf(d); d = e(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => r[e]);
            return c.default = () => r, a.d(n, c), n
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
          31: "025e1fd15055e3489c34bb3cacb8c214",
          162: "6ffd4fdfff9e3046eab87caa36b69d87",
          195: "496d54a4f6fac7c9ce896f38a6bc168d",
          312: "345cd1e4fd30cdd5a4ec4e6721994077",
          323: "8f69b3b182b619842c996b60a6d1c3a6",
          519: "492c84ed9f05b42bfcaff2e0de7fcb25",
          567: "4b9527e935a218f2099ceeaf6be6f173",
          661: "30318267b3ebfc81d8fc69f8dcf3ae73",
          761: "57a583589b688740f3871d1b2847b451",
          788: "6aefaa86743d5d05ac671b167cf36055",
          1020: "f40bdee4a865bea7a75e40ba30c8a71f",
          1042: "1c1fef37255e4277de7ae4b7a1f4a551",
          1076: "509ce2211ce04d38142fd492b01dd121",
          1401: "a5ca43b56db4884f17a2feb07a8b656f",
          1411: "d6722acc52c78aabe3734db56311e413",
          1457: "c2a18dce99687718131d067614e367b3",
          1682: "be0563dbb1e896084bd6f93fcde5e545",
          1930: "796bda5e6d4683c3736e5099bc6a288d",
          2145: "9b25971c55bf414cd2322c3376a4c9f3",
          2581: "2be4d5850cf86c3496913eb439a588cc",
          2605: "be8e4cdeea58ac5123eba44eb2f6da5b",
          2841: "dd29a37a38f40af8305fb5cc6293cb66",
          3253: "ea2d173d2a12f73d99bac2eb3d635770",
          3275: "91ec8e678b6c71fd886db2ab614cc2cc",
          3477: "1383283df74d59736d9210cfd6ada226",
          3542: "05b11f4d2cfab6da3ff0c0f808aed0e0",
          3633: "4e49d3d067c4d7cdb62497abb13eb730",
          3852: "2df3b0ba9dc4c4f9289c6b43c65adb89",
          4053: "bd9160363428f25e84eb794aae14d410",
          4497: "39eec336cd4fa4eb6a2dff21b49c97c0",
          4540: "19cc1323d7f86968634de94256615052",
          4590: "fcd6918c859031c2de7266ca9e98c410",
          4597: "1cac0c9beca39c82fa9885b447a8a548",
          4632: "a1ed96149c278dca2c1ef1036fc70008",
          4711: "7b67e4781e5948e460538f0965102fe5",
          4935: "b1d701844f8f8582a74e03305c02eeaf",
          5361: "c4c7e0178d1a431acde46568b74483f8",
          5462: "5b9c3af7f39a565c43b4b67511fad403",
          5750: "caa1b57639cbfc90ef98f0d9f89a4ce3",
          5756: "6653b31e6ea9b8af8a2f5b36feb29b25",
          5933: "9af7496bcf7c96c37e2eda887a3730d6",
          5962: "8f574419d1446c9a3297401e66b41476",
          6298: "d6777bea41a973c1b2187b79f181402c",
          6763: "5c0968e385b07f64c13f16617a38cc33",
          6918: "0599d35aa0372f7a8043e55a9bab74ef",
          6993: "0569655a89ab4f13083ff3c803e4af21",
          7267: "46740c60d135396ef1638a28d656eca6",
          7377: "69a614d311907504ea746c631788a062",
          7384: "9bd336f3a0f67cdac9f4b884f0677f65",
          7717: "ebe84b1af3327b791c1638c1e0ae2164",
          7845: "fc61fcfc1e9c661d910220f7379d57f9",
          7861: "9df65c7194667d6f614046aa83d5ca9f",
          8511: "4717d4054f4fa8cf21bbeed4cc07dbba",
          9206: "f4005f5918b822546a0bcc286f1d1e30",
          9257: "1ce44a8725c212da8cd1047c4aee4e1a",
          9758: "0c04a669c3695e2de0360ea905ba8def",
          9763: "6c144cf3d7a40213c0cf5eef41478a92",
          9860: "53895cb6cd4fa123a82739f236fe8bcc",
          9896: "ed25c449542d4dbd4b2fd3f5582ed92c"
        } [e] + ".js", a.miniCssF = e => "css/" + {
          82: "d2745e930c785d241cc9f63c62148327",
          567: "d2745e930c785d241cc9f63c62148327",
          1042: "2ef08a96405d782a810a2aba04216fc8",
          1401: "d2745e930c785d241cc9f63c62148327",
          1457: "887007833800bb12df315f4a1e2fb491",
          1930: "94ca34ab971f4ad5c492254565924da4",
          2430: "d2745e930c785d241cc9f63c62148327",
          5933: "4d4c8e70d63a124371425196b94f9781",
          6298: "1a4a75888d6cd6d7ed0b49ad1ddc46b4",
          6993: "b772c2243e705ad0ad1c3c6240b9eecc",
          7845: "22531ffa1e91bd7a69f4284460e32b22"
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
          a.l = (r, o, n, c) => {
            if (e[r]) return void e[r].push(o);
            let d, f;
            if (void 0 !== n) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const a = e[s];
                if (a.getAttribute("src") == r || a.getAttribute("data-webpack") == t + n) {
                  d = a;
                  break
                }
              }
            }
            d || (f = !0, d = document.createElement("script"), d.charset = "utf-8", a.nc && d.setAttribute("nonce", a.nc), d.setAttribute("data-webpack", t + n), d.src = r), e[r] = [o];
            const l = (t, a) => {
                d.onerror = d.onload = null, clearTimeout(i);
                const o = e[r];
                if (delete e[r], d.parentNode?.removeChild(d), o?.forEach(e => e(a)), t) return t(a)
              },
              i = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), f && document.head.appendChild(d)
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
            const c = a.S[r],
              d = "@rockstargames/modules-core-footer",
              f = (e, t, r, a) => {
                const o = c[e] = c[e] || {},
                  n = o[t];
                (!n || !n.loaded && (!a != !n.eager ? a : d > n.from)) && (o[t] = {
                  get: r,
                  from: d,
                  eager: !!a
                })
              },
              s = [];
            switch (r) {
              case "default":
                f("@foundry/icons", "6.5.0", () => Promise.all([a.e(4053), a.e(3253), a.e(4637), a.e(4017), a.e(1401)]).then(() => () => a(63253))), f("@foundry/icons", "6.5.0", () => Promise.all([a.e(4053), a.e(9257), a.e(4637), a.e(4017), a.e(567)]).then(() => () => a(49257))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([a.e(761), a.e(2145), a.e(31), a.e(4637), a.e(7377)]).then(() => () => a(77377))), f("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([a.e(4053), a.e(2145), a.e(1411), a.e(312), a.e(31), a.e(4540), a.e(661), a.e(4637), a.e(4017), a.e(195), a.e(3762), a.e(4378), a.e(3331), a.e(6298), a.e(1457), a.e(7717)]).then(() => () => a(5475))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([a.e(312), a.e(31), a.e(6918), a.e(4637), a.e(195), a.e(4378), a.e(3331), a.e(4935)]).then(() => () => a(323))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([a.e(2145), a.e(312), a.e(31), a.e(2841), a.e(4637), a.e(195), a.e(4378), a.e(519), a.e(4597)]).then(() => () => a(40519))), f("react-dom", "18.3.1", () => Promise.all([a.e(162), a.e(4637)]).then(() => () => a(30162))), f("react-router-dom", "6.30.4", () => Promise.all([a.e(9860), a.e(4637), a.e(4017)]).then(() => () => a(79860))), f("react", "18.3.1", () => a.e(2581).then(() => () => a(22581)));
                break;
              case "footer":
                f("@foundry/react", "6.5.0", () => Promise.all([a.e(761), a.e(4053), a.e(1411), a.e(1930), a.e(4540), a.e(5756), a.e(7845), a.e(4637), a.e(4017), a.e(3762)]).then(() => () => a(62154))), f("@foundry/react", "6.5.0", () => Promise.all([a.e(761), a.e(4053), a.e(1411), a.e(1930), a.e(4540), a.e(5756), a.e(1042), a.e(5933), a.e(4637), a.e(4017), a.e(3762), a.e(5198)]).then(() => () => a(41042)))
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
                var c = r[a],
                  d = (typeof c)[0];
                if (n != d) return "o" == n && "n" == d || "s" == d || "u" == n;
                if ("o" != n && "u" != n && o != c) return o < c;
                a++
              }
            },
            r = e => {
              var t = e[0],
                a = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                a += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var o = 1, n = 1; n < e.length; n++) o--, a += "u" == (typeof(d = e[n]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, d);
                return a
              }
              var c = [];
              for (n = 1; n < e.length; n++) {
                var d = e[n];
                c.push(0 === d ? "not(" + f() + ")" : 1 === d ? "(" + f() + " || " + f() + ")" : 2 === d ? c.pop() + " " + c.pop() : r(d))
              }
              return f();

              function f() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            o = (t, r) => {
              if (0 in t) {
                r = e(r);
                var a = t[0],
                  n = a < 0;
                n && (a = -a - 1);
                for (var c = 0, d = 1, f = !0;; d++, c++) {
                  var s, l, i = d < t.length ? (typeof t[d])[0] : "";
                  if (c >= r.length || "o" == (l = (typeof(s = r[c]))[0])) return !f || ("u" == i ? d > a && !n : "" == i != n);
                  if ("u" == l) {
                    if (!f || "u" != i) return !1
                  } else if (f)
                    if (i == l)
                      if (d <= a) {
                        if (s != t[d]) return !1
                      } else {
                        if (n ? s > t[d] : s < t[d]) return !1;
                        s != t[d] && (f = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (n || d <= a) return !1;
                    f = !1, d--
                  } else {
                    if (d <= a || l < i != n) return !1;
                    f = !1
                  } else "s" != i && "n" != i && (f = !1, d--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (c = 1; c < t.length; c++) {
                var h = t[c];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? o(h, r) : !u())
              }
              return !!u()
            };
          const n = (e, t) => e && a.o(e, t),
            c = e => (e.loaded = 1, e.get()),
            d = e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}),
            f = e => function(t, r, o, n, c) {
              const d = a.I(t);
              return d?.then && !o ? d.then(e.bind(e, t, a.S[t], r, !1, n, c)) : e(t, a.S[t], r, o, n, c)
            },
            s = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            l = f((e, r, a, o, f) => n(r, a) ? c(((e, r, a) => {
              const o = a ? d(e[r]) : e[r];
              return (r = Object.keys(o).reduce((e, r) => !e || t(e, r) ? r : e, 0)) && o[r]
            })(r, a, o)) : s(e, a, f)),
            i = f((e, a, f, l, i, b) => {
              if (!n(a, f)) return s(e, f, b);
              const u = ((e, r, a) => {
                const o = a ? d(e[r]) : e[r];
                return Object.keys(o).reduce((e, r) => !e || !o[e].loaded && t(e, r) ? r : e, 0)
              })(a, f, l);
              return o(i, u) || (h = ((e, t, a, o) => "Unsatisfied version " + a + " from " + (a && e[t][a].from) + " of shared singleton module " + t + " (required " + r(o) + ")")(a, f, u, i), "undefined" != typeof console && console.warn && console.warn(h)), c(a[f][u]);
              var h
            }),
            b = {},
            u = {
              4637: () => i("default", "react", !1, [1, 18, 2, 0], () => a.e(2581).then(() => () => a(22581))),
              84017: () => i("default", "react-dom", !1, [1, 18, 2, 0], () => a.e(162).then(() => () => a(30162))),
              942: () => i("default", "react-router-dom", !1, [1, 6, 30, 4], () => Promise.all([a.e(9860), a.e(4017)]).then(() => () => a(79860))),
              42909: () => i("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([a.e(761), a.e(2145), a.e(9758)]).then(() => () => a(77377))),
              82199: () => i("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([a.e(312), a.e(6918), a.e(195), a.e(3331), a.e(323)]).then(() => () => a(323))),
              25198: () => i("default", "@foundry/icons", !1, [0], () => Promise.all([a.e(9257), a.e(2430)]).then(() => () => a(49257))),
              6372: () => l("footer", "@foundry/react", !1, () => Promise.all([a.e(761), a.e(1411), a.e(1930), a.e(1042), a.e(3762)]).then(() => () => a(41042))),
              76923: () => i("default", "@rsgweb/modules-core-user-action-menu", !1, [0], () => Promise.all([a.e(1411), a.e(312), a.e(661), a.e(195), a.e(3762), a.e(3331), a.e(6298)]).then(() => () => a(5475))),
              33762: () => i("default", "@foundry/icons", !1, [0], () => Promise.all([a.e(3253), a.e(82)]).then(() => () => a(63253))),
              13331: () => i("default", "@rsgweb/utils", !1, [0], () => Promise.all([a.e(2145), a.e(2841), a.e(519)]).then(() => () => a(40519))),
              84796: () => l("footer", "@foundry/react", !1, () => Promise.all([a.e(761), a.e(1930), a.e(5756), a.e(7845)]).then(() => () => a(62154)))
            },
            h = {
              1457: [82199],
              3331: [13331],
              3762: [33762],
              4017: [84017],
              4378: [942, 42909],
              4637: [4637],
              5198: [25198],
              6298: [84796],
              6993: [6372, 76923]
            },
            p = {};
          a.f.consumes = (e, t) => {
            a.o(h, e) && h[e].forEach(e => {
              if (a.o(b, e)) return t.push(b[e]);
              if (!p[e]) {
                const r = t => {
                  b[e] = 0, a.m[e] = r => {
                    delete a.c[e], r.exports = t()
                  }
                };
                p[e] = !0;
                const o = t => {
                  delete b[e], a.m[e] = r => {
                    throw delete a.c[e], t
                  }
                };
                try {
                  const a = u[e]();
                  a.then ? t.push(b[e] = a.then(r).catch(o)) : r(a)
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
                82: 1,
                567: 1,
                1042: 1,
                1401: 1,
                1457: 1,
                1930: 1,
                2430: 1,
                5933: 1,
                6298: 1,
                6993: 1,
                7845: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var o = a.miniCssF(e),
                  n = a.p + o;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === t)) return c
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var c;
                      if ((o = (c = n[a]).getAttribute("data-href")) === e || o === t) return c
                    }
                  })(o, n)) return t();
                ((e, t, r, o, n) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", a.nc && (c.nonce = a.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) o();
                    else {
                      var a = r && r.type,
                        d = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = a, f.request = d, c.parentNode && c.parentNode.removeChild(c), n(f)
                    }
                  }, c.href = t, document.head.appendChild(c)
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
              else if (/^(4(017|378|637)|2430|3331|3762|5198|82)$/.test(t)) e[t] = 0;
            else {
              const n = new Promise((r, a) => o = e[t] = [r, a]);
              r.push(o[2] = n);
              const c = a.p + a.u(t),
                d = new Error,
                f = r => {
                  if (a.o(e, t) && (o = e[t], 0 !== o && (e[t] = void 0), o)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      a = r && r.target && r.target.src;
                    d.message = "Loading chunk " + t + " failed.\n(" + e + ": " + a + ")", d.name = "ChunkLoadError", d.type = e, d.request = a, o[1](d)
                  }
                };
              a.l(c, f, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [o, n, c] = r;
              var d, f, s = 0;
              if (o.some(t => 0 !== e[t])) {
                for (d in n) a.o(n, d) && (a.m[d] = n[d]);
                c && c(a)
              }
              for (t && t(r); s < o.length; s++) f = o[s], a.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), a.nc = void 0, a(87732), a(98478)
      })())
    }
  }
});