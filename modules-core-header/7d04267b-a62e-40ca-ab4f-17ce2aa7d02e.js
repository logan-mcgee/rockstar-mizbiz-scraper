! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7d04267b-a62e-40ca-ab4f-17ce2aa7d02e", e._sentryDebugIdIdentifier = "sentry-dbid-7d04267b-a62e-40ca-ab4f-17ce2aa7d02e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [196], {
    7604: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        componentsToDebugString: () => oe,
        default: () => ue,
        getFullscreenElement: () => I,
        getScreenFrame: () => X,
        hashComponents: () => se,
        isAndroid: () => O,
        isChromium: () => A,
        isDesktopSafari: () => _,
        isEdgeHTML: () => P,
        isGecko: () => k,
        isTrident: () => C,
        isWebKit: () => L,
        load: () => ce,
        loadSources: () => T,
        murmurX64Hash128: () => pe,
        prepareForSources: () => le,
        sources: () => ne,
        transformSource: () => M,
        withIframe: () => F
      });
      var n = r(226),
        i = "3.4.2";

      function a(e, t) {
        return new Promise((function(r) {
          return setTimeout(r, e, t)
        }))
      }

      function o(e) {
        return !!e && "function" == typeof e.then
      }

      function s(e, t) {
        try {
          var r = e();
          o(r) ? r.then((function(e) {
            return t(!0, e)
          }), (function(e) {
            return t(!1, e)
          })) : t(!0, r)
        } catch (e) {
          t(!1, e)
        }
      }

      function l(e, t, r) {
        return void 0 === r && (r = 16), (0, n.sH)(this, void 0, void 0, (function() {
          var i, o, s, l;
          return (0, n.YH)(this, (function(n) {
            switch (n.label) {
              case 0:
                i = Array(e.length), o = Date.now(), s = 0, n.label = 1;
              case 1:
                return s < e.length ? (i[s] = t(e[s], s), (l = Date.now()) >= o + r ? (o = l, [4, a(0)]) : [3, 3]) : [3, 4];
              case 2:
                n.sent(), n.label = 3;
              case 3:
                return ++s, [3, 1];
              case 4:
                return [2, i]
            }
          }))
        }))
      }

      function d(e) {
        e.then(void 0, (function() {}))
      }

      function c(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var r = [0, 0, 0, 0];
        return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function u(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var r = [0, 0, 0, 0];
        return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function p(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }

      function f(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }

      function h(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }

      function m(e) {
        return e = h(e, [0, e[0] >>> 1]), e = h(e = u(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), h(e = u(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }

      function v(e, t) {
        t = t || 0;
        var r, n = (e = e || "").length % 16,
          i = e.length - n,
          a = [0, t],
          o = [0, t],
          s = [0, 0],
          l = [0, 0],
          d = [2277735313, 289559509],
          v = [1291169091, 658871167];
        for (r = 0; r < i; r += 16) s = [255 & e.charCodeAt(r + 4) | (255 & e.charCodeAt(r + 5)) << 8 | (255 & e.charCodeAt(r + 6)) << 16 | (255 & e.charCodeAt(r + 7)) << 24, 255 & e.charCodeAt(r) | (255 & e.charCodeAt(r + 1)) << 8 | (255 & e.charCodeAt(r + 2)) << 16 | (255 & e.charCodeAt(r + 3)) << 24], l = [255 & e.charCodeAt(r + 12) | (255 & e.charCodeAt(r + 13)) << 8 | (255 & e.charCodeAt(r + 14)) << 16 | (255 & e.charCodeAt(r + 15)) << 24, 255 & e.charCodeAt(r + 8) | (255 & e.charCodeAt(r + 9)) << 8 | (255 & e.charCodeAt(r + 10)) << 16 | (255 & e.charCodeAt(r + 11)) << 24], s = p(s = u(s, d), 31), a = c(a = p(a = h(a, s = u(s, v)), 27), o), a = c(u(a, [0, 5]), [0, 1390208809]), l = p(l = u(l, v), 33), o = c(o = p(o = h(o, l = u(l, d)), 31), a), o = c(u(o, [0, 5]), [0, 944331445]);
        switch (s = [0, 0], l = [0, 0], n) {
          case 15:
            l = h(l, f([0, e.charCodeAt(r + 14)], 48));
          case 14:
            l = h(l, f([0, e.charCodeAt(r + 13)], 40));
          case 13:
            l = h(l, f([0, e.charCodeAt(r + 12)], 32));
          case 12:
            l = h(l, f([0, e.charCodeAt(r + 11)], 24));
          case 11:
            l = h(l, f([0, e.charCodeAt(r + 10)], 16));
          case 10:
            l = h(l, f([0, e.charCodeAt(r + 9)], 8));
          case 9:
            l = u(l = h(l, [0, e.charCodeAt(r + 8)]), v), o = h(o, l = u(l = p(l, 33), d));
          case 8:
            s = h(s, f([0, e.charCodeAt(r + 7)], 56));
          case 7:
            s = h(s, f([0, e.charCodeAt(r + 6)], 48));
          case 6:
            s = h(s, f([0, e.charCodeAt(r + 5)], 40));
          case 5:
            s = h(s, f([0, e.charCodeAt(r + 4)], 32));
          case 4:
            s = h(s, f([0, e.charCodeAt(r + 3)], 24));
          case 3:
            s = h(s, f([0, e.charCodeAt(r + 2)], 16));
          case 2:
            s = h(s, f([0, e.charCodeAt(r + 1)], 8));
          case 1:
            s = u(s = h(s, [0, e.charCodeAt(r)]), d), a = h(a, s = u(s = p(s, 31), v))
        }
        return a = c(a = h(a, [0, e.length]), o = h(o, [0, e.length])), o = c(o, a), a = c(a = m(a), o = m(o)), o = c(o, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
      }

      function g(e) {
        return parseInt(e)
      }

      function w(e) {
        return parseFloat(e)
      }

      function b(e, t) {
        return "number" == typeof e && isNaN(e) ? t : e
      }

      function S(e) {
        return e.reduce((function(e, t) {
          return e + (t ? 1 : 0)
        }), 0)
      }

      function y(e, t) {
        if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
        var r = 1 / t;
        return Math.round(e * r) / r
      }

      function x(e) {
        return e && "object" == typeof e && "message" in e ? e : {
          message: e
        }
      }

      function E(e) {
        return "function" != typeof e
      }

      function T(e, t, r) {
        var i = Object.keys(e).filter((function(e) {
            return ! function(e, t) {
              for (var r = 0, n = e.length; r < n; ++r)
                if (e[r] === t) return !0;
              return !1
            }(r, e)
          })),
          a = l(i, (function(r) {
            return function(e, t) {
              var r = new Promise((function(r) {
                var n = Date.now();
                s(e.bind(null, t), (function() {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  var i = Date.now() - n;
                  if (!e[0]) return r((function() {
                    return {
                      error: x(e[1]),
                      duration: i
                    }
                  }));
                  var a = e[1];
                  if (E(a)) return r((function() {
                    return {
                      value: a,
                      duration: i
                    }
                  }));
                  r((function() {
                    return new Promise((function(e) {
                      var t = Date.now();
                      s(a, (function() {
                        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                        var a = i + Date.now() - t;
                        if (!r[0]) return e({
                          error: x(r[1]),
                          duration: a
                        });
                        e({
                          value: r[1],
                          duration: a
                        })
                      }))
                    }))
                  }))
                }))
              }));
              return d(r),
                function() {
                  return r.then((function(e) {
                    return e()
                  }))
                }
            }(e[r], t)
          }));
        return d(a),
          function() {
            return (0, n.sH)(this, void 0, void 0, (function() {
              var e, t, r, o;
              return (0, n.YH)(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [4, a];
                  case 1:
                    return [4, l(n.sent(), (function(e) {
                      var t = e();
                      return d(t), t
                    }))];
                  case 2:
                    return e = n.sent(), [4, Promise.all(e)];
                  case 3:
                    for (t = n.sent(), r = {}, o = 0; o < i.length; ++o) r[i[o]] = t[o];
                    return [2, r]
                }
              }))
            }))
          }
      }

      function M(e, t) {
        var r = function(e) {
          return E(e) ? t(e) : function() {
            var r = e();
            return o(r) ? r.then(t) : t(r)
          }
        };
        return function(t) {
          var n = e(t);
          return o(n) ? n.then(r) : r(n)
        }
      }

      function C() {
        var e = window,
          t = navigator;
        return S(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
      }

      function P() {
        var e = window,
          t = navigator;
        return S(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !C()
      }

      function A() {
        var e = window,
          t = navigator;
        return S(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
      }

      function L() {
        var e = window,
          t = navigator;
        return S(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4
      }

      function _() {
        var e = window;
        return S(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator)]) >= 3
      }

      function k() {
        var e, t, r = window;
        return S(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in r, "mozInnerScreenX" in r, "CSSMozDocumentRule" in r, "CanvasCaptureMediaStream" in r]) >= 4
      }

      function I() {
        var e = document;
        return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
      }

      function O() {
        var e = A(),
          t = k();
        if (!e && !t) return !1;
        var r = window;
        return S(["onorientationchange" in r, "orientation" in r, e && !("SharedWorker" in r), t && /android/i.test(navigator.appVersion)]) >= 2
      }

      function R(e) {
        var t = new Error(e);
        return t.name = e, t
      }

      function F(e, t, r) {
        var i, o, s;
        return void 0 === r && (r = 50), (0, n.sH)(this, void 0, void 0, (function() {
          var l, d;
          return (0, n.YH)(this, (function(n) {
            switch (n.label) {
              case 0:
                l = document, n.label = 1;
              case 1:
                return l.body ? [3, 3] : [4, a(r)];
              case 2:
                return n.sent(), [3, 1];
              case 3:
                d = l.createElement("iframe"), n.label = 4;
              case 4:
                return n.trys.push([4, , 10, 11]), [4, new Promise((function(e, r) {
                  var n = !1,
                    i = function() {
                      n = !0, e()
                    };
                  d.onload = i, d.onerror = function(e) {
                    n = !0, r(e)
                  };
                  var a = d.style;
                  a.setProperty("display", "block", "important"), a.position = "absolute", a.top = "0", a.left = "0", a.visibility = "hidden", t && "srcdoc" in d ? d.srcdoc = t : d.src = "about:blank", l.body.appendChild(d);
                  var o = function() {
                    var e, t;
                    n || ("complete" === (null === (t = null === (e = d.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? i() : setTimeout(o, 10))
                  };
                  o()
                }))];
              case 5:
                n.sent(), n.label = 6;
              case 6:
                return (null === (o = null === (i = d.contentWindow) || void 0 === i ? void 0 : i.document) || void 0 === o ? void 0 : o.body) ? [3, 8] : [4, a(r)];
              case 7:
                return n.sent(), [3, 6];
              case 8:
                return [4, e(d, d.contentWindow)];
              case 9:
                return [2, n.sent()];
              case 10:
                return null === (s = d.parentNode) || void 0 === s || s.removeChild(d), [7];
              case 11:
                return [2]
            }
          }))
        }))
      }

      function V(e) {
        for (var t = function(e) {
            for (var t, r, n = "Unexpected syntax '".concat(e, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(e), a = i[1] || void 0, o = {}, s = /([.:#][\w-]+|\[.+?\])/gi, l = function(e, t) {
                o[e] = o[e] || [], o[e].push(t)
              };;) {
              var d = s.exec(i[2]);
              if (!d) break;
              var c = d[0];
              switch (c[0]) {
                case ".":
                  l("class", c.slice(1));
                  break;
                case "#":
                  l("id", c.slice(1));
                  break;
                case "[":
                  var u = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(c);
                  if (!u) throw new Error(n);
                  l(u[1], null !== (r = null !== (t = u[4]) && void 0 !== t ? t : u[5]) && void 0 !== r ? r : "");
                  break;
                default:
                  throw new Error(n)
              }
            }
            return [a, o]
          }(e), r = t[0], n = t[1], i = document.createElement(null != r ? r : "div"), a = 0, o = Object.keys(n); a < o.length; a++) {
          var s = o[a],
            l = n[s].join(" ");
          "style" === s ? G(i.style, l) : i.setAttribute(s, l)
        }
        return i
      }

      function G(e, t) {
        for (var r = 0, n = t.split(";"); r < n.length; r++) {
          var i = n[r],
            a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
          if (a) {
            var o = a[1],
              s = a[2],
              l = a[4];
            e.setProperty(o, s, l || "")
          }
        }
      }
      var N = ["monospace", "sans-serif", "serif"],
        D = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

      function H(e) {
        return e.toDataURL()
      }
      var z, W, j = 2500;

      function X() {
        var e = this;
        return function() {
            if (void 0 === W) {
              var e = function() {
                var t = B();
                Y(t) ? W = setTimeout(e, j) : (z = t, W = void 0)
              };
              e()
            }
          }(),
          function() {
            return (0, n.sH)(e, void 0, void 0, (function() {
              var e;
              return (0, n.YH)(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return Y(e = B()) ? z ? [2, (0, n.fX)([], z, !0)] : I() ? [4, (r = document, (r.exitFullscreen || r.msExitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen).call(r))] : [3, 2] : [3, 2];
                  case 1:
                    t.sent(), e = B(), t.label = 2;
                  case 2:
                    return Y(e) || (z = e), [2, e]
                }
                var r
              }))
            }))
          }
      }

      function B() {
        var e = screen;
        return [b(w(e.availTop), null), b(w(e.width) - w(e.availWidth) - b(w(e.availLeft), 0), null), b(w(e.height) - w(e.availHeight) - b(w(e.availTop), 0), null), b(w(e.availLeft), null)]
      }

      function Y(e) {
        for (var t = 0; t < 4; ++t)
          if (e[t]) return !1;
        return !0
      }

      function Z(e) {
        var t;
        return (0, n.sH)(this, void 0, void 0, (function() {
          var r, i, o, s, l, d, c;
          return (0, n.YH)(this, (function(n) {
            switch (n.label) {
              case 0:
                for (r = document, i = r.createElement("div"), o = new Array(e.length), s = {}, U(i), c = 0; c < e.length; ++c) "DIALOG" === (l = V(e[c])).tagName && l.show(), U(d = r.createElement("div")), d.appendChild(l), i.appendChild(d), o[c] = l;
                n.label = 1;
              case 1:
                return r.body ? [3, 3] : [4, a(50)];
              case 2:
                return n.sent(), [3, 1];
              case 3:
                r.body.appendChild(i);
                try {
                  for (c = 0; c < e.length; ++c) o[c].offsetParent || (s[e[c]] = !0)
                } finally {
                  null === (t = i.parentNode) || void 0 === t || t.removeChild(i)
                }
                return [2, s]
            }
          }))
        }))
      }

      function U(e) {
        e.style.setProperty("display", "block", "important")
      }

      function J(e) {
        return matchMedia("(inverted-colors: ".concat(e, ")")).matches
      }

      function $(e) {
        return matchMedia("(forced-colors: ".concat(e, ")")).matches
      }

      function q(e) {
        return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
      }

      function Q(e) {
        return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
      }

      function K(e) {
        return matchMedia("(dynamic-range: ".concat(e, ")")).matches
      }
      var ee = Math,
        te = function() {
          return 0
        },
        re = {
          default: [],
          apple: [{
            font: "-apple-system-body"
          }],
          serif: [{
            fontFamily: "serif"
          }],
          sans: [{
            fontFamily: "sans-serif"
          }],
          mono: [{
            fontFamily: "monospace"
          }],
          min: [{
            fontSize: "1px"
          }],
          system: [{
            fontFamily: "system-ui"
          }]
        },
        ne = {
          fonts: function() {
            return F((function(e, t) {
              var r = t.document,
                n = r.body;
              n.style.fontSize = "48px";
              var i = r.createElement("div"),
                a = {},
                o = {},
                s = function(e) {
                  var t = r.createElement("span"),
                    n = t.style;
                  return n.position = "absolute", n.top = "0", n.left = "0", n.fontFamily = e, t.textContent = "mmMwWLliI0O&1", i.appendChild(t), t
                },
                l = N.map(s),
                d = function() {
                  for (var e = {}, t = function(t) {
                      e[t] = N.map((function(e) {
                        return function(e, t) {
                          return s("'".concat(e, "',").concat(t))
                        }(t, e)
                      }))
                    }, r = 0, n = D; r < n.length; r++) t(n[r]);
                  return e
                }();
              n.appendChild(i);
              for (var c = 0; c < N.length; c++) a[N[c]] = l[c].offsetWidth, o[N[c]] = l[c].offsetHeight;
              return D.filter((function(e) {
                return t = d[e], N.some((function(e, r) {
                  return t[r].offsetWidth !== a[e] || t[r].offsetHeight !== o[e]
                }));
                var t
              }))
            }))
          },
          domBlockers: function(e) {
            var t = (void 0 === e ? {} : e).debug;
            return (0, n.sH)(this, void 0, void 0, (function() {
              var e, r, i, a, o;
              return (0, n.YH)(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return L() || O() ? (s = atob, e = {
                      abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', s("I0JveC1CYW5uZXItYWRz")],
                      abpvn: [".quangcao", "#mobileCatfish", s("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                      adBlockFinland: [".mainostila", s("LnNwb25zb3JpdA=="), ".ylamainos", s("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                      adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", s("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                      adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", s("LmhlYWRlci1ibG9ja2VkLWFk"), s("I2FkX2Jsb2NrZXI=")],
                      adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                      adGuardBase: [".BetterJsPopOverlay", s("I2FkXzMwMFgyNTA="), s("I2Jhbm5lcmZsb2F0MjI="), s("I2NhbXBhaWduLWJhbm5lcg=="), s("I0FkLUNvbnRlbnQ=")],
                      adGuardChinese: [s("LlppX2FkX2FfSA=="), s("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", s("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), s("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                      adGuardFrench: ["#pavePub", s("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", s("LmFkc19iYW4=")],
                      adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                      adGuardJapanese: ["#kauli_yad_1", s("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), s("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), s("LmFkZ29vZ2xl"), s("Ll9faXNib29zdFJldHVybkFk")],
                      adGuardMobile: [s("YW1wLWF1dG8tYWRz"), s("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", s("I2FkX2ludmlld19hcmVh")],
                      adGuardRussian: [s("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), s("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', s("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                      adGuardSocial: [s("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), s("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                      adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                      adGuardTrackingProtection: ["#qoo-counter", s("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), s("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), s("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                      adGuardTurkish: ["#backkapat", s("I3Jla2xhbWk="), s("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), s("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), s("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                      bulgarian: [s("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                      easyList: [".yb-floorad", s("LndpZGdldF9wb19hZHNfd2lkZ2V0"), s("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", s("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                      easyListChina: [s("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), s("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                      easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", s("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                      easyListCzechSlovak: ["#onlajny-stickers", s("I3Jla2xhbW5pLWJveA=="), s("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", s("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                      easyListDutch: [s("I2FkdmVydGVudGll"), s("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", s("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                      easyListGermany: ["#SSpotIMPopSlider", s("LnNwb25zb3JsaW5rZ3J1ZW4="), s("I3dlcmJ1bmdza3k="), s("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), s("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                      easyListItaly: [s("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", s("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                      easyListLithuania: [s("LnJla2xhbW9zX3RhcnBhcw=="), s("LnJla2xhbW9zX251b3JvZG9z"), s("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), s("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), s("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                      estonian: [s("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                      fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                      fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                      fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                      fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                      frellwitSwedish: [s("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), s("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", s("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                      greekAdBlock: [s("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), s("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), s("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                      hungarian: ["#cemp_doboz", ".optimonk-iframe-container", s("LmFkX19tYWlu"), s("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                      iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                      icelandicAbp: [s("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                      latvian: [s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                      listKr: [s("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), s("I2xpdmVyZUFkV3JhcHBlcg=="), s("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), s("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                      listeAr: [s("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", s("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), s("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), s("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                      listeFr: [s("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), s("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), s("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                      officialPolish: ["#ceneo-placeholder-ceneo-12", s("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), s("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), s("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), s("ZGl2I3NrYXBpZWNfYWQ=")],
                      ro: [s("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), s("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                      ruAd: [s("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), s("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), s("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                      thaiAds: ["a[href*=macau-uta-popup]", s("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), s("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                      webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", s("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                    }, r = Object.keys(e), [4, Z((o = []).concat.apply(o, r.map((function(t) {
                      return e[t]
                    }))))]) : [2, void 0];
                  case 1:
                    return i = n.sent(), t && function(e, t) {
                      for (var r = "DOM blockers debug:\n```", n = 0, i = Object.keys(e); n < i.length; n++) {
                        var a = i[n];
                        r += "\n".concat(a, ":");
                        for (var o = 0, s = e[a]; o < s.length; o++) {
                          var l = s[o];
                          r += "\n  ".concat(t[l] ? "🚫" : "➡️", " ").concat(l)
                        }
                      }
                      console.log("".concat(r, "\n```"))
                    }(e, i), (a = r.filter((function(t) {
                      var r = e[t];
                      return S(r.map((function(e) {
                        return i[e]
                      }))) > .6 * r.length
                    }))).sort(), [2, a]
                }
                var s
              }))
            }))
          },
          fontPreferences: function() {
            return void 0 === e && (e = 4e3), F((function(t, r) {
              var i = r.document,
                a = i.body,
                o = a.style;
              o.width = "".concat(e, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", A() ? a.style.zoom = "".concat(1 / r.devicePixelRatio) : L() && (a.style.zoom = "reset");
              var s = i.createElement("div");
              return s.textContent = (0, n.fX)([], Array(e / 20 << 0), !0).map((function() {
                  return "word"
                })).join(" "), a.appendChild(s),
                function(e, t) {
                  for (var r = {}, n = {}, i = 0, a = Object.keys(re); i < a.length; i++) {
                    var o = a[i],
                      s = re[o],
                      l = s[0],
                      d = void 0 === l ? {} : l,
                      c = s[1],
                      u = void 0 === c ? "mmMwWLliI0fiflO&1" : c,
                      p = e.createElement("span");
                    p.textContent = u, p.style.whiteSpace = "nowrap";
                    for (var f = 0, h = Object.keys(d); f < h.length; f++) {
                      var m = h[f],
                        v = d[m];
                      void 0 !== v && (p.style[m] = v)
                    }
                    r[o] = p, t.appendChild(e.createElement("br")), t.appendChild(p)
                  }
                  for (var g = 0, w = Object.keys(re); g < w.length; g++) n[o = w[g]] = r[o].getBoundingClientRect().width;
                  return n
                }(i, a)
            }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
            var e
          },
          audio: function() {
            var e = window,
              t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
            if (!t) return -2;
            if (L() && !_() && ! function() {
                var e = window;
                return S(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
              }()) return -1;
            var r = new t(1, 5e3, 44100),
              n = r.createOscillator();
            n.type = "triangle", n.frequency.value = 1e4;
            var i = r.createDynamicsCompressor();
            i.threshold.value = -50, i.knee.value = 40, i.ratio.value = 12, i.attack.value = 0, i.release.value = .25, n.connect(i), i.connect(r.destination), n.start(0);
            var a = function(e) {
                var t = function() {};
                return [new Promise((function(r, n) {
                  var i = !1,
                    a = 0,
                    s = 0;
                  e.oncomplete = function(e) {
                    return r(e.renderedBuffer)
                  };
                  var l = function() {
                      setTimeout((function() {
                        return n(R("timeout"))
                      }), Math.min(500, s + 5e3 - Date.now()))
                    },
                    c = function() {
                      try {
                        var t = e.startRendering();
                        switch (o(t) && d(t), e.state) {
                          case "running":
                            s = Date.now(), i && l();
                            break;
                          case "suspended":
                            document.hidden || a++, i && a >= 3 ? n(R("suspended")) : setTimeout(c, 500)
                        }
                      } catch (e) {
                        n(e)
                      }
                    };
                  c(), t = function() {
                    i || (i = !0, s > 0 && l())
                  }
                })), t]
              }(r),
              s = a[0],
              l = a[1],
              c = s.then((function(e) {
                return function(e) {
                  for (var t = 0, r = 0; r < e.length; ++r) t += Math.abs(e[r]);
                  return t
                }(e.getChannelData(0).subarray(4500))
              }), (function(e) {
                if ("timeout" === e.name || "suspended" === e.name) return -3;
                throw e
              }));
            return d(c),
              function() {
                return l(), c
              }
          },
          screenFrame: function() {
            var e = this,
              t = X();
            return function() {
              return (0, n.sH)(e, void 0, void 0, (function() {
                var e, r;
                return (0, n.YH)(this, (function(n) {
                  switch (n.label) {
                    case 0:
                      return [4, t()];
                    case 1:
                      return e = n.sent(), [2, [(r = function(e) {
                        return null === e ? null : y(e, 10)
                      })(e[0]), r(e[1]), r(e[2]), r(e[3])]]
                  }
                }))
              }))
            }
          },
          osCpu: function() {
            return navigator.oscpu
          },
          languages: function() {
            var e, t = navigator,
              r = [],
              n = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
            if (void 0 !== n && r.push([n]), Array.isArray(t.languages)) A() && S([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || r.push(t.languages);
            else if ("string" == typeof t.languages) {
              var i = t.languages;
              i && r.push(i.split(","))
            }
            return r
          },
          colorDepth: function() {
            return window.screen.colorDepth
          },
          deviceMemory: function() {
            return b(w(navigator.deviceMemory), void 0)
          },
          screenResolution: function() {
            var e = screen,
              t = function(e) {
                return b(g(e), null)
              },
              r = [t(e.width), t(e.height)];
            return r.sort().reverse(), r
          },
          hardwareConcurrency: function() {
            return b(g(navigator.hardwareConcurrency), void 0)
          },
          timezone: function() {
            var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
            if (t) {
              var r = (new t).resolvedOptions().timeZone;
              if (r) return r
            }
            var n, i = (n = (new Date).getFullYear(), -Math.max(w(new Date(n, 0, 1).getTimezoneOffset()), w(new Date(n, 6, 1).getTimezoneOffset())));
            return "UTC".concat(i >= 0 ? "+" : "").concat(Math.abs(i))
          },
          sessionStorage: function() {
            try {
              return !!window.sessionStorage
            } catch (e) {
              return !0
            }
          },
          localStorage: function() {
            try {
              return !!window.localStorage
            } catch (e) {
              return !0
            }
          },
          indexedDB: function() {
            if (!C() && !P()) try {
              return !!window.indexedDB
            } catch (e) {
              return !0
            }
          },
          openDatabase: function() {
            return !!window.openDatabase
          },
          cpuClass: function() {
            return navigator.cpuClass
          },
          platform: function() {
            var e = navigator.platform;
            return "MacIntel" === e && L() && !_() ? function() {
              if ("iPad" === navigator.platform) return !0;
              var e = screen,
                t = e.width / e.height;
              return S(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
            }() ? "iPad" : "iPhone" : e
          },
          plugins: function() {
            var e = navigator.plugins;
            if (e) {
              for (var t = [], r = 0; r < e.length; ++r) {
                var n = e[r];
                if (n) {
                  for (var i = [], a = 0; a < n.length; ++a) {
                    var o = n[a];
                    i.push({
                      type: o.type,
                      suffixes: o.suffixes
                    })
                  }
                  t.push({
                    name: n.name,
                    description: n.description,
                    mimeTypes: i
                  })
                }
              }
              return t
            }
          },
          canvas: function() {
            var e, t, r = !1,
              n = function() {
                var e = document.createElement("canvas");
                return e.width = 1, e.height = 1, [e, e.getContext("2d")]
              }(),
              i = n[0],
              a = n[1];
            if (function(e, t) {
                return !(!t || !e.toDataURL)
              }(i, a)) {
              r = function(e) {
                  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
                }(a),
                function(e, t) {
                  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
                  var r = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                  t.fillText(r, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(r, 4, 45)
                }(i, a);
              var o = H(i);
              o !== H(i) ? e = t = "unstable" : (t = o, function(e, t) {
                e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
                for (var r = 0, n = [
                    ["#f2f", 40, 40],
                    ["#2ff", 80, 40],
                    ["#ff2", 60, 80]
                  ]; r < n.length; r++) {
                  var i = n[r],
                    a = i[0],
                    o = i[1],
                    s = i[2];
                  t.fillStyle = a, t.beginPath(), t.arc(o, s, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
                }
                t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd")
              }(i, a), e = H(i))
            } else e = t = "";
            return {
              winding: r,
              geometry: e,
              text: t
            }
          },
          touchSupport: function() {
            var e, t = navigator,
              r = 0;
            void 0 !== t.maxTouchPoints ? r = g(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (r = t.msMaxTouchPoints);
            try {
              document.createEvent("TouchEvent"), e = !0
            } catch (t) {
              e = !1
            }
            return {
              maxTouchPoints: r,
              touchEvent: e,
              touchStart: "ontouchstart" in window
            }
          },
          vendor: function() {
            return navigator.vendor || ""
          },
          vendorFlavors: function() {
            for (var e = [], t = 0, r = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < r.length; t++) {
              var n = r[t],
                i = window[n];
              i && "object" == typeof i && e.push(n)
            }
            return e.sort()
          },
          cookiesEnabled: function() {
            var e = document;
            try {
              e.cookie = "cookietest=1; SameSite=Strict;";
              var t = -1 !== e.cookie.indexOf("cookietest=");
              return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
            } catch (e) {
              return !1
            }
          },
          colorGamut: function() {
            for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
              var r = t[e];
              if (matchMedia("(color-gamut: ".concat(r, ")")).matches) return r
            }
          },
          invertedColors: function() {
            return !!J("inverted") || !J("none") && void 0
          },
          forcedColors: function() {
            return !!$("active") || !$("none") && void 0
          },
          monochrome: function() {
            if (matchMedia("(min-monochrome: 0)").matches) {
              for (var e = 0; e <= 100; ++e)
                if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
              throw new Error("Too high value")
            }
          },
          contrast: function() {
            return q("no-preference") ? 0 : q("high") || q("more") ? 1 : q("low") || q("less") ? -1 : q("forced") ? 10 : void 0
          },
          reducedMotion: function() {
            return !!Q("reduce") || !Q("no-preference") && void 0
          },
          hdr: function() {
            return !!K("high") || !K("standard") && void 0
          },
          math: function() {
            var e, t = ee.acos || te,
              r = ee.acosh || te,
              n = ee.asin || te,
              i = ee.asinh || te,
              a = ee.atanh || te,
              o = ee.atan || te,
              s = ee.sin || te,
              l = ee.sinh || te,
              d = ee.cos || te,
              c = ee.cosh || te,
              u = ee.tan || te,
              p = ee.tanh || te,
              f = ee.exp || te,
              h = ee.expm1 || te,
              m = ee.log1p || te;
            return {
              acos: t(.12312423423423424),
              acosh: r(1e308),
              acoshPf: (e = 1e154, ee.log(e + ee.sqrt(e * e - 1))),
              asin: n(.12312423423423424),
              asinh: i(1),
              asinhPf: ee.log(1 + ee.sqrt(2)),
              atanh: a(.5),
              atanhPf: ee.log(3) / 2,
              atan: o(.5),
              sin: s(-1e300),
              sinh: l(1),
              sinhPf: ee.exp(1) - 1 / ee.exp(1) / 2,
              cos: d(10.000000000123),
              cosh: c(1),
              coshPf: (ee.exp(1) + 1 / ee.exp(1)) / 2,
              tan: u(-1e300),
              tanh: p(1),
              tanhPf: (ee.exp(2) - 1) / (ee.exp(2) + 1),
              exp: f(1),
              expm1: h(1),
              expm1Pf: ee.exp(1) - 1,
              log1p: m(10),
              log1pPf: ee.log(11),
              powPI: ee.pow(ee.PI, -100)
            }
          },
          videoCard: function() {
            var e, t = document.createElement("canvas"),
              r = null !== (e = t.getContext("webgl")) && void 0 !== e ? e : t.getContext("experimental-webgl");
            if (r && "getExtension" in r) {
              var n = r.getExtension("WEBGL_debug_renderer_info");
              if (n) return {
                vendor: (r.getParameter(n.UNMASKED_VENDOR_WEBGL) || "").toString(),
                renderer: (r.getParameter(n.UNMASKED_RENDERER_WEBGL) || "").toString()
              }
            }
          },
          pdfViewerEnabled: function() {
            return navigator.pdfViewerEnabled
          },
          architecture: function() {
            var e = new Float32Array(1),
              t = new Uint8Array(e.buffer);
            return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
          }
        },
        ie = "$ if upgrade to Pro: https://fpjs.dev/pro";

      function ae(e) {
        var t = function(e) {
            if (O()) return .4;
            if (L()) return _() ? .5 : .3;
            var t = e.platform.value || "";
            return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
          }(e),
          r = function(e) {
            return y(.99 + .01 * e, 1e-4)
          }(t);
        return {
          score: t,
          comment: ie.replace(/\$/g, "".concat(r))
        }
      }

      function oe(e) {
        return JSON.stringify(e, (function(e, t) {
          return t instanceof Error ? (r = t, (0, n.Cl)({
            name: r.name,
            message: r.message,
            stack: null === (i = r.stack) || void 0 === i ? void 0 : i.split("\n")
          }, r)) : t;
          var r, i
        }), 2)
      }

      function se(e) {
        return v(function(e) {
          for (var t = "", r = 0, n = Object.keys(e).sort(); r < n.length; r++) {
            var i = n[r],
              a = e[i],
              o = a.error ? "error" : JSON.stringify(a.value);
            t += "".concat(t ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(o)
          }
          return t
        }(e))
      }

      function le(e) {
        return void 0 === e && (e = 50),
          function(e, t) {
            void 0 === t && (t = 1 / 0);
            var r = window.requestIdleCallback;
            return r ? new Promise((function(e) {
              return r.call(window, (function() {
                return e()
              }), {
                timeout: t
              })
            })) : a(Math.min(e, t))
          }(e, 2 * e)
      }

      function de(e, t) {
        var r = Date.now();
        return {
          get: function(a) {
            return (0, n.sH)(this, void 0, void 0, (function() {
              var o, s, l;
              return (0, n.YH)(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return o = Date.now(), [4, e()];
                  case 1:
                    return s = n.sent(), l = function(e) {
                      var t;
                      return {
                        get visitorId() {
                          return void 0 === t && (t = se(this.components)), t
                        },
                        set visitorId(e) {
                          t = e
                        },
                        confidence: ae(e),
                        components: e,
                        version: i
                      }
                    }(s), (t || (null == a ? void 0 : a.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(l.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(o - r, "\nvisitorId: ").concat(l.visitorId, "\ncomponents: ").concat(oe(s), "\n```")), [2, l]
                }
              }))
            }))
          }
        }
      }

      function ce(e) {
        var t = void 0 === e ? {} : e,
          r = t.delayFallback,
          a = t.debug,
          o = t.monitoring,
          s = void 0 === o || o;
        return (0, n.sH)(this, void 0, void 0, (function() {
          return (0, n.YH)(this, (function(e) {
            switch (e.label) {
              case 0:
                return s && function() {
                  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
                    var e = new XMLHttpRequest;
                    e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(i, "/npm-monitoring"), !0), e.send()
                  } catch (e) {
                    console.error(e)
                  }
                }(), [4, le(r)];
              case 1:
                return e.sent(), [2, de(T(ne, {
                  debug: a
                }, []), a)]
            }
          }))
        }))
      }
      var ue = {
          load: ce,
          hashComponents: se,
          componentsToDebugString: oe
        },
        pe = v
    },
    6377: (e, t, r) => {
      var n, i, a, o = r(7604);

      function s(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        let r = [0, 0, 0, 0];
        return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function l(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        let r = [0, 0, 0, 0];
        return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function d(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }

      function c(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }

      function u(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }

      function p(e) {
        return e = u(e, [0, e[0] >>> 1]), e = u(e = l(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), u(e = l(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }

      function f(e) {
        return e.length > 32 ? function(e, t) {
          t = t || 0;
          let r, n = (e = e || "").length % 16,
            i = e.length - n,
            a = [0, t],
            o = [0, t],
            f = [0, 0],
            h = [0, 0],
            m = [2277735313, 289559509],
            v = [1291169091, 658871167];
          for (r = 0; r < i; r += 16) f = [255 & e.charCodeAt(r + 4) | (255 & e.charCodeAt(r + 5)) << 8 | (255 & e.charCodeAt(r + 6)) << 16 | (255 & e.charCodeAt(r + 7)) << 24, 255 & e.charCodeAt(r) | (255 & e.charCodeAt(r + 1)) << 8 | (255 & e.charCodeAt(r + 2)) << 16 | (255 & e.charCodeAt(r + 3)) << 24], h = [255 & e.charCodeAt(r + 12) | (255 & e.charCodeAt(r + 13)) << 8 | (255 & e.charCodeAt(r + 14)) << 16 | (255 & e.charCodeAt(r + 15)) << 24, 255 & e.charCodeAt(r + 8) | (255 & e.charCodeAt(r + 9)) << 8 | (255 & e.charCodeAt(r + 10)) << 16 | (255 & e.charCodeAt(r + 11)) << 24], f = l(f, m), f = d(f, 31), f = l(f, v), a = u(a, f), a = d(a, 27), a = s(a, o), a = s(l(a, [0, 5]), [0, 1390208809]), h = l(h, v), h = d(h, 33), h = l(h, m), o = u(o, h), o = d(o, 31), o = s(o, a), o = s(l(o, [0, 5]), [0, 944331445]);
          switch (f = [0, 0], h = [0, 0], n) {
            case 15:
              h = u(h, c([0, e.charCodeAt(r + 14)], 48));
              break;
            case 14:
              h = u(h, c([0, e.charCodeAt(r + 13)], 40));
              break;
            case 13:
              h = u(h, c([0, e.charCodeAt(r + 12)], 32));
              break;
            case 12:
              h = u(h, c([0, e.charCodeAt(r + 11)], 24));
              break;
            case 11:
              h = u(h, c([0, e.charCodeAt(r + 10)], 16));
              break;
            case 10:
              h = u(h, c([0, e.charCodeAt(r + 9)], 8));
              break;
            case 9:
              h = u(h, [0, e.charCodeAt(r + 8)]), h = l(h, v), h = d(h, 33), h = l(h, m), o = u(o, h);
              break;
            case 8:
              f = u(f, c([0, e.charCodeAt(r + 7)], 56));
              break;
            case 7:
              f = u(f, c([0, e.charCodeAt(r + 6)], 48));
              break;
            case 6:
              f = u(f, c([0, e.charCodeAt(r + 5)], 40));
              break;
            case 5:
              f = u(f, c([0, e.charCodeAt(r + 4)], 32));
              break;
            case 4:
              f = u(f, c([0, e.charCodeAt(r + 3)], 24));
              break;
            case 3:
              f = u(f, c([0, e.charCodeAt(r + 2)], 16));
              break;
            case 2:
              f = u(f, c([0, e.charCodeAt(r + 1)], 8));
              break;
            case 1:
              f = u(f, [0, e.charCodeAt(r)]), f = l(f, m), f = d(f, 31), f = l(f, v), a = u(a, f)
          }
          return a = u(a, [0, e.length]), o = u(o, [0, e.length]), a = s(a, o), o = s(o, a), a = p(a), o = p(o), a = s(a, o), o = s(o, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
        }(e, 31) : e
      }

      function h(e) {
        const t = [...e];
        return function() {
          const e = [/palemoon/i];
          let t = !1;
          for (let r = 0, n = e.length; r < n; r++) {
            let n = e[r];
            if (navigator.userAgent.match(n)) {
              t = !0;
              break
            }
          }
          return t
        }() && (t = t.sort((function(e, t) {
          return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
        }))), t.map((e => {
          let t = e.mimeTypes.map((e => [e.type, e.suffixes].join("~")));
          return [e.name, e.description, t].join("::")
        }))
      }

      function m() {
        let e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
      }

      function v() {
        let e = document.createElement("div");
        e.innerHTML = "&nbsp;", e.className = "adsbox";
        let t = !1;
        try {
          document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
        } catch (e) {
          t = !1
        }
        return t
      }

      function g(e) {
        let t, r = navigator.oscpu,
          n = navigator.platform.toLowerCase(),
          i = b(e);
        if (t = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, t && "Windows Phone" !== i && "Android" !== i && "iOS" !== i && "Other" !== i) return !0;
        if (void 0 !== r) {
          if (r = r.toLowerCase(), r.indexOf("win") >= 0 && "Windows" !== i && "Windows Phone" !== i) return !0;
          if (r.indexOf("linux") >= 0 && "Linux" !== i && "Android" !== i) return !0;
          if (r.indexOf("mac") >= 0 && "Mac" !== i && "iOS" !== i) return !0;
          if (0 === r.indexOf("win") && 0 === r.indexOf("linux") && r.indexOf("mac") >= 0 && "other" !== i) return !0
        }
        return n.indexOf("win") >= 0 && "Windows" !== i && "Windows Phone" !== i || (n.indexOf("linux") >= 0 || n.indexOf("android") >= 0 || n.indexOf("pike") >= 0) && "Linux" !== i && "Android" !== i || (n.indexOf("mac") >= 0 || n.indexOf("ipad") >= 0 || n.indexOf("ipod") >= 0 || n.indexOf("iphone") >= 0) && "Mac" !== i && "iOS" !== i || 0 === n.indexOf("win") && 0 === n.indexOf("linux") && n.indexOf("mac") >= 0 && "other" !== i || void 0 === navigator.plugins && "Windows" !== i && "Windows Phone" !== i
      }

      function w(e, t) {
        const r = function() {
            let e, t = navigator.userAgent.toLowerCase();
            return e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("ucbrowser") >= 0 ? "UC Browser" : t.indexOf("maxthon") >= 0 ? "Maxthon" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("edge") >= 0 || t.indexOf("edg") >= 0 ? "Microsoft Edge" : t.indexOf("chrome") >= 0 || t.indexOf("crios") >= 0 ? "Chrome" : t.indexOf("playstation") >= 0 ? "PlayStation" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : t.indexOf("nintendobrowser") >= 0 ? "Nintendo" : "Unknown browser", e
          }(),
          n = b(e, t);
        switch (r) {
          case "PlayStation":
          case "Nintendo":
            return n;
          default:
            return r + " on " + n
        }
      }

      function b(e, t) {
        if (e) return e;
        let r, n = navigator.userAgent.toLowerCase();
        return r = n.indexOf("windows phone") >= 0 ? "Windows Phone" : n.indexOf("steam") >= 0 ? "Steam" : n.indexOf("xbox series x") >= 0 || n.indexOf("xbox series s") >= 0 ? "Xbox Series X|S" : n.indexOf("xbox one") >= 0 || n.indexOf("xbox_one") >= 0 ? "Xbox One" : n.indexOf("xbox") >= 0 ? "Xbox 360" : t && t.model && "xbox" === t.model.toLowerCase() ? "Xbox" : n.indexOf("playstation 5") >= 0 ? "PlayStation 5" : n.indexOf("playstation 4") >= 0 ? "PlayStation 4" : n.indexOf("playstation 3") >= 0 ? "PlayStation 3" : n.indexOf("win") >= 0 ? "Windows" : n.indexOf("android") >= 0 ? "Android" : n.indexOf("linux") >= 0 ? "Linux" : n.indexOf("nintendo switch") >= 0 ? "Nintendo Switch" : n.indexOf("iphone") >= 0 || n.indexOf("ipad") >= 0 ? "iOS" : n.indexOf("mac") >= 0 ? "Mac" : "Unknown OS", r
      }

      function S(e) {
        let t = ["monospace", "sans-serif", "serif"],
          r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
          n = document.getElementsByTagName("body")[0],
          i = document.createElement("div"),
          a = document.createElement("div"),
          o = {},
          s = {},
          l = function() {
            let e = document.createElement("span");
            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.innerHTML = "mmmmmmmmmmlli", e
          },
          d = function(e, t) {
            let r = l();
            return r.style.fontFamily = "'" + e + "'," + t, r
          },
          c = function(e) {
            let r = !1;
            for (let n = 0; n < t.length; n++)
              if (r = e[n].offsetWidth !== o[t[n]] || e[n].offsetHeight !== s[t[n]], r) return r;
            return r
          },
          u = function() {
            let e = [];
            for (let r = 0, n = t.length; r < n; r++) {
              let n = l();
              n.style.fontFamily = t[r], i.appendChild(n), e.push(n)
            }
            return e
          }();
        n.appendChild(i);
        for (let e = 0, r = t.length; e < r; e++) o[t[e]] = u[e].offsetWidth, s[t[e]] = u[e].offsetHeight;
        let p = function() {
          let e = {};
          for (let n = 0, i = r.length; n < i; n++) {
            let i = [];
            for (let e = 0, o = t.length; e < o; e++) {
              let o = d(r[n], t[e]);
              a.appendChild(o), i.push(o)
            }
            e[r[n]] = i
          }
          return e
        }();
        n.appendChild(a);
        let f = [];
        for (let e = 0, t = r.length; e < t; e++) c(p[r[e]]) && f.push(r[e]);
        return n.removeChild(a), n.removeChild(i), f
      }
      n = e.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
      }), i = e.exports, a = () => E, Object.defineProperty(i, "default", {
        get: a,
        set: undefined,
        enumerable: !0,
        configurable: !0
      });
      let y = null;
      const x = {
        get: function(e) {
          return y || (y = new Promise((t => {
            const r = function(e) {
                return e && e.__esModule ? e.default : e
              }(o).load({
                monitoring: !1
              }),
              n = navigator.userAgentData && navigator.userAgentData.getHighEntropyValues ? navigator.userAgentData.getHighEntropyValues(["model"]) : Promise.resolve({});
            Promise.all([r, n]).then((r => {
              const n = r[0],
                i = r[1];
              n.get().then((r => {
                const n = r.components,
                  a = {
                    fp: {
                      user_agent: f(navigator.userAgent),
                      language: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "",
                      pixel_ratio: window.devicePixelRatio || "",
                      timezone_offset: (new Date).getTimezoneOffset(),
                      session_storage: n.sessionStorage.value ? 1 : 0,
                      local_storage: n.localStorage.value ? 1 : 0,
                      indexed_db: n.indexedDB.value ? 1 : 0,
                      open_database: n.openDatabase.value ? 1 : 0,
                      cpu_class: n.cpuClass.value ? n.cpuClass.value : "unknown",
                      navigator_platform: n.platform.value ? n.platform.value : "unknown",
                      do_not_track: navigator.doNotTrack ? navigator.doNotTrack : "unknown",
                      regular_plugins: f(h(n.plugins.value).join(";")),
                      canvas: null,
                      webgl: null,
                      adblock: f(v()),
                      has_lied_os: g(i),
                      touch_support: [n.touchSupport.value.maxTouchPoints, n.touchSupport.value.touchEvent, n.touchSupport.value.touchStart].join(";"),
                      device_name: w(e, i),
                      js_fonts: f(S().join(";"))
                    }
                  };
                m() ? a.fp.canvas = f(function() {
                    let e = [],
                      t = document.createElement("canvas");
                    t.width = 2e3, t.height = 200, t.style.display = "inline";
                    let r = t.getContext("2d");
                    return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", r.font = "11pt no-real-font-123", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.2)", r.font = "18pt Arial", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), r.globalCompositeOperation = "multiply", r.fillStyle = "rgb(255,0,255)", r.beginPath(), r.arc(50, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(0,255,255)", r.beginPath(), r.arc(100, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,255,0)", r.beginPath(), r.arc(75, 100, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,0,255)", r.arc(75, 75, 75, 0, 2 * Math.PI, !0), r.arc(75, 75, 25, 0, 2 * Math.PI, !0), r.fill("evenodd"), e.push("canvas fp:" + t.toDataURL()), e.join("~")
                  }()) : delete a.fp.canvas,
                  function() {
                    if (!m()) return !1;
                    let e, t = document.createElement("canvas");
                    try {
                      e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                    } catch (t) {
                      e = !1
                    }
                    return !!window.WebGLRenderingContext && !!e
                  }() ? a.fp.webgl = f(function() {
                    let e, t = function(t) {
                      return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                    };
                    if (e = function() {
                        let e = document.createElement("canvas"),
                          t = null;
                        try {
                          t = e.getContext("webgl") || e.getContext("experimental-webgl")
                        } catch (e) {}
                        return t || (t = null), t
                      }(), !e) return null;
                    let r = [],
                      n = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, n);
                    let i = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                    e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW), n.itemSize = 3, n.numItems = 3;
                    let a = e.createProgram(),
                      o = e.createShader(e.VERTEX_SHADER);
                    e.shaderSource(o, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(o);
                    let s = e.createShader(e.FRAGMENT_SHADER);
                    return e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(a, o), e.attachShader(a, s), e.linkProgram(a), e.useProgram(a), a.vertexPosAttrib = e.getAttribLocation(a, "attrVertex"), a.offsetUniform = e.getUniformLocation(a, "uniformOffset"), e.enableVertexAttribArray(a.vertexPosArray), e.vertexAttribPointer(a.vertexPosAttrib, n.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(a.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, n.numItems), e.canvas && r.push(e.canvas.toDataURL()), r.push("extensions:" + e.getSupportedExtensions().join(";")), r.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), r.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), r.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), r.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), r.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), r.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), r.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), r.push("webgl max anisotropy:" + function(e) {
                      let t, r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                      return r ? (t = e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
                    }(e)), r.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), r.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), r.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), r.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), r.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), r.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), r.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), r.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), r.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), r.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), r.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), r.push("webgl red bits:" + e.getParameter(e.RED_BITS)), r.push("webgl renderer:" + e.getParameter(e.RENDERER)), r.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), r.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), r.push("webgl vendor:" + e.getParameter(e.VENDOR)), r.push("webgl version:" + e.getParameter(e.VERSION)), e.getShaderPrecisionFormat ? (r.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), r.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), r.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), r.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), r.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), r.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), r.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), r.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), r.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), r.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), r.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), r.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), r.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), r.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), r.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), r.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), r.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), r.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), r.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), r.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), r.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), r.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), r.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), r.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), r.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), r.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), r.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), r.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), r.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), r.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), r.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), r.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), r.join("~")) : ("undefined" == typeof NODEBUG && console.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"), r.join("~"))
                  }()) : delete a.fp.webgl;
                const o = JSON.stringify(a);
                t(o)
              }))
            })).catch((e => console.error(e)))
          }))), y
        }
      };
      var E = x
    },
    5869: (e, t, r) => {
      "use strict";

      function n() {
        return n = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, n.apply(this, arguments)
      }

      function i(e) {
        return "/" === e.charAt(0)
      }

      function a(e, t) {
        for (var r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1) e[r] = e[n];
        e.pop()
      }
      r.d(t, {
        zR: () => m
      });
      const o = function(e, t) {
        void 0 === t && (t = "");
        var r, n = e && e.split("/") || [],
          o = t && t.split("/") || [],
          s = e && i(e),
          l = t && i(t),
          d = s || l;
        if (e && i(e) ? o = n : n.length && (o.pop(), o = o.concat(n)), !o.length) return "/";
        if (o.length) {
          var c = o[o.length - 1];
          r = "." === c || ".." === c || "" === c
        } else r = !1;
        for (var u = 0, p = o.length; p >= 0; p--) {
          var f = o[p];
          "." === f ? a(o, p) : ".." === f ? (a(o, p), u++) : u && (a(o, p), u--)
        }
        if (!d)
          for (; u--; u) o.unshift("..");
        !d || "" === o[0] || o[0] && i(o[0]) || o.unshift("");
        var h = o.join("/");
        return r && "/" !== h.substr(-1) && (h += "/"), h
      };
      var s = !0,
        l = "Invariant failed";

      function d(e, t, r, i) {
        var a;
        "string" == typeof e ? (a = function(e) {
          var t = e || "/",
            r = "",
            n = "",
            i = t.indexOf("#"); - 1 !== i && (n = t.substr(i), t = t.substr(0, i));
          var a = t.indexOf("?");
          return -1 !== a && (r = t.substr(a), t = t.substr(0, a)), {
            pathname: t,
            search: "?" === r ? "" : r,
            hash: "#" === n ? "" : n
          }
        }(e), a.state = t) : (void 0 === (a = n({}, e)).pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== t && void 0 === a.state && (a.state = t));
        try {
          a.pathname = decodeURI(a.pathname)
        } catch (e) {
          throw e instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e
        }
        return r && (a.key = r), i ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = o(a.pathname, i.pathname)) : a.pathname = i.pathname : a.pathname || (a.pathname = "/"), a
      }
      var c = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function u(e, t) {
        t(window.confirm(e))
      }
      var p = "popstate",
        f = "hashchange";

      function h() {
        try {
          return window.history.state || {}
        } catch (e) {
          return {}
        }
      }

      function m(e) {
        void 0 === e && (e = {}), c || function(e, t) {
          if (s) throw new Error(l);
          throw new Error(l)
        }();
        var t, r, i = window.history,
          a = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          m = e,
          v = m.forceRefresh,
          g = void 0 !== v && v,
          w = m.getUserConfirmation,
          b = void 0 === w ? u : w,
          S = m.keyLength,
          y = void 0 === S ? 6 : S,
          x = e.basename ? function(e) {
            return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
          }("/" === (r = e.basename).charAt(0) ? r : "/" + r) : "";

        function E(e) {
          var t = e || {},
            r = t.key,
            n = t.state,
            i = window.location,
            a = i.pathname + i.search + i.hash;
          return x && (a = function(e, t) {
            return function(e, t) {
              return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length))
            }(e, t) ? e.substr(t.length) : e
          }(a, x)), d(a, n, r)
        }

        function T() {
          return Math.random().toString(36).substr(2, y)
        }
        var M, C, P = (M = null, C = [], {
          setPrompt: function(e) {
            return M = e,
              function() {
                M === e && (M = null)
              }
          },
          confirmTransitionTo: function(e, t, r, n) {
            if (null != M) {
              var i = "function" == typeof M ? M(e, t) : M;
              "string" == typeof i ? "function" == typeof r ? r(i, n) : n(!0) : n(!1 !== i)
            } else n(!0)
          },
          appendListener: function(e) {
            var t = !0;

            function r() {
              t && e.apply(void 0, arguments)
            }
            return C.push(r),
              function() {
                t = !1, C = C.filter((function(e) {
                  return e !== r
                }))
              }
          },
          notifyListeners: function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            C.forEach((function(e) {
              return e.apply(void 0, t)
            }))
          }
        });

        function A(e) {
          n(H, e), H.length = i.length, P.notifyListeners(H.location, H.action)
        }

        function L(e) {
          (function(e) {
            return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
          })(e) || I(E(e.state))
        }

        function _() {
          I(E(h()))
        }
        var k = !1;

        function I(e) {
          k ? (k = !1, A()) : P.confirmTransitionTo(e, "POP", b, (function(t) {
            t ? A({
              action: "POP",
              location: e
            }) : function(e) {
              var t = H.location,
                r = R.indexOf(t.key); - 1 === r && (r = 0);
              var n = R.indexOf(e.key); - 1 === n && (n = 0);
              var i = r - n;
              i && (k = !0, V(i))
            }(e)
          }))
        }
        var O = E(h()),
          R = [O.key];

        function F(e) {
          return x + function(e) {
            var t = e.pathname,
              r = e.search,
              n = e.hash,
              i = t || "/";
            return r && "?" !== r && (i += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (i += "#" === n.charAt(0) ? n : "#" + n), i
          }(e)
        }

        function V(e) {
          i.go(e)
        }
        var G = 0;

        function N(e) {
          1 === (G += e) && 1 === e ? (window.addEventListener(p, L), o && window.addEventListener(f, _)) : 0 === G && (window.removeEventListener(p, L), o && window.removeEventListener(f, _))
        }
        var D = !1,
          H = {
            length: i.length,
            action: "POP",
            location: O,
            createHref: F,
            push: function(e, t) {
              var r = "PUSH",
                n = d(e, t, T(), H.location);
              P.confirmTransitionTo(n, r, b, (function(e) {
                if (e) {
                  var t = F(n),
                    o = n.key,
                    s = n.state;
                  if (a)
                    if (i.pushState({
                        key: o,
                        state: s
                      }, null, t), g) window.location.href = t;
                    else {
                      var l = R.indexOf(H.location.key),
                        d = R.slice(0, l + 1);
                      d.push(n.key), R = d, A({
                        action: r,
                        location: n
                      })
                    }
                  else window.location.href = t
                }
              }))
            },
            replace: function(e, t) {
              var r = "REPLACE",
                n = d(e, t, T(), H.location);
              P.confirmTransitionTo(n, r, b, (function(e) {
                if (e) {
                  var t = F(n),
                    o = n.key,
                    s = n.state;
                  if (a)
                    if (i.replaceState({
                        key: o,
                        state: s
                      }, null, t), g) window.location.replace(t);
                    else {
                      var l = R.indexOf(H.location.key); - 1 !== l && (R[l] = n.key), A({
                        action: r,
                        location: n
                      })
                    }
                  else window.location.replace(t)
                }
              }))
            },
            go: V,
            goBack: function() {
              V(-1)
            },
            goForward: function() {
              V(1)
            },
            block: function(e) {
              void 0 === e && (e = !1);
              var t = P.setPrompt(e);
              return D || (N(1), D = !0),
                function() {
                  return D && (D = !1, N(-1)), t()
                }
            },
            listen: function(e) {
              var t = P.appendListener(e);
              return N(1),
                function() {
                  N(-1), t()
                }
            }
          };
        return H
      }
    },
    1816: (e, t, r) => {
      var n = r(8007).Symbol;
      e.exports = n
    },
    7158: (e, t, r) => {
      var n = r(1816),
        i = r(6061),
        a = r(4968),
        o = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? i(e) : a(e)
      }
    },
    8530: (e, t, r) => {
      var n = r(8478),
        i = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(i, "") : e
      }
    },
    4626: (e, t, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = n
    },
    6061: (e, t, r) => {
      var n = r(1816),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        var t = a.call(e, s),
          r = e[s];
        try {
          e[s] = void 0;
          var n = !0
        } catch (e) {}
        var i = o.call(e);
        return n && (t ? e[s] = r : delete e[s]), i
      }
    },
    4968: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    8007: (e, t, r) => {
      var n = r(4626),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = n || i || Function("return this")();
      e.exports = a
    },
    8478: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    4963: (e, t, r) => {
      var n = r(7335),
        i = r(2346),
        a = r(8972),
        o = Math.max,
        s = Math.min;
      e.exports = function(e, t, r) {
        var l, d, c, u, p, f, h = 0,
          m = !1,
          v = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function w(t) {
          var r = l,
            n = d;
          return l = d = void 0, h = t, u = e.apply(n, r)
        }

        function b(e) {
          var r = e - f;
          return void 0 === f || r >= t || r < 0 || v && e - h >= c
        }

        function S() {
          var e = i();
          if (b(e)) return y(e);
          p = setTimeout(S, function(e) {
            var r = t - (e - f);
            return v ? s(r, c - (e - h)) : r
          }(e))
        }

        function y(e) {
          return p = void 0, g && l ? w(e) : (l = d = void 0, u)
        }

        function x() {
          var e = i(),
            r = b(e);
          if (l = arguments, d = this, f = e, r) {
            if (void 0 === p) return function(e) {
              return h = e, p = setTimeout(S, t), m ? w(e) : u
            }(f);
            if (v) return clearTimeout(p), p = setTimeout(S, t), w(f)
          }
          return void 0 === p && (p = setTimeout(S, t)), u
        }
        return t = a(t) || 0, n(r) && (m = !!r.leading, c = (v = "maxWait" in r) ? o(a(r.maxWait) || 0, t) : c, g = "trailing" in r ? !!r.trailing : g), x.cancel = function() {
          void 0 !== p && clearTimeout(p), h = 0, l = f = d = p = void 0
        }, x.flush = function() {
          return void 0 === p ? u : y(i())
        }, x
      }
    },
    7335: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    5360: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    7416: (e, t, r) => {
      var n = r(7158),
        i = r(5360);
      e.exports = function(e) {
        return "symbol" == typeof e || i(e) && "[object Symbol]" == n(e)
      }
    },
    2346: (e, t, r) => {
      var n = r(8007);
      e.exports = function() {
        return n.Date.now()
      }
    },
    8972: (e, t, r) => {
      var n = r(8530),
        i = r(7335),
        a = r(7416),
        o = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return NaN;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = s.test(e);
        return r || l.test(e) ? d(e.slice(2), r ? 2 : 8) : o.test(e) ? NaN : +e
      }
    },
    821: (e, t, r) => {
      "use strict";
      r.d(t, {
        RC: () => pe,
        qr: () => fe
      });
      var n = r(1403);

      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function a(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0 && a(e[r], t[r])
        }))
      }
      const o = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function s() {
        const e = "undefined" != typeof document ? document : {};
        return a(e, o), e
      }
      const l = {
        document: o,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function d() {
        const e = "undefined" != typeof window ? window : {};
        return a(e, l), e
      }

      function c(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function u() {
        return Date.now()
      }

      function p(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function f() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && (r = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
            const r = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, n = r.length; t < n; t += 1) {
              const n = r[t],
                a = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== a && a.enumerable && (p(e[n]) && p(i[n]) ? i[n].__swiper__ ? e[n] = i[n] : f(e[n], i[n]) : !p(e[n]) && p(i[n]) ? (e[n] = {}, i[n].__swiper__ ? e[n] = i[n] : f(e[n], i[n])) : e[n] = i[n])
            }
          }
        }
        var r;
        return e
      }

      function h(e, t, r) {
        e.style.setProperty(t, r)
      }

      function m(e) {
        let {
          swiper: t,
          targetPosition: r,
          side: n
        } = e;
        const i = d(),
          a = -t.translate;
        let o, s = null;
        const l = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > a ? "next" : "prev",
          u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          p = () => {
            o = (new Date).getTime(), null === s && (s = o);
            const e = Math.max(Math.min((o - s) / l, 1), 0),
              d = .5 - Math.cos(e * Math.PI) / 2;
            let c = a + d * (r - a);
            if (u(c, r) && (c = r), t.wrapperEl.scrollTo({
                [n]: c
              }), u(c, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [n]: c
              })
            })), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(p)
          };
        p()
      }

      function v(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
      }

      function g(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function w(e, t) {
        void 0 === t && (t = []);
        const r = document.createElement(e);
        return r.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), r
      }

      function b(e, t) {
        return d().getComputedStyle(e, null).getPropertyValue(t)
      }

      function S(e) {
        let t, r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
          return t
        }
      }

      function y(e, t, r) {
        const n = d();
        return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }
      let x, E, T;

      function M() {
        return x || (x = function() {
          const e = d(),
            t = s();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), x
      }

      function C(e) {
        return void 0 === e && (e = {}), E || (E = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const r = M(),
            n = d(),
            i = n.navigator.platform,
            a = t || n.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            s = n.screen.width,
            l = n.screen.height,
            c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = a.match(/(iPad).*OS\s([\d_]+)/);
          const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === i;
          let m = "MacIntel" === i;
          return !u && m && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${s}x${l}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), m = !1), c && !h && (o.os = "android", o.android = !0), (u || f || p) && (o.os = "ios", o.ios = !0), o
        }(e)), E
      }
      var P = {
        on(e, t, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;
          const i = r ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
          })), n
        },
        once(e, t, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;

          function i() {
            n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
            t.apply(n, a)
          }
          return i.__emitterProxy = t, n.on(e, i, r)
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const n = t ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
        },
        off(e, t) {
          const r = this;
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
            void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((n, i) => {
              (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(i, 1)
            }))
          })), r) : r
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, n;
          for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
          return "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0], r = a.slice(1, a.length), n = e) : (t = a[0].events, r = a[0].data, n = a[0].context || e), r.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(n, [t, ...r])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(n, r)
            }))
          })), e
        }
      };
      const A = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        L = (e, t) => {
          if (!e.slides[t]) return;
          const r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        _ = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          const n = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const r = i,
              a = [r - t];
            return a.push(...Array.from({
              length: t
            }).map(((e, t) => r + n + t))), void e.slides.forEach(((t, r) => {
              a.includes(t.column) && L(e, r)
            }))
          }
          const a = i + n - 1;
          if (e.params.rewind || e.params.loop)
            for (let n = i - t; n <= a + t; n += 1) {
              const t = (n % r + r) % r;
              (t < i || t > a) && L(e, t)
            } else
              for (let n = Math.max(i - t, 0); n <= Math.min(a + t, r - 1); n += 1) n !== i && (n > a || n < i) && L(e, n)
        };
      var k = {
        updateSize: function() {
          const e = this;
          let t, r;
          const n = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt(b(n, "padding-left") || 0, 10) - parseInt(b(n, "padding-right") || 0, 10), r = r - parseInt(b(n, "padding-top") || 0, 10) - parseInt(b(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
            width: t,
            height: r,
            size: e.isHorizontal() ? t : r
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, r) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0)
          }
          const r = e.params,
            {
              wrapperEl: n,
              slidesEl: i,
              size: a,
              rtlTranslate: o,
              wrongRTL: s
            } = e,
            l = e.virtual && r.virtual.enabled,
            d = l ? e.virtual.slides.length : e.slides.length,
            c = v(i, `.${e.params.slideClass}, swiper-slide`),
            u = l ? e.virtual.slides.length : c.length;
          let p = [];
          const f = [],
            m = [];
          let g = r.slidesOffsetBefore;
          "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
          let w = r.slidesOffsetAfter;
          "function" == typeof w && (w = r.slidesOffsetAfter.call(e));
          const S = e.snapGrid.length,
            x = e.slidesGrid.length;
          let E = r.spaceBetween,
            T = -g,
            M = 0,
            C = 0;
          if (void 0 === a) return;
          "string" == typeof E && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * a : "string" == typeof E && (E = parseFloat(E)), e.virtualSize = -E, c.forEach((e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), r.centeredSlides && r.cssMode && (h(n, "--swiper-centered-offset-before", ""), h(n, "--swiper-centered-offset-after", ""));
          const P = r.grid && r.grid.rows > 1 && e.grid;
          let A;
          P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
          const L = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
          for (let n = 0; n < u; n += 1) {
            let i;
            if (A = 0, c[n] && (i = c[n]), P && e.grid.updateSlide(n, i, c), !c[n] || "none" !== b(i, "display")) {
              if ("auto" === r.slidesPerView) {
                L && (c[n].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(i),
                  o = i.style.transform,
                  s = i.style.webkitTransform;
                if (o && (i.style.transform = "none"), s && (i.style.webkitTransform = "none"), r.roundLengths) A = e.isHorizontal() ? y(i, "width", !0) : y(i, "height", !0);
                else {
                  const e = t(a, "width"),
                    r = t(a, "padding-left"),
                    n = t(a, "padding-right"),
                    o = t(a, "margin-left"),
                    s = t(a, "margin-right"),
                    l = a.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) A = e + o + s;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: a
                    } = i;
                    A = e + r + n + o + s + (a - t)
                  }
                }
                o && (i.style.transform = o), s && (i.style.webkitTransform = s), r.roundLengths && (A = Math.floor(A))
              } else A = (a - (r.slidesPerView - 1) * E) / r.slidesPerView, r.roundLengths && (A = Math.floor(A)), c[n] && (c[n].style[e.getDirectionLabel("width")] = `${A}px`);
              c[n] && (c[n].swiperSlideSize = A), m.push(A), r.centeredSlides ? (T = T + A / 2 + M / 2 + E, 0 === M && 0 !== n && (T = T - a / 2 - E), 0 === n && (T = T - a / 2 - E), Math.abs(T) < .001 && (T = 0), r.roundLengths && (T = Math.floor(T)), C % r.slidesPerGroup == 0 && p.push(T), f.push(T)) : (r.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && p.push(T), f.push(T), T = T + A + E), e.virtualSize += A + E, M = A, C += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, a) + w, o && s && ("slide" === r.effect || "coverflow" === r.effect) && (n.style.width = `${e.virtualSize+E}px`), r.setWrapperSize && (n.style[e.getDirectionLabel("width")] = `${e.virtualSize+E}px`), P && e.grid.updateWrapperSize(A, p), !r.centeredSlides) {
            const t = [];
            for (let n = 0; n < p.length; n += 1) {
              let i = p[n];
              r.roundLengths && (i = Math.floor(i)), p[n] <= e.virtualSize - a && t.push(i)
            }
            p = t, Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a)
          }
          if (l && r.loop) {
            const t = m[0] + E;
            if (r.slidesPerGroup > 1) {
              const n = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                i = t * r.slidesPerGroup;
              for (let e = 0; e < n; e += 1) p.push(p[p.length - 1] + i)
            }
            for (let n = 0; n < e.virtual.slidesBefore + e.virtual.slidesAfter; n += 1) 1 === r.slidesPerGroup && p.push(p[p.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
          }
          if (0 === p.length && (p = [0]), 0 !== E) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            c.filter(((e, t) => !(r.cssMode && !r.loop) || t !== c.length - 1)).forEach((e => {
              e.style[t] = `${E}px`
            }))
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t => {
              e += t + (E || 0)
            })), e -= E;
            const t = e - a;
            p = p.map((e => e <= 0 ? -g : e > t ? t + w : e))
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            if (m.forEach((t => {
                e += t + (E || 0)
              })), e -= E, e < a) {
              const t = (a - e) / 2;
              p.forEach(((e, r) => {
                p[r] = e - t
              })), f.forEach(((e, r) => {
                f[r] = e + t
              }))
            }
          }
          if (Object.assign(e, {
              slides: c,
              snapGrid: p,
              slidesGrid: f,
              slidesSizesGrid: m
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            h(n, "--swiper-centered-offset-before", -p[0] + "px"), h(n, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
          }
          if (u !== d && e.emit("slidesLengthChange"), p.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== x && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const t = `${r.containerModifierClass}backface-hidden`,
              n = e.el.classList.contains(t);
            u <= r.maxBackfaceHiddenSlides ? n || e.el.classList.add(t) : n && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            r = [],
            n = t.virtual && t.params.virtual.enabled;
          let i, a = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const o = e => n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              r.push(e)
            }));
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !n) break;
                r.push(o(e))
              } else r.push(o(t.activeIndex));
          for (i = 0; i < r.length; i += 1)
            if (void 0 !== r[i]) {
              const e = r[i].offsetHeight;
              a = e > a ? e : a
            }(a || 0 === a) && (t.wrapperEl.style.height = `${a}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            r = t.params,
            {
              slides: n,
              rtlTranslate: i,
              snapGrid: a
            } = t;
          if (0 === n.length) return;
          void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          i && (o = e), n.forEach((e => {
            e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass)
          })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let s = r.spaceBetween;
          "string" == typeof s && s.indexOf("%") >= 0 ? s = parseFloat(s.replace("%", "")) / 100 * t.size : "string" == typeof s && (s = parseFloat(s));
          for (let e = 0; e < n.length; e += 1) {
            const l = n[e];
            let d = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (d -= n[0].swiperSlideOffset);
            const c = (o + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + s),
              u = (o - a[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + s),
              p = -(o - d),
              f = p + t.slidesSizesGrid[e],
              h = p >= 0 && p <= t.size - t.slidesSizesGrid[e];
            (p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), n[e].classList.add(r.slideVisibleClass)), h && n[e].classList.add(r.slideFullyVisibleClass), l.progress = i ? -c : c, l.originalProgress = i ? -u : u
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * r || 0
          }
          const r = t.params,
            n = t.maxTranslate() - t.minTranslate();
          let {
            progress: i,
            isBeginning: a,
            isEnd: o,
            progressLoop: s
          } = t;
          const l = a,
            d = o;
          if (0 === n) i = 0, a = !0, o = !0;
          else {
            i = (e - t.minTranslate()) / n;
            const r = Math.abs(e - t.minTranslate()) < 1,
              s = Math.abs(e - t.maxTranslate()) < 1;
            a = r || i <= 0, o = s || i >= 1, r && (i = 0), s && (i = 1)
          }
          if (r.loop) {
            const r = t.getSlideIndexByData(0),
              n = t.getSlideIndexByData(t.slides.length - 1),
              i = t.slidesGrid[r],
              a = t.slidesGrid[n],
              o = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            s = l >= i ? (l - i) / o : (l + o - a) / o, s > 1 && (s -= 1)
          }
          Object.assign(t, {
            progress: i,
            progressLoop: s,
            isBeginning: a,
            isEnd: o
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), a && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !a || d && !o) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: r,
              slidesEl: n,
              activeIndex: i
            } = e,
            a = e.virtual && r.virtual.enabled,
            o = e.grid && r.grid && r.grid.rows > 1,
            s = e => v(n, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
          let l, d, c;
          if (t.forEach((e => {
              e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
            })), a)
            if (r.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = s(`[data-swiper-slide-index="${t}"]`)
            } else l = s(`[data-swiper-slide-index="${i}"]`);
          else o ? (l = t.filter((e => e.column === i))[0], c = t.filter((e => e.column === i + 1))[0], d = t.filter((e => e.column === i - 1))[0]) : l = t[i];
          l && (l.classList.add(r.slideActiveClass), o ? (c && c.classList.add(r.slideNextClass), d && d.classList.add(r.slidePrevClass)) : (c = function(e, t) {
            const r = [];
            for (; e.nextElementSibling;) {
              const n = e.nextElementSibling;
              t ? n.matches(t) && r.push(n) : r.push(n), e = n
            }
            return r
          }(l, `.${r.slideClass}, swiper-slide`)[0], r.loop && !c && (c = t[0]), c && c.classList.add(r.slideNextClass), d = function(e, t) {
            const r = [];
            for (; e.previousElementSibling;) {
              const n = e.previousElementSibling;
              t ? n.matches(t) && r.push(n) : r.push(n), e = n
            }
            return r
          }(l, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !d && (d = t[t.length - 1]), d && d.classList.add(r.slidePrevClass))), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: n,
              params: i,
              activeIndex: a,
              realIndex: o,
              snapIndex: s
            } = t;
          let l, d = e;
          const c = e => {
            let r = e - t.virtual.slidesBefore;
            return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
          };
          if (void 0 === d && (d = function(e) {
              const {
                slidesGrid: t,
                params: r
              } = e, n = e.rtlTranslate ? e.translate : -e.translate;
              let i;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? n >= t[e] && n < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : n >= t[e] && n < t[e + 1] && (i = e + 1) : n >= t[e] && (i = e);
              return r.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(t)), n.indexOf(r) >= 0) l = n.indexOf(r);
          else {
            const e = Math.min(i.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / i.slidesPerGroup)
          }
          if (l >= n.length && (l = n.length - 1), d === a && !t.params.loop) return void(l !== s && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === a && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const u = t.grid && i.grid && i.grid.rows > 1;
          let p;
          if (t.virtual && i.virtual.enabled && i.loop) p = c(d);
          else if (u) {
            const e = t.slides.filter((e => e.column === d))[0];
            let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)), p = Math.floor(r / i.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            p = e ? parseInt(e, 10) : d
          } else p = d;
          Object.assign(t, {
            previousSnapIndex: s,
            snapIndex: l,
            previousRealIndex: o,
            realIndex: p,
            previousIndex: a,
            activeIndex: d
          }), t.initialized && _(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (o !== p && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const r = this,
            n = r.params;
          let i = e.closest(`.${n.slideClass}, swiper-slide`);
          !i && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !i && e.matches && e.matches(`.${n.slideClass}, swiper-slide`) && (i = e)
          }));
          let a, o = !1;
          if (i)
            for (let e = 0; e < r.slides.length; e += 1)
              if (r.slides[e] === i) {
                o = !0, a = e;
                break
              } if (!i || !o) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = a, n.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function I(e) {
        let {
          swiper: t,
          runCallbacks: r,
          direction: n,
          step: i
        } = e;
        const {
          activeIndex: a,
          previousIndex: o
        } = t;
        let s = n;
        if (s || (s = a > o ? "next" : a < o ? "prev" : "reset"), t.emit(`transition${i}`), r && a !== o) {
          if ("reset" === s) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`), "next" === s ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      var O = {
          slideTo: function(e, t, r, n, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const a = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: s,
              snapGrid: l,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: u,
              rtlTranslate: p,
              wrapperEl: f,
              enabled: h
            } = a;
            if (a.animating && s.preventInteractionOnTransition || !h && !n && !i || a.destroyed) return !1;
            const v = Math.min(a.params.slidesPerGroupSkip, o);
            let g = v + Math.floor((o - v) / a.params.slidesPerGroup);
            g >= l.length && (g = l.length - 1);
            const w = -l[g];
            if (s.normalizeSlideIndex)
              for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * w),
                  r = Math.floor(100 * d[e]),
                  n = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1] ? t >= r && t < n - (n - r) / 2 ? o = e : t >= r && t < n && (o = e + 1) : t >= r && (o = e)
              }
            if (a.initialized && o !== u) {
              if (!a.allowSlideNext && (p ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate())) return !1;
              if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (u || 0) !== o) return !1
            }
            let b;
            if (o !== (c || 0) && r && a.emit("beforeSlideChangeStart"), a.updateProgress(w), b = o > u ? "next" : o < u ? "prev" : "reset", p && -w === a.translate || !p && w === a.translate) return a.updateActiveIndex(o), s.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== s.effect && a.setTranslate(w), "reset" !== b && (a.transitionStart(r, b), a.transitionEnd(r, b)), !1;
            if (s.cssMode) {
              const e = a.isHorizontal(),
                r = p ? w : -w;
              if (0 === t) {
                const t = a.virtual && a.params.virtual.enabled;
                t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                  f[e ? "scrollLeft" : "scrollTop"] = r
                }))) : f[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame((() => {
                  a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                }))
              } else {
                if (!a.support.smoothScroll) return m({
                  swiper: a,
                  targetPosition: r,
                  side: e ? "left" : "top"
                }), !0;
                f.scrollTo({
                  [e ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            return a.setTransition(t), a.setTranslate(w), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, n), a.transitionStart(r, b), 0 === t ? a.transitionEnd(r, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
              a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(r, b))
            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, r, n) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const i = this;
            if (i.destroyed) return;
            const a = i.grid && i.params.grid && i.params.grid.rows > 1;
            let o = e;
            if (i.params.loop)
              if (i.virtual && i.params.virtual.enabled) o += i.virtual.slidesBefore;
              else {
                let e;
                if (a) {
                  const t = o * i.params.grid.rows;
                  e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else e = i.getSlideIndexByData(o);
                const t = a ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                  {
                    centeredSlides: r
                  } = i.params;
                let n = i.params.slidesPerView;
                "auto" === n ? n = i.slidesPerViewDynamic() : (n = Math.ceil(parseFloat(i.params.slidesPerView, 10)), r && n % 2 == 0 && (n += 1));
                let s = t - e < n;
                if (r && (s = s || e < Math.ceil(n / 2)), s) {
                  const n = r ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                  i.loopFix({
                    direction: n,
                    slideTo: !0,
                    activeSlideIndex: "next" === n ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === n ? i.realIndex : void 0
                  })
                }
                if (a) {
                  const e = o * i.params.grid.rows;
                  o = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else o = i.getSlideIndexByData(o)
              } return requestAnimationFrame((() => {
              i.slideTo(o, t, r, n)
            })), i
          },
          slideNext: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const n = this,
              {
                enabled: i,
                params: a,
                animating: o
              } = n;
            if (!i || n.destroyed) return n;
            let s = a.slidesPerGroup;
            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (s = Math.max(n.slidesPerViewDynamic("current", !0), 1));
            const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : s,
              d = n.virtual && a.virtual.enabled;
            if (a.loop) {
              if (o && !d && a.loopPreventsSliding) return !1;
              if (n.loopFix({
                  direction: "next"
                }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && a.cssMode) return requestAnimationFrame((() => {
                n.slideTo(n.activeIndex + l, e, t, r)
              })), !0
            }
            return a.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
          },
          slidePrev: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const n = this,
              {
                params: i,
                snapGrid: a,
                slidesGrid: o,
                rtlTranslate: s,
                enabled: l,
                animating: d
              } = n;
            if (!l || n.destroyed) return n;
            const c = n.virtual && i.virtual.enabled;
            if (i.loop) {
              if (d && !c && i.loopPreventsSliding) return !1;
              n.loopFix({
                direction: "prev"
              }), n._clientLeft = n.wrapperEl.clientLeft
            }

            function u(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = u(s ? n.translate : -n.translate),
              f = a.map((e => u(e)));
            let h = a[f.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
              let e;
              a.forEach(((t, r) => {
                p >= t && (e = r)
              })), void 0 !== e && (h = a[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = o.indexOf(h), m < 0 && (m = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - n.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && n.isBeginning) {
              const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
              return n.slideTo(i, e, t, r)
            }
            return i.loop && 0 === n.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
              n.slideTo(m, e, t, r)
            })), !0) : n.slideTo(m, e, t, r)
          },
          slideReset: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const n = this;
            if (!n.destroyed) return n.slideTo(n.activeIndex, e, t, r)
          },
          slideToClosest: function(e, t, r, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
            const i = this;
            if (i.destroyed) return;
            let a = i.activeIndex;
            const o = Math.min(i.params.slidesPerGroupSkip, a),
              s = o + Math.floor((a - o) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[s]) {
              const e = i.snapGrid[s];
              l - e > (i.snapGrid[s + 1] - e) * n && (a += i.params.slidesPerGroup)
            } else {
              const e = i.snapGrid[s - 1];
              l - e <= (i.snapGrid[s] - e) * n && (a -= i.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, i.slidesGrid.length - 1), i.slideTo(a, e, t, r)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: r
            } = e, n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, a = e.clickedIndex;
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - n / 2 || a > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), a = e.getSlideIndex(v(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), c((() => {
                e.slideTo(a)
              }))) : e.slideTo(a) : a > e.slides.length - n ? (e.loopFix(), a = e.getSlideIndex(v(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), c((() => {
                e.slideTo(a)
              }))) : e.slideTo(a)
            } else e.slideTo(a)
          }
        },
        R = {
          loopCreate: function(e) {
            const t = this,
              {
                params: r,
                slidesEl: n
              } = t;
            if (!r.loop || t.virtual && t.params.virtual.enabled) return;
            const i = () => {
                v(n, `.${r.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              a = t.grid && r.grid && r.grid.rows > 1,
              o = r.slidesPerGroup * (a ? r.grid.rows : 1),
              s = t.slides.length % o != 0,
              l = a && t.slides.length % r.grid.rows != 0,
              d = e => {
                for (let n = 0; n < e; n += 1) {
                  const e = t.isElement ? w("swiper-slide", [r.slideBlankClass]) : w("div", [r.slideClass, r.slideBlankClass]);
                  t.slidesEl.append(e)
                }
              };
            s ? (r.loopAddBlankSlides ? (d(o - t.slides.length % o), t.recalcSlides(), t.updateSlides()) : g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : l ? (r.loopAddBlankSlides ? (d(r.grid.rows - t.slides.length % r.grid.rows), t.recalcSlides(), t.updateSlides()) : g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : i(), t.loopFix({
              slideRealIndex: e,
              direction: r.centeredSlides ? void 0 : "next"
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: r = !0,
              direction: n,
              setTranslate: i,
              activeSlideIndex: a,
              byController: o,
              byMousewheel: s
            } = void 0 === e ? {} : e;
            const l = this;
            if (!l.params.loop) return;
            l.emit("beforeLoopFix");
            const {
              slides: d,
              allowSlidePrev: c,
              allowSlideNext: u,
              slidesEl: p,
              params: f
            } = l, {
              centeredSlides: h
            } = f;
            if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && f.virtual.enabled) return r && (f.centeredSlides || 0 !== l.snapIndex ? f.centeredSlides && l.snapIndex < f.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = c, l.allowSlideNext = u, void l.emit("loopFix");
            let m = f.slidesPerView;
            "auto" === m ? m = l.slidesPerViewDynamic() : (m = Math.ceil(parseFloat(f.slidesPerView, 10)), h && m % 2 == 0 && (m += 1));
            const v = f.slidesPerGroupAuto ? m : f.slidesPerGroup;
            let w = v;
            w % v != 0 && (w += v - w % v), w += f.loopAdditionalSlides, l.loopedSlides = w;
            const b = l.grid && f.grid && f.grid.rows > 1;
            d.length < m + w ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const S = [],
              y = [];
            let x = l.activeIndex;
            void 0 === a ? a = l.getSlideIndex(d.filter((e => e.classList.contains(f.slideActiveClass)))[0]) : x = a;
            const E = "next" === n || !n,
              T = "prev" === n || !n;
            let M = 0,
              C = 0;
            const P = b ? Math.ceil(d.length / f.grid.rows) : d.length,
              A = (b ? d[a].column : a) + (h && void 0 === i ? -m / 2 + .5 : 0);
            if (A < w) {
              M = Math.max(w - A, v);
              for (let e = 0; e < w - A; e += 1) {
                const t = e - Math.floor(e / P) * P;
                if (b) {
                  const e = P - t - 1;
                  for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && S.push(t)
                } else S.push(P - t - 1)
              }
            } else if (A + m > P - w) {
              C = Math.max(A - (P - 2 * w), v);
              for (let e = 0; e < C; e += 1) {
                const t = e - Math.floor(e / P) * P;
                b ? d.forEach(((e, r) => {
                  e.column === t && y.push(r)
                })) : y.push(t)
              }
            }
            if (l.__preventObserver__ = !0, requestAnimationFrame((() => {
                l.__preventObserver__ = !1
              })), T && S.forEach((e => {
                d[e].swiperLoopMoveDOM = !0, p.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
              })), E && y.forEach((e => {
                d[e].swiperLoopMoveDOM = !0, p.append(d[e]), d[e].swiperLoopMoveDOM = !1
              })), l.recalcSlides(), "auto" === f.slidesPerView ? l.updateSlides() : b && (S.length > 0 && T || y.length > 0 && E) && l.slides.forEach(((e, t) => {
                l.grid.updateSlide(t, e, l.slides)
              })), f.watchSlidesProgress && l.updateSlidesOffset(), r)
              if (S.length > 0 && T) {
                if (void 0 === t) {
                  const e = l.slidesGrid[x],
                    t = l.slidesGrid[x + M] - e;
                  s ? l.setTranslate(l.translate - t) : (l.slideTo(x + M, 0, !1, !0), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t))
                } else if (i) {
                  const e = b ? S.length / f.grid.rows : S.length;
                  l.slideTo(l.activeIndex + e, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate
                }
              } else if (y.length > 0 && E)
              if (void 0 === t) {
                const e = l.slidesGrid[x],
                  t = l.slidesGrid[x - C] - e;
                s ? l.setTranslate(l.translate - t) : (l.slideTo(x - C, 0, !1, !0), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t))
              } else {
                const e = b ? y.length / f.grid.rows : y.length;
                l.slideTo(l.activeIndex - e, 0, !1, !0)
              } if (l.allowSlidePrev = c, l.allowSlideNext = u, l.controller && l.controller.control && !o) {
              const e = {
                slideRealIndex: t,
                direction: n,
                setTranslate: i,
                activeSlideIndex: a,
                byController: !0
              };
              Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === f.slidesPerView && r
                })
              })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
                ...e,
                slideTo: l.controller.control.params.slidesPerView === f.slidesPerView && r
              })
            }
            l.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: r
              } = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const n = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              n[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), n.forEach((e => {
              r.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function F(e, t, r) {
        const n = d(),
          {
            params: i
          } = e,
          a = i.edgeSwipeDetection,
          o = i.edgeSwipeThreshold;
        return !a || !(r <= o || r >= n.innerWidth - o) || "prevent" === a && (t.preventDefault(), !0)
      }

      function V(e) {
        const t = this,
          r = s();
        let n = e;
        n.originalEvent && (n = n.originalEvent);
        const i = t.touchEventsData;
        if ("pointerdown" === n.type) {
          if (null !== i.pointerId && i.pointerId !== n.pointerId) return;
          i.pointerId = n.pointerId
        } else "touchstart" === n.type && 1 === n.targetTouches.length && (i.touchId = n.targetTouches[0].identifier);
        if ("touchstart" === n.type) return void F(t, n, n.targetTouches[0].pageX);
        const {
          params: a,
          touches: o,
          enabled: l
        } = t;
        if (!l) return;
        if (!a.simulateTouch && "mouse" === n.pointerType) return;
        if (t.animating && a.preventInteractionOnTransition) return;
        !t.animating && a.cssMode && a.loop && t.loopFix();
        let c = n.target;
        if ("wrapper" === a.touchEventsTarget && !t.wrapperEl.contains(c)) return;
        if ("which" in n && 3 === n.which) return;
        if ("button" in n && n.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        const p = !!a.noSwipingClass && "" !== a.noSwipingClass,
          f = n.composedPath ? n.composedPath() : n.path;
        p && n.target && n.target.shadowRoot && f && (c = f[0]);
        const h = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
          m = !(!n.target || !n.target.shadowRoot);
        if (a.noSwiping && (m ? function(e, t) {
            return void 0 === t && (t = this),
              function t(r) {
                if (!r || r === s() || r === d()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const n = r.closest(e);
                return n || r.getRootNode ? n || t(r.getRootNode().host) : null
              }(t)
          }(h, c) : c.closest(h))) return void(t.allowClick = !0);
        if (a.swipeHandler && !c.closest(a.swipeHandler)) return;
        o.currentX = n.pageX, o.currentY = n.pageY;
        const v = o.currentX,
          g = o.currentY;
        if (!F(t, n, v)) return;
        Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), o.startX = v, o.startY = g, i.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (i.allowThresholdMove = !1);
        let w = !0;
        c.matches(i.focusableElements) && (w = !1, "SELECT" === c.nodeName && (i.isTouched = !1)), r.activeElement && r.activeElement.matches(i.focusableElements) && r.activeElement !== c && r.activeElement.blur();
        const b = w && t.allowTouchMove && a.touchStartPreventDefault;
        !a.touchStartForcePreventDefault && !b || c.isContentEditable || n.preventDefault(), a.freeMode && a.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n)
      }

      function G(e) {
        const t = s(),
          r = this,
          n = r.touchEventsData,
          {
            params: i,
            touches: a,
            rtlTranslate: o,
            enabled: l
          } = r;
        if (!l) return;
        if (!i.simulateTouch && "mouse" === e.pointerType) return;
        let d, c = e;
        if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
          if (null !== n.touchId) return;
          if (c.pointerId !== n.pointerId) return
        }
        if ("touchmove" === c.type) {
          if (d = [...c.changedTouches].filter((e => e.identifier === n.touchId))[0], !d || d.identifier !== n.touchId) return
        } else d = c;
        if (!n.isTouched) return void(n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", c));
        const p = d.pageX,
          f = d.pageY;
        if (c.preventedByNestedSwiper) return a.startX = p, void(a.startY = f);
        if (!r.allowTouchMove) return c.target.matches(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(a, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f
        }), n.touchStartTime = u()));
        if (i.touchReleaseOnEdges && !i.loop)
          if (r.isVertical()) {
            if (f < a.startY && r.translate <= r.maxTranslate() || f > a.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
          } else if (p < a.startX && r.translate <= r.maxTranslate() || p > a.startX && r.translate >= r.minTranslate()) return;
        if (t.activeElement && c.target === t.activeElement && c.target.matches(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
        n.allowTouchCallbacks && r.emit("touchMove", c), a.previousX = a.currentX, a.previousY = a.currentY, a.currentX = p, a.currentY = f;
        const h = a.currentX - a.startX,
          m = a.currentY - a.startY;
        if (r.params.threshold && Math.sqrt(h ** 2 + m ** 2) < r.params.threshold) return;
        if (void 0 === n.isScrolling) {
          let e;
          r.isHorizontal() && a.currentY === a.startY || r.isVertical() && a.currentX === a.startX ? n.isScrolling = !1 : h * h + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(h)) / Math.PI, n.isScrolling = r.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
        }
        if (n.isScrolling && r.emit("touchMoveOpposite", c), void 0 === n.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        r.allowClick = !1, !i.cssMode && c.cancelable && c.preventDefault(), i.touchMoveStopPropagation && !i.nested && c.stopPropagation();
        let v = r.isHorizontal() ? h : m,
          g = r.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
        i.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), g = Math.abs(g) * (o ? 1 : -1)), a.diff = v, v *= i.touchRatio, o && (v = -v, g = -g);
        const w = r.touchesDirection;
        r.swipeDirection = v > 0 ? "prev" : "next", r.touchesDirection = g > 0 ? "prev" : "next";
        const b = r.params.loop && !i.cssMode,
          S = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!n.isMoved) {
          if (b && S && r.loopFix({
              direction: r.swipeDirection
            }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            r.wrapperEl.dispatchEvent(e)
          }
          n.allowMomentumBounce = !1, !i.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", c)
        }
        if ((new Date).getTime(), n.isMoved && n.allowThresholdMove && w !== r.touchesDirection && b && S && Math.abs(v) >= 1) return Object.assign(a, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f,
          startTranslate: n.currentTranslate
        }), n.loopSwapReset = !0, void(n.startTranslate = n.currentTranslate);
        r.emit("sliderMove", c), n.isMoved = !0, n.currentTranslate = v + n.startTranslate;
        let y = !0,
          x = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (x = 0), v > 0 ? (b && S && n.allowThresholdMove && n.currentTranslate > (i.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), n.currentTranslate > r.minTranslate() && (y = !1, i.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + v) ** x))) : v < 0 && (b && S && n.allowThresholdMove && n.currentTranslate < (i.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === i.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
          }), n.currentTranslate < r.maxTranslate() && (y = !1, i.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - v) ** x))), y && (c.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), i.threshold > 0) {
          if (!(Math.abs(v) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove) return n.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, n.currentTranslate = n.startTranslate, void(a.diff = r.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && r.freeMode || i.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
      }

      function N(e) {
        const t = this,
          r = t.touchEventsData;
        let n, i = e;
        if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
          if (n = [...i.changedTouches].filter((e => e.identifier === r.touchId))[0], !n || n.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (i.pointerId !== r.pointerId) return;
          n = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: a,
          touches: o,
          rtlTranslate: s,
          slidesGrid: l,
          enabled: d
        } = t;
        if (!d) return;
        if (!a.simulateTouch && "mouse" === i.pointerType) return;
        if (r.allowTouchCallbacks && t.emit("touchEnd", i), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && a.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        a.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = u(),
          f = p - r.touchStartTime;
        if (t.allowClick) {
          const e = i.path || i.composedPath && i.composedPath();
          t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), f < 300 && p - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (r.lastClickTime = u(), c((() => {
            t.destroyed || (t.allowClick = !0)
          })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let h;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, h = a.followFinger ? s ? t.translate : -t.translate : -r.currentTranslate, a.cssMode) return;
        if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: h
        });
        const m = h >= -t.maxTranslate() && !t.params.loop;
        let v = 0,
          g = t.slidesSizesGrid[0];
        for (let e = 0; e < l.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== l[e + t] ? (m || h >= l[e] && h < l[e + t]) && (v = e, g = l[e + t] - l[e]) : (m || h >= l[e]) && (v = e, g = l[l.length - 1] - l[l.length - 2])
        }
        let w = null,
          b = null;
        a.rewind && (t.isBeginning ? b = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
        const S = (h - l[v]) / g,
          y = v < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (f > a.longSwipesMs) {
          if (!a.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (S >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? w : v + y) : t.slideTo(v)), "prev" === t.swipeDirection && (S > 1 - a.longSwipesRatio ? t.slideTo(v + y) : null !== b && S < 0 && Math.abs(S) > a.longSwipesRatio ? t.slideTo(b) : t.slideTo(v))
        } else {
          if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== w ? w : v + y), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : v)) : i.target === t.navigation.nextEl ? t.slideTo(v + y) : t.slideTo(v)
        }
      }

      function D() {
        const e = this,
          {
            params: t,
            el: r
          } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: n,
          allowSlidePrev: i,
          snapGrid: a
        } = e, o = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const s = o && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || s ? e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
      }

      function H(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function z() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: r,
            enabled: n
          } = e;
        if (!n) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const a = e.maxTranslate() - e.minTranslate();
        i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function W(e) {
        const t = this;
        A(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function j() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const X = (e, t) => {
          const r = s(),
            {
              params: n,
              el: i,
              wrapperEl: a,
              device: o
            } = e,
            l = !!n.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          r[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), i[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), i[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), r[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("touchend", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerup", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerout", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), r[d]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (n.preventClicks || n.preventClicksPropagation) && i[d]("click", e.onClick, !0), n.cssMode && a[d]("scroll", e.onScroll), n.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", D, !0) : e[c]("observerUpdate", D, !0), i[d]("load", e.onLoad, {
            capture: !0
          })
        },
        B = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var Y = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function Z(e, t) {
        return function(r) {
          void 0 === r && (r = {});
          const n = Object.keys(r)[0],
            i = r[n];
          "object" == typeof i && null !== i ? (!0 === e[n] && (e[n] = {
            enabled: !0
          }), "navigation" === n && e[n] && e[n].enabled && !e[n].prevEl && !e[n].nextEl && (e[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && e[n] && e[n].enabled && !e[n].el && (e[n].auto = !0), n in e && "enabled" in i ? ("object" != typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
          }), f(t, r)) : f(t, r)) : f(t, r)
        }
      }
      const U = {
          eventsEmitter: P,
          update: k,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: r,
                translate: n,
                wrapperEl: i
              } = this;
              if (t.virtualTranslate) return r ? -n : n;
              if (t.cssMode) return n;
              let a = function(e, t) {
                void 0 === t && (t = "x");
                const r = d();
                let n, i, a;
                const o = function(e) {
                  const t = d();
                  let r;
                  return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
                }(e);
                return r.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new r.WebKitCSSMatrix("none" === i ? "" : i)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (i = r.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = r.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
              }(i, e);
              return a += this.cssOverflowAdjustment(), r && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
              const r = this,
                {
                  rtlTranslate: n,
                  params: i,
                  wrapperEl: a,
                  progress: o
                } = r;
              let s, l = 0,
                d = 0;
              r.isHorizontal() ? l = n ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d, i.cssMode ? a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : i.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : d -= r.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = r.maxTranslate() - r.minTranslate();
              s = 0 === c ? 0 : (e - r.minTranslate()) / c, s !== o && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, r, n, i) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === n && (n = !0);
              const a = this,
                {
                  params: o,
                  wrapperEl: s
                } = a;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              const l = a.minTranslate(),
                d = a.maxTranslate();
              let c;
              if (c = n && e > l ? l : n && e < d ? d : e, a.updateProgress(c), o.cssMode) {
                const e = a.isHorizontal();
                if (0 === t) s[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                  if (!a.support.smoothScroll) return m({
                    swiper: a,
                    targetPosition: -c,
                    side: e ? "left" : "top"
                  }), !0;
                  s.scrollTo({
                    [e ? "left" : "top"]: -c,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (a.setTransition(0), a.setTranslate(c), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(c), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, r && a.emit("transitionEnd"))
              }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const r = this;
              r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: n
                } = r;
              n.cssMode || (n.autoHeight && r.updateAutoHeight(), I({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: n
                } = r;
              r.animating = !1, n.cssMode || (r.setTransition(0), I({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: O,
          loop: R,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1
              }))
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1
              })))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                {
                  params: t
                } = e;
              e.onTouchStart = V.bind(e), e.onTouchMove = G.bind(e), e.onTouchEnd = N.bind(e), e.onDocumentTouchStart = j.bind(e), t.cssMode && (e.onScroll = z.bind(e)), e.onClick = H.bind(e), e.onLoad = W.bind(e), X(e, "on")
            },
            detachEvents: function() {
              X(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: r,
                  params: n,
                  el: i
                } = e,
                a = n.breakpoints;
              if (!a || a && 0 === Object.keys(a).length) return;
              const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!o || e.currentBreakpoint === o) return;
              const s = (o in a ? a[o] : void 0) || e.originalParams,
                l = B(e, n),
                d = B(e, s),
                c = n.enabled;
              l && !d ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && d && (i.classList.add(`${n.containerModifierClass}grid`), (s.grid.fill && "column" === s.grid.fill || !s.grid.fill && "column" === n.grid.fill) && i.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === s[t]) return;
                const r = n[t] && n[t].enabled,
                  i = s[t] && s[t].enabled;
                r && !i && e[t].disable(), !r && i && e[t].enable()
              }));
              const u = s.direction && s.direction !== n.direction,
                p = n.loop && (s.slidesPerView !== n.slidesPerView || u),
                h = n.loop;
              u && r && e.changeDirection(), f(e.params, s);
              const m = e.params.enabled,
                v = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), c && !m ? e.disable() : !c && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", s), r && (p ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !h && v ? (e.loopCreate(t), e.updateSlides()) : h && !v && e.loopDestroy()), e.emit("breakpoint", s)
            },
            getBreakpoint: function(e, t, r) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
              let n = !1;
              const i = d(),
                a = "window" === t ? i.innerHeight : r.clientHeight,
                o = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: a * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: a,
                  value: s
                } = o[e];
                "window" === t ? i.matchMedia(`(min-width: ${s}px)`).matches && (n = a) : s <= r.clientWidth && (n = a)
              }
              return n || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: r
                } = e,
                {
                  slidesOffsetBefore: n
                } = r;
              if (n) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                e.isLocked = e.size > r
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: r,
                  rtl: n,
                  el: i,
                  device: a
                } = e,
                o = function(e, t) {
                  const r = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((n => {
                      e[n] && r.push(t + n)
                    })) : "string" == typeof e && r.push(t + e)
                  })), r
                }(["initialized", r.direction, {
                  "free-mode": e.params.freeMode && r.freeMode.enabled
                }, {
                  autoheight: r.autoHeight
                }, {
                  rtl: n
                }, {
                  grid: r.grid && r.grid.rows > 1
                }, {
                  "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                }, {
                  android: a.android
                }, {
                  ios: a.ios
                }, {
                  "css-mode": r.cssMode
                }, {
                  centered: r.cssMode && r.centeredSlides
                }, {
                  "watch-progress": r.watchSlidesProgress
                }], r.containerModifierClass);
              t.push(...o), i.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: e,
                classNames: t
              } = this;
              e.classList.remove(...t), this.emitContainerClasses()
            }
          }
        },
        J = {};
      class $ {
        constructor() {
          let e, t;
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
          1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = f({}, t), e && !t.el && (t.el = e);
          const a = s();
          if (t.el && "string" == typeof t.el && a.querySelectorAll(t.el).length > 1) {
            const e = [];
            return a.querySelectorAll(t.el).forEach((r => {
              const n = f({}, t, {
                el: r
              });
              e.push(new $(n))
            })), e
          }
          const o = this;
          o.__swiper__ = !0, o.support = M(), o.device = C({
            userAgent: t.userAgent
          }), o.browser = (T || (T = function() {
            const e = d(),
              t = C();
            let r = !1;

            function n() {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (n()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, n] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                r = e < 16 || 16 === e && n < 2
              }
            }
            const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
              a = n();
            return {
              isSafari: r || a,
              needPerspectiveFix: r,
              need3dFix: a || i && t.ios,
              isWebView: i
            }
          }()), T), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
          const l = {};
          o.modules.forEach((e => {
            e({
              params: t,
              swiper: o,
              extendParams: Z(t, l),
              on: o.on.bind(o),
              once: o.once.bind(o),
              off: o.off.bind(o),
              emit: o.emit.bind(o)
            })
          }));
          const c = f({}, Y, l);
          return o.params = f({}, c, J, t), o.originalParams = f({}, o.params), o.passedParams = f({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach((e => {
            o.on(e, o.params.on[e])
          })), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === o.params.direction,
            isVertical: () => "vertical" === o.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: o.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), o.emit("_swiper"), o.params.init && o.init(), o
        }
        getDirectionLabel(e) {
          return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [e]
        }
        getSlideIndex(e) {
          const {
            slidesEl: t,
            params: r
          } = this, n = S(v(t, `.${r.slideClass}, swiper-slide`)[0]);
          return S(e) - n
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = v(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const n = r.minTranslate(),
            i = (r.maxTranslate() - n) * e + n;
          r.translateTo(i, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((r => {
            const n = e.getSlideClasses(r);
            t.push({
              slideEl: r,
              classNames: n
            }), e.emit("_slideClass", r, n)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: n,
            slidesGrid: i,
            slidesSizesGrid: a,
            size: o,
            activeIndex: s
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e, t = n[s] ? Math.ceil(n[s].swiperSlideSize) : 0;
            for (let r = s + 1; r < n.length; r += 1) n[r] && !e && (t += Math.ceil(n[r].swiperSlideSize), l += 1, t > o && (e = !0));
            for (let r = s - 1; r >= 0; r -= 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > o && (e = !0))
          } else if ("current" === e)
            for (let e = s + 1; e < n.length; e += 1)(t ? i[e] + a[e] - i[s] < o : i[e] - i[s] < o) && (l += 1);
          else
            for (let e = s - 1; e >= 0; e -= 1) i[s] - i[e] < o && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: r
          } = e;

          function n() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && A(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) n(), r.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
              const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
              i = e.slideTo(t.length - 1, 0, !1, !0)
            } else i = e.slideTo(e.activeIndex, 0, !1, !0);
            i || n()
          }
          r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            n = r.params.direction;
          return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${n}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), r.emit("changeDirection"), t && r.update()), r
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let r = e || t.params.el;
          if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
          r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(n()) : v(r, n())[0];
          return !i && t.params.createElements && (i = w("div", t.params.wrapperClass), r.append(i), v(r, `.${t.params.slideClass}`).forEach((e => {
            i.append(e)
          }))), Object.assign(t, {
            el: r,
            wrapperEl: i,
            slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : i,
            hostEl: t.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === b(r, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === b(r, "direction")),
            wrongRTL: "-webkit-box" === b(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
          const r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((e => {
            e.complete ? A(t, e) : e.addEventListener("load", (e => {
              A(t, e.target)
            }))
          })), _(t), t.initialized = !0, _(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            {
              params: n,
              el: i,
              wrapperEl: a,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), i.removeAttribute("style"), a.removeAttribute("style"), o && o.length && o.forEach((e => {
            e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
            r.off(e)
          })), !1 !== e && (r.el.swiper = null, function(e) {
            const t = e;
            Object.keys(t).forEach((e => {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            }))
          }(r)), r.destroyed = !0), null
        }
        static extendDefaults(e) {
          f(J, e)
        }
        static get extendedDefaults() {
          return J
        }
        static get defaults() {
          return Y
        }
        static installModule(e) {
          $.prototype.__modules__ || ($.prototype.__modules__ = []);
          const t = $.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => $.installModule(e))), $) : ($.installModule(e), $)
        }
      }
      Object.keys(U).forEach((e => {
        Object.keys(U[e]).forEach((t => {
          $.prototype[t] = U[e][t]
        }))
      })), $.use([function(e) {
        let {
          swiper: t,
          on: r,
          emit: n
        } = e;
        const i = d();
        let a = null,
          o = null;
        const s = () => {
            t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
          },
          l = () => {
            t && !t.destroyed && t.initialized && n("orientationchange")
          };
        r("init", (() => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
            o = i.requestAnimationFrame((() => {
              const {
                width: r,
                height: n
              } = t;
              let i = r,
                a = n;
              e.forEach((e => {
                let {
                  contentBoxSize: r,
                  contentRect: n,
                  target: o
                } = e;
                o && o !== t.el || (i = n ? n.width : (r[0] || r).inlineSize, a = n ? n.height : (r[0] || r).blockSize)
              })), i === r && a === n || s()
            }))
          })), a.observe(t.el)) : (i.addEventListener("resize", s), i.addEventListener("orientationchange", l))
        })), r("destroy", (() => {
          o && i.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), i.removeEventListener("resize", s), i.removeEventListener("orientationchange", l)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: r,
          on: n,
          emit: i
        } = e;
        const a = [],
          o = d(),
          s = function(e, r) {
            void 0 === r && (r = {});
            const n = new(o.MutationObserver || o.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void i("observerUpdate", e[0]);
              const r = function() {
                i("observerUpdate", e[0])
              };
              o.requestAnimationFrame ? o.requestAnimationFrame(r) : o.setTimeout(r, 0)
            }));
            n.observe(e, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: void 0 === r.childList || r.childList,
              characterData: void 0 === r.characterData || r.characterData
            }), a.push(n)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), n("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = function(e, t) {
                const r = [];
                let n = e.parentElement;
                for (; n;) r.push(n), n = n.parentElement;
                return r
              }(t.hostEl);
              for (let t = 0; t < e.length; t += 1) s(e[t])
            }
            s(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), s(t.wrapperEl, {
              attributes: !1
            })
          }
        })), n("destroy", (() => {
          a.forEach((e => {
            e.disconnect()
          })), a.splice(0, a.length)
        }))
      }]);
      const q = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function Q(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function K(e, t) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : Q(t[r]) && Q(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : K(e[r], t[r]) : e[r] = t[r]
        }))
      }

      function ee(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function te(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function re(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function ne(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          r = [];
        return t.forEach((e => {
          r.indexOf(e) < 0 && r.push(e)
        })), r.join(" ")
      }

      function ie(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function ae() {
        return ae = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, ae.apply(this, arguments)
      }

      function oe(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function se(e) {
        const t = [];
        return n.Children.toArray(e).forEach((e => {
          oe(e) ? t.push(e) : e.props && e.props.children && se(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function le(e) {
        const t = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return n.Children.toArray(e).forEach((e => {
          if (oe(e)) t.push(e);
          else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const n = se(e.props.children);
            n.length > 0 ? n.forEach((e => t.push(e))) : r["container-end"].push(e)
          } else r["container-end"].push(e)
        })), {
          slides: t,
          slots: r
        }
      }

      function de(e, t) {
        return "undefined" == typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
      }
      const ce = (0, n.createContext)(null),
        ue = (0, n.createContext)(null),
        pe = (0, n.forwardRef)((function(e, t) {
          let {
            className: r,
            tag: i = "div",
            wrapperTag: a = "div",
            children: o,
            onSwiper: s,
            ...l
          } = void 0 === e ? {} : e, d = !1;
          const [c, u] = (0, n.useState)("swiper"), [p, f] = (0, n.useState)(null), [h, m] = (0, n.useState)(!1), v = (0, n.useRef)(!1), g = (0, n.useRef)(null), w = (0, n.useRef)(null), b = (0, n.useRef)(null), S = (0, n.useRef)(null), y = (0, n.useRef)(null), x = (0, n.useRef)(null), E = (0, n.useRef)(null), T = (0, n.useRef)(null), {
            params: M,
            passedParams: C,
            rest: P,
            events: A
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const r = {
                on: {}
              },
              n = {},
              i = {};
            K(r, Y), r._emitClasses = !0, r.init = !1;
            const a = {},
              o = q.map((e => e.replace(/_/, ""))),
              s = Object.assign({}, e);
            return Object.keys(s).forEach((s => {
              void 0 !== e[s] && (o.indexOf(s) >= 0 ? Q(e[s]) ? (r[s] = {}, i[s] = {}, K(r[s], e[s]), K(i[s], e[s])) : (r[s] = e[s], i[s] = e[s]) : 0 === s.search(/on[A-Z]/) && "function" == typeof e[s] ? t ? n[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : r.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : a[s] = e[s])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
            })), {
              params: r,
              passedParams: i,
              rest: a,
              events: n
            }
          }(l), {
            slides: L,
            slots: _
          } = le(o), k = () => {
            m(!h)
          };
          Object.assign(M.on, {
            _containerClasses(e, t) {
              u(t)
            }
          });
          const I = () => {
            Object.assign(M.on, A), d = !0;
            const e = {
              ...M
            };
            if (delete e.wrapperClass, w.current = new $(e), w.current.virtual && w.current.params.virtual.enabled) {
              w.current.virtual.slides = L;
              const e = {
                cache: !1,
                slides: L,
                renderExternal: f,
                renderExternalUpdate: !1
              };
              K(w.current.params.virtual, e), K(w.current.originalParams.virtual, e)
            }
          };
          return g.current || I(), w.current && w.current.on("_beforeBreakpoint", k), (0, n.useEffect)((() => () => {
            w.current && w.current.off("_beforeBreakpoint", k)
          })), (0, n.useEffect)((() => {
            !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0)
          })), de((() => {
            if (t && (t.current = g.current), g.current) return w.current.destroyed && I(),
              function(e, t) {
                let {
                  el: r,
                  nextEl: n,
                  prevEl: i,
                  paginationEl: a,
                  scrollbarEl: o,
                  swiper: s
                } = e;
                ee(t) && n && i && (s.params.navigation.nextEl = n, s.originalParams.navigation.nextEl = n, s.params.navigation.prevEl = i, s.originalParams.navigation.prevEl = i), te(t) && a && (s.params.pagination.el = a, s.originalParams.pagination.el = a), re(t) && o && (s.params.scrollbar.el = o, s.originalParams.scrollbar.el = o), s.init(r)
              }({
                el: g.current,
                nextEl: y.current,
                prevEl: x.current,
                paginationEl: E.current,
                scrollbarEl: T.current,
                swiper: w.current
              }, M), s && !w.current.destroyed && s(w.current), () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
              }
          }), []), de((() => {
            !d && A && w.current && Object.keys(A).forEach((e => {
              w.current.on(e, A[e])
            }));
            const e = function(e, t, r, n, i) {
              const a = [];
              if (!t) return a;
              const o = e => {
                a.indexOf(e) < 0 && a.push(e)
              };
              if (r && n) {
                const e = n.map(i),
                  t = r.map(i);
                e.join("") !== t.join("") && o("children"), n.length !== r.length && o("children")
              }
              return q.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((r => {
                if (r in e && r in t)
                  if (Q(e[r]) && Q(t[r])) {
                    const n = Object.keys(e[r]),
                      i = Object.keys(t[r]);
                    n.length !== i.length ? o(r) : (n.forEach((n => {
                      e[r][n] !== t[r][n] && o(r)
                    })), i.forEach((n => {
                      e[r][n] !== t[r][n] && o(r)
                    })))
                  } else e[r] !== t[r] && o(r)
              })), a
            }(C, b.current, L, S.current, (e => e.key));
            return b.current = C, S.current = L, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: r,
                passedParams: n,
                changedParams: i,
                nextEl: a,
                prevEl: o,
                scrollbarEl: s,
                paginationEl: l
              } = e;
              const d = i.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: u,
                  navigation: p,
                  scrollbar: f,
                  virtual: h,
                  thumbs: m
                } = t;
              let v, g, w, b, S, y, x, E;
              i.includes("thumbs") && n.thumbs && n.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (v = !0), i.includes("controller") && n.controller && n.controller.control && c.controller && !c.controller.control && (g = !0), i.includes("pagination") && n.pagination && (n.pagination.el || l) && (c.pagination || !1 === c.pagination) && u && !u.el && (w = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || s) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (b = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || o) && (n.navigation.nextEl || a) && (c.navigation || !1 === c.navigation) && p && !p.prevEl && !p.nextEl && (S = !0);
              const T = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (c.loop && !n.loop ? y = !0 : !c.loop && n.loop ? x = !0 : E = !0), d.forEach((e => {
                if (Q(c[e]) && Q(n[e])) Object.assign(c[e], n[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in n[e]) || n[e].enabled || T(e);
                else {
                  const t = n[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = n[e] : !1 === t && T(e)
                }
              })), d.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), i.includes("children") && r && h && c.virtual.enabled ? (h.slides = r, h.update(!0)) : i.includes("virtual") && h && c.virtual.enabled && (r && (h.slides = r), h.update(!0)), i.includes("children") && r && c.loop && (E = !0), v && m.init() && m.update(!0), g && (t.controller.control = c.controller.control), w && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (c.pagination.el = l), u.init(), u.render(), u.update()), b && (!t.isElement || s && "string" != typeof s || (s = document.createElement("div"), s.classList.add("swiper-scrollbar"), s.part.add("scrollbar"), t.el.appendChild(s)), s && (c.scrollbar.el = s), f.init(), f.updateSize(), f.setTranslate()), S && (t.isElement && (a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-next"), a.innerHTML = t.hostEl.constructor.nextButtonSvg, a.part.add("button-next"), t.el.appendChild(a)), o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-button-prev"), o.innerHTML = t.hostEl.constructor.prevButtonSvg, o.part.add("button-prev"), t.el.appendChild(o))), a && (c.navigation.nextEl = a), o && (c.navigation.prevEl = o), p.init(), p.update()), i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && t.changeDirection(n.direction, !1), (y || E) && t.loopDestroy(), (x || E) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: L,
              passedParams: C,
              changedParams: e,
              nextEl: y.current,
              prevEl: x.current,
              scrollbarEl: T.current,
              paginationEl: E.current
            }), () => {
              A && w.current && Object.keys(A).forEach((e => {
                w.current.off(e, A[e])
              }))
            }
          })), de((() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [p]), n.createElement(i, ae({
            ref: g,
            className: ne(`${c}${r?` ${r}`:""}`)
          }, P), n.createElement(ue.Provider, {
            value: w.current
          }, _["container-start"], n.createElement(a, {
            className: ie(M.wrapperClass)
          }, _["wrapper-start"], M.virtual ? function(e, t, r) {
            if (!r) return null;
            const i = e => {
                let r = e;
                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
              },
              a = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: o,
                to: s
              } = r,
              l = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < d; e += 1) e >= o && e <= s && c.push(t[i(e)]);
            return c.map(((t, r) => n.cloneElement(t, {
              swiper: e,
              style: a,
              key: `slide-${r}`
            })))
          }(w.current, L, p) : L.map(((e, t) => n.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          }))), _["wrapper-end"]), ee(M) && n.createElement(n.Fragment, null, n.createElement("div", {
            ref: x,
            className: "swiper-button-prev"
          }), n.createElement("div", {
            ref: y,
            className: "swiper-button-next"
          })), re(M) && n.createElement("div", {
            ref: T,
            className: "swiper-scrollbar"
          }), te(M) && n.createElement("div", {
            ref: E,
            className: "swiper-pagination"
          }), _["container-end"]))
        }));
      pe.displayName = "Swiper";
      const fe = (0, n.forwardRef)((function(e, t) {
        let {
          tag: r = "div",
          children: i,
          className: a = "",
          swiper: o,
          zoom: s,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...u
        } = void 0 === e ? {} : e;
        const p = (0, n.useRef)(null),
          [f, h] = (0, n.useState)("swiper-slide"),
          [m, v] = (0, n.useState)(!1);

        function g(e, t, r) {
          t === p.current && h(r)
        }
        de((() => {
          if (void 0 !== c && (p.current.swiperSlideIndex = c), t && (t.current = p.current), p.current && o) {
            if (!o.destroyed) return o.on("_slideClass", g), () => {
              o && o.off("_slideClass", g)
            };
            "swiper-slide" !== f && h("swiper-slide")
          }
        })), de((() => {
          o && p.current && !o.destroyed && h(o.getSlideClasses(p.current))
        }), [o]);
        const w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof i ? i(w) : i;
        return n.createElement(r, ae({
          ref: p,
          className: ne(`${f}${a?` ${a}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            v(!0)
          }
        }, u), s && n.createElement(ce.Provider, {
          value: w
        }, n.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof s ? s : void 0
        }, b(), l && !m && n.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !s && n.createElement(ce.Provider, {
          value: w
        }, b(), l && !m && n.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      fe.displayName = "SwiperSlide"
    }
  }
]);