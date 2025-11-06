try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "178c1ede-e19f-42b2-83d9-06e5b7be4d08", e._sentryDebugIdIdentifier = "sentry-dbid-178c1ede-e19f-42b2-83d9-06e5b7be4d08")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, f, c, d, n, o = {
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
                  "./index": () => Promise.all([t.e(4910), t.e(7662), t.e(2229), t.e(5811), t.e(1657)]).then((() => () => t(9249)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => c
              })
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, c = r.length; f !== a && c >= 0;) "/" === r[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + d
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

        function b(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, b), t.loaded = !0, t.exports
        }
        return b.m = o, b.c = i, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          b.r(f);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & t && a;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, b.d(f, c), f
        }, b.d = (e, a) => {
          for (var t in a) b.o(a, t) && !b.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, t) => (b.f[t](e, a), a)), [])), b.u = e => "js/" + {
          131: "d9f00539b232ec9981c5f0afac08080a",
          278: "81ca2fd0a6f5b07a431b9b23b9c47532",
          299: "e1d1c77be92a8e3fbd511be4d44fc3d5",
          314: "4f29f46d52d67e01492d69f2ec13ec8f",
          439: "57c03884b6bccb06ae2a8993b2959dfe",
          450: "8f1a61c2e5fa4792a32555e7dac1dc07",
          662: "daec86f5c1183ac788798917254d9b9b",
          824: "efc37b6d5439ea6503d718861024b0c9",
          907: "46109f9b8712a60855d2c62d8bffa65f",
          1054: "8b645691d1b5196399d45e2eb3bc1b61",
          1242: "f209a0cc227c3bca68c08921522c5d4b",
          1657: "0bca215297112b9142b8d4bcb69396f1",
          1822: "98fd50174fd810fbb72f86591cea5c35",
          1868: "6b0b1ab0f5133c948f6e8ec02359298f",
          2156: "1132060063105044779ffe0d41b1bf9a",
          2171: "00bec642b5f71abe875bce2cd99b0027",
          2221: "e621eb764e7cac0dac84a2132ed23932",
          2243: "9edb46ea459157356cdf79158d9bb35f",
          2306: "e7b7f5d8b661c11df3dab54a7e3aa462",
          2347: "12c1a14debd4db8317cf878d93e6b959",
          2365: "a4628112203a085c05289c0cf22d6627",
          2398: "b62e43211fc26b88423fe0fad714b5b5",
          2466: "fd44894bf83b731bd2725e872f9bc71d",
          2562: "9e4497ab82e2a12197e6b6e9e1f5d8ad",
          2642: "ffde4be848e5619d24c152e1d6d8900a",
          2678: "dabb5eca7600fe02c24804dff04e338e",
          2864: "f0bc6f7d5cf7b362ca7f6dd47e688bb7",
          3034: "bf349d48fbf06e4cd06e5d87c7a4fbd4",
          3197: "f89f3db79181bfb5ff63a7eecf6b73ff",
          3343: "df747e32a89c45247ce3cc8ff5d75916",
          3370: "0364d5f35771b51049e211608622310c",
          3475: "259bff44da1605c85fd4e7ec82e3b2d0",
          3486: "ced91a69c34d39f1679c5f0a5a0e6437",
          3697: "becbc096fa61a040cf864a95ccd6fd6c",
          3885: "0c33084bd820438080b8a573bfcf1de7",
          3941: "2c4eb6c09f05450a03a324b2bb9be94d",
          4011: "93cc35bdc0fb810b2e7ed1e0cc9c8eff",
          4528: "39c3b3538f7a4e2642f3b8c5679bac6a",
          4578: "02b5f8a2e67a0769427a5f8ecbe68c94",
          4621: "1b0b9d2d78f84424f0546f4657b22a08",
          4700: "af4c4398d0d2d4927e270f207c16a1db",
          4710: "9e2c11b1cb324fd6b0ab1c0150f244c4",
          4731: "ab57344ece6fd8c7a8c16094e077bb81",
          4799: "63ce1fe621afc74edc5f0d4826d3fda5",
          4851: "7ac9d34144fe1410d2aca44a374db368",
          4861: "3354597e7df9ac76ff8bb59882b32b6c",
          4910: "8b365abb5df7bcdd16725e4bf2999f01",
          4913: "2d700517cbef267eaa99b0f4b5199a47",
          5018: "be40e0fdf99decba23ef7bd33a4044aa",
          5233: "3c751544dbefc5d522a1f3310a4c2787",
          5259: "bc84354a6f2f18eafce8ffd59d11382c",
          5389: "707117761ac8f98b963ba4791919bdd4",
          5530: "5a0240435d1246cc857d00598ab9722f",
          5639: "396c3fe3d239223a07119f9d22da7946",
          5663: "e496a80a09caa5bde1af850cd52df963",
          5742: "37911cc4f1a0708698c8601d75062994",
          5811: "55fb6e7fdb03debac264682b634b9aae",
          5830: "26c08ed3d849dbef1ae1e4c7e0741f76",
          5832: "ac8dee06fb12b52a5c62dfb6e824c60a",
          5912: "2a432e7a6454493d30cfa8cfa7bd8e9e",
          6267: "b732d8af239d94aa5a7b51077e72129c",
          6280: "708d062b92f9f3246b2a495aa62060fb",
          6285: "41ee5a2b864e0d4e8b31c5ae18610dd4",
          6361: "4e3a7064b0a02f8b63d407bcaa6baebc",
          6664: "a0211f2dd79e74fe2ae1993bf7d66ad7",
          6879: "dd6f8394d11e34ef216b70b88902b235",
          6891: "ab2b6e794b85ce3c6c964b18e5c4286b",
          6997: "69ec2b95a8f184df2f0840be884cd70d",
          7010: "283b29fa86f5d3170d20d0560322901f",
          7073: "e7883db48b8f0e0b5e9c13bd30e45d7f",
          7436: "b86330555404306e2a762f4f316a2e89",
          7452: "16023c65d740863839042273bdeca70d",
          7453: "c23cc67f3e8a540f534b7bbc7e5dd36c",
          7662: "c817a8f50924a2be981e693f1b0dac07",
          7970: "e014f638364f3786a5b67df54540a4e9",
          8240: "5fecc756ed3a313e94568e7ff3365267",
          8272: "a269aadb5ac5de54bee91256343106cc",
          8322: "2d107e076b5525cf3f717807ad496c1b",
          8391: "6e700e3bd7b01589e4b15a2d3fbe2e1f",
          8431: "4a4548d549c8d85b06459b89f88ab431",
          8659: "4eb04c80c90a1ad945a2f265164a3047",
          8755: "06f879959d945776af0ba1e5b30a3ac6",
          8880: "c7550c71d47cf46e344bf0804e2b358e",
          8970: "9b5472a877a81902dfb23c14bbc53bb8",
          9022: "1d1363a318022dd0f3b7da5dd242ed40",
          9028: "bcf5df85683cde03039e0df0882b59aa",
          9126: "140029cf304f99b0bc7f1882177af831",
          9377: "eb99b67577940eced41c10509ad5d9bf",
          9587: "34b3b271fc3f13c3fea72aa6b9b5e68d",
          9615: "84e397a550b25c5b49d8a141491cfb25",
          9757: "656ef16db63b8e367481738b98125485",
          9936: "87c06715f741e7dd3bbbc09934162750",
          9975: "b7765f5bb717b3905d2182809829a2c7",
          9990: "ce4556d7741331a3e9302786174a96a4"
        } [e] + ".js", b.miniCssF = e => "css/e78c3ee290f204e2b3dd5bed2b3ce7fc.css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/sites-gta-trilogy:", b.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var d, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var s = o[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + t) {
                  d = s;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, b.nc && d.setAttribute("nonce", b.nc), d.setAttribute("data-webpack", c + t), d.src = e), f[e] = [a];
            var l = (a, t) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], d.parentNode && d.parentNode.removeChild(d), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), n && document.head.appendChild(d)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          1657: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, b.f.remotes = (e, a) => {
          b.o(d, e) && d[e].forEach((e => {
            var t = b.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, t, c, d, n, o) => {
                  try {
                    var i = e(t, c);
                    if (!i || !i.then) return n(i, d, o);
                    var b = i.then((e => n(e, d)), f);
                    if (!o) return b;
                    a.push(r.p = b)
                  } catch (e) {
                    f(e)
                  }
                },
                d = (e, a, f) => c(a.get, r[1], t, 0, o, f),
                o = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, r[2], 0, 0, ((e, a, t) => e ? c(b.I, r[0], 0, e, d, t) : f()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              b.o(b.S, t) || (b.S[t] = {});
              var c = b.S[t],
                d = "@rockstargames/sites-gta-trilogy",
                n = (e, a, t, r) => {
                  var f = c[e] = c[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : d > n.from)) && (f[a] = {
                    get: t,
                    from: d,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(9587), b.e(2229), b.e(9975)]).then((() => () => b(2841))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(450), b.e(4910), b.e(2229), b.e(9757), b.e(5811)]).then((() => () => b(9757))))), n("clsx", "2.1.1", (() => b.e(439).then((() => () => b(439))))), n("framer-motion", "7.10.3", (() => Promise.all([b.e(5912), b.e(2229), b.e(8322)]).then((() => () => b(5912))))), n("react-router-dom", "6.30.0", (() => Promise.all([b.e(5389), b.e(2229)]).then((() => () => b(5389))))), n("react", "18.2.0", (() => b.e(8659).then((() => () => b(8659))))), n("react", "18.3.1", (() => b.e(8431).then((() => () => b(8431))))), n("usehooks-ts", "2.16.0", (() => Promise.all([b.e(2562), b.e(2229)]).then((() => () => b(2562))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = b(5136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(b.S[t], r);
                  if (a.then) return o.push(a.then(f, e));
                  var c = f(a);
                  if (c && c.then) return o.push(c.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var f = 1, c = 1; c < e.length; c++) f--, r += "u" == (typeof(n = e[c]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return r
              }
              var d = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                d.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? d.pop() + " " + d.pop() : a(n))
              }
              return o();

              function o() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  c = f < 0;
                c && (f = -f - 1);
                for (var d = 0, n = 1, o = !0;; n++, d++) {
                  var i, b, s = n < a.length ? (typeof a[n])[0] : "";
                  if (d >= r.length || "o" == (b = (typeof(i = r[d]))[0])) return !o || ("u" == s ? n > f && !c : "" == s != c);
                  if ("u" == b) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == b)
                      if (n <= f) {
                        if (i != a[n]) return !1
                      } else {
                        if (c ? i > a[n] : i < a[n]) return !1;
                        i != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || b < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (d = 1; d < a.length; d++) {
                var p = a[d];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, f, c) => {
              var d = c ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(d).reduce(((a, r) => !t(f, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    c = (typeof f)[0];
                  if (r >= t.length) return "u" == c;
                  var d = t[r],
                    n = (typeof d)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && f != d) return f < d;
                  r++
                }
              })(a, r) ? a : r), 0)) && d[r]
            },
            f = e => {
              throw new Error(e)
            },
            c = (e => function(a, t, r, f, c) {
              var d = b.I(a);
              return d && d.then && !r ? d.then(e.bind(e, a, b.S[a], t, !1, f, c)) : e(a, b.S[a], t, r, f, c)
            })(((e, t, c, d, n, o) => {
              if (!((e, a) => e && b.o(e, a))(t, c)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, o);
              var i, s = r(t, c, n, d);
              return s ? ((i = s).loaded = 1, i.get()) : o ? o() : void f(((e, t, r, f, c) => {
                var d = e[r];
                return "No satisfying version (" + a(f) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(d).map((e => e + " from " + d[e].from)).join(", ")
              })(t, e, c, n, d))
            })),
            d = {},
            n = {
              2229: () => c("default", "react", !1, [1, 18, 2, 0], (() => b.e(8431).then((() => () => b(8431))))),
              1788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(9587), b.e(8240)]).then((() => () => b(2841))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => b.e(5389).then((() => () => b(5389))))),
              1913: () => c("default", "react", !1, [1, 18, 2, 0], (() => b.e(8659).then((() => () => b(8659))))),
              3582: () => c("default", "framer-motion", !1, [1, 7, 5, 1], (() => b.e(5912).then((() => () => b(5912))))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], (() => b.e(439).then((() => () => b(439))))),
              5587: () => c("default", "usehooks-ts", !1, [1, 2, 7, 2], (() => b.e(2562).then((() => () => b(2562))))),
              5966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(450), b.e(9757)]).then((() => () => b(9757)))))
            },
            o = {
              1657: [1913, 3582, 4572, 5587, 5966],
              2229: [2229],
              5811: [1788, 9623]
            },
            i = {};
          b.f.consumes = (e, a) => {
            b.o(o, e) && o[e].forEach((e => {
              if (b.o(d, e)) return a.push(d[e]);
              if (!i[e]) {
                var t = a => {
                  d[e] = 0, b.m[e] = t => {
                    delete b.c[e], t.exports = a()
                  }
                };
                i[e] = !0;
                var r = a => {
                  delete d[e], b.m[e] = t => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? a.push(d[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            b.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1657: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = b.miniCssF(e),
                  f = b.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (d = t[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === a)) return d
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var d;
                      if ((f = (d = c[r]).getAttribute("data-href")) === e || f === a) return d
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var d = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = d, o.request = n, c.parentNode && c.parentNode.removeChild(c), f(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, f, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            7060: 0
          };
          b.f.j = (a, t) => {
            var r = b.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (2229 != a) {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var c = b.p + b.u(a),
                d = new Error;
              b.l(c, (t => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", d.name = "ChunkLoadError", d.type = f, d.request = c, r[1](d)
                }
              }), "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, f, [c, d, n] = t,
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in d) b.o(d, r) && (b.m[r] = d[r]);
                n && n(b)
              }
              for (a && a(t); o < c.length; o++) f = c[o], b.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), b(3032), b(5819)
      })())
    }
  }
}));