try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "29ddf180-4f73-445e-9c12-80e143006bb6", e._sentryDebugIdIdentifier = "sentry-dbid-29ddf180-4f73-445e-9c12-80e143006bb6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2647], {
    44752(e, t, n) {
      n.d(t, {
        mK: () => s
      });
      var o = Object.defineProperty,
        r = (e, t) => o(e, "name", {
          value: t,
          configurable: !0
        }),
        i = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function s(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return r(function(o) {
          if (e?.(o), !1 === n || !o || !o.defaultPrevented) return t?.(o)
        }, "handleEvent")
      }

      function c(e) {
        if (!i) throw new Error("Cannot access document outside of the DOM");
        return e?.ownerDocument ?? document
      }

      function l(e) {
        return "IFRAME" === e.tagName
      }
      r(s, "composeEventHandlers"), r(function(e) {
        if (!i) throw new Error("Cannot access window outside of the DOM");
        return e?.ownerDocument?.defaultView ?? window
      }, "getOwnerWindow"), r(c, "getOwnerDocument"), r(function e(t, n = !1) {
        const {
          activeElement: o
        } = c(t);
        if (!o?.nodeName) return null;
        if (l(o) && o.contentDocument) return e(o.contentDocument.body, n);
        if (n) {
          const e = o.getAttribute("aria-activedescendant");
          if (e) {
            const t = c(o).getElementById(e);
            if (t) return t
          }
        }
        return o
      }, "getActiveElement"), r(l, "isFrame")
    },
    82647(e, t, n) {
      n.r(t), n.d(t, {
        Accordion: () => F,
        AccordionContent: () => re,
        AccordionHeader: () => te,
        AccordionItem: () => ee,
        AccordionTrigger: () => oe,
        Content: () => ue,
        Header: () => le,
        Item: () => ce,
        Root: () => se,
        Trigger: () => ae,
        createAccordionScope: () => L
      });
      var o = n(4637),
        r = n(72579),
        i = n(97620),
        s = n(85049),
        c = n(44752),
        l = n(44622),
        a = n(41988),
        u = n(9608),
        d = n(81432),
        f = n(31431),
        p = n(39793),
        h = Object.defineProperty,
        m = (e, t) => h(e, "name", {
          value: t,
          configurable: !0
        }),
        y = "Collapsible",
        [b, g] = (0, r.A)(y),
        [v, w] = b(y),
        C = o.forwardRef(m(function(e, t) {
          const {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: i,
            disabled: s,
            onOpenChange: c,
            ...u
          } = e, [d, h] = (0, l.useControllableState)({
            prop: r,
            defaultProp: i ?? !1,
            onChange: c,
            caller: y
          });
          return (0, p.jsx)(v, {
            scope: n,
            disabled: s,
            contentId: (0, f.useId)(),
            open: d,
            onOpenToggle: o.useCallback(() => h(e => !e), [h]),
            children: (0, p.jsx)(a.sG.div, {
              "data-state": N(d),
              "data-disabled": s ? "" : void 0,
              ...u,
              ref: t
            })
          })
        }, "Collapsible")),
        x = o.forwardRef(m(function(e, t) {
          const {
            __scopeCollapsible: n,
            ...o
          } = e, r = w("CollapsibleTrigger", n);
          return (0, p.jsx)(a.sG.button, {
            type: "button",
            "aria-controls": r.open ? r.contentId : void 0,
            "aria-expanded": r.open || !1,
            "data-state": N(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...o,
            ref: t,
            onClick: (0, c.mK)(e.onClick, r.onOpenToggle)
          })
        }, "CollapsibleTrigger")),
        A = "CollapsibleContent",
        R = o.forwardRef(m(function(e, t) {
          const {
            forceMount: n,
            ...o
          } = e, r = w(A, e.__scopeCollapsible);
          return (0, p.jsx)(d.C, {
            present: n || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(O, {
              ...o,
              ref: t,
              present: e
            })
          })
        }, "CollapsibleContent")),
        O = o.forwardRef(m(function(e, t) {
          const {
            __scopeCollapsible: n,
            present: r,
            children: i,
            ...c
          } = e, l = w(A, n), [d, f] = o.useState(r), h = o.useRef(null), m = (0, s.s)(t, h), y = o.useRef(0), b = y.current, g = o.useRef(0), v = g.current, C = l.open || d, x = o.useRef(C), R = o.useRef(void 0);
          return o.useEffect(() => {
            const e = requestAnimationFrame(() => x.current = !1);
            return () => cancelAnimationFrame(e)
          }, []), (0, u.N)(() => {
            const e = h.current;
            if (e) {
              R.current = R.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const t = e.getBoundingClientRect();
              y.current = t.height, g.current = t.width, x.current || (e.style.transitionDuration = R.current.transitionDuration, e.style.animationName = R.current.animationName), f(r)
            }
          }, [l.open, r]), (0, p.jsx)(a.sG.div, {
            "data-state": N(l.open),
            "data-disabled": l.disabled ? "" : void 0,
            id: l.contentId,
            hidden: !C,
            ...c,
            ref: m,
            style: {
              "--radix-collapsible-content-height": b ? `${b}px` : void 0,
              "--radix-collapsible-content-width": v ? `${v}px` : void 0,
              ...e.style
            },
            children: C && i
          })
        }, "CollapsibleContentImpl"));

      function N(e) {
        return e ? "open" : "closed"
      }
      m(N, "getState");
      var I = C,
        j = x,
        _ = R,
        k = n(90049),
        S = Object.defineProperty,
        M = (e, t) => S(e, "name", {
          value: t,
          configurable: !0
        }),
        E = "Accordion",
        P = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [D, T, z] = (0, i.N)(E),
        [U, L] = (0, r.A)(E, [z, g]),
        $ = g(),
        F = o.forwardRef(M(function(e, t) {
          const {
            type: n,
            ...o
          } = e, r = o, i = o;
          return (0, p.jsx)(D.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === n ? (0, p.jsx)(B, {
              ...i,
              ref: t
            }) : (0, p.jsx)(K, {
              ...r,
              ref: t
            })
          })
        }, "Accordion")),
        [H, V] = U(E),
        [G, W] = U(E, {
          collapsible: !1
        }),
        K = o.forwardRef(M(function(e, t) {
          const {
            value: n,
            defaultValue: r,
            onValueChange: i = M(() => {}, "onValueChange"),
            collapsible: s = !1,
            ...c
          } = e, [a, u] = (0, l.useControllableState)({
            prop: n,
            defaultProp: r ?? "",
            onChange: i,
            caller: E
          });
          return (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            value: o.useMemo(() => a ? [a] : [], [a]),
            onItemOpen: u,
            onItemClose: o.useCallback(() => s && u(""), [s, u]),
            children: (0, p.jsx)(G, {
              scope: e.__scopeAccordion,
              collapsible: s,
              children: (0, p.jsx)(J, {
                ...c,
                ref: t
              })
            })
          })
        }, "AccordionImplSingle")),
        B = o.forwardRef(M(function(e, t) {
          const {
            value: n,
            defaultValue: r,
            onValueChange: i = M(() => {}, "onValueChange"),
            ...s
          } = e, [c, a] = (0, l.useControllableState)({
            prop: n,
            defaultProp: r ?? [],
            onChange: i,
            caller: E
          }), u = o.useCallback(e => a((t = []) => [...t, e]), [a]), d = o.useCallback(e => a((t = []) => t.filter(t => t !== e)), [a]);
          return (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            value: c,
            onItemOpen: u,
            onItemClose: d,
            children: (0, p.jsx)(G, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, p.jsx)(J, {
                ...s,
                ref: t
              })
            })
          })
        }, "AccordionImplMultiple")),
        [q, Y] = U(E),
        J = o.forwardRef(M(function(e, t) {
          const {
            __scopeAccordion: n,
            disabled: r,
            dir: i,
            orientation: l = "vertical",
            ...u
          } = e, d = o.useRef(null), f = (0, s.s)(d, t), h = T(n), m = "ltr" === (0, k.jH)(i), y = (0, c.mK)(e.onKeyDown, e => {
            if (!P.includes(e.key)) return;
            const t = e.target,
              n = h().filter(e => !e.ref.current?.disabled),
              o = n.findIndex(e => e.ref.current === t),
              r = n.length;
            if (-1 === o) return;
            e.preventDefault();
            let i = o;
            const s = r - 1,
              c = M(() => {
                i = o + 1, i > s && (i = 0)
              }, "moveNext"),
              a = M(() => {
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
                "horizontal" === l && (m ? c() : a());
                break;
              case "ArrowDown":
                "vertical" === l && c();
                break;
              case "ArrowLeft":
                "horizontal" === l && (m ? a() : c());
                break;
              case "ArrowUp":
                "vertical" === l && a()
            }
            const u = i % r;
            n[u].ref.current?.focus()
          });
          return (0, p.jsx)(q, {
            scope: n,
            disabled: r,
            direction: i,
            orientation: l,
            children: (0, p.jsx)(D.Slot, {
              scope: n,
              children: (0, p.jsx)(a.sG.div, {
                ...u,
                "data-orientation": l,
                ref: f,
                onKeyDown: r ? void 0 : y
              })
            })
          })
        }, "AccordionImpl")),
        Q = "AccordionItem",
        [X, Z] = U(Q),
        ee = o.forwardRef(M(function(e, t) {
          const {
            __scopeAccordion: n,
            value: o,
            ...r
          } = e, i = Y(Q, n), s = V(Q, n), c = $(n), l = (0, f.useId)(), a = o && s.value.includes(o) || !1, u = i.disabled || e.disabled;
          return (0, p.jsx)(X, {
            scope: n,
            open: a,
            disabled: u,
            triggerId: l,
            children: (0, p.jsx)(I, {
              "data-orientation": i.orientation,
              "data-state": ie(a),
              ...c,
              ...r,
              ref: t,
              disabled: u,
              open: a,
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
          } = e, r = Y(E, n), i = Z("AccordionHeader", n);
          return (0, p.jsx)(a.sG.h3, {
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
          } = e, r = Y(E, n), i = Z(ne, n), s = W(ne, n), c = $(n);
          return (0, p.jsx)(D.ItemSlot, {
            scope: n,
            children: (0, p.jsx)(j, {
              "aria-disabled": i.open && !s.collapsible || void 0,
              "data-orientation": r.orientation,
              id: i.triggerId,
              ...c,
              ...o,
              ref: t
            })
          })
        }, "AccordionTrigger")),
        re = o.forwardRef(M(function(e, t) {
          const {
            __scopeAccordion: n,
            ...o
          } = e, r = Y(E, n), i = Z("AccordionContent", n), s = $(n);
          return (0, p.jsx)(_, {
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
      var se = F,
        ce = ee,
        le = te,
        ae = oe,
        ue = re
    },
    97620(e, t, n) {
      n.d(t, {
        N: () => u
      });
      var o = n(4637),
        r = n(72579),
        i = n(85049),
        s = n(49481),
        c = n(39793),
        l = Object.defineProperty,
        a = (e, t) => l(e, "name", {
          value: t,
          configurable: !0
        });

      function u(e) {
        const t = e + "CollectionProvider",
          [n, l] = (0, r.A)(t),
          [u, d] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          f = a(e => {
            const {
              scope: t,
              children: n
            } = e, r = o.useRef(null), i = o.useRef(new Map).current;
            return (0, c.jsx)(u, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          }, "CollectionProvider");
        f.displayName = t;
        const p = e + "CollectionSlot",
          h = (0, s.createSlot)(p),
          m = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: o
            } = e, r = d(p, n), s = (0, i.s)(t, r.collectionRef);
            return (0, c.jsx)(h, {
              ref: s,
              children: o
            })
          });
        m.displayName = p;
        const y = e + "CollectionItemSlot",
          b = "data-radix-collection-item",
          g = (0, s.createSlot)(y),
          v = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...s
            } = e, l = o.useRef(null), a = (0, i.s)(t, l), u = d(y, n);
            return o.useEffect(() => (u.itemMap.set(l, {
              ref: l,
              ...s
            }), () => {
              u.itemMap.delete(l)
            })), (0, c.jsx)(g, {
              [b]: "",
              ref: a,
              children: r
            })
          });

        function w(t) {
          const n = d(e + "CollectionConsumer", t);
          return o.useCallback(() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${b}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
          }, [n.collectionRef, n.itemMap])
        }
        return v.displayName = y, a(w, "useCollection"), [{
          Provider: f,
          Slot: m,
          ItemSlot: v
        }, w, l]
      }
      a(u, "createCollection");
      var d = new WeakMap,
        f = class e extends Map {
          static {
            a(this, "OrderedDict")
          }
          #e;
          constructor(e) {
            super(e), this.#e = [...super.keys()], d.set(this, !0)
          }
          set(e, t) {
            return d.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
          }
          insert(e, t, n) {
            const o = this.has(t),
              r = this.#e.length,
              i = m(e);
            let s = i >= 0 ? i : r + i;
            const c = s < 0 || s >= r ? -1 : s;
            if (c === this.size || o && c === this.size - 1 || -1 === c) return this.set(t, n), this;
            const l = this.size + (o ? 0 : 1);
            i < 0 && s++;
            const a = [...this.#e];
            let u, d = !1;
            for (let e = s; e < l; e++)
              if (s === e) {
                let r = a[e];
                a[e] === t && (r = a[e + 1]), o && this.delete(t), u = this.get(r), this.set(t, n)
              } else {
                d || a[e - 1] !== t || (d = !0);
                const n = a[d ? e : e - 1],
                  o = u;
                u = this.get(n), this.delete(n), this.set(n, o)
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
            const t = p(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = p(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return p(this.#e, e)
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

      function p(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const n = h(e, t);
        return -1 === n ? void 0 : e[n]
      }

      function h(e, t) {
        const n = e.length,
          o = m(t),
          r = o >= 0 ? o : n + o;
        return r < 0 || r >= n ? -1 : r
      }

      function m(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function y(e, t) {
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

      function b(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function g(e, t) {
        return e[1].element && t[1].element ? b(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function v(e) {
        return new MutationObserver(t => {
          for (const n of t)
            if ("childList" === n.type) return void e()
        })
      }
      a(p, "at"), a(h, "toSafeIndex"), a(m, "toSafeInteger"), a(function(e) {
        const t = e + "CollectionProvider",
          [n, l] = (0, r.A)(t),
          [u, d] = n(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new f,
            setItemMap: a(() => {}, "setItemMap")
          }),
          p = a(({
            state: e,
            ...t
          }) => e ? (0, c.jsx)(m, {
            ...t,
            state: e
          }) : (0, c.jsx)(h, {
            ...t
          }), "CollectionProvider");
        p.displayName = t;
        const h = a(e => {
          const t = N();
          return (0, c.jsx)(m, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        h.displayName = t + "Init";
        const m = a(e => {
          const {
            scope: t,
            children: n,
            state: r
          } = e, s = o.useRef(null), [l, a] = o.useState(null), d = (0, i.s)(s, a), [f, p] = r;
          return o.useEffect(() => {
            if (!l) return;
            const e = v(() => {});
            return e.observe(l, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [l]), (0, c.jsx)(u, {
            scope: t,
            itemMap: f,
            setItemMap: p,
            collectionRef: d,
            collectionRefObject: s,
            collectionElement: l,
            children: n
          })
        }, "CollectionProviderImpl");
        m.displayName = t + "Impl";
        const b = e + "CollectionSlot",
          w = (0, s.createSlot)(b),
          C = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: o
            } = e, r = d(b, n), s = (0, i.s)(t, r.collectionRef);
            return (0, c.jsx)(w, {
              ref: s,
              children: o
            })
          });
        C.displayName = b;
        const x = e + "CollectionItemSlot",
          A = "data-radix-collection-item",
          R = (0, s.createSlot)(x),
          O = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...s
            } = e, l = o.useRef(null), [a, u] = o.useState(null), p = (0, i.s)(t, l, u), h = d(x, n), {
              setItemMap: m
            } = h, b = o.useRef(s);
            y(b.current, s) || (b.current = s);
            const v = b.current;
            return o.useEffect(() => {
              const e = v;
              return m(t => a ? t.has(a) ? t.set(a, {
                ...e,
                element: a
              }).toSorted(g) : (t.set(a, {
                ...e,
                element: a
              }), t.toSorted(g)) : t), () => {
                m(e => a && e.has(a) ? (e.delete(a), new f(e)) : e)
              }
            }, [a, v, m]), (0, c.jsx)(R, {
              [A]: "",
              ref: p,
              children: r
            })
          });

        function N() {
          return o.useState(new f)
        }

        function I(t) {
          const {
            itemMap: n
          } = d(e + "CollectionConsumer", t);
          return n
        }
        return O.displayName = x, a(N, "useInitCollection"), a(I, "useCollection"), [{
          Provider: p,
          Slot: C,
          ItemSlot: O
        }, {
          createCollectionScope: l,
          useCollection: I,
          useInitCollection: N
        }]
      }, "createCollection"), a(y, "shallowEqual"), a(b, "isElementPreceding"), a(g, "sortByDocumentPosition"), a(v, "getChildListObserver")
    },
    85049(e, t, n) {
      n.d(t, {
        s: () => l
      });
      var o = n(4637),
        r = Object.defineProperty,
        i = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        });

      function s(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function c(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = s(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : s(e[t], null)
            }
          }
        }
      }

      function l(...e) {
        return o.useCallback(c(...e), e)
      }
      i(s, "setRef"), i(c, "composeRefs"), i(l, "useComposedRefs")
    },
    72579(e, t, n) {
      n.d(t, {
        A: () => c
      });
      var o = n(4637),
        r = n(39793),
        i = Object.defineProperty,
        s = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        });

      function c(e, t = []) {
        let n = [];

        function i(t, i) {
          const c = o.createContext(i);
          c.displayName = t + "Context";
          const l = n.length;
          n = [...n, i];
          const a = s(t => {
            const {
              scope: n,
              children: i,
              ...s
            } = t, a = n?.[e]?.[l] || c, u = o.useMemo(() => s, Object.values(s));
            return (0, r.jsx)(a.Provider, {
              value: u,
              children: i
            })
          }, "Provider");

          function u(n, r, s = {}) {
            const {
              optional: a = !1
            } = s, u = r?.[e]?.[l] || c, d = o.useContext(u);
            if (d) return d;
            if (void 0 !== i) return i;
            if (!a) throw new Error(`\`${n}\` must be used within \`${t}\``)
          }
          return a.displayName = t + "Provider", s(u, "useContext"), [a, u]
        }
        s(i, "createContext");
        const c = s(() => {
          const t = n.map(e => o.createContext(e));
          return s(function(n) {
            const r = n?.[e] || t;
            return o.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            }), [n, r])
          }, "useScope")
        }, "createScope");
        return c.scopeName = e, [i, l(c, ...t)]
      }

      function l(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = s(() => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return s(function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: o
            }) => ({
              ...t,
              ...n(e)[`__scope${o}`]
            }), {});
            return o.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }, "useComposedScopes")
        }, "createScope");
        return n.scopeName = t.scopeName, n
      }
      s(function(e, t) {
        const n = o.createContext(t);
        n.displayName = e + "Context";
        const i = s(e => {
          const {
            children: t,
            ...i
          } = e, s = o.useMemo(() => i, Object.values(i));
          return (0, r.jsx)(n.Provider, {
            value: s,
            children: t
          })
        }, "Provider");

        function c(r, i = {}) {
          const {
            optional: s = !1
          } = i, c = o.useContext(n);
          if (c) return c;
          if (void 0 !== t) return t;
          if (!s) throw new Error(`\`${r}\` must be used within \`${e}\``)
        }
        return i.displayName = e + "Provider", s(c, "useContext"), [i, c]
      }, "createContext"), s(c, "createContextScope"), s(l, "composeContextScopes")
    },
    90049(e, t, n) {
      n.d(t, {
        jH: () => s
      });
      var o = n(4637),
        r = (n(39793), Object.defineProperty),
        i = o.createContext(void 0);

      function s(e) {
        const t = o.useContext(i);
        return e || t || "ltr"
      }
      r(s, "name", {
        value: "useDirection",
        configurable: !0
      })
    },
    81432(e, t, n) {
      n.d(t, {
        C: () => l
      });
      var o = n(4637),
        r = n(9608),
        i = Object.defineProperty,
        s = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        });

      function c(e, t) {
        return o.useReducer((e, n) => t[e][n] ?? e, e)
      }
      s(c, "useStateMachine");
      var l = s(e => {
        const {
          present: t,
          children: n
        } = e, r = a(t), i = "function" == typeof n ? n({
          present: r.isPresent
        }) : o.Children.only(n), s = d(r.ref, p(i));
        return "function" == typeof n || r.isPresent ? o.cloneElement(i, {
          ref: s
        }) : null
      }, "Presence");

      function a(e) {
        const [t, n] = o.useState(), i = o.useRef(null), l = o.useRef(e), a = o.useRef("none"), u = o.useRef(void 0), d = e ? "mounted" : "unmounted", [p, h] = c(d, {
          mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
          },
          unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
          },
          unmounted: {
            MOUNT: "mounted"
          }
        });
        return o.useEffect(() => {
          "mounted" === p ? (a.current = u.current ?? f(i.current), u.current = void 0) : a.current = "none"
        }, [p]), (0, r.N)(() => {
          const t = i.current,
            n = l.current;
          if (n !== e) {
            const o = a.current,
              r = f(t);
            e ? (u.current = r, h("MOUNT")) : h("none" === r || "none" === t?.display ? "UNMOUNT" : n && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), l.current = e
          }
        }, [e, h]), (0, r.N)(() => {
          if (t) {
            let e;
            const n = t.ownerDocument.defaultView ?? window,
              o = s(o => {
                const r = f(i.current).includes(CSS.escape(o.animationName));
                if (o.target === t && r && (h("ANIMATION_END"), !l.current)) {
                  const o = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                    "forwards" === t.style.animationFillMode && (t.style.animationFillMode = o)
                  })
                }
              }, "handleAnimationEnd"),
              r = s(e => {
                e.target === t && (a.current = f(i.current))
              }, "handleAnimationStart");
            return t.addEventListener("animationstart", r), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
              n.clearTimeout(e), t.removeEventListener("animationstart", r), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o)
            }
          }
          h("ANIMATION_END")
        }, [t, h]), {
          isPresent: ["mounted", "unmountSuspended"].includes(p),
          ref: o.useCallback(e => {
            if (e) {
              const t = getComputedStyle(e);
              i.current = t, u.current = f(t)
            } else i.current = null;
            n(e)
          }, [])
        }
      }

      function u(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function d(...e) {
        const t = o.useRef(e);
        return t.current = e, o.useCallback(e => {
          const n = t.current;
          let o = !1;
          const r = n.map(t => {
            const n = u(t, e);
            return o || "function" != typeof n || (o = !0), n
          });
          if (o) return () => {
            for (let e = 0; e < r.length; e++) {
              const t = r[e];
              "function" == typeof t ? t() : u(n[e], null)
            }
          }
        }, [])
      }

      function f(e) {
        return e?.animationName || "none"
      }

      function p(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
      }
      s(a, "usePresence"), s(u, "setRef"), s(d, "useStableComposedRefs"), s(f, "getAnimationName"), s(p, "getElementRef")
    },
    41988(e, t, n) {
      n.d(t, {
        hO: () => a,
        sG: () => l
      });
      var o = n(4637),
        r = n(84017),
        i = n(49481),
        s = n(39793),
        c = Object.defineProperty,
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, i.createSlot)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...i
              } = e, c = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(c, {
                ...i,
                ref: o
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function a(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
      c(a, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    9608(e, t, n) {
      n.d(t, {
        N: () => r
      });
      var o = n(4637),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);