try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "909d719f-009e-46d5-affb-786c55066443", e._sentryDebugIdIdentifier = "sentry-dbid-909d719f-009e-46d5-affb-786c55066443")
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
  [1156], {
    43431(e) {
      var t, n, r = e.exports = {};

      function s() {
        throw new Error("setTimeout has not been defined")
      }

      function o() {
        throw new Error("clearTimeout has not been defined")
      }

      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === s || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : s
        } catch (e) {
          t = s
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
          n = o
        }
      }();
      var a, c = [],
        u = !1,
        l = -1;

      function d() {
        u && a && (u = !1, a.length ? c = a.concat(c) : l = -1, c.length && p())
      }

      function p() {
        if (!u) {
          var e = i(d);
          u = !0;
          for (var t = c.length; t;) {
            for (a = c, c = []; ++l < t;) a && a[l].run();
            l = -1, t = c.length
          }
          a = null, u = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function h(e, t) {
        this.fun = e, this.array = t
      }

      function m() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || u || i(p)
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    87216(e, t, n) {
      "use strict";
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      n.d(t, ["T", 0, r])
    },
    56951(e, t, n) {
      "use strict";
      n.d(t, {
        qd: () => c,
        wg: () => l,
        y7: () => u
      });
      var r = n(63668),
        s = n(56186),
        o = n(87216),
        i = n(91199);
      const a = {};

      function c(e) {
        const t = a[e];
        if (t) return t;
        let n = i.j[e];
        if ((0, s.a3)(n)) return a[e] = n.bind(i.j);
        const c = i.j.document;
        if (c && "function" == typeof c.createElement) try {
          const t = c.createElement("iframe");
          t.hidden = !0, c.head.appendChild(t);
          const r = t.contentWindow;
          r?.[e] && (n = r[e]), c.head.removeChild(t)
        } catch (t) {
          o.T && r.Yz.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t)
        }
        return n ? a[e] = n.bind(i.j) : n
      }

      function u(e) {
        a[e] = void 0
      }

      function l(...e) {
        return c("setTimeout")(...e)
      }
    },
    17796(e, t, n) {
      "use strict";
      n.d(t, {
        H: () => i
      });
      var r = n(24158);
      const s = {};
      try {
        "undefined" != typeof Node && (s.parentNode = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode").get), "undefined" != typeof Element && (s.tagName = Object.getOwnPropertyDescriptor(Element.prototype, "tagName").get, s.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get, s.className = Object.getOwnPropertyDescriptor(Element.prototype, "className").get, s.getAttribute = Element.prototype.getAttribute), "undefined" != typeof HTMLElement && (s.dataset = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "dataset").get)
      } catch {}

      function o(e, t, n) {
        const r = s[t];
        if (r) try {
          return r.call(e, n)
        } catch {}
        const o = e[t];
        return "function" == typeof o ? o.call(e, n) : o
      }

      function i(e, t = {}) {
        if (!e) return "<unknown>";
        try {
          let n = e;
          const r = 5,
            s = [];
          let i = 0,
            c = 0;
          const u = " > ",
            l = u.length;
          let d;
          const p = Array.isArray(t) ? t : t.keyAttrs,
            h = !Array.isArray(t) && t.maxStringLength || 80;
          for (; n && i++ < r && (d = a(n, p), !("html" === d || i > 1 && c + s.length * l + d.length >= h));) s.push(d), c += d.length, n = o(n, "parentNode");
          return s.reverse().join(u)
        } catch {
          return "<unknown>"
        }
      }

      function a(e, t) {
        const n = [],
          s = o(e, "tagName");
        if (!s) return "";
        if ("undefined" != typeof HTMLElement && e instanceof HTMLElement) {
          const t = o(e, "dataset");
          if (t) {
            if (t.sentryComponent) return t.sentryComponent;
            if (t.sentryElement) return t.sentryElement
          }
        }
        n.push(s.toLowerCase());
        const i = t?.length ? t.filter(t => o(e, "getAttribute", t)).map(t => [t, o(e, "getAttribute", t)]) : null;
        if (i?.length) i.forEach(e => {
          n.push(`[${e[0]}="${e[1]}"]`)
        });
        else {
          const t = o(e, "id");
          t && n.push(`#${t}`);
          const s = o(e, "className");
          if (s && (0, r.Kg)(s)) {
            const e = s.split(/\s+/);
            for (const t of e) n.push(`.${t}`)
          }
        }
        for (const t of ["aria-label", "type", "name", "title", "alt"]) {
          const r = o(e, "getAttribute", t);
          r && n.push(`[${t}="${r}"]`)
        }
        return n.join("")
      }
    },
    82186(e, t, n) {
      "use strict";
      n.d(t, {
        i: () => l
      });
      var r = n(80113),
        s = n(27874),
        o = n(50733),
        i = n(91199);
      let a, c, u;

      function l(e) {
        (0, r.s5)("dom", e), (0, r.AS)("dom", d)
      }

      function d() {
        if (!i.j.document) return;
        const e = r.aj.bind(null, "dom"),
          t = p(e, !0);
        i.j.document.addEventListener("click", t, !1), i.j.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
          const n = i.j,
            r = n[t]?.prototype;
          r?.hasOwnProperty?.("addEventListener") && ((0, o.GS)(r, "addEventListener", function(t) {
            return function(n, r, s) {
              if ("click" === n || "keypress" == n) try {
                const r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                  o = r[n] = r[n] || {
                    refCount: 0
                  };
                if (!o.handler) {
                  const r = p(e);
                  o.handler = r, t.call(this, n, r, s)
                }
                o.refCount++
              } catch {}
              return t.call(this, n, r, s)
            }
          }), (0, o.GS)(r, "removeEventListener", function(e) {
            return function(t, n, r) {
              if ("click" === t || "keypress" == t) try {
                const n = this.__sentry_instrumentation_handlers__ || {},
                  s = n[t];
                s && (s.refCount--, s.refCount <= 0 && (e.call(this, t, s.handler, r), s.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
              } catch {}
              return e.call(this, t, n, r)
            }
          }))
        })
      }

      function p(e, t = !1) {
        return n => {
          if (!n || n._sentryCaptured) return;
          const r = function(e) {
            try {
              return e.target
            } catch {
              return null
            }
          }(n);
          if (function(e, t) {
              return "keypress" === e && (!t?.tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable)
            }(n.type, r)) return;
          (0, o.my)(n, "_sentryCaptured", !0), r && !r._sentryId && (0, o.my)(r, "_sentryId", (0, s.eJ)());
          const l = "keypress" === n.type ? "input" : n.type;
          (function(e) {
            if (e.type !== c) return !1;
            try {
              if (!e.target || e.target._sentryId !== u) return !1
            } catch {}
            return !0
          })(n) || (e({
            event: n,
            name: l,
            global: t
          }), c = n.type, u = r ? r._sentryId : void 0), clearTimeout(a), a = i.j.setTimeout(() => {
            u = void 0, c = void 0
          }, 1e3)
        }
      }
    },
    39774(e, t, n) {
      "use strict";
      n.d(t, {
        _: () => c
      });
      var r = n(80113),
        s = n(50733),
        o = n(56186),
        i = n(91199);
      let a;

      function c(e) {
        const t = "history";
        (0, r.s5)(t, e), (0, r.AS)(t, u)
      }

      function u() {
        function e(e) {
          return function(...t) {
            const n = t.length > 2 ? t[2] : void 0;
            if (n) {
              const s = a,
                o = function(e) {
                  try {
                    return new URL(e, i.j.location.origin).toString()
                  } catch {
                    return e
                  }
                }(String(n));
              if (a = o, s === o) return e.apply(this, t);
              const c = {
                from: s,
                to: o
              };
              (0, r.aj)("history", c)
            }
            return e.apply(this, t)
          }
        }
        i.j.addEventListener("popstate", () => {
          const e = i.j.location.href,
            t = a;
          if (a = e, t === e) return;
          const n = {
            from: t,
            to: e
          };
          (0, r.aj)("history", n)
        }), (0, o.NJ)() && ((0, s.GS)(i.j.history, "pushState", e), (0, s.GS)(i.j.history, "replaceState", e))
      }
    },
    70336(e, t, n) {
      "use strict";
      n.d(t, {
        Mn: () => c
      });
      var r = n(80113),
        s = n(24158),
        o = n(83883),
        i = n(91199);
      const a = "__sentry_xhr_v3__";

      function c(e) {
        (0, r.s5)("xhr", e), (0, r.AS)("xhr", u)
      }

      function u() {
        if (!i.j.XMLHttpRequest) return;
        const e = XMLHttpRequest.prototype;
        e.open = new Proxy(e.open, {
          apply(e, t, n) {
            const i = new Error,
              c = 1e3 * (0, o.zf)(),
              u = (0, s.Kg)(n[0]) ? n[0].toUpperCase() : void 0,
              l = function(e) {
                if ((0, s.Kg)(e)) return e;
                try {
                  return e.toString()
                } catch {}
              }(n[1]);
            if (!u || !l) return e.apply(t, n);
            t[a] = {
              method: u,
              url: l,
              request_headers: {}
            }, "POST" === u && l.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
            const d = () => {
              const e = t[a];
              if (e && 4 === t.readyState) {
                try {
                  e.status_code = t.status
                } catch {}
                const n = {
                  endTimestamp: 1e3 * (0, o.zf)(),
                  startTimestamp: c,
                  xhr: t,
                  virtualError: i
                };
                (0, r.aj)("xhr", n), t.removeEventListener("readystatechange", d)
              }
            };
            return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
              apply: (e, t, n) => (d(), e.apply(t, n))
            }) : t.addEventListener("readystatechange", d), t.setRequestHeader = new Proxy(t.setRequestHeader, {
              apply(e, t, n) {
                const [r, o] = n, i = t[a];
                return i && (0, s.Kg)(r) && (0, s.Kg)(o) && (i.request_headers[r.toLowerCase()] = o), e.apply(t, n)
              }
            }), e.apply(t, n)
          }
        }), e.send = new Proxy(e.send, {
          apply(e, t, n) {
            const s = t[a];
            if (!s) return e.apply(t, n);
            void 0 !== n[0] && (s.body = n[0]);
            const i = {
              startTimestamp: 1e3 * (0, o.zf)(),
              xhr: t
            };
            return (0, r.aj)("xhr", i), e.apply(t, n)
          }
        })
      }
      n.d(t, ["Er", 0, a])
    },
    27511(e, t, n) {
      "use strict";
      n.d(t, {
        a9: () => U,
        hT: () => W,
        Pt: () => q,
        wv: () => Y,
        YG: () => H,
        tC: () => te
      });
      var r = n(63668),
        s = n(71507),
        o = n(87216),
        i = n(91199);
      const a = (e, t, n, r) => {
        let s, o;
        return i => {
          t.value >= 0 && (i || r) && (o = t.value - (s ?? 0), (o || void 0 === s) && (s = t.value, t.delta = o, t.rating = ((e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(t.value, n), e(t)))
        }
      };
      var c = n(77515),
        u = n(76587),
        l = n(38325);
      const d = (e, t = -1) => {
          const n = (0, l.z)();
          let r = "navigate";
          return n && (i.j.document?.prerendering || (0, u.b)() > 0 ? r = "prerender" : i.j.document?.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
            name: e,
            value: t,
            rating: "good",
            delta: 0,
            entries: [],
            id: `v5-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
            navigationType: r
          }
        },
        p = new WeakMap;

      function h(e, t) {
        try {
          return p.get(e) || p.set(e, new t), p.get(e)
        } catch (e) {
          return new t
        }
      }
      class m {
        constructor() {
          this._sessionValue = 0, this._sessionEntries = []
        }
        _processEntry(e) {
          if (e.hadRecentInput) return;
          const t = this._sessionEntries[0],
            n = this._sessionEntries[this._sessionEntries.length - 1];
          this._sessionValue && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [e]), this._onAfterProcessingUnexpectedShift?.(e)
        }
      }
      const f = (e, t, n = {}) => {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            const r = new PerformanceObserver(e => {
              Promise.resolve().then(() => {
                t(e.getEntries())
              })
            });
            return r.observe({
              type: e,
              buffered: !0,
              ...n
            }), r
          }
        } catch {}
      };
      var g = n(71183);
      const y = e => {
          i.j.document?.prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
        },
        v = [1800, 3e3],
        _ = [.1, .25];
      let S = 0,
        b = 1 / 0,
        k = 0;
      const w = e => {
        e.forEach(e => {
          e.interactionId && (b = Math.min(b, e.interactionId), k = Math.max(k, e.interactionId), S = k ? (k - b) / 7 + 1 : 0)
        })
      };
      let T;
      const E = () => T ? S : performance.interactionCount || 0,
        I = () => {
          "interactionCount" in performance || T || (T = f("event", w, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
          }))
        };
      let C = 0;
      class x {
        constructor() {
          this._longestInteractionList = [], this._longestInteractionMap = new Map
        }
        _resetInteractions() {
          C = E(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear()
        }
        _estimateP98LongestInteraction() {
          const e = Math.min(this._longestInteractionList.length - 1, Math.floor((E() - C) / 50));
          return this._longestInteractionList[e]
        }
        _processEntry(e) {
          if (this._onBeforeProcessingEntry?.(e), !e.interactionId && "first-input" !== e.entryType) return;
          const t = this._longestInteractionList.at(-1);
          let n = this._longestInteractionMap.get(e.interactionId);
          if (n || this._longestInteractionList.length < 10 || e.duration > t._latency) {
            if (n ? e.duration > n._latency ? (n.entries = [e], n._latency = e.duration) : e.duration === n._latency && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                id: e.interactionId,
                entries: [e],
                _latency: e.duration
              }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort((e, t) => t._latency - e._latency), this._longestInteractionList.length > 10) {
              const e = this._longestInteractionList.splice(10);
              for (const t of e) this._longestInteractionMap.delete(t.id)
            }
            this._onAfterProcessingINPCandidate?.(n)
          }
        }
      }
      var M = n(1544);
      const R = [200, 500];
      var O = n(64583);
      class A {
        _processEntry(e) {
          this._onBeforeProcessingEntry?.(e)
        }
      }
      const D = [2500, 4e3],
        L = [800, 1800],
        N = e => {
          i.j.document?.prerendering ? y(() => N(e)) : "complete" !== i.j.document?.readyState ? addEventListener("load", () => N(e), !0) : setTimeout(e)
        },
        P = {},
        z = {};
      let j, $, F, B;

      function U(e, t = !1) {
        return Q("cls", e, J, j, t)
      }

      function q(e, t = !1) {
        return Q("lcp", e, G, $, t)
      }

      function H(e) {
        return Q("ttfb", e, V, F)
      }

      function W(e) {
        return Q("inp", e, X, B)
      }

      function Y(e, t) {
        return Z(e, t), z[e] || (function(e) {
          const t = {};
          "event" === e && (t.durationThreshold = 0), f(e, t => {
            K(e, {
              entries: t
            })
          }, t)
        }(e), z[e] = !0), ee(e, t)
      }

      function K(e, t) {
        const n = P[e];
        if (n?.length)
          for (const i of n) try {
            i(t)
          } catch (t) {
            o.T && r.Yz.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${(0,s.qQ)(i)}\nError:`, t)
          }
      }

      function J() {
        return ((e, t = {}) => {
          ((e, t = {}) => {
            y(() => {
              const n = (0, c.N)(),
                r = d("FCP");
              let s;
              const o = f("paint", e => {
                for (const t of e) "first-contentful-paint" === t.name && (o.disconnect(), t.startTime < n.firstHiddenTime && (r.value = Math.max(t.startTime - (0, u.b)(), 0), r.entries.push(t), s(!0)))
              });
              o && (s = a(e, r, v, t.reportAllChanges))
            })
          })((0, g.J)(() => {
            const n = d("CLS", 0);
            let r;
            const s = (0, c.N)(),
              o = h(t, m),
              u = e => {
                for (const t of e) o._processEntry(t);
                o._sessionValue > n.value && (n.value = o._sessionValue, n.entries = o._sessionEntries, r())
              },
              l = f("layout-shift", u);
            l && (r = a(e, n, _, t.reportAllChanges), s.onHidden(() => {
              u(l.takeRecords()), r(!0)
            }), i.j?.setTimeout?.(r))
          }))
        })(e => {
          K("cls", {
            metric: e
          }), j = e
        }, {
          reportAllChanges: !0
        })
      }

      function G() {
        return ((e, t = {}) => {
          y(() => {
            const n = (0, c.N)(),
              r = d("LCP");
            let s;
            const o = h(t, A),
              i = e => {
                t.reportAllChanges || (e = e.slice(-1));
                for (const t of e) o._processEntry(t), t.startTime < n.firstHiddenTime && (r.value = Math.max(t.startTime - (0, u.b)(), 0), r.entries = [t], s())
              },
              l = f("largest-contentful-paint", i);
            if (l) {
              s = a(e, r, D, t.reportAllChanges);
              const n = (0, g.J)(() => {
                  i(l.takeRecords()), l.disconnect(), s(!0)
                }),
                o = e => {
                  e.isTrusted && ((0, M.k)(n), (0, O.Q)(e.type, o, {
                    capture: !0
                  }))
                };
              for (const e of ["keydown", "click", "visibilitychange"])(0, O.d)(e, o, {
                capture: !0
              })
            }
          })
        })(e => {
          K("lcp", {
            metric: e
          }), $ = e
        }, {
          reportAllChanges: !0
        })
      }

      function V() {
        return ((e, t = {}) => {
          const n = d("TTFB"),
            r = a(e, n, L, t.reportAllChanges);
          N(() => {
            const e = (0, l.z)();
            e && (n.value = Math.max(e.responseStart - (0, u.b)(), 0), n.entries = [e], r(!0))
          })
        })(e => {
          K("ttfb", {
            metric: e
          }), F = e
        })
      }

      function X() {
        return ((e, t = {}) => {
          if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
          const n = (0, c.N)();
          y(() => {
            I();
            const r = d("INP");
            let s;
            const o = h(t, x),
              i = e => {
                (0, M.k)(() => {
                  for (const t of e) o._processEntry(t);
                  const t = o._estimateP98LongestInteraction();
                  t && t._latency !== r.value && (r.value = t._latency, r.entries = t.entries, s())
                })
              },
              c = f("event", i, {
                durationThreshold: t.durationThreshold ?? 40
              });
            s = a(e, r, R, t.reportAllChanges), c && (c.observe({
              type: "first-input",
              buffered: !0
            }), n.onHidden(() => {
              i(c.takeRecords()), s(!0)
            }))
          })
        })(e => {
          K("inp", {
            metric: e
          }), B = e
        })
      }

      function Q(e, t, n, r, s = !1) {
        let o;
        return Z(e, t), z[e] || (o = n(), z[e] = !0), r && t({
          metric: r
        }), ee(e, t, s ? o : void 0)
      }

      function Z(e, t) {
        P[e] = P[e] || [], P[e].push(t)
      }

      function ee(e, t, n) {
        return () => {
          n && n();
          const r = P[e];
          if (!r) return;
          const s = r.indexOf(t); - 1 !== s && r.splice(s, 1)
        }
      }

      function te(e) {
        return "duration" in e
      }
    },
    76587(e, t, n) {
      "use strict";
      var r = n(38325);
      n.d(t, ["b", 0, () => {
        const e = (0, r.z)();
        return e?.activationStart ?? 0
      }])
    },
    38325(e, t, n) {
      "use strict";
      var r = n(91199);
      n.d(t, ["z", 0, (e = !0) => {
        const t = r.j.performance?.getEntriesByType?.("navigation")[0];
        if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t
      }])
    },
    77515(e, t, n) {
      "use strict";
      var r = n(91199),
        s = n(76587),
        o = n(64583);
      let i = -1;
      const a = new Set,
        c = e => {
          if (function(e) {
              return "pagehide" === e.type || "hidden" === r.j.document?.visibilityState
            }(e) && i > -1) {
            if ("visibilitychange" === e.type || "pagehide" === e.type)
              for (const e of a) e();
            isFinite(i) || (i = "visibilitychange" === e.type ? e.timeStamp : 0, (0, o.Q)("prerenderingchange", c, !0))
          }
        };
      n.d(t, ["N", 0, () => {
        if (r.j.document && i < 0) {
          const e = (0, s.b)(),
            t = r.j.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(t => "hidden" === t.name && t.startTime > e)[0]?.startTime;
          i = t ?? ("hidden" !== r.j.document?.visibilityState || r.j.document?.prerendering ? 1 / 0 : 0), (0, o.d)("visibilitychange", c, !0), (0, o.d)("pagehide", c, !0), (0, o.d)("prerenderingchange", c, !0)
        }
        return {
          get firstHiddenTime() {
            return i
          },
          onHidden(e) {
            a.add(e)
          }
        }
      }])
    },
    64583(e, t, n) {
      "use strict";
      n.d(t, {
        Q: () => o,
        d: () => s
      });
      var r = n(91199);

      function s(e, t, n) {
        r.j.document && r.j.addEventListener(e, t, n)
      }

      function o(e, t, n) {
        r.j.document && r.j.removeEventListener(e, t, n)
      }
    },
    71183(e, t, n) {
      "use strict";
      n.d(t, ["J", 0, e => {
        let t = !1;
        return () => {
          t || (e(), t = !0)
        }
      }])
    },
    1544(e, t, n) {
      "use strict";
      var r = n(91199),
        s = n(64583),
        o = n(71183);
      n.d(t, ["k", 0, e => {
        const t = r.j.requestIdleCallback || r.j.setTimeout;
        "hidden" === r.j.document?.visibilityState ? e() : (e = (0, o.J)(e), (0, s.d)("visibilitychange", e, {
          once: !0,
          capture: !0
        }), (0, s.d)("pagehide", e, {
          once: !0,
          capture: !0
        }), t(() => {
          e(), (0, s.Q)("visibilitychange", e, {
            capture: !0
          }), (0, s.Q)("pagehide", e, {
            capture: !0
          })
        }))
      }])
    },
    907(e, t, n) {
      "use strict";
      n.d(t, {
        Gv: () => c,
        P4: () => i,
        sY: () => a,
        ti: () => u
      });
      var r = n(63668),
        s = n(87216);
      const o = Symbol.for("sentry__originalRequestBody");

      function i(e) {
        return new URLSearchParams(e).toString()
      }

      function a(e, t = r.Yz) {
        try {
          if ("string" == typeof e) return [e];
          if (e instanceof URLSearchParams) return [e.toString()];
          if (e instanceof FormData) return [i(e)];
          if (!e) return [void 0]
        } catch (n) {
          return s.T && t.error(n, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
        }
        return s.T && t.log("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
      }

      function c(e = []) {
        if (e.length >= 2 && e[1] && "object" == typeof e[1] && "body" in e[1]) return e[1].body;
        if (e.length >= 1 && e[0] instanceof Request) {
          const t = e[0][o];
          return void 0 !== t ? t : void 0
        }
      }

      function u(e) {
        let t;
        try {
          t = e.getAllResponseHeaders()
        } catch (t) {
          return s.T && r.Yz.error(t, "Failed to get xhr response headers", e), {}
        }
        return t ? t.split("\r\n").reduce((e, t) => {
          const [n, r] = t.split(": ");
          return r && (e[n.toLowerCase()] = r), e
        }, {}) : {}
      }
    },
    91199(e, t, n) {
      "use strict";
      const r = n(91867).O;
      n.d(t, ["j", 0, r])
    },
    5742(e, t, n) {
      "use strict";
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      n.d(t, ["T", 0, r])
    },
    63213(e, t, n) {
      "use strict";
      n.d(t, {
        AP: () => h,
        LV: () => p,
        jN: () => d
      });
      var r = n(16805),
        s = n(49718),
        o = n(91867),
        i = n(27874),
        a = n(50733),
        c = n(28276);
      const u = o.O;
      let l = 0;

      function d() {
        return l > 0
      }

      function p(e, t = {}) {
        if ("function" != typeof e) return e;
        try {
          if (Object.prototype.hasOwnProperty.call(e, "__sentry_wrapped__")) {
            const t = e.__sentry_wrapped__;
            return "function" == typeof t ? t : e
          }
          if ((0, a.sp)(e)) return e
        } catch {
          return e
        }
        const n = function(...n) {
          o.O._sentryWrappedDepth = (o.O._sentryWrappedDepth || 0) + 1;
          try {
            const r = n.map(e => p(e, t));
            return e.apply(this, r)
          } catch (e) {
            throw l++, setTimeout(() => {
              l--
            }), (0, s.v4)(s => {
              s.addEventProcessor(e => (t.mechanism && ((0, i.gO)(e, void 0, void 0), (0, i.M6)(e, t.mechanism)), e.extra = {
                ...e.extra,
                arguments: n
              }, e)), (0, r.Cp)(e)
            }), e
          } finally {
            o.O._sentryWrappedDepth = (o.O._sentryWrappedDepth || 0) - 1
          }
        };
        try {
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
        } catch {}(0, a.pO)(n, e), (0, a.my)(e, "__sentry_wrapped__", n);
        try {
          Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
            get: () => e.name
          })
        } catch {}
        return n
      }

      function h() {
        const e = (0, c.$N)(),
          {
            referrer: t
          } = u.document || {},
          {
            userAgent: n
          } = u.navigator || {};
        return {
          url: e,
          headers: {
            ...t && {
              Referer: t
            },
            ...n && {
              "User-Agent": n
            }
          }
        }
      }
      n.d(t, ["jf", 0, u])
    },
    66829(e, t, n) {
      "use strict";
      n.d(t, {
        Ts: () => At
      });
      var r = n(52244),
        s = n(88164),
        o = n(63668);

      function i(e) {
        const t = [];
        e.message && t.push(e.message);
        try {
          const n = e.exception.values[e.exception.values.length - 1];
          n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
        } catch {}
        return t
      }
      var a = n(27874),
        c = n(37287);
      const u = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /^Java exception was raised during method invocation$/],
        l = (0, s._C)((e = {}) => {
          let t;
          return {
            name: "EventFilters",
            setup(n) {
              const r = n.getOptions();
              t = p(e, r)
            },
            processEvent(n, s, u) {
              if (!t) {
                const n = u.getOptions();
                t = p(e, n)
              }
              return function(e, t) {
                if (e.type) {
                  if ("transaction" === e.type && function(e, t) {
                      if (!t?.length) return !1;
                      const n = e.transaction;
                      return !!n && (0, c.Xr)(n, t)
                    }(e, t.ignoreTransactions)) return r.T && o.Yz.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,a.$X)(e)}`), !0
                } else {
                  if (function(e, t) {
                      return !!t?.length && i(e).some(e => (0, c.Xr)(e, t))
                    }(e, t.ignoreErrors)) return r.T && o.Yz.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,a.$X)(e)}`), !0;
                  if (function(e) {
                      return !!e.exception?.values?.length && (!e.message && !e.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value))
                    }(e)) return r.T && o.Yz.warn(`Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${(0,a.$X)(e)}`), !0;
                  if (function(e, t) {
                      if (!t?.length) return !1;
                      const n = h(e);
                      return !!n && (0, c.Xr)(n, t)
                    }(e, t.denyUrls)) return r.T && o.Yz.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,a.$X)(e)}.\nUrl: ${h(e)}`), !0;
                  if (! function(e, t) {
                      if (!t?.length) return !0;
                      const n = h(e);
                      return !n || (0, c.Xr)(n, t)
                    }(e, t.allowUrls)) return r.T && o.Yz.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,a.$X)(e)}.\nUrl: ${h(e)}`), !0
                }
                return !1
              }(n, t) ? null : n
            }
          }
        }),
        d = (0, s._C)((e = {}) => ({
          ...l(e),
          name: "InboundFilters"
        }));

      function p(e = {}, t = {}) {
        return {
          allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
          denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
          ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : u],
          ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []]
        }
      }

      function h(e) {
        try {
          const t = [...e.exception?.values ?? []].reverse().find(e => void 0 === e.mechanism?.parent_id && e.stacktrace?.frames?.length),
            n = t?.stacktrace?.frames;
          return n ? function(e = []) {
            for (let t = e.length - 1; t >= 0; t--) {
              const n = e[t];
              if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
            }
            return null
          }(n) : null
        } catch {
          return r.T && o.Yz.error(`Cannot extract url for event ${(0,a.$X)(e)}`), null
        }
      }
      var m = n(49718),
        f = n(50733);
      const g = new WeakMap,
        y = (0, s._C)(() => ({
          name: "FunctionToString",
          setupOnce() {
            const e = Function.prototype.toString;
            try {
              Function.prototype.toString = function(...t) {
                const n = (0, f.sp)(this);
                let r;
                try {
                  g.has((0, m.KU)()) && void 0 !== n && (r = n)
                } catch {}
                return e.apply(r ?? this, t)
              }
            } catch {}
          },
          setup(e) {
            g.set(e, !0)
          }
        }));
      var v = n(91781),
        _ = n(79165);
      const S = (0, s._C)(() => ({
        name: "ConversationId",
        setup(e) {
          e.on("spanStart", e => {
            const t = (0, m.o5)().getScopeData(),
              n = (0, m.rm)().getScopeData(),
              r = t.conversationId || n.conversationId;
            if (r) {
              const {
                op: t,
                data: n,
                description: s
              } = (0, _.et)(e);
              if (!t?.startsWith("gen_ai.") && !n["ai.operationId"] && !s?.startsWith("ai.")) return;
              e.setAttribute(v.Fy, r)
            }
          })
        }
      }));
      var b = n(59069),
        k = n(71507),
        w = n(32923);
      var T = n(16678),
        E = n(33407),
        I = n(45160),
        C = n(71406),
        x = n(48845),
        M = n(10614),
        R = n(4957);

      function O(e, t) {
        const n = t ? "auto" : "never";
        return [{
          type: "log",
          item_count: e.length,
          content_type: "application/vnd.sentry.items.log+json"
        }, {
          version: 2,
          ...(0, R.B)() && {
            ingest_settings: {
              infer_ip: n,
              infer_user_agent: n
            }
          },
          items: e
        }]
      }

      function A(e, t) {
        const n = t ?? function(e) {
          return D().get(e)
        }(e) ?? [];
        if (0 === n.length) return;
        const r = e.getOptions(),
          s = function(e, t, n, r, s) {
            const o = {};
            return t?.sdk && (o.sdk = {
              name: t.sdk.name,
              version: t.sdk.version
            }), n && r && (o.dsn = (0, x.SB)(r)), (0, M.h4)(o, [O(e, s)])
          }(n, r._metadata, r.tunnel, e.getDsn(), e.getDataCollectionOptions().userInfo);
        D().set(e, []), e.emit("flushLogs"), e.sendEnvelope(s)
      }

      function D() {
        return (0, C.BY)("clientToLogBufferMap", () => new WeakMap)
      }
      var L = n(32880),
        N = n(16650),
        P = n(12212),
        z = n(5136),
        j = n(73320);

      function $(e) {
        const t = {
          trace_id: e.trace_id,
          span_id: e.span_id,
          parent_span_id: e.parent_span_id,
          name: e.description || "",
          start_timestamp: e.start_timestamp,
          end_timestamp: e.timestamp || e.start_timestamp,
          status: e.status && "ok" !== e.status && "cancelled" !== e.status ? "error" : "ok",
          is_segment: !1,
          attributes: {
            ...e.data
          },
          links: e.links
        };
        return (0, _.PL)(t)
      }
      var F = n(83883),
        B = n(24158),
        U = n(12116),
        q = n(45179),
        H = n(79340),
        W = n(75995),
        Y = n(71337),
        K = n(57197),
        J = n(81501);
      const G = ["forwarded", "-ip", "remote-", "via", "-user"],
        V = {
          userInfo: !0,
          cookies: !0,
          httpHeaders: {
            request: !0,
            response: !0
          },
          httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
          urlQueryParams: !0,
          graphQL: {
            document: !0,
            variables: !0
          },
          genAI: {
            inputs: !0,
            outputs: !0
          },
          databaseQueryData: !0,
          stackFrameVariables: !0,
          frameContextLines: 5
        };
      const X = "Not capturing exception because it's already been captured.",
        Q = "Discarded session because of missing or non-string release",
        Z = Symbol.for("SentryInternalError"),
        ee = Symbol.for("SentryDoNotSendEventError");

      function te(e) {
        return {
          message: e,
          [Z]: !0
        }
      }

      function ne(e) {
        return {
          message: e,
          [ee]: !0
        }
      }

      function re(e) {
        return (0, B.Z4)(e) && Z in e
      }

      function se(e) {
        return (0, B.Z4)(e) && ee in e
      }

      function oe(e, t, n, r, s) {
        let o, i = 0,
          a = !1;
        e.on(n, () => {
          i = 0, clearTimeout(o), a = !1
        }), e.on(t, t => {
          if (i += r(t), i >= 8e5) s(e);
          else if (!a) {
            const t = e.getOptions()._flushInterval ?? 5e3;
            t > 0 && (a = !0, o = (0, J.G)(setTimeout(() => {
              s(e)
            }, t)))
          }
        }), e.on("flush", () => {
          s(e)
        })
      }
      class ie {
        constructor(e) {
          if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = (0, W.C)(e.transportOptions?.bufferSize ?? 64), this._dataCollection = function(e) {
              const t = null != e.dataCollection ? V : !0 === e.sendDefaultPii ? {
                  userInfo: !0,
                  cookies: !0,
                  httpHeaders: {
                    request: !0,
                    response: !0
                  },
                  httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
                  urlQueryParams: !0,
                  graphQL: {
                    document: !0,
                    variables: !0
                  },
                  genAI: {
                    inputs: !0,
                    outputs: !0
                  },
                  databaseQueryData: !0,
                  stackFrameVariables: !0,
                  frameContextLines: 7
                } : {
                  userInfo: !1,
                  cookies: {
                    deny: G
                  },
                  httpHeaders: {
                    request: {
                      deny: G
                    },
                    response: {
                      deny: G
                    }
                  },
                  httpBodies: [],
                  urlQueryParams: {
                    deny: G
                  },
                  graphQL: {
                    document: !0,
                    variables: !0
                  },
                  genAI: {
                    inputs: !1,
                    outputs: !1
                  },
                  databaseQueryData: !1,
                  stackFrameVariables: !0,
                  frameContextLines: 7
                },
                n = e.dataCollection ?? {};
              return {
                userInfo: n.userInfo ?? t.userInfo,
                cookies: n.cookies ?? t.cookies,
                httpHeaders: {
                  request: n.httpHeaders?.request ?? t.httpHeaders.request,
                  response: n.httpHeaders?.response ?? t.httpHeaders.response
                },
                httpBodies: n.httpBodies ?? t.httpBodies,
                urlQueryParams: n.urlQueryParams ?? n.queryParams ?? t.urlQueryParams,
                graphQL: {
                  document: n.graphQL?.document ?? t.graphQL.document,
                  variables: n.graphQL?.variables ?? t.graphQL.variables
                },
                genAI: {
                  inputs: n.genAI?.inputs ?? t.genAI.inputs,
                  outputs: n.genAI?.outputs ?? t.genAI.outputs
                },
                databaseQueryData: n.databaseQueryData ?? t.databaseQueryData,
                stackFrameVariables: n.stackFrameVariables ?? t.stackFrameVariables,
                frameContextLines: n.frameContextLines ?? t.frameContextLines
              }
            }(e), e.dsn ? this._dsn = (0, x.AD)(e.dsn) : r.T && o.Yz.warn("No DSN provided, client will not send events."), this._dsn) {
            const t = (0, T.Z8)(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
              tunnel: this._options.tunnel,
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...e.transportOptions,
              url: t
            })
          }
          this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs, this._options.enableLogs && oe(this, "afterCaptureLog", "flushLogs", de, A), (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? 1) && oe(this, "afterCaptureMetric", "flushMetrics", le, L.NG)
        }
        captureException(e, t, n) {
          const s = (0, a.eJ)();
          if ((0, a.GR)(e)) return r.T && o.Yz.log(X), s;
          const i = {
            event_id: s,
            ...t
          };
          return this._process(() => this.eventFromException(e, i).then(e => this._captureEvent(e, i, n)).then(e => e), "error"), i.event_id
        }
        captureMessage(e, t, n, r) {
          const s = {
              event_id: (0, a.eJ)(),
              ...n
            },
            o = (0, B.NF)(e) ? e : String(e),
            i = (0, B.sO)(e),
            c = i ? this.eventFromMessage(o, t, s) : this.eventFromException(e, s);
          return this._process(() => c.then(e => this._captureEvent(e, s, r)), i ? "unknown" : "error"), s.event_id
        }
        captureEvent(e, t, n) {
          const s = (0, a.eJ)();
          if (t?.originalException && (0, a.GR)(t.originalException)) return r.T && o.Yz.log(X), s;
          const i = {
              event_id: s,
              ...t
            },
            c = e.sdkProcessingMetadata || {},
            u = c.capturedSpanScope,
            l = c.capturedSpanIsolationScope,
            d = ae(e.type);
          return this._process(() => this._captureEvent(e, i, u || n, l), d), i.event_id
        }
        captureSession(e) {
          this.sendSession(e), (0, N.qO)(e, {
            init: !1
          })
        }
        getDsn() {
          return this._dsn
        }
        getOptions() {
          return this._options
        }
        getDataCollectionOptions() {
          return this._dataCollection
        }
        getSdkMetadata() {
          return this._options._metadata
        }
        getTransport() {
          return this._transport
        }
        async flush(e) {
          const t = this._transport;
          if (this.emit("flush"), !t) return !0;
          const n = await this._isClientDoneProcessing(e),
            r = await t.flush(e);
          return n && r
        }
        async close(e) {
          const t = await this.flush(e);
          return this.getOptions().enabled = !1, this.emit("close"), t
        }
        getEventProcessors() {
          return this._eventProcessors
        }
        addEventProcessor(e) {
          this._eventProcessors.push(e)
        }
        init() {
          (this._isEnabled() || this._options.integrations.some(({
            name: e
          }) => e.startsWith("Spotlight"))) && this._setupIntegrations()
        }
        getIntegrationByName(e) {
          return this._integrations[e]
        }
        getIntegrationNames() {
          return Object.keys(this._integrations)
        }
        addIntegration(e) {
          const t = this._integrations[e.name];
          !t && e.beforeSetup && e.beforeSetup(this), (0, s.qm)(this, e, this._integrations), t || (0, s.lc)(this, [e])
        }
        sendEvent(e, t = {}) {
          this.emit("beforeSendEvent", e, t);
          const n = function(e, t) {
            if ("transaction" !== e.type || !e.spans?.length || !e.sdkProcessingMetadata?.hasGenAiSpans || !1 === t.getOptions().streamGenAiSpans || (0, j.K)(t)) return;
            const n = [],
              r = [];
            for (const t of e.spans) t.op?.startsWith("gen_ai.") ? n.push($(t)) : r.push(t);
            if (0 === n.length) return;
            e.spans = r;
            const s = t.getDataCollectionOptions().userInfo ? "auto" : "never";
            return [{
              type: "span",
              item_count: n.length,
              content_type: "application/vnd.sentry.items.span.v2+json"
            }, {
              version: 2,
              ...(0, R.B)() && {
                ingest_settings: {
                  infer_ip: s,
                  infer_user_agent: s
                }
              },
              items: n
            }]
          }(e, this);
          let r = (0, I.V7)(e, this._dsn, this._options._metadata, this._options.tunnel);
          for (const e of t.attachments || []) r = (0, M.W3)(r, (0, M.bm)(e));
          n && (r = (0, M.W3)(r, n)), this.sendEnvelope(r).then(t => this.emit("afterSendEvent", e, t))
        }
        sendSession(e) {
          const {
            release: t,
            environment: n = E.U
          } = this._options;
          if ("aggregates" in e) {
            const s = e.attrs || {};
            if (!s.release && !t) return void(r.T && o.Yz.warn(Q));
            s.release = s.release || t, s.environment = s.environment || n, e.attrs = s
          } else {
            if (!e.release && !t) return void(r.T && o.Yz.warn(Q));
            e.release = e.release || t, e.environment = e.environment || n
          }
          this.emit("beforeSendSession", e);
          const s = (0, I.LE)(e, this._dsn, this._options._metadata, this._options.tunnel);
          this.sendEnvelope(s)
        }
        recordDroppedEvent(e, t, n = 1) {
          if (this._options.sendClientReports) {
            const s = `${e}:${t}`;
            r.T && o.Yz.log(`Recording outcome: "${s}"${n>1?` (${n} times)`:""}`), this._outcomes[s] = (this._outcomes[s] || 0) + n
          }
        }
        on(e, t) {
          const n = this._hooks[e] = this._hooks[e] || new Set,
            r = (...e) => t(...e);
          return n.add(r), () => {
            n.delete(r)
          }
        }
        emit(e, ...t) {
          const n = this._hooks[e];
          n && n.forEach(e => e(...t))
        }
        async sendEnvelope(e) {
          if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) try {
            return await this._transport.send(e)
          } catch (e) {
            return r.T && o.Yz.error("Error while sending envelope:", e), {}
          }
          return r.T && o.Yz.error("Transport disabled"), {}
        }
        registerCleanup(e) {}
        dispose() {}
        _setupIntegrations() {
          const {
            integrations: e
          } = this._options;
          this._integrations = (0, s.P$)(this, e), (0, s.lc)(this, e)
        }
        _updateSessionFromEvent(e, t) {
          let n = "fatal" === t.level,
            r = !1;
          const s = t.exception?.values;
          if (s) {
            r = !0, n = !1;
            for (const e of s)
              if (!1 === e.mechanism?.handled) {
                n = !0;
                break
              }
          }
          const o = "ok" === e.status;
          (o && 0 === e.errors || o && n) && ((0, N.qO)(e, {
            ...n && {
              status: "crashed"
            },
            errors: e.errors || Number(r || n)
          }), this.captureSession(e))
        }
        async _isClientDoneProcessing(e) {
          let t = 0;
          for (; !e || t < e;) {
            if (await new Promise(e => setTimeout(e, 1)), !this._numProcessing) return !0;
            t++
          }
          return !1
        }
        _isEnabled() {
          return !1 !== this.getOptions().enabled && void 0 !== this._transport
        }
        _prepareEvent(e, t, n, r) {
          const s = this.getOptions(),
            o = this.getIntegrationNames();
          return !t.integrations && o.length && (t.integrations = o), this.emit("preprocessEvent", e, t), e.type || r.setLastEventId(e.event_id || t.event_id), (0, H.mG)(s, e, t, n, this, r).then(e => {
            if (null === e) return e;
            this.emit("postprocessEvent", e, t), e.contexts = {
              trace: {
                ...e.contexts?.trace,
                ...(0, m.vn)(n)
              },
              ...e.contexts
            };
            const r = (0, P.ao)(this, n);
            return e.sdkProcessingMetadata = {
              dynamicSamplingContext: r,
              ...e.sdkProcessingMetadata
            }, e
          })
        }
        _captureEvent(e, t = {}, n = (0, m.o5)(), s = (0, m.rm)()) {
          return r.T && ce(e) && o.Yz.log(`Captured error event \`${i(e)[0]||"<unknown>"}\``), this._processEvent(e, t, n, s).then(e => e.event_id, e => {
            r.T && (se(e) ? o.Yz.log(e.message) : re(e) ? o.Yz.warn(e.message) : o.Yz.warn(e))
          })
        }
        _processEvent(e, t, n, r) {
          const s = this.getOptions(),
            {
              sampleRate: o
            } = s,
            i = ue(e),
            a = ce(e),
            c = `before send for type \`${e.type||"error"}\``,
            u = void 0 === o ? void 0 : (0, q.i)(o),
            l = ae(e.type);
          return this._prepareEvent(e, t, n, r).then(e => {
            if (null === e) throw this.recordDroppedEvent("event_processor", l), ne("An event processor returned `null`, will not send event.");
            if (!0 === t.data?.__sentry__) return e;
            const n = function(e, t, n, r) {
              const {
                beforeSend: s,
                beforeSendTransaction: o,
                ignoreSpans: i
              } = t, a = !(0, z.S)(t.beforeSendSpan) && t.beforeSendSpan;
              let c = n;
              if (ce(c) && s) return s(c, r);
              if (ue(c)) {
                if (a || i) {
                  const t = function(e) {
                    const {
                      trace_id: t,
                      parent_span_id: n,
                      span_id: r,
                      status: s,
                      origin: o,
                      data: i,
                      op: a
                    } = e.contexts?.trace ?? {};
                    return {
                      data: i ?? {},
                      description: e.transaction,
                      op: a,
                      parent_span_id: n,
                      span_id: r ?? "",
                      start_timestamp: e.start_timestamp ?? 0,
                      status: s,
                      timestamp: e.timestamp,
                      trace_id: t ?? "",
                      origin: o,
                      profile_id: i?.[v.E1],
                      exclusive_time: i?.[v.jG],
                      measurements: e.measurements,
                      is_segment: !0
                    }
                  }(c);
                  if (i?.length && (0, K.e)({
                      description: t.description,
                      op: t.op,
                      attributes: t.data
                    }, i)) return null;
                  if (a) {
                    const e = a(t);
                    e ? c = (0, U.h)(n, {
                      type: "transaction",
                      timestamp: (u = e).timestamp,
                      start_timestamp: u.start_timestamp,
                      transaction: u.description,
                      contexts: {
                        trace: {
                          trace_id: u.trace_id,
                          span_id: u.span_id,
                          parent_span_id: u.parent_span_id,
                          op: u.op,
                          status: u.status,
                          origin: u.origin,
                          data: {
                            ...u.data,
                            ...u.profile_id && {
                              [v.E1]: u.profile_id
                            },
                            ...u.exclusive_time && {
                              [v.jG]: u.exclusive_time
                            }
                          }
                        }
                      },
                      measurements: u.measurements
                    }) : (0, _.xl)()
                  }
                  if (c.spans) {
                    const t = [],
                      n = c.spans;
                    for (const e of n)
                      if (i?.length && (0, K.e)({
                          description: e.description,
                          op: e.op,
                          attributes: e.data
                        }, i))(0, K.R)(n, e);
                      else if (a) {
                      const n = a(e);
                      n ? t.push(n) : ((0, _.xl)(), t.push(e))
                    } else t.push(e);
                    const r = c.spans.length - t.length;
                    r && e.recordDroppedEvent("before_send", "span", r), c.spans = t
                  }
                }
                if (o) {
                  if (c.spans) {
                    const e = c.spans.length;
                    c.sdkProcessingMetadata = {
                      ...n.sdkProcessingMetadata,
                      spanCountBeforeProcessing: e
                    }
                  }
                  return o(c, r)
                }
              }
              var u;
              return c
            }(this, s, e, t);
            return function(e, t) {
              const n = `${t} must return \`null\` or a valid event.`;
              if ((0, B.Qg)(e)) return e.then(e => {
                if (!(0, B.Qd)(e) && null !== e) throw te(n);
                return e
              }, e => {
                throw te(`${t} rejected with ${e}`)
              });
              if (!(0, B.Qd)(e) && null !== e) throw te(n);
              return e
            }(n, c)
          }).then(s => {
            if (null === s) {
              if (this.recordDroppedEvent("before_send", l), i) {
                const t = 1 + (e.spans || []).length;
                this.recordDroppedEvent("before_send", "span", t)
              }
              throw ne(`${c} returned \`null\`, will not send event.`)
            }
            const d = n.getSession() || r.getSession();
            if (a && d && this._updateSessionFromEvent(d, s), a && "number" == typeof u && (0, Y.hY)() > u) throw this.recordDroppedEvent("sample_rate", "error"), ne(`Discarding event because it's not included in the random sample (sampling rate = ${o})`);
            if (i) {
              const e = (s.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) - (s.spans ? s.spans.length : 0);
              e > 0 && this.recordDroppedEvent("before_send", "span", e)
            }
            const p = s.transaction_info;
            if (i && p && s.transaction !== e.transaction) {
              const e = "custom";
              s.transaction_info = {
                ...p,
                source: e
              }
            }
            return this.sendEvent(s, t), s
          }).then(null, e => {
            if (se(e) || re(e)) throw e;
            throw this.captureException(e, {
              mechanism: {
                handled: !1,
                type: "internal"
              },
              data: {
                __sentry__: !0
              },
              originalException: e
            }), te(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)
          })
        }
        _process(e, t) {
          this._numProcessing++, this._promiseBuffer.add(e).then(e => (this._numProcessing--, e), e => (this._numProcessing--, e === W.a && this.recordDroppedEvent("queue_overflow", t), e))
        }
        _clearOutcomes() {
          const e = this._outcomes;
          return this._outcomes = {}, Object.entries(e).map(([e, t]) => {
            const [n, r] = e.split(":");
            return {
              reason: n,
              category: r,
              quantity: t
            }
          })
        }
        _flushOutcomes() {
          r.T && o.Yz.log("Flushing outcomes...");
          const e = this._clearOutcomes();
          if (0 === e.length) return void(r.T && o.Yz.log("No outcomes to send"));
          if (!this._dsn) return void(r.T && o.Yz.log("No dsn provided, will not send outcomes"));
          r.T && o.Yz.log("Sending outcomes:", e);
          const t = function(e, t) {
            const n = [{
              type: "client_report"
            }, {
              timestamp: (0, F.lu)(),
              discarded_events: e
            }];
            return (0, M.h4)(t ? {
              dsn: t
            } : {}, [n])
          }(e, this._options.tunnel && (0, x.SB)(this._dsn));
          this.sendEnvelope(t)
        }
      }

      function ae(e) {
        return "replay_event" === e ? "replay" : e || "error"
      }

      function ce(e) {
        return void 0 === e.type
      }

      function ue(e) {
        return "transaction" === e.type
      }

      function le(e) {
        let t = 0;
        return e.name && (t += 2 * e.name.length), t += 8, t + pe(e.attributes)
      }

      function de(e) {
        let t = 0;
        return e.message && (t += 2 * e.message.length), t + pe(e.attributes)
      }

      function pe(e) {
        if (!e) return 0;
        let t = 0;
        return Object.values(e).forEach(e => {
          Array.isArray(e) ? t += e.length * he(e[0]) : (0, B.sO)(e) ? t += he(e) : t += 100
        }), t
      }

      function he(e) {
        return "string" == typeof e ? 2 * e.length : "number" == typeof e ? 8 : "boolean" == typeof e ? 4 : 0
      }
      var me = n(55971),
        fe = n(18404);

      function ge(e) {
        "aggregates" in e ? void 0 === e.attrs?.ip_address && (e.attrs = {
          ...e.attrs,
          ip_address: "{{auto}}"
        }) : void 0 === e.ipAddress && (e.ipAddress = "{{auto}}")
      }

      function ye(e) {
        return function(e) {
          return (0, B.bJ)(e) && "__sentry_fetch_url_host__" in e && "string" == typeof e.__sentry_fetch_url_host__
        }(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message
      }
      var ve = n(61072);

      function _e(e, t) {
        const n = be(e, t),
          r = {
            type: Te(t),
            value: Ee(t)
          };
        return n.length && (r.stacktrace = {
          frames: n
        }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
      }

      function Se(e, t) {
        return {
          exception: {
            values: [_e(e, t)]
          }
        }
      }

      function be(e, t) {
        const n = t.stacktrace || t.stack || "",
          r = function(e) {
            return e && ke.test(e.message) ? 1 : 0
          }(t),
          s = function(e) {
            return "number" == typeof e.framesToPop ? e.framesToPop : 0
          }(t);
        try {
          return e(n, r, s)
        } catch {}
        return []
      }
      const ke = /Minified React error #\d+;/i;

      function we(e) {
        return "undefined" != typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception
      }

      function Te(e) {
        const t = e?.name;
        return !t && we(e) ? e.message && Array.isArray(e.message) && 2 == e.message.length ? e.message[0] : "WebAssembly.Exception" : t
      }

      function Ee(e) {
        const t = e?.message;
        return we(e) ? Array.isArray(e.message) && 2 == e.message.length ? e.message[1] : "wasm exception" : t ? t.error && "string" == typeof t.error.message ? ye(t.error) : ye(e) : "No error message"
      }

      function Ie(e, t, n, r, s) {
        let o;
        if ((0, B.T2)(t) && t.error) return Se(e, t.error);
        if ((0, B.BD)(t) || (0, B.W6)(t)) {
          const s = t;
          if ("stack" in t) {
            o = Se(e, t);
            const s = o.exception?.values?.[0];
            if (r && n && s && !s.stacktrace) {
              const t = be(e, n);
              t.length && (s.stacktrace = {
                frames: t
              }, (0, a.M6)(o, {
                synthetic: !0
              }))
            }
          } else {
            const t = s.name || ((0, B.BD)(s) ? "DOMError" : "DOMException"),
              i = s.message ? `${t}: ${s.message}` : t;
            o = Ce(e, i, n, r), (0, a.gO)(o, i)
          }
          return "code" in s && (o.tags = {
            ...o.tags,
            "DOMException.code": `${s.code}`
          }), o
        }
        return (0, B.bJ)(t) ? Se(e, t) : (0, B.Qd)(t) || (0, B.xH)(t) ? (o = function(e, t, n, r) {
          const s = (0, m.KU)(),
            o = s?.getOptions().normalizeDepth,
            i = (a = t, Object.values(a).find(B.bJ));
          var a;
          const c = {
            __serialized__: (0, w.cd)(t, o)
          };
          if (i) return {
            exception: {
              values: [_e(e, i)]
            },
            extra: c
          };
          const u = {
            exception: {
              values: [{
                type: (0, B.xH)(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                value: xe(t, {
                  isUnhandledRejection: r
                })
              }]
            },
            extra: c
          };
          if (n) {
            const t = be(e, n);
            t.length && (u.exception.values[0].stacktrace = {
              frames: t
            })
          }
          return u
        }(e, t, n, s), (0, a.M6)(o, {
          synthetic: !0
        }), o) : (o = Ce(e, t, n, r), (0, a.gO)(o, `${t}`, void 0), (0, a.M6)(o, {
          synthetic: !0
        }), o)
      }

      function Ce(e, t, n, r) {
        const s = {};
        if (r && n) {
          const r = be(e, n);
          r.length && (s.exception = {
            values: [{
              value: t,
              stacktrace: {
                frames: r
              }
            }]
          }), (0, a.M6)(s, {
            synthetic: !0
          })
        }
        if ((0, B.NF)(t)) {
          const {
            __sentry_template_string__: e,
            __sentry_template_values__: n
          } = t;
          return s.logentry = {
            message: e,
            params: n
          }, s
        }
        return s.message = t, s
      }

      function xe(e, {
        isUnhandledRejection: t
      }) {
        const n = (0, f.HF)(e),
          r = t ? "promise rejection" : "exception";
        return (0, B.T2)(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : (0, B.xH)(e) ? `Event \`${function(e){try{const t=Object.getPrototypeOf(e);return t?t.constructor.name:void 0}catch{}}(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
      }
      var Me = n(63213);
      class Re extends ie {
        constructor(e) {
          const t = (n = e, {
            release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : Me.jf.SENTRY_RELEASE?.id,
            sendClientReports: !0,
            parentSpanIsAlwaysRootSpan: !0,
            ...n
          });
          var n;
          ! function(e, t, n = [t], r = "npm") {
            const s = (e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {};
            s.name || (s.name = `sentry.javascript.${t}`, s.packages = n.map(e => ({
              name: `${r}:@sentry/${e}`,
              version: fe.M
            })), s.version = fe.M)
          }(t, "browser", ["browser"], Me.jf.SENTRY_SDK_SOURCE || (0, me.e)()), super(t);
          const {
            userInfo: r
          } = this.getDataCollectionOptions();
          t._metadata?.sdk && (t._metadata.sdk.settings = {
            infer_ip: r ? "auto" : "never",
            ...t._metadata.sdk.settings
          });
          const {
            sendClientReports: s
          } = this._options;
          Me.jf.document && Me.jf.document.addEventListener("visibilitychange", () => {
            "hidden" === Me.jf.document.visibilityState && (s && this._flushOutcomes(), queueMicrotask(() => {
              this.flush()
            }))
          }), r && this.on("beforeSendSession", ge)
        }
        eventFromException(e, t) {
          return function(e, t, n, r) {
            const s = Ie(e, t, n?.syntheticException || void 0, r);
            return (0, a.M6)(s), s.level = "error", n?.event_id && (s.event_id = n.event_id), (0, ve.XW)(s)
          }(this._options.stackParser, e, t, this._options.attachStacktrace)
        }
        eventFromMessage(e, t = "info", n) {
          return function(e, t, n = "info", r, s) {
            const o = Ce(e, t, r?.syntheticException || void 0, s);
            return o.level = n, r?.event_id && (o.event_id = r.event_id), (0, ve.XW)(o)
          }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
        }
        _prepareEvent(e, t, n, r) {
          return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r)
        }
      }
      var Oe = n(91867),
        Ae = n(80113);
      const De = new Set([]),
        Le = new Set;

      function Ne() {
        "console" in Oe.O && o.Ow.forEach(function(e) {
          !Le.has(e) && e in Oe.O.console && (Le.add(e), (0, f.GS)(Oe.O.console, e, function(t) {
            return o.Z9[e] = t,
              function(...t) {
                const n = t[0],
                  s = o.Z9[e],
                  i = De.size && "string" == typeof n && (0, c.Xr)(n, De);
                i || (0, Ae.aj)("console", {
                  args: t,
                  level: e
                }), (!i || r.T && o.Yz.isEnabled()) && s?.apply(Oe.O.console, t)
              }
          }))
        })
      }
      var Pe = n(1194),
        ze = n(20696),
        je = n(28276),
        $e = n(6285);

      function Fe(e) {
        return void 0 === e ? void 0 : e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
      }
      var Be = n(24025),
        Ue = n(82186),
        qe = n(70336),
        He = n(39774),
        We = n(17796),
        Ye = n(5742);
      const Ke = (0, s._C)((e = {}) => {
          const t = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...e
          };
          return {
            name: "Breadcrumbs",
            setup(e) {
              t.console && function(e) {
                const t = "console";
                (0, Ae.s5)(t, e);
                (0, Ae.AS)(t, Ne)
              }(function(e) {
                return function(t) {
                  if ((0, m.KU)() !== e) return;
                  const n = {
                    category: "console",
                    data: {
                      arguments: t.args,
                      logger: "console"
                    },
                    level: (0, $e.t)(t.level),
                    message: (0, c.gt)(t.args, " ")
                  };
                  if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    n.message = `Assertion failed: ${(0,c.gt)(t.args.slice(1)," ")||"console.assert"}`, n.data.arguments = t.args.slice(1)
                  }(0, ze.Z)(n, {
                    input: t.args,
                    level: t.level
                  })
                }
              }(e)), t.dom && (0, Ue.i)(function(e, t) {
                return function(n) {
                  if ((0, m.KU)() !== e) return;
                  let r, s, i = "object" == typeof t ? t.serializeAttribute : void 0,
                    a = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                  a && a > 1024 && (Ye.T && o.Yz.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`), a = 1024), "string" == typeof i && (i = [i]);
                  try {
                    const e = n.event,
                      t = function(e) {
                        return !!e && !!e.target
                      }(e) ? e.target : e;
                    r = (0, We.H)(t, {
                      keyAttrs: i,
                      maxStringLength: a
                    }), s = (0, je.xE)(t)
                  } catch {
                    r = "<unknown>"
                  }
                  if (0 === r.length) return;
                  const c = {
                    category: `ui.${n.name}`,
                    message: r
                  };
                  s && (c.data = {
                    "ui.component_name": s
                  }), (0, ze.Z)(c, {
                    event: n.event,
                    name: n.name,
                    global: n.global
                  })
                }
              }(e, t.dom)), t.xhr && (0, qe.Mn)(function(e) {
                return function(t) {
                  if ((0, m.KU)() !== e) return;
                  const {
                    startTimestamp: n,
                    endTimestamp: r
                  } = t, s = t.xhr[qe.Er];
                  if (!n || !r || !s) return;
                  const {
                    method: o,
                    url: i,
                    status_code: a,
                    body: c
                  } = s, u = {
                    method: o,
                    url: i,
                    status_code: a
                  }, l = {
                    xhr: t.xhr,
                    input: c,
                    startTimestamp: n,
                    endTimestamp: r
                  }, d = {
                    category: "xhr",
                    data: u,
                    type: "http",
                    level: Fe(a)
                  };
                  e.emit("beforeOutgoingRequestBreadcrumb", d, l), (0, ze.Z)(d, l)
                }
              }(e)), t.fetch && (0, Pe.ur)(function(e) {
                return function(t) {
                  if ((0, m.KU)() !== e) return;
                  const {
                    startTimestamp: n,
                    endTimestamp: r
                  } = t;
                  if (r && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                    if (t.error) {
                      const s = {
                          data: t.error,
                          input: t.args,
                          startTimestamp: n,
                          endTimestamp: r
                        },
                        o = {
                          category: "fetch",
                          data: t.fetchData,
                          level: "error",
                          type: "http"
                        };
                      e.emit("beforeOutgoingRequestBreadcrumb", o, s), (0, ze.Z)(o, s)
                    } else {
                      const s = t.response,
                        o = {
                          ...t.fetchData,
                          status_code: s?.status
                        },
                        i = {
                          input: t.args,
                          response: s,
                          startTimestamp: n,
                          endTimestamp: r
                        },
                        a = {
                          category: "fetch",
                          data: o,
                          type: "http",
                          level: Fe(o.status_code)
                        };
                      e.emit("beforeOutgoingRequestBreadcrumb", a, i), (0, ze.Z)(a, i)
                    }
                }
              }(e)), t.history && (0, He._)(function(e) {
                return function(t) {
                  if ((0, m.KU)() !== e) return;
                  let n = t.from,
                    r = t.to;
                  const s = (0, Be.Dl)(Me.jf.location.href);
                  let o = n ? (0, Be.Dl)(n) : void 0;
                  const i = (0, Be.Dl)(r);
                  o?.path || (o = s), s.protocol === i.protocol && s.host === i.host && (r = i.relative), s.protocol === o.protocol && s.host === o.host && (n = o.relative), (0, ze.Z)({
                    category: "navigation",
                    data: {
                      from: n,
                      to: r
                    }
                  })
                }
              }(e)), t.sentry && e.on("beforeSendEvent", function(e) {
                return function(t) {
                  (0, m.KU)() === e && (0, ze.Z)({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: (0, a.$X)(t)
                  }, {
                    event: t
                  })
                }
              }(e))
            }
          }
        }),
        Je = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(","),
        Ge = (0, s._C)((e = {}) => {
          const t = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            unregisterOriginalCallbacks: !1,
            ...e
          };
          return {
            name: "BrowserApiErrors",
            setupOnce() {
              t.setTimeout && (0, f.GS)(Me.jf, "setTimeout", Ve), t.setInterval && (0, f.GS)(Me.jf, "setInterval", Ve), t.requestAnimationFrame && (0, f.GS)(Me.jf, "requestAnimationFrame", Xe), t.XMLHttpRequest && "XMLHttpRequest" in Me.jf && (0, f.GS)(XMLHttpRequest.prototype, "send", Qe);
              const e = t.eventTarget;
              e && (Array.isArray(e) ? e : Je).forEach(e => function(e, t) {
                const n = Me.jf,
                  r = n[e]?.prototype;
                r?.hasOwnProperty?.("addEventListener") && ((0, f.GS)(r, "addEventListener", function(n) {
                  return function(r, s, o) {
                    try {
                      "function" == typeof s.handleEvent && (s.handleEvent = (0, Me.LV)(s.handleEvent, {
                        mechanism: {
                          data: {
                            handler: (0, k.qQ)(s),
                            target: e
                          },
                          handled: !1,
                          type: "auto.browser.browserapierrors.handleEvent"
                        }
                      }))
                    } catch {}
                    return t.unregisterOriginalCallbacks && function(e, t, n) {
                      e && "object" == typeof e && "removeEventListener" in e && "function" == typeof e.removeEventListener && e.removeEventListener(t, n)
                    }(this, r, s), n.apply(this, [r, (0, Me.LV)(s, {
                      mechanism: {
                        data: {
                          handler: (0, k.qQ)(s),
                          target: e
                        },
                        handled: !1,
                        type: "auto.browser.browserapierrors.addEventListener"
                      }
                    }), o])
                  }
                }), (0, f.GS)(r, "removeEventListener", function(e) {
                  return function(t, n, r) {
                    try {
                      if (Object.prototype.hasOwnProperty.call(n, "__sentry_wrapped__")) {
                        const s = n.__sentry_wrapped__;
                        s && e.call(this, t, s, r)
                      }
                    } catch {}
                    return e.call(this, t, n, r)
                  }
                }))
              }(e, t))
            }
          }
        });

      function Ve(e) {
        return function(...t) {
          const n = t[0];
          return t[0] = (0, Me.LV)(n, {
            mechanism: {
              handled: !1,
              type: `auto.browser.browserapierrors.${(0,k.qQ)(e)}`
            }
          }), e.apply(this, t)
        }
      }

      function Xe(e) {
        return function(t) {
          return e.apply(this, [(0, Me.LV)(t, {
            mechanism: {
              data: {
                handler: (0, k.qQ)(e)
              },
              handled: !1,
              type: "auto.browser.browserapierrors.requestAnimationFrame"
            }
          })])
        }
      }

      function Qe(e) {
        return function(...t) {
          const n = this;
          return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
            e in n && "function" == typeof n[e] && (0, f.GS)(n, e, function(t) {
              const n = {
                  mechanism: {
                    data: {
                      handler: (0, k.qQ)(t)
                    },
                    handled: !1,
                    type: `auto.browser.browserapierrors.xhr.${e}`
                  }
                },
                r = (0, f.sp)(t);
              return r && (n.mechanism.data.handler = (0, k.qQ)(r)), (0, Me.LV)(t, n)
            })
          }), e.apply(this, t)
        }
      }
      var Ze = n(16805),
        et = n(1544);
      const tt = (0, s._C)((e = {}) => {
        const t = e.lifecycle ?? "route";
        return {
          name: "BrowserSession",
          setupOnce() {
            if (void 0 === Me.jf.document) return void(Ye.T && o.Yz.warn("Using the `browserSessionIntegration` in non-browser environments is not supported."));
            (0, Ze.J0)({
              ignoreDuration: !0
            });
            let e = !1;
            (0, et.k)(() => {
              e || ((0, Ze.J5)(), e = !0)
            });
            const n = (0, m.rm)();
            let r = n.getUser();
            n.addScopeListener(t => {
              const n = t.getUser();
              r?.id === n?.id && r?.ip_address === n?.ip_address || (r = n, e && (0, Ze.J5)())
            }), "route" === t && (0, He._)(({
              from: t,
              to: n
            }) => {
              t !== n && ((0, Ze.J0)({
                ignoreDuration: !0
              }), (0, Ze.J5)(), e = !0)
            })
          }
        }
      });
      var nt = n(37663);
      const rt = (0, s._C)(() => ({
        name: "CultureContext",
        preprocessEvent(e) {
          const t = st();
          t && (e.contexts = {
            ...e.contexts,
            culture: {
              ...t,
              ...e.contexts?.culture
            }
          })
        },
        processSegmentSpan(e) {
          const t = st();
          t && (0, nt.FD)(e, {
            "culture.locale": t.locale,
            "culture.timezone": t.timezone,
            "culture.calendar": t.calendar
          })
        }
      }));

      function st() {
        try {
          const e = Me.jf.Intl;
          if (!e) return;
          const t = e.DateTimeFormat().resolvedOptions();
          return {
            locale: t.locale,
            timezone: t.timeZone,
            calendar: t.calendar
          }
        } catch {
          return
        }
      }
      var ot = n(7909),
        it = n(84061);
      const at = (0, s._C)((e = {}) => {
        const t = {
          onerror: !0,
          onunhandledrejection: !0,
          ...e
        };
        return {
          name: "GlobalHandlers",
          setupOnce() {
            Error.stackTraceLimit = 50
          },
          setup(e) {
            t.onerror && (function(e) {
              (0, ot.L)(t => {
                const {
                  stackParser: n,
                  attachStacktrace: r
                } = ut();
                if ((0, m.KU)() !== e || (0, Me.jN)()) return;
                const {
                  msg: s,
                  url: o,
                  line: i,
                  column: a,
                  error: c
                } = t, u = function(e, t, n, r) {
                  const s = e.exception = e.exception || {},
                    o = s.values = s.values || [],
                    i = o[0] = o[0] || {},
                    a = i.stacktrace = i.stacktrace || {},
                    c = a.frames = a.frames || [];
                  return 0 === c.length && c.push({
                    colno: r,
                    lineno: n,
                    filename: lt(t) ?? (0, je.$N)(),
                    function: "?",
                    in_app: !0
                  }), e
                }(Ie(n, c || s, void 0, r, !1), o, i, a);
                u.level = "error", (0, Ze.r)(u, {
                  originalException: c,
                  mechanism: {
                    handled: !1,
                    type: "auto.browser.global_handlers.onerror"
                  }
                })
              })
            }(e), ct("onerror")), t.onunhandledrejection && (function(e) {
              (0, it.r)(t => {
                const {
                  stackParser: n,
                  attachStacktrace: r
                } = ut();
                if ((0, m.KU)() !== e || (0, Me.jN)()) return;
                const s = function(e) {
                    if ((0, B.sO)(e)) return e;
                    try {
                      if ("reason" in e) return e.reason;
                      if ("detail" in e && "reason" in e.detail) return e.detail.reason
                    } catch {}
                    return e
                  }(t),
                  o = (0, B.sO)(s) ? {
                    exception: {
                      values: [{
                        type: "UnhandledRejection",
                        value: `Non-Error promise rejection captured with value: ${String(s)}`
                      }]
                    }
                  } : Ie(n, s, void 0, r, !0);
                o.level = "error", (0, Ze.r)(o, {
                  originalException: s,
                  mechanism: {
                    handled: !1,
                    type: "auto.browser.global_handlers.onunhandledrejection"
                  }
                })
              })
            }(e), ct("onunhandledrejection"))
          }
        }
      });

      function ct(e) {
        Ye.T && o.Yz.log(`Global Handler attached: ${e}`)
      }

      function ut() {
        const e = (0, m.KU)();
        return e?.getOptions() || {
          stackParser: () => [],
          attachStacktrace: !1
        }
      }

      function lt(e) {
        if ((0, B.Kg)(e) && 0 !== e.length) return e.startsWith("data:") ? `<${(0,Be.zm)(e,!1)}>` : e
      }
      var dt = n(87133);
      const pt = (0, s._C)(() => ({
        name: "HttpContext",
        preprocessEvent(e) {
          if (!Me.jf.navigator && !Me.jf.location && !Me.jf.document) return;
          const t = (0, Me.AP)(),
            n = {
              ...t.headers,
              ...e.request?.headers
            };
          e.request = {
            ...t,
            ...e.request,
            headers: n
          }
        },
        processSegmentSpan(e) {
          const t = e.attributes?.[v.uT];
          if (!Me.jf.navigator && !Me.jf.location && !Me.jf.document) return;
          const n = (0, Me.AP)();
          (0, nt.FD)(e, {
            [dt.aVR]: "http.client" !== t ? n.url : void 0,
            "http.request.header.user_agent": n.headers["User-Agent"],
            "http.request.header.referer": n.headers.Referer
          })
        }
      }));

      function ht(e, t, n, r, s, o) {
        if (!s.exception?.values || !o || !(0, B.bJ)(o.originalException)) return;
        const i = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
        i && (s.exception.values = mt(e, t, r, o.originalException, n, s.exception.values, i, 0))
      }

      function mt(e, t, n, r, s, o, i, a) {
        if (o.length >= n + 1) return o;
        let c = [...o];
        if ((0, B.bJ)(r[s])) {
          gt(i, a, r);
          const o = e(t, r[s]),
            u = c.length;
          yt(o, s, u, a), c = mt(e, t, n, r[s], s, [o, ...c], o, u)
        }
        return ft(r) && r.errors.forEach((o, u) => {
          if ((0, B.bJ)(o)) {
            gt(i, a, r);
            const l = e(t, o),
              d = c.length;
            yt(l, `errors[${u}]`, d, a), c = mt(e, t, n, o, s, [l, ...c], l, d)
          }
        }), c
      }

      function ft(e) {
        return Array.isArray(e.errors)
      }

      function gt(e, t, n) {
        e.mechanism = {
          handled: !0,
          type: "auto.core.linked_errors",
          ...ft(n) && {
            is_exception_group: !0
          },
          ...e.mechanism,
          exception_id: t
        }
      }

      function yt(e, t, n, r) {
        e.mechanism = {
          handled: !0,
          ...e.mechanism,
          type: "chained",
          source: t,
          exception_id: n,
          parent_id: r
        }
      }
      const vt = (0, s._C)((e = {}) => {
        const t = e.limit || 5,
          n = e.key || "cause";
        return {
          name: "LinkedErrors",
          preprocessEvent(e, r, s) {
            ht(_e, s.getOptions().stackParser, n, t, e, r)
          }
        }
      });

      function _t(e, t, n, r) {
        const s = {
          filename: e,
          function: "<anonymous>" === t ? "?" : t,
          in_app: !0
        };
        return void 0 !== n && (s.lineno = n), void 0 !== r && (s.colno = r), s
      }
      const St = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
        bt = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        kt = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        wt = /at (.+?) ?\(data:(.+?),/,
        Tt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Et = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        It = [
          [30, e => {
            const t = e.match(wt);
            if (t) return {
              filename: `<data:${t[2]}>`,
              function: t[1]
            };
            const n = St.exec(e);
            if (n) {
              const [, e, t, r] = n;
              return _t(e, "?", +t, +r)
            }
            const r = bt.exec(e);
            if (r) {
              if (0 === r[2]?.indexOf("eval")) {
                const e = kt.exec(r[2]);
                e && (r[2] = e[1], r[3] = e[2], r[4] = e[3])
              }
              const [e, t] = xt(r[1] || "?", r[2]);
              return _t(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
            }
          }],
          [50, e => {
            const t = Tt.exec(e);
            if (t) {
              if (t[3] && t[3].indexOf(" > eval") > -1) {
                const e = Et.exec(t[3]);
                e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
              }
              let e = t[3],
                n = t[1] || "?";
              return [n, e] = xt(n, e), _t(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
            }
          }]
        ],
        Ct = (0, k.gd)(...It),
        xt = (e, t) => {
          const n = -1 !== e.indexOf("safari-extension"),
            r = -1 !== e.indexOf("safari-web-extension");
          return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
        };
      var Mt = n(91452);
      const Rt = /^HTML(\w*)Element$/;

      function Ot(e) {
        if ("undefined" != typeof window && e === window) return "[Window]";
        if ("undefined" != typeof document && e === document) return "[Document]";
        if (function(e) {
            if ("undefined" == typeof Element) return !1;
            try {
              return e instanceof Element
            } catch {
              return !1
            }
          }(e)) {
          const t = function(e) {
            const t = Object.getPrototypeOf(e);
            return t?.constructor ? t.constructor.name : "null prototype"
          }(e);
          if (Rt.test(t)) return `[HTMLElement: ${(0,We.H)(e)}]`
        }
      }

      function At(e = {}) {
        const t = !e.skipBrowserExtensionCheck && !! function() {
          if (void 0 === Me.jf.window) return !1;
          const e = Me.jf;
          if (e.nw) return !1;
          const t = e.chrome || e.browser;
          if (!t?.runtime?.id) return !1;
          const n = (0, je.$N)();
          return !(Me.jf === Me.jf.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(n))
        }() && (Ye.T && (0, o.pq)(() => {
          console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        }), !0);
        let n = null == e.defaultIntegrations ? [d(), y(), S(), Ge(), Ke(), at(), vt(), (0, b.s)(), pt(), rt(), tt()] : e.defaultIntegrations;
        const i = {
          ...e,
          enabled: !t && e.enabled,
          stackParser: (0, k.vk)(e.stackParser || Ct),
          integrations: (0, s.mH)({
            integrations: e.integrations,
            defaultIntegrations: n
          }),
          transport: e.transport || Mt._
        };
        return (0, w.Ip)(Ot),
          function(e, t) {
            !0 === t.debug && (r.T ? o.Yz.enable() : (0, o.pq)(() => {
              console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
            })), (0, m.o5)().update(t.initialScope);
            const n = new e(t);
            return function(e) {
              (0, m.o5)().setClient(e)
            }(n), n.init(), n
          }(Re, i)
      }
    },
    17838(e, t, n) {
      "use strict";
      n.d(t, {
        dp: () => Ze
      });
      var r = n(49718),
        s = n(52244),
        o = n(91781),
        i = n(63668),
        a = n(51278),
        c = n(57197),
        u = n(10287),
        l = n(79165),
        d = n(83883),
        p = n(47842),
        h = n(45160),
        m = n(52287),
        f = n(12212);

      function g(e, t, n, r = (0, l.Bk)()) {
        const a = r && (0, l.zU)(r);
        a && (s.T && i.Yz.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), a.addEvent(e, {
          [o.xc]: t,
          [o.Sn]: n
        }))
      }

      function y(e) {
        if (!e || 0 === e.length) return;
        const t = {};
        return e.forEach(e => {
          const n = e.attributes || {},
            r = n[o.Sn],
            s = n[o.xc];
          "string" == typeof r && "number" == typeof s && (t[e.name] = {
            value: s,
            unit: r
          })
        }), t
      }
      var v = n(71406);

      function _() {
        return (0, v.Se)((0, v.EU)()).segmentSpanCaptureStrategy
      }
      var S = n(73320),
        b = n(67158);
      class k {
        constructor(e = {}) {
          this._traceId = e.traceId || (0, m.e)(), this._spanId = e.spanId || (0, m.Z)(), this._startTime = e.startTimestamp || (0, d.zf)(), this._links = e.links, this._attributes = {}, this.setAttributes({
            [o.JD]: "manual",
            [o.uT]: e.op,
            ...e.attributes
          }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded()
        }
        addLink(e) {
          return this._frozen || (this._links ? this._links.push(e) : this._links = [e]), this
        }
        addLinks(e) {
          return this._frozen || (this._links ? this._links.push(...e) : this._links = e), this
        }
        recordException(e, t) {}
        spanContext() {
          const {
            _spanId: e,
            _traceId: t,
            _sampled: n
          } = this;
          return {
            spanId: e,
            traceId: t,
            traceFlags: n ? 1 : 0
          }
        }
        setAttribute(e, t) {
          return this._frozen || (void 0 === t ? delete this._attributes[e] : this._attributes[e] = t, e === o.i_ && void 0 !== t && (0, b.ZO)(this) && (0, b.jF)(this)), this
        }
        setAttributes(e) {
          return Object.keys(e).forEach(t => this.setAttribute(t, e[t])), this
        }
        updateStartTime(e) {
          this._frozen || (this._startTime = (0, l.cI)(e))
        }
        setStatus(e) {
          return this._frozen || (this._status = e), this
        }
        updateName(e) {
          return this._frozen || (this._name = e, (0, b.ZO)(this) || this.setAttribute(o.i_, "custom")), this
        }
        end(e) {
          this._endTime || (this._endTime = (0, l.cI)(e), function(e) {
            if (!s.T) return;
            const {
              description: t = "< unknown name >",
              op: n = "< unknown op >"
            } = (0, l.et)(e), {
              spanId: r
            } = e.spanContext(), o = `[Tracing] Finishing "${n}" ${(0,l.zU)(e)===e?"root ":""}span "${t}" with ID ${r}`;
            i.Yz.log(o)
          }(this), this._onSpanEnded()), this._frozen = (0, b.rh)(this)
        }
        getSpanJSON() {
          return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[o.uT],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: (0, l.yW)(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[o.JD],
            profile_id: this._attributes[o.E1],
            exclusive_time: this._attributes[o.jG],
            measurements: y(this._events),
            is_segment: this._isStandaloneSpan && (0, l.zU)(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? (0, l.zU)(this).spanContext().spanId : void 0,
            links: (0, l.uU)(this._links)
          }
        }
        getStreamedSpanJSON() {
          return {
            name: this._name ?? "",
            span_id: this._spanId,
            trace_id: this._traceId,
            parent_span_id: this._parentSpanId,
            start_timestamp: this._startTime,
            end_timestamp: this._endTime ?? this._startTime,
            is_segment: this._isStandaloneSpan || this === (0, l.zU)(this),
            status: (0, l.dZ)(this._status),
            attributes: (0, l.fy)(this._attributes, this._status),
            links: (0, l.HQ)(this._links)
          }
        }
        isRecording() {
          return !this._endTime && !!this._sampled
        }
        addEvent(e, t, n) {
          if (this._frozen) return this;
          s.T && i.Yz.log("[Tracing] Adding an event to span:", e);
          const r = w(t) ? t : n || (0, d.zf)(),
            o = w(t) ? {} : t || {},
            a = {
              name: e,
              time: (0, l.cI)(r),
              attributes: o
            };
          return this._events.push(a), this
        }
        isStandaloneSpan() {
          return !!this._isStandaloneSpan
        }
        _onSpanEnded() {
          const e = (0, r.KU)();
          e && (e.emit("spanEnd", this), this._isStandaloneSpan || e.emit("afterSpanEnd", this));
          const t = (0, l.zU)(this),
            n = this._isStandaloneSpan || this === t;
          if (this._isStandaloneSpan) return void(this._sampled ? function(e) {
            const t = (0, r.KU)();
            if (!t) return;
            const n = e[1];
            n && 0 !== n.length ? t.sendEnvelope(e) : t.recordDroppedEvent("before_send", "span")
          }((0, h.lu)([this], e)) : (s.T && i.Yz.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span")));
          if (!n) {
            const e = _();
            if (e) {
              const n = (0, b.Lb)(this).scope || (0, r.o5)();
              e.onChildSpanEnded(this, t, e => this._convertSpanToTransaction(e), n)
            }
            return
          }
          if (e && (0, S.K)(e)) return void e.emit("afterSegmentSpanEnd", this);
          const o = (0, b.Lb)(this).scope || (0, r.o5)(),
            a = _();
          if (a) a.onSegmentSpanEnded(e => this._convertSpanToTransaction(e), o);
          else {
            const e = this._convertSpanToTransaction();
            e && o.captureEvent(e)
          }
        }
        _convertSpanToTransaction(e = {}) {
          if (!T((0, l.et)(this))) return;
          this._name || (s.T && i.Yz.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
          const {
            scope: t,
            isolationScope: n
          } = (0, b.Lb)(this), r = t?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
          if (!0 !== this._sampled) return;
          e.onSpanCaptured?.(this);
          const a = [];
          for (const t of (0, l.xO)(this)) {
            if (t === this || E(t) || e.isSpanAlreadyCaptured?.(t)) continue;
            const n = (0, l.et)(t);
            T(n) && (e.onSpanCaptured?.(t), a.push(n))
          }
          const c = this._attributes[o.i_];
          delete this._attributes[o.Le];
          let u = !1;
          a.forEach(e => {
            delete e.data[o.Le], e.op?.startsWith("gen_ai.") && (u = !0)
          });
          const d = {
              contexts: {
                trace: (0, l.Ck)(this)
              },
              spans: a.length > 1e3 ? a.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3) : a,
              start_timestamp: this._startTime,
              timestamp: this._endTime,
              transaction: this._name,
              type: "transaction",
              sdkProcessingMetadata: {
                capturedSpanScope: t,
                capturedSpanIsolationScope: n,
                dynamicSamplingContext: (0, f.k1)(this),
                hasGenAiSpans: u
              },
              request: r,
              ...c && {
                transaction_info: {
                  source: c
                }
              }
            },
            p = y(this._events);
          return p && Object.keys(p).length && (s.T && i.Yz.log("[Measurements] Adding measurements to transaction event", JSON.stringify(p, void 0, 2)), d.measurements = p), d
        }
      }

      function w(e) {
        return e && "number" == typeof e || e instanceof Date || Array.isArray(e)
      }

      function T(e) {
        return !!(e.start_timestamp && e.timestamp && e.span_id && e.trace_id)
      }

      function E(e) {
        return e instanceof k && e.isStandaloneSpan()
      }
      var I = n(66279),
        C = n(45179);

      function x(e) {
        const t = O();
        return t.startInactiveSpan ? t.startInactiveSpan(e) : function(e) {
          const t = function(e) {
              const t = {
                isStandalone: (e.experimental || {}).standalone,
                ...e
              };
              if (e.startTime) {
                const n = {
                  ...t
                };
                return n.startTimestamp = (0, l.cI)(e.startTime), delete n.startTime, n
              }
              return t
            }(e),
            {
              forceTransaction: n,
              parentSpan: d
            } = e;
          return (e.scope ? t => (0, r.v4)(e.scope, t) : void 0 !== d ? e => M(d, e) : e => e())(() => {
            const h = (0, r.o5)(),
              m = function(e, t) {
                if (t) return t;
                if (null === t) return;
                const n = (0, u.f)(e);
                if (!n) return;
                const s = (0, r.KU)();
                return (s ? s.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, l.zU)(n) : n
              }(h, d),
              g = (0, r.KU)();
            return e.onlyIfParent && !m ? function(e, t) {
              t?.recordDroppedEvent("no_parent_span", "span");
              const n = new p.w({
                traceId: e.getPropagationContext().traceId
              });
              return (0, b.d_)(n, e, (0, r.rm)()), n
            }(h, g) : function({
              parentSpan: e,
              spanArguments: t,
              forceTransaction: n,
              scope: u
            }) {
              const d = (0, r.rm)();
              if (!(0, a.f)()) {
                const t = {
                    ...d.getPropagationContext(),
                    ...u.getPropagationContext()
                  },
                  r = e ? e.spanContext().traceId : t.traceId,
                  s = new p.w({
                    traceId: r
                  });
                return e && !n && (0, l.Hu)(e, s), (0, b.d_)(s, u, d), s
              }
              const h = (0, r.KU)();
              if (function(e, t) {
                  const n = e?.getOptions().ignoreSpans;
                  return !!(e && (0, S.K)(e) && n?.length) && (0, c.e)({
                    description: t.name || "",
                    op: t.attributes?.[o.uT] || t.op,
                    attributes: t.attributes
                  }, n)
                }(h, t)) {
                R(u) || h?.recordDroppedEvent("ignored", "span");
                const t = new p.w({
                  dropReason: "ignored",
                  traceId: e?.spanContext().traceId ?? u.getPropagationContext().traceId
                });
                return e && !n && (0, l.Hu)(e, t), (0, b.d_)(t, u, d), t
              }
              let m;
              if (e && !n) m = function(e, t, n, s) {
                const {
                  spanId: o,
                  traceId: i
                } = e.spanContext(), a = R(t), c = !a && (0, l.pK)(e), u = c ? new k({
                  ...n,
                  parentSpanId: o,
                  traceId: i,
                  sampled: c
                }) : new p.w({
                  traceId: i
                });
                (0, l.Hu)(e, u), (0, b.d_)(u, t, s);
                const d = (0, r.KU)();
                return d ? ((0, S.K)(d) && (0, p.h)(u) && ((0, p.h)(e) && e.dropReason ? (u.dropReason = e.dropReason, d.recordDroppedEvent(e.dropReason, "span")) : a || (u.dropReason = "sample_rate", d.recordDroppedEvent("sample_rate", "span"))), d.emit("spanStart", u), n.endTimestamp && (d.emit("spanEnd", u), d.emit("afterSpanEnd", u)), u) : u
              }(e, u, t, d), (0, l.Hu)(e, m);
              else if (e) {
                const n = (0, f.k1)(e),
                  {
                    traceId: r,
                    spanId: s
                  } = e.spanContext(),
                  o = (0, l.pK)(e);
                m = A({
                  traceId: r,
                  parentSpanId: s,
                  ...t
                }, u, d, o), (0, f.LZ)(m, n)
              } else {
                const {
                  traceId: e,
                  dsc: n,
                  parentSpanId: r,
                  sampled: s
                } = {
                  ...d.getPropagationContext(),
                  ...u.getPropagationContext()
                };
                m = A({
                  traceId: e,
                  parentSpanId: r,
                  ...t
                }, u, d, s), n && (0, f.LZ)(m, n)
              }
              return function(e) {
                if (!s.T) return;
                const {
                  description: t = "< unknown name >",
                  op: n = "< unknown op >",
                  parent_span_id: r
                } = (0, l.et)(e), {
                  spanId: o
                } = e.spanContext(), a = (0, l.pK)(e), c = (0, l.zU)(e), u = c === e, d = `[Tracing] Starting ${a?"sampled":"unsampled"} ${u?"root ":""}span`, p = [`op: ${n}`, `name: ${t}`, `ID: ${o}`];
                if (r && p.push(`parent ID: ${r}`), !u) {
                  const {
                    op: e,
                    description: t
                  } = (0, l.et)(c);
                  p.push(`root ID: ${c.spanContext().spanId}`), e && p.push(`root op: ${e}`), t && p.push(`root description: ${t}`)
                }
                i.Yz.log(`${d}\n  ${p.join("\n  ")}`)
              }(m), m
            }({
              parentSpan: m,
              spanArguments: t,
              forceTransaction: n,
              scope: h
            })
          })
        }(e)
      }

      function M(e, t) {
        const n = O();
        return n.withActiveSpan ? n.withActiveSpan(e, t) : (0, r.v4)(n => ((0, u.r)(n, e || void 0), t(n)))
      }

      function R(e = (0, r.o5)()) {
        const t = O();
        return t.isTracingSuppressed ? t.isTracingSuppressed(e) : !0 === e.getScopeData().sdkProcessingMetadata.__SENTRY_SUPPRESS_TRACING__
      }

      function O() {
        const e = (0, v.EU)();
        return (0, I.h)(e)
      }

      function A(e, t, n, c) {
        const u = (0, r.KU)(),
          l = u?.getOptions() || {},
          {
            name: d = ""
          } = e,
          p = {
            spanAttributes: {
              ...e.attributes
            },
            spanName: d,
            parentSampled: c
          };
        u?.emit("beforeSampling", p, {
          decision: !1
        });
        const h = p.parentSampled ?? c,
          m = p.spanAttributes,
          f = t.getPropagationContext(),
          g = R(t),
          [y, v, _] = g ? [!1] : function(e, t, n) {
            if (!(0, a.f)(e)) return [!1];
            let r, o;
            "function" == typeof e.tracesSampler ? (o = e.tracesSampler({
              ...t,
              inheritOrSampleWith: e => "number" == typeof t.parentSampleRate ? t.parentSampleRate : "boolean" == typeof t.parentSampled ? Number(t.parentSampled) : e
            }), r = !0) : void 0 !== t.parentSampled ? o = t.parentSampled : void 0 !== e.tracesSampleRate && (o = e.tracesSampleRate, r = !0);
            const c = (0, C.i)(o);
            if (void 0 === c) return s.T && i.Yz.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`), [!1];
            if (!c) return s.T && i.Yz.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), [!1, c, r];
            const u = n < c;
            return u || s.T && i.Yz.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(o)})`), [u, c, r]
          }(l, {
            name: d,
            parentSampled: h,
            attributes: m,
            normalizedRequest: n.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampleRate: (0, C.i)(f.dsc?.sample_rate)
          }, f.sampleRand),
          w = new k({
            ...e,
            attributes: {
              [o.i_]: "custom",
              [o.sy]: void 0 !== v && _ ? v : void 0,
              ...m
            },
            sampled: y
          });
        return y || !u || g || (s.T && i.Yz.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), u.recordDroppedEvent("sample_rate", (0, S.K)(u) ? "span" : "transaction")), (0, b.d_)(w, t, n), u && u.emit("spanStart", w), w
      }

      function D(e) {
        return (0, p.h)(e) && "ignored" === e.dropReason
      }
      const L = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        childSpanTimeout: 15e3
      };

      function N(e, t = {}) {
        const n = new Map;
        let h, m = !1,
          f = "externalFinish",
          g = !t.disableAutoFinish;
        const y = [],
          {
            idleTimeout: v = L.idleTimeout,
            finalTimeout: _ = L.finalTimeout,
            childSpanTimeout: S = L.childSpanTimeout,
            beforeSpanEnd: w,
            trimIdleSpanEndTimestamp: T = !0
          } = t,
          E = (0, r.KU)(),
          I = (0, r.o5)();
        if (!E || !(0, a.f)()) {
          const e = new p.w({
            traceId: I.getPropagationContext().traceId
          });
          return (0, b.d_)(e, I, (0, r.rm)()), e
        }
        const C = (0, l.Bk)(),
          M = function(e) {
            const t = x(e);
            return (0, u.r)((0, r.o5)(), t), s.T && i.Yz.log("[Tracing] Started span is an idle span"), t
          }(e);

        function R() {
          h && (clearTimeout(h), h = void 0)
        }

        function O(e) {
          R(), h = setTimeout(() => {
            !m && 0 === n.size && g && (f = "idleTimeout", M.end(e))
          }, v)
        }

        function A(e) {
          h = setTimeout(() => {
            !m && g && (f = "heartbeatFailed", M.end(e))
          }, S)
        }

        function D(e) {
          m = !0, n.clear(), y.forEach(e => e()), (0, u.r)(I, C);
          const t = (0, l.et)(M),
            {
              start_timestamp: r
            } = t;
          if (!r) return;
          t.data[o.fs] || M.setAttribute(o.fs, f);
          const a = t.status;
          a && "unknown" !== a || M.setStatus({
            code: 1
          }), i.Yz.log(`[Tracing] Idle span "${t.op}" finished`);
          const c = (0, l.xO)(M).filter(e => e !== M);
          let d = 0;
          c.forEach(t => {
            t.isRecording() && (t.setStatus({
              code: 2,
              message: "cancelled"
            }), t.end(e), s.T && i.Yz.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
            const n = (0, l.et)(t),
              {
                timestamp: r = 0,
                start_timestamp: o = 0
              } = n,
              a = o <= e,
              c = r - o <= (_ + v) / 1e3;
            if (s.T) {
              const e = JSON.stringify(t, void 0, 2);
              a ? c || i.Yz.log("[Tracing] Discarding span since it finished after idle span final timeout", e) : i.Yz.log("[Tracing] Discarding span since it happened after idle span was finished", e)
            }
            c && a || ((0, l.VS)(M, t), d++)
          }), d > 0 && M.setAttribute("sentry.idle_span_discarded_spans", d)
        }
        return M.end = new Proxy(M.end, {
          apply(e, t, n) {
            if (w && w(M), (0, p.h)(t)) return;
            const [r, ...s] = n, o = r || (0, d.zf)(), i = (0, l.cI)(o), a = (0, l.xO)(M).filter(e => e !== M), u = (0, l.et)(M);
            if (!a.length || !T) return D(i), Reflect.apply(e, t, [i, ...s]);
            const h = E.getOptions().ignoreSpans,
              m = a?.reduce((e, t) => {
                const n = (0, l.et)(t);
                return n.timestamp ? h && (0, c.e)({
                  description: n.description,
                  op: n.op,
                  attributes: n.data
                }, h) ? e : e ? Math.max(e, n.timestamp) : n.timestamp : e
              }, void 0),
              f = u.start_timestamp,
              g = Math.min(f ? f + _ / 1e3 : 1 / 0, Math.max(f || -1 / 0, Math.min(i, m || 1 / 0)));
            return D(g), Reflect.apply(e, t, [g, ...s])
          }
        }), y.push(E.on("spanStart", e => {
          var t;
          m || e === M || (0, l.et)(e).timestamp || e instanceof k && e.isStandaloneSpan() || (0, l.xO)(M).includes(e) && (t = e.spanContext().spanId, R(), n.set(t, !0), A((0, d.zf)() + S / 1e3))
        })), y.push(E.on("spanEnd", e => {
          var t;
          m || (t = e.spanContext().spanId, n.has(t) && n.delete(t), 0 === n.size && O((0, d.zf)() + v / 1e3))
        })), y.push(E.on("idleSpanEnableAutoFinish", e => {
          e === M && (g = !0, O(), n.size && A())
        })), t.disableAutoFinish || O(), setTimeout(() => {
          m || (M.setStatus({
            code: 2,
            message: "deadline_exceeded"
          }), f = "finalTimeout", M.end())
        }, _), M
      }
      var P = n(24025),
        z = n(28276),
        j = n(7909),
        $ = n(84061);
      let F = !1;
      var B = n(91867),
        U = n(45642),
        q = n(50733),
        H = n(37287),
        W = n(24158),
        Y = n(17796),
        K = n(91199),
        J = n(87216),
        G = n(27511),
        V = n(64583);

      function X(e) {
        return "number" == typeof e && isFinite(e)
      }

      function Q(e, t, n, {
        ...r
      }) {
        const s = (0, l.et)(e).start_timestamp;
        return s && s > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), M(e, () => {
          const e = x({
            startTime: t,
            ...r
          });
          return e && e.end(n), e
        })
      }

      function Z(e) {
        const t = (0, r.KU)();
        if (!t) return;
        const {
          name: n,
          transaction: s,
          attributes: o,
          startTime: i
        } = e, {
          release: a,
          environment: c
        } = t.getOptions(), {
          userInfo: u
        } = t.getDataCollectionOptions(), l = t.getIntegrationByName("Replay"), d = l?.getReplayId(), p = (0, r.o5)(), h = p.getUser(), m = void 0 !== h ? h.email || h.id || h.ip_address : void 0;
        let f;
        try {
          f = p.getScopeData().contexts.profile.profile_id
        } catch {}
        return x({
          name: n,
          attributes: {
            release: a,
            environment: c,
            user: m || void 0,
            profile_id: f || void 0,
            replay_id: d || void 0,
            transaction: s,
            "user_agent.original": K.j.navigator?.userAgent,
            "client.address": u ? "{{auto}}" : void 0,
            ...o
          },
          startTime: i,
          experimental: {
            standalone: !0
          }
        })
      }

      function ee() {
        return K.j.addEventListener && K.j.performance
      }

      function te(e) {
        return e / 1e3
      }

      function ne(e) {
        try {
          return PerformanceObserver.supportedEntryTypes.includes(e)
        } catch {
          return !1
        }
      }

      function re(e, t) {
        let n, r = !1;

        function s(e) {
          !r && n && t(e, n.spanContext().spanId, n), r = !0
        }(() => {
          const e = e => {
            "pagehide" !== e.type && "hidden" !== K.j.document?.visibilityState || s("pagehide")
          };
          (0, V.d)("visibilitychange", e, {
            capture: !0,
            once: !0
          }), (0, V.d)("pagehide", e, {
            capture: !0,
            once: !0
          })
        })();
        const o = e.on("beforeStartNavigationSpan", (e, t) => {
            t?.isRedirect || (s("navigation"), o(), i())
          }),
          i = e.on("afterStartPageLoadSpan", e => {
            n = e, i()
          })
      }

      function se(e) {
        return null != e && e > 0 && e <= 6e4
      }

      function oe(e) {
        return e ? (((0, d.k3)() || performance.timeOrigin) + e) / 1e3 : e
      }

      function ie(e) {
        const t = {};
        if (null != e.nextHopProtocol) {
          const {
            name: n,
            version: r
          } = function(e) {
            let t = "unknown",
              n = "unknown",
              r = "";
            for (const s of e) {
              if ("/" === s) {
                [t, n] = e.split("/");
                break
              }
              if (!isNaN(Number(s))) {
                t = "h" === r ? "http" : r, n = e.split(r)[1];
                break
              }
              r += s
            }
            return r === e && (t = r), {
              name: t,
              version: n
            }
          }(e.nextHopProtocol);
          t["network.protocol.version"] = r, t["network.protocol.name"] = n
        }
        return (0, d.k3)() || ee()?.timeOrigin ? (n = {
          ...t,
          "http.request.redirect_start": oe(e.redirectStart),
          "http.request.redirect_end": oe(e.redirectEnd),
          "http.request.worker_start": oe(e.workerStart),
          "http.request.fetch_start": oe(e.fetchStart),
          "http.request.domain_lookup_start": oe(e.domainLookupStart),
          "http.request.domain_lookup_end": oe(e.domainLookupEnd),
          "http.request.connect_start": oe(e.connectStart),
          "http.request.secure_connection_start": oe(e.secureConnectionStart),
          "http.request.connection_end": oe(e.connectEnd),
          "http.request.request_start": oe(e.requestStart),
          "http.request.response_start": oe(e.responseStart),
          "http.request.response_end": oe(e.responseEnd),
          "http.request.time_to_first_byte": null != e.responseStart ? e.responseStart / 1e3 : void 0
        }, Object.fromEntries(Object.entries(n).filter(([, e]) => null != e))) : t;
        var n
      }
      var ae = n(76587),
        ce = n(38325),
        ue = n(77515),
        le = n(87133);
      let de, pe, he = 0,
        me = {};

      function fe({
        recordClsStandaloneSpans: e,
        recordLcpStandaloneSpans: t,
        client: n
      }) {
        const s = ee();
        if (s && (0, d.k3)()) {
          s.mark && K.j.performance.mark("sentry-tracing-init");
          const a = t ? function(e) {
              let t, n = 0;
              if (!ne("largest-contentful-paint")) return;
              const s = (0, G.Pt)(({
                metric: e
              }) => {
                const r = e.entries[e.entries.length - 1];
                r && se(e.value) && (n = e.value, t = r)
              }, !0);
              re(e, (e, a) => {
                ! function(e, t, n, s) {
                  if (!se(e)) return;
                  J.T && i.Yz.log(`Sending LCP span (${e})`);
                  const a = te(((0, d.k3)() || 0) + (t?.startTime || 0)),
                    c = (0, r.o5)().getScopeData().transactionName,
                    u = t ? (0, Y.H)(t.element) : "Largest contentful paint",
                    l = {
                      [o.JD]: "auto.http.browser.lcp",
                      [o.uT]: "ui.webvital.lcp",
                      [o.jG]: 0,
                      "sentry.pageload.span_id": n,
                      "sentry.report_event": s
                    };
                  t && (t.element && (l["lcp.element"] = (0, Y.H)(t.element)), t.id && (l["lcp.id"] = t.id), t.url && (l["lcp.url"] = t.url), null != t.loadTime && (l["lcp.loadTime"] = t.loadTime), null != t.renderTime && (l["lcp.renderTime"] = t.renderTime), null != t.size && (l["lcp.size"] = t.size));
                  const p = Z({
                    name: u,
                    transaction: c,
                    attributes: l,
                    startTime: a
                  });
                  p && (p.addEvent("lcp", {
                    [o.Sn]: "millisecond",
                    [o.xc]: e
                  }), p.end(a))
                }(n, t, a, e), s()
              })
            }(n) : !1 === t ? (0, G.Pt)(({
              metric: e
            }) => {
              const t = e.entries[e.entries.length - 1];
              t && se(e.value) && (me.lcp = {
                value: e.value,
                unit: "millisecond"
              }, de = t)
            }, !0) : void 0,
            c = e ? function(e) {
              let t, n = 0;
              if (!ne("layout-shift")) return;
              const s = (0, G.a9)(({
                metric: e
              }) => {
                const r = e.entries[e.entries.length - 1];
                r && (n = e.value, t = r)
              }, !0);
              re(e, (e, a) => {
                ! function(e, t, n, s) {
                  J.T && i.Yz.log(`Sending CLS span (${e})`);
                  const a = t ? te(((0, d.k3)() || 0) + t.startTime) : (0, d.zf)(),
                    c = (0, r.o5)().getScopeData().transactionName,
                    u = t ? (0, Y.H)(t.sources[0]?.node) : "Layout shift",
                    l = {
                      [o.JD]: "auto.http.browser.cls",
                      [o.uT]: "ui.webvital.cls",
                      [o.jG]: 0,
                      "sentry.pageload.span_id": n,
                      "sentry.report_event": s
                    };
                  t?.sources && t.sources.forEach((e, t) => {
                    l[`cls.source.${t+1}`] = (0, Y.H)(e.node)
                  });
                  const p = Z({
                    name: u,
                    transaction: c,
                    attributes: l,
                    startTime: a
                  });
                  p && (p.addEvent("cls", {
                    [o.Sn]: "",
                    [o.xc]: e
                  }), p.end(a))
                }(n, t, a, e), s()
              })
            }(n) : !1 === e ? (0, G.a9)(({
              metric: e
            }) => {
              const t = e.entries[e.entries.length - 1];
              t && (me.cls = {
                value: e.value,
                unit: ""
              }, pe = t)
            }, !0) : void 0,
            u = (0, G.YG)(({
              metric: e
            }) => {
              e.entries[e.entries.length - 1] && (me.ttfb = {
                value: e.value,
                unit: "millisecond"
              })
            }),
            l = (0, G.wv)("paint", ({
              entries: e
            }) => {
              const t = (0, ue.N)();
              for (const n of e) {
                const e = n.startTime < t.firstHiddenTime;
                "first-paint" === n.name && e && (me.fp = {
                  value: n.startTime,
                  unit: "millisecond"
                }), "first-contentful-paint" === n.name && e && (me.fcp = {
                  value: n.startTime,
                  unit: "millisecond"
                })
              }
            });
          return () => {
            u(), l(), a?.(), c?.()
          }
        }
        return () => {}
      }

      function ge() {
        de = void 0, pe = void 0, me = {}
      }

      function ye(e, t, n, r, s = n) {
        const i = function(e) {
            return "secureConnection" === e ? "connectEnd" : "fetch" === e ? "domainLookupStart" : `${e}End`
          }(n),
          a = t[i],
          c = t[`${n}Start`];
        c && a && Q(e, r + te(c), r + te(a), {
          op: `browser.${s}`,
          name: t.name,
          attributes: {
            [o.JD]: "auto.ui.browser.metrics",
            ..."redirect" === n && null != t.redirectCount ? {
              "http.redirect_count": t.redirectCount
            } : {}
          }
        })
      }
      var ve = n(39774),
        _e = n(5742),
        Se = n(63213),
        be = n(88164),
        ke = n(1194);
      const we = new WeakMap,
        Te = new WeakMap,
        Ee = ["text/event-stream", "application/x-ndjson", "application/stream+json"],
        Ie = (0, be._C)(() => ({
          name: "FetchStreamPerformance",
          setup() {
            (0, ke.B$)(e => {
              if (e.response) {
                const t = we.get(e.response);
                if (t && e.endTimestamp) {
                  t.end(e.endTimestamp);
                  const n = Te.get(e.response);
                  n && clearTimeout(n)
                }
              }
            }), (0, ke.ur)(e => {
              if (e.endTimestamp && e.response) {
                const t = e.response.headers?.get("content-type") || "";
                if (e.response.headers?.get("content-length") || !Ee.some(e => t.startsWith(e))) return;
                const n = e.fetchData?.url || "",
                  r = e.fetchData?.method || "GET",
                  s = (0, P.kg)(n),
                  i = x({
                    name: `${r} ${n.startsWith("data:")?(0,P.zm)(n):s?(0,P.CH)(s):n}`,
                    startTime: e.endTimestamp,
                    attributes: {
                      url: (0, P.zm)(n),
                      "http.method": r,
                      type: "fetch",
                      [o.uT]: "http.client.stream",
                      [o.JD]: "auto.http.browser.stream"
                    }
                  });
                we.set(e.response, i);
                const a = setTimeout(() => {
                  i.isRecording() && i.end()
                }, 9e4);
                Te.set(e.response, a)
              }
            })
          }
        }));
      var Ce = n(4957);
      const xe = [],
        Me = new Map,
        Re = new Map;
      const Oe = {
          click: "click",
          pointerdown: "click",
          pointerup: "click",
          mousedown: "click",
          mouseup: "click",
          touchstart: "click",
          touchend: "click",
          mouseover: "hover",
          mouseout: "hover",
          mouseenter: "hover",
          mouseleave: "hover",
          pointerover: "hover",
          pointerout: "hover",
          pointerenter: "hover",
          pointerleave: "hover",
          dragstart: "drag",
          dragend: "drag",
          drag: "drag",
          dragenter: "drag",
          dragleave: "drag",
          dragover: "drag",
          drop: "drag",
          keydown: "press",
          keyup: "press",
          keypress: "press",
          input: "press"
        },
        Ae = ({
          metric: e
        }) => {
          if (null == e.value) return;
          const t = te(e.value);
          if (t > 60) return;
          const n = e.entries.find(t => t.duration === e.value && Oe[t.name]);
          if (!n) return;
          const {
            interactionId: s
          } = n, i = Oe[n.name], a = te((0, d.k3)() + n.startTime), c = (0, l.Bk)(), u = c ? (0, l.zU)(c) : void 0, p = null != s ? Me.get(s) : void 0, h = p?.span || u, m = h ? (0, l.et)(h).description : (0, r.o5)().getScopeData().transactionName, f = Z({
            name: p?.elementName || (0, Y.H)(n.target),
            transaction: m,
            attributes: {
              [o.JD]: "auto.http.browser.inp",
              [o.uT]: `ui.interaction.${i}`,
              [o.jG]: n.duration
            },
            startTime: a
          });
          f && (f.addEvent("inp", {
            [o.Sn]: "millisecond",
            [o.xc]: e.value
          }), f.end(a + t))
        };

      function De(e) {
        const {
          name: t,
          op: n,
          origin: s,
          metricName: i,
          value: a,
          attributes: c,
          parentSpan: u,
          reportEvent: d,
          startTime: p,
          endTime: h
        } = e, m = (0, r.o5)().getScopeData().transactionName, f = {
          [o.JD]: s,
          [o.uT]: n,
          [o.jG]: 0,
          [`browser.web_vital.${i}.value`]: a,
          [le.zNS]: m,
          [le.suP]: m,
          "user_agent.original": K.j.navigator?.userAgent,
          ...c
        };
        u && "pageload" === (0, l.RD)(u).attributes?.[o.uT] && (f["sentry.pageload.span_id"] = u.spanContext().spanId), d && (f[`browser.web_vital.${i}.report_event`] = d);
        const g = x({
          name: t,
          attributes: f,
          startTime: p,
          parentSpan: u
        });
        g && g.end(h ?? p)
      }
      const Le = "WebVitals",
        Ne = (0, be._C)((e = {}) => {
          const t = new Set(e.ignore ?? []);
          return {
            name: Le,
            setup(n) {
              const s = (0, S.K)(n),
                {
                  enableStandaloneClsSpans: a,
                  enableStandaloneLcpSpans: c
                } = e._experiments ?? {},
                u = s || t.has("cls") ? void 0 : a || !1,
                p = s || t.has("lcp") ? void 0 : c || !1,
                h = fe({
                  recordClsStandaloneSpans: u,
                  recordLcpStandaloneSpans: p,
                  client: n
                }),
                m = new WeakSet;
              n.on("afterStartPageLoadSpan", e => {
                m.add(e)
              }), n.on("spanEnd", e => {
                m.delete(e) && (h(), function(e, t) {
                  const n = (0, d.k3)();
                  if (!ee()?.getEntries || !n) return void ge();
                  const {
                    spanStreamingEnabled: r,
                    recordClsOnPageloadSpan: s,
                    recordLcpOnPageloadSpan: o
                  } = t, a = te(n);
                  if ("pageload" === (0, l.et)(e).op) {
                    if (function(e) {
                        const t = (0, ce.z)(!1);
                        if (!t) return;
                        const {
                          responseStart: n,
                          requestStart: r
                        } = t;
                        r <= n && (e["ttfb.requestTime"] = {
                          value: n - r,
                          unit: "millisecond"
                        })
                      }(me), r) {
                      const t = (t, n, r) => {
                        const s = r ?? `browser.web_vital.${t}.value`;
                        e.setAttribute(s, n), J.T && i.Yz.log("Setting web vital attribute", {
                          [s]: n
                        }, "on pageload span")
                      };
                      ["ttfb", "fp", "fcp"].forEach(e => {
                        me[e] && t(e, me[e].value)
                      }), me["ttfb.requestTime"] && t("ttfb.requestTime", me["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time")
                    } else s || delete me.cls, o || delete me.lcp, Object.entries(me).forEach(([t, n]) => {
                        g(t, n.value, n.unit, e)
                      }),
                      function(e, t) {
                        de && t.recordLcpOnPageloadSpan && (de.element && e.setAttribute("lcp.element", (0, Y.H)(de.element)), de.id && e.setAttribute("lcp.id", de.id), de.url && e.setAttribute("lcp.url", de.url.trim().slice(0, 200)), null != de.loadTime && e.setAttribute("lcp.loadTime", de.loadTime), null != de.renderTime && e.setAttribute("lcp.renderTime", de.renderTime), e.setAttribute("lcp.size", de.size)), pe?.sources && t.recordClsOnPageloadSpan && pe.sources.forEach((t, n) => e.setAttribute(`cls.source.${n+1}`, (0, Y.H)(t.node)))
                      }(e, t);
                    e.setAttribute(r ? "browser.performance.time_origin" : "performance.timeOrigin", a), e.setAttribute(r ? "browser.performance.navigation.activation_start" : "performance.activationStart", (0, ae.b)())
                  }
                  ge()
                }(e, {
                  recordClsOnPageloadSpan: !1 === u,
                  recordLcpOnPageloadSpan: !1 === p,
                  spanStreamingEnabled: s
                }))
              }), s ? (t.has("lcp") || function(e) {
                let t, n = 0;
                if (!ne("largest-contentful-paint")) return;
                const r = (0, G.Pt)(({
                  metric: e
                }) => {
                  const r = e.entries[e.entries.length - 1];
                  r && se(e.value) && (n = e.value, t = r)
                }, !0);
                re(e, (e, s, o) => {
                  ! function(e, t, n, r) {
                    if (!se(e)) return;
                    J.T && i.Yz.log(`Sending LCP span (${e})`);
                    const s = (0, d.k3)() || 0,
                      o = te(s),
                      a = te(s + (t?.startTime || 0)),
                      c = t ? (0, Y.H)(t.element) : "Largest contentful paint",
                      u = {};
                    t?.element && (u["browser.web_vital.lcp.element"] = (0, Y.H)(t.element)), t?.id && (u["browser.web_vital.lcp.id"] = t.id), t?.url && (u["browser.web_vital.lcp.url"] = t.url), null != t?.loadTime && (u["browser.web_vital.lcp.load_time"] = t.loadTime), null != t?.renderTime && (u["browser.web_vital.lcp.render_time"] = t.renderTime), null != t?.size && (u["browser.web_vital.lcp.size"] = t.size), De({
                      name: c,
                      op: "ui.webvital.lcp",
                      origin: "auto.http.browser.lcp",
                      metricName: "lcp",
                      value: e,
                      attributes: u,
                      parentSpan: n,
                      reportEvent: r,
                      startTime: o,
                      endTime: a
                    })
                  }(n, t, o, e), r()
                })
              }(n), t.has("cls") || function(e) {
                let t, n = 0;
                if (!ne("layout-shift")) return;
                const r = (0, G.a9)(({
                  metric: e
                }) => {
                  const r = e.entries[e.entries.length - 1];
                  r && (n = e.value, t = r)
                }, !0);
                re(e, (e, s, o) => {
                  ! function(e, t, n, r) {
                    J.T && i.Yz.log(`Sending CLS span (${e})`);
                    const s = t ? te(((0, d.k3)() || 0) + t.startTime) : (0, d.zf)(),
                      o = t ? (0, Y.H)(t.sources[0]?.node) : "Layout shift",
                      a = {};
                    t?.sources && t.sources.forEach((e, t) => {
                      a[`browser.web_vital.cls.source.${t+1}`] = (0, Y.H)(e.node)
                    }), De({
                      name: o,
                      op: "ui.webvital.cls",
                      origin: "auto.http.browser.cls",
                      metricName: "cls",
                      value: e,
                      attributes: a,
                      parentSpan: n,
                      reportEvent: r,
                      startTime: s
                    })
                  }(n, t, o, e), r()
                })
              }(n), t.has("inp") || ee() && (0, d.k3)() && (0, G.hT)(({
                metric: e
              }) => {
                if (null == e.value) return;
                if (te(e.value) > 60) return;
                const t = e.entries.find(t => t.duration === e.value && Oe[t.name]);
                t && function(e, t) {
                  J.T && i.Yz.log(`Sending INP span (${e})`);
                  const n = te((0, d.k3)() + t.startTime),
                    s = te(e),
                    a = Oe[t.name],
                    c = null != (f = t.interactionId) ? Me.get(f) : void 0,
                    u = (0, l.Bk)(),
                    p = u ? (0, l.zU)(u) : void 0,
                    h = c?.span || p,
                    m = h ? (0, l.RD)(h).name : (0, r.o5)().getScopeData().transactionName;
                  var f;
                  De({
                    name: c?.elementName || (0, Y.H)(t.target),
                    op: `ui.interaction.${a}`,
                    origin: "auto.http.browser.inp",
                    metricName: "inp",
                    value: e,
                    attributes: {
                      [o.jG]: t.duration,
                      [le.zNS]: m,
                      [le.suP]: m
                    },
                    startTime: n,
                    endTime: n + s,
                    parentSpan: h
                  })
                }(e.value, t)
              })) : t.has("inp") || function() {
                if (ee() && (0, d.k3)()) {
                  const e = (0, G.hT)(Ae);
                  return () => {
                    e()
                  }
                }
              }()
            },
            afterAllSetup() {
              t.has("inp") || function() {
                const e = Object.keys(Oe);

                function t(e) {
                  const t = e.target;
                  if (!t) return;
                  const n = (0, Y.H)(t),
                    r = Math.round(e.timeStamp);
                  if (Re.set(r, n), Re.size > 50) {
                    const e = Re.keys().next().value;
                    void 0 !== e && Re.delete(e)
                  }
                }(0, Ce.B)() && e.forEach(e => {
                  K.j.addEventListener(e, t, {
                    capture: !0,
                    passive: !0
                  })
                });
                const n = ({
                  entries: e
                }) => {
                  const t = (0, l.Bk)(),
                    n = t && (0, l.zU)(t);
                  e.forEach(e => {
                    if (!(0, G.tC)(e)) return;
                    const t = e.interactionId;
                    if (null == t) return;
                    if (Me.has(t)) return;
                    const r = e.target ? (0, Y.H)(e.target) : function(e) {
                      const t = Math.round(e.startTime);
                      let n = Re.get(t);
                      if (!n)
                        for (let e = -5; e <= 5; e++) {
                          const r = Re.get(t + e);
                          if (r) {
                            n = r;
                            break
                          }
                        }
                      return n || "<unknown>"
                    }(e);
                    if (xe.length > 10) {
                      const e = xe.shift();
                      Me.delete(e)
                    }
                    xe.push(t), Me.set(t, {
                      span: n,
                      elementName: r
                    })
                  })
                };
                (0, G.wv)("event", n), (0, G.wv)("first-input", n)
              }()
            }
          }
        }),
        Pe = "sentry_previous_trace";

      function ze(e) {
        return 1 === e.traceFlags
      }

      function je(e, t) {
        e.setAttribute("http.response.status_code", t);
        const n = function(e) {
          if (e < 400 && e >= 100) return {
            code: 1
          };
          if (e >= 400 && e < 500) switch (e) {
            case 401:
              return {
                code: 2, message: "unauthenticated"
              };
            case 403:
              return {
                code: 2, message: "permission_denied"
              };
            case 404:
              return {
                code: 2, message: "not_found"
              };
            case 409:
              return {
                code: 2, message: "already_exists"
              };
            case 413:
              return {
                code: 2, message: "failed_precondition"
              };
            case 429:
              return {
                code: 2, message: "resource_exhausted"
              };
            case 499:
              return {
                code: 2, message: "cancelled"
              };
            default:
              return {
                code: 2, message: "invalid_argument"
              }
          }
          if (e >= 500 && e < 600) switch (e) {
            case 501:
              return {
                code: 2, message: "unimplemented"
              };
            case 503:
              return {
                code: 2, message: "unavailable"
              };
            case 504:
              return {
                code: 2, message: "deadline_exceeded"
              };
            default:
              return {
                code: 2, message: "internal_error"
              }
          }
          return {
            code: 2,
            message: "internal_error"
          }
        }(t);
        "unknown_error" !== n.message && e.setStatus(n)
      }
      var $e = n(85054),
        Fe = n(16805);

      function Be(e = {}) {
        const t = e.client || (0, r.KU)();
        if (!(0, Fe.Ol)() || !t) return {};
        const n = (0, v.EU)(),
          s = (0, I.h)(n);
        if (s.getTraceData) return s.getTraceData(e);
        const o = e.scope || (0, r.o5)(),
          c = e.span || (0, l.Bk)(),
          u = (0, p.h)(c) && !(0, a.f)(t.getOptions());
        if (!c && (0, r.Bi)()) return {};
        const d = c && !u ? (0, l.Qh)(c) : function(e) {
            const {
              traceId: t,
              sampled: n,
              propagationSpanId: r
            } = e.getPropagationContext();
            return (0, U.TC)(t, r, n)
          }(o),
          h = c ? (0, f.k1)(c) : (0, f.ao)(t, o),
          m = (0, $e.De)(h);
        if (!U.MI.test(d)) return i.Yz.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
        const g = {
          "sentry-trace": d,
          baggage: m
        };
        return e.propagateTraceparent && (g.traceparent = c && !u ? (0, l.G_)(c) : function(e) {
          const {
            traceId: t,
            sampled: n,
            propagationSpanId: r
          } = e.getPropagationContext();
          return (0, U.Iy)(t, r, n)
        }(o)), g
      }

      function Ue(e) {
        return "string" == typeof e && e.split(",").some(e => e.trim().startsWith($e.sv))
      }

      function qe(e, t, n, r) {
        const s = {
          url: (0, P.zm)(e),
          type: "fetch",
          "http.method": n,
          [o.JD]: r,
          [o.uT]: "http.client"
        };
        return t && ((0, P.nt)(t) || (s[le.Poj] = (0, P.zm)(t.href), s[le.aVR] = (0, P.zm)(t.href), s["server.address"] = t.host), t.search && (s["http.query"] = t.search), t.hash && (s["http.fragment"] = t.hash)), s
      }
      var He = n(70336),
        We = n(907);

      function Ye(e) {
        try {
          return new URL(e, Se.jf.location.origin).href
        } catch {
          return
        }
      }

      function Ke(e) {
        try {
          return new Headers(e)
        } catch {
          return
        }
      }
      const Je = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
        trackFetchStreamPerformance: !1
      };

      function Ge(e, t) {
        const {
          traceFetch: n,
          traceXHR: s,
          shouldCreateSpanForRequest: i,
          enableHTTPTimings: c,
          tracePropagationTargets: u,
          onRequestSpanStart: d,
          onRequestSpanEnd: h
        } = {
          ...Je,
          ...t
        }, m = "function" == typeof i ? i : e => !0, f = e => function(e, t) {
          const n = (0, z.$N)();
          if (n) {
            let r, s;
            try {
              r = new URL(e, n), s = new URL(n).origin
            } catch {
              return !1
            }
            const o = r.origin === s;
            return t ? (0, H.Xr)(r.toString(), t) || o && (0, H.Xr)(r.pathname, t) : o
          } {
            const n = !!e.match(/^\/(?!\/)/);
            return t ? (0, H.Xr)(e, t) : n
          }
        }(e, u), g = {}, y = e.getOptions().propagateTraceparent;
        n && (0, ke.ur)(t => {
          const n = function(e, t, n, s, o) {
            if (!e.fetchData) return;
            const {
              method: i,
              url: c
            } = e.fetchData, u = (0, a.f)() && t(c);
            if (e.endTimestamp) {
              const t = e.fetchData.__span;
              if (!t) return;
              const n = s[t];
              return void(n && (u && (function(e, t) {
                if (t.response) {
                  je(e, t.response.status);
                  const n = t.response?.headers?.get("content-length");
                  if (n) {
                    const t = parseInt(n);
                    t > 0 && e.setAttribute("http.response_content_length", t)
                  }
                } else t.error && e.setStatus({
                  code: 2,
                  message: "internal_error"
                });
                e.end()
              }(n, e), function(e, t, n) {
                const r = "object" == typeof n && null !== n ? n.onRequestSpanEnd : void 0;
                r?.(e, {
                  headers: t.response?.headers,
                  error: t.error
                })
              }(n, e, o)), delete s[t]))
            }
            const {
              spanOrigin: d = "auto.http.browser",
              propagateTraceparent: h = !1
            } = "object" == typeof o ? o : {
              spanOrigin: o
            }, m = (0, r.KU)(), f = !!(0, l.Bk)(), g = f || !!m && (0, S.K)(m), y = u && g ? x(function(e, t, n) {
              if (e.startsWith("data:")) return {
                name: `${t} ${(0,P.zm)(e)}`,
                attributes: qe(e, void 0, t, n)
              };
              const r = (0, P.kg)(e);
              return {
                name: `${t} ${r?(0,P.CH)(r):e}`,
                attributes: qe(e, r, t, n)
              }
            }(c, i, d)) : new p.w, v = D(y) && f ? void 0 : y;
            if (u && !g && m?.recordDroppedEvent("no_parent_span", "span"), e.fetchData.__span = y.spanContext().spanId, s[y.spanContext().spanId] = y, n(e.fetchData.url)) {
              const t = e.args[0],
                n = {
                  ...e.args[1] || {}
                },
                r = function(e, t, n, r) {
                  const s = Be({
                      span: n,
                      propagateTraceparent: r
                    }),
                    o = s["sentry-trace"],
                    i = s.baggage,
                    a = s.traceparent;
                  if (!o) return;
                  const c = t.headers || ((0, W.ks)(e) ? e.headers : void 0);
                  if (c) {
                    if (function(e) {
                        return "undefined" != typeof Headers && (0, W.tH)(e, Headers)
                      }(c)) {
                      const e = new Headers(c);
                      if (e.get("sentry-trace") || e.set("sentry-trace", o), r && a && !e.get("traceparent") && e.set("traceparent", a), i) {
                        const t = e.get("baggage");
                        t ? Ue(t) || e.set("baggage", `${t},${i}`) : e.set("baggage", i)
                      }
                      return e
                    }
                    if (function(e) {
                        return !!Array.isArray(e) && e.every(e => Array.isArray(e) && 2 === e.length && "string" == typeof e[0])
                      }(c)) {
                      const e = [...c];
                      e.find(e => "sentry-trace" === e[0]) || e.push(["sentry-trace", o]), r && a && !e.find(e => "traceparent" === e[0]) && e.push(["traceparent", a]);
                      const t = c.find(e => "baggage" === e[0] && "string" == typeof e[1] && Ue(e[1]));
                      return i && !t && e.push(["baggage", i]), e
                    } {
                      const e = "sentry-trace" in c ? c["sentry-trace"] : void 0,
                        t = "traceparent" in c ? c.traceparent : void 0,
                        n = "baggage" in c ? c.baggage : void 0,
                        s = n ? Array.isArray(n) ? [...n] : [n] : [],
                        u = n && (Array.isArray(n) ? n.find(e => Ue(e)) : Ue(n));
                      i && !u && s.push(i);
                      const l = Object.assign({}, c, {
                        "sentry-trace": e ?? o,
                        ...s.length > 0 && {
                          baggage: s.join(",")
                        }
                      });
                      return r && a && !t && (l.traceparent = a), l
                    }
                  }
                  return {
                    "sentry-trace": o,
                    ...i && {
                      baggage: i
                    },
                    ...a && {
                      traceparent: a
                    }
                  }
                }(t, n, (0, a.f)() && g ? v : void 0, h);
              r && (e.args[1] = n, n.headers = r)
            }
            if (m) {
              const t = {
                input: e.args,
                response: e.response,
                startTimestamp: e.startTimestamp,
                endTimestamp: e.endTimestamp
              };
              m.emit("beforeOutgoingRequestSpan", y, t)
            }
            return y
          }(t, m, f, g, {
            propagateTraceparent: y,
            onRequestSpanEnd: h
          });
          if (n) {
            const r = Ye(t.fetchData.url),
              s = r ? (0, P.Dl)(r).host : void 0,
              o = r ? (0, P.zm)(r) : void 0;
            n.setAttributes({
              [le.Poj]: o,
              [le.aVR]: o,
              "server.address": s
            }), c && Ve(n, e), d?.(n, {
              headers: t.headers
            })
          }
        }), s && (0, He.Mn)(t => {
          const n = function(e, t, n, s, i, c) {
            const u = e.xhr,
              d = u?.[He.Er];
            if (!u || u.__sentry_own_request__ || !d) return;
            const {
              url: h,
              method: m
            } = d, f = (0, a.f)() && t(h);
            if (e.endTimestamp) {
              const t = u.__sentry_xhr_span_id__;
              if (!t) return;
              const n = s[t];
              return void(n && (f && void 0 !== d.status_code && (je(n, d.status_code), n.end(), c?.(n, {
                headers: Ke((0, We.ti)(u)),
                error: e.error
              })), delete s[t]))
            }
            const g = Ye(h),
              y = g ? (0, P.Dl)(g) : (0, P.Dl)(h),
              v = g ? (0, P.zm)(g) : void 0,
              _ = (0, P.zm)((0, P.f)(h)),
              b = (0, r.KU)(),
              k = !!(0, l.Bk)(),
              w = k || !!b && (0, S.K)(b),
              T = f && w ? x({
                name: `${m} ${_}`,
                attributes: {
                  url: (0, P.zm)(h),
                  type: "xhr",
                  "http.method": m,
                  "http.url": v,
                  [le.aVR]: v,
                  "server.address": y?.host,
                  [o.JD]: "auto.http.browser",
                  [o.uT]: "http.client",
                  ...y?.search && {
                    "http.query": y?.search
                  },
                  ...y?.hash && {
                    "http.fragment": y?.hash
                  }
                }
              }) : new p.w,
              E = D(T) && k ? void 0 : T;
            return f && !w && b?.recordDroppedEvent("no_parent_span", "span"), u.__sentry_xhr_span_id__ = T.spanContext().spanId, s[u.__sentry_xhr_span_id__] = T, n(h) && function(e, t, n) {
              const {
                "sentry-trace": r,
                baggage: s,
                traceparent: o
              } = Be({
                span: t,
                propagateTraceparent: n
              });
              r && function(e, t, n, r) {
                const s = e.__sentry_xhr_v3__?.request_headers;
                if (!s?.["sentry-trace"] && e.setRequestHeader) try {
                  if (e.setRequestHeader("sentry-trace", t), r && !s?.traceparent && e.setRequestHeader("traceparent", r), n) {
                    const t = s?.baggage;
                    t && t.split(",").some(e => e.trim().startsWith("sentry-")) || e.setRequestHeader("baggage", n)
                  }
                } catch {}
              }(e, r, s, o)
            }(u, (0, a.f)() && w ? E : void 0, i), b && b.emit("beforeOutgoingRequestSpan", T, e), T
          }(t, m, f, g, y, h);
          n && (c && Ve(n, e), d?.(n, {
            headers: Ke(t.xhr.__sentry_xhr_v3__?.request_headers)
          }))
        })
      }

      function Ve(e, t) {
        const {
          url: n
        } = (0, l.et)(e).data;
        if (!n || "string" != typeof n) return;
        let r = () => {
          setTimeout(s)
        };
        if ((0, S.K)(t)) {
          const t = e.end.bind(e);
          e.end = e => {
            const n = e ?? (0, d.zf)();
            let o = !1;
            const i = () => {
              o || (o = !0, setTimeout(s), t(n), clearTimeout(a))
            };
            r = i;
            const a = setTimeout(i, 300)
          }
        }
        const s = (0, G.wv)("resource", ({
          entries: t
        }) => {
          t.forEach(t => {
            (function(e) {
              return "resource" === e.entryType && "initiatorType" in e && "string" == typeof e.nextHopProtocol && ("fetch" === e.initiatorType || "xmlhttprequest" === e.initiatorType)
            })(t) && t.name.endsWith(n) && (e.setAttributes(ie(t)), r())
          })
        })
      }
      const Xe = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i,
        Qe = {
          ...L,
          instrumentNavigation: !0,
          instrumentPageLoad: !0,
          markBackgroundSpan: !0,
          enableLongTask: !0,
          enableLongAnimationFrame: !0,
          enableInp: !0,
          ignoreResourceSpans: [],
          ignorePerformanceApiSpans: [],
          detectRedirects: !0,
          linkPreviousTrace: "in-memory",
          consistentTraceSampling: !1,
          enableReportPageLoaded: !1,
          _experiments: {},
          ...Je
        },
        Ze = (e = {}) => {
          "enableElementTiming" in e && (0, i.pq)(() => {
            console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.")
          });
          const t = {
              name: void 0,
              source: void 0
            },
            n = Se.jf.document,
            {
              enableInp: c,
              enableLongTask: u,
              enableLongAnimationFrame: p,
              _experiments: {
                enableInteractions: h,
                enableStandaloneClsSpans: y,
                enableStandaloneLcpSpans: v
              },
              beforeStartSpan: _,
              idleTimeout: b,
              finalTimeout: k,
              childSpanTimeout: w,
              markBackgroundSpan: T,
              traceFetch: E,
              traceXHR: I,
              trackFetchStreamPerformance: C,
              shouldCreateSpanForRequest: M,
              enableHTTPTimings: R,
              ignoreResourceSpans: O,
              ignorePerformanceApiSpans: A,
              instrumentPageLoad: D,
              instrumentNavigation: L,
              detectRedirects: q,
              linkPreviousTrace: J,
              consistentTraceSampling: V,
              enableReportPageLoaded: Z,
              onRequestSpanStart: ne,
              onRequestSpanEnd: re
            } = {
              ...Qe,
              ...e
            },
            se = function() {
              const e = Se.jf.navigator;
              return !!e?.userAgent && Xe.test(e.userAgent)
            }();
          let oe, ae;

          function ue(e, s, i = !0, a) {
            const c = "pageload" === s.op,
              u = s.name,
              p = _ ? _(s) : s,
              h = (0, P.kg)(a || (0, z.$N)()),
              m = {
                ...h?.pathname && {
                  [le.mqy]: h.pathname
                },
                ...h && !(0, P.nt)(h) && {
                  [le.aVR]: h.href
                },
                ...p.attributes
              };
            if (u !== p.name && (m[o.i_] = "custom"), p.attributes = m, !i) {
              const e = (0, d.lu)();
              return void x({
                ...p,
                startTime: e
              }).end(e)
            }
            t.name = p.name, t.source = m[o.i_];
            const y = N(p, {
              idleTimeout: b,
              finalTimeout: k,
              childSpanTimeout: w,
              disableAutoFinish: c,
              beforeSpanEnd: t => {
                (function(e, t) {
                  const n = ee(),
                    r = (0, d.k3)();
                  if (!n?.getEntries || !r) return;
                  const {
                    spanStreamingEnabled: s,
                    ignorePerformanceApiSpans: i,
                    ignoreResourceSpans: a
                  } = t, c = te(r), u = n.getEntries(), {
                    op: p,
                    start_timestamp: h
                  } = (0, l.et)(e);
                  u.slice(he).forEach(t => {
                      const n = te(t.startTime),
                        r = te(Math.max(0, t.duration));
                      if (!("navigation" === p && h && c + n < h)) switch (t.entryType) {
                        case "navigation":
                          ! function(e, t, n) {
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
                                ye(e, t, r, n)
                              }), ye(e, t, "secureConnection", n, "TLS/SSL"), ye(e, t, "fetch", n, "cache"), ye(e, t, "domainLookup", n, "DNS"),
                              function(e, t, n) {
                                const r = n + te(t.requestStart),
                                  s = n + te(t.responseEnd),
                                  i = n + te(t.responseStart);
                                t.responseEnd && (Q(e, r, s, {
                                  op: "browser.request",
                                  name: t.name,
                                  attributes: {
                                    [o.JD]: "auto.ui.browser.metrics"
                                  }
                                }), Q(e, i, s, {
                                  op: "browser.response",
                                  name: t.name,
                                  attributes: {
                                    [o.JD]: "auto.ui.browser.metrics"
                                  }
                                }))
                              }(e, t, n)
                          }(e, t, c);
                          break;
                        case "mark":
                        case "paint":
                        case "measure":
                          ! function(e, t, n, r, s, i) {
                            if (function(e) {
                                if ("measure" === e?.entryType) try {
                                  return "Components ⚛" === e.detail.devtools.track
                                } catch {
                                  return
                                }
                              }(t)) return;
                            if (["mark", "measure"].includes(t.entryType) && (0, H.Xr)(t.name, i)) return;
                            const a = (0, ce.z)(!1),
                              c = te(a ? a.requestStart : 0),
                              u = s + Math.max(n, c),
                              l = s + n,
                              d = l + r,
                              p = {
                                [o.JD]: "auto.resource.browser.metrics"
                              };
                            u !== l && (p["sentry.browser.measure_happened_before_request"] = !0, p["sentry.browser.measure_start_time"] = u),
                              function(e, t) {
                                try {
                                  const n = t.detail;
                                  if (!n) return;
                                  if ("object" == typeof n) {
                                    for (const [t, r] of Object.entries(n))
                                      if (r && (0, W.sO)(r)) e[`sentry.browser.measure.detail.${t}`] = r;
                                      else if (void 0 !== r) try {
                                      e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(r)
                                    } catch {}
                                    return
                                  }
                                  if ((0, W.sO)(n)) return void(e["sentry.browser.measure.detail"] = n);
                                  try {
                                    e["sentry.browser.measure.detail"] = JSON.stringify(n)
                                  } catch {}
                                } catch {}
                              }(p, t), u <= d && Q(e, u, d, {
                                name: t.name,
                                op: t.entryType,
                                attributes: p
                              })
                          }(e, t, n, r, c, i);
                          break;
                        case "resource":
                          ! function(e, t, n, r, s, i, a) {
                            if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                            const c = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
                            if (a?.includes(c)) return;
                            const u = {
                                [o.JD]: "auto.resource.browser.metrics"
                              },
                              l = (0, P.Dl)(n);
                            l.protocol && (u["url.scheme"] = l.protocol.split(":").pop()), l.host && (u["server.address"] = l.host), u["url.same_origin"] = n.includes(K.j.location.origin), u[le.aVR] = n,
                              function(e, t) {
                                [
                                  ["responseStatus", "http.response.status_code"],
                                  ["transferSize", "http.response_transfer_size"],
                                  ["encodedBodySize", "http.response_content_length"],
                                  ["decodedBodySize", "http.decoded_response_content_length"],
                                  ["renderBlockingStatus", "resource.render_blocking_status"],
                                  ["deliveryType", "http.response_delivery_type"]
                                ].forEach(([n, r]) => {
                                  const s = e[n];
                                  null != s && ("number" == typeof s && s < 2147483647 || "string" == typeof s) && (t[r] = s)
                                })
                              }(t, u);
                            const d = {
                                ...u,
                                ...ie(t)
                              },
                              p = i + r;
                            Q(e, p, p + s, {
                              name: n.replace(K.j.location.origin, ""),
                              op: c,
                              attributes: d
                            })
                          }(e, t, t.name, n, r, c, a)
                      }
                    }), he = Math.max(u.length - 1, 0),
                    function(e, t) {
                      const n = K.j.navigator;
                      if (!n) return;
                      const r = n.connection;
                      r && (r.effectiveType && e.setAttribute(t ? "network.connection.effective_type" : "effectiveConnectionType", r.effectiveType), r.type && e.setAttribute(t ? "network.connection.type" : "connectionType", r.type), X(r.rtt) && (t ? e.setAttribute("network.connection.rtt", r.rtt) : "pageload" === (0, l.et)(e).op && g("connection.rtt", r.rtt, "millisecond"))), X(n.deviceMemory) && (t ? e.setAttribute("device.memory.estimated_capacity", n.deviceMemory) : e.setAttribute("deviceMemory", `${n.deviceMemory} GB`)), X(n.hardwareConcurrency) && (t ? e.setAttribute("device.processor_count", n.hardwareConcurrency) : e.setAttribute("hardwareConcurrency", String(n.hardwareConcurrency)))
                    }(e, s)
                })(t, {
                  ignoreResourceSpans: O,
                  ignorePerformanceApiSpans: A,
                  spanStreamingEnabled: (0, S.K)(e)
                }), st(e, void 0);
                const n = (0, r.o5)(),
                  s = n.getPropagationContext();
                n.setPropagationContext({
                  ...s,
                  traceId: y.spanContext().traceId,
                  sampled: (0, l.pK)(y),
                  dsc: (0, f.k1)(t)
                }), c && (ae = void 0)
              },
              trimIdleSpanEndTimestamp: !Z
            });

            function v() {
              n && ["interactive", "complete"].includes(n.readyState) && (e.emit("idleSpanEnableAutoFinish", y), n.removeEventListener("readystatechange", v))
            }
            c && Z && (ae = y), st(e, y), c && !Z && n && (n.addEventListener("readystatechange", v), v())
          }
          return {
            name: "BrowserTracing",
            setup(e) {
              if (se) _e.T && i.Yz.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
              else {
                if (function() {
                    function e() {
                      const e = (0, l.Bk)(),
                        t = e && (0, l.zU)(e);
                      if (t) {
                        const e = "internal_error";
                        s.T && i.Yz.log(`[Tracing] Root span: ${e} -> Global error occurred`), t.setStatus({
                          code: 2,
                          message: e
                        })
                      }
                    }
                    F || (F = !0, (0, j.L)(e), (0, $.r)(e))
                  }(), p && B.O.PerformanceObserver && PerformanceObserver.supportedEntryTypes?.includes("long-animation-frame") ? new PerformanceObserver(e => {
                    const t = (0, l.Bk)();
                    if (t)
                      for (const n of e.getEntries()) {
                        if (!n.scripts[0]) continue;
                        const e = te((0, d.k3)() + n.startTime),
                          {
                            start_timestamp: r,
                            op: s
                          } = (0, l.et)(t);
                        if ("navigation" === s && r && e < r) continue;
                        const i = te(n.duration),
                          a = {
                            [o.JD]: "auto.ui.browser.metrics"
                          },
                          c = n.scripts[0],
                          {
                            invoker: u,
                            invokerType: p,
                            sourceURL: h,
                            sourceFunctionName: m,
                            sourceCharPosition: f
                          } = c;
                        a["browser.script.invoker"] = u, a["browser.script.invoker_type"] = p, h && (a["code.filepath"] = h), m && (a["code.function"] = m), -1 !== f && (a["browser.script.source_char_position"] = f), Q(t, e, e + i, {
                          name: "Main UI thread blocked",
                          op: "ui.long-animation-frame",
                          attributes: a
                        })
                      }
                  }).observe({
                    type: "long-animation-frame",
                    buffered: !0
                  }) : u && (0, G.wv)("longtask", ({
                    entries: e
                  }) => {
                    const t = (0, l.Bk)();
                    if (!t) return;
                    const {
                      op: n,
                      start_timestamp: r
                    } = (0, l.et)(t);
                    for (const s of e) {
                      const e = te((0, d.k3)() + s.startTime),
                        i = te(s.duration);
                      "navigation" === n && r && e < r || Q(t, e, e + i, {
                        name: "Main UI thread blocked",
                        op: "ui.long-task",
                        attributes: {
                          [o.JD]: "auto.ui.browser.metrics"
                        }
                      })
                    }
                  }), h && (0, G.wv)("event", ({
                    entries: e
                  }) => {
                    const t = (0, l.Bk)();
                    if (t)
                      for (const n of e)
                        if ("click" === n.name) {
                          const e = te((0, d.k3)() + n.startTime),
                            r = te(n.duration),
                            s = {
                              name: (0, Y.H)(n.target),
                              op: `ui.interaction.${n.name}`,
                              startTime: e,
                              attributes: {
                                [o.JD]: "auto.ui.browser.metrics"
                              }
                            },
                            i = (0, z.xE)(n.target);
                          i && (s.attributes["ui.component_name"] = i), Q(t, e, e + r, s)
                        }
                  }), q && n) {
                  const e = () => {
                    oe = (0, d.zf)()
                  };
                  addEventListener("click", e, {
                    capture: !0
                  }), addEventListener("keydown", e, {
                    capture: !0,
                    passive: !0
                  })
                }
                e.on("startNavigationSpan", (n, s) => {
                  if ((0, r.KU)() !== e) return;
                  if (s?.isRedirect) return _e.T && i.Yz.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), void ue(e, {
                    op: "navigation.redirect",
                    ...n
                  }, !1, s.url);
                  oe = void 0, t(), (0, r.rm)().setPropagationContext({
                    traceId: (0, m.e)(),
                    sampleRand: Math.random(),
                    propagationSpanId: (0, a.f)() ? void 0 : (0, m.Z)()
                  });
                  const o = (0, r.o5)();
                  o.setPropagationContext({
                    traceId: (0, m.e)(),
                    sampleRand: Math.random(),
                    propagationSpanId: (0, a.f)() ? void 0 : (0, m.Z)()
                  }), o.setSDKProcessingMetadata({
                    normalizedRequest: void 0
                  }), ue(e, {
                    op: "navigation",
                    ...n,
                    parentSpan: null,
                    forceTransaction: !0
                  }, !0, s?.url)
                }), e.on("startPageLoadSpan", (n, s = {}) => {
                  if ((0, r.KU)() !== e) return;
                  t();
                  const o = s.sentryTrace || et("sentry-trace") || tt("sentry-trace"),
                    i = s.baggage || et("baggage") || tt("baggage"),
                    c = (0, U.kM)(o, i),
                    u = (0, r.o5)();
                  u.setPropagationContext(c), (0, a.f)() || (u.getPropagationContext().propagationSpanId = (0, m.Z)()), u.setSDKProcessingMetadata({
                    normalizedRequest: (0, Se.AP)()
                  }), ue(e, {
                    op: "pageload",
                    ...n
                  })
                }), e.on("endPageloadSpan", () => {
                  Z && ae && (ae.setAttribute(o.fs, "reportPageLoaded"), ae.end())
                })
              }

              function t() {
                const t = rt(e);
                t && !(0, l.et)(t).timestamp && (_e.T && i.Yz.log(`[Tracing] Finishing current active span with op: ${(0,l.et)(t).op}`), t.setAttribute(o.fs, "cancelled"), t.end())
              }
            },
            afterAllSetup(e) {
              if (se) return;
              e.addIntegration && !e.getIntegrationByName?.(Le) && e.addIntegration(Ne({
                ignore: c ? [] : ["inp"],
                _experiments: {
                  enableStandaloneClsSpans: y,
                  enableStandaloneLcpSpans: v
                }
              }));
              let n = (0, z.$N)();
              if ("off" !== J && function(e, {
                  linkPreviousTrace: t,
                  consistentTraceSampling: n
                }) {
                  const s = "session-storage" === t;
                  let a = s ? function() {
                    try {
                      const e = Se.jf.sessionStorage?.getItem(Pe);
                      return JSON.parse(e)
                    } catch {
                      return
                    }
                  }() : void 0;
                  e.on("spanStart", e => {
                    if ((0, l.zU)(e) !== e) return;
                    const t = (0, r.o5)().getPropagationContext();
                    a = function(e, t, n) {
                      const r = (0, l.et)(t),
                        s = {
                          spanContext: t.spanContext(),
                          startTimestamp: r.start_timestamp,
                          sampleRate: function() {
                            try {
                              const e = Number(r.data?.[o.sy] ?? n.dsc?.sample_rate);
                              return Number.isNaN(e) ? 0 : e
                            } catch {
                              return 0
                            }
                          }(),
                          sampleRand: n.sampleRand
                        };
                      if (!e) return s;
                      const a = e.spanContext;
                      return a.traceId === r.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (_e.T && i.Yz.log(`Adding previous_trace \`${JSON.stringify(a)}\` link to span \`${JSON.stringify({op:r.op,...t.spanContext()})}\``), t.addLink({
                        context: a,
                        attributes: {
                          [o.Lc]: "previous_trace"
                        }
                      }), t.setAttribute("sentry.previous_trace", `${a.traceId}-${a.spanId}-${ze(a)?1:0}`)), s)
                    }(a, e, t), s && function(e) {
                      try {
                        Se.jf.sessionStorage.setItem(Pe, JSON.stringify(e))
                      } catch (e) {
                        _e.T && i.Yz.warn("Could not store previous trace in sessionStorage", e)
                      }
                    }(a)
                  });
                  let c = !0;
                  n && e.on("beforeSampling", e => {
                    if (!a) return;
                    const t = (0, r.o5)(),
                      n = t.getPropagationContext();
                    c && n.parentSpanId ? c = !1 : (t.setPropagationContext({
                      ...n,
                      dsc: {
                        ...n.dsc,
                        sample_rate: String(a.sampleRate),
                        sampled: String(ze(a.spanContext))
                      },
                      sampleRand: a.sampleRand
                    }), e.parentSampled = ze(a.spanContext), e.parentSampleRate = a.sampleRate, e.spanAttributes = {
                      ...e.spanAttributes,
                      [o.Ef]: a.sampleRate
                    })
                  })
                }(e, {
                  linkPreviousTrace: J,
                  consistentTraceSampling: V
                }), Se.jf.location) {
                if (D) {
                  const t = (0, d.k3)();
                  ! function(e, t) {
                    e.emit("startPageLoadSpan", t, void 0), (0, r.o5)().setTransactionName(t.name);
                    const n = rt(e);
                    n && e.emit("afterStartPageLoadSpan", n)
                  }(e, {
                    name: Se.jf.location.pathname,
                    startTime: t ? t / 1e3 : void 0,
                    attributes: {
                      [o.i_]: "url",
                      [o.JD]: "auto.pageload.browser"
                    }
                  })
                }
                L && (0, ve._)(({
                  to: t,
                  from: s
                }) => {
                  if (void 0 === s && -1 !== n?.indexOf(t)) return void(n = void 0);
                  n = void 0;
                  const i = (0, P.kg)(t),
                    a = rt(e),
                    c = a && q && function(e, t) {
                      const n = (0, l.et)(e),
                        r = (0, d.lu)();
                      return !(r - n.start_timestamp > ot) && !(t && r - t <= ot)
                    }(a, oe);
                  ! function(e, t, n) {
                    const {
                      url: s,
                      isRedirect: o
                    } = n || {};
                    e.emit("beforeStartNavigationSpan", t, {
                      isRedirect: o,
                      url: s
                    }), e.emit("startNavigationSpan", t, {
                      isRedirect: o,
                      url: s
                    });
                    const i = (0, r.o5)();
                    i.setTransactionName(t.name), s && !o && i.setSDKProcessingMetadata({
                      normalizedRequest: {
                        ...(0, Se.AP)(),
                        url: s
                      }
                    }), rt(e)
                  }(e, {
                    name: i?.pathname || Se.jf.location.pathname,
                    attributes: {
                      [o.i_]: "url",
                      [o.JD]: "auto.navigation.browser"
                    }
                  }, {
                    url: t,
                    isRedirect: c
                  })
                })
              }
              T && (Se.jf.document ? Se.jf.document.addEventListener("visibilitychange", () => {
                const e = (0, l.Bk)();
                if (!e) return;
                const t = (0, l.zU)(e);
                if (Se.jf.document.hidden && t) {
                  const e = "cancelled",
                    {
                      op: n,
                      status: r
                    } = (0, l.et)(t);
                  _e.T && i.Yz.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), r || t.setStatus({
                    code: 2,
                    message: e
                  }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
                }
              }) : _e.T && i.Yz.warn("[Tracing] Could not set up background tab detection due to lack of global document")), h && function(e, t, n, r, s) {
                let a;
                Se.jf.document && addEventListener("click", () => {
                  const c = "ui.action.click",
                    u = rt(e);
                  if (u) {
                    const e = (0, l.et)(u).op;
                    if (["navigation", "pageload"].includes(e)) return void(_e.T && i.Yz.warn(`[Tracing] Did not create ${c} span because a pageload or navigation span is in progress.`))
                  }
                  a && (a.setAttribute(o.fs, "interactionInterrupted"), a.end(), a = void 0), s.name ? a = N({
                    name: s.name,
                    op: c,
                    attributes: {
                      [o.i_]: s.source || "url"
                    }
                  }, {
                    idleTimeout: t,
                    finalTimeout: n,
                    childSpanTimeout: r
                  }) : _e.T && i.Yz.warn(`[Tracing] Did not create ${c} transaction because _latestRouteName is missing.`)
                }, {
                  capture: !0
                })
              }(e, b, k, w, t), Ge(e, {
                traceFetch: E,
                traceXHR: I,
                tracePropagationTargets: e.getOptions().tracePropagationTargets,
                shouldCreateSpanForRequest: M,
                enableHTTPTimings: R,
                onRequestSpanStart: ne,
                onRequestSpanEnd: re
              }), C && e.addIntegration(Ie())
            }
          }
        };

      function et(e) {
        const t = Se.jf.document,
          n = t?.querySelector(`meta[name=${e}]`);
        return n?.getAttribute("content") || void 0
      }

      function tt(e) {
        const t = Se.jf.performance?.getEntriesByType?.("navigation")[0],
          n = t?.serverTiming?.find(t => t.name === e);
        return n?.description
      }
      const nt = "_sentry_idleSpan";

      function rt(e) {
        return e[nt]
      }

      function st(e, t) {
        (0, q.my)(e, nt, t)
      }
      const ot = 1.5
    },
    91452(e, t, n) {
      "use strict";
      n.d(t, {
        _: () => u
      });
      var r = n(52244),
        s = n(63668),
        o = n(10614),
        i = n(75995),
        a = n(60365),
        c = n(56951);

      function u(e, t = (0, c.qd)("fetch")) {
        let n = 0,
          u = 0;
        return function(e, t, n = (0, i.C)(e.bufferSize || 64)) {
          let c = {};
          return {
            send: function(u) {
              const l = [];
              if ((0, o.yH)(u, (t, n) => {
                  const r = (0, o.zk)(n);
                  (0, a.Jz)(c, r) ? e.recordDroppedEvent("ratelimit_backoff", r): l.push(t)
                }), 0 === l.length) return Promise.resolve({});
              const d = (0, o.h4)(u[0], l),
                p = t => {
                  (0, o.hP)(d, ["client_report"]) ? r.T && s.Yz.warn(`Dropping client report. Will not send outcomes (reason: ${t}).`): (0, o.yH)(d, (n, r) => {
                    e.recordDroppedEvent(t, (0, o.zk)(r))
                  })
                };
              return n.add(() => t({
                body: (0, o.bN)(d)
              }).then(e => 413 === e.statusCode ? (r.T && s.Yz.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), p("send_error"), e) : (r.T && void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && s.Yz.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), c = (0, a.wq)(c, e), e), e => {
                throw p("network_error"), r.T && s.Yz.error("Encountered error running transport request:", e), e
              })).then(e => e, e => {
                if (e === i.a) return r.T && s.Yz.error("Skipped sending event because buffer is full."), p("queue_overflow"), Promise.resolve({});
                throw e
              })
            },
            flush: e => n.drain(e)
          }
        }(e, async function(r) {
          const s = r.body.length;
          n += s, u++;
          const o = {
            body: r.body,
            method: "POST",
            referrerPolicy: "strict-origin",
            headers: e.headers,
            keepalive: n <= 6e4 && u < 15,
            ...e.fetchOptions
          };
          try {
            const n = await t(e.url, o);
            return {
              statusCode: n.status,
              headers: {
                "x-sentry-rate-limits": n.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": n.headers.get("Retry-After")
              }
            }
          } catch (e) {
            throw (0, c.y7)("fetch"), e
          } finally {
            n -= s, u--
          }
        }, (0, i.C)(e.bufferSize || 40))
      }
    },
    87133(e, t, n) {
      "use strict";
      n.d(t, ["Poj", 0, "http.url", "aVR", 0, "url.full", "mqy", 0, "url.path", "suP", 0, "sentry.segment.name", "zNS", 0, "sentry.transaction"])
    },
    16678(e, t, n) {
      "use strict";

      function r(e, t, n) {
        return t || `${function(e){return`${function(e){const t=e.protocol?`${e.protocol}:`:"",n=e.port?`:${e.port}`:"";return`${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`}(e)}${e.projectId}/envelope/`}(e)}?${function(e,t){const n={sentry_version:"7"};return e.publicKey&&(n.sentry_key=e.publicKey),t&&(n.sentry_client=`
        $ {
          t.name
        }
        /${t.version}`),new URLSearchParams(n).toString()}(e,n)}`}n.d(t,{Z8:()=>r})},20696(e,t,n){"use strict";n.d(t,{Z:()=>a});var r=n(49718),s=n(63668),o=n(83883);const i=100;function a(e,t){const n=(0,r.KU)(),a=(0,r.rm)();if(!n)return;const{beforeBreadcrumb:c=null,maxBreadcrumbs:u=i}=n.getOptions();if(u<=0)return;const l={timestamp:(0,o.lu)(),...e},d=c?(0,s.pq)(()=>c(l,t)):l;null!==d&&(n.emit&&n.emit("beforeAddBreadcrumb",d,t),a.addBreadcrumb(d,u))}},45160(e,t,n){"use strict";n.d(t,{LE:()=>l,V7:()=>d,lu:()=>p});var r=n(12212),s=n(5136),o=n(48845),i=n(10614),a=n(71337),c=n(57197),u=n(79165);function l(e,t,n,r){const s=(0,i.Cj)(n),c={sent_at:new Date((0,a.Wk)()).toISOString(),...s&&{sdk:s},...!!r&&t&&{dsn:(0,o.SB)(t)}},u="aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e.toJSON()];return(0,i.h4)(c,[u])}function d(e,t,n,r){const s=(0,i.Cj)(n),o=e.type&&"replay_event"!==e.type?e.type:"event";!function(e,t){if(!t)return e;const n=e.sdk||{};e.sdk={...n,name:n.name||t.name,version:n.version||t.version,integrations:[...e.sdk?.integrations||[],...t.integrations||[]],packages:[...e.sdk?.packages||[],...t.packages||[]],settings:e.sdk?.settings||t.settings?{...e.sdk?.settings,...t.settings}:void 0}}(e,n?.sdk);const a=(0,i.n2)(e,s,r,t);delete e.sdkProcessingMetadata;const c=[{type:o},e];return(0,i.h4)(a,[c])}function p(e,t){const n=(0,r.k1)(e[0]),l=t?.getDsn(),d=t?.getOptions().tunnel,p={sent_at:new Date((0,a.Wk)()).toISOString(),...(h=n,!!h.trace_id&&!!h.public_key&&{trace:n}),...!!d&&l&&{dsn:(0,o.SB)(l)}};var h;const{beforeSendSpan:m,ignoreSpans:f}=t?.getOptions()||{},g=f?.length?e.filter(e=>{const t=(0,u.et)(e);return!(0,c.e)({description:t.description,op:t.op,attributes:t.data},f)}):e,y=e.length-g.length;y&&t?.recordDroppedEvent("before_send","span",y);const v=m?e=>{const t=(0,u.et)(e);return((0,s.S)(m)?t:m(t))||((0,u.xl)(),t)}:u.et,_=[];for(const e of g){const t=v(e);t&&_.push((0,i.y5)(t))}return(0,i.h4)(p,_)}},1194(e,t,n){"use strict";n.d(t,{B$:()=>d,ur:()=>l});var r=n(49718),s=n(24158),o=n(50733),i=n(56186),a=n(83883),c=n(91867),u=n(80113);function l(e,t){const n="fetch",r=(0,u.s5)(n,e);return(0,u.AS)(n,()=>p(void 0,t)),r}function d(e){const t="fetch-body-resolved",n=(0,u.s5)(t,e);return(0,u.AS)(t,()=>p(h)),n}function p(e,t=!1){t&&!(0,i.m7)()||(0,o.GS)(c.O,"fetch",function(t){return function(...n){const i=new Error,{method:l,url:d}=function(e){if(0===e.length)return{method:"GET",url:""};if(2===e.length){const[t,n]=e;return{url:f(t),method:m(n,"method")?String(n.method).toUpperCase():(0,s.ks)(t)&&m(t,"method")?String(t.method).toUpperCase():"GET"}}const t=e[0];return{url:f(t),method:m(t,"method")?String(t.method).toUpperCase():"GET"}}(n),p={args:n,fetchData:{method:l,url:d},startTimestamp:1e3*(0,a.zf)(),virtualError:i,headers:g(n)};return e||(0,u.aj)("fetch",{...p}),t.apply(c.O,n).then(async t=>(e?e(t):(0,u.aj)("fetch",{...p,endTimestamp:1e3*(0,a.zf)(),response:t}),t),e=>{(0,u.aj)("fetch",{...p,endTimestamp:1e3*(0,a.zf)(),error:e}),(0,s.bJ)(e)&&void 0===e.stack&&(e.stack=i.stack,(0,o.my)(e,"framesToPop",1));const t=(0,r.KU)(),n=t?.getOptions().enhanceFetchErrorMessages??"always";if(!1!==n&&(0,s.bJ)(e)&&"TypeError"===e.name&&("Failed to fetch"===e.message||"Load failed"===e.message||"NetworkError when attempting to fetch resource."===e.message))try{const t=new URL(p.fetchData.url).host;"always"===n?e.message=`${e.message} (${t})`:(0,o.my)(e,"__sentry_fetch_url_host__",t)}catch{}throw e})}})}function h(e){let t;try{t=e.clone()}catch{return}!async function(e,t){if(e?.body){const n=e.body,r=n.getReader(),s=setTimeout(()=>{n.cancel().then(null,()=>{})},9e4);let o=!0;for(;o;){let e;try{e=setTimeout(()=>{n.cancel().then(null,()=>{})},5e3);const{done:s}=await r.read();clearTimeout(e),s&&(t(),o=!1)}catch{o=!1}finally{clearTimeout(e)}}clearTimeout(s),r.releaseLock(),n.cancel().then(null,()=>{})}}(t,()=>{(0,u.aj)("fetch-body-resolved",{endTimestamp:1e3*(0,a.zf)(),response:e})})}function m(e,t){return(0,s.Z4)(e)&&!!e[t]}function f(e){return"string"==typeof e?e:e?m(e,"url")?e.url:e.toString?e.toString():"":""}function g(e){const[t,n]=e;try{if("object"==typeof n&&null!==n&&"headers"in n&&n.headers)return new Headers(n.headers);if((0,s.ks)(t))return new Headers(t.headers)}catch{}}},7909(e,t,n){"use strict";n.d(t,{L:()=>i});var r=n(91867),s=n(80113);let o=null;function i(e){const t="error";(0,s.s5)(t,e),(0,s.AS)(t,a)}function a(){o=r.O.onerror,r.O.onerror=function(e,t,n,r,i){const a={column:r,error:i,line:n,msg:e,url:t};return(0,s.aj)("error",a),!!o&&o.apply(this,arguments)},r.O.onerror.__SENTRY_INSTRUMENTED__=!0}},84061(e,t,n){"use strict";n.d(t,{r:()=>i});var r=n(91867),s=n(80113);let o=null;function i(e){const t="unhandledrejection";(0,s.s5)(t,e),(0,s.AS)(t,a)}function a(){o=r.O.onunhandledrejection,r.O.onunhandledrejection=function(e){const t=e;return(0,s.aj)("unhandledrejection",t),!o||o.apply(this,arguments)},r.O.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}},80113(e,t,n){"use strict";n.d(t,{AS:()=>u,aj:()=>l,s5:()=>c});var r=n(52244),s=n(63668),o=n(71507);const i={},a={};function c(e,t){return i[e]=i[e]||[],i[e].push(t),()=>{const n=i[e];if(n){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}}function u(e,t){if(!a[e]){a[e]=!0;try{t()}catch(t){r.T&&s.Yz.error(`Error while instrumenting ${e}`,t)}}}function l(e,t){const n=e&&i[e];if(n)for(const i of n)try{i(t)}catch(t){r.T&&s.Yz.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${(0,o.qQ)(i)}\nError:`,t)}}},88164(e,t,n){"use strict";n.d(t,{P$:()=>a,_C:()=>l,lc:()=>c,mH:()=>i,qm:()=>u});var r=n(52244),s=n(63668);const o=[];function i(e){const t=e.defaultIntegrations||[],n=e.integrations;let r;if(t.forEach(e=>{e.isDefaultInstance=!0}),Array.isArray(n))r=[...t,...n];else if("function"==typeof n){const e=n(t);r=Array.isArray(e)?e:[e]}else r=t;return function(e){const t={};return e.forEach(e=>{const{name:n}=e,r=t[n];r&&!r.isDefaultInstance&&e.isDefaultInstance||(t[n]=e)}),Object.values(t)}(r)}function a(e,t){const n={};return t.forEach(t=>{t?.beforeSetup&&t.beforeSetup(e)}),t.forEach(t=>{t&&u(e,t,n)}),n}function c(e,t){for(const n of t)n?.afterAllSetup&&n.afterAllSetup(e)}function u(e,t,n){if(n[t.name])r.T&&s.Yz.log(`Integration skipped because it was already installed: ${t.name}`);else{if(n[t.name]=t,o.includes(t.name)||"function"!=typeof t.setupOnce||(t.setupOnce(),o.push(t.name)),t.setup&&"function"==typeof t.setup&&t.setup(e),"function"==typeof t.preprocessEvent){const n=t.preprocessEvent.bind(t);e.on("preprocessEvent",(t,r)=>n(t,r,e))}if("function"==typeof t.processEvent){const n=t.processEvent.bind(t),r=Object.assign((t,r)=>n(t,r,e),{id:t.name});e.addEventProcessor(r)}["processSpan","processSegmentSpan"].forEach(n=>{const r=t[n];"function"==typeof r&&e.on(n,n=>r.call(t,n,e))}),r.T&&s.Yz.log(`Integration installed: ${t.name}`)}}function l(e){return e}},59069(e,t,n){"use strict";var r=n(52244),s=n(88164),o=n(63668),i=n(71507);const a=(0,s._C)(()=>{let e;return{name:"Dedupe",processEvent(t){if(t.type)return t;try{if(function(e,t){return!!t&&(!!function(e,t){const n=e.message,r=t.message;return!(!n&&!r)&&(!(n&&!r||!n&&r)&&(n===r&&(!!u(e,t)&&!!c(e,t))))}(e,t)||!!function(e,t){const n=l(t),r=l(e);return!(!n||!r)&&(n.type===r.type&&n.value===r.value&&(!!u(e,t)&&!!c(e,t)))}(e,t))}(t,e))return r.T&&o.Yz.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{}return e=t}}});function c(e,t){let n=(0,i.RV)(e),r=(0,i.RV)(t);if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;if(r.length!==n.length)return!1;for(let e=0;e<r.length;e++){const t=r[e],s=n[e];if(t.filename!==s.filename||t.lineno!==s.lineno||t.colno!==s.colno||t.function!==s.function)return!1}return!0}function u(e,t){let n=e.fingerprint,r=t.fingerprint;if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;try{return!(n.join("")!==r.join(""))}catch{return!1}}function l(e){return e.exception?.values?.[0]}n.d(t,["s",0,a])},58594(e,t,n){"use strict";var r=n(52244),s=n(88164),o=n(63668),i=n(24158),a=n(32923),c=n(83107),u=n(37287);const l=(0,s._C)((e={})=>{const{depth:t=3,captureErrorCause:n=!0}=e;return{name:"ExtraErrorData",processEvent(e,r,s){const{maxValueLength:o}=s.getOptions();return function(e,t={},n,r,s){if(!t.originalException||!(0,i.bJ)(t.originalException))return e;const o=t.originalException.name||t.originalException.constructor.name,u=d(t.originalException,r,s);if(u){const t={...e.contexts},r=(0,a.S8)(u,n);return(0,i.Qd)(r)&&((0,c.Gc)(r),t[o]=r),{...e,contexts:t}}return e}(e,r,t,n,o)}}});function d(e,t,n){try{const r=["name","message","stack","line","column","fileName","lineNumber","columnNumber","toJSON"],s={};for(const t of Object.keys(e)){if(-1!==r.indexOf(t))continue;const o=e[t];s[t]=(0,i.bJ)(o)||"string"==typeof o?n?(0,u.xv)(`${o}`,n):`${o}`:o}if(t&&void 0!==e.cause)if((0,i.bJ)(e.cause)){const t=e.cause.name||e.cause.constructor.name;s.cause={[t]:d(e.cause,!1,n)}}else s.cause=e.cause;if("function"==typeof e.toJSON){const t=e.toJSON();for(const e of Object.keys(t)){const n=t[e];s[e]=(0,i.bJ)(n)?n.toString():n}}return s}catch(e){r.T&&o.Yz.error("Unable to extract extra data from the Error object:",e)}return null}n.d(t,["X",0,l])},55804(e,t,n){"use strict";n.d(t,{Q:()=>c});var r=n(88164),s=n(91867);const o=new Map,i=new Set;var a=n(10614);const c=(0,r._C)(()=>({name:"ModuleMetadata",setup(e){e.on("beforeEnvelope",e=>{(0,a.yH)(e,(e,t)=>{if("event"===t){const t=Array.isArray(e)?e[1]:void 0;t&&(function(e){e.exception?.values?.forEach(e=>{e.stacktrace?.frames?.forEach(e=>{delete e.module_metadata})})}(t),e[1]=t)}})}),e.on("applyFrameMetadata",t=>{t.type||function(e,t){t.exception?.values?.forEach(t=>{t.stacktrace?.frames?.forEach(t=>{if(!t.filename||t.module_metadata)return;const n=function(e,t){return function(e){if(s.O._sentryModuleMetadata)for(const t of Object.keys(s.O._sentryModuleMetadata)){const n=s.O._sentryModuleMetadata[t];if(i.has(t))continue;i.add(t);const r=e(t);for(const e of r.reverse())if(e.filename){o.set(e.filename,n);break}}}(e),o.get(t)}(e,t.filename);n&&(t.module_metadata=n)})})}(e.getOptions().stackParser,t)})}}))},32880(e,t,n){"use strict";n.d(t,{g:()=>k,NG:()=>w});var r=n(70805),s=n(71406),o=n(49718),i=n(52244),a=n(63668),c=n(35256),u=n(10287),l=n(83883);let d,p=0;var h=n(12212),m=n(79165),f=n(48845),g=n(10614),y=n(4957);function v(e,t){const n=t?"auto":"never";return[{type:"trace_metric",item_count:e.length,content_type:"application/vnd.sentry.items.trace-metric+json"},{version:2,...(0,y.B)()&&{ingest_settings:{infer_ip:n,infer_user_agent:n}},items:e}]}function _(e,t,n,r,s){const o={};return t?.sdk&&(o.sdk={name:t.sdk.name,version:t.sdk.version}),n&&r&&(o.dsn=(0,f.SB)(r)),(0,g.h4)(o,[v(e,s)])}function S(e,t,n,r=!0){!n||!r&&t in e||(e[t]=n)}function b(e,t){const n=E(),r=T(e);void 0===r?n.set(e,[t]):r.length>=1e3?(w(e,r),n.set(e,[t])):n.set(e,[...r,t])}function k(e,t){const n=t?.scope??(0,o.o5)(),s=t?.captureSerializedMetric??b,f=n?.getClient()??(0,o.KU)();if(!f)return void(i.T&&a.Yz.warn("No client available to capture metric."));const{_experiments:g,enableMetrics:y,beforeSendMetric:v}=f.getOptions();if(!(y??g?.enableMetrics??1))return void(i.T&&a.Yz.warn("metrics option not enabled, metric will not be captured."));const{user:_,attributes:k}=(0,c.Om)((0,o.rm)(),n),w=function(e,t,n){const{release:r,environment:s}=t.getOptions(),o={...e.attributes};S(o,"user.id",n.id,!1),S(o,"user.email",n.email,!1),S(o,"user.name",n.username,!1),S(o,"sentry.release",r),S(o,"sentry.environment",s);const{name:i,version:a}=t.getSdkMetadata()?.sdk??{};S(o,"sentry.sdk.name",i),S(o,"sentry.sdk.version",a);const c=t.getIntegrationByName("Replay"),u=c?.getReplayId(!0);return S(o,"sentry.replay_id",u),u&&"buffer"===c?.getRecordingMode()&&S(o,"sentry._internal.replay_is_buffering",!0),{...e,attributes:o}}(e,f,_);f.emit("processMetric",w);const T=v||g?.beforeSendMetric,E=T?T(w):w;if(!E)return void(i.T&&a.Yz.log("`beforeSendMetric` returned `null`, will not send metric."));const I=function(e,t,n,s){const[,i]=function(e,t){return t?(0,o.v4)(t,()=>{const n=(0,m.Bk)(),r=n?(0,m.kX)(n):(0,o.vn)(t);return[n?(0,h.k1)(n):(0,h.ao)(e,t),r]}):[void 0,void 0]}(t,n),a=(0,u.f)(n),c=a?a.spanContext().traceId:i?.trace_id,f=a?a.spanContext().spanId:void 0,g=(0,l.zf)(),y=function(e){const t=Math.floor(1e3*e);void 0!==d&&t!==d&&(p=0);const n=p;return p++,d=t,{key:"sentry.timestamp.sequence",value:{value:n,type:"integer"}}}(g);return{timestamp:g,trace_id:c??"",span_id:f,name:e.name,type:e.type,unit:e.unit,value:e.value,attributes:{...(0,r.SY)(s),...(0,r.SY)(e.attributes,"skip-undefined"),[y.key]:y.value}}}(E,f,n,k);i.T&&a.Yz.log("[Metric]",I),s(f,I),f.emit("afterCaptureMetric",E)}function w(e,t){const n=t??T(e)??[];if(0===n.length)return;const r=e.getOptions(),s=_(n,r._metadata,r.tunnel,e.getDsn(),e.getDataCollectionOptions().userInfo);E().set(e,[]),e.emit("flushMetrics"),e.sendEnvelope(s)}function T(e){return E().get(e)}function E(){return(0,s.BY)("clientToMetricBufferMap",()=>new WeakMap)}},230(e,t,n){"use strict";n.r(t),n.d(t,{count:()=>o,distribution:()=>a,gauge:()=>i});var r=n(32880);function s(e,t,n,s){(0,r.g)({type:e,name:t,value:n,unit:s?.unit,attributes:s?.attributes},{scope:s?.scope})}function o(e,t=1,n){s("counter",e,t,n)}function i(e,t,n){s("gauge",e,t,n)}function a(e,t,n){s("distribution",e,t,n)}},5136(e,t,n){"use strict";function r(e){return!!e&&"function"==typeof e&&"_streamed"in e&&!!e._streamed}n.d(t,{S:()=>r})},37663(e,t,n){"use strict";function r(e,t){const n=e.attributes??(e.attributes={});Object.entries(t).forEach(([e,t])=>{null==t||e in n||(n[e]=t)})}n.d(t,{FD:()=>r})},73320(e,t,n){"use strict";function r(e){return"stream"===e.getOptions().traceLifecycle}n.d(t,{K:()=>r})},49084(e,t,n){"use strict";n.d(t,{NK:()=>c});var r=n(16678),s=n(48845),o=n(10614);const i="MULTIPLEXED_TRANSPORT_EXTRA_KEY";function a(e,t){let n;return(0,o.yH)(e,(e,r)=>(t.includes(r)&&(n=Array.isArray(e)?e[1]:void 0),!!n)),n}function c(e,t){return n=>{const c=e(n),u=new Map,l=t||(e=>{const t=e.getEvent();return t?.extra?.[i]&&Array.isArray(t.extra[i])?t.extra[i]:[]});function d(t,o){const i=o?`${t}:${o}`:t;let c=u.get(i);if(!c){const l=(0,s.hH)(t);if(!l)return;const d=(0,r.Z8)(l,n.tunnel);c=o?function(e,t){return n=>{const r=e(n);return{...r,send:async e=>{const n=a(e,["event","transaction","profile","replay_event"]);return n&&(n.release=t),r.send(e)}}}}(e,o)({...n,url:d}):e({...n,url:d}),u.set(i,c)}return[t,c]}return{send:async function(e){const t=l({envelope:e,getEvent:function(t){return a(e,t?.length?t:["event"])}}).map(e=>"string"==typeof e?d(e,void 0):d(e.dsn,e.release)).filter(e=>!!e),n=t.length?t:[["",c]];return(await Promise.all(n.map(([t,n])=>n.send(function(e,t){return(0,o.h4)(t?{...e[0],dsn:t}:e[0],e[1])}(e,t)))))[0]},flush:async function(e){const t=[...u.values(),c];return(await Promise.all(t.map(t=>t.flush(e)))).every(e=>e)}}}}},28276(e,t,n){"use strict";n.d(t,{$N:()=>s,xE:()=>o});const r=n(91867).O;function s(){try{return r.document.location.href}catch{return""}}function o(e,t=5){if(!r.HTMLElement)return null;let n=e;for(let e=0;e<t;e++){if(!n)return null;if(n instanceof HTMLElement){if(n.dataset.sentryComponent)return n.dataset.sentryComponent;if(n.dataset.sentryElement)return n.dataset.sentryElement}n=n.parentNode}return null}},55971(e,t,n){"use strict";function r(){return"undefined"!=typeof __SENTRY_BROWSER_BUNDLE__&&!!__SENTRY_BROWSER_BUNDLE__}function s(){return"npm"}n.d(t,{Z:()=>r,e:()=>s})},10614(e,t,n){"use strict";n.d(t,{Cj:()=>v,W3:()=>u,bN:()=>h,bm:()=>f,h4:()=>c,hP:()=>d,n2:()=>_,y5:()=>m,yH:()=>l,zk:()=>y});var r=n(71406),s=n(48845),o=n(32923),i=n(71337),a=n(91867);function c(e,t=[]){return[e,t]}function u(e,t){const[n,r]=e;return[n,[...r,t]]}function l(e,t){const n=e[1];for(const e of n)if(t(e,e[0].type))return!0;return!1}function d(e,t){return l(e,(e,n)=>t.includes(n))}function p(e){const t=(0,r.Se)(a.O);return t.encodePolyfill?t.encodePolyfill(e):(new TextEncoder).encode(e)}function h(e){const[t,n]=e;let r=JSON.stringify(t);function s(e){"string"==typeof r?r="string"==typeof e?r+e:[p(r),e]:r.push("string"==typeof e?p(e):e)}for(const e of n){const[t,n]=e;if(s(`\n${JSON.stringify(t)}\n`),"string"==typeof n||n instanceof Uint8Array)s(n);else{let e;try{e=JSON.stringify(n)}catch{e=JSON.stringify((0,o.S8)(n))}s(e)}}return"string"==typeof r?r:function(e){const t=e.reduce((e,t)=>e+t.length,0),n=new Uint8Array(t);let r=0;for(const t of e)n.set(t,r),r+=t.length;return n}(r)}function m(e){return[{type:"span"},e]}function f(e){const t="string"==typeof e.data?p(e.data):e.data;return[{type:"attachment",length:t.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType},t]}const g={sessions:"session",event:"error",client_report:"internal",user_report:"default",profile_chunk:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",raw_security:"security",log:"log_item",trace_metric:"metric"};function y(e){return function(e){return e in g}(e)?g[e]:e}function v(e){if(!e?.sdk)return;const{name:t,version:n}=e.sdk;return{name:t,version:n}}function _(e,t,n,r){const o=e.sdkProcessingMetadata?.dynamicSamplingContext;return{event_id:e.event_id,sent_at:new Date((0,i.Wk)()).toISOString(),...t&&{sdk:t},...!!n&&r&&{dsn:(0,s.SB)(r)},...o&&{trace:o}}}},4957(e,t,n){"use strict";n.d(t,{B:()=>i});var r=n(55971),s=n(43431),o=n(91867);function i(){return"undefined"!=typeof window&&(!(!(0,r.Z)()&&"[object process]"===Object.prototype.toString.call(void 0!==s?s:0))||function(){const e=o.O.process;return"renderer"===e?.type}())}},75995(e,t,n){"use strict";n.d(t,{C:()=>i});var r=n(61072),s=n(81501);const o=Symbol.for("SentryBufferFullError");function i(e=100){const t=new Set;function n(e){t.delete(e)}return{get $(){return Array.from(t)},add:function(s){if(!(t.size<e))return(0,r.xg)(o);const i=s();return t.add(i),i.then(()=>n(i),()=>n(i)),i},drain:function(e){if(!t.size)return(0,r.XW)(!0);const n=Promise.allSettled(Array.from(t)).then(()=>!0);if(!e)return n;const o=[n,new Promise(t=>(0,s.G)(setTimeout(()=>t(!1),e)))];return Promise.race(o)}}}n.d(t,["a",0,o])},60365(e,t,n){"use strict";n.d(t,{Jz:()=>s,wq:()=>o});var r=n(71337);function s(e,t,n=(0,r.Wk)()){return function(e,t){return e[t]||e.all||0}(e,t)>n}function o(e,{statusCode:t,headers:n},s=(0,r.Wk)()){const o={...e},i=n?.["x-sentry-rate-limits"],a=n?.["retry-after"];if(i)for(const e of i.trim().split(",")){const[t,n,,,r]=e.split(":",5),i=parseInt(t,10),a=1e3*(isNaN(i)?60:i);if(n)for(const e of n.split(";"))"metric_bucket"===e&&r&&!r.split(";").includes("custom")||(o[e]=s+a);else o.all=s+a}else a?o.all=s+function(e,t=(0,r.Wk)()){const n=parseInt(`${e}`,10);if(!isNaN(n))return 1e3*n;const s=Date.parse(`${e}`);return isNaN(s)?6e4:s-t}(a,s):429===t&&(o.all=s+6e4);return o}},6285(e,t,n){"use strict";function r(e){return"warn"===e?"warning":["fatal","error","warning","log","info","debug"].includes(e)?e:"log"}n.d(t,{t:()=>r})},57197(e,t,n){"use strict";n.d(t,{R:()=>c,e:()=>a});var r=n(52244),s=n(63668),o=n(37287);function i(e){s.Yz.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`)}function a(e,t){if(!t?.length)return!1;for(const n of t){if(u(n)){if(e.description&&(0,o._c)(e.description,n))return r.T&&i(e),!0;continue}const t=!!n.attributes&&Object.keys(n.attributes).length>0;if(!n.name&&!n.op&&!t)continue;const s=!n.name||e.description&&(0,o._c)(e.description,n.name),a=!n.op||e.op&&(0,o._c)(e.op,n.op),c=!n.attributes||Object.entries(n.attributes).every(([t,n])=>{return r=e.attributes?.[t],s=n,"string"==typeof r&&("string"==typeof s||s instanceof RegExp)?(0,o._c)(r,s):Array.isArray(r)&&Array.isArray(s)?r.length===s.length&&r.every((e,t)=>e===s[t]):r===s;var r,s});if(s&&a&&c)return r.T&&i(e),!0}return!1}function c(e,t){const n=t.parent_span_id,r=t.span_id;if(n)for(const t of e)t.parent_span_id===r&&(t.parent_span_id=n)}function u(e){return"string"==typeof e||e instanceof RegExp}},56186(e,t,n){"use strict";n.d(t,{NJ:()=>i,a3:()=>a,m7:()=>c});var r=n(52244),s=n(63668);const o=n(91867).O;function i(){return"history"in o&&!!o.history}function a(e){return e&&/ ^ function\ s + \w + \(\)\ s + \{
          \
          s + \[native code\]\ s + \
        }
        $ / .test(e.toString())
      }

      function c() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (! function() {
            if (!("fetch" in o)) return !1;
            try {
              return new Headers, new Request("data:,"), new Response, !0
            } catch {
              return !1
            }
          }()) return !1;
        if (a(o.fetch)) return !0;
        let e = !1;
        const t = o.document;
        if (t && "function" == typeof t.createElement) try {
          const n = t.createElement("iframe");
          n.hidden = !0, t.head.appendChild(n), n.contentWindow?.fetch && (e = a(n.contentWindow.fetch)), t.head.removeChild(n)
        } catch (e) {
          r.T && s.Yz.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
        }
        return e
      }
    },
    81501(e, t, n) {
      "use strict";

      function r(e) {
        return "object" == typeof e && "function" == typeof e.unref && e.unref(), e
      }
      n.d(t, {
        G: () => r
      })
    },
    24025(e, t, n) {
      "use strict";

      function r(e) {
        return "isRelative" in e
      }

      function s(e, t) {
        const n = e.indexOf("://") <= 0 && 0 !== e.indexOf("//"),
          r = t ?? (n ? "thismessage:/" : void 0);
        try {
          if ("canParse" in URL && !URL.canParse(e, r)) return;
          const t = new URL(e, r);
          return n ? {
            isRelative: n,
            pathname: t.pathname,
            search: t.search,
            hash: t.hash
          } : t
        } catch {}
      }

      function o(e) {
        if (r(e)) return e.pathname;
        const t = new URL(e);
        return t.search = "", t.hash = "", ["80", "443"].includes(t.port) && (t.port = ""), t.password && (t.password = "%filtered%"), t.username && (t.username = "%filtered%"), t.toString()
      }

      function i(e) {
        if (!e) return {};
        const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        const n = t[6] || "",
          r = t[8] || "";
        return {
          host: t[4],
          path: t[5],
          protocol: t[2],
          search: n,
          hash: r,
          relative: t[5] + n + r
        }
      }

      function a(e) {
        return e.split(/[?#]/, 1)[0]
      }

      function c(e, t = !0) {
        if (e.startsWith("data:")) {
          const n = e.match(/^data:([^;,]+)/),
            r = n ? n[1] : "text/plain",
            s = e.includes(";base64,"),
            o = e.indexOf(",");
          let i = "";
          if (t && -1 !== o) {
            const t = e.slice(o + 1);
            i = t.length > 10 ? `${t.slice(0,10)}... [truncated]` : t
          }
          return `data:${r}${s?",base64":""}${i?`,${i}`:""}`
        }
        return e
      }
      n.d(t, {
        CH: () => o,
        Dl: () => i,
        f: () => a,
        kg: () => s,
        nt: () => r,
        zm: () => c
      })
    },
    47847(e, t, n) {
      "use strict";
      n.d(t, {
        xQ: () => i
      });
      var r = n(16805),
        s = n(24158),
        o = n(93082);

      function i(e, {
        componentStack: t
      }, n) {
        if (function(e) {
            const t = e.match(/^([^.]+)/);
            return null !== t && parseInt(t[0]) >= 17
          }(o.version) && (0, s.bJ)(e) && t) {
          const n = new Error(e.message);
          n.name = `React ErrorBoundary ${e.name}`, n.stack = t,
            function(e, t) {
              const n = new WeakSet;
              ! function e(t, r) {
                if (!n.has(t)) return t.cause ? (n.add(t), e(t.cause, r)) : void(t.cause = r)
              }(e, t)
            }(e, n)
        }
        return (0, r.Cp)(e, n)
      }
    },
    18664(e, t, n) {
      "use strict";
      n.d(t, {
        w: () => Tr
      });
      var r = n(91867),
        s = n(32923),
        o = n(24158),
        i = n(50733),
        a = n(83883),
        c = n(20696),
        u = n(63668),
        l = n(6285),
        d = n(16805),
        p = n(27874),
        h = n(49718),
        m = n(28276),
        f = n(79165),
        g = n(12212),
        y = n(24025);

      function v(e) {
        return "/" === e[e.length - 1] ? e.slice(0, -1) : e
      }
      var _ = n(37287),
        S = n(10614),
        b = n(79340),
        k = n(60365),
        w = n(91781),
        T = n(4957),
        E = n(37663),
        I = n(45179),
        C = n(56951),
        x = n(17796),
        M = n(27511),
        R = n(907),
        O = n(70336),
        A = n(82186),
        D = n(39774);
      const L = r.O,
        N = "sentryReplaySession",
        P = "Unable to send Replay",
        z = 15e4,
        j = 5e3,
        $ = 2e7;
      var F = Object.defineProperty,
        B = (e, t, n) => ((e, t, n) => t in e ? F(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n
        }) : e[t] = n)(e, "symbol" != typeof t ? t + "" : t, n),
        U = (e => (e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e))(U || {});

      function q(e) {
        const t = e?.host;
        return Boolean(t?.shadowRoot === e)
      }

      function H(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e)
      }

      function W(e) {
        try {
          const n = e.rules || e.cssRules;
          return n ? ((t = Array.from(n, Y).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t) : null
        } catch (e) {
          return null
        }
        var t
      }

      function Y(e) {
        let t;
        if (function(e) {
            return "styleSheet" in e
          }(e)) try {
          t = W(e.styleSheet) || function(e) {
            const {
              cssText: t
            } = e;
            if (t.split('"').length < 3) return t;
            const n = ["@import", `url(${JSON.stringify(e.href)})`];
            return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";"
          }(e)
        } catch (e) {} else if (function(e) {
            return "selectorText" in e
          }(e)) {
          let t = e.cssText;
          const n = e.selectorText.includes(":"),
            r = "string" == typeof e.style.all && e.style.all;
          if (r && (t = function(e) {
              let t = "";
              for (let n = 0; n < e.style.length; n++) {
                const r = e.style,
                  s = r[n],
                  o = r.getPropertyPriority(s);
                t += `${s}:${r.getPropertyValue(s)}${o?" !important":""};`
              }
              return `${e.selectorText} { ${t} }`
            }(e)), n && (t = t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")), n || r) return t
        } return t || e.cssText
      }
      class K {
        constructor() {
          B(this, "idNodeMap", new Map), B(this, "nodeMetaMap", new WeakMap)
        }
        getId(e) {
          if (!e) return -1;
          const t = this.getMeta(e)?.id;
          return t ?? -1
        }
        getNode(e) {
          return this.idNodeMap.get(e) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
          return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
          const t = this.getId(e);
          this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
        }
        has(e) {
          return this.idNodeMap.has(e)
        }
        hasNode(e) {
          return this.nodeMetaMap.has(e)
        }
        add(e, t) {
          const n = t.id;
          this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
          const n = this.getNode(e);
          if (n) {
            const e = this.nodeMetaMap.get(n);
            e && this.nodeMetaMap.set(t, e)
          }
          this.idNodeMap.set(e, t)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      }

      function J({
        maskInputOptions: e,
        tagName: t,
        type: n
      }) {
        return "OPTION" === t && (t = "SELECT"), Boolean(e[t.toLowerCase()] || n && e[n] || "password" === n || "INPUT" === t && !n && e.text)
      }

      function G({
        isMasked: e,
        element: t,
        value: n,
        maskInputFn: r
      }) {
        let s = n || "";
        return e ? (r && (s = r(s, t)), "*".repeat(s.length)) : s
      }

      function V(e) {
        return e.toLowerCase()
      }

      function X(e) {
        return e.toUpperCase()
      }
      const Q = "__rrweb_original__";

      function Z(e) {
        const t = e.type;
        return e.hasAttribute("data-rr-is-password") ? "password" : t ? V(t) : null
      }

      function ee(e, t, n) {
        return "INPUT" !== t || "radio" !== n && "checkbox" !== n ? e.value : e.getAttribute("value") || ""
      }

      function te(e, t) {
        let n;
        try {
          n = new URL(e, t ?? window.location.href)
        } catch (e) {
          return null
        }
        const r = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
        return r?.[1] ?? null
      }
      const ne = {};

      function re(e) {
        const t = ne[e];
        if (t) return t;
        const n = window.document;
        let r = window[e];
        if (n && "function" == typeof n.createElement) try {
          const t = n.createElement("iframe");
          t.hidden = !0, n.head.appendChild(t);
          const s = t.contentWindow;
          s && s[e] && (r = s[e]), n.head.removeChild(t)
        } catch (e) {}
        return ne[e] = r.bind(window)
      }

      function se(...e) {
        return re("setTimeout")(...e)
      }

      function oe(...e) {
        return re("clearTimeout")(...e)
      }

      function ie(e) {
        try {
          return e.contentDocument
        } catch {}
      }
      let ae = 1;
      const ce = new RegExp("[^a-z0-9-_:]");

      function ue() {
        return ae++
      }
      let le, de;
      const pe = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        he = /^(?:[a-z+]+:)?\/\//i,
        me = /^www\..*/i,
        fe = /^(data:)([^,]*),(.*)/i;

      function ge(e, t) {
        return (e || "").replace(pe, (e, n, r, s, o, i) => {
          const a = r || o || i,
            c = n || s || "";
          if (!a) return e;
          if (he.test(a) || me.test(a)) return `url(${c}${a}${c})`;
          if (fe.test(a)) return `url(${c}${a}${c})`;
          if ("/" === a[0]) return `url(${c}${function(e){let t="";return t=e.indexOf("//")>-1?e.split("/").slice(0,3).join("/"):e.split("/")[0],t=t.split("?")[0],t}(t)+a}${c})`;
          const u = t.split("/"),
            l = a.split("/");
          u.pop();
          for (const e of l) "." !== e && (".." === e ? u.pop() : u.push(e));
          return `url(${c}${u.join("/")}${c})`
        })
      }
      const ye = /^[^ \t\n\r\u000c]+/,
        ve = /^[, \t\n\r\u000c]+/,
        _e = new WeakMap;

      function Se(e, t) {
        return t && "" !== t.trim() ? be(e, t) : t
      }

      function be(e, t) {
        let n = _e.get(e);
        if (n || (n = e.createElement("a"), _e.set(e, n)), t) {
          if (t.startsWith("blob:") || t.startsWith("data:")) return t
        } else t = "";
        return n.setAttribute("href", t), n.href
      }

      function ke(e, t, n, r, s, o, i) {
        if (!r) return r;
        if ("src" === n || "href" === n && ("use" !== t || "#" !== r[0])) return Se(e, r);
        if ("xlink:href" === n && "#" !== r[0]) return Se(e, r);
        if ("background" === n && ("table" === t || "td" === t || "th" === t)) return Se(e, r);
        if ("srcset" === n) return function(e, t) {
          if ("" === t.trim()) return t;
          let n = 0;

          function r(e) {
            let r;
            const s = e.exec(t.substring(n));
            return s ? (r = s[0], n += r.length, r) : ""
          }
          const s = [];
          for (; r(ve), !(n >= t.length);) {
            let o = r(ye);
            if ("," === o.slice(-1)) o = Se(e, o.substring(0, o.length - 1)), s.push(o);
            else {
              let r = "";
              o = Se(e, o);
              let i = !1;
              for (;;) {
                const e = t.charAt(n);
                if ("" === e) {
                  s.push((o + r).trim());
                  break
                }
                if (i) ")" === e && (i = !1);
                else {
                  if ("," === e) {
                    n += 1, s.push((o + r).trim());
                    break
                  }
                  "(" === e && (i = !0)
                }
                r += e, n += 1
              }
            }
          }
          return s.join(", ")
        }(e, r);
        if ("style" === n) {
          let t = ge(r, be(e));
          return i && i.size > 0 && (t = function(e, t) {
            if (!e || 0 === t.size) return e;
            try {
              const n = e.split(";"),
                r = [];
              for (let e of n) {
                if (e = e.trim(), !e) continue;
                const n = e.indexOf(":");
                if (-1 === n) {
                  r.push(e);
                  continue
                }
                const s = e.slice(0, n).trim();
                t.has(s) || r.push(e)
              }
              return r.join("; ") + (r.length > 0 && e.endsWith(";") ? ";" : "")
            } catch (t) {
              return console.warn("Error filtering CSS properties:", t), e
            }
          }(t, i)), t
        }
        return "object" === t && "data" === n ? Se(e, r) : "function" == typeof o ? o(n, r, s) : r
      }

      function we(e, t, n) {
        return ("video" === e || "audio" === e) && "autoplay" === t
      }

      function Te(e, t, n = 1 / 0, r = 0) {
        return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : Te(e.parentNode, t, n, r + 1) : -1
      }

      function Ee(e, t) {
        return n => {
          const r = n;
          if (null === r) return !1;
          try {
            if (e)
              if ("string" == typeof e) {
                if (r.matches(`.${e}`)) return !0
              } else if (function(e, t) {
                for (let n = e.classList.length; n--;) {
                  const r = e.classList[n];
                  if (t.test(r)) return !0
                }
                return !1
              }(r, e)) return !0;
            return !(!t || !r.matches(t))
          } catch {
            return !1
          }
        }
      }

      function Ie(e, t, n, r, s, o) {
        try {
          const i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
          if (null === i) return !1;
          if ("INPUT" === i.tagName) {
            const e = i.getAttribute("autocomplete");
            if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
          }
          let a = -1,
            c = -1;
          if (o) {
            if (c = Te(i, Ee(r, s)), c < 0) return !0;
            a = Te(i, Ee(t, n), c >= 0 ? c : 1 / 0)
          } else {
            if (a = Te(i, Ee(t, n)), a < 0) return !1;
            c = Te(i, Ee(r, s), a >= 0 ? a : 1 / 0)
          }
          return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0 || !o)
        } catch (e) {}
        return !!o
      }

      function Ce(e) {
        return null == e ? "" : e.toLowerCase()
      }

      function xe(e, t) {
        const {
          doc: n,
          mirror: r,
          blockClass: s,
          blockSelector: o,
          unblockSelector: i,
          maskAllText: a,
          maskTextClass: c,
          unmaskTextClass: u,
          maskTextSelector: l,
          unmaskTextSelector: d,
          skipChild: p = !1,
          inlineStylesheet: h = !0,
          maskInputOptions: m = {},
          maskAttributeFn: f,
          maskTextFn: g,
          maskInputFn: y,
          slimDOMOptions: v,
          dataURLOptions: _ = {},
          inlineImages: S = !1,
          recordCanvas: b = !1,
          onSerialize: k,
          onIframeLoad: w,
          iframeLoadTimeout: T = 5e3,
          onBlockedImageLoad: E,
          onStylesheetLoad: I,
          stylesheetLoadTimeout: C = 5e3,
          keepIframeSrcFn: x = () => !1,
          newlyAddedElement: M = !1,
          ignoreCSSAttributes: R
        } = t;
        let {
          preserveWhiteSpace: O = !0
        } = t;
        const A = function(e, t) {
          const {
            doc: n,
            mirror: r,
            blockClass: s,
            blockSelector: o,
            unblockSelector: i,
            maskAllText: a,
            maskAttributeFn: c,
            maskTextClass: u,
            unmaskTextClass: l,
            maskTextSelector: d,
            unmaskTextSelector: p,
            inlineStylesheet: h,
            maskInputOptions: m = {},
            maskTextFn: f,
            maskInputFn: g,
            dataURLOptions: y = {},
            inlineImages: v,
            recordCanvas: _,
            keepIframeSrcFn: S,
            newlyAddedElement: b = !1,
            ignoreCSSAttributes: k
          } = t, w = function(e, t) {
            if (!t.hasNode(e)) return;
            const n = t.getId(e);
            return 1 === n ? void 0 : n
          }(n, r);
          switch (e.nodeType) {
            case e.DOCUMENT_NODE:
              return "CSS1Compat" !== e.compatMode ? {
                type: U.Document,
                childNodes: [],
                compatMode: e.compatMode
              } : {
                type: U.Document,
                childNodes: []
              };
            case e.DOCUMENT_TYPE_NODE:
              return {
                type: U.DocumentType, name: e.name, publicId: e.publicId, systemId: e.systemId, rootId: w
              };
            case e.ELEMENT_NODE:
              return function(e, t) {
                const {
                  doc: n,
                  blockClass: r,
                  blockSelector: s,
                  unblockSelector: o,
                  inlineStylesheet: i,
                  maskInputOptions: a = {},
                  maskAttributeFn: c,
                  maskInputFn: u,
                  dataURLOptions: l = {},
                  inlineImages: d,
                  recordCanvas: p,
                  keepIframeSrcFn: h,
                  newlyAddedElement: m = !1,
                  rootId: f,
                  maskTextClass: g,
                  unmaskTextClass: y,
                  maskTextSelector: v,
                  unmaskTextSelector: _,
                  ignoreCSSAttributes: S
                } = t, b = function(e, t, n, r) {
                  try {
                    if (r && e.matches(r)) return !1;
                    if ("string" == typeof t) {
                      if (e.classList.contains(t)) return !0
                    } else
                      for (let n = e.classList.length; n--;) {
                        const r = e.classList[n];
                        if (t.test(r)) return !0
                      }
                    if (n) return e.matches(n)
                  } catch (e) {}
                  return !1
                }(e, r, s, o), k = function(e) {
                  if (e instanceof HTMLFormElement) return "form";
                  const t = V(e.tagName);
                  return ce.test(t) ? "div" : t
                }(e);
                let w = {};
                const T = e.attributes.length;
                for (let t = 0; t < T; t++) {
                  const r = e.attributes[t];
                  r.name && !we(k, r.name, r.value) && (w[r.name] = ke(n, k, V(r.name), r.value, e, c, S))
                }
                if ("link" === k && i) {
                  const t = Array.from(n.styleSheets).find(t => t.href === e.href);
                  let r = null;
                  t && (r = W(t)), r && (w.rel = null, w.href = null, w.crossorigin = null, w._cssText = ge(r, t.href))
                }
                if ("style" === k && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                  const t = W(e.sheet);
                  t && (w._cssText = ge(t, be(n)))
                }
                if ("input" === k || "textarea" === k || "select" === k || "option" === k) {
                  const t = e,
                    n = Z(t),
                    r = ee(t, X(k), n),
                    s = t.checked;
                  if ("submit" !== n && "button" !== n && r) {
                    const e = Ie(t, g, v, y, _, J({
                      type: n,
                      tagName: X(k),
                      maskInputOptions: a
                    }));
                    w.value = G({
                      isMasked: e,
                      element: t,
                      value: r,
                      maskInputFn: u
                    })
                  }
                  s && (w.checked = s)
                }
                if ("option" === k && (e.selected && !a.select ? w.selected = !0 : delete w.selected), "canvas" === k && p)
                  if ("2d" === e.__context)(function(e) {
                    const t = e.getContext("2d");
                    if (!t) return !0;
                    for (let n = 0; n < e.width; n += 50)
                      for (let r = 0; r < e.height; r += 50) {
                        const s = t.getImageData,
                          o = Q in s ? s[Q] : s;
                        if (new Uint32Array(o.call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some(e => 0 !== e)) return !1
                      }
                    return !0
                  })(e) || (w.rr_dataURL = e.toDataURL(l.type, l.quality));
                  else if (!("__context" in e)) {
                  const t = e.toDataURL(l.type, l.quality),
                    r = n.createElement("canvas");
                  r.width = e.width, r.height = e.height, t !== r.toDataURL(l.type, l.quality) && (w.rr_dataURL = t)
                }
                if ("img" === k && d) {
                  le || (le = n.createElement("canvas"), de = le.getContext("2d"));
                  const t = e,
                    r = t.currentSrc || t.getAttribute("src") || "<unknown-src>",
                    s = t.crossOrigin,
                    o = () => {
                      t.removeEventListener("load", o);
                      try {
                        le.width = t.naturalWidth, le.height = t.naturalHeight, de.drawImage(t, 0, 0), w.rr_dataURL = le.toDataURL(l.type, l.quality)
                      } catch (e) {
                        if ("anonymous" !== t.crossOrigin) return t.crossOrigin = "anonymous", void(t.complete && 0 !== t.naturalWidth ? o() : t.addEventListener("load", o));
                        console.warn(`Cannot inline img src=${r}! Error: ${e}`)
                      }
                      "anonymous" === t.crossOrigin && (s ? w.crossOrigin = s : t.removeAttribute("crossorigin"))
                    };
                  t.complete && 0 !== t.naturalWidth ? o() : t.addEventListener("load", o)
                }
                if ("audio" !== k && "video" !== k || (w.rr_mediaState = e.paused ? "paused" : "played", w.rr_mediaCurrentTime = e.currentTime), m || (e.scrollLeft && (w.rr_scrollLeft = e.scrollLeft), e.scrollTop && (w.rr_scrollTop = e.scrollTop)), b) {
                  const {
                    width: t,
                    height: n
                  } = e.getBoundingClientRect();
                  w = {
                    class: w.class,
                    rr_width: `${t}px`,
                    rr_height: `${n}px`
                  }
                }
                let E;
                "iframe" !== k || h(w.src) || (b || ie(e) || (w.rr_src = w.src), delete w.src);
                try {
                  customElements.get(k) && (E = !0)
                } catch (e) {}
                return {
                  type: U.Element,
                  tagName: k,
                  attributes: w,
                  childNodes: [],
                  isSVG: (I = e, Boolean("svg" === I.tagName || I.ownerSVGElement) || void 0),
                  needBlock: b,
                  rootId: f,
                  isCustom: E
                };
                var I
              }(e, {
                doc: n,
                blockClass: s,
                blockSelector: o,
                unblockSelector: i,
                inlineStylesheet: h,
                maskAttributeFn: c,
                maskInputOptions: m,
                maskInputFn: g,
                dataURLOptions: y,
                inlineImages: v,
                recordCanvas: _,
                keepIframeSrcFn: S,
                newlyAddedElement: b,
                rootId: w,
                maskTextClass: u,
                unmaskTextClass: l,
                maskTextSelector: d,
                unmaskTextSelector: p,
                ignoreCSSAttributes: k
              });
            case e.TEXT_NODE:
              return function(e, t) {
                const {
                  maskAllText: n,
                  maskTextClass: r,
                  unmaskTextClass: s,
                  maskTextSelector: o,
                  unmaskTextSelector: i,
                  maskTextFn: a,
                  maskInputOptions: c,
                  maskInputFn: u,
                  rootId: l
                } = t, d = e.parentNode && e.parentNode.tagName;
                let p = e.textContent;
                const h = "STYLE" === d || void 0,
                  m = "SCRIPT" === d || void 0,
                  f = "TEXTAREA" === d || void 0;
                if (h && p) {
                  try {
                    e.nextSibling || e.previousSibling || e.parentNode.sheet?.cssRules && (p = W(e.parentNode.sheet))
                  } catch (t) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                  }
                  p = ge(p, be(t.doc))
                }
                m && (p = "SCRIPT_PLACEHOLDER");
                const g = Ie(e, r, o, s, i, n);
                return h || m || f || !p || !g || (p = a ? a(p, e.parentElement) : p.replace(/[\S]/g, "*")), f && p && (c.textarea || g) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")), "OPTION" === d && p && (p = G({
                  isMasked: Ie(e, r, o, s, i, J({
                    type: null,
                    tagName: d,
                    maskInputOptions: c
                  })),
                  element: e,
                  value: p,
                  maskInputFn: u
                })), {
                  type: U.Text,
                  textContent: p || "",
                  isStyle: h,
                  rootId: l
                }
              }(e, {
                doc: n,
                maskAllText: a,
                maskTextClass: u,
                unmaskTextClass: l,
                maskTextSelector: d,
                unmaskTextSelector: p,
                maskTextFn: f,
                maskInputOptions: m,
                maskInputFn: g,
                rootId: w
              });
            case e.CDATA_SECTION_NODE:
              return {
                type: U.CDATA, textContent: "", rootId: w
              };
            case e.COMMENT_NODE:
              return {
                type: U.Comment, textContent: e.textContent || "", rootId: w
              };
            default:
              return !1
          }
        }(e, {
          doc: n,
          mirror: r,
          blockClass: s,
          blockSelector: o,
          maskAllText: a,
          unblockSelector: i,
          maskTextClass: c,
          unmaskTextClass: u,
          maskTextSelector: l,
          unmaskTextSelector: d,
          inlineStylesheet: h,
          maskInputOptions: m,
          maskAttributeFn: f,
          maskTextFn: g,
          maskInputFn: y,
          dataURLOptions: _,
          inlineImages: S,
          recordCanvas: b,
          keepIframeSrcFn: x,
          newlyAddedElement: M,
          ignoreCSSAttributes: R
        });
        if (!A) return console.warn(e, "not serialized"), null;
        let D;
        D = r.hasNode(e) ? r.getId(e) : ! function(e, t) {
          if (t.comment && e.type === U.Comment) return !0;
          if (e.type === U.Element) {
            if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === te(e.attributes.href))) return !0;
            if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (Ce(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Ce(e.attributes.name) || "icon" === Ce(e.attributes.rel) || "apple-touch-icon" === Ce(e.attributes.rel) || "shortcut icon" === Ce(e.attributes.rel)))) return !0;
            if ("meta" === e.tagName) {
              if (t.headMetaDescKeywords && Ce(e.attributes.name).match(/^description|keywords$/)) return !0;
              if (t.headMetaSocial && (Ce(e.attributes.property).match(/^(og|twitter|fb):/) || Ce(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === Ce(e.attributes.name))) return !0;
              if (t.headMetaRobots && ("robots" === Ce(e.attributes.name) || "googlebot" === Ce(e.attributes.name) || "bingbot" === Ce(e.attributes.name))) return !0;
              if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
              if (t.headMetaAuthorship && ("author" === Ce(e.attributes.name) || "generator" === Ce(e.attributes.name) || "framework" === Ce(e.attributes.name) || "publisher" === Ce(e.attributes.name) || "progid" === Ce(e.attributes.name) || Ce(e.attributes.property).match(/^article:/) || Ce(e.attributes.property).match(/^product:/))) return !0;
              if (t.headMetaVerification && ("google-site-verification" === Ce(e.attributes.name) || "yandex-verification" === Ce(e.attributes.name) || "csrf-token" === Ce(e.attributes.name) || "p:domain_verify" === Ce(e.attributes.name) || "verify-v1" === Ce(e.attributes.name) || "verification" === Ce(e.attributes.name) || "shopify-checkout-api-token" === Ce(e.attributes.name))) return !0
            }
          }
          return !1
        }(A, v) && (O || A.type !== U.Text || A.isStyle || A.textContent.trim().length) ? ue() : -2;
        const L = Object.assign(A, {
          id: D
        });
        if (r.add(e, L), -2 === D) return null;
        k && k(e);
        let N = !p;
        if (L.type === U.Element) {
          N = N && !L.needBlock;
          const t = e.shadowRoot;
          t && H(t) && (L.isShadowHost = !0)
        }
        if ((L.type === U.Document || L.type === U.Element) && N) {
          v.headWhitespace && L.type === U.Element && "head" === L.tagName && (O = !1);
          const t = {
              doc: n,
              mirror: r,
              blockClass: s,
              blockSelector: o,
              maskAllText: a,
              unblockSelector: i,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: l,
              unmaskTextSelector: d,
              skipChild: p,
              inlineStylesheet: h,
              maskInputOptions: m,
              maskAttributeFn: f,
              maskTextFn: g,
              maskInputFn: y,
              slimDOMOptions: v,
              dataURLOptions: _,
              inlineImages: S,
              recordCanvas: b,
              preserveWhiteSpace: O,
              onSerialize: k,
              onIframeLoad: w,
              iframeLoadTimeout: T,
              onBlockedImageLoad: E,
              onStylesheetLoad: I,
              stylesheetLoadTimeout: C,
              keepIframeSrcFn: x,
              ignoreCSSAttributes: R
            },
            M = e.childNodes ? Array.from(e.childNodes) : [];
          for (const e of M) {
            const n = xe(e, t);
            n && L.childNodes.push(n)
          }
          if (function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e) && e.shadowRoot)
            for (const n of Array.from(e.shadowRoot.childNodes)) {
              const r = xe(n, t);
              r && (H(e.shadowRoot) && (r.isShadow = !0), L.childNodes.push(r))
            }
        }
        if (e.parentNode && q(e.parentNode) && H(e.parentNode) && (L.isShadow = !0), L.type !== U.Element || "iframe" !== L.tagName || L.needBlock || function(e, t, n) {
            const r = function(e) {
              try {
                return e.contentWindow
              } catch {}
            }(e);
            if (!r) return;
            let s, o = !1;
            try {
              s = r.document.readyState
            } catch (e) {
              return
            }
            if ("complete" !== s) {
              const r = se(() => {
                o || (t(), o = !0)
              }, n);
              return void e.addEventListener("load", () => {
                oe(r), o = !0, t()
              })
            }
            const i = "about:blank";
            if (r.location.href !== i || e.src === i || "" === e.src) return se(t, 0), e.addEventListener("load", t);
            e.addEventListener("load", t)
          }(e, () => {
            const t = ie(e);
            if (t && w) {
              const n = xe(t, {
                doc: t,
                mirror: r,
                blockClass: s,
                blockSelector: o,
                unblockSelector: i,
                maskAllText: a,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: l,
                unmaskTextSelector: d,
                skipChild: !1,
                inlineStylesheet: h,
                maskInputOptions: m,
                maskAttributeFn: f,
                maskTextFn: g,
                maskInputFn: y,
                slimDOMOptions: v,
                dataURLOptions: _,
                inlineImages: S,
                recordCanvas: b,
                preserveWhiteSpace: O,
                onSerialize: k,
                onIframeLoad: w,
                iframeLoadTimeout: T,
                onStylesheetLoad: I,
                stylesheetLoadTimeout: C,
                keepIframeSrcFn: x,
                ignoreCSSAttributes: R
              });
              n && w(e, n)
            }
          }, T), L.type === U.Element && "img" === L.tagName && !e.complete && L.needBlock) {
          const t = e,
            n = () => {
              if (t.isConnected && !t.complete && E) try {
                const e = t.getBoundingClientRect();
                e.width > 0 && e.height > 0 && E(t, L, e)
              } catch (e) {}
              t.removeEventListener("load", n)
            };
          t.isConnected && t.addEventListener("load", n)
        }
        return L.type === U.Element && "link" === L.tagName && "string" == typeof L.attributes.rel && ("stylesheet" === L.attributes.rel || "preload" === L.attributes.rel && "string" == typeof L.attributes.href && "css" === te(L.attributes.href)) && function(e, t, n) {
          let r, s = !1;
          try {
            r = e.sheet
          } catch (e) {
            r = null
          }
          if (r) return;
          const o = se(() => {
            s || (t(), s = !0)
          }, n);
          e.addEventListener("load", () => {
            oe(o), s = !0, t()
          })
        }(e, () => {
          if (I) {
            const t = xe(e, {
              doc: n,
              mirror: r,
              blockClass: s,
              blockSelector: o,
              unblockSelector: i,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: l,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: m,
              maskAttributeFn: f,
              maskTextFn: g,
              maskInputFn: y,
              slimDOMOptions: v,
              dataURLOptions: _,
              inlineImages: S,
              recordCanvas: b,
              preserveWhiteSpace: O,
              onSerialize: k,
              onIframeLoad: w,
              iframeLoadTimeout: T,
              onStylesheetLoad: I,
              stylesheetLoadTimeout: C,
              keepIframeSrcFn: x,
              ignoreCSSAttributes: R
            });
            t && I(e, t)
          }
        }, C), L.type === U.Element && delete L.needBlock, L
      }

      function Me(e, t, n = document) {
        const r = {
          capture: !0,
          passive: !0
        };
        return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
      }
      const Re = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
      let Oe = {
        map: {},
        getId: () => (console.error(Re), -1),
        getNode: () => (console.error(Re), null),
        removeNodeFromMap() {
          console.error(Re)
        },
        has: () => (console.error(Re), !1),
        reset() {
          console.error(Re)
        }
      };

      function Ae(e, t, n = {}) {
        let r = null,
          s = 0;
        return function(...o) {
          const i = Date.now();
          s || !1 !== n.leading || (s = i);
          const a = t - (i - s),
            c = this;
          a <= 0 || a > t ? (r && (function(...e) {
            Xe("clearTimeout")(...e)
          }(r), r = null), s = i, e.apply(c, o)) : r || !1 === n.trailing || (r = Qe(() => {
            s = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(c, o)
          }, a))
        }
      }

      function De(e, t, n, r, s = window) {
        const o = s.Object.getOwnPropertyDescriptor(e, t);
        return s.Object.defineProperty(e, t, r ? n : {
          set(e) {
            Qe(() => {
              n.set.call(this, e)
            }, 0), o && o.set && o.set.call(this, e)
          }
        }), () => De(e, t, o || {}, !0)
      }

      function Le(e, t, n) {
        try {
          if (!(t in e)) return () => {};
          const r = e[t],
            s = n(r);
          return "function" == typeof s && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
            __rrweb_original__: {
              enumerable: !1,
              value: r
            }
          })), e[t] = s, () => {
            e[t] = r
          }
        } catch {
          return () => {}
        }
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (Oe = new Proxy(Oe, {
        get: (e, t, n) => ("map" === t && console.error(Re), Reflect.get(e, t, n))
      }));
      let Ne = Date.now;

      function Pe(e) {
        const t = e.document;
        return {
          left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : t?.documentElement.scrollLeft || t?.body?.parentElement?.scrollLeft || t?.body?.scrollLeft || 0,
          top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : t?.documentElement.scrollTop || t?.body?.parentElement?.scrollTop || t?.body?.scrollTop || 0
        }
      }

      function ze() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function je() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function $e(e) {
        if (!e) return null;
        try {
          return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
        } catch (e) {
          return null
        }
      }

      function Fe(e, t, n, r, s) {
        if (!e) return !1;
        const o = $e(e);
        if (!o) return !1;
        const i = Ee(t, n);
        if (!s) {
          const e = r && o.matches(r);
          return i(o) && !e
        }
        const a = Te(o, i);
        let c = -1;
        return !(a < 0) && (r && (c = Te(o, Ee(null, r))), a > -1 && c < 0 || a < c)
      }

      function Be(e, t) {
        return -2 === t.getId(e)
      }

      function Ue(e, t) {
        if (q(e)) return !1;
        const n = t.getId(e);
        return !t.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || Ue(e.parentNode, t))
      }

      function qe(e) {
        return Boolean(e.changedTouches)
      }

      function He(e, t) {
        return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
      }

      function We(e, t) {
        return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
      }

      function Ye(e) {
        return Boolean(e?.shadowRoot)
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (Ne = () => (new Date).getTime());
      class Ke {
        constructor() {
          this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
        }
        getId(e) {
          return this.styleIDMap.get(e) ?? -1
        }
        has(e) {
          return this.styleIDMap.has(e)
        }
        add(e, t) {
          if (this.has(e)) return this.getId(e);
          let n;
          return n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n
        }
        getStyle(e) {
          return this.idStyleMap.get(e) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      }

      function Je(e) {
        let t = null;
        return e.getRootNode?.()?.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
      }

      function Ge(e) {
        const t = e.ownerDocument;
        return !!t && (t.contains(e) || function(e) {
          const t = e.ownerDocument;
          if (!t) return !1;
          const n = function(e) {
            let t, n = e;
            for (; t = Je(n);) n = t;
            return n
          }(e);
          return t.contains(n)
        }(e))
      }
      const Ve = {};

      function Xe(e) {
        const t = Ve[e];
        if (t) return t;
        const n = window.document;
        let r = window[e];
        if (n && "function" == typeof n.createElement) try {
          const t = n.createElement("iframe");
          t.hidden = !0, n.head.appendChild(t);
          const s = t.contentWindow;
          s && s[e] && (r = s[e]), n.head.removeChild(t)
        } catch (e) {}
        return Ve[e] = r.bind(window)
      }

      function Qe(...e) {
        return Xe("setTimeout")(...e)
      }
      var Ze = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(Ze || {}),
        et = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(et || {}),
        tt = (e => (e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(tt || {}),
        nt = (e => (e[e.Mouse = 0] = "Mouse", e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e))(nt || {}),
        rt = (e => (e[e.Play = 0] = "Play", e[e.Pause = 1] = "Pause", e[e.Seeked = 2] = "Seeked", e[e.VolumeChange = 3] = "VolumeChange", e[e.RateChange = 4] = "RateChange", e))(rt || {});
      let st;

      function ot(e) {
        st = e
      }

      function it() {
        st = void 0
      }
      const at = e => st ? (...t) => {
        try {
          return e(...t)
        } catch (e) {
          if (st && !0 === st(e)) return () => {};
          throw e
        }
      } : e;
      for (var ct = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), ut = 0; ut < 64; ut++) ct["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(ut)] = ut;
      class lt {
        reset() {}
        freeze() {}
        unfreeze() {}
        lock() {}
        unlock() {}
        snapshot() {}
        addWindow() {}
        addShadowRoot() {}
        resetShadowRoots() {}
      }

      function dt(e) {
        try {
          return e.contentDocument
        } catch (e) {}
      }

      function pt(e) {
        try {
          return e.contentWindow
        } catch (e) {}
      }
      class ht {
        constructor(e) {
          this.doc = e, this.unattachedDoc = null
        }
        parse(e) {
          return this.parseWithConstructableStylesheet(e) || this.parseWithDetachedElement(e)
        }
        parseWithConstructableStylesheet(e) {
          if ("undefined" == typeof CSSStyleSheet || "function" != typeof CSSStyleSheet.prototype.replaceSync) return null;
          try {
            const t = new CSSStyleSheet;
            t.replaceSync(`x { ${e} }`);
            const n = t.cssRules[0];
            return n && n.type === CSSRule.STYLE_RULE ? n.style : null
          } catch {
            return null
          }
        }
        parseWithDetachedElement(e) {
          const t = this.getUnattachedDoc().createElement("span");
          return t.setAttribute("style", e), t.style
        }
        getUnattachedDoc() {
          if (!this.unattachedDoc) try {
            this.unattachedDoc = document.implementation.createHTMLDocument()
          } catch {
            this.unattachedDoc = this.doc
          }
          return this.unattachedDoc
        }
      }

      function mt(e) {
        return "__ln" in e
      }
      class ft {
        constructor() {
          this.length = 0, this.head = null, this.tail = null
        }
        get(e) {
          if (e >= this.length) throw new Error("Position outside of list range");
          let t = this.head;
          for (let n = 0; n < e; n++) t = t?.next || null;
          return t
        }
        addNode(e) {
          const t = {
            value: e,
            previous: null,
            next: null
          };
          if (e.__ln = t, e.previousSibling && mt(e.previousSibling)) {
            const n = e.previousSibling.__ln.next;
            t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
          } else if (e.nextSibling && mt(e.nextSibling) && e.nextSibling.__ln.previous) {
            const n = e.nextSibling.__ln.previous;
            t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
          } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
          null === t.next && (this.tail = t), this.length++
        }
        removeNode(e) {
          const t = e.__ln;
          this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
        }
      }
      const gt = (e, t) => `${e}@${t}`;
      class yt {
        constructor() {
          this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
            e.forEach(this.processMutation), this.emit()
          }, this.emit = () => {
            if (this.frozen || this.locked) return;
            const e = [],
              t = new Set,
              n = new ft,
              r = e => {
                let t = e,
                  n = -2;
                for (; - 2 === n;) t = t && t.nextSibling, n = t && this.mirror.getId(t);
                return n
              },
              s = s => {
                if (!s.parentNode || !Ge(s)) return;
                const o = q(s.parentNode) ? this.mirror.getId(Je(s)) : this.mirror.getId(s.parentNode),
                  i = r(s);
                if (-1 === o || -1 === i) return n.addNode(s);
                const a = xe(s, {
                  doc: this.doc,
                  mirror: this.mirror,
                  blockClass: this.blockClass,
                  blockSelector: this.blockSelector,
                  maskAllText: this.maskAllText,
                  unblockSelector: this.unblockSelector,
                  maskTextClass: this.maskTextClass,
                  unmaskTextClass: this.unmaskTextClass,
                  maskTextSelector: this.maskTextSelector,
                  unmaskTextSelector: this.unmaskTextSelector,
                  skipChild: !0,
                  newlyAddedElement: !0,
                  inlineStylesheet: this.inlineStylesheet,
                  maskInputOptions: this.maskInputOptions,
                  maskAttributeFn: this.maskAttributeFn,
                  maskTextFn: this.maskTextFn,
                  maskInputFn: this.maskInputFn,
                  slimDOMOptions: this.slimDOMOptions,
                  dataURLOptions: this.dataURLOptions,
                  recordCanvas: this.recordCanvas,
                  inlineImages: this.inlineImages,
                  onSerialize: e => {
                    He(e, this.mirror) && !Fe(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e), We(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), Ye(s) && this.shadowDomManager.addShadowRoot(s.shadowRoot, this.doc)
                  },
                  onIframeLoad: (e, t) => {
                    if (Fe(e, this.blockClass, this.blockSelector, this.unblockSelector, !1)) return;
                    this.iframeManager.attachIframe(e, t);
                    const n = pt(e);
                    n && this.canvasManager.addWindow(n), this.shadowDomManager.observeAttachShadow(e)
                  },
                  onStylesheetLoad: (e, t) => {
                    this.stylesheetManager.attachLinkElement(e, t)
                  },
                  onBlockedImageLoad: (e, t, {
                    width: n,
                    height: r
                  }) => {
                    this.mutationCb({
                      adds: [],
                      removes: [],
                      texts: [],
                      attributes: [{
                        id: t.id,
                        attributes: {
                          style: {
                            width: `${n}px`,
                            height: `${r}px`
                          }
                        }
                      }]
                    })
                  },
                  ignoreCSSAttributes: this.ignoreCSSAttributes
                });
                a && (e.push({
                  parentId: o,
                  nextId: i,
                  node: a
                }), t.add(a.id))
              };
            for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (const e of this.movedSet) _t(this.removes, e, this.mirror) && !this.movedSet.has(e.parentNode) || s(e);
            for (const e of this.addedSet) St(this.droppedSet, e) || _t(this.removes, e, this.mirror) ? St(this.movedSet, e) ? s(e) : this.droppedSet.add(e) : s(e);
            let o = null;
            for (; n.length;) {
              let e = null;
              if (o) {
                const t = this.mirror.getId(o.value.parentNode),
                  n = r(o.value); - 1 !== t && -1 !== n && (e = o)
              }
              if (!e) {
                let t = n.tail;
                for (; t;) {
                  const n = t;
                  if (t = t.previous, n) {
                    const t = this.mirror.getId(n.value.parentNode);
                    if (-1 === r(n.value)) continue;
                    if (-1 !== t) {
                      e = n;
                      break
                    } {
                      const t = n.value;
                      if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                        const r = t.parentNode.host;
                        if (-1 !== this.mirror.getId(r)) {
                          e = n;
                          break
                        }
                      }
                    }
                  }
                }
              }
              if (!e) {
                for (; n.head;) n.removeNode(n.head.value);
                break
              }
              o = e.previous, n.removeNode(e.value), s(e.value)
            }
            const i = {
              texts: this.texts.map(e => ({
                id: this.mirror.getId(e.node),
                value: e.value
              })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
              attributes: this.attributes.map(e => {
                const {
                  attributes: t
                } = e;
                if ("string" == typeof t.style) {
                  const n = JSON.stringify(e.styleDiff),
                    r = JSON.stringify(e._unchangedStyles);
                  n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                }
                return {
                  id: this.mirror.getId(e.node),
                  attributes: t
                }
              }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
              removes: this.removes,
              adds: e
            };
            (i.texts.length || i.attributes.length || i.removes.length || i.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(i))
          }, this.processMutation = e => {
            if (!Be(e.target, this.mirror)) switch (e.type) {
              case "characterData": {
                const t = e.target.textContent;
                Fe(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                  value: Ie(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, $e(e.target)) : t.replace(/[\S]/g, "*") : t,
                  node: e.target
                });
                break
              }
              case "attributes": {
                const t = e.target;
                let n = e.attributeName,
                  r = e.target.getAttribute(n);
                if ("value" === n) {
                  const n = Z(t),
                    s = t.tagName;
                  r = ee(t, s, n);
                  const o = J({
                    maskInputOptions: this.maskInputOptions,
                    tagName: s,
                    type: n
                  });
                  r = G({
                    isMasked: Ie(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, o),
                    element: t,
                    value: r,
                    maskInputFn: this.maskInputFn
                  })
                }
                if (Fe(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue) return;
                let s = this.attributeMap.get(e.target);
                if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                  if (dt(t)) return;
                  n = "rr_src"
                }
                if (s || (s = {
                    node: e.target,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {}
                  }, this.attributes.push(s), this.attributeMap.set(e.target, s)), "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !we(t.tagName, n) && (s.attributes[n] = ke(this.doc, V(t.tagName), V(n), r, t, this.maskAttributeFn), "style" === n)) {
                  const n = e.oldValue ? this.styleDeclarationParser.parse(e.oldValue) : null;
                  for (const e of Array.from(t.style)) {
                    const r = t.style.getPropertyValue(e),
                      o = t.style.getPropertyPriority(e);
                    r !== (n?.getPropertyValue(e) || "") || o !== (n?.getPropertyPriority(e) || "") ? s.styleDiff[e] = "" === o ? r : [r, o] : s._unchangedStyles[e] = [r, o]
                  }
                  if (n)
                    for (const e of Array.from(n)) "" === t.style.getPropertyValue(e) && (s.styleDiff[e] = !1)
                }
                break
              }
              case "childList":
                if (Fe(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                  const n = this.mirror.getId(t),
                    r = q(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                  Fe(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || Be(t, this.mirror) || ! function(e, t) {
                    return -1 !== t.getId(e)
                  }(t, this.mirror) || (this.addedSet.has(t) ? (vt(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || Ue(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[gt(n, r)] ? vt(this.movedSet, t) : this.removes.push({
                    parentId: r,
                    id: n,
                    isShadow: !(!q(e.target) || !H(e.target)) || void 0
                  })), this.mapRemoves.push(t))
                })
            }
          }, this.genAdds = (e, t) => {
            if (!this.processedNodeManager.inOtherBuffer(e, this) && !this.addedSet.has(e) && !this.movedSet.has(e)) {
              if (this.mirror.hasNode(e)) {
                if (Be(e, this.mirror)) return;
                this.movedSet.add(e);
                let n = null;
                t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[gt(this.mirror.getId(e), n)] = !0)
              } else this.addedSet.add(e), this.droppedSet.delete(e);
              Fe(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (e.childNodes && e.childNodes.forEach(e => this.genAdds(e)), Ye(e) && e.shadowRoot.childNodes.forEach(t => {
                this.processedNodeManager.add(t, this), this.genAdds(t, e)
              }))
            }
          }
        }
        init(e) {
          ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager", "ignoreCSSAttributes"].forEach(t => {
            this[t] = e[t]
          }), this.styleDeclarationParser = new ht(this.doc)
        }
        freeze() {
          this.frozen = !0, this.canvasManager.freeze()
        }
        unfreeze() {
          this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
        }
        isFrozen() {
          return this.frozen
        }
        lock() {
          this.locked = !0, this.canvasManager.lock()
        }
        unlock() {
          this.locked = !1, this.canvasManager.unlock(), this.emit()
        }
        reset() {
          this.shadowDomManager.reset(), this.canvasManager.reset()
        }
      }

      function vt(e, t) {
        e.delete(t), t.childNodes?.forEach(t => vt(e, t))
      }

      function _t(e, t, n) {
        return 0 !== e.length && function(e, t, n) {
          let r = t.parentNode;
          for (; r;) {
            const t = n.getId(r);
            if (e.some(e => e.id === t)) return !0;
            r = r.parentNode
          }
          return !1
        }(e, t, n)
      }

      function St(e, t) {
        return 0 !== e.size && bt(e, t)
      }

      function bt(e, t) {
        const {
          parentNode: n
        } = t;
        return !!n && (!!e.has(n) || bt(e, n))
      }
      const kt = [];

      function wt(e) {
        try {
          if ("composedPath" in e) {
            const t = e.composedPath();
            if (t.length) return t[0]
          } else if ("path" in e && e.path.length) return e.path[0]
        } catch {}
        return e && e.target
      }

      function Tt(e, t) {
        const n = new yt;
        kt.push(n), n.init(e);
        let r = window.MutationObserver || window.__rrMutationObserver;
        const s = window?.Zone?.__symbol__?.("MutationObserver");
        s && window[s] && (r = window[s]);
        const o = new r(at(t => {
          e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t)
        }));
        return o.observe(t, {
          attributes: !0,
          attributeOldValue: !0,
          characterData: !0,
          characterDataOldValue: !0,
          childList: !0,
          subtree: !0
        }), o
      }

      function Et({
        scrollCb: e,
        doc: t,
        mirror: n,
        blockClass: r,
        blockSelector: s,
        unblockSelector: o,
        sampling: i
      }) {
        return Me("scroll", at(Ae(at(i => {
          const a = wt(i);
          if (!a || Fe(a, r, s, o, !0)) return;
          const c = n.getId(a);
          if (a === t && t.defaultView) {
            const n = Pe(t.defaultView);
            e({
              id: c,
              x: n.left,
              y: n.top
            })
          } else e({
            id: c,
            x: a.scrollLeft,
            y: a.scrollTop
          })
        }), i.scroll || 100)), t)
      }
      const It = ["INPUT", "TEXTAREA", "SELECT"],
        Ct = new WeakMap;

      function xt({
        inputCb: e,
        doc: t,
        mirror: n,
        blockClass: r,
        blockSelector: s,
        unblockSelector: o,
        ignoreClass: i,
        ignoreSelector: a,
        maskInputOptions: c,
        maskInputFn: u,
        sampling: l,
        userTriggeredOnInput: d,
        maskTextClass: p,
        unmaskTextClass: h,
        maskTextSelector: m,
        unmaskTextSelector: f
      }) {
        function g(e) {
          let n = wt(e);
          const l = e.isTrusted,
            g = n && X(n.tagName);
          if ("OPTION" === g && (n = n.parentElement), !n || !g || It.indexOf(g) < 0 || Fe(n, r, s, o, !0)) return;
          const v = n;
          if (v.classList.contains(i) || a && v.matches(a)) return;
          const _ = Z(n);
          let S = ee(v, g, _),
            b = !1;
          const k = J({
              maskInputOptions: c,
              tagName: g,
              type: _
            }),
            w = Ie(n, p, m, h, f, k);
          "radio" !== _ && "checkbox" !== _ || (b = n.checked), S = G({
            isMasked: w,
            element: n,
            value: S,
            maskInputFn: u
          }), y(n, d ? {
            text: S,
            isChecked: b,
            userTriggered: l
          } : {
            text: S,
            isChecked: b
          });
          const T = n.name;
          "radio" === _ && T && b && t.querySelectorAll(`input[type="radio"][name="${T}"]`).forEach(e => {
            if (e !== n) {
              const t = G({
                isMasked: w,
                element: e,
                value: ee(e, g, _),
                maskInputFn: u
              });
              y(e, d ? {
                text: t,
                isChecked: !b,
                userTriggered: !1
              } : {
                text: t,
                isChecked: !b
              })
            }
          })
        }

        function y(t, r) {
          const s = Ct.get(t);
          if (!s || s.text !== r.text || s.isChecked !== r.isChecked) {
            Ct.set(t, r);
            const s = n.getId(t);
            at(e)({
              ...r,
              id: s
            })
          }
        }
        const v = ("last" === l.input ? ["change"] : ["input", "change"]).map(e => Me(e, at(g), t)),
          _ = t.defaultView;
        if (!_) return () => {
          v.forEach(e => e())
        };
        const S = _.Object.getOwnPropertyDescriptor(_.HTMLInputElement.prototype, "value"),
          b = [
            [_.HTMLInputElement.prototype, "value"],
            [_.HTMLInputElement.prototype, "checked"],
            [_.HTMLSelectElement.prototype, "value"],
            [_.HTMLTextAreaElement.prototype, "value"],
            [_.HTMLSelectElement.prototype, "selectedIndex"],
            [_.HTMLOptionElement.prototype, "selected"]
          ];
        return S && S.set && v.push(...b.map(e => De(e[0], e[1], {
          set() {
            at(g)({
              target: this,
              isTrusted: !1
            })
          }
        }, !1, _))), at(() => {
          v.forEach(e => e())
        })
      }

      function Mt(e) {
        return function(e, t) {
          if (Dt("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || Dt("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || Dt("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || Dt("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
            const n = Array.from(e.parentRule.cssRules).indexOf(e);
            t.unshift(n)
          } else if (e.parentStyleSheet) {
            const n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
            t.unshift(n)
          }
          return t
        }(e, [])
      }

      function Rt(e, t, n) {
        let r, s;
        return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : s = n.getId(e), {
          styleId: s,
          id: r
        }) : {}
      }

      function Ot({
        mirror: e,
        stylesheetManager: t
      }, n) {
        let r = null;
        r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
        const s = "#document" === n.nodeName ? n.defaultView?.Document : n.ownerDocument?.defaultView?.ShadowRoot,
          o = s?.prototype ? Object.getOwnPropertyDescriptor(s?.prototype, "adoptedStyleSheets") : void 0;
        return null !== r && -1 !== r && s && o ? (Object.defineProperty(n, "adoptedStyleSheets", {
          configurable: o.configurable,
          enumerable: o.enumerable,
          get() {
            return o.get?.call(this)
          },
          set(e) {
            const n = o.set?.call(this, e);
            if (null !== r && -1 !== r) try {
              t.adoptStyleSheets(e, r)
            } catch (e) {}
            return n
          }
        }), at(() => {
          Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: o.configurable,
            enumerable: o.enumerable,
            get: o.get,
            set: o.set
          })
        })) : () => {}
      }

      function At(e, t = {}) {
        const n = e.doc.defaultView;
        if (!n) return () => {};
        let r;
        e.recordDOM && (r = Tt(e, e.doc));
        const s = function({
            mousemoveCb: e,
            sampling: t,
            doc: n,
            mirror: r
          }) {
            if (!1 === t.mousemove) return () => {};
            const s = "number" == typeof t.mousemove ? t.mousemove : 50,
              o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
            let i, a = [];
            const c = Ae(at(t => {
                const n = Date.now() - i;
                e(a.map(e => (e.timeOffset -= n, e)), t), a = [], i = null
              }), o),
              u = at(Ae(at(e => {
                const t = wt(e),
                  {
                    clientX: n,
                    clientY: s
                  } = qe(e) ? e.changedTouches[0] : e;
                i || (i = Ne()), a.push({
                  x: n,
                  y: s,
                  id: r.getId(t),
                  timeOffset: Ne() - i
                }), c("undefined" != typeof DragEvent && e instanceof DragEvent ? et.Drag : e instanceof MouseEvent ? et.MouseMove : et.TouchMove)
              }), s, {
                trailing: !1
              })),
              l = [Me("mousemove", u, n), Me("touchmove", u, n), Me("drag", u, n)];
            return at(() => {
              l.forEach(e => e())
            })
          }(e),
          o = function({
            mouseInteractionCb: e,
            doc: t,
            mirror: n,
            blockClass: r,
            blockSelector: s,
            unblockSelector: o,
            sampling: i
          }) {
            if (!1 === i.mouseInteraction) return () => {};
            const a = !0 === i.mouseInteraction || void 0 === i.mouseInteraction ? {} : i.mouseInteraction,
              c = [];
            let u = null;
            return Object.keys(tt).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e]).forEach(i => {
              let a = V(i);
              const l = (t => i => {
                const a = wt(i);
                if (Fe(a, r, s, o, !0)) return;
                let c = null,
                  l = t;
                if ("pointerType" in i) {
                  switch (i.pointerType) {
                    case "mouse":
                      c = nt.Mouse;
                      break;
                    case "touch":
                      c = nt.Touch;
                      break;
                    case "pen":
                      c = nt.Pen
                  }
                  c === nt.Touch ? tt[t] === tt.MouseDown ? l = "TouchStart" : tt[t] === tt.MouseUp && (l = "TouchEnd") : nt.Pen
                } else qe(i) && (c = nt.Touch);
                null !== c ? (u = c, (l.startsWith("Touch") && c === nt.Touch || l.startsWith("Mouse") && c === nt.Mouse) && (c = null)) : tt[t] === tt.Click && (c = u, u = null);
                const d = qe(i) ? i.changedTouches[0] : i;
                if (!d) return;
                const p = n.getId(a),
                  {
                    clientX: h,
                    clientY: m
                  } = d;
                at(e)({
                  type: tt[l],
                  id: p,
                  x: h,
                  y: m,
                  ...null !== c && {
                    pointerType: c
                  }
                })
              })(i);
              if (window.PointerEvent) switch (tt[i]) {
                case tt.MouseDown:
                case tt.MouseUp:
                  a = a.replace("mouse", "pointer");
                  break;
                case tt.TouchStart:
                case tt.TouchEnd:
                  return
              }
              c.push(Me(a, l, t))
            }), at(() => {
              c.forEach(e => e())
            })
          }(e),
          i = Et(e),
          a = function({
            viewportResizeCb: e
          }, {
            win: t
          }) {
            let n = -1,
              r = -1;
            return Me("resize", at(Ae(at(() => {
              const t = ze(),
                s = je();
              n === t && r === s || (e({
                width: Number(s),
                height: Number(t)
              }), n = t, r = s)
            }), 200)), t)
          }(e, {
            win: n
          }),
          c = xt(e),
          u = function({
            mediaInteractionCb: e,
            blockClass: t,
            blockSelector: n,
            unblockSelector: r,
            mirror: s,
            sampling: o,
            doc: i
          }) {
            const a = at(i => Ae(at(o => {
                const a = wt(o);
                if (!a || Fe(a, t, n, r, !0)) return;
                const {
                  currentTime: c,
                  volume: u,
                  muted: l,
                  playbackRate: d
                } = a;
                e({
                  type: i,
                  id: s.getId(a),
                  currentTime: c,
                  volume: u,
                  muted: l,
                  playbackRate: d
                })
              }), o.media || 500)),
              c = [Me("play", a(rt.Play), i), Me("pause", a(rt.Pause), i), Me("seeked", a(rt.Seeked), i), Me("volumechange", a(rt.VolumeChange), i), Me("ratechange", a(rt.RateChange), i)];
            return at(() => {
              c.forEach(e => e())
            })
          }(e);
        let l = () => {},
          d = () => {},
          p = () => {},
          h = () => {};
        e.recordDOM && (l = function({
          styleSheetRuleCb: e,
          mirror: t,
          stylesheetManager: n
        }, {
          win: r
        }) {
          if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
          const s = r.CSSStyleSheet.prototype.insertRule;
          r.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
            apply: at((r, s, o) => {
              const [i, a] = o, {
                id: c,
                styleId: u
              } = Rt(s, t, n.styleMirror);
              return (c && -1 !== c || u && -1 !== u) && e({
                id: c,
                styleId: u,
                adds: [{
                  rule: i,
                  index: a
                }]
              }), r.apply(s, o)
            })
          });
          const o = r.CSSStyleSheet.prototype.deleteRule;
          let i, a;
          r.CSSStyleSheet.prototype.deleteRule = new Proxy(o, {
            apply: at((r, s, o) => {
              const [i] = o, {
                id: a,
                styleId: c
              } = Rt(s, t, n.styleMirror);
              return (a && -1 !== a || c && -1 !== c) && e({
                id: a,
                styleId: c,
                removes: [{
                  index: i
                }]
              }), r.apply(s, o)
            })
          }), r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = new Proxy(i, {
            apply: at((r, s, o) => {
              const [i] = o, {
                id: a,
                styleId: c
              } = Rt(s, t, n.styleMirror);
              return (a && -1 !== a || c && -1 !== c) && e({
                id: a,
                styleId: c,
                replace: i
              }), r.apply(s, o)
            })
          })), r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
            apply: at((r, s, o) => {
              const [i] = o, {
                id: a,
                styleId: c
              } = Rt(s, t, n.styleMirror);
              return (a && -1 !== a || c && -1 !== c) && e({
                id: a,
                styleId: c,
                replaceSync: i
              }), r.apply(s, o)
            })
          }));
          const c = {};
          Lt("CSSGroupingRule") ? c.CSSGroupingRule = r.CSSGroupingRule : (Lt("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule), Lt("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule), Lt("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
          const u = {};
          return Object.entries(c).forEach(([r, s]) => {
            u[r] = {
              insertRule: s.prototype.insertRule,
              deleteRule: s.prototype.deleteRule
            }, s.prototype.insertRule = new Proxy(u[r].insertRule, {
              apply: at((r, s, o) => {
                const [i, a] = o, {
                  id: c,
                  styleId: u
                } = Rt(s.parentStyleSheet, t, n.styleMirror);
                return (c && -1 !== c || u && -1 !== u) && e({
                  id: c,
                  styleId: u,
                  adds: [{
                    rule: i,
                    index: [...Mt(s), a || 0]
                  }]
                }), r.apply(s, o)
              })
            }), s.prototype.deleteRule = new Proxy(u[r].deleteRule, {
              apply: at((r, s, o) => {
                const [i] = o, {
                  id: a,
                  styleId: c
                } = Rt(s.parentStyleSheet, t, n.styleMirror);
                return (a && -1 !== a || c && -1 !== c) && e({
                  id: a,
                  styleId: c,
                  removes: [{
                    index: [...Mt(s), i]
                  }]
                }), r.apply(s, o)
              })
            })
          }), at(() => {
            r.CSSStyleSheet.prototype.insertRule = s, r.CSSStyleSheet.prototype.deleteRule = o, i && (r.CSSStyleSheet.prototype.replace = i), a && (r.CSSStyleSheet.prototype.replaceSync = a), Object.entries(c).forEach(([e, t]) => {
              t.prototype.insertRule = u[e].insertRule, t.prototype.deleteRule = u[e].deleteRule
            })
          })
        }(e, {
          win: n
        }), d = Ot(e, e.doc), p = function({
          styleDeclarationCb: e,
          mirror: t,
          ignoreCSSAttributes: n,
          stylesheetManager: r
        }, {
          win: s
        }) {
          const o = s.CSSStyleDeclaration.prototype.setProperty;
          s.CSSStyleDeclaration.prototype.setProperty = new Proxy(o, {
            apply: at((s, i, a) => {
              const [c, u, l] = a;
              if (n.has(c)) return o.apply(i, [c, u, l]);
              const {
                id: d,
                styleId: p
              } = Rt(i.parentRule?.parentStyleSheet, t, r.styleMirror);
              return (d && -1 !== d || p && -1 !== p) && e({
                id: d,
                styleId: p,
                set: {
                  property: c,
                  value: u,
                  priority: l
                },
                index: Mt(i.parentRule)
              }), s.apply(i, a)
            })
          });
          const i = s.CSSStyleDeclaration.prototype.removeProperty;
          return s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i, {
            apply: at((s, o, a) => {
              const [c] = a;
              if (n.has(c)) return i.apply(o, [c]);
              const {
                id: u,
                styleId: l
              } = Rt(o.parentRule?.parentStyleSheet, t, r.styleMirror);
              return (u && -1 !== u || l && -1 !== l) && e({
                id: u,
                styleId: l,
                remove: {
                  property: c
                },
                index: Mt(o.parentRule)
              }), s.apply(o, a)
            })
          }), at(() => {
            s.CSSStyleDeclaration.prototype.setProperty = o, s.CSSStyleDeclaration.prototype.removeProperty = i
          })
        }(e, {
          win: n
        }), e.collectFonts && (h = function({
          fontCb: e,
          doc: t
        }) {
          const n = t.defaultView;
          if (!n) return () => {};
          const r = [],
            s = new WeakMap,
            o = n.FontFace;
          n.FontFace = function(e, t, n) {
            const r = new o(e, t, n);
            return s.set(r, {
              family: e,
              buffer: "string" != typeof t,
              descriptors: n,
              fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
            }), r
          };
          const i = Le(t.fonts, "add", function(t) {
            return function(n) {
              return Qe(at(() => {
                const t = s.get(n);
                t && (e(t), s.delete(n))
              }), 0), t.apply(this, [n])
            }
          });
          return r.push(() => {
            n.FontFace = o
          }), r.push(i), at(() => {
            r.forEach(e => e())
          })
        }(e)));
        const m = function(e) {
            const {
              doc: t,
              mirror: n,
              blockClass: r,
              blockSelector: s,
              unblockSelector: o,
              selectionCb: i
            } = e;
            let a = !0;
            const c = at(() => {
              const e = t.getSelection();
              if (!e || a && e?.isCollapsed) return;
              a = e.isCollapsed || !1;
              const c = [],
                u = e.rangeCount || 0;
              for (let t = 0; t < u; t++) {
                const i = e.getRangeAt(t),
                  {
                    startContainer: a,
                    startOffset: u,
                    endContainer: l,
                    endOffset: d
                  } = i;
                Fe(a, r, s, o, !0) || Fe(l, r, s, o, !0) || c.push({
                  start: n.getId(a),
                  startOffset: u,
                  end: n.getId(l),
                  endOffset: d
                })
              }
              i({
                ranges: c
              })
            });
            return c(), Me("selectionchange", c)
          }(e),
          f = function({
            doc: e,
            customElementCb: t
          }) {
            const n = e.defaultView;
            return n && n.customElements ? Le(n.customElements, "define", function(e) {
              return function(n, r, s) {
                try {
                  t({
                    define: {
                      name: n
                    }
                  })
                } catch (e) {}
                return e.apply(this, [n, r, s])
              }
            }) : () => {}
          }(e),
          g = [];
        for (const t of e.plugins) g.push(t.observer(t.callback, n, t.options));
        return at(() => {
          kt.forEach(e => e.reset()), r?.disconnect(), s(), o(), i(), a(), c(), u(), l(), d(), p(), h(), m(), f(), g.forEach(e => e())
        })
      }

      function Dt(e) {
        return void 0 !== window[e]
      }

      function Lt(e) {
        return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
      }
      class Nt {
        constructor(e) {
          this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
        }
        getId(e, t, n, r) {
          const s = n || this.getIdToRemoteIdMap(e),
            o = r || this.getRemoteIdToIdMap(e);
          let i = s.get(t);
          return i || (i = this.generateIdFn(), s.set(t, i), o.set(i, t)), i
        }
        getIds(e, t) {
          const n = this.getIdToRemoteIdMap(e),
            r = this.getRemoteIdToIdMap(e);
          return t.map(t => this.getId(e, t, n, r))
        }
        getRemoteId(e, t, n) {
          const r = n || this.getRemoteIdToIdMap(e);
          if ("number" != typeof t) return t;
          return r.get(t) || -1
        }
        getRemoteIds(e, t) {
          const n = this.getRemoteIdToIdMap(e);
          return t.map(t => this.getRemoteId(e, t, n))
        }
        reset(e) {
          if (!e) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
          this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
        }
        getIdToRemoteIdMap(e) {
          let t = this.iframeIdToRemoteIdMap.get(e);
          return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
        }
        getRemoteIdToIdMap(e) {
          let t = this.iframeRemoteIdToIdMap.get(e);
          return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
        }
      }
      class Pt {
        constructor() {
          this.crossOriginIframeMirror = new Nt(ue), this.crossOriginIframeRootIdMap = new WeakMap
        }
        addIframe() {}
        addLoadListener() {}
        attachIframe() {}
      }
      class zt {
        constructor(e) {
          this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new Nt(ue), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Nt(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
        }
        addIframe(e) {
          this.iframes.set(e, !0);
          const t = pt(e);
          t && this.crossOriginIframeMap.set(t, e)
        }
        addLoadListener(e) {
          this.loadListener = e
        }
        attachIframe(e, t) {
          this.mutationCb({
            adds: [{
              parentId: this.mirror.getId(e),
              nextId: null,
              node: t
            }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
          }), this.recordCrossOriginIframes && pt(e)?.addEventListener("message", this.handleMessage.bind(this)), this.loadListener?.(e);
          const n = dt(e);
          n && n.adoptedStyleSheets && n.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(n.adoptedStyleSheets, this.mirror.getId(n))
        }
        handleMessage(e) {
          const t = e;
          if ("rrweb" !== t.data.type || t.origin !== t.data.origin) return;
          if (!e.source) return;
          const n = this.crossOriginIframeMap.get(e.source);
          if (!n) return;
          const r = this.transformCrossOriginEvent(n, t.data.event);
          r && this.wrappedEmit(r, t.data.isCheckout)
        }
        transformCrossOriginEvent(e, t) {
          switch (t.type) {
            case Ze.FullSnapshot: {
              this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
              const n = t.data.node.id;
              return this.crossOriginIframeRootIdMap.set(e, n), this.patchRootIdOnNode(t.data.node, n), {
                timestamp: t.timestamp,
                type: Ze.IncrementalSnapshot,
                data: {
                  source: et.Mutation,
                  adds: [{
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t.data.node
                  }],
                  removes: [],
                  texts: [],
                  attributes: [],
                  isAttachIframe: !0
                }
              }
            }
            case Ze.Meta:
            case Ze.Load:
            case Ze.DomContentLoaded:
              return !1;
            case Ze.Plugin:
              return t;
            case Ze.Custom:
              return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
            case Ze.IncrementalSnapshot:
              switch (t.data.source) {
                case et.Mutation:
                  return t.data.adds.forEach(t => {
                    this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                    const n = this.crossOriginIframeRootIdMap.get(e);
                    n && this.patchRootIdOnNode(t.node, n)
                  }), t.data.removes.forEach(t => {
                    this.replaceIds(t, e, ["parentId", "id"])
                  }), t.data.attributes.forEach(t => {
                    this.replaceIds(t, e, ["id"])
                  }), t.data.texts.forEach(t => {
                    this.replaceIds(t, e, ["id"])
                  }), t;
                case et.Drag:
                case et.TouchMove:
                case et.MouseMove:
                  return t.data.positions.forEach(t => {
                    this.replaceIds(t, e, ["id"])
                  }), t;
                case et.ViewportResize:
                  return !1;
                case et.MediaInteraction:
                case et.MouseInteraction:
                case et.Scroll:
                case et.CanvasMutation:
                case et.Input:
                  return this.replaceIds(t.data, e, ["id"]), t;
                case et.StyleSheetRule:
                case et.StyleDeclaration:
                  return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                case et.Font:
                  return t;
                case et.Selection:
                  return t.data.ranges.forEach(t => {
                    this.replaceIds(t, e, ["start", "end"])
                  }), t;
                case et.AdoptedStyleSheet:
                  return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), t.data.styles?.forEach(t => {
                    this.replaceStyleIds(t, e, ["styleId"])
                  }), t
              }
          }
          return !1
        }
        replace(e, t, n, r) {
          for (const s of r)(Array.isArray(t[s]) || "number" == typeof t[s]) && (Array.isArray(t[s]) ? t[s] = e.getIds(n, t[s]) : t[s] = e.getId(n, t[s]));
          return t
        }
        replaceIds(e, t, n) {
          return this.replace(this.crossOriginIframeMirror, e, t, n)
        }
        replaceStyleIds(e, t, n) {
          return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
        }
        replaceIdOnNode(e, t) {
          this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
            this.replaceIdOnNode(e, t)
          })
        }
        patchRootIdOnNode(e, t) {
          e.type === U.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach(e => {
            this.patchRootIdOnNode(e, t)
          })
        }
      }
      class jt {
        init() {}
        addShadowRoot() {}
        observeAttachShadow() {}
        reset() {}
      }
      class $t {
        constructor(e) {
          this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
        }
        init() {
          this.reset(), this.patchAttachShadow(Element, document)
        }
        addShadowRoot(e, t) {
          if (!H(e)) return;
          if (this.shadowDoms.has(e)) return;
          this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
          const n = Tt({
            ...this.bypassOptions,
            doc: t,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
          }, e);
          this.restoreHandlers.push(() => n.disconnect()), this.restoreHandlers.push(Et({
            ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: e,
            mirror: this.mirror
          })), Qe(() => {
            e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(Ot({
              mirror: this.mirror,
              stylesheetManager: this.bypassOptions.stylesheetManager
            }, e))
          }, 0)
        }
        observeAttachShadow(e) {
          const t = dt(e),
            n = pt(e);
          t && n && this.patchAttachShadow(n.Element, t)
        }
        patchAttachShadow(e, t) {
          const n = this;
          this.restoreHandlers.push(Le(e.prototype, "attachShadow", function(e) {
            return function(r) {
              const s = e.call(this, r);
              return this.shadowRoot && Ge(this) && n.addShadowRoot(this.shadowRoot, t), s
            }
          }))
        }
        reset() {
          this.restoreHandlers.forEach(e => {
            try {
              e()
            } catch (e) {}
          }), this.restoreHandlers = [], this.shadowDoms = new WeakSet, this.bypassOptions.canvasManager.resetShadowRoots()
        }
      }
      class Ft {
        constructor(e) {
          this.trackedLinkElements = new WeakSet, this.styleMirror = new Ke, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
        }
        attachLinkElement(e, t) {
          "_cssText" in t.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [{
              id: t.id,
              attributes: t.attributes
            }]
          }), this.trackLinkElement(e)
        }
        trackLinkElement(e) {
          this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
        }
        adoptStyleSheets(e, t) {
          if (0 === e.length) return;
          const n = {
              id: t,
              styleIds: []
            },
            r = [];
          for (const t of e) {
            let e;
            this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), r.push({
              styleId: e,
              rules: Array.from(t.rules || CSSRule, (e, t) => ({
                rule: Y(e),
                index: t
              }))
            })), n.styleIds.push(e)
          }
          r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
        }
        reset() {
          this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
        }
        trackStylesheetInLinkElement(e) {}
      }
      class Bt {
        constructor() {
          this.nodeMap = new WeakMap, this.active = !1
        }
        inOtherBuffer(e, t) {
          const n = this.nodeMap.get(e);
          return n && Array.from(n).some(e => e !== t)
        }
        add(e, t) {
          this.active || (this.active = !0, function(...e) {
            Xe("requestAnimationFrame")(...e)
          }(() => {
            this.nodeMap = new WeakMap, this.active = !1
          })), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
        }
        destroy() {}
      }
      let Ut, qt;
      try {
        if (2 !== Array.from([1], e => 2 * e)[0]) {
          const e = document.createElement("iframe");
          document.body.appendChild(e), Array.from = e.contentWindow?.Array.from || Array.from, document.body.removeChild(e)
        }
      } catch (e) {
        console.debug("Unable to override Array.from", e)
      }
      const Ht = new K;

      function Wt(e = {}) {
        const {
          emit: t,
          checkoutEveryNms: n,
          checkoutEveryNth: r,
          blockClass: s = "rr-block",
          blockSelector: o = null,
          unblockSelector: i = null,
          ignoreClass: a = "rr-ignore",
          ignoreSelector: c = null,
          maskAllText: u = !1,
          maskTextClass: l = "rr-mask",
          unmaskTextClass: d = null,
          maskTextSelector: p = null,
          unmaskTextSelector: h = null,
          inlineStylesheet: m = !0,
          maskAllInputs: f,
          maskInputOptions: g,
          slimDOMOptions: y,
          maskAttributeFn: v,
          maskInputFn: _,
          maskTextFn: S,
          maxCanvasSize: b = null,
          packFn: k,
          sampling: w = {},
          dataURLOptions: T = {},
          mousemoveWait: E,
          recordDOM: I = !0,
          recordCanvas: C = !1,
          recordCrossOriginIframes: x = !1,
          recordAfter: M = ("DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load"),
          userTriggeredOnInput: R = !1,
          collectFonts: O = !1,
          inlineImages: A = !1,
          plugins: D,
          keepIframeSrcFn: L = () => !1,
          ignoreCSSAttributes: N = new Set([]),
          errorHandler: P,
          onMutation: z,
          getCanvasManager: j
        } = e;
        ot(P);
        const $ = !x || window.parent === window;
        let F = !1;
        if (!$) try {
          window.parent.document && (F = !1)
        } catch (e) {
          F = !0
        }
        if ($ && !t) throw new Error("emit function is required");
        if (!$ && !F) return () => {};
        void 0 !== E && void 0 === w.mousemove && (w.mousemove = E), Ht.reset();
        const B = !0 === f ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0
          } : void 0 !== g ? g : {},
          U = !0 === y || "all" === y ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === y,
            headMetaDescKeywords: "all" === y
          } : y || {};
        let q;
        ! function(e = window) {
          "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
            let t = e[0];
            if (!(0 in e)) throw new TypeError("1 argument is required");
            do {
              if (this === t) return !0
            } while (t = t && t.parentNode);
            return !1
          })
        }();
        let H = 0;
        const W = e => {
          for (const t of D || []) t.eventProcessor && (e = t.eventProcessor(e));
          return k && !F && (e = k(e)), e
        };
        Ut = (e, s) => {
          const o = e;
          if (o.timestamp = Ne(), !kt[0]?.isFrozen() || o.type === Ze.FullSnapshot || o.type === Ze.IncrementalSnapshot && o.data.source === et.Mutation || kt.forEach(e => e.unfreeze()), $) t?.(W(o), s);
          else if (F) {
            const e = {
              type: "rrweb",
              event: W(o),
              origin: window.location.origin,
              isCheckout: s
            };
            window.parent.postMessage(e, "*")
          }
          if (o.type === Ze.FullSnapshot) q = o, H = 0;
          else if (o.type === Ze.IncrementalSnapshot) {
            if (o.data.source === et.Mutation && o.data.isAttachIframe) return;
            H++;
            const e = r && H >= r,
              t = n && q && o.timestamp - q.timestamp > n;
            (e || t) && te(!0)
          }
        };
        const Y = e => {
            Ut({
              type: Ze.IncrementalSnapshot,
              data: {
                source: et.Mutation,
                ...e
              }
            })
          },
          J = e => Ut({
            type: Ze.IncrementalSnapshot,
            data: {
              source: et.Scroll,
              ...e
            }
          }),
          G = e => Ut({
            type: Ze.IncrementalSnapshot,
            data: {
              source: et.CanvasMutation,
              ...e
            }
          }),
          V = new Ft({
            mutationCb: Y,
            adoptedStyleSheetCb: e => Ut({
              type: Ze.IncrementalSnapshot,
              data: {
                source: et.AdoptedStyleSheet,
                ...e
              }
            })
          }),
          X = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new Pt : new zt({
            mirror: Ht,
            mutationCb: Y,
            stylesheetManager: V,
            recordCrossOriginIframes: x,
            wrappedEmit: Ut
          });
        for (const e of D || []) e.getMirror && e.getMirror({
          nodeMirror: Ht,
          crossOriginIframeMirror: X.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: X.crossOriginIframeStyleMirror
        });
        const Q = new Bt,
          Z = function(e, t) {
            try {
              return e ? e(t) : new lt
            } catch {
              return console.warn("Unable to initialize CanvasManager"), new lt
            }
          }(j, {
            mirror: Ht,
            win: window,
            mutationCb: e => Ut({
              type: Ze.IncrementalSnapshot,
              data: {
                source: et.CanvasMutation,
                ...e
              }
            }),
            recordCanvas: C,
            blockClass: s,
            blockSelector: o,
            unblockSelector: i,
            maxCanvasSize: b,
            sampling: w.canvas,
            dataURLOptions: T,
            errorHandler: P
          }),
          ee = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new jt : new $t({
            mutationCb: Y,
            scrollCb: J,
            bypassOptions: {
              onMutation: z,
              blockClass: s,
              blockSelector: o,
              unblockSelector: i,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: h,
              inlineStylesheet: m,
              maskInputOptions: B,
              dataURLOptions: T,
              maskAttributeFn: v,
              maskTextFn: S,
              maskInputFn: _,
              recordCanvas: C,
              inlineImages: A,
              sampling: w,
              slimDOMOptions: U,
              iframeManager: X,
              stylesheetManager: V,
              canvasManager: Z,
              keepIframeSrcFn: L,
              processedNodeManager: Q,
              ignoreCSSAttributes: N
            },
            mirror: Ht
          }),
          te = (e = !1) => {
            if (!I) return;
            Ut({
              type: Ze.Meta,
              data: {
                href: window.location.href,
                width: je(),
                height: ze()
              }
            }, e), V.reset(), ee.init(), kt.forEach(e => e.lock());
            const t = function(e, t) {
              const {
                mirror: n = new K,
                blockClass: r = "rr-block",
                blockSelector: s = null,
                unblockSelector: o = null,
                maskAllText: i = !1,
                maskTextClass: a = "rr-mask",
                unmaskTextClass: c = null,
                maskTextSelector: u = null,
                unmaskTextSelector: l = null,
                inlineStylesheet: d = !0,
                inlineImages: p = !1,
                recordCanvas: h = !1,
                maskAllInputs: m = !1,
                maskAttributeFn: f,
                maskTextFn: g,
                maskInputFn: y,
                slimDOM: v = !1,
                dataURLOptions: _,
                preserveWhiteSpace: S,
                onSerialize: b,
                onIframeLoad: k,
                iframeLoadTimeout: w,
                onBlockedImageLoad: T,
                onStylesheetLoad: E,
                stylesheetLoadTimeout: I,
                keepIframeSrcFn: C = () => !1,
                ignoreCSSAttributes: x = new Set([])
              } = t || {};
              return xe(e, {
                doc: e,
                mirror: n,
                blockClass: r,
                blockSelector: s,
                unblockSelector: o,
                maskAllText: i,
                maskTextClass: a,
                unmaskTextClass: c,
                maskTextSelector: u,
                unmaskTextSelector: l,
                skipChild: !1,
                inlineStylesheet: d,
                maskInputOptions: !0 === m ? {
                  color: !0,
                  date: !0,
                  "datetime-local": !0,
                  email: !0,
                  month: !0,
                  number: !0,
                  range: !0,
                  search: !0,
                  tel: !0,
                  text: !0,
                  time: !0,
                  url: !0,
                  week: !0,
                  textarea: !0,
                  select: !0
                } : !1 === m ? {} : m,
                maskAttributeFn: f,
                maskTextFn: g,
                maskInputFn: y,
                slimDOMOptions: !0 === v || "all" === v ? {
                  script: !0,
                  comment: !0,
                  headFavicon: !0,
                  headWhitespace: !0,
                  headMetaDescKeywords: "all" === v,
                  headMetaSocial: !0,
                  headMetaRobots: !0,
                  headMetaHttpEquiv: !0,
                  headMetaAuthorship: !0,
                  headMetaVerification: !0
                } : !1 === v ? {} : v,
                dataURLOptions: _,
                inlineImages: p,
                recordCanvas: h,
                preserveWhiteSpace: S,
                onSerialize: b,
                onIframeLoad: k,
                iframeLoadTimeout: w,
                onBlockedImageLoad: T,
                onStylesheetLoad: E,
                stylesheetLoadTimeout: I,
                keepIframeSrcFn: C,
                newlyAddedElement: !1,
                ignoreCSSAttributes: x
              })
            }(document, {
              mirror: Ht,
              blockClass: s,
              blockSelector: o,
              unblockSelector: i,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: h,
              inlineStylesheet: m,
              maskAllInputs: B,
              maskAttributeFn: v,
              maskInputFn: _,
              maskTextFn: S,
              slimDOM: U,
              dataURLOptions: T,
              recordCanvas: C,
              inlineImages: A,
              onSerialize: e => {
                He(e, Ht) && X.addIframe(e), We(e, Ht) && V.trackLinkElement(e), Ye(e) && ee.addShadowRoot(e.shadowRoot, document)
              },
              onIframeLoad: (e, t) => {
                X.attachIframe(e, t);
                const n = pt(e);
                n && Z.addWindow(n), ee.observeAttachShadow(e)
              },
              onStylesheetLoad: (e, t) => {
                V.attachLinkElement(e, t)
              },
              onBlockedImageLoad: (e, t, {
                width: n,
                height: r
              }) => {
                Y({
                  adds: [],
                  removes: [],
                  texts: [],
                  attributes: [{
                    id: t.id,
                    attributes: {
                      style: {
                        width: `${n}px`,
                        height: `${r}px`
                      }
                    }
                  }]
                })
              },
              keepIframeSrcFn: L,
              ignoreCSSAttributes: N
            });
            if (!t) return console.warn("Failed to snapshot the document");
            Ut({
              type: Ze.FullSnapshot,
              data: {
                node: t,
                initialOffset: Pe(window)
              }
            }), kt.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && V.adoptStyleSheets(document.adoptedStyleSheets, Ht.getId(document))
          };
        qt = te;
        try {
          const e = [],
            t = e => at(At)({
              onMutation: z,
              mutationCb: Y,
              mousemoveCb: (e, t) => Ut({
                type: Ze.IncrementalSnapshot,
                data: {
                  source: t,
                  positions: e
                }
              }),
              mouseInteractionCb: e => Ut({
                type: Ze.IncrementalSnapshot,
                data: {
                  source: et.MouseInteraction,
                  ...e
                }
              }),
              scrollCb: J,
              viewportResizeCb: e => Ut({
                type: Ze.IncrementalSnapshot,
                data: {
                  source: et.ViewportResize,
                  ...e
                }
              }),
              inputCb: e => Ut({
                type: Ze.IncrementalSnapshot,
                data: {
                  source: et.Input,
                  ...e
                }
              }),
              mediaInteractionCb: e => Ut({
                type: Ze.IncrementalSnapshot,
                data: {
                  source: et.MediaInteraction,
                  ...e
                }
              }),
              styleSheetRuleCb: e => Ut({
                type: Ze.IncrementalSnapshot,
                data: {
                  source: et.StyleSheetRule,
                  ...e
                }
              }),
              styleDeclarationCb: e => Ut({
                type: Ze.IncrementalSnapshot,
                data: {
                  source: et.StyleDeclaration,
                  ...e
                }
              }),
              canvasMutationCb: G,
              fontCb: e => Ut({
                type: Ze.IncrementalSnapshot,
                data: {
                  source: et.Font,
                  ...e
                }
              }),
              selectionCb: e => {
                Ut({
                  type: Ze.IncrementalSnapshot,
                  data: {
                    source: et.Selection,
                    ...e
                  }
                })
              },
              customElementCb: e => {
                Ut({
                  type: Ze.IncrementalSnapshot,
                  data: {
                    source: et.CustomElement,
                    ...e
                  }
                })
              },
              blockClass: s,
              ignoreClass: a,
              ignoreSelector: c,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: h,
              maskInputOptions: B,
              inlineStylesheet: m,
              sampling: w,
              recordDOM: I,
              recordCanvas: C,
              inlineImages: A,
              userTriggeredOnInput: R,
              collectFonts: O,
              doc: e,
              maskAttributeFn: v,
              maskInputFn: _,
              maskTextFn: S,
              keepIframeSrcFn: L,
              blockSelector: o,
              unblockSelector: i,
              slimDOMOptions: U,
              dataURLOptions: T,
              mirror: Ht,
              iframeManager: X,
              stylesheetManager: V,
              shadowDomManager: ee,
              processedNodeManager: Q,
              canvasManager: Z,
              ignoreCSSAttributes: N,
              plugins: D?.filter(e => e.observer)?.map(e => ({
                observer: e.observer,
                options: e.options,
                callback: t => Ut({
                  type: Ze.Plugin,
                  data: {
                    plugin: e.name,
                    payload: t
                  }
                })
              })) || []
            }, {});
          X.addLoadListener(n => {
            try {
              e.push(t(n.contentDocument))
            } catch (e) {
              console.warn(e)
            }
          });
          const n = () => {
            te(), e.push(t(document))
          };
          return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(Me("DOMContentLoaded", () => {
            Ut({
              type: Ze.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === M && n()
          })), e.push(Me("load", () => {
            Ut({
              type: Ze.Load,
              data: {}
            }), "load" === M && n()
          }, window))), () => {
            e.forEach(e => e()), Q.destroy(), qt = void 0, it()
          }
        } catch (e) {
          console.warn(e)
        }
      }
      var Yt, Kt;

      function Jt(e) {
        return e > 9999999999 ? e : 1e3 * e
      }

      function Gt(e) {
        return e > 9999999999 ? e / 1e3 : e
      }

      function Vt(e, t) {
        "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(() => (e.throttledAddEvent({
          type: Ze.Custom,
          timestamp: 1e3 * (t.timestamp || 0),
          data: {
            tag: "breadcrumb",
            payload: (0, s.S8)(t, 10, 1e3)
          }
        }), "console" === t.category)))
      }

      function Xt(e) {
        return e.closest("button,a") || e
      }

      function Qt(e) {
        const t = Zt(e);
        return t && t instanceof Element ? Xt(t) : t
      }

      function Zt(e) {
        return function(e) {
          return (0, o.Z4)(e) && "target" in e
        }(e) ? e.target : e
      }
      let en;
      Wt.mirror = Ht, Wt.takeFullSnapshot = function(e) {
        if (!qt) throw new Error("please take full snapshot after start recording");
        qt(e)
      }, (Kt = Yt || (Yt = {}))[Kt.NotStarted = 0] = "NotStarted", Kt[Kt.Running = 1] = "Running", Kt[Kt.Stopped = 2] = "Stopped";
      const tn = new Set([et.Mutation, et.StyleSheetRule, et.StyleDeclaration, et.AdoptedStyleSheet, et.CanvasMutation, et.Selection, et.MediaInteraction]);
      class nn {
        constructor(e, t, n = Vt) {
          this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scrollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n
        }
        addListeners() {
          const e = (t = () => {
            this._lastMutation = sn()
          }, en || (en = [], (0, i.GS)(L, "open", function(e) {
            return function(...t) {
              if (en) try {
                en.forEach(e => e())
              } catch {}
              return e.apply(L, t)
            }
          })), en.push(t), () => {
            const e = en ? en.indexOf(t) : -1;
            e > -1 && en.splice(e, 1)
          });
          var t;
          this._teardown = () => {
            e(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
          }
        }
        removeListeners() {
          this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
        }
        handleClick(e, t) {
          if (function(e, t) {
              return !rn.includes(e.tagName) || ("INPUT" === e.tagName && !["submit", "button"].includes(e.getAttribute("type") || "") || (!("A" !== e.tagName || !(e.hasAttribute("download") || e.hasAttribute("target") && "_self" !== e.getAttribute("target"))) || !(!t || !e.matches(t))))
            }(t, this._ignoreSelector) || ! function(e) {
              return !(!e.data || "number" != typeof e.data.nodeId || !e.timestamp)
            }(e)) return;
          const n = {
            timestamp: Gt(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t
          };
          this._clicks.some(e => e.node === n.node && Math.abs(e.timestamp - n.timestamp) < 1) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks())
        }
        registerMutation(e = Date.now()) {
          this._lastMutation = Gt(e)
        }
        registerScroll(e = Date.now()) {
          this._lastScroll = Gt(e)
        }
        registerClick(e) {
          const t = Xt(e);
          this._handleMultiClick(t)
        }
        _handleMultiClick(e) {
          this._getClicks(e).forEach(e => {
            e.clickCount++
          })
        }
        _getClicks(e) {
          return this._clicks.filter(t => t.node === e)
        }
        _checkClicks() {
          const e = [],
            t = sn();
          this._clicks.forEach(n => {
            !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= t && e.push(n)
          });
          for (const t of e) {
            const e = this._clicks.indexOf(t);
            e > -1 && (this._generateBreadcrumbs(t), this._clicks.splice(e, 1))
          }
          this._clicks.length && this._scheduleCheckClicks()
        }
        _generateBreadcrumbs(e) {
          const t = this._replay,
            n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout,
            r = e.mutationAfter && e.mutationAfter <= this._threshold,
            s = !n && !r,
            {
              clickCount: o,
              clickBreadcrumb: i
            } = e;
          if (s) {
            const n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
              r = n < 1e3 * this._timeout ? "mutation" : "timeout",
              s = {
                type: "default",
                message: i.message,
                timestamp: i.timestamp,
                category: "ui.slowClickDetected",
                data: {
                  ...i.data,
                  url: L.location.href,
                  route: t.getCurrentRoute(),
                  timeAfterClickMs: n,
                  endReason: r,
                  clickCount: o || 1
                }
              };
            return void this._addBreadcrumbEvent(t, s)
          }
          if (o > 1) {
            const e = {
              type: "default",
              message: i.message,
              timestamp: i.timestamp,
              category: "ui.multiClick",
              data: {
                ...i.data,
                url: L.location.href,
                route: t.getCurrentRoute(),
                clickCount: o,
                metric: !0
              }
            };
            this._addBreadcrumbEvent(t, e)
          }
        }
        _scheduleCheckClicks() {
          this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = (0, C.wg)(() => this._checkClicks(), 1e3)
        }
      }
      const rn = ["A", "BUTTON", "INPUT"];

      function sn() {
        return Date.now() / 1e3
      }

      function on(e) {
        return {
          timestamp: Date.now() / 1e3,
          type: "default",
          ...e
        }
      }
      var an = (e => (e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e))(an || {});
      const cn = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);

      function un(e) {
        const t = {};
        !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]);
        for (const n in e)
          if (cn.has(n)) {
            let r = n;
            "data-testid" !== n && "data-test-id" !== n || (r = "testId"), t[r] = e[n]
          } return t
      }

      function ln(e, t) {
        const n = Wt.mirror.getId(e),
          r = n && Wt.mirror.getNode(n),
          s = r && Wt.mirror.getMeta(r),
          o = s && function(e) {
            return e.type === an.Element
          }(s) ? s : null;
        return {
          message: t,
          data: o ? {
            nodeId: n,
            node: {
              id: n,
              tagName: o.tagName,
              textContent: Array.from(o.childNodes).map(e => e.type === an.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
              attributes: un(o.attributes)
            }
          } : {}
        }
      }
      const dn = {
        resource: function(e) {
          const {
            entryType: t,
            initiatorType: n,
            name: r,
            responseEnd: s,
            startTime: o,
            decodedBodySize: i,
            encodedBodySize: a,
            responseStatus: c,
            transferSize: u
          } = e;
          return ["fetch", "xmlhttprequest"].includes(n) ? null : {
            type: `${t}.${n}`,
            start: mn(o),
            end: mn(s),
            name: r,
            data: {
              size: u,
              statusCode: c,
              decodedBodySize: i,
              encodedBodySize: a
            }
          }
        },
        paint: function(e) {
          const {
            duration: t,
            entryType: n,
            name: r,
            startTime: s
          } = e, o = mn(s);
          return {
            type: n,
            name: r,
            start: o,
            end: o + t,
            data: void 0
          }
        },
        navigation: function(e) {
          const {
            entryType: t,
            name: n,
            decodedBodySize: r,
            duration: s,
            domComplete: o,
            encodedBodySize: i,
            domContentLoadedEventStart: a,
            domContentLoadedEventEnd: c,
            domInteractive: u,
            loadEventStart: l,
            loadEventEnd: d,
            redirectCount: p,
            startTime: h,
            transferSize: m,
            type: f
          } = e;
          return 0 === s ? null : {
            type: `${t}.${f}`,
            start: mn(h),
            end: mn(o),
            name: n,
            data: {
              size: m,
              decodedBodySize: r,
              encodedBodySize: i,
              duration: s,
              domInteractive: u,
              domContentLoadedEventStart: a,
              domContentLoadedEventEnd: c,
              loadEventStart: l,
              loadEventEnd: d,
              domComplete: o,
              redirectCount: p
            }
          }
        }
      };

      function pn(e, t) {
        return ({
          metric: n
        }) => {
          t.replayPerformanceEntries.push(e(n))
        }
      }

      function hn(e) {
        const t = dn[e.entryType];
        return t ? t(e) : null
      }

      function mn(e) {
        return (((0, a.k3)() || L.performance.timeOrigin) + e) / 1e3
      }

      function fn(e) {
        const t = e.entries[e.entries.length - 1];
        return _n(e, "largest-contentful-paint", t?.element ? [t.element] : void 0)
      }

      function gn(e) {
        return void 0 !== e.sources
      }

      function yn(e) {
        const t = [],
          n = [];
        for (const r of e.entries)
          if (gn(r)) {
            const e = [];
            for (const t of r.sources)
              if (t.node) {
                n.push(t.node);
                const r = Wt.mirror.getId(t.node);
                r && e.push(r)
              } t.push({
              value: r.value,
              nodeIds: e.length ? e : void 0
            })
          } return _n(e, "cumulative-layout-shift", n, t)
      }

      function vn(e) {
        const t = e.entries[e.entries.length - 1];
        return _n(e, "interaction-to-next-paint", t?.target ? [t.target] : void 0)
      }

      function _n(e, t, n, r) {
        const s = e.value,
          o = e.rating,
          i = mn(s);
        return {
          type: "web-vital",
          name: t,
          start: i,
          end: i,
          data: {
            value: s,
            size: s,
            rating: o,
            nodeIds: n ? n.map(e => Wt.mirror.getId(e)) : void 0,
            attributions: r
          }
        }
      }
      const Sn = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        bn = ["log", "warn", "error"],
        kn = "[Replay] ";

      function wn(e, t = "info") {
        (0, c.Z)({
          category: "console",
          data: {
            logger: "replay"
          },
          level: t,
          message: `${kn}${e}`
        }, {
          level: t
        })
      }
      const Tn = function() {
        let e = !1,
          t = !1;
        const n = {
          exception: () => {},
          infoTick: () => {},
          setConfig: n => {
            e = !!n.captureExceptions, t = !!n.traceInternals
          }
        };
        return Sn ? (bn.forEach(e => {
          n[e] = (...n) => {
            u.Yz[e](kn, ...n), t && wn(n.join(""), (0, l.t)(e))
          }
        }), n.exception = (r, ...s) => {
          s.length && n.error && n.error(...s), u.Yz.error(kn, r), e ? (0, d.Cp)(r, {
            mechanism: {
              handled: !0,
              type: "auto.function.replay.debug"
            }
          }) : t && wn(r, "error")
        }, n.infoTick = (...e) => {
          u.Yz.log(kn, ...e), t && setTimeout(() => wn(e[0]), 0)
        }) : bn.forEach(e => {
          n[e] = () => {}
        }), n
      }();
      class En extends Error {
        constructor() {
          super("Event buffer exceeded maximum size of 20000000.")
        }
      }
      class In {
        constructor() {
          this.events = [], this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
        }
        get hasEvents() {
          return this.events.length > 0
        }
        get type() {
          return "sync"
        }
        destroy() {
          this.events = []
        }
        async addEvent(e) {
          const t = JSON.stringify(e).length;
          if (this._totalSize += t, this._totalSize > $) throw new En;
          this.events.push(e)
        }
        finish() {
          return new Promise(e => {
            const t = this.events;
            this.clear(), e(JSON.stringify(t))
          })
        }
        clear() {
          this.events = [], this._totalSize = 0, this.hasCheckout = !1
        }
        getEarliestTimestamp() {
          let e = null;
          for (const {
              timestamp: t
            }
            of this.events)(null === e || t < e) && (e = t);
          return null === e ? e : Jt(e)
        }
      }
      class Cn {
        constructor(e) {
          this._onMessage = ({
            data: e
          }) => {
            const t = e;
            if ("number" != typeof t.id) return;
            const n = this._pending.get(t.id);
            if (n && n.method === t.method) {
              if (this._pending.delete(t.id), !t.success) return Sn && Tn.error("Error in compression worker: ", t.response), void n.reject(new Error("Error in compression worker"));
              n.resolve(t.response)
            }
          }, this._worker = e, this._id = 0, this._pending = new Map, this._worker.addEventListener("message", this._onMessage)
        }
        ensureReady() {
          return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((e, t) => {
            this._worker.addEventListener("message", ({
              data: n
            }) => {
              n.success ? e() : (Sn && Tn.warn("Received worker message with unsuccessful status", n), t(new Error("Received worker message with unsuccessful status")))
            }, {
              once: !0
            }), this._worker.addEventListener("error", e => {
              Sn && Tn.warn("Failed to load Replay compression worker", e), t(new Error(`Failed to load Replay compression worker: ${e instanceof ErrorEvent&&e.message?e.message:"Unknown error. This can happen due to CSP policy restrictions, network issues, or the worker script failing to load."}`))
            }, {
              once: !0
            })
          })), this._ensureReadyPromise
        }
        destroy() {
          Sn && Tn.log("Destroying compression worker"), this._worker.removeEventListener("message", this._onMessage), this._pending.forEach(e => e.reject(new Error("Worker destroyed"))), this._pending.clear(), this._worker.terminate()
        }
        postMessage(e, t) {
          const n = this._getAndIncrementId();
          return new Promise((r, s) => {
            this._pending.set(n, {
              method: e,
              resolve: r,
              reject: s
            });
            try {
              this._worker.postMessage({
                id: n,
                method: e,
                arg: t
              })
            } catch (e) {
              this._pending.delete(n), s(e)
            }
          })
        }
        _getAndIncrementId() {
          return this._id++
        }
      }
      class xn {
        constructor(e) {
          this._worker = new Cn(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
        }
        get hasEvents() {
          return !!this._earliestTimestamp
        }
        get type() {
          return "worker"
        }
        ensureReady() {
          return this._worker.ensureReady()
        }
        destroy() {
          this._worker.destroy()
        }
        addEvent(e) {
          const t = Jt(e.timestamp);
          (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
          const n = JSON.stringify(e);
          return this._totalSize += n.length, this._totalSize > $ ? Promise.reject(new En) : this._sendEventToWorker(n)
        }
        finish() {
          return this._finishRequest()
        }
        clear() {
          this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, e => {
            Sn && Tn.exception(e, 'Sending "clear" message to worker failed', e)
          })
        }
        getEarliestTimestamp() {
          return this._earliestTimestamp
        }
        _sendEventToWorker(e) {
          return this._worker.postMessage("addEvent", e)
        }
        async _finishRequest() {
          const e = await this._worker.postMessage("finish");
          return this._earliestTimestamp = null, this._totalSize = 0, e
        }
      }
      class Mn {
        constructor(e) {
          this._fallback = new In, this._compression = new xn(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
        }
        get waitForCheckout() {
          return this._used.waitForCheckout
        }
        get type() {
          return this._used.type
        }
        get hasEvents() {
          return this._used.hasEvents
        }
        get hasCheckout() {
          return this._used.hasCheckout
        }
        set hasCheckout(e) {
          this._used.hasCheckout = e
        }
        set waitForCheckout(e) {
          this._used.waitForCheckout = e
        }
        destroy() {
          this._fallback.destroy(), this._compression.destroy()
        }
        clear() {
          return this._used.clear()
        }
        getEarliestTimestamp() {
          return this._used.getEarliestTimestamp()
        }
        addEvent(e) {
          return this._used.addEvent(e)
        }
        async finish() {
          return await this.ensureWorkerIsLoaded(), this._used.finish()
        }
        ensureWorkerIsLoaded() {
          return this._ensureWorkerIsLoadedPromise
        }
        async _ensureWorkerIsLoaded() {
          try {
            await this._compression.ensureReady()
          } catch (e) {
            return void(Sn && Tn.exception(e, "Failed to load the compression worker, falling back to simple buffer"))
          }
          await this._switchToCompressionWorker()
        }
        async _switchToCompressionWorker() {
          const {
            events: e,
            hasCheckout: t,
            waitForCheckout: n
          } = this._fallback, r = [];
          for (const t of e) r.push(this._compression.addEvent(t));
          this._compression.hasCheckout = t, this._compression.waitForCheckout = n, this._used = this._compression;
          try {
            await Promise.all(r), this._fallback.clear()
          } catch (e) {
            Sn && Tn.exception(e, "Failed to add events when switching buffers.")
          }
        }
      }

      function Rn() {
        try {
          return "sessionStorage" in L && !!L.sessionStorage
        } catch {
          return !1
        }
      }

      function On(e) {
        return void 0 !== e && Math.random() < e
      }

      function An(e) {
        if (Rn()) try {
          L.sessionStorage.setItem(N, JSON.stringify(e))
        } catch {}
      }

      function Dn(e) {
        const t = Date.now();
        return {
          id: e.id || (0, p.eJ)(),
          started: e.started || t,
          lastActivity: e.lastActivity || t,
          segmentId: e.segmentId || 0,
          sampled: e.sampled,
          previousSessionId: e.previousSessionId,
          dirty: e.dirty || !1
        }
      }

      function Ln({
        sessionSampleRate: e,
        allowBuffering: t,
        stickySession: n = !1
      }, {
        previousSessionId: r
      } = {}) {
        const s = function(e, t) {
            return On(e) ? "session" : !!t && "buffer"
          }(e, t),
          o = Dn({
            sampled: s,
            previousSessionId: r
          });
        return n && An(o), o
      }

      function Nn(e, t, n = +new Date) {
        return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
      }

      function Pn(e, {
        sessionIdleExpire: t,
        maxReplayDuration: n
      }) {
        return !! function(e, {
          maxReplayDuration: t,
          sessionIdleExpire: n,
          targetTime: r = Date.now()
        }) {
          return Nn(e.started, t, r) || Nn(e.lastActivity, n, r)
        }(e, {
          sessionIdleExpire: t,
          maxReplayDuration: n
        }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
      }

      function zn({
        sessionIdleExpire: e,
        maxReplayDuration: t,
        previousSessionId: n
      }, r) {
        const s = r.stickySession && function() {
          if (!Rn()) return null;
          try {
            const e = L.sessionStorage.getItem(N);
            if (!e) return null;
            const t = JSON.parse(e);
            return Sn && Tn.infoTick("Loading existing session"), Dn(t)
          } catch {
            return null
          }
        }();
        return s ? Pn(s, {
          sessionIdleExpire: e,
          maxReplayDuration: t
        }) ? (Sn && Tn.infoTick("Session in sessionStorage is expired, creating new one..."), Ln(r, {
          previousSessionId: s.id
        })) : s : (Sn && Tn.infoTick("Creating new session"), Ln(r, {
          previousSessionId: n
        }))
      }

      function jn(e, t, n) {
        return !!Fn(e, t) && ($n(e, t, n), !0)
      }
      async function $n(e, t, n) {
        const {
          eventBuffer: r
        } = e;
        if (!r || r.waitForCheckout && !n) return null;
        const s = "buffer" === e.recordingMode;
        try {
          n && s && r.clear(), n && (r.hasCheckout = !0, r.waitForCheckout = !1);
          const o = function(e, t) {
            try {
              if ("function" == typeof t && function(e) {
                  return e.type === Ze.Custom
                }(e)) return t(e)
            } catch (e) {
              return Sn && Tn.exception(e, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."), null
            }
            return e
          }(t, e.getOptions().beforeAddRecordingEvent);
          if (!o) return;
          return await r.addEvent(o)
        } catch (t) {
          if (!e.isEnabled()) return e.handleException(t), null;
          const n = t && t instanceof En,
            o = n ? "eventBufferOverflow" : "eventBufferError",
            i = (0, h.KU)();
          if (i) {
            const e = n ? "buffer_overflow" : "internal_sdk_error";
            i.recordDroppedEvent(e, "replay")
          }
          if (n && s) return r.clear(), r.waitForCheckout = !0, null;
          e.handleException(t), await e.stop({
            reason: o
          })
        }
      }

      function Fn(e, t) {
        if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
        const n = Jt(t.timestamp);
        return !(n + e.timeouts.sessionIdlePause < Date.now() || n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration && (Sn && Tn.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`), 1))
      }

      function Bn(e, t, n) {
        const r = e.getContext();
        t && r.traceIds.size < 100 && r.traceIds.add(t), n && r.segmentNames.size < 100 && r.segmentNames.add(n)
      }

      function Un(e) {
        return !e.type
      }

      function qn(e) {
        return "transaction" === e.type
      }

      function Hn(e) {
        return "feedback" === e.type
      }

      function Wn(e) {
        return !!e.category
      }

      function Yn() {
        const e = (0, h.o5)().getPropagationContext().dsc;
        e && delete e.replay_id;
        const t = (0, f.Bk)();
        t && delete(0, g.k1)(t).replay_id
      }

      function Kn(e) {
        const t = (0, h.o5)().getPropagationContext().dsc;
        t && (t.replay_id = e);
        const n = (0, f.Bk)();
        n && ((0, g.k1)(n).replay_id = e)
      }

      function Jn(e, t) {
        return t.map(({
          type: t,
          start: n,
          end: r,
          name: s,
          data: o
        }) => {
          const i = e.throttledAddEvent({
            type: Ze.Custom,
            timestamp: n,
            data: {
              tag: "performanceSpan",
              payload: {
                op: t,
                description: s,
                startTimestamp: n,
                endTimestamp: r,
                data: o
              }
            }
          });
          return "string" == typeof i ? Promise.resolve(null) : i
        })
      }

      function Gn(e, t) {
        e.isEnabled() && null !== t && (function(e, t) {
          return (!Sn || !e.getOptions()._experiments.traceInternals) && function(e, t) {
            const n = t?.getDsn(),
              r = t?.getOptions().tunnel;
            return function(e, t) {
              const n = (0, y.kg)(e);
              return !(!n || (0, y.nt)(n)) && !!t && ((r = n.hostname) === (s = t.host) || s.length > 0 && r.endsWith(`.${s}`)) && /(^|&|\?)sentry_key=/.test(n.search);
              var r, s
            }(e, n) || function(e, t) {
              return !!t && v(e) === v(t)
            }(e, r)
          }(t, (0, h.KU)())
        }(e, t.name) || e.addUpdate(() => (Jn(e, [t]), !0)))
      }

      function Vn(e) {
        if (!e) return;
        const t = new TextEncoder;
        try {
          if ("string" == typeof e) return t.encode(e).length;
          if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
          if (e instanceof FormData) {
            const n = (0, R.P4)(e);
            return t.encode(n).length
          }
          if (e instanceof Blob) return e.size;
          if (e instanceof ArrayBuffer) return e.byteLength
        } catch {}
      }

      function Xn(e) {
        if (!e) return;
        const t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t
      }

      function Qn(e, t) {
        if (!e) return {
          headers: {},
          size: void 0,
          _meta: {
            warnings: [t]
          }
        };
        const n = {
            ...e._meta
          },
          r = n.warnings || [];
        return n.warnings = [...r, t], e._meta = n, e
      }

      function Zn(e, t) {
        if (!t) return null;
        const {
          startTimestamp: n,
          endTimestamp: r,
          url: s,
          method: o,
          statusCode: i,
          request: a,
          response: c
        } = t;
        return {
          type: e,
          start: n / 1e3,
          end: r / 1e3,
          name: s,
          data: {
            method: o,
            statusCode: i,
            request: a,
            response: c
          }
        }
      }

      function er(e) {
        return {
          headers: {},
          size: e,
          _meta: {
            warnings: ["URL_SKIPPED"]
          }
        }
      }

      function tr(e, t, n) {
        if (!t && 0 === Object.keys(e).length) return;
        if (!t) return {
          headers: e
        };
        if (!n) return {
          headers: e,
          size: t
        };
        const r = {
            headers: e,
            size: t
          },
          {
            body: s,
            warnings: o
          } = function(e) {
            if (!e || "string" != typeof e) return {
              body: e
            };
            const t = e.length > z,
              n = function(e) {
                const t = e[0],
                  n = e[e.length - 1];
                return "[" === t && "]" === n || "{" === t && "}" === n
              }(e);
            if (t) {
              const t = e.slice(0, z);
              return n ? {
                body: t,
                warnings: ["MAYBE_JSON_TRUNCATED"]
              } : {
                body: `${t}…`,
                warnings: ["TEXT_TRUNCATED"]
              }
            }
            if (n) try {
              return {
                body: JSON.parse(e)
              }
            } catch {}
            return {
              body: e
            }
          }(n);
        return r.body = s, o?.length && (r._meta = {
          warnings: o
        }), r
      }

      function nr(e, t) {
        return Object.entries(e).reduce((n, [r, s]) => {
          const o = r.toLowerCase();
          return t.includes(o) && e[r] && (n[o] = s), n
        }, {})
      }

      function rr(e, t) {
        const n = function(e, t = L.document.baseURI) {
          if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(L.location.origin)) return e;
          const n = new URL(e, t);
          if (n.origin !== new URL(t).origin) return e;
          const r = n.href;
          return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
        }(e);
        return (0, _.Xr)(n, t)
      }

      function sr(e, t) {
        const n = {};
        return t.forEach(t => {
          e.get(t) && (n[t] = e.get(t))
        }), n
      }

      function or(e, t) {
        if (!e) return {};
        const n = e.headers;
        return n ? n instanceof Headers ? sr(n, t) : Array.isArray(n) ? {} : nr(n, t) : {}
      }

      function ir(e) {
        const t = (0, h.KU)();
        try {
          const {
            networkDetailAllowUrls: n,
            networkDetailDenyUrls: r,
            networkCaptureBodies: s,
            networkRequestHeaders: i,
            networkResponseHeaders: a
          } = e.getOptions(), c = {
            replay: e,
            networkDetailAllowUrls: n,
            networkDetailDenyUrls: r,
            networkCaptureBodies: s,
            networkRequestHeaders: i,
            networkResponseHeaders: a
          };
          t && t.on("beforeAddBreadcrumb", (e, t) => function(e, t, n) {
            if (t.data) try {
              (function(e) {
                return "xhr" === e.category
              })(t) && function(e) {
                return e?.xhr
              }(n) && (function(e, t) {
                const {
                  xhr: n,
                  input: r
                } = t;
                if (!n) return;
                const s = Vn(r),
                  i = n.getResponseHeader("content-length") ? Xn(n.getResponseHeader("content-length")) : function(e, t) {
                    try {
                      return Vn("json" === t && (0, o.Z4)(e) ? JSON.stringify(e) : e)
                    } catch {
                      return
                    }
                  }(n.response, n.responseType);
                void 0 !== s && (e.data.request_body_size = s), void 0 !== i && (e.data.response_body_size = i)
              }(t, n), async function(e, t, n) {
                try {
                  const r = function(e, t, n) {
                      const r = Date.now(),
                        {
                          startTimestamp: s = r,
                          endTimestamp: i = r,
                          input: a,
                          xhr: c
                        } = t,
                        {
                          url: u,
                          method: l,
                          status_code: d = 0,
                          request_body_size: p,
                          response_body_size: h
                        } = e.data;
                      if (!u) return null;
                      if (!c || !rr(u, n.networkDetailAllowUrls) || rr(u, n.networkDetailDenyUrls)) return {
                        startTimestamp: s,
                        endTimestamp: i,
                        url: u,
                        method: l,
                        statusCode: d,
                        request: er(p),
                        response: er(h)
                      };
                      const m = c[O.Er],
                        f = m ? nr(m.request_headers, n.networkRequestHeaders) : {},
                        g = nr((0, R.ti)(c), n.networkResponseHeaders),
                        [y, v] = n.networkCaptureBodies ? (0, R.sY)(a, Tn) : [void 0],
                        [_, S] = n.networkCaptureBodies ? function(e) {
                          const t = [];
                          try {
                            return [e.responseText]
                          } catch (e) {
                            t.push(e)
                          }
                          try {
                            return function(e, t) {
                              try {
                                if ("string" == typeof e) return [e];
                                if (e instanceof Document) return [e.body.outerHTML];
                                if ("json" === t && (0, o.Z4)(e)) return [JSON.stringify(e)];
                                if (!e) return [void 0]
                              } catch (t) {
                                return Sn && Tn.exception(t, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
                              }
                              return Sn && Tn.log("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
                            }(e.response, e.responseType)
                          } catch (e) {
                            t.push(e)
                          }
                          return Sn && Tn.warn("Failed to get xhr response body", ...t), [void 0]
                        }(c) : [void 0],
                        b = tr(f, p, y),
                        k = tr(g, h, _);
                      return {
                        startTimestamp: s,
                        endTimestamp: i,
                        url: u,
                        method: l,
                        statusCode: d,
                        request: v ? Qn(b, v) : b,
                        response: S ? Qn(k, S) : k
                      }
                    }(e, t, n),
                    s = Zn("resource.xhr", r);
                  Gn(n.replay, s)
                } catch (e) {
                  Sn && Tn.exception(e, "Failed to capture xhr breadcrumb")
                }
              }(t, n, e)),
              function(e) {
                return "fetch" === e.category
              }(t) && function(e) {
                return void 0 !== e?.input
              }(n) && (function(e, t) {
                const {
                  input: n,
                  response: r
                } = t, s = Vn(n ? (0, R.Gv)(n) : void 0), o = r ? Xn(r.headers.get("content-length")) : void 0;
                void 0 !== s && (e.data.request_body_size = s), void 0 !== o && (e.data.response_body_size = o)
              }(t, n), async function(e, t, n) {
                try {
                  const r = await async function(e, t, n) {
                    const r = Date.now(),
                      {
                        startTimestamp: s = r,
                        endTimestamp: o = r
                      } = t,
                      {
                        url: i,
                        method: a,
                        status_code: c = 0,
                        request_body_size: u,
                        response_body_size: l
                      } = e.data,
                      d = rr(i, n.networkDetailAllowUrls) && !rr(i, n.networkDetailDenyUrls),
                      p = d ? function({
                        networkCaptureBodies: e,
                        networkRequestHeaders: t
                      }, n, r) {
                        const s = n ? (i = t, 1 === (o = n).length && "string" != typeof o[0] ? or(o[0], i) : 2 === o.length ? or(o[1], i) : {}) : {};
                        var o, i;
                        if (!e) return tr(s, r, void 0);
                        const a = (0, R.Gv)(n),
                          [c, u] = (0, R.sY)(a, Tn),
                          l = tr(s, r, c);
                        return u ? Qn(l, u) : l
                      }(n, t.input, u) : er(u),
                      h = await async function(e, {
                        networkCaptureBodies: t,
                        networkResponseHeaders: n
                      }, r, s) {
                        if (!e && void 0 !== s) return er(s);
                        const o = r ? sr(r.headers, n) : {};
                        if (!r || !t && void 0 !== s) return tr(o, s, void 0);
                        const [i, a] = await async function(e) {
                          const t = function(e) {
                            try {
                              return e.clone()
                            } catch (e) {
                              Sn && Tn.exception(e, "Failed to clone response body")
                            }
                          }(e);
                          if (!t) return [void 0, "BODY_PARSE_ERROR"];
                          try {
                            const e = await
                            function(e) {
                              return new Promise((t, n) => {
                                const r = (0, C.wg)(() => n(new Error("Timeout while trying to read response body")), 500);
                                (async function(e) {
                                  return await e.text()
                                })(e).then(e => t(e), e => n(e)).finally(() => clearTimeout(r))
                              })
                            }(t);
                            return [e]
                          } catch (e) {
                            return e instanceof Error && e.message.indexOf("Timeout") > -1 ? (Sn && Tn.warn("Parsing text body from response timed out"), [void 0, "BODY_PARSE_TIMEOUT"]) : (Sn && Tn.exception(e, "Failed to get text body from response"), [void 0, "BODY_PARSE_ERROR"])
                          }
                        }(r), c = function(e, {
                          networkCaptureBodies: t,
                          responseBodySize: n,
                          captureDetails: r,
                          headers: s
                        }) {
                          try {
                            const o = e?.length && void 0 === n ? Vn(e) : n;
                            return r ? tr(s, o, t ? e : void 0) : er(o)
                          } catch (e) {
                            return Sn && Tn.exception(e, "Failed to serialize response body"), tr(s, n, void 0)
                          }
                        }(i, {
                          networkCaptureBodies: t,
                          responseBodySize: s,
                          captureDetails: e,
                          headers: o
                        });
                        return a ? Qn(c, a) : c
                      }(d, n, t.response, l);
                    return {
                      startTimestamp: s,
                      endTimestamp: o,
                      url: i,
                      method: a,
                      statusCode: c,
                      request: p,
                      response: h
                    }
                  }(e, t, n), s = Zn("resource.fetch", r);
                  Gn(n.replay, s)
                } catch (e) {
                  Sn && Tn.exception(e, "Failed to capture fetch breadcrumb")
                }
              }(t, n, e))
            } catch (e) {
              Sn && Tn.exception(e, "Error when enriching network breadcrumb")
            }
          }(c, e, t))
        } catch {}
      }

      function ar(e) {
        const t = (0, h.KU)();
        (0, A.i)((e => t => {
          if (!e.isEnabled()) return;
          const n = function(e) {
            const {
              target: t,
              message: n
            } = function(e) {
              const t = "click" === e.name;
              let n, r = null;
              try {
                r = t ? Qt(e.event) : Zt(e.event), n = (0, x.H)(r, {
                  maxStringLength: 200
                }) || "<unknown>"
              } catch {
                n = "<unknown>"
              }
              return {
                target: r,
                message: n
              }
            }(e);
            return on({
              category: `ui.${e.name}`,
              ...ln(t, n)
            })
          }(t);
          if (!n) return;
          const r = "click" === t.name,
            s = r ? t.event : void 0;
          var o, i, a;
          !(r && e.clickDetector && s?.target) || s.altKey || s.metaKey || s.ctrlKey || s.shiftKey || (o = e.clickDetector, i = n, a = Qt(t.event), o.handleClick(i, a)), Vt(e, n)
        })(e)), (0, D._)(function(e) {
          return t => {
            if (!e.isEnabled()) return;
            const n = function(e) {
              const {
                from: t,
                to: n
              } = e, r = Date.now() / 1e3;
              return {
                type: "navigation.push",
                start: r,
                end: r,
                name: n,
                data: {
                  previous: t
                }
              }
            }(t);
            null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (Jn(e, [n]), !1)))
          }
        }(e)),
        function(e) {
          const t = (0, h.KU)();
          t && t.on("beforeAddBreadcrumb", t => function(e, t) {
            if (!e.isEnabled() || !Wn(t)) return;
            const n = function(e) {
              return !Wn(e) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.") ? null : "console" === e.category ? function(e) {
                const t = e.data?.arguments;
                if (!Array.isArray(t) || 0 === t.length) return on(e);
                let n = !1;
                const r = t.map(e => {
                  if (!e) return e;
                  if ("string" == typeof e) return e.length > j ? (n = !0, `${e.slice(0,j)}…`) : e;
                  if ("object" == typeof e) try {
                    const t = (0, s.S8)(e, 7);
                    return JSON.stringify(t).length > j ? (n = !0, `${JSON.stringify(t,null,2).slice(0,j)}…`) : t
                  } catch {}
                  return e
                });
                return on({
                  ...e,
                  data: {
                    ...e.data,
                    arguments: r,
                    ...n ? {
                      _meta: {
                        warnings: ["CONSOLE_ARG_TRUNCATED"]
                      }
                    } : {}
                  }
                })
              }(e) : on(e)
            }(t);
            n && Vt(e, n)
          }(e, t))
        }(e), ir(e);
        const n = function(e) {
          return Object.assign((t, n) => {
            if (e.session && Pn(e.session, {
                maxReplayDuration: e.getOptions().maxReplayDuration,
                sessionIdleExpire: e.timeouts.sessionIdleExpire
              }) && Yn(), !e.isEnabled() || e.isPaused()) return t;
            if (function(e) {
                return "replay_event" === e.type
              }(t)) return delete t.breadcrumbs, t;
            if (!Un(t) && !qn(t) && !Hn(t)) return t;
            if (!e.checkAndHandleExpiredSession()) return Yn(), t;
            if (Hn(t)) return e.flush(), t.contexts.feedback.replay_id = e.getSessionId(),
              function(e, t) {
                e.triggerUserActivity(), e.addUpdate(() => !t.timestamp || (e.throttledAddEvent({
                  type: Ze.Custom,
                  timestamp: 1e3 * t.timestamp,
                  data: {
                    tag: "breadcrumb",
                    payload: {
                      timestamp: t.timestamp,
                      type: "default",
                      category: "sentry.feedback",
                      data: {
                        feedbackId: t.event_id
                      }
                    }
                  }
                }), !1))
              }(e, t), t;
            if (function(e, t) {
                return !(e.type || !e.exception?.values?.length || !t.originalException?.__rrweb__)
              }(t, n) && !e.getOptions()._experiments.captureExceptions) return Sn && Tn.log("Ignoring error from rrweb internals", t), null;
            const r = function(e, t) {
              return "buffer" === e.recordingMode && t.message !== P && !(!t.exception || t.type) && On(e.getOptions().errorSampleRate)
            }(e, t);
            if ((r || "session" === e.recordingMode) && (t.tags = {
                ...t.tags,
                replayId: e.getSessionId()
              }), r && "buffer" === e.recordingMode && "buffer" === e.session?.sampled) {
              const t = e.session;
              t.dirty = !0, e.getOptions().stickySession && An(t)
            }
            return t
          }, {
            id: "Replay"
          })
        }(e);
        (0, d.SA)(n), t && (t.on("beforeSendEvent", function(e) {
          return t => {
            e.isEnabled() && Un(t) && function(e, t) {
              const n = t.exception?.values?.[0]?.value;
              "string" == typeof n && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && Vt(e, on({
                category: "replay.hydrate-error",
                data: {
                  url: (0, m.$N)()
                }
              }))
            }(e, t)
          }
        }(e)), t.on("afterSendEvent", function(e) {
          return (t, n) => {
            if (!e.isEnabled() || !Un(t) && !qn(t)) return;
            const r = n.statusCode;
            !r || r < 200 || r >= 300 || (qn(t) ? function(e, t) {
              Bn(e, t.contexts?.trace?.trace_id, t.transaction)
            }(e, t) : function(e, t) {
              const n = e.getContext();
              if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags?.replayId) return;
              const {
                beforeErrorSampling: r
              } = e.getOptions();
              ("function" != typeof r || r(t)) && (0, C.wg)(async () => {
                try {
                  await e.sendBufferedReplayOrFlush()
                } catch (t) {
                  e.handleException(t)
                }
              })
            }(e, t))
          }
        }(e)), t.on("createDsc", t => {
          const n = e.getSessionId();
          n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
        }), t.on("processSegmentSpan", function(e) {
          return t => {
            e.isEnabled() && Bn(e, t.trace_id, t.name || void 0)
          }
        }(e)), t.on("spanStart", t => {
          e.lastActiveSpan = t
        }), t.on("spanEnd", t => {
          e.lastActiveSpan = t
        }), t.on("beforeSendFeedback", async (t, n) => {
          const r = e.getSessionId();
          n?.includeReplay && e.isEnabled() && r && t.contexts?.feedback && ("api" === t.contexts.feedback.source && await e.sendBufferedReplayOrFlush(), t.contexts.feedback.replay_id = r)
        }), t.on("openFeedbackWidget", async () => {
          await e.sendBufferedReplayOrFlush()
        }))
      }

      function cr(e) {
        const {
          jsHeapSizeLimit: t,
          totalJSHeapSize: n,
          usedJSHeapSize: r
        } = e, s = Date.now() / 1e3;
        return {
          type: "memory",
          name: "memory",
          start: s,
          end: s,
          data: {
            memory: {
              jsHeapSizeLimit: t,
              totalJSHeapSize: n,
              usedJSHeapSize: r
            }
          }
        }
      }
      const ur = r.O.navigator;

      function lr(e) {
        let t = !1;
        return (n, r) => {
          try {
            if (!e.checkAndHandleExpiredSession()) return void(Sn && Tn.warn("Received replay event after session expired."));
            const s = r || !t;
            t = !0,
              function(e) {
                const t = e.data;
                if (e.type === Ze.IncrementalSnapshot && t && "object" == typeof t && "source" in t && t.source === et.Mutation && "attributes" in t && Array.isArray(t.attributes))
                  for (const e of t.attributes) {
                    const t = Wt.mirror.getNode(e.id),
                      n = t && Wt.mirror.getMeta(t);
                    if (n?.type === an.Element)
                      for (const [t, r] of Object.entries(e.attributes)) null === r ? delete n.attributes[t] : n.attributes[t] = r
                  }
              }(n), e.clickDetector && function(e, t) {
                try {
                  if (! function(e) {
                      return 3 === e.type
                    }(t)) return;
                  const {
                    source: n
                  } = t.data;
                  if (tn.has(n) && e.registerMutation(t.timestamp), n === et.Scroll && e.registerScroll(t.timestamp), function(e) {
                      return e.data.source === et.MouseInteraction
                    }(t)) {
                    const {
                      type: n,
                      id: r
                    } = t.data, s = Wt.mirror.getNode(r);
                    s instanceof HTMLElement && n === tt.Click && e.registerClick(s)
                  }
                } catch {}
              }(e.clickDetector, n), e.addUpdate(() => {
                if ("buffer" === e.recordingMode && s && e.setInitialState(), !jn(e, n, s)) return !0;
                if (!s) return !1;
                const t = e.session;
                if (function(e, t) {
                    t && 0 === e.session?.segmentId && jn(e, function(e) {
                      const t = e.getOptions();
                      return {
                        type: Ze.Custom,
                        timestamp: Date.now(),
                        data: {
                          tag: "options",
                          payload: {
                            shouldRecordCanvas: e.isRecordingCanvas(),
                            sessionSampleRate: t.sessionSampleRate,
                            errorSampleRate: t.errorSampleRate,
                            useCompressionOption: t.useCompression,
                            blockAllMedia: t.blockAllMedia,
                            maskAllText: t.maskAllText,
                            maskAllInputs: t.maskAllInputs,
                            useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                            networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                            networkCaptureBodies: t.networkCaptureBodies,
                            networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                            networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                          }
                        }
                      }
                    }(e), !1)
                  }(e, s), "buffer" === e.recordingMode && t && e.eventBuffer && !t.dirty) {
                  const n = e.eventBuffer.getEarliestTimestamp();
                  n && (Sn && Tn.log(`Updating session start time to earliest event in buffer to ${new Date(n)}`), t.started = n, e.getOptions().stickySession && An(t))
                }
                return t?.previousSessionId || "session" === e.recordingMode && e.flush(), !0
              })
          } catch (t) {
            e.handleException(t)
          }
        }
      }

      function dr(e, t, n, r) {
        return (0, S.h4)((0, S.n2)(e, (0, S.Cj)(e), r, n), [
          [{
            type: "replay_event"
          }, e],
          [{
            type: "replay_recording",
            length: "string" == typeof t ? (new TextEncoder).encode(t).length : t.length
          }, t]
        ])
      }
      class pr extends Error {
        constructor(e) {
          super(`Transport returned status code ${e}`)
        }
      }
      class hr extends Error {
        constructor(e) {
          super("Rate limit hit"), this.rateLimits = e
        }
      }
      class mr extends Error {
        constructor() {
          super("Session is too long, not sending replay")
        }
      }
      async function fr(e, t = {
        count: 0,
        interval: 5e3
      }) {
        const {
          recordingData: n,
          onError: r
        } = e;
        if (n.length) try {
          return await async function({
            recordingData: e,
            replayId: t,
            segmentId: n,
            eventContext: r,
            timestamp: s,
            session: o
          }) {
            const i = function({
                recordingData: e,
                headers: t
              }) {
                let n;
                const r = `${JSON.stringify(t)}\n`;
                if ("string" == typeof e) n = `${r}${e}`;
                else {
                  const t = (new TextEncoder).encode(r);
                  n = new Uint8Array(t.length + e.length), n.set(t), n.set(e, t.length)
                }
                return n
              }({
                recordingData: e,
                headers: {
                  segment_id: n
                }
              }),
              {
                urls: a,
                errorIds: c,
                traceIds: u,
                segmentNames: l,
                initialTimestamp: d
              } = r,
              p = (0, h.KU)(),
              m = (0, h.o5)(),
              f = p?.getTransport(),
              g = p?.getDsn();
            if (!(p && f && g && o.sampled)) return Promise.resolve({});
            const y = {
                type: "replay_event",
                replay_start_timestamp: d / 1e3,
                timestamp: s / 1e3,
                error_ids: c,
                trace_ids: u,
                segment_names: l,
                urls: a,
                replay_id: t,
                segment_id: n,
                replay_type: o.sampled
              },
              v = await async function({
                client: e,
                scope: t,
                replayId: n,
                event: r
              }) {
                const s = {
                  event_id: n,
                  integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
                };
                e.emit("preprocessEvent", r, s);
                const o = await (0, b.mG)(e.getOptions(), r, s, t, e, (0, h.rm)());
                if (!o) return null;
                e.emit("postprocessEvent", o, s), o.platform = o.platform || "javascript";
                const i = e.getSdkMetadata(),
                  {
                    name: a,
                    version: c,
                    settings: u
                  } = i?.sdk || {};
                return o.sdk = {
                  ...o.sdk,
                  name: a || "sentry.javascript.unknown",
                  version: c || "0.0.0",
                  settings: u
                }, o
              }({
                scope: m,
                client: p,
                replayId: t,
                event: y
              });
            if (!v) return p.recordDroppedEvent("event_processor", "replay"), Sn && Tn.log("An event processor returned `null`, will not send event."), Promise.resolve({});
            delete v.sdkProcessingMetadata;
            const _ = dr(v, i, g, p.getOptions().tunnel);
            let S;
            try {
              S = await f.send(_)
            } catch (e) {
              const t = new Error(P);
              try {
                t.cause = e
              } catch {}
              throw t
            }
            const w = (0, k.wq)({}, S);
            if ((0, k.Jz)(w, "replay")) throw new hr(w);
            if ("number" == typeof S.statusCode && (S.statusCode < 200 || S.statusCode >= 300)) throw new pr(S.statusCode);
            return S
          }(e), !0
        } catch (n) {
          if (n instanceof pr || n instanceof hr) throw n;
          if ((0, d.o)("Replays", {
              _retryCount: t.count
            }), r && r(n), t.count >= 3) {
            const e = new Error(`${P} - max retries exceeded`);
            try {
              e.cause = n
            } catch {}
            throw e
          }
          return t.interval *= ++t.count, new Promise((n, r) => {
            (0, C.wg)(async () => {
              try {
                await fr(e, t), n(!0)
              } catch (e) {
                r(e)
              }
            }, t.interval)
          })
        }
      }
      const gr = "__THROTTLED";
      class yr {
        constructor({
          options: e,
          recordingOptions: t
        }) {
          this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
            sessionIdlePause: 3e5,
            sessionIdleExpire: 9e5
          }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._requiresManualStart = !1, this._hasInitializedCoreListeners = !1, this._context = {
            errorIds: new Set,
            traceIds: new Set,
            segmentNames: new Set,
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: ""
          }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, n) {
            return function(e, t, n) {
              let r, s, o;
              const i = n?.maxWait ? Math.max(n.maxWait, t) : 0,
                a = n?.setTimeoutImpl || setTimeout;

              function c() {
                return u(), r = e(), r
              }

              function u() {
                void 0 !== s && clearTimeout(s), void 0 !== o && clearTimeout(o), s = o = void 0
              }

              function l() {
                return s && clearTimeout(s), s = a(c, t), i && void 0 === o && (o = a(c, i)), r
              }
              return l.cancel = u, l.flush = function() {
                return void 0 !== s || void 0 !== o ? c() : r
              }, l
            }(e, t, {
              ...n,
              setTimeoutImpl: C.wg
            })
          }(() => this._flush(), this._options.flushMinDelay, {
            maxWait: this._options.flushMaxDelay
          }), this._throttledAddEvent = function(e, t, n) {
            const r = new Map;
            let s = !1;
            return (...o) => {
              const i = Math.floor(Date.now() / 1e3);
              if ((e => {
                  const t = e - n;
                  r.forEach((e, n) => {
                    n < t && r.delete(n)
                  })
                })(i), [...r.values()].reduce((e, t) => e + t, 0) >= t) {
                const e = s;
                return s = !0, e ? "__SKIPPED" : gr
              }
              s = !1;
              const a = r.get(i) || 0;
              return r.set(i, a + 1), e(...o)
            }
          }((e, t) => function(e, t, n) {
            return Fn(e, t) ? $n(e, t, n) : Promise.resolve(null)
          }(this, e, t), 300, 5);
          const {
            slowClickTimeout: n,
            slowClickIgnoreSelectors: r
          } = this.getOptions(), s = n ? {
            threshold: Math.min(3e3, n),
            timeout: n,
            scrollTimeout: 300,
            ignoreSelector: r ? r.join(",") : ""
          } : void 0;
          if (s && (this.clickDetector = new nn(this, s)), Sn) {
            const t = e._experiments;
            Tn.setConfig({
              captureExceptions: !!t.captureExceptions,
              traceInternals: !!t.traceInternals
            })
          }
          this._handleVisibilityChange = () => {
            "visible" === L.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
          }, this._handleWindowBlur = () => {
            const e = on({
              category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(e)
          }, this._handleWindowFocus = () => {
            const e = on({
              category: "ui.focus"
            });
            this._doChangeToForegroundTasks(e)
          }, this._handleKeyboardEvent = e => {
            ! function(e, t) {
              if (!e.isEnabled()) return;
              e.updateUserActivity();
              const n = function(e) {
                const {
                  metaKey: t,
                  shiftKey: n,
                  ctrlKey: r,
                  altKey: s,
                  key: o,
                  target: i
                } = e;
                if (!i || function(e) {
                    return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable
                  }(i) || !o) return null;
                const a = t || r || s,
                  c = 1 === o.length;
                if (!a && c) return null;
                const u = (0, x.H)(i, {
                  maxStringLength: 200
                }) || "<unknown>";
                return on({
                  category: "ui.keyDown",
                  message: u,
                  data: {
                    ...ln(i, u).data,
                    metaKey: t,
                    shiftKey: n,
                    ctrlKey: r,
                    altKey: s,
                    key: o
                  }
                })
              }(t);
              n && Vt(e, n)
            }(this, e)
          }
        }
        getContext() {
          return this._context
        }
        isEnabled() {
          return this._isEnabled
        }
        isPaused() {
          return this._isPaused
        }
        isRecordingCanvas() {
          return Boolean(this._canvas)
        }
        getOptions() {
          return this._options
        }
        handleException(e) {
          Sn && Tn.exception(e), this._options.onError && this._options.onError(e)
        }
        initializeSampling(e) {
          const {
            errorSampleRate: t,
            sessionSampleRate: n
          } = this._options, r = t <= 0 && n <= 0;
          this._requiresManualStart = r, r || (this._initializeSessionForSampling(e), this.session ? !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", Sn && Tn.infoTick(`Starting replay in ${this.recordingMode} mode`), this._initializeRecording()) : Sn && Tn.exception(new Error("Unable to initialize and create session")))
        }
        start() {
          if (this._isEnabled && "session" === this.recordingMode) return void(Sn && Tn.log("Recording is already in progress"));
          if (this._isEnabled && "buffer" === this.recordingMode) return void(Sn && Tn.log("Buffering is in progress, call `flush()` to save the replay"));
          Sn && Tn.infoTick("Starting replay in session mode"), this._updateUserActivity();
          const e = zn({
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
          }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 1,
            allowBuffering: !1
          });
          this.session = e, this.recordingMode = "session", this._initializeRecording()
        }
        startBuffering() {
          if (this._isEnabled) return void(Sn && Tn.log("Buffering is in progress, call `flush()` to save the replay"));
          Sn && Tn.infoTick("Starting replay in buffer mode");
          const e = zn({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
          }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 0,
            allowBuffering: !0
          });
          this.session = e, this.recordingMode = "buffer", this._initializeRecording()
        }
        startRecording() {
          try {
            const e = this._canvas;
            this._stopRecording = Wt({
              ...this._recordingOptions,
              ..."buffer" === this.recordingMode ? {
                checkoutEveryNms: 6e4
              } : this._options._experiments.continuousCheckout && {
                checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
              },
              emit: lr(this),
              .../iPhone|iPad|iPod/i.test(ur?.userAgent ?? "") || /Macintosh/i.test(ur?.userAgent ?? "") && ur?.maxTouchPoints && ur?.maxTouchPoints > 1 ? {
                sampling: {
                  mousemove: !1
                }
              } : {},
              onMutation: this._onMutationHandler.bind(this),
              ...e ? {
                recordCanvas: e.recordCanvas,
                getCanvasManager: e.getCanvasManager,
                sampling: e.sampling,
                dataURLOptions: e.dataURLOptions
              } : {}
            })
          } catch (e) {
            this.handleException(e)
          }
        }
        stopRecording() {
          try {
            return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
          } catch (e) {
            return this.handleException(e), !1
          }
        }
        async stop({
          forceFlush: e = !1,
          reason: t
        } = {}) {
          if (!this._isEnabled) return;
          this._isEnabled = !1, this.recordingMode = "buffer";
          const n = t ?? "manual";
          (0, h.KU)()?.emit("replayEnd", {
            sessionId: this.session?.id,
            reason: n
          });
          try {
            Sn && Tn.log(`Stopping Replay triggered by ${n}`), Yn(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                force: !0
              }), this.eventBuffer?.destroy(), this.eventBuffer = null, r = this,
              function() {
                if (Rn()) try {
                  L.sessionStorage.removeItem(N)
                } catch {}
              }(), r.session = void 0
          } catch (e) {
            this.handleException(e)
          }
          var r
        }
        pause() {
          this._isPaused || (this._isPaused = !0, this.stopRecording(), Sn && Tn.log("Pausing replay"))
        }
        resume() {
          this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), Sn && Tn.log("Resuming replay"))
        }
        async sendBufferedReplayOrFlush({
          continueRecording: e = !0
        } = {}) {
          if ("session" === this.recordingMode) return this.flushImmediate();
          const t = Date.now();
          Sn && Tn.log("Converting buffer to session"), await this.flushImmediate();
          const n = this.stopRecording();
          e && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this.session.dirty = !1, this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession(), Kn(this.session.id)), this.startRecording())
        }
        addUpdate(e) {
          const t = e();
          "buffer" !== this.recordingMode && this._isEnabled && !0 !== t && this._debouncedFlush()
        }
        triggerUserActivity() {
          if (this._updateUserActivity(), this._stopRecording) this.checkAndHandleExpiredSession(), this._updateSessionActivity();
          else {
            if (!this._checkSession()) return;
            this.resume()
          }
        }
        updateUserActivity() {
          this._updateUserActivity(), this._updateSessionActivity()
        }
        conditionalFlush() {
          return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
        }
        flush() {
          return this._debouncedFlush()
        }
        flushImmediate() {
          return this._debouncedFlush(), this._debouncedFlush.flush()
        }
        cancelFlush() {
          this._debouncedFlush.cancel()
        }
        getSessionId(e) {
          if (!e || !1 !== this.session?.sampled) return this.session?.id
        }
        checkAndHandleExpiredSession() {
          if (!this._lastActivity || !Nn(this._lastActivity, this.timeouts.sessionIdlePause) || "session" !== this.session?.sampled) return !!this._checkSession();
          this.pause()
        }
        setInitialState() {
          const e = `${L.location.pathname}${L.location.hash}${L.location.search}`,
            t = `${L.location.origin}${e}`;
          this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
        }
        throttledAddEvent(e, t) {
          const n = this._throttledAddEvent(e, t);
          if (n === gr) {
            const e = on({
              category: "replay.throttled"
            });
            this.addUpdate(() => !jn(this, {
              type: 5,
              timestamp: e.timestamp || 0,
              data: {
                tag: "breadcrumb",
                payload: e,
                metric: !0
              }
            }))
          }
          return n
        }
        getCurrentRoute() {
          const e = this.lastActiveSpan || (0, f.Bk)(),
            t = e && (0, f.zU)(e),
            n = (t && (0, f.et)(t).data || {})[w.i_];
          if (t && n && ["route", "custom"].includes(n)) return (0, f.et)(t).description
        }
        _initializeRecording() {
          this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
            useCompression: e,
            workerUrl: t
          }) {
            if (e && window.Worker) {
              const e = function(e) {
                try {
                  const t = e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                    const e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:"init",success:!0,response:void 0});'], {
                      type: "text/javascript"
                    });
                    return URL.createObjectURL(e)
                  }());
                  if (!t) return;
                  Sn && Tn.log("Using compression worker" + (e ? ` from ${e}` : ""));
                  const n = new Worker(t);
                  return new Mn(n)
                } catch (e) {
                  Sn && Tn.exception(e, "Failed to create compression worker")
                }
              }(t);
              if (e) return e
            }
            return Sn && Tn.log("Using simple buffer"), new In
          }({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl
          }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.session && (0, h.KU)()?.emit("replayStart", {
            sessionId: this.session.id,
            recordingMode: this.recordingMode
          }), this.startRecording(), "session" === this.recordingMode && this.session && Kn(this.session.id)
        }
        _initializeSessionForSampling(e) {
          const t = this._options.errorSampleRate > 0,
            n = zn({
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
              maxReplayDuration: this._options.maxReplayDuration,
              previousSessionId: e
            }, {
              stickySession: this._options.stickySession,
              sessionSampleRate: this._options.sessionSampleRate,
              allowBuffering: t
            });
          this.session = n
        }
        _checkSession() {
          if (!this.session) return !1;
          const e = this.session;
          return !Pn(e, {
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
          }) || (this._refreshSession(e), !1)
        }
        async _refreshSession(e) {
          this._isEnabled && (await this.stop({
            reason: "sessionExpired"
          }), this.initializeSampling(e.id))
        }
        _addListeners() {
          try {
            L.document.addEventListener("visibilitychange", this._handleVisibilityChange), L.addEventListener("blur", this._handleWindowBlur), L.addEventListener("focus", this._handleWindowFocus), L.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (ar(this), this._hasInitializedCoreListeners = !0)
          } catch (e) {
            this.handleException(e)
          }
          this._performanceCleanupCallback = function(e) {
            function t(t) {
              e.performanceEntries.includes(t) || e.performanceEntries.push(t)
            }

            function n({
              entries: e
            }) {
              e.forEach(t)
            }
            const r = [];
            return ["navigation", "paint", "resource"].forEach(e => {
              r.push((0, M.wv)(e, n))
            }), r.push((0, M.Pt)(pn(fn, e)), (0, M.a9)(pn(yn, e)), (0, M.hT)(pn(vn, e))), () => {
              r.forEach(e => e())
            }
          }(this)
        }
        _removeListeners() {
          try {
            L.document.removeEventListener("visibilitychange", this._handleVisibilityChange), L.removeEventListener("blur", this._handleWindowBlur), L.removeEventListener("focus", this._handleWindowFocus), L.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
          } catch (e) {
            this.handleException(e)
          }
        }
        _doChangeToBackgroundTasks(e) {
          this.session && (Pn(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
          }) ? Yn() : (e && this._createCustomBreadcrumb(e), this.conditionalFlush()))
        }
        _doChangeToForegroundTasks(e) {
          this.session && (this.checkAndHandleExpiredSession() ? e && this._createCustomBreadcrumb(e) : Sn && Tn.log("Document has become active, but session has expired"))
        }
        _updateUserActivity(e = Date.now()) {
          this._lastActivity = e
        }
        _updateSessionActivity(e = Date.now()) {
          this.session && (this.session.lastActivity = e, this._maybeSaveSession())
        }
        _createCustomBreadcrumb(e) {
          this.addUpdate(() => {
            this.throttledAddEvent({
              type: Ze.Custom,
              timestamp: e.timestamp || 0,
              data: {
                tag: "breadcrumb",
                payload: e
              }
            })
          })
        }
        _addPerformanceEntries() {
          let e = (t = this.performanceEntries, t.map(hn).filter(Boolean)).concat(this.replayPerformanceEntries);
          var t;
          if (this.performanceEntries = [], this.replayPerformanceEntries = [], this._requiresManualStart) {
            const t = this._context.initialTimestamp / 1e3;
            e = e.filter(e => e.start >= t)
          }
          return Promise.all(Jn(this, e))
        }
        _clearContext() {
          this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.segmentNames.clear(), this._context.urls = []
        }
        _updateInitialTimestampFromEventBuffer() {
          const {
            session: e,
            eventBuffer: t
          } = this;
          if (!e || !t || this._requiresManualStart) return;
          if (e.segmentId) return;
          const n = t.getEarliestTimestamp();
          n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
        }
        _popEventContext() {
          const e = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            segmentNames: Array.from(this._context.segmentNames),
            urls: this._context.urls
          };
          return this._clearContext(), e
        }
        async _runFlush() {
          const e = this.getSessionId();
          if (this.session && this.eventBuffer && e) {
            if (await this._addPerformanceEntries(), this.eventBuffer?.hasEvents && (await async function(e) {
                try {
                  return Promise.all(Jn(e, [cr(L.performance.memory)]))
                } catch {
                  return []
                }
              }(this), this.eventBuffer && e === this.getSessionId())) try {
              this._updateInitialTimestampFromEventBuffer();
              const t = Date.now();
              if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new mr;
              const n = this._popEventContext(),
                r = this.session.segmentId++;
              this._maybeSaveSession();
              const s = await this.eventBuffer.finish();
              await fr({
                replayId: e,
                recordingData: s,
                segmentId: r,
                eventContext: n,
                session: this.session,
                timestamp: t,
                onError: e => this.handleException(e)
              })
            } catch (e) {
              this.handleException(e), this.stop({
                reason: "sendError"
              });
              const t = (0, h.KU)();
              if (t) {
                let n;
                n = e instanceof hr ? "ratelimit_backoff" : e instanceof mr ? "invalid" : "send_error", t.recordDroppedEvent(n, "replay")
              }
            }
          } else Sn && Tn.error("No session or eventBuffer found to flush.")
        }
        async _flush({
          force: e = !1
        } = {}) {
          if (!this._isEnabled && !e) return;
          if (!this.checkAndHandleExpiredSession()) return void(Sn && Tn.error("Attempting to finish replay event after session expired."));
          if (!this.session) return;
          const t = this.session.started,
            n = Date.now() - t;
          this._debouncedFlush.cancel();
          const r = n < this._options.minReplayDuration,
            s = n > this._options.maxReplayDuration + 5e3;
          if (r || s) return Sn && Tn.log(`Session duration (${Math.floor(n/1e3)}s) is too ${r?"short":"long"}, not sending replay.`), void(r && this._debouncedFlush());
          const o = this.eventBuffer;
          o && 0 === this.session.segmentId && !o.hasCheckout && Sn && Tn.log("Flushing initial segment without checkout.");
          const i = !!this._flushLock;
          this._flushLock || (this._flushLock = this._runFlush());
          try {
            await this._flushLock
          } catch (e) {
            this.handleException(e)
          } finally {
            this._flushLock = void 0, i && this._debouncedFlush()
          }
        }
        _maybeSaveSession() {
          this.session && this._options.stickySession && An(this.session)
        }
        _onMutationHandler(e) {
          const {
            ignoreMutations: t
          } = this._options._experiments;
          if (t?.length && e.some(e => {
              const n = function(e) {
                  if (!e) return null;
                  try {
                    return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
                  } catch {
                    return null
                  }
                }(e.target),
                r = t.join(",");
              return n?.matches(r)
            })) return !1;
          const n = e.length,
            r = this._options.mutationLimit,
            s = r && n > r;
          if (n > this._options.mutationBreadcrumbLimit || s) {
            const e = on({
              category: "replay.mutations",
              data: {
                count: n,
                limit: s
              }
            });
            this._createCustomBreadcrumb(e)
          }
          return !s || (this.stop({
            reason: "mutationLimit",
            forceFlush: "session" === this.recordingMode
          }), !1)
        }
      }

      function vr(e, t) {
        return [...e, ...t].join(",")
      }
      const _r = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        Sr = ["content-length", "content-type", "accept"],
        br = Symbol.for("sentry__originalRequestBody");
      let kr = !1,
        wr = !1;
      const Tr = e => new Er(e);
      class Er {
        constructor({
          flushMinDelay: e = 5e3,
          flushMaxDelay: t = 5500,
          minReplayDuration: n = 4999,
          maxReplayDuration: r = 36e5,
          stickySession: s = !0,
          useCompression: o = !0,
          workerUrl: i,
          _experiments: a = {},
          maskAllText: c = !0,
          maskAllInputs: u = !0,
          blockAllMedia: l = !0,
          mutationBreadcrumbLimit: d = 750,
          mutationLimit: p = 1e4,
          slowClickTimeout: h = 7e3,
          slowClickIgnoreSelectors: m = [],
          networkDetailAllowUrls: f = [],
          networkDetailDenyUrls: g = [],
          networkCaptureBodies: y = !0,
          networkRequestHeaders: v = [],
          networkResponseHeaders: _ = [],
          mask: S = [],
          maskAttributes: b = ["title", "placeholder", "aria-label"],
          unmask: k = [],
          block: w = [],
          unblock: E = [],
          ignore: I = [],
          maskFn: C,
          beforeAddRecordingEvent: x,
          beforeErrorSampling: M,
          onError: R,
          attachRawBodyFromRequest: O = !1
        } = {}) {
          this.name = "Replay";
          const A = function({
            mask: e,
            unmask: t,
            block: n,
            unblock: r,
            ignore: s
          }) {
            return {
              maskTextSelector: vr(e, [".sentry-mask", "[data-sentry-mask]"]),
              unmaskTextSelector: vr(t, []),
              blockSelector: vr(n, [".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]),
              unblockSelector: vr(r, []),
              ignoreSelector: vr(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
            }
          }({
            mask: S,
            unmask: k,
            block: w,
            unblock: E,
            ignore: I
          });
          if (this._recordingOptions = {
              maskAllInputs: u,
              maskAllText: c,
              maskInputOptions: {
                password: !0
              },
              maskTextFn: C,
              maskInputFn: C,
              maskAttributeFn: (e, t, n) => function({
                el: e,
                key: t,
                maskAttributes: n,
                maskAllText: r,
                privacyOptions: s,
                value: o
              }) {
                if (s.unmaskTextSelector && e.matches(s.unmaskTextSelector)) return o;
                const i = n.includes(t),
                  a = r && "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "");
                return i || a ? o.replace(/[\S]/g, "*") : o
              }({
                maskAttributes: b,
                maskAllText: c,
                privacyOptions: A,
                key: e,
                value: t,
                el: n
              }),
              ...A,
              slimDOMOptions: "all",
              inlineStylesheet: !0,
              inlineImages: !1,
              collectFonts: !0,
              errorHandler: e => {
                try {
                  e.__rrweb__ = !0
                } catch {}
              },
              recordCrossOriginIframes: Boolean(a.recordCrossOriginIframes)
            }, this._initialOptions = {
              flushMinDelay: e,
              flushMaxDelay: t,
              minReplayDuration: Math.min(n, 5e4),
              maxReplayDuration: Math.min(r, 36e5),
              stickySession: s,
              useCompression: o,
              workerUrl: i,
              blockAllMedia: l,
              maskAllInputs: u,
              maskAllText: c,
              mutationBreadcrumbLimit: d,
              mutationLimit: p,
              slowClickTimeout: h,
              slowClickIgnoreSelectors: m,
              networkDetailAllowUrls: f,
              networkDetailDenyUrls: g,
              networkCaptureBodies: y,
              networkRequestHeaders: Ir(v),
              networkResponseHeaders: Ir(_),
              beforeAddRecordingEvent: x,
              beforeErrorSampling: M,
              onError: R,
              attachRawBodyFromRequest: O,
              _experiments: a
            }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${_r}` : _r, this._recordingOptions.ignoreCSSAttributes = new Set(["background-image"])), this._isInitialized && (0, T.B)()) throw new Error("Multiple Sentry Session Replay instances are not supported");
          this._isInitialized = !0
        }
        get _isInitialized() {
          return kr
        }
        set _isInitialized(e) {
          kr = e
        }
        afterAllSetup(e) {
          (0, T.B)() && !this._replay && (this._initialOptions.attachRawBodyFromRequest && function() {
            if ("undefined" == typeof Request || wr) return;
            const e = Request;
            try {
              const t = function(t, n) {
                const r = new e(t, n);
                return null != n?.body && (r[br] = n.body), r
              };
              t.prototype = e.prototype, r.O.Request = t, wr = !0
            } catch {}
          }(), this._setup(e), this._initialize(e))
        }
        start() {
          this._replay && this._replay.start()
        }
        startBuffering() {
          this._replay && this._replay.startBuffering()
        }
        stop(e) {
          return this._replay ? this._replay.stop({
            forceFlush: e?.flush ?? "session" === this._replay.recordingMode,
            reason: "manual"
          }) : Promise.resolve()
        }
        flush(e) {
          return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve()) : Promise.resolve()
        }
        getReplayId(e) {
          if (this._replay?.isEnabled()) return this._replay.getSessionId(e)
        }
        getRecordingMode() {
          if (this._replay?.isEnabled()) return this._replay.recordingMode
        }
        processSpan(e) {
          const t = this.getReplayId(!0);
          t && ((0, E.FD)(e, {
            "sentry.replay_id": t
          }), "buffer" === this.getRecordingMode() && (0, E.FD)(e, {
            "sentry._internal.replay_is_buffering": !0
          }))
        }
        _initialize(e) {
          this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling())
        }
        _setup(e) {
          const t = function(e, t) {
            const n = t.getOptions(),
              r = {
                sessionSampleRate: 0,
                errorSampleRate: 0,
                ...e
              },
              s = (0, I.i)(n.replaysSessionSampleRate),
              o = (0, I.i)(n.replaysOnErrorSampleRate);
            return null == s && null == o && (0, u.pq)(() => {
              console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
            }), null != s && (r.sessionSampleRate = s), null != o && (r.errorSampleRate = o), r
          }(this._initialOptions, e);
          this._replay = new yr({
            options: t,
            recordingOptions: this._recordingOptions
          })
        }
        _maybeLoadFromReplayCanvasIntegration(e) {
          try {
            const t = e.getIntegrationByName("ReplayCanvas");
            if (!t) return;
            this._replay._canvas = t.getOptions()
          } catch {}
        }
      }

      function Ir(e) {
        return [...Sr, ...e.map(e => e.toLowerCase())]
      }
    }
  }
]);