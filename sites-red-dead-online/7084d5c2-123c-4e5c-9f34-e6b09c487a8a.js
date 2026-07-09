try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7084d5c2-123c-4e5c-9f34-e6b09c487a8a", e._sentryDebugIdIdentifier = "sentry-dbid-7084d5c2-123c-4e5c-9f34-e6b09c487a8a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [331], {
    40055(e, a, n) {
      "use strict";
      var t = n(42528);

      function o() {}

      function s() {}
      s.resetWarningCache = o, e.exports = function() {
        function e(e, a, n, o, s, d) {
          if (d !== t) {
            var r = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw r.name = "Invariant Violation", r
          }
        }

        function a() {
          return e
        }
        e.isRequired = e;
        var n = {
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
          checkPropTypes: s,
          resetWarningCache: o
        };
        return n.PropTypes = n, n
      }
    },
    60331(e, a, n) {
      e.exports = n(40055)()
    },
    42528(e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
  }
]);