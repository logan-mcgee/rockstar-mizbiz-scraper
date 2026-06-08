try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7f35373e-ea29-4da3-bbbb-8b65350b6357", e._sentryDebugIdIdentifier = "sentry-dbid-7f35373e-ea29-4da3-bbbb-8b65350b6357")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [661, 793], {
    4620(e) {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TagList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "context"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tagList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "context"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "context"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 131
        }
      };

      function i(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && t.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          i(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          i(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          i(e, t)
        })
      }
      t.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function o(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n
        }
      }
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          i(e, t), n[e.name.value] = t
        }
      }), e.exports = t, e.exports.TagList = function(e, t) {
        var i = {
          kind: e.kind,
          definitions: [o(e, t)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[t] || new Set,
          a = new Set,
          r = new Set;
        for (s.forEach(function(e) {
            r.add(e)
          }); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach(function(e) {
            a.has(e) || (a.add(e), (n[e] || new Set).forEach(function(e) {
              r.add(e)
            }))
          })
        }
        return a.forEach(function(t) {
          var n = o(e, t);
          n && i.definitions.push(n)
        }), i
      }(t, "TagList")
    },
    6065(e) {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifsList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "gifsList"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "hash"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "gifInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "hash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "hash"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "file"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 206
        }
      };

      function i(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && t.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          i(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          i(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          i(e, t)
        })
      }
      t.loc.source = {
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function o(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n
        }
      }

      function s(e, t) {
        var i = {
          kind: e.kind,
          definitions: [o(e, t)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[t] || new Set,
          a = new Set,
          r = new Set;
        for (s.forEach(function(e) {
            r.add(e)
          }); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach(function(e) {
            a.has(e) || (a.add(e), (n[e] || new Set).forEach(function(e) {
              r.add(e)
            }))
          })
        }
        return a.forEach(function(t) {
          var n = o(e, t);
          n && i.definitions.push(n)
        }), i
      }
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          i(e, t), n[e.name.value] = t
        }
      }), e.exports = t, e.exports.GifsList = s(t, "GifsList"), e.exports.GifInfo = s(t, "GifInfo")
    },
    4931(e, t, i) {
      "use strict";
      var n = i(3082),
        o = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, i) {
        var n, l = {},
          d = null,
          h = null;
        for (n in void 0 !== i && (d = "" + i), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (h = t.ref), t) s.call(t, n) && !r.hasOwnProperty(n) && (l[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === l[n] && (l[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: h,
          props: l,
          _owner: a.current
        }
      }
      t.jsx = l, t.jsxs = l
    },
    9793(e, t, i) {
      "use strict";
      e.exports = i(4931)
    },
    5174(e, t, i) {
      "use strict";
      i.d(t, {
        YK: () => n.YK,
        JK: () => f,
        tz: () => o.A,
        QY: () => m
      });
      var n = i(7338),
        o = i(4775),
        s = i(9793),
        a = i(3082),
        r = i(6285),
        l = i(7279);
      const d = (e, t) => {
          if (!e || !t) return void console.log(`Couldn't set cookie (${e}) to value (${t})`);
          const i = window.location.hostname.split("."),
            n = i.slice(i.length - 2).join(".");
          document.cookie = `${e}=${t}; domain=${n}; path=/;`
        },
        h = e => {
          const t = document.cookie.split("; "),
            i = `${e}=`,
            n = t.find(e => e.startsWith(i)),
            o = n?.substring(i.length, n.length);
          return o
        },
        p = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          store: "en",
          posix: "en_us"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          store: "de",
          posix: "de_de"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          store: "es",
          posix: "es_es"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          store: "es-419",
          posix: "es_mx"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          store: "fr",
          posix: "fr_fr"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          store: "it",
          posix: "it_it"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          store: "ja",
          posix: "ja_jp"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          store: "ko",
          posix: "ko_kr"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          store: "pl",
          posix: "pl_pl"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          store: "pt-BR",
          posix: "pt_br"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          store: "ru",
          posix: "ru_ru"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          store: "zh-Hant",
          posix: "zh_tw"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          store: "zh-CN",
          posix: "zh_hans"
        }],
        c = p[0],
        u = p,
        f = () => {
          const {
            location: e
          } = window, t = (0, l.A)(), i = (e => {
            const t = u.map(e => e.subdomaincom),
              i = e.pathname.substring(1).split("/"),
              n = "detect-locals" === i[0] ? 1 : 0;
            return -1 !== t.indexOf(i[n]) ? i[n] : null
          })(e), n = (e => {
            const t = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return t?.split("=")[1]
          })(e), o = c;
          let s;
          const a = `rockstarweb_lang.${t.cookieIdentifier}`,
            r = h(a);
          s = t.currentSite?.site === l.C.www ? u.find(e => e.subdomaincom === n) || u.find(e => e.subdomaincom === i) || o : u.find(e => e.iso === r) || o;
          const [, p] = ((e, t, i = !1) => {
            const n = h(e);
            return n && !i || d(e, t), [n, (o = e, e => {
              d(o, e)
            })];
            var o
          })(a, s.iso);
          return [s, p]
        };

      function m(e, t, i, n) {
        return o => {
          const l = (0, a.useMemo)(() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const i = t ?? f()[0].iso ?? "en-US",
                  n = function(e, t) {
                    return e[t] ?? {}
                  }(e, i);
                var o;
                return {
                  rsLocale: i,
                  locale: i,
                  messages: (o = n, {
                    ...o
                  })
                }
              }(e, t)
            }(t, i)
          }, [i]);
          return (0, s.jsx)(r.A, {
            locale: l?.locale || "en-US",
            messages: {
              ...l?.messages
            },
            onError: n,
            children: l && (0, s.jsx)(e, {
              ...o
            })
          }, "intl-provider")
        }
      }
    },
    7279(e, t, i) {
      "use strict";
      i.d(t, {
        A: () => d,
        C: () => r
      });
      var n = i(4028),
        o = i.n(n),
        s = i(5963),
        a = i.n(s);
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        l = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        d = () => {
          let e;
          const {
            location: t
          } = window, i = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = l.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === i && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), s = l[n >= 0 ? n : 0], r = l.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), a()(o()({}, r, {
            currentSite: e
          }, s), "fallbackEnvironment")
        }
    },
    5661(e, t, i) {
      "use strict";
      i.r(t), i.d(t, {
        Gif: () => U,
        HashSelector: () => F
      });
      var n = i(9793);
      const o = "rockstargames-modules-core-gif-viewera19bcd2b98d91e60c43b9de146e20f4e",
        s = ({
          color: e
        }) => (0, n.jsxs)("div", {
          className: "rockstargames-modules-core-gif-viewere83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, n.jsx)("div", {
            className: o
          }), (0, n.jsx)("div", {
            className: o
          }), (0, n.jsx)("div", {
            className: o
          })]
        }),
        a = {
          randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
      let r;
      const l = new Uint8Array(16);

      function d() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(l)
      }
      const h = [];
      for (let e = 0; e < 256; ++e) h.push((e + 256).toString(16).slice(1));
      const p = function(e, t, i) {
        if (a.randomUUID && !t && !e) return a.randomUUID();
        const n = (e = e || {}).random || (e.rng || d)();
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
          i = i || 0;
          for (let e = 0; e < 16; ++e) t[i + e] = n[e];
          return t
        }
        return function(e, t = 0) {
          return h[e[t + 0]] + h[e[t + 1]] + h[e[t + 2]] + h[e[t + 3]] + "-" + h[e[t + 4]] + h[e[t + 5]] + "-" + h[e[t + 6]] + h[e[t + 7]] + "-" + h[e[t + 8]] + h[e[t + 9]] + "-" + h[e[t + 10]] + h[e[t + 11]] + h[e[t + 12]] + h[e[t + 13]] + h[e[t + 14]] + h[e[t + 15]]
        }(n)
      };
      var c = i(3082),
        u = i(3331);
      const f = (0, u.setContextItem)({
          context: (0, c.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: m
        } = f,
        g = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, n.jsx)("hr", {})
        });
      g("Background Image Gradient"), ((e = "Label") => {
        e.toLowerCase().split(" ").join("_")
      })("Background Image Gradient"), g("Background Image Gradient"), i(5174);
      const b = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, n.jsx)("hr", {})
      });
      var v, w = i(4017),
        y = function() {
          return y = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
              for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }, y.apply(this, arguments)
        },
        k = {
          width: "100%",
          height: "10px",
          top: "0px",
          left: "0px",
          cursor: "row-resize"
        },
        x = {
          width: "10px",
          height: "100%",
          top: "0px",
          left: "0px",
          cursor: "col-resize"
        },
        z = {
          width: "20px",
          height: "20px",
          position: "absolute",
          zIndex: 1
        },
        S = {
          top: y(y({}, k), {
            top: "-5px"
          }),
          right: y(y({}, x), {
            left: void 0,
            right: "-5px"
          }),
          bottom: y(y({}, k), {
            top: void 0,
            bottom: "-5px"
          }),
          left: y(y({}, x), {
            left: "-5px"
          }),
          topRight: y(y({}, z), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: y(y({}, z), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: y(y({}, z), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: y(y({}, z), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        N = (0, c.memo)(function(e) {
          var t = e.onResizeStart,
            i = e.direction,
            o = e.children,
            s = e.replaceStyles,
            a = e.className,
            r = (0, c.useCallback)(function(e) {
              t(e, i)
            }, [t, i]),
            l = (0, c.useCallback)(function(e) {
              t(e, i)
            }, [t, i]),
            d = (0, c.useMemo)(function() {
              return y(y({
                position: "absolute",
                userSelect: "none"
              }, S[i]), null != s ? s : {})
            }, [s, i]);
          return (0, n.jsx)("div", {
            className: a || void 0,
            style: d,
            onMouseDown: r,
            onTouchStart: l,
            children: o
          })
        }),
        R = (v = function(e, t) {
          return v = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          }, v(e, t)
        }, function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

          function i() {
            this.constructor = e
          }
          v(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        }),
        E = function() {
          return E = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
              for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }, E.apply(this, arguments)
        },
        _ = {
          width: "auto",
          height: "auto"
        },
        W = function(e, t, i) {
          return Math.max(Math.min(e, i), t)
        },
        L = function(e, t, i) {
          var n = Math.round(e / t);
          return n * t + i * (n - 1)
        },
        j = function(e, t) {
          return new RegExp(e, "i").test(t)
        },
        M = function(e) {
          return Boolean(e.touches && e.touches.length)
        },
        B = function(e, t, i) {
          void 0 === i && (i = 0);
          var n = t.reduce(function(i, n, o) {
              return Math.abs(n - e) < Math.abs(t[i] - e) ? o : i
            }, 0),
            o = Math.abs(t[n] - e);
          return 0 === i || o < i ? t[n] : e
        },
        D = function(e) {
          return "auto" === (e = e.toString()) || e.endsWith("px") || e.endsWith("%") || e.endsWith("vh") || e.endsWith("vw") || e.endsWith("vmax") || e.endsWith("vmin") ? e : "".concat(e, "px")
        },
        C = function(e, t, i, n) {
          if (e && "string" == typeof e) {
            if (e.endsWith("px")) return Number(e.replace("px", ""));
            if (e.endsWith("%")) return t * (Number(e.replace("%", "")) / 100);
            if (e.endsWith("vw")) return i * (Number(e.replace("vw", "")) / 100);
            if (e.endsWith("vh")) return n * (Number(e.replace("vh", "")) / 100)
          }
          return e
        },
        T = ["as", "ref", "style", "className", "grid", "gridGap", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        I = "__resizable_base__",
        O = function(e) {
          function t(t) {
            var i, n, o, s, a = e.call(this, t) || this;
            return a.ratio = 1, a.resizable = null, a.parentLeft = 0, a.parentTop = 0, a.resizableLeft = 0, a.resizableRight = 0, a.resizableTop = 0, a.resizableBottom = 0, a.targetLeft = 0, a.targetTop = 0, a.delta = {
              width: 0,
              height: 0
            }, a.appendBase = function() {
              if (!a.resizable || !a.window) return null;
              var e = a.parentNode;
              if (!e) return null;
              var t = a.window.document.createElement("div");
              return t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t.style.transform = "scale(0, 0)", t.style.left = "0", t.style.flex = "0 0 100%", t.classList ? t.classList.add(I) : t.className += I, e.appendChild(t), t
            }, a.removeBase = function(e) {
              var t = a.parentNode;
              t && t.removeChild(e)
            }, a.state = {
              isResizing: !1,
              width: null !== (n = null === (i = a.propsSize) || void 0 === i ? void 0 : i.width) && void 0 !== n ? n : "auto",
              height: null !== (s = null === (o = a.propsSize) || void 0 === o ? void 0 : o.height) && void 0 !== s ? s : "auto",
              direction: "right",
              original: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              },
              backgroundStyle: {
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0)",
                cursor: "auto",
                opacity: 0,
                position: "fixed",
                zIndex: 9999,
                top: "0",
                left: "0",
                bottom: "0",
                right: "0"
              },
              flexBasis: void 0
            }, a.onResizeStart = a.onResizeStart.bind(a), a.onMouseMove = a.onMouseMove.bind(a), a.onMouseUp = a.onMouseUp.bind(a), a
          }
          return R(t, e), Object.defineProperty(t.prototype, "parentNode", {
            get: function() {
              return this.resizable ? this.resizable.parentNode : null
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "window", {
            get: function() {
              return this.resizable && this.resizable.ownerDocument ? this.resizable.ownerDocument.defaultView : null
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "propsSize", {
            get: function() {
              return this.props.size || this.props.defaultSize || _
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "size", {
            get: function() {
              var e = 0,
                t = 0;
              if (this.resizable && this.window) {
                var i = this.resizable.offsetWidth,
                  n = this.resizable.offsetHeight,
                  o = this.resizable.style.position;
                "relative" !== o && (this.resizable.style.position = "relative"), e = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : i, t = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : n, this.resizable.style.position = o
              }
              return {
                width: e,
                height: t
              }
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "sizeStyle", {
            get: function() {
              var e = this,
                t = this.props.size,
                i = function(t) {
                  var i;
                  if (void 0 === e.state[t] || "auto" === e.state[t]) return "auto";
                  if (e.propsSize && e.propsSize[t] && (null === (i = e.propsSize[t]) || void 0 === i ? void 0 : i.toString().endsWith("%"))) {
                    if (e.state[t].toString().endsWith("%")) return e.state[t].toString();
                    var n = e.getParentSize(),
                      o = Number(e.state[t].toString().replace("px", "")) / n[t] * 100;
                    return "".concat(o, "%")
                  }
                  return D(e.state[t])
                };
              return {
                width: t && void 0 !== t.width && !this.state.isResizing ? D(t.width) : i("width"),
                height: t && void 0 !== t.height && !this.state.isResizing ? D(t.height) : i("height")
              }
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.getParentSize = function() {
            if (!this.parentNode) return this.window ? {
              width: this.window.innerWidth,
              height: this.window.innerHeight
            } : {
              width: 0,
              height: 0
            };
            var e = this.appendBase();
            if (!e) return {
              width: 0,
              height: 0
            };
            var t = !1,
              i = this.parentNode.style.flexWrap;
            "wrap" !== i && (t = !0, this.parentNode.style.flexWrap = "wrap"), e.style.position = "relative", e.style.minWidth = "100%", e.style.minHeight = "100%";
            var n = {
              width: e.offsetWidth,
              height: e.offsetHeight
            };
            return t && (this.parentNode.style.flexWrap = i), this.removeBase(e), n
          }, t.prototype.bindEvents = function() {
            this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
              capture: !0,
              passive: !1
            }), this.window.addEventListener("touchend", this.onMouseUp))
          }, t.prototype.unbindEvents = function() {
            this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp))
          }, t.prototype.componentDidMount = function() {
            if (this.resizable && this.window) {
              var e = this.window.getComputedStyle(this.resizable);
              this.setState({
                width: this.state.width || this.size.width,
                height: this.state.height || this.size.height,
                flexBasis: "auto" !== e.flexBasis ? e.flexBasis : void 0
              })
            }
          }, t.prototype.componentWillUnmount = function() {
            this.window && this.unbindEvents()
          }, t.prototype.createSizeForCssProperty = function(e, t) {
            var i = this.propsSize && this.propsSize[t];
            return "auto" !== this.state[t] || this.state.original[t] !== e || void 0 !== i && "auto" !== i ? e : "auto"
          }, t.prototype.calculateNewMaxFromBoundary = function(e, t) {
            var i, n, o = this.props.boundsByDirection,
              s = this.state.direction,
              a = o && j("left", s),
              r = o && j("top", s);
            if ("parent" === this.props.bounds) {
              var l = this.parentNode;
              l && (i = a ? this.resizableRight - this.parentLeft : l.offsetWidth + (this.parentLeft - this.resizableLeft), n = r ? this.resizableBottom - this.parentTop : l.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = a ? this.resizableRight : this.window.innerWidth - this.resizableLeft, n = r ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = a ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), n = r ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return i && Number.isFinite(i) && (e = e && e < i ? e : i), n && Number.isFinite(n) && (t = t && t < n ? t : n), {
              maxWidth: e,
              maxHeight: t
            }
          }, t.prototype.calculateNewSizeFromDirection = function(e, t) {
            var i, n = this.props.scale || 1,
              o = (i = this.props.resizeRatio || 1, Array.isArray(i) ? i : [i, i]),
              s = o[0],
              a = o[1],
              r = this.state,
              l = r.direction,
              d = r.original,
              h = this.props,
              p = h.lockAspectRatio,
              c = h.lockAspectRatioExtraHeight,
              u = h.lockAspectRatioExtraWidth,
              f = d.width,
              m = d.height,
              g = c || 0,
              b = u || 0;
            return j("right", l) && (f = d.width + (e - d.x) * s / n, p && (m = (f - b) / this.ratio + g)), j("left", l) && (f = d.width - (e - d.x) * s / n, p && (m = (f - b) / this.ratio + g)), j("bottom", l) && (m = d.height + (t - d.y) * a / n, p && (f = (m - g) * this.ratio + b)), j("top", l) && (m = d.height - (t - d.y) * a / n, p && (f = (m - g) * this.ratio + b)), {
              newWidth: f,
              newHeight: m
            }
          }, t.prototype.calculateNewSizeFromAspectRatio = function(e, t, i, n) {
            var o = this.props,
              s = o.lockAspectRatio,
              a = o.lockAspectRatioExtraHeight,
              r = o.lockAspectRatioExtraWidth,
              l = void 0 === n.width ? 10 : n.width,
              d = void 0 === i.width || i.width < 0 ? e : i.width,
              h = void 0 === n.height ? 10 : n.height,
              p = void 0 === i.height || i.height < 0 ? t : i.height,
              c = a || 0,
              u = r || 0;
            if (s) {
              var f = (h - c) * this.ratio + u,
                m = (p - c) * this.ratio + u,
                g = (l - u) / this.ratio + c,
                b = (d - u) / this.ratio + c,
                v = Math.max(l, f),
                w = Math.min(d, m),
                y = Math.max(h, g),
                k = Math.min(p, b);
              e = W(e, v, w), t = W(t, y, k)
            } else e = W(e, l, d), t = W(t, h, p);
            return {
              newWidth: e,
              newHeight: t
            }
          }, t.prototype.setBoundingClientRect = function() {
            var e = 1 / (this.props.scale || 1);
            if ("parent" === this.props.bounds) {
              var t = this.parentNode;
              if (t) {
                var i = t.getBoundingClientRect();
                this.parentLeft = i.left * e, this.parentTop = i.top * e
              }
            }
            if (this.props.bounds && "string" != typeof this.props.bounds) {
              var n = this.props.bounds.getBoundingClientRect();
              this.targetLeft = n.left * e, this.targetTop = n.top * e
            }
            if (this.resizable) {
              var o = this.resizable.getBoundingClientRect(),
                s = o.left,
                a = o.top,
                r = o.right,
                l = o.bottom;
              this.resizableLeft = s * e, this.resizableRight = r * e, this.resizableTop = a * e, this.resizableBottom = l * e
            }
          }, t.prototype.onResizeStart = function(e, t) {
            if (this.resizable && this.window) {
              var i, n = 0,
                o = 0;
              if (e.nativeEvent && function(e) {
                  return Boolean((e.clientX || 0 === e.clientX) && (e.clientY || 0 === e.clientY))
                }(e.nativeEvent) ? (n = e.nativeEvent.clientX, o = e.nativeEvent.clientY) : e.nativeEvent && M(e.nativeEvent) && (n = e.nativeEvent.touches[0].clientX, o = e.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(e, t, this.resizable)) return;
              this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                height: this.props.size.height
              }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                width: this.props.size.width
              })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
              var s = this.window.getComputedStyle(this.resizable);
              if ("auto" !== s.flexBasis) {
                var a = this.parentNode;
                if (a) {
                  var r = this.window.getComputedStyle(a).flexDirection;
                  this.flexDir = r.startsWith("row") ? "row" : "column", i = s.flexBasis
                }
              }
              this.setBoundingClientRect(), this.bindEvents();
              var l = {
                original: {
                  x: n,
                  y: o,
                  width: this.size.width,
                  height: this.size.height
                },
                isResizing: !0,
                backgroundStyle: E(E({}, this.state.backgroundStyle), {
                  cursor: this.window.getComputedStyle(e.target).cursor || "auto"
                }),
                direction: t,
                flexBasis: i
              };
              this.setState(l)
            }
          }, t.prototype.onMouseMove = function(e) {
            var t = this;
            if (this.state.isResizing && this.resizable && this.window) {
              if (this.window.TouchEvent && M(e)) try {
                e.preventDefault(), e.stopPropagation()
              } catch (e) {}
              var i = this.props,
                n = i.maxWidth,
                o = i.maxHeight,
                s = i.minWidth,
                a = i.minHeight,
                r = M(e) ? e.touches[0].clientX : e.clientX,
                l = M(e) ? e.touches[0].clientY : e.clientY,
                d = this.state,
                h = d.direction,
                p = d.original,
                c = d.width,
                u = d.height,
                f = this.getParentSize(),
                m = function(e, t, i, n, o, s, a) {
                  return n = C(n, e.width, t, i), o = C(o, e.height, t, i), s = C(s, e.width, t, i), a = C(a, e.height, t, i), {
                    maxWidth: void 0 === n ? void 0 : Number(n),
                    maxHeight: void 0 === o ? void 0 : Number(o),
                    minWidth: void 0 === s ? void 0 : Number(s),
                    minHeight: void 0 === a ? void 0 : Number(a)
                  }
                }(f, this.window.innerWidth, this.window.innerHeight, n, o, s, a);
              n = m.maxWidth, o = m.maxHeight, s = m.minWidth, a = m.minHeight;
              var g = this.calculateNewSizeFromDirection(r, l),
                b = g.newHeight,
                v = g.newWidth,
                y = this.calculateNewMaxFromBoundary(n, o);
              this.props.snap && this.props.snap.x && (v = B(v, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (b = B(b, this.props.snap.y, this.props.snapGap));
              var k = this.calculateNewSizeFromAspectRatio(v, b, {
                width: y.maxWidth,
                height: y.maxHeight
              }, {
                width: s,
                height: a
              });
              if (v = k.newWidth, b = k.newHeight, this.props.grid) {
                var x = L(v, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                  z = L(b, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                  S = this.props.snapGap || 0;
                v = 0 === S || Math.abs(x - v) <= S ? x : v, b = 0 === S || Math.abs(z - b) <= S ? z : b
              }
              var N = {
                width: v - p.width,
                height: b - p.height
              };
              if (this.delta = N, c && "string" == typeof c)
                if (c.endsWith("%")) {
                  var R = v / f.width * 100;
                  v = "".concat(R, "%")
                } else if (c.endsWith("vw")) {
                var E = v / this.window.innerWidth * 100;
                v = "".concat(E, "vw")
              } else if (c.endsWith("vh")) {
                var _ = v / this.window.innerHeight * 100;
                v = "".concat(_, "vh")
              }
              u && "string" == typeof u && (u.endsWith("%") ? (R = b / f.height * 100, b = "".concat(R, "%")) : u.endsWith("vw") ? (E = b / this.window.innerWidth * 100, b = "".concat(E, "vw")) : u.endsWith("vh") && (_ = b / this.window.innerHeight * 100, b = "".concat(_, "vh")));
              var W = {
                width: this.createSizeForCssProperty(v, "width"),
                height: this.createSizeForCssProperty(b, "height")
              };
              "row" === this.flexDir ? W.flexBasis = W.width : "column" === this.flexDir && (W.flexBasis = W.height);
              var j = this.state.width !== W.width,
                D = this.state.height !== W.height,
                T = this.state.flexBasis !== W.flexBasis,
                I = j || D || T;
              I && (0, w.flushSync)(function() {
                t.setState(W)
              }), this.props.onResize && I && this.props.onResize(e, h, this.resizable, N)
            }
          }, t.prototype.onMouseUp = function(e) {
            var t, i, n = this.state,
              o = n.isResizing,
              s = n.direction;
            n.original, o && this.resizable && (this.props.onResizeStop && this.props.onResizeStop(e, s, this.resizable, this.delta), this.props.size && this.setState({
              width: null !== (t = this.props.size.width) && void 0 !== t ? t : "auto",
              height: null !== (i = this.props.size.height) && void 0 !== i ? i : "auto"
            }), this.unbindEvents(), this.setState({
              isResizing: !1,
              backgroundStyle: E(E({}, this.state.backgroundStyle), {
                cursor: "auto"
              })
            }))
          }, t.prototype.updateSize = function(e) {
            var t, i;
            this.setState({
              width: null !== (t = e.width) && void 0 !== t ? t : "auto",
              height: null !== (i = e.height) && void 0 !== i ? i : "auto"
            })
          }, t.prototype.renderResizer = function() {
            var e = this,
              t = this.props,
              i = t.enable,
              o = t.handleStyles,
              s = t.handleClasses,
              a = t.handleWrapperStyle,
              r = t.handleWrapperClass,
              l = t.handleComponent;
            if (!i) return null;
            var d = Object.keys(i).map(function(t) {
              return !1 !== i[t] ? (0, n.jsx)(N, {
                direction: t,
                onResizeStart: e.onResizeStart,
                replaceStyles: o && o[t],
                className: s && s[t],
                children: l && l[t] ? l[t] : null
              }, t) : null
            });
            return (0, n.jsx)("div", {
              className: r,
              style: a,
              children: d
            })
          }, t.prototype.render = function() {
            var e = this,
              t = Object.keys(this.props).reduce(function(t, i) {
                return -1 !== T.indexOf(i) || (t[i] = e.props[i]), t
              }, {}),
              i = E(E(E({
                position: "relative",
                userSelect: this.state.isResizing ? "none" : "auto"
              }, this.props.style), this.sizeStyle), {
                maxWidth: this.props.maxWidth,
                maxHeight: this.props.maxHeight,
                minWidth: this.props.minWidth,
                minHeight: this.props.minHeight,
                boxSizing: "border-box",
                flexShrink: 0
              });
            this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
            var o = this.props.as || "div";
            return (0, n.jsxs)(o, E({
              style: i,
              className: this.props.className
            }, t, {
              ref: function(t) {
                t && (e.resizable = t)
              },
              children: [this.state.isResizing && (0, n.jsx)("div", {
                style: this.state.backgroundStyle
              }), this.props.children, this.renderResizer()]
            }))
          }, t.defaultProps = {
            as: "div",
            onResizeStart: function() {},
            onResize: function() {},
            onResizeStop: function() {},
            enable: {
              top: !0,
              right: !0,
              bottom: !0,
              left: !0,
              topRight: !0,
              bottomRight: !0,
              bottomLeft: !0,
              topLeft: !0
            },
            style: {},
            grid: [1, 1],
            gridGap: [0, 0],
            lockAspectRatio: !1,
            lockAspectRatioExtraWidth: 0,
            lockAspectRatioExtraHeight: 0,
            scale: 1,
            resizeRatio: 1,
            snapGap: 0
          }, t
        }(c.PureComponent);
      const H = ({
        style: e,
        width: t,
        height: i,
        resizable: o,
        field: s,
        input: a,
        meta: r,
        name: l,
        label: d,
        description: h,
        error: p,
        children: u
      }) => {
        const f = () => o ? (0, n.jsx)(O, {
          defaultSize: {
            width: t || "100%",
            height: i || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, c.cloneElement)(u, ...a)
        }) : u;
        return (0, n.jsxs)("div", {
          className: "rockstargames-modules-core-gif-viewere8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
          style: e,
          children: [(0, n.jsxs)("label", {
            className: "rockstargames-modules-core-gif-viewerceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
            htmlFor: l ?? s?.name,
            children: [d ?? s?.label, (0, n.jsx)("span", {
              className: "rockstargames-modules-core-gif-viewera0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
              children: h ?? s?.description
            })]
          }), (0, n.jsx)(f, {}), (p || r?.error) && (0, n.jsx)("div", {
            className: "FieldError_sc_custom",
            children: p ?? r?.error
          })]
        })
      };
      b("Background Image Gradient"), ((e = "Label") => {
        e.toLowerCase().split(" ").join("_")
      })("Background Image Gradient"), b("Background Image Gradient");
      i(4620);
      const G = (e = {}) => ({
        ...e,
        key: `key_${p()}`
      });
      var P = i(6065);
      const A = ({
          field: e,
          input: t,
          meta: i
        }) => {
          const {
            data: o
          } = (0, u.useQuery)(P.GifsList);
          return (0, n.jsx)(H, {
            name: t.name || e.name || e.label,
            label: e.label,
            description: e.description,
            meta: i,
            children: o?.gifsList?.length ? (0, n.jsxs)("select", {
              ...t,
              children: [(0, n.jsx)("option", {
                value: "",
                children: "-- Select a gif --"
              }), o.gifsList.map(e => (0, n.jsxs)("option", {
                value: e.hash,
                children: ["(", e.hash, ")", " ", e.name]
              }, e.hash))]
            }) : (0, n.jsx)(s, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        F = (e = {}) => ({
          label: e?.label ?? "Gif hash",
          name: e?.group ?? "hash",
          description: e?.description ?? "",
          component: ({
            field: e,
            input: t,
            meta: i
          }) => (0, n.jsx)(A, {
            field: e,
            input: t,
            meta: i
          })
        }),
        U = (e = {
          group: "hash"
        }) => {
          return {
            name: e.group,
            label: "Gif",
            fields: [{
              label: "Name",
              name: "name",
              component: "text",
              description: "Block label for internal use only"
            }, F({
              group: "hash.mobile",
              label: "Mobile Source",
              description: "(If responsive, only Mobile Source is needed)"
            }), F({
              group: "hash.desktop",
              label: "Desktop Source"
            }), (t = {
              name: "caption",
              label: "Caption",
              component: "html"
            }, {
              ...t,
              name: `_memoq.${t.name}`
            }), {
              name: "loop",
              label: "Is Looping?",
              description: "Should this gif repeat endlessly?",
              component: "toggle"
            }, {
              name: "hero",
              label: "Is this a lead asset?",
              component: "toggle",
              defaultValue: !1,
              defaultItem: () => G({
                hero: !1
              })
            }],
            defaultItem: () => G({
              loop: !1
            }),
            itemProps: e => ((e, t = {}) => ({
              ...t,
              key: e.key
            }))(e, {
              label: e?.name ? `${e.name} [Gif]` : "New [Gif]"
            })
          };
          var t
        }
    }
  }
]);