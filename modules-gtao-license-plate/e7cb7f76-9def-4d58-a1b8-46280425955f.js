try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e7cb7f76-9def-4d58-a1b8-46280425955f", e._sentryDebugIdIdentifier = "sentry-dbid-e7cb7f76-9def-4d58-a1b8-46280425955f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [4251], {
    79465(e) {
      "use strict";
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === i
            }(e)
          }(e)
        },
        i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function r(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? s((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
        var i
      }

      function n(e, t, i) {
        return e.concat(t).map(function(e) {
          return r(e, i)
        })
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function a(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function s(e, i, u) {
        (u = u || {}).arrayMerge = u.arrayMerge || n, u.isMergeableObject = u.isMergeableObject || t, u.cloneUnlessOtherwiseSpecified = r;
        var c = Array.isArray(i);
        return c === Array.isArray(e) ? c ? u.arrayMerge(e, i, u) : function(e, t, i) {
          var n = {};
          return i.isMergeableObject(e) && o(e).forEach(function(t) {
            n[t] = r(e[t], i)
          }), o(t).forEach(function(o) {
            (function(e, t) {
              return a(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (a(e, o) && i.isMergeableObject(t[o]) ? n[o] = function(e, t) {
              if (!t.customMerge) return s;
              var i = t.customMerge(e);
              return "function" == typeof i ? i : s
            }(o, i)(e[o], t[o], i) : n[o] = r(t[o], i))
          }), n
        }(e, i, u) : r(i, u)
      }
      s.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, i) {
          return s(e, i, t)
        }, {})
      };
      var u = s;
      e.exports = u
    },
    81878(e, t, i) {
      "use strict";
      (r = i(71127)) && "object" == typeof r && "default" in r && r.default;
      var r, n = i(40139),
        o = new n,
        a = o.getBrowser(),
        s = (o.getCPU(), o.getDevice()),
        u = o.getEngine(),
        c = o.getOS(),
        l = o.getUA();
      var d = "mobile",
        b = "tablet",
        f = "Chrome",
        w = "Firefox",
        p = "Opera",
        h = "Yandex",
        m = "Safari",
        g = "Internet Explorer",
        v = "Edge",
        y = "Chromium",
        k = "IE",
        x = "Mobile Safari",
        _ = "MIUI Browser",
        S = "Samsung Browser",
        O = "iOS",
        E = "Android",
        A = "Windows Phone",
        C = "Windows",
        T = "Mac OS",
        j = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        N = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        M = function(e) {
          var t = N();
          return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
        },
        R = function(e) {
          return e.type === d
        },
        D = function(e) {
          return e.type === b
        },
        z = function(e) {
          var t = e.type;
          return t === d || t === b
        },
        I = function(e) {
          return "smarttv" === e.type
        },
        U = function(e) {
          return void 0 === e.type
        },
        P = function(e) {
          return "wearable" === e.type
        },
        V = function(e) {
          return "console" === e.type
        },
        q = function(e) {
          return "embedded" === e.type
        },
        B = function(e) {
          var t = e.vendor;
          return j(t)
        },
        L = function(e) {
          var t = e.model;
          return j(t)
        },
        F = function(e) {
          var t = e.type;
          return j(t, "browser")
        },
        W = function(e) {
          return e.name === E
        },
        $ = function(e) {
          return e.name === C
        },
        H = function(e) {
          return e.name === T
        },
        G = function(e) {
          return e.name === A
        },
        K = function(e) {
          return e.name === O
        },
        J = function(e) {
          var t = e.version;
          return j(t)
        },
        X = function(e) {
          var t = e.name;
          return j(t)
        },
        Y = function(e) {
          return e.name === f
        },
        Z = function(e) {
          return e.name === w
        },
        Q = function(e) {
          return e.name === y
        },
        ee = function(e) {
          return e.name === v
        },
        te = function(e) {
          return e.name === h
        },
        ie = function(e) {
          var t = e.name;
          return t === m || t === x
        },
        re = function(e) {
          return e.name === x
        },
        ne = function(e) {
          return e.name === p
        },
        oe = function(e) {
          var t = e.name;
          return t === g || t === k
        },
        ae = function(e) {
          return e.name === _
        },
        se = function(e) {
          return e.name === S
        },
        ue = function(e) {
          var t = e.version;
          return j(t)
        },
        ce = function(e) {
          var t = e.major;
          return j(t)
        },
        le = function(e) {
          var t = e.name;
          return j(t)
        },
        de = function(e) {
          var t = e.name;
          return j(t)
        },
        be = function(e) {
          var t = e.version;
          return j(t)
        },
        fe = function() {
          var e = N(),
            t = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof t && /electron/.test(t)
        },
        we = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        pe = function() {
          var e = N();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        he = function() {
          return M("iPad")
        },
        me = function() {
          return M("iPhone")
        },
        ge = function() {
          return M("iPod")
        },
        ve = function(e) {
          return j(e)
        };
      var ye = I(s),
        ke = (V(s), P(s)),
        xe = (q(s), re(a) || he(), Q(a), z(s) || he(), R(s), D(s) || he(), U(s), U(s), W(c), G(c), K(c) || he(), Y(a), Z(a), ie(a), ne(a), oe(a)),
        _e = (J(c), X(c), ue(a), ce(a), le(a)),
        Se = (B(s), L(s), de(u), be(u), ve(l), ee(a) || we(l), te(a), F(s), pe(), he(), me(), ge(), fe(), we(l), ee(a) && !we(l));
      $(c), H(c), ae(a), se(a);
      t.C0 = _e, t.lT = xe, t.n8 = Se, t.UX = ye, t.w = ke
    },
    69245(e, t, i) {
      "use strict";
      var r = i(71127),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, i) {
        var r, o = {},
          c = null,
          l = null;
        for (r in void 0 !== i && (c = "" + i), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: l,
          props: o,
          _owner: s.current
        }
      }
      t.Fragment = o, t.jsx = c, t.jsxs = c
    },
    42295(e, t, i) {
      "use strict";
      e.exports = i(69245)
    },
    82540(e, t, i) {
      "use strict";
      e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(e.exports, i(71127))
    },
    40139(e, t, i) {
      var r;
      ! function(n, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          u = "object",
          c = "string",
          l = "major",
          d = "model",
          b = "name",
          f = "type",
          w = "vendor",
          p = "version",
          h = "architecture",
          m = "console",
          g = "mobile",
          v = "tablet",
          y = "smarttv",
          k = "wearable",
          x = "embedded",
          _ = "Amazon",
          S = "Apple",
          O = "ASUS",
          E = "BlackBerry",
          A = "Browser",
          C = "Chrome",
          T = "Firefox",
          j = "Google",
          N = "Honor",
          M = "Huawei",
          R = "LG",
          D = "Microsoft",
          z = "Motorola",
          I = "Nvidia",
          U = "OnePlus",
          P = "Opera",
          V = "OPPO",
          q = "Samsung",
          B = "Sharp",
          L = "Sony",
          F = "Xiaomi",
          W = "Zebra",
          $ = "Facebook",
          H = "Chromium OS",
          G = "Mac OS",
          K = " Browser",
          J = function(e) {
            for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
            return t
          },
          X = function(e, t) {
            return typeof e === c && -1 !== Y(t).indexOf(Y(e))
          },
          Y = function(e) {
            return e.toLowerCase()
          },
          Z = function(e, t) {
            if (typeof e === c) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
          },
          Q = function(e, t) {
            for (var i, r, n, s, c, l, d = 0; d < t.length && !c;) {
              var b = t[d],
                f = t[d + 1];
              for (i = r = 0; i < b.length && !c && b[i];)
                if (c = b[i++].exec(e))
                  for (n = 0; n < f.length; n++) l = c[++r], typeof(s = f[n]) === u && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
              d += 2
            }
          },
          ee = function(e, t) {
            for (var i in t)
              if (typeof t[i] === u && t[i].length > 0) {
                for (var r = 0; r < t[i].length; r++)
                  if (X(t[i][r], e)) return "?" === i ? o : i
              } else if (X(t[i], e)) return "?" === i ? o : i;
            return t.hasOwnProperty("*") ? t["*"] : e
          },
          te = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          },
          ie = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [p, [b, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [p, [b, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [b, p],
              [/opios[\/ ]+([\w\.]+)/i],
              [p, [b, P + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [p, [b, P + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [b, P]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [p, [b, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [p, [b, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [b, p],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [p, [b, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [p, [b, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [p, [b, "UC" + A]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [p, [b, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [p, [b, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [p, [b, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [p, [b, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [p, [b, "Smart Lenovo " + A]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1 Secure " + A], p
              ],
              [/\bfocus\/([\w\.]+)/i],
              [p, [b, T + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [b, P + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [b, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [b, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [b, P + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [b, "MIUI" + K]],
              [/fxios\/([\w\.-]+)/i],
              [p, [b, T]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [p, [b, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1Browser"], p
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1" + K], p
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [p, [b, q + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [p, [b, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [b, "Sogou Mobile"], p
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [b, p],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [b],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [p, b],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [b, $], p
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [b, p],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [p, [b, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [p, [b, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [p, [b, C + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [b, C + " WebView"], p
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [p, [b, "Android " + A]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [b, p],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [p, [b, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [p, b],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [b, [p, ee, {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [b, p],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [b, "Netscape"], p
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [b, p],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [p, [b, T + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
              [b, [p, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [b, [p, /master.|lts./, ""]]
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [
                [h, "amd64"]
              ],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [
                [h, "ia32"]
              ],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [
                [h, "arm64"]
              ],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [
                [h, "armhf"]
              ],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [
                [h, "arm"]
              ],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [
                [h, /ower/, "", Y]
              ],
              [/ sun4\w[;\)]/i],
              [
                [h, "sparc"]
              ],
              [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
              [
                [h, Y]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [d, [w, q],
                [f, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [d, [w, q],
                [f, g]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [w, S],
                [f, g]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [d, [w, S],
                [f, v]
              ],
              [/(macintosh);/i],
              [d, [w, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [w, B],
                [f, g]
              ],
              [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
              [d, [w, N],
                [f, v]
              ],
              [/honor([-\w ]+)[;\)]/i],
              [d, [w, N],
                [f, g]
              ],
              [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
              [d, [w, M],
                [f, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [d, [w, M],
                [f, g]
              ],
              [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [w, F],
                [f, v]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
              [
                [d, /_/g, " "],
                [w, F],
                [f, g]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [d, [w, V],
                [f, g]
              ],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [d, [w, ee, {
                  OnePlus: ["304", "403", "203"],
                  "*": V
                }],
                [f, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [w, "Vivo"],
                [f, g]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [w, "Realme"],
                [f, g]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [d, [w, z],
                [f, g]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [w, z],
                [f, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [w, R],
                [f, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [d, [w, R],
                [f, g]
              ],
              [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
              [d, [w, "Lenovo"],
                [f, v]
              ],
              [/(nokia) (t[12][01])/i],
              [w, d, [f, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
              [
                [d, /_/g, " "],
                [f, g],
                [w, "Nokia"]
              ],
              [/(pixel (c|tablet))\b/i],
              [d, [w, j],
                [f, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [w, j],
                [f, g]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [d, [w, L],
                [f, g]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [w, L],
                [f, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [d, [w, U],
                [f, g]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [d, [w, _],
                [f, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [w, _],
                [f, g]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, w, [f, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [w, E],
                [f, g]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [d, [w, O],
                [f, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [w, O],
                [f, g]
              ],
              [/(nexus 9)/i],
              [d, [w, "HTC"],
                [f, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [w, [d, /_/g, " "],
                [f, g]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [d, [w, "TCL"],
                [f, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [w, Y], d, [f, ee, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [w, "Acer"],
                [f, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [w, "Meizu"],
                [f, g]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [w, "Ulefone"],
                [f, g]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [d, [w, "Energizer"],
                [f, g]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [w, "Cat"],
                [f, g]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [w, "Smartfren"],
                [f, g]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [w, "Nothing"],
                [f, g]
              ],
              [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
              [d, [w, "Archos"],
                [f, v]
              ],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [d, [w, "Archos"],
                [f, g]
              ],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [w, d, [f, v]],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
              [w, d, [f, g]],
              [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [w, d, [f, v]],
              [/(surface duo)/i],
              [d, [w, D],
                [f, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [w, "Fairphone"],
                [f, g]
              ],
              [/(u304aa)/i],
              [d, [w, "AT&T"],
                [f, g]
              ],
              [/\bsie-(\w*)/i],
              [d, [w, "Siemens"],
                [f, g]
              ],
              [/\b(rct\w+) b/i],
              [d, [w, "RCA"],
                [f, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [w, "Dell"],
                [f, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [w, "Verizon"],
                [f, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [w, "Barnes & Noble"],
                [f, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [d, [w, "NuVision"],
                [f, v]
              ],
              [/\b(k88) b/i],
              [d, [w, "ZTE"],
                [f, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [d, [w, "ZTE"],
                [f, g]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [w, "Swiss"],
                [f, g]
              ],
              [/\b(zur\d{3}) b/i],
              [d, [w, "Swiss"],
                [f, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [w, "Zeki"],
                [f, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [w, "Dragon Touch"], d, [f, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [w, "Insignia"],
                [f, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [w, "NextBook"],
                [f, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [w, "Voice"], d, [f, g]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [w, "LvTel"], d, [f, g]
              ],
              [/\b(ph-1) /i],
              [d, [w, "Essential"],
                [f, g]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [w, "Envizen"],
                [f, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [w, "MachSpeed"],
                [f, v]
              ],
              [/\btu_(1491) b/i],
              [d, [w, "Rotor"],
                [f, v]
              ],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [d, [w, I],
                [f, v]
              ],
              [/(sprint) (\w+)/i],
              [w, d, [f, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [w, D],
                [f, g]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [w, W],
                [f, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [w, W],
                [f, g]
              ],
              [/smart-tv.+(samsung)/i],
              [w, [f, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [w, q],
                [f, y]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [w, R],
                [f, y]
              ],
              [/(apple) ?tv/i],
              [w, [d, S + " TV"],
                [f, y]
              ],
              [/crkey/i],
              [
                [d, C + "cast"],
                [w, j],
                [f, y]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [w, _],
                [f, y]
              ],
              [/(shield \w+ tv)/i],
              [d, [w, I],
                [f, y]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [w, B],
                [f, y]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [w, L],
                [f, y]
              ],
              [/(mi(tv|box)-?\w+) bui/i],
              [d, [w, F],
                [f, y]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [w, d, [f, y]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [w, Z],
                [d, Z],
                [f, y]
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [d, [f, y]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [f, y]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [w, d, [f, m]],
              [/droid.+; (shield)( bui|\))/i],
              [d, [w, I],
                [f, m]
              ],
              [/(playstation \w+)/i],
              [d, [w, L],
                [f, m]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [w, D],
                [f, m]
              ],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [d, [w, q],
                [f, k]
              ],
              [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
              [w, d, [f, k]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [d, [w, V],
                [f, k]
              ],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [w, S],
                [f, k]
              ],
              [/(opwwe\d{3})/i],
              [d, [w, U],
                [f, k]
              ],
              [/(moto 360)/i],
              [d, [w, z],
                [f, k]
              ],
              [/(smartwatch 3)/i],
              [d, [w, L],
                [f, k]
              ],
              [/(g watch r)/i],
              [d, [w, R],
                [f, k]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [w, W],
                [f, k]
              ],
              [/droid.+; (glass) \d/i],
              [d, [w, j],
                [f, k]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [w, d, [f, k]],
              [/; (quest( \d| pro)?)/i],
              [d, [w, $],
                [f, k]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [w, [f, x]],
              [/(aeobc)\b/i],
              [d, [w, _],
                [f, x]
              ],
              [/(homepod).+mac os/i],
              [d, [w, S],
                [f, x]
              ],
              [/windows iot/i],
              [
                [f, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [d, [f, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [f, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [f, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [f, g]
              ],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [d, [w, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [p, [b, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [b, p],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [b, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [b, p],
              [/ladybird\//i],
              [
                [b, "LibWeb"]
              ],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [p, b]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [b, p],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [b, [p, ee, te]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [p, ee, te],
                [b, "Windows"]
              ],
              [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [p, /_/g, "."],
                [b, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [b, G],
                [p, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [p, b],
              [/(ubuntu) ([\w\.]+) like android/i],
              [
                [b, /(.+)/, "$1 Touch"], p
              ],
              [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
              [b, p],
              [/\(bb(10);/i],
              [p, [b, E]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [p, [b, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [p, [b, T + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [b, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [p, [b, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [b, C + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [b, H], p
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [b, p],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [b, "Solaris"], p
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [b, p]
            ]
          },
          re = function(e, t) {
            if (typeof e === u && (t = e, e = o), !(this instanceof re)) return new re(e, t).getResult();
            var i = typeof n !== s && n.navigator ? n.navigator : o,
              r = e || (i && i.userAgent ? i.userAgent : ""),
              m = i && i.userAgentData ? i.userAgentData : o,
              y = t ? function(e, t) {
                var i = {};
                for (var r in e) t[r] && t[r].length % 2 == 0 ? i[r] = t[r].concat(e[r]) : i[r] = e[r];
                return i
              }(ie, t) : ie,
              k = i && i.userAgent == r;
            return this.getBrowser = function() {
              var e, t = {};
              return t[b] = o, t[p] = o, Q.call(t, r, y.browser), t[l] = typeof(e = t[p]) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, k && i && i.brave && typeof i.brave.isBrave == a && (t[b] = "Brave"), t
            }, this.getCPU = function() {
              var e = {};
              return e[h] = o, Q.call(e, r, y.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[w] = o, e[d] = o, e[f] = o, Q.call(e, r, y.device), k && !e[f] && m && m.mobile && (e[f] = g), k && "Macintosh" == e[d] && i && typeof i.standalone !== s && i.maxTouchPoints && i.maxTouchPoints > 2 && (e[d] = "iPad", e[f] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[b] = o, e[p] = o, Q.call(e, r, y.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[b] = o, e[p] = o, Q.call(e, r, y.os), k && !e[b] && m && m.platform && "Unknown" != m.platform && (e[b] = m.platform.replace(/chrome os/i, H).replace(/macos/i, G)), e
            }, this.getResult = function() {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              }
            }, this.getUA = function() {
              return r
            }, this.setUA = function(e) {
              return r = typeof e === c && e.length > 500 ? Z(e, 500) : e, this
            }, this.setUA(r), this
          };
        re.VERSION = "1.0.41", re.BROWSER = J([b, p, l]), re.CPU = J([h]), re.DEVICE = J([d, w, f, m, g, y, v, k, x]), re.ENGINE = re.OS = J([b, p]), typeof t !== s ? (e.exports && (t = e.exports = re), t.UAParser = re) : i.amdO ? (r = function() {
          return re
        }.call(t, i, t, e)) === o || (e.exports = r) : typeof n !== s && (n.UAParser = re);
        var ne = typeof n !== s && (n.jQuery || n.Zepto);
        if (ne && !ne.ua) {
          var oe = new re;
          ne.ua = oe.getResult(), ne.ua.get = function() {
            return oe.getUA()
          }, ne.ua.set = function(e) {
            oe.setUA(e);
            var t = oe.getResult();
            for (var i in t) ne.ua[i] = t[i]
          }
        }
      }("object" == typeof window ? window : this)
    },
    21823(e, t, i) {
      "use strict";
      i.d(t, {
        MS: () => u,
        UT: () => c,
        WR: () => s,
        bl: () => n
      });
      var r = i(87552),
        n = new r.DX,
        o = new WeakMap;

      function a(e) {
        var t = o.get(e);
        return t || o.set(e, t = {
          vars: new Set,
          dep: (0, r.yN)()
        }), t
      }

      function s(e) {
        a(e).vars.forEach(function(t) {
          return t.forgetCache(e)
        })
      }

      function u(e) {
        a(e).vars.forEach(function(t) {
          return t.attachCache(e)
        })
      }

      function c(e) {
        var t = new Set,
          i = new Set,
          r = function(s) {
            if (arguments.length > 0) {
              if (e !== s) {
                e = s, t.forEach(function(e) {
                  a(e).dep.dirty(r),
                    function(e) {
                      e.broadcastWatches && e.broadcastWatches()
                    }(e)
                });
                var u = Array.from(i);
                i.clear(), u.forEach(function(t) {
                  return t(e)
                })
              }
            } else {
              var c = n.getValue();
              c && (o(c), a(c).dep(r))
            }
            return e
          };
        r.onNextChange = function(e) {
          return i.add(e),
            function() {
              i.delete(e)
            }
        };
        var o = r.attachCache = function(e) {
          return t.add(e), a(e).vars.add(r), r
        };
        return r.forgetCache = function(e) {
          return t.delete(e)
        }, r
      }
    },
    93452(e, t, i) {
      "use strict";
      i.d(t, {
        q: () => o
      });
      var r = i(82540),
        n = i(325);

      function o(e) {
        return (0, n.r)(r.useCallback(function(t) {
          return e.onNextChange(function i() {
            t(), e.onNextChange(i)
          })
        }, [e]), e, e)
      }
    },
    325(e, t, i) {
      "use strict";
      var r;
      i.d(t, {
        r: () => u
      });
      var n = i(82966),
        o = i(82540),
        a = i(46026),
        s = !1,
        u = (r || (r = i.t(o, 2))).useSyncExternalStore || function(e, t, i) {
          var r = t();
          !1 === globalThis.__DEV__ || s || r === t() || (s = !0, !1 !== globalThis.__DEV__ && n.V1.error(91));
          var u = o.useState({
              inst: {
                value: r,
                getSnapshot: t
              }
            }),
            l = u[0].inst,
            d = u[1];
          return a.JR ? o.useLayoutEffect(function() {
            Object.assign(l, {
              value: r,
              getSnapshot: t
            }), c(l) && d({
              inst: l
            })
          }, [e, r, t]) : Object.assign(l, {
            value: r,
            getSnapshot: t
          }), o.useEffect(function() {
            return c(l) && d({
              inst: l
            }), e(function() {
              c(l) && d({
                inst: l
              })
            })
          }, [e]), r
        };

      function c(e) {
        var t = e.value,
          i = e.getSnapshot;
        try {
          return t !== i()
        } catch (e) {
          return !0
        }
      }
    },
    46026(e, t, i) {
      "use strict";
      i.d(t, {
        En: () => a,
        JR: () => d,
        Sw: () => c,
        et: () => o,
        ol: () => s,
        uJ: () => u
      });
      var r = i(82966),
        n = "ReactNative" == (0, r.no)(function() {
          return navigator.product
        }),
        o = "function" == typeof WeakMap && !(n && !i.g.HermesInternal),
        a = "function" == typeof WeakSet,
        s = "function" == typeof Symbol && "function" == typeof Symbol.for,
        u = s && Symbol.asyncIterator,
        c = "function" == typeof(0, r.no)(function() {
          return window.document.createElement
        }),
        l = (0, r.no)(function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        }) || !1,
        d = (c || n) && !l
    },
    35907(e, t, i) {
      "use strict";
      i.d(t, {
        v: () => n
      });
      var r = new Map;

      function n(e) {
        var t = r.get(e) || 1;
        return r.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2))
      }
    },
    46465(e, t, i) {
      "use strict";
      i.d(t, {
        p: () => n
      });
      var r = i(35907);

      function n(e, t) {
        void 0 === t && (t = 0);
        var i = (0, r.v)("stringifyForDisplay");
        return JSON.stringify(e, function(e, t) {
          return void 0 === t ? i : t
        }, t).split(JSON.stringify(i)).join("<undefined>")
      }
    },
    23323(e, t, i) {
      "use strict";
      i.d(t, {
        A: () => n
      });
      var r = i(91902);
      const n = (0, r.n)(function() {
        return globalThis
      }) || (0, r.n)(function() {
        return window
      }) || (0, r.n)(function() {
        return self
      }) || (0, r.n)(function() {
        return i.g
      }) || (0, r.n)(function() {
        return r.n.constructor("return this")()
      })
    },
    82966(e, t, i) {
      "use strict";
      i.d(t, {
        Sf: () => o.A,
        V1: () => r.V1,
        no: () => n.n,
        vA: () => r.vA
      });
      var r = i(45305),
        n = i(91902),
        o = i(23323);
      globalThis.__DEV__
    },
    45305(e, t, i) {
      "use strict";
      i.d(t, {
        V1: () => m,
        vA: () => g
      });
      var r = i(78322),
        n = "Invariant Violation",
        o = Object.setPrototypeOf,
        a = void 0 === o ? function(e, t) {
          return e.__proto__ = t, e
        } : o,
        s = function(e) {
          function t(i) {
            void 0 === i && (i = n);
            var r = e.call(this, "number" == typeof i ? n + ": " + i + " (see https://github.com/apollographql/invariant-packages)" : i) || this;
            return r.framesToPop = 1, r.name = n, a(r, t.prototype), r
          }
          return (0, r.__extends)(t, e), t
        }(Error);

      function u(e, t) {
        if (!e) throw new s(t)
      }
      var c, l = ["debug", "log", "warn", "error", "silent"],
        d = l.indexOf("log");

      function b(e) {
        return function() {
          if (l.indexOf(e) >= d) return (console[e] || console.log).apply(console, arguments)
        }
      }(c = u || (u = {})).debug = b("debug"), c.log = b("log"), c.warn = b("warn"), c.error = b("error");
      var f = i(48914),
        w = i(23323),
        p = i(46465);

      function h(e) {
        return function(t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          if ("number" == typeof t) {
            var n = t;
            (t = k(n)) || (t = x(n, i), i = [])
          }
          e.apply(void 0, [t].concat(i))
        }
      }
      var m = Object.assign(function(e, t) {
        for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
        e || u(e, k(t, i) || x(t, i))
      }, {
        debug: h(u.debug),
        log: h(u.log),
        warn: h(u.warn),
        error: h(u.error)
      });

      function g(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        return new s(k(e, t) || x(e, t))
      }
      var v = Symbol.for("ApolloErrorMessageHandler_" + f.r);

      function y(e) {
        if ("string" == typeof e) return e;
        try {
          return (0, p.p)(e, 2).slice(0, 1e3)
        } catch (e) {
          return "<non-serializable>"
        }
      }

      function k(e, t) {
        if (void 0 === t && (t = []), e) return w.A[v] && w.A[v](e, t.map(y))
      }

      function x(e, t) {
        if (void 0 === t && (t = []), e) return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
          version: f.r,
          message: e,
          args: t.map(y)
        })))
      }
    },
    91902(e, t, i) {
      "use strict";

      function r(e) {
        try {
          return e()
        } catch (e) {}
      }
      i.d(t, {
        n: () => r
      })
    },
    48914(e, t, i) {
      "use strict";
      i.d(t, {
        r: () => r
      });
      var r = "3.14.1"
    },
    35394(e, t, i) {
      "use strict";

      function r() {}
      i.d(t, {
        C: () => n
      });
      class n {
        constructor(e = 1 / 0, t = r) {
          this.max = e, this.dispose = t, this.map = new Map, this.newest = null, this.oldest = null
        }
        has(e) {
          return this.map.has(e)
        }
        get(e) {
          const t = this.getNode(e);
          return t && t.value
        }
        get size() {
          return this.map.size
        }
        getNode(e) {
          const t = this.map.get(e);
          if (t && t !== this.newest) {
            const {
              older: e,
              newer: i
            } = t;
            i && (i.older = e), e && (e.newer = i), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = i)
          }
          return t
        }
        set(e, t) {
          let i = this.getNode(e);
          return i ? i.value = t : (i = {
            key: e,
            value: t,
            newer: null,
            older: this.newest
          }, this.newest && (this.newest.newer = i), this.newest = i, this.oldest = this.oldest || i, this.map.set(e, i), i.value)
        }
        clean() {
          for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key)
        }
        delete(e) {
          const t = this.map.get(e);
          return !!t && (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0)
        }
      }
    },
    56926(e, t, i) {
      "use strict";
      i.d(t, {
        b: () => s
      });
      const r = () => Object.create(null),
        {
          forEach: n,
          slice: o
        } = Array.prototype,
        {
          hasOwnProperty: a
        } = Object.prototype;
      class s {
        constructor(e = !0, t = r) {
          this.weakness = e, this.makeData = t
        }
        lookup() {
          return this.lookupArray(arguments)
        }
        lookupArray(e) {
          let t = this;
          return n.call(e, e => t = t.getChildTrie(e)), a.call(t, "data") ? t.data : t.data = this.makeData(o.call(e))
        }
        peek() {
          return this.peekArray(arguments)
        }
        peekArray(e) {
          let t = this;
          for (let i = 0, r = e.length; t && i < r; ++i) {
            const r = t.mapFor(e[i], !1);
            t = r && r.get(e[i])
          }
          return t && t.data
        }
        remove() {
          return this.removeArray(arguments)
        }
        removeArray(e) {
          let t;
          if (e.length) {
            const i = e[0],
              r = this.mapFor(i, !1),
              n = r && r.get(i);
            n && (t = n.removeArray(o.call(e, 1)), n.data || n.weak || n.strong && n.strong.size || r.delete(i))
          } else t = this.data, delete this.data;
          return t
        }
        getChildTrie(e) {
          const t = this.mapFor(e, !0);
          let i = t.get(e);
          return i || t.set(e, i = new s(this.weakness, this.makeData)), i
        }
        mapFor(e, t) {
          return this.weakness && function(e) {
            switch (typeof e) {
              case "object":
                if (null === e) break;
              case "function":
                return !0
            }
            return !1
          }(e) ? this.weak || (t ? this.weak = new WeakMap : void 0) : this.strong || (t ? this.strong = new Map : void 0)
        }
      }
    },
    42887(e, t, i) {
      "use strict";
      i.d(t, {
        sc: () => n
      });
      const r = e => async (t, {
        outputFormat: i = "hex"
      } = {}) => {
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const r = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === i ? (e => {
          const t = new DataView(e);
          let i = "";
          for (let e = 0; e < t.byteLength; e += 4) i += t.getUint32(e).toString(16).padStart(8, "0");
          return i
        })(r) : r
      }, n = (r("SHA-1"), r("SHA-256"));
      r("SHA-384"), r("SHA-512")
    },
    37980(e, t, i) {
      "use strict";

      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var r in i) e[r] = i[r]
        }
        return e
      }
      i.d(t, {
        A: () => n
      });
      var n = function e(t, i) {
        function n(e, n, o) {
          if ("undefined" != typeof document) {
            "number" == typeof(o = r({}, i, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var s in o) o[s] && (a += "; " + s, !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
            return document.cookie = e + "=" + t.write(n, e) + a
          }
        }
        return Object.create({
          set: n,
          get: function(e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (var i = document.cookie ? document.cookie.split("; ") : [], r = {}, n = 0; n < i.length; n++) {
                var o = i[n].split("="),
                  a = o.slice(1).join("=");
                try {
                  var s = decodeURIComponent(o[0]);
                  if (r[s] = t.read(a, s), e === s) break
                } catch (e) {}
              }
              return e ? r[e] : r
            }
          },
          remove: function(e, t) {
            n(e, "", r({}, t, {
              expires: -1
            }))
          },
          withAttributes: function(t) {
            return e(this.converter, r({}, this.attributes, t))
          },
          withConverter: function(t) {
            return e(r({}, this.converter, t), this.attributes)
          }
        }, {
          attributes: {
            value: Object.freeze(i)
          },
          converter: {
            value: Object.freeze(t)
          }
        })
      }({
        read: function(e) {
          return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
          return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
      }, {
        path: "/"
      })
    },
    58128(e, t, i) {
      "use strict";
      i.d(t, {
        s: () => n
      });
      class r extends Error {}

      function n(e, t) {
        if ("string" != typeof e) throw new r("Invalid token specified: must be a string");
        t || (t = {});
        const i = !0 === t.header ? 0 : 1,
          n = e.split(".")[i];
        if ("string" != typeof n) throw new r(`Invalid token specified: missing part #${i+1}`);
        let o;
        try {
          o = function(e) {
            let t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
              case 0:
                break;
              case 2:
                t += "==";
                break;
              case 3:
                t += "=";
                break;
              default:
                throw new Error("base64 string is not of the correct length")
            }
            try {
              return function(e) {
                return decodeURIComponent(atob(e).replace(/(.)/g, (e, t) => {
                  let i = t.charCodeAt(0).toString(16).toUpperCase();
                  return i.length < 2 && (i = "0" + i), "%" + i
                }))
              }(t)
            } catch (e) {
              return atob(t)
            }
          }(n)
        } catch (e) {
          throw new r(`Invalid token specified: invalid base64 for part #${i+1} (${e.message})`)
        }
        try {
          return JSON.parse(o)
        } catch (e) {
          throw new r(`Invalid token specified: invalid json for part #${i+1} (${e.message})`)
        }
      }
      r.prototype.name = "InvalidTokenError"
    },
    87552(e, t, i) {
      "use strict";
      i.d(t, {
        DX: () => d,
        yN: () => I,
        LV: () => q
      });
      var r = i(56926),
        n = i(35394);
      let o = null;
      const a = {};
      let s = 1;

      function u(e) {
        try {
          return e()
        } catch (e) {}
      }
      const c = "@wry/context:Slot",
        l = u(() => globalThis) || u(() => i.g) || Object.create(null),
        d = l[c] || Array[c] || function(e) {
          try {
            Object.defineProperty(l, c, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0
            })
          } finally {
            return e
          }
        }(class {
          constructor() {
            this.id = ["slot", s++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          hasValue() {
            for (let e = o; e; e = e.parent)
              if (this.id in e.slots) {
                const t = e.slots[this.id];
                if (t === a) break;
                return e !== o && (o.slots[this.id] = t), !0
              } return o && (o.slots[this.id] = a), !1
          }
          getValue() {
            if (this.hasValue()) return o.slots[this.id]
          }
          withValue(e, t, i, r) {
            const n = {
                __proto__: null,
                [this.id]: e
              },
              a = o;
            o = {
              parent: a,
              slots: n
            };
            try {
              return t.apply(r, i)
            } finally {
              o = a
            }
          }
          static bind(e) {
            const t = o;
            return function() {
              const i = o;
              try {
                return o = t, e.apply(this, arguments)
              } finally {
                o = i
              }
            }
          }
          static noContext(e, t, i) {
            if (!o) return e.apply(i, t); {
              const r = o;
              try {
                return o = null, e.apply(i, t)
              } finally {
                o = r
              }
            }
          }
        }),
        {
          bind: b,
          noContext: f
        } = d,
        w = new d,
        {
          hasOwnProperty: p
        } = Object.prototype,
        h = Array.from || function(e) {
          const t = [];
          return e.forEach(e => t.push(e)), t
        };

      function m(e) {
        const {
          unsubscribe: t
        } = e;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      const g = [];

      function v(e, t) {
        if (!e) throw new Error(t || "assertion failure")
      }

      function y(e, t) {
        const i = e.length;
        return i > 0 && i === t.length && e[i - 1] === t[i - 1]
      }

      function k(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1]
        }
      }

      function x(e) {
        return e.slice(0)
      }
      class _ {
        constructor(e) {
          this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++_.count
        }
        peek() {
          if (1 === this.value.length && !E(this)) return S(this), this.value[0]
        }
        recompute(e) {
          return v(!this.recomputing, "already recomputing"), S(this), E(this) ? function(e, t) {
            return R(e), w.withValue(e, O, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  m(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, E(e) || C(e)
              }(e), k(e.value)
          }(this, e) : k(this.value)
        }
        setDirty() {
          this.dirty || (this.dirty = !0, A(this), m(this))
        }
        dispose() {
          this.setDirty(), R(this), T(this, (e, t) => {
            e.setDirty(), D(e, this)
          })
        }
        forget() {
          this.dispose()
        }
        dependOn(e) {
          e.add(this), this.deps || (this.deps = g.pop() || new Set), this.deps.add(e)
        }
        forgetDeps() {
          this.deps && (h(this.deps).forEach(e => e.delete(this)), this.deps.clear(), g.push(this.deps), this.deps = null)
        }
      }

      function S(e) {
        const t = w.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), E(e) ? j(t, e) : N(t, e), t
      }

      function O(e, t) {
        e.recomputing = !0;
        const {
          normalizeResult: i
        } = e;
        let r;
        i && 1 === e.value.length && (r = x(e.value)), e.value.length = 0;
        try {
          if (e.value[0] = e.fn.apply(null, t), i && r && !y(r, e.value)) try {
            e.value[0] = i(e.value[0], r[0])
          } catch (e) {}
        } catch (t) {
          e.value[1] = t
        }
        e.recomputing = !1
      }

      function E(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function A(e) {
        T(e, j)
      }

      function C(e) {
        T(e, N)
      }

      function T(e, t) {
        const i = e.parents.size;
        if (i) {
          const r = h(e.parents);
          for (let n = 0; n < i; ++n) t(r[n], e)
        }
      }

      function j(e, t) {
        v(e.childValues.has(t)), v(E(t));
        const i = !E(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = g.pop() || new Set;
        e.dirtyChildren.add(t), i && A(e)
      }

      function N(e, t) {
        v(e.childValues.has(t)), v(!E(t));
        const i = e.childValues.get(t);
        0 === i.length ? e.childValues.set(t, x(t.value)) : y(i, t.value) || e.setDirty(), M(e, t), E(e) || C(e)
      }

      function M(e, t) {
        const i = e.dirtyChildren;
        i && (i.delete(t), 0 === i.size && (g.length < 100 && g.push(i), e.dirtyChildren = null))
      }

      function R(e) {
        e.childValues.size > 0 && e.childValues.forEach((t, i) => {
          D(e, i)
        }), e.forgetDeps(), v(null === e.dirtyChildren)
      }

      function D(e, t) {
        t.parents.delete(e), e.childValues.delete(t), M(e, t)
      }
      _.count = 0;
      const z = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function I(e) {
        const t = new Map,
          i = e && e.subscribe;

        function r(e) {
          const r = w.getValue();
          if (r) {
            let n = t.get(e);
            n || t.set(e, n = new Set), r.dependOn(n), "function" == typeof i && (m(n), n.unsubscribe = i(e))
          }
        }
        return r.dirty = function(e, i) {
          const r = t.get(e);
          if (r) {
            const n = i && p.call(z, i) ? i : "setDirty";
            h(r).forEach(e => e[n]()), t.delete(e), m(r)
          }
        }, r
      }
      let U;

      function P(...e) {
        return (U || (U = new r.b("function" == typeof WeakMap))).lookupArray(e)
      }
      const V = new Set;

      function q(e, {
        max: t = Math.pow(2, 16),
        keyArgs: i,
        makeCacheKey: r = P,
        normalizeResult: o,
        subscribe: a,
        cache: s = n.C
      } = Object.create(null)) {
        const u = "function" == typeof s ? new s(t, e => e.dispose()) : s,
          c = function() {
            const t = r.apply(null, i ? i.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let n = u.get(t);
            n || (u.set(t, n = new _(e)), n.normalizeResult = o, n.subscribe = a, n.forget = () => u.delete(t));
            const s = n.recompute(Array.prototype.slice.call(arguments));
            return u.set(t, n), V.add(u), w.hasValue() || (V.forEach(e => e.clean()), V.clear()), s
          };

        function l(e) {
          const t = e && u.get(e);
          t && t.setDirty()
        }

        function d(e) {
          const t = e && u.get(e);
          if (t) return t.peek()
        }

        function b(e) {
          return !!e && u.delete(e)
        }
        return Object.defineProperty(c, "size", {
          get: () => u.size,
          configurable: !1,
          enumerable: !1
        }), Object.freeze(c.options = {
          max: t,
          keyArgs: i,
          makeCacheKey: r,
          normalizeResult: o,
          subscribe: a,
          cache: u
        }), c.dirtyKey = l, c.dirty = function() {
          l(r.apply(null, arguments))
        }, c.peekKey = d, c.peek = function() {
          return d(r.apply(null, arguments))
        }, c.forgetKey = b, c.forget = function() {
          return b(r.apply(null, arguments))
        }, c.makeCacheKey = r, c.getKey = i ? function() {
          return r.apply(null, i.apply(null, arguments))
        } : r, Object.freeze(c)
      }
    }
  }
]);