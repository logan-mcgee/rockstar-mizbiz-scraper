try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "988cb4f6-48c6-4053-967d-4509bf95d55b", e._sentryDebugIdIdentifier = "sentry-dbid-988cb4f6-48c6-4053-967d-4509bf95d55b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4175], {
    82647(e, t, n) {
      n.d(t, {
        UC: () => de,
        Y9: () => le,
        q7: () => ae,
        bL: () => se,
        l9: () => ce
      });
      var o = n(93082),
        r = n(72579),
        i = n(97620),
        s = n(85049),
        a = n(44752),
        l = n(15782),
        c = n(41988),
        d = n(9608),
        u = n(81432),
        p = n(88918),
        f = n(39793),
        h = Object.defineProperty,
        g = (e, t) => h(e, "name", {
          value: t,
          configurable: !0
        }),
        m = "Collapsible",
        [y, v] = (0, r.A)(m),
        [b, w] = y(m),
        x = o.forwardRef(g(function(e, t) {
          const {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: i,
            disabled: s,
            onOpenChange: a,
            ...d
          } = e, [u, h] = (0, l.i)({
            prop: r,
            defaultProp: i ?? !1,
            onChange: a,
            caller: m
          });
          return (0, f.jsx)(b, {
            scope: n,
            disabled: s,
            contentId: (0, p.B)(),
            open: u,
            onOpenToggle: o.useCallback(() => h(e => !e), [h]),
            children: (0, f.jsx)(c.sG.div, {
              "data-state": j(u),
              "data-disabled": s ? "" : void 0,
              ...d,
              ref: t
            })
          })
        }, "Collapsible")),
        C = o.forwardRef(g(function(e, t) {
          const {
            __scopeCollapsible: n,
            ...o
          } = e, r = w("CollapsibleTrigger", n);
          return (0, f.jsx)(c.sG.button, {
            type: "button",
            "aria-controls": r.open ? r.contentId : void 0,
            "aria-expanded": r.open || !1,
            "data-state": j(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...o,
            ref: t,
            onClick: (0, a.mK)(e.onClick, r.onOpenToggle)
          })
        }, "CollapsibleTrigger")),
        A = "CollapsibleContent",
        P = o.forwardRef(g(function(e, t) {
          const {
            forceMount: n,
            ...o
          } = e, r = w(A, e.__scopeCollapsible);
          return (0, f.jsx)(u.C, {
            present: n || r.open,
            children: ({
              present: e
            }) => (0, f.jsx)(R, {
              ...o,
              ref: t,
              present: e
            })
          })
        }, "CollapsibleContent")),
        R = o.forwardRef(g(function(e, t) {
          const {
            __scopeCollapsible: n,
            present: r,
            children: i,
            ...a
          } = e, l = w(A, n), [u, p] = o.useState(r), h = o.useRef(null), g = (0, s.s)(t, h), m = o.useRef(0), y = m.current, v = o.useRef(0), b = v.current, x = l.open || u, C = o.useRef(x), P = o.useRef(void 0);
          return o.useEffect(() => {
            const e = requestAnimationFrame(() => C.current = !1);
            return () => cancelAnimationFrame(e)
          }, []), (0, d.N)(() => {
            const e = h.current;
            if (e) {
              P.current = P.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const t = e.getBoundingClientRect();
              m.current = t.height, v.current = t.width, C.current || (e.style.transitionDuration = P.current.transitionDuration, e.style.animationName = P.current.animationName), p(r)
            }
          }, [l.open, r]), (0, f.jsx)(c.sG.div, {
            "data-state": j(l.open),
            "data-disabled": l.disabled ? "" : void 0,
            id: l.contentId,
            hidden: !x,
            ...a,
            ref: g,
            style: {
              "--radix-collapsible-content-height": y ? `${y}px` : void 0,
              "--radix-collapsible-content-width": b ? `${b}px` : void 0,
              ...e.style
            },
            children: x && i
          })
        }, "CollapsibleContentImpl"));

      function j(e) {
        return e ? "open" : "closed"
      }
      g(j, "getState");
      var _ = x,
        O = C,
        k = P,
        I = n(12430),
        S = Object.defineProperty,
        M = (e, t) => S(e, "name", {
          value: t,
          configurable: !0
        }),
        E = "Accordion",
        D = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [N, T, F] = (0, i.N)(E),
        [z, L] = (0, r.A)(E, [F, v]),
        B = v(),
        $ = o.forwardRef(M(function(e, t) {
          const {
            type: n,
            ...o
          } = e, r = o, i = o;
          return (0, f.jsx)(N.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === n ? (0, f.jsx)(W, {
              ...i,
              ref: t
            }) : (0, f.jsx)(Y, {
              ...r,
              ref: t
            })
          })
        }, "Accordion")),
        [H, K] = z(E),
        [G, U] = z(E, {
          collapsible: !1
        }),
        Y = o.forwardRef(M(function(e, t) {
          const {
            value: n,
            defaultValue: r,
            onValueChange: i = M(() => {}, "onValueChange"),
            collapsible: s = !1,
            ...a
          } = e, [c, d] = (0, l.i)({
            prop: n,
            defaultProp: r ?? "",
            onChange: i,
            caller: E
          });
          return (0, f.jsx)(H, {
            scope: e.__scopeAccordion,
            value: o.useMemo(() => c ? [c] : [], [c]),
            onItemOpen: d,
            onItemClose: o.useCallback(() => s && d(""), [s, d]),
            children: (0, f.jsx)(G, {
              scope: e.__scopeAccordion,
              collapsible: s,
              children: (0, f.jsx)(X, {
                ...a,
                ref: t
              })
            })
          })
        }, "AccordionImplSingle")),
        W = o.forwardRef(M(function(e, t) {
          const {
            value: n,
            defaultValue: r,
            onValueChange: i = M(() => {}, "onValueChange"),
            ...s
          } = e, [a, c] = (0, l.i)({
            prop: n,
            defaultProp: r ?? [],
            onChange: i,
            caller: E
          }), d = o.useCallback(e => c((t = []) => [...t, e]), [c]), u = o.useCallback(e => c((t = []) => t.filter(t => t !== e)), [c]);
          return (0, f.jsx)(H, {
            scope: e.__scopeAccordion,
            value: a,
            onItemOpen: d,
            onItemClose: u,
            children: (0, f.jsx)(G, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, f.jsx)(X, {
                ...s,
                ref: t
              })
            })
          })
        }, "AccordionImplMultiple")),
        [q, V] = z(E),
        X = o.forwardRef(M(function(e, t) {
          const {
            __scopeAccordion: n,
            disabled: r,
            dir: i,
            orientation: l = "vertical",
            ...d
          } = e, u = o.useRef(null), p = (0, s.s)(u, t), h = T(n), g = "ltr" === (0, I.jH)(i), m = (0, a.mK)(e.onKeyDown, e => {
            if (!D.includes(e.key)) return;
            const t = e.target,
              n = h().filter(e => !e.ref.current?.disabled),
              o = n.findIndex(e => e.ref.current === t),
              r = n.length;
            if (-1 === o) return;
            e.preventDefault();
            let i = o;
            const s = r - 1,
              a = M(() => {
                i = o + 1, i > s && (i = 0)
              }, "moveNext"),
              c = M(() => {
                i = o - 1, i < 0 && (i = s)
              }, "movePrev");
            switch (e.key) {
              case "Home":
                i = 0;
                break;
              case "End":
                i = s;
                break;
              case "ArrowRight":
                "horizontal" === l && (g ? a() : c());
                break;
              case "ArrowDown":
                "vertical" === l && a();
                break;
              case "ArrowLeft":
                "horizontal" === l && (g ? c() : a());
                break;
              case "ArrowUp":
                "vertical" === l && c()
            }
            const d = i % r;
            n[d].ref.current?.focus()
          });
          return (0, f.jsx)(q, {
            scope: n,
            disabled: r,
            direction: i,
            orientation: l,
            children: (0, f.jsx)(N.Slot, {
              scope: n,
              children: (0, f.jsx)(c.sG.div, {
                ...d,
                "data-orientation": l,
                ref: p,
                onKeyDown: r ? void 0 : m
              })
            })
          })
        }, "AccordionImpl")),
        Z = "AccordionItem",
        [J, Q] = z(Z),
        ee = o.forwardRef(M(function(e, t) {
          const {
            __scopeAccordion: n,
            value: o,
            ...r
          } = e, i = V(Z, n), s = K(Z, n), a = B(n), l = (0, p.B)(), c = o && s.value.includes(o) || !1, d = i.disabled || e.disabled;
          return (0, f.jsx)(J, {
            scope: n,
            open: c,
            disabled: d,
            triggerId: l,
            children: (0, f.jsx)(_, {
              "data-orientation": i.orientation,
              "data-state": ie(c),
              ...a,
              ...r,
              ref: t,
              disabled: d,
              open: c,
              onOpenChange: e => {
                e ? s.onItemOpen(o) : s.onItemClose(o)
              }
            })
          })
        }, "AccordionItem")),
        te = o.forwardRef(M(function(e, t) {
          const {
            __scopeAccordion: n,
            ...o
          } = e, r = V(E, n), i = Q("AccordionHeader", n);
          return (0, f.jsx)(c.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": ie(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: t
          })
        }, "AccordionHeader")),
        ne = "AccordionTrigger",
        oe = o.forwardRef(M(function(e, t) {
          const {
            __scopeAccordion: n,
            ...o
          } = e, r = V(E, n), i = Q(ne, n), s = U(ne, n), a = B(n);
          return (0, f.jsx)(N.ItemSlot, {
            scope: n,
            children: (0, f.jsx)(O, {
              "aria-disabled": i.open && !s.collapsible || void 0,
              "data-orientation": r.orientation,
              id: i.triggerId,
              ...a,
              ...o,
              ref: t
            })
          })
        }, "AccordionTrigger")),
        re = o.forwardRef(M(function(e, t) {
          const {
            __scopeAccordion: n,
            ...o
          } = e, r = V(E, n), i = Q("AccordionContent", n), s = B(n);
          return (0, f.jsx)(k, {
            role: "region",
            "aria-labelledby": i.triggerId,
            "data-orientation": r.orientation,
            ...s,
            ...o,
            ref: t,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }, "AccordionContent"));

      function ie(e) {
        return e ? "open" : "closed"
      }
      M(ie, "getState");
      var se = $,
        ae = ee,
        le = te,
        ce = oe,
        de = re
    },
    97620(e, t, n) {
      n.d(t, {
        N: () => d
      });
      var o = n(93082),
        r = n(72579),
        i = n(85049),
        s = n(93237),
        a = n(39793),
        l = Object.defineProperty,
        c = (e, t) => l(e, "name", {
          value: t,
          configurable: !0
        });

      function d(e) {
        const t = e + "CollectionProvider",
          [n, l] = (0, r.A)(t),
          [d, u] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          p = c(e => {
            const {
              scope: t,
              children: n
            } = e, r = o.useRef(null), i = o.useRef(new Map).current;
            return (0, a.jsx)(d, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          }, "CollectionProvider");
        p.displayName = t;
        const f = e + "CollectionSlot",
          h = (0, s.TL)(f),
          g = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: o
            } = e, r = u(f, n), s = (0, i.s)(t, r.collectionRef);
            return (0, a.jsx)(h, {
              ref: s,
              children: o
            })
          });
        g.displayName = f;
        const m = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          v = (0, s.TL)(m),
          b = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...s
            } = e, l = o.useRef(null), c = (0, i.s)(t, l), d = u(m, n);
            return o.useEffect(() => (d.itemMap.set(l, {
              ref: l,
              ...s
            }), () => {
              d.itemMap.delete(l)
            })), (0, a.jsx)(v, {
              [y]: "",
              ref: c,
              children: r
            })
          });

        function w(t) {
          const n = u(e + "CollectionConsumer", t);
          return o.useCallback(() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${y}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
          }, [n.collectionRef, n.itemMap])
        }
        return b.displayName = m, c(w, "useCollection"), [{
          Provider: p,
          Slot: g,
          ItemSlot: b
        }, w, l]
      }
      c(d, "createCollection");
      var u = new WeakMap,
        p = class e extends Map {
          static {
            c(this, "OrderedDict")
          }
          #e;
          constructor(e) {
            super(e), this.#e = [...super.keys()], u.set(this, !0)
          }
          set(e, t) {
            return u.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
          }
          insert(e, t, n) {
            const o = this.has(t),
              r = this.#e.length,
              i = g(e);
            let s = i >= 0 ? i : r + i;
            const a = s < 0 || s >= r ? -1 : s;
            if (a === this.size || o && a === this.size - 1 || -1 === a) return this.set(t, n), this;
            const l = this.size + (o ? 0 : 1);
            i < 0 && s++;
            const c = [...this.#e];
            let d, u = !1;
            for (let e = s; e < l; e++)
              if (s === e) {
                let r = c[e];
                c[e] === t && (r = c[e + 1]), o && this.delete(t), d = this.get(r), this.set(t, n)
              } else {
                u || c[e - 1] !== t || (u = !0);
                const n = c[u ? e : e - 1],
                  o = d;
                d = this.get(n), this.delete(n), this.set(n, o)
              } return this
          }
          with(t, n, o) {
            const r = new e(this);
            return r.insert(t, n, o), r
          }
          before(e) {
            const t = this.#e.indexOf(e) - 1;
            if (!(t < 0)) return this.entryAt(t)
          }
          setBefore(e, t, n) {
            const o = this.#e.indexOf(e);
            return -1 === o ? this : this.insert(o, t, n)
          }
          after(e) {
            let t = this.#e.indexOf(e);
            if (t = -1 === t || t === this.size - 1 ? -1 : t + 1, -1 !== t) return this.entryAt(t)
          }
          setAfter(e, t, n) {
            const o = this.#e.indexOf(e);
            return -1 === o ? this : this.insert(o + 1, t, n)
          }
          first() {
            return this.entryAt(0)
          }
          last() {
            return this.entryAt(-1)
          }
          clear() {
            return this.#e = [], super.clear()
          }
          delete(e) {
            const t = super.delete(e);
            return t && this.#e.splice(this.#e.indexOf(e), 1), t
          }
          deleteAt(e) {
            const t = this.keyAt(e);
            return void 0 !== t && this.delete(t)
          }
          at(e) {
            const t = f(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = f(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return f(this.#e, e)
          }
          from(e, t) {
            const n = this.indexOf(e);
            if (-1 === n) return;
            let o = n + t;
            return o < 0 && (o = 0), o >= this.size && (o = this.size - 1), this.at(o)
          }
          keyFrom(e, t) {
            const n = this.indexOf(e);
            if (-1 === n) return;
            let o = n + t;
            return o < 0 && (o = 0), o >= this.size && (o = this.size - 1), this.keyAt(o)
          }
          find(e, t) {
            let n = 0;
            for (const o of this) {
              if (Reflect.apply(e, t, [o, n, this])) return o;
              n++
            }
          }
          findIndex(e, t) {
            let n = 0;
            for (const o of this) {
              if (Reflect.apply(e, t, [o, n, this])) return n;
              n++
            }
            return -1
          }
          filter(t, n) {
            const o = [];
            let r = 0;
            for (const e of this) Reflect.apply(t, n, [e, r, this]) && o.push(e), r++;
            return new e(o)
          }
          map(t, n) {
            const o = [];
            let r = 0;
            for (const e of this) o.push([e[0], Reflect.apply(t, n, [e, r, this])]), r++;
            return new e(o)
          }
          reduce(...e) {
            const [t, n] = e;
            let o = 0,
              r = n ?? this.at(0);
            for (const n of this) r = 0 === o && 1 === e.length ? n : Reflect.apply(t, this, [r, n, o, this]), o++;
            return r
          }
          reduceRight(...e) {
            const [t, n] = e;
            let o = n ?? this.at(-1);
            for (let n = this.size - 1; n >= 0; n--) {
              const r = this.at(n);
              o = n === this.size - 1 && 1 === e.length ? r : Reflect.apply(t, this, [o, r, n, this])
            }
            return o
          }
          toSorted(t) {
            const n = [...this.entries()].sort(t);
            return new e(n)
          }
          toReversed() {
            const t = new e;
            for (let e = this.size - 1; e >= 0; e--) {
              const n = this.keyAt(e),
                o = this.get(n);
              t.set(n, o)
            }
            return t
          }
          toSpliced(...t) {
            const n = [...this.entries()];
            return n.splice(...t), new e(n)
          }
          slice(t, n) {
            const o = new e;
            let r = this.size - 1;
            if (void 0 === t) return o;
            t < 0 && (t += this.size), void 0 !== n && n > 0 && (r = n - 1);
            for (let e = t; e <= r; e++) {
              const t = this.keyAt(e),
                n = this.get(t);
              o.set(t, n)
            }
            return o
          }
          every(e, t) {
            let n = 0;
            for (const o of this) {
              if (!Reflect.apply(e, t, [o, n, this])) return !1;
              n++
            }
            return !0
          }
          some(e, t) {
            let n = 0;
            for (const o of this) {
              if (Reflect.apply(e, t, [o, n, this])) return !0;
              n++
            }
            return !1
          }
        };

      function f(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const n = h(e, t);
        return -1 === n ? void 0 : e[n]
      }

      function h(e, t) {
        const n = e.length,
          o = g(t),
          r = o >= 0 ? o : n + o;
        return r < 0 || r >= n ? -1 : r
      }

      function g(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function m(e, t) {
        if (e === t) return !0;
        if ("object" != typeof e || "object" != typeof t) return !1;
        if (null == e || null == t) return !1;
        const n = Object.keys(e),
          o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (const o of n) {
          if (!Object.prototype.hasOwnProperty.call(t, o)) return !1;
          if (e[o] !== t[o]) return !1
        }
        return !0
      }

      function y(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function v(e, t) {
        return e[1].element && t[1].element ? y(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function b(e) {
        return new MutationObserver(t => {
          for (const n of t)
            if ("childList" === n.type) return void e()
        })
      }
      c(f, "at"), c(h, "toSafeIndex"), c(g, "toSafeInteger"), c(function(e) {
        const t = e + "CollectionProvider",
          [n, l] = (0, r.A)(t),
          [d, u] = n(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new p,
            setItemMap: c(() => {}, "setItemMap")
          }),
          f = c(({
            state: e,
            ...t
          }) => e ? (0, a.jsx)(g, {
            ...t,
            state: e
          }) : (0, a.jsx)(h, {
            ...t
          }), "CollectionProvider");
        f.displayName = t;
        const h = c(e => {
          const t = j();
          return (0, a.jsx)(g, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        h.displayName = t + "Init";
        const g = c(e => {
          const {
            scope: t,
            children: n,
            state: r
          } = e, s = o.useRef(null), [l, c] = o.useState(null), u = (0, i.s)(s, c), [p, f] = r;
          return o.useEffect(() => {
            if (!l) return;
            const e = b(() => {});
            return e.observe(l, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [l]), (0, a.jsx)(d, {
            scope: t,
            itemMap: p,
            setItemMap: f,
            collectionRef: u,
            collectionRefObject: s,
            collectionElement: l,
            children: n
          })
        }, "CollectionProviderImpl");
        g.displayName = t + "Impl";
        const y = e + "CollectionSlot",
          w = (0, s.TL)(y),
          x = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: o
            } = e, r = u(y, n), s = (0, i.s)(t, r.collectionRef);
            return (0, a.jsx)(w, {
              ref: s,
              children: o
            })
          });
        x.displayName = y;
        const C = e + "CollectionItemSlot",
          A = "data-radix-collection-item",
          P = (0, s.TL)(C),
          R = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...s
            } = e, l = o.useRef(null), [c, d] = o.useState(null), f = (0, i.s)(t, l, d), h = u(C, n), {
              setItemMap: g
            } = h, y = o.useRef(s);
            m(y.current, s) || (y.current = s);
            const b = y.current;
            return o.useEffect(() => {
              const e = b;
              return g(t => c ? t.has(c) ? t.set(c, {
                ...e,
                element: c
              }).toSorted(v) : (t.set(c, {
                ...e,
                element: c
              }), t.toSorted(v)) : t), () => {
                g(e => c && e.has(c) ? (e.delete(c), new p(e)) : e)
              }
            }, [c, b, g]), (0, a.jsx)(P, {
              [A]: "",
              ref: f,
              children: r
            })
          });

        function j() {
          return o.useState(new p)
        }

        function _(t) {
          const {
            itemMap: n
          } = u(e + "CollectionConsumer", t);
          return n
        }
        return R.displayName = C, c(j, "useInitCollection"), c(_, "useCollection"), [{
          Provider: f,
          Slot: x,
          ItemSlot: R
        }, {
          createCollectionScope: l,
          useCollection: _,
          useInitCollection: j
        }]
      }, "createCollection"), c(m, "shallowEqual"), c(y, "isElementPreceding"), c(v, "sortByDocumentPosition"), c(b, "getChildListObserver")
    },
    25185(e, t, n) {
      n.d(t, {
        Mz: () => U,
        UC: () => q,
        ZL: () => W,
        bL: () => G,
        bm: () => V,
        i3: () => X,
        l9: () => Y
      });
      var o = n(93082),
        r = n(44752),
        i = n(85049),
        s = n(72579),
        a = n(78077),
        l = n(86187),
        c = n(518),
        d = n(88918),
        u = n(4112),
        p = n(62471),
        f = n(81432),
        h = n(41988),
        g = n(93237),
        m = n(15782),
        y = n(45787),
        v = n(38100),
        b = n(39793),
        w = Object.defineProperty,
        x = (e, t) => w(e, "name", {
          value: t,
          configurable: !0
        }),
        C = "Popover",
        [A, P] = (0, s.A)(C, [u.Bk]),
        R = (0, u.Bk)(),
        [j, _] = A(C),
        O = x(e => {
          const {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: i,
            onOpenChange: s,
            modal: a = !1
          } = e, l = R(t), c = o.useRef(null), [p, f] = o.useState(!1), [h, g] = (0, m.i)({
            prop: r,
            defaultProp: i ?? !1,
            onChange: s,
            caller: C
          });
          return (0, b.jsx)(u.bL, {
            ...l,
            children: (0, b.jsx)(j, {
              scope: t,
              contentId: (0, d.B)(),
              triggerRef: c,
              open: h,
              onOpenChange: g,
              onOpenToggle: o.useCallback(() => g(e => !e), [g]),
              hasCustomAnchor: p,
              onCustomAnchorAdd: o.useCallback(() => f(!0), []),
              onCustomAnchorRemove: o.useCallback(() => f(!1), []),
              modal: a,
              children: n
            })
          })
        }, "Popover"),
        k = o.forwardRef(x(function(e, t) {
          const {
            __scopePopover: n,
            ...r
          } = e, i = _("PopoverAnchor", n), s = R(n), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: l
          } = i;
          return o.useEffect(() => (a(), () => l()), [a, l]), (0, b.jsx)(u.Mz, {
            ...s,
            ...r,
            ref: t
          })
        }, "PopoverAnchor")),
        I = o.forwardRef(x(function(e, t) {
          const {
            __scopePopover: n,
            ...o
          } = e, s = _("PopoverTrigger", n), a = R(n), l = (0, i.s)(t, s.triggerRef), c = (0, b.jsx)(h.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.open ? s.contentId : void 0,
            "data-state": K(s.open),
            ...o,
            ref: l,
            onClick: (0, r.mK)(e.onClick, s.onOpenToggle)
          });
          return s.hasCustomAnchor ? c : (0, b.jsx)(u.Mz, {
            asChild: !0,
            ...a,
            children: c
          })
        }, "PopoverTrigger")),
        S = "PopoverPortal",
        [M, E] = A(S, {
          forceMount: void 0
        }),
        D = x(e => {
          const {
            __scopePopover: t,
            forceMount: n,
            children: o,
            container: r
          } = e, i = _(S, t);
          return (0, b.jsx)(M, {
            scope: t,
            forceMount: n,
            children: (0, b.jsx)(f.C, {
              present: n || i.open,
              children: (0, b.jsx)(p.Z, {
                asChild: !0,
                container: r,
                children: o
              })
            })
          })
        }, "PopoverPortal"),
        N = "PopoverContent",
        T = o.forwardRef(x(function(e, t) {
          const n = E(N, e.__scopePopover),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            i = _(N, e.__scopePopover);
          return (0, b.jsx)(f.C, {
            present: o || i.open,
            children: i.modal ? (0, b.jsx)(z, {
              ...r,
              ref: t
            }) : (0, b.jsx)(L, {
              ...r,
              ref: t
            })
          })
        }, "PopoverContent")),
        F = (0, g.TL)("PopoverContent.RemoveScroll"),
        z = o.forwardRef(x(function(e, t) {
          const n = _(N, e.__scopePopover),
            s = o.useRef(null),
            a = (0, i.s)(t, s),
            l = o.useRef(!1);
          return o.useEffect(() => {
            const e = s.current;
            if (e) return (0, y.Eq)(e)
          }, []), (0, b.jsx)(v.A, {
            as: F,
            allowPinchZoom: !0,
            children: (0, b.jsx)(B, {
              ...e,
              ref: a,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, r.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), l.current || n.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, r.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  o = 2 === t.button || n;
                l.current = o
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, r.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }, "PopoverContentModal")),
        L = o.forwardRef(x(function(e, t) {
          const n = _(N, e.__scopePopover),
            r = o.useRef(!1),
            i = o.useRef(!1);
          return (0, b.jsx)(B, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
              const o = t.target,
                s = n.triggerRef.current?.contains(o);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
            }
          })
        }, "PopoverContentNonModal")),
        B = o.forwardRef(x(function(e, t) {
          const {
            __scopePopover: n,
            trapFocus: o,
            onOpenAutoFocus: r,
            onCloseAutoFocus: i,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: d,
            onPointerDownOutside: p,
            onFocusOutside: f,
            onInteractOutside: h,
            ...g
          } = e, m = _(N, n), y = R(n);
          return (0, l.Oh)(), (0, b.jsx)(c.n, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: r,
            onUnmountAutoFocus: i,
            children: (0, b.jsx)(a.qW, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: h,
              onEscapeKeyDown: d,
              onPointerDownOutside: p,
              onFocusOutside: f,
              onDismiss: () => m.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, b.jsx)(u.UC, {
                "data-state": K(m.open),
                role: "dialog",
                id: m.contentId,
                ...y,
                ...g,
                ref: t,
                style: {
                  ...g.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              })
            })
          })
        }, "PopoverContentImpl")),
        $ = o.forwardRef(x(function(e, t) {
          const {
            __scopePopover: n,
            ...o
          } = e, i = _("PopoverClose", n);
          return (0, b.jsx)(h.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.mK)(e.onClick, () => i.onOpenChange(!1))
          })
        }, "PopoverClose")),
        H = o.forwardRef(x(function(e, t) {
          const {
            __scopePopover: n,
            ...o
          } = e, r = R(n);
          return (0, b.jsx)(u.i3, {
            ...r,
            ...o,
            ref: t
          })
        }, "PopoverArrow"));

      function K(e) {
        return e ? "open" : "closed"
      }
      x(K, "getState");
      var G = O,
        U = k,
        Y = I,
        W = D,
        q = T,
        V = $,
        X = H
    },
    4112(e, t, n) {
      n.d(t, {
        Mz: () => N,
        i3: () => F,
        UC: () => T,
        bL: () => D,
        Bk: () => w
      });
      var o = n(93082),
        r = n(53213),
        i = n(60853),
        s = n(41988),
        a = n(39793),
        l = Object.defineProperty,
        c = (e, t) => l(e, "name", {
          value: t,
          configurable: !0
        }),
        d = o.forwardRef(c(function(e, t) {
          const {
            children: n,
            width: o = 10,
            height: r = 5,
            ...i
          } = e;
          return (0, a.jsx)(s.sG.svg, {
            ...i,
            ref: t,
            width: o,
            height: r,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, a.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }, "Arrow")),
        u = n(85049),
        p = n(72579),
        f = n(7198),
        h = n(9608),
        g = n(7078),
        m = Object.defineProperty,
        y = (e, t) => m(e, "name", {
          value: t,
          configurable: !0
        }),
        v = "Popper",
        [b, w] = (0, p.A)(v),
        [x, C] = b(v),
        A = y(e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, i] = o.useState(null), [s, l] = o.useState(void 0);
          return (0, a.jsx)(x, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            placementState: s,
            setPlacementState: l,
            children: n
          })
        }, "Popper"),
        P = o.forwardRef(y(function(e, t) {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...i
          } = e, l = C("PopperAnchor", n), c = o.useRef(null), d = l.onAnchorChange, p = o.useCallback(e => {
            c.current = e, e && d(e)
          }, [d]), f = (0, u.s)(t, p), h = o.useRef(null);
          o.useEffect(() => {
            if (!r) return;
            const e = h.current;
            h.current = r.current, e !== h.current && d(h.current)
          });
          const g = l.placementState && E(l.placementState),
            m = g?.[0],
            y = g?.[1];
          return r ? null : (0, a.jsx)(s.sG.div, {
            "data-radix-popper-side": m,
            "data-radix-popper-align": y,
            ...i,
            ref: f
          })
        }, "PopperAnchor")),
        R = "PopperContent",
        [j, _] = b(R),
        O = o.forwardRef(y(function(e, t) {
          const {
            __scopePopper: n,
            side: l = "bottom",
            sideOffset: c = 0,
            align: d = "center",
            alignOffset: p = 0,
            arrowPadding: m = 0,
            avoidCollisions: v = !0,
            collisionBoundary: b = [],
            collisionPadding: w = 0,
            sticky: x = "partial",
            hideWhenDetached: A = !1,
            updatePositionStrategy: P = "optimized",
            onPlaced: _,
            ...O
          } = e, k = C(R, n), [I, D] = o.useState(null), N = (0, u.s)(t, D), [T, F] = o.useState(null), z = (0, g.X)(T), L = z?.width ?? 0, B = z?.height ?? 0, $ = l + ("center" !== d ? "-" + d : ""), H = "number" == typeof w ? w : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...w
          }, K = Array.isArray(b) ? b : [b], G = K.length > 0, U = {
            padding: H,
            boundary: K.filter(S),
            altBoundary: G
          }, {
            refs: Y,
            floatingStyles: W,
            placement: q,
            isPositioned: V,
            middlewareData: X
          } = (0, r.we)({
            strategy: "fixed",
            placement: $,
            whileElementsMounted: y((...e) => (0, i.ll)(...e, {
              animationFrame: "always" === P
            }), "whileElementsMounted"),
            elements: {
              reference: k.anchor
            },
            middleware: [(0, r.cY)({
              mainAxis: c + B,
              alignmentAxis: p
            }), v && (0, r.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === x ? (0, r.ER)() : void 0,
              ...U
            }), v && (0, r.UU)({
              ...U
            }), (0, r.Ej)({
              ...U,
              apply: y(({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: o
              }) => {
                const {
                  width: r,
                  height: i
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${n}px`), s.setProperty("--radix-popper-available-height", `${o}px`), s.setProperty("--radix-popper-anchor-width", `${r}px`), s.setProperty("--radix-popper-anchor-height", `${i}px`)
              }, "apply")
            }), T && (0, r.UE)({
              element: T,
              padding: m
            }), M({
              arrowWidth: L,
              arrowHeight: B
            }), A && (0, r.jD)({
              strategy: "referenceHidden",
              ...U,
              boundary: G ? U.boundary : void 0
            })]
          }), Z = k.setPlacementState;
          (0, h.N)(() => (Z(q), () => {
            Z(void 0)
          }), [q, Z]);
          const [J, Q] = E(q), ee = (0, f.c)(_);
          (0, h.N)(() => {
            V && ee?.()
          }, [V, ee]);
          const te = X.arrow?.x,
            ne = X.arrow?.y,
            oe = 0 !== X.arrow?.centerOffset,
            [re, ie] = o.useState();
          return (0, h.N)(() => {
            I && ie(window.getComputedStyle(I).zIndex)
          }, [I]), (0, a.jsx)("div", {
            ref: Y.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...W,
              transform: V ? W.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: re,
              "--radix-popper-transform-origin": [X.transformOrigin?.x, X.transformOrigin?.y].join(" "),
              ...X.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, a.jsx)(j, {
              scope: n,
              placedSide: J,
              placedAlign: Q,
              onArrowChange: F,
              arrowX: te,
              arrowY: ne,
              shouldHideArrow: oe,
              children: (0, a.jsx)(s.sG.div, {
                "data-side": J,
                "data-align": Q,
                ...O,
                ref: N,
                style: {
                  ...O.style,
                  animation: V ? O.style?.animation : "none"
                }
              })
            })
          })
        }, "PopperContent")),
        k = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        I = o.forwardRef(y(function(e, t) {
          const {
            __scopePopper: n,
            ...o
          } = e, r = _("PopperArrow", n), i = k[r.placedSide];
          return (0, a.jsx)("span", {
            ref: r.onArrowChange,
            style: {
              position: "absolute",
              left: r.arrowX,
              top: r.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [r.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [r.placedSide],
              visibility: r.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, a.jsx)(d, {
              ...o,
              ref: t,
              style: {
                ...o.style,
                display: "block"
              }
            })
          })
        }, "PopperArrow"));

      function S(e) {
        return null !== e
      }
      y(S, "isNotNull");
      var M = y(e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: o,
            middlewareData: r
          } = t, i = 0 !== r.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, c] = E(n), d = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], u = (r.arrow?.x ?? 0) + s / 2, p = (r.arrow?.y ?? 0) + a / 2;
          let f = "",
            h = "";
          return "bottom" === l ? (f = i ? d : `${u}px`, h = -a + "px") : "top" === l ? (f = i ? d : `${u}px`, h = `${o.floating.height+a}px`) : "right" === l ? (f = -a + "px", h = i ? d : `${p}px`) : "left" === l && (f = `${o.floating.width+a}px`, h = i ? d : `${p}px`), {
            data: {
              x: f,
              y: h
            }
          }
        }
      }), "transformOrigin");

      function E(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      y(E, "getSideAndAlignFromPlacement");
      var D = A,
        N = P,
        T = O,
        F = I
    }
  }
]);