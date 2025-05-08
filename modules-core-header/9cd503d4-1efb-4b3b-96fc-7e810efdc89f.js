! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9cd503d4-1efb-4b3b-96fc-7e810efdc89f", e._sentryDebugIdIdentifier = "sentry-dbid-9cd503d4-1efb-4b3b-96fc-7e810efdc89f")
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
  [2025, 2180, 3855, 6236, 9093, 1474], {
    53178: e => {
      "use strict";
      var t = [];

      function r(e) {
        for (var r = -1, n = 0; n < t.length; n++)
          if (t[n].identifier === e) {
            r = n;
            break
          } return r
      }

      function n(e, n) {
        for (var a = {}, c = [], s = 0; s < e.length; s++) {
          var i = e[s],
            u = n.base ? i[0] + n.base : i[0],
            d = a[u] || 0,
            f = "".concat(u, " ").concat(d);
          a[u] = d + 1;
          var l = r(f),
            p = {
              css: i[1],
              media: i[2],
              sourceMap: i[3],
              supports: i[4],
              layer: i[5]
            };
          if (-1 !== l) t[l].references++, t[l].updater(p);
          else {
            var v = o(p, n);
            n.byIndex = s, t.splice(s, 0, {
              identifier: f,
              updater: v,
              references: 1
            })
          }
          c.push(f)
        }
        return c
      }

      function o(e, t) {
        var r = t.domAPI(t);
        return r.update(e),
          function(t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              r.update(e = t)
            } else r.remove()
          }
      }
      e.exports = function(e, o) {
        var a = n(e = e || [], o = o || {});
        return function(e) {
          e = e || [];
          for (var c = 0; c < a.length; c++) {
            var s = r(a[c]);
            t[s].references--
          }
          for (var i = n(e, o), u = 0; u < a.length; u++) {
            var d = r(a[u]);
            0 === t[d].references && (t[d].updater(), t.splice(d, 1))
          }
          a = i
        }
      }
    },
    17529: e => {
      "use strict";
      var t = {};
      e.exports = function(e, r) {
        var n = function(e) {
          if (void 0 === t[e]) {
            var r = document.querySelector(e);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
              r = r.contentDocument.head
            } catch (e) {
              r = null
            }
            t[e] = r
          }
          return t[e]
        }(e);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        n.appendChild(r)
      }
    },
    82510: e => {
      "use strict";
      e.exports = function(e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
      }
    },
    72162: (e, t, r) => {
      "use strict";
      e.exports = function(e) {
        var t = r.nc;
        t && e.setAttribute("nonce", t)
      }
    },
    27835: e => {
      "use strict";
      e.exports = function(e) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var t = e.insertStyleElement(e);
        return {
          update: function(r) {
            ! function(e, t, r) {
              var n = "";
              r.supports && (n += "@supports (".concat(r.supports, ") {")), r.media && (n += "@media ".concat(r.media, " {"));
              var o = void 0 !== r.layer;
              o && (n += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), n += r.css, o && (n += "}"), r.media && (n += "}"), r.supports && (n += "}");
              var a = r.sourceMap;
              a && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleTagTransform(n, e, t.options)
            }(t, e, r)
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
      "use strict";
      e.exports = function(e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;
        else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e))
        }
      }
    },
    15081: e => {
      "use strict";
      e.exports = function(e) {
        var t = [];
        return t.toString = function() {
          return this.map((function(t) {
            var r = "",
              n = void 0 !== t[5];
            return t[4] && (r += "@supports (".concat(t[4], ") {")), t[2] && (r += "@media ".concat(t[2], " {")), n && (r += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), r += e(t), n && (r += "}"), t[2] && (r += "}"), t[4] && (r += "}"), r
          })).join("")
        }, t.i = function(e, r, n, o, a) {
          "string" == typeof e && (e = [
            [null, e, void 0]
          ]);
          var c = {};
          if (n)
            for (var s = 0; s < this.length; s++) {
              var i = this[s][0];
              null != i && (c[i] = !0)
            }
          for (var u = 0; u < e.length; u++) {
            var d = [].concat(e[u]);
            n && c[d[0]] || (void 0 !== a && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = a), r && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = r) : d[2] = r), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), t.push(d))
          }
        }, t
      }
    },
    42587: e => {
      "use strict";
      e.exports = function(e) {
        var t = e[1],
          r = e[3];
        if (!r) return t;
        if ("function" == typeof btoa) {
          var n = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
            o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),
            a = "/*# ".concat(o, " */");
          return [t].concat([a]).join("\n")
        }
        return [t].join("\n")
      }
    },
    17341: (e, t, r) => {
      var n = r(54357);
      e.exports = function(e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o
      }
    },
    32469: (e, t, r) => {
      "use strict";
      var n = r(62229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        c = Object.prototype.hasOwnProperty,
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, r) {
        var n, a = {},
          u = null,
          d = null;
        for (n in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (d = t.ref), t) c.call(t, n) && !i.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: d,
          props: a,
          _owner: s.current
        }
      }
      t.Fragment = a, t.jsx = u, t.jsxs = u
    },
    73855: (e, t, r) => {
      "use strict";
      e.exports = r(32469)
    },
    84368: (e, t, r) => {}
  }
]);