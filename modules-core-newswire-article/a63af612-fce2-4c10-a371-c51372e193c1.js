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
        for (a in void 0 !== r && (i = "" + r), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (c = t.ref), t) o.call(t, a) && !l.hasOwnProperty(a) && (n[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === n[a] && (n[a] = t[a]);
        return {
          $$typeof: s,
          type: e,
          key: i,
          ref: c,
          props: n,
          _owner: d.current
        }
      }
      t.Fragment = n, t.jsx = i, t.jsxs = i
    },
    95240: (e, t, r) => {
      e.exports = r(99576)
    },
    91312: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => l
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
      const l = (0, n.withTranslations)((e => {
        let {
          children: t,
          intro: r,
          image: l = {},
          style: i = {},
          t: c,
          className: f = "",
          variant: b = null
        } = e, u = {};
        void 0 !== i.toggleInvertSeparator && (u = {
          "--breadcrumb-separator-filter-invert": i.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const _ = (0, n.useNewswirePost)(),
          g = {},
          w = g?.meta?.title ?? _?.title,
          m = g?.meta?.subtitle ?? _?.subtitle,
          p = m ? (0, d.jsx)("h3", {
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
          x = (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("time", {
              dateTime: _.created,
              children: _.created_formatted
            }), r ? (0, d.jsx)(a.DescriptionArea, {
              item: r
            }) : "", t]
          });
        _?.primary_tags?.length && y.push({
          text: _.primary_tags[0].name,
          to: `/newswire?tag_id=${_.primary_tags[0].id}`
        }), _?.secondary_tags?.length && y.push({
          text: _.secondary_tags[0].name,
          to: `/newswire?tag_id=${_.secondary_tags[0].id}`
        });
        const v = (0, d.jsx)("div", {
          className: o.breadcrumbs,
          children: y.map((e => (0, d.jsx)(a.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return h?.desktop && (i.background = `url(${h.desktop}) center/cover no-repeat`), (0, d.jsx)("div", {
          className: [f, o.title].join(" "),
          style: {
            ...i,
            ...u
          },
          children: "separated" === b ? (0, d.jsxs)(d.Fragment, {
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