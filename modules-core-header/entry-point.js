try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "207b6b5f-ab5f-4838-9552-e52725ff0ec9", e._sentryDebugIdIdentifier = "sentry-dbid-207b6b5f-ab5f-4838-9552-e52725ff0ec9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e = {
          85946(e, t, a) {
            (0, a(69e3).w)(1)
          },
          69e3(e, t, a) {
            const r = a(31364).y;
            t.w = function(e) {
              if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p = r(a.y.meta.url, e)
            }
          },
          64769(e, t, a) {
            a(85946)
          },
          31364(e, t, a) {
            t.y = function(e, t) {
              var a = document.createElement("a");
              a.href = e;
              for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, n = 0, o = r.length; n !== t && o >= 0;) "/" === r[--o] && n++;
              if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
              var d = r.slice(0, o + 1);
              return a.protocol + "//" + a.host + d
            };
            Number.isInteger
          },
          72892(e, t, a) {
            "use strict";
            const r = {
                "./core": () => Promise.all([a.e(2145), a.e(9167), a.e(4414), a.e(588), a.e(4637), a.e(1270), a.e(2909), a.e(4119), a.e(3331), a.e(2526)]).then(() => () => a(78082))
              },
              n = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), a.R = void 0, t),
              o = (e, t) => {
                if (!a.S) return;
                const r = "default",
                  n = a.S[r];
                if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return a.S[r] = e, a.I(r, t)
              };
            a.d(t, {
              get: () => n,
              init: () => o
            })
          }
        };
        const a = {};

        function r(t) {
          const n = a[t];
          if (void 0 !== n) return n.exports;
          const o = a[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
        }
        return r.m = e, r.c = a, r.y = t, r.amdO = {}, r.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return r.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          r.t = function(a, n) {
            if (1 & n && (a = this(a)), 8 & n) return a;
            if ("object" == typeof a && a) {
              if (4 & n && a.__esModule) return a;
              if (16 & n && "function" == typeof a.then) return a
            }
            const o = Object.create(null);
            r.r(o);
            const d = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var c = 2 & n && a;
              ("object" == typeof c || "function" == typeof c) && !~t.indexOf(c); c = e(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
            return d.default = () => a, r.d(o, d), o
          }
        })(), r.d = (e, t) => {
          if (Array.isArray(t))
            for (var a = 0; a < t.length;) {
              var n = t[a++],
                o = t[a++];
              r.o(e, n) ? 0 === o && a++ : 0 === o ? Object.defineProperty(e, n, {
                enumerable: !0,
                value: t[a++]
              }) : Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
              })
            } else
              for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
              })
        }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), [])), r.u = e => "js/" + {
          147: "bf014a3ef2dc2b922749e5e0a802015b",
          162: "84ea2a01ad69257794d76044114226b8",
          269: "6efd3262183f2b99043343fea401e6ec",
          298: "c7e48aaf8a19d57ac3df69a503c9fc81",
          518: "43bc66cc69ad2596aa41c25c0bbd5276",
          528: "50ab2b361b9d980fe767acc54266075d",
          588: "961fca4288bc8bd4958fd691eab57476",
          699: "99ebf17670a42126439f77e0dd26063f",
          761: "bd13143e07148127e82c108b462b6a36",
          1001: "f0b3a649bd3bac5f2ae413189dc05a65",
          1125: "c16378d9b0472a769985f90e9619187a",
          2145: "3f62c7a0f58dac5962a456c31eac8d47",
          2174: "0f19813219bf03955e6c134e552e9df0",
          2272: "245392cc1d61b2678a498e658a63030d",
          2471: "842e019294f80782511fa55c2240a268",
          2526: "0e9c34b5095648ba916e678a676a5e87",
          2581: "13c7c6affc582de1200b35408e40b75a",
          2647: "25751086d0ff6ceec6ab652622128af8",
          2656: "8db91cde97f7965088e366a2a77e1b4b",
          3080: "8f05d13a266cb7c57cfc96d8d9cd201d",
          3237: "5d8505833ce080f8df1c47c25e0170a2",
          3296: "ab09b6449eab5beab3d785302adafe63",
          3401: "c0b5a19205a9d426b1c7698b4c772d2b",
          3506: "d682c3871b72913f7cdedac1e15f23f2",
          3529: "2b80b4df04661a3ec70d4477171537dc",
          3769: "1f613e19416365d38e6a44c0f65fde04",
          4299: "2bcf3ee61b6d98cd89e300eadf28a8a7",
          4414: "45ff7900492061b4fc686007087d75e2",
          4446: "14e7fbaaf52fc830a7386bbcd2044930",
          4555: "9f63616b0a59a79ebcf0557fdf91293a",
          4563: "a1b4b2f11f920dd59adab9214047fd54",
          4607: "8fac2693bd09ddb1fc7195e33b2cbfd3",
          4852: "7d29d1f27b5827a4ad942a9c452f34cd",
          4860: "b2f495b749b491a5752bbd1eed8ed7c3",
          4921: "325e6450b386647e79ea0101b71485f6",
          4962: "5020cbcd3852bc1ce9701d24af884b6c",
          5185: "cebf42925f034f8446db051d886c0ae1",
          5529: "81bc71bfecaa403f887244890f050610",
          5618: "3de8829a1b34a1a60fca4fabec1a619a",
          5739: "6ef5bf55f0ab220cbcdbc1e5091cb79c",
          5782: "61b225e91bb6848ef4d51a08de2d001c",
          5847: "f99947f6a1e85f03a29eaaa923d659f8",
          5921: "c788212d33e6d84872847656c97f4db9",
          6078: "1ee9bf2ff8211385878ad6776da22ad4",
          6254: "f7adc851b9788174fbc023807485ef47",
          6279: "cfe1ca6a8928e8527972d8f22da9ca2b",
          6405: "55309d422a2d4e1cb5f12911a27571ee",
          6537: "529a82cd8690040135ffc2313ee9cbec",
          6637: "10cb8ee9c501b3c3dc0a70bcec47d385",
          6680: "d32656edbc875badb56f12ff8a055219",
          6918: "0739855f1afc142729ff6bc3f13fe9e4",
          6936: "2e8366a65058616bc7f4ae7996059695",
          7110: "c9c5c931bf5943bae23b94d8187df676",
          7566: "fc9ccdd7931e69be4fd9dc958590dc56",
          7602: "f5adb3cab12dc77e3634414288f36f6b",
          7725: "9904f54ea83584deeb7043776c14e1d2",
          8137: "e495b658632df2ea607c18446112d733",
          8504: "ad01de8c40dec295c460af581bd23858",
          8509: "f03985184731e65b1f8ecf8569b01772",
          8696: "5ab1e59560f19f46107e9dc18e70dbc3",
          8910: "f062e972aec6e7d2615f7d81156be880",
          8918: "0ba2d7626e609fb5458b624cab16feef",
          9018: "0a426a82ac2a0677684d724e1674ede8",
          9103: "1ed09cb6feb431c2b1e7c16e2edb3d5c",
          9167: "73bfe5999340cdb2591a57019454192c",
          9269: "2b2e69c890c1b583d263c0539d1a9e3e",
          9708: "9a8764d36e91e0aa7fafd32bc2d1b025",
          9793: "06a9798e9abe787e315a32466263b605",
          9933: "4e3674f2a747d9ac2f355a2010fab2ac"
        } [e] + ".js", r.miniCssF = e => "css/" + {
          298: "418522d0d12f72d80b558f9733dd6579",
          528: "9605e4661b50b9d4fc907ee456d15b70",
          704: "9605e4661b50b9d4fc907ee456d15b70",
          2526: "6cf2cfa51258f7bbc33f7ef4120df583",
          3080: "60b4a384ad1da4123eed3cda02035b00",
          4414: "97b2969c4bb7e6b2fe2826bedb12c873",
          5739: "7f29301d0cac418b5af37ea4c23dd90f",
          8610: "60b4a384ad1da4123eed3cda02035b00"
        } [e] + ".css", r.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-header:";
          r.l = (a, n, o, d) => {
            if (e[a]) return void e[a].push(n);
            let c, f;
            if (void 0 !== o) {
              const e = document.getElementsByTagName("script");
              for (var i = 0; i < e.length; i++) {
                const r = e[i];
                if (r.getAttribute("src") == a || r.getAttribute("data-webpack") == t + o) {
                  c = r;
                  break
                }
              }
            }
            c || (f = !0, c = document.createElement("script"), c.charset = "utf-8", r.nc && c.setAttribute("nonce", r.nc), c.setAttribute("data-webpack", t + o), c.src = a), e[a] = [n];
            const l = (t, r) => {
                c.onerror = c.onload = null, clearTimeout(s);
                const n = e[a];
                if (delete e[a], c.parentNode?.removeChild(c), n?.forEach(e => e(r)), t) return t(r)
              },
              s = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), f && document.head.appendChild(c)
          }
        })(), r.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {},
            t = {};
          r.f.remotes = (a, n) => {
            r.o(e, a) && e[a].forEach(e => {
              let a = r.R;
              a || (a = []);
              const o = t[e];
              if (a.indexOf(o) >= 0) return;
              if (a.push(o), o.p) return n.push(o.p);
              const d = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), r.m[e] = () => {
                    throw t
                  }, o.p = 0
                },
                c = (e, t, a, r, c, f) => {
                  try {
                    const i = e(t, a);
                    if (!i?.then) return c(i, r, f); {
                      const e = i.then(e => c(e, r), d);
                      if (!f) return e;
                      n.push(o.p = e)
                    }
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, t, r) => c(t.get, o[1], a, 0, i, r),
                i = t => {
                  o.p = 1, r.m[e] = e => {
                    e.exports = t()
                  }
                };
              c(r, o[2], 0, 0, (e, t, a) => e ? c(r.I, o[0], 0, e, f, a) : d(), 1)
            })
          }
        })(), (() => {
          r.S = {};
          const e = {},
            t = {};
          r.I = (a, n) => {
            n || (n = []);
            let o = t[a];
            if (o || (o = t[a] = {}), n.indexOf(o) >= 0) return;
            if (n.push(o), e[a]) return e[a];
            r.o(r.S, a) || (r.S[a] = {});
            const d = r.S[a],
              c = "@rockstargames/modules-core-header",
              f = (e, t, a, r) => {
                const n = d[e] = d[e] || {},
                  o = n[t];
                (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (n[t] = {
                  get: a,
                  from: c,
                  eager: !!r
                })
              },
              i = [];
            switch (a) {
              case "default":
                f("@foundry-int/utils", "6.6.1", () => Promise.all([r.e(8504), r.e(1270)]).then(() => () => r(98504))), f("@foundry/icons", "6.6.1", () => Promise.all([r.e(7725), r.e(4637), r.e(8565), r.e(2874), r.e(528)]).then(() => () => r(47725))), f("@radix-ui/react-accordion", "1.2.20", () => Promise.all([r.e(2647), r.e(4637), r.e(7529), r.e(2028), r.e(9793)]).then(() => () => r(82647))), f("@radix-ui/react-dialog", "1.1.23", () => Promise.all([r.e(6254), r.e(5921), r.e(4637), r.e(7529), r.e(2028), r.e(9734), r.e(9113), r.e(2174)]).then(() => () => r(75921))), f("@radix-ui/react-focus-scope", "1.1.16", () => Promise.all([r.e(4637), r.e(7529), r.e(518)]).then(() => () => r(518))), f("@radix-ui/react-id", "1.1.4", () => Promise.all([r.e(4637), r.e(8918)]).then(() => () => r(88918))), f("@radix-ui/react-navigation-menu", "1.2.22", () => Promise.all([r.e(6254), r.e(147), r.e(4637), r.e(7529), r.e(2028), r.e(8565), r.e(4555)]).then(() => () => r(40147))), f("@radix-ui/react-popover", "1.1.23", () => Promise.all([r.e(6254), r.e(4860), r.e(4637), r.e(7529), r.e(2028), r.e(9734), r.e(9113), r.e(7566)]).then(() => () => r(25185))), f("@radix-ui/react-portal", "1.1.17", () => Promise.all([r.e(4637), r.e(7529), r.e(2471)]).then(() => () => r(62471))), f("@radix-ui/react-slot", "1.3.3", () => Promise.all([r.e(4637), r.e(3237)]).then(() => () => r(93237))), f("@radix-ui/react-use-controllable-state", "1.2.6", () => Promise.all([r.e(4637), r.e(5782)]).then(() => () => r(15782))), f("@radix-ui/react-visually-hidden", "1.2.11", () => Promise.all([r.e(4637), r.e(7529), r.e(4299)]).then(() => () => r(94299))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([r.e(2145), r.e(761), r.e(9167), r.e(4637), r.e(3506)]).then(() => () => r(93506))), f("@rsgweb/modules-core-global-navigation", "0.0.0-development", () => Promise.all([r.e(6078), r.e(298), r.e(4414), r.e(4563), r.e(4637), r.e(7529), r.e(2028), r.e(9734), r.e(8565), r.e(2874), r.e(5296), r.e(1270), r.e(4119), r.e(8610), r.e(699)]).then(() => () => r(50699))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([r.e(1001), r.e(9167), r.e(6918), r.e(4637), r.e(2272), r.e(2909), r.e(8509), r.e(3331)]).then(() => () => r(18509))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([r.e(2145), r.e(1001), r.e(9167), r.e(3769), r.e(4637), r.e(2272), r.e(2909), r.e(8910)]).then(() => () => r(98910))), f("@vanilla-extract/recipes", "0.5.7", () => Promise.all([r.e(6078), r.e(9018)]).then(() => () => r(29018))), f("clsx", "2.1.1", () => r.e(4921).then(() => () => r(4921))), f("framer-motion", "12.43.0", () => Promise.all([r.e(6279), r.e(4637), r.e(6936)]).then(() => () => r(76279))), f("gsap", "3.12.5", () => r.e(3529).then(() => () => r(93529))), f("react-dom", "18.3.1", () => Promise.all([r.e(162), r.e(4637)]).then(() => () => r(30162))), f("react-remove-scroll", "2.7.2", () => Promise.all([r.e(3296), r.e(4637)]).then(() => () => r(33296))), f("react", "18.3.1", () => r.e(2581).then(() => () => r(22581))), f("spatial-navigation-polyfill", "1.3.1", () => r.e(4446).then(() => () => r(54446)));
                break;
              case "header":
                f("@foundry/react", "6.6.1", () => Promise.all([r.e(6254), r.e(6078), r.e(298), r.e(761), r.e(4860), r.e(4414), r.e(5739), r.e(4637), r.e(7529), r.e(2028), r.e(9734), r.e(9113), r.e(8565), r.e(2874), r.e(5296), r.e(1270), r.e(5812), r.e(269)]).then(() => () => r(15739)))
            }
            return e[a] = i.length ? Promise.all(i).then(() => e[a] = 1) : 1
          }
        })(), (() => {
          let e;
          r.g.importScripts && (e = r.g.location + "");
          const t = r.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const a = t.getElementsByTagName("script");
            if (a.length) {
              let t = a.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = a[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                a = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = a[1] ? t(a[1]) : [];
              return a[2] && (r.length++, r.push.apply(r, t(a[2]))), a[3] && (r.push([]), r.push.apply(r, t(a[3]))), r
            },
            t = (t, a) => {
              t = e(t), a = e(a);
              for (var r = 0;;) {
                if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                var n = t[r],
                  o = (typeof n)[0];
                if (r >= a.length) return "u" == o;
                var d = a[r],
                  c = (typeof d)[0];
                if (o != c) return "o" == o && "n" == c || "s" == c || "u" == o;
                if ("o" != o && "u" != o && n != d) return n < d;
                r++
              }
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var n = 1, o = 1; o < e.length; o++) n--, r += "u" == (typeof(c = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, c);
                return r
              }
              var d = [];
              for (o = 1; o < e.length; o++) {
                var c = e[o];
                d.push(0 === c ? "not(" + f() + ")" : 1 === c ? "(" + f() + " || " + f() + ")" : 2 === c ? d.pop() + " " + d.pop() : a(c))
              }
              return f();

              function f() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            n = (t, a) => {
              if (0 in t) {
                a = e(a);
                var r = t[0],
                  o = r < 0;
                o && (r = -r - 1);
                for (var d = 0, c = 1, f = !0;; c++, d++) {
                  var i, l, s = c < t.length ? (typeof t[c])[0] : "";
                  if (d >= a.length || "o" == (l = (typeof(i = a[d]))[0])) return !f || ("u" == s ? c > r && !o : "" == s != o);
                  if ("u" == l) {
                    if (!f || "u" != s) return !1
                  } else if (f)
                    if (s == l)
                      if (c <= r) {
                        if (i != t[c]) return !1
                      } else {
                        if (o ? i > t[c] : i < t[c]) return !1;
                        i != t[c] && (f = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (o || c <= r) return !1;
                    f = !1, c--
                  } else {
                    if (c <= r || l < s != o) return !1;
                    f = !1
                  } else "s" != s && "n" != s && (f = !1, c--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < t.length; d++) {
                var h = t[d];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? n(h, a) : !b())
              }
              return !!b()
            };
          const o = (e, t) => e && r.o(e, t),
            d = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce((t, a) => (e[a].eager && (t[a] = e[a]), t), {}),
            f = e => function(t, a, n, o, d) {
              const c = r.I(t);
              return c?.then && !n ? c.then(e.bind(e, t, r.S[t], a, !1, o, d)) : e(t, r.S[t], a, n, o, d)
            },
            i = (e, t, a) => a ? a() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            l = f((e, a, r, n, f) => o(a, r) ? d(((e, a, r) => {
              const n = r ? c(e[a]) : e[a];
              return (a = Object.keys(n).reduce((e, a) => !e || t(e, a) ? a : e, 0)) && n[a]
            })(a, r, n)) : i(e, r, f)),
            s = f((e, r, f, l, s, u) => {
              if (!o(r, f)) return i(e, f, u);
              const b = ((e, a, r) => {
                const n = r ? c(e[a]) : e[a];
                return Object.keys(n).reduce((e, a) => !e || !n[e].loaded && t(e, a) ? a : e, 0)
              })(r, f, l);
              return n(s, b) || (h = ((e, t, r, n) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(n) + ")")(r, f, b, s), "undefined" != typeof console && console.warn && console.warn(h)), d(r[f][b]);
              var h
            }),
            u = {},
            b = {
              4637: () => s("default", "react", !1, [1, 18, 2, 0], () => r.e(2581).then(() => () => r(22581))),
              81270: () => s("default", "clsx", !1, [1, 2, 1, 1], () => r.e(4921).then(() => () => r(4921))),
              42909: () => s("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([r.e(2145), r.e(761), r.e(1125)]).then(() => () => r(93506))),
              20155: () => s("default", "framer-motion", !1, [1, 12, 38, 0], () => r.e(6279).then(() => () => r(76279))),
              36993: () => l("header", "@foundry/react", !1, () => Promise.all([r.e(6254), r.e(6078), r.e(298), r.e(761), r.e(4860), r.e(5739), r.e(7529), r.e(2028), r.e(9734), r.e(9113), r.e(8565), r.e(2874), r.e(5296), r.e(5812)]).then(() => () => r(15739))),
              13331: () => s("default", "@rsgweb/utils", !1, [0], () => Promise.all([r.e(2145), r.e(1001), r.e(3769), r.e(2272), r.e(8910)]).then(() => () => r(98910))),
              37116: () => s("default", "@rsgweb/modules-core-global-navigation", !1, [0], () => Promise.all([r.e(6078), r.e(298), r.e(4563), r.e(7529), r.e(2028), r.e(9734), r.e(8565), r.e(2874), r.e(5296), r.e(3080)]).then(() => () => r(50699))),
              82199: () => s("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([r.e(1001), r.e(6918), r.e(2272), r.e(8509)]).then(() => () => r(18509))),
              68565: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => Promise.all([r.e(7529), r.e(6680)]).then(() => () => r(94299))),
              32874: () => s("default", "@foundry-int/utils", !1, [0], () => Promise.all([r.e(8504), r.e(1270)]).then(() => () => r(98504))),
              49481: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => r.e(5618).then(() => () => r(93237))),
              84017: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => r.e(162).then(() => () => r(30162))),
              31431: () => s("default", "@radix-ui/react-id", !1, [1, 1, 1, 1], () => r.e(6537).then(() => () => r(88918))),
              44622: () => s("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 2, 2], () => r.e(3401).then(() => () => r(15782))),
              743: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => r.e(4852).then(() => () => r(62471))),
              93778: () => s("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => r.e(8137).then(() => () => r(518))),
              59113: () => s("default", "react-remove-scroll", !1, [1, 2, 7, 2], () => r.e(3296).then(() => () => r(33296))),
              1309: () => s("default", "@radix-ui/react-popover", !1, [1, 1, 1, 15], () => Promise.all([r.e(6254), r.e(4860), r.e(9113), r.e(5185)]).then(() => () => r(25185))),
              11706: () => s("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 15], () => Promise.all([r.e(6254), r.e(5921), r.e(9113)]).then(() => () => r(75921))),
              45866: () => s("default", "@foundry/icons", !1, [0], () => Promise.all([r.e(7725), r.e(704)]).then(() => () => r(47725))),
              47876: () => s("default", "@vanilla-extract/recipes", !1, [2, 0, 5, 7], () => r.e(6637).then(() => () => r(29018))),
              74557: () => s("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 12], () => r.e(2647).then(() => () => r(82647))),
              59066: () => s("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => r.e(4446).then(() => () => r(54446))),
              61848: () => s("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 14], () => Promise.all([r.e(6254), r.e(147)]).then(() => () => r(40147))),
              35812: () => s("default", "gsap", !1, [0], () => r.e(3529).then(() => () => r(93529)))
            },
            h = {
              1270: [81270],
              2028: [31431, 44622],
              2526: [37116, 82199],
              2874: [32874],
              2909: [42909],
              3080: [59066, 61848],
              3331: [13331],
              4119: [20155, 36993],
              4637: [4637],
              5296: [1309, 11706, 45866, 47876, 74557],
              5812: [35812],
              7529: [49481, 84017],
              8565: [68565],
              8610: [59066, 61848],
              9113: [59113],
              9734: [743, 93778]
            },
            p = {};
          r.f.consumes = (e, t) => {
            r.o(h, e) && h[e].forEach(e => {
              if (r.o(u, e)) return t.push(u[e]);
              if (!p[e]) {
                const a = t => {
                  u[e] = 0, r.m[e] = a => {
                    delete r.c[e], a.exports = t()
                  }
                };
                p[e] = !0;
                const n = t => {
                  delete u[e], r.m[e] = a => {
                    throw delete r.c[e], t
                  }
                };
                try {
                  const r = b[e]();
                  r.then ? t.push(u[e] = r.then(a).catch(n)) : a(r)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            r.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
                298: 1,
                528: 1,
                704: 1,
                2526: 1,
                3080: 1,
                4414: 1,
                5739: 1,
                8610: 1
              } [t] && a.push(e[t] = (e => new Promise((t, a) => {
                var n = r.miniCssF(e),
                  o = r.p + n;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var n = (d = a[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (n === e || n === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (r = 0; r < o.length; r++) {
                      var d;
                      if ((n = (d = o[r]).getAttribute("data-href")) === e || n === t) return d
                    }
                  })(n, o)) return t();
                ((e, t, a, n, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", r.nc && (d.nonce = r.nc), d.onerror = d.onload = a => {
                    if (d.onerror = d.onload = null, "load" === a.type) n();
                    else {
                      var r = a && a.type,
                        c = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + c + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = r, f.request = c, d.parentNode && d.parentNode.removeChild(d), o(f)
                    }
                  }, d.href = t, document.head.appendChild(d)
                })(e, o, 0, t, a)
              }))(t).then(() => {
                e[t] = 0
              }, a => {
                throw delete e[t], a
              }))
            }
          }
        })(), (() => {
          const e = {
            4295: 0
          };
          r.f.j = (t, a) => {
            let n = r.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) a.push(n[2]);
              else if (/^(2(028|874|909)|1270|3331|4119|4637|5296|5812|704|7529|8565|8610|9113|9734)$/.test(t)) e[t] = 0;
            else {
              const o = new Promise((a, r) => n = e[t] = [a, r]);
              a.push(n[2] = o);
              const d = r.p + r.u(t),
                c = new Error,
                f = a => {
                  if (r.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = a && ("load" === a.type ? "missing" : a.type),
                      r = a && a.target && a.target.src;
                    c.message = "Loading chunk " + t + " failed.\n(" + e + ": " + r + ")", c.name = "ChunkLoadError", c.type = e, c.request = r, c.event = a, n[1](c)
                  }
                };
              r.l(d, f, "chunk-" + t, t)
            }
          };
          const t = (t, a) => {
              let [n, o, d] = a;
              var c, f, i = 0;
              if (n.some(t => 0 !== e[t])) {
                for (c in o) r.o(o, c) && (r.m[c] = o[c]);
                d && d(r)
              }
              for (t && t(a); i < n.length; i++) f = n[i], r.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), r.nc = void 0, r(64769), r(72892)
      })())
    }
  }
});