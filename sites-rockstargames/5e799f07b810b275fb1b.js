/*! For license information please see 5e799f07b810b275fb1b.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [706], {
    115: (e, r, s) => {
      var t = s(6026),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        _ = Object.prototype.hasOwnProperty,
        n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, r, s) {
        var t, a = {},
          c = null,
          l = null;
        for (t in void 0 !== s && (c = "" + s), void 0 !== r.key && (c = "" + r.key), void 0 !== r.ref && (l = r.ref), r) _.call(r, t) && !f.hasOwnProperty(t) && (a[t] = r[t]);
        if (e && e.defaultProps)
          for (t in r = e.defaultProps) void 0 === a[t] && (a[t] = r[t]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: l,
          props: a,
          _owner: n.current
        }
      }
      r.Fragment = a, r.jsx = c, r.jsxs = c
    },
    9706: (e, r, s) => {
      e.exports = s(115)
    }
  }
]);