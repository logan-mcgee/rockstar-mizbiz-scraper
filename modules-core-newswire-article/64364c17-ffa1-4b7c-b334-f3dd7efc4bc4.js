try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "64364c17-ffa1-4b7c-b334-f3dd7efc4bc4", e._sentryDebugIdIdentifier = "sentry-dbid-64364c17-ffa1-4b7c-b334-f3dd7efc4bc4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [9407], {
    42295: (e, t, r) => {
      "use strict";
      e.exports = r(69245)
    },
    42649: e => {
      var t, r, n = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          r = i
        }
      }();
      var a, u = [],
        l = !1,
        f = -1;

      function c() {
        l && a && (l = !1, a.length ? u = a.concat(u) : f = -1, u.length && d())
      }

      function d() {
        if (!l) {
          var e = s(c);
          l = !0;
          for (var t = u.length; t;) {
            for (a = u, u = []; ++f < t;) a && a[f].run();
            f = -1, t = u.length
          }
          a = null, l = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function y(e, t) {
        this.fun = e, this.array = t
      }

      function p() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        u.push(new y(e, t)), 1 !== u.length || l || s(d)
      }, y.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    69245: (e, t, r) => {
      "use strict";
      var n = r(62229),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var n, i = {},
          l = null,
          f = null;
        for (n in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (f = t.ref), t) s.call(t, n) && !u.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: f,
          props: i,
          _owner: a.current
        }
      }
      t.Fragment = i, t.jsx = l, t.jsxs = l
    }
  }
]);