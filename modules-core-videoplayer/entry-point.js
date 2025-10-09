try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4e501b7e-b64e-4ec7-a993-505ff4f17577", e._sentryDebugIdIdentifier = "sentry-dbid-4e501b7e-b64e-4ec7-a993-505ff4f17577")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, r, d, f, c, o, b, n, l, s, i, u, p, h, m, g, y, v, w, k = {
            3032: (e, a, t) => {
              t(8419)
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
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
            8157: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => t.e(8271).then((() => () => t(8271))),
                  "./index": () => Promise.all([t.e(1648), t.e(2229), t.e(9623), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(3581), t.e(2918), t.e(4994), t.e(1030)]).then((() => () => t(1030))),
                  "./tina": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then((() => () => t(7684))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then((() => () => t(7684)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
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
            8419: (e, a, t) => {
              (0, t(7411).w)(1)
            }
          },
          _ = {};

        function P(e) {
          var a = _[e];
          if (void 0 !== a) return a.exports;
          var t = _[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(t.exports, t, t.exports, P), t.loaded = !0, t.exports
        }
        return P.m = k, P.c = _, P.y = a, P.amdO = {}, P.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return P.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          P.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, P.d(d, f), d
        }, P.d = (e, a) => {
          for (var t in a) P.o(a, t) && !P.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce(((a, t) => (P.f[t](e, a), a)), [])), P.u = e => "js/" + {
          131: "4be11f71ca47b516b2ca9149cfc8747a",
          278: "21583cbc3b5d04ef9200e1534ae63a5f",
          299: "04669bb1946818b22616d19e5a2f0795",
          314: "3c8accff67ab333d8efe075e3d21e4ea",
          439: "f7a32fa8a543693c44802baf58744558",
          601: "2f9fd3d8667677944d4502f69e747b7a",
          662: "ba94ba4592642322e649aa4379b78ad6",
          824: "9bdef25539c26fa855011df16db6716c",
          907: "58dab22efb9ad8769482031ba95fb52c",
          1030: "c2ee21cef33559ff07c467eb760d67f7",
          1054: "cf50525d045d7cd97e9cb79186b78179",
          1098: "73680878875fc5e8880426a1caeeeefa",
          1242: "1890a138bc0b2bbea2bf9e45e2071d71",
          1254: "c5533a28fe7f515b7669a8869b116cb6",
          1648: "bb8bfa0f6ead9b3c991ea5105a0dc7e7",
          1703: "4cbf14d35568354b568622fb5050d389",
          1773: "d21cc813e4ecfe5996144f72b8fb090e",
          1822: "e596fd6972313024b64bbea1d46b44e5",
          1868: "86c81a8ff67ece0f40a1ad46c5f41847",
          2148: "1bf3f14bdec70230d870475ec973ac43",
          2156: "365d3ea693bf1255995ea3bbbd3bdd49",
          2169: "0c3027d15a55df3f5777661d2fc09238",
          2171: "fa58fe08615e446039acb689d23b3d03",
          2217: "0fa26152b364db42ff727bd52f36e59f",
          2221: "373704272e700e497dd8322d6e364f4d",
          2243: "632b77d888f7c47bb0d4d76a66ab926a",
          2293: "b8b24cb05e32fa709d0266e21e253df7",
          2306: "18a252a8facd005dc4baad8231e2907c",
          2347: "d58f9b022da7548d02d63f170cbc1aa9",
          2365: "b04e1651e039ffd994b07770f4c1ff3f",
          2398: "114b8795ad8465afc86b4c0cc036c148",
          2466: "40e35f0a0bcb2ef3fdd8c5abc932416b",
          2635: "3839bc4ca8e9f4cb425edeb3d5622522",
          2642: "42752fe8151b4ee9375ad9f1b53aec98",
          2657: "f9e89af84af93b9ebb70d2b2b7d41d5a",
          2678: "f265b067ce8ee8a865d014b337c3b859",
          2864: "6198a9524082040527ebc87a19b9293b",
          3034: "873c12f36083a77eac2eb971e3b67273",
          3197: "f7dc43865e9d7400aef6e20f262accff",
          3343: "460f90d923b06abfdc366890d0e492e6",
          3370: "590e31ea2d1c212a221e284ae3907842",
          3475: "443396efac440df017cb924132198f01",
          3486: "44a05044b52c4317a8ab3ca39d5bccb8",
          3697: "7789ff6d504c323710329b94a2899a59",
          3885: "d8e50e75015cf2571c27d82dbc83642b",
          3941: "15ded7eb2c84148cd1e0eaafb03c2cb3",
          4011: "5510cd13136d3a4c05971374779cf187",
          4154: "0c2ef30bfcfceb58fa63c653a0a14206",
          4271: "a288702daa798bb7c1273d0d05eb7370",
          4528: "4bcbb3128b3f544d164980c81509b218",
          4550: "67be77c9fe289656d893977c40ecd141",
          4578: "f1c038cb0c5c563199da3ab02807672d",
          4598: "89d018096dd079a9643ec997e832c007",
          4621: "90dfcc7c61bd8b8f9df7c2defa5368f6",
          4700: "c8ef036a4bb70cda5a23325f8b1df95a",
          4710: "0b51bb78cd04c6b7667f6f90913b167f",
          4731: "6588bc5eb13c367d86d7198b173aed54",
          4799: "84fd1d25efd942d02eae86a7e76265a9",
          4851: "fb2b68a38a61298c374499d9b44d3068",
          4861: "d12d04426ac95255042226925dbedf08",
          4913: "d19e21117ec3a465b522454cd92845ff",
          4994: "633bcc6a8b970a63946a81a01a554458",
          5016: "b40015637f1ae2afcf2a92ee501a5223",
          5018: "56ac26baf0529e26b8314d8555c86f4e",
          5055: "0bef200518399f1afc820c3cbd44e0a0",
          5076: "511a36b0adde0d48cc98adefe5a26942",
          5233: "dc9c5cb0d8aa4a8a722797d24811c677",
          5259: "5728be805d1d84886f410a8fbc7cbcf3",
          5389: "4e0f74d0ec22610cfdea5e42109b6359",
          5530: "c3ef08f564888dce4fa882a27557070d",
          5639: "1298cf61fd2dd297197ebfdbe8cd8dc6",
          5663: "c6eccd39ba12090121e3bcaa9a2c46fa",
          5742: "8afe6b89bb68d4081108d667812998bb",
          5830: "9748d8e49fa5f31cfe92ce9212da1f0b",
          5832: "ae6ff15cd0939a05d61fecc268aea955",
          5859: "e232ba1d12d1f0dfad947741b6496dfb",
          6267: "6bed2c13699ab0d3d729102f1edac24a",
          6280: "5b6126866b92d85d4e1c127fcf5d61cb",
          6285: "b18696e7632f74aa78d1eed67b48da2e",
          6361: "cbf3b92e00340bfef638dfd09d769791",
          6664: "31aae8f6f79eddd20560915cb71dd61d",
          6879: "7a2de06e2b834425b46bf09e02c27ba7",
          6891: "888948365486c0092c299da4aff10c43",
          6929: "2d8f47463ecca20449916e87b3d2c0b1",
          6997: "4b1aebe97194d42fc81d79a3ea3b1c53",
          7010: "a8c5761f6b554b3cdf571a53e0af72e5",
          7073: "9645903b4bb8dce7b94d92170dd8e72d",
          7436: "76f6c5f99dd7d93772da5069a8b9ca59",
          7452: "2f8019392d1ad86f050c9e91a66919ce",
          7453: "f0f6a2b6911482a6e2936101a39b160a",
          7684: "d16c950b00abc28fcd3b49ac2af1f7ab",
          7731: "d7065c48120fc5200fcc86a02e7c2e85",
          7970: "01508db2d3c3a1d1cd86febd27d952f7",
          8240: "b21b374e3686b7e8347474be489baa1e",
          8271: "608accc469226dc0fcec017d1edd124f",
          8272: "7b1c3dc76ccfd4e97130b98717733489",
          8284: "651f9bc3cf38a62548efd4b3974c0921",
          8391: "1afea6e692e03f881521fa09d148a7c5",
          8431: "43a692c58f88fb4ada14457ef939d18a",
          8755: "66def9719a95c654a171801ce046e78e",
          8880: "0d0f21099792491ad241255b3b88030d",
          8970: "3d9e382fd10f5b1a4939f3fb58f956bf",
          9022: "cb168d8d3b1be2930547c68438e4b7a6",
          9028: "4de075e5775642a8c0f6658e50bfbb90",
          9126: "4edfa87625ec35b02ebc154532fb230e",
          9377: "7a6a5493187b536a7cff9ce5d053176e",
          9587: "00bd15ca9ffbeb42f083d8a300623658",
          9615: "ef90490ec39d4651275d10093d98c4f0",
          9757: "e6440ea5ae339b45568716843f824a11",
          9813: "c5279fdbab941d66b20354df5e3013f3",
          9936: "9d62f6d0185192cb92e4eb0a5aa8a5b2",
          9990: "0e6a6e47bfe4bd49a9851d3cb701db15"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          1030: "3b0ee430328dccdbbcb668dae284f925",
          2217: "30c5db481d6b25a478ff5719bcbdf03e",
          4598: "30c5db481d6b25a478ff5719bcbdf03e",
          4994: "93a17588eeae0e4cdbefd7245c1cef4e",
          5055: "a126229ede95b503bfddbd53efcedae3",
          7684: "e1ecfbd5d60b0822f094e505eee8adf4"
        } [e] + ".css", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/modules-core-videoplayer:", P.l = (e, a, t, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                var l = b[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + t) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, P.nc && c.setAttribute("nonce", P.nc), c.setAttribute("data-webpack", d + t), c.src = e), r[e] = [a];
            var s = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(i);
                var d = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(t))), a) return a(t)
              },
              i = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, P.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, P.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              P.o(P.S, t) || (P.S[t] = {});
              var f = P.S[t],
                c = "@rockstargames/modules-core-videoplayer",
                o = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                b = [];
              return "default" === t && (o("@gsap/react", "2.1.2", (() => Promise.all([P.e(2229), P.e(3581), P.e(4154)]).then((() => () => P(4154))))), o("@popperjs/core", "2.11.8", (() => P.e(9813).then((() => () => P(9813))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([P.e(9587), P.e(2229), P.e(8240)]).then((() => () => P(2841))))), o("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([P.e(1703), P.e(2229), P.e(5966), P.e(2918), P.e(2217)]).then((() => () => P(2217))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([P.e(2293), P.e(1254), P.e(2229), P.e(9623), P.e(6188), P.e(5966), P.e(2148), P.e(4550)]).then((() => () => P(2169))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([P.e(2293), P.e(8284), P.e(2229), P.e(9623), P.e(6188), P.e(1788), P.e(2148), P.e(6565), P.e(9757)]).then((() => () => P(9757))))), o("clsx", "2.1.1", (() => P.e(439).then((() => () => P(439))))), o("graphql", "16.11.0", (() => P.e(601).then((() => () => P(601))))), o("gsap", "0.0.0", (() => P.e(4271).then((() => () => P(4271))))), o("hammerjs", "2.0.8", (() => P.e(7731).then((() => () => P(7731))))), o("lodash", "4.17.21", (() => P.e(5076).then((() => () => P(5076))))), o("react-dom", "18.3.1", (() => Promise.all([P.e(1098), P.e(2229)]).then((() => () => P(1098))))), o("react-popper", "2.3.0", (() => Promise.all([P.e(2229), P.e(4853), P.e(9005), P.e(2635)]).then((() => () => P(2635))))), o("react-router-dom", "6.30.0", (() => Promise.all([P.e(5389), P.e(2229), P.e(4853)]).then((() => () => P(5389))))), o("react", "18.3.1", (() => P.e(8431).then((() => () => P(8431))))), o("uuid", "9.0.1", (() => P.e(2657).then((() => () => P(2657)))))), e[t] = b.length ? Promise.all(b).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), f = e => {
          var a = e => e.split(".").map((e => +e == e ? +e : e)),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = t[1] ? a(t[1]) : [];
          return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t],
              d = (typeof r)[0];
            if (t >= a.length) return "u" == d;
            var c = a[t],
              o = (typeof c)[0];
            if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
            if ("o" != d && "u" != d && r != c) return r < c;
            t++
          }
        }, o = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, d = 1; d < e.length; d++) r--, t += "u" == (typeof(c = e[d]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, c);
            return t
          }
          var f = [];
          for (d = 1; d < e.length; d++) {
            var c = e[d];
            f.push(0 === c ? "not(" + b() + ")" : 1 === c ? "(" + b() + " || " + b() + ")" : 2 === c ? f.pop() + " " + f.pop() : o(c))
          }
          return b();

          function b() {
            return f.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, b = (e, a) => {
          if (0 in e) {
            a = f(a);
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var d = 0, c = 1, o = !0;; c++, d++) {
              var n, l, s = c < e.length ? (typeof e[c])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(n = a[d]))[0])) return !o || ("u" == s ? c > t && !r : "" == s != r);
              if ("u" == l) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == l)
                  if (c <= t) {
                    if (n != e[c]) return !1
                  } else {
                    if (r ? n > e[c] : n < e[c]) return !1;
                    n != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (r || c <= t) return !1;
                o = !1, c--
              } else {
                if (c <= t || l < s != r) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var i = [],
            u = i.pop.bind(i);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            i.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? b(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && P.o(e, a), l = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}), i = (e, a, t, r) => {
          var d = r ? s(e[a]) : e[a];
          return (a = Object.keys(d).reduce(((e, a) => !b(t, a) || e && !c(e, a) ? e : a), 0)) && d[a]
        }, u = (e, a, t, r, d) => {
          var f = e[t];
          return "No satisfying version (" + o(r) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
        }, p = e => {
          throw new Error(e)
        }, h = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), m = (e => function(a, t, r, d, f) {
          var c = P.I(a);
          return c && c.then && !r ? c.then(e.bind(e, a, P.S[a], t, !1, d, f)) : e(a, P.S[a], t, r, d, f)
        })(((e, a, t, r, d, f) => {
          if (!n(a, t)) return h(e, t, f);
          var c = i(a, t, d, r);
          return c ? l(c) : f ? f() : void p(u(a, e, t, d, r))
        })), g = {}, y = {
          2229: () => m("default", "react", !1, [1, 18, 2, 0], (() => P.e(8431).then((() => () => P(8431))))),
          9623: () => m("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([P.e(5389), P.e(4853)]).then((() => () => P(5389))))),
          6188: () => m("default", "lodash", !1, [1, 4, 17, 21], (() => P.e(5076).then((() => () => P(5076))))),
          5966: () => m("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([P.e(2293), P.e(8284), P.e(9623), P.e(6188), P.e(1788), P.e(2148), P.e(6929)]).then((() => () => P(9757))))),
          1788: () => m("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([P.e(9587), P.e(5859)]).then((() => () => P(2841))))),
          1569: () => m("default", "uuid", !1, [1, 9, 0, 0], (() => P.e(2657).then((() => () => P(2657))))),
          3581: () => m("default", "gsap", !1, [1, "workspace:^"], (() => P.e(4271).then((() => () => P(4271))))),
          2918: () => m("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([P.e(2293), P.e(1254), P.e(9623), P.e(6188), P.e(2148), P.e(2169)]).then((() => () => P(2169))))),
          4572: () => m("default", "clsx", !1, [1, 2, 1, 1], (() => P.e(439).then((() => () => P(439))))),
          4848: () => m("default", "hammerjs", !1, [1, 2, 0, 8], (() => P.e(7731).then((() => () => P(7731))))),
          5971: () => m("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([P.e(4853), P.e(9005), P.e(5016)]).then((() => () => P(2635))))),
          7224: () => m("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([P.e(1703), P.e(4598)]).then((() => () => P(2217))))),
          7654: () => m("default", "@gsap/react", !1, [1, 2, 1, 0], (() => P.e(1773).then((() => () => P(4154))))),
          4853: () => m("default", "react-dom", !1, [1, 18, 2, 0], (() => P.e(1098).then((() => () => P(1098))))),
          6565: () => m("default", "graphql", !1, [1, 16, 9, 0], (() => P.e(601).then((() => () => P(601))))),
          9005: () => m("default", "@popperjs/core", !1, [1, 2, 11, 7], (() => P.e(9813).then((() => () => P(9813)))))
        }, v = {
          1569: [1569],
          1788: [1788],
          2229: [2229],
          2918: [2918],
          3581: [3581],
          4853: [4853],
          4994: [4572, 4848, 5971, 7224, 7654],
          5966: [5966],
          6188: [6188],
          6565: [6565],
          6929: [6565],
          9005: [9005],
          9623: [9623]
        }, w = {}, P.f.consumes = (e, a) => {
          P.o(v, e) && v[e].forEach((e => {
            if (P.o(g, e)) return a.push(g[e]);
            if (!w[e]) {
              var t = a => {
                g[e] = 0, P.m[e] = t => {
                  delete P.c[e], t.exports = a()
                }
              };
              w[e] = !0;
              var r = a => {
                delete g[e], P.m[e] = t => {
                  throw delete P.c[e], a
                }
              };
              try {
                var d = y[e]();
                d.then ? a.push(g[e] = d.then(t).catch(r)) : t(d)
              } catch (e) {
                r(e)
              }
            }
          }))
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            P.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1030: 1,
                2217: 1,
                4598: 1,
                4994: 1,
                5055: 1,
                7684: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = P.miniCssF(e),
                  d = P.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((d = (c = f[r]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", P.nc && (f.nonce = P.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        o = t && t.target && t.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, f.parentNode && f.parentNode.removeChild(f), d(b)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          P.f.j = (a, t) => {
            var r = P.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^((178|291|618)8|1569|2229|3581|4853|5966|6565|9005|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var f = P.p + P.u(a),
                c = new Error;
              P.l(f, (t => {
                if (P.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, c, o] = t,
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) P.o(c, r) && (P.m[r] = c[r]);
                o && o(P)
              }
              for (a && a(t); b < f.length; b++) d = f[b], P.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), P(3032), P(8157)
      })())
    }
  }
}));