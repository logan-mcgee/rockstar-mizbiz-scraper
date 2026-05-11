try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8ecb0077-5bb3-42e4-bdf0-def83f76834c", e._sentryDebugIdIdentifier = "sentry-dbid-8ecb0077-5bb3-42e4-bdf0-def83f76834c")
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
  [8329], {
    90710(e, n, o) {
      o.r(n), o.d(n, {
        Accordion: () => K,
        AccordionContent: () => te,
        AccordionHeader: () => Z,
        AccordionItem: () => W,
        AccordionTrigger: () => ne,
        Content: () => le,
        Header: () => se,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => de,
        createAccordionScope: () => S
      });
      var t = o(71127),
        r = o(85426),
        a = o(13165),
        i = o(95362),
        s = o(94118),
        d = o(53054),
        l = o(62228),
        c = o(63155),
        f = o(53146),
        u = o(86126),
        p = o(42295),
        b = "Collapsible",
        [g, h] = (0, r.A)(b),
        [y, w] = g(b),
        _ = t.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            open: r,
            defaultOpen: a,
            disabled: i,
            onOpenChange: s,
            ...c
          } = e, [f, g] = (0, d.i)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: s,
            caller: b
          });
          return (0, p.jsx)(y, {
            scope: o,
            disabled: i,
            contentId: (0, u.B)(),
            open: f,
            onOpenToggle: t.useCallback(() => g(e => !e), [g]),
            children: (0, p.jsx)(l.sG.div, {
              "data-state": j(f),
              "data-disabled": i ? "" : void 0,
              ...c,
              ref: n
            })
          })
        });
      _.displayName = b;
      var m = "CollapsibleTrigger",
        v = t.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            ...t
          } = e, r = w(m, o);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": r.contentId,
            "aria-expanded": r.open || !1,
            "data-state": j(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...t,
            ref: n,
            onClick: (0, s.mK)(e.onClick, r.onOpenToggle)
          })
        });
      v.displayName = m;
      var x = "CollapsibleContent",
        A = t.forwardRef((e, n) => {
          const {
            forceMount: o,
            ...t
          } = e, r = w(x, e.__scopeCollapsible);
          return (0, p.jsx)(f.C, {
            present: o || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(C, {
              ...t,
              ref: n,
              present: e
            })
          })
        });
      A.displayName = x;
      var C = t.forwardRef((e, n) => {
        const {
          __scopeCollapsible: o,
          present: r,
          children: a,
          ...s
        } = e, d = w(x, o), [f, u] = t.useState(r), b = t.useRef(null), g = (0, i.s)(n, b), h = t.useRef(0), y = h.current, _ = t.useRef(0), m = _.current, v = d.open || f, A = t.useRef(v), C = t.useRef(void 0);
        return t.useEffect(() => {
          const e = requestAnimationFrame(() => A.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, c.N)(() => {
          const e = b.current;
          if (e) {
            C.current = C.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            h.current = n.height, _.current = n.width, A.current || (e.style.transitionDuration = C.current.transitionDuration, e.style.animationName = C.current.animationName), u(r)
          }
        }, [d.open, r]), (0, p.jsx)(l.sG.div, {
          "data-state": j(d.open),
          "data-disabled": d.disabled ? "" : void 0,
          id: d.contentId,
          hidden: !v,
          ...s,
          ref: g,
          style: {
            "--radix-collapsible-content-height": y ? `${y}px` : void 0,
            "--radix-collapsible-content-width": m ? `${m}px` : void 0,
            ...e.style
          },
          children: v && a
        })
      });

      function j(e) {
        return e ? "open" : "closed"
      }
      var k = _,
        R = v,
        I = A,
        N = o(77768),
        D = "Accordion",
        T = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [E, M, O] = (0, a.N)(D),
        [H, S] = (0, r.A)(D, [O, h]),
        G = h(),
        K = t.forwardRef((e, n) => {
          const {
            type: o,
            ...t
          } = e, r = t, a = t;
          return (0, p.jsx)(E.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === o ? (0, p.jsx)(F, {
              ...a,
              ref: n
            }) : (0, p.jsx)(z, {
              ...r,
              ref: n
            })
          })
        });
      K.displayName = D;
      var [P, V] = H(D), [B, L] = H(D, {
        collapsible: !1
      }), z = t.forwardRef((e, n) => {
        const {
          value: o,
          defaultValue: r,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...s
        } = e, [l, c] = (0, d.i)({
          prop: o,
          defaultProp: r ?? "",
          onChange: a,
          caller: D
        });
        return (0, p.jsx)(P, {
          scope: e.__scopeAccordion,
          value: t.useMemo(() => l ? [l] : [], [l]),
          onItemOpen: c,
          onItemClose: t.useCallback(() => i && c(""), [i, c]),
          children: (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(q, {
              ...s,
              ref: n
            })
          })
        })
      }), F = t.forwardRef((e, n) => {
        const {
          value: o,
          defaultValue: r,
          onValueChange: a = () => {},
          ...i
        } = e, [s, l] = (0, d.i)({
          prop: o,
          defaultProp: r ?? [],
          onChange: a,
          caller: D
        }), c = t.useCallback(e => l((n = []) => [...n, e]), [l]), f = t.useCallback(e => l((n = []) => n.filter(n => n !== e)), [l]);
        return (0, p.jsx)(P, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: c,
          onItemClose: f,
          children: (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(q, {
              ...i,
              ref: n
            })
          })
        })
      }), [U, $] = H(D), q = t.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          disabled: r,
          dir: a,
          orientation: d = "vertical",
          ...c
        } = e, f = t.useRef(null), u = (0, i.s)(f, n), b = M(o), g = "ltr" === (0, N.jH)(a), h = (0, s.mK)(e.onKeyDown, e => {
          if (!T.includes(e.key)) return;
          const n = e.target,
            o = b().filter(e => !e.ref.current?.disabled),
            t = o.findIndex(e => e.ref.current === n),
            r = o.length;
          if (-1 === t) return;
          e.preventDefault();
          let a = t;
          const i = r - 1,
            s = () => {
              a = t + 1, a > i && (a = 0)
            },
            l = () => {
              a = t - 1, a < 0 && (a = i)
            };
          switch (e.key) {
            case "Home":
              a = 0;
              break;
            case "End":
              a = i;
              break;
            case "ArrowRight":
              "horizontal" === d && (g ? s() : l());
              break;
            case "ArrowDown":
              "vertical" === d && s();
              break;
            case "ArrowLeft":
              "horizontal" === d && (g ? l() : s());
              break;
            case "ArrowUp":
              "vertical" === d && l()
          }
          const c = a % r;
          o[c].ref.current?.focus()
        });
        return (0, p.jsx)(U, {
          scope: o,
          disabled: r,
          direction: a,
          orientation: d,
          children: (0, p.jsx)(E.Slot, {
            scope: o,
            children: (0, p.jsx)(l.sG.div, {
              ...c,
              "data-orientation": d,
              ref: u,
              onKeyDown: r ? void 0 : h
            })
          })
        })
      }), Y = "AccordionItem", [J, Q] = H(Y), W = t.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          value: t,
          ...r
        } = e, a = $(Y, o), i = V(Y, o), s = G(o), d = (0, u.B)(), l = t && i.value.includes(t) || !1, c = a.disabled || e.disabled;
        return (0, p.jsx)(J, {
          scope: o,
          open: l,
          disabled: c,
          triggerId: d,
          children: (0, p.jsx)(k, {
            "data-orientation": a.orientation,
            "data-state": re(l),
            ...s,
            ...r,
            ref: n,
            disabled: c,
            open: l,
            onOpenChange: e => {
              e ? i.onItemOpen(t) : i.onItemClose(t)
            }
          })
        })
      });
      W.displayName = Y;
      var X = "AccordionHeader",
        Z = t.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = $(D, o), a = Q(X, o);
          return (0, p.jsx)(l.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": re(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...t,
            ref: n
          })
        });
      Z.displayName = X;
      var ee = "AccordionTrigger",
        ne = t.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = $(D, o), a = Q(ee, o), i = L(ee, o), s = G(o);
          return (0, p.jsx)(E.ItemSlot, {
            scope: o,
            children: (0, p.jsx)(R, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": r.orientation,
              id: a.triggerId,
              ...s,
              ...t,
              ref: n
            })
          })
        });
      ne.displayName = ee;
      var oe = "AccordionContent",
        te = t.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = $(D, o), a = Q(oe, o), i = G(o);
          return (0, p.jsx)(I, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": r.orientation,
            ...i,
            ...t,
            ref: n,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        });

      function re(e) {
        return e ? "open" : "closed"
      }
      te.displayName = oe;
      var ae = K,
        ie = W,
        se = Z,
        de = ne,
        le = te
    },
    95362(e, n, o) {
      o.d(n, {
        s: () => i,
        t: () => a
      });
      var t = o(71127);

      function r(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let o = !1;
          const t = e.map(e => {
            const t = r(e, n);
            return o || "function" != typeof t || (o = !0), t
          });
          if (o) return () => {
            for (let n = 0; n < t.length; n++) {
              const o = t[n];
              "function" == typeof o ? o() : r(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return t.useCallback(a(...e), e)
      }
    }
  }
]);