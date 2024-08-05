! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "bb82729a-66b5-45ef-8d03-a7abc5355583", e._sentryDebugIdIdentifier = "sentry-dbid-bb82729a-66b5-45ef-8d03-a7abc5355583")
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
  [8500], {
    18500: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => y
      });
      var a = t(26371),
        l = t(8999),
        r = t(21450);
      const i = {
        padding: "rockstargames-sites-gta-gen9e1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-sites-gta-gen9daf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-sites-gta-gen9ffab2486abb58ef9090c19d6d5bdd44c"
      };
      var d = t(46632);
      const n = e => {
          let {
            to: s,
            children: t
          } = e;
          return s ? (0, d.jsx)("a", {
            href: s,
            target: "_blank",
            children: t
          }) : t
        },
        c = e => {
          let {
            items: s,
            text: t = {},
            style: c,
            className: o = "",
            id: g = null
          } = e;
          return s?.length ? (0, d.jsxs)("div", {
            id: g,
            children: [(0, d.jsx)(r.A, {
              style: c,
              className: [o, i.carouselWrapper].join(" "),
              children: s.map((e => (0, d.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, d.jsx)(l.A, {
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
            }), t?.title || t?.description ? (0, d.jsx)("div", {
              className: i.padding,
              style: t?.style ?? {},
              children: (0, d.jsx)(a.A, {
                item: t
              })
            }) : ""]
          }) : null
        };
      var o = t(14522),
        g = t(31879),
        m = t.n(g),
        f = t(74401);
      const b = e => {
          let {
            impressionTracking: s,
            gtm: t = {},
            children: a
          } = e;
          return s?.shouldTrack ? (0, d.jsx)(o.H, {
            threshold: s?.threshold,
            gtm: t,
            children: a
          }) : a
        },
        p = e => {
          let {
            to: s,
            children: t
          } = e;
          return s ? (0, d.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        u = e => {
          let {
            item: s
          } = e;
          return s?.videoId ? (0, d.jsx)(m(), {
            context: "site",
            autoplay: !1,
            id: s.videoId
          }) : (0, d.jsx)(l.A, {
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
            style: t = {},
            className: l = "",
            id: r = null
          } = e;
          return (0, d.jsx)("div", {
            style: t,
            className: (0, f.classList)("rockstargames-sites-gta-gen9fbb6b44c6d90c22144e4fbed29bc540b", l),
            id: r,
            children: s.map((e => (0, d.jsx)(b, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, d.jsx)(p, {
                to: e?.to,
                children: (0, d.jsxs)("div", {
                  className: (0, f.classList)("rockstargames-sites-gta-gen9c6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, d.jsx)(u, {
                    item: e
                  }) : "", e.title || e.description ? (0, d.jsx)(a.A, {
                    item: e,
                    className: "rockstargames-sites-gta-gen9a953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        y = e => {
          let {
            children: s,
            text: t,
            items: a = [],
            renderTemplate: l,
            style: r,
            id: i = null,
            ...n
          } = e;
          if (!a.length) return null;
          switch (l) {
            case "carousel":
              return (0, d.jsx)(c, {
                text: t,
                items: a,
                style: r,
                id: i,
                children: s
              });
            case "carousel-panorama":
              return (0, d.jsx)(c, {
                text: t,
                items: a,
                style: r,
                className: "panorama",
                id: i,
                children: s
              });
            default:
              return (0, d.jsx)(h, {
                items: a,
                style: r,
                id: i,
                ...n,
                children: s
              })
          }
        }
    },
    14522: (e, s, t) => {
      t.d(s, {
        H: () => o,
        r: () => n
      });
      var a = t(71403),
        l = t(49948),
        r = t(40207),
        i = t(46632);
      const d = e => {
          let {
            impressionTracking: s,
            gtm: t = {},
            children: a
          } = e;
          return s?.shouldTrack ? (0, i.jsx)(o, {
            threshold: s?.threshold,
            gtm: t,
            children: a
          }) : a
        },
        n = (e, s) => t => ((e, s, t) => (0, i.jsx)(d, {
          impressionTracking: t?.impressionTracking,
          gtm: t?.gtm,
          children: (0, i.jsx)(e, {
            ...s
          })
        }))(e, t, s),
        c = {
          event: "page_section_impression",
          element_placement: null
        },
        o = e => {
          let {
            threshold: s = .6,
            children: t,
            gtm: d = {}
          } = e;
          const {
            track: n
          } = (0, r.useGtmTrack)(), {
            ref: o,
            inView: g
          } = (0, l.useInView)({
            threshold: s,
            trackVisibility: !0,
            delay: 100
          }), [m, f] = (0, a.useState)(!1);
          return (0, a.useEffect)((() => {
            g && !m && (n({
              ...c,
              ...d
            }), f(!0))
          }), [g, o]), (0, i.jsx)("section", {
            ref: o,
            children: t
          })
        }
    }
  }
]);