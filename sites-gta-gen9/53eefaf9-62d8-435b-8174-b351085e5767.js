try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "53eefaf9-62d8-435b-8174-b351085e5767", e._sentryDebugIdIdentifier = "sentry-dbid-53eefaf9-62d8-435b-8174-b351085e5767")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [954, 6403, 8784], {
    21423: (e, n, r) => {
      r.d(n, {
        s: () => i,
        t: () => a
      });
      var t = r(62229);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let r = !1;
          const t = e.map((e => {
            const t = o(e, n);
            return r || "function" != typeof t || (r = !0), t
          }));
          if (r) return () => {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              "function" == typeof r ? r() : o(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return t.useCallback(a(...e), e)
      }
    },
    48784: (e, n, r) => {
      r.r(n), r.d(n, {
        Accordion: () => $,
        AccordionContent: () => te,
        AccordionHeader: () => Q,
        AccordionItem: () => Z,
        AccordionTrigger: () => ne,
        Content: () => de,
        Header: () => le,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => se,
        createAccordionScope: () => M
      });
      var t = r(62229),
        o = r(91173),
        a = r(50438),
        i = r(21423),
        l = r(22517),
        s = r(48087),
        d = r(51347),
        c = r(92600),
        f = r(79315),
        u = r(95187),
        p = r(70954),
        b = "Collapsible",
        [y, g] = (0, o.A)(b),
        [h, m] = y(b),
        _ = t.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: r,
            open: o,
            defaultOpen: a,
            disabled: i,
            onOpenChange: l,
            ...c
          } = e, [f, y] = (0, s.i)({
            prop: o,
            defaultProp: a ?? !1,
            onChange: l,
            caller: b
          });
          return (0, p.jsx)(h, {
            scope: r,
            disabled: i,
            contentId: (0, u.B)(),
            open: f,
            onOpenToggle: t.useCallback((() => y((e => !e))), [y]),
            children: (0, p.jsx)(d.sG.div, {
              "data-state": j(f),
              "data-disabled": i ? "" : void 0,
              ...c,
              ref: n
            })
          })
        }));
      _.displayName = b;
      var w = "CollapsibleTrigger",
        v = t.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: r,
            ...t
          } = e, o = m(w, r);
          return (0, p.jsx)(d.sG.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": j(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...t,
            ref: n,
            onClick: (0, l.m)(e.onClick, o.onOpenToggle)
          })
        }));
      v.displayName = w;
      var x = "CollapsibleContent",
        C = t.forwardRef(((e, n) => {
          const {
            forceMount: r,
            ...t
          } = e, o = m(x, e.__scopeCollapsible);
          return (0, p.jsx)(f.C, {
            present: r || o.open,
            children: ({
              present: e
            }) => (0, p.jsx)(A, {
              ...t,
              ref: n,
              present: e
            })
          })
        }));
      C.displayName = x;
      var A = t.forwardRef(((e, n) => {
        const {
          __scopeCollapsible: r,
          present: o,
          children: a,
          ...l
        } = e, s = m(x, r), [f, u] = t.useState(o), b = t.useRef(null), y = (0, i.s)(n, b), g = t.useRef(0), h = g.current, _ = t.useRef(0), w = _.current, v = s.open || f, C = t.useRef(v), A = t.useRef(void 0);
        return t.useEffect((() => {
          const e = requestAnimationFrame((() => C.current = !1));
          return () => cancelAnimationFrame(e)
        }), []), (0, c.N)((() => {
          const e = b.current;
          if (e) {
            A.current = A.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            g.current = n.height, _.current = n.width, C.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), u(o)
          }
        }), [s.open, o]), (0, p.jsx)(d.sG.div, {
          "data-state": j(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !v,
          ...l,
          ref: y,
          style: {
            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
          },
          children: v && a
        })
      }));

      function j(e) {
        return e ? "open" : "closed"
      }
      var R = _,
        k = v,
        I = C,
        N = r(59219),
        E = "Accordion",
        O = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [D, S, T] = (0, a.N)(E),
        [P, M] = (0, o.A)(E, [T, g]),
        V = g(),
        $ = t.forwardRef(((e, n) => {
          const {
            type: r,
            ...t
          } = e, o = t, a = t;
          return (0, p.jsx)(D.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, p.jsx)(W, {
              ...a,
              ref: n
            }) : (0, p.jsx)(B, {
              ...o,
              ref: n
            })
          })
        }));
      $.displayName = E;
      var [L, F] = P(E), [G, H] = P(E, {
        collapsible: !1
      }), B = t.forwardRef(((e, n) => {
        const {
          value: r,
          defaultValue: o,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...l
        } = e, [d, c] = (0, s.i)({
          prop: r,
          defaultProp: o ?? "",
          onChange: a,
          caller: E
        });
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: t.useMemo((() => d ? [d] : []), [d]),
          onItemOpen: c,
          onItemClose: t.useCallback((() => i && c("")), [i, c]),
          children: (0, p.jsx)(G, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(K, {
              ...l,
              ref: n
            })
          })
        })
      })), W = t.forwardRef(((e, n) => {
        const {
          value: r,
          defaultValue: o,
          onValueChange: a = () => {},
          ...i
        } = e, [l, d] = (0, s.i)({
          prop: r,
          defaultProp: o ?? [],
          onChange: a,
          caller: E
        }), c = t.useCallback((e => d(((n = []) => [...n, e]))), [d]), f = t.useCallback((e => d(((n = []) => n.filter((n => n !== e))))), [d]);
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: l,
          onItemOpen: c,
          onItemClose: f,
          children: (0, p.jsx)(G, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(K, {
              ...i,
              ref: n
            })
          })
        })
      })), [U, z] = P(E), K = t.forwardRef(((e, n) => {
        const {
          __scopeAccordion: r,
          disabled: o,
          dir: a,
          orientation: s = "vertical",
          ...c
        } = e, f = t.useRef(null), u = (0, i.s)(f, n), b = S(r), y = "ltr" === (0, N.jH)(a), g = (0, l.m)(e.onKeyDown, (e => {
          if (!O.includes(e.key)) return;
          const n = e.target,
            r = b().filter((e => !e.ref.current?.disabled)),
            t = r.findIndex((e => e.ref.current === n)),
            o = r.length;
          if (-1 === t) return;
          e.preventDefault();
          let a = t;
          const i = o - 1,
            l = () => {
              a = t + 1, a > i && (a = 0)
            },
            d = () => {
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
              "horizontal" === s && (y ? l() : d());
              break;
            case "ArrowDown":
              "vertical" === s && l();
              break;
            case "ArrowLeft":
              "horizontal" === s && (y ? d() : l());
              break;
            case "ArrowUp":
              "vertical" === s && d()
          }
          const c = a % o;
          r[c].ref.current?.focus()
        }));
        return (0, p.jsx)(U, {
          scope: r,
          disabled: o,
          direction: a,
          orientation: s,
          children: (0, p.jsx)(D.Slot, {
            scope: r,
            children: (0, p.jsx)(d.sG.div, {
              ...c,
              "data-orientation": s,
              ref: u,
              onKeyDown: o ? void 0 : g
            })
          })
        })
      })), Y = "AccordionItem", [q, X] = P(Y), Z = t.forwardRef(((e, n) => {
        const {
          __scopeAccordion: r,
          value: t,
          ...o
        } = e, a = z(Y, r), i = F(Y, r), l = V(r), s = (0, u.B)(), d = t && i.value.includes(t) || !1, c = a.disabled || e.disabled;
        return (0, p.jsx)(q, {
          scope: r,
          open: d,
          disabled: c,
          triggerId: s,
          children: (0, p.jsx)(R, {
            "data-orientation": a.orientation,
            "data-state": oe(d),
            ...l,
            ...o,
            ref: n,
            disabled: c,
            open: d,
            onOpenChange: e => {
              e ? i.onItemOpen(t) : i.onItemClose(t)
            }
          })
        })
      }));
      Z.displayName = Y;
      var J = "AccordionHeader",
        Q = t.forwardRef(((e, n) => {
          const {
            __scopeAccordion: r,
            ...t
          } = e, o = z(E, r), a = X(J, r);
          return (0, p.jsx)(d.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": oe(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...t,
            ref: n
          })
        }));
      Q.displayName = J;
      var ee = "AccordionTrigger",
        ne = t.forwardRef(((e, n) => {
          const {
            __scopeAccordion: r,
            ...t
          } = e, o = z(E, r), a = X(ee, r), i = H(ee, r), l = V(r);
          return (0, p.jsx)(D.ItemSlot, {
            scope: r,
            children: (0, p.jsx)(k, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...l,
              ...t,
              ref: n
            })
          })
        }));
      ne.displayName = ee;
      var re = "AccordionContent",
        te = t.forwardRef(((e, n) => {
          const {
            __scopeAccordion: r,
            ...t
          } = e, o = z(E, r), a = X(re, r), i = V(r);
          return (0, p.jsx)(I, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": o.orientation,
            ...i,
            ...t,
            ref: n,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }));

      function oe(e) {
        return e ? "open" : "closed"
      }
      te.displayName = re;
      var ae = $,
        ie = Z,
        le = Q,
        se = ne,
        de = te
    },
    51347: (e, n, r) => {
      r.d(n, {
        hO: () => s,
        sG: () => l
      });
      var t = r(62229),
        o = r(44853),
        a = r(83970),
        i = r(70954),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const r = (0, a.TL)(`Primitive.${n}`),
            o = t.forwardRef(((e, t) => {
              const {
                asChild: o,
                ...a
              } = e, l = o ? r : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(l, {
                ...a,
                ref: t
              })
            }));
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }), {});

      function s(e, n) {
        e && o.flushSync((() => e.dispatchEvent(n)))
      }
    },
    70954: (e, n, r) => {
      e.exports = r(92834)
    },
    83970: (e, n, r) => {
      r.d(n, {
        DX: () => l,
        Dc: () => c,
        TL: () => i,
        xV: () => f
      });
      var t = r(62229),
        o = r(21423),
        a = r(70954);

      function i(e) {
        const n = s(e),
          r = t.forwardRef(((e, r) => {
            const {
              children: o,
              ...i
            } = e, l = t.Children.toArray(o), s = l.find(u);
            if (s) {
              const e = s.props.children,
                o = l.map((n => n === s ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
              return (0, a.jsx)(n, {
                ...i,
                ref: r,
                children: t.isValidElement(e) ? t.cloneElement(e, void 0, o) : null
              })
            }
            return (0, a.jsx)(n, {
              ...i,
              ref: r,
              children: o
            })
          }));
        return r.displayName = `${e}.Slot`, r
      }
      var l = i("Slot");

      function s(e) {
        const n = t.forwardRef(((e, n) => {
          const {
            children: r,
            ...a
          } = e;
          if (t.isValidElement(r)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = n && "isReactWarning" in n && n.isReactWarning;
                return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              i = function(e, n) {
                const r = {
                  ...n
                };
                for (const t in n) {
                  const o = e[t],
                    a = n[t];
                  /^on[A-Z]/.test(t) ? o && a ? r[t] = (...e) => {
                    a(...e), o(...e)
                  } : o && (r[t] = o) : "style" === t ? r[t] = {
                    ...o,
                    ...a
                  } : "className" === t && (r[t] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(a, r.props);
            return r.type !== t.Fragment && (i.ref = n ? (0, o.t)(n, e) : e), t.cloneElement(r, i)
          }
          return t.Children.count(r) > 1 ? t.Children.only(null) : null
        }));
        return n.displayName = `${e}.SlotClone`, n
      }
      var d = Symbol("radix.slottable");

      function c(e) {
        const n = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = d, n
      }
      var f = c("Slottable");

      function u(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
    },
    92834: (e, n, r) => {
      var t = r(62229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, n, r) {
        var t, a = {},
          d = null,
          c = null;
        for (t in void 0 !== r && (d = "" + r), void 0 !== n.key && (d = "" + n.key), void 0 !== n.ref && (c = n.ref), n) i.call(n, t) && !s.hasOwnProperty(t) && (a[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === a[t] && (a[t] = n[t]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: c,
          props: a,
          _owner: l.current
        }
      }
      n.Fragment = a, n.jsx = d, n.jsxs = d
    }
  }
]);