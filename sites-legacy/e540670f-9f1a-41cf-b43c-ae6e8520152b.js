! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e540670f-9f1a-41cf-b43c-ae6e8520152b", e._sentryDebugIdIdentifier = "sentry-dbid-e540670f-9f1a-41cf-b43c-ae6e8520152b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [5796], {
    43638: (e, a, t) => {
      "use strict";
      var n = t(93469);

      function o() {}

      function r() {}
      r.resetWarningCache = o, e.exports = function() {
        function e(e, a, t, o, r, s) {
          if (s !== n) {
            var f = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw f.name = "Invariant Violation", f
          }
        }

        function a() {
          return e
        }
        e.isRequired = e;
        var t = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: a,
          element: e,
          elementType: e,
          instanceOf: a,
          node: e,
          objectOf: a,
          oneOf: a,
          oneOfType: a,
          shape: a,
          exact: a,
          checkPropTypes: r,
          resetWarningCache: o
        };
        return t.PropTypes = t, t
      }
    },
    5796: (e, a, t) => {
      e.exports = t(43638)()
    },
    93469: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
  }
]);