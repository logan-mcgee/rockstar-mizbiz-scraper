! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e4ddf0b5-8493-4532-a29b-517efc5fe564", e._sentryDebugIdIdentifier = "sentry-dbid-e4ddf0b5-8493-4532-a29b-517efc5fe564")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [6404], {
    86404: (e, t, n) => {
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
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, u(o.key), o)
        }
      }

      function a(e, t) {
        return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, a(e, t)
      }

      function i(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }

      function u(e) {
        var t = function(e, t) {
          if ("object" !== o(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" !== o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" === o(t) ? t : String(t)
      }
      var s = n(62229),
        l = n(57145),
        f = n(93769).createFocusTrap,
        d = n(78734).isFocusable,
        p = function(e) {
          ! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && a(e, t)
          }(v, e);
          var t, n, l, f, p = (l = v, f = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, t = c(l);
            if (f) {
              var n = c(this).constructor;
              e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return function(e, t) {
              if (t && ("object" === o(t) || "function" == typeof t)) return t;
              if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
              return i(e)
            }(this, e)
          });

          function v(e) {
            var t, n, o, r;
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, v), n = i(t = p.call(this, e)), r = function(e) {
              var t, n = null !== (t = this.internalOptions[e]) && void 0 !== t ? t : this.originalOptions[e];
              if ("function" == typeof n) {
                for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) r[a - 1] = arguments[a];
                n = n.apply(void 0, r)
              }
              if (!0 === n && (n = void 0), !n) {
                if (void 0 === n || !1 === n) return n;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var i, c = n;
              if ("string" == typeof n && !(c = null === (i = this.getDocument()) || void 0 === i ? void 0 : i.querySelector(n))) throw new Error("`".concat(e, "` as selector refers to no known node"));
              return c
            }, (o = u(o = "getNodeForOption")) in n ? Object.defineProperty(n, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = r, t.handleDeactivate = t.handleDeactivate.bind(i(t)), t.handlePostDeactivate = t.handlePostDeactivate.bind(i(t)), t.handleClickOutsideDeactivates = t.handleClickOutsideDeactivates.bind(i(t)), t.internalOptions = {
              returnFocusOnDeactivate: !1,
              checkCanReturnFocus: null,
              onDeactivate: t.handleDeactivate,
              onPostDeactivate: t.handlePostDeactivate,
              clickOutsideDeactivates: t.handleClickOutsideDeactivates
            }, t.originalOptions = {
              returnFocusOnDeactivate: !0,
              onDeactivate: null,
              onPostDeactivate: null,
              checkCanReturnFocus: null,
              clickOutsideDeactivates: !1
            };
            var a = e.focusTrapOptions;
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && ("returnFocusOnDeactivate" !== c && "onDeactivate" !== c && "onPostDeactivate" !== c && "checkCanReturnFocus" !== c && "clickOutsideDeactivates" !== c ? t.internalOptions[c] = a[c] : t.originalOptions[c] = a[c]);
            return t.outsideClick = null, t.focusTrapElements = e.containerElements || [], t.updatePreviousElement(), t
          }
          return t = v, (n = [{
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
                    n = !(!e.originalOptions.returnFocusOnDeactivate || null == t || !t.focus || e.outsideClick && (!e.outsideClick.allowDeactivation || d(e.outsideClick.target, e.internalOptions.tabbableOptions))),
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
          }]) && r(t.prototype, n), Object.defineProperty(t, "prototype", {
            writable: !1
          }), v
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
        _createFocusTrap: f
      }, e.exports = p
    },
    93769: (e, t, n) => {
      n.r(t), n.d(t, {
        createFocusTrap: () => v
      });
      var o = n(78734);

      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, o)
        }
        return n
      }

      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? r(Object(n), !0).forEach((function(t) {
            var o, r, a;
            o = e, r = t, a = n[t], (r = function(e) {
              var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var o = n.call(e, "string");
                  if ("object" != typeof o) return o;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
              }(e);
              return "symbol" == typeof t ? t : String(t)
            }(r)) in o ? Object.defineProperty(o, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[r] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      var i = function(e) {
          return "Tab" === (null == e ? void 0 : e.key) || 9 === (null == e ? void 0 : e.keyCode)
        },
        c = function(e) {
          return i(e) && !e.shiftKey
        },
        u = function(e) {
          return i(e) && e.shiftKey
        },
        s = function(e) {
          return setTimeout(e, 0)
        },
        l = function(e, t) {
          var n = -1;
          return e.every((function(e, o) {
            return !t(e) || (n = o, !1)
          })), n
        },
        f = function(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
          return "function" == typeof e ? e.apply(void 0, n) : e
        },
        d = function(e) {
          return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        },
        p = [],
        v = function(e, t) {
          var n, r = (null == t ? void 0 : t.document) || document,
            v = (null == t ? void 0 : t.trapStack) || p,
            b = a({
              returnFocusOnDeactivate: !0,
              escapeDeactivates: !0,
              delayInitialFocus: !0,
              isKeyForward: c,
              isKeyBackward: u
            }, t),
            h = {
              containers: [],
              containerGroups: [],
              tabbableGroups: [],
              nodeFocusedBeforeActivation: null,
              mostRecentlyFocusedNode: null,
              active: !1,
              paused: !1,
              delayInitialFocusTimer: void 0,
              recentNavEvent: void 0
            },
            y = function(e, t, n) {
              return e && void 0 !== e[t] ? e[t] : b[n || t]
            },
            m = function(e, t) {
              var n = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
              return h.containerGroups.findIndex((function(t) {
                var o = t.container,
                  r = t.tabbableNodes;
                return o.contains(e) || (null == n ? void 0 : n.includes(o)) || r.find((function(t) {
                  return t === e
                }))
              }))
            },
            g = function(e) {
              var t = b[e];
              if ("function" == typeof t) {
                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                t = t.apply(void 0, o)
              }
              if (!0 === t && (t = void 0), !t) {
                if (void 0 === t || !1 === t) return t;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var i = t;
              if ("string" == typeof t && !(i = r.querySelector(t))) throw new Error("`".concat(e, "` as selector refers to no known node"));
              return i
            },
            w = function() {
              var e = g("initialFocus");
              if (!1 === e) return !1;
              if (void 0 === e || !(0, o.isFocusable)(e, b.tabbableOptions))
                if (m(r.activeElement) >= 0) e = r.activeElement;
                else {
                  var t = h.tabbableGroups[0];
                  e = t && t.firstTabbableNode || g("fallbackFocus")
                } if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
              return e
            },
            O = function() {
              if (h.containerGroups = h.containers.map((function(e) {
                  var t = (0, o.tabbable)(e, b.tabbableOptions),
                    n = (0, o.focusable)(e, b.tabbableOptions),
                    r = t.length > 0 ? t[0] : void 0,
                    a = t.length > 0 ? t[t.length - 1] : void 0,
                    i = n.find((function(e) {
                      return (0, o.isTabbable)(e)
                    })),
                    c = n.slice().reverse().find((function(e) {
                      return (0, o.isTabbable)(e)
                    })),
                    u = !!t.find((function(e) {
                      return (0, o.getTabIndex)(e) > 0
                    }));
                  return {
                    container: e,
                    tabbableNodes: t,
                    focusableNodes: n,
                    posTabIndexesFound: u,
                    firstTabbableNode: r,
                    lastTabbableNode: a,
                    firstDomTabbableNode: i,
                    lastDomTabbableNode: c,
                    nextTabbableNode: function(e) {
                      var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        a = t.indexOf(e);
                      return a < 0 ? r ? n.slice(n.indexOf(e) + 1).find((function(e) {
                        return (0, o.isTabbable)(e)
                      })) : n.slice(0, n.indexOf(e)).reverse().find((function(e) {
                        return (0, o.isTabbable)(e)
                      })) : t[a + (r ? 1 : -1)]
                    }
                  }
                })), h.tabbableGroups = h.containerGroups.filter((function(e) {
                  return e.tabbableNodes.length > 0
                })), h.tabbableGroups.length <= 0 && !g("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
              if (h.containerGroups.find((function(e) {
                  return e.posTabIndexesFound
                })) && h.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            T = function e(t) {
              var n = t.activeElement;
              if (n) return n.shadowRoot && null !== n.shadowRoot.activeElement ? e(n.shadowRoot) : n
            },
            E = function e(t) {
              !1 !== t && t !== T(document) && (t && t.focus ? (t.focus({
                preventScroll: !!b.preventScroll
              }), h.mostRecentlyFocusedNode = t, function(e) {
                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
              }(t) && t.select()) : e(w()))
            },
            k = function(e) {
              var t = g("setReturnFocus", e);
              return t || !1 !== t && e
            },
            D = function(e) {
              var t = e.target,
                n = e.event,
                r = e.isBackward,
                a = void 0 !== r && r;
              t = t || d(n), O();
              var c = null;
              if (h.tabbableGroups.length > 0) {
                var u = m(t, n),
                  s = u >= 0 ? h.containerGroups[u] : void 0;
                if (u < 0) c = a ? h.tabbableGroups[h.tabbableGroups.length - 1].lastTabbableNode : h.tabbableGroups[0].firstTabbableNode;
                else if (a) {
                  var f = l(h.tabbableGroups, (function(e) {
                    var n = e.firstTabbableNode;
                    return t === n
                  }));
                  if (f < 0 && (s.container === t || (0, o.isFocusable)(t, b.tabbableOptions) && !(0, o.isTabbable)(t, b.tabbableOptions) && !s.nextTabbableNode(t, !1)) && (f = u), f >= 0) {
                    var p = 0 === f ? h.tabbableGroups.length - 1 : f - 1,
                      v = h.tabbableGroups[p];
                    c = (0, o.getTabIndex)(t) >= 0 ? v.lastTabbableNode : v.lastDomTabbableNode
                  } else i(n) || (c = s.nextTabbableNode(t, !1))
                } else {
                  var y = l(h.tabbableGroups, (function(e) {
                    var n = e.lastTabbableNode;
                    return t === n
                  }));
                  if (y < 0 && (s.container === t || (0, o.isFocusable)(t, b.tabbableOptions) && !(0, o.isTabbable)(t, b.tabbableOptions) && !s.nextTabbableNode(t)) && (y = u), y >= 0) {
                    var w = y === h.tabbableGroups.length - 1 ? 0 : y + 1,
                      T = h.tabbableGroups[w];
                    c = (0, o.getTabIndex)(t) >= 0 ? T.firstTabbableNode : T.firstDomTabbableNode
                  } else i(n) || (c = s.nextTabbableNode(t))
                }
              } else c = g("fallbackFocus");
              return c
            },
            F = function(e) {
              var t = d(e);
              m(t, e) >= 0 || (f(b.clickOutsideDeactivates, e) ? n.deactivate({
                returnFocus: b.returnFocusOnDeactivate
              }) : f(b.allowOutsideClick, e) || e.preventDefault())
            },
            N = function(e) {
              var t = d(e),
                n = m(t, e) >= 0;
              if (n || t instanceof Document) n && (h.mostRecentlyFocusedNode = t);
              else {
                var r;
                e.stopImmediatePropagation();
                var a = !0;
                if (h.mostRecentlyFocusedNode)
                  if ((0, o.getTabIndex)(h.mostRecentlyFocusedNode) > 0) {
                    var i = m(h.mostRecentlyFocusedNode),
                      c = h.containerGroups[i].tabbableNodes;
                    if (c.length > 0) {
                      var u = c.findIndex((function(e) {
                        return e === h.mostRecentlyFocusedNode
                      }));
                      u >= 0 && (b.isKeyForward(h.recentNavEvent) ? u + 1 < c.length && (r = c[u + 1], a = !1) : u - 1 >= 0 && (r = c[u - 1], a = !1))
                    }
                  } else h.containerGroups.some((function(e) {
                    return e.tabbableNodes.some((function(e) {
                      return (0, o.getTabIndex)(e) > 0
                    }))
                  })) || (a = !1);
                else a = !1;
                a && (r = D({
                  target: h.mostRecentlyFocusedNode,
                  isBackward: b.isKeyBackward(h.recentNavEvent)
                })), E(r || h.mostRecentlyFocusedNode || w())
              }
              h.recentNavEvent = void 0
            },
            P = function(e) {
              if (("Escape" === (null == (t = e) ? void 0 : t.key) || "Esc" === (null == t ? void 0 : t.key) || 27 === (null == t ? void 0 : t.keyCode)) && !1 !== f(b.escapeDeactivates, e)) return e.preventDefault(), void n.deactivate();
              var t;
              (b.isKeyForward(e) || b.isKeyBackward(e)) && function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                h.recentNavEvent = e;
                var n = D({
                  event: e,
                  isBackward: t
                });
                n && (i(e) && e.preventDefault(), E(n))
              }(e, b.isKeyBackward(e))
            },
            S = function(e) {
              var t = d(e);
              m(t, e) >= 0 || f(b.clickOutsideDeactivates, e) || f(b.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
            },
            R = function() {
              if (h.active) return function(e, t) {
                if (e.length > 0) {
                  var n = e[e.length - 1];
                  n !== t && n.pause()
                }
                var o = e.indexOf(t); - 1 === o || e.splice(o, 1), e.push(t)
              }(v, n), h.delayInitialFocusTimer = b.delayInitialFocus ? s((function() {
                E(w())
              })) : E(w()), r.addEventListener("focusin", N, !0), r.addEventListener("mousedown", F, {
                capture: !0,
                passive: !1
              }), r.addEventListener("touchstart", F, {
                capture: !0,
                passive: !1
              }), r.addEventListener("click", S, {
                capture: !0,
                passive: !1
              }), r.addEventListener("keydown", P, {
                capture: !0,
                passive: !1
              }), n
            },
            C = function() {
              if (h.active) return r.removeEventListener("focusin", N, !0), r.removeEventListener("mousedown", F, !0), r.removeEventListener("touchstart", F, !0), r.removeEventListener("click", S, !0), r.removeEventListener("keydown", P, !0), n
            },
            I = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver((function(e) {
              e.some((function(e) {
                return Array.from(e.removedNodes).some((function(e) {
                  return e === h.mostRecentlyFocusedNode
                }))
              })) && E(w())
            })) : void 0,
            x = function() {
              I && (I.disconnect(), h.active && !h.paused && h.containers.map((function(e) {
                I.observe(e, {
                  subtree: !0,
                  childList: !0
                })
              })))
            };
          return (n = {
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
              o || O(), h.active = !0, h.paused = !1, h.nodeFocusedBeforeActivation = r.activeElement, null == t || t();
              var a = function() {
                o && O(), R(), x(), null == n || n()
              };
              return o ? (o(h.containers.concat()).then(a, a), this) : (a(), this)
            },
            deactivate: function(e) {
              if (!h.active) return this;
              var t = a({
                onDeactivate: b.onDeactivate,
                onPostDeactivate: b.onPostDeactivate,
                checkCanReturnFocus: b.checkCanReturnFocus
              }, e);
              clearTimeout(h.delayInitialFocusTimer), h.delayInitialFocusTimer = void 0, C(), h.active = !1, h.paused = !1, x(),
                function(e, t) {
                  var n = e.indexOf(t); - 1 !== n && e.splice(n, 1), e.length > 0 && e[e.length - 1].unpause()
                }(v, n);
              var o = y(t, "onDeactivate"),
                r = y(t, "onPostDeactivate"),
                i = y(t, "checkCanReturnFocus"),
                c = y(t, "returnFocus", "returnFocusOnDeactivate");
              null == o || o();
              var u = function() {
                s((function() {
                  c && E(k(h.nodeFocusedBeforeActivation)), null == r || r()
                }))
              };
              return c && i ? (i(k(h.nodeFocusedBeforeActivation)).then(u, u), this) : (u(), this)
            },
            pause: function(e) {
              if (h.paused || !h.active) return this;
              var t = y(e, "onPause"),
                n = y(e, "onPostPause");
              return h.paused = !0, null == t || t(), C(), x(), null == n || n(), this
            },
            unpause: function(e) {
              if (!h.paused || !h.active) return this;
              var t = y(e, "onUnpause"),
                n = y(e, "onPostUnpause");
              return h.paused = !1, null == t || t(), O(), R(), x(), null == n || n(), this
            },
            updateContainerElements: function(e) {
              var t = [].concat(e).filter(Boolean);
              return h.containers = t.map((function(e) {
                return "string" == typeof e ? r.querySelector(e) : e
              })), h.active && O(), x(), this
            }
          }).updateContainerElements(e), n
        }
    },
    78734: (e, t, n) => {
      n.r(t), n.d(t, {
        focusable: () => O,
        getTabIndex: () => d,
        isFocusable: () => k,
        isTabbable: () => T,
        tabbable: () => w
      });
      var o = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
        r = o.join(","),
        a = "undefined" == typeof Element,
        i = a ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        c = !a && Element.prototype.getRootNode ? function(e) {
          var t;
          return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
        } : function(e) {
          return null == e ? void 0 : e.ownerDocument
        },
        u = function e(t, n) {
          var o;
          void 0 === n && (n = !0);
          var r = null == t || null === (o = t.getAttribute) || void 0 === o ? void 0 : o.call(t, "inert");
          return "" === r || "true" === r || n && t && e(t.parentNode)
        },
        s = function(e, t, n) {
          if (u(e)) return [];
          var o = Array.prototype.slice.apply(e.querySelectorAll(r));
          return t && i.call(e, r) && o.unshift(e), o.filter(n)
        },
        l = function e(t, n, o) {
          for (var a = [], c = Array.from(t); c.length;) {
            var s = c.shift();
            if (!u(s, !1))
              if ("SLOT" === s.tagName) {
                var l = s.assignedElements(),
                  f = e(l.length ? l : s.children, !0, o);
                o.flatten ? a.push.apply(a, f) : a.push({
                  scopeParent: s,
                  candidates: f
                })
              } else {
                i.call(s, r) && o.filter(s) && (n || !t.includes(s)) && a.push(s);
                var d = s.shadowRoot || "function" == typeof o.getShadowRoot && o.getShadowRoot(s),
                  p = !u(d, !1) && (!o.shadowRootFilter || o.shadowRootFilter(s));
                if (d && p) {
                  var v = e(!0 === d ? s.children : d.children, !0, o);
                  o.flatten ? a.push.apply(a, v) : a.push({
                    scopeParent: s,
                    candidates: v
                  })
                } else c.unshift.apply(c, s.children)
              }
          }
          return a
        },
        f = function(e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
        },
        d = function(e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
            var t, n = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
            return "" === n || "true" === n
          }(e)) && !f(e) ? 0 : e.tabIndex
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
          return !(t.disabled || u(t) || function(e) {
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
                  var u = e.parentElement,
                    s = c(e);
                  if (u && !u.shadowRoot && !0 === o(u)) return b(e);
                  e = e.assignedSlot ? e.assignedSlot : u || s === e.ownerDocument ? u : s.host
                }
                e = a
              }
              if (function(e) {
                  var t, n, o, r, a = e && c(e),
                    i = null === (t = a) || void 0 === t ? void 0 : t.host,
                    u = !1;
                  if (a && a !== e)
                    for (u = !!(null !== (n = i) && void 0 !== n && null !== (o = n.ownerDocument) && void 0 !== o && o.contains(i) || null != e && null !== (r = e.ownerDocument) && void 0 !== r && r.contains(e)); !u && i;) {
                      var s, l, f;
                      u = !(null === (l = i = null === (s = a = c(i)) || void 0 === s ? void 0 : s.host) || void 0 === l || null === (f = l.ownerDocument) || void 0 === f || !f.contains(i))
                    }
                  return u
                }(e)) return !e.getClientRects().length;
              if ("legacy-full" !== n) return !0
            }
            return !1
          }(t, e) || function(e) {
            return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
              return "SUMMARY" === e.tagName
            }))
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
              var t, n = e.form || c(e),
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
          }(t) || d(t) < 0 || !h(e, t))
        },
        m = function(e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0)
        },
        g = function e(t) {
          var n = [],
            o = [];
          return t.forEach((function(t, r) {
            var a = !!t.scopeParent,
              i = a ? t.scopeParent : t,
              c = function(e, t) {
                var n = d(e);
                return n < 0 && t && !f(e) ? 0 : n
              }(i, a),
              u = a ? e(t.candidates) : i;
            0 === c ? a ? n.push.apply(n, u) : n.push(i) : o.push({
              documentOrder: r,
              tabIndex: c,
              item: t,
              isScope: a,
              content: u
            })
          })), o.sort(p).reduce((function(e, t) {
            return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
          }), []).concat(n)
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
    }
  }
]);