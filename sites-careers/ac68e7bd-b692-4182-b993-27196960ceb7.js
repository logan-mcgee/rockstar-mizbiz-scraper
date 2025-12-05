try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ac68e7bd-b692-4182-b993-27196960ceb7", e._sentryDebugIdIdentifier = "sentry-dbid-ac68e7bd-b692-4182-b993-27196960ceb7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [1673], {
    1673: (e, t, n) => {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, c(o.key), o)
        }
      }

      function a() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (a = function() {
          return !!e
        })()
      }

      function i(e) {
        return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, i(e)
      }

      function u(e, t) {
        return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, u(e, t)
      }

      function c(e) {
        var t = function(e) {
          if ("object" != o(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != o(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == o(t) ? t : t + ""
      }
      var s = n(2229),
        l = n(7145),
        d = n(7236).createFocusTrap,
        f = n(6337).isFocusable,
        p = function(e) {
          function t(e) {
            var n, r, u, s;
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), n = function(e, t, n) {
              return t = i(t),
                function(e, t) {
                  if (t && ("object" == o(t) || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, a() ? Reflect.construct(t, n || [], i(e).constructor) : t.apply(e, n))
            }(this, t, [e]), r = n, s = function(e) {
              var t, n = null !== (t = this.internalOptions[e]) && void 0 !== t ? t : this.originalOptions[e];
              if ("function" == typeof n) {
                for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) r[a - 1] = arguments[a];
                n = n.apply(void 0, r)
              }
              if (!0 === n && (n = void 0), !n) {
                if (void 0 === n || !1 === n) return n;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var i, u = n;
              if ("string" == typeof n && !(u = null === (i = this.getDocument()) || void 0 === i ? void 0 : i.querySelector(n))) throw new Error("`".concat(e, "` as selector refers to no known node"));
              return u
            }, (u = c(u = "getNodeForOption")) in r ? Object.defineProperty(r, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[u] = s, n.handleDeactivate = n.handleDeactivate.bind(n), n.handlePostDeactivate = n.handlePostDeactivate.bind(n), n.handleClickOutsideDeactivates = n.handleClickOutsideDeactivates.bind(n), n.internalOptions = {
              returnFocusOnDeactivate: !1,
              checkCanReturnFocus: null,
              onDeactivate: n.handleDeactivate,
              onPostDeactivate: n.handlePostDeactivate,
              clickOutsideDeactivates: n.handleClickOutsideDeactivates
            }, n.originalOptions = {
              returnFocusOnDeactivate: !0,
              onDeactivate: null,
              onPostDeactivate: null,
              checkCanReturnFocus: null,
              clickOutsideDeactivates: !1
            };
            var l = e.focusTrapOptions;
            for (var d in l) Object.prototype.hasOwnProperty.call(l, d) && ("returnFocusOnDeactivate" !== d && "onDeactivate" !== d && "onPostDeactivate" !== d && "checkCanReturnFocus" !== d && "clickOutsideDeactivates" !== d ? n.internalOptions[d] = l[d] : n.originalOptions[d] = l[d]);
            return n.outsideClick = null, n.focusTrapElements = e.containerElements || [], n.updatePreviousElement(), n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && u(e, t)
          }(t, e), n = t, (l = [{
            key: "getDocument",
            value: function() {
              return this.props.focusTrapOptions.document || ("undefined" != typeof document ? document : void 0)
            }
          }, {
            key: "getReturnFocusNode",
            value: function() {
              var e = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
              return e || !1 !== e && this.previouslyFocusedElement
            }
          }, {
            key: "updatePreviousElement",
            value: function() {
              var e = this.getDocument();
              e && (this.previouslyFocusedElement = e.activeElement)
            }
          }, {
            key: "deactivateTrap",
            value: function() {
              this.focusTrap && this.focusTrap.active && this.focusTrap.deactivate({
                returnFocus: !1,
                checkCanReturnFocus: null,
                onDeactivate: this.originalOptions.onDeactivate
              })
            }
          }, {
            key: "handleClickOutsideDeactivates",
            value: function(e) {
              var t = "function" == typeof this.originalOptions.clickOutsideDeactivates ? this.originalOptions.clickOutsideDeactivates.call(null, e) : this.originalOptions.clickOutsideDeactivates;
              return t && (this.outsideClick = {
                target: e.target,
                allowDeactivation: t
              }), t
            }
          }, {
            key: "handleDeactivate",
            value: function() {
              this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap()
            }
          }, {
            key: "handlePostDeactivate",
            value: function() {
              var e = this,
                t = function() {
                  var t = e.getReturnFocusNode(),
                    n = !(!e.originalOptions.returnFocusOnDeactivate || null == t || !t.focus || e.outsideClick && (!e.outsideClick.allowDeactivation || f(e.outsideClick.target, e.internalOptions.tabbableOptions))),
                    o = e.internalOptions.preventScroll,
                    r = void 0 !== o && o;
                  n && t.focus({
                    preventScroll: r
                  }), e.originalOptions.onPostDeactivate && e.originalOptions.onPostDeactivate.call(null), e.outsideClick = null
                };
              this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(t, t) : t()
            }
          }, {
            key: "setupFocusTrap",
            value: function() {
              this.focusTrap ? this.props.active && !this.focusTrap.active && (this.focusTrap.activate(), this.props.paused && this.focusTrap.pause()) : this.focusTrapElements.some(Boolean) && (this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause())
            }
          }, {
            key: "componentDidMount",
            value: function() {
              this.props.active && this.setupFocusTrap()
            }
          }, {
            key: "componentDidUpdate",
            value: function(e) {
              if (this.focusTrap) {
                e.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
                var t = !e.active && this.props.active,
                  n = e.active && !this.props.active,
                  o = !e.paused && this.props.paused,
                  r = e.paused && !this.props.paused;
                if (t && (this.updatePreviousElement(), this.focusTrap.activate()), n) return void this.deactivateTrap();
                o && this.focusTrap.pause(), r && this.focusTrap.unpause()
              } else e.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap())
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.deactivateTrap()
            }
          }, {
            key: "render",
            value: function() {
              var e = this,
                t = this.props.children ? s.Children.only(this.props.children) : void 0;
              if (t) {
                if (t.type && t.type === s.Fragment) throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
                return s.cloneElement(t, {
                  ref: function(n) {
                    var o = e.props.containerElements;
                    t && ("function" == typeof t.ref ? t.ref(n) : t.ref && (t.ref.current = n)), e.focusTrapElements = o || [n]
                  }
                })
              }
              return null
            }
          }]) && r(n.prototype, l), Object.defineProperty(n, "prototype", {
            writable: !1
          }), n;
          var n, l
        }(s.Component),
        v = "undefined" == typeof Element ? Function : Element;
      p.propTypes = {
        active: l.bool,
        paused: l.bool,
        focusTrapOptions: l.shape({
          document: l.object,
          onActivate: l.func,
          onPostActivate: l.func,
          checkCanFocusTrap: l.func,
          onPause: l.func,
          onPostPause: l.func,
          onUnpause: l.func,
          onPostUnpause: l.func,
          onDeactivate: l.func,
          onPostDeactivate: l.func,
          checkCanReturnFocus: l.func,
          initialFocus: l.oneOfType([l.instanceOf(v), l.string, l.bool, l.func]),
          fallbackFocus: l.oneOfType([l.instanceOf(v), l.string, l.func]),
          escapeDeactivates: l.oneOfType([l.bool, l.func]),
          clickOutsideDeactivates: l.oneOfType([l.bool, l.func]),
          returnFocusOnDeactivate: l.bool,
          setReturnFocus: l.oneOfType([l.instanceOf(v), l.string, l.bool, l.func]),
          allowOutsideClick: l.oneOfType([l.bool, l.func]),
          preventScroll: l.bool,
          tabbableOptions: l.shape({
            displayCheck: l.oneOf(["full", "legacy-full", "non-zero-area", "none"]),
            getShadowRoot: l.oneOfType([l.bool, l.func])
          }),
          trapStack: l.array,
          isKeyForward: l.func,
          isKeyBackward: l.func
        }),
        containerElements: l.arrayOf(l.instanceOf(v)),
        children: l.oneOfType([l.element, l.instanceOf(v)])
      }, p.defaultProps = {
        active: !0,
        paused: !1,
        focusTrapOptions: {},
        _createFocusTrap: d
      }, e.exports = p
    },
    6337: (e, t, n) => {
      n.r(t), n.d(t, {
        focusable: () => O,
        getTabIndex: () => f,
        isFocusable: () => k,
        isTabbable: () => T,
        tabbable: () => w
      });
      var o = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
        r = o.join(","),
        a = "undefined" == typeof Element,
        i = a ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        u = !a && Element.prototype.getRootNode ? function(e) {
          var t;
          return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
        } : function(e) {
          return null == e ? void 0 : e.ownerDocument
        },
        c = function e(t, n) {
          var o;
          void 0 === n && (n = !0);
          var r = null == t || null === (o = t.getAttribute) || void 0 === o ? void 0 : o.call(t, "inert");
          return "" === r || "true" === r || n && t && e(t.parentNode)
        },
        s = function(e, t, n) {
          if (c(e)) return [];
          var o = Array.prototype.slice.apply(e.querySelectorAll(r));
          return t && i.call(e, r) && o.unshift(e), o.filter(n)
        },
        l = function e(t, n, o) {
          for (var a = [], u = Array.from(t); u.length;) {
            var s = u.shift();
            if (!c(s, !1))
              if ("SLOT" === s.tagName) {
                var l = s.assignedElements(),
                  d = e(l.length ? l : s.children, !0, o);
                o.flatten ? a.push.apply(a, d) : a.push({
                  scopeParent: s,
                  candidates: d
                })
              } else {
                i.call(s, r) && o.filter(s) && (n || !t.includes(s)) && a.push(s);
                var f = s.shadowRoot || "function" == typeof o.getShadowRoot && o.getShadowRoot(s),
                  p = !c(f, !1) && (!o.shadowRootFilter || o.shadowRootFilter(s));
                if (f && p) {
                  var v = e(!0 === f ? s.children : f.children, !0, o);
                  o.flatten ? a.push.apply(a, v) : a.push({
                    scopeParent: s,
                    candidates: v
                  })
                } else u.unshift.apply(u, s.children)
              }
          }
          return a
        },
        d = function(e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
        },
        f = function(e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
            var t, n = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
            return "" === n || "true" === n
          }(e)) && !d(e) ? 0 : e.tabIndex
        },
        p = function(e, t) {
          return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
        },
        v = function(e) {
          return "INPUT" === e.tagName
        },
        b = function(e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            o = t.height;
          return 0 === n && 0 === o
        },
        h = function(e, t) {
          return !(t.disabled || c(t) || function(e) {
            return v(e) && "hidden" === e.type
          }(t) || function(e, t) {
            var n = t.displayCheck,
              o = t.getShadowRoot;
            if ("hidden" === getComputedStyle(e).visibility) return !0;
            var r = i.call(e, "details>summary:first-of-type") ? e.parentElement : e;
            if (i.call(r, "details:not([open]) *")) return !0;
            if (n && "full" !== n && "legacy-full" !== n) {
              if ("non-zero-area" === n) return b(e)
            } else {
              if ("function" == typeof o) {
                for (var a = e; e;) {
                  var c = e.parentElement,
                    s = u(e);
                  if (c && !c.shadowRoot && !0 === o(c)) return b(e);
                  e = e.assignedSlot ? e.assignedSlot : c || s === e.ownerDocument ? c : s.host
                }
                e = a
              }
              if (function(e) {
                  var t, n, o, r, a = e && u(e),
                    i = null === (t = a) || void 0 === t ? void 0 : t.host,
                    c = !1;
                  if (a && a !== e)
                    for (c = !!(null !== (n = i) && void 0 !== n && null !== (o = n.ownerDocument) && void 0 !== o && o.contains(i) || null != e && null !== (r = e.ownerDocument) && void 0 !== r && r.contains(e)); !c && i;) {
                      var s, l, d;
                      c = !(null === (l = i = null === (s = a = u(i)) || void 0 === s ? void 0 : s.host) || void 0 === l || null === (d = l.ownerDocument) || void 0 === d || !d.contains(i))
                    }
                  return c
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
                    if ("LEGEND" === o.tagName) return !!i.call(t, "fieldset[disabled] *") || !o.contains(e)
                  }
                  return !0
                }
                t = t.parentElement
              }
            return !1
          }(t))
        },
        y = function(e, t) {
          return !(function(e) {
            return function(e) {
              return v(e) && "radio" === e.type
            }(e) && ! function(e) {
              if (!e.name) return !0;
              var t, n = e.form || u(e),
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
          }(t) || f(t) < 0 || !h(e, t))
        },
        m = function(e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0)
        },
        g = function e(t) {
          var n = [],
            o = [];
          return t.forEach(function(t, r) {
            var a = !!t.scopeParent,
              i = a ? t.scopeParent : t,
              u = function(e, t) {
                var n = f(e);
                return n < 0 && t && !d(e) ? 0 : n
              }(i, a),
              c = a ? e(t.candidates) : i;
            0 === u ? a ? n.push.apply(n, c) : n.push(i) : o.push({
              documentOrder: r,
              tabIndex: u,
              item: t,
              isScope: a,
              content: c
            })
          }), o.sort(p).reduce(function(e, t) {
            return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
          }, []).concat(n)
        },
        w = function(e, t) {
          var n;
          return n = (t = t || {}).getShadowRoot ? l([e], t.includeContainer, {
            filter: y.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: m
          }) : s(e, t.includeContainer, y.bind(null, t)), g(n)
        },
        O = function(e, t) {
          return (t = t || {}).getShadowRoot ? l([e], t.includeContainer, {
            filter: h.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot
          }) : s(e, t.includeContainer, h.bind(null, t))
        },
        T = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== i.call(e, r) && y(t, e)
        },
        E = o.concat("iframe").join(","),
        k = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== i.call(e, E) && h(t, e)
        }
    },
    7236: (e, t, n) => {
      n.r(t), n.d(t, {
        createFocusTrap: () => b
      });
      var o = n(6337);

      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o
      }

      function a(e, t, n) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t);
              if ("object" != typeof o) return o;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e, "string");
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, o)
        }
        return n
      }

      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(Object(n), !0).forEach(function(t) {
            a(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      var c = function(e) {
          return "Tab" === (null == e ? void 0 : e.key) || 9 === (null == e ? void 0 : e.keyCode)
        },
        s = function(e) {
          return c(e) && !e.shiftKey
        },
        l = function(e) {
          return c(e) && e.shiftKey
        },
        d = function(e) {
          return setTimeout(e, 0)
        },
        f = function(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
          return "function" == typeof e ? e.apply(void 0, n) : e
        },
        p = function(e) {
          return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        },
        v = [],
        b = function(e, t) {
          var n, a = (null == t ? void 0 : t.document) || document,
            i = (null == t ? void 0 : t.trapStack) || v,
            b = u({
              returnFocusOnDeactivate: !0,
              escapeDeactivates: !0,
              delayInitialFocus: !0,
              isKeyForward: s,
              isKeyBackward: l
            }, t),
            h = {
              containers: [],
              containerGroups: [],
              tabbableGroups: [],
              nodeFocusedBeforeActivation: null,
              mostRecentlyFocusedNode: null,
              active: !1,
              paused: !1,
              manuallyPaused: !1,
              delayInitialFocusTimer: void 0,
              recentNavEvent: void 0
            },
            y = function(e, t, n) {
              return e && void 0 !== e[t] ? e[t] : b[n || t]
            },
            m = function(e, t) {
              var n = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
              return h.containerGroups.findIndex(function(t) {
                var o = t.container,
                  r = t.tabbableNodes;
                return o.contains(e) || (null == n ? void 0 : n.includes(o)) || r.find(function(t) {
                  return t === e
                })
              })
            },
            g = function(e) {
              var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = n.hasFallback,
                i = void 0 !== o && o,
                u = n.params,
                c = void 0 === u ? [] : u,
                s = b[e];
              if ("function" == typeof s && (s = s.apply(void 0, function(e) {
                  if (Array.isArray(e)) return r(e)
                }(t = c) || function(e) {
                  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(t) || function(e, t) {
                  if (e) {
                    if ("string" == typeof e) return r(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                  }
                }(t) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())), !0 === s && (s = void 0), !s) {
                if (void 0 === s || !1 === s) return s;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var l = s;
              if ("string" == typeof s) {
                try {
                  l = a.querySelector(s)
                } catch (t) {
                  throw new Error("`".concat(e, '` appears to be an invalid selector; error="').concat(t.message, '"'))
                }
                if (!l && !i) throw new Error("`".concat(e, "` as selector refers to no known node"))
              }
              return l
            },
            w = function() {
              var e = g("initialFocus", {
                hasFallback: !0
              });
              if (!1 === e) return !1;
              if (void 0 === e || e && !(0, o.isFocusable)(e, b.tabbableOptions))
                if (m(a.activeElement) >= 0) e = a.activeElement;
                else {
                  var t = h.tabbableGroups[0];
                  e = t && t.firstTabbableNode || g("fallbackFocus")
                }
              else null === e && (e = g("fallbackFocus"));
              if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
              return e
            },
            O = function() {
              if (h.containerGroups = h.containers.map(function(e) {
                  var t = (0, o.tabbable)(e, b.tabbableOptions),
                    n = (0, o.focusable)(e, b.tabbableOptions),
                    r = t.length > 0 ? t[0] : void 0,
                    a = t.length > 0 ? t[t.length - 1] : void 0,
                    i = n.find(function(e) {
                      return (0, o.isTabbable)(e)
                    }),
                    u = n.slice().reverse().find(function(e) {
                      return (0, o.isTabbable)(e)
                    }),
                    c = !!t.find(function(e) {
                      return (0, o.getTabIndex)(e) > 0
                    });
                  return {
                    container: e,
                    tabbableNodes: t,
                    focusableNodes: n,
                    posTabIndexesFound: c,
                    firstTabbableNode: r,
                    lastTabbableNode: a,
                    firstDomTabbableNode: i,
                    lastDomTabbableNode: u,
                    nextTabbableNode: function(e) {
                      var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        a = t.indexOf(e);
                      return a < 0 ? r ? n.slice(n.indexOf(e) + 1).find(function(e) {
                        return (0, o.isTabbable)(e)
                      }) : n.slice(0, n.indexOf(e)).reverse().find(function(e) {
                        return (0, o.isTabbable)(e)
                      }) : t[a + (r ? 1 : -1)]
                    }
                  }
                }), h.tabbableGroups = h.containerGroups.filter(function(e) {
                  return e.tabbableNodes.length > 0
                }), h.tabbableGroups.length <= 0 && !g("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
              if (h.containerGroups.find(function(e) {
                  return e.posTabIndexesFound
                }) && h.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            T = function(e) {
              var t = e.activeElement;
              if (t) return t.shadowRoot && null !== t.shadowRoot.activeElement ? T(t.shadowRoot) : t
            },
            E = function(e) {
              !1 !== e && e !== T(document) && (e && e.focus ? (e.focus({
                preventScroll: !!b.preventScroll
              }), h.mostRecentlyFocusedNode = e, function(e) {
                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
              }(e) && e.select()) : E(w()))
            },
            k = function(e) {
              var t = g("setReturnFocus", {
                params: [e]
              });
              return t || !1 !== t && e
            },
            D = function(e) {
              var t = e.target,
                n = e.event,
                r = e.isBackward,
                a = void 0 !== r && r;
              t = t || p(n), O();
              var i = null;
              if (h.tabbableGroups.length > 0) {
                var u = m(t, n),
                  s = u >= 0 ? h.containerGroups[u] : void 0;
                if (u < 0) i = a ? h.tabbableGroups[h.tabbableGroups.length - 1].lastTabbableNode : h.tabbableGroups[0].firstTabbableNode;
                else if (a) {
                  var l = h.tabbableGroups.findIndex(function(e) {
                    var n = e.firstTabbableNode;
                    return t === n
                  });
                  if (l < 0 && (s.container === t || (0, o.isFocusable)(t, b.tabbableOptions) && !(0, o.isTabbable)(t, b.tabbableOptions) && !s.nextTabbableNode(t, !1)) && (l = u), l >= 0) {
                    var d = 0 === l ? h.tabbableGroups.length - 1 : l - 1,
                      f = h.tabbableGroups[d];
                    i = (0, o.getTabIndex)(t) >= 0 ? f.lastTabbableNode : f.lastDomTabbableNode
                  } else c(n) || (i = s.nextTabbableNode(t, !1))
                } else {
                  var v = h.tabbableGroups.findIndex(function(e) {
                    var n = e.lastTabbableNode;
                    return t === n
                  });
                  if (v < 0 && (s.container === t || (0, o.isFocusable)(t, b.tabbableOptions) && !(0, o.isTabbable)(t, b.tabbableOptions) && !s.nextTabbableNode(t)) && (v = u), v >= 0) {
                    var y = v === h.tabbableGroups.length - 1 ? 0 : v + 1,
                      w = h.tabbableGroups[y];
                    i = (0, o.getTabIndex)(t) >= 0 ? w.firstTabbableNode : w.firstDomTabbableNode
                  } else c(n) || (i = s.nextTabbableNode(t))
                }
              } else i = g("fallbackFocus");
              return i
            },
            F = function(e) {
              var t = p(e);
              m(t, e) >= 0 || (f(b.clickOutsideDeactivates, e) ? n.deactivate({
                returnFocus: b.returnFocusOnDeactivate
              }) : f(b.allowOutsideClick, e) || e.preventDefault())
            },
            P = function(e) {
              var t = p(e),
                n = m(t, e) >= 0;
              if (n || t instanceof Document) n && (h.mostRecentlyFocusedNode = t);
              else {
                var r;
                e.stopImmediatePropagation();
                var a = !0;
                if (h.mostRecentlyFocusedNode)
                  if ((0, o.getTabIndex)(h.mostRecentlyFocusedNode) > 0) {
                    var i = m(h.mostRecentlyFocusedNode),
                      u = h.containerGroups[i].tabbableNodes;
                    if (u.length > 0) {
                      var c = u.findIndex(function(e) {
                        return e === h.mostRecentlyFocusedNode
                      });
                      c >= 0 && (b.isKeyForward(h.recentNavEvent) ? c + 1 < u.length && (r = u[c + 1], a = !1) : c - 1 >= 0 && (r = u[c - 1], a = !1))
                    }
                  } else h.containerGroups.some(function(e) {
                    return e.tabbableNodes.some(function(e) {
                      return (0, o.getTabIndex)(e) > 0
                    })
                  }) || (a = !1);
                else a = !1;
                a && (r = D({
                  target: h.mostRecentlyFocusedNode,
                  isBackward: b.isKeyBackward(h.recentNavEvent)
                })), E(r || h.mostRecentlyFocusedNode || w())
              }
              h.recentNavEvent = void 0
            },
            N = function(e) {
              (b.isKeyForward(e) || b.isKeyBackward(e)) && function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                h.recentNavEvent = e;
                var n = D({
                  event: e,
                  isBackward: t
                });
                n && (c(e) && e.preventDefault(), E(n))
              }(e, b.isKeyBackward(e))
            },
            S = function(e) {
              var t;
              "Escape" !== (null == (t = e) ? void 0 : t.key) && "Esc" !== (null == t ? void 0 : t.key) && 27 !== (null == t ? void 0 : t.keyCode) || !1 === f(b.escapeDeactivates, e) || (e.preventDefault(), n.deactivate())
            },
            R = function(e) {
              var t = p(e);
              m(t, e) >= 0 || f(b.clickOutsideDeactivates, e) || f(b.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
            },
            C = function() {
              if (h.active) return function(e, t) {
                if (e.length > 0) {
                  var n = e[e.length - 1];
                  n !== t && n._setPausedState(!0)
                }
                var o = e.indexOf(t); - 1 === o || e.splice(o, 1), e.push(t)
              }(i, n), h.delayInitialFocusTimer = b.delayInitialFocus ? d(function() {
                E(w())
              }) : E(w()), a.addEventListener("focusin", P, !0), a.addEventListener("mousedown", F, {
                capture: !0,
                passive: !1
              }), a.addEventListener("touchstart", F, {
                capture: !0,
                passive: !1
              }), a.addEventListener("click", R, {
                capture: !0,
                passive: !1
              }), a.addEventListener("keydown", N, {
                capture: !0,
                passive: !1
              }), a.addEventListener("keydown", S), n
            },
            I = function() {
              if (h.active) return a.removeEventListener("focusin", P, !0), a.removeEventListener("mousedown", F, !0), a.removeEventListener("touchstart", F, !0), a.removeEventListener("click", R, !0), a.removeEventListener("keydown", N, !0), a.removeEventListener("keydown", S), n
            },
            x = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver(function(e) {
              e.some(function(e) {
                return Array.from(e.removedNodes).some(function(e) {
                  return e === h.mostRecentlyFocusedNode
                })
              }) && E(w())
            }) : void 0,
            j = function() {
              x && (x.disconnect(), h.active && !h.paused && h.containers.map(function(e) {
                x.observe(e, {
                  subtree: !0,
                  childList: !0
                })
              }))
            };
          return n = {
            get active() {
              return h.active
            },
            get paused() {
              return h.paused
            },
            activate: function(e) {
              if (h.active) return this;
              var t = y(e, "onActivate"),
                n = y(e, "onPostActivate"),
                o = y(e, "checkCanFocusTrap");
              o || O(), h.active = !0, h.paused = !1, h.nodeFocusedBeforeActivation = T(a), null == t || t();
              var r = function() {
                o && O(), C(), j(), null == n || n()
              };
              return o ? (o(h.containers.concat()).then(r, r), this) : (r(), this)
            },
            deactivate: function(e) {
              if (!h.active) return this;
              var t = u({
                onDeactivate: b.onDeactivate,
                onPostDeactivate: b.onPostDeactivate,
                checkCanReturnFocus: b.checkCanReturnFocus
              }, e);
              clearTimeout(h.delayInitialFocusTimer), h.delayInitialFocusTimer = void 0, I(), h.active = !1, h.paused = !1, j(),
                function(e, t) {
                  var n = e.indexOf(t); - 1 !== n && e.splice(n, 1), e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1)
                }(i, n);
              var o = y(t, "onDeactivate"),
                r = y(t, "onPostDeactivate"),
                a = y(t, "checkCanReturnFocus"),
                c = y(t, "returnFocus", "returnFocusOnDeactivate");
              null == o || o();
              var s = function() {
                d(function() {
                  c && E(k(h.nodeFocusedBeforeActivation)), null == r || r()
                })
              };
              return c && a ? (a(k(h.nodeFocusedBeforeActivation)).then(s, s), this) : (s(), this)
            },
            pause: function(e) {
              return h.active ? (h.manuallyPaused = !0, this._setPausedState(!0, e)) : this
            },
            unpause: function(e) {
              return h.active ? (h.manuallyPaused = !1, i[i.length - 1] !== this ? this : this._setPausedState(!1, e)) : this
            },
            updateContainerElements: function(e) {
              var t = [].concat(e).filter(Boolean);
              return h.containers = t.map(function(e) {
                return "string" == typeof e ? a.querySelector(e) : e
              }), h.active && O(), j(), this
            }
          }, Object.defineProperties(n, {
            _isManuallyPaused: {
              value: function() {
                return h.manuallyPaused
              }
            },
            _setPausedState: {
              value: function(e, t) {
                if (h.paused === e) return this;
                if (h.paused = e, e) {
                  var n = y(t, "onPause"),
                    o = y(t, "onPostPause");
                  null == n || n(), I(), j(), null == o || o()
                } else {
                  var r = y(t, "onUnpause"),
                    a = y(t, "onPostUnpause");
                  null == r || r(), O(), C(), j(), null == a || a()
                }
                return this
              }
            }
          }), n.updateContainerElements(e), n
        }
    }
  }
]);