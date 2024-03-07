/*! For license information please see eb72e75908971364122405f88734dafb.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f047f37c-daa5-45ad-a653-3b2157914162", e._sentryDebugIdIdentifier = "sentry-dbid-f047f37c-daa5-45ad-a653-3b2157914162")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "4f9ddcadd6441a318358d91584450ac4e81dfd99",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "4f9ddcadd6441a318358d91584450ac4e81dfd99"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [650], {
    1996: (e, t, r) => {
      var a = r(8200),
        s = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, r) {
        var a, d = {},
          i = null,
          c = null;
        for (a in void 0 !== r && (i = "" + r), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (c = t.ref), t) n.call(t, a) && !l.hasOwnProperty(a) && (d[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === d[a] && (d[a] = t[a]);
        return {
          $$typeof: s,
          type: e,
          key: i,
          ref: c,
          props: d,
          _owner: o.current
        }
      }
      t.Fragment = d, t.jsx = i, t.jsxs = i
    },
    3480: (e, t, r) => {
      e.exports = r(1996)
    },
    9650: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => l
      });
      var a = r(1668),
        s = r(1740),
        d = r(5792);
      const n = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var o = r(3480);
      const l = (0, d.withTranslations)((e => {
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
        const g = (0, d.useNewswirePost)(),
          w = {},
          m = w?.meta?.title ?? g?.title,
          b = w?.meta?.subtitle ?? g?.subtitle,
          p = b ? (0, o.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: b
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
              dateTime: g.created,
              children: g.created_formatted
            }), r ? (0, o.jsx)(a.DescriptionArea, {
              item: r
            }) : "", t]
          });
        g?.primary_tags?.length && y.push({
          text: g.primary_tags[0].name,
          to: `/newswire?tag_id=${g.primary_tags[0].id}`
        }), g?.secondary_tags?.length && y.push({
          text: g.secondary_tags[0].name,
          to: `/newswire?tag_id=${g.secondary_tags[0].id}`
        });
        const v = (0, o.jsx)("div", {
          className: n.breadcrumbs,
          children: y.map((e => (0, o.jsx)(a.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return h?.desktop && (i.background = `url(${h.desktop}) center/cover no-repeat`), (0, o.jsx)("div", {
          className: [f, n.title].join(" "),
          style: {
            ...i,
            ..._
          },
          children: "separated" === u ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("header", {
              "data-context": "title",
              children: [v, (0, o.jsx)("h1", {
                children: m
              })]
            }), (0, o.jsxs)("footer", {
              "data-context": "title",
              children: [p, x]
            })]
          }) : (0, o.jsxs)(o.Fragment, {
            children: [v, (0, o.jsxs)("div", {
              className: n.main,
              children: [(0, o.jsx)("h1", {
                children: m
              }), p]
            }), x]
          })
        })
      }))
    }
  }
]);
//# sourceMappingURL=eb72e75908971364122405f88734dafb.js.map