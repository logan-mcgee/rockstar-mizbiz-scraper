try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "58473b49-637d-47c4-b7ed-e4f709028a03", e._sentryDebugIdIdentifier = "sentry-dbid-58473b49-637d-47c4-b7ed-e4f709028a03")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1488], {
    22682(e, a, t) {
      t.d(a, {
        A: () => b
      });
      var s = t(39793),
        n = t(36416),
        l = t(8830),
        r = t(42909);
      const o = (0, r.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        i = {
          blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
          btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
          btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
          iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
          link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
          pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844",
          pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
          plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
          ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
          ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
          selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
          small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
          transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
          whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
          xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
          xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999"
        },
        d = ({
          children: e,
          className: a,
          onClick: t,
          style: n,
          ariaLabel: l
        }) => (0, s.jsx)("button", {
          className: a,
          onClick: t,
          style: n,
          type: "button",
          "aria-label": l,
          children: e
        }),
        c = ({
          children: e,
          className: a,
          onClick: t,
          style: l,
          to: r,
          ariaLabel: o
        }) => (0, s.jsx)(n.NavLink, {
          className: a,
          onClick: t,
          style: l,
          to: r,
          "aria-label": o,
          children: e
        }),
        b = ({
          btnColor: e = "#fff",
          className: a = "",
          consoleBtn: t,
          icon: n = "",
          img: b,
          labelColor: g = "#000",
          onClick: f,
          secondText: u,
          size: p,
          text: m,
          to: k,
          type: y = "",
          ariaLabel: h
        }) => {
          const {
            formatMessage: w
          } = (0, r.useIntl)(), _ = [i.plusButton, i[y] ?? "", i[p] ?? "", i[t] ?? "", a].join(" "), x = {
            "--hvr-color": e ?? g,
            "--hvr-bg-color": g ?? e,
            "--hvr-border-color": e ?? g
          }, C = (0, s.jsxs)(s.Fragment, {
            children: [b ? (0, s.jsx)("img", {
              src: b,
              alt: ""
            }) : "", (0, s.jsxs)("div", {
              className: i.btnText,
              icon: n,
              children: [m, u ? (0, s.jsx)("span", {
                children: u
              }) : ""]
            })]
          });
          if (k) {
            if (k.startsWith("http")) {
              const e = k.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsxs)("a", {
                href: k,
                target: e,
                onClick: f,
                onKeyDown: f,
                className: _,
                "aria-label": h,
                tabIndex: 0,
                children: [C, "_blank" === e && (0, s.jsx)(l.ExternalLink, {
                  label: w(o.aria_label_open_new_window)
                })]
              })
            }
            return (0, s.jsx)(c, {
              className: _,
              onClick: f,
              style: {
                ...x
              },
              to: k,
              ariaLabel: h,
              children: C
            })
          }
          return (0, s.jsx)(d, {
            className: _,
            onClick: f,
            style: {
              ...x
            },
            ariaLabel: h,
            children: C
          })
        }
    },
    54563(e, a, t) {
      t.d(a, {
        i: () => i,
        o: () => o
      });
      var s = t(39793),
        n = t(93082);
      const l = (0, t(13331).setContextItem)({
          context: (0, n.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: r
        } = l,
        o = ({
          children: e,
          payload: a
        }) => (0, s.jsx)(r, {
          value: a,
          children: e
        }),
        i = () => (0, n.useContext)(l)
    },
    25993(e, a, t) {
      t.d(a, {
        C1: () => i,
        S1: () => o,
        XC: () => g,
        jS: () => d,
        qg: () => c,
        z0: () => b
      });
      var s = t(93082),
        n = t(13331),
        l = t(54563);
      const r = e => {
          if (!e) return null;
          const {
            hostname: a,
            pathname: t
          } = new URL(e, (0, n.getCdnPrefix)(!0));
          return "/" === t ? null : (a.endsWith(".akamaized.net"), e)
        },
        o = ({
          alt: e = null,
          mobile: a = null,
          imageMobileStyle: t = {},
          desktop: o = null,
          imageDesktopStyle: i = {},
          ariaLabel: d = null,
          sources: c = null,
          prod: b = null
        }) => {
          const g = (0, n.useLocale)(),
            {
              meta: f = {}
            } = (0, l.i)() ?? {},
            [u, p] = (0, s.useState)(b ?? f?.cdn ?? f?.prod ?? !0);
          (0, s.useEffect)(() => {
            p(b ?? f?.cdn ?? f?.prod ?? !0)
          }, [b, f]);
          const m = (0, s.useCallback)(e => {
            const a = null !== c,
              t = e?.previewSrc ?? e ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return r(t);
            const s = `${a?(0,n.getCdnPrefix)(u):""}${t}`;
            return r(s)
          }, [u, c]);
          return {
            alt: e,
            ariaLabel: d,
            src: {
              mobile: m(c?.[g]?.mobile ?? c?.en_us?.mobile ?? a),
              imageMobileStyle: c?.[g]?.imageMobileStyle ?? c?.en_us?.imageMobileStyle ?? t,
              imageDesktopStyle: c?.[g]?.imageDesktopStyle ?? c?.en_us?.imageDesktopStyle ?? i,
              desktop: m(c?.[g]?.desktop ?? c?.en_us?.desktop ?? o)
            }
          }
        },
        i = e => {
          const a = (0, l.i)() ?? {},
            {
              meta: t = {}
            } = a,
            [o, i] = (0, s.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, s.useEffect)(() => {
            i(t?.cdn ?? t?.prod ?? !1)
          }, [t]), e ? e?.startsWith("http") ? r(e) : r(`${(0,n.getCdnPrefix)(o)}${e}`) : null
        },
        d = () => {
          const e = (0, l.i)() ?? {},
            {
              meta: a = {}
            } = e,
            t = (0, s.useMemo)(() => a?.cdn ?? a?.prod ?? !1, [a]);
          return (0, s.useCallback)((e, a = {}) => {
            const s = a?.prod ?? t;
            return e ? e?.startsWith("http") ? r(e) : r(`${(0,n.getCdnPrefix)(s)}${e}`) : null
          }, [t])
        },
        c = e => e.full_src,
        b = e => {
          const a = e?.previewSrc ?? e?.preview_src ?? e;
          return a?.startsWith("http") ? a : `${(0,n.getCdnPrefix)(!1)}${a}`
        },
        g = e => e.meta.uploads_directory
    }
  }
]);