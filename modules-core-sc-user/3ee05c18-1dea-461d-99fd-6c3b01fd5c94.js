! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3ee05c18-1dea-461d-99fd-6c3b01fd5c94", e._sentryDebugIdIdentifier = "sentry-dbid-3ee05c18-1dea-461d-99fd-6c3b01fd5c94")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-sc-user",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [377], {
    133: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        componentsToDebugString: () => le,
        default: () => he,
        getFullscreenElement: () => V,
        getScreenFrame: () => U,
        hashComponents: () => ue,
        isAndroid: () => O,
        isChromium: () => F,
        isDesktopSafari: () => I,
        isEdgeHTML: () => C,
        isGecko: () => P,
        isTrident: () => T,
        isWebKit: () => k,
        load: () => fe,
        loadSources: () => L,
        murmurX64Hash128: () => ge,
        prepareForSources: () => de,
        sources: () => ie,
        transformSource: () => R,
        withIframe: () => H
      });
      var r = function() {
        return r = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e
        }, r.apply(this, arguments)
      };

      function a(e, t, n, r) {
        return new(n || (n = Promise))((function(a, o) {
          function i(e) {
            try {
              s(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            try {
              s(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            var t;
            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(i, c)
          }
          s((r = r.apply(e, t || [])).next())
        }))
      }

      function o(e, t) {
        var n, r, a, o, i = {
          label: 0,
          sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
          },
          trys: [],
          ops: []
        };
        return o = {
          next: c(0),
          throw: c(1),
          return: c(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function c(c) {
          return function(s) {
            return function(c) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, c[0] && (i = 0)), i;) try {
                if (n = 1, r && (a = 2 & c[0] ? r.return : c[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, c[1])).done) return a;
                switch (r = 0, a && (c = [2 & c[0], a.value]), c[0]) {
                  case 0:
                  case 1:
                    a = c;
                    break;
                  case 4:
                    return i.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    i.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === c[0] && (!a || c[1] > a[0] && c[1] < a[3])) {
                      i.label = c[1];
                      break
                    }
                    if (6 === c[0] && i.label < a[1]) {
                      i.label = a[1], a = c;
                      break
                    }
                    if (a && i.label < a[2]) {
                      i.label = a[2], i.ops.push(c);
                      break
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                c = t.call(e, i)
              } catch (e) {
                c = [6, e], r = 0
              } finally {
                n = a = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, s])
          }
        }
      }

      function i(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
      var c = "3.4.2";

      function s(e, t) {
        return new Promise((function(n) {
          return setTimeout(n, e, t)
        }))
      }

      function l(e) {
        return !!e && "function" == typeof e.then
      }

      function u(e, t) {
        try {
          var n = e();
          l(n) ? n.then((function(e) {
            return t(!0, e)
          }), (function(e) {
            return t(!1, e)
          })) : t(!0, n)
        } catch (e) {
          t(!1, e)
        }
      }

      function d(e, t, n) {
        return void 0 === n && (n = 16), a(this, void 0, void 0, (function() {
          var r, a, i, c;
          return o(this, (function(o) {
            switch (o.label) {
              case 0:
                r = Array(e.length), a = Date.now(), i = 0, o.label = 1;
              case 1:
                return i < e.length ? (r[i] = t(e[i], i), (c = Date.now()) >= a + n ? (a = c, [4, s(0)]) : [3, 3]) : [3, 4];
              case 2:
                o.sent(), o.label = 3;
              case 3:
                return ++i, [3, 1];
              case 4:
                return [2, r]
            }
          }))
        }))
      }

      function m(e) {
        e.then(void 0, (function() {}))
      }

      function f(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }

      function h(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }

      function g(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }

      function p(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }

      function v(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }

      function b(e) {
        return e = v(e, [0, e[0] >>> 1]), e = v(e = h(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), v(e = h(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }

      function y(e, t) {
        t = t || 0;
        var n, r = (e = e || "").length % 16,
          a = e.length - r,
          o = [0, t],
          i = [0, t],
          c = [0, 0],
          s = [0, 0],
          l = [2277735313, 289559509],
          u = [1291169091, 658871167];
        for (n = 0; n < a; n += 16) c = [255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24, 255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24], s = [255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24, 255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24], c = g(c = h(c, l), 31), o = f(o = g(o = v(o, c = h(c, u)), 27), i), o = f(h(o, [0, 5]), [0, 1390208809]), s = g(s = h(s, u), 33), i = f(i = g(i = v(i, s = h(s, l)), 31), o), i = f(h(i, [0, 5]), [0, 944331445]);
        switch (c = [0, 0], s = [0, 0], r) {
          case 15:
            s = v(s, p([0, e.charCodeAt(n + 14)], 48));
          case 14:
            s = v(s, p([0, e.charCodeAt(n + 13)], 40));
          case 13:
            s = v(s, p([0, e.charCodeAt(n + 12)], 32));
          case 12:
            s = v(s, p([0, e.charCodeAt(n + 11)], 24));
          case 11:
            s = v(s, p([0, e.charCodeAt(n + 10)], 16));
          case 10:
            s = v(s, p([0, e.charCodeAt(n + 9)], 8));
          case 9:
            s = h(s = v(s, [0, e.charCodeAt(n + 8)]), u), i = v(i, s = h(s = g(s, 33), l));
          case 8:
            c = v(c, p([0, e.charCodeAt(n + 7)], 56));
          case 7:
            c = v(c, p([0, e.charCodeAt(n + 6)], 48));
          case 6:
            c = v(c, p([0, e.charCodeAt(n + 5)], 40));
          case 5:
            c = v(c, p([0, e.charCodeAt(n + 4)], 32));
          case 4:
            c = v(c, p([0, e.charCodeAt(n + 3)], 24));
          case 3:
            c = v(c, p([0, e.charCodeAt(n + 2)], 16));
          case 2:
            c = v(c, p([0, e.charCodeAt(n + 1)], 8));
          case 1:
            c = h(c = v(c, [0, e.charCodeAt(n)]), l), o = v(o, c = h(c = g(c, 31), u))
        }
        return o = f(o = v(o, [0, e.length]), i = v(i, [0, e.length])), i = f(i, o), o = f(o = b(o), i = b(i)), i = f(i, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
      }

      function w(e) {
        return parseInt(e)
      }

      function S(e) {
        return parseFloat(e)
      }

      function x(e, t) {
        return "number" == typeof e && isNaN(e) ? t : e
      }

      function A(e) {
        return e.reduce((function(e, t) {
          return e + (t ? 1 : 0)
        }), 0)
      }

      function E(e, t) {
        if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
        var n = 1 / t;
        return Math.round(e * n) / n
      }

      function M(e) {
        return e && "object" == typeof e && "message" in e ? e : {
          message: e
        }
      }

      function _(e) {
        return "function" != typeof e
      }

      function L(e, t, n) {
        var r = Object.keys(e).filter((function(e) {
            return ! function(e, t) {
              for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return !0;
              return !1
            }(n, e)
          })),
          i = d(r, (function(n) {
            return function(e, t) {
              var n = new Promise((function(n) {
                var r = Date.now();
                u(e.bind(null, t), (function() {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  var a = Date.now() - r;
                  if (!e[0]) return n((function() {
                    return {
                      error: M(e[1]),
                      duration: a
                    }
                  }));
                  var o = e[1];
                  if (_(o)) return n((function() {
                    return {
                      value: o,
                      duration: a
                    }
                  }));
                  n((function() {
                    return new Promise((function(e) {
                      var t = Date.now();
                      u(o, (function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var o = a + Date.now() - t;
                        if (!n[0]) return e({
                          error: M(n[1]),
                          duration: o
                        });
                        e({
                          value: n[1],
                          duration: o
                        })
                      }))
                    }))
                  }))
                }))
              }));
              return m(n),
                function() {
                  return n.then((function(e) {
                    return e()
                  }))
                }
            }(e[n], t)
          }));
        return m(i),
          function() {
            return a(this, void 0, void 0, (function() {
              var e, t, n, a;
              return o(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return [4, i];
                  case 1:
                    return [4, d(o.sent(), (function(e) {
                      var t = e();
                      return m(t), t
                    }))];
                  case 2:
                    return e = o.sent(), [4, Promise.all(e)];
                  case 3:
                    for (t = o.sent(), n = {}, a = 0; a < r.length; ++a) n[r[a]] = t[a];
                    return [2, n]
                }
              }))
            }))
          }
      }

      function R(e, t) {
        var n = function(e) {
          return _(e) ? t(e) : function() {
            var n = e();
            return l(n) ? n.then(t) : t(n)
          }
        };
        return function(t) {
          var r = e(t);
          return l(r) ? r.then(n) : n(r)
        }
      }

      function T() {
        var e = window,
          t = navigator;
        return A(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
      }

      function C() {
        var e = window,
          t = navigator;
        return A(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !T()
      }

      function F() {
        var e = window,
          t = navigator;
        return A(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
      }

      function k() {
        var e = window,
          t = navigator;
        return A(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4
      }

      function I() {
        var e = window;
        return A(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator)]) >= 3
      }

      function P() {
        var e, t, n = window;
        return A(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
      }

      function V() {
        var e = document;
        return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
      }

      function O() {
        var e = F(),
          t = P();
        if (!e && !t) return !1;
        var n = window;
        return A(["onorientationchange" in n, "orientation" in n, e && !("SharedWorker" in n), t && /android/i.test(navigator.appVersion)]) >= 2
      }

      function W(e) {
        var t = new Error(e);
        return t.name = e, t
      }

      function H(e, t, n) {
        var r, i, c;
        return void 0 === n && (n = 50), a(this, void 0, void 0, (function() {
          var a, l;
          return o(this, (function(o) {
            switch (o.label) {
              case 0:
                a = document, o.label = 1;
              case 1:
                return a.body ? [3, 3] : [4, s(n)];
              case 2:
                return o.sent(), [3, 1];
              case 3:
                l = a.createElement("iframe"), o.label = 4;
              case 4:
                return o.trys.push([4, , 10, 11]), [4, new Promise((function(e, n) {
                  var r = !1,
                    o = function() {
                      r = !0, e()
                    };
                  l.onload = o, l.onerror = function(e) {
                    r = !0, n(e)
                  };
                  var i = l.style;
                  i.setProperty("display", "block", "important"), i.position = "absolute", i.top = "0", i.left = "0", i.visibility = "hidden", t && "srcdoc" in l ? l.srcdoc = t : l.src = "about:blank", a.body.appendChild(l);
                  var c = function() {
                    var e, t;
                    r || ("complete" === (null === (t = null === (e = l.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? o() : setTimeout(c, 10))
                  };
                  c()
                }))];
              case 5:
                o.sent(), o.label = 6;
              case 6:
                return (null === (i = null === (r = l.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === i ? void 0 : i.body) ? [3, 8] : [4, s(n)];
              case 7:
                return o.sent(), [3, 6];
              case 8:
                return [4, e(l, l.contentWindow)];
              case 9:
                return [2, o.sent()];
              case 10:
                return null === (c = l.parentNode) || void 0 === c || c.removeChild(l), [7];
              case 11:
                return [2]
            }
          }))
        }))
      }

      function G(e) {
        for (var t = function(e) {
            for (var t, n, r = "Unexpected syntax '".concat(e, "'"), a = /^\s*([a-z-]*)(.*)$/i.exec(e), o = a[1] || void 0, i = {}, c = /([.:#][\w-]+|\[.+?\])/gi, s = function(e, t) {
                i[e] = i[e] || [], i[e].push(t)
              };;) {
              var l = c.exec(a[2]);
              if (!l) break;
              var u = l[0];
              switch (u[0]) {
                case ".":
                  s("class", u.slice(1));
                  break;
                case "#":
                  s("id", u.slice(1));
                  break;
                case "[":
                  var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u);
                  if (!d) throw new Error(r);
                  s(d[1], null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== n ? n : "");
                  break;
                default:
                  throw new Error(r)
              }
            }
            return [o, i]
          }(e), n = t[0], r = t[1], a = document.createElement(null != n ? n : "div"), o = 0, i = Object.keys(r); o < i.length; o++) {
          var c = i[o],
            s = r[c].join(" ");
          "style" === c ? D(a.style, s) : a.setAttribute(c, s)
        }
        return a
      }

      function D(e, t) {
        for (var n = 0, r = t.split(";"); n < r.length; n++) {
          var a = r[n],
            o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);
          if (o) {
            var i = o[1],
              c = o[2],
              s = o[4];
            e.setProperty(i, c, s || "")
          }
        }
      }
      var N = ["monospace", "sans-serif", "serif"],
        X = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

      function Z(e) {
        return e.toDataURL()
      }
      var j, Y, B = 2500;

      function U() {
        var e = this;
        return function() {
            if (void 0 === Y) {
              var e = function() {
                var t = J();
                z(t) ? Y = setTimeout(e, B) : (j = t, Y = void 0)
              };
              e()
            }
          }(),
          function() {
            return a(e, void 0, void 0, (function() {
              var e;
              return o(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return z(e = J()) ? j ? [2, i([], j, !0)] : V() ? [4, (n = document, (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n))] : [3, 2] : [3, 2];
                  case 1:
                    t.sent(), e = J(), t.label = 2;
                  case 2:
                    return z(e) || (j = e), [2, e]
                }
                var n
              }))
            }))
          }
      }

      function J() {
        var e = screen;
        return [x(S(e.availTop), null), x(S(e.width) - S(e.availWidth) - x(S(e.availLeft), 0), null), x(S(e.height) - S(e.availHeight) - x(S(e.availTop), 0), null), x(S(e.availLeft), null)]
      }

      function z(e) {
        for (var t = 0; t < 4; ++t)
          if (e[t]) return !1;
        return !0
      }

      function Q(e) {
        var t;
        return a(this, void 0, void 0, (function() {
          var n, r, a, i, c, l, u;
          return o(this, (function(o) {
            switch (o.label) {
              case 0:
                for (n = document, r = n.createElement("div"), a = new Array(e.length), i = {}, K(r), u = 0; u < e.length; ++u) "DIALOG" === (c = G(e[u])).tagName && c.show(), K(l = n.createElement("div")), l.appendChild(c), r.appendChild(l), a[u] = c;
                o.label = 1;
              case 1:
                return n.body ? [3, 3] : [4, s(50)];
              case 2:
                return o.sent(), [3, 1];
              case 3:
                n.body.appendChild(r);
                try {
                  for (u = 0; u < e.length; ++u) a[u].offsetParent || (i[e[u]] = !0)
                } finally {
                  null === (t = r.parentNode) || void 0 === t || t.removeChild(r)
                }
                return [2, i]
            }
          }))
        }))
      }

      function K(e) {
        e.style.setProperty("display", "block", "important")
      }

      function q(e) {
        return matchMedia("(inverted-colors: ".concat(e, ")")).matches
      }

      function $(e) {
        return matchMedia("(forced-colors: ".concat(e, ")")).matches
      }

      function ee(e) {
        return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
      }

      function te(e) {
        return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
      }

      function ne(e) {
        return matchMedia("(dynamic-range: ".concat(e, ")")).matches
      }
      var re = Math,
        ae = function() {
          return 0
        },
        oe = {
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
        ie = {
          fonts: function() {
            return H((function(e, t) {
              var n = t.document,
                r = n.body;
              r.style.fontSize = "48px";
              var a = n.createElement("div"),
                o = {},
                i = {},
                c = function(e) {
                  var t = n.createElement("span"),
                    r = t.style;
                  return r.position = "absolute", r.top = "0", r.left = "0", r.fontFamily = e, t.textContent = "mmMwWLliI0O&1", a.appendChild(t), t
                },
                s = N.map(c),
                l = function() {
                  for (var e = {}, t = function(t) {
                      e[t] = N.map((function(e) {
                        return function(e, t) {
                          return c("'".concat(e, "',").concat(t))
                        }(t, e)
                      }))
                    }, n = 0, r = X; n < r.length; n++) t(r[n]);
                  return e
                }();
              r.appendChild(a);
              for (var u = 0; u < N.length; u++) o[N[u]] = s[u].offsetWidth, i[N[u]] = s[u].offsetHeight;
              return X.filter((function(e) {
                return t = l[e], N.some((function(e, n) {
                  return t[n].offsetWidth !== o[e] || t[n].offsetHeight !== i[e]
                }));
                var t
              }))
            }))
          },
          domBlockers: function(e) {
            var t = (void 0 === e ? {} : e).debug;
            return a(this, void 0, void 0, (function() {
              var e, n, r, a, i;
              return o(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return k() || O() ? (c = atob, e = {
                      abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', c("I0JveC1CYW5uZXItYWRz")],
                      abpvn: [".quangcao", "#mobileCatfish", c("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                      adBlockFinland: [".mainostila", c("LnNwb25zb3JpdA=="), ".ylamainos", c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                      adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                      adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", c("LmhlYWRlci1ibG9ja2VkLWFk"), c("I2FkX2Jsb2NrZXI=")],
                      adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                      adGuardBase: [".BetterJsPopOverlay", c("I2FkXzMwMFgyNTA="), c("I2Jhbm5lcmZsb2F0MjI="), c("I2NhbXBhaWduLWJhbm5lcg=="), c("I0FkLUNvbnRlbnQ=")],
                      adGuardChinese: [c("LlppX2FkX2FfSA=="), c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                      adGuardFrench: ["#pavePub", c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", c("LmFkc19iYW4=")],
                      adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                      adGuardJapanese: ["#kauli_yad_1", c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), c("LmFkZ29vZ2xl"), c("Ll9faXNib29zdFJldHVybkFk")],
                      adGuardMobile: [c("YW1wLWF1dG8tYWRz"), c("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", c("I2FkX2ludmlld19hcmVh")],
                      adGuardRussian: [c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), c("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                      adGuardSocial: [c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                      adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                      adGuardTrackingProtection: ["#qoo-counter", c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                      adGuardTurkish: ["#backkapat", c("I3Jla2xhbWk="), c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                      bulgarian: [c("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                      easyList: [".yb-floorad", c("LndpZGdldF9wb19hZHNfd2lkZ2V0"), c("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                      easyListChina: [c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), c("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                      easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", c("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                      easyListCzechSlovak: ["#onlajny-stickers", c("I3Jla2xhbW5pLWJveA=="), c("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                      easyListDutch: [c("I2FkdmVydGVudGll"), c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                      easyListGermany: ["#SSpotIMPopSlider", c("LnNwb25zb3JsaW5rZ3J1ZW4="), c("I3dlcmJ1bmdza3k="), c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                      easyListItaly: [c("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                      easyListLithuania: [c("LnJla2xhbW9zX3RhcnBhcw=="), c("LnJla2xhbW9zX251b3JvZG9z"), c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                      estonian: [c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                      fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                      fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                      fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                      fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                      frellwitSwedish: [c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", c("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                      greekAdBlock: [c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                      hungarian: ["#cemp_doboz", ".optimonk-iframe-container", c("LmFkX19tYWlu"), c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                      iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                      icelandicAbp: [c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                      latvian: [c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                      listKr: [c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), c("I2xpdmVyZUFkV3JhcHBlcg=="), c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), c("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                      listeAr: [c("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                      listeFr: [c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                      officialPolish: ["#ceneo-placeholder-ceneo-12", c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), c("ZGl2I3NrYXBpZWNfYWQ=")],
                      ro: [c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                      ruAd: [c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                      thaiAds: ["a[href*=macau-uta-popup]", c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), c("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                      webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", c("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                    }, n = Object.keys(e), [4, Q((i = []).concat.apply(i, n.map((function(t) {
                      return e[t]
                    }))))]) : [2, void 0];
                  case 1:
                    return r = o.sent(), t && function(e, t) {
                      for (var n = "DOM blockers debug:\n```", r = 0, a = Object.keys(e); r < a.length; r++) {
                        var o = a[r];
                        n += "\n".concat(o, ":");
                        for (var i = 0, c = e[o]; i < c.length; i++) {
                          var s = c[i];
                          n += "\n  ".concat(t[s] ? "🚫" : "➡️", " ").concat(s)
                        }
                      }
                      console.log("".concat(n, "\n```"))
                    }(e, r), (a = n.filter((function(t) {
                      var n = e[t];
                      return A(n.map((function(e) {
                        return r[e]
                      }))) > .6 * n.length
                    }))).sort(), [2, a]
                }
                var c
              }))
            }))
          },
          fontPreferences: function() {
            return void 0 === e && (e = 4e3), H((function(t, n) {
              var r = n.document,
                a = r.body,
                o = a.style;
              o.width = "".concat(e, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", F() ? a.style.zoom = "".concat(1 / n.devicePixelRatio) : k() && (a.style.zoom = "reset");
              var c = r.createElement("div");
              return c.textContent = i([], Array(e / 20 << 0), !0).map((function() {
                  return "word"
                })).join(" "), a.appendChild(c),
                function(e, t) {
                  for (var n = {}, r = {}, a = 0, o = Object.keys(oe); a < o.length; a++) {
                    var i = o[a],
                      c = oe[i],
                      s = c[0],
                      l = void 0 === s ? {} : s,
                      u = c[1],
                      d = void 0 === u ? "mmMwWLliI0fiflO&1" : u,
                      m = e.createElement("span");
                    m.textContent = d, m.style.whiteSpace = "nowrap";
                    for (var f = 0, h = Object.keys(l); f < h.length; f++) {
                      var g = h[f],
                        p = l[g];
                      void 0 !== p && (m.style[g] = p)
                    }
                    n[i] = m, t.appendChild(e.createElement("br")), t.appendChild(m)
                  }
                  for (var v = 0, b = Object.keys(oe); v < b.length; v++) r[i = b[v]] = n[i].getBoundingClientRect().width;
                  return r
                }(r, a)
            }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
            var e
          },
          audio: function() {
            var e = window,
              t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
            if (!t) return -2;
            if (k() && !I() && ! function() {
                var e = window;
                return A(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
              }()) return -1;
            var n = new t(1, 5e3, 44100),
              r = n.createOscillator();
            r.type = "triangle", r.frequency.value = 1e4;
            var a = n.createDynamicsCompressor();
            a.threshold.value = -50, a.knee.value = 40, a.ratio.value = 12, a.attack.value = 0, a.release.value = .25, r.connect(a), a.connect(n.destination), r.start(0);
            var o = function(e) {
                var t = function() {};
                return [new Promise((function(n, r) {
                  var a = !1,
                    o = 0,
                    i = 0;
                  e.oncomplete = function(e) {
                    return n(e.renderedBuffer)
                  };
                  var c = function() {
                      setTimeout((function() {
                        return r(W("timeout"))
                      }), Math.min(500, i + 5e3 - Date.now()))
                    },
                    s = function() {
                      try {
                        var t = e.startRendering();
                        switch (l(t) && m(t), e.state) {
                          case "running":
                            i = Date.now(), a && c();
                            break;
                          case "suspended":
                            document.hidden || o++, a && o >= 3 ? r(W("suspended")) : setTimeout(s, 500)
                        }
                      } catch (e) {
                        r(e)
                      }
                    };
                  s(), t = function() {
                    a || (a = !0, i > 0 && c())
                  }
                })), t]
              }(n),
              i = o[0],
              c = o[1],
              s = i.then((function(e) {
                return function(e) {
                  for (var t = 0, n = 0; n < e.length; ++n) t += Math.abs(e[n]);
                  return t
                }(e.getChannelData(0).subarray(4500))
              }), (function(e) {
                if ("timeout" === e.name || "suspended" === e.name) return -3;
                throw e
              }));
            return m(s),
              function() {
                return c(), s
              }
          },
          screenFrame: function() {
            var e = this,
              t = U();
            return function() {
              return a(e, void 0, void 0, (function() {
                var e, n;
                return o(this, (function(r) {
                  switch (r.label) {
                    case 0:
                      return [4, t()];
                    case 1:
                      return e = r.sent(), [2, [(n = function(e) {
                        return null === e ? null : E(e, 10)
                      })(e[0]), n(e[1]), n(e[2]), n(e[3])]]
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
              n = [],
              r = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
            if (void 0 !== r && n.push([r]), Array.isArray(t.languages)) F() && A([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || n.push(t.languages);
            else if ("string" == typeof t.languages) {
              var a = t.languages;
              a && n.push(a.split(","))
            }
            return n
          },
          colorDepth: function() {
            return window.screen.colorDepth
          },
          deviceMemory: function() {
            return x(S(navigator.deviceMemory), void 0)
          },
          screenResolution: function() {
            var e = screen,
              t = function(e) {
                return x(w(e), null)
              },
              n = [t(e.width), t(e.height)];
            return n.sort().reverse(), n
          },
          hardwareConcurrency: function() {
            return x(w(navigator.hardwareConcurrency), void 0)
          },
          timezone: function() {
            var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
            if (t) {
              var n = (new t).resolvedOptions().timeZone;
              if (n) return n
            }
            var r, a = (r = (new Date).getFullYear(), -Math.max(S(new Date(r, 0, 1).getTimezoneOffset()), S(new Date(r, 6, 1).getTimezoneOffset())));
            return "UTC".concat(a >= 0 ? "+" : "").concat(Math.abs(a))
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
            if (!T() && !C()) try {
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
            return "MacIntel" === e && k() && !I() ? function() {
              if ("iPad" === navigator.platform) return !0;
              var e = screen,
                t = e.width / e.height;
              return A(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
            }() ? "iPad" : "iPhone" : e
          },
          plugins: function() {
            var e = navigator.plugins;
            if (e) {
              for (var t = [], n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r) {
                  for (var a = [], o = 0; o < r.length; ++o) {
                    var i = r[o];
                    a.push({
                      type: i.type,
                      suffixes: i.suffixes
                    })
                  }
                  t.push({
                    name: r.name,
                    description: r.description,
                    mimeTypes: a
                  })
                }
              }
              return t
            }
          },
          canvas: function() {
            var e, t, n = !1,
              r = function() {
                var e = document.createElement("canvas");
                return e.width = 1, e.height = 1, [e, e.getContext("2d")]
              }(),
              a = r[0],
              o = r[1];
            if (function(e, t) {
                return !(!t || !e.toDataURL)
              }(a, o)) {
              n = function(e) {
                  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
                }(o),
                function(e, t) {
                  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
                  var n = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                  t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45)
                }(a, o);
              var i = Z(a);
              i !== Z(a) ? e = t = "unstable" : (t = i, function(e, t) {
                e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
                for (var n = 0, r = [
                    ["#f2f", 40, 40],
                    ["#2ff", 80, 40],
                    ["#ff2", 60, 80]
                  ]; n < r.length; n++) {
                  var a = r[n],
                    o = a[0],
                    i = a[1],
                    c = a[2];
                  t.fillStyle = o, t.beginPath(), t.arc(i, c, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
                }
                t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd")
              }(a, o), e = Z(a))
            } else e = t = "";
            return {
              winding: n,
              geometry: e,
              text: t
            }
          },
          touchSupport: function() {
            var e, t = navigator,
              n = 0;
            void 0 !== t.maxTouchPoints ? n = w(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints);
            try {
              document.createEvent("TouchEvent"), e = !0
            } catch (t) {
              e = !1
            }
            return {
              maxTouchPoints: n,
              touchEvent: e,
              touchStart: "ontouchstart" in window
            }
          },
          vendor: function() {
            return navigator.vendor || ""
          },
          vendorFlavors: function() {
            for (var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < n.length; t++) {
              var r = n[t],
                a = window[r];
              a && "object" == typeof a && e.push(r)
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
              var n = t[e];
              if (matchMedia("(color-gamut: ".concat(n, ")")).matches) return n
            }
          },
          invertedColors: function() {
            return !!q("inverted") || !q("none") && void 0
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
            return ee("no-preference") ? 0 : ee("high") || ee("more") ? 1 : ee("low") || ee("less") ? -1 : ee("forced") ? 10 : void 0
          },
          reducedMotion: function() {
            return !!te("reduce") || !te("no-preference") && void 0
          },
          hdr: function() {
            return !!ne("high") || !ne("standard") && void 0
          },
          math: function() {
            var e, t = re.acos || ae,
              n = re.acosh || ae,
              r = re.asin || ae,
              a = re.asinh || ae,
              o = re.atanh || ae,
              i = re.atan || ae,
              c = re.sin || ae,
              s = re.sinh || ae,
              l = re.cos || ae,
              u = re.cosh || ae,
              d = re.tan || ae,
              m = re.tanh || ae,
              f = re.exp || ae,
              h = re.expm1 || ae,
              g = re.log1p || ae;
            return {
              acos: t(.12312423423423424),
              acosh: n(1e308),
              acoshPf: (e = 1e154, re.log(e + re.sqrt(e * e - 1))),
              asin: r(.12312423423423424),
              asinh: a(1),
              asinhPf: re.log(1 + re.sqrt(2)),
              atanh: o(.5),
              atanhPf: re.log(3) / 2,
              atan: i(.5),
              sin: c(-1e300),
              sinh: s(1),
              sinhPf: re.exp(1) - 1 / re.exp(1) / 2,
              cos: l(10.000000000123),
              cosh: u(1),
              coshPf: (re.exp(1) + 1 / re.exp(1)) / 2,
              tan: d(-1e300),
              tanh: m(1),
              tanhPf: (re.exp(2) - 1) / (re.exp(2) + 1),
              exp: f(1),
              expm1: h(1),
              expm1Pf: re.exp(1) - 1,
              log1p: g(10),
              log1pPf: re.log(11),
              powPI: re.pow(re.PI, -100)
            }
          },
          videoCard: function() {
            var e, t = document.createElement("canvas"),
              n = null !== (e = t.getContext("webgl")) && void 0 !== e ? e : t.getContext("experimental-webgl");
            if (n && "getExtension" in n) {
              var r = n.getExtension("WEBGL_debug_renderer_info");
              if (r) return {
                vendor: (n.getParameter(r.UNMASKED_VENDOR_WEBGL) || "").toString(),
                renderer: (n.getParameter(r.UNMASKED_RENDERER_WEBGL) || "").toString()
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
        ce = "$ if upgrade to Pro: https://fpjs.dev/pro";

      function se(e) {
        var t = function(e) {
            if (O()) return .4;
            if (k()) return I() ? .5 : .3;
            var t = e.platform.value || "";
            return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
          }(e),
          n = function(e) {
            return E(.99 + .01 * e, 1e-4)
          }(t);
        return {
          score: t,
          comment: ce.replace(/\$/g, "".concat(n))
        }
      }

      function le(e) {
        return JSON.stringify(e, (function(e, t) {
          return t instanceof Error ? r({
            name: (n = t).name,
            message: n.message,
            stack: null === (a = n.stack) || void 0 === a ? void 0 : a.split("\n")
          }, n) : t;
          var n, a
        }), 2)
      }

      function ue(e) {
        return y(function(e) {
          for (var t = "", n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
            var a = r[n],
              o = e[a],
              i = o.error ? "error" : JSON.stringify(o.value);
            t += "".concat(t ? "|" : "").concat(a.replace(/([:|\\])/g, "\\$1"), ":").concat(i)
          }
          return t
        }(e))
      }

      function de(e) {
        return void 0 === e && (e = 50),
          function(e, t) {
            void 0 === t && (t = 1 / 0);
            var n = window.requestIdleCallback;
            return n ? new Promise((function(e) {
              return n.call(window, (function() {
                return e()
              }), {
                timeout: t
              })
            })) : s(Math.min(e, t))
          }(e, 2 * e)
      }

      function me(e, t) {
        var n = Date.now();
        return {
          get: function(r) {
            return a(this, void 0, void 0, (function() {
              var a, i, s;
              return o(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return a = Date.now(), [4, e()];
                  case 1:
                    return i = o.sent(), s = function(e) {
                      var t;
                      return {
                        get visitorId() {
                          return void 0 === t && (t = ue(this.components)), t
                        },
                        set visitorId(e) {
                          t = e
                        },
                        confidence: se(e),
                        components: e,
                        version: c
                      }
                    }(i), (t || (null == r ? void 0 : r.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(s.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(a - n, "\nvisitorId: ").concat(s.visitorId, "\ncomponents: ").concat(le(i), "\n```")), [2, s]
                }
              }))
            }))
          }
        }
      }

      function fe(e) {
        var t = void 0 === e ? {} : e,
          n = t.delayFallback,
          r = t.debug,
          i = t.monitoring,
          s = void 0 === i || i;
        return a(this, void 0, void 0, (function() {
          return o(this, (function(e) {
            switch (e.label) {
              case 0:
                return s && function() {
                  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
                    var e = new XMLHttpRequest;
                    e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(c, "/npm-monitoring"), !0), e.send()
                  } catch (e) {
                    console.error(e)
                  }
                }(), [4, de(n)];
              case 1:
                return e.sent(), [2, me(L(ie, {
                  debug: r
                }, []), r)]
            }
          }))
        }))
      }
      var he = {
          load: fe,
          hashComponents: ue,
          componentsToDebugString: le
        },
        ge = y
    },
    377: (e, t, n) => {
      var r, a, o, i = n(133);

      function c(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        let n = [0, 0, 0, 0];
        return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }

      function s(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        let n = [0, 0, 0, 0];
        return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }

      function l(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }

      function u(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }

      function d(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }

      function m(e) {
        return e = d(e, [0, e[0] >>> 1]), e = d(e = s(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), d(e = s(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }

      function f(e) {
        return e.length > 32 ? function(e, t) {
          t = t || 0;
          let n, r = (e = e || "").length % 16,
            a = e.length - r,
            o = [0, t],
            i = [0, t],
            f = [0, 0],
            h = [0, 0],
            g = [2277735313, 289559509],
            p = [1291169091, 658871167];
          for (n = 0; n < a; n += 16) f = [255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24, 255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24], h = [255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24, 255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24], f = s(f, g), f = l(f, 31), f = s(f, p), o = d(o, f), o = l(o, 27), o = c(o, i), o = c(s(o, [0, 5]), [0, 1390208809]), h = s(h, p), h = l(h, 33), h = s(h, g), i = d(i, h), i = l(i, 31), i = c(i, o), i = c(s(i, [0, 5]), [0, 944331445]);
          switch (f = [0, 0], h = [0, 0], r) {
            case 15:
              h = d(h, u([0, e.charCodeAt(n + 14)], 48));
              break;
            case 14:
              h = d(h, u([0, e.charCodeAt(n + 13)], 40));
              break;
            case 13:
              h = d(h, u([0, e.charCodeAt(n + 12)], 32));
              break;
            case 12:
              h = d(h, u([0, e.charCodeAt(n + 11)], 24));
              break;
            case 11:
              h = d(h, u([0, e.charCodeAt(n + 10)], 16));
              break;
            case 10:
              h = d(h, u([0, e.charCodeAt(n + 9)], 8));
              break;
            case 9:
              h = d(h, [0, e.charCodeAt(n + 8)]), h = s(h, p), h = l(h, 33), h = s(h, g), i = d(i, h);
              break;
            case 8:
              f = d(f, u([0, e.charCodeAt(n + 7)], 56));
              break;
            case 7:
              f = d(f, u([0, e.charCodeAt(n + 6)], 48));
              break;
            case 6:
              f = d(f, u([0, e.charCodeAt(n + 5)], 40));
              break;
            case 5:
              f = d(f, u([0, e.charCodeAt(n + 4)], 32));
              break;
            case 4:
              f = d(f, u([0, e.charCodeAt(n + 3)], 24));
              break;
            case 3:
              f = d(f, u([0, e.charCodeAt(n + 2)], 16));
              break;
            case 2:
              f = d(f, u([0, e.charCodeAt(n + 1)], 8));
              break;
            case 1:
              f = d(f, [0, e.charCodeAt(n)]), f = s(f, g), f = l(f, 31), f = s(f, p), o = d(o, f)
          }
          return o = d(o, [0, e.length]), i = d(i, [0, e.length]), o = c(o, i), i = c(i, o), o = m(o), i = m(i), o = c(o, i), i = c(i, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
        }(e, 31) : e
      }

      function h(e) {
        const t = [...e];
        return function() {
          const e = [/palemoon/i];
          let t = !1;
          for (let n = 0, r = e.length; n < r; n++) {
            let r = e[n];
            if (navigator.userAgent.match(r)) {
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

      function g() {
        let e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
      }

      function p() {
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

      function v(e) {
        let t, n = navigator.oscpu,
          r = navigator.platform.toLowerCase(),
          a = y(e);
        if (t = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, t && "Windows Phone" !== a && "Android" !== a && "iOS" !== a && "Other" !== a) return !0;
        if (void 0 !== n) {
          if (n = n.toLowerCase(), n.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a) return !0;
          if (n.indexOf("linux") >= 0 && "Linux" !== a && "Android" !== a) return !0;
          if (n.indexOf("mac") >= 0 && "Mac" !== a && "iOS" !== a) return !0;
          if (0 === n.indexOf("win") && 0 === n.indexOf("linux") && n.indexOf("mac") >= 0 && "other" !== a) return !0
        }
        return r.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a || (r.indexOf("linux") >= 0 || r.indexOf("android") >= 0 || r.indexOf("pike") >= 0) && "Linux" !== a && "Android" !== a || (r.indexOf("mac") >= 0 || r.indexOf("ipad") >= 0 || r.indexOf("ipod") >= 0 || r.indexOf("iphone") >= 0) && "Mac" !== a && "iOS" !== a || 0 === r.indexOf("win") && 0 === r.indexOf("linux") && r.indexOf("mac") >= 0 && "other" !== a || void 0 === navigator.plugins && "Windows" !== a && "Windows Phone" !== a
      }

      function b(e, t) {
        const n = function() {
            let e, t = navigator.userAgent.toLowerCase();
            return e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("ucbrowser") >= 0 ? "UC Browser" : t.indexOf("maxthon") >= 0 ? "Maxthon" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("edge") >= 0 || t.indexOf("edg") >= 0 ? "Microsoft Edge" : t.indexOf("chrome") >= 0 || t.indexOf("crios") >= 0 ? "Chrome" : t.indexOf("playstation") >= 0 ? "PlayStation" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : t.indexOf("nintendobrowser") >= 0 ? "Nintendo" : "Unknown browser", e
          }(),
          r = y(e, t);
        switch (n) {
          case "PlayStation":
          case "Nintendo":
            return r;
          default:
            return n + " on " + r
        }
      }

      function y(e, t) {
        if (e) return e;
        let n, r = navigator.userAgent.toLowerCase();
        return n = r.indexOf("windows phone") >= 0 ? "Windows Phone" : r.indexOf("steam") >= 0 ? "Steam" : r.indexOf("xbox series x") >= 0 || r.indexOf("xbox series s") >= 0 ? "Xbox Series X|S" : r.indexOf("xbox one") >= 0 || r.indexOf("xbox_one") >= 0 ? "Xbox One" : r.indexOf("xbox") >= 0 ? "Xbox 360" : t && t.model && "xbox" === t.model.toLowerCase() ? "Xbox" : r.indexOf("playstation 5") >= 0 ? "PlayStation 5" : r.indexOf("playstation 4") >= 0 ? "PlayStation 4" : r.indexOf("playstation 3") >= 0 ? "PlayStation 3" : r.indexOf("win") >= 0 ? "Windows" : r.indexOf("android") >= 0 ? "Android" : r.indexOf("linux") >= 0 ? "Linux" : r.indexOf("nintendo switch") >= 0 ? "Nintendo Switch" : r.indexOf("iphone") >= 0 || r.indexOf("ipad") >= 0 ? "iOS" : r.indexOf("mac") >= 0 ? "Mac" : "Unknown OS", n
      }

      function w(e) {
        let t = ["monospace", "sans-serif", "serif"],
          n = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
          r = document.getElementsByTagName("body")[0],
          a = document.createElement("div"),
          o = document.createElement("div"),
          i = {},
          c = {},
          s = function() {
            let e = document.createElement("span");
            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.innerHTML = "mmmmmmmmmmlli", e
          },
          l = function(e, t) {
            let n = s();
            return n.style.fontFamily = "'" + e + "'," + t, n
          },
          u = function(e) {
            let n = !1;
            for (let r = 0; r < t.length; r++)
              if (n = e[r].offsetWidth !== i[t[r]] || e[r].offsetHeight !== c[t[r]], n) return n;
            return n
          },
          d = function() {
            let e = [];
            for (let n = 0, r = t.length; n < r; n++) {
              let r = s();
              r.style.fontFamily = t[n], a.appendChild(r), e.push(r)
            }
            return e
          }();
        r.appendChild(a);
        for (let e = 0, n = t.length; e < n; e++) i[t[e]] = d[e].offsetWidth, c[t[e]] = d[e].offsetHeight;
        let m = function() {
          let e = {};
          for (let r = 0, a = n.length; r < a; r++) {
            let a = [];
            for (let e = 0, i = t.length; e < i; e++) {
              let i = l(n[r], t[e]);
              o.appendChild(i), a.push(i)
            }
            e[n[r]] = a
          }
          return e
        }();
        r.appendChild(o);
        let f = [];
        for (let e = 0, t = n.length; e < t; e++) u(m[n[e]]) && f.push(n[e]);
        return r.removeChild(o), r.removeChild(a), f
      }
      r = e.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
      }), a = e.exports, o = () => A, Object.defineProperty(a, "default", {
        get: o,
        set: undefined,
        enumerable: !0,
        configurable: !0
      });
      let S = null;
      const x = {
        get: function(e) {
          return S || (S = new Promise((t => {
            const n = function(e) {
                return e && e.__esModule ? e.default : e
              }(i).load({
                monitoring: !1
              }),
              r = navigator.userAgentData && navigator.userAgentData.getHighEntropyValues ? navigator.userAgentData.getHighEntropyValues(["model"]) : Promise.resolve({});
            Promise.all([n, r]).then((n => {
              const r = n[0],
                a = n[1];
              r.get().then((n => {
                const r = n.components,
                  o = {
                    fp: {
                      user_agent: f(navigator.userAgent),
                      language: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "",
                      pixel_ratio: window.devicePixelRatio || "",
                      timezone_offset: (new Date).getTimezoneOffset(),
                      session_storage: r.sessionStorage.value ? 1 : 0,
                      local_storage: r.localStorage.value ? 1 : 0,
                      indexed_db: r.indexedDB.value ? 1 : 0,
                      open_database: r.openDatabase.value ? 1 : 0,
                      cpu_class: r.cpuClass.value ? r.cpuClass.value : "unknown",
                      navigator_platform: r.platform.value ? r.platform.value : "unknown",
                      do_not_track: navigator.doNotTrack ? navigator.doNotTrack : "unknown",
                      regular_plugins: f(h(r.plugins.value).join(";")),
                      canvas: null,
                      webgl: null,
                      adblock: f(p()),
                      has_lied_os: v(a),
                      touch_support: [r.touchSupport.value.maxTouchPoints, r.touchSupport.value.touchEvent, r.touchSupport.value.touchStart].join(";"),
                      device_name: b(e, a),
                      js_fonts: f(w().join(";"))
                    }
                  };
                g() ? o.fp.canvas = f(function() {
                    let e = [],
                      t = document.createElement("canvas");
                    t.width = 2e3, t.height = 200, t.style.display = "inline";
                    let n = t.getContext("2d");
                    return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), e.push("canvas fp:" + t.toDataURL()), e.join("~")
                  }()) : delete o.fp.canvas,
                  function() {
                    if (!g()) return !1;
                    let e, t = document.createElement("canvas");
                    try {
                      e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                    } catch (t) {
                      e = !1
                    }
                    return !!window.WebGLRenderingContext && !!e
                  }() ? o.fp.webgl = f(function() {
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
                    let n = [],
                      r = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, r);
                    let a = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                    e.bufferData(e.ARRAY_BUFFER, a, e.STATIC_DRAW), r.itemSize = 3, r.numItems = 3;
                    let o = e.createProgram(),
                      i = e.createShader(e.VERTEX_SHADER);
                    e.shaderSource(i, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(i);
                    let c = e.createShader(e.FRAGMENT_SHADER);
                    return e.shaderSource(c, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(c), e.attachShader(o, i), e.attachShader(o, c), e.linkProgram(o), e.useProgram(o), o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex"), o.offsetUniform = e.getUniformLocation(o, "uniformOffset"), e.enableVertexAttribArray(o.vertexPosArray), e.vertexAttribPointer(o.vertexPosAttrib, r.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(o.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems), e.canvas && n.push(e.canvas.toDataURL()), n.push("extensions:" + e.getSupportedExtensions().join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
                      let t, n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                      return n ? (t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
                    }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION)), e.getShaderPrecisionFormat ? (n.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), n.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), n.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), n.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), n.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), n.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), n.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), n.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), n.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), n.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), n.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), n.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), n.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), n.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), n.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), n.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), n.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), n.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), n.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), n.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), n.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), n.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), n.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), n.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), n.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), n.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), n.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), n.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), n.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), n.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), n.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), n.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), n.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), n.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), n.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), n.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), n.join("~")) : ("undefined" == typeof NODEBUG && console.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"), n.join("~"))
                  }()) : delete o.fp.webgl;
                const i = JSON.stringify(o);
                t(i)
              }))
            })).catch((e => console.error(e)))
          }))), S
        }
      };
      var A = x
    }
  }
]);