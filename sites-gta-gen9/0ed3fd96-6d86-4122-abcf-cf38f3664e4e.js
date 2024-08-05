! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0ed3fd96-6d86-4122-abcf-cf38f3664e4e", e._sentryDebugIdIdentifier = "sentry-dbid-0ed3fd96-6d86-4122-abcf-cf38f3664e4e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [5468, 8500], {
    11650: (e, t, s) => {
      "use strict";
      var a = s(17254);

      function r() {}

      function i() {}
      i.resetWarningCache = r, e.exports = function() {
        function e(e, t, s, r, i, l) {
          if (l !== a) {
            var n = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw n.name = "Invariant Violation", n
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var s = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: r
        };
        return s.PropTypes = s, s
      }
    },
    37977: (e, t, s) => {
      e.exports = s(11650)()
    },
    17254: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    18500: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        default: () => h
      });
      var a = s(26371),
        r = s(8999),
        i = s(21450);
      const l = {
        padding: "rockstargames-sites-gta-gen9e1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-sites-gta-gen9daf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-sites-gta-gen9ffab2486abb58ef9090c19d6d5bdd44c"
      };
      var n = s(46632);
      const d = e => {
          let {
            to: t,
            children: s
          } = e;
          return t ? (0, n.jsx)("a", {
            href: t,
            target: "_blank",
            children: s
          }) : s
        },
        c = e => {
          let {
            items: t,
            text: s = {},
            style: c,
            className: o = "",
            id: g = null
          } = e;
          return t?.length ? (0, n.jsxs)("div", {
            id: g,
            children: [(0, n.jsx)(i.A, {
              style: c,
              className: [o, l.carouselWrapper].join(" "),
              children: t.map((e => (0, n.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, n.jsx)(r.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [l.img, e?.className].join(" ")
                }), e.title && (0, n.jsx)(d, {
                  to: e?.to,
                  children: (0, n.jsx)("h4", {
                    className: l.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, n.jsx)("span", {
                  className: l.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), s?.title || s?.description ? (0, n.jsx)("div", {
              className: l.padding,
              style: s?.style ?? {},
              children: (0, n.jsx)(a.A, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var o = s(14522),
        g = s(31879),
        f = s.n(g),
        m = s(74401);
      const p = e => {
          let {
            impressionTracking: t,
            gtm: s = {},
            children: a
          } = e;
          return t?.shouldTrack ? (0, n.jsx)(o.H, {
            threshold: t?.threshold,
            gtm: s,
            children: a
          }) : a
        },
        u = e => {
          let {
            to: t,
            children: s
          } = e;
          return t ? (0, n.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        b = e => {
          let {
            item: t
          } = e;
          return t?.videoId ? (0, n.jsx)(f(), {
            context: "site",
            autoplay: !1,
            id: t.videoId
          }) : (0, n.jsx)(r.A, {
            image: t?.image,
            badge: t?.badge ?? t?.image?.badge,
            badgeType: "badge3",
            role: t?.role ?? t?.image?.role,
            splitter: t?.splitter ?? t?.image?.splitter,
            type: t?.type,
            ariaLabel: t?.image?.ariaLabel,
            style: t?.style,
            className: t?.className
          })
        },
        y = e => {
          let {
            items: t,
            style: s = {},
            className: r = "",
            id: i = null
          } = e;
          return (0, n.jsx)("div", {
            style: s,
            className: (0, m.classList)("rockstargames-sites-gta-gen9fbb6b44c6d90c22144e4fbed29bc540b", r),
            id: i,
            children: t.map((e => (0, n.jsx)(p, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, n.jsx)(u, {
                to: e?.to,
                children: (0, n.jsxs)("div", {
                  className: (0, m.classList)("rockstargames-sites-gta-gen9c6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, n.jsx)(b, {
                    item: e
                  }) : "", e.title || e.description ? (0, n.jsx)(a.A, {
                    item: e,
                    className: "rockstargames-sites-gta-gen9a953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        h = e => {
          let {
            children: t,
            text: s,
            items: a = [],
            renderTemplate: r,
            style: i,
            id: l = null,
            ...d
          } = e;
          if (!a.length) return null;
          switch (r) {
            case "carousel":
              return (0, n.jsx)(c, {
                text: s,
                items: a,
                style: i,
                id: l,
                children: t
              });
            case "carousel-panorama":
              return (0, n.jsx)(c, {
                text: s,
                items: a,
                style: i,
                className: "panorama",
                id: l,
                children: t
              });
            default:
              return (0, n.jsx)(y, {
                items: a,
                style: i,
                id: l,
                ...d,
                children: t
              })
          }
        }
    },
    14522: (e, t, s) => {
      "use strict";
      s.d(t, {
        H: () => o,
        r: () => d
      });
      var a = s(71403),
        r = s(49948),
        i = s(40207),
        l = s(46632);
      const n = e => {
          let {
            impressionTracking: t,
            gtm: s = {},
            children: a
          } = e;
          return t?.shouldTrack ? (0, l.jsx)(o, {
            threshold: t?.threshold,
            gtm: s,
            children: a
          }) : a
        },
        d = (e, t) => s => ((e, t, s) => (0, l.jsx)(n, {
          impressionTracking: s?.impressionTracking,
          gtm: s?.gtm,
          children: (0, l.jsx)(e, {
            ...t
          })
        }))(e, s, t),
        c = {
          event: "page_section_impression",
          element_placement: null
        },
        o = e => {
          let {
            threshold: t = .6,
            children: s,
            gtm: n = {}
          } = e;
          const {
            track: d
          } = (0, i.useGtmTrack)(), {
            ref: o,
            inView: g
          } = (0, r.useInView)({
            threshold: t,
            trackVisibility: !0,
            delay: 100
          }), [f, m] = (0, a.useState)(!1);
          return (0, a.useEffect)((() => {
            g && !f && (d({
              ...c,
              ...n
            }), m(!0))
          }), [g, o]), (0, l.jsx)("section", {
            ref: o,
            children: s
          })
        }
    }
  }
]);