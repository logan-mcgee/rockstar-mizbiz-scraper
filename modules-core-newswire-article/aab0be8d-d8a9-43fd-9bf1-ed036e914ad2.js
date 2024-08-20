! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "aab0be8d-d8a9-43fd-9bf1-ed036e914ad2", e._sentryDebugIdIdentifier = "sentry-dbid-aab0be8d-d8a9-43fd-9bf1-ed036e914ad2")
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
  [8500, 6119], {
    18500: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => y
      });
      var t = a(26371),
        r = a(8999),
        l = a(21450);
      const i = {
        padding: "rockstargames-modules-core-newswire-articlee1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-modules-core-newswire-articledaf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-modules-core-newswire-articleffab2486abb58ef9090c19d6d5bdd44c"
      };
      var d = a(46632);
      const n = e => {
          let {
            to: s,
            children: a
          } = e;
          return s ? (0, d.jsx)("a", {
            href: s,
            target: "_blank",
            children: a
          }) : a
        },
        c = e => {
          let {
            items: s,
            text: a = {},
            style: c,
            className: o = "",
            id: m = null
          } = e;
          return s?.length ? (0, d.jsxs)("div", {
            id: m,
            children: [(0, d.jsx)(l.A, {
              style: c,
              className: [o, i.carouselWrapper].join(" "),
              children: s.map((e => (0, d.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, d.jsx)(r.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [i.img, e?.className].join(" ")
                }), e.title && (0, d.jsx)(n, {
                  to: e?.to,
                  children: (0, d.jsx)("h4", {
                    className: i.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, d.jsx)("span", {
                  className: i.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), a?.title || a?.description ? (0, d.jsx)("div", {
              className: i.padding,
              style: a?.style ?? {},
              children: (0, d.jsx)(t.A, {
                item: a
              })
            }) : ""]
          }) : null
        };
      var o = a(14522),
        m = a(31879),
        g = a.n(m),
        f = a(74401);
      const b = e => {
          let {
            impressionTracking: s,
            gtm: a = {},
            children: t
          } = e;
          return s?.shouldTrack ? (0, d.jsx)(o.H, {
            threshold: s?.threshold,
            gtm: a,
            children: t
          }) : t
        },
        u = e => {
          let {
            to: s,
            children: a
          } = e;
          return s ? (0, d.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        p = e => {
          let {
            item: s
          } = e;
          return s?.videoId ? (0, d.jsx)(g(), {
            context: "site",
            autoplay: !1,
            id: s.videoId
          }) : (0, d.jsx)(r.A, {
            image: s?.image,
            badge: s?.badge ?? s?.image?.badge,
            badgeType: "badge3",
            role: s?.role ?? s?.image?.role,
            splitter: s?.splitter ?? s?.image?.splitter,
            type: s?.type,
            ariaLabel: s?.image?.ariaLabel,
            style: s?.style,
            className: s?.className
          })
        },
        h = e => {
          let {
            items: s,
            style: a = {},
            className: r = "",
            id: l = null
          } = e;
          return (0, d.jsx)("div", {
            style: a,
            className: (0, f.classList)("rockstargames-modules-core-newswire-articlefbb6b44c6d90c22144e4fbed29bc540b", r),
            id: l,
            children: s.map((e => (0, d.jsx)(b, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, d.jsx)(u, {
                to: e?.to,
                children: (0, d.jsxs)("div", {
                  className: (0, f.classList)("rockstargames-modules-core-newswire-articlec6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, d.jsx)(p, {
                    item: e
                  }) : "", e.title || e.description ? (0, d.jsx)(t.A, {
                    item: e,
                    className: "rockstargames-modules-core-newswire-articlea953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        y = e => {
          let {
            children: s,
            text: a,
            items: t = [],
            renderTemplate: r,
            style: l,
            id: i = null,
            ...n
          } = e;
          if (!t.length) return null;
          switch (r) {
            case "carousel":
              return (0, d.jsx)(c, {
                text: a,
                items: t,
                style: l,
                id: i,
                children: s
              });
            case "carousel-panorama":
              return (0, d.jsx)(c, {
                text: a,
                items: t,
                style: l,
                className: "panorama",
                id: i,
                children: s
              });
            default:
              return (0, d.jsx)(h, {
                items: t,
                style: l,
                id: i,
                ...n,
                children: s
              })
          }
        }
    },
    14522: (e, s, a) => {
      a.d(s, {
        H: () => o,
        r: () => n
      });
      var t = a(71403),
        r = a(300),
        l = a(40207),
        i = a(46632);
      const d = e => {
          let {
            impressionTracking: s,
            gtm: a = {},
            children: t
          } = e;
          return s?.shouldTrack ? (0, i.jsx)(o, {
            threshold: s?.threshold,
            gtm: a,
            children: t
          }) : t
        },
        n = (e, s) => a => ((e, s, a) => (0, i.jsx)(d, {
          impressionTracking: a?.impressionTracking,
          gtm: a?.gtm,
          children: (0, i.jsx)(e, {
            ...s
          })
        }))(e, a, s),
        c = {
          event: "page_section_impression",
          element_placement: null
        },
        o = e => {
          let {
            threshold: s = .6,
            children: a,
            gtm: d = {}
          } = e;
          const {
            track: n
          } = (0, l.useGtmTrack)(), {
            ref: o,
            inView: m
          } = (0, r.Wx)({
            threshold: s,
            trackVisibility: !0,
            delay: 100
          }), [g, f] = (0, t.useState)(!1);
          return (0, t.useEffect)((() => {
            m && !g && (n({
              ...c,
              ...d
            }), f(!0))
          }), [m, o]), (0, i.jsx)("section", {
            ref: o,
            children: a
          })
        }
    }
  }
]);