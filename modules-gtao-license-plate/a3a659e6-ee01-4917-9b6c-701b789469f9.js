! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a3a659e6-ee01-4917-9b6c-701b789469f9", e._sentryDebugIdIdentifier = "sentry-dbid-a3a659e6-ee01-4917-9b6c-701b789469f9")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [4967], {
    53178: e => {
      var t = [];

      function n(e) {
        for (var n = -1, a = 0; a < t.length; a++)
          if (t[a].identifier === e) {
            n = a;
            break
          } return n
      }

      function a(e, a) {
        for (var o = {}, s = [], c = 0; c < e.length; c++) {
          var i = e[c],
            u = a.base ? i[0] + a.base : i[0],
            f = o[u] || 0,
            d = "".concat(u, " ").concat(f);
          o[u] = f + 1;
          var l = n(d),
            p = {
              css: i[1],
              media: i[2],
              sourceMap: i[3],
              supports: i[4],
              layer: i[5]
            };
          if (-1 !== l) t[l].references++, t[l].updater(p);
          else {
            var v = r(p, a);
            a.byIndex = c, t.splice(c, 0, {
              identifier: d,
              updater: v,
              references: 1
            })
          }
          s.push(d)
        }
        return s
      }

      function r(e, t) {
        var n = t.domAPI(t);
        return n.update(e),
          function(t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              n.update(e = t)
            } else n.remove()
          }
      }
      e.exports = function(e, r) {
        var o = a(e = e || [], r = r || {});
        return function(e) {
          e = e || [];
          for (var s = 0; s < o.length; s++) {
            var c = n(o[s]);
            t[c].references--
          }
          for (var i = a(e, r), u = 0; u < o.length; u++) {
            var f = n(o[u]);
            0 === t[f].references && (t[f].updater(), t.splice(f, 1))
          }
          o = i
        }
      }
    },
    17529: e => {
      var t = {};
      e.exports = function(e, n) {
        var a = function(e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head
            } catch (e) {
              n = null
            }
            t[e] = n
          }
          return t[e]
        }(e);
        if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        a.appendChild(n)
      }
    },
    82510: e => {
      e.exports = function(e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
      }
    },
    72162: (e, t, n) => {
      e.exports = function(e) {
        var t = n.nc;
        t && e.setAttribute("nonce", t)
      }
    },
    27835: e => {
      e.exports = function(e) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var t = e.insertStyleElement(e);
        return {
          update: function(n) {
            ! function(e, t, n) {
              var a = "";
              n.supports && (a += "@supports (".concat(n.supports, ") {")), n.media && (a += "@media ".concat(n.media, " {"));
              var r = void 0 !== n.layer;
              r && (a += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), a += n.css, r && (a += "}"), n.media && (a += "}"), n.supports && (a += "}");
              var o = n.sourceMap;
              o && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleTagTransform(a, e, t.options)
            }(t, e, n)
          },
          remove: function() {
            ! function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e)
            }(t)
          }
        }
      }
    },
    90675: e => {
      e.exports = function(e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;
        else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e))
        }
      }
    },
    15081: e => {
      e.exports = function(e) {
        var t = [];
        return t.toString = function() {
          return this.map((function(t) {
            var n = "",
              a = void 0 !== t[5];
            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), a && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), a && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
          })).join("")
        }, t.i = function(e, n, a, r, o) {
          "string" == typeof e && (e = [
            [null, e, void 0]
          ]);
          var s = {};
          if (a)
            for (var c = 0; c < this.length; c++) {
              var i = this[c][0];
              null != i && (s[i] = !0)
            }
          for (var u = 0; u < e.length; u++) {
            var f = [].concat(e[u]);
            a && s[f[0]] || (void 0 !== o && (void 0 === f[5] || (f[1] = "@layer".concat(f[5].length > 0 ? " ".concat(f[5]) : "", " {").concat(f[1], "}")), f[5] = o), n && (f[2] ? (f[1] = "@media ".concat(f[2], " {").concat(f[1], "}"), f[2] = n) : f[2] = n), r && (f[4] ? (f[1] = "@supports (".concat(f[4], ") {").concat(f[1], "}"), f[4] = r) : f[4] = "".concat(r)), t.push(f))
          }
        }, t
      }
    },
    79908: e => {
      e.exports = function(e, t) {
        return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
      }
    },
    42587: e => {
      e.exports = function(e) {
        var t = e[1],
          n = e[3];
        if (!n) return t;
        if ("function" == typeof btoa) {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),
            o = "/*# ".concat(r, " */");
          return [t].concat([o]).join("\n")
        }
        return [t].join("\n")
      }
    }
  }
]);