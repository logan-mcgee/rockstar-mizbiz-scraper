! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a63af612-fce2-4c10-a371-c51372e193c1", e._sentryDebugIdIdentifier = "sentry-dbid-a63af612-fce2-4c10-a371-c51372e193c1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [312, 240], {
    99576: (e, t, r) => {
      var a = r(51664),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var a, n = {},
          l = null,
          i = null;
        for (a in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) o.call(t, a) && !c.hasOwnProperty(a) && (n[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === n[a] && (n[a] = t[a]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: i,
          props: n,
          _owner: d.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    },
    95240: (e, t, r) => {
      e.exports = r(99576)
    },
    91312: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => c
      });
      var a = r(9860),
        s = r(1740),
        n = r(45792);
      const o = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var d = r(95240);
      const c = (0, n.withTranslations)((e => {
        let {
          children: t,
          intro: r,
          image: c = {},
          style: l = {},
          t: i,
          className: f = "",
          variant: u = null
        } = e, _ = {};
        void 0 !== l.toggleInvertSeparator && (_ = {
          "--breadcrumb-separator-filter-invert": l.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const b = (0, n.useNewswirePost)(),
          g = {},
          w = g?.meta?.title ?? b?.title,
          m = g?.meta?.subtitle ?? b?.subtitle,
          p = m ? (0, d.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: m
          }) : "",
          y = [{
            text: i("Newswire"),
            to: "/newswire"
          }],
          {
            src: h
          } = (0, s.useImageParser)(c),
          x = (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("time", {
              dateTime: b.created,
              children: b.created_formatted
            }), r ? (0, d.jsx)(a.DescriptionArea, {
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
        const v = (0, d.jsx)("div", {
          className: o.breadcrumbs,
          children: y.map((e => (0, d.jsx)(a.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return h?.desktop && (l.background = `url(${h.desktop}) center/cover no-repeat`), (0, d.jsx)("div", {
          className: [f, o.title].join(" "),
          style: {
            ...l,
            ..._
          },
          children: "separated" === u ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("header", {
              "data-context": "title",
              children: [v, (0, d.jsx)("h1", {
                children: w
              })]
            }), (0, d.jsxs)("footer", {
              "data-context": "title",
              children: [p, x]
            })]
          }) : (0, d.jsxs)(d.Fragment, {
            children: [v, (0, d.jsxs)("div", {
              className: o.main,
              children: [(0, d.jsx)("h1", {
                children: w
              }), p]
            }), x]
          })
        })
      }))
    }
  }
]);