! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fb66a36d-c7dc-4785-92e8-d689fed812a4", e._sentryDebugIdIdentifier = "sentry-dbid-fb66a36d-c7dc-4785-92e8-d689fed812a4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, d, t, f, c, o = {
            49293: (e, a, r) => {
              (0, r(31789).w)(1)
            },
            31789: (e, a, r) => {
              const d = r(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = d(r.y.meta.url, e)
              }
            },
            23358: (e, a, r) => {
              r(49293)
            },
            90569: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var d = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, t = 0, f = d.length; t !== a && f >= 0;) "/" === d[--f] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = d.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            98478: (e, a, r) => {
              "use strict";
              var d = {
                  "./root": () => Promise.all([r.e(2229), r.e(9623), r.e(5966), r.e(8776), r.e(1376)]).then((() => () => r(38113)))
                },
                t = (e, a) => (r.R = a, a = r.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var d = "default",
                      t = r.S[d];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[d] = e, r.I(d, a)
                  }
                };
              r.d(a, {
                get: () => t,
                init: () => f
              })
            }
          },
          b = {};

        function n(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
        }
        return n.m = o, n.c = b, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          n.r(t);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & d && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, n.d(t, f), t
        }, n.d = (e, a) => {
          for (var r in a) n.o(a, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, r) => (n.f[r](e, a), a)), [])), n.u = e => "js/" + {
          131: "950f68c92c0fa5a449a8db20cfd18737",
          278: "32ad55dcfdbbb363406f362bf898d2f1",
          299: "30566b43be7a7a25c91e3ce6f7a0bc57",
          314: "95e3361775fbb36796a97cee6bca541a",
          662: "a01cc795f8e62a7903ff9774e7d6be74",
          707: "b6e9e34ef92fda1b59f786b1c47ad579",
          824: "960e586f0612575135d6523d8e35451b",
          907: "7f4a529220599f585afcb5d3436b6b43",
          1029: "1844da50a426432d0a997883bf899d03",
          1041: "0d7fec0eed74283e36e586aac11fd193",
          1054: "3424dd06ba7af149097c799ec0b1287d",
          1095: "c8b6931ae6b1743667dd89eb353221ea",
          1242: "f0a0001f9be3260ba1eff2089daff98d",
          1271: "8a0360130ccfe211e1e140a01932eec1",
          1376: "871c51cecdd0a0c09449057af6fecae7",
          1604: "1117dd7e12ea9ba41839f0dbaca6e119",
          1822: "6b5773e9f8f40a7eda94befbff95129f",
          1868: "200853af701ed6eb7a4e8699841a6769",
          2156: "bfebd93334c60ef8da15014ae0dd30cb",
          2171: "e2d360ffd77033122cc4a73016a1a0c5",
          2221: "d8b166cdd8cc6a659d573428cda2a4b9",
          2229: "5f7443664507c92cb2b814b672ce5625",
          2243: "3ec2253f439c9db284323df779c3eefb",
          2347: "941e0f5d538c301cb771ce14d3ad2cd0",
          2365: "0dae63fcbc6f2d10c74ab00ff7aae972",
          2398: "12615288a2a6e2a17fdec990473a2cf9",
          2466: "9f03d9a970a6eba6681807bbcc206416",
          2642: "34ee95904a7754ec9c61b7c0b96a04e7",
          2678: "80ff7b8f2f65e25bd1386811fd567fa9",
          2864: "6d64e20cd7207ab5dfbb3171d9a70de2",
          3034: "268ea2703263d90ab7e1d4f7bc4f210b",
          3131: "f63933388b340461f9c3e5f75c3fddde",
          3138: "ec0f172eaab3aa1bfdce37458b765d66",
          3197: "f49b488bd2463da758ba435acbd72eef",
          3217: "f4b798e17bbcd25a9dae338c343bc0e1",
          3343: "a59392c959e5fd69201b692a419bb137",
          3360: "2b68159ff34004b04509dfe7c29939ff",
          3370: "00564322e9fb501768217f69c015f83b",
          3410: "c1a6a897fdfda4c344e0ae1bc88c2c77",
          3422: "04507d7752a66220a516790a9a75f1c6",
          3475: "581c6d6e015075e385ac10a1641cf6a5",
          3486: "5eb030acd99b2c85c4fde8b7306c61e7",
          3697: "9c185d115d63662faae24aed183e59ec",
          3759: "4c70dcdbef46e42bf195a498308099da",
          3885: "e41d59b59a11bb66f095f9df7e3f0684",
          3941: "f46e0f97d88df47ced904f3185730001",
          3954: "7c72e7b4f485b3615fae953ef1e1e5c4",
          4011: "316c776fe62b413343adb8efb776bb31",
          4079: "8f6c58e8aba9592fd0e38207e58c1ede",
          4108: "db1acbaa08c7f2cf276f36fdbd11b73b",
          4204: "ab0223ee056b2f7a647c7adad3287a17",
          4528: "cdeab4aa255145b697eefa1df07205fd",
          4621: "3ab4d1a01fdea315cdf0070ba936019b",
          4700: "fdd76486d3dc3cbeda2ab48e1dd050d2",
          4710: "3bcbeb06d15bc9cefccc64a25b113158",
          4731: "faf8d5f23290e1e5310d88af35472bf0",
          4799: "a66dee8bc0fa9e8c7c95f05a0abf7929",
          4851: "e7d243b7bb441c94a1666498f9e2c932",
          4853: "94de6943d4918ad1b91858da04ba9a68",
          4861: "265bf9b30725694fe688bd2054b04809",
          4913: "48d54fba23b23c856cc73095314458c3",
          5018: "b0b81013a88ae6affdb33531ba23f3c5",
          5219: "f1b33a41bfd9867f294300c60ceacbcd",
          5233: "f857acd6ae5de2e148398e79fc48a93e",
          5259: "9a5a06faa27fc29fc5a0414d12544145",
          5309: "ac609e00ce1eecca628ca8690517f3b0",
          5483: "172f13c5c94564e783a58bad1e1a2ad1",
          5530: "3379498c2fffef1db083fcda21d0e157",
          5639: "cf23d43124b6f5cac2352ac608c7eabb",
          5663: "4f8f4fdb0542d98f36ea5fd481918363",
          5742: "0ed8eba37b0119f67cccb712213c209c",
          5801: "ae619c325b7ef97fabf8f5b329a87ede",
          5830: "133a795668e3f23301c1ddb87d643380",
          5832: "05b58c810d61644f14179adad51bf1b6",
          5966: "417e3fa80e840e939300c374387e21a7",
          6267: "9bf5df9b9dfa93875b54900d3238baa2",
          6280: "4ce998d3a6a84a416253488e40b003fb",
          6285: "b4dd0be75d9a38f152fa1ee45974c845",
          6304: "1f0813a73c57e676e5b8e0f722b03e79",
          6361: "32d7fad43894b4b6ef760ba449afbcfb",
          6521: "48169efd52ec209f8c56bdbcd95c472a",
          6629: "d3dd8a92ff4f13a5bc7d61f03cd7af46",
          6664: "b0a6924c2c3b22283242f6f48281e774",
          6832: "f930594145b245c71d52d7ea6ca60e70",
          6864: "3e7ff99fd8f1c3a18ec0405d9b2a060e",
          6879: "1fab5527f0e3d565113e2a01b82640ae",
          6891: "f695b22cb52f6fa861d405e2dfa03e3d",
          6997: "273c57fce481bd0e246a92b693ea96f1",
          7010: "c51c3ddc7c6ac2ae1d6970f80e654a52",
          7070: "69896f6d3fd5f45d8e58650ef44b09ad",
          7073: "9d17d43075b90a67562eb673d32a353e",
          7360: "69baaa00f1c8cfc536f1081fb3420db6",
          7436: "d2db1721b745057eb42dfd6df24d47aa",
          7452: "124b896f93857b97e889f3fd2c1246ad",
          7453: "1303afe9d778bacfd981ab4c97e7c356",
          7600: "a44ab762b10869ea8318b8e0ff79f4be",
          7970: "cb24689fa07ac9865ac433d138933f17",
          8272: "a3236944f96ed86c86b1d27b7af36b97",
          8391: "96196cf36ec036dc805c51702636bd1b",
          8755: "7fe8cf0201be8966a9e78300c8c94f7d",
          8776: "c954763c9b554c92779cba242a5c137c",
          8880: "a78acc04787786fe877f5c62ce08edee",
          8970: "6988b4c4bc5a7a958affe8a161bcf99f",
          9022: "5525bd0ad700af715fc115e39db930b9",
          9028: "ce2ada5b1c3da9045240657fe7921bca",
          9126: "fa0469a9f80ae078d341d657b6df359e",
          9130: "06ade89e0ffd39e2a5efce1df832ead3",
          9157: "ac98aa70675dba95b199e707cc99c92d",
          9292: "65455d42595e408874edf7c4cdfec0ec",
          9377: "b50b8a7678f5368f3e356d63cd15226f",
          9550: "4cd10199a0a22f9f0ce4446baae50afd",
          9615: "a0f6f26957f67b64db56dd8659c48c37",
          9623: "f642de34a1ad70eccafbf9b8d4b75dc0",
          9869: "f115834eee9a8fcea2eef08ce4a21cff",
          9936: "e322869d0f306b44be2756214e381056",
          9990: "c47bbe64f77a676c8a14157b989ab20f"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          1376: "dc88ee56dfb36b4fdb67fbecd00c60ee",
          3138: "ec7e88d4658f5c5ac90562e8a521b625",
          4079: "89bde774a61088133390b2ee5afaab81",
          6629: "591390d9a41e54c015d04906e4090ded"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, t = "@rockstargames/modules-core-footer:", n.l = (e, a, r, f) => {
          if (d[e]) d[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var b = document.getElementsByTagName("script"), i = 0; i < b.length; i++) {
                var s = b[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == t + r) {
                  c = s;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, n.nc && c.setAttribute("nonce", n.nc), c.setAttribute("data-webpack", t + r), c.src = e), d[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, c = {}, n.f.remotes = (e, a) => {
          n.o(f, e) && f[e].forEach((e => {
            var r = n.R;
            r || (r = []);
            var d = c[e];
            if (!(r.indexOf(d) >= 0)) {
              if (r.push(d), d.p) return a.push(d.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), n.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                f = (e, r, f, c, o, b) => {
                  try {
                    var n = e(r, f);
                    if (!n || !n.then) return o(n, c, b);
                    var i = n.then((e => o(e, c)), t);
                    if (!b) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => f(a.get, d[1], r, 0, b, t),
                b = a => {
                  d.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(n, d[2], 0, 0, ((e, a, r) => e ? f(n.I, d[0], 0, e, o, r) : t()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (r, d) => {
            d || (d = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(d.indexOf(t) >= 0)) {
              if (d.push(t), e[r]) return e[r];
              n.o(n.S, r) || (n.S[r] = {});
              var f = n.S[r],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, r, d) => {
                  var t = f[e] = f[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!d != !o.eager ? d : c > o.from)) && (t[a] = {
                    get: r,
                    from: c,
                    eager: !!d
                  })
                },
                b = [];
              return "default" === r && (o("@foundry/react", "1.25.4", (() => Promise.all([n.e(1271), n.e(9869), n.e(3138), n.e(2229), n.e(4853), n.e(1029)]).then((() => () => n(66863))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(5483), n.e(2229), n.e(5219)]).then((() => () => n(87768))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([n.e(1271), n.e(4108), n.e(9869), n.e(5801), n.e(2229), n.e(4204), n.e(9623), n.e(4853), n.e(5966), n.e(4079), n.e(8776), n.e(6629)]).then((() => () => n(25922))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(1271), n.e(4108), n.e(1095), n.e(2229), n.e(4204), n.e(9623), n.e(5966), n.e(3422)]).then((() => () => n(41041))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(1271), n.e(4108), n.e(2229), n.e(4204), n.e(9623), n.e(3410)]).then((() => () => n(24602))))), o("react-dom", "18.2.0", (() => Promise.all([n.e(7360), n.e(2229)]).then((() => () => n(57360))))), o("react-router-dom", "6.17.0", (() => Promise.all([n.e(1604), n.e(2229)]).then((() => () => n(21604))))), o("react", "18.2.0", (() => n.e(3217).then((() => () => n(23217)))))), e[r] = b.length ? Promise.all(b).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var d = r.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = r[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = r[1] ? a(r[1]) : [];
              return r[2] && (d.length++, d.push.apply(d, a(r[2]))), r[3] && (d.push([]), d.push.apply(d, a(r[3]))), d
            },
            a = (r, d) => {
              if (0 in r) {
                d = e(d);
                var t = r[0],
                  f = t < 0;
                f && (t = -t - 1);
                for (var c = 0, o = 1, b = !0;; o++, c++) {
                  var n, i, s = o < r.length ? (typeof r[o])[0] : "";
                  if (c >= d.length || "o" == (i = (typeof(n = d[c]))[0])) return !b || ("u" == s ? o > t && !f : "" == s != f);
                  if ("u" == i) {
                    if (!b || "u" != s) return !1
                  } else if (b)
                    if (s == i)
                      if (o <= t) {
                        if (n != r[o]) return !1
                      } else {
                        if (f ? n > r[o] : n < r[o]) return !1;
                        n != r[o] && (b = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || o <= t) return !1;
                    b = !1, o--
                  } else {
                    if (o <= t || i < s != f) return !1;
                    b = !1
                  } else "s" != s && "n" != s && (b = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, d) : !u())
              }
              return !!u()
            },
            r = (r, d, t) => {
              var f = r[d];
              return (d = Object.keys(f).reduce(((r, d) => !a(t, d) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var d = 0;;) {
                  if (d >= a.length) return d < r.length && "u" != (typeof r[d])[0];
                  var t = a[d],
                    f = (typeof t)[0];
                  if (d >= r.length) return "u" == f;
                  var c = r[d],
                    o = (typeof c)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && t != c) return t < c;
                  d++
                }
              })(r, d) ? r : d), 0)) && f[d]
            },
            d = (e => function(a, r, d, t) {
              var f = n.I(a);
              return f && f.then ? f.then(e.bind(e, a, n.S[a], r, d, t)) : e(a, n.S[a], r, d, t)
            })(((e, a, d, t, f) => {
              var c = a && n.o(a, d) && r(a, d, t);
              return c ? (e => (e.loaded = 1, e.get()))(c) : f()
            })),
            t = {},
            f = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => n.e(3217).then((() => () => n(23217))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(1604).then((() => () => n(21604))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(1271), n.e(4108), n.e(4204)]).then((() => () => n(24602))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(1271), n.e(4108), n.e(1095), n.e(4204), n.e(1041)]).then((() => () => n(41041))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(5483), n.e(7600)]).then((() => () => n(87768))))),
              96711: () => d("default", "@foundry/react", [1, 1], (() => Promise.all([n.e(1271), n.e(9869), n.e(3138), n.e(4853)]).then((() => () => n(66863))))),
              20270: () => d("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([n.e(1271), n.e(4108), n.e(9869), n.e(5801), n.e(4204), n.e(4853), n.e(4079)]).then((() => () => n(25922))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => n.e(7360).then((() => () => n(57360)))))
            },
            c = {
              1376: [20270],
              2229: [62229],
              4853: [44853],
              5966: [95966],
              8776: [2918, 81788, 96711],
              9623: [9623]
            },
            o = {};
          n.f.consumes = (e, a) => {
            n.o(c, e) && c[e].forEach((e => {
              if (n.o(t, e)) return a.push(t[e]);
              if (!o[e]) {
                var r = a => {
                  t[e] = 0, n.m[e] = r => {
                    delete n.c[e], r.exports = a()
                  }
                };
                o[e] = !0;
                var d = a => {
                  delete t[e], n.m[e] = r => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var c = f[e]();
                  c.then ? a.push(t[e] = c.then(r).catch(d)) : r(c)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            n.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1376: 1,
                3138: 1,
                4079: 1,
                6629: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var d = n.miniCssF(e),
                  t = n.p + d;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), d = 0; d < r.length; d++) {
                      var t = (c = r[d]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (d = 0; d < f.length; d++) {
                      var c;
                      if ((t = (c = f[d]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(d, t)) return a();
                ((e, a, r, d, t) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) d();
                    else {
                      var c = r && ("load" === r.type ? "missing" : r.type),
                        o = r && r.target && r.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                      b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, f.parentNode && f.parentNode.removeChild(f), t(b)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, t, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          n.f.j = (a, r) => {
            var d = n.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) r.push(d[2]);
              else if (/^((22|66)29|4853|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((r, t) => d = e[a] = [r, t]));
              r.push(d[2] = t);
              var f = n.p + n.u(a),
                c = new Error;
              n.l(f, (r => {
                if (n.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", c.name = "ChunkLoadError", c.type = t, c.request = f, d[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var d, t, f = r[0],
                c = r[1],
                o = r[2],
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (d in c) n.o(c, d) && (n.m[d] = c[d]);
                o && o(n)
              }
              for (a && a(r); b < f.length; b++) t = f[b], n.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), n.nc = void 0, n(23358), n(98478)
      })())
    }
  }
}));