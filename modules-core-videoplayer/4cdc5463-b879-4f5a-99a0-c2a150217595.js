try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4cdc5463-b879-4f5a-99a0-c2a150217595", e._sentryDebugIdIdentifier = "sentry-dbid-4cdc5463-b879-4f5a-99a0-c2a150217595")
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
  [514], {
    4514(e, t, n) {
      "use strict";

      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, u(o.key), o)
        }
      }

      function r(e, t, n) {
        return t = s(t),
          function(e, t) {
            if (t && ("object" == o(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, i() ? Reflect.construct(t, n || [], s(e).constructor) : t.apply(e, n))
      }

      function i() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (i = function() {
          return !!e
        })()
      }

      function s(e) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, s(e)
      }

      function c(e, t) {
        return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, c(e, t)
      }

      function u(e) {
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
      var l = n(3082),
        d = n(331),
        f = n(8733).createFocusTrap,
        p = n(7766).isFocusable,
        v = function(e) {
          function t(e) {
            var n, o, a, i;
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), o = n = r(this, t, [e]), i = function(e) {
              var t, n = null !== (t = this.internalOptions[e]) && void 0 !== t ? t : this.originalOptions[e];
              if ("function" == typeof n) {
                for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++) a[r - 1] = arguments[r];
                n = n.apply(void 0, a)
              }
              if (!0 === n && (n = void 0), !n) {
                if (void 0 === n || !1 === n) return n;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var i, s = n;
              if ("string" == typeof n && !(s = null === (i = this.getDocument()) || void 0 === i ? void 0 : i.querySelector(n))) throw new Error("`".concat(e, "` as selector refers to no known node"));
              return s
            }, (a = u(a = "getNodeForOption")) in o ? Object.defineProperty(o, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[a] = i, n.handleDeactivate = n.handleDeactivate.bind(n), n.handlePostDeactivate = n.handlePostDeactivate.bind(n), n.handleClickOutsideDeactivates = n.handleClickOutsideDeactivates.bind(n), n.internalOptions = {
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
            var s = e.focusTrapOptions;
            for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && ("returnFocusOnDeactivate" !== c && "onDeactivate" !== c && "onPostDeactivate" !== c && "checkCanReturnFocus" !== c && "clickOutsideDeactivates" !== c ? n.internalOptions[c] = s[c] : n.originalOptions[c] = s[c]);
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
            }), t && c(e, t)
          }(t, e), n = t, (o = [{
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
                    n = !(!e.originalOptions.returnFocusOnDeactivate || null == t || !t.focus || e.outsideClick && (!e.outsideClick.allowDeactivation || p(e.outsideClick.target, e.internalOptions.tabbableOptions))),
                    o = e.internalOptions.preventScroll,
                    a = void 0 !== o && o;
                  n && t.focus({
                    preventScroll: a
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
                  a = e.paused && !this.props.paused;
                if (t && (this.updatePreviousElement(), this.focusTrap.activate()), n) return void this.deactivateTrap();
                o && this.focusTrap.pause(), a && this.focusTrap.unpause()
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
                t = this.props.children ? l.Children.only(this.props.children) : void 0;
              if (t) {
                if (t.type && t.type === l.Fragment) throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
                return l.cloneElement(t, {
                  ref: function(n) {
                    var o = e.props.containerElements;
                    t && ("function" == typeof t.ref ? t.ref(n) : t.ref && (t.ref.current = n)), e.focusTrapElements = o || [n]
                  }
                })
              }
              return null
            }
          }]) && a(n.prototype, o), Object.defineProperty(n, "prototype", {
            writable: !1
          }), n;
          var n, o
        }(l.Component),
        b = "undefined" == typeof Element ? Function : Element;
      v.propTypes = {
        active: d.bool,
        paused: d.bool,
        focusTrapOptions: d.shape({
          document: d.object,
          onActivate: d.func,
          onPostActivate: d.func,
          checkCanFocusTrap: d.func,
          onPause: d.func,
          onPostPause: d.func,
          onUnpause: d.func,
          onPostUnpause: d.func,
          onDeactivate: d.func,
          onPostDeactivate: d.func,
          checkCanReturnFocus: d.func,
          initialFocus: d.oneOfType([d.instanceOf(b), d.string, d.bool, d.func]),
          fallbackFocus: d.oneOfType([d.instanceOf(b), d.string, d.func]),
          escapeDeactivates: d.oneOfType([d.bool, d.func]),
          clickOutsideDeactivates: d.oneOfType([d.bool, d.func]),
          returnFocusOnDeactivate: d.bool,
          setReturnFocus: d.oneOfType([d.instanceOf(b), d.string, d.bool, d.func]),
          allowOutsideClick: d.oneOfType([d.bool, d.func]),
          preventScroll: d.bool,
          tabbableOptions: d.shape({
            displayCheck: d.oneOf(["full", "legacy-full", "non-zero-area", "none"]),
            getShadowRoot: d.oneOfType([d.bool, d.func])
          }),
          trapStack: d.array,
          isKeyForward: d.func,
          isKeyBackward: d.func
        }),
        containerElements: d.arrayOf(d.instanceOf(b)),
        children: d.oneOfType([d.element, d.instanceOf(b)])
      }, v.defaultProps = {
        active: !0,
        paused: !1,
        focusTrapOptions: {},
        _createFocusTrap: f
      }, e.exports = v
    },
    8733(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        createFocusTrap: () => m
      });
      var o = n(7766);

      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o
      }

      function r(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = u(e)) || t) {
            n && (e = n);
            var o = 0,
              a = function() {};
            return {
              s: a,
              n: function() {
                return o >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[o++]
                }
              },
              e: function(e) {
                throw e
              },
              f: a
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, i = !0,
          s = !1;
        return {
          s: function() {
            n = n.call(e)
          },
          n: function() {
            var e = n.next();
            return i = e.done, e
          },
          e: function(e) {
            s = !0, r = e
          },
          f: function() {
            try {
              i || null == n.return || n.return()
            } finally {
              if (s) throw r
            }
          }
        }
      }

      function i(e, t, n) {
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

      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, o)
        }
        return n
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(n), !0).forEach(function(t) {
            i(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function u(e, t) {
        if (e) {
          if ("string" == typeof e) return a(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
        }
      }
      var l = {
          getActiveTrap: function(e) {
            return (null == e ? void 0 : e.length) > 0 ? e[e.length - 1] : null
          },
          activateTrap: function(e, t) {
            t !== l.getActiveTrap(e) && l.pauseTrap(e);
            var n = e.indexOf(t); - 1 === n || e.splice(n, 1), e.push(t)
          },
          deactivateTrap: function(e, t) {
            var n = e.indexOf(t); - 1 !== n && e.splice(n, 1), l.unpauseTrap(e)
          },
          pauseTrap: function(e) {
            var t = l.getActiveTrap(e);
            null == t || t._setPausedState(!0)
          },
          unpauseTrap: function(e) {
            var t = l.getActiveTrap(e);
            t && !t._isManuallyPaused() && t._setPausedState(!1)
          }
        },
        d = function(e) {
          return "Tab" === (null == e ? void 0 : e.key) || 9 === (null == e ? void 0 : e.keyCode)
        },
        f = function(e) {
          return d(e) && !e.shiftKey
        },
        p = function(e) {
          return d(e) && e.shiftKey
        },
        v = function(e) {
          return setTimeout(e, 0)
        },
        b = function(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
          return "function" == typeof e ? e.apply(void 0, n) : e
        },
        y = function(e) {
          return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        },
        h = [],
        m = function(e, t) {
          var n, i = (null == t ? void 0 : t.document) || document,
            s = (null == t ? void 0 : t.trapStack) || h,
            m = c({
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
            O = function(e, t, n) {
              return e && void 0 !== e[t] ? e[t] : m[n || t]
            },
            w = function(e, t) {
              var n = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
              return g.containerGroups.findIndex(function(t) {
                var o = t.container,
                  a = t.tabbableNodes;
                return o.contains(e) || (null == n ? void 0 : n.includes(o)) || a.find(function(t) {
                  return t === e
                })
              })
            },
            T = function(e) {
              var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = n.hasFallback,
                r = void 0 !== o && o,
                s = n.params,
                c = void 0 === s ? [] : s,
                l = m[e];
              if ("function" == typeof l && (l = l.apply(void 0, function(e) {
                  if (Array.isArray(e)) return a(e)
                }(t = c) || function(e) {
                  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(t) || u(t) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())), !0 === l && (l = void 0), !l) {
                if (void 0 === l || !1 === l) return l;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var d = l;
              if ("string" == typeof l) {
                try {
                  d = i.querySelector(l)
                } catch (t) {
                  throw new Error("`".concat(e, '` appears to be an invalid selector; error="').concat(t.message, '"'))
                }
                if (!d && !r) throw new Error("`".concat(e, "` as selector refers to no known node"))
              }
              return d
            },
            k = function() {
              var e = T("initialFocus", {
                hasFallback: !0
              });
              if (!1 === e) return !1;
              if (void 0 === e || e && !(0, o.isFocusable)(e, m.tabbableOptions))
                if (w(i.activeElement) >= 0) e = i.activeElement;
                else {
                  var t = g.tabbableGroups[0];
                  e = t && t.firstTabbableNode || T("fallbackFocus")
                }
              else null === e && (e = T("fallbackFocus"));
              if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
              return e
            },
            E = function() {
              if (g.containerGroups = g.containers.map(function(e) {
                  var t = (0, o.tabbable)(e, m.tabbableOptions),
                    n = (0, o.focusable)(e, m.tabbableOptions),
                    a = t.length > 0 ? t[0] : void 0,
                    r = t.length > 0 ? t[t.length - 1] : void 0,
                    i = n.find(function(e) {
                      return (0, o.isTabbable)(e)
                    }),
                    s = n.slice().reverse().find(function(e) {
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
                    firstTabbableNode: a,
                    lastTabbableNode: r,
                    firstDomTabbableNode: i,
                    lastDomTabbableNode: s,
                    nextTabbableNode: function(e) {
                      var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = t.indexOf(e);
                      return r < 0 ? a ? n.slice(n.indexOf(e) + 1).find(function(e) {
                        return (0, o.isTabbable)(e)
                      }) : n.slice(0, n.indexOf(e)).reverse().find(function(e) {
                        return (0, o.isTabbable)(e)
                      }) : t[r + (a ? 1 : -1)]
                    }
                  }
                }), g.tabbableGroups = g.containerGroups.filter(function(e) {
                  return e.tabbableNodes.length > 0
                }), g.tabbableGroups.length <= 0 && !T("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
              if (g.containerGroups.find(function(e) {
                  return e.posTabIndexesFound
                }) && g.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            F = function(e) {
              var t = e.activeElement;
              if (t) return t.shadowRoot && null !== t.shadowRoot.activeElement ? F(t.shadowRoot) : t
            },
            D = function(e) {
              !1 !== e && e !== F(document) && (e && e.focus ? (e.focus({
                preventScroll: !!m.preventScroll
              }), g.mostRecentlyFocusedNode = e, function(e) {
                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
              }(e) && e.select()) : D(k()))
            },
            P = function(e) {
              var t = T("setReturnFocus", {
                params: [e]
              });
              return t || !1 !== t && e
            },
            S = function(e) {
              var t = e.target,
                n = e.event,
                a = e.isBackward,
                r = void 0 !== a && a;
              t = t || y(n), E();
              var i = null;
              if (g.tabbableGroups.length > 0) {
                var s = w(t, n),
                  c = s >= 0 ? g.containerGroups[s] : void 0;
                if (s < 0) i = r ? g.tabbableGroups[g.tabbableGroups.length - 1].lastTabbableNode : g.tabbableGroups[0].firstTabbableNode;
                else if (r) {
                  var u = g.tabbableGroups.findIndex(function(e) {
                    var n = e.firstTabbableNode;
                    return t === n
                  });
                  if (u < 0 && (c.container === t || (0, o.isFocusable)(t, m.tabbableOptions) && !(0, o.isTabbable)(t, m.tabbableOptions) && !c.nextTabbableNode(t, !1)) && (u = s), u >= 0) {
                    var l = 0 === u ? g.tabbableGroups.length - 1 : u - 1,
                      f = g.tabbableGroups[l];
                    i = (0, o.getTabIndex)(t) >= 0 ? f.lastTabbableNode : f.lastDomTabbableNode
                  } else d(n) || (i = c.nextTabbableNode(t, !1))
                } else {
                  var p = g.tabbableGroups.findIndex(function(e) {
                    var n = e.lastTabbableNode;
                    return t === n
                  });
                  if (p < 0 && (c.container === t || (0, o.isFocusable)(t, m.tabbableOptions) && !(0, o.isTabbable)(t, m.tabbableOptions) && !c.nextTabbableNode(t)) && (p = s), p >= 0) {
                    var v = p === g.tabbableGroups.length - 1 ? 0 : p + 1,
                      b = g.tabbableGroups[v];
                    i = (0, o.getTabIndex)(t) >= 0 ? b.firstTabbableNode : b.firstDomTabbableNode
                  } else d(n) || (i = c.nextTabbableNode(t))
                }
              } else i = T("fallbackFocus");
              return i
            },
            N = function(e) {
              var t = y(e);
              w(t, e) >= 0 || (b(m.clickOutsideDeactivates, e) ? n.deactivate({
                returnFocus: m.returnFocusOnDeactivate
              }) : b(m.allowOutsideClick, e) || e.preventDefault())
            },
            _ = function(e) {
              var t = y(e),
                n = w(t, e) >= 0;
              if (n || t instanceof Document) n && (g.mostRecentlyFocusedNode = t);
              else {
                var a;
                e.stopImmediatePropagation();
                var r = !0;
                if (g.mostRecentlyFocusedNode)
                  if ((0, o.getTabIndex)(g.mostRecentlyFocusedNode) > 0) {
                    var i = w(g.mostRecentlyFocusedNode),
                      s = g.containerGroups[i].tabbableNodes;
                    if (s.length > 0) {
                      var c = s.findIndex(function(e) {
                        return e === g.mostRecentlyFocusedNode
                      });
                      c >= 0 && (m.isKeyForward(g.recentNavEvent) ? c + 1 < s.length && (a = s[c + 1], r = !1) : c - 1 >= 0 && (a = s[c - 1], r = !1))
                    }
                  } else g.containerGroups.some(function(e) {
                    return e.tabbableNodes.some(function(e) {
                      return (0, o.getTabIndex)(e) > 0
                    })
                  }) || (r = !1);
                else r = !1;
                r && (a = S({
                  target: g.mostRecentlyFocusedNode,
                  isBackward: m.isKeyBackward(g.recentNavEvent)
                })), D(a || g.mostRecentlyFocusedNode || k())
              }
              g.recentNavEvent = void 0
            },
            R = function(e) {
              (m.isKeyForward(e) || m.isKeyBackward(e)) && function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                g.recentNavEvent = e;
                var n = S({
                  event: e,
                  isBackward: t
                });
                n && (d(e) && e.preventDefault(), D(n))
              }(e, m.isKeyBackward(e))
            },
            C = function(e) {
              var t;
              "Escape" !== (null == (t = e) ? void 0 : t.key) && "Esc" !== (null == t ? void 0 : t.key) && 27 !== (null == t ? void 0 : t.keyCode) || !1 === b(m.escapeDeactivates, e) || (e.preventDefault(), n.deactivate())
            },
            I = function(e) {
              var t = y(e);
              w(t, e) >= 0 || b(m.clickOutsideDeactivates, e) || b(m.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
            },
            j = function() {
              if (g.active) return l.activateTrap(s, n), g.delayInitialFocusTimer = m.delayInitialFocus ? v(function() {
                D(k())
              }) : D(k()), i.addEventListener("focusin", _, !0), i.addEventListener("mousedown", N, {
                capture: !0,
                passive: !1
              }), i.addEventListener("touchstart", N, {
                capture: !0,
                passive: !1
              }), i.addEventListener("click", I, {
                capture: !0,
                passive: !1
              }), i.addEventListener("keydown", R, {
                capture: !0,
                passive: !1
              }), i.addEventListener("keydown", C), n
            },
            A = function() {
              if (g.active) return i.removeEventListener("focusin", _, !0), i.removeEventListener("mousedown", N, !0), i.removeEventListener("touchstart", N, !0), i.removeEventListener("click", I, !0), i.removeEventListener("keydown", R, !0), i.removeEventListener("keydown", C), n
            },
            x = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver(function(e) {
              e.some(function(e) {
                return Array.from(e.removedNodes).some(function(e) {
                  return e === g.mostRecentlyFocusedNode
                })
              }) && D(k())
            }) : void 0,
            G = function() {
              x && (x.disconnect(), g.active && !g.paused && g.containers.map(function(e) {
                x.observe(e, {
                  subtree: !0,
                  childList: !0
                })
              }))
            };
          return n = {
            get active() {
              return g.active
            },
            get paused() {
              return g.paused
            },
            activate: function(e) {
              if (g.active) return this;
              var t, o = O(e, "onActivate"),
                a = O(e, "onPostActivate"),
                r = O(e, "checkCanFocusTrap"),
                c = l.getActiveTrap(s),
                u = !1;
              c && !c.paused && (null === (t = c._setSubtreeIsolation) || void 0 === t || t.call(c, !1), u = !0);
              try {
                r || E(), g.active = !0, g.paused = !1, g.nodeFocusedBeforeActivation = F(i), null == o || o();
                var d = function() {
                  r && E(), j(), G(), m.isolateSubtrees && n._setSubtreeIsolation(!0), null == a || a()
                };
                if (r) return r(g.containers.concat()).then(d, d), this;
                d()
              } catch (e) {
                var f;
                throw c === l.getActiveTrap(s) && u && (null === (f = c._setSubtreeIsolation) || void 0 === f || f.call(c, !0)), e
              }
              return this
            },
            deactivate: function(e) {
              if (!g.active) return this;
              var t = c({
                onDeactivate: m.onDeactivate,
                onPostDeactivate: m.onPostDeactivate,
                checkCanReturnFocus: m.checkCanReturnFocus
              }, e);
              clearTimeout(g.delayInitialFocusTimer), g.delayInitialFocusTimer = void 0, g.paused || n._setSubtreeIsolation(!1), g.alreadySilent.clear(), A(), g.active = !1, g.paused = !1, G(), l.deactivateTrap(s, n);
              var o = O(t, "onDeactivate"),
                a = O(t, "onPostDeactivate"),
                r = O(t, "checkCanReturnFocus"),
                i = O(t, "returnFocus", "returnFocusOnDeactivate");
              null == o || o();
              var u = function() {
                v(function() {
                  i && D(P(g.nodeFocusedBeforeActivation)), null == a || a()
                })
              };
              return i && r ? (r(P(g.nodeFocusedBeforeActivation)).then(u, u), this) : (u(), this)
            },
            pause: function(e) {
              return g.active ? (g.manuallyPaused = !0, this._setPausedState(!0, e)) : this
            },
            unpause: function(e) {
              return g.active ? (g.manuallyPaused = !1, s[s.length - 1] !== this ? this : this._setPausedState(!1, e)) : this
            },
            updateContainerElements: function(e) {
              var t = [].concat(e).filter(Boolean);
              return g.containers = t.map(function(e) {
                return "string" == typeof e ? i.querySelector(e) : e
              }), m.isolateSubtrees && function(e) {
                g.active && !g.paused && n._setSubtreeIsolation(!1), g.adjacentElements.clear(), g.alreadySilent.clear();
                var t, o = new Set,
                  a = new Set,
                  i = r(e);
                try {
                  for (i.s(); !(t = i.n()).done;) {
                    var s = t.value;
                    o.add(s);
                    for (var c = "undefined" != typeof ShadowRoot && s.getRootNode() instanceof ShadowRoot, u = s; u;) {
                      o.add(u);
                      var l = u.parentElement,
                        d = [];
                      l ? d = l.children : !l && c && (d = u.getRootNode().children, l = u.getRootNode().host, c = "undefined" != typeof ShadowRoot && l.getRootNode() instanceof ShadowRoot);
                      var f, p = r(d);
                      try {
                        for (p.s(); !(f = p.n()).done;) {
                          var v = f.value;
                          a.add(v)
                        }
                      } catch (e) {
                        p.e(e)
                      } finally {
                        p.f()
                      }
                      u = l
                    }
                  }
                } catch (e) {
                  i.e(e)
                } finally {
                  i.f()
                }
                o.forEach(function(e) {
                  a.delete(e)
                }), g.adjacentElements = a
              }(g.containers), g.active && (E(), m.isolateSubtrees && !g.paused && n._setSubtreeIsolation(!0)), G(), this
            }
          }, Object.defineProperties(n, {
            _isManuallyPaused: {
              value: function() {
                return g.manuallyPaused
              }
            },
            _setPausedState: {
              value: function(e, t) {
                if (g.paused === e) return this;
                if (g.paused = e, e) {
                  var o = O(t, "onPause"),
                    a = O(t, "onPostPause");
                  null == o || o(), A(), G(), n._setSubtreeIsolation(!1), null == a || a()
                } else {
                  var r = O(t, "onUnpause"),
                    i = O(t, "onPostUnpause");
                  null == r || r(), n._setSubtreeIsolation(!0), E(), j(), G(), null == i || i()
                }
                return this
              }
            },
            _setSubtreeIsolation: {
              value: function(e) {
                m.isolateSubtrees && g.adjacentElements.forEach(function(t) {
                  var n;
                  e ? "aria-hidden" === m.isolateSubtrees ? ("true" !== t.ariaHidden && "true" !== (null === (n = t.getAttribute("aria-hidden")) || void 0 === n ? void 0 : n.toLowerCase()) || g.alreadySilent.add(t), t.setAttribute("aria-hidden", "true")) : ((t.inert || t.hasAttribute("inert")) && g.alreadySilent.add(t), t.setAttribute("inert", !0)) : g.alreadySilent.has(t) || ("aria-hidden" === m.isolateSubtrees ? t.removeAttribute("aria-hidden") : t.removeAttribute("inert"))
                })
              }
            }
          }), n.updateContainerElements(e), n
        }
    },
    55(e, t, n) {
      "use strict";
      var o = n(2528);

      function a() {}

      function r() {}
      r.resetWarningCache = a, e.exports = function() {
        function e(e, t, n, a, r, i) {
          if (i !== o) {
            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw s.name = "Invariant Violation", s
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var n = {
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
          checkPropTypes: r,
          resetWarningCache: a
        };
        return n.PropTypes = n, n
      }
    },
    331(e, t, n) {
      e.exports = n(55)()
    },
    2528(e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
  }
]);