try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fb47cf5d-b1cf-414f-9eab-566f4ed5c060", e._sentryDebugIdIdentifier = "sentry-dbid-fb47cf5d-b1cf-414f-9eab-566f4ed5c060")
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
  [193], {
    30895(e) {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MemoqXmlDownload"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "table"
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
                value: "id"
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
                value: "memoqXmlDownload"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "table"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "table"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
                    value: "xml"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "translation_status"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "MemoqXmlUpload"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "table"
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
                value: "id"
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
                value: "xml"
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
                value: "memoqXmlUpload"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "table"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "table"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "xml"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "xml"
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
                    value: "translation_status"
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
          end: 314
        }
      };

      function i(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && n.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          i(e, n)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          i(e, n)
        }), e.definitions && e.definitions.forEach(function(e) {
          i(e, n)
        })
      }
      n.loc.source = {
        body: "query MemoqXmlDownload($table: String!, $id: String!) {\n    memoqXmlDownload(table: $table, id: $id) {\n        xml\n        translation_status\n    }\n}\n\nmutation MemoqXmlUpload($table: String!, $id: String!, $xml: String!) {\n    memoqXmlUpload(table: $table, id: $id, xml: $xml) {\n        translation_status\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function t(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }

      function o(e, n) {
        var i = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var o = a[n] || new Set,
          l = new Set,
          s = new Set;
        for (o.forEach(function(e) {
            s.add(e)
          }); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach(function(e) {
            l.has(e) || (l.add(e), (a[e] || new Set).forEach(function(e) {
              s.add(e)
            }))
          })
        }
        return l.forEach(function(n) {
          var a = t(e, n);
          a && i.definitions.push(a)
        }), i
      }
      n.definitions.forEach(function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      }), e.exports = n, e.exports.MemoqXmlDownload = o(n, "MemoqXmlDownload"), e.exports.MemoqXmlUpload = o(n, "MemoqXmlUpload")
    },
    69334(e) {
      var n = {
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

      function i(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && n.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          i(e, n)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          i(e, n)
        }), e.definitions && e.definitions.forEach(function(e) {
          i(e, n)
        })
      }
      n.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function t(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }
      n.definitions.forEach(function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      }), e.exports = n, e.exports.TagList = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var o = a[n] || new Set,
          l = new Set,
          s = new Set;
        for (o.forEach(function(e) {
            s.add(e)
          }); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach(function(e) {
            l.has(e) || (l.add(e), (a[e] || new Set).forEach(function(e) {
              s.add(e)
            }))
          })
        }
        return l.forEach(function(n) {
          var a = t(e, n);
          a && i.definitions.push(a)
        }), i
      }(n, "TagList")
    },
    84320(e, n, i) {
      "use strict";
      i.d(n, {
        YK: () => a.YK,
        JK: () => f,
        tz: () => t.A,
        QY: () => b
      });
      var a = i(14376),
        t = i(68925),
        o = i(39793),
        l = i(93082),
        s = i(30212),
        r = i(24834);
      const d = (e, n) => {
          if (!e || !n) return void console.log(`Couldn't set cookie (${e}) to value (${n})`);
          const i = window.location.hostname.split("."),
            a = i.slice(i.length - 2).join(".");
          document.cookie = `${e}=${n}; domain=${a}; path=/;`
        },
        c = e => {
          const n = document.cookie.split("; "),
            i = `${e}=`,
            a = n.find(e => e.startsWith(i)),
            t = a?.substring(i.length, a.length);
          return t
        },
        u = [{
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
        m = u[0],
        p = u,
        f = () => {
          const {
            location: e
          } = window, n = (0, r.A)(), i = (e => {
            const n = p.map(e => e.subdomaincom),
              i = e.pathname.substring(1).split("/"),
              a = "detect-locals" === i[0] ? 1 : 0;
            return -1 !== n.indexOf(i[a]) ? i[a] : null
          })(e), a = (e => {
            const n = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return n?.split("=")[1]
          })(e), t = m;
          let o;
          const l = `rockstarweb_lang.${n.cookieIdentifier}`,
            s = c(l);
          o = n.currentSite?.site === r.C.www ? p.find(e => e.subdomaincom === a) || p.find(e => e.subdomaincom === i) || t : p.find(e => e.iso === s) || t;
          const [, u] = ((e, n, i = !1) => {
            const a = c(e);
            return a && !i || d(e, n), [a, (t = e, e => {
              d(t, e)
            })];
            var t
          })(l, o.iso);
          return [o, u]
        };

      function b(e, n, i, a) {
        return t => {
          const r = (0, l.useMemo)(() => {
            if (n) return function(e, n) {
              return function(e, n) {
                const i = n ?? f()[0].iso ?? "en-US",
                  a = function(e, n) {
                    return e[n] ?? {}
                  }(e, i);
                var t;
                return {
                  rsLocale: i,
                  locale: i,
                  messages: (t = a, {
                    ...t
                  })
                }
              }(e, n)
            }(n, i)
          }, [i]);
          return (0, o.jsx)(s.A, {
            locale: r?.locale || "en-US",
            messages: {
              ...r?.messages
            },
            onError: a,
            children: r && (0, o.jsx)(e, {
              ...t
            })
          }, "intl-provider")
        }
      }
    },
    24834(e, n, i) {
      "use strict";
      var a = i(40415),
        t = i(50573);
      const o = [{
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
      }];
      i.d(n, ["A", 0, () => {
        let e;
        const {
          location: n
        } = window, i = n.hostname.substring(0, n.hostname.indexOf(".rockstargames.com")), l = o.findIndex(n => Object.entries(n.sites).findIndex(([n, a]) => a === i && (e = {
          site: n,
          subDomain: a
        }, !0)) >= 0), s = o[l >= 0 ? l : 0], r = o.find(e => e.id === s.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, t.A)((0, a.A)({}, r, {
          currentSite: e
        }, s), "fallbackEnvironment")
      }, "C", 0, {
        www: "www",
        socialClub: "socialClub",
        support: "support",
        store: "store",
        circoloco: "circoloco",
        supportNew: "support"
      }])
    },
    58924(e, n, i) {
      "use strict";
      var a = i(39793),
        t = i(93082);
      const o = (0, i(13331).setContextItem)({
          context: (0, t.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: l
        } = o;
      i.d(n, ["i", 0, () => (0, t.useContext)(o), "o", 0, ({
        children: e,
        payload: n
      }) => (0, a.jsx)(l, {
        value: n,
        children: e
      })])
    },
    97244(e, n, i) {
      "use strict";
      var a = i(93082),
        t = i(13331),
        o = i(58924);
      const l = e => {
        if (!e) return null;
        const {
          hostname: n,
          pathname: i
        } = new URL(e, (0, t.getCdnPrefix)(!0));
        return "/" === i ? null : (n.endsWith(".akamaized.net"), e)
      };
      i.d(n, ["C1", 0, e => {
        const n = (0, o.i)() ?? {},
          {
            meta: i = {}
          } = n,
          [s, r] = (0, a.useState)(i?.cdn ?? i?.prod ?? !1);
        return (0, a.useEffect)(() => {
          r(i?.cdn ?? i?.prod ?? !1)
        }, [i]), e ? e?.startsWith("http") ? l(e) : l(`${(0,t.getCdnPrefix)(s)}${e}`) : null
      }, "S1", 0, ({
        alt: e = null,
        mobile: n = null,
        imageMobileStyle: i = {},
        desktop: s = null,
        imageDesktopStyle: r = {},
        ariaLabel: d = null,
        sources: c = null,
        prod: u = null
      }) => {
        const m = (0, t.useLocale)(),
          {
            meta: p = {}
          } = (0, o.i)() ?? {},
          [f, b] = (0, a.useState)(u ?? p?.cdn ?? p?.prod ?? !0);
        (0, a.useEffect)(() => {
          b(u ?? p?.cdn ?? p?.prod ?? !0)
        }, [u, p]);
        const k = (0, a.useCallback)(e => {
          const n = null !== c,
            i = e?.previewSrc ?? e ?? null;
          if (null === i || "string" != typeof i) return null;
          if (i.startsWith("http")) return l(i);
          const a = `${n?(0,t.getCdnPrefix)(f):""}${i}`;
          return l(a)
        }, [f, c]);
        return {
          alt: e,
          ariaLabel: d,
          src: {
            mobile: k(c?.[m]?.mobile ?? c?.en_us?.mobile ?? n),
            imageMobileStyle: c?.[m]?.imageMobileStyle ?? c?.en_us?.imageMobileStyle ?? i,
            imageDesktopStyle: c?.[m]?.imageDesktopStyle ?? c?.en_us?.imageDesktopStyle ?? r,
            desktop: k(c?.[m]?.desktop ?? c?.en_us?.desktop ?? s)
          }
        }
      }, "XC", 0, e => e.meta.uploads_directory, "jS", 0, () => {
        const e = (0, o.i)() ?? {},
          {
            meta: n = {}
          } = e,
          i = (0, a.useMemo)(() => n?.cdn ?? n?.prod ?? !1, [n]);
        return (0, a.useCallback)((e, n = {}) => {
          const a = n?.prod ?? i;
          return e ? e?.startsWith("http") ? l(e) : l(`${(0,t.getCdnPrefix)(a)}${e}`) : null
        }, [i])
      }, "qg", 0, e => e.full_src, "z0", 0, e => {
        const n = e?.previewSrc ?? e?.preview_src ?? e;
        return n?.startsWith("http") ? n : `${(0,t.getCdnPrefix)(!1)}${n}`
      }])
    },
    70193(e, n, i) {
      "use strict";
      i.d(n, {
        ho: () => r,
        om: () => c,
        Qw: () => "_memoq",
        ZH: () => t,
        Q: () => u,
        Rv: () => m,
        z9: () => p
      });
      var a = i(39279);
      const t = "content";
      var o = i(39793);
      i(97244);
      const l = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, o.jsx)("hr", {})
      });
      l("Background Image Gradient"), ((e = "Label") => {
        e.toLowerCase().split(" ").join("_")
      })("Background Image Gradient"), l("Background Image Gradient"), i(84320);
      var s = i(48395);
      (0, s.cG)("Background Image Gradient"), (0, s.ri)("Background Image Gradient"), (0, s.cG)("Background Image Gradient");
      const r = () => ({
        name: "hero",
        label: "Is this a lead asset?",
        component: "toggle",
        defaultValue: !1,
        defaultItem: () => u({
          hero: !1
        })
      });
      i(93082);
      var d = i(13331);
      i(48641), i(15154), i(30895);
      const c = () => ({
        label: "Name",
        name: "name",
        component: "text",
        description: "Block label for internal use only"
      });
      i(69334), d.PAGE_THEMES.BL, d.PAGE_THEMES.BL;
      const u = (e = {}) => ({
          ...e,
          key: `key_${(0,a.A)()}`
        }),
        m = (e, n = {}) => ({
          ...n,
          key: e.key
        }),
        p = e => ({
          ...e,
          name: `_memoq.${e.name}`
        })
    },
    48641(e, n, i) {
      "use strict";
      i.d(n, {
        A: () => l
      });
      var a = i(39793),
        t = i(93082),
        o = i(79484);
      const l = ({
        style: e,
        width: n,
        height: i,
        resizable: l,
        field: s,
        input: r,
        meta: d,
        name: c,
        label: u,
        description: m,
        error: p,
        children: f
      }) => {
        const b = () => l ? (0, a.jsx)(o.c, {
          defaultSize: {
            width: n || "100%",
            height: i || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, t.cloneElement)(f, ...r)
        }) : f;
        return (0, a.jsxs)("div", {
          className: "rockstargames-modules-core-gif-viewere8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
          style: e,
          children: [(0, a.jsxs)("label", {
            className: "rockstargames-modules-core-gif-viewerceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
            htmlFor: c ?? s?.name,
            children: [u ?? s?.label, (0, a.jsx)("span", {
              className: "rockstargames-modules-core-gif-viewera0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
              children: m ?? s?.description
            })]
          }), (0, a.jsx)(b, {}), (p || d?.error) && (0, a.jsx)("div", {
            className: "FieldError_sc_custom",
            children: p ?? d?.error
          })]
        })
      }
    },
    15154(e, n, i) {
      "use strict";
      var a = i(39793);
      i.d(n, ["A", 0, ({
        value: e,
        onChange: n = () => {},
        multi: i = !1,
        ...t
      }) => {
        const o = ({
          value: e,
          multi: n
        }) => n ? (0, a.jsxs)("div", {
          children: ["Selected files:", e.map(e => e.name).join(", ")]
        }) : (0, a.jsxs)("div", {
          children: ["Selected file:", e.name]
        });
        return (0, a.jsx)("label", {
          children: e && "" !== e ? (0, a.jsx)(o, {
            value: e,
            multi: i
          }) : (0, a.jsx)("input", {
            ...t,
            type: "file",
            onChange: e => {
              n(i ? [...e.target.files] : e.target.files[0])
            }
          })
        })
      }])
    },
    48395(e, n, i) {
      "use strict";
      i.d(n, {
        cG: () => t,
        cm: () => o.A,
        zp: () => l.A,
        t$: () => s,
        ri: () => r
      });
      var a = i(39793);
      const t = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, a.jsx)("hr", {})
      });
      var o = i(48641),
        l = i(15154);
      const s = ({
          defaultValue: e,
          name: n
        }) => (0, a.jsx)("input", {
          type: "hidden",
          value: e,
          name: n
        }),
        r = (e = "Label") => ({
          label: e,
          name: e.toLowerCase().split(" ").join("_"),
          component: () => (0, a.jsx)("h3", {
            style: {
              marginBottom: "var(--tina-padding-small)",
              "--color-h3": "var(--tina-color-grey-8)"
            },
            children: e
          })
        })
    }
  }
]);