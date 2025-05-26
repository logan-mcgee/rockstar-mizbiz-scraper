! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "01b93725-08cc-4ed1-af2c-749037292b98", e._sentryDebugIdIdentifier = "sentry-dbid-01b93725-08cc-4ed1-af2c-749037292b98")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7144], {
    87144: e => {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function a() {
        throw new Error("clearTimeout has not been defined")
      }

      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
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
          n = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
          n = a
        }
      }();
      var s, l = [],
        u = !1,
        d = -1;

      function c() {
        u && s && (u = !1, s.length ? l = s.concat(l) : d = -1, l.length && f())
      }

      function f() {
        if (!u) {
          var e = i(c);
          u = !0;
          for (var t = l.length; t;) {
            for (s = l, l = []; ++d < t;) s && s[d].run();
            d = -1, t = l.length
          }
          s = null, u = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function b(e, t) {
        this.fun = e, this.array = t
      }

      function y() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new b(e, t)), 1 !== l.length || u || i(f)
      }, b.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = y, r.addListener = y, r.once = y, r.off = y, r.removeListener = y, r.removeAllListeners = y, r.emit = y, r.prependListener = y, r.prependOnceListener = y, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    }
  }
]);