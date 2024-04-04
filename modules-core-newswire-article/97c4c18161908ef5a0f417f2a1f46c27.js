/*! For license information please see 97c4c18161908ef5a0f417f2a1f46c27.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "acd5814e-179e-43ce-8197-f9bc8d3165aa", e._sentryDebugIdIdentifier = "sentry-dbid-acd5814e-179e-43ce-8197-f9bc8d3165aa")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [312, 240], {
    9576: (e, t, r) => {
      var a = r(1664),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, r) {
        var a, n = {},
          i = null,
          c = null;
        for (a in void 0 !== r && (i = "" + r), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (c = t.ref), t) d.call(t, a) && !l.hasOwnProperty(a) && (n[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === n[a] && (n[a] = t[a]);
        return {
          $$typeof: s,
          type: e,
          key: i,
          ref: c,
          props: n,
          _owner: o.current
        }
      }
      t.Fragment = n, t.jsx = i, t.jsxs = i
    },
    5240: (e, t, r) => {
      e.exports = r(9576)
    },
    1312: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => l
      });
      var a = r(9860),
        s = r(1740),
        n = r(5792);
      const d = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var o = r(5240);
      const l = (0, n.withTranslations)((e => {
        let {
          children: t,
          intro: r,
          image: l = {},
          style: i = {},
          t: c,
          className: f = "",
          variant: u = null
        } = e, _ = {};
        void 0 !== i.toggleInvertSeparator && (_ = {
          "--breadcrumb-separator-filter-invert": i.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const b = (0, n.useNewswirePost)(),
          g = {},
          w = g?.meta?.title ?? b?.title,
          m = g?.meta?.subtitle ?? b?.subtitle,
          p = m ? (0, o.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: m
          }) : "",
          y = [{
            text: c("Newswire"),
            to: "/newswire"
          }],
          {
            src: h
          } = (0, s.useImageParser)(l),
          x = (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("time", {
              dateTime: b.created,
              children: b.created_formatted
            }), r ? (0, o.jsx)(a.DescriptionArea, {
              item: r
            }) : "", t]
          });
        b?.primary_tags?.length && y.push({
          text: b.primary_tags[0].name,
          to: `/newswire?tag_id=${b.primary_tags[0].id}`
        }), b?.secondary_tags?.length && y.push({
          text: b.secondary_tags[0].name,
          to: `/newswire?tag_id=${b.secondary_tags[0].id}`
        });
        const v = (0, o.jsx)("div", {
          className: d.breadcrumbs,
          children: y.map((e => (0, o.jsx)(a.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return h?.desktop && (i.background = `url(${h.desktop}) center/cover no-repeat`), (0, o.jsx)("div", {
          className: [f, d.title].join(" "),
          style: {
            ...i,
            ..._
          },
          children: "separated" === u ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("header", {
              "data-context": "title",
              children: [v, (0, o.jsx)("h1", {
                children: w
              })]
            }), (0, o.jsxs)("footer", {
              "data-context": "title",
              children: [p, x]
            })]
          }) : (0, o.jsxs)(o.Fragment, {
            children: [v, (0, o.jsxs)("div", {
              className: d.main,
              children: [(0, o.jsx)("h1", {
                children: w
              }), p]
            }), x]
          })
        })
      }))
    }
  }
]);
//# sourceMappingURL=97c4c18161908ef5a0f417f2a1f46c27.js.map