try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "45efd589-f188-4185-a304-9c5b12118bc4", e._sentryDebugIdIdentifier = "sentry-dbid-45efd589-f188-4185-a304-9c5b12118bc4")
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
  [7421], {
    69802(e, o, n) {
      n.r(o), n.d(o, {
        Accordion: () => K,
        AccordionContent: () => re,
        AccordionHeader: () => Z,
        AccordionItem: () => W,
        AccordionTrigger: () => oe,
        Content: () => le,
        Header: () => de,
        Item: () => ie,
        Root: () => te,
        Trigger: () => se,
        createAccordionScope: () => S
      });
      var r = n(93082),
        a = n(1913),
        t = n(85920),
        i = n(64239),
        d = n(2458),
        s = n(17038),
        l = n(31270),
        c = n(10198),
        p = n(7470),
        f = n(94296),
        u = n(39793),
        b = "Collapsible",
        [g, h] = (0, a.A)(b),
        [y, w] = g(b),
        _ = r.forwardRef((e, o) => {
          const {
            __scopeCollapsible: n,
            open: a,
            defaultOpen: t,
            disabled: i,
            onOpenChange: d,
            ...c
          } = e, [p, g] = (0, s.i)({
            prop: a,
            defaultProp: t ?? !1,
            onChange: d,
            caller: b
          });
          return (0, u.jsx)(y, {
            scope: n,
            disabled: i,
            contentId: (0, f.B)(),
            open: p,
            onOpenToggle: r.useCallback(() => g(e => !e), [g]),
            children: (0, u.jsx)(l.sG.div, {
              "data-state": j(p),
              "data-disabled": i ? "" : void 0,
              ...c,
              ref: o
            })
          })
        });
      _.displayName = b;
      var m = "CollapsibleTrigger",
        v = r.forwardRef((e, o) => {
          const {
            __scopeCollapsible: n,
            ...r
          } = e, a = w(m, n);
          return (0, u.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": a.open ? a.contentId : void 0,
            "aria-expanded": a.open || !1,
            "data-state": j(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            disabled: a.disabled,
            ...r,
            ref: o,
            onClick: (0, d.mK)(e.onClick, a.onOpenToggle)
          })
        });
      v.displayName = m;
      var x = "CollapsibleContent",
        A = r.forwardRef((e, o) => {
          const {
            forceMount: n,
            ...r
          } = e, a = w(x, e.__scopeCollapsible);
          return (0, u.jsx)(p.C, {
            present: n || a.open,
            children: ({
              present: e
            }) => (0, u.jsx)(C, {
              ...r,
              ref: o,
              present: e
            })
          })
        });
      A.displayName = x;
      var C = r.forwardRef((e, o) => {
        const {
          __scopeCollapsible: n,
          present: a,
          children: t,
          ...d
        } = e, s = w(x, n), [p, f] = r.useState(a), b = r.useRef(null), g = (0, i.s)(o, b), h = r.useRef(0), y = h.current, _ = r.useRef(0), m = _.current, v = s.open || p, A = r.useRef(v), C = r.useRef(void 0);
        return r.useEffect(() => {
          const e = requestAnimationFrame(() => A.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, c.N)(() => {
          const e = b.current;
          if (e) {
            C.current = C.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const o = e.getBoundingClientRect();
            h.current = o.height, _.current = o.width, A.current || (e.style.transitionDuration = C.current.transitionDuration, e.style.animationName = C.current.animationName), f(a)
          }
        }, [s.open, a]), (0, u.jsx)(l.sG.div, {
          "data-state": j(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !v,
          ...d,
          ref: g,
          style: {
            "--radix-collapsible-content-height": y ? `${y}px` : void 0,
            "--radix-collapsible-content-width": m ? `${m}px` : void 0,
            ...e.style
          },
          children: v && t
        })
      });

      function j(e) {
        return e ? "open" : "closed"
      }
      var k = _,
        R = v,
        I = A,
        N = n(99136),
        D = "Accordion",
        T = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [E, M, O] = (0, t.N)(D),
        [H, S] = (0, a.A)(D, [O, h]),
        G = h(),
        K = r.forwardRef((e, o) => {
          const {
            type: n,
            ...r
          } = e, a = r, t = r;
          return (0, u.jsx)(E.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === n ? (0, u.jsx)(F, {
              ...t,
              ref: o
            }) : (0, u.jsx)(z, {
              ...a,
              ref: o
            })
          })
        });
      K.displayName = D;
      var [P, V] = H(D), [B, L] = H(D, {
        collapsible: !1
      }), z = r.forwardRef((e, o) => {
        const {
          value: n,
          defaultValue: a,
          onValueChange: t = () => {},
          collapsible: i = !1,
          ...d
        } = e, [l, c] = (0, s.i)({
          prop: n,
          defaultProp: a ?? "",
          onChange: t,
          caller: D
        });
        return (0, u.jsx)(P, {
          scope: e.__scopeAccordion,
          value: r.useMemo(() => l ? [l] : [], [l]),
          onItemOpen: c,
          onItemClose: r.useCallback(() => i && c(""), [i, c]),
          children: (0, u.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, u.jsx)(q, {
              ...d,
              ref: o
            })
          })
        })
      }), F = r.forwardRef((e, o) => {
        const {
          value: n,
          defaultValue: a,
          onValueChange: t = () => {},
          ...i
        } = e, [d, l] = (0, s.i)({
          prop: n,
          defaultProp: a ?? [],
          onChange: t,
          caller: D
        }), c = r.useCallback(e => l((o = []) => [...o, e]), [l]), p = r.useCallback(e => l((o = []) => o.filter(o => o !== e)), [l]);
        return (0, u.jsx)(P, {
          scope: e.__scopeAccordion,
          value: d,
          onItemOpen: c,
          onItemClose: p,
          children: (0, u.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, u.jsx)(q, {
              ...i,
              ref: o
            })
          })
        })
      }), [U, $] = H(D), q = r.forwardRef((e, o) => {
        const {
          __scopeAccordion: n,
          disabled: a,
          dir: t,
          orientation: s = "vertical",
          ...c
        } = e, p = r.useRef(null), f = (0, i.s)(p, o), b = M(n), g = "ltr" === (0, N.jH)(t), h = (0, d.mK)(e.onKeyDown, e => {
          if (!T.includes(e.key)) return;
          const o = e.target,
            n = b().filter(e => !e.ref.current?.disabled),
            r = n.findIndex(e => e.ref.current === o),
            a = n.length;
          if (-1 === r) return;
          e.preventDefault();
          let t = r;
          const i = a - 1,
            d = () => {
              t = r + 1, t > i && (t = 0)
            },
            l = () => {
              t = r - 1, t < 0 && (t = i)
            };
          switch (e.key) {
            case "Home":
              t = 0;
              break;
            case "End":
              t = i;
              break;
            case "ArrowRight":
              "horizontal" === s && (g ? d() : l());
              break;
            case "ArrowDown":
              "vertical" === s && d();
              break;
            case "ArrowLeft":
              "horizontal" === s && (g ? l() : d());
              break;
            case "ArrowUp":
              "vertical" === s && l()
          }
          const c = t % a;
          n[c].ref.current?.focus()
        });
        return (0, u.jsx)(U, {
          scope: n,
          disabled: a,
          direction: t,
          orientation: s,
          children: (0, u.jsx)(E.Slot, {
            scope: n,
            children: (0, u.jsx)(l.sG.div, {
              ...c,
              "data-orientation": s,
              ref: f,
              onKeyDown: a ? void 0 : h
            })
          })
        })
      }), Y = "AccordionItem", [J, Q] = H(Y), W = r.forwardRef((e, o) => {
        const {
          __scopeAccordion: n,
          value: r,
          ...a
        } = e, t = $(Y, n), i = V(Y, n), d = G(n), s = (0, f.B)(), l = r && i.value.includes(r) || !1, c = t.disabled || e.disabled;
        return (0, u.jsx)(J, {
          scope: n,
          open: l,
          disabled: c,
          triggerId: s,
          children: (0, u.jsx)(k, {
            "data-orientation": t.orientation,
            "data-state": ae(l),
            ...d,
            ...a,
            ref: o,
            disabled: c,
            open: l,
            onOpenChange: e => {
              e ? i.onItemOpen(r) : i.onItemClose(r)
            }
          })
        })
      });
      W.displayName = Y;
      var X = "AccordionHeader",
        Z = r.forwardRef((e, o) => {
          const {
            __scopeAccordion: n,
            ...r
          } = e, a = $(D, n), t = Q(X, n);
          return (0, u.jsx)(l.sG.h3, {
            "data-orientation": a.orientation,
            "data-state": ae(t.open),
            "data-disabled": t.disabled ? "" : void 0,
            ...r,
            ref: o
          })
        });
      Z.displayName = X;
      var ee = "AccordionTrigger",
        oe = r.forwardRef((e, o) => {
          const {
            __scopeAccordion: n,
            ...r
          } = e, a = $(D, n), t = Q(ee, n), i = L(ee, n), d = G(n);
          return (0, u.jsx)(E.ItemSlot, {
            scope: n,
            children: (0, u.jsx)(R, {
              "aria-disabled": t.open && !i.collapsible || void 0,
              "data-orientation": a.orientation,
              id: t.triggerId,
              ...d,
              ...r,
              ref: o
            })
          })
        });
      oe.displayName = ee;
      var ne = "AccordionContent",
        re = r.forwardRef((e, o) => {
          const {
            __scopeAccordion: n,
            ...r
          } = e, a = $(D, n), t = Q(ne, n), i = G(n);
          return (0, u.jsx)(I, {
            role: "region",
            "aria-labelledby": t.triggerId,
            "data-orientation": a.orientation,
            ...i,
            ...r,
            ref: o,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        });

      function ae(e) {
        return e ? "open" : "closed"
      }
      re.displayName = ne;
      var te = K,
        ie = W,
        de = Z,
        se = oe,
        le = re
    }
  }
]);