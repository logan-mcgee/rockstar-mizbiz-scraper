try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "880440b9-7dd2-4aca-adbd-83f09447a93a", e._sentryDebugIdIdentifier = "sentry-dbid-880440b9-7dd2-4aca-adbd-83f09447a93a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, d, f, n, c, o = {
            3032: (e, a, t) => {
              t(8419)
            },
            5136: e => {
              "use strict";
              e.exports = t
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(4910), t.e(4656), t.e(2229), t.e(5811), t.e(9105)]).then(() => () => t(1961))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var n = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + n
              };
              Number.isInteger
            },
            7411: (e, a, t) => {
              const r = t(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            8419: (e, a, t) => {
              (0, t(7411).w)(1)
            }
          },
          i = {};

        function s(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = o, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          s.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var n = 2 & t && a;
            ("object" == typeof n || "function" == typeof n) && !~e.indexOf(n); n = r(n)) Object.getOwnPropertyNames(n).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, s.d(d, f), d
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce((a, t) => (s.f[t](e, a), a), [])), s.u = e => "js/" + {
          131: "c9aa1208e408ba3f34fe1a4f91f6d3ad",
          278: "61771c5f1e56a6ffa0c45365860b879d",
          299: "45fcdbe73f8b588780d10e4b6f87197e",
          314: "59cb6408f46e9231ea4a476845e057cd",
          439: "a8725c68b1f5e90b7e8947e32fb6a40a",
          450: "22fe9c80d4f506098e65561bf0482267",
          662: "c6fc75871c24e710d946ed0d50245640",
          824: "8cb20b4509342c2b59aadb06f221f2cd",
          907: "8c445b9e364ecb810eed01e7abab9cc8",
          1054: "fa162bceb2ad04d8aeb76189b7101850",
          1098: "46ab2360c7440a153cce9a2de52a4f00",
          1242: "c0fd92b15f6ac52a0fa8f1317e7772e1",
          1822: "6f3523f6e0c5858a1355e38c6972955b",
          1868: "84b1b26e5b85950d4671168aa3380dee",
          2156: "ecf48444cd7a788fa1d29f2349af715c",
          2171: "29acfb0d55bd48e85ccce7b36834a965",
          2221: "147facb71c90753272ccc63a1bedb1a9",
          2243: "04ef6f1be7bbaef7ed10a59b56135e17",
          2306: "7da1f691252c3391f4937fe2274e3654",
          2347: "972020baf8ec6b0d75dc90ecf84b7a02",
          2365: "e2a346d6e0b11388b21e5b410fee0f79",
          2398: "99924571db74a80dd4df2c1144a5cf34",
          2466: "a1388194babdf2ecf05fc073978d2ee5",
          2562: "dc64c4940c795db1fecc84e10aa3d3b7",
          2642: "9f143d61ac20def4bb97fd89845c5e9f",
          2678: "174b71f14615c5b4dd043561f3c413eb",
          2864: "57db9a805ea98ab593eb767e00df63e5",
          3034: "5f1bcb13d830b5570fd9733c9745d6ae",
          3197: "6bfd6f204837fd99c1a53ed69d811c63",
          3343: "e71fc54d9a5470d2c369fbcf780dcdf3",
          3370: "6b46bf1c6a631396dcf28314f41753d2",
          3475: "2e22bebcb0dc90633e6e09fc5bbca783",
          3486: "7d8ae91c6df91248dc174ff537a8b130",
          3697: "0c4cdc0d49b3bf8c605d19360bad6702",
          3885: "dbe992146f5ee5d573bf0648b127965e",
          3941: "f01ac3372683a0d6659c4b7ec02a1551",
          4011: "00f6f413ef6d6f9644d4b4b6948ba3e9",
          4528: "77f6684ac50e3eec51df002cda6af2d7",
          4578: "7f8109c7847062d87688af35b66f5c9a",
          4621: "d44aaca659422cafe3fcad56ca5c18fe",
          4656: "7c5b287a9be56e4f28dd80a79bdbb39c",
          4700: "6eefa98fa04fc1d6b1d867da785d4c24",
          4710: "a143425a196f18c77a99bfed4e6777ba",
          4731: "fd59b920630d921e5d3816cb6fbd3efd",
          4799: "a68a7f4285d1ecfa8dc3f9a6396552d9",
          4851: "310703fe9daaa793c13c25dba5da872b",
          4861: "da87d86faf771eef07444568a13cb271",
          4910: "6de5f966b02b4eb6a05a332857c7e953",
          4913: "3042f884bd91cf2dbf046040a7571b62",
          5018: "a1648e5de33b3775dfe26d2040d3ad1f",
          5233: "abfa196bb7a7095e1ed1f520cd7723a4",
          5259: "57379997aa2a345f818bc1f2ba778f22",
          5389: "27a04fc15043a12e1013aff67b11505f",
          5530: "ec4f3061d73c36b9f6acc28489644bf4",
          5639: "158edc590c2f6b6654d34db1b3f97ffb",
          5663: "cffc4dfe74f0ff8099c7c73600532d26",
          5742: "acde20f9a889f8f2910a19b973fba612",
          5811: "5b9e74ce20dbade0017578bac03540c9",
          5830: "5736598119c20c6f5945da1e09101354",
          5832: "1edd64932733ba117f91fc196c6ba4ed",
          5912: "8df595b6cedaaf0b60886f3c69e9e159",
          6267: "352da0a9403b9375f67622d18fd55b12",
          6280: "7f4d1cee9a43a934e28403e604149fbb",
          6285: "8b00a8abf776aa21b8188a57a336416f",
          6361: "9f070ec340c9fde3e5310f8bdee84162",
          6664: "64849724814ee305e4810cacd4a64df0",
          6879: "75771370751657016e95a0fb8193f5e9",
          6891: "cfd8e9103119e882ce4c152a538fb3ba",
          6997: "797e8d349dc24210498d6915ec3f2abf",
          7010: "1e245c4fd21692427e5728f23ca406cb",
          7073: "e87b69c8db508255e5630c1e7c8af1d7",
          7436: "7f212d513fb2acec862bc988fb01f757",
          7452: "8a54d75eb67f3680553c8f8565e2ec90",
          7453: "0c25fabbb2797f080f286b1051cd0120",
          7970: "4978a9754cc40d4ba0f47b6ab3b58213",
          8240: "3bd7f7767890f09502de28b41b5ea91b",
          8272: "07619f13fbe98ffcf40a09eab15fc34c",
          8322: "a7d25378d6a3b4ec678233b8d1bf4fbb",
          8391: "e01d323828d0c2d322747c2019d213a0",
          8431: "dcfdb63819d801d02d11a7fa949eded0",
          8659: "7a1e651d9b2504cecd488dac4b71e2c0",
          8755: "523aee141dcf12d2e72f935dbe0eada8",
          8880: "bb7a543ffba1fce60e5fdf321a607082",
          8970: "12234e063ee6dee538001967edd0e817",
          9022: "4cbb111d4434bd761147008a7e7e93b8",
          9028: "d404a0cc70e2d8e86735d95536cf612c",
          9105: "aa50d2e8e531debbf64562e16ed16671",
          9126: "6634ef41a4569f47a45b7ab31d17dc6d",
          9377: "416b8618cb4e5b239ca49f27a5913235",
          9587: "744e698db1085ec29afd70ec70d4c3b8",
          9615: "077a72762d68a6c855588f89e6d471df",
          9757: "9eed1c474f560c4e62ce69308a7e18e7",
          9936: "c19ada1bcfcab59927a9858158fee1e7",
          9975: "5e09749d0b41015835c22fe67a4f88c8",
          9990: "891c3e3b2c1d917dd9a86c57c53e56fb"
        } [e] + ".js", s.miniCssF = e => "css/b00df4b72b841993e7bc5c20ee7ecbac.css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-gta-trilogy:", s.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var n, c;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var b = o[i];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == f + t) {
                  n = b;
                  break
                }
              }
            n || (c = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, s.nc && n.setAttribute("nonce", s.nc), n.setAttribute("data-webpack", f + t), n.src = e), d[e] = [a];
            var l = (a, t) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], n.parentNode && n.parentNode.removeChild(n), r && r.forEach(e => e(t)), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), c && document.head.appendChild(n)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          9105: [1879]
        }, c = {
          1879: ["default", "./index", 5136]
        }, s.f.remotes = (e, a) => {
          s.o(n, e) && n[e].forEach(e => {
            var t = s.R;
            t || (t = []);
            var r = c[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, n, c, o) => {
                  try {
                    var i = e(t, f);
                    if (!i || !i.then) return c(i, n, o);
                    var s = i.then(e => c(e, n), d);
                    if (!o) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                n = (e, a, d) => f(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(s, r[2], 0, 0, (e, a, t) => e ? f(s.I, r[0], 0, e, n, t) : d(), 1)
            }
          })
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var f = s.S[t],
                n = "@rockstargames/sites-gta-trilogy",
                c = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    c = d[a];
                  (!c || !c.loaded && (!r != !c.eager ? r : n > c.from)) && (d[a] = {
                    get: t,
                    from: n,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (c("@rsgweb/locale-tools", "1.0.0", () => Promise.all([s.e(9587), s.e(2229), s.e(9975)]).then(() => () => s(2841))), c("@rsgweb/utils", "1.0.0", () => Promise.all([s.e(450), s.e(4910), s.e(2229), s.e(9757), s.e(5811)]).then(() => () => s(9757))), c("clsx", "2.1.1", () => s.e(439).then(() => () => s(439))), c("framer-motion", "7.10.3", () => Promise.all([s.e(5912), s.e(2229), s.e(8322)]).then(() => () => s(5912))), c("react-dom", "18.3.1", () => Promise.all([s.e(1098), s.e(2229)]).then(() => () => s(1098))), c("react-router-dom", "6.30.1", () => Promise.all([s.e(5389), s.e(2229), s.e(8429)]).then(() => () => s(5389))), c("react", "18.2.0", () => s.e(8659).then(() => () => s(8659))), c("react", "18.3.1", () => s.e(8431).then(() => () => s(8431))), c("usehooks-ts", "2.16.0", () => Promise.all([s.e(2562), s.e(2229)]).then(() => () => s(2562))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = s(5136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(s.S[t], r);
                  if (a.then) return o.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return o.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then(() => e[t] = 1) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = (a, t) => {
              a = e(a), t = e(t);
              for (var r = 0;;) {
                if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                var d = a[r],
                  f = (typeof d)[0];
                if (r >= t.length) return "u" == f;
                var n = t[r],
                  c = (typeof n)[0];
                if (f != c) return "o" == f && "n" == c || "s" == c || "u" == f;
                if ("o" != f && "u" != f && d != n) return d < n;
                r++
              }
            },
            t = e => {
              var a = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(c = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, c);
                return r
              }
              var n = [];
              for (f = 1; f < e.length; f++) {
                var c = e[f];
                n.push(0 === c ? "not(" + o() + ")" : 1 === c ? "(" + o() + " || " + o() + ")" : 2 === c ? n.pop() + " " + n.pop() : t(c))
              }
              return o();

              function o() {
                return n.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var n = 0, c = 1, o = !0;; c++, n++) {
                  var i, s, b = c < a.length ? (typeof a[c])[0] : "";
                  if (n >= t.length || "o" == (s = (typeof(i = t[n]))[0])) return !o || ("u" == b ? c > d && !f : "" == b != f);
                  if ("u" == s) {
                    if (!o || "u" != b) return !1
                  } else if (o)
                    if (b == s)
                      if (c <= d) {
                        if (i != a[c]) return !1
                      } else {
                        if (f ? i > a[c] : i < a[c]) return !1;
                        i != a[c] && (o = !1)
                      }
                  else if ("s" != b && "n" != b) {
                    if (f || c <= d) return !1;
                    o = !1, c--
                  } else {
                    if (c <= d || s < b != f) return !1;
                    o = !1
                  } else "s" != b && "n" != b && (o = !1, c--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (n = 1; n < a.length; n++) {
                var h = a[n];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, t) : !u())
              }
              return !!u()
            },
            d = (e, a) => e && s.o(e, a),
            f = e => (e.loaded = 1, e.get()),
            n = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}),
            c = e => {
              throw new Error(e)
            },
            o = e => function(a, t, r, d, f) {
              var n = s.I(a);
              return n && n.then && !r ? n.then(e.bind(e, a, s.S[a], t, !1, d, f)) : e(a, s.S[a], t, r, d, f)
            },
            i = (e, a, t) => t ? t() : ((e, a) => c("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            b = o((e, o, s, b, l, u) => {
              if (!d(o, s)) return i(e, s, u);
              var h = ((e, t, d, f) => {
                var c = f ? n(e[t]) : e[t];
                return (t = Object.keys(c).reduce((e, t) => !r(d, t) || e && !a(e, t) ? e : t, 0)) && c[t]
              })(o, s, l, b);
              return h ? f(h) : u ? u() : void c(((e, a, r, d, f) => {
                var n = e[r];
                return "No satisfying version (" + t(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(n).map(e => e + " from " + n[e].from).join(", ")
              })(o, e, s, l, b))
            }),
            l = o((e, c, o, s, b, l) => {
              if (!d(c, o)) return i(e, o, l);
              var u, h = ((e, t, r) => {
                var d = r ? n(e[t]) : e[t];
                return Object.keys(d).reduce((e, t) => !e || !d[e].loaded && a(e, t) ? t : e, 0)
              })(c, o, s);
              return r(b, h) || (u = ((e, a, r, d) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + t(d) + ")")(c, o, h, b), "undefined" != typeof console && console.warn && console.warn(u)), f(c[o][h])
            }),
            u = {},
            h = {
              2229: () => b("default", "react", !1, [1, 18, 2, 0], () => s.e(8431).then(() => () => s(8431))),
              1788: () => b("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([s.e(9587), s.e(8240)]).then(() => () => s(2841))),
              9623: () => b("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([s.e(5389), s.e(8429)]).then(() => () => s(5389))),
              1913: () => b("default", "react", !1, [1, 18, 2, 0], () => s.e(8659).then(() => () => s(8659))),
              3582: () => b("default", "framer-motion", !1, [1, 7, 5, 1], () => s.e(5912).then(() => () => s(5912))),
              4572: () => b("default", "clsx", !1, [1, 2, 1, 1], () => s.e(439).then(() => () => s(439))),
              5587: () => b("default", "usehooks-ts", !1, [1, 2, 7, 2], () => s.e(2562).then(() => () => s(2562))),
              5966: () => b("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([s.e(450), s.e(9757)]).then(() => () => s(9757))),
              8429: () => l("default", "react-dom", !1, [1, 18, 2, 0], () => s.e(1098).then(() => () => s(1098)))
            },
            p = {
              2229: [2229],
              5811: [1788, 9623],
              8429: [8429],
              9105: [1913, 3582, 4572, 5587, 5966]
            },
            m = {};
          s.f.consumes = (e, a) => {
            s.o(p, e) && p[e].forEach(e => {
              if (s.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var t = a => {
                  u[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                m[e] = !0;
                var r = a => {
                  delete u[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var d = h[e]();
                  d.then ? a.push(u[e] = d.then(t).catch(r)) : t(d)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            s.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                9105: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = s.miniCssF(e),
                  d = s.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (n = t[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (d === e || d === a)) return n
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var n;
                      if ((d = (n = f[r]).getAttribute("data-href")) === e || d === a) return n
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", s.nc && (f.nonce = s.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var n = t && t.type,
                        c = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + c + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = n, o.request = c, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            7060: 0
          };
          s.f.j = (a, t) => {
            var r = s.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(22|84)29$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var f = s.p + s.u(a),
                n = new Error;
              s.l(f, t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", n.name = "ChunkLoadError", n.type = d, n.request = f, r[1](n)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, n, c] = t,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in n) s.o(n, r) && (s.m[r] = n[r]);
                c && c(s)
              }
              for (a && a(t); o < f.length; o++) d = f[o], s.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s(3032), s(5819)
      })())
    }
  }
});