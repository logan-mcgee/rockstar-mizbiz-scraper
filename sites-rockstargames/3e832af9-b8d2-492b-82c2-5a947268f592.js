try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    i = (new e.Error).stack;
  i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "3e832af9-b8d2-492b-82c2-5a947268f592", e._sentryDebugIdIdentifier = "sentry-dbid-3e832af9-b8d2-492b-82c2-5a947268f592")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4089], {
    6988(e, i, o) {
      "use strict";
      (r = o(93082)) && "object" == typeof r && "default" in r && r.default;
      var r, n = o(97727),
        t = new n,
        a = t.getBrowser(),
        s = (t.getCPU(), t.getDevice()),
        b = t.getEngine(),
        d = t.getOS(),
        u = t.getUA();
      var w = "mobile",
        c = "tablet",
        l = "Chrome",
        p = "Firefox",
        f = "Opera",
        m = "Yandex",
        g = "Safari",
        h = "Internet Explorer",
        v = "Edge",
        k = "Chromium",
        x = "IE",
        y = "Mobile Safari",
        S = "MIUI Browser",
        _ = "Samsung Browser",
        T = "iOS",
        C = "Android",
        A = "Windows Phone",
        E = "Windows",
        I = "Mac OS",
        U = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        z = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        O = function(e) {
          var i = z();
          return i && i.platform && (-1 !== i.platform.indexOf(e) || "MacIntel" === i.platform && i.maxTouchPoints > 1 && !window.MSStream)
        },
        M = function(e) {
          return e.type === w
        },
        q = function(e) {
          return e.type === c
        },
        j = function(e) {
          var i = e.type;
          return i === w || i === c
        },
        N = function(e) {
          return "smarttv" === e.type
        },
        P = function(e) {
          return void 0 === e.type
        },
        R = function(e) {
          return "wearable" === e.type
        },
        B = function(e) {
          return "console" === e.type
        },
        D = function(e) {
          return "embedded" === e.type
        },
        L = function(e) {
          var i = e.vendor;
          return U(i)
        },
        V = function(e) {
          var i = e.model;
          return U(i)
        },
        $ = function(e) {
          var i = e.type;
          return U(i, "browser")
        },
        F = function(e) {
          return e.name === C
        },
        H = function(e) {
          return e.name === E
        },
        G = function(e) {
          return e.name === I
        },
        W = function(e) {
          return e.name === A
        },
        X = function(e) {
          return e.name === T
        },
        Z = function(e) {
          var i = e.version;
          return U(i)
        },
        Y = function(e) {
          var i = e.name;
          return U(i)
        },
        K = function(e) {
          return e.name === l
        },
        Q = function(e) {
          return e.name === p
        },
        J = function(e) {
          return e.name === k
        },
        ee = function(e) {
          return e.name === v
        },
        ie = function(e) {
          return e.name === m
        },
        oe = function(e) {
          var i = e.name;
          return i === g || i === y
        },
        re = function(e) {
          return e.name === y
        },
        ne = function(e) {
          return e.name === f
        },
        te = function(e) {
          var i = e.name;
          return i === h || i === x
        },
        ae = function(e) {
          return e.name === S
        },
        se = function(e) {
          return e.name === _
        },
        be = function(e) {
          var i = e.version;
          return U(i)
        },
        de = function(e) {
          var i = e.major;
          return U(i)
        },
        ue = function(e) {
          var i = e.name;
          return U(i)
        },
        we = function(e) {
          var i = e.name;
          return U(i)
        },
        ce = function(e) {
          var i = e.version;
          return U(i)
        },
        le = function() {
          var e = z(),
            i = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof i && /electron/.test(i)
        },
        pe = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        fe = function() {
          var e = z();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        me = function() {
          return O("iPad")
        },
        ge = function() {
          return O("iPhone")
        },
        he = function() {
          return O("iPod")
        },
        ve = function(e) {
          return U(e)
        };
      var ke = N(s),
        xe = (B(s), R(s)),
        ye = (D(s), re(a) || me(), J(a), j(s) || me(), M(s), q(s) || me(), P(s), P(s), F(d), W(d), X(d) || me(), K(a), Q(a), oe(a), ne(a), te(a)),
        Se = (Z(d), Y(d), be(a), de(a), ue(a)),
        _e = (L(s), V(s), we(b), ce(b), ve(u), ee(a) || pe(u), ie(a), $(s), fe(), me(), ge(), he(), le(), pe(u), ee(a) && !pe(u));
      H(d), G(d), ae(a), se(a);
      i.C0 = Se, i.lT = ye, i.n8 = _e, i.UX = ke, i.w = xe
    },
    97727(e, i, o) {
      var r;
      ! function(n, t) {
        "use strict";
        var a = "function",
          s = "undefined",
          b = "object",
          d = "string",
          u = "major",
          w = "model",
          c = "name",
          l = "type",
          p = "vendor",
          f = "version",
          m = "architecture",
          g = "console",
          h = "mobile",
          v = "tablet",
          k = "smarttv",
          x = "wearable",
          y = "embedded",
          S = "Amazon",
          _ = "Apple",
          T = "ASUS",
          C = "BlackBerry",
          A = "Browser",
          E = "Chrome",
          I = "Firefox",
          U = "Google",
          z = "Honor",
          O = "Huawei",
          M = "LG",
          q = "Microsoft",
          j = "Motorola",
          N = "Nvidia",
          P = "OnePlus",
          R = "Opera",
          B = "OPPO",
          D = "Samsung",
          L = "Sharp",
          V = "Sony",
          $ = "Xiaomi",
          F = "Zebra",
          H = "Facebook",
          G = "Chromium OS",
          W = "Mac OS",
          X = " Browser",
          Z = function(e) {
            for (var i = {}, o = 0; o < e.length; o++) i[e[o].toUpperCase()] = e[o];
            return i
          },
          Y = function(e, i) {
            return typeof e === d && -1 !== K(i).indexOf(K(e))
          },
          K = function(e) {
            return e.toLowerCase()
          },
          Q = function(e, i) {
            if (typeof e === d) return e = e.replace(/^\s\s*/, ""), typeof i === s ? e : e.substring(0, 500)
          },
          J = function(e, i) {
            for (var o, r, n, s, d, u, w = 0; w < i.length && !d;) {
              var c = i[w],
                l = i[w + 1];
              for (o = r = 0; o < c.length && !d && c[o];)
                if (d = c[o++].exec(e))
                  for (n = 0; n < l.length; n++) u = d[++r], typeof(s = l[n]) === b && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : t : this[s[0]] = u ? s[1].call(this, u, s[2]) : t : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : t) : this[s] = u || t;
              w += 2
            }
          },
          ee = function(e, i) {
            for (var o in i)
              if (typeof i[o] === b && i[o].length > 0) {
                for (var r = 0; r < i[o].length; r++)
                  if (Y(i[o][r], e)) return "?" === o ? t : o
              } else if (Y(i[o], e)) return "?" === o ? t : o;
            return i.hasOwnProperty("*") ? i["*"] : e
          },
          ie = {
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
          oe = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [f, [c, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [f, [c, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [c, f],
              [/opios[\/ ]+([\w\.]+)/i],
              [f, [c, R + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [f, [c, R + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [f, [c, R]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [f, [c, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [f, [c, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [c, f],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [f, [c, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [f, [c, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [f, [c, "UC" + A]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [f, [c, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [f, [c, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [f, [c, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [f, [c, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [f, [c, "Smart Lenovo " + A]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [c, /(.+)/, "$1 Secure " + A], f
              ],
              [/\bfocus\/([\w\.]+)/i],
              [f, [c, I + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [f, [c, R + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [f, [c, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [f, [c, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [f, [c, R + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [f, [c, "MIUI" + X]],
              [/fxios\/([\w\.-]+)/i],
              [f, [c, I]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [f, [c, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [c, /(.+)/, "$1Browser"], f
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [c, /(.+)/, "$1" + X], f
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [f, [c, D + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [f, [c, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [c, "Sogou Mobile"], f
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [c, f],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [c],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [f, c],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [c, H], f
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [c, f],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [f, [c, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [f, [c, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [f, [c, E + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [c, E + " WebView"], f
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [f, [c, "Android " + A]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [c, f],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [f, [c, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [f, c],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [c, [f, ee, {
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
              [c, f],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [c, "Netscape"], f
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [c, f],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [f, [c, I + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
              [c, [f, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [c, [f, /master.|lts./, ""]]
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [
                [m, "amd64"]
              ],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [
                [m, "ia32"]
              ],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [
                [m, "arm64"]
              ],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [
                [m, "armhf"]
              ],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [
                [m, "arm"]
              ],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [
                [m, /ower/, "", K]
              ],
              [/ sun4\w[;\)]/i],
              [
                [m, "sparc"]
              ],
              [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
              [
                [m, K]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [w, [p, D],
                [l, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [w, [p, D],
                [l, h]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [w, [p, _],
                [l, h]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [w, [p, _],
                [l, v]
              ],
              [/(macintosh);/i],
              [w, [p, _]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [w, [p, L],
                [l, h]
              ],
              [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
              [w, [p, z],
                [l, v]
              ],
              [/honor([-\w ]+)[;\)]/i],
              [w, [p, z],
                [l, h]
              ],
              [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
              [w, [p, O],
                [l, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [w, [p, O],
                [l, h]
              ],
              [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
              [
                [w, /_/g, " "],
                [p, $],
                [l, v]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
              [
                [w, /_/g, " "],
                [p, $],
                [l, h]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [w, [p, B],
                [l, h]
              ],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [w, [p, ee, {
                  OnePlus: ["304", "403", "203"],
                  "*": B
                }],
                [l, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [w, [p, "Vivo"],
                [l, h]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [w, [p, "Realme"],
                [l, h]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [w, [p, j],
                [l, h]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [w, [p, j],
                [l, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [w, [p, M],
                [l, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [w, [p, M],
                [l, h]
              ],
              [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
              [w, [p, "Lenovo"],
                [l, v]
              ],
              [/(nokia) (t[12][01])/i],
              [p, w, [l, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
              [
                [w, /_/g, " "],
                [l, h],
                [p, "Nokia"]
              ],
              [/(pixel (c|tablet))\b/i],
              [w, [p, U],
                [l, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [w, [p, U],
                [l, h]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [w, [p, V],
                [l, h]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [w, "Xperia Tablet"],
                [p, V],
                [l, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [w, [p, P],
                [l, h]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [w, [p, S],
                [l, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [w, /(.+)/g, "Fire Phone $1"],
                [p, S],
                [l, h]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [w, p, [l, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [w, [p, C],
                [l, h]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [w, [p, T],
                [l, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [w, [p, T],
                [l, h]
              ],
              [/(nexus 9)/i],
              [w, [p, "HTC"],
                [l, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [p, [w, /_/g, " "],
                [l, h]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [w, [p, "TCL"],
                [l, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [p, K], w, [l, ee, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [w, [p, "Acer"],
                [l, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [w, [p, "Meizu"],
                [l, h]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [w, [p, "Ulefone"],
                [l, h]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [w, [p, "Energizer"],
                [l, h]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [w, [p, "Cat"],
                [l, h]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [w, [p, "Smartfren"],
                [l, h]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [w, [p, "Nothing"],
                [l, h]
              ],
              [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
              [w, [p, "Archos"],
                [l, v]
              ],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [w, [p, "Archos"],
                [l, h]
              ],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [p, w, [l, v]],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
              [p, w, [l, h]],
              [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [p, w, [l, v]],
              [/(surface duo)/i],
              [w, [p, q],
                [l, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [w, [p, "Fairphone"],
                [l, h]
              ],
              [/(u304aa)/i],
              [w, [p, "AT&T"],
                [l, h]
              ],
              [/\bsie-(\w*)/i],
              [w, [p, "Siemens"],
                [l, h]
              ],
              [/\b(rct\w+) b/i],
              [w, [p, "RCA"],
                [l, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [w, [p, "Dell"],
                [l, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [w, [p, "Verizon"],
                [l, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [w, [p, "Barnes & Noble"],
                [l, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [w, [p, "NuVision"],
                [l, v]
              ],
              [/\b(k88) b/i],
              [w, [p, "ZTE"],
                [l, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [w, [p, "ZTE"],
                [l, h]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [w, [p, "Swiss"],
                [l, h]
              ],
              [/\b(zur\d{3}) b/i],
              [w, [p, "Swiss"],
                [l, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [w, [p, "Zeki"],
                [l, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [p, "Dragon Touch"], w, [l, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [w, [p, "Insignia"],
                [l, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [w, [p, "NextBook"],
                [l, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [p, "Voice"], w, [l, h]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [p, "LvTel"], w, [l, h]
              ],
              [/\b(ph-1) /i],
              [w, [p, "Essential"],
                [l, h]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [w, [p, "Envizen"],
                [l, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [w, [p, "MachSpeed"],
                [l, v]
              ],
              [/\btu_(1491) b/i],
              [w, [p, "Rotor"],
                [l, v]
              ],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [w, [p, N],
                [l, v]
              ],
              [/(sprint) (\w+)/i],
              [p, w, [l, h]],
              [/(kin\.[onetw]{3})/i],
              [
                [w, /\./g, " "],
                [p, q],
                [l, h]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [w, [p, F],
                [l, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [w, [p, F],
                [l, h]
              ],
              [/smart-tv.+(samsung)/i],
              [p, [l, k]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [w, /^/, "SmartTV"],
                [p, D],
                [l, k]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, M],
                [l, k]
              ],
              [/(apple) ?tv/i],
              [p, [w, _ + " TV"],
                [l, k]
              ],
              [/crkey/i],
              [
                [w, E + "cast"],
                [p, U],
                [l, k]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [w, [p, S],
                [l, k]
              ],
              [/(shield \w+ tv)/i],
              [w, [p, N],
                [l, k]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [w, [p, L],
                [l, k]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [w, [p, V],
                [l, k]
              ],
              [/(mi(tv|box)-?\w+) bui/i],
              [w, [p, $],
                [l, k]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, w, [l, k]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [p, Q],
                [w, Q],
                [l, k]
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [w, [l, k]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [l, k]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, w, [l, g]],
              [/droid.+; (shield)( bui|\))/i],
              [w, [p, N],
                [l, g]
              ],
              [/(playstation \w+)/i],
              [w, [p, V],
                [l, g]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [w, [p, q],
                [l, g]
              ],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [w, [p, D],
                [l, x]
              ],
              [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
              [p, w, [l, x]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [w, [p, B],
                [l, x]
              ],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [w, [p, _],
                [l, x]
              ],
              [/(opwwe\d{3})/i],
              [w, [p, P],
                [l, x]
              ],
              [/(moto 360)/i],
              [w, [p, j],
                [l, x]
              ],
              [/(smartwatch 3)/i],
              [w, [p, V],
                [l, x]
              ],
              [/(g watch r)/i],
              [w, [p, M],
                [l, x]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [w, [p, F],
                [l, x]
              ],
              [/droid.+; (glass) \d/i],
              [w, [p, U],
                [l, x]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [p, w, [l, x]],
              [/; (quest( \d| pro)?)/i],
              [w, [p, H],
                [l, x]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [l, y]],
              [/(aeobc)\b/i],
              [w, [p, S],
                [l, y]
              ],
              [/(homepod).+mac os/i],
              [w, [p, _],
                [l, y]
              ],
              [/windows iot/i],
              [
                [l, y]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [w, [l, h]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [w, [l, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [l, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [l, h]
              ],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [w, [p, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [f, [c, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [c, f],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [f, [c, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [c, f],
              [/ladybird\//i],
              [
                [c, "LibWeb"]
              ],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [f, c]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [c, f],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [c, [f, ee, ie]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [f, ee, ie],
                [c, "Windows"]
              ],
              [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [f, /_/g, "."],
                [c, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [c, W],
                [f, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [f, c],
              [/(ubuntu) ([\w\.]+) like android/i],
              [
                [c, /(.+)/, "$1 Touch"], f
              ],
              [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
              [c, f],
              [/\(bb(10);/i],
              [f, [c, C]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [f, [c, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [f, [c, I + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [f, [c, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [f, [c, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [f, [c, E + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [c, G], f
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [c, f],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [c, "Solaris"], f
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [c, f]
            ]
          },
          re = function(e, i) {
            if (typeof e === b && (i = e, e = t), !(this instanceof re)) return new re(e, i).getResult();
            var o = typeof n !== s && n.navigator ? n.navigator : t,
              r = e || (o && o.userAgent ? o.userAgent : ""),
              g = o && o.userAgentData ? o.userAgentData : t,
              k = i ? function(e, i) {
                var o = {};
                for (var r in e) i[r] && i[r].length % 2 == 0 ? o[r] = i[r].concat(e[r]) : o[r] = e[r];
                return o
              }(oe, i) : oe,
              x = o && o.userAgent == r;
            return this.getBrowser = function() {
              var e, i = {};
              return i[c] = t, i[f] = t, J.call(i, r, k.browser), i[u] = typeof(e = i[f]) === d ? e.replace(/[^\d\.]/g, "").split(".")[0] : t, x && o && o.brave && typeof o.brave.isBrave == a && (i[c] = "Brave"), i
            }, this.getCPU = function() {
              var e = {};
              return e[m] = t, J.call(e, r, k.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[p] = t, e[w] = t, e[l] = t, J.call(e, r, k.device), x && !e[l] && g && g.mobile && (e[l] = h), x && "Macintosh" == e[w] && o && typeof o.standalone !== s && o.maxTouchPoints && o.maxTouchPoints > 2 && (e[w] = "iPad", e[l] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[c] = t, e[f] = t, J.call(e, r, k.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[c] = t, e[f] = t, J.call(e, r, k.os), x && !e[c] && g && g.platform && "Unknown" != g.platform && (e[c] = g.platform.replace(/chrome os/i, G).replace(/macos/i, W)), e
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
              return r = typeof e === d && e.length > 500 ? Q(e, 500) : e, this
            }, this.setUA(r), this
          };
        re.VERSION = "1.0.41", re.BROWSER = Z([c, f, u]), re.CPU = Z([m]), re.DEVICE = Z([w, p, l, g, h, k, v, x, y]), re.ENGINE = re.OS = Z([c, f]), typeof i !== s ? (e.exports && (i = e.exports = re), i.UAParser = re) : o.amdO ? (r = function() {
          return re
        }.call(i, o, i, e)) === t || (e.exports = r) : typeof n !== s && (n.UAParser = re);
        var ne = typeof n !== s && (n.jQuery || n.Zepto);
        if (ne && !ne.ua) {
          var te = new re;
          ne.ua = te.getResult(), ne.ua.get = function() {
            return te.getUA()
          }, ne.ua.set = function(e) {
            te.setUA(e);
            var i = te.getResult();
            for (var o in i) ne.ua[o] = i[o]
          }
        }
      }("object" == typeof window ? window : this)
    },
    5942(e, i, o) {
      "use strict";
      o.d(i, {
        sc: () => n
      });
      const r = e => async (i, {
        outputFormat: o = "hex"
      } = {}) => {
        "string" == typeof i && (i = (new globalThis.TextEncoder).encode(i));
        const r = await globalThis.crypto.subtle.digest(e, i);
        return "hex" === o ? (e => {
          const i = new DataView(e);
          let o = "";
          for (let e = 0; e < i.byteLength; e += 4) o += i.getUint32(e).toString(16).padStart(8, "0");
          return o
        })(r) : r
      }, n = (r("SHA-1"), r("SHA-256"));
      r("SHA-384"), r("SHA-512")
    },
    43568(e, i, o) {
      "use strict";

      function r(e) {
        for (var i = 1; i < arguments.length; i++) {
          var o = arguments[i];
          for (var r in o) e[r] = o[r]
        }
        return e
      }
      o.d(i, {
        A: () => n
      });
      var n = function e(i, o) {
        function n(e, n, t) {
          if ("undefined" != typeof document) {
            "number" == typeof(t = r({}, o, t)).expires && (t.expires = new Date(Date.now() + 864e5 * t.expires)), t.expires && (t.expires = t.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var s in t) t[s] && (a += "; " + s, !0 !== t[s] && (a += "=" + t[s].split(";")[0]));
            return document.cookie = e + "=" + i.write(n, e) + a
          }
        }
        return Object.create({
          set: n,
          get: function(e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (var o = document.cookie ? document.cookie.split("; ") : [], r = {}, n = 0; n < o.length; n++) {
                var t = o[n].split("="),
                  a = t.slice(1).join("=");
                try {
                  var s = decodeURIComponent(t[0]);
                  if (r[s] = i.read(a, s), e === s) break
                } catch (e) {}
              }
              return e ? r[e] : r
            }
          },
          remove: function(e, i) {
            n(e, "", r({}, i, {
              expires: -1
            }))
          },
          withAttributes: function(i) {
            return e(this.converter, r({}, this.attributes, i))
          },
          withConverter: function(i) {
            return e(r({}, this.converter, i), this.attributes)
          }
        }, {
          attributes: {
            value: Object.freeze(o)
          },
          converter: {
            value: Object.freeze(i)
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
    4242(e, i, o) {
      "use strict";
      o.d(i, {
        s: () => n
      });
      class r extends Error {}

      function n(e, i) {
        if ("string" != typeof e) throw new r("Invalid token specified: must be a string");
        i || (i = {});
        const o = !0 === i.header ? 0 : 1,
          n = e.split(".")[o];
        if ("string" != typeof n) throw new r(`Invalid token specified: missing part #${o+1}`);
        let t;
        try {
          t = function(e) {
            let i = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (i.length % 4) {
              case 0:
                break;
              case 2:
                i += "==";
                break;
              case 3:
                i += "=";
                break;
              default:
                throw new Error("base64 string is not of the correct length")
            }
            try {
              return function(e) {
                return decodeURIComponent(atob(e).replace(/(.)/g, (e, i) => {
                  let o = i.charCodeAt(0).toString(16).toUpperCase();
                  return o.length < 2 && (o = "0" + o), "%" + o
                }))
              }(i)
            } catch (e) {
              return atob(i)
            }
          }(n)
        } catch (e) {
          throw new r(`Invalid token specified: invalid base64 for part #${o+1} (${e.message})`)
        }
        try {
          return JSON.parse(t)
        } catch (e) {
          throw new r(`Invalid token specified: invalid json for part #${o+1} (${e.message})`)
        }
      }
      r.prototype.name = "InvalidTokenError"
    }
  }
]);