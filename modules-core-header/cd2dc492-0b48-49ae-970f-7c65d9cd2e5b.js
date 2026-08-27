try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cd2dc492-0b48-49ae-970f-7c65d9cd2e5b", e._sentryDebugIdIdentifier = "sentry-dbid-cd2dc492-0b48-49ae-970f-7c65d9cd2e5b")
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
  [147], {
    97620(e, t, n) {
      n.d(t, {
        N: () => l
      });
      var o = n(4637),
        r = n(72579),
        i = n(85049),
        s = n(49481),
        a = n(39793),
        u = Object.defineProperty,
        c = (e, t) => u(e, "name", {
          value: t,
          configurable: !0
        });

      function l(e) {
        const t = e + "CollectionProvider",
          [n, u] = (0, r.A)(t),
          [l, d] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          f = c(e => {
            const {
              scope: t,
              children: n
            } = e, r = o.useRef(null), i = o.useRef(new Map).current;
            return (0, a.jsx)(l, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          }, "CollectionProvider");
        f.displayName = t;
        const v = e + "CollectionSlot",
          h = (0, s.createSlot)(v),
          p = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: o
            } = e, r = d(v, n), s = (0, i.s)(t, r.collectionRef);
            return (0, a.jsx)(h, {
              ref: s,
              children: o
            })
          });
        p.displayName = v;
        const g = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          w = (0, s.createSlot)(g),
          y = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...s
            } = e, u = o.useRef(null), c = (0, i.s)(t, u), l = d(g, n);
            return o.useEffect(() => (l.itemMap.set(u, {
              ref: u,
              ...s
            }), () => {
              l.itemMap.delete(u)
            })), (0, a.jsx)(w, {
              [m]: "",
              ref: c,
              children: r
            })
          });

        function C(t) {
          const n = d(e + "CollectionConsumer", t);
          return o.useCallback(() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${m}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
          }, [n.collectionRef, n.itemMap])
        }
        return y.displayName = g, c(C, "useCollection"), [{
          Provider: f,
          Slot: p,
          ItemSlot: y
        }, C, u]
      }
      c(l, "createCollection");
      var d = new WeakMap,
        f = class e extends Map {
          static {
            c(this, "OrderedDict")
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
              i = p(e);
            let s = i >= 0 ? i : r + i;
            const a = s < 0 || s >= r ? -1 : s;
            if (a === this.size || o && a === this.size - 1 || -1 === a) return this.set(t, n), this;
            const u = this.size + (o ? 0 : 1);
            i < 0 && s++;
            const c = [...this.#e];
            let l, d = !1;
            for (let e = s; e < u; e++)
              if (s === e) {
                let r = c[e];
                c[e] === t && (r = c[e + 1]), o && this.delete(t), l = this.get(r), this.set(t, n)
              } else {
                d || c[e - 1] !== t || (d = !0);
                const n = c[d ? e : e - 1],
                  o = l;
                l = this.get(n), this.delete(n), this.set(n, o)
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
            const t = v(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = v(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return v(this.#e, e)
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

      function v(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const n = h(e, t);
        return -1 === n ? void 0 : e[n]
      }

      function h(e, t) {
        const n = e.length,
          o = p(t),
          r = o >= 0 ? o : n + o;
        return r < 0 || r >= n ? -1 : r
      }

      function p(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function g(e, t) {
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

      function m(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function w(e, t) {
        return e[1].element && t[1].element ? m(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function y(e) {
        return new MutationObserver(t => {
          for (const n of t)
            if ("childList" === n.type) return void e()
        })
      }
      c(v, "at"), c(h, "toSafeIndex"), c(p, "toSafeInteger"), c(function(e) {
        const t = e + "CollectionProvider",
          [n, u] = (0, r.A)(t),
          [l, d] = n(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new f,
            setItemMap: c(() => {}, "setItemMap")
          }),
          v = c(({
            state: e,
            ...t
          }) => e ? (0, a.jsx)(p, {
            ...t,
            state: e
          }) : (0, a.jsx)(h, {
            ...t
          }), "CollectionProvider");
        v.displayName = t;
        const h = c(e => {
          const t = E();
          return (0, a.jsx)(p, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        h.displayName = t + "Init";
        const p = c(e => {
          const {
            scope: t,
            children: n,
            state: r
          } = e, s = o.useRef(null), [u, c] = o.useState(null), d = (0, i.s)(s, c), [f, v] = r;
          return o.useEffect(() => {
            if (!u) return;
            const e = y(() => {});
            return e.observe(u, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [u]), (0, a.jsx)(l, {
            scope: t,
            itemMap: f,
            setItemMap: v,
            collectionRef: d,
            collectionRefObject: s,
            collectionElement: u,
            children: n
          })
        }, "CollectionProviderImpl");
        p.displayName = t + "Impl";
        const m = e + "CollectionSlot",
          C = (0, s.createSlot)(m),
          M = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: o
            } = e, r = d(m, n), s = (0, i.s)(t, r.collectionRef);
            return (0, a.jsx)(C, {
              ref: s,
              children: o
            })
          });
        M.displayName = m;
        const R = e + "CollectionItemSlot",
          b = "data-radix-collection-item",
          x = (0, s.createSlot)(R),
          N = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...s
            } = e, u = o.useRef(null), [c, l] = o.useState(null), v = (0, i.s)(t, u, l), h = d(R, n), {
              setItemMap: p
            } = h, m = o.useRef(s);
            g(m.current, s) || (m.current = s);
            const y = m.current;
            return o.useEffect(() => {
              const e = y;
              return p(t => c ? t.has(c) ? t.set(c, {
                ...e,
                element: c
              }).toSorted(w) : (t.set(c, {
                ...e,
                element: c
              }), t.toSorted(w)) : t), () => {
                p(e => c && e.has(c) ? (e.delete(c), new f(e)) : e)
              }
            }, [c, y, p]), (0, a.jsx)(x, {
              [b]: "",
              ref: v,
              children: r
            })
          });

        function E() {
          return o.useState(new f)
        }

        function k(t) {
          const {
            itemMap: n
          } = d(e + "CollectionConsumer", t);
          return n
        }
        return N.displayName = R, c(E, "useInitCollection"), c(k, "useCollection"), [{
          Provider: v,
          Slot: M,
          ItemSlot: N
        }, {
          createCollectionScope: u,
          useCollection: k,
          useInitCollection: E
        }]
      }, "createCollection"), c(g, "shallowEqual"), c(m, "isElementPreceding"), c(w, "sortByDocumentPosition"), c(y, "getChildListObserver")
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
    40147(e, t, n) {
      n.r(t), n.d(t, {
        Content: () => be,
        Indicator: () => Re,
        Item: () => ye,
        Link: () => Me,
        List: () => we,
        NavigationMenu: () => A,
        NavigationMenuContent: () => X,
        NavigationMenuIndicator: () => q,
        NavigationMenuItem: () => G,
        NavigationMenuLink: () => U,
        NavigationMenuList: () => F,
        NavigationMenuSub: () => L,
        NavigationMenuTrigger: () => B,
        NavigationMenuViewport: () => ne,
        Root: () => ge,
        Sub: () => me,
        Trigger: () => Ce,
        Viewport: () => xe,
        createNavigationMenuScope: () => _
      });
      var o = n(4637),
        r = n(84017),
        i = n(72579),
        s = n(44752),
        a = n(41988),
        u = n(44622),
        c = n(85049),
        l = n(90049),
        d = n(81432),
        f = n(31431),
        v = n(97620),
        h = n(78077),
        p = n(19046),
        g = n(9608),
        m = n(7198),
        w = n(68565),
        y = n(39793),
        C = Object.defineProperty,
        M = (e, t) => C(e, "name", {
          value: t,
          configurable: !0
        }),
        R = "NavigationMenu",
        [b, x, N] = (0, v.N)(R),
        [E, k, I] = (0, v.N)(R),
        [j, _] = (0, i.A)(R, [N, I]),
        [T, S] = j(R),
        [P, O] = j(R),
        A = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            value: r,
            onValueChange: i,
            defaultValue: s,
            delayDuration: d = 200,
            skipDelayDuration: f = 300,
            orientation: v = "horizontal",
            dir: h,
            ...p
          } = e, [g, m] = o.useState(null), w = (0, c.s)(t, m), C = (0, l.jH)(h), b = o.useRef(0), x = o.useRef(0), N = o.useRef(0), [E, k] = o.useState(!0), [I, j] = (0, u.useControllableState)({
            prop: r,
            onChange: M(e => {
              const t = f > 0;
              "" !== e ? (window.clearTimeout(N.current), t && k(!1)) : (window.clearTimeout(N.current), N.current = window.setTimeout(() => k(!0), f)), i?.(e)
            }, "onChange"),
            defaultProp: s ?? "",
            caller: R
          }), _ = o.useCallback(() => {
            window.clearTimeout(x.current), x.current = window.setTimeout(() => j(""), 150)
          }, [j]), T = o.useCallback(e => {
            window.clearTimeout(x.current), j(e)
          }, [j]), S = o.useCallback(e => {
            I === e ? window.clearTimeout(x.current) : b.current = window.setTimeout(() => {
              window.clearTimeout(x.current), j(e)
            }, d)
          }, [I, j, d]);
          return o.useEffect(() => () => {
            window.clearTimeout(b.current), window.clearTimeout(x.current), window.clearTimeout(N.current)
          }, []), (0, y.jsx)(K, {
            scope: n,
            isRootMenu: !0,
            value: I,
            dir: C,
            orientation: v,
            rootNavigationMenu: g,
            onTriggerEnter: e => {
              window.clearTimeout(b.current), E ? S(e) : T(e)
            },
            onTriggerLeave: () => {
              window.clearTimeout(b.current), _()
            },
            onContentEnter: () => window.clearTimeout(x.current),
            onContentLeave: _,
            onItemSelect: e => {
              j(t => t === e ? "" : e)
            },
            onItemDismiss: () => j(""),
            children: (0, y.jsx)(a.sG.nav, {
              "aria-label": "Main",
              "data-orientation": v,
              dir: C,
              ...p,
              ref: w
            })
          })
        }, "NavigationMenu")),
        D = "NavigationMenuSub",
        L = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            value: o,
            onValueChange: r,
            defaultValue: i,
            orientation: s = "horizontal",
            ...c
          } = e, l = S(D, n), [d, f] = (0, u.useControllableState)({
            prop: o,
            onChange: r,
            defaultProp: i ?? "",
            caller: D
          });
          return (0, y.jsx)(K, {
            scope: n,
            isRootMenu: !1,
            value: d,
            dir: l.dir,
            orientation: s,
            rootNavigationMenu: l.rootNavigationMenu,
            onTriggerEnter: e => f(e),
            onItemSelect: e => f(e),
            onItemDismiss: () => f(""),
            children: (0, y.jsx)(a.sG.div, {
              "data-orientation": s,
              ...c,
              ref: t
            })
          })
        }, "NavigationMenuSub")),
        K = M(e => {
          const {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: r,
            dir: i,
            orientation: s,
            children: a,
            value: u,
            onItemSelect: c,
            onItemDismiss: l,
            onTriggerEnter: d,
            onTriggerLeave: v,
            onContentEnter: h,
            onContentLeave: g
          } = e, [w, C] = o.useState(null), [M, R] = o.useState(new Map), [x, N] = o.useState(null);
          return (0, y.jsx)(T, {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: r,
            value: u,
            previousValue: (0, p.Z)(u),
            baseId: (0, f.useId)(),
            dir: i,
            orientation: s,
            viewport: w,
            onViewportChange: C,
            indicatorTrack: x,
            onIndicatorTrackChange: N,
            onTriggerEnter: (0, m.c)(d),
            onTriggerLeave: (0, m.c)(v),
            onContentEnter: (0, m.c)(h),
            onContentLeave: (0, m.c)(g),
            onItemSelect: (0, m.c)(c),
            onItemDismiss: (0, m.c)(l),
            onViewportContentChange: o.useCallback((e, t) => {
              R(n => (n.set(e, t), new Map(n)))
            }, []),
            onViewportContentRemove: o.useCallback(e => {
              R(t => t.has(e) ? (t.delete(e), new Map(t)) : t)
            }, []),
            children: (0, y.jsx)(b.Provider, {
              scope: t,
              children: (0, y.jsx)(P, {
                scope: t,
                items: M,
                children: a
              })
            })
          })
        }, "NavigationMenuProvider"),
        F = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            ...o
          } = e, r = S("NavigationMenuList", n), i = (0, y.jsx)(a.sG.ul, {
            "data-orientation": r.orientation,
            ...o,
            ref: t
          });
          return (0, y.jsx)(a.sG.div, {
            style: {
              position: "relative"
            },
            ref: r.onIndicatorTrackChange,
            children: (0, y.jsx)(b.Slot, {
              scope: n,
              children: r.isRootMenu ? (0, y.jsx)(ie, {
                asChild: !0,
                children: i
              }) : i
            })
          })
        }, "NavigationMenuList")),
        [z, V] = j("NavigationMenuItem"),
        G = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            value: r,
            ...i
          } = e, s = (0, f.useId)(), u = r || s || "LEGACY_REACT_AUTO_VALUE", c = o.useRef(null), l = o.useRef(null), d = o.useRef(null), v = o.useRef(() => {}), h = o.useRef(!1), p = o.useCallback((e = "start") => {
            if (c.current) {
              v.current();
              const t = ue(c.current);
              t.length && ce("start" === e ? t : t.reverse())
            }
          }, []), g = o.useCallback(() => {
            if (c.current) {
              const e = ue(c.current);
              e.length && (v.current = le(e))
            }
          }, []);
          return (0, y.jsx)(z, {
            scope: n,
            value: u,
            triggerRef: l,
            contentRef: c,
            focusProxyRef: d,
            wasEscapeCloseRef: h,
            onEntryKeyDown: p,
            onFocusProxyEnter: p,
            onRootContentClose: g,
            onContentFocusOutside: g,
            children: (0, y.jsx)(a.sG.li, {
              ...i,
              ref: t
            })
          })
        }, "NavigationMenuItem")),
        $ = "NavigationMenuTrigger",
        B = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            disabled: r,
            ...i
          } = e, u = S($, e.__scopeNavigationMenu), l = V($, e.__scopeNavigationMenu), d = o.useRef(null), f = (0, c.s)(d, l.triggerRef, t), v = ve(u.baseId, l.value), h = he(u.baseId, l.value), p = o.useRef(!1), g = o.useRef(!1), m = l.value === u.value;
          return (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)(b.ItemSlot, {
              scope: n,
              value: l.value,
              children: (0, y.jsx)(ae, {
                asChild: !0,
                children: (0, y.jsx)(a.sG.button, {
                  id: v,
                  disabled: r,
                  "data-disabled": r ? "" : void 0,
                  "data-state": fe(m),
                  "aria-expanded": m,
                  "aria-controls": m ? h : void 0,
                  ...i,
                  ref: f,
                  onPointerEnter: (0, s.mK)(e.onPointerEnter, () => {
                    g.current = !1, l.wasEscapeCloseRef.current = !1
                  }),
                  onPointerMove: (0, s.mK)(e.onPointerMove, pe(() => {
                    r || g.current || l.wasEscapeCloseRef.current || p.current || (u.onTriggerEnter(l.value), p.current = !0)
                  })),
                  onPointerLeave: (0, s.mK)(e.onPointerLeave, pe(() => {
                    r || (u.onTriggerLeave(), p.current = !1)
                  })),
                  onClick: (0, s.mK)(e.onClick, () => {
                    u.onItemSelect(l.value), g.current = m
                  }),
                  onKeyDown: (0, s.mK)(e.onKeyDown, e => {
                    const t = {
                      horizontal: "ArrowDown",
                      vertical: "rtl" === u.dir ? "ArrowLeft" : "ArrowRight"
                    } [u.orientation];
                    m && e.key === t && (l.onEntryKeyDown(), e.preventDefault())
                  })
                })
              })
            }), m && (0, y.jsxs)(y.Fragment, {
              children: [(0, y.jsx)(w.Root, {
                "aria-hidden": !0,
                tabIndex: 0,
                ref: l.focusProxyRef,
                onFocus: e => {
                  const t = l.contentRef.current,
                    n = e.relatedTarget,
                    o = n === d.current,
                    r = t?.contains(n);
                  !o && r || l.onFocusProxyEnter(o ? "start" : "end")
                }
              }), u.viewport && (0, y.jsx)("span", {
                "aria-owns": h
              })]
            })]
          })
        }, "NavigationMenuTrigger")),
        H = "navigationMenu.linkSelect",
        U = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            active: o,
            onSelect: r,
            ...i
          } = e;
          return (0, y.jsx)(ae, {
            asChild: !0,
            children: (0, y.jsx)(a.sG.a, {
              "data-active": o ? "" : void 0,
              "aria-current": o ? "page" : void 0,
              ...i,
              ref: t,
              onClick: (0, s.mK)(e.onClick, e => {
                const t = e.target,
                  n = new CustomEvent(H, {
                    bubbles: !0,
                    cancelable: !0
                  });
                if (t.addEventListener(H, e => r?.(e), {
                    once: !0
                  }), (0, a.hO)(t, n), !n.defaultPrevented && !e.metaKey) {
                  const e = new CustomEvent(Q, {
                    bubbles: !0,
                    cancelable: !0
                  });
                  (0, a.hO)(t, e)
                }
              }, {
                checkForDefaultPrevented: !1
              })
            })
          })
        }, "NavigationMenuLink")),
        W = "NavigationMenuIndicator",
        q = o.forwardRef(M(function(e, t) {
          const {
            forceMount: n,
            ...o
          } = e, i = S(W, e.__scopeNavigationMenu), s = Boolean(i.value);
          return i.indicatorTrack ? r.createPortal((0, y.jsx)(d.C, {
            present: n || s,
            children: (0, y.jsx)(Y, {
              ...o,
              ref: t
            })
          }), i.indicatorTrack) : null
        }, "NavigationMenuIndicator")),
        Y = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            ...r
          } = e, i = S(W, n), s = x(n), [u, c] = o.useState(null), [l, d] = o.useState(null), f = "horizontal" === i.orientation, v = Boolean(i.value);
          o.useEffect(() => {
            const e = s(),
              t = e.find(e => e.value === i.value)?.ref.current;
            t && c(t)
          }, [s, i.value]);
          const h = M(() => {
            u && d({
              size: f ? u.offsetWidth : u.offsetHeight,
              offset: f ? u.offsetLeft : u.offsetTop
            })
          }, "handlePositionChange");
          return de(u, h), de(i.indicatorTrack, h), l ? (0, y.jsx)(a.sG.div, {
            "aria-hidden": !0,
            "data-state": v ? "visible" : "hidden",
            "data-orientation": i.orientation,
            ...r,
            ref: t,
            style: {
              position: "absolute",
              ...f ? {
                left: 0,
                width: l.size + "px",
                transform: `translateX(${l.offset}px)`,
                "--radix-navigation-menu-indicator-translate-x": `${l.offset}px`
              } : {
                top: 0,
                height: l.size + "px",
                transform: `translateY(${l.offset}px)`,
                "--radix-navigation-menu-indicator-translate-y": `${l.offset}px`
              },
              ...r.style
            }
          }) : null
        }, "NavigationMenuIndicatorImpl")),
        Z = "NavigationMenuContent",
        X = o.forwardRef(M(function(e, t) {
          const {
            forceMount: n,
            ...o
          } = e, r = S(Z, e.__scopeNavigationMenu), i = V(Z, e.__scopeNavigationMenu), a = (0, c.s)(i.contentRef, t), u = i.value === r.value, l = {
            value: i.value,
            triggerRef: i.triggerRef,
            focusProxyRef: i.focusProxyRef,
            wasEscapeCloseRef: i.wasEscapeCloseRef,
            onContentFocusOutside: i.onContentFocusOutside,
            onRootContentClose: i.onRootContentClose,
            ...o
          };
          return r.viewport ? (0, y.jsx)(J, {
            forceMount: n,
            ...l,
            ref: a
          }) : (0, y.jsx)(d.C, {
            present: n || u,
            children: (0, y.jsx)(ee, {
              "data-state": fe(u),
              ...l,
              ref: a,
              onPointerEnter: (0, s.mK)(e.onPointerEnter, r.onContentEnter),
              onPointerLeave: (0, s.mK)(e.onPointerLeave, pe(r.onContentLeave)),
              style: {
                pointerEvents: !u && r.isRootMenu ? "none" : void 0,
                ...l.style
              }
            })
          })
        }, "NavigationMenuContent")),
        J = o.forwardRef(M(function(e, t) {
          const n = S(Z, e.__scopeNavigationMenu),
            {
              onViewportContentChange: o,
              onViewportContentRemove: r
            } = n;
          return (0, g.N)(() => {
            o(e.value, {
              ref: t,
              ...e
            })
          }, [e, t, o]), (0, g.N)(() => () => r(e.value), [e.value, r]), null
        }, "ViewportContentMounter")),
        Q = "navigationMenu.rootContentDismiss",
        ee = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            value: r,
            triggerRef: i,
            focusProxyRef: a,
            wasEscapeCloseRef: u,
            onRootContentClose: l,
            onContentFocusOutside: d,
            ...f
          } = e, v = S(Z, n), p = o.useRef(null), g = (0, c.s)(p, t), m = ve(v.baseId, r), w = he(v.baseId, r), C = x(n), R = o.useRef(null), {
            onItemDismiss: b
          } = v;
          o.useEffect(() => {
            const e = p.current;
            if (v.isRootMenu && e) {
              const t = M(() => {
                b(), l(), e.contains(document.activeElement) && i.current?.focus()
              }, "handleClose");
              return e.addEventListener(Q, t), () => e.removeEventListener(Q, t)
            }
          }, [v.isRootMenu, e.value, i, b, l]);
          const N = o.useMemo(() => {
            const e = C().map(e => e.value);
            "rtl" === v.dir && e.reverse();
            const t = e.indexOf(v.value),
              n = e.indexOf(v.previousValue),
              o = r === v.value,
              i = n === e.indexOf(r);
            if (!o && !i) return R.current;
            const s = (() => {
              if (t !== n) {
                if (o && -1 !== n) return t > n ? "from-end" : "from-start";
                if (i && -1 !== t) return t > n ? "to-start" : "to-end"
              }
              return null
            })();
            return R.current = s, s
          }, [v.previousValue, v.value, v.dir, C, r]);
          return (0, y.jsx)(ie, {
            asChild: !0,
            children: (0, y.jsx)(h.qW, {
              id: w,
              "aria-labelledby": m,
              "data-motion": N,
              "data-orientation": v.orientation,
              ...f,
              ref: g,
              disableOutsidePointerEvents: !1,
              onDismiss: () => {
                const e = new Event(Q, {
                  bubbles: !0,
                  cancelable: !0
                });
                p.current?.dispatchEvent(e)
              },
              onFocusOutside: (0, s.mK)(e.onFocusOutside, e => {
                d();
                const t = e.target;
                v.rootNavigationMenu?.contains(t) && e.preventDefault()
              }),
              onPointerDownOutside: (0, s.mK)(e.onPointerDownOutside, e => {
                const t = e.target,
                  n = C().some(e => e.ref.current?.contains(t)),
                  o = v.isRootMenu && v.viewport?.contains(t);
                (n || o || !v.isRootMenu) && e.preventDefault()
              }),
              onKeyDown: (0, s.mK)(e.onKeyDown, e => {
                const t = e.altKey || e.ctrlKey || e.metaKey;
                if ("Tab" === e.key && !t) {
                  const t = ue(e.currentTarget),
                    n = document.activeElement,
                    o = t.findIndex(e => e === n);
                  ce(e.shiftKey ? t.slice(0, o).reverse() : t.slice(o + 1, t.length)) ? e.preventDefault() : a.current?.focus()
                }
              }),
              onEscapeKeyDown: (0, s.mK)(e.onEscapeKeyDown, e => {
                u.current = !0
              })
            })
          })
        }, "NavigationMenuContentImpl")),
        te = "NavigationMenuViewport",
        ne = o.forwardRef(M(function(e, t) {
          const {
            forceMount: n,
            ...o
          } = e, r = S(te, e.__scopeNavigationMenu), i = Boolean(r.value);
          return (0, y.jsx)(d.C, {
            present: n || i,
            children: (0, y.jsx)(oe, {
              ...o,
              ref: t
            })
          })
        }, "NavigationMenuViewport")),
        oe = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            children: r,
            ...i
          } = e, u = S(te, n), l = (0, c.s)(t, u.onViewportChange), f = O(Z, e.__scopeNavigationMenu), [v, h] = o.useState(null), [p, g] = o.useState(null), m = v ? v?.width + "px" : void 0, w = v ? v?.height + "px" : void 0, C = Boolean(u.value), R = C ? u.value : u.previousValue;
          return de(p, M(() => {
            p && h({
              width: p.offsetWidth,
              height: p.offsetHeight
            })
          }, "handleSizeChange")), (0, y.jsx)(a.sG.div, {
            "data-state": fe(C),
            "data-orientation": u.orientation,
            ...i,
            ref: l,
            style: {
              pointerEvents: !C && u.isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": m,
              "--radix-navigation-menu-viewport-height": w,
              ...i.style
            },
            onPointerEnter: (0, s.mK)(e.onPointerEnter, u.onContentEnter),
            onPointerLeave: (0, s.mK)(e.onPointerLeave, pe(u.onContentLeave)),
            children: Array.from(f.items).map(([e, {
              ref: t,
              forceMount: n,
              ...o
            }]) => {
              const r = R === e;
              return (0, y.jsx)(d.C, {
                present: n || r,
                children: (0, y.jsx)(re, {
                  ...o,
                  contentRef: t,
                  isActive: r,
                  onActiveContentChange: g
                })
              }, e)
            })
          })
        }, "NavigationMenuViewportImpl")),
        re = M(({
          contentRef: e,
          isActive: t,
          onActiveContentChange: n,
          ...r
        }) => {
          const i = o.useCallback(e => {
              t && e && n(e)
            }, [t, n]),
            s = (0, c.s)(e, i);
          return (0, y.jsx)(ee, {
            ...r,
            ref: s
          })
        }, "NavigationMenuViewportItem"),
        ie = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            ...o
          } = e, r = S("FocusGroup", n);
          return (0, y.jsx)(E.Provider, {
            scope: n,
            children: (0, y.jsx)(E.Slot, {
              scope: n,
              children: (0, y.jsx)(a.sG.div, {
                dir: r.dir,
                ...o,
                ref: t
              })
            })
          })
        }, "FocusGroup")),
        se = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        ae = o.forwardRef(M(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            ...o
          } = e, r = k(n), i = S("FocusGroupItem", n);
          return (0, y.jsx)(E.ItemSlot, {
            scope: n,
            children: (0, y.jsx)(a.sG.button, {
              ...o,
              ref: t,
              onKeyDown: (0, s.mK)(e.onKeyDown, e => {
                if (["Home", "End", ...se].includes(e.key)) {
                  let t = r().map(e => e.ref.current);
                  if (["rtl" === i.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(), se.includes(e.key)) {
                    const n = t.indexOf(e.currentTarget);
                    t = t.slice(n + 1)
                  }
                  setTimeout(() => ce(t)), e.preventDefault()
                }
              })
            })
          })
        }, "FocusGroupItem"));

      function ue(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: M(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function ce(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }

      function le(e) {
        return e.forEach(e => {
          e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
        }), () => {
          e.forEach(e => {
            const t = e.dataset.tabindex;
            e.setAttribute("tabindex", t)
          })
        }
      }

      function de(e, t) {
        const n = (0, m.c)(t);
        (0, g.N)(() => {
          let t = 0;
          if (e) {
            const o = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            });
            return o.observe(e), () => {
              window.cancelAnimationFrame(t), o.unobserve(e)
            }
          }
        }, [e, n])
      }

      function fe(e) {
        return e ? "open" : "closed"
      }

      function ve(e, t) {
        return `${e}-trigger-${t}`
      }

      function he(e, t) {
        return `${e}-content-${t}`
      }

      function pe(e) {
        return t => "mouse" === t.pointerType ? e(t) : void 0
      }
      M(ue, "getTabbableCandidates"), M(ce, "focusFirst"), M(le, "removeFromTabOrder"), M(de, "useResizeObserver"), M(fe, "getOpenState"), M(ve, "makeTriggerId"), M(he, "makeContentId"), M(pe, "whenMouse");
      var ge = A,
        me = L,
        we = F,
        ye = G,
        Ce = B,
        Me = U,
        Re = q,
        be = X,
        xe = ne
    },
    19046(e, t, n) {
      n.d(t, {
        Z: () => r
      });
      var o = n(4637);

      function r(e) {
        const t = o.useRef({
          value: e,
          previous: e
        });
        return o.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }(0, Object.defineProperty)(r, "name", {
        value: "usePrevious",
        configurable: !0
      })
    }
  }
]);