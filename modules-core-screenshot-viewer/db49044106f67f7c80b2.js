/*! For license information please see db49044106f67f7c80b2.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_screenshot_viewer = self.webpackChunk_rockstargames_modules_core_screenshot_viewer || []).push([
  [502], {
    502: (e, r, s) => {
      s.r(r), s.d(r, {
        default: () => a
      });
      var o = s(814);
      var t = s(322);
      const a = () => {
        const [e] = (0, o.useSearchParams)(), r = e.get("src") ?? null;
        if (!r) return null;
        const {
          hostname: s
        } = new URL(r);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(s) ? (0, t.jsx)("div", {
          className: "fd48615d8f5ca456455b",
          children: (0, t.jsx)("div", {
            className: "bc525367209888f020a9",
            style: {
              background: `url(${r}) no-repeat center/contain`
            }
          })
        }) : null
      }
    },
    652: (e, r, s) => {
      var o = s(822),
        t = Symbol.for("react.element"),
        a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        n = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      r.jsx = function(e, r, s) {
        var o, l = {},
          _ = null,
          u = null;
        for (o in void 0 !== s && (_ = "" + s), void 0 !== r.key && (_ = "" + r.key), void 0 !== r.ref && (u = r.ref), r) a.call(r, o) && !c.hasOwnProperty(o) && (l[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === l[o] && (l[o] = r[o]);
        return {
          $$typeof: t,
          type: e,
          key: _,
          ref: u,
          props: l,
          _owner: n.current
        }
      }
    },
    322: (e, r, s) => {
      e.exports = s(652)
    }
  }
]);