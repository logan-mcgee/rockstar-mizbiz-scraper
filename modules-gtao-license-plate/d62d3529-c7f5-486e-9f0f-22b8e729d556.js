try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d62d3529-c7f5-486e-9f0f-22b8e729d556", e._sentryDebugIdIdentifier = "sentry-dbid-d62d3529-c7f5-486e-9f0f-22b8e729d556")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [6540], {
    44514(e, t, r) {
      "use strict";

      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }

      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l(n.key), n)
        }
      }

      function a(e, t, r) {
        return t = i(t),
          function(e, t) {
            if (t && ("object" == n(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, s() ? Reflect.construct(t, r || [], i(e).constructor) : t.apply(e, r))
      }

      function s() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (s = function() {
          return !!e
        })()
      }

      function i(e) {
        return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, i(e)
      }

      function d(e, t) {
        return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, d(e, t)
      }

      function l(e) {
        var t = function(e) {
          if ("object" != n(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != n(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == n(t) ? t : t + ""
      }
      var u = r(93082),
        c = r(60331),
        f = r(38733).createFocusTrap,
        p = r(47766).isFocusable,
        v = function(e) {
          function t(e) {
            var r, n, o, s;
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), n = r = a(this, t, [e]), s = function(e) {
              var t, r = null !== (t = this.internalOptions[e]) && void 0 !== t ? t : this.originalOptions[e];
              if ("function" == typeof r) {
                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                r = r.apply(void 0, o)
              }
              if (!0 === r && (r = void 0), !r) {
                if (void 0 === r || !1 === r) return r;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var s, i = r;
              if ("string" == typeof r && !(i = null === (s = this.getDocument()) || void 0 === s ? void 0 : s.querySelector(r))) throw new Error("`".concat(e, "` as selector refers to no known node"));
              return i
            }, (o = l(o = "getNodeForOption")) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s, r.handleDeactivate = r.handleDeactivate.bind(r), r.handlePostDeactivate = r.handlePostDeactivate.bind(r), r.handleClickOutsideDeactivates = r.handleClickOutsideDeactivates.bind(r), r.internalOptions = {
              returnFocusOnDeactivate: !1,
              checkCanReturnFocus: null,
              onDeactivate: r.handleDeactivate,
              onPostDeactivate: r.handlePostDeactivate,
              clickOutsideDeactivates: r.handleClickOutsideDeactivates
            }, r.originalOptions = {
              returnFocusOnDeactivate: !0,
              onDeactivate: null,
              onPostDeactivate: null,
              checkCanReturnFocus: null,
              clickOutsideDeactivates: !1
            };
            var i = e.focusTrapOptions;
            for (var d in i) Object.prototype.hasOwnProperty.call(i, d) && ("returnFocusOnDeactivate" !== d && "onDeactivate" !== d && "onPostDeactivate" !== d && "checkCanReturnFocus" !== d && "clickOutsideDeactivates" !== d ? r.internalOptions[d] = i[d] : r.originalOptions[d] = i[d]);
            return r.outsideClick = null, r.focusTrapElements = e.containerElements || [], r.updatePreviousElement(), r
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
            }), t && d(e, t)
          }(t, e), r = t, (n = [{
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
                    r = !(!e.originalOptions.returnFocusOnDeactivate || null == t || !t.focus || e.outsideClick && (!e.outsideClick.allowDeactivation || p(e.outsideClick.target, e.internalOptions.tabbableOptions))),
                    n = e.internalOptions.preventScroll,
                    o = void 0 !== n && n;
                  r && t.focus({
                    preventScroll: o
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
                  r = e.active && !this.props.active,
                  n = !e.paused && this.props.paused,
                  o = e.paused && !this.props.paused;
                if (t && (this.updatePreviousElement(), this.focusTrap.activate()), r) return void this.deactivateTrap();
                n && this.focusTrap.pause(), o && this.focusTrap.unpause()
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
                t = this.props.children ? u.Children.only(this.props.children) : void 0;
              if (t) {
                if (t.type && t.type === u.Fragment) throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
                return u.cloneElement(t, {
                  ref: function(r) {
                    var n = e.props.containerElements;
                    t && ("function" == typeof t.ref ? t.ref(r) : t.ref && (t.ref.current = r)), e.focusTrapElements = n || [r]
                  }
                })
              }
              return null
            }
          }]) && o(r.prototype, n), Object.defineProperty(r, "prototype", {
            writable: !1
          }), r;
          var r, n
        }(u.Component),
        y = "undefined" == typeof Element ? Function : Element;
      v.propTypes = {
        active: c.bool,
        paused: c.bool,
        focusTrapOptions: c.shape({
          document: c.object,
          onActivate: c.func,
          onPostActivate: c.func,
          checkCanFocusTrap: c.func,
          onPause: c.func,
          onPostPause: c.func,
          onUnpause: c.func,
          onPostUnpause: c.func,
          onDeactivate: c.func,
          onPostDeactivate: c.func,
          checkCanReturnFocus: c.func,
          initialFocus: c.oneOfType([c.instanceOf(y), c.string, c.bool, c.func]),
          fallbackFocus: c.oneOfType([c.instanceOf(y), c.string, c.func]),
          escapeDeactivates: c.oneOfType([c.bool, c.func]),
          clickOutsideDeactivates: c.oneOfType([c.bool, c.func]),
          returnFocusOnDeactivate: c.bool,
          setReturnFocus: c.oneOfType([c.instanceOf(y), c.string, c.bool, c.func]),
          allowOutsideClick: c.oneOfType([c.bool, c.func]),
          preventScroll: c.bool,
          tabbableOptions: c.shape({
            displayCheck: c.oneOf(["full", "legacy-full", "non-zero-area", "none"]),
            getShadowRoot: c.oneOfType([c.bool, c.func])
          }),
          trapStack: c.array,
          isKeyForward: c.func,
          isKeyBackward: c.func
        }),
        containerElements: c.arrayOf(c.instanceOf(y)),
        children: c.oneOfType([c.element, c.instanceOf(y)])
      }, v.defaultProps = {
        active: !0,
        paused: !1,
        focusTrapOptions: {},
        _createFocusTrap: f
      }, e.exports = v
    },
    38733(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        createFocusTrap: () => h
      });
      var n = r(47766);

      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function a(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = l(e)) || t) {
            r && (e = r);
            var n = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return n >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[n++]
                }
              },
              e: function(e) {
                throw e
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s = !0,
          i = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return s = e.done, e
          },
          e: function(e) {
            i = !0, a = e
          },
          f: function() {
            try {
              s || null == r.return || r.return()
            } finally {
              if (i) throw a
            }
          }
        }
      }

      function s(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t);
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e, "string");
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(Object(r), !0).forEach(function(t) {
            s(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function l(e, t) {
        if (e) {
          if ("string" == typeof e) return o(e, t);
          var r = {}.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0
        }
      }
      var u = {
          getActiveTrap: function(e) {
            return (null == e ? void 0 : e.length) > 0 ? e[e.length - 1] : null
          },
          activateTrap: function(e, t) {
            t !== u.getActiveTrap(e) && u.pauseTrap(e);
            var r = e.indexOf(t); - 1 === r || e.splice(r, 1), e.push(t)
          },
          deactivateTrap: function(e, t) {
            var r = e.indexOf(t); - 1 !== r && e.splice(r, 1), u.unpauseTrap(e)
          },
          pauseTrap: function(e) {
            var t = u.getActiveTrap(e);
            null == t || t._setPausedState(!0)
          },
          unpauseTrap: function(e) {
            var t = u.getActiveTrap(e);
            t && !t._isManuallyPaused() && t._setPausedState(!1)
          }
        },
        c = function(e) {
          return "Tab" === (null == e ? void 0 : e.key) || 9 === (null == e ? void 0 : e.keyCode)
        },
        f = function(e) {
          return c(e) && !e.shiftKey
        },
        p = function(e) {
          return c(e) && e.shiftKey
        },
        v = function(e) {
          return setTimeout(e, 0)
        },
        y = function(e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return "function" == typeof e ? e.apply(void 0, r) : e
        },
        m = function(e) {
          return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        },
        b = [],
        h = function(e, t) {
          var r, s = (null == t ? void 0 : t.document) || document,
            i = (null == t ? void 0 : t.trapStack) || b,
            h = d({
              returnFocusOnDeactivate: !0,
              escapeDeactivates: !0,
              delayInitialFocus: !0,
              isolateSubtrees: !1,
              isKeyForward: f,
              isKeyBackward: p
            }, t),
            g = {
              containers: [],
              containerGroups: [],
              tabbableGroups: [],
              adjacentElements: new Set,
              alreadySilent: new Set,
              nodeFocusedBeforeActivation: null,
              mostRecentlyFocusedNode: null,
              active: !1,
              paused: !1,
              manuallyPaused: !1,
              delayInitialFocusTimer: void 0,
              recentNavEvent: void 0
            },
            w = function(e, t, r) {
              return e && void 0 !== e[t] ? e[t] : h[r || t]
            },
            x = function(e, t) {
              var r = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
              return g.containerGroups.findIndex(function(t) {
                var n = t.container,
                  o = t.tabbableNodes;
                return n.contains(e) || (null == r ? void 0 : r.includes(n)) || o.find(function(t) {
                  return t === e
                })
              })
            },
            _ = function(e) {
              var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = r.hasFallback,
                a = void 0 !== n && n,
                i = r.params,
                d = void 0 === i ? [] : i,
                u = h[e];
              if ("function" == typeof u && (u = u.apply(void 0, function(e) {
                  if (Array.isArray(e)) return o(e)
                }(t = d) || function(e) {
                  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(t) || l(t) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())), !0 === u && (u = void 0), !u) {
                if (void 0 === u || !1 === u) return u;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var c = u;
              if ("string" == typeof u) {
                try {
                  c = s.querySelector(u)
                } catch (t) {
                  throw new Error("`".concat(e, '` appears to be an invalid selector; error="').concat(t.message, '"'))
                }
                if (!c && !a) throw new Error("`".concat(e, "` as selector refers to no known node"))
              }
              return c
            },
            j = function() {
              var e = _("initialFocus", {
                hasFallback: !0
              });
              if (!1 === e) return !1;
              if (void 0 === e || e && !(0, n.isFocusable)(e, h.tabbableOptions))
                if (x(s.activeElement) >= 0) e = s.activeElement;
                else {
                  var t = g.tabbableGroups[0];
                  e = t && t.firstTabbableNode || _("fallbackFocus")
                }
              else null === e && (e = _("fallbackFocus"));
              if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
              return e
            },
            C = function() {
              if (g.containerGroups = g.containers.map(function(e) {
                  var t = (0, n.tabbable)(e, h.tabbableOptions),
                    r = (0, n.focusable)(e, h.tabbableOptions),
                    o = t.length > 0 ? t[0] : void 0,
                    a = t.length > 0 ? t[t.length - 1] : void 0,
                    s = r.find(function(e) {
                      return (0, n.isTabbable)(e)
                    }),
                    i = r.slice().reverse().find(function(e) {
                      return (0, n.isTabbable)(e)
                    }),
                    d = !!t.find(function(e) {
                      return (0, n.getTabIndex)(e) > 0
                    });
                  return {
                    container: e,
                    tabbableNodes: t,
                    focusableNodes: r,
                    posTabIndexesFound: d,
                    firstTabbableNode: o,
                    lastTabbableNode: a,
                    firstDomTabbableNode: s,
                    lastDomTabbableNode: i,
                    nextTabbableNode: function(e) {
                      var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        a = t.indexOf(e);
                      return a < 0 ? o ? r.slice(r.indexOf(e) + 1).find(function(e) {
                        return (0, n.isTabbable)(e)
                      }) : r.slice(0, r.indexOf(e)).reverse().find(function(e) {
                        return (0, n.isTabbable)(e)
                      }) : t[a + (o ? 1 : -1)]
                    }
                  }
                }), g.tabbableGroups = g.containerGroups.filter(function(e) {
                  return e.tabbableNodes.length > 0
                }), g.tabbableGroups.length <= 0 && !_("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
              if (g.containerGroups.find(function(e) {
                  return e.posTabIndexesFound
                }) && g.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            O = function(e) {
              var t = e.activeElement;
              if (t) return t.shadowRoot && null !== t.shadowRoot.activeElement ? O(t.shadowRoot) : t
            },
            N = function(e) {
              !1 !== e && e !== O(document) && (e && e.focus ? (e.focus({
                preventScroll: !!h.preventScroll
              }), g.mostRecentlyFocusedNode = e, function(e) {
                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
              }(e) && e.select()) : N(j()))
            },
            P = function(e) {
              var t = _("setReturnFocus", {
                params: [e]
              });
              return t || !1 !== t && e
            },
            D = function(e) {
              var t = e.target,
                r = e.event,
                o = e.isBackward,
                a = void 0 !== o && o;
              t = t || m(r), C();
              var s = null;
              if (g.tabbableGroups.length > 0) {
                var i = x(t, r),
                  d = i >= 0 ? g.containerGroups[i] : void 0;
                if (i < 0) s = a ? g.tabbableGroups[g.tabbableGroups.length - 1].lastTabbableNode : g.tabbableGroups[0].firstTabbableNode;
                else if (a) {
                  var l = g.tabbableGroups.findIndex(function(e) {
                    var r = e.firstTabbableNode;
                    return t === r
                  });
                  if (l < 0 && (d.container === t || (0, n.isFocusable)(t, h.tabbableOptions) && !(0, n.isTabbable)(t, h.tabbableOptions) && !d.nextTabbableNode(t, !1)) && (l = i), l >= 0) {
                    var u = 0 === l ? g.tabbableGroups.length - 1 : l - 1,
                      f = g.tabbableGroups[u];
                    s = (0, n.getTabIndex)(t) >= 0 ? f.lastTabbableNode : f.lastDomTabbableNode
                  } else c(r) || (s = d.nextTabbableNode(t, !1))
                } else {
                  var p = g.tabbableGroups.findIndex(function(e) {
                    var r = e.lastTabbableNode;
                    return t === r
                  });
                  if (p < 0 && (d.container === t || (0, n.isFocusable)(t, h.tabbableOptions) && !(0, n.isTabbable)(t, h.tabbableOptions) && !d.nextTabbableNode(t)) && (p = i), p >= 0) {
                    var v = p === g.tabbableGroups.length - 1 ? 0 : p + 1,
                      y = g.tabbableGroups[v];
                    s = (0, n.getTabIndex)(t) >= 0 ? y.firstTabbableNode : y.firstDomTabbableNode
                  } else c(r) || (s = d.nextTabbableNode(t))
                }
              } else s = _("fallbackFocus");
              return s
            },
            R = function(e) {
              var t = m(e);
              x(t, e) >= 0 || (y(h.clickOutsideDeactivates, e) ? r.deactivate({
                returnFocus: h.returnFocusOnDeactivate
              }) : y(h.allowOutsideClick, e) || e.preventDefault())
            },
            S = function(e) {
              var t = m(e),
                r = x(t, e) >= 0;
              if (r || t instanceof Document) r && (g.mostRecentlyFocusedNode = t);
              else {
                var o;
                e.stopImmediatePropagation();
                var a = !0;
                if (g.mostRecentlyFocusedNode)
                  if ((0, n.getTabIndex)(g.mostRecentlyFocusedNode) > 0) {
                    var s = x(g.mostRecentlyFocusedNode),
                      i = g.containerGroups[s].tabbableNodes;
                    if (i.length > 0) {
                      var d = i.findIndex(function(e) {
                        return e === g.mostRecentlyFocusedNode
                      });
                      d >= 0 && (h.isKeyForward(g.recentNavEvent) ? d + 1 < i.length && (o = i[d + 1], a = !1) : d - 1 >= 0 && (o = i[d - 1], a = !1))
                    }
                  } else g.containerGroups.some(function(e) {
                    return e.tabbableNodes.some(function(e) {
                      return (0, n.getTabIndex)(e) > 0
                    })
                  }) || (a = !1);
                else a = !1;
                a && (o = D({
                  target: g.mostRecentlyFocusedNode,
                  isBackward: h.isKeyBackward(g.recentNavEvent)
                })), N(o || g.mostRecentlyFocusedNode || j())
              }
              g.recentNavEvent = void 0
            },
            E = function(e) {
              (h.isKeyForward(e) || h.isKeyBackward(e)) && function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                g.recentNavEvent = e;
                var r = D({
                  event: e,
                  isBackward: t
                });
                r && (c(e) && e.preventDefault(), N(r))
              }(e, h.isKeyBackward(e))
            },
            I = function(e) {
              var t;
              "Escape" !== (null == (t = e) ? void 0 : t.key) && "Esc" !== (null == t ? void 0 : t.key) && 27 !== (null == t ? void 0 : t.keyCode) || !1 === y(h.escapeDeactivates, e) || (e.preventDefault(), r.deactivate())
            },
            k = function(e) {
              var t = m(e);
              x(t, e) >= 0 || y(h.clickOutsideDeactivates, e) || y(h.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
            },
            T = function() {
              if (g.active) return u.activateTrap(i, r), g.delayInitialFocusTimer = h.delayInitialFocus ? v(function() {
                N(j())
              }) : N(j()), s.addEventListener("focusin", S, !0), s.addEventListener("mousedown", R, {
                capture: !0,
                passive: !1
              }), s.addEventListener("touchstart", R, {
                capture: !0,
                passive: !1
              }), s.addEventListener("click", k, {
                capture: !0,
                passive: !1
              }), s.addEventListener("keydown", E, {
                capture: !0,
                passive: !1
              }), s.addEventListener("keydown", I), r
            },
            z = function() {
              if (g.active) return s.removeEventListener("focusin", S, !0), s.removeEventListener("mousedown", R, !0), s.removeEventListener("touchstart", R, !0), s.removeEventListener("click", k, !0), s.removeEventListener("keydown", E, !0), s.removeEventListener("keydown", I), r
            },
            L = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver(function(e) {
              e.some(function(e) {
                return Array.from(e.removedNodes).some(function(e) {
                  return e === g.mostRecentlyFocusedNode
                })
              }) && N(j())
            }) : void 0,
            A = function() {
              L && (L.disconnect(), g.active && !g.paused && g.containers.map(function(e) {
                L.observe(e, {
                  subtree: !0,
                  childList: !0
                })
              }))
            };
          return r = {
            get active() {
              return g.active
            },
            get paused() {
              return g.paused
            },
            activate: function(e) {
              if (g.active) return this;
              var t, n = w(e, "onActivate"),
                o = w(e, "onPostActivate"),
                a = w(e, "checkCanFocusTrap"),
                d = u.getActiveTrap(i),
                l = !1;
              d && !d.paused && (null === (t = d._setSubtreeIsolation) || void 0 === t || t.call(d, !1), l = !0);
              try {
                a || C(), g.active = !0, g.paused = !1, g.nodeFocusedBeforeActivation = O(s), null == n || n();
                var c = function() {
                  a && C(), T(), A(), h.isolateSubtrees && r._setSubtreeIsolation(!0), null == o || o()
                };
                if (a) return a(g.containers.concat()).then(c, c), this;
                c()
              } catch (e) {
                var f;
                throw d === u.getActiveTrap(i) && l && (null === (f = d._setSubtreeIsolation) || void 0 === f || f.call(d, !0)), e
              }
              return this
            },
            deactivate: function(e) {
              if (!g.active) return this;
              var t = d({
                onDeactivate: h.onDeactivate,
                onPostDeactivate: h.onPostDeactivate,
                checkCanReturnFocus: h.checkCanReturnFocus
              }, e);
              clearTimeout(g.delayInitialFocusTimer), g.delayInitialFocusTimer = void 0, g.paused || r._setSubtreeIsolation(!1), g.alreadySilent.clear(), z(), g.active = !1, g.paused = !1, A(), u.deactivateTrap(i, r);
              var n = w(t, "onDeactivate"),
                o = w(t, "onPostDeactivate"),
                a = w(t, "checkCanReturnFocus"),
                s = w(t, "returnFocus", "returnFocusOnDeactivate");
              null == n || n();
              var l = function() {
                v(function() {
                  s && N(P(g.nodeFocusedBeforeActivation)), null == o || o()
                })
              };
              return s && a ? (a(P(g.nodeFocusedBeforeActivation)).then(l, l), this) : (l(), this)
            },
            pause: function(e) {
              return g.active ? (g.manuallyPaused = !0, this._setPausedState(!0, e)) : this
            },
            unpause: function(e) {
              return g.active ? (g.manuallyPaused = !1, i[i.length - 1] !== this ? this : this._setPausedState(!1, e)) : this
            },
            updateContainerElements: function(e) {
              var t = [].concat(e).filter(Boolean);
              return g.containers = t.map(function(e) {
                return "string" == typeof e ? s.querySelector(e) : e
              }), h.isolateSubtrees && function(e) {
                g.active && !g.paused && r._setSubtreeIsolation(!1), g.adjacentElements.clear(), g.alreadySilent.clear();
                var t, n = new Set,
                  o = new Set,
                  s = a(e);
                try {
                  for (s.s(); !(t = s.n()).done;) {
                    var i = t.value;
                    n.add(i);
                    for (var d = "undefined" != typeof ShadowRoot && i.getRootNode() instanceof ShadowRoot, l = i; l;) {
                      n.add(l);
                      var u = l.parentElement,
                        c = [];
                      u ? c = u.children : !u && d && (c = l.getRootNode().children, u = l.getRootNode().host, d = "undefined" != typeof ShadowRoot && u.getRootNode() instanceof ShadowRoot);
                      var f, p = a(c);
                      try {
                        for (p.s(); !(f = p.n()).done;) {
                          var v = f.value;
                          o.add(v)
                        }
                      } catch (e) {
                        p.e(e)
                      } finally {
                        p.f()
                      }
                      l = u
                    }
                  }
                } catch (e) {
                  s.e(e)
                } finally {
                  s.f()
                }
                n.forEach(function(e) {
                  o.delete(e)
                }), g.adjacentElements = o
              }(g.containers), g.active && (C(), h.isolateSubtrees && !g.paused && r._setSubtreeIsolation(!0)), A(), this
            }
          }, Object.defineProperties(r, {
            _isManuallyPaused: {
              value: function() {
                return g.manuallyPaused
              }
            },
            _setPausedState: {
              value: function(e, t) {
                if (g.paused === e) return this;
                if (g.paused = e, e) {
                  var n = w(t, "onPause"),
                    o = w(t, "onPostPause");
                  null == n || n(), z(), A(), r._setSubtreeIsolation(!1), null == o || o()
                } else {
                  var a = w(t, "onUnpause"),
                    s = w(t, "onPostUnpause");
                  null == a || a(), r._setSubtreeIsolation(!0), C(), T(), A(), null == s || s()
                }
                return this
              }
            },
            _setSubtreeIsolation: {
              value: function(e) {
                h.isolateSubtrees && g.adjacentElements.forEach(function(t) {
                  var r;
                  e ? "aria-hidden" === h.isolateSubtrees ? ("true" !== t.ariaHidden && "true" !== (null === (r = t.getAttribute("aria-hidden")) || void 0 === r ? void 0 : r.toLowerCase()) || g.alreadySilent.add(t), t.setAttribute("aria-hidden", "true")) : ((t.inert || t.hasAttribute("inert")) && g.alreadySilent.add(t), t.setAttribute("inert", !0)) : g.alreadySilent.has(t) || ("aria-hidden" === h.isolateSubtrees ? t.removeAttribute("aria-hidden") : t.removeAttribute("inert"))
                })
              }
            }
          }), r.updateContainerElements(e), r
        }
    },
    40055(e, t, r) {
      "use strict";
      var n = r(42528);

      function o() {}

      function a() {}
      a.resetWarningCache = o, e.exports = function() {
        function e(e, t, r, o, a, s) {
          if (s !== n) {
            var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw i.name = "Invariant Violation", i
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var r = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: a,
          resetWarningCache: o
        };
        return r.PropTypes = r, r
      }
    },
    60331(e, t, r) {
      e.exports = r(40055)()
    },
    42528(e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    47766(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        focusable: () => x,
        getTabIndex: () => f,
        isFocusable: () => C,
        isTabbable: () => _,
        tabbable: () => w
      });
      var n = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"],
        o = n.join(","),
        a = "undefined" == typeof Element,
        s = a ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        i = !a && Element.prototype.getRootNode ? function(e) {
          var t;
          return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
        } : function(e) {
          return null == e ? void 0 : e.ownerDocument
        },
        d = function(e, t) {
          var r;
          void 0 === t && (t = !0);
          var n = null == e || null === (r = e.getAttribute) || void 0 === r ? void 0 : r.call(e, "inert");
          return "" === n || "true" === n || t && e && ("function" == typeof e.closest ? e.closest("[inert]") : d(e.parentNode))
        },
        l = function(e, t, r) {
          if (d(e)) return [];
          var n = Array.prototype.slice.apply(e.querySelectorAll(o));
          return t && s.call(e, o) && n.unshift(e), n.filter(r)
        },
        u = function(e, t, r) {
          for (var n = [], a = Array.from(e); a.length;) {
            var i = a.shift();
            if (!d(i, !1))
              if ("SLOT" === i.tagName) {
                var l = i.assignedElements(),
                  c = l.length ? l : i.children,
                  f = u(c, !0, r);
                r.flatten ? n.push.apply(n, f) : n.push({
                  scopeParent: i,
                  candidates: f
                })
              } else {
                s.call(i, o) && r.filter(i) && (t || !e.includes(i)) && n.push(i);
                var p = i.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(i),
                  v = !d(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
                if (p && v) {
                  var y = u(!0 === p ? i.children : p.children, !0, r);
                  r.flatten ? n.push.apply(n, y) : n.push({
                    scopeParent: i,
                    candidates: y
                  })
                } else a.unshift.apply(a, i.children)
              }
          }
          return n
        },
        c = function(e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
        },
        f = function(e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
            var t, r = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
            return "" === r || "true" === r
          }(e)) && !c(e) ? 0 : e.tabIndex
        },
        p = function(e, t) {
          return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
        },
        v = function(e) {
          return "INPUT" === e.tagName
        },
        y = function(e) {
          var t = e.getBoundingClientRect(),
            r = t.width,
            n = t.height;
          return 0 === r && 0 === n
        },
        m = function(e, t) {
          return !(t.disabled || function(e) {
            return v(e) && "hidden" === e.type
          }(t) || function(e, t) {
            var r = t.displayCheck,
              n = t.getShadowRoot;
            if ("full-native" === r && "checkVisibility" in e) return !e.checkVisibility({
              checkOpacity: !1,
              opacityProperty: !1,
              contentVisibilityAuto: !0,
              visibilityProperty: !0,
              checkVisibilityCSS: !0
            });
            if ("hidden" === getComputedStyle(e).visibility) return !0;
            var o = s.call(e, "details>summary:first-of-type") ? e.parentElement : e;
            if (s.call(o, "details:not([open]) *")) return !0;
            if (r && "full" !== r && "full-native" !== r && "legacy-full" !== r) {
              if ("non-zero-area" === r) return y(e)
            } else {
              if ("function" == typeof n) {
                for (var a = e; e;) {
                  var d = e.parentElement,
                    l = i(e);
                  if (d && !d.shadowRoot && !0 === n(d)) return y(e);
                  e = e.assignedSlot ? e.assignedSlot : d || l === e.ownerDocument ? d : l.host
                }
                e = a
              }
              if (function(e) {
                  var t, r, n, o, a = e && i(e),
                    s = null === (t = a) || void 0 === t ? void 0 : t.host,
                    d = !1;
                  if (a && a !== e)
                    for (d = !!(null !== (r = s) && void 0 !== r && null !== (n = r.ownerDocument) && void 0 !== n && n.contains(s) || null != e && null !== (o = e.ownerDocument) && void 0 !== o && o.contains(e)); !d && s;) {
                      var l, u, c;
                      d = !(null === (u = s = null === (l = a = i(s)) || void 0 === l ? void 0 : l.host) || void 0 === u || null === (c = u.ownerDocument) || void 0 === c || !c.contains(s))
                    }
                  return d
                }(e)) return !e.getClientRects().length;
              if ("legacy-full" !== r) return !0
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
                  for (var r = 0; r < t.children.length; r++) {
                    var n = t.children.item(r);
                    if ("LEGEND" === n.tagName) return !!s.call(t, "fieldset[disabled] *") || !n.contains(e)
                  }
                  return !0
                }
                t = t.parentElement
              }
            return !1
          }(t))
        },
        b = function(e, t) {
          return !(function(e) {
            return function(e) {
              return v(e) && "radio" === e.type
            }(e) && ! function(e) {
              if (!e.name) return !0;
              var t, r = e.form || i(e),
                n = function(e) {
                  return r.querySelectorAll('input[type="radio"][name="' + e + '"]')
                };
              if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = n(window.CSS.escape(e.name));
              else try {
                t = n(e.name)
              } catch (e) {
                return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
              }
              var o = function(e, t) {
                for (var r = 0; r < e.length; r++)
                  if (e[r].checked && e[r].form === t) return e[r]
              }(t, e.form);
              return !o || o === e
            }(e)
          }(t) || f(t) < 0 || !m(e, t))
        },
        h = function(e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0)
        },
        g = function(e) {
          var t = [],
            r = [];
          return e.forEach(function(e, n) {
            var o = !!e.scopeParent,
              a = o ? e.scopeParent : e,
              s = function(e, t) {
                var r = f(e);
                return r < 0 && t && !c(e) ? 0 : r
              }(a, o),
              i = o ? g(e.candidates) : a;
            0 === s ? o ? t.push.apply(t, i) : t.push(a) : r.push({
              documentOrder: n,
              tabIndex: s,
              item: e,
              isScope: o,
              content: i
            })
          }), r.sort(p).reduce(function(e, t) {
            return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
          }, []).concat(t)
        },
        w = function(e, t) {
          var r;
          return r = (t = t || {}).getShadowRoot ? u([e], t.includeContainer, {
            filter: b.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: h
          }) : l(e, t.includeContainer, b.bind(null, t)), g(r)
        },
        x = function(e, t) {
          return (t = t || {}).getShadowRoot ? u([e], t.includeContainer, {
            filter: m.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot
          }) : l(e, t.includeContainer, m.bind(null, t))
        },
        _ = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== s.call(e, o) && b(t, e)
        },
        j = n.concat("iframe:not([inert]):not([inert] *)").join(","),
        C = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== s.call(e, j) && m(t, e)
        }
    },
    46966(e, t, r) {
      "use strict";
      r.d(t, {
        DI: () => n.DI
      });
      var n = r(819);
      r(21423)
    },
    8587(e, t, r) {
      "use strict";
      r.d(t, {
        ms: () => n,
        FK: () => s
      });
      var n = {};
      r.r(n), r.d(n, {
        UC: () => es,
        JU: () => ss,
        c$: () => is,
        JP: () => ds,
        ZL: () => ls,
        bL: () => Ja,
        FK: () => rs,
        l9: () => ns,
        if: () => as,
        OE: () => os
      });
      var o = {};
      r.r(o), r.d(o, {
        CheckLG: () => Ps,
        CheckMD: () => Ns,
        CheckXL: () => Ds,
        DashLG: () => Ss,
        DashMD: () => Rs,
        DashXL: () => Es
      });
      var a = {};
      r.r(a), r.d(a, {
        DotLG: () => Ci,
        DotMD: () => ji,
        DotXL: () => Oi
      });
      var s = {};
      r.r(s), r.d(s, {
        bL: () => tu,
        Ze: () => nu,
        zi: () => ou,
        LM: () => ru
      });
      var i = r(90179),
        d = r(76789),
        l = r(39793),
        u = r(4921),
        c = r(93082),
        f = r(84173);

      function p(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? v(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = p(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function m(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var b, h, g = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        w = (b = {
          defaultClassName: "foundry_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_thj3a32",
              thick: "foundry_thj3a33",
              thicker: "foundry_thj3a34",
              thickest: "foundry_thj3a35"
            },
            orientation: {
              horizontal: "foundry_thj3a36",
              vertical: "foundry_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, h = e => {
          var t = b.defaultClassName,
            r = y(y({}, b.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : b.defaultVariants[n];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = b.variantClassNames[n][s];
              i && (t += " " + i)
            }
          }
          for (var [d, l] of b.compoundVariants) g(d, r, b.defaultVariants) && (t += " " + l);
          return t
        }, h.variants = () => Object.keys(b.variantClassNames), h.classNames = {
          get base() {
            return b.defaultClassName.split(" ")[0]
          },
          get variants() {
            return m(b.variantClassNames, e => m(e, e => e.split(" ")[0]))
          }
        }, h);
      (0, c.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...s
      }, i) => {
        const d = "horizontal" !== t || n ? "div" : "hr",
          c = n || "hr" === d ? void 0 : "separator",
          p = o ? f.DX : d;
        return (0, l.jsx)(p, {
          ref: i,
          className: (0, u.$)(w({
            thickness: r,
            orientation: t
          }), e),
          role: c,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });
      var x = r(69353),
        _ = r(819),
        j = r(40632);

      function C(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function O(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? O(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = C(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function P(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var D = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        R = "var(--foundry_9dxgbc2)",
        S = "var(--foundry_9dxgbc3)",
        E = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = N(N({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) D(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return P(e.variantClassNames, e => P(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_9dxgbc7",
          variantClassNames: {
            size: {
              SM: "foundry_9dxgbc8",
              MD: "foundry_9dxgbc9",
              LG: "foundry_9dxgbca",
              XL: "foundry_9dxgbcb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        I = "var(--foundry_9dxgbc0)",
        k = "var(--foundry_9dxgbc1)";

      function T(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? z(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = T(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function A(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, c.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...s
      }, i) => {
        const d = (0, j.zQ)(),
          u = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, x.v6)({
            className: E({
              size: u
            }),
            "data-testid": t,
            style: (0, _.DI)({
              [I]: n?.pulseColorBackground,
              [k]: n?.pulseColorForeground,
              [R]: n?.gradientColorBackground,
              [S]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          p = e ? f.DX : "div";
        return (0, l.jsx)(p, {
          ref: i,
          ...c,
          children: e ? (0, l.jsx)(f.xV, {
            children: r
          }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, l.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      }), r(14889);
      var V = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        M = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = L(L({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) V(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return A(e.variantClassNames, e => A(e, e => e.split(" ")[0]))
            }
          }, t
        },
        F = M({
          defaultClassName: "foundry_1gea4150",
          variantClassNames: {
            size: {
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd",
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
              SM: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
              XS: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg"
            },
            appearance: {
              default: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              bold: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
              hyperlink: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const q = (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? f.DX : "p",
          i = (0, x.v6)({
            className: F({
              size: n,
              appearance: r
            })
          }, o);
        return (0, l.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var B = M({
        defaultClassName: "foundry_ujgffp0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdw",
            bold: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const a = e ? f.DX : "p",
          s = (0, x.v6)({
            className: B({
              appearance: r
            })
          }, n);
        return (0, l.jsx)(a, {
          ref: o,
          "data-testid": t,
          ...s
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? f.DX : "h1",
          a = (0, x.v6)({
            className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
          }, r);
        return (0, l.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      });
      var X = M({
        defaultClassName: "foundry_11wb5e70",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd4",
            2: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5",
            3: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6",
            4: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd7",
            5: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
            6: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9",
            7: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      (0, c.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? f.DX : `h${7===t?6:t}`,
          s = (0, x.v6)(n, {
            className: X({
              level: t
            })
          });
        return (0, l.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var K = M({
        defaultClassName: "foundry_370tab0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdn",
            MD: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdo",
            SM: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp",
            XS: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdq",
            XXS: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdr"
          },
          appearance: {
            default: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcds",
            bold: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdt"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? f.DX : "p",
          i = (0, x.v6)({
            className: K({
              size: n,
              appearance: r
            })
          }, o);
        return (0, l.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var G = M({
        defaultClassName: "foundry_yzsp790",
        variantClassNames: {
          semantic: {
            abbr: "foundry_yzsp791",
            cite: "foundry_yzsp792",
            emphasis: "foundry_yzsp793",
            idiomatic: "foundry_yzsp794",
            mark: "foundry_yzsp795",
            "strike-through": "foundry_yzsp796",
            strong: "foundry_yzsp797",
            sub: "foundry_yzsp798",
            sup: "foundry_yzsp799",
            underline: "foundry_yzsp79a",
            default: "foundry_yzsp79b"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const U = {
        abbr: "abbr",
        cite: "cite",
        emphasis: "em",
        idiomatic: "i",
        mark: "mark",
        "strike-through": "s",
        strong: "strong",
        sub: "sub",
        sup: "sup",
        underline: "u",
        default: "span"
      };
      (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        semantic: r = "default",
        ...n
      }, o) => {
        const a = e ? f.DX : U[r] || "span",
          s = (0, x.v6)(n, {
            className: G({
              semantic: r
            })
          });
        return (0, l.jsx)(a, {
          ref: o,
          "data-testid": t,
          ...s
        })
      });
      var H = r(32996),
        W = r(35812),
        Z = r(99206),
        Y = r(66461),
        $ = r(90004);

      function Q(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function J(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? J(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Q(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function te(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var re = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ne = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ee(ee({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) re(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return te(e.variantClassNames, e => te(e, e => e.split(" ")[0]))
            }
          }, t
        },
        oe = ne({
          defaultClassName: "foundry_1a74xwbk",
          variantClassNames: {
            styled: {
              true: "foundry_1a74xwbj",
              false: "foundry_1a74xwbm"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ae = ne({
          defaultClassName: "foundry_1a74xwbq foundry_1a74xwbi",
          variantClassNames: {
            position: {
              top: "foundry_1a74xwbr",
              bottom: "foundry_1a74xwbs"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      W.gsap.registerPlugin(Z.L);
      const se = {
        inherit: !1,
        overwrite: !1,
        duration: .3,
        ease: "power2.out"
      };
      (0, _.Tm)("var(--foundry_1a74xwb0)");
      var ie = r(50888);
      r.e(4974).then(r.bind(r, 84974)), r.e(5389).then(r.bind(r, 55389)), r.e(4235).then(r.bind(r, 4235)), r.e(5038).then(r.bind(r, 85038)), r.e(9947).then(r.bind(r, 59947)), r.e(2837).then(r.bind(r, 72837)), r.e(622).then(r.bind(r, 90622)), r.e(4756).then(r.bind(r, 4756)), r.e(9447).then(r.bind(r, 69447)), r.e(8915).then(r.bind(r, 8915)), r.e(6501).then(r.bind(r, 26501)), r.e(4572).then(r.bind(r, 74572)), r.e(4144).then(r.bind(r, 34144));
      Event;
      var de = r(8789);
      const le = e => "dark" === e ? de.xW.dark : de.xW.light;
      var ue = r(32760);
      const ce = (0, ie.YK)({
        OpenButtonLabel: {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        CloseButtonLabel: {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        CloseButtonTooltip: {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        ZoomInButtonLabel: {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        ZoomInButtonTooltip: {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        ZoomOutButtonLabel: {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        ZoomOutButtonTooltip: {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        ResetZoomButtonLabel: {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        ResetZoomButtonTooltip: {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        ZoomSliderLabel: {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        ZoomSliderTooltip: {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        DownloadButtonLabel: {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        DownloadButtonTooltip: {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        }
      });
      var fe = "foundry_bc732x1";
      const pe = (0, c.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, $.vC)(e, e => r?.(e), [r]), (0, l.jsx)(q, {
        size: "XS",
        className: (0, u.$)("foundry_bc732x0", {
          [fe]: t
        }),
        asChild: !0,
        children: (0, l.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var ve = r(11436),
        ye = r(8316),
        me = r(50446),
        be = r(53582),
        he = r(84017),
        ge = r(2976),
        we = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = (0, ge.TL)(`Primitive.${t}`),
            n = c.forwardRef((e, n) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(s, {
                ...a,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {});

      function xe(e, t) {
        e && he.flushSync(() => e.dispatchEvent(t))
      }
      var _e, je = r(38351),
        Ce = r(2471),
        Oe = "dismissableLayer.update",
        Ne = c.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Pe = c.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: s,
            onDismiss: i,
            ...d
          } = e, u = c.useContext(Ne), [f, p] = c.useState(null), v = f?.ownerDocument ?? globalThis?.document, [, y] = c.useState({}), m = (0, me.s)(t, e => p(e)), b = Array.from(u.layers), [h] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = b.indexOf(h), w = f ? b.indexOf(f) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= g, j = function(e, t = globalThis?.document) {
            const r = (0, je.c)(e),
              n = c.useRef(!1),
              o = c.useRef(() => {});
            return c.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Se("dismissableLayer.pointerDownOutside", r, a, {
                        discrete: !0
                      })
                    };
                    const a = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, {
                      once: !0
                    })) : n()
                  } else t.removeEventListener("click", o.current);
                  n.current = !1
                },
                a = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }, [t, r]), {
              onPointerDownCapture: () => n.current = !0
            }
          }(e => {
            const t = e.target,
              r = [...u.branches].some(e => e.contains(t));
            _ && !r && (o?.(e), s?.(e), e.defaultPrevented || i?.())
          }, v), C = function(e, t = globalThis?.document) {
            const r = (0, je.c)(e),
              n = c.useRef(!1);
            return c.useEffect(() => {
              const e = e => {
                e.target && !n.current && Se("dismissableLayer.focusOutside", r, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, r]), {
              onFocusCapture: () => n.current = !0,
              onBlurCapture: () => n.current = !1
            }
          }(e => {
            const t = e.target;
            [...u.branches].some(e => e.contains(t)) || (a?.(e), s?.(e), e.defaultPrevented || i?.())
          }, v);
          return (0, Ce.U)(e => {
            w === u.layers.size - 1 && (n?.(e), !e.defaultPrevented && i && (e.preventDefault(), i()))
          }, v), c.useEffect(() => {
            if (f) return r && (0 === u.layersWithOutsidePointerEventsDisabled.size && (_e = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Re(), () => {
              r && 1 === u.layersWithOutsidePointerEventsDisabled.size && (v.body.style.pointerEvents = _e)
            }
          }, [f, v, r, u]), c.useEffect(() => () => {
            f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Re())
          }, [f, u]), c.useEffect(() => {
            const e = () => y({});
            return document.addEventListener(Oe, e), () => document.removeEventListener(Oe, e)
          }, []), (0, l.jsx)(we.div, {
            ...d,
            ref: m,
            style: {
              pointerEvents: x ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, ye.mK)(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: (0, ye.mK)(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: (0, ye.mK)(e.onPointerDownCapture, j.onPointerDownCapture)
          })
        });
      Pe.displayName = "DismissableLayer";
      var De = c.forwardRef((e, t) => {
        const r = c.useContext(Ne),
          n = c.useRef(null),
          o = (0, me.s)(t, n);
        return c.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, l.jsx)(we.div, {
          ...e,
          ref: o
        })
      });

      function Re() {
        const e = new CustomEvent(Oe);
        document.dispatchEvent(e)
      }

      function Se(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? xe(o, a) : o.dispatchEvent(a)
      }
      De.displayName = "DismissableLayerBranch";
      var Ee = Pe,
        Ie = De,
        ke = r(96883),
        Te = r(17966),
        ze = r(10376),
        Le = c.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, l.jsx)(we.svg, {
            ...a,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, l.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Le.displayName = "Arrow";
      var Ae = Le,
        Ve = r(86627),
        Me = r(94119),
        Fe = "Popper",
        [qe, Be] = (0, be.A)(Fe),
        [Xe, Ke] = qe(Fe),
        Ge = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = c.useState(null);
          return (0, l.jsx)(Xe, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      Ge.displayName = Fe;
      var Ue = "PopperAnchor",
        He = c.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, a = Ke(Ue, r), s = c.useRef(null), i = (0, me.s)(t, s), d = c.useRef(null);
          return c.useEffect(() => {
            const e = d.current;
            d.current = n?.current || s.current, e !== d.current && a.onAnchorChange(d.current)
          }), n ? null : (0, l.jsx)(we.div, {
            ...o,
            ref: i
          })
        });
      He.displayName = Ue;
      var We = "PopperContent",
        [Ze, Ye] = qe(We),
        $e = c.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: a = "center",
            alignOffset: s = 0,
            arrowPadding: i = 0,
            avoidCollisions: d = !0,
            collisionBoundary: u = [],
            collisionPadding: f = 0,
            sticky: p = "partial",
            hideWhenDetached: v = !1,
            updatePositionStrategy: y = "optimized",
            onPlaced: m,
            ...b
          } = e, h = Ke(We, r), [g, w] = c.useState(null), x = (0, me.s)(t, e => w(e)), [_, j] = c.useState(null), C = (0, Me.X)(_), O = C?.width ?? 0, N = C?.height ?? 0, P = n + ("center" !== a ? "-" + a : ""), D = "number" == typeof f ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
          }, R = Array.isArray(u) ? u : [u], S = R.length > 0, E = {
            padding: D,
            boundary: R.filter(tt),
            altBoundary: S
          }, {
            refs: I,
            floatingStyles: k,
            placement: T,
            isPositioned: z,
            middlewareData: L
          } = (0, Te.we)({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => (0, ze.ll)(...e, {
              animationFrame: "always" === y
            }),
            elements: {
              reference: h.anchor
            },
            middleware: [(0, Te.cY)({
              mainAxis: o + N,
              alignmentAxis: s
            }), d && (0, Te.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === p ? (0, Te.ER)() : void 0,
              ...E
            }), d && (0, Te.UU)({
              ...E
            }), (0, Te.Ej)({
              ...E,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: a
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${r}px`), s.setProperty("--radix-popper-available-height", `${n}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${a}px`)
              }
            }), _ && (0, Te.UE)({
              element: _,
              padding: i
            }), rt({
              arrowWidth: O,
              arrowHeight: N
            }), v && (0, Te.jD)({
              strategy: "referenceHidden",
              ...E
            })]
          }), [A, V] = nt(T), M = (0, je.c)(m);
          (0, Ve.N)(() => {
            z && M?.()
          }, [z, M]);
          const F = L.arrow?.x,
            q = L.arrow?.y,
            B = 0 !== L.arrow?.centerOffset,
            [X, K] = c.useState();
          return (0, Ve.N)(() => {
            g && K(window.getComputedStyle(g).zIndex)
          }, [g]), (0, l.jsx)("div", {
            ref: I.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...k,
              transform: z ? k.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: X,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, l.jsx)(Ze, {
              scope: r,
              placedSide: A,
              onArrowChange: j,
              arrowX: F,
              arrowY: q,
              shouldHideArrow: B,
              children: (0, l.jsx)(we.div, {
                "data-side": A,
                "data-align": V,
                ...b,
                ref: x,
                style: {
                  ...b.style,
                  animation: z ? void 0 : "none"
                }
              })
            })
          })
        });
      $e.displayName = We;
      var Qe = "PopperArrow",
        Je = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        et = c.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Ye(Qe, r), a = Je[o.placedSide];
          return (0, l.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [a]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, l.jsx)(Ae, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function tt(e) {
        return null !== e
      }
      et.displayName = Qe;
      var rt = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, a = 0 !== o.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = nt(r), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], c = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + i / 2;
          let p = "",
            v = "";
          return "bottom" === d ? (p = a ? u : `${c}px`, v = -i + "px") : "top" === d ? (p = a ? u : `${c}px`, v = `${n.floating.height+i}px`) : "right" === d ? (p = -i + "px", v = a ? u : `${f}px`) : "left" === d && (p = `${n.floating.width+i}px`, v = a ? u : `${f}px`), {
            data: {
              x: p,
              y: v
            }
          }
        }
      });

      function nt(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var ot = Ge,
        at = He,
        st = $e,
        it = et,
        dt = c.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, a] = c.useState(!1);
          (0, Ve.N)(() => a(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? he.createPortal((0, l.jsx)(we.div, {
            ...n,
            ref: t
          }), s) : null
        });
      dt.displayName = "Portal";
      var lt = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = c.useState(), n = c.useRef(null), o = c.useRef(e), a = c.useRef("none"), s = e ? "mounted" : "unmounted", [i, d] = function(e, t) {
            return c.useReducer((e, r) => t[e][r] ?? e, e)
          }(s, {
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
          return c.useEffect(() => {
            const e = ut(n.current);
            a.current = "mounted" === i ? e : "none"
          }, [i]), (0, Ve.N)(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = a.current,
                s = ut(t);
              d(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : r && n !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, d]), (0, Ve.N)(() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                s = a => {
                  const s = ut(n.current).includes(CSS.escape(a.animationName));
                  if (a.target === t && s && (d("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    })
                  }
                },
                i = e => {
                  e.target === t && (a.current = ut(n.current))
                };
              return t.addEventListener("animationstart", i), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
                r.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
              }
            }
            d("ANIMATION_END")
          }, [t, d]), {
            isPresent: ["mounted", "unmountSuspended"].includes(i),
            ref: c.useCallback(e => {
              n.current = e ? getComputedStyle(e) : null, r(e)
            }, [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : c.Children.only(r), a = (0, me.s)(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? c.cloneElement(o, {
          ref: a
        }) : null
      };

      function ut(e) {
        return e?.animationName || "none"
      }
      lt.displayName = "Presence";
      var ct = r(1531),
        ft = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        pt = c.forwardRef((e, t) => (0, l.jsx)(we.span, {
          ...e,
          ref: t,
          style: {
            ...ft,
            ...e.style
          }
        }));
      pt.displayName = "VisuallyHidden";
      var vt = pt,
        [yt, mt] = (0, be.A)("Tooltip", [Be]),
        bt = Be(),
        ht = "TooltipProvider",
        gt = 700,
        wt = "tooltip.open",
        [xt, _t] = yt(ht),
        jt = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = gt,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = c.useRef(!0), i = c.useRef(!1), d = c.useRef(0);
          return c.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, l.jsx)(xt, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: c.useCallback(() => {
              window.clearTimeout(d.current), s.current = !1
            }, []),
            onClose: c.useCallback(() => {
              window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, n)
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: c.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      jt.displayName = ht;
      var Ct = "Tooltip",
        [Ot, Nt] = yt(Ct),
        Pt = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = _t(Ct, e.__scopeTooltip), u = bt(t), [f, p] = c.useState(null), v = (0, ke.B)(), y = c.useRef(0), m = s ?? d.disableHoverableContent, b = i ?? d.delayDuration, h = c.useRef(!1), [g, w] = (0, ct.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(wt))) : d.onClose(), a?.(e)
            },
            caller: Ct
          }), x = c.useMemo(() => g ? h.current ? "delayed-open" : "instant-open" : "closed", [g]), _ = c.useCallback(() => {
            window.clearTimeout(y.current), y.current = 0, h.current = !1, w(!0)
          }, [w]), j = c.useCallback(() => {
            window.clearTimeout(y.current), y.current = 0, w(!1)
          }, [w]), C = c.useCallback(() => {
            window.clearTimeout(y.current), y.current = window.setTimeout(() => {
              h.current = !0, w(!0), y.current = 0
            }, b)
          }, [b, w]);
          return c.useEffect(() => () => {
            y.current && (window.clearTimeout(y.current), y.current = 0)
          }, []), (0, l.jsx)(ot, {
            ...u,
            children: (0, l.jsx)(Ot, {
              scope: t,
              contentId: v,
              open: g,
              stateAttribute: x,
              trigger: f,
              onTriggerChange: p,
              onTriggerEnter: c.useCallback(() => {
                d.isOpenDelayedRef.current ? C() : _()
              }, [d.isOpenDelayedRef, C, _]),
              onTriggerLeave: c.useCallback(() => {
                m ? j() : (window.clearTimeout(y.current), y.current = 0)
              }, [j, m]),
              onOpen: _,
              onClose: j,
              disableHoverableContent: m,
              children: r
            })
          })
        };
      Pt.displayName = Ct;
      var Dt = "TooltipTrigger",
        Rt = c.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Nt(Dt, r), a = _t(Dt, r), s = bt(r), i = c.useRef(null), d = (0, me.s)(t, i, o.onTriggerChange), u = c.useRef(!1), f = c.useRef(!1), p = c.useCallback(() => u.current = !1, []);
          return c.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), (0, l.jsx)(at, {
            asChild: !0,
            ...s,
            children: (0, l.jsx)(we.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, ye.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (f.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), f.current = !0))
              }),
              onPointerLeave: (0, ye.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), f.current = !1
              }),
              onPointerDown: (0, ye.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", p, {
                  once: !0
                })
              }),
              onFocus: (0, ye.mK)(e.onFocus, () => {
                u.current || o.onOpen()
              }),
              onBlur: (0, ye.mK)(e.onBlur, o.onClose),
              onClick: (0, ye.mK)(e.onClick, o.onClose)
            })
          })
        });
      Rt.displayName = Dt;
      var St = "TooltipPortal",
        [Et, It] = yt(St, {
          forceMount: void 0
        }),
        kt = "TooltipContent",
        Tt = c.forwardRef((e, t) => {
          const r = It(kt, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = Nt(kt, e.__scopeTooltip);
          return (0, l.jsx)(lt, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, l.jsx)(Mt, {
              side: o,
              ...a,
              ref: t
            }) : (0, l.jsx)(zt, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        zt = c.forwardRef((e, t) => {
          const r = Nt(kt, e.__scopeTooltip),
            n = _t(kt, e.__scopeTooltip),
            o = c.useRef(null),
            a = (0, me.s)(t, o),
            [s, i] = c.useState(null),
            {
              trigger: d,
              onClose: u
            } = r,
            f = o.current,
            {
              onPointerInTransitChange: p
            } = n,
            v = c.useCallback(() => {
              i(null), p(!1)
            }, [p]),
            y = c.useCallback((e, t) => {
              const r = e.currentTarget,
                n = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, r = 5) {
                  const n = [];
                  switch (t) {
                    case "top":
                      n.push({
                        x: e.x - r,
                        y: e.y + r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "bottom":
                      n.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y - r
                      });
                      break;
                    case "left":
                      n.push({
                        x: e.x + r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "right":
                      n.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x - r,
                        y: e.y + r
                      })
                  }
                  return n
                }(n, function(e, t) {
                  const r = Math.abs(t.top - e.y),
                    n = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    a = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, o, a)) {
                    case a:
                      return "left";
                    case o:
                      return "right";
                    case r:
                      return "top";
                    case n:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(n, r.getBoundingClientRect())),
                a = function(e) {
                  const t = e.slice();
                  return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let r = 0; r < e.length; r++) {
                        const n = e[r];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            r = t[t.length - 2];
                          if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
                          t.pop()
                        }
                        t.push(n)
                      }
                      t.pop();
                      const r = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const n = e[t];
                        for (; r.length >= 2;) {
                          const e = r[r.length - 1],
                            t = r[r.length - 2];
                          if (!((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x))) break;
                          r.pop()
                        }
                        r.push(n)
                      }
                      return r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: r,
                    bottom: n,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: r,
                    y: t
                  }, {
                    x: r,
                    y: n
                  }, {
                    x: o,
                    y: n
                  }]
                }(t.getBoundingClientRect())]);
              i(a), p(!0)
            }, [p]);
          return c.useEffect(() => () => v(), [v]), c.useEffect(() => {
            if (d && f) {
              const e = e => y(e, f),
                t = e => y(e, d);
              return d.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
              }
            }
          }, [d, f, y, v]), c.useEffect(() => {
            if (s) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = d?.contains(t) || f?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const s = t[e],
                        i = t[a],
                        d = s.x,
                        l = s.y,
                        u = i.x,
                        c = i.y;
                      l > n != c > n && r < (u - d) * (n - l) / (c - l) + d && (o = !o)
                    }
                    return o
                  }(r, s);
                n ? v() : o && (v(), u())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, f, s, u, v]), (0, l.jsx)(Mt, {
            ...e,
            ref: a
          })
        }),
        [Lt, At] = yt(Ct, {
          isInside: !1
        }),
        Vt = (0, ge.Dc)("TooltipContent"),
        Mt = c.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = Nt(kt, r), u = bt(r), {
            onClose: f
          } = d;
          return c.useEffect(() => (document.addEventListener(wt, f), () => document.removeEventListener(wt, f)), [f]), c.useEffect(() => {
            if (d.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(d.trigger) && f()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, f]), (0, l.jsx)(Pe, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, l.jsxs)(st, {
              "data-state": d.stateAttribute,
              ...u,
              ...i,
              ref: t,
              style: {
                ...i.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, l.jsx)(Vt, {
                children: n
              }), (0, l.jsx)(Lt, {
                scope: r,
                isInside: !0,
                children: (0, l.jsx)(vt, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Tt.displayName = kt;
      var Ft = "TooltipArrow",
        qt = c.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = bt(r);
          return At(Ft, r).isInside ? null : (0, l.jsx)(it, {
            ...o,
            ...n,
            ref: t
          })
        });
      qt.displayName = Ft;
      var Bt = jt,
        Xt = Pt,
        Kt = Rt,
        Gt = Tt,
        Ut = qt;
      const Ht = (0, c.createContext)(null),
        Wt = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, s] = (0, H.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, l.jsx)(Bt, {
            delayDuration: t,
            children: (0, l.jsx)(Ht.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, l.jsx)(Xt, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        Zt = (0, c.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, l.jsx)(Kt, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Yt = (0, c.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: a = !0,
          sticky: s = "partial",
          ...i
        }, d) => {
          const {
            isOpen: u
          } = function() {
            const e = (0, c.useContext)(Ht);
            if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
            return e
          }(), f = (0, H.jt)(), p = (0, ve.animated)(Gt), v = (0, ve.useTransition)(u, {
            delay: u ? 0 : 200,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            config: ve.config.stiff,
            immediate: f
          }), y = (0, x.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return v(e => (0, l.jsx)(p, {
            ...y,
            style: e,
            ref: d
          }))
        }),
        $t = (0, c.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, x.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, l.jsx)(Ut, {
            ...r,
            ref: t
          })
        });
      var Qt = r(47690),
        Jt = r(93689),
        er = r(14823);

      function tr(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, be.A)(t),
          [o, a] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          s = e => {
            const {
              scope: t,
              children: r
            } = e, n = c.useRef(null), a = c.useRef(new Map).current;
            return (0, l.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: n,
              children: r
            })
          };
        s.displayName = t;
        const i = e + "CollectionSlot",
          d = (0, ge.TL)(i),
          u = c.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = a(i, r), s = (0, me.s)(t, o.collectionRef);
            return (0, l.jsx)(d, {
              ref: s,
              children: n
            })
          });
        u.displayName = i;
        const f = e + "CollectionItemSlot",
          p = "data-radix-collection-item",
          v = (0, ge.TL)(f),
          y = c.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = c.useRef(null), i = (0, me.s)(t, s), d = a(f, r);
            return c.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              d.itemMap.delete(s)
            })), (0, l.jsx)(v, {
              [p]: "",
              ref: i,
              children: n
            })
          });
        return y.displayName = f, [{
          Provider: s,
          Slot: u,
          ItemSlot: y
        }, function(t) {
          const r = a(e + "CollectionConsumer", t);
          return c.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${p}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }, n]
      }
      Map;
      var rr = ["PageUp", "PageDown"],
        nr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        or = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        ar = "Slider",
        [sr, ir, dr] = tr(ar),
        [lr, ur] = (0, be.A)(ar, [dr]),
        [cr, fr] = lr(ar),
        pr = c.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: a = 1,
            orientation: s = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: d = 0,
            defaultValue: u = [n],
            value: f,
            onValueChange: p = () => {},
            onValueCommit: v = () => {},
            inverted: y = !1,
            form: m,
            ...b
          } = e, h = c.useRef(new Set), g = c.useRef(0), w = "horizontal" === s ? mr : br, [x = [], _] = (0, ct.i)({
            prop: f,
            defaultProp: u,
            onChange: e => {
              const t = [...h.current];
              t[g.current]?.focus(), p(e)
            }
          }), j = c.useRef(x);

          function C(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / a) * a + n, s),
              l = (0, Qt.q)(i, [n, o]);
            _((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort((e, t) => e - t)
              }(e, l, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map((t, r) => e[r + 1] - t)
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, d * a)) {
                g.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && v(n), t ? n : e
              }
              return e
            })
          }
          return (0, l.jsx)(cr, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: g,
            thumbs: h.current,
            values: x,
            orientation: s,
            form: m,
            children: (0, l.jsx)(sr.Provider, {
              scope: e.__scopeSlider,
              children: (0, l.jsx)(sr.Slot, {
                scope: e.__scopeSlider,
                children: (0, l.jsx)(w, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...b,
                  ref: t,
                  onPointerDown: (0, ye.mK)(b.onPointerDown, () => {
                    i || (j.current = x)
                  }),
                  min: n,
                  max: o,
                  inverted: y,
                  onSlideStart: i ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map(e => Math.abs(e - t)),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(x, e);
                    C(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    C(e, g.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = j.current[g.current];
                    x[g.current] !== e && v(x)
                  },
                  onHomeKeyDown: () => !i && C(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !i && C(o, x.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      const r = rr.includes(e.key) || e.shiftKey && nr.includes(e.key) ? 10 : 1,
                        n = g.current;
                      C(x[n] + a * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      pr.displayName = ar;
      var [vr, yr] = lr(ar, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), mr = c.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: a,
          onSlideStart: s,
          onSlideMove: i,
          onSlideEnd: d,
          onStepKeyDown: u,
          ...f
        } = e, [p, v] = c.useState(null), y = (0, me.s)(t, e => v(e)), m = c.useRef(void 0), b = (0, Jt.jH)(o), h = "ltr" === b, g = h && !a || !h && a;

        function w(e) {
          const t = m.current || p.getBoundingClientRect(),
            o = Dr([0, t.width], g ? [r, n] : [n, r]);
          return m.current = t, o(e - t.left)
        }
        return (0, l.jsx)(vr, {
          scope: e.__scopeSlider,
          startEdge: g ? "left" : "right",
          endEdge: g ? "right" : "left",
          direction: g ? 1 : -1,
          size: "width",
          children: (0, l.jsx)(hr, {
            dir: b,
            "data-orientation": "horizontal",
            ...f,
            ref: y,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = w(e.clientX);
              s?.(t)
            },
            onSlideMove: e => {
              const t = w(e.clientX);
              i?.(t)
            },
            onSlideEnd: () => {
              m.current = void 0, d?.()
            },
            onStepKeyDown: e => {
              const t = or[g ? "from-left" : "from-right"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), br = c.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...u
        } = e, f = c.useRef(null), p = (0, me.s)(t, f), v = c.useRef(void 0), y = !o;

        function m(e) {
          const t = v.current || f.current.getBoundingClientRect(),
            o = Dr([0, t.height], y ? [n, r] : [r, n]);
          return v.current = t, o(e - t.top)
        }
        return (0, l.jsx)(vr, {
          scope: e.__scopeSlider,
          startEdge: y ? "bottom" : "top",
          endEdge: y ? "top" : "bottom",
          size: "height",
          direction: y ? 1 : -1,
          children: (0, l.jsx)(hr, {
            "data-orientation": "vertical",
            ...u,
            ref: p,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = m(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = m(e.clientY);
              s?.(t)
            },
            onSlideEnd: () => {
              v.current = void 0, i?.()
            },
            onStepKeyDown: e => {
              const t = or[y ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), hr = c.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...u
        } = e, c = fr(ar, r);
        return (0, l.jsx)(we.span, {
          ...u,
          ref: t,
          onKeyDown: (0, ye.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : rr.concat(nr).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, ye.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, ye.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, ye.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), gr = "SliderTrack", wr = c.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = fr(gr, r);
        return (0, l.jsx)(we.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      wr.displayName = gr;
      var xr = "SliderRange",
        _r = c.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = fr(xr, r), a = yr(xr, r), s = c.useRef(null), i = (0, me.s)(t, s), d = o.values.length, u = o.values.map(e => Pr(e, o.min, o.max)), f = d > 1 ? Math.min(...u) : 0, p = 100 - Math.max(...u);
          return (0, l.jsx)(we.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: i,
            style: {
              ...e.style,
              [a.startEdge]: f + "%",
              [a.endEdge]: p + "%"
            }
          })
        });
      _r.displayName = xr;
      var jr = "SliderThumb",
        Cr = c.forwardRef((e, t) => {
          const r = ir(e.__scopeSlider),
            [n, o] = c.useState(null),
            a = (0, me.s)(t, e => o(e)),
            s = c.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, l.jsx)(Or, {
            ...e,
            ref: a,
            index: s
          })
        }),
        Or = c.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...a
          } = e, s = fr(jr, r), i = yr(jr, r), [d, u] = c.useState(null), f = (0, me.s)(t, e => u(e)), p = !d || s.form || !!d.closest("form"), v = (0, Me.X)(d), y = s.values[n], m = void 0 === y ? 0 : Pr(y, s.min, s.max), b = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), h = v?.[i.size], g = h ? function(e, t, r) {
            const n = e / 2;
            return (n - Dr([0, 50], [0, n])(t) * r) * r
          }(h, m, i.direction) : 0;
          return c.useEffect(() => {
            if (d) return s.thumbs.add(d), () => {
              s.thumbs.delete(d)
            }
          }, [d, s.thumbs]), (0, l.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${m}% + ${g}px)`
            },
            children: [(0, l.jsx)(sr.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, l.jsx)(we.span, {
                role: "slider",
                "aria-label": e["aria-label"] || b,
                "aria-valuemin": s.min,
                "aria-valuenow": y,
                "aria-valuemax": s.max,
                "aria-orientation": s.orientation,
                "data-orientation": s.orientation,
                "data-disabled": s.disabled ? "" : void 0,
                tabIndex: s.disabled ? void 0 : 0,
                ...a,
                ref: f,
                style: void 0 === y ? {
                  display: "none"
                } : e.style,
                onFocus: (0, ye.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), p && (0, l.jsx)(Nr, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: y
            }, n)]
          })
        });
      Cr.displayName = jr;
      var Nr = c.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = c.useRef(null),
          a = (0, me.s)(o, n),
          s = (0, er.Z)(t);
        return c.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (s !== t && n) {
            const r = new Event("input", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [s, t]), (0, l.jsx)(we.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: a,
          defaultValue: t
        })
      });

      function Pr(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, Qt.q)(n, [0, 100])
      }

      function Dr(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Nr.displayName = "RadioBubbleInput";
      var Rr = pr,
        Sr = wr,
        Er = _r,
        Ir = Cr,
        kr = "focusScope.autoFocusOnMount",
        Tr = "focusScope.autoFocusOnUnmount",
        zr = {
          bubbles: !1,
          cancelable: !0
        },
        Lr = c.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = c.useState(null), u = (0, je.c)(o), f = (0, je.c)(a), p = c.useRef(null), v = (0, me.s)(t, e => d(e)), y = c.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          c.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (y.paused || !i) return;
                  const t = e.target;
                  i.contains(t) ? p.current = t : Fr(p.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (y.paused || !i) return;
                  const t = e.relatedTarget;
                  null !== t && (i.contains(t) || Fr(p.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Fr(i)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return i && n.observe(i, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }, [n, i, y.paused]), c.useEffect(() => {
            if (i) {
              qr.add(y);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(kr, zr);
                i.addEventListener(kr, u), i.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Fr(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(Ar(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Fr(i))
              }
              return () => {
                i.removeEventListener(kr, u), setTimeout(() => {
                  const t = new CustomEvent(Tr, zr);
                  i.addEventListener(Tr, f), i.dispatchEvent(t), t.defaultPrevented || Fr(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(Tr, f), qr.remove(y)
                }, 0)
              }
            }
          }, [i, u, f, y]);
          const m = c.useCallback(e => {
            if (!r && !n) return;
            if (y.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, a] = function(e) {
                  const t = Ar(e);
                  return [Vr(t, e), Vr(t.reverse(), e)]
                }(t);
              n && a ? e.shiftKey || o !== a ? e.shiftKey && o === n && (e.preventDefault(), r && Fr(a, {
                select: !0
              })) : (e.preventDefault(), r && Fr(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, y.paused]);
          return (0, l.jsx)(we.div, {
            tabIndex: -1,
            ...s,
            ref: v,
            onKeyDown: m
          })
        });

      function Ar(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function Vr(e, t) {
        for (const r of e)
          if (!Mr(r, {
              upTo: t
            })) return r
      }

      function Mr(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function Fr(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      Lr.displayName = "FocusScope";
      var qr = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Br(e, t), e.unshift(t)
          },
          remove(t) {
            e = Br(e, t), e[0]?.resume()
          }
        }
      }();

      function Br(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var Xr = r(91685),
        Kr = r(35328),
        Gr = r(45787),
        Ur = "Dialog",
        [Hr, Wr] = (0, be.A)(Ur),
        [Zr, Yr] = Hr(Ur),
        $r = "DialogTrigger",
        Qr = c.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Yr($r, r), a = (0, me.s)(t, o.triggerRef);
          return (0, l.jsx)(we.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": hn(o.open),
            ...n,
            ref: a,
            onClick: (0, ye.mK)(e.onClick, o.onOpenToggle)
          })
        });
      Qr.displayName = $r;
      var Jr = "DialogPortal",
        [en, tn] = Hr(Jr, {
          forceMount: void 0
        }),
        rn = "DialogOverlay",
        nn = c.forwardRef((e, t) => {
          const r = tn(rn, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Yr(rn, e.__scopeDialog);
          return a.modal ? (0, l.jsx)(lt, {
            present: n || a.open,
            children: (0, l.jsx)(an, {
              ...o,
              ref: t
            })
          }) : null
        });
      nn.displayName = rn;
      var on = (0, ge.TL)("DialogOverlay.RemoveScroll"),
        an = c.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Yr(rn, r);
          return (0, l.jsx)(Kr.A, {
            as: on,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, l.jsx)(we.div, {
              "data-state": hn(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        sn = "DialogContent",
        dn = c.forwardRef((e, t) => {
          const r = tn(sn, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Yr(sn, e.__scopeDialog);
          return (0, l.jsx)(lt, {
            present: n || a.open,
            children: a.modal ? (0, l.jsx)(ln, {
              ...o,
              ref: t
            }) : (0, l.jsx)(un, {
              ...o,
              ref: t
            })
          })
        });
      dn.displayName = sn;
      var ln = c.forwardRef((e, t) => {
          const r = Yr(sn, e.__scopeDialog),
            n = c.useRef(null),
            o = (0, me.s)(t, r.contentRef, n);
          return c.useEffect(() => {
            const e = n.current;
            if (e) return (0, Gr.Eq)(e)
          }, []), (0, l.jsx)(cn, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, ye.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, ye.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, ye.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        un = c.forwardRef((e, t) => {
          const r = Yr(sn, e.__scopeDialog),
            n = c.useRef(!1),
            o = c.useRef(!1);
          return (0, l.jsx)(cn, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const a = t.target,
                s = r.triggerRef.current?.contains(a);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        cn = c.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...s
          } = e, i = Yr(sn, r), d = c.useRef(null), u = (0, me.s)(t, d);
          return (0, Xr.Oh)(), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(Lr, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, l.jsx)(Pe, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": hn(i.open),
                ...s,
                ref: u,
                onDismiss: () => i.onOpenChange(!1)
              })
            }), (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(_n, {
                titleId: i.titleId
              }), (0, l.jsx)(jn, {
                contentRef: d,
                descriptionId: i.descriptionId
              })]
            })]
          })
        }),
        fn = "DialogTitle",
        pn = c.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Yr(fn, r);
          return (0, l.jsx)(we.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      pn.displayName = fn;
      var vn = "DialogDescription",
        yn = c.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Yr(vn, r);
          return (0, l.jsx)(we.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      yn.displayName = vn;
      var mn = "DialogClose",
        bn = c.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Yr(mn, r);
          return (0, l.jsx)(we.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, ye.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function hn(e) {
        return e ? "open" : "closed"
      }
      bn.displayName = mn;
      var gn = "DialogTitleWarning",
        [wn, xn] = (0, be.q)(gn, {
          contentName: sn,
          titleName: fn,
          docsSlug: "dialog"
        }),
        _n = ({
          titleId: e
        }) => {
          const t = xn(gn),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return c.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        jn = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${xn("DialogDescriptionWarning").contentName}}.`;
          return c.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        Cn = Qr,
        On = nn,
        Nn = dn,
        Pn = pn,
        Dn = yn,
        Rn = bn;
      const Sn = (0, c.createContext)({
          triggerRef: (0, c.createRef)(),
          triggerBorderRef: (0, c.createRef)(),
          thumbnailRef: (0, c.createRef)(),
          openIconRef: (0, c.createRef)(),
          overlayRef: (0, c.createRef)(),
          contentRef: (0, c.createRef)(),
          containerRef: (0, c.createRef)(),
          imageRef: (0, c.createRef)(),
          placeholderRef: (0, c.createRef)(),
          zoomPanRef: (0, c.createRef)(),
          captionRef: (0, c.createRef)(),
          controlsRef: (0, c.createRef)(),
          closeRef: (0, c.createRef)(),
          zoomRef: (0, c.createRef)(),
          zoomInRef: (0, c.createRef)(),
          zoomSliderRef: (0, c.createRef)(),
          zoomOutRef: (0, c.createRef)(),
          resetRef: (0, c.createRef)(),
          downloadRef: (0, c.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        En = (0, c.createContext)({
          openAnim: () => Promise.resolve(),
          update: () => Promise.resolve(),
          close: () => Promise.resolve(),
          zoomIn: () => Promise.resolve(),
          zoomOut: () => Promise.resolve(),
          zoomTo: () => Promise.resolve(),
          resetZoom: () => Promise.resolve(),
          toggleControls: () => Promise.resolve(),
          onOpenChange: () => Promise.resolve()
        }),
        In = ((0, c.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, ie.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, c.useContext)(Sn),
            d = (0, H.UP)(a, n),
            u = (0, x.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(ce.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, l.jsx)(Cn, {
            ref: d,
            ...u,
            children: (0, l.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, l.jsx)(f.xV, {
                children: t
              })
            })
          })
        }), (0, c.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, c.useContext)(Sn), a = (0, H.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? f.DX : "img";
          return (0, l.jsx)(i, {
            ref: a,
            ...s
          })
        }), (0, c.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, c.useContext)(Sn), o = (0, H.UP)(n, r), a = (0, x.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? f.DX : ue.Maximize2;
          return (0, l.jsx)(s, {
            ref: o,
            ...a
          })
        }), (0, c.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, c.useContext)(Sn), o = (0, H.UP)(n, r), a = (0, x.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, l.jsx)(On, {
            ref: o,
            ...a
          })
        }), (0, c.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, c.useContext)(En), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, c.useContext)(Sn), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, c.useContext)(Sn), [t, r] = (0, c.useState)(e.getCursor()), n = (0, c.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, c.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), p = [de.xW.tokens, de.xW.typography, de.xW.grid, le("dark")].join(" ");
          const v = (0, H.UP)(a, n),
            y = (0, x.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, u.$)("foundry_1a74xwb9", p),
              style: {
                cursor: d
              }
            });
          return (0, l.jsxs)(Nn, {
            ref: v,
            ...y,
            children: [(0, l.jsx)(f.s6, {
              children: (0, l.jsx)(Pn, {
                children: s
              })
            }), t]
          })
        }), (0, c.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, c.useContext)(Sn);
          (() => {
            const {
              contextSafe: e
            } = (0, Z.L)(), {
              toggleControls: t
            } = (0, c.useContext)(En), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, c.useContext)(Sn), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (W.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...se
              }), W.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...se
              }), W.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...se
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || W.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...se
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (W.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...se
              }), W.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...se
              }), W.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...se
              })))
            }), u = (0, c.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, H.iQ)({
              ref: a,
              onFocusIn: u
            }), (0, Y.useGesture)({
              onWheel: d,
              onDrag: i,
              onPinch: l
            }, {
              target: r,
              drag: {
                filterTaps: !0
              },
              pinch: {
                pinchOnWheel: !1
              }
            })
          })();
          const a = (0, H.UP)(o, n),
            s = (0, x.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, l.jsx)("div", {
            ref: a,
            ...s,
            children: (0, l.jsxs)(In, {
              children: [(0, l.jsx)(kn, {}), t]
            })
          })
        }), (0, c.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, c.useContext)(Sn), a = (0, H.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? f.DX : "div";
          return (0, l.jsx)(i, {
            ref: a,
            ...s
          })
        })),
        kn = (0, c.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, c.useContext)(Sn), a = (0, H.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? f.DX : "img";
          return (0, l.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Tn = ((0, c.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, c.useContext)(Sn), a = (0, H.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? f.DX : "img";
          return (0, l.jsx)(i, {
            ref: a,
            ...s
          })
        }), (0, c.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, c.useContext)(Sn), a = (0, H.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? f.DX : "p";
          return (0, l.jsx)(Dn, {
            asChild: !0,
            children: (0, l.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }), (0, c.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, c.useContext)(Sn);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, c.useContext)(En);
            (0, $.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, $.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, $.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, $.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, H.UP)(o, n),
            s = (0, x.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? f.DX : "div";
          return (0, l.jsx)($.Hb, {
            children: (0, l.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }), ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, l.jsx)(l.Fragment, {
            children: n
          });
          const a = (0, x.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, l.jsxs)(Wt, {
            delayDuration: 0,
            children: [(0, l.jsx)(Zt, {
              children: n
            }), (0, l.jsxs)(Yt, {
              ...a,
              children: [(0, l.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, l.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, l.jsx)($t, {})]
            })]
          })
        }),
        zn = (0, c.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, x.v6)(e, {
            isInline: !0
          });
          return (0, l.jsx)(pe, {
            ref: t,
            ...r
          })
        });
      (0, c.forwardRef)(function({
        testId: e,
        asChild: t,
        showTooltip: r = !0,
        children: n,
        ...o
      }, a) {
        const s = (0, ie.tz)(),
          {
            zoomRef: i
          } = (0, c.useContext)(Sn),
          {
            canZoomIn: u,
            zoomIn: p,
            canZoomOut: v,
            zoomOut: y,
            zoomProgress: m,
            minZoomLevel: b,
            maxZoomLevel: h,
            zoomTo: g
          } = (() => {
            const {
              slide: e
            } = (0, c.useContext)(Sn), {
              zoomIn: t,
              zoomOut: r,
              zoomTo: n
            } = (0, c.useContext)(En), [o, a] = (0, c.useState)(!1), [s, i] = (0, c.useState)(!1), [d, l] = (0, c.useState)(0), [u, f] = (0, c.useState)(0), [p, v] = (0, c.useState)(0), y = (0, c.useCallback)(() => {
              a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), f(Math.ceil(100 * e.zoomLevels.min)), v(Math.ceil(100 * e.zoomLevels.max))
            }, []), m = (0, c.useCallback)(([e]) => {
              n(e / 100)
            }, [n]);
            return (0, c.useEffect)(() => (e.addEventListener("zoom", y), () => {
              e.removeEventListener("zoom", y)
            }), [y]), {
              zoomTo: m,
              zoomIn: t,
              zoomOut: r,
              canZoomIn: o,
              canZoomOut: s,
              zoomProgress: d,
              minZoomLevel: u,
              maxZoomLevel: p
            }
          })(),
          w = (0, H.UP)(i, a),
          _ = (0, x.v6)(o, {
            "data-testid": e,
            className: "foundry_1a74xwbp"
          }),
          j = t ? f.DX : "div";
        return (0, l.jsxs)(j, {
          ref: w,
          ..._,
          children: [(0, l.jsx)(Tn, {
            side: "left",
            enabled: r,
            content: s.formatMessage(ce.ZoomInButtonLabel),
            metadata: s.formatMessage(ce.ZoomInButtonTooltip, {
              shortcut: (0, l.jsx)(zn, {
                shortcut: "+"
              })
            }),
            children: (0, l.jsx)(d.K, {
              label: s.formatMessage(ce.ZoomInButtonLabel),
              size: "LG",
              icon: "Plus",
              appearance: "tertiary",
              className: ae({
                position: "top"
              }),
              onPress: p,
              isDisabled: !u
            })
          }), (0, l.jsxs)(Rr, {
            className: "foundry_1a74xwbt",
            max: h,
            min: b,
            step: 1,
            value: [m],
            orientation: "vertical",
            onValueChange: g,
            children: [(0, l.jsx)(Sr, {
              className: "foundry_1a74xwbu",
              children: (0, l.jsx)(Er, {
                className: "foundry_1a74xwbv"
              })
            }), (0, l.jsx)(Tn, {
              side: "left",
              enabled: r,
              content: s.formatMessage(ce.ZoomSliderTooltip, {
                zoom: m.toFixed(0)
              }),
              children: (0, l.jsx)(Ir, {
                className: "foundry_1a74xwbw",
                children: (0, l.jsx)("span", {
                  className: "foundry_1a74xwbx"
                })
              })
            })]
          }), (0, l.jsx)(Tn, {
            side: "left",
            enabled: r,
            content: s.formatMessage(ce.ZoomOutButtonLabel),
            metadata: s.formatMessage(ce.ZoomOutButtonTooltip, {
              shortcut: (0, l.jsx)(zn, {
                shortcut: "-"
              })
            }),
            children: (0, l.jsx)(d.K, {
              label: s.formatMessage(ce.ZoomOutButtonLabel),
              size: "LG",
              icon: "Minus",
              appearance: "tertiary",
              className: ae({
                position: "bottom"
              }),
              onPress: y,
              isDisabled: !v
            })
          }), (0, l.jsx)(f.xV, {
            children: n
          })]
        })
      }), (0, c.forwardRef)(function({
        testId: e,
        asChild: t,
        showTooltip: r = !0,
        ...n
      }, o) {
        const a = (0, ie.tz)(),
          {
            closeRef: s
          } = (0, c.useContext)(Sn),
          i = (0, H.UP)(s, o),
          u = (0, x.v6)(n, {
            "data-testid": e,
            className: oe({
              styled: !t
            })
          }),
          p = t ? (0, l.jsx)(f.DX, {
            ref: i,
            ...u
          }) : (0, l.jsx)(d.K, {
            ref: i,
            ...u,
            size: "LG",
            icon: "X",
            appearance: "tertiary",
            label: a.formatMessage(ce.CloseButtonLabel)
          });
        return (0, l.jsx)(Tn, {
          side: "right",
          enabled: r,
          content: a.formatMessage(ce.CloseButtonLabel),
          metadata: a.formatMessage(ce.CloseButtonTooltip, {
            shortcut: (0, l.jsx)(zn, {
              shortcut: "Esc"
            })
          }),
          children: (0, l.jsx)(Rn, {
            asChild: !0,
            children: p
          })
        })
      }), (0, c.forwardRef)(function({
        testId: e,
        showTooltip: t = !0,
        ...r
      }, n) {
        const o = (0, ie.tz)(),
          a = (() => {
            const {
              slide: e,
              resetRef: t
            } = (0, c.useContext)(Sn), {
              contextSafe: r
            } = (0, Z.L)(), {
              resetZoom: n
            } = (0, c.useContext)(En), [o, a] = (0, c.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
              W.gsap.to([t.current], {
                scale: e ? 1 : .5,
                opacity: e ? 1 : 0,
                ...se
              })
            }), i = (0, c.useCallback)(() => {
              const t = e.currZoomLevel !== e.zoomLevels.initial;
              a(t), s(t)
            }, [a]);
            return (0, c.useEffect)(() => (e.addEventListener("zoom", i), () => {
              e.removeEventListener("zoom", i)
            }), [i]), {
              isDisabled: !o,
              onPress: n,
              "aria-hidden": !o
            }
          })(),
          {
            resetRef: s
          } = (0, c.useContext)(Sn),
          i = (0, H.UP)(s, n),
          u = (0, x.v6)(r, a, {
            "data-testid": e,
            className: "foundry_1a74xwbn foundry_1a74xwbj"
          });
        return (0, l.jsx)(Tn, {
          side: "left",
          enabled: t,
          content: o.formatMessage(ce.ResetZoomButtonLabel),
          metadata: o.formatMessage(ce.ResetZoomButtonTooltip, {
            shortcut: (0, l.jsx)(zn, {
              shortcut: "R"
            })
          }),
          children: (0, l.jsx)(d.K, {
            ref: i,
            ...u,
            size: "LG",
            icon: "Undo",
            appearance: "tertiary",
            label: o.formatMessage(ce.ResetZoomButtonLabel)
          })
        })
      }), (0, c.forwardRef)(function({
        testId: e,
        showTooltip: t = !0,
        ...r
      }, n) {
        const o = (0, ie.tz)(),
          {
            downloadRef: a,
            imageRef: s
          } = (0, c.useContext)(Sn),
          i = (0, H.UP)(a, n),
          u = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbo foundry_1a74xwbj"
          });
        return (0, l.jsx)(Tn, {
          side: "left",
          enabled: t,
          content: o.formatMessage(ce.DownloadButtonTooltip),
          children: (0, l.jsx)(d.K, {
            ref: i,
            ...u,
            size: "LG",
            icon: "Download",
            appearance: "tertiary",
            label: o.formatMessage(ce.DownloadButtonTooltip),
            onPress: () => (async e => {
              if (!e) return;
              const t = e.currentSrc,
                r = t.split("\\").pop()?.split("/").pop() || "";
              fetch(t, {
                headers: {
                  origin: location.origin
                }
              }).then(e => e.blob()).then(e => {
                ((e, t) => {
                  const r = document.createElement("a");
                  r.href = e, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r)
                })(window.URL.createObjectURL(e), r)
              }).catch(e => console.error(e))
            })(s.current)
          })
        })
      });
      var Ln = r(13258);

      function An(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Vn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vn(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = An(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bn = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mn(Mn({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) qn(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fn(e.variantClassNames, e => Fn(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_i6k0ds0 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
          variantClassNames: {
            status: {
              neutral: "foundry_i6k0ds1",
              success: "foundry_i6k0ds2",
              invalid: "foundry_i6k0ds3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Xn = (0, c.createContext)(null);

      function Kn() {
        const e = (0, c.useContext)(Xn);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Gn = (0, c.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        descriptionId: n = "",
        errorId: o = "",
        status: a = "neutral",
        ...s
      }, i) => {
        const d = (0, x.v6)({
            className: Bn({
              status: a
            }),
            "data-testid": t
          }, s),
          u = r ? f.DX : "div";
        return (0, l.jsx)(Xn.Provider, {
          value: {
            descriptionId: n,
            errorId: o,
            status: a,
            ...s
          },
          children: (0, l.jsx)(u, {
            ...d,
            ref: i,
            children: e
          })
        })
      });
      (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        ...r
      }, n) => {
        const {
          status: o
        } = Kn(), a = (0, x.v6)({
          size: "SM",
          className: "foundry_i6k0ds4",
          "data-testid": e
        }, r), s = {
          success: ue.Check,
          invalid: ue.X,
          neutral: ue.TriangleAlert
        }, i = t ? f.DX : s[o];
        return (0, l.jsx)(i, {
          ref: n,
          ...a
        })
      }), (0, c.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          errorId: s
        } = Kn(), i = (0, x.v6)({
          "data-testid": t,
          id: s || a
        }, n), d = r ? f.DX : "div";
        return (0, l.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var Un = "ScrollArea",
        [Hn, Wn] = (0, be.A)(Un),
        [Zn, Yn] = Hn(Un),
        $n = c.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = c.useState(null), [u, f] = c.useState(null), [p, v] = c.useState(null), [y, m] = c.useState(null), [b, h] = c.useState(null), [g, w] = c.useState(0), [x, _] = c.useState(0), [j, C] = c.useState(!1), [O, N] = c.useState(!1), P = (0, me.s)(t, e => d(e)), D = (0, Jt.jH)(o);
          return (0, l.jsx)(Zn, {
            scope: r,
            type: n,
            dir: D,
            scrollHideDelay: a,
            scrollArea: i,
            viewport: u,
            onViewportChange: f,
            content: p,
            onContentChange: v,
            scrollbarX: y,
            onScrollbarXChange: m,
            scrollbarXEnabled: j,
            onScrollbarXEnabledChange: C,
            scrollbarY: b,
            onScrollbarYChange: h,
            scrollbarYEnabled: O,
            onScrollbarYEnabledChange: N,
            onCornerWidthChange: w,
            onCornerHeightChange: _,
            children: (0, l.jsx)(we.div, {
              dir: D,
              ...s,
              ref: P,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": g + "px",
                "--radix-scroll-area-corner-height": x + "px",
                ...e.style
              }
            })
          })
        });
      $n.displayName = Un;
      var Qn = "ScrollAreaViewport",
        Jn = c.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = Yn(Qn, r), i = c.useRef(null), d = (0, me.s)(t, i, s.onViewportChange);
          return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, l.jsx)(we.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, l.jsx)("div", {
                ref: s.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        });
      Jn.displayName = Qn;
      var eo = "ScrollAreaScrollbar",
        to = c.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Yn(eo, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return c.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, l.jsx)(ro, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, l.jsx)(no, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, l.jsx)(oo, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, l.jsx)(ao, {
            ...n,
            ref: t
          }) : null
        });
      to.displayName = eo;
      var ro = c.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Yn(eo, e.__scopeScrollArea), [a, s] = c.useState(!1);
          return c.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), s(!0)
                },
                n = () => {
                  t = window.setTimeout(() => s(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, l.jsx)(lt, {
            present: r || a,
            children: (0, l.jsx)(oo, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        no = c.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Yn(eo, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = Oo(() => d("SCROLL_END"), 100), [i, d] = (u = {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          }, c.useReducer((e, t) => u[e][t] ?? e, "hidden"));
          var u;
          return c.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), c.useEffect(() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (d("SCROLL"), s()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, a, d, s]), (0, l.jsx)(lt, {
            present: r || "hidden" !== i,
            children: (0, l.jsx)(ao, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, ye.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, ye.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        oo = c.forwardRef((e, t) => {
          const r = Yn(eo, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = c.useState(!1),
            i = "horizontal" === e.orientation,
            d = Oo(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return No(r.viewport, d), No(r.content, d), (0, l.jsx)(lt, {
            present: n || a,
            children: (0, l.jsx)(ao, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        ao = c.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Yn(eo, e.__scopeScrollArea), a = c.useRef(null), s = c.useRef(0), [i, d] = c.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), u = go(i.viewport, i.content), f = {
            ...n,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(u > 0 && u < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function p(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = wo(r),
                a = t || o / 2,
                s = o - a,
                i = r.scrollbar.paddingStart + a,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                l = r.content - r.viewport;
              return _o([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, t)
          }
          return "horizontal" === r ? (0, l.jsx)(so, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = xo(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = p(e, o.dir))
            }
          }) : "vertical" === r ? (0, l.jsx)(io, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = xo(o.viewport.scrollTop, i);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = p(e))
            }
          }) : null
        }),
        so = c.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Yn(eo, e.__scopeScrollArea), [s, i] = c.useState(), d = c.useRef(null), u = (0, me.s)(t, d, a.onScrollbarXChange);
          return c.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, l.jsx)(co, {
            "data-orientation": "horizontal",
            ...o,
            ref: u,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": wo(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), jo(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: ho(s.paddingLeft),
                  paddingEnd: ho(s.paddingRight)
                }
              })
            }
          })
        }),
        io = c.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Yn(eo, e.__scopeScrollArea), [s, i] = c.useState(), d = c.useRef(null), u = (0, me.s)(t, d, a.onScrollbarYChange);
          return c.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, l.jsx)(co, {
            "data-orientation": "vertical",
            ...o,
            ref: u,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": wo(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), jo(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: ho(s.paddingTop),
                  paddingEnd: ho(s.paddingBottom)
                }
              })
            }
          })
        }),
        [lo, uo] = Hn(eo),
        co = c.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: s,
            onThumbPointerDown: i,
            onThumbPositionChange: d,
            onDragScroll: u,
            onWheelScroll: f,
            onResize: p,
            ...v
          } = e, y = Yn(eo, r), [m, b] = c.useState(null), h = (0, me.s)(t, e => b(e)), g = c.useRef(null), w = c.useRef(""), x = y.viewport, _ = n.content - n.viewport, j = (0, je.c)(f), C = (0, je.c)(d), O = Oo(p, 10);

          function N(e) {
            if (g.current) {
              const t = e.clientX - g.current.left,
                r = e.clientY - g.current.top;
              u({
                x: t,
                y: r
              })
            }
          }
          return c.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = m?.contains(t);
              r && j(e, _)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [x, m, _, j]), c.useEffect(C, [n, C]), No(m, O), No(y.content, O), (0, l.jsx)(lo, {
            scope: r,
            scrollbar: m,
            hasThumb: o,
            onThumbChange: (0, je.c)(a),
            onThumbPointerUp: (0, je.c)(s),
            onThumbPositionChange: C,
            onThumbPointerDown: (0, je.c)(i),
            children: (0, l.jsx)(we.div, {
              ...v,
              ref: h,
              style: {
                position: "absolute",
                ...v.style
              },
              onPointerDown: (0, ye.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), g.current = m.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", y.viewport && (y.viewport.style.scrollBehavior = "auto"), N(e))
              }),
              onPointerMove: (0, ye.mK)(e.onPointerMove, N),
              onPointerUp: (0, ye.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = w.current, y.viewport && (y.viewport.style.scrollBehavior = ""), g.current = null
              })
            })
          })
        }),
        fo = "ScrollAreaThumb",
        po = c.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = uo(fo, e.__scopeScrollArea);
          return (0, l.jsx)(lt, {
            present: r || o.hasThumb,
            children: (0, l.jsx)(vo, {
              ref: t,
              ...n
            })
          })
        }),
        vo = c.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = Yn(fo, r), s = uo(fo, r), {
            onThumbPositionChange: i
          } = s, d = (0, me.s)(t, e => s.onThumbChange(e)), u = c.useRef(void 0), f = Oo(() => {
            u.current && (u.current(), u.current = void 0)
          }, 100);
          return c.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (f(), !u.current) {
                  const t = Co(e, i);
                  u.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, f, i]), (0, l.jsx)(we.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, ye.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, ye.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      po.displayName = fo;
      var yo = "ScrollAreaCorner",
        mo = c.forwardRef((e, t) => {
          const r = Yn(yo, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, l.jsx)(bo, {
            ...e,
            ref: t
          }) : null
        });
      mo.displayName = yo;
      var bo = c.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Yn(yo, r), [a, s] = c.useState(0), [i, d] = c.useState(0), u = Boolean(a && i);
        return No(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), No(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), u ? (0, l.jsx)(we.div, {
          ...n,
          ref: t,
          style: {
            width: a,
            height: i,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function ho(e) {
        return e ? parseInt(e, 10) : 0
      }

      function go(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function wo(e) {
        const t = go(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function xo(e, t, r = "ltr") {
        const n = wo(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          d = "ltr" === r ? [0, s] : [-1 * s, 0],
          l = (0, Qt.q)(e, d);
        return _o([0, s], [0, i])(l)
      }

      function _o(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function jo(e, t) {
        return e > 0 && e < t
      }
      var Co = (e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = r.left !== a.left,
            i = r.top !== a.top;
          (s || i) && t(), r = a, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function Oo(e, t) {
        const r = (0, je.c)(e),
          n = c.useRef(0);
        return c.useEffect(() => () => window.clearTimeout(n.current), []), c.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function No(e, t) {
        const r = (0, je.c)(t);
        (0, Ve.N)(() => {
          let t = 0;
          if (e) {
            const n = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
            });
            return n.observe(e), () => {
              window.cancelAnimationFrame(t), n.unobserve(e)
            }
          }
        }, [e, r])
      }
      var Po = $n,
        Do = Jn,
        Ro = to,
        So = po,
        Eo = mo,
        Io = [" ", "Enter", "ArrowUp", "ArrowDown"],
        ko = [" ", "Enter"],
        To = "Select",
        [zo, Lo, Ao] = tr(To),
        [Vo, Mo] = (0, be.A)(To, [Ao, Be]),
        Fo = Be(),
        [qo, Bo] = Vo(To),
        [Xo, Ko] = Vo(To),
        Go = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            value: s,
            defaultValue: i,
            onValueChange: d,
            dir: u,
            name: f,
            autoComplete: p,
            disabled: v,
            required: y,
            form: m
          } = e, b = Fo(t), [h, g] = c.useState(null), [w, x] = c.useState(null), [_, j] = c.useState(!1), C = (0, Jt.jH)(u), [O, N] = (0, ct.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: To
          }), [P, D] = (0, ct.i)({
            prop: s,
            defaultProp: i,
            onChange: d,
            caller: To
          }), R = c.useRef(null), S = !h || m || !!h.closest("form"), [E, I] = c.useState(new Set), k = Array.from(E).map(e => e.props.value).join(";");
          return (0, l.jsx)(ot, {
            ...b,
            children: (0, l.jsxs)(qo, {
              required: y,
              scope: t,
              trigger: h,
              onTriggerChange: g,
              valueNode: w,
              onValueNodeChange: x,
              valueNodeHasChildren: _,
              onValueNodeHasChildrenChange: j,
              contentId: (0, ke.B)(),
              value: P,
              onValueChange: D,
              open: O,
              onOpenChange: N,
              dir: C,
              triggerPointerDownPosRef: R,
              disabled: v,
              children: [(0, l.jsx)(zo.Provider, {
                scope: t,
                children: (0, l.jsx)(Xo, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: c.useCallback(e => {
                    I(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: c.useCallback(e => {
                    I(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), S ? (0, l.jsxs)(Na, {
                "aria-hidden": !0,
                required: y,
                tabIndex: -1,
                name: f,
                autoComplete: p,
                value: P,
                onChange: e => D(e.target.value),
                disabled: v,
                form: m,
                children: [void 0 === P ? (0, l.jsx)("option", {
                  value: ""
                }) : null, Array.from(E)]
              }, k) : null]
            })
          })
        };
      Go.displayName = To;
      var Uo = "SelectTrigger",
        Ho = c.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = Fo(r), s = Bo(Uo, r), i = s.disabled || n, d = (0, me.s)(t, s.onTriggerChange), u = Lo(r), f = c.useRef("touch"), [p, v, y] = Da(e => {
            const t = u().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Ra(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), m = e => {
            i || (s.onOpenChange(!0), y()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, l.jsx)(at, {
            asChild: !0,
            ...a,
            children: (0, l.jsx)(we.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": Pa(s.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, ye.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== f.current && m(e)
              }),
              onPointerDown: (0, ye.mK)(o.onPointerDown, e => {
                f.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (m(e), e.preventDefault())
              }),
              onKeyDown: (0, ye.mK)(o.onKeyDown, e => {
                const t = "" !== p.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || v(e.key), t && " " === e.key || Io.includes(e.key) && (m(), e.preventDefault())
              })
            })
          })
        });
      Ho.displayName = Uo;
      var Wo = "SelectValue",
        Zo = c.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = Bo(Wo, r), {
            onValueNodeHasChildrenChange: u
          } = d, c = void 0 !== a, f = (0, me.s)(t, d.onValueNodeChange);
          return (0, Ve.N)(() => {
            u(c)
          }, [u, c]), (0, l.jsx)(we.span, {
            ...i,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: Pa(d.value) ? (0, l.jsx)(l.Fragment, {
              children: s
            }) : a
          })
        });
      Zo.displayName = Wo;
      var Yo = c.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, l.jsx)(we.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Yo.displayName = "SelectIcon";
      var $o = e => (0, l.jsx)(dt, {
        asChild: !0,
        ...e
      });
      $o.displayName = "SelectPortal";
      var Qo = "SelectContent",
        Jo = c.forwardRef((e, t) => {
          const r = Bo(Qo, e.__scopeSelect),
            [n, o] = c.useState();
          if ((0, Ve.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? he.createPortal((0, l.jsx)(ta, {
              scope: e.__scopeSelect,
              children: (0, l.jsx)(zo.Slot, {
                scope: e.__scopeSelect,
                children: (0, l.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, l.jsx)(oa, {
            ...e,
            ref: t
          })
        });
      Jo.displayName = Qo;
      var ea = 10,
        [ta, ra] = Vo(Qo),
        na = (0, ge.TL)("SelectContent.RemoveScroll"),
        oa = c.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            side: i,
            sideOffset: d,
            align: u,
            alignOffset: f,
            arrowPadding: p,
            collisionBoundary: v,
            collisionPadding: y,
            sticky: m,
            hideWhenDetached: b,
            avoidCollisions: h,
            ...g
          } = e, w = Bo(Qo, r), [x, _] = c.useState(null), [j, C] = c.useState(null), O = (0, me.s)(t, e => _(e)), [N, P] = c.useState(null), [D, R] = c.useState(null), S = Lo(r), [E, I] = c.useState(!1), k = c.useRef(!1);
          c.useEffect(() => {
            if (x) return (0, Gr.Eq)(x)
          }, [x]), (0, Xr.Oh)();
          const T = c.useCallback(e => {
              const [t, ...r] = S().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && j && (j.scrollTop = 0), r === n && j && (j.scrollTop = j.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [S, j]),
            z = c.useCallback(() => T([N, x]), [T, N, x]);
          c.useEffect(() => {
            E && z()
          }, [E, z]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: A
          } = w;
          c.useEffect(() => {
            if (x) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (A.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (A.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : x.contains(r.target) || L(!1), document.removeEventListener("pointermove", t), A.current = null
                };
              return null !== A.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [x, L, A]), c.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [V, M] = Da(e => {
            const t = S().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Ra(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), F = c.useCallback((e, t, r) => {
            const n = !k.current && !r;
            (void 0 !== w.value && w.value === t || n) && (P(e), n && (k.current = !0))
          }, [w.value]), q = c.useCallback(() => x?.focus(), [x]), B = c.useCallback((e, t, r) => {
            const n = !k.current && !r;
            (void 0 !== w.value && w.value === t || n) && R(e)
          }, [w.value]), X = "popper" === n ? sa : aa, K = X === sa ? {
            side: i,
            sideOffset: d,
            align: u,
            alignOffset: f,
            arrowPadding: p,
            collisionBoundary: v,
            collisionPadding: y,
            sticky: m,
            hideWhenDetached: b,
            avoidCollisions: h
          } : {};
          return (0, l.jsx)(ta, {
            scope: r,
            content: x,
            viewport: j,
            onViewportChange: C,
            itemRefCallback: F,
            selectedItem: N,
            onItemLeave: q,
            itemTextRefCallback: B,
            focusSelectedItem: z,
            selectedItemText: D,
            position: n,
            isPositioned: E,
            searchRef: V,
            children: (0, l.jsx)(Kr.A, {
              as: na,
              allowPinchZoom: !0,
              children: (0, l.jsx)(Lr, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, ye.mK)(o, e => {
                  w.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, l.jsx)(Pe, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => w.onOpenChange(!1),
                  children: (0, l.jsx)(X, {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...g,
                    ...K,
                    onPlaced: () => I(!0),
                    ref: O,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...g.style
                    },
                    onKeyDown: (0, ye.mK)(g.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = S().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => T(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      oa.displayName = "SelectContentImpl";
      var aa = c.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = Bo(Qo, r), s = ra(Qo, r), [i, d] = c.useState(null), [u, f] = c.useState(null), p = (0, me.s)(t, e => f(e)), v = Lo(r), y = c.useRef(!1), m = c.useRef(!0), {
          viewport: b,
          selectedItem: h,
          selectedItemText: g,
          focusSelectedItem: w
        } = s, x = c.useCallback(() => {
          if (a.trigger && a.valueNode && i && u && b && h && g) {
            const e = a.trigger.getBoundingClientRect(),
              t = u.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = g.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                s = e.left - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                u = window.innerWidth - ea,
                c = (0, Qt.q)(a, [ea, Math.max(ea, u - l)]);
              i.style.minWidth = d + "px", i.style.left = c + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                u = window.innerWidth - ea,
                c = (0, Qt.q)(a, [ea, Math.max(ea, u - l)]);
              i.style.minWidth = d + "px", i.style.right = c + "px"
            }
            const s = v(),
              d = window.innerHeight - 2 * ea,
              l = b.scrollHeight,
              c = window.getComputedStyle(u),
              f = parseInt(c.borderTopWidth, 10),
              p = parseInt(c.paddingTop, 10),
              m = parseInt(c.borderBottomWidth, 10),
              w = f + p + l + parseInt(c.paddingBottom, 10) + m,
              x = Math.min(5 * h.offsetHeight, w),
              _ = window.getComputedStyle(b),
              j = parseInt(_.paddingTop, 10),
              C = parseInt(_.paddingBottom, 10),
              O = e.top + e.height / 2 - ea,
              N = d - O,
              P = h.offsetHeight / 2,
              D = f + p + (h.offsetTop + P),
              R = w - D;
            if (D <= O) {
              const e = s.length > 0 && h === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = u.clientHeight - b.offsetTop - b.offsetHeight,
                r = D + Math.max(N, P + (e ? C : 0) + t + m);
              i.style.height = r + "px"
            } else {
              const e = s.length > 0 && h === s[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(O, f + b.offsetTop + (e ? j : 0) + P) + R;
              i.style.height = t + "px", b.scrollTop = D - O + b.offsetTop
            }
            i.style.margin = `${ea}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => y.current = !0)
          }
        }, [v, a.trigger, a.valueNode, i, u, b, h, g, a.dir, n]);
        (0, Ve.N)(() => x(), [x]);
        const [_, j] = c.useState();
        (0, Ve.N)(() => {
          u && j(window.getComputedStyle(u).zIndex)
        }, [u]);
        const C = c.useCallback(e => {
          e && !0 === m.current && (x(), w?.(), m.current = !1)
        }, [x, w]);
        return (0, l.jsx)(ia, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: C,
          children: (0, l.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, l.jsx)(we.div, {
              ...o,
              ref: p,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      });
      aa.displayName = "SelectItemAlignedPosition";
      var sa = c.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = ea,
          ...a
        } = e, s = Fo(r);
        return (0, l.jsx)(st, {
          ...s,
          ...a,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      });
      sa.displayName = "SelectPopperPosition";
      var [ia, da] = Vo(Qo, {}), la = "SelectViewport", ua = c.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = ra(la, r), s = da(la, r), i = (0, me.s)(t, a.onViewportChange), d = c.useRef(0);
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, l.jsx)(zo.Slot, {
            scope: r,
            children: (0, l.jsx)(we.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: i,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...o.style
              },
              onScroll: (0, ye.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * ea,
                      o = parseFloat(r.style.minHeight),
                      a = parseFloat(r.style.height),
                      s = Math.max(o, a);
                    if (s < n) {
                      const o = s + e,
                        a = Math.min(n, o),
                        i = o - a;
                      r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                d.current = t.scrollTop
              })
            })
          })]
        })
      });
      ua.displayName = la;
      var ca = "SelectGroup",
        [fa, pa] = Vo(ca);
      c.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, ke.B)();
        return (0, l.jsx)(fa, {
          scope: r,
          id: o,
          children: (0, l.jsx)(we.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = ca;
      var va = "SelectLabel";
      c.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = pa(va, r);
        return (0, l.jsx)(we.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = va;
      var ya = "SelectItem",
        [ma, ba] = Vo(ya),
        ha = c.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = Bo(ya, r), d = ra(ya, r), u = i.value === n, [f, p] = c.useState(a ?? ""), [v, y] = c.useState(!1), m = (0, me.s)(t, e => d.itemRefCallback?.(e, n, o)), b = (0, ke.B)(), h = c.useRef("touch"), g = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, l.jsx)(ma, {
            scope: r,
            value: n,
            disabled: o,
            textId: b,
            isSelected: u,
            onItemTextChange: c.useCallback(e => {
              p(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, l.jsx)(zo.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: f,
              children: (0, l.jsx)(we.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": u && v,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: m,
                onFocus: (0, ye.mK)(s.onFocus, () => y(!0)),
                onBlur: (0, ye.mK)(s.onBlur, () => y(!1)),
                onClick: (0, ye.mK)(s.onClick, () => {
                  "mouse" !== h.current && g()
                }),
                onPointerUp: (0, ye.mK)(s.onPointerUp, () => {
                  "mouse" === h.current && g()
                }),
                onPointerDown: (0, ye.mK)(s.onPointerDown, e => {
                  h.current = e.pointerType
                }),
                onPointerMove: (0, ye.mK)(s.onPointerMove, e => {
                  h.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === h.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, ye.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, ye.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (ko.includes(e.key) && g(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      ha.displayName = ya;
      var ga = "SelectItemText",
        wa = c.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = Bo(ga, r), i = ra(ga, r), d = ba(ga, r), u = Ko(ga, r), [f, p] = c.useState(null), v = (0, me.s)(t, e => p(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), y = f?.textContent, m = c.useMemo(() => (0, l.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: y
          }, d.value), [d.disabled, d.value, y]), {
            onNativeOptionAdd: b,
            onNativeOptionRemove: h
          } = u;
          return (0, Ve.N)(() => (b(m), () => h(m)), [b, h, m]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(we.span, {
              id: d.textId,
              ...a,
              ref: v
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren ? he.createPortal(a.children, s.valueNode) : null]
          })
        });
      wa.displayName = ga;
      var xa = "SelectItemIndicator";
      c.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return ba(xa, r).isSelected ? (0, l.jsx)(we.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = xa;
      var _a = "SelectScrollUpButton";
      c.forwardRef((e, t) => {
        const r = ra(_a, e.__scopeSelect),
          n = da(_a, e.__scopeSelect),
          [o, a] = c.useState(!1),
          s = (0, me.s)(t, n.onScrollButtonChange);
        return (0, Ve.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, l.jsx)(Ca, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = _a;
      var ja = "SelectScrollDownButton";
      c.forwardRef((e, t) => {
        const r = ra(ja, e.__scopeSelect),
          n = da(ja, e.__scopeSelect),
          [o, a] = c.useState(!1),
          s = (0, me.s)(t, n.onScrollButtonChange);
        return (0, Ve.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, l.jsx)(Ca, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = ja;
      var Ca = c.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = ra("SelectScrollButton", r), s = c.useRef(null), i = Lo(r), d = c.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return c.useEffect(() => () => d(), [d]), (0, Ve.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, l.jsx)(we.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, ye.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, ye.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, ye.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      c.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, l.jsx)(we.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Oa = "SelectArrow";
      c.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Fo(r), a = Bo(Oa, r), s = ra(Oa, r);
        return a.open && "popper" === s.position ? (0, l.jsx)(it, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Oa;
      var Na = c.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = c.useRef(null),
          a = (0, me.s)(n, o),
          s = (0, er.Z)(t);
        return c.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (s !== t && n) {
            const r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [s, t]), (0, l.jsx)(we.select, {
          ...r,
          style: {
            ...ft,
            ...r.style
          },
          ref: a,
          defaultValue: t
        })
      });

      function Pa(e) {
        return "" === e || void 0 === e
      }

      function Da(e) {
        const t = (0, je.c)(e),
          r = c.useRef(""),
          n = c.useRef(0),
          o = c.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = c.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return c.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function Ra(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, t) => s[(i + t) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== r));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }
      Na.displayName = "SelectBubbleInput";
      var Sa = Go,
        Ea = Ho,
        Ia = Zo,
        ka = Yo,
        Ta = $o,
        za = Jo,
        La = ua,
        Aa = ha,
        Va = wa;

      function Ma(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Fa(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fa(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ma(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fa(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ba(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xa = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ka = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qa(qa({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Xa(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ba(e.variantClassNames, e => Ba(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ga = Ka({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ua = Ka({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ha = Ka({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wa = Ka({
          defaultClassName: "foundry_uaq1gw1 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw2"
            },
            showAsterisk: {
              true: "foundry_uaq1gw3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Za = Ka({
          defaultClassName: "foundry_uaq1gw6 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
          variantClassNames: {
            size: {
              MD: "foundry_uaq1gw7",
              LG: "foundry_uaq1gw8"
            },
            isPressed: {
              true: "foundry_uaq1gw9",
              false: "foundry_uaq1gwa"
            },
            isReadOnly: {
              true: "foundry_uaq1gwb"
            },
            isInvalid: {
              true: "foundry_uaq1gwc"
            },
            isDisabled: {
              true: "foundry_uaq1gwd",
              false: "foundry_uaq1gwe"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isInvalid: !0
            }, "foundry_uaq1gwf"],
            [{
              isReadOnly: !0,
              isInvalid: !0
            }, "foundry_uaq1gwg"]
          ]
        }),
        Ya = Ka({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const $a = (0, c.createContext)(null);

      function Qa() {
        const e = (0, c.useContext)($a);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Ja = (0, c.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: a,
          onValueChange: s,
          name: i,
          value: d,
          defaultOpen: u,
          onOpenChange: f,
          isOpen: p,
          size: v = "MD",
          status: y = "neutral",
          ...m
        }, b) => {
          const h = (0, c.useRef)(null),
            g = (0, H.UP)(h, b),
            w = (0, c.useId)(),
            _ = (0, c.useId)(),
            j = (0, c.useId)(),
            C = (0, c.useId)(),
            O = (0, c.useId)(),
            N = (0, c.useId)(),
            [P = !1, D] = (0, H.ic)({
              prop: p,
              defaultProp: u,
              onChange: f
            }),
            R = (0, x.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, m);
          return (0, l.jsx)($a.Provider, {
            value: {
              labelId: w,
              errorId: _,
              descriptionId: j,
              triggerId: N,
              hintId: C,
              popoverId: O,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: P,
              setIsOpen: D,
              defaultOpen: u,
              onOpenChange: f,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: y,
              size: v
            },
            children: (0, l.jsx)(Sa, {
              required: r,
              disabled: n,
              open: P,
              onOpenChange: () => D(!o && !P),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, l.jsx)("div", {
                ref: g,
                ...R,
                children: e
              })
            })
          })
        }),
        es = (0, c.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = Qa(), s = (0, x.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Ga({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, l.jsx)(za, {
            ...s,
            ref: o,
            children: (0, l.jsx)(La, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        ts = (0, c.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e
          }, t);
          return (0, l.jsx)(La, {
            ref: r,
            ...n
          })
        }),
        rs = (0, c.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, l.jsxs)(Po, {
            ...o,
            ref: n,
            children: [(0, l.jsx)(ts, {
              asChild: !0,
              children: (0, l.jsx)(Do, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, l.jsx)(Ro, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, l.jsx)(So, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        ns = (0, c.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...a
        }, s) => {
          const {
            isReadOnly: i,
            status: d,
            isDisabled: u,
            labelId: c,
            hintId: p,
            triggerId: v,
            popoverId: y,
            descriptionId: m,
            isOpen: b,
            value: h,
            size: g
          } = Qa(), {
            isPressed: w,
            pressProps: _
          } = (0, Ln.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), j = (0, x.v6)({
            id: v,
            className: Za({
              size: g,
              isReadOnly: !!i,
              isInvalid: "invalid" === d,
              isPressed: !!w,
              isDisabled: !!u
            }),
            "aria-labelledby": (0, x.VW)(r, c, p),
            "aria-describedby": (0, x.VW)(n, m),
            "aria-activedescendant": h,
            "aria-controls": y,
            "aria-invalid": "invalid" === d,
            "data-state": b ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!w
          }, (0, x.cJ)(_, "onKeyDown"), a), C = o ? f.DX : Ea;
          return (0, l.jsx)(C, {
            ...j,
            ref: s,
            children: e
          })
        }),
        os = (0, c.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, x.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? f.DX : "span";
          return (0, l.jsx)(s, {
            ...a,
            ref: o,
            children: (0, l.jsx)(Ia, {
              placeholder: e
            })
          })
        }),
        as = (0, c.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = Qa(), i = s ? ue.ChevronUp : ue.ChevronDown, d = (0, x.v6)({
            asChild: !0,
            className: Ya({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, l.jsx)(ka, {
            ...d,
            ref: n,
            children: e || (0, l.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        ss = (0, c.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            isDisabled: d,
            labelId: u,
            triggerId: c
          } = Qa(), p = i && !o, v = (0, x.v6)({
            id: a.id || u,
            htmlFor: c,
            "data-testid": e,
            className: Wa({
              showAsterisk: p,
              isDisabled: d
            })
          }, a), y = t ? f.DX : "label";
          return (0, l.jsx)(f.s6, {
            enabled: n,
            children: (0, l.jsx)(y, {
              ...v,
              ref: s,
              children: r
            })
          })
        }),
        is = ((0, c.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Qa(), i = (0, x.v6)({
            className: Ua({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? f.DX : "div";
          return (0, l.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }), (0, c.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = Qa(), i = (0, x.v6)({
            className: Ha({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? f.DX : "div";
          return (0, l.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }), (0, c.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, c.useRef)(null),
            i = (0, H.UP)(s, a),
            d = (0, x.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, l.jsx)(Aa, {
            ref: i,
            ...d,
            children: e
          })
        })),
        ds = (0, c.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, l.jsx)(Va, {
            ref: n,
            asChild: !0,
            children: (0, l.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        ls = ((0, c.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, l.jsx)(ka, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }), Ta);
      (0, c.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          status: s
        } = Qa(), i = (0, x.v6)({
          className: "foundry_uaq1gwx",
          "data-testid": t,
          descriptionId: a,
          status: s
        }, n), d = r ? f.DX : Gn;
        return (0, l.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var us = r(28687),
        cs = r(76646);

      function fs(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ps(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ps(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = fs(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ps(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ys(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ms = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bs = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vs(vs({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ms(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ys(e.variantClassNames, e => ys(e, e => e.split(" ")[0]))
            }
          }, t
        },
        hs = bs({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gs = bs({
          defaultClassName: "foundry_okz6z2m",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z2n foundry_okz6z2i foundry_okz6z2j",
              LG: "foundry_okz6z2o foundry_okz6z2k foundry_okz6z2l"
            },
            isSelected: {
              true: "foundry_okz6z2p"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ws = bs({
          defaultClassName: "foundry_okz6z2b",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            },
            isDisabled: {
              true: "foundry_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xs = bs({
          defaultClassName: "foundry_okz6z28 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z29 foundry_okz6z24 foundry_okz6z25",
              LG: "foundry_okz6z2a foundry_okz6z26 foundry_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _s = bs({
          defaultClassName: "foundry_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_okz6z22",
              secondary: "foundry_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const js = (0, c.createContext)(null);

      function Cs() {
        const e = (0, c.useContext)(js);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }(0, c.forwardRef)(({
        size: e = "MD",
        appearance: t = "primary",
        testId: r,
        asChild: n,
        children: o,
        isDisabled: a = !1,
        isReadOnly: s = !1,
        ...i
      }, d) => {
        const u = (0, x.v6)({
            "data-testid": r,
            className: "foundry_okz6z20"
          }, i),
          p = n ? f.DX : "div",
          v = (0, c.useId)(),
          y = (0, c.useId)(),
          m = (0, c.useId)();
        return (0, l.jsx)(js.Provider, {
          value: {
            size: e,
            appearance: t,
            labelId: v,
            descriptionId: y,
            inputId: m,
            isDisabled: a,
            isReadOnly: s,
            ...i
          },
          children: (0, l.jsx)(p, {
            ...u,
            ref: d,
            children: o
          })
        })
      }), (0, c.forwardRef)(({
        testId: e,
        onPress: t,
        onClick: r,
        "aria-labelledby": n,
        "aria-describedby": o,
        id: a,
        isSelected: s,
        defaultSelected: i,
        onSelectedChange: d,
        name: u,
        value: p,
        ...v
      }, y) => {
        const m = (0, c.useRef)(null),
          b = (0, H.UP)(m, y),
          {
            size: h,
            appearance: g,
            inputId: w,
            labelId: _,
            descriptionId: j,
            isDisabled: C,
            isReadOnly: O
          } = Cs(),
          N = (0, cs.H)({
            isDisabled: C,
            isReadOnly: O,
            isSelected: s,
            defaultSelected: i,
            onChange: d
          }),
          {
            inputProps: P
          } = (0, us.K)({
            id: a || w,
            "aria-labelledby": (0, x.VW)(n, _),
            "aria-describedby": (0, x.VW)(o, j),
            name: u,
            value: p,
            isDisabled: C,
            isReadOnly: O
          }, N, m),
          D = (0, x.v6)({
            className: _s({
              appearance: g
            }),
            "data-state": N.isSelected ? "selected" : "unselected",
            "data-disabled": C || O,
            "data-testid": e,
            onClick: e => {
              t?.(e) ?? r?.(e), e.defaultPrevented || C || O || N.toggle()
            }
          }, v);
        return (0, l.jsxs)("div", {
          ...D,
          children: [(0, l.jsx)(f.s6, {
            children: (0, l.jsx)("input", {
              ...P,
              ref: b
            })
          }), (0, l.jsx)("div", {
            className: xs({
              size: h
            }),
            "aria-hidden": "true",
            children: (0, l.jsx)("div", {
              className: gs({
                size: h,
                isSelected: N.isSelected
              })
            })
          })]
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        hideVisually: n = !1,
        ...o
      }, a) => {
        const {
          isDisabled: s,
          labelId: i,
          inputId: d,
          size: u
        } = Cs(), c = (0, x.v6)({
          id: o.id || i,
          htmlFor: d,
          "data-testid": e,
          className: ws({
            isDisabled: s,
            size: u
          })
        }, o), p = t ? f.DX : "label";
        return (0, l.jsx)(f.s6, {
          enabled: n,
          children: (0, l.jsx)(p, {
            ...c,
            ref: a,
            children: r
          })
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = Cs(), i = n.id || s, d = (0, x.v6)({
          className: hs({
            isDisabled: a
          }),
          "data-testid": r,
          id: i
        }, n), u = t ? f.DX : "div";
        return (0, l.jsx)(u, {
          ...d,
          ref: o,
          children: e
        })
      });
      var Os = r(58611);
      const Ns = ({
          color: e = "currentColor"
        }) => (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, l.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Ps = ({
          color: e = "currentColor"
        }) => (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, l.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Ds = ({
          color: e = "currentColor"
        }) => (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, l.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Rs = ({
          color: e = "currentColor"
        }) => (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, l.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Ss = ({
          color: e = "currentColor"
        }) => (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, l.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Es = ({
          color: e = "currentColor"
        }) => (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, l.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Is(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ks(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ts(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ks(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Is(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ks(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function zs(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ls = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        As = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ts(Ts({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Ls(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zs(e.variantClassNames, e => zs(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vs = As({
          defaultClassName: "foundry_11gbdty6 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty7",
              LG: "foundry_11gbdty8",
              XL: "foundry_11gbdty9"
            },
            appearance: {
              primary: "foundry_11gbdtya",
              secondary: "foundry_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ms = As({
          defaultClassName: "foundry_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty3",
              LG: "foundry_11gbdty4",
              XL: "foundry_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fs = As({
          defaultClassName: "foundry_11gbdtyj foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_11gbdtyk",
              true: "foundry_11gbdtyl"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qs = As({
          defaultClassName: "foundry_11gbdtys",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdtyt",
              LG: "foundry_11gbdtyu",
              XL: "foundry_11gbdtyv"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bs = As({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xs = As({
          defaultClassName: "foundry_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              LG: "foundry_11gbdtyf foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
              XL: "foundry_11gbdtyg foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            },
            isDisabled: {
              true: "foundry_11gbdtyh"
            },
            showAsterisk: {
              true: "foundry_11gbdtyi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ks = (0, c.createContext)(null);

      function Gs() {
        const e = (0, c.useContext)(Ks);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }(0, c.forwardRef)(({
        size: e = "MD",
        appearance: t = "primary",
        testId: r,
        asChild: n,
        children: o,
        ...a
      }, s) => {
        const i = (0, x.v6)({
            "data-testid": r,
            className: "foundry_11gbdty0"
          }, (0, x.cJ)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
          d = n ? f.DX : "div",
          u = (0, c.useId)(),
          p = (0, c.useId)(),
          v = (0, c.useId)();
        return (0, l.jsx)(Ks.Provider, {
          value: {
            size: e,
            appearance: t,
            labelId: u,
            descriptionId: p,
            inputId: v,
            ...a
          },
          children: (0, l.jsx)(d, {
            ...i,
            ref: s,
            children: o
          })
        })
      }), (0, c.forwardRef)(({
        testId: e,
        isChecked: t,
        defaultChecked: r,
        onCheckedChange: n,
        name: a,
        onPress: s,
        onClick: i,
        "aria-describedby": d,
        "aria-errormessage": p,
        "aria-labelledby": v,
        className: y,
        ...m
      }, b) => {
        const {
          size: h,
          appearance: g,
          isIndeterminate: w,
          isRequired: _,
          descriptionId: j,
          labelId: C,
          inputId: O,
          ...N
        } = Gs(), P = (0, c.useRef)(null), D = m.id || O, {
          isPressed: R,
          pressProps: S
        } = (0, Ln.d)({
          ref: P
        }), {
          setSelected: E,
          toggle: I,
          ...k
        } = (0, cs.H)({
          isSelected: t,
          defaultSelected: r,
          onChange: n
        }), {
          inputProps: T,
          isSelected: z,
          isDisabled: L,
          isReadOnly: A
        } = (0, Os.v)({
          "aria-label": "",
          id: D,
          name: a,
          ...N
        }, {
          ...k,
          toggle: I,
          setSelected: N.isReadOnly ? () => !1 : E
        }, P), V = (0, x.v6)({
          className: Ms({
            size: h
          }),
          onClick: e => {
            s?.(e) ?? i?.(e), e.defaultPrevented || L || A || I()
          }
        }, S, m), M = (0, x.v6)({
          className: "foundry_11gbdty1",
          "aria-checked": t,
          "aria-labelledby": (0, x.VW)(v, C),
          "aria-describedby": (0, x.VW)(d, j),
          "aria-errormessage": (0, x.VW)(p, N.isInvalid ? j : void 0),
          "aria-required": _,
          required: _
        }, T), F = w ? o[`Dash${h}`] : o[`Check${h}`];
        return (0, l.jsxs)("div", {
          ...V,
          children: [(0, l.jsx)(f.s6, {
            children: (0, l.jsx)("input", {
              ...M,
              ref: b
            })
          }), (0, l.jsx)("div", {
            className: (0, u.$)(Vs({
              size: h,
              appearance: g
            }), y),
            "aria-hidden": "true",
            "data-state": w ? "mixed" : z ? "checked" : "unchecked",
            "data-disabled": L || A,
            "data-testid": e,
            "data-pressed": R,
            children: (0, l.jsx)("span", {
              className: "foundry_11gbdtyc",
              children: (z || w) && (0, l.jsx)(F, {
                "aria-hidden": "true"
              })
            })
          })]
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        hideVisually: n = !1,
        hideRequiredAsterisk: o,
        ...a
      }, s) => {
        const {
          size: i,
          labelId: d,
          inputId: u,
          isRequired: c
        } = Gs(), p = a.id || d, v = c && !o, y = (0, x.v6)({
          className: Xs({
            size: i,
            showAsterisk: v
          }),
          "data-testid": r,
          id: p,
          htmlFor: a.htmlFor || u
        }, a), m = t ? f.DX : "label";
        return (0, l.jsx)(f.s6, {
          enabled: n,
          children: (0, l.jsx)(m, {
            ...y,
            ref: s,
            children: e
          })
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = Gs(), i = n.id || s, d = (0, x.v6)({
          className: Fs({
            isDisabled: a
          }),
          "data-testid": r,
          id: i
        }, n), u = t ? f.DX : "div";
        return (0, l.jsx)(u, {
          ...d,
          ref: o,
          children: e
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          descriptionId: a
        } = Gs(), s = n.id || a, i = (0, x.v6)({
          className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          "data-testid": r,
          id: s
        }, n), d = t ? f.DX : "div";
        return (0, l.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      const Us = (0, c.createContext)(null);

      function Hs() {
        const e = (0, c.useContext)(Us);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }

      function Ws(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Zs(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ys(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zs(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ws(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zs(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $s(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, c.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        size: n = "MD",
        isRequired: o = !1,
        ...a
      }, s) => {
        const [i, d] = (0, c.useState)(null), [u, p] = (0, c.useState)(null), v = [i, u].filter(Boolean).join(" "), y = (0, x.v6)({
          "data-testid": e,
          "aria-describedby": v,
          className: "foundry_11gbdtyn foundry_8kowh41"
        }, a), m = t ? f.DX : "fieldset";
        return (0, l.jsx)(Us.Provider, {
          value: {
            size: n,
            isRequired: o,
            descriptionId: i,
            errorTextId: u,
            setDescriptionId: d,
            setErrorTextId: p
          },
          children: (0, l.jsx)(m, {
            ...y,
            ref: s,
            children: r
          })
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        optionalText: n = "optional",
        hideVisually: o = !1,
        hideRequiredAsterisk: a,
        ...s
      }, i) => {
        const {
          isRequired: d
        } = Hs(), u = d && !a, c = (0, x.v6)({
          "data-testid": r,
          className: Bs({
            showAsterisk: u
          })
        }, s), p = t ? f.DX : "legend";
        return (0, l.jsx)(f.s6, {
          enabled: o,
          children: (0, l.jsxs)(p, {
            ...c,
            ref: i,
            children: [(0, l.jsx)(f.xV, {
              children: e
            }), !d && (0, l.jsxs)("span", {
              className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              children: ["(", n, ")"]
            })]
          })
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          setDescriptionId: a
        } = Hs(), s = (0, c.useId)(), i = n.id || s;
        (0, c.useEffect)(() => {
          a(i)
        }, [a, i]);
        const d = (0, x.v6)({
            "data-testid": r,
            className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            id: i
          }, n),
          u = t ? f.DX : "div";
        return (0, l.jsx)(u, {
          ...d,
          ref: o,
          children: e
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          size: a
        } = Hs(), s = (0, x.v6)({
          "data-testid": r,
          className: qs({
            size: a
          })
        }, n), i = t ? f.DX : "div";
        return (0, l.jsx)(i, {
          ...s,
          ref: o,
          children: e
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          setErrorTextId: a
        } = Hs(), s = (0, c.useId)(), i = n.id || s;
        (0, c.useEffect)(() => {
          a(i)
        }, [a, i]);
        const d = (0, x.v6)({
            "data-testid": r,
            id: i,
            className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
          }, n),
          u = ue.X,
          p = t ? f.DX : "div";
        return (0, l.jsxs)(p, {
          ...d,
          ref: o,
          children: [(0, l.jsx)(u, {
            label: "",
            size: "SM"
          }), (0, l.jsx)(f.xV, {
            children: e
          })]
        })
      });
      var Qs = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Js = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ys(Ys({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Qs(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $s(e.variantClassNames, e => $s(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ei = Js({
          defaultClassName: "foundry_vq8c3j6 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_vq8c3j7",
              true: "foundry_vq8c3j8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ti = Js({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ri = Js({
          defaultClassName: "foundry_vq8c3j1 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j2"
            },
            showAsterisk: {
              true: "foundry_vq8c3j3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ni = Js({
          defaultClassName: "foundry_vq8c3j9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_vq8c3ja",
              true: "foundry_vq8c3jb"
            },
            isReadOnly: {
              false: "foundry_vq8c3jc",
              true: "foundry_vq8c3jd"
            },
            isInvalid: {
              false: "foundry_vq8c3je",
              true: "foundry_vq8c3jf"
            },
            isSuccess: {
              true: "foundry_vq8c3jg"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !1,
              isSuccess: !1,
              isReadOnly: !1,
              isInvalid: !1
            }, "foundry_vq8c3jh"]
          ]
        });
      const oi = (0, c.createContext)(null);

      function ai() {
        const e = (0, c.useContext)(oi);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }(0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        isDisabled: n = !1,
        isReadOnly: o = !1,
        isRequired: a = !1,
        status: s = "neutral",
        ...i
      }, d) => {
        const u = (0, x.v6)({
            "data-testid": r,
            className: "foundry_vq8c3j0"
          }, i),
          p = e ? f.DX : "div",
          v = (0, c.useId)(),
          y = (0, c.useId)(),
          m = (0, c.useId)(),
          b = (0, c.useId)();
        return (0, l.jsx)(oi.Provider, {
          value: {
            labelId: v,
            descriptionId: y,
            hintId: m,
            inputId: b,
            isDisabled: n,
            isReadOnly: o,
            isRequired: a,
            status: s,
            ...i
          },
          children: (0, l.jsx)(p, {
            ref: d,
            ...u,
            children: t
          })
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        hideVisually: n = !1,
        hideRequiredAsterisk: o = !1,
        ...a
      }, s) => {
        const {
          labelId: i,
          inputId: d,
          isDisabled: u,
          isRequired: c
        } = ai(), p = (0, x.v6)({
          className: ri({
            isDisabled: u,
            showAsterisk: c && !o
          }),
          "data-testid": r,
          id: i,
          htmlFor: d
        }, a), v = t ? f.DX : "label";
        return (0, l.jsx)(f.s6, {
          enabled: n,
          children: (0, l.jsx)(v, {
            ...p,
            ref: s,
            children: e
          })
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        rows: n = 5,
        defaultValue: o,
        name: a,
        placeholder: s = " ",
        "aria-labelledby": i,
        "aria-describedby": d,
        ...u
      }, p) => {
        const {
          descriptionId: v,
          labelId: y,
          inputId: m,
          hintId: b,
          isDisabled: h,
          isRequired: g,
          isReadOnly: w,
          status: _
        } = ai(), j = (0, c.useRef)(null), C = (0, H.UP)(j, p), O = (0, x.v6)({
          className: ni({
            isInvalid: "invalid" === _,
            isDisabled: h,
            isReadOnly: w,
            isSuccess: "success" === _
          }),
          name: a,
          id: u.id || m,
          rows: n,
          defaultValue: o,
          disabled: h,
          required: g,
          readOnly: w,
          placeholder: s,
          "aria-labelledby": (0, x.VW)(u.id, y, b, i),
          "aria-describedby": (0, x.VW)(v, d),
          "data-testid": r,
          ..."invalid" === _ && {
            "aria-invalid": !0,
            "aria-errormessage": v
          },
          ..."success" === _ && {
            "data-success": !0
          },
          ...h && {
            "aria-disabled": !0
          },
          ...g && {
            "aria-required": !0
          }
        }, u), N = e ? f.DX : "textarea";
        return (0, l.jsx)(N, {
          ref: C,
          ...O,
          children: t
        })
      }), (0, c.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = ai(), i = (0, x.v6)({
          className: ei({
            isDisabled: a
          }),
          "data-testid": t,
          id: s
        }, n), d = r ? f.DX : "div";
        return (0, l.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          hintId: a,
          isDisabled: s
        } = ai(), i = (0, x.v6)({
          className: ti({
            isDisabled: s
          }),
          "data-testid": r,
          id: a
        }, n), d = t ? f.DX : "div";
        return (0, l.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      }), (0, c.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          status: s
        } = ai(), i = (0, x.v6)({
          className: "foundry_vq8c3ji",
          "data-testid": t,
          descriptionId: a,
          status: s
        }, n), d = r ? f.DX : Gn;
        return (0, l.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var si = r(27097),
        ii = r(18222);

      function di(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function li(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ui(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? li(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = di(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : li(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ci(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fi = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pi = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ui(ui({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) fi(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ci(e.variantClassNames, e => ci(e, e => e.split(" ")[0]))
            }
          }, t
        },
        vi = pi({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yi = pi({
          defaultClassName: "foundry_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_njguqn2",
              LG: "foundry_njguqn3",
              XL: "foundry_njguqn4"
            },
            orientation: {
              horizontal: "foundry_njguqn5",
              vertical: "foundry_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const mi = (0, c.createContext)(null);

      function bi() {
        const e = (0, c.useContext)(mi);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }(0, c.forwardRef)(({
        size: e = "MD",
        appearance: t = "primary",
        orientation: r = "vertical",
        children: n,
        testId: o,
        asChild: a,
        "aria-labelledby": s,
        "aria-describedby": i,
        "aria-errormessage": d,
        status: u = "neutral",
        ...p
      }, v) => {
        const y = (0, c.useRef)(null),
          m = (0, H.UP)(y, v),
          b = (0, c.useId)(),
          h = (0, c.useId)(),
          g = (0, c.useId)(),
          w = (0, si.Z)({
            ...p,
            isInvalid: "invalid" === u
          }),
          {
            radioGroupProps: _
          } = (0, ii.m)({
            ...p,
            orientation: r,
            "aria-labelledby": (0, x.VW)(b, s),
            "aria-describedby": (0, x.VW)(h, g, i),
            "aria-errormessage": (0, x.VW)(g, d)
          }, w),
          j = (0, x.v6)({
            className: "foundry_njguqn0"
          }, _, (0, x.cJ)(p, "isDisabled", "isRequired", "isReadOnly", "name")),
          C = a ? f.DX : "div";
        return (0, l.jsx)(mi.Provider, {
          value: {
            state: w,
            size: e,
            appearance: t,
            orientation: r,
            descriptionId: h,
            labelId: b,
            errorId: g,
            status: u,
            ...p
          },
          children: (0, l.jsx)(C, {
            ref: m,
            "data-testid": o,
            ...j,
            children: n
          })
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          size: a,
          orientation: s
        } = bi(), i = (0, x.v6)({
          "data-testid": e,
          className: yi({
            size: a,
            orientation: s
          })
        }, n), d = t ? f.DX : "div";
        return (0, l.jsx)(d, {
          ...i,
          ref: o,
          children: r
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        hideVisually: n = !1,
        hideRequiredAsterisk: o = !1,
        ...a
      }, s) => {
        const {
          isRequired: i,
          labelId: d
        } = bi(), u = i && !o, c = (0, x.v6)({
          id: a.id || d,
          "data-testid": e,
          className: vi({
            showAsterisk: u
          })
        }, a), p = t ? f.DX : "div";
        return (0, l.jsx)(f.s6, {
          enabled: n,
          children: (0, l.jsx)(p, {
            ...c,
            ref: s,
            children: r
          })
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          descriptionId: a
        } = bi(), s = (0, x.v6)({
          id: a,
          "data-testid": e,
          className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
        }, n), i = t ? f.DX : "div";
        return (0, l.jsx)(i, {
          ...s,
          ref: o,
          children: r
        })
      }), (0, c.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          errorId: a,
          status: s
        } = bi(), i = (0, x.v6)({
          className: "foundry_njguqnc",
          "data-testid": t,
          errorId: a,
          status: s
        }, n), d = r ? f.DX : Gn;
        return (0, l.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var hi = r(9153),
        gi = pi({
          defaultClassName: "foundry_1pfduetf foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_1pfduetg",
              true: "foundry_1pfdueth"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wi = pi({
          defaultClassName: "foundry_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              LG: "foundry_1pfduetc foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
              XL: "foundry_1pfduetd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            },
            isDisabled: {
              true: "foundry_1pfduete"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xi = pi({
          defaultClassName: "foundry_1pfduet6 foundry_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_1pfduet7",
              secondary: "foundry_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _i = pi({
          defaultClassName: "foundry_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_1pfduet3",
              LG: "foundry_1pfduet4",
              XL: "foundry_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ji = ({
          color: e = "currentColor"
        }) => (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, l.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Ci = ({
          color: e = "currentColor"
        }) => (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, l.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Oi = ({
          color: e = "currentColor"
        }) => (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, l.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        });
      (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: "foundry_1pfduet0"
          }, n),
          s = e ? f.DX : "label";
        return (0, l.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      }), (0, c.forwardRef)(({
        testId: e,
        value: t,
        ...r
      }, n) => {
        const o = (0, c.useRef)(null),
          s = (0, H.UP)(o, n),
          i = (0, c.useId)(),
          {
            state: d,
            appearance: u,
            size: p,
            isReadOnly: v,
            isRequired: y
          } = bi(),
          {
            isPressed: m,
            pressProps: b
          } = (0, Ln.d)({
            allowTextSelectionOnPress: !0
          }),
          {
            inputProps: h
          } = (0, hi.z)({
            ...r,
            id: i,
            value: t,
            "aria-label": ""
          }, d, o),
          g = h.checked,
          w = h.disabled || d?.isReadOnly,
          _ = (0, x.v6)(h, {
            disabled: w,
            readOnly: v,
            required: y,
            "data-testid": e,
            ...w && {
              "aria-disabled": !0
            },
            ...y && {
              "aria-required": !0
            }
          }, r),
          j = a[`Dot${p}`];
        return (0, l.jsxs)("div", {
          className: _i({
            size: p
          }),
          children: [(0, l.jsx)(f.s6, {
            children: (0, l.jsx)("input", {
              type: "radio",
              ..._,
              ref: s,
              className: "foundry_1pfduet1"
            })
          }), (0, l.jsx)("div", {
            className: xi({
              appearance: u
            }),
            "aria-hidden": "true",
            "data-state": g ? "checked" : "unchecked",
            "data-disabled": w,
            "data-pressed": m,
            ...b,
            children: (0, l.jsx)("span", {
              className: "foundry_1pfduet9",
              children: g && (0, l.jsx)(j, {})
            })
          })]
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        hideVisually: n = !1,
        ...o
      }, a) => {
        const {
          size: s,
          state: i
        } = bi(), d = (0, c.useId)(), u = (0, x.v6)({
          id: d,
          "data-testid": e,
          className: wi({
            size: s,
            isDisabled: i?.isDisabled
          })
        }, o), p = t ? f.DX : "div";
        return (0, l.jsx)(f.s6, {
          enabled: n,
          children: (0, l.jsx)(p, {
            ...u,
            ref: a,
            children: r
          })
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: a
        } = bi(), s = (0, x.v6)({
          "data-testid": e,
          className: gi({
            isDisabled: a
          })
        }, n), i = t ? f.DX : "span";
        return (0, l.jsx)(i, {
          ref: o,
          ...s,
          children: r
        })
      });
      var Ni = r(35462);

      function Pi(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Di(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ri(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Di(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Pi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Di(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Si(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ei = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ii = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ri(Ri({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Ei(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Si(e.variantClassNames, e => Si(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ki = Ii({
          defaultClassName: "foundry_8oytzoc",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzod",
              true: "foundry_8oytzoe"
            },
            isReadOnly: {
              false: "foundry_8oytzof",
              true: "foundry_8oytzog"
            },
            isInvalid: {
              false: "foundry_8oytzoh",
              true: "foundry_8oytzoi"
            },
            isSuccess: {
              false: "foundry_8oytzoj",
              true: "foundry_8oytzok"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1,
              isReadOnly: !1
            }, "foundry_8oytzol"],
            [{
              isDisabled: !1
            }, "foundry_8oytzom"]
          ]
        }),
        Ti = Ii({
          defaultClassName: "foundry_8oytzo10 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo11",
              true: "foundry_8oytzo12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zi = Ii({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Li = Ii({
          defaultClassName: "foundry_8oytzos",
          variantClassNames: {
            side: {
              left: "foundry_8oytzot",
              right: "foundry_8oytzou"
            },
            isDisabled: {
              false: "foundry_8oytzov",
              true: "foundry_8oytzow"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ai = Ii({
          defaultClassName: "foundry_8oytzon foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzoo",
              true: "foundry_8oytzop"
            },
            isReadOnly: {
              false: "foundry_8oytzoq",
              true: "foundry_8oytzor"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vi = Ii({
          defaultClassName: "foundry_8oytzo5 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo6",
              true: "foundry_8oytzo7"
            },
            showAsterisk: {
              true: "foundry_8oytzo8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Mi = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Fi = (0, c.createContext)(null);

      function qi() {
        const e = (0, c.useContext)(Fi);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }(0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        isDisabled: n = !1,
        isReadOnly: o = !1,
        isRequired: a = !1,
        status: s = "neutral",
        ...i
      }, d) => {
        const [u, p] = (0, c.useState)("text"), v = `${(0,c.useId)()}-label`, y = `${(0,c.useId)()}-input`, m = `${(0,c.useId)()}-description`, b = (0, c.useRef)(null), h = (0, c.useRef)(Mi), g = (0, x.v6)({
          "data-testid": r,
          className: "foundry_8oytzo4"
        }, i), w = e ? f.DX : "div";
        return (0, l.jsx)(Fi.Provider, {
          value: {
            isDisabled: n,
            isReadOnly: o,
            isRequired: a,
            status: s,
            labelId: v,
            inputId: y,
            descriptionId: m,
            type: u,
            setType: p,
            inputRef: b,
            focusState: h,
            ...i
          },
          children: (0, l.jsx)(w, {
            ref: d,
            ...g,
            children: t
          })
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        hideVisually: n = !1,
        hideRequiredAsterisk: o,
        ...a
      }, s) => {
        const {
          isDisabled: i,
          isRequired: d,
          inputId: u,
          labelId: c
        } = qi(), p = d && !o, v = (0, x.v6)({
          id: a.id || c,
          htmlFor: a.htmlFor || u,
          "data-testid": e,
          className: Vi({
            showAsterisk: p,
            isDisabled: i
          })
        }, a), y = t ? f.DX : "label";
        return (0, l.jsx)(f.s6, {
          enabled: n,
          children: (0, l.jsx)(y, {
            ref: s,
            ...v,
            children: r
          })
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: a
        } = qi(), s = (0, x.v6)({
          "data-testid": e,
          className: zi({
            isDisabled: a
          })
        }, n), i = t ? f.DX : "span";
        return (0, l.jsx)(i, {
          ref: o,
          ...s,
          children: r
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          isReadOnly: s,
          status: i
        } = qi(), d = (0, x.v6)({
          "data-testid": e,
          className: (0, u.$)(ki({
            isDisabled: a,
            isReadOnly: s,
            isInvalid: "invalid" === i,
            isSuccess: "success" === i
          }), "foundry_8oytzo1")
        }, n), c = t ? f.DX : "div";
        return (0, l.jsx)(c, {
          ref: o,
          ...d,
          children: r
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        mask: r,
        replacement: n,
        showMask: o = !0,
        track: a,
        placeholder: s = " ",
        "aria-labelledby": i,
        "aria-describedby": d,
        type: p = "text",
        ...v
      }, y) => {
        const {
          isDisabled: m,
          isReadOnly: b,
          isRequired: h,
          status: g,
          labelId: w,
          inputId: _,
          descriptionId: j,
          setType: C,
          type: O,
          inputRef: N,
          focusState: P
        } = qi();
        (0, c.useEffect)(() => C(p), []);
        const D = "invalid" === g,
          R = (0, x.v6)({
            disabled: m,
            readOnly: b,
            required: h,
            id: _,
            type: O,
            spellCheck: !1,
            placeholder: s,
            "aria-labelledby": (0, x.VW)(w, i),
            "aria-describedby": (0, x.VW)(j, d),
            "data-testid": e,
            className: (0, u.$)(Ai({
              isDisabled: m,
              isReadOnly: b
            }), "foundry_8oytzo2"),
            onBlur: e => {
              if (P.current) {
                const {
                  selectionStart: t,
                  selectionEnd: r
                } = e.currentTarget;
                P.current.selectionStart = t, P.current.selectionEnd = r
              }
            },
            ...D && {
              "aria-invalid": !0,
              "aria-errormessage": j
            },
            ..."success" === g && {
              "data-success": !0
            },
            ...m && {
              "aria-disabled": !0
            },
            ...h && {
              "aria-required": !0
            }
          }, v),
          S = (0, Ni.A)({
            mask: r,
            replacement: n,
            showMask: o,
            track: a
          }),
          E = (0, H.UP)(r && n ? S : null, N, y),
          I = t ? f.DX : "input";
        return (0, l.jsx)(I, {
          ref: E,
          ...R
        })
      }), (0, c.forwardRef)(({
        icon: e,
        asChild: t,
        testId: r,
        side: n,
        ...o
      }, a) => {
        const {
          isDisabled: s
        } = qi(), i = (0, x.v6)({
          size: "LG",
          "data-testid": r,
          className: (0, u.$)(Li({
            side: n,
            isDisabled: s
          }), "foundry_8oytzo0")
        }, o), d = t ? f.DX : ue[e];
        return (0, l.jsx)(d, {
          ref: a,
          ...i
        })
      });
      const Bi = (0, c.forwardRef)(({
        ...e
      }, t) => {
        const {
          isDisabled: r
        } = qi(), n = (0, x.v6)({
          isDisabled: r,
          size: "LG",
          appearance: "ghost",
          className: (0, u.$)("foundry_8oytzox", "foundry_8oytzo3"),
          preventFocusOnPress: !0
        }, e);
        return (0, l.jsx)(d.K, {
          ref: t,
          ...n,
          preventFocusOnPress: !1
        })
      });
      (0, c.forwardRef)(({
        showPasswordLabel: e,
        hidePasswordLabel: t,
        ...r
      }, n) => {
        const {
          type: o,
          setType: a,
          inputRef: s,
          focusState: i
        } = qi(), d = "password" === o, u = d ? e : t;
        (0, c.useEffect)(() => {
          i.current && (i.current.clickTriggered = !1)
        }, [i]);
        const f = (0, x.v6)({
          label: u,
          icon: d ? "Eye" : "EyeOff",
          onPress: () => {
            a(d ? "text" : "password");
            const e = s.current;
            if (i.current && e) {
              const {
                selectionStart: t,
                selectionEnd: r
              } = i.current;
              e.focus(), null === t && null === r || requestAnimationFrame(() => {
                e.ownerDocument.activeElement === e && (e.selectionStart = t, e.selectionEnd = r)
              })
            }
          },
          preventFocusOnPress: !0
        }, r);
        return (0, l.jsxs)(Wt, {
          children: [(0, l.jsx)(Zt, {
            children: (0, l.jsx)(Bi, {
              ref: n,
              ...f
            })
          }), (0, l.jsxs)(Yt, {
            side: "bottom",
            align: "end",
            children: [u, (0, l.jsx)($t, {})]
          })]
        })
      }), (0, c.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = qi(), i = (0, x.v6)({
          className: Ti({
            isDisabled: a
          }),
          "data-testid": t,
          id: s
        }, n), d = r ? f.DX : "div";
        return (0, l.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      }), (0, c.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          status: s
        } = qi(), i = (0, x.v6)({
          className: "foundry_8oytzo13",
          "data-testid": t,
          descriptionId: a,
          status: s
        }, n), d = r ? f.DX : Gn;
        return (0, l.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var Xi = r(16319);

      function Ki(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Gi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ui(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ki(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Hi(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wi = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Zi = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ui(Ui({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Wi(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hi(e.variantClassNames, e => Hi(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_shqzby0 foundry_8kowh41 foundry_1d5mo5m0 foundry_1qqcnuao foundry_1qqcnuas",
          variantClassNames: {
            size: {
              SM: "foundry_shqzby1",
              MD: "foundry_shqzby2",
              LG: "foundry_shqzby3",
              XL: "foundry_shqzby4"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Yi = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        $i = (0, c.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const a = (0, c.useRef)(null),
            s = (0, H.UP)(a, o),
            {
              buttonProps: i
            } = (0, H.sL)(n, a),
            d = (0, x.v6)({
              "data-testid": r,
              className: Zi({
                size: t
              })
            }, i);
          return (0, l.jsx)("button", {
            ref: s,
            ...d,
            children: (0, l.jsx)(ue.X, {
              label: e,
              size: Yi[t]
            })
          })
        });

      function Qi(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ji(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ed(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ji(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Qi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ji(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function td(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ed(ed({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) rd(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return td(e.variantClassNames, e => td(e, e => e.split(" ")[0]))
            }
          }, t
        },
        od = nd({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ad = nd({
          defaultClassName: "foundry_1m368qhc",
          variantClassNames: {
            status: {
              information: "foundry_1m368qhd",
              danger: "foundry_1m368qhe",
              success: "foundry_1m368qhf",
              warning: "foundry_1m368qhg"
            },
            size: {
              LG: "foundry_1m368qhh",
              XL: "foundry_1m368qhi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        sd = nd({
          defaultClassName: "foundry_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_1m368qh3",
              information: "foundry_1m368qh4",
              success: "foundry_1m368qh5",
              warning: "foundry_1m368qh6"
            },
            background: {
              "two-tone": "foundry_1m368qh7",
              neutral: "foundry_1m368qh8",
              none: "foundry_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const id = (0, c.createContext)(null);

      function dd() {
        const e = (0, c.useContext)(id);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }(0, c.forwardRef)(({
        asChild: e,
        testId: t,
        status: r,
        background: n,
        ...o
      }, a) => {
        const s = e ? f.DX : "div",
          i = (0, x.v6)({
            className: sd({
              status: r,
              background: n
            })
          }, o);
        return (0, l.jsx)(id.Provider, {
          value: {
            status: r,
            background: n
          },
          children: (0, l.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...i
          })
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? f.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qha"
          }, r);
        return (0, l.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? f.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qhb"
          }, r);
        return (0, l.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      });
      const ld = {
        danger: ue.CircleX,
        information: ue.Info,
        success: ue.CircleCheck,
        warning: ue.TriangleAlert
      };
      (0, c.forwardRef)(({
        asChild: e,
        size: t = "XL",
        ...r
      }, n) => {
        const {
          status: o
        } = dd(), a = e ? f.DX : ld[o], s = (0, x.v6)({
          className: ad({
            status: o,
            size: t
          }),
          size: t
        }, r);
        return (0, l.jsx)(a, {
          label: "",
          ref: n,
          ...s
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? f.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, r);
        return (0, l.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? f.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, r);
        return (0, l.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, c.useRef)(null),
          s = (0, H.UP)(a, o),
          i = e ? f.DX : "a",
          {
            linkProps: d,
            isPressed: u
          } = (0, Xi.i)(n, a),
          p = (0, x.v6)({
            className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
          }, d);
        return (0, l.jsx)(i, {
          "data-pressed": u,
          "data-testid": r,
          ref: s,
          ...p,
          children: t
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? f.DX : "div",
          s = (0, x.v6)({
            className: "foundry_1m368qhm"
          }, n);
        return (0, l.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s,
          children: t
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        className: r,
        ...n
      }, o) => {
        const a = e ? f.DX : "div";
        return (0, l.jsx)(a, {
          ref: o,
          "data-testid": t,
          className: (0, u.$)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
          ...n
        })
      }), (0, c.forwardRef)((e, t) => {
        const {
          background: r
        } = dd(), n = "none" !== r, o = (0, x.v6)({
          className: od({
            hasBackground: n
          })
        }, e);
        return (0, l.jsx)($i, {
          size: "SM",
          ref: t,
          ...o
        })
      });
      var ud = r(64634),
        cd = r(7697),
        fd = r(17497);

      function pd(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function vd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = pd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function md(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        hd = "foundry_qmpv6yv",
        gd = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yd(yd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) bd(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return md(e.variantClassNames, e => md(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_qmpv6y8",
          variantClassNames: {
            status: {
              danger: "foundry_qmpv6y9",
              information: "foundry_qmpv6ya",
              success: "foundry_qmpv6yb",
              warning: "foundry_qmpv6yc"
            },
            background: {
              static: "foundry_qmpv6yd",
              "two-tone": "foundry_qmpv6ye",
              neutral: "foundry_qmpv6yf"
            },
            align: {
              left: "foundry_qmpv6yg",
              center: "foundry_qmpv6yh"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_qmpv6yi"],
            [{
              status: "information",
              background: "static"
            }, "foundry_qmpv6yj"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_qmpv6yk"],
            [{
              status: "success",
              background: "static"
            }, "foundry_qmpv6yl"]
          ]
        });
      const wd = (0, c.createContext)(null);

      function xd() {
        const e = (0, c.useContext)(wd);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }(0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        loopPagination: n,
        status: o,
        background: a,
        align: s = "left",
        ...i
      }, d) => {
        const u = (({
            loopPagination: e = !0
          }) => {
            const t = (0, H.rl)(),
              r = (0, H.jt)(),
              [n, o] = (0, c.useState)([]),
              a = n.length,
              [s, i] = (0, c.useState)(0),
              [d, l] = (0, ud.A)({
                containScroll: !1,
                loop: e,
                watchDrag: t && a > 1
              }, [(0, cd.A)(), (0, fd.A)()]),
              u = (0, c.useRef)(0),
              f = (0, c.useRef)(!1),
              p = n[s],
              v = (0, c.useCallback)(e => {
                const t = e.selectedScrollSnap();
                e.slideNodes().forEach((e, r) => {
                  e.style.visibility = r === t ? "visible" : "hidden"
                }), i(t), f.current = !0
              }, [l]),
              y = (0, c.useCallback)(e => {
                u.current = .94 * e.scrollSnapList().length
              }, []),
              m = (0, c.useCallback)((e, t) => {
                const r = e.internalEngine(),
                  n = e.scrollProgress(),
                  o = e.slidesInView(),
                  a = "scroll" === t;
                e.scrollSnapList().forEach((t, s) => {
                  let i = t - n;
                  r.slideRegistry[s].forEach(s => {
                    if (a && !o.includes(s)) return;
                    r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                      const r = e.target();
                      if (s === e.index && 0 !== r) {
                        const e = Math.sign(r); - 1 === e && (i = t - (1 + n)), 1 === e && (i = t + (1 - n))
                      }
                    });
                    const d = (l = 1 - Math.abs(i * u.current), Math.min(Math.max(l, 0), 1)).toString();
                    var l;
                    e.slideNodes()[s].style.opacity = d
                  })
                })
              }, []);
            return (0, c.useEffect)(() => {
              l && (y(l), m(l), l.on("reInit", y).on("reInit", m).on("scroll", m).on("slideFocus", m))
            }, [l, m]), (0, c.useEffect)(() => {
              l && (v(l), l.on("select", v).on("reInit", v))
            }, [l, v]), {
              setAlerts: o,
              alerts: n,
              numAlerts: a,
              emblaRef: d,
              emblaApi: l,
              prevAlert: () => l?.scrollPrev(r),
              nextAlert: () => l?.scrollNext(r),
              currentAlert: p,
              currentAlertIndex: s,
              setCurrentAlertIndex: i,
              isInitialized: f.current,
              loopPagination: e,
              canScrollNext: () => l?.canScrollNext() || !1,
              canScrollPrev: () => l?.canScrollPrev() || !1
            }
          })({
            loopPagination: n
          }),
          {
            currentAlert: p,
            isInitialized: v,
            setAlerts: y,
            numAlerts: m
          } = u;
        (0, c.useEffect)(() => {
          o && a && y([{
            status: o,
            background: a,
            align: s
          }])
        }, []);
        const b = m > 1 ? {
            role: "region",
            "aria-roledescription": "carousel",
            "aria-label": "alerts"
          } : null,
          h = (0, x.v6)({
            className: gd(p)
          }, b, i),
          g = e ? f.DX : "div";
        return (0, l.jsx)(wd.Provider, {
          value: u,
          children: (0, l.jsx)(g, {
            ref: d,
            "data-testid": r,
            "data-initialized": v,
            ...h,
            children: t
          })
        })
      });
      const _d = {
        danger: "CircleX",
        information: "Info",
        success: "CircleCheck",
        warning: "TriangleAlert"
      };

      function jd(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Cd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Od(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = jd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Nd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, c.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const {
          currentAlert: n
        } = xd();
        if (!e && !n || !n?.status) return null;
        const o = e || _d[n.status],
          a = ue[o],
          s = (0, x.v6)({
            className: "foundry_qmpv6yp"
          }, t);
        return (0, l.jsx)(a, {
          label: "",
          ref: r,
          size: "MD",
          "data-icon": !0,
          ...s
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? f.DX : "div",
          a = (0, x.v6)({
            className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, r);
        return (0, l.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        align: r = "left",
        status: n,
        background: o,
        ...a
      }, s) => {
        const i = e ? f.DX : "div",
          d = (0, x.v6)({
            className: "foundry_qmpv6yo"
          }, a);
        return (0, l.jsx)(i, {
          ref: s,
          "data-testid": t,
          ...d
        })
      }), (0, c.forwardRef)(({
        testId: e,
        children: t,
        ...r
      }, n) => {
        const {
          setAlerts: o,
          emblaRef: a,
          emblaApi: s
        } = xd(), i = (0, x.v6)({
          className: "foundry_qmpv6ym"
        }, r), d = (0, H.UP)(a, n), u = c.Children.map(t, e => {
          const t = e;
          if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
          return {
            status: t.props.status,
            background: t.props.background,
            align: t.props.align
          }
        });
        return (0, c.useEffect)(() => {
          u && o(u)
        }, []), s?.on("slidesChanged", () => {
          u && o(u)
        }), (0, l.jsx)("div", {
          ref: d,
          "data-testid": e,
          ...i,
          children: (0, l.jsx)("div", {
            className: "foundry_qmpv6yn",
            children: t
          })
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, c.useRef)(null),
          s = (0, H.UP)(a, o),
          i = e ? f.DX : "a",
          {
            linkProps: d,
            isPressed: u
          } = (0, Xi.i)(n, a),
          p = (0, x.v6)({
            className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
          }, n);
        return (0, l.jsx)(i, {
          "data-pressed": u,
          "data-testid": r,
          ref: s,
          ...d,
          ...p,
          children: t
        })
      }), (0, c.forwardRef)((e, t) => {
        const r = (0, x.v6)({
          className: "foundry_qmpv6ys"
        }, e);
        return (0, l.jsx)($i, {
          ref: t,
          "data-close-btn": !0,
          size: "SM",
          ...r
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        ...n
      }, o) => {
        const a = e ? f.DX : "div",
          s = (0, x.v6)({
            className: "foundry_qmpv6yt"
          }, n);
        return (0, l.jsx)(a, {
          ref: o,
          "data-testid": t,
          "data-pagination": !0,
          role: "group",
          ...s,
          children: r
        })
      }), (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          nextAlert: n,
          canScrollNext: o
        } = xd(), a = (0, x.v6)({
          className: hd
        }, t);
        return (0, l.jsx)(d.K, {
          ref: r,
          size: "SM",
          icon: "ChevronRight",
          appearance: "ghost",
          "data-testid": e,
          onPress: n,
          isDisabled: !o(),
          ...a
        })
      }), (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          prevAlert: n,
          canScrollPrev: o
        } = xd(), a = (0, x.v6)({
          className: hd
        }, t);
        return (0, l.jsx)(d.K, {
          ref: r,
          size: "SM",
          icon: "ChevronLeft",
          appearance: "ghost",
          "data-testid": e,
          onPress: n,
          isDisabled: !o(),
          ...a
        })
      }), (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          currentAlertIndex: n,
          numAlerts: o
        } = xd(), a = (0, x.v6)({
          className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
        }, t);
        return (0, l.jsxs)("div", {
          ref: r,
          "data-testid": e,
          "aria-hidden": !0,
          ...a,
          children: [n + 1, "/", o]
        })
      });
      var Pd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Dd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Od(Od({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Pd(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Nd(e.variantClassNames, e => Nd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Rd = Dd({
          defaultClassName: "foundry_oahh5813",
          variantClassNames: {
            background: {
              static: "foundry_oahh5814",
              "two-tone": "foundry_oahh5815",
              none: "foundry_oahh5816"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sd = Dd({
          defaultClassName: "foundry_oahh583",
          variantClassNames: {
            size: {
              MD: "foundry_oahh584",
              LG: "foundry_oahh585"
            },
            hasBorder: {
              true: "foundry_oahh586",
              false: "foundry_oahh587"
            },
            background: {
              static: "foundry_oahh588",
              "two-tone": "foundry_oahh589",
              none: "foundry_oahh58a"
            },
            color: {
              monochrome: "foundry_oahh58b",
              blue: "foundry_oahh58c",
              green: "foundry_oahh58d",
              grey: "foundry_oahh58e",
              red: "foundry_oahh58f",
              seafoam: "foundry_oahh58g",
              yellow: "foundry_oahh58h"
            },
            isDisabled: {
              true: "foundry_oahh58i",
              false: "foundry_oahh58j"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              background: "static",
              color: "monochrome"
            }, "foundry_oahh58k"],
            [{
              background: "static",
              color: "blue"
            }, "foundry_oahh58l"],
            [{
              background: "static",
              color: "green"
            }, "foundry_oahh58m"],
            [{
              background: "static",
              color: "grey"
            }, "foundry_oahh58n"],
            [{
              background: "static",
              color: "red"
            }, "foundry_oahh58o"],
            [{
              background: "static",
              color: "seafoam"
            }, "foundry_oahh58p"],
            [{
              background: "static",
              color: "yellow"
            }, "foundry_oahh58q"],
            [{
              background: "two-tone",
              color: "monochrome"
            }, "foundry_oahh58r"],
            [{
              background: "two-tone",
              color: "blue"
            }, "foundry_oahh58s"],
            [{
              background: "two-tone",
              color: "green"
            }, "foundry_oahh58t"],
            [{
              background: "two-tone",
              color: "grey"
            }, "foundry_oahh58u"],
            [{
              background: "two-tone",
              color: "red"
            }, "foundry_oahh58v"],
            [{
              background: "two-tone",
              color: "seafoam"
            }, "foundry_oahh58w"],
            [{
              background: "two-tone",
              color: "yellow"
            }, "foundry_oahh58x"],
            [{
              hasBorder: !1,
              background: "none",
              isDisabled: !1
            }, "foundry_oahh58y"]
          ]
        }),
        Ed = Dd({
          defaultClassName: "foundry_oahh58z",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Id = (0, c.createContext)(null);

      function kd() {
        const e = (0, c.useContext)(Id);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }(0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        size: n,
        background: o,
        color: a,
        hasBorder: s,
        isDisabled: i,
        ...d
      }, u) => {
        const c = {
            size: n,
            background: o,
            color: a,
            hasBorder: s,
            isDisabled: i
          },
          p = (0, x.v6)({
            className: Sd(c)
          }, d),
          v = e ? f.DX : "div";
        return (0, l.jsx)(Id.Provider, {
          value: c,
          children: (0, l.jsx)(v, {
            ref: u,
            "data-testid": r,
            "aria-disabled": i,
            ...p,
            children: t
          })
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const {
          size: a
        } = kd(), s = e ? f.DX : "div", i = (0, x.v6)({
          className: Ed({
            size: a
          })
        }, n);
        return (0, l.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...i,
          children: t
        })
      }), (0, c.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const n = ue[e],
          o = (0, x.v6)({
            className: "foundry_oahh5812"
          }, t);
        return (0, l.jsx)(n, {
          ref: r,
          size: "SM",
          ...o
        })
      }), (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          background: n,
          isDisabled: o
        } = kd(), a = (0, x.v6)({
          className: Rd({
            background: n
          })
        }, t);
        return (0, l.jsx)(d.K, {
          ref: r,
          "data-testid": e,
          "data-close-btn": !0,
          appearance: "ghost",
          icon: "X",
          size: "SM",
          isDisabled: o,
          ...a
        })
      });
      var Td = "ToastProvider",
        [zd, Ld, Ad] = tr("Toast"),
        [Vd, Md] = (0, be.A)("Toast", [Ad]),
        [Fd, qd] = Vd(Td),
        Bd = "ToastViewport",
        Xd = ["F8"],
        Kd = "toast.viewportPause",
        Gd = "toast.viewportResume",
        Ud = c.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = Xd,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = qd(Bd, r), i = Ld(r), d = c.useRef(null), u = c.useRef(null), f = c.useRef(null), p = c.useRef(null), v = (0, me.s)(t, p, s.onViewportChange), y = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), m = s.toastCount > 0;
          c.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && p.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), c.useEffect(() => {
            const e = d.current,
              t = p.current;
            if (m && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(Kd);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(Gd);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && n()
                },
                a = () => {
                  e.contains(document.activeElement) || n()
                };
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", a), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [m, s.isClosePausedRef]);
          const b = c.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...ul(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return c.useEffect(() => {
            const e = p.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void u.current?.focus();
                  const o = b({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  cl(o.slice(a + 1)) ? t.preventDefault() : n ? u.current?.focus() : f.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, b]), (0, l.jsxs)(Ie, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", y),
            tabIndex: -1,
            style: {
              pointerEvents: m ? void 0 : "none"
            },
            children: [m && (0, l.jsx)(Wd, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                cl(b({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, l.jsx)(zd.Slot, {
              scope: r,
              children: (0, l.jsx)(we.ol, {
                tabIndex: -1,
                ...a,
                ref: v
              })
            }), m && (0, l.jsx)(Wd, {
              ref: f,
              onFocusFromOutsideViewport: () => {
                cl(b({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      Ud.displayName = Bd;
      var Hd = "ToastFocusProxy",
        Wd = c.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = qd(Hd, r);
          return (0, l.jsx)(pt, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !a.viewport?.contains(t) && n()
            }
          })
        });
      Wd.displayName = Hd;
      var Zd = "Toast",
        Yd = c.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, ct.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: Zd
          });
          return (0, l.jsx)(lt, {
            present: r || i,
            children: (0, l.jsx)(Jd, {
              open: i,
              ...s,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, je.c)(e.onPause),
              onResume: (0, je.c)(e.onResume),
              onSwipeStart: (0, ye.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, ye.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, ye.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, ye.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        });
      Yd.displayName = Zd;
      var [$d, Qd] = Vd(Zd, {
        onClose() {}
      }), Jd = c.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: a,
          onClose: s,
          onEscapeKeyDown: i,
          onPause: d,
          onResume: u,
          onSwipeStart: f,
          onSwipeMove: p,
          onSwipeCancel: v,
          onSwipeEnd: y,
          ...m
        } = e, b = qd(Zd, r), [h, g] = c.useState(null), w = (0, me.s)(t, e => g(e)), x = c.useRef(null), _ = c.useRef(null), j = o || b.duration, C = c.useRef(0), O = c.useRef(j), N = c.useRef(0), {
          onToastAdd: P,
          onToastRemove: D
        } = b, R = (0, je.c)(() => {
          const e = h?.contains(document.activeElement);
          e && b.viewport?.focus(), s()
        }), S = c.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(N.current), C.current = (new Date).getTime(), N.current = window.setTimeout(R, e))
        }, [R]);
        c.useEffect(() => {
          const e = b.viewport;
          if (e) {
            const t = () => {
                S(O.current), u?.()
              },
              r = () => {
                const e = (new Date).getTime() - C.current;
                O.current = O.current - e, window.clearTimeout(N.current), d?.()
              };
            return e.addEventListener(Kd, r), e.addEventListener(Gd, t), () => {
              e.removeEventListener(Kd, r), e.removeEventListener(Gd, t)
            }
          }
        }, [b.viewport, j, d, u, S]), c.useEffect(() => {
          a && !b.isClosePausedRef.current && S(j)
        }, [a, j, b.isClosePausedRef, S]), c.useEffect(() => (P(), () => D()), [P, D]);
        const E = c.useMemo(() => h ? il(h) : null, [h]);
        return b.viewport ? (0, l.jsxs)(l.Fragment, {
          children: [E && (0, l.jsx)(el, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: E
          }), (0, l.jsx)($d, {
            scope: r,
            onClose: R,
            children: he.createPortal((0, l.jsx)(zd.ItemSlot, {
              scope: r,
              children: (0, l.jsx)(Ee, {
                asChild: !0,
                onEscapeKeyDown: (0, ye.mK)(i, () => {
                  b.isFocusedToastEscapeKeyDownRef.current || R(), b.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, l.jsx)(we.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": b.swipeDirection,
                  ...m,
                  ref: w,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, ye.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (b.isFocusedToastEscapeKeyDownRef.current = !0, R()))
                  }),
                  onPointerDown: (0, ye.mK)(e.onPointerDown, e => {
                    0 === e.button && (x.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, ye.mK)(e.onPointerMove, e => {
                    if (!x.current) return;
                    const t = e.clientX - x.current.x,
                      r = e.clientY - x.current.y,
                      n = Boolean(_.current),
                      o = ["left", "right"].includes(b.swipeDirection),
                      a = ["left", "up"].includes(b.swipeDirection) ? Math.min : Math.max,
                      s = o ? a(0, t) : 0,
                      i = o ? 0 : a(0, r),
                      d = "touch" === e.pointerType ? 10 : 2,
                      l = {
                        x: s,
                        y: i
                      },
                      u = {
                        originalEvent: e,
                        delta: l
                      };
                    n ? (_.current = l, dl("toast.swipeMove", p, u, {
                      discrete: !1
                    })) : ll(l, b.swipeDirection, d) ? (_.current = l, dl("toast.swipeStart", f, u, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (x.current = null)
                  }),
                  onPointerUp: (0, ye.mK)(e.onPointerUp, e => {
                    const t = _.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), _.current = null, x.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      ll(t, b.swipeDirection, b.swipeThreshold) ? dl("toast.swipeEnd", y, n, {
                        discrete: !0
                      }) : dl("toast.swipeCancel", v, n, {
                        discrete: !0
                      }), r.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), b.viewport)
          })]
        }) : null
      }), el = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = qd(Zd, t), [a, s] = c.useState(!1), [i, d] = c.useState(!1);
        return function(e = () => {}) {
          const t = (0, je.c)(e);
          (0, Ve.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), c.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, l.jsx)(dt, {
          asChild: !0,
          children: (0, l.jsx)(pt, {
            ...n,
            children: a && (0, l.jsxs)(l.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      c.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, l.jsx)(we.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var tl = c.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, l.jsx)(we.div, {
          ...n,
          ref: t
        })
      });
      tl.displayName = "ToastDescription";
      var rl = "ToastAction",
        nl = c.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, l.jsx)(sl, {
            altText: r,
            asChild: !0,
            children: (0, l.jsx)(al, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${rl}\`. Expected non-empty \`string\`.`), null)
        });
      nl.displayName = rl;
      var ol = "ToastClose",
        al = c.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Qd(ol, r);
          return (0, l.jsx)(sl, {
            asChild: !0,
            children: (0, l.jsx)(we.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, ye.mK)(e.onClick, o.onClose)
            })
          })
        });
      al.displayName = ol;
      var sl = c.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, l.jsx)(we.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function il(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e)) {
            const r = e.ariaHidden || e.hidden || "none" === e.style.display,
              n = "" === e.dataset.radixToastAnnounceExclude;
            if (!r)
              if (n) {
                const r = e.dataset.radixToastAnnounceAlt;
                r && t.push(r)
              } else t.push(...il(e))
          }
        }), t
      }

      function dl(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.currentTarget,
          a = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? xe(o, a) : o.dispatchEvent(a)
      }
      var ll = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function ul(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function cl(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var fl = Ud,
        pl = Yd,
        vl = tl,
        yl = nl,
        ml = al;

      function bl(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function hl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = bl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function wl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var xl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        _l = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gl(gl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) xl(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wl(e.variantClassNames, e => wl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        jl = _l({
          defaultClassName: "foundry_dnh2nzk",
          variantClassNames: {
            appearance: {
              danger: "foundry_dnh2nzl",
              information: "foundry_dnh2nzm",
              warning: "foundry_dnh2nzn",
              success: "foundry_dnh2nzo",
              avocado: "foundry_dnh2nzp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Cl = _l({
          defaultClassName: "foundry_dnh2nzd foundry_1d5mo5m0",
          variantClassNames: {
            appearance: {
              danger: "foundry_dnh2nze",
              information: "foundry_dnh2nzf",
              warning: "foundry_dnh2nzg",
              success: "foundry_dnh2nzh",
              avocado: "foundry_dnh2nzi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ol = _l({
          defaultClassName: "foundry_dnh2nz8 foundry_8kowh41",
          variantClassNames: {
            position: {
              topLeft: "foundry_dnh2nz9",
              topRight: "foundry_dnh2nza",
              bottomLeft: "foundry_dnh2nzb",
              bottomRight: "foundry_dnh2nzc"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, c.forwardRef)(({
        children: e,
        testId: t,
        position: r = "bottomRight",
        ...n
      }, o) => {
        const a = (0, x.v6)({
          className: Ol({
            position: r
          })
        }, n);
        return (0, l.jsx)(fl, {
          ref: o,
          "data-testid": t,
          ...a,
          children: e
        })
      });
      const Nl = (0, c.createContext)(null);
      (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        appearance: n = "success",
        ...o
      }, a) => {
        const s = e ? f.DX : pl,
          i = (0, x.v6)({
            className: Cl({
              appearance: n
            })
          }, o);
        return (0, l.jsx)(Nl.Provider, {
          value: {
            appearance: n
          },
          children: (0, l.jsx)(s, {
            ref: a,
            "data-testid": r,
            ...i,
            children: t
          })
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? f.DX : vl,
          s = (0, x.v6)({
            className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, n);
        return (0, l.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s,
          children: t
        })
      });
      const Pl = {
        danger: ue.CircleX,
        information: ue.Info,
        success: ue.CircleCheck,
        warning: ue.TriangleAlert,
        avocado: ue.CircleCheck
      };
      (0, c.forwardRef)(({
        asChild: e,
        ...t
      }, r) => {
        const {
          appearance: n
        } = function() {
          const e = (0, c.useContext)(Nl);
          if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
          return e
        }(), o = e ? f.DX : Pl[n], a = (0, x.v6)({
          className: jl({
            appearance: n
          }),
          size: "LG"
        }, t);
        return (0, l.jsx)(o, {
          ref: r,
          ...a
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
          className: "foundry_dnh2nzq",
          asChild: !0
        }, n);
        return (0, l.jsx)(yl, {
          ref: o,
          "data-testid": r,
          ...a,
          children: e ? (0, l.jsx)(f.DX, {
            children: t
          }) : (0, l.jsx)(i.$, {
            size: "MD",
            appearance: "link",
            children: t
          })
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        label: n,
        ...o
      }, a) => {
        const s = (0, x.v6)({
          className: "foundry_dnh2nzr",
          asChild: !0
        }, o);
        return (0, l.jsx)(ml, {
          ref: a,
          "data-testid": r,
          ...s,
          children: e ? (0, l.jsx)(f.DX, {
            children: t
          }) : (0, l.jsx)($i, {
            size: "SM",
            label: n
          })
        })
      });
      var Dl = r(92405);

      function Rl(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Sl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function El(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Rl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Il(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var kl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = El(El({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) kl(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Il(e.variantClassNames, e => Il(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zl = Tl({
          defaultClassName: "foundry_m1icrx6 foundry_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_m1icrx7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
              LG: "foundry_m1icrx8 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ll = Tl({
          defaultClassName: "foundry_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Al = Tl({
          defaultClassName: "foundry_m1icrx0",
          variantClassNames: {
            size: {
              MD: "foundry_m1icrx1",
              LG: "foundry_m1icrx2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Vl() {
        const e = (0, c.useContext)(Ml);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Ml = (0, c.createContext)(null);

      function Fl(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ql(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Bl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ql(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Fl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ql(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Xl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, c.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        size: n = "MD",
        ...o
      }, a) => {
        const s = (0, x.v6)({
            className: Al({
              size: n
            })
          }, o),
          i = r ? f.DX : "ol";
        return (0, l.jsx)(Ml.Provider, {
          value: {
            size: n
          },
          children: (0, l.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...s,
            children: e
          })
        })
      }), (0, c.forwardRef)(({
        isCurrent: e,
        children: t,
        asChild: r,
        testId: n,
        ...o
      }, a) => {
        const s = (0, c.useRef)(null),
          {
            size: i
          } = Vl(),
          {
            itemProps: d
          } = (0, Dl.I)({
            isCurrent: e,
            children: t
          }, s),
          p = r ? f.DX : "a",
          v = (0, x.v6)({
            className: (0, u.$)(zl({
              size: i
            }), e && "foundry_m1icrx9"),
            "data-testid": n
          }, d, o);
        return (0, l.jsx)("li", {
          className: Ll({
            size: i
          }),
          ref: a,
          children: (0, l.jsx)(p, {
            ref: s,
            ...v,
            children: t
          })
        })
      }), (0, c.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const n = ue[e];
        return (0, l.jsx)(n, {
          ref: r,
          size: "LG",
          ...t
        })
      }), (0, c.forwardRef)(({
        children: e,
        testId: t,
        defaultOpen: r = !1,
        label: n,
        ...o
      }, a) => {
        const [s, i] = (0, c.useState)(r), {
          size: d
        } = Vl(), u = (0, x.v6)({
          className: Ll({
            size: d
          }),
          "data-testid": t
        }, o);
        return (0, l.jsx)("li", {
          ref: a,
          ...u,
          children: (0, l.jsxs)(Sa, {
            open: s,
            onOpenChange: () => i(!s),
            children: [(0, l.jsx)(Ea, {
              className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
              "aria-label": n,
              children: "..."
            }), (0, l.jsx)(Ta, {
              children: (0, l.jsx)(za, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_m1icrxb",
                children: (0, l.jsx)(La, {
                  className: "foundry_m1icrxc",
                  children: e
                })
              })
            })]
          })
        })
      }), (0, c.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const a = t ? f.DX : Aa,
          s = (0, x.v6)({
            className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
            "data-testid": r
          }, n);
        return (0, l.jsx)(a, {
          ref: o,
          ...s,
          children: e
        })
      });
      var Kl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gl = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Bl(Bl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Kl(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xl(e.variantClassNames, e => Xl(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_18omk9t1",
          variantClassNames: {
            appearance: {
              primary: "foundry_18omk9t2",
              secondary: "foundry_18omk9t3",
              tertiary: "foundry_18omk9t4"
            },
            size: {
              SM: "foundry_18omk9t5 foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdt foundry_tdsdcdq",
              MD: "foundry_18omk9t6 foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdt foundry_tdsdcdp"
            },
            type: {
              text: "foundry_18omk9t7",
              number: "foundry_18omk9t8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ul = (0, c.createContext)(null);
      (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "primary",
        size: n = "SM",
        type: o = "text",
        ...a
      }, s) => {
        const i = e ? f.DX : "div",
          d = (0, x.v6)({
            className: Gl({
              appearance: r,
              type: o,
              size: n
            })
          }, a);
        return (0, l.jsx)(Ul.Provider, {
          value: {
            type: o
          },
          children: (0, l.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...d
          })
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? f.DX : "div",
          a = (0, x.v6)({
            className: "foundry_18omk9t9",
            "data-testid": t
          }, r);
        return (0, l.jsx)(o, {
          ref: n,
          ...a
        })
      }), (0, c.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const n = ue[e],
          o = (0, x.v6)({
            size: "SM",
            className: "foundry_18omk9t0",
            label: ""
          }, t);
        return (0, l.jsx)(n, {
          ref: r,
          ...o
        })
      });
      const Hl = () => {
          const e = (0, H.Ub)(x.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Wl = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Zl(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Yl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Zl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ql(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Jl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        eu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $l($l({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Jl(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ql(e.variantClassNames, e => Ql(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_hwzz174",
          variantClassNames: {
            isTouchDevice: {
              true: "foundry_hwzz175"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const tu = (0, c.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, l.jsx)(Po, {
            ref: r,
            ...n
          })
        }),
        ru = (0, c.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, l.jsx)(Do, {
            ref: r,
            ...n
          })
        }),
        nu = (0, c.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, l.jsx)(Ro, {
            ref: r,
            ...n
          })
        }),
        ou = (0, c.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.rl)(),
            o = (0, x.v6)({
              "data-testid": e,
              className: eu({
                isTouchDevice: n
              })
            }, t);
          return (0, l.jsx)(So, {
            ref: r,
            ...o
          })
        });

      function au(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function su(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function iu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? su(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = au(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : su(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function du(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e
        }, t);
        return (0, l.jsx)(Eo, {
          ref: r,
          ...n
        })
      });
      var lu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        uu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = iu(iu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) lu(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return du(e.variantClassNames, e => du(e, e => e.split(" ")[0]))
            }
          }, t
        },
        cu = uu({
          defaultClassName: "foundry_xov33n6",
          variantClassNames: {
            align: {
              left: "foundry_xov33n7",
              center: "foundry_xov33n8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fu = uu({
          defaultClassName: "foundry_xov33na",
          variantClassNames: {
            appearance: {
              sentence: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
              uppercase: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdo foundry_tdsdcdt"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const pu = (0, c.createContext)({
        isControlled: !1,
        openImmediately: !1,
        setIsOpen: () => {},
        contentId: "",
        descriptionId: "",
        triggerRef: (0, c.createRef)(),
        dialogSpringRef: (0, ve.SpringRef)(),
        overlaySpringRef: (0, ve.SpringRef)()
      });
      (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          contentId: n,
          triggerRef: o
        } = (0, c.useContext)(pu), a = (0, H.UP)(o, r), s = (0, x.v6)({
          "data-testid": e,
          className: "foundry_8kowh41",
          type: "button",
          "aria-controls": n
        }, t);
        return (0, l.jsx)(Cn, {
          ...s,
          ref: a
        })
      }), (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          isOpen: n,
          overlaySpringRef: o,
          openImmediately: a
        } = (0, c.useContext)(pu), s = Wl(), i = (0, H.jt)(), d = (0, ve.useTransition)(n, {
          ref: o,
          delay: n ? 0 : 100,
          from: s(0),
          enter: s(100),
          leave: s(0),
          config: ve.config.stiff,
          immediate: i || a
        }), u = (0, x.v6)({
          "data-testid": e,
          className: "foundry_xov33n1"
        }, t), f = (0, ve.animated)(On);
        return (0, c.useEffect)(() => {
          o.start()
        }, [n]), d((e, t) => t ? (0, l.jsx)(f, {
          forceMount: !0,
          ref: r,
          ...u,
          style: e
        }) : null)
      }), (0, c.forwardRef)(({
        children: e,
        testId: t,
        onCloseAutoFocus: r,
        disableDrag: n = !1,
        ...o
      }, a) => {
        const {
          isOpen: s,
          setIsOpen: i,
          openImmediately: d,
          contentId: u,
          triggerRef: f,
          onOpenTransitionStart: p,
          onOpenTransitionComplete: v,
          onCloseTransitionStart: y,
          onCloseTransitionComplete: m,
          dialogSpringRef: b,
          overlaySpringRef: h
        } = (0, c.useContext)(pu), g = (0, H.rl)(), w = (0, H.jt)(), _ = (0, c.useRef)(null), j = Hl(), {
          bindDrag: C
        } = function({
          dialogRef: e,
          dialogSpringRef: t,
          overlaySpringRef: r,
          onCloseTransitionStart: n,
          onCloseTransitionComplete: o
        }) {
          const a = Wl(),
            s = Hl(),
            i = (0, c.useRef)();
          return {
            bindDrag: (0, Y.useDrag)(({
              velocity: [, d],
              offset: [, l],
              direction: [, u],
              cancel: c,
              last: f,
              first: p,
              target: v
            }) => {
              const {
                height: y
              } = e.current.getBoundingClientRect();
              if (p && (i.current = function(e, t) {
                  for (; e;) {
                    if (e.scrollHeight > e.clientHeight) {
                      if (0 !== e.scrollTop) return !1;
                      if (t < 0) return !1;
                      if ("dialog" === e.getAttribute("role")) return !0
                    }
                    e = e.parentNode
                  }
                }(v, u)), (!i.current || l < -70) && c(), i.current) {
                const e = 100 * (y - l) / y;
                r.start({
                  ...a(e),
                  immediate: !0
                }), t.start({
                  ...s(e),
                  immediate: !0
                })
              }
              f && (l > .5 * y || d > .5 && u > 0 ? (t.start({
                ...s(0),
                immediate: !1,
                config: ve.config.stiff,
                onStart: n,
                onRest: o
              }), r.start({
                ...a(0),
                immediate: !1,
                config: ve.config.stiff
              })) : (t.start({
                ...s(100),
                immediate: !1,
                config: ve.config.stiff
              }), r.start({
                ...a(100),
                immediate: !1,
                config: ve.config.stiff
              })))
            }, {
              from: () => [0, 0],
              filterTaps: !1,
              bounds: {
                top: 0
              },
              rubberband: !0,
              pointer: {
                touch: !0
              },
              axis: "y"
            })
          }
        }({
          dialogRef: _,
          overlaySpringRef: h,
          dialogSpringRef: b,
          onCloseTransitionStart: () => {
            i(!1), y?.()
          },
          onCloseTransitionComplete: m
        }), O = (0, ve.useTransition)(s, {
          from: j(0),
          enter: j(100),
          leave: j(0),
          delay: s ? 100 : 0,
          config: ve.config.stiff,
          ref: b,
          immediate: w || d,
          onStart: (e, t, r) => {
            r ? p?.() : y?.()
          },
          onRest: (e, t, r) => {
            r ? v?.() : m?.()
          }
        });
        (0, c.useEffect)(() => {
          b.start()
        }, [s]);
        const N = (0, H.UP)(_, a),
          P = g && !w && !n && C(),
          D = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33nd",
            onCloseAutoFocus: e => {
              r?.(e), e.defaultPrevented || f.current?.focus()
            },
            id: u
          }, P || {}, o),
          R = (0, ve.animated)(Nn);
        return O((t, r) => r ? (0, l.jsx)("div", {
          className: "foundry_xov33n3",
          children: (0, l.jsx)(R, {
            forceMount: !0,
            ref: N,
            ...D,
            style: t,
            children: e
          })
        }) : null)
      }), (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e,
          className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
        }, t);
        return (0, l.jsx)(Pn, {
          ref: r,
          ...n
        })
      }), (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e
        }, t);
        return (0, l.jsx)(Dn, {
          ref: r,
          ...n
        })
      }), (0, c.forwardRef)(({
        children: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
          className: "foundry_xov33nh",
          "data-testid": t
        }, r);
        return (0, l.jsxs)(tu, {
          ref: n,
          ...o,
          children: [(0, l.jsx)(ru, {
            className: "foundry_xov33ni",
            children: e
          }), (0, l.jsx)(nu, {
            className: "foundry_xov33nj",
            orientation: "vertical",
            children: (0, l.jsx)(ou, {
              className: "foundry_xov33nk"
            })
          })]
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33ne"
          }, r),
          a = e ? f.DX : "div";
        return (0, l.jsx)(a, {
          ref: n,
          ...o
        })
      }), (0, c.forwardRef)(({
        align: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: cu({
              align: e
            })
          }, n),
          s = t ? f.DX : "header";
        return (0, l.jsx)(s, {
          ref: o,
          ...a
        })
      }), (0, c.forwardRef)(({
        testId: e,
        appearance: t = "sentence",
        ...r
      }, n) => {
        const o = (0, x.v6)({
          "data-testid": e,
          className: fu({
            appearance: t
          })
        }, r);
        return (0, l.jsx)(Pn, {
          ref: n,
          ...o
        })
      }), (0, c.forwardRef)((e, t) => {
        const r = (0, x.v6)({
          className: "foundry_xov33n4"
        }, e);
        return (0, l.jsx)(d.K, {
          ref: t,
          ...r,
          appearance: "ghost",
          size: "LG"
        })
      }), (0, c.forwardRef)(({
        testId: e,
        asChild: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": e,
            className: "foundry_xov33n9"
          }, r),
          a = t ? (0, l.jsx)(f.DX, {
            ref: n,
            ...o
          }) : (0, l.jsx)($i, {
            ref: n,
            ...o,
            size: "LG"
          });
        return (0, l.jsx)(Rn, {
          asChild: !0,
          children: a
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33nf"
          }, r),
          a = e ? f.DX : "div";
        return (0, l.jsx)(a, {
          ref: n,
          ...o
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33ng"
          }, r),
          a = e ? f.DX : "footer";
        return (0, l.jsx)(a, {
          ref: n,
          ...o
        })
      });
      var vu = r(93367),
        yu = r(20972),
        mu = r(2559),
        bu = "Avatar",
        [hu, gu] = (0, vu.A)(bu),
        [wu, xu] = hu(bu),
        _u = c.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = c.useState("idle");
          return (0, l.jsx)(wu, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: a,
            children: (0, l.jsx)(yu.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      _u.displayName = bu;
      var ju = "AvatarImage",
        Cu = c.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...a
          } = e, s = xu(ju, r), i = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, mu.z)(),
              o = c.useRef(null),
              a = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, i] = c.useState(() => Nu(a, e));
            return (0, Ve.N)(() => {
              i(Nu(a, e))
            }, [a, e]), (0, Ve.N)(() => {
              const e = e => () => {
                i(e)
              };
              if (!a) return;
              const n = e("loaded"),
                o = e("error");
              return a.addEventListener("load", n), a.addEventListener("error", o), t && (a.referrerPolicy = t), "string" == typeof r && (a.crossOrigin = r), () => {
                a.removeEventListener("load", n), a.removeEventListener("error", o)
              }
            }, [a, r, t]), s
          }(n, a), d = (0, je.c)(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return (0, Ve.N)(() => {
            "idle" !== i && d(i)
          }, [i, d]), "loaded" === i ? (0, l.jsx)(yu.sG.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      Cu.displayName = ju;
      var Ou = "AvatarFallback";

      function Nu(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      c.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = xu(Ou, r), [s, i] = c.useState(void 0 === n);
        return c.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, l.jsx)(yu.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Ou;
      var Pu = _u,
        Du = Cu;

      function Ru(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Su(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Eu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Su(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ru(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Su(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Iu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ku = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Eu(Eu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ku(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Iu(e.variantClassNames, e => Iu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zu = Tu({
          defaultClassName: "foundry_v912w24 foundry_8kowh41",
          variantClassNames: {
            isDisabled: {
              true: "foundry_v912w25",
              false: "foundry_v912w26"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Lu = "var(--foundry_v912w22)",
        Au = "var(--foundry_v912w23)",
        Vu = Tu({
          defaultClassName: "foundry_v912w2h",
          variantClassNames: {
            isDisabled: {
              true: "foundry_v912w2i",
              false: "foundry_v912w2j"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mu = Tu({
          defaultClassName: "foundry_v912w27",
          variantClassNames: {
            size: {
              SM: "foundry_v912w28",
              MD: "foundry_v912w29",
              LG: "foundry_v912w2a",
              XL: "foundry_v912w2b"
            },
            isDisabled: {
              true: "foundry_v912w2c",
              false: "foundry_v912w2d"
            },
            isFallback: {
              true: "foundry_v912w2e",
              false: "foundry_v912w2f"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isFallback: !0
            }, "foundry_v912w2g"]
          ]
        }),
        Fu = "var(--foundry_v912w21)",
        qu = "var(--foundry_v912w20)",
        Bu = Tu({
          defaultClassName: "foundry_v912w2k",
          variantClassNames: {
            status: {
              online: "foundry_v912w2l",
              offline: "foundry_v912w2m",
              away: "foundry_v912w2n",
              busy: "foundry_v912w2o"
            },
            size: {
              SM: "foundry_v912w2p",
              MD: "foundry_v912w2q",
              LG: "foundry_v912w2r",
              XL: "foundry_v912w2s"
            },
            isDisabled: {
              true: "foundry_v912w2t",
              false: "foundry_v912w2u"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Xu = (0, c.createContext)(null);

      function Ku() {
        const e = (0, c.useContext)(Xu);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }

      function Gu(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Uu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Hu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Gu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Wu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        size: n,
        status: o,
        isDisabled: a = !1,
        ...s
      }, i) => {
        const d = (0, x.v6)({
          "data-testid": r,
          "aria-disabled": a,
          className: zu({
            isDisabled: a
          }),
          asChild: e
        }, s);
        return (0, l.jsx)(Xu.Provider, {
          value: {
            size: n,
            status: o,
            isDisabled: a
          },
          children: (0, l.jsx)(Pu, {
            ref: i,
            ...d,
            children: t
          })
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        src: r,
        ...n
      }, o) => {
        const {
          size: a,
          isDisabled: s
        } = Ku(), [i, d] = (0, c.useState)(!1);
        (0, c.useEffect)(() => {
          d(!1)
        }, [r]);
        const u = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
          f = (0, x.v6)({
            className: Vu({
              isDisabled: s
            }),
            src: u,
            onLoadingStatusChange: e => {
              "error" === e && d(!0)
            },
            asChild: e
          }, n);
        return (0, l.jsx)("span", {
          className: Mu({
            size: a,
            isDisabled: s,
            isFallback: i
          }),
          "data-testid": t,
          "aria-hidden": !0,
          children: (0, l.jsx)(Du, {
            ref: o,
            ...f
          })
        })
      }), (0, c.forwardRef)(({
        testId: e,
        colorOverride: t,
        ...r
      }, n) => {
        const o = (0, c.useRef)(null),
          {
            size: a,
            status: s,
            isDisabled: i
          } = Ku(),
          d = s || "online",
          u = (0, H.UP)(o, n),
          f = (0, x.v6)({
            "data-testid": e,
            "aria-hidden": !0,
            className: Bu({
              status: d,
              size: a,
              isDisabled: i
            }),
            style: (0, _.DI)({
              [qu]: t?.online,
              [Fu]: t?.offline,
              [Lu]: t?.away,
              [Au]: t?.busy
            })
          }, r);
        return (0, l.jsx)("span", {
          ref: u,
          ...f
        })
      });
      var Zu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Yu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Hu(Hu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Zu(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wu(e.variantClassNames, e => Wu(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_2jlbzt2 foundry_8kowh41 foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            isActive: {
              true: "foundry_2jlbzt3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt0"
          }, n),
          s = e ? f.DX : "nav";
        return (0, l.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            role: "list",
            "data-testid": r,
            className: "foundry_2jlbzt1"
          }, n),
          s = e ? f.DX : "div";
        return (0, l.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      });
      const $u = (0, c.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, c.useRef)(null),
            i = (0, H.UP)(s, a),
            {
              linkProps: d,
              isPressed: p
            } = (0, Xi.i)(o, s),
            v = (0, x.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": p,
              "data-active": r,
              className: (0, u.$)(Yu({
                isActive: r
              }))
            }, d),
            y = e ? f.DX : "a";
          return (0, l.jsx)(y, {
            ref: i,
            ...v,
            children: t
          })
        }),
        Qu = ((0, c.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, l.jsx)($u, {
            ref: n,
            ...o,
            children: (0, l.jsx)(ue.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }), (0, c.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, l.jsx)($u, {
            ref: n,
            ...o,
            children: (0, l.jsx)(ue.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }), (0, c.createContext)(null));

      function Ju() {
        const e = (0, c.useContext)(Qu);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }(0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const {
          labelId: a
        } = Ju(), s = (0, x.v6)({
          "data-testid": r,
          className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
        }, n), i = e ? f.DX : "label";
        return (0, l.jsx)(i, {
          ref: o,
          id: a,
          ...s,
          children: t
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        placeholder: r,
        ...n
      }, o) => {
        const {
          labelId: a
        } = Ju(), s = (0, x.v6)({
          "aria-labelledby": a,
          className: "foundry_2jlbztc"
        }, n), i = e ? f.DX : Ja;
        return (0, l.jsxs)(i, {
          ...s,
          children: [(0, l.jsxs)(ns, {
            ref: o,
            children: [(0, l.jsx)(os, {
              placeholder: r
            }), (0, l.jsx)(as, {})]
          }), (0, l.jsx)(ls, {
            children: (0, l.jsx)(es, {
              children: (0, l.jsx)(rs, {
                children: t
              })
            })
          })]
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r
          }, n),
          s = e ? f.DX : is;
        return (0, l.jsx)(s, {
          ...a,
          ref: o,
          children: (0, l.jsx)(ds, {
            children: t
          })
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n),
          s = e ? f.DX : "p";
        return (0, l.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      });
      var ec = "rovingFocusGroup.onEntryFocus",
        tc = {
          bubbles: !1,
          cancelable: !0
        },
        rc = "RovingFocusGroup",
        [nc, oc, ac] = tr(rc),
        [sc, ic] = (0, be.A)(rc, [ac]),
        [dc, lc] = sc(rc),
        uc = c.forwardRef((e, t) => (0, l.jsx)(nc.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, l.jsx)(nc.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, l.jsx)(cc, {
              ...e,
              ref: t
            })
          })
        }));
      uc.displayName = rc;
      var cc = c.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: a,
            currentTabStopId: s,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: d,
            onEntryFocus: u,
            preventScrollOnEntryFocus: f = !1,
            ...p
          } = e, v = c.useRef(null), y = (0, me.s)(t, v), m = (0, Jt.jH)(a), [b, h] = (0, ct.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: rc
          }), [g, w] = c.useState(!1), x = (0, je.c)(u), _ = oc(r), j = c.useRef(!1), [C, O] = c.useState(0);
          return c.useEffect(() => {
            const e = v.current;
            if (e) return e.addEventListener(ec, x), () => e.removeEventListener(ec, x)
          }, [x]), (0, l.jsx)(dc, {
            scope: r,
            orientation: n,
            dir: m,
            loop: o,
            currentTabStopId: b,
            onItemFocus: c.useCallback(e => h(e), [h]),
            onItemShiftTab: c.useCallback(() => w(!0), []),
            onFocusableItemAdd: c.useCallback(() => O(e => e + 1), []),
            onFocusableItemRemove: c.useCallback(() => O(e => e - 1), []),
            children: (0, l.jsx)(we.div, {
              tabIndex: g || 0 === C ? -1 : 0,
              "data-orientation": n,
              ...p,
              ref: y,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, ye.mK)(e.onMouseDown, () => {
                j.current = !0
              }),
              onFocus: (0, ye.mK)(e.onFocus, e => {
                const t = !j.current;
                if (e.target === e.currentTarget && t && !g) {
                  const t = new CustomEvent(ec, tc);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = _().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === b),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    yc(n, f)
                  }
                }
                j.current = !1
              }),
              onBlur: (0, ye.mK)(e.onBlur, () => w(!1))
            })
          })
        }),
        fc = "RovingFocusGroupItem",
        pc = c.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, ke.B)(), u = a || d, f = lc(fc, r), p = f.currentTabStopId === u, v = oc(r), {
            onFocusableItemAdd: y,
            onFocusableItemRemove: m,
            currentTabStopId: b
          } = f;
          return c.useEffect(() => {
            if (n) return y(), () => m()
          }, [n, y, m]), (0, l.jsx)(nc.ItemSlot, {
            scope: r,
            id: u,
            focusable: n,
            active: o,
            children: (0, l.jsx)(we.span, {
              tabIndex: p ? 0 : -1,
              "data-orientation": f.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, ye.mK)(e.onMouseDown, e => {
                n ? f.onItemFocus(u) : e.preventDefault()
              }),
              onFocus: (0, ye.mK)(e.onFocus, () => f.onItemFocus(u)),
              onKeyDown: (0, ye.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void f.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : vc[n]
                }(e, f.orientation, f.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = v().filter(e => e.focusable);
                  let a = o.map(e => e.ref.current);
                  if ("last" === t) a.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && a.reverse();
                    const o = a.indexOf(e.currentTarget);
                    a = f.loop ? (n = o + 1, (r = a).map((e, t) => r[(n + t) % r.length])) : a.slice(o + 1)
                  }
                  setTimeout(() => yc(a))
                }
                var r, n
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: p,
                hasTabStop: null != b
              }) : s
            })
          })
        });
      pc.displayName = fc;
      var vc = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function yc(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var mc = uc,
        bc = pc,
        hc = "Toggle",
        gc = c.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, ct.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: hc
          });
          return (0, l.jsx)(we.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, ye.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      gc.displayName = hc;
      var wc = "ToggleGroup",
        [xc, _c] = (0, be.A)(wc, [ic]),
        jc = ic(),
        Cc = c.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, l.jsx)(Pc, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, l.jsx)(Dc, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${wc}\``)
        });
      Cc.displayName = wc;
      var [Oc, Nc] = xc(wc), Pc = c.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, ct.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: wc
        });
        return (0, l.jsx)(Oc, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: c.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: c.useCallback(() => i(""), [i]),
          children: (0, l.jsx)(Ec, {
            ...a,
            ref: t
          })
        })
      }), Dc = c.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, ct.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: wc
        }), d = c.useCallback(e => i((t = []) => [...t, e]), [i]), u = c.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, l.jsx)(Oc, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: u,
          children: (0, l.jsx)(Ec, {
            ...a,
            ref: t
          })
        })
      });
      Cc.displayName = wc;
      var [Rc, Sc] = xc(wc), Ec = c.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, u = jc(r), c = (0, Jt.jH)(s), f = {
          role: "group",
          dir: c,
          ...d
        };
        return (0, l.jsx)(Rc, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, l.jsx)(mc, {
            asChild: !0,
            ...u,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, l.jsx)(we.div, {
              ...f,
              ref: t
            })
          }) : (0, l.jsx)(we.div, {
            ...f,
            ref: t
          })
        })
      }), Ic = "ToggleGroupItem", kc = c.forwardRef((e, t) => {
        const r = Nc(Ic, e.__scopeToggleGroup),
          n = Sc(Ic, e.__scopeToggleGroup),
          o = jc(e.__scopeToggleGroup),
          a = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = c.useRef(null);
        return n.rovingFocus ? (0, l.jsx)(bc, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, l.jsx)(Tc, {
            ...i,
            ref: t
          })
        }) : (0, l.jsx)(Tc, {
          ...i,
          ref: t
        })
      });
      kc.displayName = Ic;
      var Tc = c.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, a = Nc(Ic, r), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === a.type ? s : void 0;
          return (0, l.jsx)(gc, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? a.onItemActivate(n) : a.onItemDeactivate(n)
            }
          })
        }),
        zc = Cc,
        Lc = kc;

      function Ac(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Vc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ac(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mc(Mc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) qc(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fc(e.variantClassNames, e => Fc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Xc = "var(--foundry_zxwkyk2)",
        Kc = "var(--foundry_zxwkyk3)",
        Gc = Bc({
          defaultClassName: "foundry_zxwkyk4",
          variantClassNames: {
            size: {
              SM: "foundry_zxwkyk5",
              MD: "foundry_zxwkyk6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Uc = Bc({
          defaultClassName: "foundry_zxwkyk8 foundry_8kowh41 foundry_1d5mo5m0 foundry_zxwkyk7",
          variantClassNames: {
            size: {
              SM: "foundry_zxwkyk9",
              MD: "foundry_zxwkyka"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hc = Bc({
          defaultClassName: "foundry_zxwkykh",
          variantClassNames: {
            variant: {
              default: "foundry_zxwkyki",
              number: "foundry_zxwkykj"
            },
            size: {
              SM: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wc = "var(--foundry_zxwkyk1)",
        Zc = "var(--foundry_zxwkyk0)",
        Yc = Bc({
          defaultClassName: "foundry_zxwkykc",
          variantClassNames: {
            status: {
              online: "foundry_zxwkykd",
              offline: "foundry_zxwkyke",
              away: "foundry_zxwkykf",
              busy: "foundry_zxwkykg"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const $c = (0, c.createContext)(null);

      function Qc() {
        const e = (0, c.useContext)($c);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }(0, c.forwardRef)(({
        testId: e,
        size: t,
        type: r = "single",
        ...n
      }, o) => {
        const a = (0, x.v6)({
          "data-testid": e,
          className: Gc({
            size: t
          }),
          type: r
        }, n);
        return (0, l.jsx)($c.Provider, {
          value: {
            size: t
          },
          children: (0, l.jsx)(zc, {
            ref: o,
            ...a
          })
        })
      }), (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          size: n
        } = Qc(), o = (0, x.v6)({
          "data-testid": e,
          className: Uc({
            size: n
          })
        }, t);
        return (0, l.jsx)(Lc, {
          ref: r,
          ...o
        })
      }), (0, c.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const {
          size: n
        } = Qc(), o = ue[e];
        return (0, l.jsx)(o, {
          label: "",
          ref: r,
          size: n,
          className: "foundry_zxwkykb",
          ...t
        })
      }), (0, c.forwardRef)(({
        testId: e,
        colorOverride: t,
        status: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
          "data-testid": e,
          className: Yc({
            status: r
          }),
          style: (0, _.DI)({
            [Zc]: t?.online,
            [Wc]: t?.offline,
            [Xc]: t?.away,
            [Kc]: t?.busy
          })
        }, n);
        return (0, l.jsx)("span", {
          ref: o,
          ...a
        })
      }), (0, c.forwardRef)(({
        testId: e,
        variant: t = "default",
        ...r
      }, n) => {
        const {
          size: o
        } = Qc(), a = (0, x.v6)({
          "data-testid": e,
          className: Hc({
            variant: t,
            size: o
          })
        }, r);
        return (0, l.jsx)("span", {
          ref: n,
          ...a
        })
      });
      var Jc = "Popover",
        [ef, tf] = (0, be.A)(Jc, [Be]),
        rf = Be(),
        [nf, of] = ef(Jc),
        af = "PopoverAnchor",
        sf = c.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = of(af, r), a = rf(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = o;
          return c.useEffect(() => (s(), () => i()), [s, i]), (0, l.jsx)(at, {
            ...a,
            ...n,
            ref: t
          })
        });
      sf.displayName = af;
      var df = "PopoverTrigger",
        lf = c.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = of(df, r), a = rf(r), s = (0, me.s)(t, o.triggerRef), i = (0, l.jsx)(we.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": xf(o.open),
            ...n,
            ref: s,
            onClick: (0, ye.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, l.jsx)(at, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      lf.displayName = df;
      var uf = "PopoverPortal",
        [cf, ff] = ef(uf, {
          forceMount: void 0
        }),
        pf = "PopoverContent",
        vf = c.forwardRef((e, t) => {
          const r = ff(pf, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = of(pf, e.__scopePopover);
          return (0, l.jsx)(lt, {
            present: n || a.open,
            children: a.modal ? (0, l.jsx)(mf, {
              ...o,
              ref: t
            }) : (0, l.jsx)(bf, {
              ...o,
              ref: t
            })
          })
        });
      vf.displayName = pf;
      var yf = (0, ge.TL)("PopoverContent.RemoveScroll"),
        mf = c.forwardRef((e, t) => {
          const r = of(pf, e.__scopePopover),
            n = c.useRef(null),
            o = (0, me.s)(t, n),
            a = c.useRef(!1);
          return c.useEffect(() => {
            const e = n.current;
            if (e) return (0, Gr.Eq)(e)
          }, []), (0, l.jsx)(Kr.A, {
            as: yf,
            allowPinchZoom: !0,
            children: (0, l.jsx)(hf, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, ye.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, ye.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                a.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, ye.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        bf = c.forwardRef((e, t) => {
          const r = of(pf, e.__scopePopover),
            n = c.useRef(!1),
            o = c.useRef(!1);
          return (0, l.jsx)(hf, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const a = t.target,
                s = r.triggerRef.current?.contains(a);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        hf = c.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: i,
            onPointerDownOutside: d,
            onFocusOutside: u,
            onInteractOutside: c,
            ...f
          } = e, p = of(pf, r), v = rf(r);
          return (0, Xr.Oh)(), (0, l.jsx)(Lr, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: (0, l.jsx)(Pe, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: u,
              onDismiss: () => p.onOpenChange(!1),
              children: (0, l.jsx)(st, {
                "data-state": xf(p.open),
                role: "dialog",
                id: p.contentId,
                ...v,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              })
            })
          })
        }),
        gf = "PopoverClose";
      c.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = of(gf, r);
        return (0, l.jsx)(we.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: (0, ye.mK)(e.onClick, () => o.onOpenChange(!1))
        })
      }).displayName = gf;
      var wf = c.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = rf(r);
        return (0, l.jsx)(it, {
          ...o,
          ...n,
          ref: t
        })
      });

      function xf(e) {
        return e ? "open" : "closed"
      }
      wf.displayName = "PopoverArrow";
      var _f = sf,
        jf = lf,
        Cf = vf,
        Of = wf;

      function Nf(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Pf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Df(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Nf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Rf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Sf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ef = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Df(Df({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Sf(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rf(e.variantClassNames, e => Rf(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_lroh6l1 foundry_8kowh41 foundry_1d5mo5m0 foundry_1qqcnuao foundry_1qqcnuar",
          variantClassNames: {
            size: {
              SM: "foundry_lroh6l2 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
              MD: "foundry_lroh6l3 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
              LG: "foundry_lroh6l4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
              XL: "foundry_lroh6l5 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const If = (0, c.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        kf = ((0, c.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, l.jsx)(jf, {
            ref: r,
            ...n
          })
        }), {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        });

      function Tf(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function zf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Tf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Af(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, c.forwardRef)(({
        children: e,
        size: t = "MD",
        testId: r,
        ...n
      }, o) => {
        const {
          open: a
        } = (0, c.useContext)(If), s = (0, c.useRef)(null), i = (0, H.UP)(s, o), {
          buttonProps: d
        } = (0, H.sL)(n, s), u = (0, x.v6)({
          "data-testid": r,
          className: Ef({
            size: t
          })
        }, d), f = a ? ue.ChevronUp : ue.ChevronDown;
        return (0, l.jsxs)("button", {
          ref: i,
          ...u,
          children: [e, (0, l.jsx)(f, {
            label: "",
            size: kf[t]
          })]
        })
      }), (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e
        }, t);
        return (0, l.jsx)(_f, {
          ref: r,
          ...n
        })
      }), (0, c.forwardRef)(({
        sideOffset: e = 6,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
          sideOffset: e,
          "data-testid": t,
          className: "foundry_lroh6l6"
        }, r);
        return (0, l.jsx)(Cf, {
          ref: n,
          ...o
        })
      }), (0, c.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e,
          className: "foundry_lroh6l7"
        }, t);
        return (0, l.jsx)(Of, {
          ref: r,
          ...n
        })
      });
      var Vf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Lf(Lf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Vf(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Af(e.variantClassNames, e => Af(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ff = "var(--foundry_rmorls2)",
        qf = Mf({
          defaultClassName: "foundry_rmorlsa",
          variantClassNames: {
            size: {
              SM: "foundry_rmorlsb foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj",
              MD: "foundry_rmorlsc foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
              LG: "foundry_rmorlsd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bf = "var(--foundry_rmorls0)",
        Xf = Mf({
          defaultClassName: "foundry_rmorls5",
          variantClassNames: {
            size: {
              SM: "foundry_rmorls6",
              MD: "foundry_rmorls7",
              LG: "foundry_rmorls8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kf = "var(--foundry_rmorls3)",
        Gf = "var(--foundry_rmorls1)",
        Uf = Mf({
          defaultClassName: "foundry_rmorlse",
          variantClassNames: {
            size: {
              SM: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdh foundry_tdsdcdj",
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hf = "Progress",
        [Wf, Zf] = (0, vu.A)(Hf),
        [Yf, $f] = Wf(Hf),
        Qf = c.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: a = tp,
            ...s
          } = e;
          !o && 0 !== o || op(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = op(o) ? o : 100;
          null === n || ap(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = ap(n, i) ? n : null,
            u = np(d) ? a(d, i) : void 0;
          return (0, l.jsx)(Yf, {
            scope: r,
            value: d,
            max: i,
            children: (0, l.jsx)(yu.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": np(d) ? d : void 0,
              "aria-valuetext": u,
              role: "progressbar",
              "data-state": rp(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        });
      Qf.displayName = Hf;
      var Jf = "ProgressIndicator",
        ep = c.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = $f(Jf, r);
          return (0, l.jsx)(yu.sG.div, {
            "data-state": rp(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function tp(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function rp(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function np(e) {
        return "number" == typeof e
      }

      function op(e) {
        return np(e) && !isNaN(e) && e > 0
      }

      function ap(e, t) {
        return np(e) && !isNaN(e) && e <= t && e >= 0
      }
      ep.displayName = Jf;
      var sp = Qf,
        ip = ep;
      const dp = (0, c.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        lp = ((0, c.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, l.jsx)(dp.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, l.jsx)(lp, {
              ...n,
              ref: o
            })
          })
        }), (0, c.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? f.DX : "div";
          return (0, l.jsx)(a, {
            ...o,
            ref: n
          })
        }));
      (0, c.forwardRef)(({
        testId: e,
        colorOverride: t,
        ...r
      }, n) => {
        const {
          value: o,
          max: a,
          size: s
        } = (0, c.useContext)(dp), i = (0, x.v6)({
          "data-testid": e,
          className: Xf({
            size: s
          }),
          value: o,
          max: a,
          style: (0, _.DI)({
            [Kf]: t
          }),
          "data-track": !0
        }, r);
        return (0, l.jsx)(sp, {
          ref: n,
          ...i
        })
      }), (0, c.forwardRef)(({
        testId: e,
        transitionDuration: t = 500,
        colorOverride: r,
        ...n
      }, o) => {
        const {
          percentage: a,
          isInvalid: s
        } = (0, c.useContext)(dp), i = s ? "-100%" : `-${100-a}%`, d = (0, x.v6)({
          "data-testid": e,
          className: "foundry_rmorls9",
          style: (0, _.DI)({
            [Bf]: i,
            [Gf]: `${t}ms`,
            [Ff]: r
          })
        }, n);
        return (0, l.jsx)(ip, {
          ref: o,
          ...d
        })
      }), (0, c.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const {
          size: o
        } = (0, c.useContext)(dp), a = (0, x.v6)({
          "data-testid": t,
          className: qf({
            size: o
          }),
          "aria-hidden": !0
        }, r), s = e ? f.DX : "span";
        return (0, l.jsx)(s, {
          ref: n,
          ...a
        })
      }), (0, c.forwardRef)(({
        testId: e,
        format: t,
        ...r
      }, n) => {
        const {
          value: o,
          max: a,
          size: s,
          percentage: i,
          isInvalid: d
        } = (0, c.useContext)(dp), u = (0, x.v6)({
          "data-testid": e,
          className: qf({
            size: s
          }),
          "aria-hidden": !0
        }, r);
        return d ? (0, l.jsx)("span", {
          ref: n,
          ...u
        }) : "percentage" === t ? (0, l.jsxs)("span", {
          ref: n,
          ...u,
          children: [i, " ", (0, l.jsx)("span", {
            className: Uf({
              size: s
            }),
            children: "%"
          })]
        }) : (0, l.jsxs)("span", {
          ref: n,
          ...u,
          children: [o, "/", a]
        })
      })
    }
  }
]);