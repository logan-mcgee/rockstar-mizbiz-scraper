try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b12470f4-e269-4aa6-a3c7-18761b13e754", e._sentryDebugIdIdentifier = "sentry-dbid-b12470f4-e269-4aa6-a3c7-18761b13e754")
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
              var d = a.slice(0, n + 1);
              return r.protocol + "//" + r.host + d
            };
            Number.isInteger
          },
          98478(e, t, r) {
            "use strict";
            const a = {
                "./root": () => Promise.all([r.e(4053), r.e(2145), r.e(31), r.e(4540), r.e(5756), r.e(9665), r.e(4637), r.e(4017), r.e(4378), r.e(1457), r.e(2933), r.e(5222)]).then(() => () => r(15222))
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
          4: "3661e1ff2cf5cf2f4cd816cb9b7b0c4f",
          31: "51e2c681c6baddfd2d5523d8d796bf60",
          162: "a4e0b8cdfdb9da1ffcf445e8c6799847",
          195: "045bd0aa9b5af5f212147e5ec952b8f8",
          247: "8f8378bfa99b0f44f990efd65381ac02",
          312: "9def08b25412a5f5c7a5222f41c212e7",
          323: "270cd8800262adff070a30662fbb42f2",
          519: "a874be4d0e2a386e3808755dd2e8b4a6",
          700: "cda37534d1f29e9e428a4108d5b17968",
          711: "46033c3cdd52927a21ff80f26561ac46",
          740: "3f12205d2c1ae909b14db5c1c439768c",
          754: "6ca32cc84d2089ae8f131f70e8466d6e",
          761: "f0a697f8685dc7f643b5794343c49518",
          1376: "5cd30a738d65ba15f348dafccec7cc71",
          1457: "d92e6eb51cf2b19bb10d218ea2eac7f8",
          1514: "384f16f467c7e42d2ba743b704a1194b",
          1571: "23b527ba17523c6f650ca00fd668d3b7",
          1827: "b0141b3ad4a0b90a56c0c131bd67b89c",
          2145: "85874d8fc29b28a56f406239b0e10b19",
          2581: "17412198c4a33aa279ef7d821926cd66",
          2662: "9d85fd625ef736d921b9864158f6cedd",
          2841: "5c38284e80441d611446e2a3c74c1d62",
          3619: "baa211728fe20120dcbf98889f8d8fb6",
          3622: "6c6994ca858e4d482671b821bbdf950d",
          3656: "2de6e21b3edd368bd31a914d32045873",
          4053: "39bb716aa8232403eed4101bcfb4e5d4",
          4143: "4c33c5c0d109b2054660494075f4ab3b",
          4421: "c98ea37a1a41d15e54d654ecac55ab93",
          4540: "8d69a4fee150a1002eb23a03d11ddc9b",
          4597: "8c6f11710293dc9368aedae67d3e8682",
          4935: "c1606edd91f3d1bc95f79fe31546c065",
          5140: "7c6b44834d01888f34e2e9326bb28d66",
          5222: "8589141d0b935ed50a3ebed16dd6cdf3",
          5296: "ee9121c6f1ea0db59f280ac1852da05c",
          5756: "c09cc7e08d44edd1d3ab9133a709eba8",
          5805: "e26962a47a4f36feff18c044d7d350b4",
          6383: "ba7bec8cc0950aa8ac2ce8fb32a6000c",
          6469: "58626fb39dc373239e3a831d3f44f3c8",
          6701: "4e0da5ca68a03381cedc6da60fd8cd95",
          6918: "336137a7b5c459398746bd52296fe860",
          6994: "060be980c21410ab26c12051a701282d",
          7034: "ba10e64aaec4053a16c18d4ea2a09631",
          7082: "4f3b85b0a8d615c3948ae6df30447cfc",
          7377: "91a75475fe3ed276af35be5ec77dcd55",
          7471: "df30748fda004bffaba1a6b47b769b5f",
          7477: "13dc187e3c9a5b5c87594a825dfd79de",
          8268: "26fc3aa992d054e667b1f5c4accacd0b",
          8443: "8ef6dd966fabd406cfb7962cdcf39c09",
          8553: "92916de64b9e49a08673b006a52ac473",
          8775: "963717f297e6364d08cfe97fd8b9fccf",
          8898: "b4041cfa933d6ef38e145a6bbc4c940d",
          8921: "a23ef5fb3a6296bb62d5f85085a6c35c",
          9017: "ee1d86988e428942006731f3b545e1f1",
          9022: "bffc2460caeb1e8760b6c2d9b7f2155a",
          9390: "b5a30a0b1a3c55e2feba1b9b31515475",
          9629: "3c31c548b2c907fcfd420a6b9af770f4",
          9665: "6324232bc5d3e4e54c305a7cb75f1da1",
          9758: "ef91c151810d83b9e2c00e672e710880",
          9860: "05f4382d1867ddd2f95d1ad5c5ce4eb3"
        } [e] + ".js", a.miniCssF = e => "css/" + {
          711: "94ca34ab971f4ad5c492254565924da4",
          740: "d2745e930c785d241cc9f63c62148327",
          1457: "887007833800bb12df315f4a1e2fb491",
          5222: "b772c2243e705ad0ad1c3c6240b9eecc",
          5805: "ff049865c22ea9ead6928ce1c4ddb632",
          7082: "d2745e930c785d241cc9f63c62148327",
          8144: "d2745e930c785d241cc9f63c62148327",
          8443: "a912401fa15a6cbfb0f6afc3426f953b",
          9111: "d2745e930c785d241cc9f63c62148327",
          9390: "59fd65e1c75728d1a127767867c0f6c0",
          9665: "4d4c8e70d63a124371425196b94f9781"
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
                f("@foundry/icons", "6.4.0", () => Promise.all([a.e(4053), a.e(1827), a.e(4637), a.e(4017), a.e(740)]).then(() => () => a(21827))), f("@foundry/icons", "6.4.0", () => Promise.all([a.e(4053), a.e(7034), a.e(4637), a.e(4017), a.e(7082)]).then(() => () => a(47034))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([a.e(761), a.e(2145), a.e(31), a.e(4637), a.e(7377)]).then(() => () => a(77377))), f("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([a.e(4053), a.e(2145), a.e(1514), a.e(312), a.e(31), a.e(4540), a.e(1571), a.e(4637), a.e(4017), a.e(195), a.e(6616), a.e(4378), a.e(3331), a.e(8443), a.e(1457), a.e(7477)]).then(() => () => a(21034))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([a.e(312), a.e(31), a.e(6918), a.e(4637), a.e(195), a.e(4378), a.e(3331), a.e(4935)]).then(() => () => a(323))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([a.e(2145), a.e(312), a.e(31), a.e(2841), a.e(4637), a.e(195), a.e(4378), a.e(519), a.e(4597)]).then(() => () => a(40519))), f("react-dom", "18.3.1", () => Promise.all([a.e(162), a.e(4637)]).then(() => () => a(30162))), f("react-router-dom", "6.30.4", () => Promise.all([a.e(9860), a.e(4637), a.e(4017)]).then(() => () => a(79860))), f("react", "18.3.1", () => a.e(2581).then(() => () => a(22581)));
                break;
              case "footer":
                f("@foundry/react", "6.4.0", () => Promise.all([a.e(761), a.e(4053), a.e(1514), a.e(711), a.e(4540), a.e(5756), a.e(5805), a.e(4637), a.e(4017), a.e(6616)]).then(() => () => a(32414))), f("@foundry/react", "6.4.0", () => Promise.all([a.e(761), a.e(4053), a.e(1514), a.e(711), a.e(4540), a.e(5756), a.e(9390), a.e(9665), a.e(4637), a.e(4017), a.e(6616), a.e(2933)]).then(() => () => a(99390)))
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
              var b = [],
                u = b.pop.bind(b);
              for (d = 1; d < t.length; d++) {
                var h = t[d];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? o(h, r) : !u())
              }
              return !!u()
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
            i = f((e, a, f, l, i, b) => {
              if (!n(a, f)) return s(e, f, b);
              const u = ((e, r, a) => {
                const o = a ? c(e[r]) : e[r];
                return Object.keys(o).reduce((e, r) => !e || !o[e].loaded && t(e, r) ? r : e, 0)
              })(a, f, l);
              return o(i, u) || (h = ((e, t, a, o) => "Unsatisfied version " + a + " from " + (a && e[t][a].from) + " of shared singleton module " + t + " (required " + r(o) + ")")(a, f, u, i), "undefined" != typeof console && console.warn && console.warn(h)), d(a[f][u]);
              var h
            }),
            b = {},
            u = {
              4637: () => i("default", "react", !1, [1, 18, 2, 0], () => a.e(2581).then(() => () => a(22581))),
              84017: () => i("default", "react-dom", !1, [1, 18, 2, 0], () => a.e(162).then(() => () => a(30162))),
              942: () => i("default", "react-router-dom", !1, [1, 6, 30, 4], () => Promise.all([a.e(9860), a.e(4017)]).then(() => () => a(79860))),
              42909: () => i("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([a.e(761), a.e(2145), a.e(9758)]).then(() => () => a(77377))),
              82199: () => i("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([a.e(312), a.e(6918), a.e(195), a.e(3331), a.e(323)]).then(() => () => a(323))),
              32933: () => i("default", "@foundry/icons", !1, [0], () => Promise.all([a.e(7034), a.e(9111)]).then(() => () => a(47034))),
              12930: () => l("footer", "@foundry/react", !1, () => Promise.all([a.e(761), a.e(1514), a.e(711), a.e(9390), a.e(6616)]).then(() => () => a(99390))),
              76923: () => i("default", "@rsgweb/modules-core-user-action-menu", !1, [0], () => Promise.all([a.e(1514), a.e(312), a.e(1571), a.e(195), a.e(6616), a.e(3331), a.e(8443)]).then(() => () => a(21034))),
              36616: () => i("default", "@foundry/icons", !1, [0], () => Promise.all([a.e(1827), a.e(8144)]).then(() => () => a(21827))),
              13331: () => i("default", "@rsgweb/utils", !1, [0], () => Promise.all([a.e(2145), a.e(2841), a.e(519)]).then(() => () => a(40519))),
              59342: () => l("footer", "@foundry/react", !1, () => Promise.all([a.e(761), a.e(711), a.e(5756), a.e(5805)]).then(() => () => a(32414)))
            },
            h = {
              1457: [82199],
              2933: [32933],
              3331: [13331],
              4017: [84017],
              4378: [942, 42909],
              4637: [4637],
              5222: [12930, 76923],
              6616: [36616],
              8443: [59342]
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
                711: 1,
                740: 1,
                1457: 1,
                5222: 1,
                5805: 1,
                7082: 1,
                8144: 1,
                8443: 1,
                9111: 1,
                9390: 1,
                9665: 1
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
              else if (/^(4(017|378|637)|2933|3331|6616|8144|9111)$/.test(t)) e[t] = 0;
            else {
              const n = new Promise((r, a) => o = e[t] = [r, a]);
              r.push(o[2] = n);
              const d = a.p + a.u(t),
                c = new Error,
                f = r => {
                  if (a.o(e, t) && (o = e[t], 0 !== o && (e[t] = void 0), o)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      a = r && r.target && r.target.src;
                    c.message = "Loading chunk " + t + " failed.\n(" + e + ": " + a + ")", c.name = "ChunkLoadError", c.type = e, c.request = a, o[1](c)
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
        })(), a.nc = void 0, a(87732), a(98478)
      })())
    }
  }
});