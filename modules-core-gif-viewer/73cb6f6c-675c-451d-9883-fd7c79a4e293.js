! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "73cb6f6c-675c-451d-9883-fd7c79a4e293", e._sentryDebugIdIdentifier = "sentry-dbid-73cb6f6c-675c-451d-9883-fd7c79a4e293")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [799], {
    5138: (e, n, i) => {
      "use strict";
      i.d(n, {
        A: () => t
      });
      const a = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        t = () => {
          let e;
          const {
            location: n
          } = window, i = n.hostname.substring(0, n.hostname.indexOf(".rockstargames.com")), t = a.findIndex((n => Object.entries(n.sites).findIndex((n => {
            let [a, t] = n;
            return t === i && (e = {
              site: a,
              subDomain: t
            }, !0)
          })) >= 0)), o = a[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: e
          }
        }
    },
    1207: (e, n, i) => {
      "use strict";
      i.d(n, {
        OD: () => l,
        lv: () => r,
        pP: () => c,
        wC: () => t,
        PE: () => g,
        rB: () => d,
        yh: () => v,
        Ap: () => f,
        Xs: () => k,
        kx: () => b,
        rJ: () => y,
        pT: () => p,
        lV: () => w,
        PA: () => a,
        My: () => m
      }), i(1999);
      const a = e => {
          let {
            element: n
          } = e;
          const i = setInterval((() => n.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            a = e => {
              e.target === document && (clearInterval(i), document.removeEventListener("scroll", a))
            };
          document.addEventListener("scroll", a)
        },
        t = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const n = new URLSearchParams(document.location.search),
            i = document.getElementById(n.get(e) || e);
          i && (a({
            element: i
          }), o(i))
        },
        o = e => {
          const n = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (n.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const i = e?.querySelectorAll(n.join(", "));
            if (i?.length) {
              const e = [...i].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class l {
        constructor(e, n, i) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = n, this.id = i, this.alias = a
        }
      }
      const r = Object.freeze({
          pc: new l("pc", "PC", 8),
          ps: new l("ps", "PlayStation", 3),
          ps3: new l("ps3", "PlayStation 3", 2),
          ps4: new l("ps4", "PlayStation 4", 11),
          ps5: new l("ps5", "PlayStation 5", 20),
          xbox: new l("xbox", "Xbox", 4),
          xbox360: new l("xbox360", "Xbox 360", 1),
          xboxone: new l("xboxone", "Xbox One", 12),
          xboxsx: new l("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new l("switch", "Nintendo Switch™", 18),
          nintendoswitch: new l("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new l("applestore", "App Store", 102),
          googleplay: new l("googleplay", "Google Play", 1023),
          appStore: new l("app_store", "App Store", 102),
          googlePlay: new l("ggle_play", "Google Play", 1023)
        }),
        s = Object.freeze(Object.values(r));

      function d(e) {
        if (!e) return;
        if (e instanceof l) return e;
        const n = e.toString().toLowerCase();
        return s.find((e => n === e.name || n === e.id.toString() || n === e.friendlyName.toLowerCase() || n === e.alias?.toLowerCase()))
      }
      const c = function() {
        for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
        return [...n].filter(Boolean).join(" ")
      };
      var u = i(4511);
      const f = e => {
          const n = document.cookie.split("; "),
            i = `${e}=`,
            a = n.find((e => e.startsWith(i))),
            t = a?.substring(i.length, a.length);
          return t
        },
        m = (e, n) => {
          e && void 0 !== n && (0, u.canStoreCookie)(e) && f(e) !== n && (document.cookie = `${e}=${n}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
        };
      i(8096);
      const p = e => e.keys().forEach(e),
        h = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        v = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return h.filter((n => n.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        g = e => {
          e.preventDefault();
          const n = e.currentTarget.href,
            i = (e => {
              const n = new URL(e).pathname.split("/"),
                i = n[n.length - 1];
              return decodeURIComponent(i)
            })(n);
          fetch(n, {
            method: "GET",
            headers: {}
          }).then((e => e.arrayBuffer())).then((e => {
            const n = window.URL.createObjectURL(new Blob([e])),
              a = document.createElement("a");
            a.href = n, a.setAttribute("download", i), document.body.appendChild(a), a.click(), document.body.removeChild(a)
          })).catch((e => {
            console.log(e)
          }))
        },
        k = () => [r.xbox360.name, r.xboxone.name, r.ps3.name, r.ps4.name, r.pc.name],
        b = () => [r.xboxsx.name, r.ps5.name],
        w = e => b().includes(e),
        y = e => {
          const n = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return n.has(e) ? n.get(e) : e
        }
    },
    1799: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        Gif: () => w,
        HashSelector: () => b
      });
      const a = "rockstargames-modules-core-gif-viewera19bcd2b98d91e60c43b9de146e20f4e";
      var t = i(8096);
      const o = e => {
        let {
          color: n
        } = e;
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-gif-viewere83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": n
          },
          children: [(0, t.jsx)("div", {
            className: a
          }), (0, t.jsx)("div", {
            className: a
          }), (0, t.jsx)("div", {
            className: a
          })]
        })
      };
      var l = i(8648);
      var r = i(2229),
        s = i(5966);
      const d = (0, s.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: c
        } = d,
        u = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, t.jsx)("hr", {})
          }
        };
      u("Background Image Gradient"),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), u("Background Image Gradient"), i(5138), i(1207);
      const f = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, t.jsx)("hr", {})
        }
      };
      var m = i(1969);
      const p = e => {
          let {
            style: n,
            width: i,
            height: a,
            resizable: o,
            field: l,
            input: s,
            meta: d,
            name: c,
            label: u,
            description: f,
            error: p,
            children: h
          } = e;
          const v = () => o ? (0, t.jsx)(m.c, {
            defaultSize: {
              width: i || "100%",
              height: a || "500px"
            },
            style: {
              paddingBottom: "10px"
            },
            children: (0, r.cloneElement)(h, ...s)
          }) : h;
          return (0, t.jsxs)("div", {
            className: "rockstargames-modules-core-gif-viewere8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
            style: n,
            children: [(0, t.jsxs)("label", {
              className: "rockstargames-modules-core-gif-viewerceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
              htmlFor: c ?? l?.name,
              children: [u ?? l?.label, (0, t.jsx)("span", {
                className: "rockstargames-modules-core-gif-viewera0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
                children: f ?? l?.description
              })]
            }), (0, t.jsx)(v, {}), (p || d?.error) && (0, t.jsx)("div", {
              className: "FieldError_sc_custom",
              children: p ?? d?.error
            })]
          })
        },
        h = (f("Background Image Gradient"), function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          e.toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), f("Background Image Gradient"), () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => v({
            hero: !1
          })
        }));
      i(1398);
      const v = function() {
        return {
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          key: `key_${(0,l.A)()}`
        }
      };
      var g = i(4235);
      const k = e => {
          let {
            field: n,
            input: i,
            meta: a
          } = e;
          const {
            data: l
          } = (0, s.useQuery)(g.GifsList);
          return (0, t.jsx)(p, {
            name: i.name || n.name || n.label,
            label: n.label,
            description: n.description,
            meta: a,
            children: l?.gifsList?.length ? (0, t.jsxs)("select", {
              ...i,
              children: [(0, t.jsx)("option", {
                value: "",
                children: "-- Select a gif --"
              }), l.gifsList.map((e => (0, t.jsxs)("option", {
                value: e.hash,
                children: ["(", e.hash, ")", " ", e.name]
              }, e.hash)))]
            }) : (0, t.jsx)(o, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        b = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: e?.label ?? "Gif hash",
            name: e?.group ?? "hash",
            description: e?.description ?? "",
            component: e => {
              let {
                field: n,
                input: i,
                meta: a
              } = e;
              return (0, t.jsx)(k, {
                field: n,
                input: i,
                meta: a
              })
            }
          }
        },
        w = function() {
          return {
            name: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              group: "hash"
            }).group,
            label: "Gif",
            fields: [{
              label: "Name",
              name: "name",
              component: "text",
              description: "Block label for internal use only"
            }, b({
              group: "hash.mobile",
              label: "Mobile Source",
              description: "(If responsive, only Mobile Source is needed)"
            }), b({
              group: "hash.desktop",
              label: "Desktop Source"
            }), (e = {
              name: "caption",
              label: "Caption",
              component: "html"
            }, {
              ...e,
              name: `_memoq.${e.name}`
            }), {
              name: "loop",
              label: "Is Looping?",
              description: "Should this gif repeat endlessly?",
              component: "toggle"
            }, h()],
            defaultItem: () => v({
              loop: !1
            }),
            itemProps: e => function(e) {
              return {
                ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                key: e.key
              }
            }(e, {
              label: e?.name ? `${e.name} [Gif]` : "New [Gif]"
            })
          };
          var e
        }
    },
    1398: e => {
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
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, n)
        }))
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
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.TagList = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var o = a[n] || new Set,
          l = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            l.has(e) || (l.add(e), (a[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return l.forEach((function(n) {
          var a = t(e, n);
          a && i.definitions.push(a)
        })), i
      }(n, "TagList")
    },
    4235: e => {
      var n = {
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

      function i(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && n.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, n)
        }))
      }
      n.loc.source = {
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
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
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            l.has(e) || (l.add(e), (a[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return l.forEach((function(n) {
          var a = t(e, n);
          a && i.definitions.push(a)
        })), i
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.GifsList = o(n, "GifsList"), e.exports.GifInfo = o(n, "GifInfo")
    }
  }
]);