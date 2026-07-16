try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6d53891b-2081-4434-9b50-3ccb30d2d8dc", e._sentryDebugIdIdentifier = "sentry-dbid-6d53891b-2081-4434-9b50-3ccb30d2d8dc")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [295], {
    6295(e, t, n) {
      n.r(t), n.d(t, {
        focusable: () => S,
        getTabIndex: () => f,
        isFocusable: () => I,
        isTabbable: () => E,
        tabbable: () => w
      });
      var o = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"],
        r = o.join(","),
        i = "undefined" == typeof Element,
        a = i ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        l = !i && Element.prototype.getRootNode ? function(e) {
          var t;
          return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
        } : function(e) {
          return null == e ? void 0 : e.ownerDocument
        },
        d = function(e, t) {
          var n;
          void 0 === t && (t = !0);
          var o = null == e || null === (n = e.getAttribute) || void 0 === n ? void 0 : n.call(e, "inert");
          return "" === o || "true" === o || t && e && ("function" == typeof e.closest ? e.closest("[inert]") : d(e.parentNode))
        },
        u = function(e, t, n) {
          if (d(e)) return [];
          var o = Array.prototype.slice.apply(e.querySelectorAll(r));
          return t && a.call(e, r) && o.unshift(e), o.filter(n)
        },
        c = function(e, t, n) {
          for (var o = [], i = Array.from(e); i.length;) {
            var l = i.shift();
            if (!d(l, !1))
              if ("SLOT" === l.tagName) {
                var u = l.assignedElements(),
                  s = u.length ? u : l.children,
                  f = c(s, !0, n);
                n.flatten ? o.push.apply(o, f) : o.push({
                  scopeParent: l,
                  candidates: f
                })
              } else {
                a.call(l, r) && n.filter(l) && (t || !e.includes(l)) && o.push(l);
                var p = l.shadowRoot || "function" == typeof n.getShadowRoot && n.getShadowRoot(l),
                  h = !d(p, !1) && (!n.shadowRootFilter || n.shadowRootFilter(l));
                if (p && h) {
                  var y = c(!0 === p ? l.children : p.children, !0, n);
                  n.flatten ? o.push.apply(o, y) : o.push({
                    scopeParent: l,
                    candidates: y
                  })
                } else i.unshift.apply(i, l.children)
              }
          }
          return o
        },
        s = function(e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
        },
        f = function(e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
            var t, n = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
            return "" === n || "true" === n
          }(e)) && !s(e) ? 0 : e.tabIndex
        },
        p = function(e, t) {
          return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
        },
        h = function(e) {
          return "INPUT" === e.tagName
        },
        y = function(e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            o = t.height;
          return 0 === n && 0 === o
        },
        b = function(e, t) {
          return !(t.disabled || function(e) {
            return h(e) && "hidden" === e.type
          }(t) || function(e, t) {
            var n = t.displayCheck,
              o = t.getShadowRoot;
            if ("full-native" === n && "checkVisibility" in e) return !e.checkVisibility({
              checkOpacity: !1,
              opacityProperty: !1,
              contentVisibilityAuto: !0,
              visibilityProperty: !0,
              checkVisibilityCSS: !0
            });
            var r = getComputedStyle(e).visibility;
            if ("hidden" === r || "collapse" === r) return !0;
            var i = a.call(e, "details>summary:first-of-type") ? e.parentElement : e;
            if (a.call(i, "details:not([open]) *")) return !0;
            if (n && "full" !== n && "full-native" !== n && "legacy-full" !== n) {
              if ("non-zero-area" === n) return y(e)
            } else {
              if ("function" == typeof o) {
                for (var d = e; e;) {
                  var u = e.parentElement,
                    c = l(e);
                  if (u && !u.shadowRoot && !0 === o(u)) return y(e);
                  e = e.assignedSlot ? e.assignedSlot : u || c === e.ownerDocument ? u : c.host
                }
                e = d
              }
              if (function(e) {
                  var t, n, o, r, i = e && l(e),
                    a = null === (t = i) || void 0 === t ? void 0 : t.host,
                    d = !1;
                  if (i && i !== e)
                    for (d = !!(null !== (n = a) && void 0 !== n && null !== (o = n.ownerDocument) && void 0 !== o && o.contains(a) || null != e && null !== (r = e.ownerDocument) && void 0 !== r && r.contains(e)); !d && a;) {
                      var u, c, s;
                      d = !(null === (c = a = null === (u = i = l(a)) || void 0 === u ? void 0 : u.host) || void 0 === c || null === (s = c.ownerDocument) || void 0 === s || !s.contains(a))
                    }
                  return d
                }(e)) return !e.getClientRects().length;
              if ("legacy-full" !== n) return !0
            }
            return !1
          }(t, e) || function(e) {
            return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some(function(e) {
              return "SUMMARY" === e.tagName
            })
          }(t) || function(e) {
            if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
              for (var t = e.parentElement; t;) {
                if ("FIELDSET" === t.tagName && t.disabled) {
                  for (var n = 0; n < t.children.length; n++) {
                    var o = t.children.item(n);
                    if ("LEGEND" === o.tagName) return !!a.call(t, "fieldset[disabled] *") || !o.contains(e)
                  }
                  return !0
                }
                t = t.parentElement
              }
            return !1
          }(t))
        },
        g = function(e, t) {
          return !(function(e) {
            return function(e) {
              return h(e) && "radio" === e.type
            }(e) && ! function(e) {
              if (!e.name) return !0;
              var t, n = e.form || l(e),
                o = function(e) {
                  return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                };
              if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = o(window.CSS.escape(e.name));
              else try {
                t = o(e.name)
              } catch (e) {
                return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
              }
              var r = function(e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n]
              }(t, e.form);
              return !r || r === e
            }(e)
          }(t) || f(t) < 0 || !b(e, t))
        },
        v = function(e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0)
        },
        m = function(e) {
          var t = [],
            n = [];
          return e.forEach(function(e, o) {
            var r = !!e.scopeParent,
              i = r ? e.scopeParent : e,
              a = function(e, t) {
                var n = f(e);
                return n < 0 && t && !s(e) ? 0 : n
              }(i, r),
              l = r ? m(e.candidates) : i;
            0 === a ? r ? t.push.apply(t, l) : t.push(i) : n.push({
              documentOrder: o,
              tabIndex: a,
              item: e,
              isScope: r,
              content: l
            })
          }), n.sort(p).reduce(function(e, t) {
            return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
          }, []).concat(t)
        },
        w = function(e, t) {
          var n;
          return n = (t = t || {}).getShadowRoot ? c([e], t.includeContainer, {
            filter: g.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: v
          }) : u(e, t.includeContainer, g.bind(null, t)), m(n)
        },
        S = function(e, t) {
          return (t = t || {}).getShadowRoot ? c([e], t.includeContainer, {
            filter: b.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot
          }) : u(e, t.includeContainer, b.bind(null, t))
        },
        E = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== a.call(e, r) && g(t, e)
        },
        N = o.concat("iframe:not([inert]):not([inert] *)").join(","),
        I = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== a.call(e, N) && b(t, e)
        }
    }
  }
]);