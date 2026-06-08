try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b81cde56-da79-4623-81c4-c065f8736bef", e._sentryDebugIdIdentifier = "sentry-dbid-b81cde56-da79-4623-81c4-c065f8736bef")
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
        var e, a, n, o, f, d, c = {
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
                var f = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + f
              };
              Number.isInteger
            },
            58639(e, t, r) {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(9799), r.e(4577), r.e(9512), r.e(2497), r.e(831), r.e(5248), r.e(2738), r.e(3082), r.e(6416), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(5966), r.e(7497), r.e(7759), r.e(2285), r.e(1716), r.e(4315)]).then(() => () => r(54315)),
                  "./index": () => Promise.all([r.e(9799), r.e(4577), r.e(9512), r.e(2497), r.e(831), r.e(5248), r.e(2738), r.e(3082), r.e(6416), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(5966), r.e(7497), r.e(7759), r.e(2285), r.e(1716), r.e(6721)]).then(() => () => r(26721)),
                  "./site-routes/Bully": () => Promise.all([r.e(9799), r.e(4577), r.e(9512), r.e(2497), r.e(831), r.e(5248), r.e(2738), r.e(3082), r.e(6416), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(5966), r.e(7497), r.e(7759), r.e(2285), r.e(1716), r.e(9781), r.e(239)]).then(() => () => r(20239)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(9799), r.e(4577), r.e(9512), r.e(2497), r.e(831), r.e(5248), r.e(2738), r.e(3082), r.e(6416), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(5966), r.e(7497), r.e(7759), r.e(2285), r.e(1716), r.e(9781), r.e(7047)]).then(() => () => r(17047)),
                  "./tina": () => Promise.all([r.e(9799), r.e(4577), r.e(9512), r.e(2497), r.e(831), r.e(5248), r.e(2738), r.e(3082), r.e(6416), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(5966), r.e(7497), r.e(7759), r.e(2285), r.e(1716), r.e(9781)]).then(() => () => r(29781))
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
          for (var f = 2 & r && t;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = a(f)) Object.getOwnPropertyNames(f).forEach(e => o[e] = () => t[e]);
          return o.default = () => t, s.d(n, o), n
        }, s.d = (e, t) => {
          for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce((t, r) => (s.f[r](e, t), t), [])), s.u = e => "js/" + {
          162: "f5b0a673315e3cf1570740b8d980a7e3",
          239: "8c7aab37c029b9d49e122a81224d9f45",
          331: "caf7ec65e7ac4deca86b2712faf68e25",
          565: "d179070479f9b0f31493a1483d7d367b",
          622: "57c35d8e612a6dab9c92df7b243bcd9f",
          784: "29e1d1f34ebbed7be6b8c9021b2c1c57",
          799: "ff16f1c117deda049b5aa37c6a3bfb92",
          831: "b208cd419434cb75df428bf074de7846",
          1411: "c79a063bd1eb21cad82a0e0729daaa28",
          1716: "a6cfaab490a862d1ed0bd31afc598864",
          2497: "e29cb97496d1f79440ac71ed14534f66",
          2581: "65537586f427058dd135a936943357e4",
          2738: "cc8867c93d82fd429001142487325ba2",
          2837: "6b5cd307cd04354f3cfc5e03b0adc289",
          3180: "582ee093c20a388bc33713c30d1cd77b",
          3320: "0f1bf900b697a043d038563ade9a2fec",
          3769: "069fddfc08bf3352c3b3121078a66b2b",
          3792: "80e43ab1a45a2a321f7b25466a548e4e",
          3939: "fe7cb75431448bc59a3529b5c2f9d39d",
          4144: "4d4cff4f35ce23122ae35f42670324e3",
          4235: "48ab5d8cee35d7f72ddb4f993ff5bd6c",
          4269: "9d457b28a6908980695638436dae4531",
          4315: "7f04caa7843f830965f626ad5995c665",
          4514: "ef94063b154bfc5399e3bfaae3b69c31",
          4572: "d95cdef34d72929251c33dbda043e959",
          4577: "f05ef5b5ef3aa3c3eaab01fd67ef5030",
          4756: "8100d8d7bfd491976f13d66446880ca8",
          4921: "a92ba5658df0ab30b2c7c6a6ecdeb30e",
          4974: "5a2f71c0af5e538204e5ab9f4d223f58",
          5038: "4237b17749992036fb27503a74284666",
          5248: "40dac0fe8a010f01f7e6f7f02cd2dbac",
          5389: "040d37ec1e55cd83a592ba9f0b889f6d",
          5864: "7b428021669964bdc4ecf1ecd6a403d6",
          5966: "4ff5bca4e4792209b6cda2ca244500f3",
          5997: "9cc969f9d4a0684be27433690e552d71",
          6043: "98217c63665a58a4724f56cb8e859977",
          6150: "5e09572bcbf87e7519f63d3cf108e07d",
          6320: "1a77f6986aa88f4098e72dbc9b5e56c8",
          6338: "8d8dc04be33b4380549b8f0586910d1e",
          6501: "f748f72e1b6343b4127c166e904569cc",
          6583: "ccd79b21dee33524f0589081b0c5d9a4",
          6663: "79a048016364a077ba277042b700de11",
          6721: "04cd6cf41b000e7e1c21c4e224d0b783",
          7047: "27d500bbc11b5fd0d2e0bb9354fdf486",
          7196: "a85b426f0d3b903f1b2e641d0a0b0d07",
          7759: "6d8e8328e4e4e362fcbeeaf2e3da42ba",
          8349: "995e133581414aa304e25b1163c3590c",
          8403: "16de79baa4f0790a970d2120dd3d2f92",
          8915: "db5917d5f877b698b517cc6550a880b6",
          9447: "a13d58995592cce7921b954d00d23fbf",
          9512: "da3f02464bf4bab2bc0397b06c8d80e5",
          9764: "da3d7626e0affd225ffc96898e836e5f",
          9781: "d2a8116e8a71782990574cd5d90cc45e",
          9793: "9eb9d9e7c5e6daeda1c205744fb22612",
          9799: "8b1e35716298c645bc4be89d197cd275",
          9947: "f899e9bb1d45cd2b9979cd6f49ba9c4f"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          239: "52e55b769351b6e3f1602fe5d2baacd1",
          1716: "7df7a0a610c52c4f1466f086e0674990",
          2738: "caaa4f06e76eeeb5a031cda13083f710",
          3769: "82b8e41eb90eae7db3adfb9fff54d045",
          4315: "d83619baa06e27bdead7940eaf19e121",
          4852: "d5fbf956683b6a3bd196cbced86d6be7",
          6150: "82b8e41eb90eae7db3adfb9fff54d045",
          6338: "b3313fda99862d6d64bd2a829ae71ca3",
          7047: "52e55b769351b6e3f1602fe5d2baacd1",
          7196: "01fd4a1b7dcafeb5ed7fca9004268171"
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
            var f, d;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), i = 0; i < c.length; i++) {
                var l = c[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + r) {
                  f = l;
                  break
                }
              }
            f || (d = !0, (f = document.createElement("script")).charset = "utf-8", s.nc && f.setAttribute("nonce", s.nc), f.setAttribute("data-webpack", o + r), f.src = e), n[e] = [t];
            var u = (t, r) => {
                f.onerror = f.onload = null, clearTimeout(b);
                var a = n[e];
                if (delete n[e], f.parentNode && f.parentNode.removeChild(f), a && a.forEach(e => e(r)), t) return t(r)
              },
              b = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = u.bind(null, f.onerror), f.onload = u.bind(null, f.onload), d && document.head.appendChild(f)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          1716: [31879],
          9781: [17523]
        }, d = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, t) => {
          s.o(f, e) && f[e].forEach(e => {
            var r = s.R;
            r || (r = []);
            var a = d[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), s.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, f, d, c) => {
                  try {
                    var i = e(r, o);
                    if (!i || !i.then) return d(i, f, c);
                    var s = i.then(e => d(e, f), n);
                    if (!c) return s;
                    t.push(a.p = s)
                  } catch (e) {
                    n(e)
                  }
                },
                f = (e, t, n) => o(t.get, a[1], r, 0, c, n),
                c = t => {
                  a.p = 1, s.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(s, a[2], 0, 0, (e, t, r) => e ? o(s.I, a[0], 0, e, f, r) : n(), 1)
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
                f = "@rockstargames/sites-legacy",
                d = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    d = n[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : f > d.from)) && (n[t] = {
                    get: r,
                    from: f,
                    eager: !!a
                  })
                },
                c = [];
              return "default" === r && (d("@rsgweb/locale-tools", "0.0.0", () => Promise.all([s.e(4577), s.e(9512), s.e(2497), s.e(3082), s.e(8403)]).then(() => () => s(68403))), d("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([s.e(3082), s.e(6416), s.e(3331), s.e(2909), s.e(2199), s.e(7497), s.e(7759), s.e(7196)]).then(() => () => s(84238))), d("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([s.e(5248), s.e(3082), s.e(2909), s.e(2199), s.e(7497), s.e(2285), s.e(4852), s.e(3792)]).then(() => () => s(83792))), d("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([s.e(9799), s.e(5864), s.e(6583), s.e(3082), s.e(6416), s.e(3331), s.e(2909), s.e(5997), s.e(799)]).then(() => () => s(90799))), d("@rsgweb/tina", "0.0.0", () => Promise.all([s.e(9799), s.e(4577), s.e(831), s.e(8349), s.e(3082), s.e(3331), s.e(2909), s.e(4017), s.e(9653), s.e(2199), s.e(5966), s.e(6150)]).then(() => () => s(60620))), d("@rsgweb/utils", "0.0.0-development", () => Promise.all([s.e(9799), s.e(4577), s.e(9512), s.e(5864), s.e(565), s.e(3082), s.e(6416), s.e(2909), s.e(5997), s.e(7122), s.e(3320)]).then(() => () => s(83320))), d("clsx", "2.1.1", () => s.e(4921).then(() => () => s(4921))), d("focus-trap-react", "10.3.1", () => Promise.all([s.e(4514), s.e(3082), s.e(9653)]).then(() => () => s(44514))), d("framer-motion", "12.38.0", () => Promise.all([s.e(6663), s.e(3082), s.e(9793)]).then(() => () => s(36663))), d("graphql", "16.13.2", () => s.e(9764).then(() => () => s(29764))), d("prop-types", "15.8.1", () => s.e(331).then(() => () => s(60331))), d("react-dom", "18.3.1", () => Promise.all([s.e(162), s.e(3082)]).then(() => () => s(30162))), d("react-intersection-observer", "9.16.0", () => Promise.all([s.e(3082), s.e(6320)]).then(() => () => s(26320))), d("react-router-dom", "6.30.3", () => Promise.all([s.e(4269), s.e(3082), s.e(4017)]).then(() => () => s(74269))), d("react", "18.3.1", () => s.e(2581).then(() => () => s(22581))), (() => {
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
                for (var n = 1, o = 1; o < e.length; o++) n--, a += "u" == (typeof(d = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, d);
                return a
              }
              var f = [];
              for (o = 1; o < e.length; o++) {
                var d = e[o];
                f.push(0 === d ? "not(" + c() + ")" : 1 === d ? "(" + c() + " || " + c() + ")" : 2 === d ? f.pop() + " " + f.pop() : t(d))
              }
              return c();

              function c() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var f = 0, d = 1, c = !0;; d++, f++) {
                  var i, s, l = d < t.length ? (typeof t[d])[0] : "";
                  if (f >= a.length || "o" == (s = (typeof(i = a[f]))[0])) return !c || ("u" == l ? d > n && !o : "" == l != o);
                  if ("u" == s) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == s)
                      if (d <= n) {
                        if (i != t[d]) return !1
                      } else {
                        if (o ? i > t[d] : i < t[d]) return !1;
                        i != t[d] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || d <= n) return !1;
                    c = !1, d--
                  } else {
                    if (d <= n || s < l != o) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, d--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (f = 1; f < t.length; f++) {
                var h = t[f];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? r(h, a) : !b())
              }
              return !!b()
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
                  var f = r[a],
                    d = (typeof f)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && n != f) return n < f;
                  a++
                }
              })(t, r) ? r : t, 0)
            },
            n = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            o = (e => function(t, r, a, n, o) {
              var f = s.I(t);
              return f && f.then && !a ? f.then(e.bind(e, t, s.S[t], r, !1, n, o)) : e(t, s.S[t], r, a, n, o)
            })((e, o, f, d, c, i) => {
              if (!((e, t) => e && s.o(e, t))(o, f)) return n(e, f, i);
              var l, u, b = a(o, f, d);
              return r(c, b) || (u = ((e, r, a, n) => "Unsatisfied version " + a + " from " + (a && e[r][a].from) + " of shared singleton module " + r + " (required " + t(n) + ")")(o, f, b, c), "undefined" != typeof console && console.warn && console.warn(u)), (l = o[f][b]).loaded = 1, l.get()
            }),
            f = {},
            d = {
              93082: () => o("default", "react", !1, [0], () => s.e(2581).then(() => () => s(22581))),
              36416: () => o("default", "react-router-dom", !1, [0], () => Promise.all([s.e(4269), s.e(4017)]).then(() => () => s(74269))),
              13331: () => o("default", "@rsgweb/utils", !1, [0], () => Promise.all([s.e(9799), s.e(4577), s.e(9512), s.e(5864), s.e(565), s.e(6416), s.e(5997), s.e(6043)]).then(() => () => s(83320))),
              42909: () => o("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([s.e(4577), s.e(9512), s.e(2497), s.e(784)]).then(() => () => s(68403))),
              84017: () => o("default", "react-dom", !1, [1, 18, 2, 0], () => s.e(162).then(() => () => s(30162))),
              89653: () => o("default", "prop-types", !1, [1, 15, 8, 1], () => s.e(331).then(() => () => s(60331))),
              82199: () => o("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([s.e(9799), s.e(5864), s.e(6583), s.e(6416), s.e(3331), s.e(5997), s.e(3180)]).then(() => () => s(90799))),
              13517: () => o("default", "framer-motion", !1, [1, 12, 38, 0], () => s.e(6663).then(() => () => s(36663))),
              17301: () => o("default", "@rsgweb/tina", !1, [0], () => Promise.all([s.e(9799), s.e(4577), s.e(831), s.e(8349), s.e(3331), s.e(4017), s.e(9653), s.e(5966), s.e(3769)]).then(() => () => s(60620))),
              81270: () => o("default", "clsx", !1, [1, 2, 1, 1], () => s.e(4921).then(() => () => s(4921))),
              42285: () => o("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => s.e(3939).then(() => () => s(26320))),
              10475: () => o("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([s.e(4852), s.e(1411)]).then(() => () => s(83792))),
              79955: () => o("default", "focus-trap-react", !1, [1, 10, 3, 1], () => s.e(4514).then(() => () => s(44514))),
              97819: () => o("default", "@rsgweb/modules-core-hero", !1, [0], () => s.e(6338).then(() => () => s(84238))),
              67122: () => o("default", "graphql", !1, [1, 16, 13, 2], () => s.e(9764).then(() => () => s(29764)))
            },
            c = {
              1716: [10475, 79955, 97819],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              4017: [84017],
              6043: [67122],
              6416: [36416],
              7122: [67122],
              7497: [13517, 17301],
              7759: [81270],
              9653: [89653]
            },
            i = {};
          s.f.consumes = (e, t) => {
            s.o(c, e) && c[e].forEach(e => {
              if (s.o(f, e)) return t.push(f[e]);
              if (!i[e]) {
                var r = t => {
                  f[e] = 0, s.m[e] = r => {
                    delete s.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete f[e], s.m[e] = r => {
                    throw delete s.c[e], t
                  }
                };
                try {
                  var n = d[e]();
                  n.then ? t.push(f[e] = n.then(r).catch(a)) : r(n)
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
                1716: 1,
                2738: 1,
                3769: 1,
                4315: 1,
                4852: 1,
                6150: 1,
                6338: 1,
                7047: 1,
                7196: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var a = s.miniCssF(e),
                  n = s.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (f = r[a]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (n === e || n === t)) return f
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var f;
                      if ((n = (f = o[a]).getAttribute("data-href")) === e || n === t) return f
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", s.nc && (o.nonce = s.nc), o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var f = r && r.type,
                        d = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + d + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = f, c.request = d, o.parentNode && o.parentNode.removeChild(o), n(c)
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
                f = new Error;
              s.l(o, r => {
                if (s.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  f.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", f.name = "ChunkLoadError", f.type = n, f.request = o, a[1](f)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, [o, f, d] = r,
                c = 0;
              if (o.some(t => 0 !== e[t])) {
                for (a in f) s.o(f, a) && (s.m[a] = f[a]);
                d && d(s)
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