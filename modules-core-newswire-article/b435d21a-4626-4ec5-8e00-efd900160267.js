try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b435d21a-4626-4ec5-8e00-efd900160267", e._sentryDebugIdIdentifier = "sentry-dbid-b435d21a-4626-4ec5-8e00-efd900160267")
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
  [1641, 3473], {
    8405(e, n, t) {
      "use strict";
      var a = t(85126);

      function o() {}

      function r() {}
      r.resetWarningCache = o, e.exports = function() {
        function e(e, n, t, o, r, s) {
          if (s !== a) {
            var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw d.name = "Invariant Violation", d
          }
        }

        function n() {
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
          arrayOf: n,
          element: e,
          elementType: e,
          instanceOf: n,
          node: e,
          objectOf: n,
          oneOf: n,
          oneOfType: n,
          shape: n,
          exact: n,
          checkPropTypes: r,
          resetWarningCache: o
        };
        return t.PropTypes = t, t
      }
    },
    97465(e, n, t) {
      e.exports = t(8405)()
    },
    85126(e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
  }
]);