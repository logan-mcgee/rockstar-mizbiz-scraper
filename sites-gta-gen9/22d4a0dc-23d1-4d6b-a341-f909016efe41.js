try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "22d4a0dc-23d1-4d6b-a341-f909016efe41", e._sentryDebugIdIdentifier = "sentry-dbid-22d4a0dc-23d1-4d6b-a341-f909016efe41")
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
        A: () => c
      });
      var s = a(42295),
        n = a(9623);
      const r = {
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
        l = ({
          children: e,
          className: t,
          onClick: a,
          style: n,
          ariaLabel: r
        }) => (0, s.jsx)("button", {
          className: t,
          onClick: a,
          style: n,
          type: "button",
          "aria-label": r,
          children: e
        }),
        o = ({
          children: e,
          className: t,
          onClick: a,
          style: r,
          to: l,
          ariaLabel: o
        }) => (0, s.jsx)(n.NavLink, {
          className: t,
          onClick: a,
          style: r,
          to: l,
          "aria-label": o,
          children: e
        }),
        c = ({
          btnColor: e = "#fff",
          className: t = "",
          consoleBtn: a,
          icon: n = "",
          img: c,
          labelColor: d = "#000",
          onClick: i,
          secondText: b,
          size: f,
          text: g,
          to: u,
          type: p = "",
          ariaLabel: k
        }) => {
          const m = [r.plusButton, r[p] ?? "", r[f] ?? "", r[a] ?? "", t].join(" "),
            h = {
              "--hvr-color": e ?? d,
              "--hvr-bg-color": d ?? e,
              "--hvr-border-color": e ?? d
            },
            y = (0, s.jsxs)(s.Fragment, {
              children: [c ? (0, s.jsx)("img", {
                src: c,
                alt: ""
              }) : "", (0, s.jsxs)("div", {
                className: r.btnText,
                icon: n,
                children: [g, b ? (0, s.jsx)("span", {
                  children: b
                }) : ""]
              })]
            });
          if (u) {
            if (u.startsWith("http")) {
              const e = u.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("span", {
                onClick: i,
                onKeyDown: i,
                className: m,
                role: "button",
                "aria-label": k,
                tabIndex: 0,
                children: (0, s.jsx)("a", {
                  href: u,
                  target: e,
                  children: y
                })
              })
            }
            return (0, s.jsx)(o, {
              className: m,
              onClick: i,
              style: {
                ...h
              },
              to: u,
              ariaLabel: k,
              children: y
            })
          }
          return (0, s.jsx)(l, {
            className: m,
            onClick: i,
            style: {
              ...h
            },
            ariaLabel: k,
            children: y
          })
        }
    },
    34725: (e, t, a) => {
      a.d(t, {
        C1: () => c,
        S1: () => o,
        XC: () => f,
        jS: () => d,
        qg: () => i,
        z0: () => b
      });
      var s = a(62229),
        n = a(95966),
        r = a(74767);
      const l = e => {
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
          desktop: a = null,
          ariaLabel: o = null,
          sources: c = null,
          prod: d = null
        }) => {
          const i = (0, n.useLocale)(),
            {
              meta: b = {}
            } = (0, r.i)() ?? {},
            [f, g] = (0, s.useState)(d ?? b?.cdn ?? b?.prod ?? !0);
          (0, s.useEffect)(() => {
            g(d ?? b?.cdn ?? b?.prod ?? !0)
          }, [d, b]);
          const u = (0, s.useCallback)(e => {
            const t = null !== c,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return l(a);
            const s = `${t?(0,n.getCdnPrefix)(f):""}${a}`;
            return l(s)
          }, [f, c]);
          return {
            alt: e,
            ariaLabel: o,
            src: {
              mobile: u(c?.[i]?.mobile ?? c?.en_us?.mobile ?? t),
              desktop: u(c?.[i]?.desktop ?? c?.en_us?.desktop ?? a)
            }
          }
        },
        c = e => {
          const t = (0, r.i)() ?? {},
            {
              meta: a = {}
            } = t,
            [o, c] = (0, s.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, s.useEffect)(() => {
            c(a?.cdn ?? a?.prod ?? !1)
          }, [a]), e ? e?.startsWith("http") ? l(e) : l(`${(0,n.getCdnPrefix)(o)}${e}`) : null
        },
        d = () => {
          const e = (0, r.i)() ?? {},
            {
              meta: t = {}
            } = e,
            a = (0, s.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, s.useCallback)((e, t = {}) => {
            const s = t?.prod ?? a;
            return e ? e?.startsWith("http") ? l(e) : l(`${(0,n.getCdnPrefix)(s)}${e}`) : null
          }, [a])
        },
        i = e => e.full_src,
        b = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,n.getCdnPrefix)(!1)}${t}`
        },
        f = e => e.meta.uploads_directory
    },
    74767: (e, t, a) => {
      a.d(t, {
        i: () => c,
        o: () => o
      });
      var s = a(42295),
        n = a(62229);
      const r = (0, a(95966).setContextItem)({
          context: (0, n.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: l
        } = r,
        o = ({
          children: e,
          payload: t
        }) => (0, s.jsx)(l, {
          value: t,
          children: e
        }),
        c = () => (0, n.useContext)(r)
    }
  }
]);