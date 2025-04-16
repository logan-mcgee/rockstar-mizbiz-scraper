! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1224a5f6-4495-4ca7-a841-76775bad788a", e._sentryDebugIdIdentifier = "sentry-dbid-1224a5f6-4495-4ca7-a841-76775bad788a")
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
  [3684, 1365, 3855, 6236, 9093, 1474], {
    53178: e => {
      "use strict";
      var t = [];

      function n(e) {
        for (var n = -1, r = 0; r < t.length; r++)
          if (t[r].identifier === e) {
            n = r;
            break
          } return n
      }

      function r(e, r) {
        for (var a = {}, s = [], c = 0; c < e.length; c++) {
          var i = e[c],
            u = r.base ? i[0] + r.base : i[0],
            f = a[u] || 0,
            d = "".concat(u, " ").concat(f);
          a[u] = f + 1;
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
            var y = o(p, r);
            r.byIndex = c, t.splice(c, 0, {
              identifier: d,
              updater: y,
              references: 1
            })
          }
          s.push(d)
        }
        return s
      }

      function o(e, t) {
        var n = t.domAPI(t);
        return n.update(e),
          function(t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              n.update(e = t)
            } else n.remove()
          }
      }
      e.exports = function(e, o) {
        var a = r(e = e || [], o = o || {});
        return function(e) {
          e = e || [];
          for (var s = 0; s < a.length; s++) {
            var c = n(a[s]);
            t[c].references--
          }
          for (var i = r(e, o), u = 0; u < a.length; u++) {
            var f = n(a[u]);
            0 === t[f].references && (t[f].updater(), t.splice(f, 1))
          }
          a = i
        }
      }
    },
    82510: e => {
      "use strict";
      e.exports = function(e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
      }
    },
    31610: e => {
      "use strict";
      e.exports = function(e, t) {
        Object.keys(t).forEach((function(n) {
          e.setAttribute(n, t[n])
        }))
      }
    },
    94566: e => {
      "use strict";
      var t, n = (t = [], function(e, n) {
        return t[e] = n, t.filter(Boolean).join("\n")
      });

      function r(e, t, r, o) {
        var a;
        if (r) a = "";
        else {
          a = "", o.supports && (a += "@supports (".concat(o.supports, ") {")), o.media && (a += "@media ".concat(o.media, " {"));
          var s = void 0 !== o.layer;
          s && (a += "@layer".concat(o.layer.length > 0 ? " ".concat(o.layer) : "", " {")), a += o.css, s && (a += "}"), o.media && (a += "}"), o.supports && (a += "}")
        }
        if (e.styleSheet) e.styleSheet.cssText = n(t, a);
        else {
          var c = document.createTextNode(a),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(c, i[t]) : e.appendChild(c)
        }
      }
      var o = {
        singleton: null,
        singletonCounter: 0
      };
      e.exports = function(e) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var t = o.singletonCounter++,
          n = o.singleton || (o.singleton = e.insertStyleElement(e));
        return {
          update: function(e) {
            r(n, t, !1, e)
          },
          remove: function(e) {
            r(n, t, !0, e)
          }
        }
      }
    },
    15081: e => {
      "use strict";
      e.exports = function(e) {
        var t = [];
        return t.toString = function() {
          return this.map((function(t) {
            var n = "",
              r = void 0 !== t[5];
            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
          })).join("")
        }, t.i = function(e, n, r, o, a) {
          "string" == typeof e && (e = [
            [null, e, void 0]
          ]);
          var s = {};
          if (r)
            for (var c = 0; c < this.length; c++) {
              var i = this[c][0];
              null != i && (s[i] = !0)
            }
          for (var u = 0; u < e.length; u++) {
            var f = [].concat(e[u]);
            r && s[f[0]] || (void 0 !== a && (void 0 === f[5] || (f[1] = "@layer".concat(f[5].length > 0 ? " ".concat(f[5]) : "", " {").concat(f[1], "}")), f[5] = a), n && (f[2] ? (f[1] = "@media ".concat(f[2], " {").concat(f[1], "}"), f[2] = n) : f[2] = n), o && (f[4] ? (f[1] = "@supports (".concat(f[4], ") {").concat(f[1], "}"), f[4] = o) : f[4] = "".concat(o)), t.push(f))
          }
        }, t
      }
    },
    42587: e => {
      "use strict";
      e.exports = function(e) {
        var t = e[1],
          n = e[3];
        if (!n) return t;
        if ("function" == typeof btoa) {
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
            a = "/*# ".concat(o, " */");
          return [t].concat([a]).join("\n")
        }
        return [t].join("\n")
      }
    },
    17341: (e, t, n) => {
      var r = n(54357);
      e.exports = function(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
      }
    },
    32469: (e, t, n) => {
      "use strict";
      var r = n(62229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, a = {},
          u = null,
          f = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (f = t.ref), t) s.call(t, r) && !i.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: f,
          props: a,
          _owner: c.current
        }
      }
      t.Fragment = a, t.jsx = u, t.jsxs = u
    },
    73855: (e, t, n) => {
      "use strict";
      e.exports = n(32469)
    },
    11018: (e, t, n) => {},
    60016: (e, t, n) => {
      "use strict";
      n.d(t, {
        v6: () => c
      }), n(11018);
      var r = n(5060);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = o.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function c(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              c = o[e];
            "function" == typeof n && "function" == typeof c && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, c) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof c ? "id" === e && n && c ? t.id = a(n, c) : t[e] = void 0 !== c ? c : n : t[e] = (0, r.A)(n, c)
          }
        }
        return t
      }
      var i;
      n(55136), n(29276), n(22241), n(90614), n(8237), n(17341), n(80098),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(i || (i = {})), Symbol.toStringTag
    }
  }
]);