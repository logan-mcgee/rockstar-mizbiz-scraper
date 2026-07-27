try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "29ee6bea-a527-4c10-9ea5-6443bc0d7b0e", e._sentryDebugIdIdentifier = "sentry-dbid-29ee6bea-a527-4c10-9ea5-6443bc0d7b0e")
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
  [9944], {
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
        p = r(56295).isFocusable,
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
      var n = r(56295);

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
            C = function(e, t) {
              var r = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
              return g.containerGroups.findIndex(function(t) {
                var n = t.container,
                  o = t.tabbableNodes;
                return n.contains(e) || (null == r ? void 0 : r.includes(n)) || o.find(function(t) {
                  return t === e
                })
              })
            },
            x = function(e) {
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
            _ = function() {
              var e = x("initialFocus", {
                hasFallback: !0
              });
              if (!1 === e) return !1;
              if (void 0 === e || e && !(0, n.isFocusable)(e, h.tabbableOptions))
                if (C(s.activeElement) >= 0) e = s.activeElement;
                else {
                  var t = g.tabbableGroups[0];
                  e = t && t.firstTabbableNode || x("fallbackFocus")
                }
              else null === e && (e = x("fallbackFocus"));
              if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
              return e
            },
            j = function() {
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
                }), g.tabbableGroups.length <= 0 && !x("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
              if (g.containerGroups.find(function(e) {
                  return e.posTabIndexesFound
                }) && g.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            O = function(e) {
              var t = e.activeElement;
              if (t) return t.shadowRoot && null !== t.shadowRoot.activeElement ? O(t.shadowRoot) : t
            },
            P = function(e) {
              !1 !== e && e !== O(document) && (e && e.focus ? (e.focus({
                preventScroll: !!h.preventScroll
              }), g.mostRecentlyFocusedNode = e, function(e) {
                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
              }(e) && e.select()) : P(_()))
            },
            N = function(e) {
              var t = x("setReturnFocus", {
                params: [e]
              });
              return t || !1 !== t && e
            },
            D = function(e) {
              var t = e.target,
                r = e.event,
                o = e.isBackward,
                a = void 0 !== o && o;
              t = t || m(r), j();
              var s = null;
              if (g.tabbableGroups.length > 0) {
                var i = C(t, r),
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
              } else s = x("fallbackFocus");
              return s
            },
            R = function(e) {
              var t = m(e);
              C(t, e) >= 0 || (y(h.clickOutsideDeactivates, e) ? r.deactivate({
                returnFocus: h.returnFocusOnDeactivate
              }) : y(h.allowOutsideClick, e) || e.preventDefault())
            },
            S = function(e) {
              var t = m(e),
                r = C(t, e) >= 0;
              if (r || t instanceof Document) r && (g.mostRecentlyFocusedNode = t);
              else {
                var o;
                e.stopImmediatePropagation();
                var a = !0;
                if (g.mostRecentlyFocusedNode)
                  if ((0, n.getTabIndex)(g.mostRecentlyFocusedNode) > 0) {
                    var s = C(g.mostRecentlyFocusedNode),
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
                })), P(o || g.mostRecentlyFocusedNode || _())
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
                r && (c(e) && e.preventDefault(), P(r))
              }(e, h.isKeyBackward(e))
            },
            k = function(e) {
              var t;
              "Escape" !== (null == (t = e) ? void 0 : t.key) && "Esc" !== (null == t ? void 0 : t.key) && 27 !== (null == t ? void 0 : t.keyCode) || !1 === y(h.escapeDeactivates, e) || (e.preventDefault(), r.deactivate())
            },
            I = function(e) {
              var t = m(e);
              C(t, e) >= 0 || y(h.clickOutsideDeactivates, e) || y(h.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
            },
            T = function() {
              if (g.active) return u.activateTrap(i, r), g.delayInitialFocusTimer = h.delayInitialFocus ? v(function() {
                P(_())
              }) : P(_()), s.addEventListener("focusin", S, !0), s.addEventListener("mousedown", R, {
                capture: !0,
                passive: !1
              }), s.addEventListener("touchstart", R, {
                capture: !0,
                passive: !1
              }), s.addEventListener("click", I, {
                capture: !0,
                passive: !1
              }), s.addEventListener("keydown", E, {
                capture: !0,
                passive: !1
              }), s.addEventListener("keydown", k), r
            },
            L = function() {
              if (g.active) return s.removeEventListener("focusin", S, !0), s.removeEventListener("mousedown", R, !0), s.removeEventListener("touchstart", R, !0), s.removeEventListener("click", I, !0), s.removeEventListener("keydown", E, !0), s.removeEventListener("keydown", k), r
            },
            V = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver(function(e) {
              e.some(function(e) {
                return Array.from(e.removedNodes).some(function(e) {
                  return e === g.mostRecentlyFocusedNode
                })
              }) && P(_())
            }) : void 0,
            z = function() {
              V && (V.disconnect(), g.active && !g.paused && g.containers.map(function(e) {
                V.observe(e, {
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
                a || j(), g.active = !0, g.paused = !1, g.nodeFocusedBeforeActivation = O(s), null == n || n();
                var c = function() {
                  a && j(), T(), z(), h.isolateSubtrees && r._setSubtreeIsolation(!0), null == o || o()
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
              clearTimeout(g.delayInitialFocusTimer), g.delayInitialFocusTimer = void 0, g.paused || r._setSubtreeIsolation(!1), g.alreadySilent.clear(), L(), g.active = !1, g.paused = !1, z(), u.deactivateTrap(i, r);
              var n = w(t, "onDeactivate"),
                o = w(t, "onPostDeactivate"),
                a = w(t, "checkCanReturnFocus"),
                s = w(t, "returnFocus", "returnFocusOnDeactivate");
              null == n || n();
              var l = function() {
                v(function() {
                  s && P(N(g.nodeFocusedBeforeActivation)), null == o || o()
                })
              };
              return s && a ? (a(N(g.nodeFocusedBeforeActivation)).then(l, l), this) : (l(), this)
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
              }(g.containers), g.active && (j(), h.isolateSubtrees && !g.paused && r._setSubtreeIsolation(!0)), z(), this
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
                  null == n || n(), L(), z(), r._setSubtreeIsolation(!1), null == o || o()
                } else {
                  var a = w(t, "onUnpause"),
                    s = w(t, "onPostUnpause");
                  null == a || a(), r._setSubtreeIsolation(!0), j(), T(), z(), null == s || s()
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
    56295(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        focusable: () => C,
        getTabIndex: () => f,
        isFocusable: () => j,
        isTabbable: () => x,
        tabbable: () => w
      });
      var n = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"],
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
            var o = getComputedStyle(e).visibility;
            if ("hidden" === o || "collapse" === o) return !0;
            var a = s.call(e, "details>summary:first-of-type") ? e.parentElement : e;
            if (s.call(a, "details:not([open]) *")) return !0;
            if (r && "full" !== r && "full-native" !== r && "legacy-full" !== r) {
              if ("non-zero-area" === r) return y(e)
            } else {
              if ("function" == typeof n) {
                for (var d = e; e;) {
                  var l = e.parentElement,
                    u = i(e);
                  if (l && !l.shadowRoot && !0 === n(l)) return y(e);
                  e = e.assignedSlot ? e.assignedSlot : l || u === e.ownerDocument ? l : u.host
                }
                e = d
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
        C = function(e, t) {
          return (t = t || {}).getShadowRoot ? u([e], t.includeContainer, {
            filter: m.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot
          }) : l(e, t.includeContainer, m.bind(null, t))
        },
        x = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== s.call(e, o) && b(t, e)
        },
        _ = n.concat("iframe:not([inert]):not([inert] *)").join(","),
        j = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== s.call(e, _) && m(t, e)
        }
    },
    52137(e, t, r) {
      "use strict";
      r.d(t, {
        DI: () => n.DI
      });
      var n = r(92800);
      r(12380)
    },
    26826(e, t, r) {
      "use strict";
      r.d(t, {
        ms: () => n,
        FK: () => s
      });
      var n = {};
      r.r(n), r.d(n, {
        UC: () => Ka,
        JU: () => $a,
        c$: () => Ja,
        JP: () => es,
        ZL: () => ts,
        bL: () => Ga,
        FK: () => Ua,
        l9: () => Wa,
        if: () => Qa,
        OE: () => Ya
      });
      var o = {};
      r.r(o), r.d(o, {
        CheckLG: () => gs,
        CheckMD: () => hs,
        CheckXL: () => ws,
        DashLG: () => xs,
        DashMD: () => Cs,
        DashXL: () => _s
      });
      var a = {};
      r.r(a), r.d(a, {
        DotLG: () => mi,
        DotMD: () => yi,
        DotXL: () => bi
      });
      var s = {};
      r.r(s), r.d(s, {
        bL: () => Zl,
        Ze: () => Wl,
        zi: () => Yl,
        LM: () => Ul
      });
      var i = {};
      r.r(i), r.d(i, {
        PC: () => av,
        PS4: () => nv,
        PS5: () => ov,
        XboxOne: () => sv,
        XboxSeriesXS: () => iv
      });
      var d = r(46891),
        l = r(64716),
        u = r(39793),
        c = r(4921),
        f = r(93082),
        p = r(805);

      function v(e) {
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

      function y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? y(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = v(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function b(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var h, g, w = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        C = (h = {
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
        }, g = e => {
          var t = h.defaultClassName,
            r = m(m({}, h.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : h.defaultVariants[n];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = h.variantClassNames[n][s];
              i && (t += " " + i)
            }
          }
          for (var [d, l] of h.compoundVariants) w(d, r, h.defaultVariants) && (t += " " + l);
          return t
        }, g.variants = () => Object.keys(h.variantClassNames), g.classNames = {
          get base() {
            return h.defaultClassName.split(" ")[0]
          },
          get variants() {
            return b(h.variantClassNames, e => b(e, e => e.split(" ")[0]))
          }
        }, g);
      (0, f.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...s
      }, i) => {
        const d = "horizontal" !== t || n ? "div" : "hr",
          l = n || "hr" === d ? void 0 : "separator",
          f = o ? p.DX : d;
        return (0, u.jsx)(f, {
          ref: i,
          className: (0, c.$)(C({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });
      var x = r(6241),
        _ = r(92800),
        j = r(9759);

      function O(e) {
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

      function P(e, t) {
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
          t % 2 ? P(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = O(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function D(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var R = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        S = "var(--foundry_9dxgbc2)",
        E = "var(--foundry_9dxgbc3)",
        k = (e => {
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
            for (var [l, u] of e.compoundVariants) R(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return D(e.variantClassNames, e => D(e, e => e.split(" ")[0]))
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
        T = "var(--foundry_9dxgbc1)";

      function L(e) {
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

      function V(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? V(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = L(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function M(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...s
      }, i) => {
        const d = (0, j.zQ)(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, x.v6)({
            className: k({
              size: l
            }),
            "data-testid": t,
            style: (0, _.DI)({
              [I]: n?.pulseColorBackground,
              [T]: n?.pulseColorForeground,
              [S]: n?.gradientColorBackground,
              [E]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          f = e ? p.DX : "div";
        return (0, u.jsx)(f, {
          ref: i,
          ...c,
          children: e ? (0, u.jsx)(p.xV, {
            children: r
          }) : (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, u.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      }), r(91999);
      var A = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        F = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = z(z({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) A(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return M(e.variantClassNames, e => M(e, e => e.split(" ")[0]))
            }
          }, t
        },
        H = F({
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
      const q = (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? p.DX : "p",
          i = (0, x.v6)({
            className: H({
              size: n,
              appearance: r
            })
          }, o);
        return (0, u.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var B = F({
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
      (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const a = e ? p.DX : "p",
          s = (0, x.v6)({
            className: B({
              appearance: r
            })
          }, n);
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": t,
          ...s
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "h1",
          a = (0, x.v6)({
            className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      });
      var X = F({
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
      (0, f.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? p.DX : `h${7===t?6:t}`,
          s = (0, x.v6)(n, {
            className: X({
              level: t
            })
          });
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var G = F({
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
      (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? p.DX : "p",
          i = (0, x.v6)({
            className: G({
              size: n,
              appearance: r
            })
          }, o);
        return (0, u.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var K = F({
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
      const Z = {
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
      (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        semantic: r = "default",
        ...n
      }, o) => {
        const a = e ? p.DX : Z[r] || "span",
          s = (0, x.v6)(n, {
            className: K({
              semantic: r
            })
          });
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": t,
          ...s
        })
      });
      var U = r(15036),
        W = r(35812),
        Y = r(99206),
        Q = r(66461),
        $ = r(90004);

      function J(e) {
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

      function ee(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ee(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = J(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ee(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function re(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ne = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        oe = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = te(te({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ne(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return re(e.variantClassNames, e => re(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ae = oe({
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
        se = oe({
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
      W.gsap.registerPlugin(Y.L);
      const ie = {
        inherit: !1,
        overwrite: !1,
        duration: .3,
        ease: "power2.out"
      };
      (0, _.Tm)("var(--foundry_1a74xwb0)");
      var de = r(92117);
      r.e(9017).then(r.bind(r, 89017)), r.e(2662).then(r.bind(r, 22662)), r.e(4).then(r.bind(r, 80004)), r.e(9629).then(r.bind(r, 69629)), r.e(5296).then(r.bind(r, 35296)), r.e(9022).then(r.bind(r, 39022)), r.e(8921).then(r.bind(r, 78921)), r.e(6383).then(r.bind(r, 6383)), r.e(5140).then(r.bind(r, 75140)), r.e(700).then(r.bind(r, 70700)), r.e(6994).then(r.bind(r, 26994)), r.e(247).then(r.bind(r, 80247)), r.e(3619).then(r.bind(r, 13619));
      Event;
      var le = r(33092);
      const ue = e => "dark" === e ? le.xW.dark : le.xW.light;
      var ce = r(21827),
        fe = {};
      r.r(fe), r.d(fe, {
        Activity: () => ce.Il,
        ArrowDown: () => ce.yd,
        ArrowLeft: () => ce.nk,
        ArrowRight: () => ce.Qp,
        ArrowRightLeft: () => ce.nF,
        ArrowUp: () => ce.Do,
        ArrowUpDown: () => ce.hD,
        Book: () => ce.E3,
        Bookmark: () => ce.Xh,
        BookmarkFilled: () => ce.dA,
        Bug: () => ce.zP,
        BugOff: () => ce.k_,
        Calendar: () => ce.Vv,
        CalendarOff: () => ce.is,
        Car: () => ce.TH,
        CarSide: () => ce.cY,
        ChartSpline: () => ce.m3,
        Check: () => ce.Jl,
        ChevronDown: () => ce.yQ,
        ChevronFirst: () => ce.mf,
        ChevronLast: () => ce.Ou,
        ChevronLeft: () => ce.JG,
        ChevronRight: () => ce.c_,
        ChevronUp: () => ce.rX,
        ChevronsDownUp: () => ce.WE,
        ChevronsLeftRight: () => ce.UQ,
        ChevronsUpDown: () => ce.Ml,
        Circle: () => ce.jl,
        CircleCheck: () => ce.rW,
        CircleCheckFilled: () => ce.Dw,
        CircleDollarSign: () => ce.OJ,
        CircleHelp: () => ce.YC,
        CircleMinus: () => ce.ZX,
        CircleMinusFilled: () => ce.r0,
        CirclePerson: () => ce.q_,
        CircleSlash: () => ce.o6,
        CircleX: () => ce.RT,
        Clipboard: () => ce.B0,
        Clock: () => ce.zD,
        CloudAlert: () => ce.K4,
        CloudDownload: () => ce.MQ,
        CloudUpload: () => ce.bK,
        CodeXml: () => ce.bv,
        Copy: () => ce.QR,
        Cpu: () => ce.fX,
        CreditCard: () => ce.y5,
        Database: () => ce.Wm,
        Discord: () => ce.bY,
        DollarSign: () => ce.G9,
        Download: () => ce.f5,
        EllipsisVertical: () => ce.Yb,
        Envelope: () => ce.Lh,
        EnvelopeOpen: () => ce.jd,
        EpicGames: () => ce.fk,
        ExternalLink: () => ce.Gr,
        Eye: () => ce.kU,
        EyeClosed: () => ce.Cz,
        EyeOff: () => ce.X_,
        Facebook: () => ce.f1,
        FastForward: () => ce.Ej,
        FileText: () => ce.iU,
        Files: () => ce.sv,
        Filter: () => ce.dJ,
        Flag: () => ce.lN,
        FlagOff: () => ce.Ih,
        Gear: () => ce.OB,
        Globe: () => ce.qz,
        Handshake: () => ce.g6,
        Headset: () => ce.BC,
        Heart: () => ce.B1,
        HeartPulse: () => ce.iY,
        House: () => ce.tT,
        Image: () => ce._V,
        Info: () => ce.R2,
        Instagram: () => ce.pd,
        LayoutGrid: () => ce.D6,
        Lightbulb: () => ce.g5,
        Link: () => ce.N_,
        List: () => ce.B8,
        ListFilter: () => ce.xt,
        ListMusic: () => ce.w7,
        LockKeyhole: () => ce.NT,
        LockPassword: () => ce.HI,
        LogOut: () => ce.nU,
        MapPin: () => ce.sD,
        Maximize: () => ce.hz,
        Maximize2: () => ce.h1,
        Menu: () => ce.W1,
        MessageSquareText: () => ce.AJ,
        Mic: () => ce.GO,
        MicFilled: () => ce.cX,
        Minimize: () => ce.Xj,
        Minimize2: () => ce.xq,
        Minus: () => ce.Hs,
        Monitor: () => ce.VA,
        Moon: () => ce.AX,
        NintendoSwitch: () => ce.Su,
        PaperPlane: () => ce.d8,
        Paperclip: () => ce.xv,
        PartialCircle: () => ce.IM,
        Pause: () => ce.vR,
        Pencil: () => ce.gH,
        PencilOff: () => ce.hE,
        Person: () => ce._A,
        PersonBlock: () => ce.hs,
        PersonMinus: () => ce._E,
        PersonPlus: () => ce.c1,
        Pin: () => ce.yU,
        PinFilled: () => ce.IF,
        Play: () => ce.jG,
        Playstation: () => ce.p6,
        Plus: () => ce.FW,
        Power: () => ce.aJ,
        Property: () => ce.mA,
        Reddit: () => ce.TZ,
        RefreshCcw: () => ce.PM,
        RefreshCw: () => ce.e9,
        RefreshCwOff: () => ce.X0,
        Replay: () => ce.eJ,
        Rewind: () => ce.Y8,
        Save: () => ce.eM,
        Search: () => ce.vj,
        Server: () => ce.gq,
        Share: () => ce.SY,
        ShieldAlert: () => ce.yZ,
        ShieldCheck: () => ce.ox,
        ShoppingBag: () => ce.Nw,
        SkipBack: () => ce.L9,
        SkipForward: () => ce.xP,
        Star: () => ce.FE,
        StarOff: () => ce.UM,
        Steam: () => ce.Rv,
        Stop: () => ce.VG,
        Store: () => ce.il,
        Sun: () => ce.bd,
        ThumbsDown: () => ce.z9,
        ThumbsUp: () => ce.tw,
        Tiktok: () => ce.Tc,
        Trash: () => ce.lM,
        TriangleAlert: () => ce.lW,
        Trophy: () => ce.Xs,
        Truck: () => ce.No,
        Twitch: () => ce.YA,
        Twitter: () => ce.KK,
        TwoPeople: () => ce.LM,
        Undo: () => ce.Vn,
        Unlink: () => ce.c2,
        Upload: () => ce._O,
        UserCouple: () => ce.Cn,
        UserGroup: () => ce.zr,
        Volume: () => ce.fS,
        Volume1: () => ce.c6,
        Volume2: () => ce.jI,
        VolumeX: () => ce.XL,
        Wallet: () => ce.uW,
        Weapon: () => ce.Re,
        Wifi: () => ce.MJ,
        WifiOff: () => ce.RQ,
        Wrench: () => ce.pi,
        X: () => ce.X,
        Xbox: () => ce.ms,
        Youtube: () => ce.k,
        ZoomIn: () => ce.$Z,
        ZoomOut: () => ce.en
      });
      const pe = (0, de.YK)({
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
      var ve = "foundry_bc732x1";
      const ye = (0, f.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, $.vC)(e, e => r?.(e), [r]), (0, u.jsx)(q, {
        size: "XS",
        className: (0, c.$)("foundry_bc732x0", {
          [ve]: t
        }),
        asChild: !0,
        children: (0, u.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var me, be = r(66936),
        he = r(2458),
        ge = r(64239),
        we = r(1913),
        Ce = r(31270),
        xe = r(94660),
        _e = "dismissableLayer.update",
        je = f.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        Oe = f.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            deferPointerDownOutside: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = f.useContext(je), [p, v] = f.useState(null), y = p?.ownerDocument ?? globalThis?.document, [, m] = f.useState({}), b = (0, ge.s)(t, v), h = Array.from(c.layers), [g] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), w = g ? h.indexOf(g) : -1, C = p ? h.indexOf(p) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = C >= w, j = f.useRef(!1), O = function(e, t) {
            const {
              ownerDocument: r = globalThis?.document,
              deferPointerDownOutside: n = !1,
              isDeferredPointerDownOutsideRef: o,
              dismissableSurfaces: a,
              shouldHandlePointerDownOutside: s = Ne
            } = t, i = (0, xe.c)(e), d = f.useRef(!1), l = f.useRef(!1), u = f.useRef(new Map), c = f.useRef(() => {});
            return f.useEffect(() => {
              function e() {
                l.current = !1, o.current = !1, u.current.clear()
              }

              function t(e) {
                if (!l.current) return;
                const t = e.target;
                t instanceof Node && [...a].some(e => e.contains(t)) || u.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                  l.current && c.current()
                }, 0)
              }

              function f(e) {
                l.current && u.current.set(e.type, !1)
              }
              const p = t => {
                  if (t.target && !d.current) {
                    let a = function() {
                      r.removeEventListener("click", c.current);
                      const t = Array.from(u.current.values()).some(Boolean);
                      e(), t || Re("dismissableLayer.pointerDownOutside", i, f, {
                        discrete: !0
                      })
                    };
                    if (!s(t.target)) return r.removeEventListener("click", c.current), e(), void(d.current = !1);
                    const f = {
                      originalEvent: t
                    };
                    l.current = !0, o.current = n && 0 === t.button, u.current.clear(), n && 0 === t.button ? (r.removeEventListener("click", c.current), c.current = a, r.addEventListener("click", c.current, {
                      once: !0
                    })) : a()
                  } else r.removeEventListener("click", c.current), e();
                  d.current = !1
                },
                v = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
              for (const e of v) r.addEventListener(e, t, !0), r.addEventListener(e, f);
              const y = window.setTimeout(() => {
                r.addEventListener("pointerdown", p)
              }, 0);
              return () => {
                window.clearTimeout(y), r.removeEventListener("pointerdown", p), r.removeEventListener("click", c.current);
                for (const e of v) r.removeEventListener(e, t, !0), r.removeEventListener(e, f)
              }
            }, [r, i, n, o, a, s]), {
              onPointerDownCapture: () => d.current = !0
            }
          }(e => {
            a?.(e), i?.(e), e.defaultPrevented || d?.()
          }, {
            ownerDocument: y,
            deferPointerDownOutside: n,
            isDeferredPointerDownOutsideRef: j,
            dismissableSurfaces: c.dismissableSurfaces,
            shouldHandlePointerDownOutside: f.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              const t = [...c.branches].some(t => t.contains(e));
              return _ && !t
            }, [c.branches, _])
          }), P = function(e, t = globalThis?.document) {
            const r = (0, xe.c)(e),
              n = f.useRef(!1);
            return f.useEffect(() => {
              const e = e => {
                e.target && !n.current && Re("dismissableLayer.focusOutside", r, {
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
            if (n && j.current) return;
            const t = e.target;
            [...c.branches].some(e => e.contains(t)) || (s?.(e), i?.(e), e.defaultPrevented || d?.())
          }, y), N = !!p && C === h.length - 1, D = (0, xe.c)(e => {
            "Escape" === e.key && (o?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          });
          return f.useEffect(() => {
            if (N) return y.addEventListener("keydown", D, {
              capture: !0
            }), () => y.removeEventListener("keydown", D, {
              capture: !0
            })
          }, [y, N, D]), f.useEffect(() => {
            if (p) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (me = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(p)), c.layers.add(p), De(), () => {
              r && (c.layersWithOutsidePointerEventsDisabled.delete(p), 0 === c.layersWithOutsidePointerEventsDisabled.size && (y.body.style.pointerEvents = me))
            }
          }, [p, y, r, c]), f.useEffect(() => () => {
            p && (c.layers.delete(p), c.layersWithOutsidePointerEventsDisabled.delete(p), De())
          }, [p, c]), f.useEffect(() => {
            const e = () => m({});
            return document.addEventListener(_e, e), () => document.removeEventListener(_e, e)
          }, []), (0, u.jsx)(Ce.sG.div, {
            ...l,
            ref: b,
            style: {
              pointerEvents: x ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, he.mK)(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: (0, he.mK)(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: (0, he.mK)(e.onPointerDownCapture, O.onPointerDownCapture)
          })
        });
      Oe.displayName = "DismissableLayer";
      var Pe = f.forwardRef((e, t) => {
        const r = f.useContext(je),
          n = f.useRef(null),
          o = (0, ge.s)(t, n);
        return f.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, u.jsx)(Ce.sG.div, {
          ...e,
          ref: o
        })
      });
      Pe.displayName = "DismissableLayerBranch";
      var Ne = () => !0;

      function De() {
        const e = new CustomEvent(_e);
        document.dispatchEvent(e)
      }

      function Re(e, t, r, {
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
        }), n ? (0, Ce.hO)(o, a) : o.dispatchEvent(a)
      }
      var Se = Oe,
        Ee = Pe,
        ke = r(94296),
        Ie = r(17966),
        Te = r(10376),
        Le = f.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, u.jsx)(Ce.sG.svg, {
            ...a,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, u.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Le.displayName = "Arrow";
      var Ve = Le,
        ze = r(10198),
        Me = r(5024),
        Ae = "Popper",
        [Fe, He] = (0, we.A)(Ae),
        [qe, Be] = Fe(Ae),
        Xe = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = f.useState(null), [a, s] = f.useState(void 0);
          return (0, u.jsx)(qe, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            placementState: a,
            setPlacementState: s,
            children: r
          })
        };
      Xe.displayName = Ae;
      var Ge = "PopperAnchor",
        Ke = f.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, a = Be(Ge, r), s = f.useRef(null), i = a.onAnchorChange, d = f.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), l = (0, ge.s)(t, d), c = f.useRef(null);
          f.useEffect(() => {
            if (!n) return;
            const e = c.current;
            c.current = n.current, e !== c.current && i(c.current)
          });
          const p = a.placementState && rt(a.placementState),
            v = p?.[0],
            y = p?.[1];
          return n ? null : (0, u.jsx)(Ce.sG.div, {
            "data-radix-popper-side": v,
            "data-radix-popper-align": y,
            ...o,
            ref: l
          })
        });
      Ke.displayName = Ge;
      var Ze = "PopperContent",
        [Ue, We] = Fe(Ze),
        Ye = f.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: a = "center",
            alignOffset: s = 0,
            arrowPadding: i = 0,
            avoidCollisions: d = !0,
            collisionBoundary: l = [],
            collisionPadding: c = 0,
            sticky: p = "partial",
            hideWhenDetached: v = !1,
            updatePositionStrategy: y = "optimized",
            onPlaced: m,
            ...b
          } = e, h = Be(Ze, r), [g, w] = f.useState(null), C = (0, ge.s)(t, w), [x, _] = f.useState(null), j = (0, Me.X)(x), O = j?.width ?? 0, P = j?.height ?? 0, N = n + ("center" !== a ? "-" + a : ""), D = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, R = Array.isArray(l) ? l : [l], S = R.length > 0, E = {
            padding: D,
            boundary: R.filter(et),
            altBoundary: S
          }, {
            refs: k,
            floatingStyles: I,
            placement: T,
            isPositioned: L,
            middlewareData: V
          } = (0, Ie.we)({
            strategy: "fixed",
            placement: N,
            whileElementsMounted: (...e) => (0, Te.ll)(...e, {
              animationFrame: "always" === y
            }),
            elements: {
              reference: h.anchor
            },
            middleware: [(0, Ie.cY)({
              mainAxis: o + P,
              alignmentAxis: s
            }), d && (0, Ie.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === p ? (0, Ie.ER)() : void 0,
              ...E
            }), d && (0, Ie.UU)({
              ...E
            }), (0, Ie.Ej)({
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
            }), x && (0, Ie.UE)({
              element: x,
              padding: i
            }), tt({
              arrowWidth: O,
              arrowHeight: P
            }), v && (0, Ie.jD)({
              strategy: "referenceHidden",
              ...E,
              boundary: S ? E.boundary : void 0
            })]
          }), z = h.setPlacementState;
          (0, ze.N)(() => (z(T), () => {
            z(void 0)
          }), [T, z]);
          const [M, A] = rt(T), F = (0, xe.c)(m);
          (0, ze.N)(() => {
            L && F?.()
          }, [L, F]);
          const H = V.arrow?.x,
            q = V.arrow?.y,
            B = 0 !== V.arrow?.centerOffset,
            [X, G] = f.useState();
          return (0, ze.N)(() => {
            g && G(window.getComputedStyle(g).zIndex)
          }, [g]), (0, u.jsx)("div", {
            ref: k.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: L ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: X,
              "--radix-popper-transform-origin": [V.transformOrigin?.x, V.transformOrigin?.y].join(" "),
              ...V.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, u.jsx)(Ue, {
              scope: r,
              placedSide: M,
              placedAlign: A,
              onArrowChange: _,
              arrowX: H,
              arrowY: q,
              shouldHideArrow: B,
              children: (0, u.jsx)(Ce.sG.div, {
                "data-side": M,
                "data-align": A,
                ...b,
                ref: C,
                style: {
                  ...b.style,
                  animation: L ? void 0 : "none"
                }
              })
            })
          })
        });
      Ye.displayName = Ze;
      var Qe = "PopperArrow",
        $e = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Je = f.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = We(Qe, r), a = $e[o.placedSide];
          return (0, u.jsx)("span", {
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
            children: (0, u.jsx)(Ve, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function et(e) {
        return null !== e
      }
      Je.displayName = Qe;
      var tt = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, a = 0 !== o.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = rt(r), u = {
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

      function rt(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var nt = Xe,
        ot = Ke,
        at = Ye,
        st = Je,
        it = r(84017),
        dt = f.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, a] = f.useState(!1);
          (0, ze.N)(() => a(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? it.createPortal((0, u.jsx)(Ce.sG.div, {
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
          const [t, r] = f.useState(), n = f.useRef(null), o = f.useRef(e), a = f.useRef("none"), s = f.useRef(void 0), i = e ? "mounted" : "unmounted", [d, l] = function(e, t) {
            return f.useReducer((e, r) => t[e][r] ?? e, e)
          }(i, {
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
          return f.useEffect(() => {
            "mounted" === d ? (a.current = s.current ?? ct(n.current), s.current = void 0) : a.current = "none"
          }, [d]), (0, ze.N)(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = a.current,
                i = ct(t);
              e ? (s.current = i, l("MOUNT")) : l("none" === i || "none" === t?.display ? "UNMOUNT" : r && n !== i ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, l]), (0, ze.N)(() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                s = a => {
                  const s = ct(n.current).includes(CSS.escape(a.animationName));
                  if (a.target === t && s && (l("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    })
                  }
                },
                i = e => {
                  e.target === t && (a.current = ct(n.current))
                };
              return t.addEventListener("animationstart", i), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
                r.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
              }
            }
            l("ANIMATION_END")
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(d),
            ref: f.useCallback(e => {
              if (e) {
                const t = getComputedStyle(e);
                n.current = t, s.current = ct(t)
              } else n.current = null;
              r(e)
            }, [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : f.Children.only(r), a = function(...e) {
          const t = f.useRef(e);
          return t.current = e, f.useCallback(e => {
            const r = t.current;
            let n = !1;
            const o = r.map(t => {
              const r = ut(t, e);
              return n || "function" != typeof r || (n = !0), r
            });
            if (n) return () => {
              for (let e = 0; e < o.length; e++) {
                const t = o[e];
                "function" == typeof t ? t() : ut(r[e], null)
              }
            }
          }, [])
        }(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? f.cloneElement(o, {
          ref: a
        }) : null
      };

      function ut(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function ct(e) {
        return e?.animationName || "none"
      }
      lt.displayName = "Presence";
      var ft = r(17172),
        pt = r(17038),
        vt = r(32637),
        [yt, mt] = (0, we.A)("Tooltip", [He]),
        bt = He(),
        ht = "TooltipProvider",
        gt = 700,
        wt = "tooltip.open",
        [Ct, xt] = yt(ht),
        _t = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = gt,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = f.useRef(!0), i = f.useRef(!1), d = f.useRef(0);
          return f.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, u.jsx)(Ct, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: f.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), s.current = !1)
            }, [n]),
            onClose: f.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: f.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      _t.displayName = ht;
      var jt = "Tooltip",
        [Ot, Pt] = yt(jt),
        Nt = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = xt(jt, e.__scopeTooltip), l = bt(t), [c, p] = f.useState(null), v = (0, ke.B)(), y = f.useRef(0), m = s ?? d.disableHoverableContent, b = i ?? d.delayDuration, h = f.useRef(!1), [g, w] = (0, pt.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(wt))) : d.onClose(), a?.(e)
            },
            caller: jt
          }), C = f.useMemo(() => g ? h.current ? "delayed-open" : "instant-open" : "closed", [g]), x = f.useCallback(() => {
            window.clearTimeout(y.current), y.current = 0, h.current = !1, w(!0)
          }, [w]), _ = f.useCallback(() => {
            window.clearTimeout(y.current), y.current = 0, w(!1)
          }, [w]), j = f.useCallback(() => {
            window.clearTimeout(y.current), y.current = window.setTimeout(() => {
              h.current = !0, w(!0), y.current = 0
            }, b)
          }, [b, w]);
          return f.useEffect(() => () => {
            y.current && (window.clearTimeout(y.current), y.current = 0)
          }, []), (0, u.jsx)(nt, {
            ...l,
            children: (0, u.jsx)(Ot, {
              scope: t,
              contentId: v,
              open: g,
              stateAttribute: C,
              trigger: c,
              onTriggerChange: p,
              onTriggerEnter: f.useCallback(() => {
                d.isOpenDelayedRef.current ? j() : x()
              }, [d.isOpenDelayedRef, j, x]),
              onTriggerLeave: f.useCallback(() => {
                m ? _() : (window.clearTimeout(y.current), y.current = 0)
              }, [_, m]),
              onOpen: x,
              onClose: _,
              disableHoverableContent: m,
              children: r
            })
          })
        };
      Nt.displayName = jt;
      var Dt = "TooltipTrigger",
        Rt = f.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Pt(Dt, r), a = xt(Dt, r), s = bt(r), i = f.useRef(null), d = (0, ge.s)(t, i, o.onTriggerChange), l = f.useRef(!1), c = f.useRef(!1), p = f.useCallback(() => l.current = !1, []);
          return f.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), (0, u.jsx)(ot, {
            asChild: !0,
            ...s,
            children: (0, u.jsx)(Ce.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, he.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, he.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, he.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", p, {
                  once: !0
                })
              }),
              onFocus: (0, he.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, he.mK)(e.onBlur, o.onClose),
              onClick: (0, he.mK)(e.onClick, o.onClose)
            })
          })
        });
      Rt.displayName = Dt;
      var St = "TooltipPortal",
        [Et, kt] = yt(St, {
          forceMount: void 0
        }),
        It = "TooltipContent",
        Tt = f.forwardRef((e, t) => {
          const r = kt(It, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = Pt(It, e.__scopeTooltip);
          return (0, u.jsx)(lt, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, u.jsx)(At, {
              side: o,
              ...a,
              ref: t
            }) : (0, u.jsx)(Lt, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        Lt = f.forwardRef((e, t) => {
          const r = Pt(It, e.__scopeTooltip),
            n = xt(It, e.__scopeTooltip),
            o = f.useRef(null),
            a = (0, ge.s)(t, o),
            [s, i] = f.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: p
            } = n,
            v = f.useCallback(() => {
              i(null), p(!1)
            }, [p]),
            y = f.useCallback((e, t) => {
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
          return f.useEffect(() => () => v(), [v]), f.useEffect(() => {
            if (d && c) {
              const e = e => y(e, c),
                t = e => y(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, y, v]), f.useEffect(() => {
            if (s) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = d?.contains(t) || c?.contains(t),
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
                n ? v() : o && (v(), l())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, c, s, l, v]), (0, u.jsx)(At, {
            ...e,
            ref: a
          })
        }),
        [Vt, zt] = yt(jt, {
          isInside: !1
        }),
        Mt = (0, ft.Dc)("TooltipContent"),
        At = f.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = Pt(It, r), l = bt(r), {
            onClose: c
          } = d;
          return f.useEffect(() => (document.addEventListener(wt, c), () => document.removeEventListener(wt, c)), [c]), f.useEffect(() => {
            if (d.trigger) {
              const e = e => {
                e.target instanceof Node && e.target.contains(d.trigger) && c()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, c]), (0, u.jsx)(Oe, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, u.jsxs)(at, {
              "data-state": d.stateAttribute,
              ...l,
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
              children: [(0, u.jsx)(Mt, {
                children: n
              }), (0, u.jsx)(Vt, {
                scope: r,
                isInside: !0,
                children: (0, u.jsx)(vt.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Tt.displayName = It;
      var Ft = "TooltipArrow",
        Ht = f.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = bt(r);
          return zt(Ft, r).isInside ? null : (0, u.jsx)(st, {
            ...o,
            ...n,
            ref: t
          })
        });
      Ht.displayName = Ft;
      var qt = _t,
        Bt = Nt,
        Xt = Rt,
        Gt = Tt,
        Kt = Ht;
      const Zt = (0, f.createContext)(null),
        Ut = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, s] = (0, U.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, u.jsx)(qt, {
            delayDuration: t,
            children: (0, u.jsx)(Zt.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, u.jsx)(Bt, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        Wt = (0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, u.jsx)(Xt, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Yt = (0, f.forwardRef)(({
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
            isOpen: l
          } = function() {
            const e = (0, f.useContext)(Zt);
            if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
            return e
          }(), c = (0, U.jt)(), p = (0, be.animated)(Gt), v = (0, be.useTransition)(l, {
            delay: l ? 0 : 200,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            config: be.config.stiff,
            immediate: c
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
          return v(e => (0, u.jsx)(p, {
            ...y,
            style: e,
            ref: d
          }))
        }),
        Qt = (0, f.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, x.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, u.jsx)(Kt, {
            ...r,
            ref: t
          })
        });
      var $t = r(81471),
        Jt = r(99136),
        er = r(52184);

      function tr(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, we.A)(t),
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
            } = e, n = f.useRef(null), a = f.useRef(new Map).current;
            return (0, u.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: n,
              children: r
            })
          };
        s.displayName = t;
        const i = e + "CollectionSlot",
          d = (0, ft.TL)(i),
          l = f.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = a(i, r), s = (0, ge.s)(t, o.collectionRef);
            return (0, u.jsx)(d, {
              ref: s,
              children: n
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          p = "data-radix-collection-item",
          v = (0, ft.TL)(c),
          y = f.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = f.useRef(null), i = (0, ge.s)(t, s), d = a(c, r);
            return f.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              d.itemMap.delete(s)
            })), (0, u.jsx)(v, {
              [p]: "",
              ref: i,
              children: n
            })
          });
        return y.displayName = c, [{
          Provider: s,
          Slot: l,
          ItemSlot: y
        }, function(t) {
          const r = a(e + "CollectionConsumer", t);
          return f.useCallback(() => {
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
        [lr, ur] = (0, we.A)(ar, [dr]),
        [cr, fr] = lr(ar),
        pr = f.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: a = 1,
            orientation: s = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: d = 0,
            defaultValue: l = [n],
            value: c,
            onValueChange: p = () => {},
            onValueCommit: v = () => {},
            inverted: y = !1,
            form: m,
            ...b
          } = e, h = f.useRef(new Set), g = f.useRef(0), w = f.useRef(!1), C = "horizontal" === s ? mr : br, [x, _] = f.useState(null), j = (0, ge.s)(t, _), [O = [], P] = (0, pt.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...h.current];
              t[g.current]?.focus({
                preventScroll: !0,
                focusVisible: w.current
              }), w.current = !1, p(e)
            }
          }), N = f.useRef(O), D = f.useRef(O);

          function R(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = Lr(a),
              i = Vr(Math.round((e - n) / a) * a + n, s),
              l = (0, $t.q)(i, [n, o]);
            P((e = []) => {
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
          return f.useEffect(() => {
            const e = m ? x?.ownerDocument.getElementById(m) : x?.closest("form");
            if (e instanceof HTMLFormElement) {
              const t = () => P(D.current);
              return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
          }, [x, m, P]), (0, u.jsx)(cr, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: g,
            thumbs: h.current,
            values: O,
            orientation: s,
            form: m,
            children: (0, u.jsx)(sr.Provider, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(sr.Slot, {
                scope: e.__scopeSlider,
                children: (0, u.jsx)(C, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...b,
                  ref: j,
                  onPointerDown: (0, he.mK)(b.onPointerDown, () => {
                    i || (N.current = O, w.current = !1)
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
                    }(O, e);
                    R(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    R(e, g.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = N.current[g.current];
                    O[g.current] !== e && v(O)
                  },
                  onHomeKeyDown: () => {
                    i || (w.current = !0, R(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (w.current = !0, R(o, O.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      w.current = !0;
                      const r = rr.includes(e.key) || e.shiftKey && nr.includes(e.key) ? 10 : 1,
                        o = g.current,
                        s = function(e, {
                          min: t,
                          step: r,
                          direction: n,
                          multiplier: o
                        }) {
                          const a = Lr(r),
                            s = (e - t) / r,
                            i = Math.round(s);
                          let d;
                          return d = Vr(i * r + t, a) === Vr(e, a) ? i + o * n : n > 0 ? Math.ceil(s) : Math.floor(s), Vr(d * r + t, a)
                        }(O[o], {
                          min: n,
                          step: a,
                          direction: t,
                          multiplier: r
                        });
                      R(s, o, {
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
      }), mr = f.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: a,
          onSlideStart: s,
          onSlideMove: i,
          onSlideEnd: d,
          onStepKeyDown: l,
          ...c
        } = e, [p, v] = f.useState(null), y = (0, ge.s)(t, v), m = f.useRef(void 0), b = (0, Jt.jH)(o), h = "ltr" === b, g = h && !a || !h && a;

        function w(e) {
          const t = m.current || p.getBoundingClientRect(),
            o = Tr([0, t.width], g ? [r, n] : [n, r]);
          return m.current = t, o(e - t.left)
        }
        return (0, u.jsx)(vr, {
          scope: e.__scopeSlider,
          startEdge: g ? "left" : "right",
          endEdge: g ? "right" : "left",
          direction: g ? 1 : -1,
          size: "width",
          children: (0, u.jsx)(hr, {
            dir: b,
            "data-orientation": "horizontal",
            ...c,
            ref: y,
            style: {
              ...c.style,
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
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), br = f.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = f.useRef(null), p = (0, ge.s)(t, c), v = f.useRef(void 0), y = !o;

        function m(e) {
          const t = v.current || c.current.getBoundingClientRect(),
            o = Tr([0, t.height], y ? [n, r] : [r, n]);
          return v.current = t, o(e - t.top)
        }
        return (0, u.jsx)(vr, {
          scope: e.__scopeSlider,
          startEdge: y ? "bottom" : "top",
          endEdge: y ? "top" : "bottom",
          size: "height",
          direction: y ? 1 : -1,
          children: (0, u.jsx)(hr, {
            "data-orientation": "vertical",
            ...l,
            ref: p,
            style: {
              ...l.style,
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
      }), hr = f.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = fr(ar, r);
        return (0, u.jsx)(Ce.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, he.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : rr.concat(nr).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, he.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : n(e)
          }),
          onPointerMove: (0, he.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, he.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), gr = "SliderTrack", wr = f.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = fr(gr, r);
        return (0, u.jsx)(Ce.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      wr.displayName = gr;
      var Cr = "SliderRange",
        xr = f.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = fr(Cr, r), a = yr(Cr, r), s = f.useRef(null), i = (0, ge.s)(t, s), d = o.values.length, l = o.values.map(e => Ir(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, p = 100 - Math.max(...l);
          return (0, u.jsx)(Ce.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: i,
            style: {
              ...e.style,
              [a.startEdge]: c + "%",
              [a.endEdge]: p + "%"
            }
          })
        });
      xr.displayName = Cr;
      var _r = "SliderThumb",
        [jr, Or] = lr(_r),
        Pr = "SliderThumbProvider";

      function Nr(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, a = fr(Pr, t), s = ir(t), [i, d] = f.useState(null), l = f.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, Me.X)(i), p = !i || !!a.form || !!i.closest("form"), v = a.values[l], y = r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), m = void 0 === v ? 0 : Ir(v, a.min, a.max);
        f.useEffect(() => {
          if (i) return a.thumbs.add(i), () => {
            a.thumbs.delete(i)
          }
        }, [i, a.thumbs]);
        const b = {
          value: v,
          name: y,
          form: a.form,
          isFormControl: p,
          index: l,
          thumb: i,
          onThumbChange: d,
          percent: m,
          size: c
        };
        return (0, u.jsx)(jr, {
          scope: t,
          ...b,
          children: zr(o) ? o(b) : n
        })
      }
      Nr.displayName = Pr;
      var Dr = "SliderThumbTrigger",
        Rr = f.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = fr(Dr, r), a = yr(Dr, r), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = Or(Dr, r), f = (0, ge.s)(t, c), p = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(s, o.values.length), v = l?.[a.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - Tr([0, 50], [0, n])(t) * r) * r
          }(v, d, a.direction) : 0;
          return (0, u.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${y}px)`
            },
            children: (0, u.jsx)(sr.ItemSlot, {
              scope: r,
              children: (0, u.jsx)(Ce.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || p,
                "aria-valuemin": o.min,
                "aria-valuenow": i,
                "aria-valuemax": o.max,
                "aria-orientation": o.orientation,
                "data-orientation": o.orientation,
                "data-disabled": o.disabled ? "" : void 0,
                tabIndex: o.disabled ? void 0 : 0,
                ...n,
                ref: f,
                style: void 0 === i ? {
                  display: "none"
                } : e.style,
                onFocus: (0, he.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        });
      Rr.displayName = Dr;
      var Sr = f.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          name: n,
          ...o
        } = e;
        return (0, u.jsx)(Nr, {
          __scopeSlider: r,
          name: n,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: n
          }) => (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Rr, {
              ...o,
              ref: t,
              __scopeSlider: r
            }), n ? (0, u.jsx)(kr, {
              __scopeSlider: r
            }, e) : null]
          })
        })
      });
      Sr.displayName = _r;
      var Er = "SliderBubbleInput",
        kr = f.forwardRef(({
          __scopeSlider: e,
          ...t
        }, r) => {
          const {
            value: n,
            name: o,
            form: a
          } = Or(Er, e), s = f.useRef(null), i = (0, ge.s)(s, r), d = (0, er.Z)(n);
          return f.useEffect(() => {
            const e = s.current;
            if (!e) return;
            const t = window.HTMLInputElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (d !== n && r) {
              const t = new Event("input", {
                bubbles: !0
              });
              r.call(e, n), e.dispatchEvent(t)
            }
          }, [d, n]), (0, u.jsx)(Ce.sG.input, {
            style: {
              display: "none"
            },
            name: o,
            form: a,
            ...t,
            ref: i,
            defaultValue: n
          })
        });

      function Ir(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, $t.q)(n, [0, 100])
      }

      function Tr(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Lr(e) {
        if (!Number.isFinite(e)) return 0;
        const t = e.toString();
        if (t.includes("e")) {
          const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
          return Math.max(0, n.length - o)
        }
        const r = t.split(".")[1];
        return r ? r.length : 0
      }

      function Vr(e, t) {
        const r = Math.pow(10, t);
        return Math.round(e * r) / r
      }

      function zr(e) {
        return "function" == typeof e
      }
      kr.displayName = Er;
      var Mr = "focusScope.autoFocusOnMount",
        Ar = "focusScope.autoFocusOnUnmount",
        Fr = {
          bubbles: !1,
          cancelable: !0
        },
        Hr = f.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = f.useState(null), l = (0, xe.c)(o), c = (0, xe.c)(a), p = f.useRef(null), v = (0, ge.s)(t, d), y = f.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          f.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (y.paused || !i) return;
                  const t = e.target;
                  i.contains(t) ? p.current = t : Gr(p.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (y.paused || !i) return;
                  const t = e.relatedTarget;
                  null !== t && (i.contains(t) || Gr(p.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Gr(i)
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
          }, [n, i, y.paused]), f.useEffect(() => {
            if (i) {
              Kr.add(y);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(Mr, Fr);
                i.addEventListener(Mr, l), i.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Gr(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(qr(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Gr(i))
              }
              return () => {
                i.removeEventListener(Mr, l), setTimeout(() => {
                  const t = new CustomEvent(Ar, Fr);
                  i.addEventListener(Ar, c), i.dispatchEvent(t), t.defaultPrevented || Gr(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(Ar, c), Kr.remove(y)
                }, 0)
              }
            }
          }, [i, l, c, y]);
          const m = f.useCallback(e => {
            if (!r && !n) return;
            if (y.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, a] = function(e) {
                  const t = qr(e);
                  return [Br(t, e), Br(t.reverse(), e)]
                }(t);
              n && a ? e.shiftKey || o !== a ? e.shiftKey && o === n && (e.preventDefault(), r && Gr(a, {
                select: !0
              })) : (e.preventDefault(), r && Gr(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, y.paused]);
          return (0, u.jsx)(Ce.sG.div, {
            tabIndex: -1,
            ...s,
            ref: v,
            onKeyDown: m
          })
        });

      function qr(e) {
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

      function Br(e, t) {
        const r = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const n of e)
          if (!(r ? !n.checkVisibility({
              checkVisibilityCSS: !0
            }) : Xr(n, {
              upTo: t
            }))) return n
      }

      function Xr(e, {
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

      function Gr(e, {
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
      Hr.displayName = "FocusScope";
      var Kr = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Zr(e, t), e.unshift(t)
          },
          remove(t) {
            e = Zr(e, t), e[0]?.resume()
          }
        }
      }();

      function Zr(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var Ur = r(38174),
        Wr = r(38100),
        Yr = r(45787),
        Qr = "Dialog",
        [$r, Jr] = (0, we.A)(Qr),
        [en, tn] = $r(Qr),
        rn = "DialogTrigger",
        nn = f.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = tn(rn, r), a = (0, ge.s)(t, o.triggerRef);
          return (0, u.jsx)(Ce.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": xn(o.open),
            ...n,
            ref: a,
            onClick: (0, he.mK)(e.onClick, o.onOpenToggle)
          })
        });
      nn.displayName = rn;
      var [on, an] = $r("DialogPortal", {
        forceMount: void 0
      }), sn = "DialogOverlay", dn = f.forwardRef((e, t) => {
        const r = an(sn, e.__scopeDialog),
          {
            forceMount: n = r.forceMount,
            ...o
          } = e,
          a = tn(sn, e.__scopeDialog);
        return a.modal ? (0, u.jsx)(lt, {
          present: n || a.open,
          children: (0, u.jsx)(un, {
            ...o,
            ref: t
          })
        }) : null
      });
      dn.displayName = sn;
      var ln = (0, ft.TL)("DialogOverlay.RemoveScroll"),
        un = f.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = tn(sn, r), a = function() {
            const e = f.useContext(je),
              [t, r] = f.useState(null);
            return f.useEffect(() => {
              if (t) return e.dismissableSurfaces.add(t), () => {
                e.dismissableSurfaces.delete(t)
              }
            }, [t, e.dismissableSurfaces]), r
          }(), s = (0, ge.s)(t, a);
          return (0, u.jsx)(Wr.A, {
            as: ln,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, u.jsx)(Ce.sG.div, {
              "data-state": xn(o.open),
              ...n,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        cn = "DialogContent",
        fn = f.forwardRef((e, t) => {
          const r = an(cn, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = tn(cn, e.__scopeDialog);
          return (0, u.jsx)(lt, {
            present: n || a.open,
            children: a.modal ? (0, u.jsx)(pn, {
              ...o,
              ref: t
            }) : (0, u.jsx)(vn, {
              ...o,
              ref: t
            })
          })
        });
      fn.displayName = cn;
      var pn = f.forwardRef((e, t) => {
          const r = tn(cn, e.__scopeDialog),
            n = f.useRef(null),
            o = (0, ge.s)(t, r.contentRef, n);
          return f.useEffect(() => {
            const e = n.current;
            if (e) return (0, Yr.Eq)(e)
          }, []), (0, u.jsx)(yn, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: r.open,
            onCloseAutoFocus: (0, he.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, he.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, he.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        vn = f.forwardRef((e, t) => {
          const r = tn(cn, e.__scopeDialog),
            n = f.useRef(!1),
            o = f.useRef(!1);
          return (0, u.jsx)(yn, {
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
        yn = f.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...s
          } = e, i = tn(cn, r);
          return (0, Ur.Oh)(), (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)(Hr, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, u.jsx)(Oe, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": xn(i.open),
                ...s,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }),
        mn = "DialogTitle",
        bn = f.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = tn(mn, r);
          return (0, u.jsx)(Ce.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      bn.displayName = mn;
      var hn = "DialogDescription",
        gn = f.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = tn(hn, r);
          return (0, u.jsx)(Ce.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      gn.displayName = hn;
      var wn = "DialogClose",
        Cn = f.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = tn(wn, r);
          return (0, u.jsx)(Ce.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, he.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function xn(e) {
        return e ? "open" : "closed"
      }
      Cn.displayName = wn;
      const _n = (0, f.createContext)({
          triggerRef: (0, f.createRef)(),
          triggerBorderRef: (0, f.createRef)(),
          thumbnailRef: (0, f.createRef)(),
          openIconRef: (0, f.createRef)(),
          overlayRef: (0, f.createRef)(),
          contentRef: (0, f.createRef)(),
          containerRef: (0, f.createRef)(),
          imageRef: (0, f.createRef)(),
          placeholderRef: (0, f.createRef)(),
          zoomPanRef: (0, f.createRef)(),
          captionRef: (0, f.createRef)(),
          controlsRef: (0, f.createRef)(),
          closeRef: (0, f.createRef)(),
          zoomRef: (0, f.createRef)(),
          zoomInRef: (0, f.createRef)(),
          zoomSliderRef: (0, f.createRef)(),
          zoomOutRef: (0, f.createRef)(),
          resetRef: (0, f.createRef)(),
          downloadRef: (0, f.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        jn = (0, f.createContext)({
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
        On = ((0, f.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, de.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, f.useContext)(_n),
            d = (0, U.UP)(a, n),
            l = (0, x.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(pe.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, u.jsx)(nn, {
            ref: d,
            ...l,
            children: (0, u.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, u.jsx)(p.xV, {
                children: t
              })
            })
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, f.useContext)(_n), a = (0, U.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? p.DX : "img";
          return (0, u.jsx)(i, {
            ref: a,
            ...s
          })
        }), (0, f.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, f.useContext)(_n), o = (0, U.UP)(n, r), a = (0, x.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? p.DX : ce.h1;
          return (0, u.jsx)(s, {
            ref: o,
            ...a
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, f.useContext)(_n), o = (0, U.UP)(n, r), a = (0, x.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, u.jsx)(dn, {
            ref: o,
            ...a
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, f.useContext)(jn), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, f.useContext)(_n), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, f.useContext)(_n), [t, r] = (0, f.useState)(e.getCursor()), n = (0, f.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, f.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = [le.xW.tokens, le.xW.typography, le.xW.grid, ue("dark")].join(" ");
          const v = (0, U.UP)(a, n),
            y = (0, x.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, c.$)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, u.jsxs)(fn, {
            ref: v,
            ...y,
            children: [(0, u.jsx)(p.s6, {
              children: (0, u.jsx)(bn, {
                children: s
              })
            }), t]
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, f.useContext)(_n);
          (() => {
            const {
              contextSafe: e
            } = (0, Y.L)(), {
              toggleControls: t
            } = (0, f.useContext)(jn), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, f.useContext)(_n), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (W.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...ie
              }), W.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...ie
              }), W.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...ie
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || W.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...ie
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (W.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...ie
              }), W.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...ie
              }), W.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...ie
              })))
            }), u = (0, f.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, U.iQ)({
              ref: a,
              onFocusIn: u
            }), (0, Q.useGesture)({
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
          const a = (0, U.UP)(o, n),
            s = (0, x.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, u.jsx)("div", {
            ref: a,
            ...s,
            children: (0, u.jsxs)(On, {
              children: [(0, u.jsx)(Pn, {}), t]
            })
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, f.useContext)(_n), a = (0, U.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? p.DX : "div";
          return (0, u.jsx)(i, {
            ref: a,
            ...s
          })
        })),
        Pn = (0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, f.useContext)(_n), a = (0, U.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? p.DX : "img";
          return (0, u.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Nn = ((0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, f.useContext)(_n), a = (0, U.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? p.DX : "img";
          return (0, u.jsx)(i, {
            ref: a,
            ...s
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, f.useContext)(_n), a = (0, U.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? p.DX : "p";
          return (0, u.jsx)(gn, {
            asChild: !0,
            children: (0, u.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, f.useContext)(_n);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, f.useContext)(jn);
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
          const a = (0, U.UP)(o, n),
            s = (0, x.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? p.DX : "div";
          return (0, u.jsx)($.Hb, {
            children: (0, u.jsx)(i, {
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
          if (!r) return (0, u.jsx)(u.Fragment, {
            children: n
          });
          const a = (0, x.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, u.jsxs)(Ut, {
            delayDuration: 0,
            children: [(0, u.jsx)(Wt, {
              children: n
            }), (0, u.jsxs)(Yt, {
              ...a,
              children: [(0, u.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, u.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, u.jsx)(Qt, {})]
            })]
          })
        }),
        Dn = (0, f.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, x.v6)(e, {
            isInline: !0
          });
          return (0, u.jsx)(ye, {
            ref: t,
            ...r
          })
        });
      (0, f.forwardRef)(function({
        testId: e,
        asChild: t,
        showTooltip: r = !0,
        children: n,
        ...o
      }, a) {
        const s = (0, de.tz)(),
          {
            zoomRef: i
          } = (0, f.useContext)(_n),
          {
            canZoomIn: d,
            zoomIn: c,
            canZoomOut: v,
            zoomOut: y,
            zoomProgress: m,
            minZoomLevel: b,
            maxZoomLevel: h,
            zoomTo: g
          } = (() => {
            const {
              slide: e
            } = (0, f.useContext)(_n), {
              zoomIn: t,
              zoomOut: r,
              zoomTo: n
            } = (0, f.useContext)(jn), [o, a] = (0, f.useState)(!1), [s, i] = (0, f.useState)(!1), [d, l] = (0, f.useState)(0), [u, c] = (0, f.useState)(0), [p, v] = (0, f.useState)(0), y = (0, f.useCallback)(() => {
              a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), c(Math.ceil(100 * e.zoomLevels.min)), v(Math.ceil(100 * e.zoomLevels.max))
            }, []), m = (0, f.useCallback)(([e]) => {
              n(e / 100)
            }, [n]);
            return (0, f.useEffect)(() => (e.addEventListener("zoom", y), () => {
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
          w = (0, U.UP)(i, a),
          C = (0, x.v6)(o, {
            "data-testid": e,
            className: "foundry_1a74xwbp"
          }),
          _ = t ? p.DX : "div";
        return (0, u.jsxs)(_, {
          ref: w,
          ...C,
          children: [(0, u.jsx)(Nn, {
            side: "left",
            enabled: r,
            content: s.formatMessage(pe.ZoomInButtonLabel),
            metadata: s.formatMessage(pe.ZoomInButtonTooltip, {
              shortcut: (0, u.jsx)(Dn, {
                shortcut: "+"
              })
            }),
            children: (0, u.jsx)(l.K, {
              label: s.formatMessage(pe.ZoomInButtonLabel),
              size: "LG",
              icon: "Plus",
              appearance: "tertiary",
              className: se({
                position: "top"
              }),
              onPress: c,
              isDisabled: !d
            })
          }), (0, u.jsxs)(pr, {
            className: "foundry_1a74xwbt",
            max: h,
            min: b,
            step: 1,
            value: [m],
            orientation: "vertical",
            onValueChange: g,
            children: [(0, u.jsx)(wr, {
              className: "foundry_1a74xwbu",
              children: (0, u.jsx)(xr, {
                className: "foundry_1a74xwbv"
              })
            }), (0, u.jsx)(Nn, {
              side: "left",
              enabled: r,
              content: s.formatMessage(pe.ZoomSliderTooltip, {
                zoom: m.toFixed(0)
              }),
              children: (0, u.jsx)(Sr, {
                className: "foundry_1a74xwbw",
                children: (0, u.jsx)("span", {
                  className: "foundry_1a74xwbx"
                })
              })
            })]
          }), (0, u.jsx)(Nn, {
            side: "left",
            enabled: r,
            content: s.formatMessage(pe.ZoomOutButtonLabel),
            metadata: s.formatMessage(pe.ZoomOutButtonTooltip, {
              shortcut: (0, u.jsx)(Dn, {
                shortcut: "-"
              })
            }),
            children: (0, u.jsx)(l.K, {
              label: s.formatMessage(pe.ZoomOutButtonLabel),
              size: "LG",
              icon: "Minus",
              appearance: "tertiary",
              className: se({
                position: "bottom"
              }),
              onPress: y,
              isDisabled: !v
            })
          }), (0, u.jsx)(p.xV, {
            children: n
          })]
        })
      }), (0, f.forwardRef)(function({
        testId: e,
        asChild: t,
        showTooltip: r = !0,
        ...n
      }, o) {
        const a = (0, de.tz)(),
          {
            closeRef: s
          } = (0, f.useContext)(_n),
          i = (0, U.UP)(s, o),
          d = (0, x.v6)(n, {
            "data-testid": e,
            className: ae({
              styled: !t
            })
          }),
          c = t ? (0, u.jsx)(p.DX, {
            ref: i,
            ...d
          }) : (0, u.jsx)(l.K, {
            ref: i,
            ...d,
            size: "LG",
            icon: "X",
            appearance: "tertiary",
            label: a.formatMessage(pe.CloseButtonLabel)
          });
        return (0, u.jsx)(Nn, {
          side: "right",
          enabled: r,
          content: a.formatMessage(pe.CloseButtonLabel),
          metadata: a.formatMessage(pe.CloseButtonTooltip, {
            shortcut: (0, u.jsx)(Dn, {
              shortcut: "Esc"
            })
          }),
          children: (0, u.jsx)(Cn, {
            asChild: !0,
            children: c
          })
        })
      }), (0, f.forwardRef)(function({
        testId: e,
        showTooltip: t = !0,
        ...r
      }, n) {
        const o = (0, de.tz)(),
          a = (() => {
            const {
              slide: e,
              resetRef: t
            } = (0, f.useContext)(_n), {
              contextSafe: r
            } = (0, Y.L)(), {
              resetZoom: n
            } = (0, f.useContext)(jn), [o, a] = (0, f.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
              W.gsap.to([t.current], {
                scale: e ? 1 : .5,
                opacity: e ? 1 : 0,
                ...ie
              })
            }), i = (0, f.useCallback)(() => {
              const t = e.currZoomLevel !== e.zoomLevels.initial;
              a(t), s(t)
            }, [a]);
            return (0, f.useEffect)(() => (e.addEventListener("zoom", i), () => {
              e.removeEventListener("zoom", i)
            }), [i]), {
              isDisabled: !o,
              onPress: n,
              "aria-hidden": !o
            }
          })(),
          {
            resetRef: s
          } = (0, f.useContext)(_n),
          i = (0, U.UP)(s, n),
          d = (0, x.v6)(r, a, {
            "data-testid": e,
            className: "foundry_1a74xwbn foundry_1a74xwbj"
          });
        return (0, u.jsx)(Nn, {
          side: "left",
          enabled: t,
          content: o.formatMessage(pe.ResetZoomButtonLabel),
          metadata: o.formatMessage(pe.ResetZoomButtonTooltip, {
            shortcut: (0, u.jsx)(Dn, {
              shortcut: "R"
            })
          }),
          children: (0, u.jsx)(l.K, {
            ref: i,
            ...d,
            size: "LG",
            icon: "Undo",
            appearance: "tertiary",
            label: o.formatMessage(pe.ResetZoomButtonLabel)
          })
        })
      }), (0, f.forwardRef)(function({
        testId: e,
        showTooltip: t = !0,
        ...r
      }, n) {
        const o = (0, de.tz)(),
          {
            downloadRef: a,
            imageRef: s
          } = (0, f.useContext)(_n),
          i = (0, U.UP)(a, n),
          d = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbo foundry_1a74xwbj"
          });
        return (0, u.jsx)(Nn, {
          side: "left",
          enabled: t,
          content: o.formatMessage(pe.DownloadButtonTooltip),
          children: (0, u.jsx)(l.K, {
            ref: i,
            ...d,
            size: "LG",
            icon: "Download",
            appearance: "tertiary",
            label: o.formatMessage(pe.DownloadButtonTooltip),
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
      var Rn = r(98905);

      function Sn(e) {
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

      function En(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? En(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Sn(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : En(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function In(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Tn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ln = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kn(kn({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Tn(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return In(e.variantClassNames, e => In(e, e => e.split(" ")[0]))
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
      const Vn = (0, f.createContext)(null);

      function zn() {
        const e = (0, f.useContext)(Vn);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Mn = (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        descriptionId: n = "",
        errorId: o = "",
        status: a = "neutral",
        ...s
      }, i) => {
        const d = (0, x.v6)({
            className: Ln({
              status: a
            }),
            "data-testid": t
          }, s),
          l = r ? p.DX : "div";
        return (0, u.jsx)(Vn.Provider, {
          value: {
            descriptionId: n,
            errorId: o,
            status: a,
            ...s
          },
          children: (0, u.jsx)(l, {
            ...d,
            ref: i,
            children: e
          })
        })
      });
      (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        ...r
      }, n) => {
        const {
          status: o
        } = zn(), a = (0, x.v6)({
          size: "SM",
          className: "foundry_i6k0ds4",
          "data-testid": e
        }, r), s = {
          success: ce.Jl,
          invalid: ce.X,
          neutral: ce.lW
        }, i = t ? p.DX : s[o];
        return (0, u.jsx)(i, {
          ref: n,
          ...a
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          errorId: s
        } = zn(), i = (0, x.v6)({
          "data-testid": t,
          id: s || a
        }, n), d = r ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var An = "ScrollArea",
        [Fn, Hn] = (0, we.A)(An),
        [qn, Bn] = Fn(An),
        Xn = f.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = f.useState(null), [l, c] = f.useState(null), [p, v] = f.useState(null), [y, m] = f.useState(null), [b, h] = f.useState(null), [g, w] = f.useState(0), [C, x] = f.useState(0), [_, j] = f.useState(!1), [O, P] = f.useState(!1), N = (0, ge.s)(t, d), D = (0, Jt.jH)(o);
          return (0, u.jsx)(qn, {
            scope: r,
            type: n,
            dir: D,
            scrollHideDelay: a,
            scrollArea: i,
            viewport: l,
            onViewportChange: c,
            content: p,
            onContentChange: v,
            scrollbarX: y,
            onScrollbarXChange: m,
            scrollbarXEnabled: _,
            onScrollbarXEnabledChange: j,
            scrollbarY: b,
            onScrollbarYChange: h,
            scrollbarYEnabled: O,
            onScrollbarYEnabledChange: P,
            onCornerWidthChange: w,
            onCornerHeightChange: x,
            children: (0, u.jsx)(Ce.sG.div, {
              dir: D,
              ...s,
              ref: N,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": g + "px",
                "--radix-scroll-area-corner-height": C + "px",
                ...e.style
              }
            })
          })
        });
      Xn.displayName = An;
      var Gn = "ScrollAreaViewport",
        Kn = f.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = Bn(Gn, r), i = f.useRef(null), d = (0, ge.s)(t, i, s.onViewportChange);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Zn, {
              nonce: o
            }), (0, u.jsx)(Ce.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, u.jsx)("div", {
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
      Kn.displayName = Gn;
      var Zn = f.memo(({
          nonce: e
        }) => (0, u.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, t) => e.nonce === t.nonce),
        Un = "ScrollAreaScrollbar",
        Wn = f.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Bn(Un, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return f.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, u.jsx)(Yn, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, u.jsx)(Qn, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, u.jsx)($n, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, u.jsx)(Jn, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        });
      Wn.displayName = Un;
      var Yn = f.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Bn(Un, e.__scopeScrollArea), [a, s] = f.useState(!1);
          return f.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, u.jsx)(lt, {
            present: r || a,
            children: (0, u.jsx)($n, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Qn = f.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Bn(Un, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = go(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, f.useReducer((e, t) => l[e][t] ?? e, "hidden"));
          var l;
          return f.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), f.useEffect(() => {
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
          }, [o.viewport, a, d, s]), (0, u.jsx)(lt, {
            present: r || "hidden" !== i,
            children: (0, u.jsx)(Jn, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, he.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, he.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        $n = f.forwardRef((e, t) => {
          const r = Bn(Un, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = f.useState(!1),
            i = "horizontal" === e.orientation,
            d = go(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return wo(r.viewport, d), wo(r.content, d), (0, u.jsx)(lt, {
            present: n || a,
            children: (0, u.jsx)(Jn, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Jn = f.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Bn(Un, e.__scopeScrollArea), a = f.useRef(null), s = f.useRef(0), [i, d] = f.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = po(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function p(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = vo(r),
                a = t || o / 2,
                s = o - a,
                i = r.scrollbar.paddingStart + a,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                l = r.content - r.viewport;
              return mo([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, t)
          }
          return "horizontal" === r ? (0, u.jsx)(eo, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = yo(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = p(e, o.dir))
            }
          }) : "vertical" === r ? (0, u.jsx)(to, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = yo(o.viewport.scrollTop, i);
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
        eo = f.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Bn(Un, e.__scopeScrollArea), [s, i] = f.useState(), d = f.useRef(null), l = (0, ge.s)(t, d, a.onScrollbarXChange);
          return f.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, u.jsx)(oo, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": vo(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), bo(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: fo(s.paddingLeft),
                  paddingEnd: fo(s.paddingRight)
                }
              })
            }
          })
        }),
        to = f.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Bn(Un, e.__scopeScrollArea), [s, i] = f.useState(), d = f.useRef(null), l = (0, ge.s)(t, d, a.onScrollbarYChange);
          return f.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, u.jsx)(oo, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": vo(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), bo(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: fo(s.paddingTop),
                  paddingEnd: fo(s.paddingBottom)
                }
              })
            }
          })
        }),
        [ro, no] = Fn(Un),
        oo = f.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: s,
            onThumbPointerDown: i,
            onThumbPositionChange: d,
            onDragScroll: l,
            onWheelScroll: c,
            onResize: p,
            ...v
          } = e, y = Bn(Un, r), [m, b] = f.useState(null), h = (0, ge.s)(t, b), g = f.useRef(null), w = f.useRef(""), C = y.viewport, x = n.content - n.viewport, _ = (0, xe.c)(c), j = (0, xe.c)(d), O = go(p, 10);

          function P(e) {
            if (g.current) {
              const t = e.clientX - g.current.left,
                r = e.clientY - g.current.top;
              l({
                x: t,
                y: r
              })
            }
          }
          return f.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = m?.contains(t);
              r && _(e, x)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [C, m, x, _]), f.useEffect(j, [n, j]), wo(m, O), wo(y.content, O), (0, u.jsx)(ro, {
            scope: r,
            scrollbar: m,
            hasThumb: o,
            onThumbChange: (0, xe.c)(a),
            onThumbPointerUp: (0, xe.c)(s),
            onThumbPositionChange: j,
            onThumbPointerDown: (0, xe.c)(i),
            children: (0, u.jsx)(Ce.sG.div, {
              ...v,
              ref: h,
              style: {
                position: "absolute",
                ...v.style
              },
              onPointerDown: (0, he.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), g.current = m.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", y.viewport && (y.viewport.style.scrollBehavior = "auto"), P(e))
              }),
              onPointerMove: (0, he.mK)(e.onPointerMove, P),
              onPointerUp: (0, he.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = w.current, y.viewport && (y.viewport.style.scrollBehavior = ""), g.current = null
              })
            })
          })
        }),
        ao = "ScrollAreaThumb",
        so = f.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = no(ao, e.__scopeScrollArea);
          return (0, u.jsx)(lt, {
            present: r || o.hasThumb,
            children: (0, u.jsx)(io, {
              ref: t,
              ...n
            })
          })
        }),
        io = f.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = Bn(ao, r), s = no(ao, r), {
            onThumbPositionChange: i
          } = s, d = (0, ge.s)(t, s.onThumbChange), l = f.useRef(void 0), c = go(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return f.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = ho(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, u.jsx)(Ce.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, he.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, he.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      so.displayName = ao;
      var lo = "ScrollAreaCorner",
        uo = f.forwardRef((e, t) => {
          const r = Bn(lo, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, u.jsx)(co, {
            ...e,
            ref: t
          }) : null
        });
      uo.displayName = lo;
      var co = f.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Bn(lo, r), [a, s] = f.useState(0), [i, d] = f.useState(0), l = Boolean(a && i), {
          onCornerWidthChange: c,
          onCornerHeightChange: p
        } = o;
        return wo(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), wo(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), f.useEffect(() => () => {
          c(0), p(0)
        }, [c, p]), l ? (0, u.jsx)(Ce.sG.div, {
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

      function fo(e) {
        return e ? parseInt(e, 10) : 0
      }

      function po(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function vo(e) {
        const t = po(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function yo(e, t, r = "ltr") {
        const n = vo(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          d = "ltr" === r ? [0, s] : [-1 * s, 0],
          l = (0, $t.q)(e, d);
        return mo([0, s], [0, i])(l)
      }

      function mo(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function bo(e, t) {
        return e > 0 && e < t
      }
      var ho = (e, t = () => {}) => {
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

      function go(e, t) {
        const r = (0, xe.c)(e),
          n = f.useRef(0);
        return f.useEffect(() => () => window.clearTimeout(n.current), []), f.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function wo(e, t) {
        const r = (0, xe.c)(t);
        (0, ze.N)(() => {
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
      var Co = Xn,
        xo = Kn,
        _o = Wn,
        jo = so,
        Oo = uo,
        Po = [" ", "Enter", "ArrowUp", "ArrowDown"],
        No = [" ", "Enter"],
        Do = "Select",
        [Ro, So, Eo] = tr(Do),
        [ko, Io] = (0, we.A)(Do, [Eo, He]),
        To = He(),
        [Lo, Vo] = ko(Do),
        [zo, Mo] = ko(Do);

      function Ao(e) {
        const {
          __scopeSelect: t,
          children: r,
          open: n,
          defaultOpen: o,
          onOpenChange: a,
          value: s,
          defaultValue: i,
          onValueChange: d,
          dir: l,
          name: c,
          autoComplete: p,
          disabled: v,
          required: y,
          form: m,
          internal_do_not_use_render: b
        } = e, h = To(t), [g, w] = f.useState(null), [C, x] = f.useState(null), [_, j] = f.useState(!1), O = (0, Jt.jH)(l), [P, N] = (0, pt.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: a,
          caller: Do
        }), [D, R] = (0, pt.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: Do
        }), S = f.useRef(null), E = f.useRef(D);
        f.useEffect(() => {
          const e = m ? g?.ownerDocument.getElementById(m) : g?.form;
          if (e instanceof HTMLFormElement) {
            const t = () => R(E.current);
            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
          }
        }, [m, g, R]);
        const k = !g || !!m || !!g.closest("form"),
          [I, T] = f.useState(new Set),
          L = (0, ke.B)(),
          V = Array.from(I).map(e => e.props.value).join(";"),
          z = f.useCallback(e => {
            T(t => new Set(t).add(e))
          }, []),
          M = f.useCallback(e => {
            T(t => {
              const r = new Set(t);
              return r.delete(e), r
            })
          }, []),
          A = {
            required: y,
            trigger: g,
            onTriggerChange: w,
            valueNode: C,
            onValueNodeChange: x,
            valueNodeHasChildren: _,
            onValueNodeHasChildrenChange: j,
            contentId: L,
            value: D,
            onValueChange: R,
            open: P,
            onOpenChange: N,
            dir: O,
            triggerPointerDownPosRef: S,
            disabled: v,
            name: c,
            autoComplete: p,
            form: m,
            nativeOptions: I,
            nativeSelectKey: V,
            isFormControl: k
          };
        return (0, u.jsx)(nt, {
          ...h,
          children: (0, u.jsx)(Lo, {
            scope: t,
            ...A,
            children: (0, u.jsx)(Ro.Provider, {
              scope: t,
              children: (0, u.jsx)(zo, {
                scope: t,
                onNativeOptionAdd: z,
                onNativeOptionRemove: M,
                children: Na(b) ? b(A) : r
              })
            })
          })
        })
      }
      Ao.displayName = "SelectProvider";
      var Fo = e => {
        const {
          __scopeSelect: t,
          children: r,
          ...n
        } = e;
        return (0, u.jsx)(Ao, {
          __scopeSelect: t,
          ...n,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, u.jsxs)(u.Fragment, {
            children: [r, e ? (0, u.jsx)(Pa, {
              __scopeSelect: t
            }) : null]
          })
        })
      };
      Fo.displayName = Do;
      var Ho = "SelectTrigger",
        qo = f.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = To(r), s = Vo(Ho, r), i = s.disabled || n, d = (0, ge.s)(t, s.onTriggerChange), l = So(r), c = f.useRef("touch"), [p, v, y] = Ra(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Sa(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), m = e => {
            i || (s.onOpenChange(!0), y()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, u.jsx)(ot, {
            asChild: !0,
            ...a,
            children: (0, u.jsx)(Ce.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.open ? s.contentId : void 0,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": Da(s.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, he.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && m(e)
              }),
              onPointerDown: (0, he.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (m(e), e.preventDefault())
              }),
              onKeyDown: (0, he.mK)(o.onKeyDown, e => {
                const t = "" !== p.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || v(e.key), t && " " === e.key || Po.includes(e.key) && (m(), e.preventDefault())
              })
            })
          })
        });
      qo.displayName = Ho;
      var Bo = "SelectValue",
        Xo = f.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = Vo(Bo, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, p = (0, ge.s)(t, d.onValueNodeChange);
          (0, ze.N)(() => {
            l(c)
          }, [l, c]);
          const v = Da(d.value);
          return (0, u.jsx)(Ce.sG.span, {
            ...i,
            asChild: !v && i.asChild,
            ref: p,
            style: {
              pointerEvents: "none"
            },
            children: (0, u.jsx)(f.Fragment, {
              children: v ? s : a
            }, v ? "placeholder" : "value")
          })
        });
      Xo.displayName = Bo;
      var Go = f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, u.jsx)(Ce.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Go.displayName = "SelectIcon";
      var Ko = "SelectPortal",
        [Zo, Uo] = ko(Ko, {
          forceMount: void 0
        }),
        Wo = e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, u.jsx)(Zo, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, u.jsx)(dt, {
              asChild: !0,
              ...n
            })
          })
        };
      Wo.displayName = Ko;
      var Yo = "SelectContent",
        Qo = f.forwardRef((e, t) => {
          const r = Uo(Yo, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Vo(Yo, e.__scopeSelect),
            [s, i] = f.useState();
          return (0, ze.N)(() => {
            i(new DocumentFragment)
          }, []), (0, u.jsx)(lt, {
            present: n || a.open,
            children: ({
              present: e
            }) => e ? (0, u.jsx)(na, {
              ...o,
              ref: t
            }) : (0, u.jsx)($o, {
              ...o,
              fragment: s
            })
          })
        });
      Qo.displayName = Yo;
      var $o = f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          fragment: o
        } = e;
        return o ? it.createPortal((0, u.jsx)(ea, {
          scope: r,
          children: (0, u.jsx)(Ro.Slot, {
            scope: r,
            children: (0, u.jsx)("div", {
              ref: t,
              children: n
            })
          })
        }), o) : null
      });
      $o.displayName = "SelectContentFragment";
      var Jo = 10,
        [ea, ta] = ko(Yo),
        ra = (0, ft.TL)("SelectContent.RemoveScroll"),
        na = f.forwardRef((e, t) => {
          const {
            __scopeSelect: r
          } = e, {
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: p,
            collisionBoundary: v,
            collisionPadding: y,
            sticky: m,
            hideWhenDetached: b,
            avoidCollisions: h,
            ...g
          } = e, w = Vo(Yo, r), [C, x] = f.useState(null), [_, j] = f.useState(null), O = (0, ge.s)(t, x), [P, N] = f.useState(null), [D, R] = f.useState(null), S = So(r), [E, k] = f.useState(!1), I = f.useRef(!1);
          f.useEffect(() => {
            if (C) return (0, Yr.Eq)(C)
          }, [C]), (0, Ur.Oh)();
          const T = f.useCallback(e => {
              const [t, ...r] = S().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && _ && (_.scrollTop = 0), r === n && _ && (_.scrollTop = _.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [S, _]),
            L = f.useCallback(() => T([P, C]), [T, P, C]);
          f.useEffect(() => {
            E && L()
          }, [E, L]);
          const {
            onOpenChange: V,
            triggerPointerDownPosRef: z
          } = w;
          f.useEffect(() => {
            if (C) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (z.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (z.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(C) || V(!1), document.removeEventListener("pointermove", t), z.current = null
                };
              return null !== z.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [C, V, z]), f.useEffect(() => {
            const e = () => V(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [V]);
          const [M, A] = Ra(e => {
            const t = S().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Sa(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), F = f.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== w.value && w.value === t || n) && (N(e), n && (I.current = !0))
          }, [w.value]), H = f.useCallback(() => C?.focus(), [C]), q = f.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== w.value && w.value === t || n) && R(e)
          }, [w.value]), B = "popper" === n ? aa : oa, X = B === aa ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: p,
            collisionBoundary: v,
            collisionPadding: y,
            sticky: m,
            hideWhenDetached: b,
            avoidCollisions: h
          } : {};
          return (0, u.jsx)(ea, {
            scope: r,
            content: C,
            viewport: _,
            onViewportChange: j,
            itemRefCallback: F,
            selectedItem: P,
            onItemLeave: H,
            itemTextRefCallback: q,
            focusSelectedItem: L,
            selectedItemText: D,
            position: n,
            isPositioned: E,
            searchRef: M,
            children: (0, u.jsx)(Wr.A, {
              as: ra,
              allowPinchZoom: !0,
              children: (0, u.jsx)(Hr, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, he.mK)(o, e => {
                  w.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, u.jsx)(Oe, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => w.onOpenChange(!1),
                  children: (0, u.jsx)(B, {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...g,
                    ...X,
                    onPlaced: () => k(!0),
                    ref: O,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...g.style
                    },
                    onKeyDown: (0, he.mK)(g.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || A(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
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
      na.displayName = "SelectContentImpl";
      var oa = f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = Vo(Yo, r), s = ta(Yo, r), [i, d] = f.useState(null), [l, c] = f.useState(null), p = (0, ge.s)(t, c), v = So(r), y = f.useRef(!1), m = f.useRef(!0), {
          viewport: b,
          selectedItem: h,
          selectedItemText: g,
          focusSelectedItem: w
        } = s, C = f.useCallback(() => {
          if (a.trigger && a.valueNode && i && l && b && h && g) {
            const e = a.trigger.getBoundingClientRect(),
              t = l.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = g.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                s = e.left - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                u = window.innerWidth - Jo,
                c = (0, $t.q)(a, [Jo, Math.max(Jo, u - l)]);
              i.style.minWidth = d + "px", i.style.left = c + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                u = window.innerWidth - Jo,
                c = (0, $t.q)(a, [Jo, Math.max(Jo, u - l)]);
              i.style.minWidth = d + "px", i.style.right = c + "px"
            }
            const s = v(),
              d = window.innerHeight - 2 * Jo,
              u = b.scrollHeight,
              c = window.getComputedStyle(l),
              f = parseInt(c.borderTopWidth, 10),
              p = parseInt(c.paddingTop, 10),
              m = parseInt(c.borderBottomWidth, 10),
              w = f + p + u + parseInt(c.paddingBottom, 10) + m,
              C = Math.min(5 * h.offsetHeight, w),
              x = window.getComputedStyle(b),
              _ = parseInt(x.paddingTop, 10),
              j = parseInt(x.paddingBottom, 10),
              O = e.top + e.height / 2 - Jo,
              P = d - O,
              N = h.offsetHeight / 2,
              D = f + p + (h.offsetTop + N),
              R = w - D;
            if (D <= O) {
              const e = s.length > 0 && h === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - b.offsetTop - b.offsetHeight,
                r = D + Math.max(P, N + (e ? j : 0) + t + m);
              i.style.height = r + "px"
            } else {
              const e = s.length > 0 && h === s[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(O, f + b.offsetTop + (e ? _ : 0) + N) + R;
              i.style.height = t + "px", b.scrollTop = D - O + b.offsetTop
            }
            i.style.margin = `${Jo}px 0`, i.style.minHeight = C + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => y.current = !0)
          }
        }, [v, a.trigger, a.valueNode, i, l, b, h, g, a.dir, n]);
        (0, ze.N)(() => C(), [C]);
        const [x, _] = f.useState();
        (0, ze.N)(() => {
          l && _(window.getComputedStyle(l).zIndex)
        }, [l]);
        const j = f.useCallback(e => {
          e && !0 === m.current && (C(), w?.(), m.current = !1)
        }, [C, w]);
        return (0, u.jsx)(sa, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: j,
          children: (0, u.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: x
            },
            children: (0, u.jsx)(Ce.sG.div, {
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
      oa.displayName = "SelectItemAlignedPosition";
      var aa = f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Jo,
          ...a
        } = e, s = To(r);
        return (0, u.jsx)(at, {
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
      aa.displayName = "SelectPopperPosition";
      var [sa, ia] = ko(Yo, {}), da = "SelectViewport", la = f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = ta(da, r), s = ia(da, r), i = (0, ge.s)(t, a.onViewportChange), d = f.useRef(0);
        return (0, u.jsxs)(u.Fragment, {
          children: [(0, u.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, u.jsx)(Ro.Slot, {
            scope: r,
            children: (0, u.jsx)(Ce.sG.div, {
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
              onScroll: (0, he.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Jo,
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
      la.displayName = da;
      var ua = "SelectGroup",
        [ca, fa] = ko(ua);
      f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, ke.B)();
        return (0, u.jsx)(ca, {
          scope: r,
          id: o,
          children: (0, u.jsx)(Ce.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = ua;
      var pa = "SelectLabel";
      f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = fa(pa, r);
        return (0, u.jsx)(Ce.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = pa;
      var va = "SelectItem",
        [ya, ma] = ko(va),
        ba = f.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = Vo(va, r), d = ta(va, r), l = i.value === n, [c, p] = f.useState(a ?? ""), [v, y] = f.useState(!1), m = (0, xe.c)(e => d.itemRefCallback?.(e, n, o)), b = (0, ge.s)(t, m), h = (0, ke.B)(), g = f.useRef("touch"), w = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          return (0, u.jsx)(ya, {
            scope: r,
            value: n,
            disabled: o,
            textId: h,
            isSelected: l,
            onItemTextChange: f.useCallback(e => {
              p(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, u.jsx)(Ro.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, u.jsx)(Ce.sG.div, {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": l && v,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: b,
                onFocus: (0, he.mK)(s.onFocus, () => y(!0)),
                onBlur: (0, he.mK)(s.onBlur, () => y(!1)),
                onClick: (0, he.mK)(s.onClick, () => {
                  "mouse" !== g.current && w()
                }),
                onPointerUp: (0, he.mK)(s.onPointerUp, () => {
                  "mouse" === g.current && w()
                }),
                onPointerDown: (0, he.mK)(s.onPointerDown, e => {
                  g.current = e.pointerType
                }),
                onPointerMove: (0, he.mK)(s.onPointerMove, e => {
                  g.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === g.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, he.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, he.mK)(s.onKeyDown, e => {
                  o || e.target !== e.currentTarget || "" !== d.searchRef?.current && " " === e.key || (No.includes(e.key) && w(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      ba.displayName = va;
      var ha = "SelectItemText",
        ga = f.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = Vo(ha, r), i = ta(ha, r), d = ma(ha, r), l = Mo(ha, r), [c, p] = f.useState(null), v = (0, xe.c)(e => i.itemTextRefCallback?.(e, d.value, d.disabled)), y = (0, ge.s)(t, p, d.onItemTextChange, v), m = c?.textContent, b = f.useMemo(() => (0, u.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: m
          }, d.value), [d.disabled, d.value, m]), {
            onNativeOptionAdd: h,
            onNativeOptionRemove: g
          } = l;
          return (0, ze.N)(() => (h(b), () => g(b)), [h, g, b]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Ce.sG.span, {
              id: d.textId,
              ...a,
              ref: y
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !Da(s.value) ? it.createPortal(a.children, s.valueNode) : null]
          })
        });
      ga.displayName = ha;
      var wa = "SelectItemIndicator";
      f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return ma(wa, r).isSelected ? (0, u.jsx)(Ce.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = wa;
      var Ca = "SelectScrollUpButton";
      f.forwardRef((e, t) => {
        const r = ta(Ca, e.__scopeSelect),
          n = ia(Ca, e.__scopeSelect),
          [o, a] = f.useState(!1),
          s = (0, ge.s)(t, n.onScrollButtonChange);
        return (0, ze.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, u.jsx)(_a, {
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
      }).displayName = Ca;
      var xa = "SelectScrollDownButton";
      f.forwardRef((e, t) => {
        const r = ta(xa, e.__scopeSelect),
          n = ia(xa, e.__scopeSelect),
          [o, a] = f.useState(!1),
          s = (0, ge.s)(t, n.onScrollButtonChange);
        return (0, ze.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, u.jsx)(_a, {
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
      }).displayName = xa;
      var _a = f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = ta("SelectScrollButton", r), s = f.useRef(null), i = So(r), d = f.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return f.useEffect(() => () => d(), [d]), (0, ze.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, u.jsx)(Ce.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, he.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, he.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, he.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, u.jsx)(Ce.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var ja = "SelectArrow";
      f.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = To(r);
        return "popper" === ta(ja, r).position ? (0, u.jsx)(st, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = ja;
      var Oa = "SelectBubbleInput",
        Pa = f.forwardRef(({
          __scopeSelect: e,
          ...t
        }, r) => {
          const n = Vo(Oa, e),
            {
              value: o,
              onValueChange: a,
              required: s,
              disabled: i,
              name: d,
              autoComplete: l,
              form: c
            } = n,
            {
              nativeOptions: p,
              nativeSelectKey: v
            } = n,
            y = f.useRef(null),
            m = (0, ge.s)(r, y),
            b = o ?? "",
            h = (0, er.Z)(b),
            g = Array.from(p).some(e => "" === (e.props.value ?? ""));
          return f.useEffect(() => {
            const e = y.current;
            if (!e) return;
            const t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (h !== b && r) {
              const t = new Event("change", {
                bubbles: !0
              });
              r.call(e, b), e.dispatchEvent(t)
            }
          }, [h, b]), (0, u.jsxs)(Ce.sG.select, {
            "aria-hidden": !0,
            required: s,
            tabIndex: -1,
            name: d,
            autoComplete: l,
            disabled: i,
            form: c,
            onChange: e => a(e.target.value),
            ...t,
            style: {
              ...vt.Qg,
              ...t.style
            },
            ref: m,
            defaultValue: b,
            children: [Da(o) && !g ? (0, u.jsx)("option", {
              value: ""
            }) : null, Array.from(p)]
          }, v)
        });

      function Na(e) {
        return "function" == typeof e
      }

      function Da(e) {
        return "" === e || void 0 === e
      }

      function Ra(e) {
        const t = (0, xe.c)(e),
          r = f.useRef(""),
          n = f.useRef(0),
          o = f.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = f.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return f.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function Sa(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, t) => s[(i + t) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== r));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }

      function Ea(e) {
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

      function ka(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ia(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ka(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ea(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ka(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ta(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Pa.displayName = Oa;
      var La = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Va = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ia(Ia({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) La(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ta(e.variantClassNames, e => Ta(e, e => e.split(" ")[0]))
            }
          }, t
        },
        za = Va({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ma = Va({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Aa = Va({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fa = Va({
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
        Ha = Va({
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
        qa = Va({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ba = (0, f.createContext)(null);

      function Xa() {
        const e = (0, f.useContext)(Ba);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Ga = (0, f.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: a,
          onValueChange: s,
          name: i,
          value: d,
          defaultOpen: l,
          onOpenChange: c,
          isOpen: p,
          size: v = "MD",
          status: y = "neutral",
          ...m
        }, b) => {
          const h = (0, f.useRef)(null),
            g = (0, U.UP)(h, b),
            w = (0, f.useId)(),
            C = (0, f.useId)(),
            _ = (0, f.useId)(),
            j = (0, f.useId)(),
            O = (0, f.useId)(),
            P = (0, f.useId)(),
            N = (0, f.useRef)(null),
            D = (0, f.useRef)(null),
            R = (0, f.useRef)(null),
            [S = !1, E] = (0, U.ic)({
              prop: p,
              defaultProp: l,
              onChange: c
            }),
            k = (0, x.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, m);
          return (0, u.jsx)(Ba.Provider, {
            value: {
              labelId: w,
              errorId: C,
              descriptionId: _,
              triggerId: P,
              hintId: j,
              popoverId: O,
              labelRef: N,
              descriptionRef: D,
              hintRef: R,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: S,
              setIsOpen: E,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: y,
              size: v
            },
            children: (0, u.jsx)(Fo, {
              required: r,
              disabled: n,
              open: S,
              onOpenChange: () => E(!o && !S),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, u.jsx)("div", {
                ref: g,
                ...k,
                children: e
              })
            })
          })
        }),
        Ka = (0, f.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = Xa(), s = (0, x.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: za({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, u.jsx)(Qo, {
            ...s,
            ref: o,
            children: (0, u.jsx)(la, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Za = (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e
          }, t);
          return (0, u.jsx)(la, {
            ref: r,
            ...n
          })
        }),
        Ua = (0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, u.jsxs)(Co, {
            ...o,
            ref: n,
            children: [(0, u.jsx)(Za, {
              asChild: !0,
              children: (0, u.jsx)(xo, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, u.jsx)(_o, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, u.jsx)(jo, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Wa = (0, f.forwardRef)(({
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
            isDisabled: l,
            labelId: c,
            hintId: v,
            triggerId: y,
            popoverId: m,
            descriptionId: b,
            labelRef: h,
            descriptionRef: g,
            hintRef: w,
            isOpen: C,
            size: _
          } = Xa(), {
            isPressed: j,
            pressProps: O
          } = (0, Rn.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [P, N] = (0, f.useState)(!1), [D, R] = (0, f.useState)(!1);
          (0, f.useEffect)(() => {
            N(!!h.current || !!w.current), R(!!g.current)
          }, []);
          const S = (0, x.v6)({
              id: y,
              className: Ha({
                size: _,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!j,
                isDisabled: !!l
              }),
              "aria-labelledby": P ? (0, x.VW)(r, c, v) : r,
              "aria-describedby": D ? (0, x.VW)(n, b) : n,
              "aria-controls": m,
              "aria-invalid": "invalid" === d,
              "data-state": C ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!j
            }, (0, x.cJ)(O, "onKeyDown"), a),
            E = o ? p.DX : qo;
          return (0, u.jsx)(E, {
            ...S,
            ref: s,
            children: e
          })
        }),
        Ya = (0, f.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, x.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? p.DX : "span";
          return (0, u.jsx)(s, {
            ...a,
            ref: o,
            children: (0, u.jsx)(Xo, {
              placeholder: e
            })
          })
        }),
        Qa = (0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = Xa(), i = s ? ce.rX : ce.yQ, d = (0, x.v6)({
            asChild: !0,
            className: qa({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, u.jsx)(Go, {
            ...d,
            ref: n,
            children: e || (0, u.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        $a = (0, f.forwardRef)(({
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
            labelId: l,
            labelRef: c,
            triggerId: f
          } = Xa(), v = i && !o, y = (0, U.UP)(c, s), m = (0, x.v6)({
            id: a.id || l,
            htmlFor: f,
            "data-testid": e,
            className: Fa({
              showAsterisk: v,
              isDisabled: d
            })
          }, a), b = t ? p.DX : "label";
          return (0, u.jsx)(p.s6, {
            enabled: n,
            children: (0, u.jsx)(b, {
              ...m,
              ref: y,
              children: r
            })
          })
        }),
        Ja = ((0, f.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = Xa(), d = (0, U.UP)(i, o), l = (0, x.v6)({
            className: Ma({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), c = r ? p.DX : "div";
          return (0, u.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }), (0, f.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = Xa(), d = (0, U.UP)(s, o), l = (0, x.v6)({
            className: Aa({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? p.DX : "div";
          return (0, u.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }), (0, f.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, f.useRef)(null),
            i = (0, U.UP)(s, a),
            d = (0, x.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, u.jsx)(ba, {
            ref: i,
            ...d,
            children: e
          })
        })),
        es = (0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, u.jsx)(ga, {
            ref: n,
            asChild: !0,
            children: (0, u.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        ts = ((0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, u.jsx)(Go, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }), Wo);
      (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          status: s
        } = Xa(), i = (0, x.v6)({
          className: "foundry_uaq1gwx",
          "data-testid": t,
          descriptionId: a,
          status: s
        }, n), d = r ? p.DX : Mn;
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var rs = r(83588),
        ns = r(56728);

      function os(e) {
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

      function as(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ss(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? as(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = os(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : as(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function is(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ds = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ls = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ss(ss({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ds(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return is(e.variantClassNames, e => is(e, e => e.split(" ")[0]))
            }
          }, t
        },
        us = ls({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cs = ls({
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
        fs = ls({
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
        ps = ls({
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
        vs = ls({
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
      const ys = (0, f.createContext)(null);

      function ms() {
        const e = (0, f.useContext)(ys);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }(0, f.forwardRef)(({
        size: e = "MD",
        appearance: t = "primary",
        testId: r,
        asChild: n,
        children: o,
        isDisabled: a = !1,
        isReadOnly: s = !1,
        ...i
      }, d) => {
        const l = (0, x.v6)({
            "data-testid": r,
            className: "foundry_okz6z20"
          }, i),
          c = n ? p.DX : "div",
          v = (0, f.useId)(),
          y = (0, f.useId)(),
          m = (0, f.useId)();
        return (0, u.jsx)(ys.Provider, {
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
          children: (0, u.jsx)(c, {
            ...l,
            ref: d,
            children: o
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        onPress: t,
        onClick: r,
        "aria-labelledby": n,
        "aria-describedby": o,
        id: a,
        isSelected: s,
        defaultSelected: i,
        onSelectedChange: d,
        name: l,
        value: c,
        ...v
      }, y) => {
        const m = (0, f.useRef)(null),
          b = (0, U.UP)(m, y),
          {
            size: h,
            appearance: g,
            inputId: w,
            labelId: C,
            descriptionId: _,
            isDisabled: j,
            isReadOnly: O
          } = ms(),
          P = (0, ns.H)({
            isDisabled: j,
            isReadOnly: O,
            isSelected: s,
            defaultSelected: i,
            onChange: d
          }),
          {
            inputProps: N
          } = (0, rs.K)({
            id: a || w,
            "aria-labelledby": (0, x.VW)(n, C),
            "aria-describedby": (0, x.VW)(o, _),
            name: l,
            value: c,
            isDisabled: j,
            isReadOnly: O
          }, P, m),
          D = (0, x.v6)({
            className: vs({
              appearance: g
            }),
            "data-state": P.isSelected ? "selected" : "unselected",
            "data-disabled": j || O,
            "data-testid": e,
            onClick: e => {
              t?.(e) ?? r?.(e), e.defaultPrevented || j || O || P.toggle()
            }
          }, v);
        return (0, u.jsxs)("div", {
          ...D,
          children: [(0, u.jsx)(p.s6, {
            children: (0, u.jsx)("input", {
              ...N,
              ref: b
            })
          }), (0, u.jsx)("div", {
            className: ps({
              size: h
            }),
            "aria-hidden": "true",
            children: (0, u.jsx)("div", {
              className: cs({
                size: h,
                isSelected: P.isSelected
              })
            })
          })]
        })
      }), (0, f.forwardRef)(({
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
          size: l
        } = ms(), c = (0, x.v6)({
          id: o.id || i,
          htmlFor: d,
          "data-testid": e,
          className: fs({
            isDisabled: s,
            size: l
          })
        }, o), f = t ? p.DX : "label";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(f, {
            ...c,
            ref: a,
            children: r
          })
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = ms(), i = n.id || s, d = (0, x.v6)({
          className: us({
            isDisabled: a
          }),
          "data-testid": r,
          id: i
        }, n), l = t ? p.DX : "div";
        return (0, u.jsx)(l, {
          ...d,
          ref: o,
          children: e
        })
      });
      var bs = r(26688);
      const hs = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        gs = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        ws = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Cs = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        xs = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        _s = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function js(e) {
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

      function Os(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ps(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Os(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = js(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Os(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ns(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ds = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rs = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ps(Ps({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Ds(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ns(e.variantClassNames, e => Ns(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ss = Rs({
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
        Es = Rs({
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
        ks = Rs({
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
        Is = Rs({
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
        Ts = Rs({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ls = Rs({
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
      const Vs = (0, f.createContext)(null);

      function zs() {
        const e = (0, f.useContext)(Vs);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }(0, f.forwardRef)(({
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
          d = n ? p.DX : "div",
          l = (0, f.useId)(),
          c = (0, f.useId)(),
          v = (0, f.useId)();
        return (0, u.jsx)(Vs.Provider, {
          value: {
            size: e,
            appearance: t,
            labelId: l,
            descriptionId: c,
            inputId: v,
            ...a
          },
          children: (0, u.jsx)(d, {
            ...i,
            ref: s,
            children: o
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        isChecked: t,
        defaultChecked: r,
        onCheckedChange: n,
        name: a,
        onPress: s,
        onClick: i,
        "aria-describedby": d,
        "aria-errormessage": l,
        "aria-labelledby": v,
        className: y,
        ...m
      }, b) => {
        const {
          size: h,
          appearance: g,
          isIndeterminate: w,
          isRequired: C,
          descriptionId: _,
          labelId: j,
          inputId: O,
          ...P
        } = zs(), N = (0, f.useRef)(null), D = m.id || O, {
          isPressed: R,
          pressProps: S
        } = (0, Rn.d)({
          ref: N
        }), {
          setSelected: E,
          toggle: k,
          ...I
        } = (0, ns.H)({
          isSelected: t,
          defaultSelected: r,
          onChange: n
        }), {
          inputProps: T,
          isSelected: L,
          isDisabled: V,
          isReadOnly: z
        } = (0, bs.v)({
          "aria-label": "",
          id: D,
          name: a,
          ...P
        }, {
          ...I,
          toggle: k,
          setSelected: P.isReadOnly ? () => !1 : E
        }, N), M = (0, x.v6)({
          className: Es({
            size: h
          }),
          onClick: e => {
            s?.(e) ?? i?.(e), e.defaultPrevented || V || z || k()
          }
        }, S, m), A = (0, x.v6)({
          className: "foundry_11gbdty1",
          "aria-checked": t,
          "aria-labelledby": (0, x.VW)(v, j),
          "aria-describedby": (0, x.VW)(d, _),
          "aria-errormessage": (0, x.VW)(l, P.isInvalid ? _ : void 0),
          "aria-required": C,
          required: C
        }, T), F = w ? o[`Dash${h}`] : o[`Check${h}`];
        return (0, u.jsxs)("div", {
          ...M,
          children: [(0, u.jsx)(p.s6, {
            children: (0, u.jsx)("input", {
              ...A,
              ref: b
            })
          }), (0, u.jsx)("div", {
            className: (0, c.$)(Ss({
              size: h,
              appearance: g
            }), y),
            "aria-hidden": "true",
            "data-state": w ? "mixed" : L ? "checked" : "unchecked",
            "data-disabled": V || z,
            "data-testid": e,
            "data-pressed": R,
            children: (0, u.jsx)("span", {
              className: "foundry_11gbdtyc",
              children: (L || w) && (0, u.jsx)(F, {
                "aria-hidden": "true"
              })
            })
          })]
        })
      }), (0, f.forwardRef)(({
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
          inputId: l,
          isRequired: c
        } = zs(), f = a.id || d, v = c && !o, y = (0, x.v6)({
          className: Ls({
            size: i,
            showAsterisk: v
          }),
          "data-testid": r,
          id: f,
          htmlFor: a.htmlFor || l
        }, a), m = t ? p.DX : "label";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(m, {
            ...y,
            ref: s,
            children: e
          })
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = zs(), i = n.id || s, d = (0, x.v6)({
          className: ks({
            isDisabled: a
          }),
          "data-testid": r,
          id: i
        }, n), l = t ? p.DX : "div";
        return (0, u.jsx)(l, {
          ...d,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          descriptionId: a
        } = zs(), s = n.id || a, i = (0, x.v6)({
          className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          "data-testid": r,
          id: s
        }, n), d = t ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      const Ms = (0, f.createContext)(null);

      function As() {
        const e = (0, f.useContext)(Ms);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }

      function Fs(e) {
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

      function Hs(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hs(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Fs(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hs(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Bs(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        size: n = "MD",
        isRequired: o = !1,
        ...a
      }, s) => {
        const [i, d] = (0, f.useState)(null), [l, c] = (0, f.useState)(null), v = [i, l].filter(Boolean).join(" "), y = (0, x.v6)({
          "data-testid": e,
          "aria-describedby": v,
          className: "foundry_11gbdtyn foundry_8kowh41"
        }, a), m = t ? p.DX : "fieldset";
        return (0, u.jsx)(Ms.Provider, {
          value: {
            size: n,
            isRequired: o,
            descriptionId: i,
            errorTextId: l,
            setDescriptionId: d,
            setErrorTextId: c
          },
          children: (0, u.jsx)(m, {
            ...y,
            ref: s,
            children: r
          })
        })
      }), (0, f.forwardRef)(({
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
        } = As(), l = d && !a, c = (0, x.v6)({
          "data-testid": r,
          className: Ts({
            showAsterisk: l
          })
        }, s), f = t ? p.DX : "legend";
        return (0, u.jsx)(p.s6, {
          enabled: o,
          children: (0, u.jsxs)(f, {
            ...c,
            ref: i,
            children: [(0, u.jsx)(p.xV, {
              children: e
            }), !d && (0, u.jsxs)("span", {
              className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              children: ["(", n, ")"]
            })]
          })
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          setDescriptionId: a
        } = As(), s = (0, f.useId)(), i = n.id || s;
        (0, f.useEffect)(() => {
          a(i)
        }, [a, i]);
        const d = (0, x.v6)({
            "data-testid": r,
            className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            id: i
          }, n),
          l = t ? p.DX : "div";
        return (0, u.jsx)(l, {
          ...d,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          size: a
        } = As(), s = (0, x.v6)({
          "data-testid": r,
          className: Is({
            size: a
          })
        }, n), i = t ? p.DX : "div";
        return (0, u.jsx)(i, {
          ...s,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          setErrorTextId: a
        } = As(), s = (0, f.useId)(), i = n.id || s;
        (0, f.useEffect)(() => {
          a(i)
        }, [a, i]);
        const d = (0, x.v6)({
            "data-testid": r,
            id: i,
            className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
          }, n),
          l = ce.X,
          c = t ? p.DX : "div";
        return (0, u.jsxs)(c, {
          ...d,
          ref: o,
          children: [(0, u.jsx)(l, {
            label: "",
            size: "SM"
          }), (0, u.jsx)(p.xV, {
            children: e
          })]
        })
      });
      var Xs = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gs = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qs(qs({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Xs(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bs(e.variantClassNames, e => Bs(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ks = Gs({
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
        Zs = Gs({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Us = Gs({
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
        Ws = Gs({
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
      const Ys = (0, f.createContext)(null);

      function Qs() {
        const e = (0, f.useContext)(Ys);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        isDisabled: n = !1,
        isReadOnly: o = !1,
        isRequired: a = !1,
        status: s = "neutral",
        ...i
      }, d) => {
        const l = (0, x.v6)({
            "data-testid": r,
            className: "foundry_vq8c3j0"
          }, i),
          c = e ? p.DX : "div",
          v = (0, f.useId)(),
          y = (0, f.useId)(),
          m = (0, f.useId)(),
          b = (0, f.useId)();
        return (0, u.jsx)(Ys.Provider, {
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
          children: (0, u.jsx)(c, {
            ref: d,
            ...l,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
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
          isDisabled: l,
          isRequired: c
        } = Qs(), f = (0, x.v6)({
          className: Us({
            isDisabled: l,
            showAsterisk: c && !o
          }),
          "data-testid": r,
          id: i,
          htmlFor: d
        }, a), v = t ? p.DX : "label";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(v, {
            ...f,
            ref: s,
            children: e
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        rows: n = 5,
        defaultValue: o,
        name: a,
        placeholder: s = " ",
        "aria-labelledby": i,
        "aria-describedby": d,
        ...l
      }, c) => {
        const {
          descriptionId: v,
          labelId: y,
          inputId: m,
          hintId: b,
          isDisabled: h,
          isRequired: g,
          isReadOnly: w,
          status: C
        } = Qs(), _ = (0, f.useRef)(null), j = (0, U.UP)(_, c), O = (0, x.v6)({
          className: Ws({
            isInvalid: "invalid" === C,
            isDisabled: h,
            isReadOnly: w,
            isSuccess: "success" === C
          }),
          name: a,
          id: l.id || m,
          rows: n,
          defaultValue: o,
          disabled: h,
          required: g,
          readOnly: w,
          placeholder: s,
          "aria-labelledby": (0, x.VW)(l.id, y, b, i),
          "aria-describedby": (0, x.VW)(v, d),
          "data-testid": r,
          ..."invalid" === C && {
            "aria-invalid": !0,
            "aria-errormessage": v
          },
          ..."success" === C && {
            "data-success": !0
          },
          ...h && {
            "aria-disabled": !0
          },
          ...g && {
            "aria-required": !0
          }
        }, l), P = e ? p.DX : "textarea";
        return (0, u.jsx)(P, {
          ref: j,
          ...O,
          children: t
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = Qs(), i = (0, x.v6)({
          className: Ks({
            isDisabled: a
          }),
          "data-testid": t,
          id: s
        }, n), d = r ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          hintId: a,
          isDisabled: s
        } = Qs(), i = (0, x.v6)({
          className: Zs({
            isDisabled: s
          }),
          "data-testid": r,
          id: a
        }, n), d = t ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          status: s
        } = Qs(), i = (0, x.v6)({
          className: "foundry_vq8c3ji",
          "data-testid": t,
          descriptionId: a,
          status: s
        }, n), d = r ? p.DX : Mn;
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var $s = r(707),
        Js = r(5277);

      function ei(e) {
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

      function ti(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ri(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ti(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ei(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ti(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ni(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var oi = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ai = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ri(ri({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) oi(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ni(e.variantClassNames, e => ni(e, e => e.split(" ")[0]))
            }
          }, t
        },
        si = ai({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ii = ai({
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
      const di = (0, f.createContext)(null);

      function li() {
        const e = (0, f.useContext)(di);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }(0, f.forwardRef)(({
        size: e = "MD",
        appearance: t = "primary",
        orientation: r = "vertical",
        children: n,
        testId: o,
        asChild: a,
        "aria-labelledby": s,
        "aria-describedby": i,
        "aria-errormessage": d,
        status: l = "neutral",
        ...c
      }, v) => {
        const y = (0, f.useRef)(null),
          m = (0, U.UP)(y, v),
          b = (0, f.useId)(),
          h = (0, f.useId)(),
          g = (0, f.useId)(),
          w = (0, $s.Z)({
            ...c,
            isInvalid: "invalid" === l
          }),
          {
            radioGroupProps: C
          } = (0, Js.m)({
            ...c,
            orientation: r,
            "aria-labelledby": (0, x.VW)(b, s),
            "aria-describedby": (0, x.VW)(h, g, i),
            "aria-errormessage": (0, x.VW)(g, d)
          }, w),
          _ = (0, x.v6)({
            className: "foundry_njguqn0"
          }, C, (0, x.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
          j = a ? p.DX : "div";
        return (0, u.jsx)(di.Provider, {
          value: {
            state: w,
            size: e,
            appearance: t,
            orientation: r,
            descriptionId: h,
            labelId: b,
            errorId: g,
            status: l,
            ...c
          },
          children: (0, u.jsx)(j, {
            ref: m,
            "data-testid": o,
            ..._,
            children: n
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          size: a,
          orientation: s
        } = li(), i = (0, x.v6)({
          "data-testid": e,
          className: ii({
            size: a,
            orientation: s
          })
        }, n), d = t ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: r
        })
      }), (0, f.forwardRef)(({
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
        } = li(), l = i && !o, c = (0, x.v6)({
          id: a.id || d,
          "data-testid": e,
          className: si({
            showAsterisk: l
          })
        }, a), f = t ? p.DX : "div";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(f, {
            ...c,
            ref: s,
            children: r
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          descriptionId: a
        } = li(), s = (0, x.v6)({
          id: a,
          "data-testid": e,
          className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
        }, n), i = t ? p.DX : "div";
        return (0, u.jsx)(i, {
          ...s,
          ref: o,
          children: r
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          errorId: a,
          status: s
        } = li(), i = (0, x.v6)({
          className: "foundry_njguqnc",
          "data-testid": t,
          errorId: a,
          status: s
        }, n), d = r ? p.DX : Mn;
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var ui = r(80146),
        ci = ai({
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
        fi = ai({
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
        pi = ai({
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
        vi = ai({
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
      const yi = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        mi = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        bi = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        });
      (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: "foundry_1pfduet0"
          }, n),
          s = e ? p.DX : "label";
        return (0, u.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      }), (0, f.forwardRef)(({
        testId: e,
        value: t,
        ...r
      }, n) => {
        const o = (0, f.useRef)(null),
          s = (0, U.UP)(o, n),
          i = (0, f.useId)(),
          {
            state: d,
            appearance: l,
            size: c,
            isReadOnly: v,
            isRequired: y
          } = li(),
          {
            isPressed: m,
            pressProps: b
          } = (0, Rn.d)({
            allowTextSelectionOnPress: !0
          }),
          {
            inputProps: h
          } = (0, ui.z)({
            ...r,
            id: i,
            value: t,
            "aria-label": ""
          }, d, o),
          g = h.checked,
          w = h.disabled || d?.isReadOnly,
          C = (0, x.v6)(h, {
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
          _ = a[`Dot${c}`];
        return (0, u.jsxs)("div", {
          className: vi({
            size: c
          }),
          children: [(0, u.jsx)(p.s6, {
            children: (0, u.jsx)("input", {
              type: "radio",
              ...C,
              ref: s,
              className: "foundry_1pfduet1"
            })
          }), (0, u.jsx)("div", {
            className: pi({
              appearance: l
            }),
            "aria-hidden": "true",
            "data-state": g ? "checked" : "unchecked",
            "data-disabled": w,
            "data-pressed": m,
            ...b,
            children: (0, u.jsx)("span", {
              className: "foundry_1pfduet9",
              children: g && (0, u.jsx)(_, {})
            })
          })]
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        hideVisually: n = !1,
        ...o
      }, a) => {
        const {
          size: s,
          state: i
        } = li(), d = (0, f.useId)(), l = (0, x.v6)({
          id: d,
          "data-testid": e,
          className: fi({
            size: s,
            isDisabled: i?.isDisabled
          })
        }, o), c = t ? p.DX : "div";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(c, {
            ...l,
            ref: a,
            children: r
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: a
        } = li(), s = (0, x.v6)({
          "data-testid": e,
          className: ci({
            isDisabled: a
          })
        }, n), i = t ? p.DX : "span";
        return (0, u.jsx)(i, {
          ref: o,
          ...s,
          children: r
        })
      });
      var hi = r(58900);

      function gi(e) {
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

      function wi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ci(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = gi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xi(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _i = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ji = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ci(Ci({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) _i(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xi(e.variantClassNames, e => xi(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Oi = ji({
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
        Pi = ji({
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
        Ni = ji({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Di = ji({
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
        Ri = ji({
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
        Si = ji({
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
      const Ei = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        ki = (0, f.createContext)(null);

      function Ii() {
        const e = (0, f.useContext)(ki);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        isDisabled: n = !1,
        isReadOnly: o = !1,
        isRequired: a = !1,
        status: s = "neutral",
        ...i
      }, d) => {
        const [l, c] = (0, f.useState)("text"), v = `${(0,f.useId)()}-label`, y = `${(0,f.useId)()}-input`, m = `${(0,f.useId)()}-description`, b = (0, f.useRef)(null), h = (0, f.useRef)(Ei), g = (0, x.v6)({
          "data-testid": r,
          className: "foundry_8oytzo4"
        }, i), w = e ? p.DX : "div";
        return (0, u.jsx)(ki.Provider, {
          value: {
            isDisabled: n,
            isReadOnly: o,
            isRequired: a,
            status: s,
            labelId: v,
            inputId: y,
            descriptionId: m,
            type: l,
            setType: c,
            inputRef: b,
            focusState: h,
            ...i
          },
          children: (0, u.jsx)(w, {
            ref: d,
            ...g,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
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
          inputId: l,
          labelId: c
        } = Ii(), f = d && !o, v = (0, x.v6)({
          id: a.id || c,
          htmlFor: a.htmlFor || l,
          "data-testid": e,
          className: Si({
            showAsterisk: f,
            isDisabled: i
          })
        }, a), y = t ? p.DX : "label";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(y, {
            ref: s,
            ...v,
            children: r
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: a
        } = Ii(), s = (0, x.v6)({
          "data-testid": e,
          className: Ni({
            isDisabled: a
          })
        }, n), i = t ? p.DX : "span";
        return (0, u.jsx)(i, {
          ref: o,
          ...s,
          children: r
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          isReadOnly: s,
          status: i
        } = Ii(), d = (0, x.v6)({
          "data-testid": e,
          className: (0, c.$)(Oi({
            isDisabled: a,
            isReadOnly: s,
            isInvalid: "invalid" === i,
            isSuccess: "success" === i
          }), "foundry_8oytzo1")
        }, n), l = t ? p.DX : "div";
        return (0, u.jsx)(l, {
          ref: o,
          ...d,
          children: r
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        mask: r,
        replacement: n,
        showMask: o = !0,
        track: a,
        placeholder: s = " ",
        "aria-labelledby": i,
        "aria-describedby": d,
        type: l = "text",
        ...v
      }, y) => {
        const {
          isDisabled: m,
          isReadOnly: b,
          isRequired: h,
          status: g,
          labelId: w,
          inputId: C,
          descriptionId: _,
          setType: j,
          type: O,
          inputRef: P,
          focusState: N
        } = Ii();
        (0, f.useEffect)(() => j(l), []);
        const D = "invalid" === g,
          R = (0, x.v6)({
            disabled: m,
            readOnly: b,
            required: h,
            id: C,
            type: O,
            spellCheck: !1,
            placeholder: s,
            "aria-labelledby": (0, x.VW)(w, i),
            "aria-describedby": (0, x.VW)(_, d),
            "data-testid": e,
            className: (0, c.$)(Ri({
              isDisabled: m,
              isReadOnly: b
            }), "foundry_8oytzo2"),
            onBlur: e => {
              if (N.current) {
                const {
                  selectionStart: t,
                  selectionEnd: r
                } = e.currentTarget;
                N.current.selectionStart = t, N.current.selectionEnd = r
              }
            },
            ...D && {
              "aria-invalid": !0,
              "aria-errormessage": _
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
          S = (0, hi.A)({
            mask: r,
            replacement: n,
            showMask: o,
            track: a
          }),
          E = (0, U.UP)(r && n ? S : null, P, y),
          k = t ? p.DX : "input";
        return (0, u.jsx)(k, {
          ref: E,
          ...R
        })
      }), (0, f.forwardRef)(({
        icon: e,
        asChild: t,
        testId: r,
        side: n,
        ...o
      }, a) => {
        const {
          isDisabled: s
        } = Ii(), i = (0, x.v6)({
          size: "LG",
          "data-testid": r,
          className: (0, c.$)(Di({
            side: n,
            isDisabled: s
          }), "foundry_8oytzo0")
        }, o), d = t ? p.DX : fe[e];
        return (0, u.jsx)(d, {
          ref: a,
          ...i
        })
      });
      const Ti = (0, f.forwardRef)(({
        ...e
      }, t) => {
        const {
          isDisabled: r
        } = Ii(), n = (0, x.v6)({
          isDisabled: r,
          size: "LG",
          appearance: "ghost",
          className: (0, c.$)("foundry_8oytzox", "foundry_8oytzo3"),
          preventFocusOnPress: !0
        }, e);
        return (0, u.jsx)(l.K, {
          ref: t,
          ...n,
          preventFocusOnPress: !1
        })
      });
      (0, f.forwardRef)(({
        showPasswordLabel: e,
        hidePasswordLabel: t,
        ...r
      }, n) => {
        const {
          type: o,
          setType: a,
          inputRef: s,
          focusState: i
        } = Ii(), d = "password" === o, l = d ? e : t;
        (0, f.useEffect)(() => {
          i.current && (i.current.clickTriggered = !1)
        }, [i]);
        const c = (0, x.v6)({
          label: l,
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
        return (0, u.jsxs)(Ut, {
          children: [(0, u.jsx)(Wt, {
            children: (0, u.jsx)(Ti, {
              ref: n,
              ...c
            })
          }), (0, u.jsxs)(Yt, {
            side: "bottom",
            align: "end",
            children: [l, (0, u.jsx)(Qt, {})]
          })]
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = Ii(), i = (0, x.v6)({
          className: Pi({
            isDisabled: a
          }),
          "data-testid": t,
          id: s
        }, n), d = r ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          status: s
        } = Ii(), i = (0, x.v6)({
          className: "foundry_8oytzo13",
          "data-testid": t,
          descriptionId: a,
          status: s
        }, n), d = r ? p.DX : Mn;
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var Li = r(68196);

      function Vi(e) {
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

      function zi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Vi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ai(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Fi = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hi = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mi(Mi({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Fi(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ai(e.variantClassNames, e => Ai(e, e => e.split(" ")[0]))
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
      const qi = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        Bi = (0, f.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const a = (0, f.useRef)(null),
            s = (0, U.UP)(a, o),
            {
              buttonProps: i
            } = (0, U.sL)(n, a),
            d = (0, x.v6)({
              "data-testid": r,
              className: Hi({
                size: t
              })
            }, i);
          return (0, u.jsx)("button", {
            ref: s,
            ...d,
            children: (0, u.jsx)(ce.X, {
              label: e,
              size: qi[t]
            })
          })
        });

      function Xi(e) {
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

      function Ki(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Xi(o)) in n ? Object.defineProperty(n, o, {
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

      function Zi(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ui = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wi = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ki(Ki({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Ui(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zi(e.variantClassNames, e => Zi(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Yi = Wi({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Qi = Wi({
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
        $i = Wi({
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
      const Ji = (0, f.createContext)(null);

      function ed() {
        const e = (0, f.useContext)(Ji);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        testId: t,
        status: r,
        background: n,
        ...o
      }, a) => {
        const s = e ? p.DX : "div",
          i = (0, x.v6)({
            className: $i({
              status: r,
              background: n
            })
          }, o);
        return (0, u.jsx)(Ji.Provider, {
          value: {
            status: r,
            background: n
          },
          children: (0, u.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...i
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qha"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qhb"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      });
      const td = {
        danger: ce.RT,
        information: ce.R2,
        success: ce.rW,
        warning: ce.lW
      };
      (0, f.forwardRef)(({
        asChild: e,
        size: t = "XL",
        ...r
      }, n) => {
        const {
          status: o
        } = ed(), a = e ? p.DX : td[o], s = (0, x.v6)({
          className: Qi({
            status: o,
            size: t
          }),
          size: t
        }, r);
        return (0, u.jsx)(a, {
          label: "",
          ref: n,
          ...s
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, f.useRef)(null),
          s = (0, U.UP)(a, o),
          i = e ? p.DX : "a",
          {
            linkProps: d,
            isPressed: l
          } = (0, Li.i)(n, a),
          c = (0, x.v6)({
            className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
          }, d);
        return (0, u.jsx)(i, {
          "data-pressed": l,
          "data-testid": r,
          ref: s,
          ...c,
          children: t
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? p.DX : "div",
          s = (0, x.v6)({
            className: "foundry_1m368qhm"
          }, n);
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s,
          children: t
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        className: r,
        ...n
      }, o) => {
        const a = e ? p.DX : "div";
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": t,
          className: (0, c.$)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
          ...n
        })
      }), (0, f.forwardRef)((e, t) => {
        const {
          background: r
        } = ed(), n = "none" !== r, o = (0, x.v6)({
          className: Yi({
            hasBackground: n
          })
        }, e);
        return (0, u.jsx)(Bi, {
          size: "SM",
          ref: t,
          ...o
        })
      });
      var rd = r(64634),
        nd = r(7697),
        od = r(17497);

      function ad(e) {
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

      function sd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function id(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ad(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function dd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ld = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ud = "foundry_qmpv6yv",
        cd = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = id(id({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ld(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dd(e.variantClassNames, e => dd(e, e => e.split(" ")[0]))
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
      const fd = (0, f.createContext)(null);

      function pd() {
        const e = (0, f.useContext)(fd);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        loopPagination: n,
        status: o,
        background: a,
        align: s = "left",
        ...i
      }, d) => {
        const l = (({
            loopPagination: e = !0
          }) => {
            const t = (0, U.rl)(),
              r = (0, U.jt)(),
              [n, o] = (0, f.useState)([]),
              a = n.length,
              [s, i] = (0, f.useState)(0),
              [d, l] = (0, rd.A)({
                containScroll: !1,
                loop: e,
                watchDrag: t && a > 1
              }, [(0, nd.A)(), (0, od.A)()]),
              u = (0, f.useRef)(0),
              c = (0, f.useRef)(!1),
              p = n[s],
              v = (0, f.useCallback)(e => {
                const t = e.selectedScrollSnap();
                e.slideNodes().forEach((e, r) => {
                  e.style.visibility = r === t ? "visible" : "hidden"
                }), i(t), c.current = !0
              }, [l]),
              y = (0, f.useCallback)(e => {
                u.current = .94 * e.scrollSnapList().length
              }, []),
              m = (0, f.useCallback)((e, t) => {
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
            return (0, f.useEffect)(() => {
              l && (y(l), m(l), l.on("reInit", y).on("reInit", m).on("scroll", m).on("slideFocus", m))
            }, [l, m]), (0, f.useEffect)(() => {
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
              isInitialized: c.current,
              loopPagination: e,
              canScrollNext: () => l?.canScrollNext() || !1,
              canScrollPrev: () => l?.canScrollPrev() || !1
            }
          })({
            loopPagination: n
          }),
          {
            currentAlert: c,
            isInitialized: v,
            setAlerts: y,
            numAlerts: m
          } = l;
        (0, f.useEffect)(() => {
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
            className: cd(c)
          }, b, i),
          g = e ? p.DX : "div";
        return (0, u.jsx)(fd.Provider, {
          value: l,
          children: (0, u.jsx)(g, {
            ref: d,
            "data-testid": r,
            "data-initialized": v,
            ...h,
            children: t
          })
        })
      });
      const vd = {
        danger: "CircleX",
        information: "Info",
        success: "CircleCheck",
        warning: "TriangleAlert"
      };

      function yd(e) {
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

      function md(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function bd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? md(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = yd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : md(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function hd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const {
          currentAlert: n
        } = pd();
        if (!e && !n || !n?.status) return null;
        const o = e || vd[n.status],
          a = fe[o],
          s = (0, x.v6)({
            className: "foundry_qmpv6yp"
          }, t);
        return (0, u.jsx)(a, {
          label: "",
          ref: r,
          size: "MD",
          "data-icon": !0,
          ...s
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        align: r = "left",
        status: n,
        background: o,
        ...a
      }, s) => {
        const i = e ? p.DX : "div",
          d = (0, x.v6)({
            className: "foundry_qmpv6yo"
          }, a);
        return (0, u.jsx)(i, {
          ref: s,
          "data-testid": t,
          ...d
        })
      }), (0, f.forwardRef)(({
        testId: e,
        children: t,
        ...r
      }, n) => {
        const {
          setAlerts: o,
          emblaRef: a,
          emblaApi: s
        } = pd(), i = (0, x.v6)({
          className: "foundry_qmpv6ym"
        }, r), d = (0, U.UP)(a, n), l = f.Children.map(t, e => {
          const t = e;
          if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
          return {
            status: t.props.status,
            background: t.props.background,
            align: t.props.align
          }
        });
        return (0, f.useEffect)(() => {
          l && o(l)
        }, []), s?.on("slidesChanged", () => {
          l && o(l)
        }), (0, u.jsx)("div", {
          ref: d,
          "data-testid": e,
          ...i,
          children: (0, u.jsx)("div", {
            className: "foundry_qmpv6yn",
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, f.useRef)(null),
          s = (0, U.UP)(a, o),
          i = e ? p.DX : "a",
          {
            linkProps: d,
            isPressed: l
          } = (0, Li.i)(n, a),
          c = (0, x.v6)({
            className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
          }, n);
        return (0, u.jsx)(i, {
          "data-pressed": l,
          "data-testid": r,
          ref: s,
          ...d,
          ...c,
          children: t
        })
      }), (0, f.forwardRef)((e, t) => {
        const r = (0, x.v6)({
          className: "foundry_qmpv6ys"
        }, e);
        return (0, u.jsx)(Bi, {
          ref: t,
          "data-close-btn": !0,
          size: "SM",
          ...r
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        ...n
      }, o) => {
        const a = e ? p.DX : "div",
          s = (0, x.v6)({
            className: "foundry_qmpv6yt"
          }, n);
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": t,
          "data-pagination": !0,
          role: "group",
          ...s,
          children: r
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          nextAlert: n,
          canScrollNext: o
        } = pd(), a = (0, x.v6)({
          className: ud
        }, t);
        return (0, u.jsx)(l.K, {
          ref: r,
          size: "SM",
          icon: "ChevronRight",
          appearance: "ghost",
          "data-testid": e,
          onPress: n,
          isDisabled: !o(),
          ...a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          prevAlert: n,
          canScrollPrev: o
        } = pd(), a = (0, x.v6)({
          className: ud
        }, t);
        return (0, u.jsx)(l.K, {
          ref: r,
          size: "SM",
          icon: "ChevronLeft",
          appearance: "ghost",
          "data-testid": e,
          onPress: n,
          isDisabled: !o(),
          ...a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          currentAlertIndex: n,
          numAlerts: o
        } = pd(), a = (0, x.v6)({
          className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
        }, t);
        return (0, u.jsxs)("div", {
          ref: r,
          "data-testid": e,
          "aria-hidden": !0,
          ...a,
          children: [n + 1, "/", o]
        })
      });
      var gd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bd(bd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) gd(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hd(e.variantClassNames, e => hd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Cd = wd({
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
        xd = wd({
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
        _d = wd({
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
      const jd = (0, f.createContext)(null);

      function Od() {
        const e = (0, f.useContext)(jd);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        size: n,
        background: o,
        color: a,
        hasBorder: s,
        isDisabled: i,
        ...d
      }, l) => {
        const c = {
            size: n,
            background: o,
            color: a,
            hasBorder: s,
            isDisabled: i
          },
          f = (0, x.v6)({
            className: xd(c)
          }, d),
          v = e ? p.DX : "div";
        return (0, u.jsx)(jd.Provider, {
          value: c,
          children: (0, u.jsx)(v, {
            ref: l,
            "data-testid": r,
            "aria-disabled": i,
            ...f,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const {
          size: a
        } = Od(), s = e ? p.DX : "div", i = (0, x.v6)({
          className: _d({
            size: a
          })
        }, n);
        return (0, u.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...i,
          children: t
        })
      }), (0, f.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const n = fe[e],
          o = (0, x.v6)({
            className: "foundry_oahh5812"
          }, t);
        return (0, u.jsx)(n, {
          ref: r,
          size: "SM",
          ...o
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          background: n,
          isDisabled: o
        } = Od(), a = (0, x.v6)({
          className: Cd({
            background: n
          })
        }, t);
        return (0, u.jsx)(l.K, {
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
      var Pd = "ToastProvider",
        [Nd, Dd, Rd] = tr("Toast"),
        [Sd, Ed] = (0, we.A)("Toast", [Rd]),
        [kd, Id] = Sd(Pd),
        Td = "ToastViewport",
        Ld = ["F8"],
        Vd = "toast.viewportPause",
        zd = "toast.viewportResume",
        Md = f.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = Ld,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = Id(Td, r), i = Dd(r), d = f.useRef(null), l = f.useRef(null), c = f.useRef(null), p = f.useRef(null), v = (0, ge.s)(t, p, s.onViewportChange), y = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), m = s.toastCount > 0;
          f.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && p.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), f.useEffect(() => {
            const e = d.current,
              t = p.current;
            if (m && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(Vd);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(zd);
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
          const b = f.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...rl(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return f.useEffect(() => {
            const e = p.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void l.current?.focus();
                  const o = b({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  nl(o.slice(a + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, b]), (0, u.jsxs)(Ee, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", y),
            tabIndex: -1,
            style: {
              pointerEvents: m ? void 0 : "none"
            },
            children: [m && (0, u.jsx)(Fd, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                nl(b({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, u.jsx)(Nd.Slot, {
              scope: r,
              children: (0, u.jsx)(Ce.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: v
              })
            }), m && (0, u.jsx)(Fd, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                nl(b({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      Md.displayName = Td;
      var Ad = "ToastFocusProxy",
        Fd = f.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = Id(Ad, r);
          return (0, u.jsx)(vt.s6, {
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
      Fd.displayName = Ad;
      var Hd = "Toast",
        qd = f.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, pt.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: Hd
          });
          return (0, u.jsx)(lt, {
            present: r || i,
            children: (0, u.jsx)(Gd, {
              open: i,
              ...s,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, xe.c)(e.onPause),
              onResume: (0, xe.c)(e.onResume),
              onSwipeStart: (0, he.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, he.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, he.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, he.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        });
      qd.displayName = Hd;
      var [Bd, Xd] = Sd(Hd, {
        onClose() {}
      }), Gd = f.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: a,
          onClose: s,
          onEscapeKeyDown: i,
          onPause: d,
          onResume: l,
          onSwipeStart: c,
          onSwipeMove: p,
          onSwipeCancel: v,
          onSwipeEnd: y,
          ...m
        } = e, b = Id(Hd, r), [h, g] = f.useState(null), w = (0, ge.s)(t, g), C = f.useRef(null), x = f.useRef(null), _ = o || b.duration, j = f.useRef(0), O = f.useRef(_), P = f.useRef(0), {
          onToastAdd: N,
          onToastRemove: D
        } = b, R = (0, xe.c)(() => {
          const e = h?.contains(document.activeElement);
          e && b.viewport?.focus(), s()
        }), S = f.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(P.current), j.current = (new Date).getTime(), P.current = window.setTimeout(R, e))
        }, [R]);
        f.useEffect(() => {
          const e = b.viewport;
          if (e) {
            const t = () => {
                S(O.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - j.current;
                O.current = O.current - e, window.clearTimeout(P.current), d?.()
              };
            return e.addEventListener(Vd, r), e.addEventListener(zd, t), () => {
              e.removeEventListener(Vd, r), e.removeEventListener(zd, t)
            }
          }
        }, [b.viewport, _, d, l, S]), f.useEffect(() => {
          a && !b.isClosePausedRef.current && S(_)
        }, [a, _, b.isClosePausedRef, S]), f.useEffect(() => () => {
          window.clearTimeout(P.current)
        }, []), f.useEffect(() => (N(), () => D()), [N, D]);
        const E = f.useMemo(() => h ? Jd(h) : null, [h]);
        return b.viewport ? (0, u.jsxs)(u.Fragment, {
          children: [E && (0, u.jsx)(Kd, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: E
          }), (0, u.jsx)(Bd, {
            scope: r,
            onClose: R,
            children: it.createPortal((0, u.jsx)(Nd.ItemSlot, {
              scope: r,
              children: (0, u.jsx)(Se, {
                asChild: !0,
                onEscapeKeyDown: (0, he.mK)(i, () => {
                  b.isFocusedToastEscapeKeyDownRef.current || R(), b.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, u.jsx)(Ce.sG.li, {
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
                  onKeyDown: (0, he.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (b.isFocusedToastEscapeKeyDownRef.current = !0, R()))
                  }),
                  onPointerDown: (0, he.mK)(e.onPointerDown, e => {
                    0 === e.button && (C.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, he.mK)(e.onPointerMove, e => {
                    if (!C.current) return;
                    const t = e.clientX - C.current.x,
                      r = e.clientY - C.current.y,
                      n = Boolean(x.current),
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
                    n ? (x.current = l, el("toast.swipeMove", p, u, {
                      discrete: !1
                    })) : tl(l, b.swipeDirection, d) ? (x.current = l, el("toast.swipeStart", c, u, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (C.current = null)
                  }),
                  onPointerUp: (0, he.mK)(e.onPointerUp, e => {
                    const t = x.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), x.current = null, C.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      tl(t, b.swipeDirection, b.swipeThreshold) ? el("toast.swipeEnd", y, n, {
                        discrete: !0
                      }) : el("toast.swipeCancel", v, n, {
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
      }), Kd = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = Id(Hd, t), [a, s] = f.useState(!1), [i, d] = f.useState(!1);
        return function(e = () => {}) {
          const t = (0, xe.c)(e);
          (0, ze.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), f.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, u.jsx)(dt, {
          asChild: !0,
          container: o.announcerContainer || void 0,
          children: (0, u.jsx)(vt.s6, {
            ...n,
            children: a && (0, u.jsxs)(u.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      f.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, u.jsx)(Ce.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Zd = f.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, u.jsx)(Ce.sG.div, {
          ...n,
          ref: t
        })
      });
      Zd.displayName = "ToastDescription";
      var Ud = "ToastAction",
        Wd = f.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, u.jsx)($d, {
            altText: r,
            asChild: !0,
            children: (0, u.jsx)(Qd, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ud}\`. Expected non-empty \`string\`.`), null)
        });
      Wd.displayName = Ud;
      var Yd = "ToastClose",
        Qd = f.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Xd(Yd, r);
          return (0, u.jsx)($d, {
            asChild: !0,
            children: (0, u.jsx)(Ce.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, he.mK)(e.onClick, o.onClose)
            })
          })
        });
      Qd.displayName = Yd;
      var $d = f.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, u.jsx)(Ce.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Jd(e) {
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
              } else t.push(...Jd(e))
          }
        }), t
      }

      function el(e, t, r, {
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
        }), n ? (0, Ce.hO)(o, a) : o.dispatchEvent(a)
      }
      var tl = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function rl(e) {
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

      function nl(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var ol = Md,
        al = qd,
        sl = Zd,
        il = Wd,
        dl = Qd;

      function ll(e) {
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

      function ul(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function cl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ul(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ll(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ul(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function fl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var pl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cl(cl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) pl(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fl(e.variantClassNames, e => fl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        yl = vl({
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
        ml = vl({
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
        bl = vl({
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
      (0, f.forwardRef)(({
        children: e,
        testId: t,
        position: r = "bottomRight",
        ...n
      }, o) => {
        const a = (0, x.v6)({
          className: bl({
            position: r
          })
        }, n);
        return (0, u.jsx)(ol, {
          ref: o,
          "data-testid": t,
          ...a,
          children: e
        })
      });
      const hl = (0, f.createContext)(null);
      (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        appearance: n = "success",
        ...o
      }, a) => {
        const s = e ? p.DX : al,
          i = (0, x.v6)({
            className: ml({
              appearance: n
            })
          }, o);
        return (0, u.jsx)(hl.Provider, {
          value: {
            appearance: n
          },
          children: (0, u.jsx)(s, {
            ref: a,
            "data-testid": r,
            ...i,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? p.DX : sl,
          s = (0, x.v6)({
            className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, n);
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s,
          children: t
        })
      });
      const gl = {
        danger: ce.RT,
        information: ce.R2,
        success: ce.rW,
        warning: ce.lW,
        avocado: ce.rW
      };
      (0, f.forwardRef)(({
        asChild: e,
        ...t
      }, r) => {
        const {
          appearance: n
        } = function() {
          const e = (0, f.useContext)(hl);
          if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
          return e
        }(), o = e ? p.DX : gl[n], a = (0, x.v6)({
          className: yl({
            appearance: n
          }),
          size: "LG"
        }, t);
        return (0, u.jsx)(o, {
          ref: r,
          ...a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
          className: "foundry_dnh2nzq",
          asChild: !0
        }, n);
        return (0, u.jsx)(il, {
          ref: o,
          "data-testid": r,
          ...a,
          children: e ? (0, u.jsx)(p.DX, {
            children: t
          }) : (0, u.jsx)(d.$, {
            size: "MD",
            appearance: "link",
            children: t
          })
        })
      }), (0, f.forwardRef)(({
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
        return (0, u.jsx)(dl, {
          ref: a,
          "data-testid": r,
          ...s,
          children: e ? (0, u.jsx)(p.DX, {
            children: t
          }) : (0, u.jsx)(Bi, {
            size: "SM",
            label: n
          })
        })
      });
      var wl = r(52640);

      function Cl(e) {
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

      function xl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Cl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ol = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _l(_l({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Ol(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jl(e.variantClassNames, e => jl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nl = Pl({
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
        Dl = Pl({
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
        Rl = Pl({
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

      function Sl() {
        const e = (0, f.useContext)(El);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const El = (0, f.createContext)(null);

      function kl(e) {
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

      function Il(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Tl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Il(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = kl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Il(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ll(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        size: n = "MD",
        ...o
      }, a) => {
        const s = (0, x.v6)({
            className: Rl({
              size: n
            })
          }, o),
          i = r ? p.DX : "ol";
        return (0, u.jsx)(El.Provider, {
          value: {
            size: n
          },
          children: (0, u.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...s,
            children: e
          })
        })
      }), (0, f.forwardRef)(({
        isCurrent: e,
        children: t,
        asChild: r,
        testId: n,
        ...o
      }, a) => {
        const s = (0, f.useRef)(null),
          {
            size: i
          } = Sl(),
          {
            itemProps: d
          } = (0, wl.I)({
            isCurrent: e,
            children: t
          }, s),
          l = r ? p.DX : "a",
          v = (0, x.v6)({
            className: (0, c.$)(Nl({
              size: i
            }), e && "foundry_m1icrx9"),
            "data-testid": n
          }, d, o);
        return (0, u.jsx)("li", {
          className: Dl({
            size: i
          }),
          ref: a,
          children: (0, u.jsx)(l, {
            ref: s,
            ...v,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const n = fe[e];
        return (0, u.jsx)(n, {
          ref: r,
          size: "LG",
          ...t
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        defaultOpen: r = !1,
        label: n,
        ...o
      }, a) => {
        const [s, i] = (0, f.useState)(r), {
          size: d
        } = Sl(), l = (0, x.v6)({
          className: Dl({
            size: d
          }),
          "data-testid": t
        }, o);
        return (0, u.jsx)("li", {
          ref: a,
          ...l,
          children: (0, u.jsxs)(Fo, {
            open: s,
            onOpenChange: () => i(!s),
            children: [(0, u.jsx)(qo, {
              className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
              "aria-label": n,
              children: "..."
            }), (0, u.jsx)(Wo, {
              children: (0, u.jsx)(Qo, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_m1icrxb",
                children: (0, u.jsx)(la, {
                  className: "foundry_m1icrxc",
                  children: e
                })
              })
            })]
          })
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const a = t ? p.DX : ba,
          s = (0, x.v6)({
            className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
            "data-testid": r
          }, n);
        return (0, u.jsx)(a, {
          ref: o,
          ...s,
          children: e
        })
      });
      var Vl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        zl = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Tl(Tl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Vl(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ll(e.variantClassNames, e => Ll(e, e => e.split(" ")[0]))
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
      const Ml = (0, f.createContext)(null);
      (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "primary",
        size: n = "SM",
        type: o = "text",
        ...a
      }, s) => {
        const i = e ? p.DX : "div",
          d = (0, x.v6)({
            className: zl({
              appearance: r,
              type: o,
              size: n
            })
          }, a);
        return (0, u.jsx)(Ml.Provider, {
          value: {
            type: o
          },
          children: (0, u.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...d
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_18omk9t9",
            "data-testid": t
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          ...a
        })
      }), (0, f.forwardRef)(({
        icon: e,
        iconElement: t,
        label: r,
        ...n
      }, o) => {
        const a = t || (e ? fe[e] : null),
          s = (0, x.v6)({
            size: "SM",
            className: "foundry_18omk9t0",
            label: r || ""
          }, n);
        return a && (0, u.jsx)(a, {
          ref: o,
          ...s
        })
      });
      const Al = () => {
          const e = (0, U.Ub)(x.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Fl = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Hl(e) {
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
            n = e, o = t, a = r[t], (o = Hl(o)) in n ? Object.defineProperty(n, o, {
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
      }
      var Gl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Kl = (e => {
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
            for (var [l, u] of e.compoundVariants) Gl(l, n, e.defaultVariants) && (r += " " + u);
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
          defaultClassName: "foundry_hwzz174",
          variantClassNames: {
            isTouchDevice: {
              true: "foundry_hwzz175"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Zl = (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, u.jsx)(Co, {
            ref: r,
            ...n
          })
        }),
        Ul = (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, u.jsx)(xo, {
            ref: r,
            ...n
          })
        }),
        Wl = (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, u.jsx)(_o, {
            ref: r,
            ...n
          })
        }),
        Yl = (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, U.rl)(),
            o = (0, x.v6)({
              "data-testid": e,
              className: Kl({
                isTouchDevice: n
              })
            }, t);
          return (0, u.jsx)(jo, {
            ref: r,
            ...o
          })
        });

      function Ql(e) {
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

      function $l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Jl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $l(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ql(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $l(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function eu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e
        }, t);
        return (0, u.jsx)(Oo, {
          ref: r,
          ...n
        })
      });
      var tu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ru = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Jl(Jl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) tu(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return eu(e.variantClassNames, e => eu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        nu = ru({
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
        ou = ru({
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
      const au = (0, f.createContext)({
        isControlled: !1,
        openImmediately: !1,
        setIsOpen: () => {},
        contentId: "",
        descriptionId: "",
        triggerRef: (0, f.createRef)(),
        dialogSpringRef: (0, be.SpringRef)(),
        overlaySpringRef: (0, be.SpringRef)()
      });
      (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          contentId: n,
          triggerRef: o
        } = (0, f.useContext)(au), a = (0, U.UP)(o, r), s = (0, x.v6)({
          "data-testid": e,
          className: "foundry_8kowh41",
          type: "button",
          "aria-controls": n
        }, t);
        return (0, u.jsx)(nn, {
          ...s,
          ref: a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          isOpen: n,
          overlaySpringRef: o,
          openImmediately: a
        } = (0, f.useContext)(au), s = Fl(), i = (0, U.jt)(), d = (0, be.useTransition)(n, {
          ref: o,
          delay: n ? 0 : 100,
          from: s(0),
          enter: s(100),
          leave: s(0),
          config: be.config.stiff,
          immediate: i || a
        }), l = (0, x.v6)({
          "data-testid": e,
          className: "foundry_xov33n1"
        }, t), c = (0, be.animated)(dn);
        return (0, f.useEffect)(() => {
          o.start()
        }, [n]), d((e, t) => t ? (0, u.jsx)(c, {
          forceMount: !0,
          ref: r,
          ...l,
          style: e
        }) : null)
      }), (0, f.forwardRef)(({
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
          contentId: l,
          triggerRef: c,
          onOpenTransitionStart: p,
          onOpenTransitionComplete: v,
          onCloseTransitionStart: y,
          onCloseTransitionComplete: m,
          dialogSpringRef: b,
          overlaySpringRef: h
        } = (0, f.useContext)(au), g = (0, U.rl)(), w = (0, U.jt)(), C = (0, f.useRef)(null), _ = Al(), {
          bindDrag: j
        } = function({
          dialogRef: e,
          dialogSpringRef: t,
          overlaySpringRef: r,
          onCloseTransitionStart: n,
          onCloseTransitionComplete: o
        }) {
          const a = Fl(),
            s = Al(),
            i = (0, f.useRef)();
          return {
            bindDrag: (0, Q.useDrag)(({
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
                config: be.config.stiff,
                onStart: n,
                onRest: o
              }), r.start({
                ...a(0),
                immediate: !1,
                config: be.config.stiff
              })) : (t.start({
                ...s(100),
                immediate: !1,
                config: be.config.stiff
              }), r.start({
                ...a(100),
                immediate: !1,
                config: be.config.stiff
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
          dialogRef: C,
          overlaySpringRef: h,
          dialogSpringRef: b,
          onCloseTransitionStart: () => {
            i(!1), y?.()
          },
          onCloseTransitionComplete: m
        }), O = (0, be.useTransition)(s, {
          from: _(0),
          enter: _(100),
          leave: _(0),
          delay: s ? 100 : 0,
          config: be.config.stiff,
          ref: b,
          immediate: w || d,
          onStart: (e, t, r) => {
            r ? p?.() : y?.()
          },
          onRest: (e, t, r) => {
            r ? v?.() : m?.()
          }
        });
        (0, f.useEffect)(() => {
          b.start()
        }, [s]);
        const P = (0, U.UP)(C, a),
          N = g && !w && !n && j(),
          D = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33nd",
            onCloseAutoFocus: e => {
              r?.(e), e.defaultPrevented || c.current?.focus()
            },
            id: l
          }, N || {}, o),
          R = (0, be.animated)(fn);
        return O((t, r) => r ? (0, u.jsx)("div", {
          className: "foundry_xov33n3",
          children: (0, u.jsx)(R, {
            forceMount: !0,
            ref: P,
            ...D,
            style: t,
            children: e
          })
        }) : null)
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e,
          className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
        }, t);
        return (0, u.jsx)(bn, {
          ref: r,
          ...n
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e
        }, t);
        return (0, u.jsx)(gn, {
          ref: r,
          ...n
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
          className: "foundry_xov33nh",
          "data-testid": t
        }, r);
        return (0, u.jsxs)(Zl, {
          ref: n,
          ...o,
          children: [(0, u.jsx)(Ul, {
            className: "foundry_xov33ni",
            children: e
          }), (0, u.jsx)(Wl, {
            className: "foundry_xov33nj",
            orientation: "vertical",
            children: (0, u.jsx)(Yl, {
              className: "foundry_xov33nk"
            })
          })]
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33ne"
          }, r),
          a = e ? p.DX : "div";
        return (0, u.jsx)(a, {
          ref: n,
          ...o
        })
      }), (0, f.forwardRef)(({
        align: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: nu({
              align: e
            })
          }, n),
          s = t ? p.DX : "header";
        return (0, u.jsx)(s, {
          ref: o,
          ...a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        appearance: t = "sentence",
        ...r
      }, n) => {
        const o = (0, x.v6)({
          "data-testid": e,
          className: ou({
            appearance: t
          })
        }, r);
        return (0, u.jsx)(bn, {
          ref: n,
          ...o
        })
      }), (0, f.forwardRef)((e, t) => {
        const r = (0, x.v6)({
          className: "foundry_xov33n4"
        }, e);
        return (0, u.jsx)(l.K, {
          ref: t,
          ...r,
          appearance: "ghost",
          size: "LG"
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": e,
            className: "foundry_xov33n9"
          }, r),
          a = t ? (0, u.jsx)(p.DX, {
            ref: n,
            ...o
          }) : (0, u.jsx)(Bi, {
            ref: n,
            ...o,
            size: "LG"
          });
        return (0, u.jsx)(Cn, {
          asChild: !0,
          children: a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33nf"
          }, r),
          a = e ? p.DX : "div";
        return (0, u.jsx)(a, {
          ref: n,
          ...o
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33ng"
          }, r),
          a = e ? p.DX : "footer";
        return (0, u.jsx)(a, {
          ref: n,
          ...o
        })
      });
      var su = "Avatar",
        [iu, du] = (0, we.A)(su),
        lu = [0, () => {}],
        [uu, cu] = iu(su),
        fu = f.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = f.useState("idle"), [s, i] = function() {
            let e = lu; {
              e = f.useState(0);
              const [t] = e, r = f.useRef(!1);
              f.useEffect(() => {
                t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [t])
            }
            return e
          }();
          return (0, u.jsx)(uu, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, u.jsx)(Ce.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      fu.displayName = su;
      var pu = "AvatarImage",
        vu = f.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...a
          } = e, s = cu(pu, r);
          var i;
          i = s.setImageCount, f.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: t,
              setLoadingStatus: r,
              referrerPolicy: n,
              crossOrigin: o
            }) {
              return (0, ze.N)(() => {
                if (!e) return void r("error");
                const t = new window.Image,
                  a = e => {
                    const t = e.currentTarget;
                    r(mu(t))
                  },
                  s = () => r("error");
                return t.addEventListener("load", a), t.addEventListener("error", s), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(mu(t)), () => {
                  t.removeEventListener("load", a), t.removeEventListener("error", s), r("idle")
                }
              }, [e, o, n, r]), t
            }(n, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, xe.c)(e => {
              o?.(e)
            }),
            c = f.useRef(d);
          return (0, ze.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, u.jsx)(Ce.sG.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      vu.displayName = pu;
      var yu = "AvatarFallback";

      function mu(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function bu(e) {
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

      function hu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = bu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function wu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      f.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = cu(yu, r), [s, i] = f.useState(void 0 === n);
        return f.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, u.jsx)(Ce.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = yu;
      var Cu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gu(gu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Cu(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wu(e.variantClassNames, e => wu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _u = xu({
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
        ju = "var(--foundry_v912w22)",
        Ou = "var(--foundry_v912w23)",
        Pu = xu({
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
        Nu = xu({
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
        Du = "var(--foundry_v912w21)",
        Ru = "var(--foundry_v912w20)",
        Su = xu({
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
      const Eu = (0, f.createContext)(null);

      function ku() {
        const e = (0, f.useContext)(Eu);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }

      function Iu(e) {
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

      function Tu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Iu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
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
          className: _u({
            isDisabled: a
          }),
          asChild: e
        }, s);
        return (0, u.jsx)(Eu.Provider, {
          value: {
            size: n,
            status: o,
            isDisabled: a
          },
          children: (0, u.jsx)(fu, {
            ref: i,
            ...d,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        src: r,
        ...n
      }, o) => {
        const {
          size: a,
          isDisabled: s
        } = ku(), [i, d] = (0, f.useState)(!1);
        (0, f.useEffect)(() => {
          d(!1)
        }, [r]);
        const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
          c = (0, x.v6)({
            className: Pu({
              isDisabled: s
            }),
            src: l,
            onLoadingStatusChange: e => {
              "error" === e && d(!0)
            },
            asChild: e
          }, n);
        return (0, u.jsx)("span", {
          className: Nu({
            size: a,
            isDisabled: s,
            isFallback: i
          }),
          "data-testid": t,
          "aria-hidden": !0,
          children: (0, u.jsx)(vu, {
            ref: o,
            ...c
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        colorOverride: t,
        ...r
      }, n) => {
        const o = (0, f.useRef)(null),
          {
            size: a,
            status: s,
            isDisabled: i
          } = ku(),
          d = s || "online",
          l = (0, U.UP)(o, n),
          c = (0, x.v6)({
            "data-testid": e,
            "aria-hidden": !0,
            className: Su({
              status: d,
              size: a,
              isDisabled: i
            }),
            style: (0, _.DI)({
              [Ru]: t?.online,
              [Du]: t?.offline,
              [ju]: t?.away,
              [Ou]: t?.busy
            })
          }, r);
        return (0, u.jsx)("span", {
          ref: l,
          ...c
        })
      });
      var zu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Lu(Lu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) zu(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vu(e.variantClassNames, e => Vu(e, e => e.split(" ")[0]))
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
      (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt0"
          }, n),
          s = e ? p.DX : "nav";
        return (0, u.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      }), (0, f.forwardRef)(({
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
          s = e ? p.DX : "div";
        return (0, u.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      });
      const Au = (0, f.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, f.useRef)(null),
            i = (0, U.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, Li.i)(o, s),
            v = (0, x.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, c.$)(Mu({
                isActive: r
              }))
            }, d),
            y = e ? p.DX : "a";
          return (0, u.jsx)(y, {
            ref: i,
            ...v,
            children: t
          })
        }),
        Fu = ((0, f.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, u.jsx)(Au, {
            ref: n,
            ...o,
            children: (0, u.jsx)(ce.JG, {
              size: "LG",
              label: e
            })
          })
        }), (0, f.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, u.jsx)(Au, {
            ref: n,
            ...o,
            children: (0, u.jsx)(ce.c_, {
              size: "LG",
              label: e
            })
          })
        }), (0, f.createContext)(null));

      function Hu() {
        const e = (0, f.useContext)(Fu);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const {
          labelId: a
        } = Hu(), s = (0, x.v6)({
          "data-testid": r,
          className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
        }, n), i = e ? p.DX : "label";
        return (0, u.jsx)(i, {
          ref: o,
          id: a,
          ...s,
          children: t
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        placeholder: r,
        ...n
      }, o) => {
        const {
          labelId: a
        } = Hu(), s = (0, x.v6)({
          "aria-labelledby": a,
          className: "foundry_2jlbztc"
        }, n), i = e ? p.DX : Ga;
        return (0, u.jsxs)(i, {
          ...s,
          children: [(0, u.jsxs)(Wa, {
            ref: o,
            children: [(0, u.jsx)(Ya, {
              placeholder: r
            }), (0, u.jsx)(Qa, {})]
          }), (0, u.jsx)(ts, {
            children: (0, u.jsx)(Ka, {
              children: (0, u.jsx)(Ua, {
                children: t
              })
            })
          })]
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r
          }, n),
          s = e ? p.DX : Ja;
        return (0, u.jsx)(s, {
          ...a,
          ref: o,
          children: (0, u.jsx)(es, {
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n),
          s = e ? p.DX : "p";
        return (0, u.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      });
      var qu = r(18436),
        Bu = "rovingFocusGroup.onEntryFocus",
        Xu = {
          bubbles: !1,
          cancelable: !0
        },
        Gu = "RovingFocusGroup",
        [Ku, Zu, Uu] = tr(Gu),
        [Wu, Yu] = (0, we.A)(Gu, [Uu]),
        [Qu, $u] = Wu(Gu),
        Ju = f.forwardRef((e, t) => (0, u.jsx)(Ku.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, u.jsx)(Ku.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, u.jsx)(ec, {
              ...e,
              ref: t
            })
          })
        }));
      Ju.displayName = Gu;
      var ec = f.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: a,
            currentTabStopId: s,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: d,
            onEntryFocus: l,
            preventScrollOnEntryFocus: c = !1,
            ...p
          } = e, v = f.useRef(null), y = (0, ge.s)(t, v), m = (0, Jt.jH)(a), [b, h] = (0, pt.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: Gu
          }), [g, w] = f.useState(!1), C = (0, xe.c)(l), x = Zu(r), _ = f.useRef(!1), [j, O] = f.useState(0);
          return f.useEffect(() => {
            const e = v.current;
            if (e) return e.addEventListener(Bu, C), () => e.removeEventListener(Bu, C)
          }, [C]), (0, u.jsx)(Qu, {
            scope: r,
            orientation: n,
            dir: m,
            loop: o,
            currentTabStopId: b,
            onItemFocus: f.useCallback(e => h(e), [h]),
            onItemShiftTab: f.useCallback(() => w(!0), []),
            onFocusableItemAdd: f.useCallback(() => O(e => e + 1), []),
            onFocusableItemRemove: f.useCallback(() => O(e => e - 1), []),
            children: (0, u.jsx)(Ce.sG.div, {
              tabIndex: g || 0 === j ? -1 : 0,
              "data-orientation": n,
              ...p,
              ref: y,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, he.mK)(e.onMouseDown, () => {
                _.current = !0
              }),
              onFocus: (0, he.mK)(e.onFocus, e => {
                const t = !_.current;
                if (e.target === e.currentTarget && t && !g) {
                  const t = new CustomEvent(Bu, Xu);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = x().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === b),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    oc(n, c)
                  }
                }
                _.current = !1
              }),
              onBlur: (0, he.mK)(e.onBlur, () => w(!1))
            })
          })
        }),
        tc = "RovingFocusGroupItem",
        rc = f.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, ke.B)(), l = a || d, c = $u(tc, r), p = c.currentTabStopId === l, v = Zu(r), {
            onFocusableItemAdd: y,
            onFocusableItemRemove: m,
            currentTabStopId: b
          } = c, h = (0, qu.z)();
          return (0, ze.N)(() => {
            if (h && n) return y(), () => m()
          }, [h, n, y, m]), f.useEffect(() => {
            if (!h && n) return y(), () => m()
          }, [h, n, y, m]), (0, u.jsx)(Ku.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, u.jsx)(Ce.sG.span, {
              tabIndex: p ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, he.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, he.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, he.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : nc[n]
                }(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = v().filter(e => e.focusable);
                  let a = o.map(e => e.ref.current);
                  if ("last" === t) a.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && a.reverse();
                    const o = a.indexOf(e.currentTarget);
                    a = c.loop ? (n = o + 1, (r = a).map((e, t) => r[(n + t) % r.length])) : a.slice(o + 1)
                  }
                  setTimeout(() => oc(a))
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
      rc.displayName = tc;
      var nc = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function oc(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var ac = Ju,
        sc = rc,
        ic = "Toggle",
        dc = f.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, pt.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: ic
          });
          return (0, u.jsx)(Ce.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, he.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      dc.displayName = ic;
      var lc = "ToggleGroup",
        [uc, cc] = (0, we.A)(lc, [Yu]),
        fc = Yu(),
        pc = f.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, u.jsx)(mc, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, u.jsx)(bc, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${lc}\``)
        });
      pc.displayName = lc;
      var [vc, yc] = uc(lc), mc = f.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, pt.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: lc
        });
        return (0, u.jsx)(vc, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: f.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: f.useCallback(() => i(""), [i]),
          children: (0, u.jsx)(wc, {
            ...a,
            ref: t
          })
        })
      }), bc = f.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, pt.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: lc
        }), d = f.useCallback(e => i((t = []) => [...t, e]), [i]), l = f.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, u.jsx)(vc, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, u.jsx)(wc, {
            ...a,
            ref: t
          })
        })
      });
      pc.displayName = lc;
      var [hc, gc] = uc(lc), wc = f.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = fc(r), c = (0, Jt.jH)(s), f = {
          dir: c,
          ...d
        };
        return (0, u.jsx)(hc, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, u.jsx)(ac, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, u.jsx)(Ce.sG.div, {
              ...f,
              ref: t
            })
          }) : (0, u.jsx)(Ce.sG.div, {
            ...f,
            ref: t
          })
        })
      }), Cc = "ToggleGroupItem", xc = f.forwardRef((e, t) => {
        const r = yc(Cc, e.__scopeToggleGroup),
          n = gc(Cc, e.__scopeToggleGroup),
          o = fc(e.__scopeToggleGroup),
          a = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = f.useRef(null);
        return n.rovingFocus ? (0, u.jsx)(sc, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, u.jsx)(_c, {
            ...i,
            ref: t
          })
        }) : (0, u.jsx)(_c, {
          ...i,
          ref: t
        })
      });
      xc.displayName = Cc;
      var _c = f.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          value: n,
          ...o
        } = e, a = yc(Cc, r), s = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === a.type ? s : void 0;
        return (0, u.jsx)(dc, {
          ...i,
          ...o,
          ref: t,
          onPressedChange: e => {
            e ? a.onItemActivate(n) : a.onItemDeactivate(n)
          }
        })
      });

      function jc(e) {
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

      function Oc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Pc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Oc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = jc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Nc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Dc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pc(Pc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Dc(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Nc(e.variantClassNames, e => Nc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Sc = "var(--foundry_zxwkyk2)",
        Ec = "var(--foundry_zxwkyk3)",
        kc = Rc({
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
        Ic = Rc({
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
        Tc = Rc({
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
        Lc = "var(--foundry_zxwkyk1)",
        Vc = "var(--foundry_zxwkyk0)",
        zc = Rc({
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
      const Mc = (0, f.createContext)(null);

      function Ac() {
        const e = (0, f.useContext)(Mc);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }(0, f.forwardRef)(({
        testId: e,
        size: t,
        type: r = "single",
        ...n
      }, o) => {
        const a = (0, x.v6)({
          "data-testid": e,
          className: kc({
            size: t
          }),
          type: r
        }, n);
        return (0, u.jsx)(Mc.Provider, {
          value: {
            size: t
          },
          children: (0, u.jsx)(pc, {
            ref: o,
            ...a
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          size: n
        } = Ac(), o = (0, x.v6)({
          "data-testid": e,
          className: Ic({
            size: n
          })
        }, t);
        return (0, u.jsx)(xc, {
          ref: r,
          ...o
        })
      }), (0, f.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const {
          size: n
        } = Ac(), o = fe[e];
        return (0, u.jsx)(o, {
          label: "",
          ref: r,
          size: n,
          className: "foundry_zxwkykb",
          ...t
        })
      }), (0, f.forwardRef)(({
        testId: e,
        colorOverride: t,
        status: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
          "data-testid": e,
          className: zc({
            status: r
          }),
          style: (0, _.DI)({
            [Vc]: t?.online,
            [Lc]: t?.offline,
            [Sc]: t?.away,
            [Ec]: t?.busy
          })
        }, n);
        return (0, u.jsx)("span", {
          ref: o,
          ...a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        variant: t = "default",
        ...r
      }, n) => {
        const {
          size: o
        } = Ac(), a = (0, x.v6)({
          "data-testid": e,
          className: Tc({
            variant: t,
            size: o
          })
        }, r);
        return (0, u.jsx)("span", {
          ref: n,
          ...a
        })
      });
      var Fc = "Popover",
        [Hc, qc] = (0, we.A)(Fc, [He]),
        Bc = He(),
        [Xc, Gc] = Hc(Fc),
        Kc = "PopoverAnchor",
        Zc = f.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Gc(Kc, r), a = Bc(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = o;
          return f.useEffect(() => (s(), () => i()), [s, i]), (0, u.jsx)(ot, {
            ...a,
            ...n,
            ref: t
          })
        });
      Zc.displayName = Kc;
      var Uc = "PopoverTrigger",
        Wc = f.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Gc(Uc, r), a = Bc(r), s = (0, ge.s)(t, o.triggerRef), i = (0, u.jsx)(Ce.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": df(o.open),
            ...n,
            ref: s,
            onClick: (0, he.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, u.jsx)(ot, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      Wc.displayName = Uc;
      var Yc = "PopoverPortal",
        [Qc, $c] = Hc(Yc, {
          forceMount: void 0
        }),
        Jc = "PopoverContent",
        ef = f.forwardRef((e, t) => {
          const r = $c(Jc, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Gc(Jc, e.__scopePopover);
          return (0, u.jsx)(lt, {
            present: n || a.open,
            children: a.modal ? (0, u.jsx)(rf, {
              ...o,
              ref: t
            }) : (0, u.jsx)(nf, {
              ...o,
              ref: t
            })
          })
        });
      ef.displayName = Jc;
      var tf = (0, ft.TL)("PopoverContent.RemoveScroll"),
        rf = f.forwardRef((e, t) => {
          const r = Gc(Jc, e.__scopePopover),
            n = f.useRef(null),
            o = (0, ge.s)(t, n),
            a = f.useRef(!1);
          return f.useEffect(() => {
            const e = n.current;
            if (e) return (0, Yr.Eq)(e)
          }, []), (0, u.jsx)(Wr.A, {
            as: tf,
            allowPinchZoom: !0,
            children: (0, u.jsx)(of, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, he.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, he.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                a.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, he.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        nf = f.forwardRef((e, t) => {
          const r = Gc(Jc, e.__scopePopover),
            n = f.useRef(!1),
            o = f.useRef(!1);
          return (0, u.jsx)(of, {
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
        of = f.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: i,
            onPointerDownOutside: d,
            onFocusOutside: l,
            onInteractOutside: c,
            ...f
          } = e, p = Gc(Jc, r), v = Bc(r);
          return (0, Ur.Oh)(), (0, u.jsx)(Hr, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: (0, u.jsx)(Oe, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => p.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, u.jsx)(at, {
                "data-state": df(p.open),
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
        af = "PopoverClose";
      f.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = Gc(af, r);
        return (0, u.jsx)(Ce.sG.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: (0, he.mK)(e.onClick, () => o.onOpenChange(!1))
        })
      }).displayName = af;
      var sf = f.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = Bc(r);
        return (0, u.jsx)(st, {
          ...o,
          ...n,
          ref: t
        })
      });

      function df(e) {
        return e ? "open" : "closed"
      }
      sf.displayName = "PopoverArrow";
      var lf = Zc,
        uf = Wc,
        cf = ef,
        ff = sf;

      function pf(e) {
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

      function vf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = pf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        hf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yf(yf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) bf(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mf(e.variantClassNames, e => mf(e, e => e.split(" ")[0]))
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
      const gf = (0, f.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        wf = ((0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, u.jsx)(uf, {
            ref: r,
            ...n
          })
        }), {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        });

      function Cf(e) {
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

      function xf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Cf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        children: e,
        size: t = "MD",
        testId: r,
        ...n
      }, o) => {
        const {
          open: a
        } = (0, f.useContext)(gf), s = (0, f.useRef)(null), i = (0, U.UP)(s, o), {
          buttonProps: d
        } = (0, U.sL)(n, s), l = (0, x.v6)({
          "data-testid": r,
          className: hf({
            size: t
          })
        }, d), c = a ? ce.rX : ce.yQ;
        return (0, u.jsxs)("button", {
          ref: i,
          ...l,
          children: [e, (0, u.jsx)(c, {
            label: "",
            size: wf[t]
          })]
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e
        }, t);
        return (0, u.jsx)(lf, {
          ref: r,
          ...n
        })
      }), (0, f.forwardRef)(({
        sideOffset: e = 6,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
          sideOffset: e,
          "data-testid": t,
          className: "foundry_lroh6l6"
        }, r);
        return (0, u.jsx)(cf, {
          ref: n,
          ...o
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e,
          className: "foundry_lroh6l7"
        }, t);
        return (0, u.jsx)(ff, {
          ref: r,
          ...n
        })
      });
      var Of = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _f(_f({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Of(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jf(e.variantClassNames, e => jf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nf = "var(--foundry_rmorls2)",
        Df = Pf({
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
        Rf = "var(--foundry_rmorls0)",
        Sf = Pf({
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
        Ef = "var(--foundry_rmorls3)",
        kf = "var(--foundry_rmorls1)",
        If = Pf({
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
        Tf = "Progress",
        [Lf, Vf] = (0, we.A)(Tf),
        [zf, Mf] = Lf(Tf),
        Af = f.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: a = qf,
            ...s
          } = e;
          !o && 0 !== o || Gf(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = Gf(o) ? o : 100;
          null === n || Kf(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = Kf(n, i) ? n : null,
            l = Xf(d) ? a(d, i) : void 0;
          return (0, u.jsx)(zf, {
            scope: r,
            value: d,
            max: i,
            children: (0, u.jsx)(Ce.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": Xf(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Bf(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        });
      Af.displayName = Tf;
      var Ff = "ProgressIndicator",
        Hf = f.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Mf(Ff, r);
          return (0, u.jsx)(Ce.sG.div, {
            "data-state": Bf(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function qf(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function Bf(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function Xf(e) {
        return "number" == typeof e
      }

      function Gf(e) {
        return Xf(e) && !isNaN(e) && e > 0
      }

      function Kf(e, t) {
        return Xf(e) && !isNaN(e) && e <= t && e >= 0
      }
      Hf.displayName = Ff;
      var Zf = Af,
        Uf = Hf;
      const Wf = (0, f.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Yf = ((0, f.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, u.jsx)(Wf.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, u.jsx)(Yf, {
              ...n,
              ref: o
            })
          })
        }), (0, f.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? p.DX : "div";
          return (0, u.jsx)(a, {
            ...o,
            ref: n
          })
        }));
      (0, f.forwardRef)(({
        testId: e,
        colorOverride: t,
        ...r
      }, n) => {
        const {
          value: o,
          max: a,
          size: s
        } = (0, f.useContext)(Wf), i = (0, x.v6)({
          "data-testid": e,
          className: Sf({
            size: s
          }),
          value: o,
          max: a,
          style: (0, _.DI)({
            [Ef]: t
          }),
          "data-track": !0
        }, r);
        return (0, u.jsx)(Zf, {
          ref: n,
          ...i
        })
      }), (0, f.forwardRef)(({
        testId: e,
        transitionDuration: t = 500,
        colorOverride: r,
        ...n
      }, o) => {
        const {
          percentage: a,
          isInvalid: s
        } = (0, f.useContext)(Wf), i = s ? "-100%" : `-${100-a}%`, d = (0, x.v6)({
          "data-testid": e,
          className: "foundry_rmorls9",
          style: (0, _.DI)({
            [Rf]: i,
            [kf]: `${t}ms`,
            [Nf]: r
          })
        }, n);
        return (0, u.jsx)(Uf, {
          ref: o,
          ...d
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const {
          size: o
        } = (0, f.useContext)(Wf), a = (0, x.v6)({
          "data-testid": t,
          className: Df({
            size: o
          }),
          "aria-hidden": !0
        }, r), s = e ? p.DX : "span";
        return (0, u.jsx)(s, {
          ref: n,
          ...a
        })
      }), (0, f.forwardRef)(({
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
        } = (0, f.useContext)(Wf), l = (0, x.v6)({
          "data-testid": e,
          className: Df({
            size: s
          }),
          "aria-hidden": !0
        }, r);
        return d ? (0, u.jsx)("span", {
          ref: n,
          ...l
        }) : "percentage" === t ? (0, u.jsxs)("span", {
          ref: n,
          ...l,
          children: [i, " ", (0, u.jsx)("span", {
            className: If({
              size: s
            }),
            children: "%"
          })]
        }) : (0, u.jsxs)("span", {
          ref: n,
          ...l,
          children: [o, "/", a]
        })
      });
      var Qf = "Collapsible",
        [$f, Jf] = (0, we.A)(Qf),
        [ep, tp] = $f(Qf),
        rp = f.forwardRef((e, t) => {
          const {
            __scopeCollapsible: r,
            open: n,
            defaultOpen: o,
            disabled: a,
            onOpenChange: s,
            ...i
          } = e, [d, l] = (0, pt.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Qf
          });
          return (0, u.jsx)(ep, {
            scope: r,
            disabled: a,
            contentId: (0, ke.B)(),
            open: d,
            onOpenToggle: f.useCallback(() => l(e => !e), [l]),
            children: (0, u.jsx)(Ce.sG.div, {
              "data-state": dp(d),
              "data-disabled": a ? "" : void 0,
              ...i,
              ref: t
            })
          })
        });
      rp.displayName = Qf;
      var np = "CollapsibleTrigger",
        op = f.forwardRef((e, t) => {
          const {
            __scopeCollapsible: r,
            ...n
          } = e, o = tp(np, r);
          return (0, u.jsx)(Ce.sG.button, {
            type: "button",
            "aria-controls": o.open ? o.contentId : void 0,
            "aria-expanded": o.open || !1,
            "data-state": dp(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...n,
            ref: t,
            onClick: (0, he.mK)(e.onClick, o.onOpenToggle)
          })
        });
      op.displayName = np;
      var ap = "CollapsibleContent",
        sp = f.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = tp(ap, e.__scopeCollapsible);
          return (0, u.jsx)(lt, {
            present: r || o.open,
            children: ({
              present: e
            }) => (0, u.jsx)(ip, {
              ...n,
              ref: t,
              present: e
            })
          })
        });
      sp.displayName = ap;
      var ip = f.forwardRef((e, t) => {
        const {
          __scopeCollapsible: r,
          present: n,
          children: o,
          ...a
        } = e, s = tp(ap, r), [i, d] = f.useState(n), l = f.useRef(null), c = (0, ge.s)(t, l), p = f.useRef(0), v = p.current, y = f.useRef(0), m = y.current, b = s.open || i, h = f.useRef(b), g = f.useRef(void 0);
        return f.useEffect(() => {
          const e = requestAnimationFrame(() => h.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, ze.N)(() => {
          const e = l.current;
          if (e) {
            g.current = g.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const t = e.getBoundingClientRect();
            p.current = t.height, y.current = t.width, h.current || (e.style.transitionDuration = g.current.transitionDuration, e.style.animationName = g.current.animationName), d(n)
          }
        }, [s.open, n]), (0, u.jsx)(Ce.sG.div, {
          "data-state": dp(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !b,
          ...a,
          ref: c,
          style: {
            "--radix-collapsible-content-height": v ? `${v}px` : void 0,
            "--radix-collapsible-content-width": m ? `${m}px` : void 0,
            ...e.style
          },
          children: b && o
        })
      });

      function dp(e) {
        return e ? "open" : "closed"
      }
      var lp = rp,
        up = op,
        cp = sp,
        fp = "Accordion",
        pp = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [vp, yp, mp] = tr(fp),
        [bp, hp] = (0, we.A)(fp, [mp, Jf]),
        gp = Jf(),
        wp = f.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e, o = n, a = n;
          return (0, u.jsx)(vp.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, u.jsx)(Pp, {
              ...a,
              ref: t
            }) : (0, u.jsx)(Op, {
              ...o,
              ref: t
            })
          })
        });
      wp.displayName = fp;
      var [Cp, xp] = bp(fp), [_p, jp] = bp(fp, {
        collapsible: !1
      }), Op = f.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          collapsible: a = !1,
          ...s
        } = e, [i, d] = (0, pt.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: fp
        });
        return (0, u.jsx)(Cp, {
          scope: e.__scopeAccordion,
          value: f.useMemo(() => i ? [i] : [], [i]),
          onItemOpen: d,
          onItemClose: f.useCallback(() => a && d(""), [a, d]),
          children: (0, u.jsx)(_p, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: (0, u.jsx)(Rp, {
              ...s,
              ref: t
            })
          })
        })
      }), Pp = f.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, pt.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: fp
        }), d = f.useCallback(e => i((t = []) => [...t, e]), [i]), l = f.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, u.jsx)(Cp, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: d,
          onItemClose: l,
          children: (0, u.jsx)(_p, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, u.jsx)(Rp, {
              ...a,
              ref: t
            })
          })
        })
      }), [Np, Dp] = bp(fp), Rp = f.forwardRef((e, t) => {
        const {
          __scopeAccordion: r,
          disabled: n,
          dir: o,
          orientation: a = "vertical",
          ...s
        } = e, i = f.useRef(null), d = (0, ge.s)(i, t), l = yp(r), c = "ltr" === (0, Jt.jH)(o), p = (0, he.mK)(e.onKeyDown, e => {
          if (!pp.includes(e.key)) return;
          const t = e.target,
            r = l().filter(e => !e.ref.current?.disabled),
            n = r.findIndex(e => e.ref.current === t),
            o = r.length;
          if (-1 === n) return;
          e.preventDefault();
          let s = n;
          const i = o - 1,
            d = () => {
              s = n + 1, s > i && (s = 0)
            },
            u = () => {
              s = n - 1, s < 0 && (s = i)
            };
          switch (e.key) {
            case "Home":
              s = 0;
              break;
            case "End":
              s = i;
              break;
            case "ArrowRight":
              "horizontal" === a && (c ? d() : u());
              break;
            case "ArrowDown":
              "vertical" === a && d();
              break;
            case "ArrowLeft":
              "horizontal" === a && (c ? u() : d());
              break;
            case "ArrowUp":
              "vertical" === a && u()
          }
          const f = s % o;
          r[f].ref.current?.focus()
        });
        return (0, u.jsx)(Np, {
          scope: r,
          disabled: n,
          direction: o,
          orientation: a,
          children: (0, u.jsx)(vp.Slot, {
            scope: r,
            children: (0, u.jsx)(Ce.sG.div, {
              ...s,
              "data-orientation": a,
              ref: d,
              onKeyDown: n ? void 0 : p
            })
          })
        })
      }), Sp = "AccordionItem", [Ep, kp] = bp(Sp), Ip = f.forwardRef((e, t) => {
        const {
          __scopeAccordion: r,
          value: n,
          ...o
        } = e, a = Dp(Sp, r), s = xp(Sp, r), i = gp(r), d = (0, ke.B)(), l = n && s.value.includes(n) || !1, c = a.disabled || e.disabled;
        return (0, u.jsx)(Ep, {
          scope: r,
          open: l,
          disabled: c,
          triggerId: d,
          children: (0, u.jsx)(lp, {
            "data-orientation": a.orientation,
            "data-state": Fp(l),
            ...i,
            ...o,
            ref: t,
            disabled: c,
            open: l,
            onOpenChange: e => {
              e ? s.onItemOpen(n) : s.onItemClose(n)
            }
          })
        })
      });
      Ip.displayName = Sp;
      var Tp = "AccordionHeader",
        Lp = f.forwardRef((e, t) => {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Dp(fp, r), a = kp(Tp, r);
          return (0, u.jsx)(Ce.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": Fp(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...n,
            ref: t
          })
        });
      Lp.displayName = Tp;
      var Vp = "AccordionTrigger",
        zp = f.forwardRef((e, t) => {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Dp(fp, r), a = kp(Vp, r), s = jp(Vp, r), i = gp(r);
          return (0, u.jsx)(vp.ItemSlot, {
            scope: r,
            children: (0, u.jsx)(up, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...i,
              ...n,
              ref: t
            })
          })
        });
      zp.displayName = Vp;
      var Mp = "AccordionContent",
        Ap = f.forwardRef((e, t) => {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Dp(fp, r), a = kp(Mp, r), s = gp(r);
          return (0, u.jsx)(cp, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": o.orientation,
            ...s,
            ...n,
            ref: t,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        });

      function Fp(e) {
        return e ? "open" : "closed"
      }
      Ap.displayName = Mp;
      var Hp = wp,
        qp = Ip,
        Bp = Lp,
        Xp = zp,
        Gp = Ap;

      function Kp(e) {
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

      function Zp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Up(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Kp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Wp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Yp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Qp = "foundry_1vzsjid2",
        $p = "foundry_1vzsjidm",
        Jp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Up(Up({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Yp(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wp(e.variantClassNames, e => Wp(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1vzsjid5",
          variantClassNames: {
            mode: {
              solid: "foundry_1vzsjid6",
              alpha: "foundry_1vzsjid7"
            },
            layer: {
              0: "foundry_1vzsjid8",
              1: "foundry_1vzsjid9",
              2: "foundry_1vzsjida",
              3: "foundry_1vzsjidb"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              mode: "alpha",
              layer: 0
            }, "foundry_1vzsjidc"],
            [{
              mode: "alpha",
              layer: 1
            }, "foundry_1vzsjidd"],
            [{
              mode: "alpha",
              layer: 2
            }, "foundry_1vzsjide"],
            [{
              mode: "alpha",
              layer: 3
            }, "foundry_1vzsjidf"]
          ]
        });
      const ev = (0, f.createContext)({
          mode: "solid",
          layer: 0
        }),
        tv = ((0, f.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, u.jsx)(ev.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, u.jsx)(tv, {
            ...n,
            ref: o,
            type: r
          })
        })), (0, f.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, x.v6)({
            "data-testid": e,
            type: t
          }, r);
          return (0, u.jsx)(Hp, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        })),
        rv = ((0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, f.useContext)(ev), a = (0, x.v6)({
            className: Jp({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, u.jsx)(qp, {
            ref: r,
            ...a
          })
        }), (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, u.jsx)(Bp, {
            ref: r,
            ...n
          })
        }), (0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, u.jsx)(Xp, {
            ref: n,
            ...o,
            children: r.asChild && (0, f.isValidElement)(e) ? (0, f.cloneElement)(e, {
              children: (0, u.jsx)("span", {
                className: Qp,
                children: e.props.children
              })
            }) : (0, u.jsx)("span", {
              className: Qp,
              children: e
            })
          })
        }), (0, f.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = fe[e],
            o = (0, x.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, u.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }), (0, f.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = fe[e],
            o = (0, x.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, u.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }), (0, f.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, x.v6)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": r,
            asChild: t
          }, n);
          return (0, u.jsx)(Gp, {
            ref: o,
            ...a,
            children: t && (0, f.isValidElement)(e) ? (0, f.cloneElement)(e, {
              children: (0, u.jsx)("div", {
                className: $p,
                children: e.props.children
              })
            }) : (0, u.jsx)("div", {
              className: $p,
              children: e
            })
          })
        }), {
          MD: _.LU.global.spacing.dimensions[200],
          LG: _.LU.global.spacing.dimensions[250],
          XL: _.LU.global.spacing.dimensions[300]
        }),
        nv = (0, f.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, u.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: rv[t],
          viewBox: "0 0 93 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, u.jsx)("path", {
            d: "M70.062 5.19368V4.08909C70.062 4.04208 70.015 3.99508 69.968 3.99508H62.1183C59.8387 3.99508 58.7341 5.40519 58.7341 7.21484V12.7613C58.7341 13.8894 58.1935 14.712 57.0654 14.712H49.7093C49.6623 14.712 49.6153 14.759 49.6153 14.806V15.9106C49.6153 15.9576 49.6623 16.0046 49.7093 16.0046H57.935C60.2147 16.0046 61.3193 14.618 61.3193 12.7848V7.23835C61.3193 6.11025 61.8598 5.28768 62.9879 5.28768H69.968C70.015 5.28768 70.062 5.24068 70.062 5.19368Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M46.8421 3.99508H32.6704C32.6234 3.99508 32.5764 4.04208 32.5764 4.08909V5.19368C32.5764 5.24068 32.6234 5.28768 32.6704 5.28768H45.996C47.1241 5.28768 47.6647 6.11025 47.6647 7.23835C47.6647 8.36644 47.1241 9.18901 45.996 9.18901H35.4436C33.7985 9.18901 32.5764 10.5756 32.5764 12.3853V15.9341C32.5764 15.9811 32.6234 16.0281 32.6704 16.0281H35.0676C35.1146 16.0281 35.1616 15.9811 35.1616 15.9341V12.3853C35.1616 11.2572 35.8197 10.4581 36.7362 10.4581H46.8421C49.1218 10.4581 50.2264 9.0715 50.2264 7.23835C50.2264 5.4052 49.1218 4.01858 46.8421 4.01858V3.99508Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M86.1844 13.4194C86.1374 13.4194 86.0903 13.3724 86.0903 13.3253V5.26418C86.0903 4.01858 85.2443 3.61905 84.0222 4.37111L69.5685 13.2548C69.0044 13.6074 68.8164 14.0069 68.9574 14.2889C69.0749 14.5475 69.3805 14.712 70.015 14.712H83.4346C83.4816 14.712 83.5051 14.7355 83.5051 14.7825V15.9106C83.5051 15.9576 83.5521 16.0046 83.5991 16.0046H86.0198C86.0668 16.0046 86.1138 15.9576 86.1138 15.9106V14.806C86.1138 14.759 86.1609 14.712 86.2079 14.712H88.6051C88.6521 14.712 88.6991 14.665 88.6991 14.618V13.5134C88.6991 13.4664 88.6521 13.4194 88.6051 13.4194H86.1844ZM83.5286 13.3253C83.5286 13.3724 83.4816 13.4194 83.4346 13.4194H72.1772C72.0832 13.4194 72.0362 13.3959 72.0362 13.3724C72.0362 13.3254 72.0362 13.2783 72.1302 13.2313L83.3171 6.34527C83.3876 6.29827 83.5286 6.29827 83.5286 6.46278V13.3489V13.3253Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M91.0246 13.9838C91.6121 13.9838 92.0117 14.4304 92.0117 14.9944C92.0117 15.5585 91.6121 16.005 91.0246 16.005C90.437 16.005 90.014 15.5585 90.014 14.9944C90.014 14.4304 90.4135 13.9838 91.0246 13.9838ZM91.0246 15.8405C91.5181 15.8405 91.8707 15.4645 91.8707 14.9944C91.8707 14.5244 91.5416 14.1484 91.0246 14.1484C90.5075 14.1484 90.1785 14.5244 90.1785 14.9944C90.1785 15.4645 90.5075 15.8405 91.0246 15.8405ZM90.6251 14.4069H91.0716C91.2831 14.4069 91.4476 14.4774 91.4476 14.7124C91.4476 14.9474 91.3771 14.9474 91.2361 14.9944C91.3066 15.0179 91.3536 15.0649 91.4006 15.2059C91.4476 15.3235 91.4711 15.4645 91.5181 15.5585H91.3066C91.2831 15.4645 91.2361 15.3235 91.2126 15.253C91.1891 15.1119 91.1421 15.0884 90.9776 15.0884H90.8366V15.582H90.6251V14.4069ZM90.8366 14.9239H91.0246C91.1656 14.9239 91.2596 14.8769 91.2596 14.7359C91.2596 14.5949 91.1421 14.5479 91.0481 14.5479H90.8601V14.9239H90.8366Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M15.5833 4.88841V11.1399C18.2155 12.409 20.2837 11.1399 20.2837 7.77915C20.2837 4.41837 19.0616 2.82023 15.4893 1.59813C14.0791 1.12809 11.4704 0.329027 9.68428 0V18.637L13.9146 19.9767V4.34786C13.9146 3.6193 14.2437 3.12576 14.7607 3.29027C15.4423 3.47829 15.5833 4.15985 15.5833 4.88841Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M23.9735 13.0906C22.2108 12.4325 19.9546 12.1975 18.1215 12.409C16.2883 12.597 14.9722 13.0671 14.9722 13.0671L14.7137 13.1611V15.6993L19.2261 14.1012C20.0016 13.8191 21.1297 13.7721 21.7643 13.9602C22.3753 14.1717 22.2578 14.5477 21.5058 14.8297L14.7137 17.2504V19.6946L23.9265 16.3809C23.9265 16.3809 25.1721 15.9108 25.6656 15.2763C26.1591 14.6417 25.9476 13.7016 23.95 13.0671L23.9735 13.0906Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M0.495017 14.5242C-0.445061 15.2293 -0.0925317 16.4279 1.95214 16.9919C4.13782 17.7205 6.3705 17.8615 8.46218 17.509C8.60319 17.509 8.7442 17.462 8.88521 17.4384V15.2528L6.79354 16.0048C6.01797 16.2869 4.91338 16.3574 4.27883 16.1458C3.66778 15.9343 3.78529 15.5583 4.53735 15.2763L8.88521 13.7251V11.2809L2.84521 13.4431C2.84521 13.4431 1.38809 13.9132 0.518519 14.5477L0.495017 14.5242Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M24.467 18.9896C24.608 18.9426 24.6785 18.8486 24.6785 18.7076C24.6785 18.4725 24.514 18.402 24.3025 18.402H23.856V19.5536H24.0675V19.0601H24.2085C24.373 19.0601 24.42 19.1071 24.4435 19.2246C24.467 19.2951 24.514 19.4596 24.5375 19.5301H24.749C24.7255 19.4126 24.6785 19.2951 24.6315 19.1776C24.5845 19.0366 24.5375 18.9896 24.467 18.9661V18.9896ZM24.232 18.9191H24.044V18.543H24.232C24.3495 18.543 24.4435 18.5665 24.4435 18.7311C24.4435 18.8956 24.3495 18.9191 24.2085 18.9191H24.232Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M24.2555 17.979C23.6679 17.979 23.2449 18.4255 23.2449 18.9896C23.2449 19.5536 23.6444 20.0002 24.2555 20.0002C24.8665 20.0002 25.2426 19.5536 25.2426 18.9896C25.2426 18.4255 24.843 17.979 24.2555 17.979ZM24.2555 19.8356C23.7384 19.8356 23.4094 19.4596 23.4094 18.9896C23.4094 18.5195 23.7384 18.1435 24.2555 18.1435C24.7725 18.1435 25.1016 18.5195 25.1016 18.9896C25.1016 19.4596 24.7725 19.8356 24.2555 19.8356Z",
            fill: e
          })]
        })),
        ov = (0, f.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: rv[t],
          viewBox: "0 0 92 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, u.jsx)("path", {
            d: "M9.58333 0C11.3552 0.328638 13.9663 1.12676 15.3418 1.59624C18.8854 2.8169 20.0977 4.34272 20.0977 7.76995C20.0977 11.1972 18.0461 12.3944 15.435 11.1268V4.88263C15.435 4.15493 15.2951 3.47418 14.6191 3.28639C14.1062 3.12207 13.7798 3.61502 13.7798 4.34272V19.9531L9.58333 18.615V0ZM14.5724 19.6948L23.7113 16.385C23.7113 16.385 24.947 15.9155 25.4365 15.2817C25.9261 14.6479 25.7163 13.7089 23.7347 13.0986C21.9861 12.4413 19.748 12.2066 17.9296 12.4178C16.1111 12.6056 14.8056 13.0751 14.8056 13.0751L14.5491 13.169V15.7042L19.0253 14.108C19.7947 13.8263 20.9137 13.7793 21.5432 13.9671C22.1493 14.1784 22.0328 14.554 21.2867 14.8357L14.5491 17.2535V19.6948H14.5724ZM1.91317 16.9953C4.08133 17.723 6.29612 17.8638 8.37103 17.5117C8.51091 17.5117 8.65079 17.4648 8.79067 17.4413V15.2582L6.71576 16.0094C5.94642 16.2911 4.85068 16.3615 4.22122 16.1502C3.61506 15.939 3.73163 15.5634 4.47766 15.2817L8.79067 13.7324V11.2911L2.79909 13.4507C2.79909 13.4507 1.35365 13.9202 0.491048 14.554C-0.441493 15.2582 -0.0917898 16.4554 1.93649 17.0188M24.0377 17.9812C23.4549 17.9812 23.0352 18.4272 23.0352 18.9906C23.0352 19.554 23.4316 20 24.0377 20C24.6439 20 25.0169 19.554 25.0169 18.9906C25.0169 18.4272 24.6206 17.9812 24.0377 17.9812ZM24.0377 19.8122C23.5248 19.8122 23.1984 19.4366 23.1984 18.9671C23.1984 18.4977 23.5248 18.1221 24.0377 18.1221C24.5506 18.1221 24.877 18.4977 24.877 18.9671C24.877 19.4366 24.5506 19.8122 24.0377 19.8122ZM23.6414 19.554H23.8512V19.061H23.9911C24.1543 19.061 24.2009 19.108 24.2242 19.2254C24.2476 19.2958 24.2942 19.4601 24.3175 19.5305H24.5273C24.504 19.4131 24.4574 19.2958 24.4107 19.1784C24.3641 19.0376 24.3175 18.9906 24.2476 18.9671C24.3874 18.9202 24.4574 18.8263 24.4574 18.6854C24.4574 18.4507 24.2942 18.3803 24.0844 18.3803H23.6414V19.5305V19.554ZM23.8279 18.5446H24.0144C24.131 18.5446 24.2242 18.5681 24.2242 18.7324C24.2242 18.8967 24.131 18.9202 23.9911 18.9202H23.8046V18.5446H23.8279ZM56.4436 15.9859C58.2154 15.9859 59.6375 14.554 59.6375 12.77V7.23005C59.6375 6.15024 60.5001 5.28169 61.5725 5.28169H67.7739C67.8206 5.28169 67.8672 5.23474 67.8672 5.18779V4.08451C67.8672 4.03756 67.8206 3.99061 67.7739 3.99061H60.2903C58.5185 3.99061 57.0963 5.42253 57.0963 7.20657V12.7465C57.0963 13.8263 56.2337 14.6948 55.1613 14.6948H49.0532C49.0065 14.6948 48.9599 14.7418 48.9599 14.7887V15.892C48.9599 15.939 49.0065 15.9859 49.0532 15.9859H56.4436ZM70.4084 8.49765C70.4084 9.57746 71.271 10.446 72.3434 10.446H83.2774C84.4431 10.446 85.4223 11.4085 85.399 12.5822C85.399 13.7559 84.4431 14.6948 83.2774 14.6948C83.2774 14.6948 73.6956 14.6948 70.5016 14.6948C70.455 14.6948 70.4084 14.7418 70.4084 14.7887V15.892C70.4084 15.939 70.455 15.9859 70.5016 15.9859H84.5597C86.4248 15.9859 87.9402 14.4601 87.9402 12.5822C87.9402 10.7042 86.4248 9.1784 84.5597 9.1784H73.8821C73.3692 9.1784 72.9729 8.75587 72.9729 8.26291V5.37559C72.9729 5.32864 73.0195 5.28169 73.0661 5.28169H87.4273C87.4739 5.28169 87.5205 5.23474 87.5205 5.18779V4.08451C87.5205 4.03756 87.4739 3.99061 87.4273 3.99061H70.5249C70.4783 3.99061 70.4317 4.03756 70.4317 4.08451C70.4317 4.74178 70.4317 6.87793 70.4317 8.49765M35.4847 9.15493C33.7128 9.15493 32.2907 10.5869 32.2907 12.3709C32.2907 12.3709 32.2907 14.9296 32.2907 15.892C32.2907 15.939 32.3373 15.9859 32.384 15.9859H34.762C34.8086 15.9859 34.8552 15.939 34.8552 15.892V12.3709C34.8552 11.2911 35.7178 10.4225 36.7902 10.4225H46.6286C48.4004 10.4225 49.8225 8.99061 49.8225 7.20657C49.8225 5.42253 48.4004 3.99061 46.6286 3.99061H32.4073C32.3607 3.99061 32.314 4.03756 32.314 4.08451V5.18779C32.314 5.23474 32.3607 5.28169 32.4073 5.28169H45.3696C46.442 5.28169 47.3046 6.15024 47.3046 7.23005C47.3046 8.30986 46.442 9.1784 45.3696 9.1784H35.5313L35.4847 9.15493ZM91.2507 14.9531C91.2507 15.5164 90.8543 15.9624 90.2715 15.9624C89.6887 15.9624 89.269 15.5164 89.269 14.9531C89.269 14.3897 89.6654 13.9437 90.2715 13.9437C90.8777 13.9437 91.2507 14.3897 91.2507 14.9531ZM91.0875 14.9531C91.0875 14.4836 90.7611 14.108 90.2482 14.108C89.7353 14.108 89.4089 14.4836 89.4089 14.9531C89.4089 15.4225 89.7353 15.7981 90.2482 15.7981C90.7611 15.7981 91.0875 15.4225 91.0875 14.9531ZM90.6445 15.1643C90.6912 15.2817 90.7145 15.4225 90.7611 15.5164H90.5513C90.528 15.4225 90.4813 15.2817 90.458 15.2113C90.4347 15.0704 90.3881 15.0469 90.2249 15.0469H90.085V15.5399H89.8752V14.3897H90.3181C90.528 14.3897 90.6912 14.4601 90.6912 14.6948C90.6912 14.9296 90.6212 14.9296 90.4813 14.9765C90.5513 15 90.5979 15.0469 90.6445 15.1878V15.1643ZM90.4813 14.6948C90.4813 14.5305 90.3648 14.507 90.2715 14.507H90.085V14.8826H90.2715C90.4114 14.8826 90.5046 14.8357 90.5046 14.6948H90.4813Z",
            fill: e
          })
        })),
        av = (0, f.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, u.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: rv[t],
          viewBox: "0 0 33 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, u.jsx)("path", {
            d: "M7.34117 9.61429C7.7883 9.61536 8.23491 9.59031 8.6778 9.53928C9.07276 9.49838 9.45591 9.40006 9.80952 9.24891C10.1317 9.10768 10.4019 8.89726 10.5916 8.63973C10.7887 8.3776 10.8873 8.03424 10.8873 7.60959C10.8873 7.18494 10.7887 6.8413 10.5916 6.57878C10.4014 6.32174 10.1314 6.1116 9.80952 5.97026C9.45578 5.81934 9.0727 5.72107 8.6778 5.6799C8.23491 5.6292 7.78824 5.6041 7.34117 5.60488H4.2033V9.61429H7.34117ZM8.44707 3.31884C9.59417 3.31884 10.5713 3.44063 11.3785 3.68422C12.1856 3.9278 12.8415 4.24941 13.3463 4.64907C13.8357 5.02963 14.2139 5.49737 14.4522 6.01681C14.9152 7.04079 14.9152 8.16864 14.4522 9.19267C14.2163 9.71592 13.8379 10.1872 13.3463 10.5701C12.84 10.9698 12.184 11.2913 11.3785 11.5349C10.5729 11.7785 9.59574 11.9003 8.44707 11.9003H4.2033V16.6968H0.166016V3.31884H8.44707Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M28.2135 6.88796C27.966 6.60113 27.6617 6.35099 27.3133 6.14813C26.9401 5.9306 26.5279 5.76298 26.0916 5.65149C25.6303 5.53153 25.1494 5.4709 24.6658 5.47171C23.7565 5.47171 22.9848 5.59975 22.3508 5.85586C21.7447 6.09295 21.2157 6.44606 20.8077 6.886C20.4087 7.32589 20.1165 7.82544 19.9473 8.35721C19.7656 8.91334 19.674 9.48701 19.6752 10.0631C19.6741 10.6173 19.7652 11.1689 19.9457 11.7025C20.1182 12.2215 20.4104 12.7081 20.8061 13.1355C21.2166 13.5712 21.7452 13.9209 22.3492 14.1566C22.9838 14.4127 23.7555 14.5408 24.6643 14.5408C25.8974 14.5408 26.862 14.2659 27.5581 13.7163C28.2542 13.1666 28.6786 12.4421 28.8314 11.5428H32.742C32.6546 12.3356 32.382 13.1068 31.9395 13.8139C31.5214 14.4778 30.9439 15.0642 30.2423 15.5373C29.5097 16.0253 28.6718 16.3942 27.7732 16.6244C26.766 16.8824 25.7163 17.009 24.6619 16.9994C23.2542 16.9994 21.9895 16.8214 20.8679 16.4653C19.7463 16.1092 18.7992 15.6188 18.0265 14.9941C17.2558 14.3717 16.6513 13.6227 16.2518 12.7954C15.8351 11.9261 15.6265 10.9982 15.6379 10.0631C15.6275 9.11222 15.8369 8.16835 16.255 7.28242C16.6534 6.44298 17.2577 5.68074 18.0296 5.0436C18.8039 4.40641 19.751 3.9063 20.871 3.5433C21.991 3.1803 23.2559 2.99923 24.6658 3.00009C25.6348 2.99561 26.5999 3.10292 27.5331 3.3189C28.3948 3.51672 29.2114 3.82999 29.9506 4.24624C30.6544 4.64619 31.2534 5.15931 31.7119 5.75497C32.1855 6.3795 32.4842 7.08365 32.5863 7.81592H28.6757C28.6086 7.48158 28.4511 7.16421 28.2135 6.88796Z",
            fill: e
          })]
        })),
        sv = (0, f.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: rv[t],
          viewBox: "0 0 104 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, u.jsx)("path", {
            d: "M9.97484 8.02222C9.98593 8.02222 10.0026 8.03333 10.0081 8.03889C12.9895 10.3111 18.0988 15.9389 16.5416 17.5278C14.7849 19.0667 12.4907 20 9.97484 20C7.45897 20 5.16475 19.0667 3.40807 17.5278C1.85089 15.9389 6.96022 10.3111 9.94159 8.03889C9.94713 8.03333 9.96376 8.02222 9.97484 8.02222ZM15.1728 1.46111C13.6434 0.55 11.992 0 9.97484 0C7.95771 0 6.30632 0.555556 4.77684 1.46111C4.76022 1.47222 4.74913 1.49444 4.76022 1.51111C4.76576 1.52778 4.78792 1.53333 4.81009 1.52778C6.7441 1.11111 9.6756 2.78333 9.95268 2.95C9.95822 2.95 9.96376 2.95556 9.97484 2.95556C9.98593 2.95556 9.99147 2.95556 9.99701 2.95C10.2741 2.78333 13.2111 1.11111 15.1396 1.52778C15.1618 1.52778 15.1784 1.52778 15.1895 1.51111C15.2006 1.49444 15.1895 1.47222 15.1728 1.46111ZM2.99245 2.86667C2.97583 2.87778 2.9592 2.88889 2.94812 2.9C1.13048 4.71111 0 7.22222 0 9.99444C0 12.7667 0.759196 14.3722 2.0393 16.0556C2.05038 16.0722 2.07255 16.0833 2.09472 16.0722C2.11134 16.0611 2.11134 16.0389 2.1058 16.0222C1.3466 13.6667 5.23125 7.95 7.24284 5.55556C7.24838 5.55 7.25393 5.53889 7.25393 5.52778C7.25393 5.51667 7.24839 5.50556 7.2373 5.49444C4.19498 2.46111 3.16424 2.78333 2.99245 2.86667ZM12.7179 5.49444C12.7068 5.5 12.7013 5.51111 12.7013 5.52778C12.7013 5.54444 12.7068 5.55 12.7124 5.55556C14.7184 7.95 18.6086 13.6667 17.8494 16.0222C17.8439 16.0389 17.8439 16.0611 17.8605 16.0722C17.8771 16.0833 17.8993 16.0722 17.9159 16.0556C19.196 14.3722 19.9552 12.2778 19.9552 9.99444C19.9552 7.71111 18.8247 4.71111 17.0071 2.9C16.996 2.88889 16.9794 2.87222 16.9628 2.86667C16.7965 2.77778 15.7603 2.45556 12.7179 5.49444ZM34.7125 16.1611H32.6731L29.1598 11.3111L25.6464 16.1611H23.6071L28.1401 9.90555L23.9618 4.13889H26.0011L29.1598 8.49444L32.3185 4.13889H34.3578L30.1794 9.90555L34.7125 16.1611ZM45.3079 12.7444C45.3079 13.8 44.9588 14.6444 44.2717 15.25C43.5845 15.8556 42.5815 16.1611 41.2958 16.1611H35.6711V10.8056H33.0001L34.114 9.27222H35.6767V4.13889H41.0631C42.2712 4.13889 43.2077 4.42778 43.8561 5C44.4989 5.57222 44.8258 6.33889 44.8258 7.26667C44.8258 8.19444 44.3049 9.3 43.2742 9.87222C43.9392 10.1278 44.449 10.5111 44.7926 11C45.1417 11.5 45.3135 12.0833 45.3135 12.7333L45.3079 12.7444ZM37.5054 9.27222H40.9412C41.6339 9.27222 42.1603 9.11667 42.5039 8.81111C42.8475 8.50556 43.0248 8.03889 43.0248 7.42222C43.0248 6.80556 42.8419 6.47222 42.4873 6.17222C42.1271 5.87222 41.6117 5.72222 40.9467 5.72222H37.5109V9.27222H37.5054ZM43.4626 12.7056C43.4626 12.0722 43.2742 11.5944 42.8974 11.2778C42.5205 10.9611 41.9498 10.8 41.1961 10.8H37.5054V14.5667H41.1961C41.9276 14.5667 42.4928 14.4056 42.8807 14.0833C43.2687 13.7611 43.4626 13.3 43.4626 12.7V12.7056ZM57.6269 10.15C57.6269 11.0778 57.4939 11.9333 57.2279 12.6833C56.9619 13.4389 56.5574 14.1111 56.0254 14.6889C55.4878 15.2667 54.8616 15.7056 54.1579 15.9944C53.4541 16.2833 52.6561 16.4278 51.7861 16.4278C50.916 16.4278 50.1014 16.2833 49.3976 15.9944C48.6939 15.7056 48.0677 15.2667 47.5467 14.6889C47.0092 14.1167 46.6047 13.4444 46.3331 12.6944C46.0671 11.9389 45.9286 11.0833 45.9286 10.15C45.9286 9.21667 46.0671 8.36667 46.3331 7.61111C46.5991 6.85556 47.0092 6.17778 47.5467 5.59445C48.0732 5.02222 48.6939 4.58889 49.3976 4.3C50.1014 4.01667 50.9049 3.87222 51.7861 3.87222C52.6672 3.87222 53.4541 4.01667 54.1579 4.3C54.8616 4.58333 55.4934 5.02222 56.0254 5.59445C56.5574 6.17778 56.9619 6.85556 57.2279 7.61111C57.4939 8.36667 57.6269 9.22222 57.6269 10.15ZM47.8183 10.15C47.8183 11.5667 48.184 12.7 48.9044 13.5222C49.6138 14.3556 50.5835 14.7778 51.7805 14.7778C52.9775 14.7778 53.9473 14.3556 54.6566 13.5222C55.3659 12.7111 55.7261 11.5778 55.7261 10.15C55.7261 8.72222 55.3659 7.58333 54.6566 6.76111C53.9362 5.93889 52.9664 5.52222 51.7805 5.52222C50.5946 5.52222 49.6248 5.93889 48.9044 6.76111C48.184 7.60556 47.8183 8.74444 47.8183 10.15ZM63.4123 9.90555L67.5906 4.13889H65.5513L62.3926 8.49444L59.2339 4.13889H57.1946L61.373 9.90555L56.84 16.1611H58.8793L62.3926 11.3111L65.906 16.1611H67.9453L63.4123 9.90555ZM81.4169 7.61111C81.1509 6.85556 80.7463 6.17778 80.2144 5.59445C79.6768 5.02222 79.0506 4.58889 78.3468 4.3C77.6431 4.01667 76.8451 3.87222 75.9751 3.87222C75.105 3.87222 74.2904 4.01667 73.5866 4.3C72.8829 4.58333 72.2567 5.02222 71.7357 5.59445C71.1982 6.17778 70.7937 6.85556 70.5221 7.61111C70.2561 8.36667 70.1176 9.22222 70.1176 10.15C70.1176 11.0778 70.2561 11.9389 70.5221 12.6944C70.7881 13.45 71.1982 14.1222 71.7357 14.6889C72.2622 15.2667 72.8829 15.7056 73.5866 15.9944C74.2904 16.2833 75.0939 16.4278 75.9751 16.4278C76.8562 16.4278 77.6431 16.2833 78.3468 15.9944C79.0506 15.7056 79.6824 15.2667 80.2144 14.6889C80.7463 14.1111 81.1509 13.4389 81.4169 12.6833C81.6829 11.9278 81.8159 11.0778 81.8159 10.15C81.8159 9.22222 81.6829 8.36667 81.4169 7.61111ZM78.8456 13.5222C78.1363 14.3556 77.1665 14.7778 75.9695 14.7778C74.7725 14.7778 73.8027 14.3556 73.0934 13.5222C72.373 12.7 72.0073 11.5667 72.0073 10.15C72.0073 8.73333 72.373 7.60556 73.0934 6.76111C73.8138 5.93889 74.7836 5.52222 75.9695 5.52222C77.1554 5.52222 78.1252 5.93889 78.8456 6.76111C79.5549 7.58333 79.9151 8.72222 79.9151 10.15C79.9151 11.5778 79.5549 12.7111 78.8456 13.5222ZM96.7504 5.78889V9.27222H102.708V10.8056H96.7504V14.5056H103.483V16.1556H94.9162V4.13333H103.483V5.78333H96.7504V5.78889ZM93.0874 4.13889V16.1611H90.9872C90.9872 16.1556 87.3076 10.3444 87.3076 10.3444C86.3101 8.77778 85.5564 7.54445 85.0743 6.67222V16.1611H83.2955V4.13889H85.3957C85.3957 4.14444 89.092 9.95556 89.092 9.95556C90.0285 11.4389 90.7766 12.6833 91.3252 13.65V4.13889H93.0874Z",
            fill: e
          })
        })),
        iv = (0, f.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: rv[t],
          viewBox: "0 0 158 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, u.jsx)("path", {
            d: "M10.02 8.01603C13.0261 10.3006 18.1563 15.9519 16.5932 17.515C14.8297 19.0381 12.5451 20 9.97996 20C7.41483 20 5.13026 19.0782 3.36673 17.515C1.80361 15.9118 6.93387 10.3006 9.93988 8.01603H10.02ZM15.2305 1.48297C13.7074 0.561122 12.024 0 10.02 0C8.01603 0 6.33266 0.561122 4.80962 1.48297C4.80962 1.48297 4.80962 1.48297 4.80962 1.52305C4.80962 1.52305 4.80962 1.52305 4.8497 1.52305C6.77355 1.12224 9.73948 2.76553 10.02 2.92585C10.3006 2.76553 13.2265 1.08216 15.1904 1.52305C15.1904 1.52305 15.1904 1.52305 15.2305 1.52305C15.2305 1.52305 15.2305 1.52305 15.2305 1.48297ZM3.00601 2.88577C3.00601 2.88577 3.00601 2.88577 2.96593 2.88577C1.12224 4.72946 0 7.25451 0 10.02C0 12.7856 0.761523 14.3888 2.04409 16.1122C2.04409 16.1122 2.04409 16.1122 2.08417 16.1122C2.08417 16.1122 2.08417 16.1122 2.08417 16.0721C1.32265 13.7074 5.21042 7.97595 7.25451 5.57114C4.20842 2.48497 3.16633 2.80561 3.00601 2.88577ZM12.7856 5.49098C14.7896 7.89579 18.7174 13.6273 17.9559 15.992C17.9559 15.992 17.9559 15.992 17.9559 16.0321C17.9559 16.0321 17.9559 16.0321 17.996 16.0321C19.2786 14.3487 20.0401 12.2244 20.0401 9.97996C20.0401 7.73547 18.9178 4.68938 17.0741 2.88577C17.0741 2.88577 17.0741 2.88577 17.0341 2.88577C16.8737 2.80561 15.8317 2.48497 12.7856 5.53106V5.49098ZM34.8697 16.1924H32.8256L29.2986 11.3427L25.7715 16.1924H23.7275L28.2966 9.93988L24.0882 4.16834H26.1323L29.2986 8.53707L32.4649 4.16834H34.509L30.3006 9.93988L34.8697 16.1924ZM45.5311 12.7856C45.5311 13.8277 45.1703 14.6693 44.489 15.3106C43.8076 15.9118 42.8056 16.2325 41.483 16.2325H35.8317V10.8617H33.1463L34.2685 9.33868H35.8317V4.20842H41.2425C42.4449 4.20842 43.4068 4.48898 44.0481 5.09018C44.6894 5.6513 45.01 6.41283 45.01 7.37475C45.01 8.33667 44.489 9.41884 43.4469 9.97996C44.1283 10.2204 44.6092 10.6212 44.9699 11.1022C45.3307 11.5832 45.491 12.1844 45.491 12.8257L45.5311 12.7856ZM37.6753 9.2986H41.1222C41.8036 9.2986 42.3647 9.13828 42.6854 8.81764C43.0461 8.49699 43.2064 8.05611 43.2064 7.41483C43.2064 6.77355 43.0461 6.45291 42.6854 6.17234C42.3246 5.8517 41.8036 5.73146 41.1222 5.73146H37.6753V9.2986ZM43.6473 12.7455C43.6473 12.1042 43.4469 11.6232 43.0862 11.3026C42.7254 10.982 42.1242 10.8216 41.3627 10.8216H37.6753V14.5892H41.3627C42.0842 14.5892 42.6453 14.4289 43.0461 14.1082C43.4469 13.7876 43.6473 13.3066 43.6473 12.7054V12.7455ZM57.8757 10.1804C57.8757 11.1022 57.7555 11.984 57.4749 12.7054C57.1944 13.4669 56.7936 14.1483 56.2725 14.7094C55.7515 15.2705 55.1102 15.7114 54.3888 16.0321C53.6673 16.3126 52.8657 16.4729 52.024 16.4729C51.1824 16.4729 50.3407 16.3126 49.6192 16.0321C48.8978 15.7515 48.2966 15.3106 47.7755 14.7094C47.2545 14.1483 46.8136 13.4669 46.5731 12.7054C46.3327 11.9439 46.1723 11.1022 46.1723 10.1403C46.1723 9.17836 46.2926 8.33667 46.5731 7.57515C46.8537 6.81363 47.2545 6.13226 47.7755 5.57114C48.2966 5.01002 48.9379 4.56914 49.6593 4.28858C50.3808 4.00802 51.1824 3.8477 52.0641 3.8477C52.9459 3.8477 53.7475 4.00802 54.4289 4.28858C55.1503 4.56914 55.7515 5.01002 56.3126 5.57114C56.8337 6.17234 57.2345 6.81363 57.515 7.57515C57.7956 8.33667 57.9158 9.17836 57.9158 10.1403L57.8757 10.1804ZM48.016 10.1804C48.016 11.5832 48.3768 12.7455 49.0982 13.5471C49.8196 14.3888 50.7816 14.7896 51.984 14.7896C53.1864 14.7896 54.1483 14.3487 54.8697 13.5471C55.5912 12.7455 55.9519 11.5832 55.9519 10.1804C55.9519 8.77756 55.5912 7.61523 54.8697 6.77355C54.1483 5.93186 53.1864 5.53106 51.984 5.53106C50.7816 5.53106 49.8196 5.93186 49.0982 6.77355C48.3768 7.61523 48.016 8.77756 48.016 10.1804ZM63.6874 9.93988L67.8958 4.16834H65.8517L62.6854 8.53707L59.519 4.16834H57.4749L61.6834 9.93988L57.1142 16.1924H59.1583L62.6854 11.3427L66.2124 16.1924H68.2565L63.6874 9.93988ZM83.5671 5.81162V9.2986H89.5391V10.8216H83.5671V14.509H90.3407V16.1523H81.7234V4.16834H90.3407V5.81162H83.5671ZM79.3186 10.6212C78.7174 10.0601 77.7154 9.65932 76.3527 9.33868L75.3106 9.13828C74.3086 8.93788 73.6272 8.65731 73.2665 8.37675C72.9058 8.09619 72.7054 7.69539 72.7054 7.13427C72.7054 6.57315 72.9058 6.17234 73.3066 5.89178C73.7074 5.61122 74.3086 5.4509 75.1102 5.4509C75.9118 5.4509 76.8337 5.6513 77.3146 6.01202C77.7555 6.37275 78.0361 6.93387 78.0761 7.69539H79.9198C79.9198 6.49299 79.479 5.57114 78.6774 4.88978C77.8757 4.20842 76.6733 3.88778 75.1102 3.88778C73.5471 3.88778 72.7455 4.20842 71.984 4.76954C71.2224 5.33066 70.8216 6.17234 70.8216 7.17435C70.8216 8.17635 71.1423 8.93788 71.7836 9.499C72.4248 10.0601 73.3467 10.4609 74.5892 10.7014L75.6313 10.9018C76.6333 11.1423 77.3547 11.3828 77.7555 11.6633C78.1563 11.9439 78.3166 12.3447 78.3166 12.8657C78.3166 13.3868 78.0761 13.988 77.5952 14.3487C77.1142 14.6693 76.4329 14.8697 75.5511 14.8697C74.6693 14.8697 73.6673 14.6293 73.1463 14.1884C72.6252 13.7475 72.3046 13.0661 72.3046 12.1844H70.4609C70.4609 13.5872 70.9419 14.6693 71.8236 15.3507C72.7054 16.0321 73.9479 16.4329 75.5511 16.4329C77.1543 16.4329 78.1563 16.1122 78.998 15.4709C79.8397 14.8297 80.2405 13.9479 80.2405 12.8257C80.2405 11.7034 79.9198 11.1423 79.3186 10.5812V10.6212ZM101.403 14.7094L101.283 12.8257C101.283 12.1443 101.122 11.6232 100.842 11.2224C100.561 10.8216 100.16 10.5411 99.5992 10.3808C100.2 10.1804 100.721 9.81964 101.042 9.33868C101.403 8.85772 101.563 8.21643 101.563 7.49499C101.563 6.45291 101.202 5.6513 100.441 5.0501C99.7194 4.4489 98.6773 4.16834 97.3948 4.16834H92.1443V16.1924H93.988V11.2625H97.4749C98.1563 11.2625 98.6773 11.4228 98.998 11.7435C99.3186 12.0641 99.479 12.6253 99.519 13.3868V14.6693C99.5992 15.3507 99.7194 15.8717 99.9198 16.1924H101.804C101.603 15.7916 101.443 15.3106 101.403 14.7094ZM94.0281 5.73146H97.3547C98.1162 5.73146 98.7174 5.89178 99.1182 6.21242C99.519 6.53307 99.7194 7.01403 99.7194 7.65531C99.7194 8.29659 99.519 8.81763 99.1182 9.17836C98.7174 9.53908 98.1563 9.6994 97.4749 9.6994H94.0281V5.73146ZM103.246 16.1924H105.09V4.16834H103.246V16.2325V16.1924ZM115.551 5.81162V4.16834H106.934V16.1924H115.551V14.5491H108.778V10.8617H114.749V9.33868H108.778V5.8517H115.551V5.81162ZM125.331 10.6212C124.729 10.0601 123.727 9.65932 122.365 9.33868L121.323 9.13828C120.321 8.93788 119.639 8.65731 119.279 8.37675C118.918 8.09619 118.717 7.69539 118.717 7.13427C118.717 6.57315 118.918 6.17234 119.319 5.89178C119.719 5.61122 120.321 5.4509 121.122 5.4509C121.924 5.4509 122.846 5.6513 123.327 6.01202C123.808 6.37275 124.048 6.93387 124.088 7.69539H125.892C125.892 6.49299 125.451 5.57114 124.649 4.88978C123.848 4.20842 122.645 3.88778 121.082 3.88778C119.519 3.88778 118.717 4.20842 117.956 4.76954C117.194 5.33066 116.794 6.17234 116.794 7.17435C116.794 8.17635 117.114 8.93788 117.755 9.499C118.397 10.0601 119.319 10.4609 120.561 10.7014L121.603 10.9018C122.605 11.1423 123.327 11.3828 123.727 11.6633C124.128 11.9439 124.329 12.3447 124.329 12.8657C124.329 13.3868 124.088 13.988 123.607 14.3487C123.126 14.6693 122.445 14.8697 121.563 14.8697C120.681 14.8697 119.679 14.6293 119.158 14.1884C118.637 13.7475 118.357 13.0661 118.317 12.1844H116.473C116.473 13.5872 116.954 14.6693 117.836 15.3507C118.717 16.0721 119.96 16.4329 121.563 16.4329C123.166 16.4329 124.168 16.1122 125.01 15.4709C125.852 14.8297 126.252 13.9479 126.252 12.8257C126.252 11.7034 125.932 11.1423 125.331 10.5812V10.6212ZM144.93 2.64529H144.008V17.7154H144.93V2.64529ZM136.513 9.93988L140.721 4.16834H138.677L135.511 8.53707L132.345 4.16834H130.301L134.509 9.93988L129.94 16.1924H131.984L135.511 11.3427L139.038 16.1924H141.082L136.513 9.93988ZM156.713 10.6212C156.112 10.0601 155.11 9.65932 153.747 9.33868L152.705 9.13828C151.703 8.93788 151.022 8.65731 150.661 8.37675C150.301 8.09619 150.1 7.69539 150.1 7.13427C150.1 6.57315 150.301 6.17234 150.701 5.89178C151.102 5.61122 151.703 5.4509 152.505 5.4509C153.307 5.4509 154.228 5.6513 154.709 6.01202C155.19 6.37275 155.431 6.93387 155.471 7.69539H157.275C157.275 6.49299 156.834 5.57114 156.032 4.88978C155.23 4.20842 154.028 3.88778 152.465 3.88778C150.902 3.88778 150.1 4.20842 149.339 4.76954C148.577 5.33066 148.176 6.17234 148.176 7.17435C148.176 8.17635 148.497 8.93788 149.138 9.499C149.78 10.0601 150.701 10.4609 151.944 10.7014L152.986 10.9018C153.988 11.1423 154.709 11.3828 155.11 11.6633C155.511 11.9439 155.711 12.3447 155.711 12.8657C155.711 13.3868 155.471 13.988 154.99 14.3487C154.509 14.6693 153.828 14.8697 152.946 14.8697C152.064 14.8697 151.062 14.6293 150.541 14.1884C150.02 13.7475 149.739 13.0661 149.699 12.1844H147.856C147.856 13.5872 148.337 14.6693 149.218 15.3507C150.1 16.0721 151.343 16.4329 152.946 16.4329C154.549 16.4329 155.551 16.1122 156.393 15.4709C157.234 14.8297 157.635 13.9479 157.635 12.8257C157.635 11.7034 157.315 11.1423 156.713 10.5812V10.6212Z",
            fill: e
          })
        }));

      function dv(e) {
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

      function lv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function uv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = dv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = uv(uv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) fv(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cv(e.variantClassNames, e => cv(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1lhhotm0",
          variantClassNames: {
            size: {
              MD: "foundry_1lhhotm1",
              LG: "foundry_1lhhotm2",
              XL: "foundry_1lhhotm3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, f.forwardRef)(({
        logo: e,
        size: t,
        asChild: r,
        children: n,
        ...o
      }, a) => {
        const s = (0, x.v6)({
            className: pv({
              size: t
            }),
            size: t
          }, o),
          l = i[e];
        if (r && (0, f.isValidElement)(n)) {
          const e = (0, f.cloneElement)(n, n.props, (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(l, {
              size: t,
              "aria-hidden": !0
            }), n.props.children]
          }));
          return (0, u.jsx)(d.$, {
            asChild: !0,
            size: t,
            ref: a,
            ...o,
            children: e
          })
        }
        return (0, u.jsx)(d.$, {
          ...s,
          ref: a,
          children: (0, u.jsx)(l, {
            size: t,
            "aria-hidden": !0
          })
        })
      })
    }
  }
]);