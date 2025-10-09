try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f0dd0e1a-8f6b-403c-b9d5-ef4dc4de9277", e._sentryDebugIdIdentifier = "sentry-dbid-f0dd0e1a-8f6b-403c-b9d5-ef4dc4de9277")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, d, t, f, c, o, n, b, i, s, l, u, p, h, m, g, y, v, w, k, _, E, P, S, j = {
            17411: (e, a, r) => {
              const d = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = d(r.y.meta.url, e)
              }
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            77027: (e, a, r) => {
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
            93032: (e, a, r) => {
              r(28419)
            },
            98478: (e, a, r) => {
              "use strict";
              var d = {
                  "./root": () => Promise.all([r.e(78), r.e(8853), r.e(1127), r.e(8429), r.e(9623), r.e(1788), r.e(5966), r.e(8322), r.e(3569)]).then((() => () => r(32841)))
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
          O = {};

        function T(e) {
          var a = O[e];
          if (void 0 !== a) return a.exports;
          var r = O[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return j[e].call(r.exports, r, r.exports, T), r.loaded = !0, r.exports
        }
        return T.m = j, T.c = O, T.y = a, T.amdO = {}, T.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return T.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, T.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          T.r(t);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & d && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, T.d(t, f), t
        }, T.d = (e, a) => {
          for (var r in a) T.o(a, r) && !T.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, T.f = {}, T.e = e => Promise.all(Object.keys(T.f).reduce(((a, r) => (T.f[r](e, a), a)), [])), T.u = e => "js/" + {
          68: "1a01e724e83b17f1e05236bdaee151af",
          78: "42948ffb9e2283b3643240eefc712912",
          131: "27ee58dea56eb6ac20de73c096f8e063",
          173: "fcf462b92b372e53300dcb8594e7aa62",
          278: "bd4c26082348e58f620d873678e97aab",
          299: "4382d71fd040c28e2239fea1e9949bdc",
          314: "51e08b9c54baf1bff45b2b303b769181",
          450: "eea9b915e33e8d95a579b6224e010f6a",
          662: "b74f2f36b833de0993798cb618d54170",
          824: "fd6c167159cbbe5981c7b1427965a4ab",
          907: "5d0e78d812875e1fd28901320ba34331",
          1054: "e4bd555585f7fb619e16809beb8b83f8",
          1098: "0be7ebb895abe9043ba247a4ff8d1bc1",
          1242: "8ef2f2aea3778e8afb3c2969b42e2610",
          1758: "a419f8df16b83eeedd455d575cccec70",
          1822: "742e8edb215c67c10055be5edb9a8477",
          1868: "16181a6b114a6e15820cdd52187c7740",
          2148: "9abf565614624fb30b16245241592c59",
          2156: "a66fb83d97bd424ddb3ef7b4fce86d8b",
          2171: "27cce48a009a70603b8ff877b7247463",
          2221: "970bec768486f3cf5feaba1b415d3ba6",
          2234: "67a37f6d3fd6f903f6bcceba6b59858f",
          2243: "e8e68e843d500dd2629f29946c6017bc",
          2306: "9628a16f8cb7763a4eba97565d12dda2",
          2347: "3f487cb908fed946751bcbe5840dc57b",
          2365: "7996c5daa6beafe021dbd4e1d49cd4e4",
          2398: "4afb98ff8b176c642bbfd77b1e1e25ce",
          2466: "0bb4f0a6c522ed07838ca3bb31b30c1c",
          2642: "f05e9d98178ad277def5f88fd60b1a8f",
          2678: "c5fbed4f07654024101af5a83a42b900",
          2864: "85903b361257db72196500fc969d51ef",
          3034: "018de185b5ae7799e6741f67406da8ad",
          3197: "232c5c6236d8bd255355809e39e82f29",
          3343: "809bebc571ea085c988f3c8e7c20a339",
          3370: "3fc6b63de04500a64bdf188a095554cc",
          3421: "ad59e33c1c6799463c46c894b41dfcb8",
          3475: "117e50cbef0cf9c03b9bb614e6acebfb",
          3486: "49b9a8a67186fcaf69ddecee7490351b",
          3569: "a084e1311e85b59ed0bd19566896d5c4",
          3697: "9f4de6043c99857daa3c1d0c84582988",
          3817: "1b2b6bb8b8841018576dc7e7aff1a7d2",
          3885: "70813b73108b474214809455f0f9bc6d",
          3896: "b5ce705dbd4387d20c4b9ffac71a65e6",
          3941: "8fea4b4df8a411e1366dd5dbbeb1a2d4",
          4011: "efc1cb298f8e19bb9648f4d72265cdd5",
          4528: "964f19b0948f0f4d166f4da48459fa01",
          4578: "d0a489d74de374cbe135e969f86be88d",
          4621: "d8f99f954d39027d8df283995e37687a",
          4700: "0f7e313fb49a1aaf2a3dd1ac3cae5665",
          4710: "02dd202bdda0ce1a7fb9a7a0a65f4db6",
          4731: "b222bcaa1f26eb7935c6c3dc612d28ba",
          4799: "506be9b8a629254db00f3fe628445334",
          4851: "43e02a4f51df204f75126a6efb1cb124",
          4861: "a3151638327b1f1751e9a90a8902b2b0",
          4913: "59611f8ca058b9d15a65ca52de5937dc",
          5018: "759380a24b54aebcd56ae8398e83aa52",
          5233: "a839843e4b9dc02b20de790e05279898",
          5259: "b0b9bf21051f88d419c889e0b3a700f4",
          5265: "f510469b1b88d61896ae4b085f726764",
          5326: "b630d171065159412a1967e2982593ce",
          5389: "754b0617c4ea9448978445fbe248fb72",
          5415: "a5ae8e2ac24ab6e08515b534c0dd782b",
          5530: "1571cbc9e4df839065e2aec5c2b3429c",
          5639: "e26dbf38f6a84d7b766a79b1d4a56cd5",
          5663: "39d09275ee2238b047bcec32127b2f90",
          5742: "cd93c74295f7676ec3024077d536b3b1",
          5802: "a1db136e84949892ee0dbf92b78e2db0",
          5830: "f8b0014af37c4335906607120baae305",
          5832: "53ff3c244763bde2dee2863a9a6e4d06",
          5859: "70c5fb864f43c77005e6e4e27a549d3e",
          5941: "a816d035be32903f7351c6df7906f246",
          6070: "40a18d4ca010dacafdf8e7d21c14a7e3",
          6200: "665f0fe40aef2ae3edb8933657332da5",
          6267: "5d9649cc25ca3d1a5b97a5cf54584ea3",
          6280: "ae929b0666e1e59512c42211d86c1a40",
          6285: "799087f39eb867458b5fde143d774e31",
          6313: "3bc49e6d651f47f309e24a29f337c5f7",
          6361: "fafe54276731d8578969021e72578589",
          6471: "79f0e60eab4bbedf6327fe609877d307",
          6664: "c11f8039446de64f1f897b0bb846ddde",
          6879: "2a5bec7306f8be06a1b08fefdff31633",
          6891: "00f560b31e2f357c05e3986e73951c30",
          6997: "ca16d8b5ddf1c0534ce8b2ec23b11b4a",
          7010: "9941e376ab3341abc3a2209b62b23202",
          7073: "c20499ffb16e0e3ee04f0455f2c7b50a",
          7407: "b514da938ae86abe5baf20130444257a",
          7436: "a20a4f2ec439196844732d2fca7b8ce4",
          7452: "1e4aa8172d47eddadd1a910507766961",
          7453: "9ca7b57d3ec52f8308334d9010b21eb3",
          7970: "08ba795e2685b8fd64bb3a0a82e5d22c",
          8068: "aec328e1141ea6928ff0b3043d1d433e",
          8240: "8c6ce772848151867fd55f4ee317d1dc",
          8272: "4cd863ad83d80b03546038c8f9f5636e",
          8322: "712fdd53b88e78efb7423f7114a05458",
          8325: "64647feeb297eb01c467591418774c4b",
          8391: "4e5221693cac95e8dc03394c2b07085b",
          8431: "a1aa1059bda53270d02932a4d9f4b11d",
          8755: "bbc75f1a70f40f7bb8eb1998a35963e1",
          8833: "8efebe94d8a4175fe7eaa0bc44eddc4b",
          8845: "900a1a9817e51f35073dc2ad05d5fdc6",
          8853: "f0ba32ea8acff718b51326ae1f833a20",
          8880: "fc0344fe40a0445c4661541eab40d875",
          8938: "c1a7a10929a3986b0619ca3229f63802",
          8970: "8c48c58e1d0041d1055948dec29057b1",
          9022: "4e40e49bf243ae64583deedaf7f8e705",
          9028: "ebd02d0cdc1d81c6af14064d96e9398d",
          9126: "571df947d5960fcb660f0c0c3d530b74",
          9377: "287c5710fe9fa95afdf9ffb9e21f3d65",
          9512: "6b06e385aab67a6c594f28ca05100c7a",
          9587: "ac7a129a4757f97de36c175e7e72153e",
          9615: "964226b7c015480d5dc7ec503f05ccd5",
          9757: "f5dc5dd8fd3a0262325468bca4557b6d",
          9760: "96f58497d1c12d2befbf0ba7e54e6daf",
          9936: "198f3289d86a13908b0c97efd46b9298",
          9990: "3032855e3348c6f0eb0652e2e518bb65"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          78: "b490be6a51bf0a073eb4be4f7ffc4e20",
          3569: "1b6a05f8cdb2244907347e6834e933b8",
          3730: "450cc2b1c47be1e723f0b0d53ea4743d",
          3817: "bdca58a4a308e1a92902aefed5e5c870",
          6313: "8c05b91799d18e27afe9cd6f65586f62"
        } [e] + ".css", T.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), T.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, t = "@rockstargames/modules-core-footer:", T.l = (e, a, r, f) => {
          if (d[e]) d[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var i = n[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + r) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, T.nc && c.setAttribute("nonce", T.nc), c.setAttribute("data-webpack", t + r), c.src = e), d[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
              },
              l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, T.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, T.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          T.S = {};
          var e = {},
            a = {};
          T.I = (r, d) => {
            d || (d = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(d.indexOf(t) >= 0)) {
              if (d.push(t), e[r]) return e[r];
              T.o(T.S, r) || (T.S[r] = {});
              var f = T.S[r],
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
                n = [];
              return "default" === r && (o("@foundry/react", "5.2.1", (() => Promise.all([T.e(8833), T.e(9512), T.e(78), T.e(8853), T.e(3817), T.e(1127), T.e(8429), T.e(8628)]).then((() => () => T(37473))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([T.e(9512), T.e(9587), T.e(1127), T.e(8240)]).then((() => () => T(12841))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([T.e(6200), T.e(8833), T.e(8853), T.e(1127), T.e(2148), T.e(8429), T.e(9623), T.e(1788), T.e(5966), T.e(6313), T.e(8322), T.e(3730)]).then((() => () => T(67293))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([T.e(6200), T.e(8068), T.e(1127), T.e(2148), T.e(9623), T.e(5966), T.e(5326)]).then((() => () => T(76070))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([T.e(6200), T.e(450), T.e(1127), T.e(2148), T.e(9623), T.e(1788), T.e(5941)]).then((() => () => T(89757))))), o("react-dom", "18.3.1", (() => Promise.all([T.e(1098), T.e(1127)]).then((() => () => T(71098))))), o("react-dom", "19.1.0", (() => Promise.all([T.e(1127), T.e(3421)]).then((() => () => T(83421))))), o("react-router-dom", "6.30.0", (() => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then((() => () => T(15389))))), o("react", "18.3.1", (() => T.e(8431).then((() => () => T(48431)))))), e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          T.g.importScripts && (e = T.g.location + "");
          var a = T.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var d = r.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = r[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), T.p = e
        })(), f = e => {
          var a = e => e.split(".").map((e => +e == e ? +e : e)),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            d = r[1] ? a(r[1]) : [];
          return r[2] && (d.length++, d.push.apply(d, a(r[2]))), r[3] && (d.push([]), d.push.apply(d, a(r[3]))), d
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var d = e[r],
              t = (typeof d)[0];
            if (r >= a.length) return "u" == t;
            var c = a[r],
              o = (typeof c)[0];
            if (t != o) return "o" == t && "n" == o || "s" == o || "u" == t;
            if ("o" != t && "u" != t && d != c) return d < c;
            r++
          }
        }, o = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var d = 1, t = 1; t < e.length; t++) d--, r += "u" == (typeof(c = e[t]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, c);
            return r
          }
          var f = [];
          for (t = 1; t < e.length; t++) {
            var c = e[t];
            f.push(0 === c ? "not(" + n() + ")" : 1 === c ? "(" + n() + " || " + n() + ")" : 2 === c ? f.pop() + " " + f.pop() : o(c))
          }
          return n();

          function n() {
            return f.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, n = (e, a) => {
          if (0 in e) {
            a = f(a);
            var r = e[0],
              d = r < 0;
            d && (r = -r - 1);
            for (var t = 0, c = 1, o = !0;; c++, t++) {
              var b, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (t >= a.length || "o" == (i = (typeof(b = a[t]))[0])) return !o || ("u" == s ? c > r && !d : "" == s != d);
              if ("u" == i) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == i)
                  if (c <= r) {
                    if (b != e[c]) return !1
                  } else {
                    if (d ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (d || c <= r) return !1;
                o = !1, c--
              } else {
                if (c <= r || i < s != d) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (t = 1; t < e.length; t++) {
            var p = e[t];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? n(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && T.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}), l = (e, a, r, d) => {
          var t = d ? s(e[a]) : e[a];
          return (a = Object.keys(t).reduce(((e, a) => !n(r, a) || e && !c(e, a) ? e : a), 0)) && t[a]
        }, u = (e, a, r) => {
          var d = r ? s(e[a]) : e[a];
          return Object.keys(d).reduce(((e, a) => !e || !d[e].loaded && c(e, a) ? a : e), 0)
        }, p = (e, a, r, d) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(d) + ")", h = (e, a, r, d, t) => {
          var f = e[r];
          return "No satisfying version (" + o(d) + ")" + (t ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, d, t, f) {
          var c = T.I(a);
          return c && c.then && !d ? c.then(e.bind(e, a, T.S[a], r, !1, t, f)) : e(a, T.S[a], r, d, t, f)
        })(((e, a, r, d, t, f) => {
          if (!b(a, r)) return v(e, r, f);
          var c = l(a, r, t, d);
          return c ? i(c) : f ? f() : void m(h(a, e, r, t, d))
        })), k = y(((e, a, r, d, t, f) => {
          if (!b(a, r)) return v(e, r, f);
          var c = u(a, r, d);
          return n(t, c) || g(p(a, r, c, t)), i(a[r][c])
        })), _ = {}, E = {
          71127: () => k("default", "react", !1, [1, 18, 2, 0], (() => T.e(8431).then((() => () => T(48431))))),
          18429: () => k("default", "react-dom", !1, [1, 18, 2, 0], (() => T.e(1098).then((() => () => T(71098))))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([T.e(5389), T.e(8429)]).then((() => () => T(15389))))),
          81788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([T.e(9512), T.e(9587), T.e(5859)]).then((() => () => T(12841))))),
          95966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(450), T.e(2148), T.e(1788), T.e(9757)]).then((() => () => T(89757))))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(8068), T.e(2148), T.e(6070)]).then((() => () => T(76070))))),
          86695: () => w("default", "@foundry/react", !1, [2, 5, 2], (() => Promise.all([T.e(8833), T.e(9512), T.e(78), T.e(3817), T.e(8628)]).then((() => () => T(37473))))),
          20270: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(8833), T.e(2148), T.e(6313)]).then((() => () => T(67293))))),
          78628: () => k("default", "react-dom", !1, [1, 18, 2, 0], (() => T.e(5802).then((() => () => T(83421)))))
        }, P = {
          1127: [71127],
          1788: [81788],
          3569: [20270],
          5966: [95966],
          8322: [2918, 86695],
          8429: [18429],
          8628: [78628],
          9623: [9623]
        }, S = {}, T.f.consumes = (e, a) => {
          T.o(P, e) && P[e].forEach((e => {
            if (T.o(_, e)) return a.push(_[e]);
            if (!S[e]) {
              var r = a => {
                _[e] = 0, T.m[e] = r => {
                  delete T.c[e], r.exports = a()
                }
              };
              S[e] = !0;
              var d = a => {
                delete _[e], T.m[e] = r => {
                  throw delete T.c[e], a
                }
              };
              try {
                var t = E[e]();
                t.then ? a.push(_[e] = t.then(r).catch(d)) : r(t)
              } catch (e) {
                d(e)
              }
            }
          }))
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            T.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                78: 1,
                3569: 1,
                3730: 1,
                3817: 1,
                6313: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var d = T.miniCssF(e),
                  t = T.p + d;
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
                  f.rel = "stylesheet", f.type = "text/css", T.nc && (f.nonce = T.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) d();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), t(n)
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
          T.f.j = (a, r) => {
            var d = T.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) r.push(d[2]);
              else if (/^(1127|1788|3730|5966|8429|8628|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((r, t) => d = e[a] = [r, t]));
              r.push(d[2] = t);
              var f = T.p + T.u(a),
                c = new Error;
              T.l(f, (r => {
                if (T.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", c.name = "ChunkLoadError", c.type = t, c.request = f, d[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var d, t, [f, c, o] = r,
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (d in c) T.o(c, d) && (T.m[d] = c[d]);
                o && o(T)
              }
              for (a && a(r); n < f.length; n++) t = f[n], T.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), T.nc = void 0, T(93032), T(98478)
      })())
    }
  }
}));