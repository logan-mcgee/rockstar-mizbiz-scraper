/*! For license information please see 0e8c242ece6f684da5a545c418d5125c.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_screenshot_viewer = self.webpackChunk_rockstargames_modules_core_screenshot_viewer || []).push([
  [188], {
    32: (e, r, s) => {
      var o = s(927),
        a = Symbol.for("react.element"),
        c = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        t = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        n = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      r.jsx = function(e, r, s) {
        var o, l = {},
          u = null,
          _ = null;
        for (o in void 0 !== s && (u = "" + s), void 0 !== r.key && (u = "" + r.key), void 0 !== r.ref && (_ = r.ref), r) c.call(r, o) && !n.hasOwnProperty(o) && (l[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === l[o] && (l[o] = r[o]);
        return {
          $$typeof: a,
          type: e,
          key: u,
          ref: _,
          props: l,
          _owner: t.current
        }
      }
    },
    705: (e, r, s) => {
      e.exports = s(32)
    },
    188: (e, r, s) => {
      s.r(r), s.d(r, {
        default: () => c
      });
      var o = s(583);
      var a = s(705);
      const c = () => {
        const [e] = (0, o.useSearchParams)(), r = e.get("src") ?? null;
        if (!r) return null;
        const {
          hostname: s
        } = new URL(r);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(s) ? (0, a.jsx)("div", {
          className: "rockstargames-modules-core-screenshot-viewerb853e96a358de7f06dc571512f2b1505",
          children: (0, a.jsx)("div", {
            className: "rockstargames-modules-core-screenshot-viewera1d461bde15f77edf27cc41cea0da7c1",
            style: {
              background: `url(${r}) no-repeat center/contain`
            }
          })
        }) : null
      }
    }
  }
]);