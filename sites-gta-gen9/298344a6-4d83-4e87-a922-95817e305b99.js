try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "298344a6-4d83-4e87-a922-95817e305b99", e._sentryDebugIdIdentifier = "sentry-dbid-298344a6-4d83-4e87-a922-95817e305b99")
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
  [216], {
    26732: (e, t, a) => {
      a.d(t, {
        A: () => i
      });
      var s = a(42295),
        n = a(10181);
      const l = {
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
        r = ({
          children: e,
          className: t,
          onClick: a,
          style: n,
          ariaLabel: l
        }) => (0, s.jsx)("button", {
          className: t,
          onClick: a,
          style: n,
          type: "button",
          "aria-label": l,
          children: e
        }),
        o = ({
          children: e,
          className: t,
          onClick: a,
          style: l,
          to: r,
          ariaLabel: o
        }) => (0, s.jsx)(n.NavLink, {
          className: t,
          onClick: a,
          style: l,
          to: r,
          "aria-label": o,
          children: e
        }),
        i = ({
          btnColor: e = "#fff",
          className: t = "",
          consoleBtn: a,
          icon: n = "",
          img: i,
          labelColor: c = "#000",
          onClick: d,
          secondText: b,
          size: g,
          text: f,
          to: u,
          type: m = "",
          ariaLabel: p
        }) => {
          const k = [l.plusButton, l[m] ?? "", l[g] ?? "", l[a] ?? "", t].join(" "),
            y = {
              "--hvr-color": e ?? c,
              "--hvr-bg-color": c ?? e,
              "--hvr-border-color": e ?? c
            },
            h = (0, s.jsxs)(s.Fragment, {
              children: [i ? (0, s.jsx)("img", {
                src: i,
                alt: ""
              }) : "", (0, s.jsxs)("div", {
                className: l.btnText,
                icon: n,
                children: [f, b ? (0, s.jsx)("span", {
                  children: b
                }) : ""]
              })]
            });
          if (u) {
            if (u.startsWith("http")) {
              const e = u.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("a", {
                href: u,
                target: e,
                onClick: d,
                onKeyDown: d,
                className: k,
                "aria-label": p,
                tabIndex: 0,
                children: h
              })
            }
            return (0, s.jsx)(o, {
              className: k,
              onClick: d,
              style: {
                ...y
              },
              to: u,
              ariaLabel: p,
              children: h
            })
          }
          return (0, s.jsx)(r, {
            className: k,
            onClick: d,
            style: {
              ...y
            },
            ariaLabel: p,
            children: h
          })
        }
    },
    34725: (e, t, a) => {
      a.d(t, {
        C1: () => i,
        S1: () => o,
        XC: () => g,
        jS: () => c,
        qg: () => d,
        z0: () => b
      });
      var s = a(71127),
        n = a(58136),
        l = a(74767);
      const r = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: a
          } = new URL(e, (0, n.getCdnPrefix)(!0));
          return "/" === a ? null : (t.endsWith(".akamaized.net"), e)
        },
        o = ({
          alt: e = null,
          mobile: t = null,
          imageMobileStyle: a = {},
          desktop: o = null,
          imageDesktopStyle: i = {},
          ariaLabel: c = null,
          sources: d = null,
          prod: b = null
        }) => {
          const g = (0, n.useLocale)(),
            {
              meta: f = {}
            } = (0, l.i)() ?? {},
            [u, m] = (0, s.useState)(b ?? f?.cdn ?? f?.prod ?? !0);
          (0, s.useEffect)(() => {
            m(b ?? f?.cdn ?? f?.prod ?? !0)
          }, [b, f]);
          const p = (0, s.useCallback)(e => {
            const t = null !== d,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return r(a);
            const s = `${t?(0,n.getCdnPrefix)(u):""}${a}`;
            return r(s)
          }, [u, d]);
          return {
            alt: e,
            ariaLabel: c,
            src: {
              mobile: p(d?.[g]?.mobile ?? d?.en_us?.mobile ?? t),
              imageMobileStyle: d?.[g]?.imageMobileStyle ?? d?.en_us?.imageMobileStyle ?? a,
              imageDesktopStyle: d?.[g]?.imageDesktopStyle ?? d?.en_us?.imageDesktopStyle ?? i,
              desktop: p(d?.[g]?.desktop ?? d?.en_us?.desktop ?? o)
            }
          }
        },
        i = e => {
          const t = (0, l.i)() ?? {},
            {
              meta: a = {}
            } = t,
            [o, i] = (0, s.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, s.useEffect)(() => {
            i(a?.cdn ?? a?.prod ?? !1)
          }, [a]), e ? e?.startsWith("http") ? r(e) : r(`${(0,n.getCdnPrefix)(o)}${e}`) : null
        },
        c = () => {
          const e = (0, l.i)() ?? {},
            {
              meta: t = {}
            } = e,
            a = (0, s.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, s.useCallback)((e, t = {}) => {
            const s = t?.prod ?? a;
            return e ? e?.startsWith("http") ? r(e) : r(`${(0,n.getCdnPrefix)(s)}${e}`) : null
          }, [a])
        },
        d = e => e.full_src,
        b = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,n.getCdnPrefix)(!1)}${t}`
        },
        g = e => e.meta.uploads_directory
    },
    74767: (e, t, a) => {
      a.d(t, {
        i: () => i,
        o: () => o
      });
      var s = a(42295),
        n = a(71127);
      const l = (0, a(58136).setContextItem)({
          context: (0, n.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: r
        } = l,
        o = ({
          children: e,
          payload: t
        }) => (0, s.jsx)(r, {
          value: t,
          children: e
        }),
        i = () => (0, n.useContext)(l)
    }
  }
]);