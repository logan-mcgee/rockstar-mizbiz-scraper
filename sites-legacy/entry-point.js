try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "326cc979-9b21-4291-83f7-d7dc5b45d948", e._sentryDebugIdIdentifier = "sentry-dbid-326cc979-9b21-4291-83f7-d7dc5b45d948")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, t) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(t) {
        r[t] = e[t]
      })
    }],
    execute: function() {
      e((() => {
        var e, a, n, o, d, f, c = {
            20154(e, t, r) {
              (0, r(89160).w)(1)
            },
            89160(e, t, r) {
              const a = r(51908).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            35649(e, t, r) {
              r(20154)
            },
            51908(e, t, r) {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var d = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            58639(e, t, r) {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(3279), r.e(2194), r.e(2497), r.e(5201), r.e(5248), r.e(8804), r.e(3082), r.e(6416), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(6589), r.e(5847), r.e(7497), r.e(7759), r.e(2285), r.e(5963), r.e(4315)]).then(() => () => r(54315)),
                  "./index": () => Promise.all([r.e(3279), r.e(2194), r.e(2497), r.e(5201), r.e(5248), r.e(8804), r.e(3082), r.e(6416), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(6589), r.e(5847), r.e(7497), r.e(7759), r.e(2285), r.e(5963), r.e(6721)]).then(() => () => r(26721)),
                  "./site-routes/Bully": () => Promise.all([r.e(3279), r.e(2194), r.e(2497), r.e(5201), r.e(5248), r.e(8804), r.e(3082), r.e(6416), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(6589), r.e(5847), r.e(7497), r.e(7759), r.e(2285), r.e(5963), r.e(9781), r.e(239)]).then(() => () => r(20239)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(3279), r.e(2194), r.e(2497), r.e(5201), r.e(5248), r.e(8804), r.e(3082), r.e(6416), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(6589), r.e(5847), r.e(7497), r.e(7759), r.e(2285), r.e(5963), r.e(9781), r.e(7047)]).then(() => () => r(17047)),
                  "./tina": () => Promise.all([r.e(3279), r.e(2194), r.e(2497), r.e(5201), r.e(5248), r.e(8804), r.e(3082), r.e(6416), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(6589), r.e(5847), r.e(7497), r.e(7759), r.e(2285), r.e(5963), r.e(9781)]).then(() => () => r(29781))
                },
                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      n = r.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => n,
                init: () => o
              })
            },
            25136(e) {
              "use strict";
              e.exports = r
            }
          },
          i = {};

        function s(e) {
          var t = i[e];
          if (void 0 !== t) return t.exports;
          var r = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
        }
        return s.m = c, s.c = i, s.y = t, s.amdO = {}, s.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return s.d(t, {
            a: t
          }), t
        }, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var n = Object.create(null);
          s.r(n);
          var o = {};
          e = e || [null, a({}), a([]), a(a)];
          for (var d = 2 & r && t;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = a(d)) Object.getOwnPropertyNames(d).forEach(e => o[e] = () => t[e]);
          return o.default = () => t, s.d(n, o), n
        }, s.d = (e, t) => {
          for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce((t, r) => (s.f[r](e, t), t), [])), s.u = e => "js/" + {
          8: "d6156f2ada032ad29959ac8dc047328b",
          104: "43470dd8bbfb3fcce40f9b5970f87d65",
          162: "1342ab3ecd230ba9e5cf5b3ae6ffd588",
          239: "5140b62f2182e2dfb9ea8e854285b9d0",
          331: "08051933c48dba64d105966adcee9765",
          609: "7a8c06efa3a3e60fcbae88764635d125",
          846: "9936d1e2bf91a64292cb27527304c411",
          1061: "c1645712437a511a7a5deb29e52e6726",
          1411: "0e3c5277c00e6a9adb51146a1885f34b",
          1696: "ae9cb5b8ec585c26ee1a1fc9d6ff34c5",
          2194: "8db389fd2582f9ac57a64a8ebb9f417c",
          2497: "03a69c8cd34f8e1a8841559d819addb8",
          2581: "0e4bccf2e1180708b7f24278b66a2143",
          2592: "e21d6dee0003472d87b85bff0bd55e21",
          2730: "1387546bceed8cc7249bb9536e3056da",
          2993: "d62c1e752b145afd1d35848c411cf5ff",
          3031: "ddf390b0574dffb34f6586dc1e21f2c3",
          3279: "36a98349bac0bc780fbe7c970c9838fd",
          3718: "198a3fed6a5baf631787308f659af02e",
          3769: "62700a7d81aea81f77a6f1c483bf8c2b",
          3792: "917cddaa0c94e93c3d03fbabf66b7dfb",
          3922: "b7a463d40ee1d21e8beb9b04ed1e89d9",
          3939: "df209f603b7a8e9aeb0fff462c3e8358",
          4221: "3600e41f002736e8042064e6c3c63598",
          4269: "8a5328fd179c7df66d76a221fe653cc8",
          4315: "b579fea7af2c340d2677ddd6216f1840",
          4388: "466ac8d653cac7b7150742d500459b4e",
          4498: "66daf7a6288b9b210566bc8a4217e3ab",
          4514: "8e3cf5e56cda57308a97addc8b7a813f",
          4756: "46e9bb2f7b5e738b01f999869f60cb09",
          4921: "a1976a52a3ec2b099c39bbfa8cc33b93",
          5201: "fe4a0e0d94feb54950b4d9dd8a7a3b22",
          5248: "af44e1d5f03ae79d43c77d08aab65e93",
          5509: "9a560c32ab0372b79d581e86189ca657",
          5847: "4286e707c055e03cff134f56f564d59b",
          5880: "1a84e73f5103d1fbe2ad5bea56d53b84",
          5963: "9c35fb325b12664c273fd59f21afca59",
          5997: "c6e6778dfe2f2e98c5341db26272ac7a",
          6087: "304b15070e7c3eb28015fbaa41726377",
          6150: "47845567b67b727c2f5796c846f66a45",
          6320: "02583155ef476198fc0cae33bfa63e77",
          6338: "534a7bf7d9daa9f40e60640509913d59",
          6583: "675816577579d37ce03fe59319549216",
          6589: "8dfd5e06a7d7b352ce6b47015ec3bcc7",
          6602: "2aa7ead1769f73607db48ebdea0bd5fb",
          6663: "8c1602f84420c23f58a3f0895bde445f",
          6721: "6cd1cd1dd415b97fd228de4763359e18",
          7047: "32d9132eb9bb6e44c8df26759267efa4",
          7095: "7f92fa1d487bd1d9341fe415eb9773f2",
          7196: "7c478b48719e0a0528461b98eceac352",
          7627: "f8fd7e1d16af541b52e0d79a77457706",
          7759: "aa0d7d9d3fd1fd0e264a5c6b3054f6ca",
          8804: "73683749188e48d72bfa3cdca9e08476",
          9183: "a30b27abd357cf2d2847f5e5a461d261",
          9514: "031c6f1bff293ff5f3c932181008362b",
          9764: "d19cd713783720b7b41e4744ca38d416",
          9781: "3ba343062eaa24e2aa15533456a437c2",
          9793: "95d0231d6cb7c76b990c3d0d9be84782"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          239: "52e55b769351b6e3f1602fe5d2baacd1",
          3769: "82b8e41eb90eae7db3adfb9fff54d045",
          4315: "d83619baa06e27bdead7940eaf19e121",
          4852: "d5fbf956683b6a3bd196cbced86d6be7",
          5963: "54666cc965b0503cf21cde65c31b06a3",
          6150: "82b8e41eb90eae7db3adfb9fff54d045",
          6338: "b3313fda99862d6d64bd2a829ae71ca3",
          7047: "52e55b769351b6e3f1602fe5d2baacd1",
          7196: "01fd4a1b7dcafeb5ed7fca9004268171",
          8804: "0a661af9947c5e5e6ce258569564b99d"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, o = "@rockstargames/sites-legacy:", s.l = (e, t, r, a) => {
          if (n[e]) n[e].push(t);
          else {
            var d, f;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), i = 0; i < c.length; i++) {
                var l = c[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + r) {
                  d = l;
                  break
                }
              }
            d || (f = !0, (d = document.createElement("script")).charset = "utf-8", s.nc && d.setAttribute("nonce", s.nc), d.setAttribute("data-webpack", o + r), d.src = e), n[e] = [t];
            var b = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var a = n[e];
                if (delete n[e], d.parentNode && d.parentNode.removeChild(d), a && a.forEach(e => e(r)), t) return t(r)
              },
              u = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = b.bind(null, d.onerror), d.onload = b.bind(null, d.onload), f && document.head.appendChild(d)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          5963: [31879],
          9781: [17523]
        }, f = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, t) => {
          s.o(d, e) && d[e].forEach(e => {
            var r = s.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), s.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, d, f, c) => {
                  try {
                    var i = e(r, o);
                    if (!i || !i.then) return f(i, d, c);
                    var s = i.then(e => f(e, d), n);
                    if (!c) return s;
                    t.push(a.p = s)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => o(t.get, a[1], r, 0, c, n),
                c = t => {
                  a.p = 1, s.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(s, a[2], 0, 0, (e, t, r) => e ? o(s.I, a[0], 0, e, d, r) : n(), 1)
            }
          })
        }, (() => {
          s.S = {};
          var e = {},
            t = {};
          s.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              s.o(s.S, r) || (s.S[r] = {});
              var o = s.S[r],
                d = "@rockstargames/sites-legacy",
                f = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    f = n[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (n[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                c = [];
              return "default" === r && (f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([s.e(3279), s.e(2194), s.e(2497), s.e(1696), s.e(3082), s.e(6602)]).then(() => () => s(76602))), f("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([s.e(3082), s.e(6416), s.e(3331), s.e(2909), s.e(2199), s.e(7497), s.e(7759), s.e(7196)]).then(() => () => s(84238))), f("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([s.e(5248), s.e(3082), s.e(2909), s.e(2199), s.e(7497), s.e(2285), s.e(4852), s.e(3792)]).then(() => () => s(83792))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([s.e(3279), s.e(7095), s.e(6583), s.e(3082), s.e(6416), s.e(3331), s.e(2909), s.e(5997), s.e(8)]).then(() => () => s(90799))), f("@rsgweb/tina", "0.0.0", () => Promise.all([s.e(3279), s.e(2194), s.e(5201), s.e(5880), s.e(9514), s.e(3082), s.e(3331), s.e(2909), s.e(4017), s.e(9653), s.e(2199), s.e(6589), s.e(6150)]).then(() => () => s(60620))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([s.e(3279), s.e(2194), s.e(7095), s.e(5880), s.e(104), s.e(3082), s.e(6416), s.e(2909), s.e(5847), s.e(5997), s.e(7122), s.e(5509)]).then(() => () => s(55509))), f("clsx", "2.1.1", () => s.e(4921).then(() => () => s(4921))), f("focus-trap-react", "10.3.1", () => Promise.all([s.e(4514), s.e(3082), s.e(9653)]).then(() => () => s(44514))), f("framer-motion", "12.38.0", () => Promise.all([s.e(6663), s.e(3082), s.e(9793)]).then(() => () => s(36663))), f("graphql", "16.13.2", () => s.e(9764).then(() => () => s(29764))), f("prop-types", "15.8.1", () => s.e(331).then(() => () => s(60331))), f("react-dom", "18.3.1", () => Promise.all([s.e(162), s.e(3082)]).then(() => () => s(30162))), f("react-intersection-observer", "9.16.0", () => Promise.all([s.e(3082), s.e(6320)]).then(() => () => s(26320))), f("react-router-dom", "6.30.3", () => Promise.all([s.e(4269), s.e(3082), s.e(4017)]).then(() => () => s(74269))), f("react", "18.3.1", () => s.e(2581).then(() => () => s(22581))), (() => {
                var e = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var t = s(25136);
                  if (!t) return;
                  var n = e => e && e.init && e.init(s.S[r], a);
                  if (t.then) return c.push(t.then(n, e));
                  var o = n(t);
                  if (o && o.then) return c.push(o.catch(e))
                } catch (t) {
                  e(t)
                }
              })()), c.length ? e[r] = Promise.all(c).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var t = s.g.document;
          if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = e => {
              var r = e[0],
                a = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                a += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var n = 1, o = 1; o < e.length; o++) n--, a += "u" == (typeof(f = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, f);
                return a
              }
              var d = [];
              for (o = 1; o < e.length; o++) {
                var f = e[o];
                d.push(0 === f ? "not(" + c() + ")" : 1 === f ? "(" + c() + " || " + c() + ")" : 2 === f ? d.pop() + " " + d.pop() : t(f))
              }
              return c();

              function c() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var d = 0, f = 1, c = !0;; f++, d++) {
                  var i, s, l = f < t.length ? (typeof t[f])[0] : "";
                  if (d >= a.length || "o" == (s = (typeof(i = a[d]))[0])) return !c || ("u" == l ? f > n && !o : "" == l != o);
                  if ("u" == s) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == s)
                      if (f <= n) {
                        if (i != t[f]) return !1
                      } else {
                        if (o ? i > t[f] : i < t[f]) return !1;
                        i != t[f] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || f <= n) return !1;
                    c = !1, f--
                  } else {
                    if (f <= n || s < l != o) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, f--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (d = 1; d < t.length; d++) {
                var h = t[d];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, a) : !u())
              }
              return !!u()
            },
            a = (t, r, a) => {
              var n = a ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(n).reduce((t, r) => !t || !n[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var d = r[a],
                    f = (typeof d)[0];
                  if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
                  if ("o" != o && "u" != o && n != d) return n < d;
                  a++
                }
              })(t, r) ? r : t, 0)
            },
            n = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            o = (e => function(t, r, a, n, o) {
              var d = s.I(t);
              return d && d.then && !a ? d.then(e.bind(e, t, s.S[t], r, !1, n, o)) : e(t, s.S[t], r, a, n, o)
            })((e, o, d, f, c, i) => {
              if (!((e, t) => e && s.o(e, t))(o, d)) return n(e, d, i);
              var l, b, u = a(o, d, f);
              return r(c, u) || (b = ((e, r, a, n) => "Unsatisfied version " + a + " from " + (a && e[r][a].from) + " of shared singleton module " + r + " (required " + t(n) + ")")(o, d, u, c), "undefined" != typeof console && console.warn && console.warn(b)), (l = o[d][u]).loaded = 1, l.get()
            }),
            d = {},
            f = {
              93082: () => o("default", "react", !1, [0], () => s.e(2581).then(() => () => s(22581))),
              36416: () => o("default", "react-router-dom", !1, [0], () => Promise.all([s.e(4269), s.e(4017)]).then(() => () => s(74269))),
              13331: () => o("default", "@rsgweb/utils", !1, [0], () => Promise.all([s.e(3279), s.e(2194), s.e(7095), s.e(5880), s.e(104), s.e(6416), s.e(5847), s.e(5997), s.e(3718)]).then(() => () => s(55509))),
              42909: () => o("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([s.e(3279), s.e(2194), s.e(2497), s.e(1696), s.e(4221)]).then(() => () => s(76602))),
              84017: () => o("default", "react-dom", !1, [1, 18, 2, 0], () => s.e(162).then(() => () => s(30162))),
              89653: () => o("default", "prop-types", !1, [1, 15, 8, 1], () => s.e(331).then(() => () => s(60331))),
              82199: () => o("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([s.e(3279), s.e(7095), s.e(6583), s.e(6416), s.e(3331), s.e(5997), s.e(7627)]).then(() => () => s(90799))),
              13517: () => o("default", "framer-motion", !1, [1, 12, 38, 0], () => s.e(6663).then(() => () => s(36663))),
              17301: () => o("default", "@rsgweb/tina", !1, [0], () => Promise.all([s.e(3279), s.e(2194), s.e(5201), s.e(5880), s.e(9514), s.e(3331), s.e(4017), s.e(9653), s.e(6589), s.e(3769)]).then(() => () => s(60620))),
              81270: () => o("default", "clsx", !1, [1, 2, 1, 1], () => s.e(4921).then(() => () => s(4921))),
              42285: () => o("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => s.e(3939).then(() => () => s(26320))),
              10475: () => o("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([s.e(4852), s.e(1411)]).then(() => () => s(83792))),
              79955: () => o("default", "focus-trap-react", !1, [1, 10, 3, 1], () => s.e(4514).then(() => () => s(44514))),
              97819: () => o("default", "@rsgweb/modules-core-hero", !1, [0], () => s.e(6338).then(() => () => s(84238))),
              67122: () => o("default", "graphql", !1, [1, 16, 13, 2], () => s.e(9764).then(() => () => s(29764)))
            },
            c = {
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              3718: [67122],
              4017: [84017],
              5963: [10475, 79955, 97819],
              6416: [36416],
              7122: [67122],
              7497: [13517, 17301],
              7759: [81270],
              9653: [89653]
            },
            i = {};
          s.f.consumes = (e, t) => {
            s.o(c, e) && c[e].forEach(e => {
              if (s.o(d, e)) return t.push(d[e]);
              if (!i[e]) {
                var r = t => {
                  d[e] = 0, s.m[e] = r => {
                    delete s.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete d[e], s.m[e] = r => {
                    throw delete s.c[e], t
                  }
                };
                try {
                  var n = f[e]();
                  n.then ? t.push(d[e] = n.then(r).catch(a)) : r(n)
                } catch (e) {
                  a(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            s.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                239: 1,
                3769: 1,
                4315: 1,
                4852: 1,
                5963: 1,
                6150: 1,
                6338: 1,
                7047: 1,
                7196: 1,
                8804: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var a = s.miniCssF(e),
                  n = s.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (n === e || n === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var d;
                      if ((n = (d = o[a]).getAttribute("data-href")) === e || n === t) return d
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", s.nc && (o.nonce = s.nc), o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var d = r && r.type,
                        f = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + f + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = f, o.parentNode && o.parentNode.removeChild(o), n(c)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, n, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          s.f.j = (t, r) => {
            var a = s.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(2(199|285|909)|(308|485|712)2|3331|4017|6416|7497|9653)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise((r, n) => a = e[t] = [r, n]);
              r.push(a[2] = n);
              var o = s.p + s.u(t),
                d = new Error;
              s.l(o, r => {
                if (s.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", d.name = "ChunkLoadError", d.type = n, d.request = o, a[1](d)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, [o, d, f] = r,
                c = 0;
              if (o.some(t => 0 !== e[t])) {
                for (a in d) s.o(d, a) && (s.m[a] = d[a]);
                f && f(s)
              }
              for (t && t(r); c < o.length; c++) n = o[c], s.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), s.nc = void 0, s(35649), s(58639)
      })())
    }
  }
});