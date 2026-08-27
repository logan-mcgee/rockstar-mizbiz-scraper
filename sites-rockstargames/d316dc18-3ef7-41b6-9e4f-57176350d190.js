try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d316dc18-3ef7-41b6-9e4f-57176350d190", e._sentryDebugIdIdentifier = "sentry-dbid-d316dc18-3ef7-41b6-9e4f-57176350d190")
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
  [6560], {
    737(e, t, a) {
      "use strict";
      a.d(t, {
        f: () => r
      });
      var r = {
        mobile: "(min-width: 0px) and (max-width: 767.98px)",
        mobileSmall: "(min-width: 0px) and (max-width: 499.98px)",
        mobileMedium: "(min-width: 500px) and (max-width: 767.98px)",
        tabletSmall: "(min-width: 768px) and (max-width: 1023.98px)",
        tabletMedium: "(min-width: 1024px) and (max-width: 1279.98px)",
        tabletSmallAndMedium: "(min-width: 768px) and (max-width: 1279.98px)",
        tabletLarge: "(min-width: 1280px) and (max-width: 1439.98px)",
        tabletMediumAndLarge: "(min-width: 1024px) and (max-width: 1439.98px)",
        tablet: "(min-width: 768px) and (max-width: 1439.98px)",
        desktop: "(min-width: 1440px) and (max-width: 2559.98px)",
        desktopSmall: "(min-width: 1440px) and (max-width: 1919.98px)",
        desktopMedium: "(min-width: 1920px) and (max-width: 2559.98px)",
        tabletAndDesktop: "(min-width: 768px) and (max-width: 2559.98px)",
        mobileMediumAndLarger: "(min-width: 500px)",
        tabletSmallAndLarger: "(min-width: 768px)",
        tabletMediumAndLarger: "(min-width: 1024px)",
        tabletMediumAndSmaller: "(max-width: 1023.98px)",
        tabletLargeAndLarger: "(min-width: 1280px)",
        tabletLargeAndSmaller: "(max-width: 1279.98px)",
        desktopSmallAndLarger: "(min-width: 1440px)",
        desktopMediumAndLarger: "(min-width: 1920px)",
        desktopLargeAndLarger: "(min-width: 2560px)",
        portrait: "(orientation: portrait)",
        landscape: "(orientation: landscape)",
        mobileLandscape: "(min-width: 500px) and (max-width: 767px) and (orientation: landscape)"
      }
    },
    69429(e) {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MetaUrlInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
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
                value: "metaUrlInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "url"
                  }
                }
              }, {
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
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
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
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 190
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          a(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          a(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          a(e, t)
        })
      }
      t.loc.source = {
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        tina {\n            payload\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function o(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      }), e.exports = t, e.exports.MetaUrlInfo = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [o(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var n = r[t] || new Set,
          s = new Set,
          i = new Set;
        for (n.forEach(function(e) {
            i.add(e)
          }); i.size > 0;) {
          var l = i;
          i = new Set, l.forEach(function(e) {
            s.has(e) || (s.add(e), (r[e] || new Set).forEach(function(e) {
              i.add(e)
            }))
          })
        }
        return s.forEach(function(t) {
          var r = o(e, t);
          r && a.definitions.push(r)
        }), a
      }(t, "MetaUrlInfo")
    },
    66503() {},
    1358(e, t, a) {
      "use strict";
      a.d(t, {
        N: () => l
      });
      var r = a(39793),
        o = a(93082),
        n = a(29443),
        s = a(99225),
        i = a(42909);
      const l = (0, o.forwardRef)(function({
        href: e,
        testId: t,
        ...a
      }, o) {
        const l = (0, i.linkWithLocale)(e || ""),
          c = (0, n.v6)(a, {
            "data-testid": t
          });
        return l.isExternal ? (0, r.jsx)("a", {
          href: l.link,
          target: "_blank",
          rel: "noreferrer",
          ...c,
          ref: o
        }) : (0, r.jsx)(s.Link, {
          to: l.link,
          target: "_self",
          ...c,
          ref: o
        })
      })
    },
    51135(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => d
      });
      var r = a(39793),
        o = a(93082),
        n = a(13331),
        s = a(32552),
        i = a(81270);
      const l = ({
          button: e,
          closeDialog: t,
          style: a = "primary"
        }) => {
          const {
            buttonIcon: o,
            buttonText: n,
            extraClasses: l,
            isDisabled: c,
            isLink: d,
            link: _,
            onClick: u,
            testId: m
          } = e;
          return d ? n && (0, r.jsx)(s.Button, {
            asChild: !0,
            appearance: a,
            size: "LG",
            children: (0, r.jsx)("a", {
              href: _,
              ...m && {
                "data-testid": m
              },
              children: n
            })
          }) : (0, r.jsx)(s.Button, {
            autoFocus: !0,
            iconRight: o,
            className: (0, i.default)(l),
            isDisabled: c,
            onPress: e => (e => {
              u && u(), t && t(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: a,
            size: "LG",
            "aria-label": n,
            ...m && {
              "data-testid": m
            },
            children: n
          })
        },
        c = {
          actions: "rockstargames-sites-rockstargamesd35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-sites-rockstargamesb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-sites-rockstargamesefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-sites-rockstargamesd2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-sites-rockstargamesf654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-sites-rockstargamese30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-rockstargamesdab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-sites-rockstargamesbc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-sites-rockstargamesb120386c4c2485c587f87173721d63be",
          message: "rockstargames-sites-rockstargamesf7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-sites-rockstargamesb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-rockstargamesa6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-sites-rockstargamesb2b3117a07a11b3ec5897e4718e24373"
        },
        d = ({
          icon: e,
          title: t,
          secondaryText: a,
          buttons: s,
          showDialog: i,
          onClose: d = () => {},
          closeOnOutsideClick: _ = !0,
          extraClasses: u
        }) => {
          const m = (0, o.useRef)(null),
            {
              setBodyIsLocked: b
            } = (0, n.useBodyScrollable)("AlertDialog");
          (0, o.useEffect)(() => {
            i && m?.current && (m.current?.showModal?.(), b(!0))
          }, [i]);
          const g = () => {
            b(!1), d(), m.current?.close?.()
          };
          if (i) return (0, r.jsxs)("dialog", {
            ref: m,
            className: c.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && _ && (b(!1), d(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, r.jsx)("i", {
              className: [c.icon, c[e]].join(" ")
            }), (0, r.jsxs)("div", {
              className: [c.content, u?.content].join(" "),
              children: [(0, r.jsx)("h3", {
                className: [c.heading, u?.heading].join(" "),
                children: t
              }), a && (0, r.jsx)("div", {
                className: [c.message, u?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            }), s && (0, r.jsx)("div", {
              className: c.actions,
              children: s.slice(0, 2).map((e, t) => (0, r.jsx)(l, {
                style: e?.style ?? (0 === t ? "primary" : "secondary"),
                button: e,
                closeDialog: g
              }, e.buttonText))
            })]
          })
        }
    },
    26161(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => l
      });
      var r = a(39793),
        o = a(57821),
        n = a.n(o);
      const s = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        i = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        l = ({
          type: e = "spinning"
        }) => {
          let t;
          return t = "threeDots" === e ? i : s, (0, r.jsx)(n(), {
            loop: !0,
            autoplay: !0,
            animationData: t,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    },
    37996(e, t, a) {
      "use strict";
      a.d(t, {
        YT: () => s,
        Ay: () => i
      });
      var r = a(39793),
        o = a(21297);
      var n = a(81270);
      var s = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const i = ({
        tagSize: e,
        platform: t,
        className: a = ""
      }) => {
        const {
          src: s,
          alt: i
        } = ((e, t) => {
          const a = "small" === t;
          switch (e) {
            case "pc":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case "ps":
            case "np":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case "xbl":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(t, e);
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("img", {
            className: (0, n.default)("rockstargames-sites-rockstargamesb0ff0045ed0326a46ca1e0867d2050c1", a),
            "data-testid": "platform-tag",
            "data-platform": t,
            "data-tag-size": e,
            src: s,
            alt: "",
            "aria-hidden": !0
          }), (0, r.jsx)(o.s6, {
            children: i
          })]
        })
      }
    },
    46991(e, t, a) {
      "use strict";
      a.d(t, {
        L: () => l
      });
      var r = a(39793),
        o = a(93082),
        n = a(36421);
      var s = a(81270);
      const i = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        l = (0, o.forwardRef)(function({
          rank: e,
          size: t = "large",
          className: a,
          alt: o,
          testId: l,
          ...c
        }, d) {
          const _ = i(e),
            u = (0, n.v6)(c, {
              className: (0, s.default)("rockstargames-sites-rockstargamesf54750ef62f8600000c94f0caba85986", a),
              "data-testid": l
            });
          return (0, r.jsxs)("div", {
            "data-size": t,
            ref: d,
            ...u,
            children: [(0, r.jsx)("svg", {
              role: "svg",
              "aria-label": o,
              className: "rockstargames-sites-rockstargamesa3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": i(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: _
              })
            }), (0, r.jsx)("span", {
              className: "rockstargames-sites-rockstargamesd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        })
    },
    17607(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        RSG_CONTENT_RATING_FRAGMENT: () => o,
        RSG_CTA_FRAGMENT: () => n,
        RSG_GAME_FRAGMENT: () => s,
        RSG_ICON_FRAGMENT: () => i,
        RSG_IMAGE_FILE_FRAGMENT: () => l,
        RSG_IMAGE_FRAGMENT: () => c,
        RSG_RICH_TEXT_FRAGMENT: () => D,
        RSG_VIDEO_FILE_FRAGMENT: () => L,
        RSG_VIDEO_FRAGMENT: () => G,
        SYS_FRAGMENT: () => d,
        WWW_BANNER_FRAGMENT: () => _,
        WWW_DECK_FRAGMENT: () => u,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => m,
        WWW_DIVIDER_FRAGMENT: () => b,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => g,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => p,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => f,
        WWW_GRID_FRAGMENT: () => h,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => y,
        WWW_GRID_WRAPPER_FRAGMENT: () => k,
        WWW_IMAGE_BLOCK_FRAGMENT: () => v,
        WWW_IMAGE_CARD_FRAGMENT: () => x,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => j,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => w,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => C,
        WWW_LINKOUT_IMAGE_FRAGMENT: () => R,
        WWW_MASONRY_GRID_FRAGMENT: () => S,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => N,
        WWW_PROMO_MODULE_FRAGMENT: () => I,
        WWW_REACT_COMPONENT_FRAGMENT: () => A,
        WWW_SECTION_WRAPPER_FRAGMENT: () => E,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => T,
        WWW_TEXT_BLOCK_FRAGMENT: () => z,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => P,
        WWW_THEME_PROVIDER_FRAGMENT: () => F,
        WWW_VIDEO_PLAYER_FRAGMENT: () => W,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => M,
        wwwBottomSheetQuery: () => B,
        wwwPageQuery: () => q
      });
      var r = a(94935);
      const o = r.gql`
fragment RsgContentRatingFragment on RsgContentRating {
  __typename
  sys {
    ...SysFragment
  }
  titleSlug
}
`,
        n = r.gql`
fragment RsgCtaFragment on RsgCta {
  sys {
    ...SysFragment
  }
  text
  analyticsData
  openInNewTab
  link {
    url
  }
  appearance
  iconLeft {
    ...RsgIconFragment
  }
  iconRight {
    ...RsgIconFragment
  }
  backgroundColor
  openInNewTab
}
`,
        s = r.gql`
fragment RsgGameFragment on RsgGame {
  title
  slug
  wwwPageLink
  boxArt {
    imageFilesCollection {
      __typename
      items {
        ...RsgImageFileFragment
      }
    }
  }
}
`,
        i = r.gql`
fragment RsgIconFragment on RsgIcon {
  icon
  iconLabel
}
`,
        l = r.gql`
fragment RsgImageFileFragment on RsgImageFile {
  __typename
  sys {
    ...SysFragment
  }
  context
  altText
  source {
    __typename
    url
    width
    height
  }
}
`,
        c = r.gql`
fragment RsgImageFragment on RsgImage {
  __typename
  sys {
    ...SysFragment
  }
  altText
  imageFilesCollection(
    limit: 8
  ) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgImageFileFragment
    }
  }
}
`,
        d = r.gql`
fragment SysFragment on Sys {
  __typename
  id
}
`,
        _ = r.gql`
fragment WwwBannerFragment on WwwBanner {
  __typename
  sys {
    ...SysFragment
  }
  text
  backgroundColor
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  link {
    url
  }
  altText
}
`,
        u = r.gql`
fragment WwwDeckFragment on WwwDeck {
  sys {
    ...SysFragment
  }
  title
  variant
  navigationButtonAppearance
  
  cardsCollection(limit: 4) {
    items {
      __typename
      ...WwwImageCardFragment
      ...WwwImageBlockFragment
    }
  }
}
`,
        m = r.gql`
fragment WwwDecorativeVideoFragment on WwwDecorativeVideo {
    __typename
    sys {
      ...SysFragment
    }
    playbackBehavior
    scrimColor
    landscapeViewportBehavior
    overlayElements {
      ...WwwGridWrapperFragment
    }
    video {
      ...RsgVideoFragment
    }
    squareVideo {
      ...RsgVideoFragment
    }
}
`,
        b = r.gql`
fragment WwwDividerFragment on WwwDivider {
    __typename
    sys {
      ...SysFragment
    }
    thickness
    style
}
`,
        g = r.gql`
fragment WwwEditorialGridModuleFragment on WwwEditorialGridModule {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 7) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      tinaId
    }
  }
}
`,
        p = r.gql`
fragment WwwFeaturedContentCarouselFragment on WwwFeaturedContentCarousel {
  __typename
  sys {
    ...SysFragment
  }
  autoplay
  size
  slidesCollection(limit: 5) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      analyticsData
      title
      eyebrow
      topGradientColor
      bottomGradientColor
      ctasCollection(limit: 3) {
        items {
          ...RsgCtaFragment
        }
      }
      logo {
        ...RsgImageFileFragment
      }
      background {
        ...RsgImageFragment
        ...RsgVideoFragment
      }
      navColor
    }
  }
}
`,
        f = r.gql`
fragment WwwFeaturedGameSectionFragment on WwwFeaturedGameSection {
  __typename
  sys {
    ...SysFragment
  }
  description
  ctasCollection(limit: 4) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgCtaFragment
    }
  }
  backgroundImage {
    ...RsgImageFragment
  }
  backgroundVideo {
    ...RsgVideoFragment
  }
  squareBackgroundVideo {
    ...RsgVideoFragment
  }
  logo {
    ...RsgImageFileFragment
  }
  game {
    sys {
      ...SysFragment
    }
    platformsCollection(limit: 10) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        name
        logo {
          ...RsgImageFragment
        }
      }
    }
    title
    logo {
      ...RsgImageFragment
    }
  }

  childModulesCollection(limit: 2) {
    items {
      __typename
      ... on WwwPromoModule {
        ...WwwPromoModuleFragment
      }
      ... on WwwDeck {
        sys {
          ...SysFragment
        }
        title
        cardsCollection(limit: 4) {
          items {
            __typename
            ... on WwwImageCard {
              ...WwwImageCardFragment
            }
          }
        }
      }
    }
  }
}
`,
        h = r.gql`
fragment WwwGridFragment on WwwGrid {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 10) {
    items {
      ...WwwTextBlockFragment
      ...WwwImageCardFragment
      ...WwwImageBlockFragment
      ...WwwImageCarouselFragment
      ...WwwLinkOutImageFragment
      ...RsgImageFragment
      ...RsgImageFileFragment
    }
  }
  layout {
    breakpointsCollection(limit: 8) {
      items {
        ...WwwGridLayoutBreakpointFragment
      }
    }
  }
}
`,
        y = r.gql`
fragment WwwGridLayoutBreakpointFragment on WwwGridLayoutBreakpoint {
  __typename
  sys {
    ...SysFragment
  }
  mediaQuery
  columns
  behavior
  alignment
}
`,
        k = r.gql`
fragment WwwGridWrapperFragment on WwwGridWrapper {
  __typename
  sys {
    ...SysFragment
  }
  title
  theme {
    ...WwwThemeProviderFragment
  }
  gap
  contentCollection(limit: 6) {
    items {
      ...WwwGridFragment
    }
  }
}
`,
        v = r.gql`
fragment WwwImageBlockFragment on WwwImageBlock {
  __typename
  sys {
    ...SysFragment
  }
  description
  descriptionSize
  image {
    ...RsgImageFileFragment
    ...WwwLightboxImageFragment
  }
  textAlignment
  title
  titleSize
}
`,
        x = r.gql`
fragment WwwImageCardFragment on WwwImageCard {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  badgeText
  backgroundImage {
    ...RsgImageFragment
  }
  cta {
    ...RsgCtaFragment
  }
  link {
    url
  }
  logo {
    ...RsgImageFileFragment
  }
  logoSize
  text
  textColor
  textAlignment
  gradientColor
  ariaLabel
}
`,
        j = r.gql`
fragment WwwImageCarouselFragment on WwwImageCarousel {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  contentCollection(limit: 5) {
    total
    skip
    limit
    items {
      ...WwwImageBlockFragment
    }
  }
}
`,
        w = r.gql`
fragment WwwImagesMarqueeModuleFragment on WwwImagesMarqueeModule {
  __typename
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
  marqueeingElementsCollection(limit: 2) {
    items {
      ... on RsgGroup {
        referencesCollection(limit: 20) {
          items {
            ... on RsgGame {
              boxArt {
                ...RsgImageFragment
              }
            }
          }
        }
      }
    }
  }
}
`,
        C = r.gql`
fragment WwwLightboxImageFragment on WwwLightboxImage {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  caption
  downloadButton
  image {
    ...RsgImageFileFragment
  }
  thumbnailAspectRatio
  thumbnailObjectPosition
  zoomControls
}
`,
        R = r.gql`
fragment WwwLinkOutImageFragment on WwwLinkOutImage {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  link {
    url
  }
  image {
    ...RsgImageFragment
  }
}
`,
        S = r.gql`
fragment WwwMasonryGridFragment on WwwMasonryGrid {
  __typename
  sys {
    ...SysFragment
  }
  variant
  cardsCollection {
    items {
      __typename
      sys {
        ...SysFragment
      }
      analyticsData
      backgroundImage {
        ...RsgImageFragment
      }
      logo {
        ...RsgImageFileFragment
      }
      text
      badgeText
      link {
        url
      }
      gradientColor
      textAlignment
      textColor
      cta {
        ...RsgCtaFragment
      }
    }
  }
}
`,
        N = r.gql`
fragment WwwNewsletterSubscribeFragment on WwwNewsletterSubscribe {
  __typename
  sys {
    ...SysFragment
  }
  image {
    ...RsgImageFileFragment
  }
  textContent
  cta {
    ...RsgCtaFragment
  }
}
`,
        I = r.gql`
fragment WwwPromoModuleFragment on WwwPromoModule {
  __typename
  sys {
    ...SysFragment
  }
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  foregroundImageSize
  badge
  headline
  description
  cta {
    ...RsgCtaFragment
  }
  legalText
  imagePlacement
  backgroundColor
  colorMode
  enableGradient
  contentAlignment
}
`,
        A = r.gql`
fragment WwwReactComponentFragment on WwwReactComponent {
  __typename
  sys {
    ...SysFragment
  }
  componentName
  componentProps
}
`,
        M = r.gql`
fragment WwwWebOfferClaimFragment on WwwWebOfferClaim {
  __typename
  sys {
    ...SysFragment
  }
  tinaPageUrl
}
`,
        E = r.gql`
fragment WwwSectionWrapperFragment on WwwSectionWrapper {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  title
  
  theme {
    ...WwwThemeProviderFragment
  }
  backgroundCss
  backgroundImage {
    ...RsgImageFragment
  }
  mobileBackgroundImage {
    ...RsgImageFileFragment
  }
  desktopBackgroundImage {
    ...RsgImageFileFragment
  }
  bottomPadding
  topPadding
  cta {
    ...RsgCtaFragment
  }
  contentCollection(limit: 5) {
    items {
      ...RsgContentRatingFragment
      ...RsgImageFragment
      ...WwwBannerFragment
      ...WwwEditorialGridModuleFragment
      ...WwwLinkOutImageFragment
      ...WwwMasonryGridFragment
      ...WwwNewsletterSubscribeFragment
      ...WwwDecorativeVideoFragment
      ...WwwDividerFragment
      ...WwwGridWrapperFragment
      ...WwwDeckFragment
      
      ...WwwSupportCalloutModuleFragment
      ...WwwWebOfferClaimFragment
    }
  }
}
`,
        T = r.gql`
fragment WwwSupportCalloutModuleFragment on WwwSupportCalloutModule {
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
}
`,
        z = r.gql`
fragment WwwTextBlockFragment on WwwTextBlock {
  __typename
  sys {
    ...SysFragment
  }
  badge
  eyebrow
  header
  body
  ctasCollection(limit: 4) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgCtaFragment
    }
  }
  footnote
  headerSize
  bodySize
  alignment
  headerTextWrap
  bodyTextWrap
}
`,
        P = r.gql`
fragment WwwTextWithBadgeFragment on WwwTextWithBadge {
  __typename
  sys {
    ...SysFragment
  }
  content {
    ...RsgRichTextFragment
  }
  variant
  image {
    ...RsgImageFileFragment
  }
}
`,
        F = r.gql`
fragment WwwThemeProviderFragment on WwwThemeProvider {
  __typename
  sys {
    ...SysFragment
  }
  colorMode
  headerTextColor
  primaryAccentColor
  secondaryAccentColor
}
`,
        D = r.gql`
fragment RsgRichTextFragment on RsgRichText {
  __typename
  sys {
    ...SysFragment
  }
  content {
    json
  }
}
`,
        L = r.gql`
fragment RsgVideoFileFragment on RsgVideoFile {
  __typename
  sys {
    ...SysFragment
  }
  codec
  context
  height
  posterImage {
    ...RsgImageFileFragment
  }
  upload {
    url
    title
  }
  url
  width
}
`,
        G = r.gql`
fragment RsgVideoFragment on RsgVideo {
  __typename
  sys {
    ...SysFragment
  }
  title
  link {
    url
  }
  type
  upload {
    url
    title
  }
  analyticsData
  videoFilesCollection(limit: 3) {
    items {
      ...RsgVideoFileFragment
    }
  }
}
`,
        W = r.gql`
fragment WwwVideoPlayerFragment on WwwVideoPlayer {
  __typename
  sys {
    ...SysFragment
  }
  videos {
    referencesCollection(limit: 20) {
      items {
        ...RsgVideoFragment
      }
    }
  }
}
`,
        q = r.gql`
  query WwwPage($locale: String!, $slug: String!) {
    wwwPageCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 20) {
          total
          skip
          limit
          items {
            ...WwwDividerFragment
            ...WwwFeaturedContentCarouselFragment
            ...WwwFeaturedGameSectionFragment
             
            ...WwwImagesMarqueeModuleFragment
            ...WwwPromoModuleFragment
            ...WwwSectionWrapperFragment
            ...WwwTextWithBadgeFragment
          }
        }
      }
    }
  }
  
  ${o}
  ${n}
  ${i}
  ${l}
  ${c}
  ${D}
  ${L}
  ${G}
  ${d}
  ${_}
  ${u}
  ${m}
  ${b}
  ${g}
  ${p}
  ${f}
  ${h}
  ${y}
  ${k}
  
  ${v}
  ${x}
  ${j}
  ${w}
  ${C}
  ${R}
  ${S}
  ${N}
  ${I}
  
  ${E}
  ${T}
  ${z}
  ${P}
  ${F}
  ${M}
`,
        B = r.gql`
  query WwwBottomSheet($locale: String!, $slug: String!) {
    wwwBottomSheetCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 10) {
          total
          skip
          limit
          items {
            ...RsgImageFragment
            ...RsgRichTextFragment
            ...WwwBannerFragment
            ...WwwDeckFragment
            ...WwwDecorativeVideoFragment
            ...WwwDividerFragment
            ...WwwGridWrapperFragment
            ...WwwPromoModuleFragment
            
            ...WwwSectionWrapperFragment
            ...WwwTextBlockFragment
            ...WwwTextWithBadgeFragment
            ...WwwThemeProviderFragment
            ...WwwVideoPlayerFragment
          }
        }
      }
    }
  }
  
  ${o}
  ${n}
  ${i}
  ${l}
  ${c}
  ${D}
  ${L}
  ${G}
  ${d}
  ${_}
  ${u}
  ${m}
  ${b}
  ${g}
  ${h}
  ${y}
  ${k}
  ${v}
  ${x}
  ${j}
  ${C}
  ${R}
  ${S}
  ${N}
  ${I}
  
  ${E}
  ${T}
  ${z}
  ${P}
  ${F}
  ${W}
  ${M}
`
    },
    25944(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        default: () => Qs
      });
      var r = a(39793),
        o = a(93082),
        n = a(820),
        s = a(13331),
        i = a(42909),
        l = a(72701),
        c = a(20005),
        d = a(17607),
        _ = a(99225);
      const u = (0, o.createContext)({
          slug: "",
          open: !1,
          onOpenChange: () => {}
        }),
        m = ({
          children: e
        }) => {
          const [t, a] = (0, _.useSearchParams)(), [n, s] = (0, o.useState)(""), [i, l] = (0, o.useState)(!1), c = () => {
            const e = !i;
            l(e), e || (s(""), a(e => (e.delete("view"), e), {
              replace: !0
            }))
          };
          (0, o.useEffect)(() => {
            const e = t.get("view");
            e ? (s(e), l(!0)) : (s(""), l(!1))
          }, [t]);
          const d = (0, o.useMemo)(() => ({
            open: i,
            onOpenChange: c,
            slug: n
          }), [i, n]);
          return (0, r.jsx)(u.Provider, {
            value: d,
            children: e
          })
        };
      var b = a(55267);
      const g = (0, i.defineMessages)({
        bottom_sheet_modal_close_icon: {
          id: "bottom_sheet_modal_close_icon",
          description: "Label for X icon to close modal in Bottom Sheet",
          defaultMessage: "Close"
        }
      });
      var p = a(82199),
        f = a(42285),
        h = a(84390);
      const y = (0, o.createContext)({
          colorMode: void 0,
          headerTextColor: void 0,
          primaryAccentColor: void 0,
          secondaryAccentColor: void 0
        }),
        k = ({
          theme: e,
          children: t
        }) => e ? (0, r.jsx)(y.Provider, {
          value: {
            ...e
          },
          children: t
        }) : t,
        v = (0, i.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var x = a(1358),
        j = a(60172),
        w = a(29443),
        C = a(737),
        R = a(43156),
        S = (0, R.c)({
          defaultClassName: "_1ksuttk0",
          variantClassNames: {
            showOn: {
              mobile: "_1ksuttk1",
              mobileSmall: "_1ksuttk2",
              mobileMedium: "_1ksuttk3",
              tabletSmall: "_1ksuttk4",
              tabletMedium: "_1ksuttk5",
              tabletSmallAndMedium: "_1ksuttk6",
              tabletLarge: "_1ksuttk7",
              tabletMediumAndLarge: "_1ksuttk8",
              tablet: "_1ksuttk9",
              desktop: "_1ksuttka",
              desktopSmall: "_1ksuttkb",
              desktopMedium: "_1ksuttkc",
              tabletAndDesktop: "_1ksuttkd",
              mobileMediumAndLarger: "_1ksuttke",
              tabletSmallAndLarger: "_1ksuttkf",
              tabletMediumAndLarger: "_1ksuttkg",
              tabletMediumAndSmaller: "_1ksuttkh",
              tabletLargeAndLarger: "_1ksuttki",
              tabletLargeAndSmaller: "_1ksuttkj",
              desktopSmallAndLarger: "_1ksuttkk",
              desktopMediumAndLarger: "_1ksuttkl",
              desktopLargeAndLarger: "_1ksuttkm",
              portrait: "_1ksuttkn",
              landscape: "_1ksuttko",
              mobileLandscape: "_1ksuttkp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const N = ({
        showOn: e,
        forceMount: t = !1,
        ...a
      }) => {
        const n = (0, w.v6)(a, {
            className: S({
              showOn: e
            })
          }),
          s = (0, o.useMemo)(() => t ? void 0 : window?.matchMedia?.(C.f[e]), [e, window]);
        return (s?.matches ?? !0) && (0, r.jsx)(b.DX, {
          ...n
        })
      };
      a(66503);
      var I = "var(--uf2gjf2)",
        A = "var(--uf2gjf1)",
        M = "uf2gjf6",
        E = "var(--uf2gjf0)";
      const T = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          topPaddingMultiplier: o,
          bottomPaddingMultiplier: n,
          backgroundCss: s,
          backgroundImage: i,
          ...l
        }, c) {
          const d = t ? b.DX : "section",
            _ = (0, w.v6)({
              "data-testid": a,
              className: "uf2gjf3",
              style: (0, j.DI)({
                [E]: o ?? "0.5",
                [A]: n ?? "0.5",
                [I]: s,
                backgroundImage: i ? `url(${i})` : ""
              })
            }, l);
          return (0, r.jsx)(d, {
            ref: c,
            ..._,
            children: e
          })
        }),
        z = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          if (!e) return;
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": a,
              className: "uf2gjf4 _1betujy5"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        P = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : c.Heading,
            i = (0, w.v6)({
              "data-testid": a,
              className: "uf2gjf5 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        F = (0, o.forwardRef)(function({
          testId: e,
          children: t,
          label: a,
          url: o,
          iconRight: n = "ArrowRight",
          isExternal: s = !1,
          ...i
        }, l) {
          const d = (0, w.v6)({
            "data-testid": e
          }, i);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(N, {
              forceMount: !0,
              showOn: "mobile",
              children: (0, r.jsx)(c.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: n,
                className: M,
                label: a,
                ...d,
                ref: l,
                asChild: !0,
                children: (0, r.jsx)(x.N, {
                  href: o,
                  target: s ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, r.jsx)(N, {
              forceMount: !0,
              showOn: "tabletSmall",
              children: (0, r.jsx)(c.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: n,
                className: M,
                label: a,
                ...d,
                ref: l,
                asChild: !0,
                children: (0, r.jsx)(x.N, {
                  href: o,
                  target: s ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, r.jsx)(N, {
              forceMount: !0,
              showOn: "tabletMediumAndLarger",
              children: (0, r.jsx)(c.Button, {
                size: "XL",
                appearance: "ghost",
                iconRight: n,
                className: "uf2gjf7",
                "aria-label": a,
                ...d,
                ref: l,
                "data-testid": `${e}:desktopButton`,
                asChild: !0,
                children: (0, r.jsx)(x.N, {
                  href: o,
                  target: s ? "_blank" : "_self",
                  role: "link",
                  children: t
                })
              })
            })]
          })
        }),
        D = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": a,
              className: "uf2gjf8"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        L = {
          none: 0,
          default: .5,
          double: 1
        },
        G = (0, o.createContext)({
          analyticsData: void 0
        }),
        W = "WwwSectionWrapper",
        q = () => {
          const {
            analyticsData: e
          } = (0, o.useContext)(G), {
            track: t
          } = (0, p.useGtmTrack)(), a = e?.element_placement;
          return {
            trackEvent: (e, r) => {
              const o = r?.analyticsData || {};
              return t({
                ...r?.link?.url && {
                  link_url: r?.link?.url
                },
                ...e,
                element_placement: a,
                ...o
              })
            },
            trackRichTextHyperlink: e => t({
              event: "site_link_click",
              link_url: e.data.uri,
              text: e.content[0].value,
              element_placement: a
            }),
            useTrackPageSectionImpression: e => {
              const r = (0, o.useCallback)(r => {
                  r && t({
                    event: "page_section_impression",
                    element_placement: a,
                    ...e
                  })
                }, [t]),
                {
                  ref: n,
                  inView: s
                } = (0, f.useInView)({
                  threshold: .6,
                  triggerOnce: !0,
                  onChange: r
                });
              return {
                ref: n,
                inView: s
              }
            }
          }
        };
      var B = a(75921);
      const V = ({
          testId: e,
          ...t
        }) => {
          const a = (0, w.v6)(t, {
            "data-testid": e,
            autoFocus: !0
          });
          return (0, r.jsx)(B.bL, {
            ...a
          })
        },
        O = ({
          testId: e,
          ...t
        }) => {
          const a = (0, w.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(B.ZL, {
            ...a
          })
        },
        $ = (0, o.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const o = (0, w.v6)(t, {
            "data-testid": e,
            className: "_1ykqld07"
          });
          return (0, r.jsx)(B.hJ, {
            ref: a,
            ...o
          })
        }),
        X = (0, o.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, o) {
          const n = (0, w.v6)(a, {
            "data-testid": e,
            className: "_1ykqld08"
          });
          return (0, r.jsx)(B.UC, {
            ref: o,
            ...n,
            children: t
          })
        }),
        U = (0, o.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, o) {
          const n = (0, w.v6)(a, {
            "data-testid": e,
            className: "_1ykqld09"
          });
          return (0, r.jsx)("div", {
            ref: o,
            ...n,
            children: t
          })
        }),
        H = (0, o.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const o = (0, w.v6)(t, {
            asChild: !0,
            className: "_1ykqld0a",
            "data-testid": e
          });
          return (0, r.jsx)(B.bm, {
            ref: a,
            ...o
          })
        }),
        K = (0, o.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const o = (0, w.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(B.hE, {
            ref: a,
            ...o
          })
        }),
        Y = (0, o.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const o = (0, w.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(B.VY, {
            ref: a,
            ...o
          })
        }),
        Z = () => {
          const {
            trackEvent: e
          } = q(), {
            formatMessage: t
          } = (0, i.useIntl)(), [a, n] = (0, o.useState)(!1), {
            slug: _,
            open: m,
            onOpenChange: p
          } = (() => {
            const e = (0, o.useContext)(u);
            if (void 0 === e) throw new Error("useBottomSheet must be used within a Bottom Sheet Provider");
            return {
              open: e.open,
              slug: e.slug,
              onOpenChange: e.onOpenChange
            }
          })(), f = (0, s.usePrevious)(_), [h, y] = (0, o.useState)(null), {
            loading: k,
            error: v,
            data: x
          } = (0, l.useContentfulQuery)({
            query: d.wwwBottomSheetQuery,
            variables: {
              slug: _
            },
            skip: !_
          });
          if ((0, o.useEffect)(() => {
              a !== m && (n(m), y(document.activeElement), m ? e({
                event: "modal_open",
                card_id: _,
                card_name: _,
                text: _
              }) : (e({
                event: "modal_close",
                card_id: f,
                card_name: f,
                text: f
              }), h?.focus(), y(null)))
            }, [m, a]), !_) return;
          let j = null;
          return !x || k || v || (j = x?.wwwBottomSheetCollection?.items?.[0]), (0, r.jsx)(V, {
            open: m,
            onOpenChange: p,
            children: (0, r.jsxs)(O, {
              children: [(0, r.jsx)($, {}), (0, r.jsxs)(X, {
                children: [(0, r.jsxs)(b.s6, {
                  children: [(0, r.jsx)(K, {}), (0, r.jsx)(Y, {})]
                }), (0, r.jsx)(H, {
                  children: (0, r.jsx)(c.IconButton, {
                    size: "MD",
                    icon: "X",
                    appearance: "tertiary",
                    label: t(g.bottom_sheet_modal_close_icon)
                  })
                }), (0, r.jsx)(U, {
                  children: j && (0, r.jsx)(J, {
                    block: j.contentCollection
                  })
                })]
              })]
            })
          })
        },
        J = ({
          block: e
        }) => {
          const {
            blockPosition: t
          } = (0, o.useContext)(l.BlockRendererContext);
          if (e) return e.items.map(e => (0, r.jsx)(l.BlockRenderer, {
            block: e,
            blockPosition: t
          }, e.sys.id))
        },
        Q = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","decorative_video_replay_button_label":"Wiederholen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hero_carousel_scroll_down_label":"Nach unten scrollen","hero_play_button_label":"Video wird wiedergegeben","hero_stop_button_label":"Video angehalten","hp_hero_play_button_label":"Video wird wiedergegeben","hp_hero_stop_button_label":"Video angehalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","image_marquee_cta_pause_label":"Laufband pausieren","image_marquee_cta_play_label":"Laufband abspielen","job_card_bookmark_action":"Markieren","job_card_created_by":"Erstellt von","job_card_image_alt_text":"Screenshot vom Job {name}","job_card_report_action":"Melden","job_card_share_action":"Teilen","job_card_updated_date":"Aktualisiert: {date}","job_card_verified_by":"Verifiziert von","job_deck_error_loading_label":"Irgendetwas ist schiefgelaufen. Bitte versuche es erneut.","job_deck_explore_cta_label":"Alle Jobs ansehen","job_deck_no_content_warning":"Hier gibt es nichts zu sehen","job_dialog_bookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen markierten Job sehen zu können – Jobs können nur im Spiel bewertet werden, nachdem sie gespielt wurden.","job_dialog_bookmarked_heading":"Job markiert: <b>{name}</b>","job_dialog_bookmarked_title":"Job markiert","job_dialog_confirmation_button":"OKAY","job_dialog_error_body":"Es gab einen Fehler bei dem Versuch, einen Job zu markieren/eine Markierung zu entfernen. Bitte versuche es erneut.","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Fehler","job_dialog_unbookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen Job nicht länger in deinen Markierungen sehen zu können.","job_dialog_unbookmarked_heading":"Job nicht mehr markiert: <b>{name}</b>","job_dialog_unbookmarked_title":"Job nicht mehr markiert","job_type_adversary_mode":"Gegner-Modus","job_type_air_race":"Luftrennen","job_type_arena_deathmatch":"Arena-Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Radrennen","job_type_capture":"Capture","job_type_contact_mission":"Kontaktmission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Dragsterrennen","job_type_drift_race":"Driftrennen","job_type_foot_race":"Rennen zu Fuß","job_type_hao_special_works_race":"HSW-Rennen","job_type_heist":"Raubüberfall","job_type_heist_prep":"Raubüberfall-Austrüstungsmission","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Landrennen","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission-Creator","job_type_open_wheel_race":"Open-Wheel-Rennen","job_type_parachuting":"Fallschirmsprung","job_type_pursuit_race":"Verfolgungsrennen","job_type_race":"Rennen","job_type_random_mission":"Zufällige Mission","job_type_special_race":"Spezialrennen","job_type_street_race":"Straßenrennen","job_type_stunt_race":"Stuntrennen","job_type_survival":"Überlebenskampf","job_type_target":"Zielscheibenrennen","job_type_team_deathmatch":"Team-Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Verwandlungsrennen","job_type_unknown":"Unbekannt","job_type_vehicle_deathmatch":"Fahrzeug-Deathmatch","job_type_water_race":"Seerennen","lightbox_close_button":"Schließen","login_dialog_body":"Du musst dich erst anmelden, um diese Inhalte zu sehen.","login_dialog_signin_button":"Anmelden","login_dialog_signup_button":"Registrieren","login_dialog_title":"Anmelden erforderlich","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details_amp":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details_amp":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","share_close":"Schließen","share_copied_to_clipboard":"Link kopiert","share_copy_to_clipboard":"Link in die Zwischenablage kopieren","share_heading":"Teilen","share_share_to_facebook":"Auf Facebook teilen","share_share_to_reddit":"Auf Reddit teilen","share_share_to_twitter":"Auf X teilen","web_offer_claim_dialog_close":"schließen","web_offer_claim_error_state_button":"Erneut versuchen","web_offer_claim_error_state_icon_label":"Fehler-Symbol","web_offer_claim_exists_state_icon_label":"Erfolgssymbol","web_offer_claim_link_account_state_icon_label":"Fehler-Symbol","web_offer_claim_loading_state":"lädt","web_offer_claim_success_state_icon_label":"Erfolgssymbol"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hero_carousel_scroll_down_label":"Scroll Down","hero_play_button_label":"Video Playing","hero_stop_button_label":"Video Stopped","hp_hero_play_button_label":"Video Playing","hp_hero_stop_button_label":"Video Stopped","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","image_marquee_cta_pause_label":"Marquee Pause","image_marquee_cta_play_label":"Marquee Play","job_card_bookmark_action":"Bookmark","job_card_created_by":"Created by","job_card_image_alt_text":"Screenshot of {name} job","job_card_report_action":"Report","job_card_share_action":"Share","job_card_updated_date":"Updated {date}","job_card_verified_by":"Verified by","job_deck_error_loading_label":"Something went wrong. Please try again.","job_deck_explore_cta_label":"Explore All Jobs","job_deck_no_content_warning":"Nothing to see here","job_dialog_bookmarked_body":"You will need to restart Grand Theft Auto Online to see this bookmarked job - jobs can only be rated in-game, after they have been played.","job_dialog_bookmarked_heading":"Job Bookmarked: <b>{name}</b>","job_dialog_bookmarked_title":"Job Bookmarked","job_dialog_confirmation_button":"OK","job_dialog_error_body":"There was an error when attempting to bookmark/unbookmark the job. Please try again","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"You will need to restart Grand Theft Auto Online to no longer see this job in your bookmarks.","job_dialog_unbookmarked_heading":"Job Unbookmarked: <b>{name}</b>","job_dialog_unbookmarked_title":"Job Unbookmarked","job_type_adversary_mode":"Adversary Mode","job_type_air_race":"Air Race","job_type_arena_deathmatch":"Arena Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Bike Race","job_type_capture":"Capture","job_type_contact_mission":"Contact Mission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Drag Race","job_type_drift_race":"Drift Race","job_type_foot_race":"Foot Race","job_type_hao_special_works_race":"Hao\'s Special Works Race","job_type_heist":"Heist","job_type_heist_prep":"Heist Prep","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Land Race","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission Creator","job_type_open_wheel_race":"Open Wheel Race","job_type_parachuting":"Parachuting","job_type_pursuit_race":"Pursuit Race","job_type_race":"Race","job_type_random_mission":"Random Mission","job_type_special_race":"Special Vehicle Race","job_type_street_race":"Street Race","job_type_stunt_race":"Stunt Race","job_type_survival":"Survival","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Team Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Transform Race","job_type_unknown":"Unknown","job_type_vehicle_deathmatch":"Vehicle Deathmatch","job_type_water_race":"Sea Race","lightbox_close_button":"Close","login_dialog_body":"You need to sign in first to interact with this content","login_dialog_signin_button":"Sign In","login_dialog_signup_button":"Sign Up","login_dialog_title":"Sign In Required","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","share_close":"Close","share_copied_to_clipboard":"Link Copied","share_copy_to_clipboard":"Copy Link to Clipboard","share_heading":"Share","share_share_to_facebook":"Share to Facebook","share_share_to_reddit":"Share to Reddit","share_share_to_twitter":"Share to X","video_play_button_label":"Video Playing","video_stop_button_label":"Video Stopped","web_offer_claim_dialog_close":"close","web_offer_claim_error_state_button":"Try Again","web_offer_claim_error_state_icon_label":"Error Icon","web_offer_claim_exists_state_icon_label":"Success Icon","web_offer_claim_link_account_state_icon_label":"Error Icon","web_offer_claim_loading_state":"loading","web_offer_claim_success_state_icon_label":"Success Icon"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Volver a ver","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hero_play_button_label":"Reproduciendo vídeo","hero_stop_button_label":"Vídeo en pausa","hp_hero_play_button_label":"Reproduciendo vídeo","hp_hero_stop_button_label":"Vídeo en pausa","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","image_marquee_cta_pause_label":"Pausar marquesina","image_marquee_cta_play_label":"Reproducir marquesina","job_card_bookmark_action":"Marcar","job_card_created_by":"Creada por","job_card_image_alt_text":"Captura de pantalla de la actividad {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizada el {date}","job_card_verified_by":"Verificada por","job_deck_error_loading_label":"Algo ha ido mal. Vuelve a intentarlo.","job_deck_explore_cta_label":"Explorar todas las actividades","job_deck_no_content_warning":"Nada que ver aquí","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Ha habido un error al intentar marcar o eliminar la marca de esta actividad. Vuelve a intentarlo","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tu lista de actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad no marcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad no marcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena War","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misiones de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de drift","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar del golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de coches de competición","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Partida de supervivencia","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Para interactuar con este contenido debes iniciar sesión.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Debes iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","share_close":"Cerrar","share_copied_to_clipboard":"Enlace copiado","share_copy_to_clipboard":"Copiar al portapapeles","share_heading":"Compartir","share_share_to_facebook":"Compartir en Facebook","share_share_to_reddit":"Compartir en Reddit","share_share_to_twitter":"Compartir en X","web_offer_claim_dialog_close":"Cerrar","web_offer_claim_error_state_button":"Vuelve a intentarlo","web_offer_claim_error_state_icon_label":"Icono de error","web_offer_claim_exists_state_icon_label":"Icono de aprobación","web_offer_claim_link_account_state_icon_label":"Icono de error","web_offer_claim_loading_state":"Cargando","web_offer_claim_success_state_icon_label":"Icono de aprobación"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Repetir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hero_play_button_label":"Reproduciendo video","hero_stop_button_label":"Video detenido","hp_hero_play_button_label":"Reproduciendo video","hp_hero_stop_button_label":"Video detenido","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","image_marquee_cta_pause_label":"Pausar marco","image_marquee_cta_play_label":"Reproducir marco","job_card_bookmark_action":"Marcar","job_card_created_by":"Creado por","job_card_image_alt_text":"Captura de pantalla del trabajo {name}","job_card_report_action":"Reportar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizado {date}","job_card_verified_by":"Verificado por","job_deck_error_loading_label":"Algo salió mal. Inténtalo de nuevo.","job_deck_explore_cta_label":"Ver todas las actividades","job_deck_no_content_warning":"Vacío","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Las actividades solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Se produjo un error al intentar marcar o desmarcar la actividad. Inténtalo de nuevo.","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tus actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad desmarcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad desmarcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena de Motores","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misión de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de derrapes","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar de golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de ruedas descubiertas","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Supervivencia","job_type_target":"Carrera de ataque al objetivo","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Necesitas iniciar sesión para poder interactuar con este contenido.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Necesitas iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","share_close":"Cerrar","share_copied_to_clipboard":"Enlace copiado","share_copy_to_clipboard":"Copiar enlace al portapapeles","share_heading":"Compartir","share_share_to_facebook":"Compartir en Facebook","share_share_to_reddit":"Compartir en Reddit","share_share_to_twitter":"Compartir en X","web_offer_claim_dialog_close":"cerrar","web_offer_claim_error_state_button":"Volver a intentar","web_offer_claim_error_state_icon_label":"Ícono de error","web_offer_claim_exists_state_icon_label":"Ícono de aprobado","web_offer_claim_link_account_state_icon_label":"Ícono de error","web_offer_claim_loading_state":"cargando","web_offer_claim_success_state_icon_label":"Ícono de aprobado"},"fr-FR":{"aria_label_open_new_window":"(S\'ouvre dans une nouvelle fenêtre)","bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","decorative_video_replay_button_label":"Relire","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hero_carousel_scroll_down_label":"Faire défiler vers le bas","hero_play_button_label":"Vidéo en cours de lecture","hero_stop_button_label":"Vidéo arrêtée","hp_hero_play_button_label":"Vidéo en cours de lecture","hp_hero_stop_button_label":"Vidéo arrêtée","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","image_marquee_cta_pause_label":"Marquee Pause","image_marquee_cta_play_label":"Marquee Lecture","job_card_bookmark_action":"Ajouter aux favoris","job_card_created_by":"Créé par","job_card_image_alt_text":"Capture d\'écran de la mission {name}","job_card_report_action":"Effectuer un signalement","job_card_share_action":"Partager","job_card_updated_date":"Dernière modification : {date}","job_card_verified_by":"Vérifié par","job_deck_error_loading_label":"Une erreur s\'est produite. Veuillez réessayer.","job_deck_explore_cta_label":"Explorer toutes les missions","job_deck_no_content_warning":"Rien à voir ici","job_dialog_bookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour voir cette mission ajoutée aux favoris. Les missions ne peuvent être notées qu\'en jeu, après avoir été jouées.","job_dialog_bookmarked_heading":"Mission ajoutée aux favoris : <b>{name}</b>","job_dialog_bookmarked_title":"Mission ajoutée aux favoris","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Une erreur est survenue lors de l\'ajout/du retrait de la mission de la liste des favoris. Veuillez réessayer.","job_dialog_error_heading":"Mission : <b>{name}</b>","job_dialog_error_title":"Erreur","job_dialog_unbookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour ne plus voir cette mission dans vos favoris.","job_dialog_unbookmarked_heading":"Mission retirée des favoris : <b>{name}</b>","job_dialog_unbookmarked_title":"Mission retirée des favoris","job_type_adversary_mode":"Mode rivalité","job_type_air_race":"Course aérienne","job_type_arena_deathmatch":"Affrontement en arène","job_type_arena_war":"Guerre d\'arène","job_type_bike_race":"Course à moto","job_type_capture":"Capture","job_type_contact_mission":"Mission de contact","job_type_deathmatch":"Affrontement","job_type_drag_race":"Course de dragster","job_type_drift_race":"Course de drift","job_type_foot_race":"Course à pied","job_type_hao_special_works_race":"Course d\'Hao\'s Special Works","job_type_heist":"Braquage","job_type_heist_prep":"Préparation de braquage","job_type_king_of_the_hill":"Conquête","job_type_land_race":"Course terrestre","job_type_last_team_standing":"Extermination","job_type_mission":"Mission","job_type_mission_creator":"Éditeur de missions","job_type_open_wheel_race":"Course d\'ultralégères","job_type_parachuting":"Saut en parachute","job_type_pursuit_race":"Course de poursuite","job_type_race":"Course","job_type_random_mission":"Mission aléatoire","job_type_special_race":"Course de véhicules spéciaux","job_type_street_race":"Course de rue","job_type_stunt_race":"Course nautique","job_type_survival":"Survie","job_type_target":"Course aux points","job_type_team_deathmatch":"Affrontement en équipe","job_type_team_king_of_the_hill":"Conquête en équipe","job_type_transform_race":"Course polymorphes","job_type_unknown":"Inconnu","job_type_vehicle_deathmatch":"Affrontement motorisé","job_type_water_race":"Course nautique","lightbox_close_button":"Fermer","login_dialog_body":"Vous devez vous connecter pour interagir avec ce contenu.","login_dialog_signin_button":"Se connecter","login_dialog_signup_button":"Créer un compte","login_dialog_title":"Connexion requise","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details_amp":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","share_close":"Fermer","share_copied_to_clipboard":"Lien copié","share_copy_to_clipboard":"Copier le lien dans le presse-papiers","share_heading":"Partager","share_share_to_facebook":"Partager sur Facebook","share_share_to_reddit":"Partager sur Reddit","share_share_to_twitter":"Partager sur X","web_offer_claim_dialog_close":"Fermer","web_offer_claim_error_state_button":"Réessayer","web_offer_claim_error_state_icon_label":"Icône d\'erreur","web_offer_claim_exists_state_icon_label":"Icône de réussite","web_offer_claim_link_account_state_icon_label":"Icône d\'erreur","web_offer_claim_loading_state":"Chargement","web_offer_claim_success_state_icon_label":"Icône de réussite"},"it-IT":{"aria_label_open_new_window":"(Si apre in una nuova finestra)","bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","decorative_video_replay_button_label":"Riproduci di nuovo","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hero_carousel_scroll_down_label":"Scorri in basso","hero_play_button_label":"Video in riproduzione","hero_stop_button_label":"Riproduzione video interrotta","hp_hero_play_button_label":"Video in riproduzione","hp_hero_stop_button_label":"Riproduzione video interrotta","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","image_marquee_cta_pause_label":"Metti in pausa marquee","image_marquee_cta_play_label":"Riproduci marquee","job_card_bookmark_action":"Aggiungi ai preferiti","job_card_created_by":"Creato da","job_card_image_alt_text":"Screenshot dell\'attività {name}","job_card_report_action":"Segnala","job_card_share_action":"Condividi","job_card_updated_date":"Aggiornato il {date}","job_card_verified_by":"Verificato da","job_deck_error_loading_label":"Operazione non riuscita. Riprova.","job_deck_explore_cta_label":"Scopri tutte le attività","job_deck_no_content_warning":"Non c’è niente da vedere","job_dialog_bookmarked_body":"Per visualizzare questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online. Le attività possono essere valutate solo all\'interno del gioco, dopo averle giocate.","job_dialog_bookmarked_heading":"Attività aggiunta ai preferiti: <b>{name}</b>","job_dialog_bookmarked_title":"Attività aggiunta ai preferiti","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Si è verificato un errore durante l’aggiunta ai/la rimozione dai preferiti dell’attività. Riprova più tardi","job_dialog_error_heading":"Attività: <b>{name}</b>","job_dialog_error_title":"Errore","job_dialog_unbookmarked_body":"Per non visualizzare più questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online.","job_dialog_unbookmarked_heading":"Attività rimossa dai preferiti: <b>{name}</b>","job_dialog_unbookmarked_title":"Attività rimossa dai preferiti","job_type_adversary_mode":"Modalità Competizione","job_type_air_race":"Gara aerea","job_type_arena_deathmatch":"Deathmatch nell\'Arena","job_type_arena_war":"Arena War","job_type_bike_race":"Gara su due ruote","job_type_capture":"Cattura","job_type_contact_mission":"Missione dei contatti","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Gara drag","job_type_drift_race":"Gara drift","job_type_foot_race":"Gara a piedi","job_type_hao_special_works_race":"Gara di Hao\'s Special Works","job_type_heist":"Colpi","job_type_heist_prep":"Missione preliminare del colpo","job_type_king_of_the_hill":"Re della collina","job_type_land_race":"Gara terrestre","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Missione","job_type_mission_creator":"Creatore di missioni","job_type_open_wheel_race":"Gara per ruote scoperte","job_type_parachuting":"Paracadutismo","job_type_pursuit_race":"Inseguimenti","job_type_race":"Gara","job_type_random_mission":"Missione casuale","job_type_special_race":"Gara con veicoli speciali","job_type_street_race":"Gara clandestina","job_type_stunt_race":"Gara stunt","job_type_survival":"Sopravvivenza","job_type_target":"Gara al bersaglio","job_type_team_deathmatch":"Deathmatch a squadre","job_type_team_king_of_the_hill":"Re della collina a squadre","job_type_transform_race":"Gara multiveicolo","job_type_unknown":"Sconosciuto","job_type_vehicle_deathmatch":"Deathmatch con veicoli","job_type_water_race":"Gara acquatica","lightbox_close_button":"Chiudi","login_dialog_body":"È necessario eseguire l’accesso prima di poter interagire con questo contenuto","login_dialog_signin_button":"Accedi","login_dialog_signup_button":"Registrati","login_dialog_title":"È necessario eseguire l’accesso","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details_amp":"Stai già usando questo indirizzo email per ricevere la newsletter. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","share_close":"Chiudi","share_copied_to_clipboard":"Link copiato","share_copy_to_clipboard":"Copia il link","share_heading":"Condividi","share_share_to_facebook":"Condividi su Facebook","share_share_to_reddit":"Condividi su Reddit","share_share_to_twitter":"Condividi su X","web_offer_claim_dialog_close":"chiudi","web_offer_claim_error_state_button":"Riprova","web_offer_claim_error_state_icon_label":"Icona Errore","web_offer_claim_exists_state_icon_label":"Icona di successo","web_offer_claim_link_account_state_icon_label":"Icona Errore","web_offer_claim_loading_state":"caricamento","web_offer_claim_success_state_icon_label":"Icona di successo"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","decorative_video_replay_button_label":"もう一回見る","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hero_carousel_scroll_down_label":"下にスクロール","hero_play_button_label":"ビデオ再生中","hero_stop_button_label":"ビデオ停止中","hp_hero_play_button_label":"ビデオ再生中","hp_hero_stop_button_label":"ビデオ停止中","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","image_marquee_cta_pause_label":"自動スクロール一時停止","image_marquee_cta_play_label":"自動スクロール再生","job_card_bookmark_action":"ブックマーク","job_card_created_by":"により作成","job_card_image_alt_text":"ジョブ{name}のスクリーンショット","job_card_report_action":"報告","job_card_share_action":"共有","job_card_updated_date":"{date}に更新","job_card_verified_by":"により認証","job_deck_error_loading_label":"問題が発生しました。もう一度お試しください。","job_deck_explore_cta_label":"全てのジョブを探索","job_deck_no_content_warning":"ここで見るものはありません","job_dialog_bookmarked_body":"ブックマークされたジョブを閲覧するには「GTAオンライン」を再起動する必要があります - ジョブは実際にプレイした後でなければ、ゲーム内で評価することはできません。","job_dialog_bookmarked_heading":"ブックマークされたジョブ: <b>{name}</b>","job_dialog_bookmarked_title":"ブックマークされたジョブ","job_dialog_confirmation_button":"OK","job_dialog_error_body":"ジョブをブックマーク/ブックマーク解除を試みた際にエラーが起こりました。もう一度お試しください","job_dialog_error_heading":"ジョブ: <b>{name}</b>","job_dialog_error_title":"エラー","job_dialog_unbookmarked_body":"ブックマークから解除たジョブを削除するには「GTAオンライン」を再起動する必要があります。","job_dialog_unbookmarked_heading":"ブックマークから解除されたジョブ: <b>{name}</b>","job_dialog_unbookmarked_title":"ブックマークから解除されたジョブ","job_type_adversary_mode":"敵対モード","job_type_air_race":"エアレース","job_type_arena_deathmatch":"アリーナデスマッチ","job_type_arena_war":"アリーナウォーズ","job_type_bike_race":"バイクレース","job_type_capture":"キャプチャー","job_type_contact_mission":"コンタクトのミッション","job_type_deathmatch":"デスマッチ","job_type_drag_race":"ドラッグレース","job_type_drift_race":"ドリフトレース","job_type_foot_race":"徒競走","job_type_hao_special_works_race":"ハオ・スペシャルワークスレース","job_type_heist":"強盗","job_type_heist_prep":"強盗調達","job_type_king_of_the_hill":"キングオブザヒル","job_type_land_race":"ランドレース","job_type_last_team_standing":"ラスト・チーム・アライブ","job_type_mission":"ミッション","job_type_mission_creator":"ミッションクリエイター","job_type_open_wheel_race":"オープンホイールレース","job_type_parachuting":"パラシューティング","job_type_pursuit_race":"追跡レース","job_type_race":"レース","job_type_random_mission":"ランダムなミッション","job_type_special_race":"特殊車両レース","job_type_street_race":"ストリートレース","job_type_stunt_race":"スタントレース","job_type_survival":"サバイバル","job_type_target":"ターゲットアサルトレース","job_type_team_deathmatch":"チームデスマッチ","job_type_team_king_of_the_hill":"チーム・キングオブザヒル","job_type_transform_race":"トランスフォームレース","job_type_unknown":"不明","job_type_vehicle_deathmatch":"マシンデスマッチ","job_type_water_race":"シーレース","lightbox_close_button":"閉じる","login_dialog_body":"このコンテンツを利用するには、サインインする必要があります","login_dialog_signin_button":"サインイン","login_dialog_signup_button":"サインアップ","login_dialog_title":"サインインが必要","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details_amp":"このメールアドレスで既にニュースレターアップデートを受け取っています。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します","share_close":"閉じる","share_copied_to_clipboard":"リンクのコピー完了","share_copy_to_clipboard":"リンクをクリップボードにコピー","share_heading":"共有","share_share_to_facebook":"Facebookで共有","share_share_to_reddit":"Redditで共有","share_share_to_twitter":"Xで共有","web_offer_claim_dialog_close":"閉じる","web_offer_claim_error_state_button":"もう一度試す","web_offer_claim_error_state_icon_label":"エラーアイコン","web_offer_claim_exists_state_icon_label":"成功のアイコン","web_offer_claim_link_account_state_icon_label":"エラーアイコン","web_offer_claim_loading_state":"ロード中","web_offer_claim_success_state_icon_label":"成功のアイコン"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","decorative_video_replay_button_label":"다시 재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hero_carousel_scroll_down_label":"아래로 스크롤","hero_play_button_label":"비디오 재생 중","hero_stop_button_label":"비디오 정지","hp_hero_play_button_label":"비디오 재생 중","hp_hero_stop_button_label":"비디오 정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","image_marquee_cta_pause_label":"마키 일시정지","image_marquee_cta_play_label":"마키 재생","job_card_bookmark_action":"즐겨찾기","job_card_created_by":"생성됨","job_card_image_alt_text":"{name} 작업 스크린샷","job_card_report_action":"신고","job_card_share_action":"공유","job_card_updated_date":"{date} 업데이트됨","job_card_verified_by":"인증됨","job_deck_error_loading_label":"문제가 발생했습니다. 다시 시도해 주십시오.","job_deck_explore_cta_label":"모든 작업 둘러보기","job_deck_no_content_warning":"표시할 항목이 없습니다","job_dialog_bookmarked_body":"즐겨찾기에 등록한 작업을 보려면 Grand Theft Auto 온라인을 다시 시작해야 합니다 - 작업은 플레이한 후에만 게임 내에서 평가할 수 있습니다.","job_dialog_bookmarked_heading":"즐겨찾기에 등록한 작업: <b>{name}</b>","job_dialog_bookmarked_title":"즐겨찾기에 등록한 작업","job_dialog_confirmation_button":"확인","job_dialog_error_body":"작업 즐겨찾기 등록/해제 중 오류가 발생했습니다. 다시 시도하십시오","job_dialog_error_heading":"작업: <b>{name}</b>","job_dialog_error_title":"오류","job_dialog_unbookmarked_body":"즐겨찾기에서 이 작업을 표시하지 않으려면 Grand Theft Auto 온라인을 다시 시작해야 합니다.","job_dialog_unbookmarked_heading":"즐겨찾기 해제한 작업: <b>{name}</b>","job_dialog_unbookmarked_title":"즐겨찾기 해제한 작업","job_type_adversary_mode":"대적 모드","job_type_air_race":"항공 레이스","job_type_arena_deathmatch":"아레나 데스매치","job_type_arena_war":"아레나 워","job_type_bike_race":"바이크 레이스","job_type_capture":"점령","job_type_contact_mission":"연락책 임무","job_type_deathmatch":"데스매치","job_type_drag_race":"드래그 레이스","job_type_drift_race":"드리프트 레이스","job_type_foot_race":"도보 레이스","job_type_hao_special_works_race":"하오의 스페셜 웍스 레이스 ","job_type_heist":"습격","job_type_heist_prep":"습격 준비","job_type_king_of_the_hill":"킹 오브 더 힐","job_type_land_race":"지상 레이스","job_type_last_team_standing":"라스트 팀 스탠딩","job_type_mission":"임무","job_type_mission_creator":"임무 생성기","job_type_open_wheel_race":"오픈 휠 레이스","job_type_parachuting":"낙하산 강하","job_type_pursuit_race":"추격전 레이스","job_type_race":"레이스","job_type_random_mission":"무작위 임무","job_type_special_race":"특수 차량 레이스","job_type_street_race":"길거리 레이스","job_type_stunt_race":"스턴트 레이스","job_type_survival":"서바이벌","job_type_target":"타겟 어썰트 레이스","job_type_team_deathmatch":"팀 데스매치","job_type_team_king_of_the_hill":"팀 킹 오브 더 힐","job_type_transform_race":"변신 레이스","job_type_unknown":"알 수 없음","job_type_vehicle_deathmatch":"이동 수단 데스매치","job_type_water_race":"해상 레이스","lightbox_close_button":"닫기","login_dialog_body":"이 콘텐츠에 댓글을 남기거나 좋아요를 누르려면 먼저 로그인하십시오","login_dialog_signin_button":"로그인","login_dialog_signup_button":"가입","login_dialog_title":"로그인 필요","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details_amp":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details_amp":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","share_close":"닫기","share_copied_to_clipboard":"링크 복사됨","share_copy_to_clipboard":"클립보드에 링크 복사","share_heading":"공유","share_share_to_facebook":"Facebook으로 공유","share_share_to_reddit":"Reddit으로 공유","share_share_to_twitter":"X로 공유","web_offer_claim_dialog_close":"닫기","web_offer_claim_error_state_button":"다시 시도하기","web_offer_claim_error_state_icon_label":"오류 아이콘","web_offer_claim_exists_state_icon_label":"성공 아이콘","web_offer_claim_link_account_state_icon_label":"오류 아이콘","web_offer_claim_loading_state":"불러오는 중","web_offer_claim_success_state_icon_label":"성공 아이콘"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","decorative_video_replay_button_label":"Odtwórz ponownie","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hero_carousel_scroll_down_label":"Przewiń w dół","hero_play_button_label":"Wideo odtwarzane","hero_stop_button_label":"Wideo zatrzymane","hp_hero_play_button_label":"Wideo odtwarzane","hp_hero_stop_button_label":"Wideo zatrzymane","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","image_marquee_cta_pause_label":"Pasek przewijania Zatrzymaj","image_marquee_cta_play_label":"Pasek przewijania Odtwórz","job_card_bookmark_action":"Dodaj do zakładek","job_card_created_by":"Stworzone przez","job_card_image_alt_text":"Zrzut ekranu akcji {name}","job_card_report_action":"Zgłoś","job_card_share_action":"Udostępnij","job_card_updated_date":"Zaktualizowano {date}","job_card_verified_by":"Zweryfikowane przez","job_deck_error_loading_label":"Coś poszło nie tak. Spróbuj ponownie.","job_deck_explore_cta_label":"Porównaj wszystkie akcje","job_deck_no_content_warning":"Brak podglądu","job_dialog_bookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby zobaczyć tę dodaną do ulubionych akcję. Akcje mogą być ocenione tylko i wyłącznie w grze po ich rozegraniu.","job_dialog_bookmarked_heading":"Akcja dodana do ulubionych: <b>{name}</b>","job_dialog_bookmarked_title":"Akcja dodana do ulubionych","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Wystąpił błąd podczas dodawania/usuwania tej akcji z sekcji ulubionych. Spróbuj ponownie.","job_dialog_error_heading":"Akcja: <b>{name}</b>","job_dialog_error_title":"Błąd","job_dialog_unbookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby akcja nie pojawiała się dłużej w sekcji ulubionych akcji.","job_dialog_unbookmarked_heading":"Akcja usunięta z ulubionych: <b>{name}</b>","job_dialog_unbookmarked_title":"Akcja usunięta z ulubionych","job_type_adversary_mode":"Tryb adwerszarza","job_type_air_race":"Wyścig powietrzny","job_type_arena_deathmatch":"Deathmatch na arenie","job_type_arena_war":"Arena wojny","job_type_bike_race":"Wyścig jednośladów","job_type_capture":"Zdobywanie","job_type_contact_mission":"Misja od kontaktów","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Wyścig równoległy","job_type_drift_race":"Wyścig driftowe","job_type_foot_race":"Wyścig pieszy","job_type_hao_special_works_race":"Wyścigi Hao’s Special Works","job_type_heist":"Napad","job_type_heist_prep":"Misja w terenie","job_type_king_of_the_hill":"Król wzgórza","job_type_land_race":"Wyścig lądowy","job_type_last_team_standing":"Ostatnia drużyna wygrywa","job_type_mission":"Misja","job_type_mission_creator":"Kreator misji","job_type_open_wheel_race":"Wyścig bolidów","job_type_parachuting":"Skoki spadochronowe","job_type_pursuit_race":"Pościg","job_type_race":"Wyścig","job_type_random_mission":"Losowa misja","job_type_special_race":"Wyścig pojazdów specjalnych","job_type_street_race":"Wyścig uliczny","job_type_stunt_race":"Wyścig kaskaderski","job_type_survival":"Walka o przetrwanie","job_type_target":"Wyścig strzelecki","job_type_team_deathmatch":"Deathmatch drużynowy","job_type_team_king_of_the_hill":"Drużynowy Król wzgórza","job_type_transform_race":"Wyścig z transformacją","job_type_unknown":"Nieznane","job_type_vehicle_deathmatch":"Deathmatch w pojazdach","job_type_water_race":"Wyścig morski","lightbox_close_button":"Zamknij","login_dialog_body":"Zaloguj się, aby zapoznać się z zawartością.","login_dialog_signin_button":"Zaloguj się","login_dialog_signup_button":"Zarejestruj się","login_dialog_title":"Wymagane zalogowanie się","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details_amp":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","share_close":"Zamknij","share_copied_to_clipboard":"Link skopiowany","share_copy_to_clipboard":"Skopiuj do schowka","share_heading":"Udostępnij","share_share_to_facebook":"Udostępnij na Facebooku","share_share_to_reddit":"Udostępnij na Reddit","share_share_to_twitter":"Udostępnij na X","web_offer_claim_dialog_close":"Zamknij","web_offer_claim_error_state_button":"Spróbuj ponownie","web_offer_claim_error_state_icon_label":"Ikona błędu","web_offer_claim_exists_state_icon_label":"Ikona sukcesu","web_offer_claim_link_account_state_icon_label":"Ikona błędu","web_offer_claim_loading_state":"Ładowanie","web_offer_claim_success_state_icon_label":"Ikona sukcesu"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hero_carousel_scroll_down_label":"Role para baixo","hero_play_button_label":"Vídeo em reprodução","hero_stop_button_label":"Vídeo parado","hp_hero_play_button_label":"Vídeo em reprodução","hp_hero_stop_button_label":"Vídeo parado","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","image_marquee_cta_pause_label":"Pausar marquee","image_marquee_cta_play_label":"Iniciar marquee","job_card_bookmark_action":"Adicionar aos Favoritos","job_card_created_by":"Criado por","job_card_image_alt_text":"Captura de tela do Serviço {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartilhar","job_card_updated_date":"Atualização {date}","job_card_verified_by":"Verificado por","job_deck_error_loading_label":"Houve um erro. Tente de novo.","job_deck_explore_cta_label":"Ver todos os Serviços","job_deck_no_content_warning":"Não há nada aqui","job_dialog_bookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para ver este serviço como um de seus Favoritos. Serviços só podem ser avaliados no jogo, após terem sido jogados.","job_dialog_bookmarked_heading":"Serviço adicionado aos Favoritos: <b>{name}</b>","job_dialog_bookmarked_title":"Serviço adicionado aos Favoritos","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Houve um erro ao tentar adicionar/remover esse serviço aos Favoritos. Tente novamente.","job_dialog_error_heading":"Serviço: <b>{name}</b>","job_dialog_error_title":"Erro","job_dialog_unbookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para não ver mais este serviço como um de seus Favoritos.","job_dialog_unbookmarked_heading":"Serviço removido dos Favoritos: <b>{name}</b>","job_dialog_unbookmarked_title":"Serviço removido dos Favoritos","job_type_adversary_mode":"Modo Adversário","job_type_air_race":"Corrida Aérea","job_type_arena_deathmatch":"Mata-mata da Arena","job_type_arena_war":"Arena de Guerra","job_type_bike_race":"Corrida sobre duas rodas","job_type_capture":"Captura","job_type_contact_mission":"Missão de Contato","job_type_deathmatch":"Mata-mata","job_type_drag_race":"Corrida de Arrancada","job_type_drift_race":"Corrida de Drift","job_type_foot_race":"Corrida a pé","job_type_hao_special_works_race":"Corrida da Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Preliminar do Golpe","job_type_king_of_the_hill":"Marcando Território","job_type_land_race":"Corrida Terrestre","job_type_last_team_standing":"Última Equipe Sobrevivente","job_type_mission":"Missão","job_type_mission_creator":"Criador de Missões","job_type_open_wheel_race":"Corrida de Roda Exposta","job_type_parachuting":"Paraquedismo","job_type_pursuit_race":"Corrida de Perseguição","job_type_race":"Corrida","job_type_random_mission":"Missão aleatória","job_type_special_race":"Corrida de Veículo Especial","job_type_street_race":"Corrida de Rua","job_type_stunt_race":"Corrida Acrobática","job_type_survival":"Sobrevivência","job_type_target":"Corrida de Assalto com Alvos","job_type_team_deathmatch":"Mata-mata em Equipe","job_type_team_king_of_the_hill":"Marcando Território em Equipe","job_type_transform_race":"Corrida Metamorfose","job_type_unknown":"Desconhecido","job_type_vehicle_deathmatch":"Mata-mata em Veículos","job_type_water_race":"Corrida Marítima","lightbox_close_button":"Fechar","login_dialog_body":"É necessário iniciar sessão para interagir com esse conteúdo","login_dialog_signin_button":"Iniciar sessão","login_dialog_signup_button":"Criar conta","login_dialog_title":"É necessário iniciar sessão","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details_amp":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição","share_close":"Fechar","share_copied_to_clipboard":"Link copiado","share_copy_to_clipboard":"Copiar link para a área de transferência","share_heading":"Compartilhar","share_share_to_facebook":"Compartilhar com Facebook","share_share_to_reddit":"Compartilhar com Reddit","share_share_to_twitter":"Compartilhar com X","web_offer_claim_dialog_close":"fechar","web_offer_claim_error_state_button":"Tentar novamente","web_offer_claim_error_state_icon_label":"Ícone de erro","web_offer_claim_exists_state_icon_label":"Ícone de êxito","web_offer_claim_link_account_state_icon_label":"Ícone de erro","web_offer_claim_loading_state":"carregando","web_offer_claim_success_state_icon_label":"Ícone de êxito"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","decorative_video_replay_button_label":"Повтор","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hero_carousel_scroll_down_label":"Прокрутить вниз","hero_play_button_label":"Воспроизведение видео","hero_stop_button_label":"Видео остановлено","hp_hero_play_button_label":"Воспроизведение видео","hp_hero_stop_button_label":"Видео остановлено","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total}","image_marquee_cta_pause_label":"Бегущая строка: пауза","image_marquee_cta_play_label":"Бегущая строка: воспроизвести","job_card_bookmark_action":"Отметить","job_card_created_by":"Создан","job_card_image_alt_text":"Снимок экрана дела {name}","job_card_report_action":"Пожаловаться","job_card_share_action":"Поделиться","job_card_updated_date":"Обновлен {date}","job_card_verified_by":"Проверен","job_deck_error_loading_label":"Возникла неизвестная ошибка. Пожалуйста, повторите попытку позже.","job_deck_explore_cta_label":"Ознакомиться со всеми делами","job_deck_no_content_warning":"Здесь пока ничего нет","job_dialog_bookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы увидеть добавленное в закладки дело. Оценивать дела можно только в игре после прохождения.","job_dialog_bookmarked_heading":"Дело добавлено в закладки: <b>{name}</b>","job_dialog_bookmarked_title":"Дело добавлено в закладки","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Произошла ошибка при попытке добавить дело в закладки или удалить его из закладок. Пожалуйста, повторите попытку","job_dialog_error_heading":"Дело: <b>{name}</b>","job_dialog_error_title":"Ошибка","job_dialog_unbookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы удалить это дело из закладок.","job_dialog_unbookmarked_heading":"Дело удалено из закладок: <b>{name}</b>","job_dialog_unbookmarked_title":"Дело удалено из закладок","job_type_adversary_mode":"Режим противоборства","job_type_air_race":"Гонка по воздуху","job_type_arena_deathmatch":"Перестрелка на арене","job_type_arena_war":"Битва на арене","job_type_bike_race":"Велогонка","job_type_capture":"Захват","job_type_contact_mission":"Задание знакомого","job_type_deathmatch":"Перестрелка","job_type_drag_race":"Драг-гонка","job_type_drift_race":"Дрифтовая гонка","job_type_foot_race":"Пешая гонка","job_type_hao_special_works_race":"Гонка Hao’s Special Works","job_type_heist":"Ограбление","job_type_heist_prep":"Подготовка к ограблению","job_type_king_of_the_hill":"Король горы","job_type_land_race":"Гонка по суше","job_type_last_team_standing":"«Команда уцелевших»","job_type_mission":"Задание","job_type_mission_creator":"Редактор заданий","job_type_open_wheel_race":"Гонки на болидах","job_type_parachuting":"Парашютизм","job_type_pursuit_race":"Гонка «Погоня»","job_type_race":"Гонка","job_type_random_mission":"Случайная миссия","job_type_special_race":"Гонка для особого транспорта","job_type_street_race":"Уличная гонка","job_type_stunt_race":"Каскадерская гонка","job_type_survival":"Выживание","job_type_target":"Гонка с мишенями","job_type_team_deathmatch":"Командная перестрелка","job_type_team_king_of_the_hill":"Команда «Король горы»","job_type_transform_race":"Гонка «Трансформации»","job_type_unknown":"Неизвестно","job_type_vehicle_deathmatch":"Перестрелка на транспорте","job_type_water_race":"Морская гонка","lightbox_close_button":"Закрыть","login_dialog_body":"Выполните вход, чтобы взаимодействовать с этим контентом.","login_dialog_signin_button":"Войти","login_dialog_signup_button":"Регистрация","login_dialog_title":"Необходимо выполнить вход","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details_amp":"Вы уже получаете письма по рассылке на этот адрес электронной почты. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","share_close":"Закрыть","share_copied_to_clipboard":"Ссылка скопирована","share_copy_to_clipboard":"Скопировать ссылку в буфер обмена","share_heading":"Поделиться","share_share_to_facebook":"Поделиться на Facebook","share_share_to_reddit":"Поделиться на Reddit","share_share_to_twitter":"Поделиться на X","web_offer_claim_dialog_close":"закрыть","web_offer_claim_error_state_button":"Попробовать снова","web_offer_claim_error_state_icon_label":"Значок ошибки","web_offer_claim_exists_state_icon_label":"Значок «Успех»","web_offer_claim_link_account_state_icon_label":"Значок ошибки","web_offer_claim_loading_state":"загрузка","web_offer_claim_success_state_icon_label":"Значок «Успех»"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"回放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下滚动","hero_play_button_label":"视频播放中","hero_stop_button_label":"视频已停止","hp_hero_play_button_label":"视频播放中","hp_hero_stop_button_label":"视频已停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","image_marquee_cta_pause_label":"滚动暂停","image_marquee_cta_play_label":"滚动开启","job_card_bookmark_action":"收藏","job_card_created_by":"制作者","job_card_image_alt_text":"{name}差事的截图","job_card_report_action":"举报","job_card_share_action":"分享","job_card_updated_date":"更新于{date}","job_card_verified_by":"认证者","job_deck_error_loading_label":"出现了一些问题。请重试。","job_deck_explore_cta_label":"浏览所有差事","job_deck_no_content_warning":"这里空荡荡的","job_dialog_bookmarked_body":"您需要重新启动Grand Theft Auto在线模式来查看这项已收藏的差事。只有在游玩了差事后才能在游戏内对它们进行评价。","job_dialog_bookmarked_heading":"已收藏差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏差事","job_dialog_confirmation_button":"确定","job_dialog_error_body":"收藏/取消收藏此差事时出现了一个错误。请稍候再试","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"错误","job_dialog_unbookmarked_body":"需要您重新启动Grand Theft Auto在线模式后，这项差事才会从您的收藏中消失。","job_dialog_unbookmarked_heading":"已取消收藏差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏差事","job_type_adversary_mode":"对抗模式","job_type_air_race":"空中竞速","job_type_arena_deathmatch":"竞技场死斗","job_type_arena_war":"竞技场之战","job_type_bike_race":"两轮车竞速","job_type_capture":"夺取","job_type_contact_mission":"联系人任务","job_type_deathmatch":"死斗游戏","job_type_drag_race":"直线竞速","job_type_drift_race":"漂移竞速","job_type_foot_race":"徒步竞速","job_type_hao_special_works_race":"阿浩特别工坊竞速","job_type_heist":"抢劫任务","job_type_heist_prep":"抢劫前置任务","job_type_king_of_the_hill":"占山为王","job_type_land_race":"陆地竞速","job_type_last_team_standing":"团队生存游戏","job_type_mission":"任务","job_type_mission_creator":"任务制作器","job_type_open_wheel_race":"开轮式竞速","job_type_parachuting":"跳伞","job_type_pursuit_race":"追逐竞速","job_type_race":"竞速","job_type_random_mission":"随机任务","job_type_special_race":"特殊载具竞速","job_type_street_race":"街头竞速","job_type_stunt_race":"特技竞速","job_type_survival":"生存战","job_type_target":"标靶射击竞速","job_type_team_deathmatch":"团队死斗游戏","job_type_team_king_of_the_hill":"团队占山为王","job_type_transform_race":"幻变竞速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"载具死斗游戏","job_type_water_race":"水上竞速","lightbox_close_button":"关闭","login_dialog_body":"您需要先登录才能与该内容进行互动","login_dialog_signin_button":"登录","login_dialog_signup_button":"注册","login_dialog_title":"需要登录","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details_amp":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置中随时管理您的通信偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"确定","ns_successfully_subscribed_details_amp":"您现已订阅Rockstar Games邮件通知，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置中随时管理您的通信偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","share_close":"关闭","share_copied_to_clipboard":"已复制链接","share_copy_to_clipboard":"复制链接到剪贴板","share_heading":"分享","share_share_to_facebook":"分享至Facebook","share_share_to_reddit":"分享至Reddit","share_share_to_twitter":"分享至X","web_offer_claim_dialog_close":"关闭","web_offer_claim_error_state_button":"再次尝试","web_offer_claim_error_state_icon_label":"错误图标","web_offer_claim_exists_state_icon_label":"成功图标","web_offer_claim_link_account_state_icon_label":"错误图标","web_offer_claim_loading_state":"正在加载","web_offer_claim_success_state_icon_label":"成功图标"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"重播","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下捲動","hero_play_button_label":"正播放影片","hero_stop_button_label":"影片已停止","hp_hero_play_button_label":"正播放影片","hp_hero_stop_button_label":"影片已停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","image_marquee_cta_pause_label":"跑馬燈暫停","image_marquee_cta_play_label":"跑馬燈播放","job_card_bookmark_action":"收藏","job_card_created_by":"創作者：","job_card_image_alt_text":"「{name}」差事的擷圖","job_card_report_action":"檢舉","job_card_share_action":"分享","job_card_updated_date":"更新於 {date}","job_card_verified_by":"驗證者：","job_deck_error_loading_label":"發生錯誤。請再試一次。","job_deck_explore_cta_label":"探索各項差事","job_deck_no_content_warning":"無內容可供查看","job_dialog_bookmarked_body":"您需要重啟 GTA 線上模式才能看見此已收藏的差事。您需要完成該差事，才能在遊戲內對其評價。","job_dialog_bookmarked_heading":"已收藏的差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏的差事","job_dialog_confirmation_button":"確定","job_dialog_error_body":"解決這個請求時出現錯誤。請再試一次。","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"錯誤","job_dialog_unbookmarked_body":"您需要重啟 GTA 線上模式才不會再在收藏中看見此差事。","job_dialog_unbookmarked_heading":"已取消收藏的差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏的差事","job_type_adversary_mode":"競爭模式","job_type_air_race":"空中競速","job_type_arena_deathmatch":"鬥技場死鬥遊戲","job_type_arena_war":"決戰鬥技場","job_type_bike_race":"雙輪車競速","job_type_capture":"奪取","job_type_contact_mission":"聯絡人任務","job_type_deathmatch":"死鬥遊戲","job_type_drag_race":"直線競速","job_type_drift_race":"甩尾競速","job_type_foot_race":"賽跑","job_type_hao_special_works_race":"阿浩特製改裝競速","job_type_heist":"搶劫任務","job_type_heist_prep":"搶劫前置任務","job_type_king_of_the_hill":"山頭之王","job_type_land_race":"陸上競速","job_type_last_team_standing":"團隊生存遊戲","job_type_mission":"任務","job_type_mission_creator":"任務製作器","job_type_open_wheel_race":"開輪式競速","job_type_parachuting":"跳傘活動","job_type_pursuit_race":"追緝競速","job_type_race":"競速","job_type_random_mission":"隨機任務","job_type_special_race":"特殊載具競速","job_type_street_race":"街頭競速","job_type_stunt_race":"特技競速","job_type_survival":"生存戰","job_type_target":"射靶競速","job_type_team_deathmatch":"團隊死鬥遊戲","job_type_team_king_of_the_hill":"團隊山頭之王","job_type_transform_race":"變形狂飆競速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"載具死鬥遊戲","job_type_water_race":"水上競速","lightbox_close_button":"關閉","login_dialog_body":"您需要先登入才能進行操作","login_dialog_signin_button":"登入","login_dialog_signup_button":"註冊","login_dialog_title":"必須登入","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details_amp":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details_amp":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱","share_close":"關閉","share_copied_to_clipboard":"已複製連結","share_copy_to_clipboard":"複製連結至剪貼簿","share_heading":"分享","share_share_to_facebook":"分享至 Facebook","share_share_to_reddit":"分享至 Reddit","share_share_to_twitter":"分享至 X","web_offer_claim_dialog_close":"關閉","web_offer_claim_error_state_button":"再試一次","web_offer_claim_error_state_icon_label":"錯誤圖示","web_offer_claim_exists_state_icon_label":"成功圖示","web_offer_claim_link_account_state_icon_label":"錯誤圖示","web_offer_claim_loading_state":"正在載入","web_offer_claim_success_state_icon_label":"成功圖示"}}'),
        ee = e => {
          if (!e) return null;
          try {
            return new URL(e, window.location.origin)
          } catch {
            return null
          }
        },
        te = (e, t) => {
          if (!e) return "";
          const a = ee(e);
          return a ? (new URLSearchParams(t).forEach((e, t) => {
            a.searchParams.has(t) || a.searchParams.set(t, e)
          }), `${a.pathname}${a.search}${a.hash}`) : e
        },
        ae = ({
          block: e,
          size: t = "MD",
          backgroundColor: a,
          asChild: n,
          ...s
        }) => {
          const i = (0, _.useLocation)(),
            [, l] = (0, _.useSearchParams)(),
            {
              trackEvent: d
            } = q(),
            u = e?.link?.url ?? "",
            m = (0, o.useMemo)(() => ((e, t) => {
              const a = ee(e);
              if (!a) return {
                mode: "link",
                href: e,
                viewParam: ""
              };
              const r = a.searchParams.get("view") ?? "",
                o = r ? "bottom-sheet" : "link";
              return {
                mode: o,
                href: "bottom-sheet" === o ? te(e, t) : e,
                viewParam: r
              }
            })(u, i.search), [u, i.search]),
            g = "bottom-sheet" === m.mode,
            p = m.href,
            f = m.viewParam,
            h = e?.openInNewTab ? "_blank" : "_self";
          if (!e) return null;
          const y = e => {
              d({
                event: "cta_other",
                text: e.text?.toLowerCase(),
                link_url: p,
                ...e.analyticsData
              }, e)
            },
            k = (0, w.v6)({
              size: t,
              appearance: e?.appearance,
              iconLeft: e?.iconLeft?.icon,
              iconRight: e?.iconRight?.icon,
              onPress: g ? () => {
                g && g && f && l(e => {
                  const t = new URLSearchParams(e);
                  return t.set("view", f), t
                }, {
                  replace: !0
                }), y(e)
              } : () => y(e),
              override_backgroundColor: e?.backgroundColor ?? a,
              asChild: !g
            }, s);
          return n ? (0, r.jsx)(x.N, {
            href: p,
            target: h,
            children: (0, r.jsx)(b.DX, {
              ...s
            })
          }) : (0, r.jsx)(c.Button, {
            ...k,
            children: g ? e.text : (0, r.jsx)(x.N, {
              href: p,
              target: h,
              children: e.text
            })
          })
        },
        re = e => e.endsWith(".svg") || e.endsWith(".gif"),
        oe = [320, 400, 480, 620, 768, 900, 1024, 1280, 1440, 1640, 1920, 2e3, 2560, 3840],
        ne = (e, t = oe, a = {}) => {
          const r = Math.min(4e3, a.maxWidth ?? 1 / 0);
          return t.filter(e => e <= r).map(t => {
            const r = ((e, t = {}) => {
              if (!e.startsWith("http")) return e;
              const a = new URL(e);
              return a.pathname.endsWith(".svg") ? e : (t.width && a.searchParams.set("w", String(t.width)), t.height && a.searchParams.set("h", String(t.height)), t.quality && a.searchParams.set("q", String(t.quality)), t.format && a.searchParams.set("fm", String(t.format)), t.fit && a.searchParams.set("fit", String(t.fit)), a.toString())
            })(e, {
              ...a,
              width: t
            });
            return {
              url: r,
              width: t
            }
          })
        },
        se = e => 0 === e ? "primary" : 1 === e ? "secondary" : "tertiary",
        ie = {
          tabletSmall: {
            primary: "16:9",
            secondary: "3:1",
            tertiary: "4:3"
          },
          tabletMedium: {
            primary: "4:5",
            secondary: "3:1",
            tertiary: "1:1"
          },
          tabletLarge: {
            primary: "4:5",
            secondary: "3:1",
            tertiary: "1:1"
          },
          desktopSmallAndLarger: {
            primary: "4:5",
            secondary: "3:1",
            tertiary: "1:1"
          }
        };
      new Map([
        ["mobile", C.f.mobile],
        ["mobile_small", C.f.mobileSmall],
        ["mobile_medium", C.f.mobileMedium],
        ["tablet_small", C.f.tabletSmall],
        ["tablet_medium", C.f.tabletMedium],
        ["tablet_small_and_medium", C.f.tabletSmallAndMedium],
        ["tablet_large", C.f.tabletLarge],
        ["tablet_medium_and_large", C.f.tabletMediumAndLarge],
        ["tablet", C.f.tablet],
        ["desktop", C.f.desktop],
        ["desktop_small", C.f.desktopSmall],
        ["desktop_medium", C.f.desktopMedium],
        ["tablet_and_desktop", C.f.tabletAndDesktop],
        ["mobile_medium_and_larger", C.f.mobileMediumAndLarger],
        ["tablet_small_and_larger", C.f.tabletSmallAndLarger],
        ["tablet_medium_and_larger", C.f.tabletMediumAndLarger],
        ["tablet_medium_and_smaller", C.f.tabletMediumAndSmaller],
        ["tablet_large_and_larger", C.f.tabletLargeAndLarger],
        ["tablet_large_and_smaller", C.f.tabletLargeAndSmaller],
        ["desktop_small_and_larger", C.f.desktopSmallAndLarger],
        ["desktop_medium_and_larger", C.f.desktopMediumAndLarger],
        ["desktop_large_and_larger", C.f.desktopLargeAndLarger],
        ["portrait", C.f.portrait],
        ["landscape", C.f.landscape],
        ["mobile_landscape", C.f.mobileLandscape]
      ]);
      var le = a(52514),
        ce = "var(--_1dbiq9u0)";
      const de = [{
          media: "(max-width: 480px)",
          slot: "100vw"
        }, {
          media: "(max-width: 768px)",
          slot: "100vw"
        }, {
          media: "(max-width: 900px)",
          slot: "90vw"
        }, {
          media: "(max-width: 1024px)",
          slot: "90vw"
        }, {
          media: "(max-width: 1280px)",
          slot: "1280px"
        }, {
          media: "(max-width: 1440px)",
          slot: "1440px"
        }, {
          media: "(max-width: 1640px)",
          slot: "1640px"
        }, {
          media: "(max-width: 1920px)",
          slot: "1920px"
        }, {
          media: "(max-width: 2000px)",
          slot: "2000px"
        }, {
          media: "(max-width: 2560px)",
          slot: "2560px"
        }, {
          slot: "3840px"
        }],
        _e = (0, o.forwardRef)(function({
          src: e,
          width: t,
          height: a,
          testId: n,
          style: s,
          aspectRatio: i,
          ...l
        }, c) {
          const [d, _] = (0, o.useState)(!1), u = (0, o.useRef)(null), m = (0, le.UP)(u, c);
          (0, o.useEffect)(() => {
            if (!u.current) return;
            if ("loading" in HTMLImageElement.prototype) return void _(!0);
            const e = new IntersectionObserver((e, t) => {
              e.some(e => e.isIntersecting) && (_(!0), t.disconnect())
            }, {
              rootMargin: "200px"
            });
            return e.observe(u.current), () => {
              e.disconnect()
            }
          }, [u.current]);
          const b = (0, o.useMemo)(() => {
            const r = !e || !re(e),
              o = r ? (e => {
                if (!Array.isArray(e) || 0 === e.length) return "100vw";
                const t = e.filter(e => e?.slot).map(e => e.media ? `${e.media} ${e.slot}` : e.slot);
                return [...t.filter(e => e.includes("max-width")), t.find(e => !e.includes("max-width")) ?? "100vw"].join(", ")
              })(de) : void 0,
              c = i ?? `${t||1} / ${a||1}`,
              _ = (0, j.DI)({
                [ce]: c
              });
            return (0, w.v6)({
              "data-testid": n,
              srcSet: d && r ? ne(e)?.map(e => `${e.url} ${e.width}w`).join(", ") : void 0,
              src: e,
              sizes: d && r ? o : void 0,
              className: "_1dbiq9u1",
              loading: "lazy",
              decoding: "async",
              width: t,
              height: a,
              style: {
                ..._,
                ...s
              }
            }, l)
          }, [n, e, l, d]);
          return d ? (0, r.jsx)("img", {
            ref: m,
            ...b
          }) : (0, r.jsx)("div", {
            ref: m
          })
        }),
        ue = (0, o.forwardRef)(function({
          src: e,
          className: t,
          loading: a = "lazy",
          testId: o,
          ...n
        }, s) {
          if (!e.source?.url || !e.source?.height || !e.source?.width) return null;
          const i = (0, l.getOptimizedImage)({
            src: e.source.url,
            originalSize: {
              height: e.source.height,
              width: e.source.width
            },
            options: {
              preferModernFormat: !0
            }
          });
          if (!i?.url) return null;
          const c = (0, w.v6)({
            "data-testid": o,
            alt: i.alt,
            src: i.url,
            width: i.width,
            height: i.height,
            loading: a,
            className: t
          }, n);
          return (0, r.jsx)(_e, {
            ref: s,
            ...c
          })
        }),
        me = "RsgImageFile",
        be = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const n = (0, w.v6)(a, {
            "data-testid": t
          });
          return (0, r.jsx)("picture", {
            ...n,
            ref: o,
            children: e
          })
        }),
        ge = ({
          testId: e,
          src: t,
          ...a
        }) => {
          const o = (0, w.v6)(a, {
            "data-testid": e,
            srcSet: re(t) ? t : ne(t)?.map(e => `${e.url} ${e.width}w`).join(", ")
          });
          return (0, r.jsx)("source", {
            ...o
          })
        },
        pe = (0, o.forwardRef)(function({
          testId: e,
          src: t,
          ...a
        }, n) {
          const s = (0, w.v6)(a, {
              "data-testid": e
            }),
            i = (0, o.useRef)(null),
            l = (0, le.UP)(i, n);
          return (0, o.useEffect)(() => {
            i?.current && (re(t) ? i.current.src = t : i.current.srcset = ne(t)?.map(e => `${e.url} ${e.width}w`).join(", "))
          }, []), (0, r.jsx)("img", {
            className: "_1fbh3900",
            ref: l,
            ...s
          })
        }),
        fe = new Map([
          ["mobile", C.f.mobile],
          ["mobile_small", C.f.mobileSmall],
          ["mobile_medium", C.f.mobileMedium],
          ["tablet_small", C.f.tabletSmall],
          ["tablet_medium", C.f.tabletMedium],
          ["tablet_small_and_medium", C.f.tabletSmallAndMedium],
          ["tablet_large", C.f.tabletLarge],
          ["tablet_medium_and_large", C.f.tabletMediumAndLarge],
          ["tablet", C.f.tablet],
          ["desktop", C.f.desktop],
          ["desktop_small", C.f.desktopSmall],
          ["desktop_medium", C.f.desktopMedium],
          ["tablet_and_desktop", C.f.tabletAndDesktop],
          ["mobile_medium_and_larger", C.f.mobileMediumAndLarger],
          ["tablet_small_and_larger", C.f.tabletSmallAndLarger],
          ["tablet_medium_and_larger", C.f.tabletMediumAndLarger],
          ["tablet_medium_and_smaller", C.f.tabletMediumAndSmaller],
          ["tablet_large_and_larger", C.f.tabletLargeAndLarger],
          ["tablet_large_and_smaller", C.f.tabletLargeAndSmaller],
          ["desktop_small_and_larger", C.f.desktopSmallAndLarger],
          ["desktop_medium_and_larger", C.f.desktopMediumAndLarger],
          ["desktop_large_and_larger", C.f.desktopLargeAndLarger],
          ["portrait", C.f.portrait],
          ["landscape", C.f.landscape],
          ["mobile_landscape", C.f.mobileLandscape]
        ]),
        he = e => {
          for (const [t] of fe) {
            const a = e?.find(e => e === t);
            if (a) return a
          }
        },
        ye = "RsgImage";
      var ke = "var(--dhgwc10)";
      const ve = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "dhgwc11 _1betujy6 _1betujy5"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        xe = (0, o.forwardRef)(function({
          backgroundColor: e = "transparent",
          children: t,
          testId: a,
          asChild: o,
          altText: n,
          ...s
        }, i) {
          const l = o ? b.DX : "a",
            c = (0, w.v6)({
              "data-testid": a,
              className: "dhgwc12",
              "aria-label": n,
              style: (0, j.DI)({
                [ke]: e
              })
            }, s);
          return (0, r.jsx)(l, {
            ref: i,
            ...c,
            children: t
          })
        }),
        je = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          src: o,
          ...n
        }, s) {
          const i = a ? b.DX : "div",
            l = (0, w.v6)({
              "data-testid": t,
              className: "dhgwc13",
              style: {
                backgroundImage: `url(${o})`
              }
            }, n);
          return (0, r.jsx)(i, {
            ref: s,
            ...l,
            children: e
          })
        }),
        we = (0, o.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const o = (0, w.v6)({
            src: e,
            className: "dhgwc14"
          }, t);
          return (0, r.jsx)(ue, {
            ref: a,
            ...o
          })
        }),
        Ce = "WwwBanner";
      var Re = (0, R.c)({
          defaultClassName: "tvfngv3",
          variantClassNames: {
            size: {
              XS: "tvfngv4",
              SM: "tvfngv5",
              MD: "tvfngv6"
            },
            state: {
              selected: "tvfngv7",
              unselected: "tvfngv8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Se = "tvfngv9";
      const Ne = (0, o.createContext)({
          totalPages: 0,
          currentPage: 0,
          showNavButtons: !1,
          nextButtonDisable: !1,
          prevButtonDisable: !1
        }),
        Ie = (0, o.forwardRef)(function({
          asChild: e,
          children: t,
          totalPages: a,
          currentPage: n,
          showNavButtons: s = !0,
          ...i
        }, l) {
          const c = e ? b.DX : "div",
            d = (0, o.useMemo)(() => 0 === n, [n]),
            _ = (0, o.useMemo)(() => n === a - 1, [n, a]),
            u = (0, o.useMemo)(() => ((e, t) => t < 6 || e < 3 ? 0 : e >= t - 2 ? t - 5 : e - 2)(n, a), [n, a]),
            m = (0, w.v6)({
              className: "tvfngv0",
              style: {
                "--dot-navigation-total-pages": a,
                "--dot-navigation-current-page": n,
                "--dot-navigation-offset": u
              },
              "data-testid": "dot-navigation"
            }, i);
          return a <= 1 ? null : (0, r.jsx)(Ne.Provider, {
            value: {
              totalPages: a,
              currentPage: n,
              showNavButtons: s,
              nextButtonDisable: _,
              prevButtonDisable: d
            },
            children: (0, r.jsx)(c, {
              ref: l,
              ...m,
              children: t
            })
          })
        }),
        Ae = (0, o.forwardRef)(function({
          dotOnPress: e = () => {},
          ...t
        }, a) {
          const {
            totalPages: n
          } = (0, o.useContext)(Ne), s = (0, w.v6)({
            className: "tvfngv1",
            "data-testid": "dot-track"
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...s,
            children: (0, r.jsx)("nav", {
              className: "tvfngv2",
              "data-testid": "dot-mask",
              children: Array.from({
                length: n
              }).map((t, a) => (0, r.jsx)(Me, {
                index: a,
                dotOnPress: () => e(a)
              }, a))
            })
          })
        }),
        Me = (0, o.forwardRef)(function({
          index: e,
          dotOnPress: t = () => {},
          ...a
        }, n) {
          const {
            totalPages: s,
            currentPage: i
          } = (0, o.useContext)(Ne), l = (0, o.useCallback)(() => t(), [t]), {
            dotState: c,
            tabIndex: d,
            dotSize: _
          } = (({
            currentPage: e,
            index: t,
            totalPages: a
          }) => ({
            dotState: (0, o.useMemo)(() => e === t ? "selected" : "unselected", [e, t]),
            tabIndex: (0, o.useMemo)(() => ((e, t, a) => {
              if (a < 6) return 0;
              const r = a - 3;
              if (t >= 2 && t <= r) {
                if (e < t - 2) return -1;
                if (e > t + 2) return -1
              } else {
                if (t < 2 && e > 4) return -1;
                if (t > r && e < a - 5) return -1
              }
              return 0
            })(t, e, a), [e, a, t]),
            dotSize: (0, o.useMemo)(() => ((e, t, a) => {
              if (a < 6) return "MD";
              const r = a - 2,
                o = a - 3;
              if (e === t) return "MD";
              if (e === a - 1 || 0 === e) return "MD";
              if (6 === a) {
                if (t <= 2) return e === r ? "SM" : "MD";
                if (t >= o) return 1 === e ? "SM" : "MD"
              }
              if (t <= 2) {
                if (e <= 2) return "MD";
                if (3 === e) return "SM"
              }
              if (t >= o) {
                if (e >= o) return "MD";
                if (e === a - 4) return "SM"
              }
              return 1 === e || e === r || 1 === Math.abs(e - t) ? "SM" : "XS"
            })(t, e, a), [t, e, a])
          }))({
            currentPage: i,
            index: e,
            totalPages: s
          }), u = (0, o.useRef)(null), {
            buttonProps: m
          } = (0, le.sL)((0, w.v6)(a, {
            onPress: l
          }), u), b = (0, w.v6)(m, {
            tabIndex: d,
            className: Re({
              size: _,
              state: c
            }),
            "aria-current": "selected" === c,
            "data-testid": "dot-navigation-dot"
          });
          return (0, r.jsx)("button", {
            ref: n,
            ...b
          })
        }),
        Ee = (0, o.forwardRef)(function({
          label: e,
          onPress: t,
          ...a
        }, n) {
          const {
            showNavButtons: s,
            nextButtonDisable: i
          } = (0, o.useContext)(Ne), l = (0, w.v6)({
            className: Se,
            size: "SM",
            appearance: "ghost",
            icon: "ChevronRight",
            label: e,
            isDisabled: i,
            onPress: t,
            "data-testid": "dot-navigation-next"
          }, a);
          return s && (0, r.jsx)(c.IconButton, {
            ref: n,
            ...l
          })
        }),
        Te = (0, o.forwardRef)(function({
          label: e,
          onPress: t,
          ...a
        }, n) {
          const {
            showNavButtons: s,
            prevButtonDisable: i
          } = (0, o.useContext)(Ne), l = (0, w.v6)({
            className: Se,
            size: "SM",
            appearance: "ghost",
            icon: "ChevronLeft",
            label: e,
            isDisabled: i,
            onPress: t,
            "data-testid": "dot-navigation-prev"
          }, a);
          return s && (0, r.jsx)(c.IconButton, {
            ref: n,
            ...l
          })
        });
      var ze = a(64634),
        Pe = a(64010),
        Fe = a(34708);
      const De = (0, i.defineMessages)({
        carousel_next_button: {
          id: "carousel_next_button",
          description: "The label for the next button.",
          defaultMessage: "Next"
        },
        carousel_prev_button: {
          id: "carousel_prev_button",
          description: "The label for the previous button.",
          defaultMessage: "Previous"
        }
      });
      var Le = (0, R.c)({
          defaultClassName: "lwwe80a",
          variantClassNames: {
            variant: {
              small: "lwwe80b",
              medium: "lwwe80c",
              full: "lwwe80d",
              grid: "lwwe80e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ge = (0, R.c)({
          defaultClassName: "lwwe803",
          variantClassNames: {
            isInGrid: {
              false: "lwwe804",
              true: "lwwe805"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        We = "_1betujy6 _1betujy5",
        qe = (0, R.c)({
          defaultClassName: "lwwe80j",
          variantClassNames: {
            visible: {
              true: "lwwe80k",
              false: "lwwe80l"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Be = (0, o.createContext)({
          defaultSlide: 0,
          embla: void 0,
          controlsVisible: !1,
          prevButtonDisabled: !1,
          nextButtonDisabled: !1,
          onPrevButtonClick: null,
          onNextButtonClick: null,
          navigationRef: (0, o.createRef)(),
          viewportRef: void 0,
          navStyle: "arrows",
          activeIndex: 0,
          totalPages: 0,
          isInGrid: !1
        }),
        Ve = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          defaultSlide: n = 0,
          onNext: s,
          onPrev: i,
          onSwipe: l,
          navStyle: c = "arrows",
          isInGrid: d = !1,
          ..._
        }, u) {
          const {
            navigationRef: m
          } = (0, o.useContext)(Be), {
            embla: g,
            viewportRef: p,
            controlsVisible: f,
            prevButtonDisabled: h,
            nextButtonDisabled: y,
            onPrevButtonClick: k,
            onNextButtonClick: v,
            activeIndex: x,
            totalPages: j
          } = (({
            defaultSlide: e,
            onNext: t,
            onPrev: a,
            onSwipe: r
          }) => {
            const [n, s] = (0, o.useState)(!0), [i, l] = (0, o.useState)(!0), [c, d] = (0, o.useState)(e), [_, u] = (0, o.useState)(e), [m, b] = (0, o.useState)(!1), g = {
              axis: "x",
              align: "start",
              startIndex: e,
              active: !0,
              containScroll: "trimSnaps",
              loop: !1,
              skipSnaps: !0,
              inViewThreshold: .9
            }, [p, f] = (0, ze.A)(g, [(0, Pe.J)()]), h = (0, o.useCallback)(() => {
              f && (f.scrollPrev(), a?.())
            }, [f]), y = (0, o.useCallback)(() => {
              f && (f.scrollNext(), t?.())
            }, [f]), k = (0, o.useCallback)(() => {
              f && (s(!f.canScrollPrev()), l(!f.canScrollNext()), d(f.selectedScrollSnap()), u(f?.scrollSnapList().length))
            }, [f]), v = () => {
              if (!f) return;
              const e = f.internalEngine().scrollSnaps.length > 1;
              b(e), f.reInit({
                active: e
              })
            };
            return (0, o.useEffect)(() => {
              if (!f) return;
              k(), f.on("reInit", k).on("select", k);
              const e = (0, Fe.A)(v, 25);
              return window.addEventListener("resize", e), v(), () => {
                window.removeEventListener("resize", e)
              }
            }, [f, k]), (0, o.useEffect)(() => {
              if (!f) return;
              let e = 0;
              const t = () => {
                  e = f.selectedScrollSnap()
                },
                a = () => {
                  const t = f.selectedScrollSnap();
                  e !== t && r?.()
                };
              return f.on("pointerDown", t), f.on("pointerUp", a), () => {
                f.off("pointerDown", t), f.off("pointerUp", a)
              }
            }, [f]), (0, o.useEffect)(() => {
              if (!f) return;
              const e = e => {
                  e?.canScrollNext() || e?.canScrollPrev() ? e.reInit({
                    ...g,
                    watchDrag: !0
                  }) : e.reInit({
                    ...g,
                    watchDrag: !1
                  }), u(f?.scrollSnapList().length)
                },
                t = t => {
                  v(), e(t), u(f?.scrollSnapList().length)
                };
              return f?.on("init", e), f?.on("resize", e), f?.on("slidesChanged", t), () => {
                f?.off("init", e), f?.off("resize", e), f?.off("slidesChanged", t)
              }
            }, [f]), {
              embla: f,
              controlsVisible: m,
              prevButtonDisabled: n,
              nextButtonDisabled: i,
              onPrevButtonClick: h,
              onNextButtonClick: y,
              viewportRef: p,
              activeIndex: c ?? 0,
              totalPages: _ ?? 0
            }
          })({
            defaultSlide: n,
            onNext: s,
            onPrev: i,
            onSwipe: l
          }), C = a ? b.DX : "div", R = (0, w.v6)({
            "data-testid": t,
            className: "lwwe800"
          }, _);
          return (0, r.jsx)(Be.Provider, {
            value: {
              embla: g,
              defaultSlide: n,
              navigationRef: m,
              controlsVisible: f,
              prevButtonDisabled: h,
              nextButtonDisabled: y,
              onPrevButtonClick: k,
              onNextButtonClick: v,
              viewportRef: p,
              navStyle: c,
              activeIndex: x,
              totalPages: j,
              isInGrid: d
            },
            children: (0, r.jsx)(C, {
              ref: u,
              ...R,
              children: (0, r.jsx)(b.xV, {
                children: e
              })
            })
          })
        }),
        Oe = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const {
            isInGrid: i
          } = (0, o.useContext)(Be), l = a ? b.DX : "div", c = (0, w.v6)(n, {
            "data-testid": t,
            className: i ? "" : We
          });
          return (0, r.jsx)(l, {
            ref: s,
            ...c,
            children: e
          })
        }),
        $e = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const n = (0, w.v6)(a, {
            "data-testid": t,
            className: "lwwe801"
          });
          return (0, r.jsx)(c.Heading, {
            ref: o,
            ...n,
            children: e
          })
        }),
        Xe = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const {
            viewportRef: s,
            isInGrid: i
          } = (0, o.useContext)(Be), l = (0, w.v6)({
            "data-testid": t,
            className: i ? "" : We
          }, a);
          return (0, r.jsx)("div", {
            ref: n,
            ...l,
            children: (0, r.jsx)("div", {
              ref: s,
              className: "lwwe802",
              children: (0, r.jsx)("div", {
                className: Ge({
                  isInGrid: i
                }),
                children: e
              })
            })
          })
        }),
        Ue = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, o) {
          const n = t ? b.DX : "div",
            s = (0, w.v6)({
              className: "lwwe809",
              tabIndex: -1
            }, a);
          return (0, r.jsx)(n, {
            ref: o,
            ...s,
            children: (0, r.jsx)("div", {
              className: "lwwe806",
              children: e
            })
          })
        }),
        He = (0, o.forwardRef)(function({
          children: e,
          variant: t = "small",
          testId: a,
          ...o
        }, n) {
          const s = (0, w.v6)({
            "data-testid": a,
            className: Le({
              variant: t
            })
          }, o);
          return (0, r.jsx)("div", {
            ref: n,
            ...s,
            children: e
          })
        }),
        Ke = (0, o.forwardRef)(function({
          override_textColor: e,
          override_backgroundColor: t,
          appearance: a,
          size: n,
          testId: s,
          asChild: l,
          ...d
        }, _) {
          const {
            controlsVisible: u,
            onPrevButtonClick: m,
            onNextButtonClick: g,
            prevButtonDisabled: p,
            nextButtonDisabled: f,
            navStyle: h
          } = (0, o.useContext)(Be), {
            formatMessage: y
          } = (0, i.useIntl)();
          if ("arrows" !== h) return;
          const k = l ? b.DX : "div",
            v = (0, w.v6)({
              className: qe({
                visible: u
              }),
              "data-testid": s
            }, d);
          return (0, r.jsxs)(k, {
            ref: _,
            ...v,
            children: [(0, r.jsx)(c.IconButton, {
              size: n,
              icon: "ArrowLeft",
              appearance: a,
              onClick: m,
              label: y(De.carousel_prev_button),
              override_backgroundColor: t,
              override_textColor: e,
              isDisabled: p
            }), (0, r.jsx)(c.IconButton, {
              size: n,
              icon: "ArrowRight",
              appearance: a,
              onClick: g,
              label: y(De.carousel_next_button),
              override_backgroundColor: t,
              override_textColor: e,
              isDisabled: f
            })]
          })
        }),
        Ye = {
          Dots: (0, o.forwardRef)(function({
            ...e
          }, t) {
            const {
              formatMessage: a
            } = (0, i.useIntl)(), {
              embla: n,
              onPrevButtonClick: s,
              onNextButtonClick: l,
              controlsVisible: c,
              navStyle: d,
              activeIndex: _,
              totalPages: u
            } = (0, o.useContext)(Be);
            if (!c || "dots" != d) return null;
            const m = (0, w.v6)({
              className: "lwwe80m",
              totalPages: u,
              currentPage: _
            }, e);
            return (0, r.jsx)("div", {
              className: "_1betujy6 _1betujy5",
              children: (0, r.jsxs)(Ie, {
                ref: t,
                ...m,
                children: [(0, r.jsx)(Te, {
                  label: a(De.carousel_prev_button),
                  onClick: s
                }), (0, r.jsx)(Ae, {
                  dotOnPress: e => {
                    n?.scrollTo(e)
                  }
                }), (0, r.jsx)(Ee, {
                  label: a(De.carousel_next_button),
                  onClick: l
                })]
              })
            })
          }),
          Arrows: Ke
        },
        Ze = (0, o.createContext)({
          totalItems: 0,
          itemIndex: 0
        }),
        Je = "WwwDeck",
        Qe = (0, i.defineMessages)({
          decorative_video_play_button_label: {
            id: "decorative_video_play_button_label",
            description: "Decorative video play button label",
            defaultMessage: "Play"
          },
          decorative_video_pause_button_label: {
            id: "decorative_video_pause_button_label",
            description: "Decorative video pause button label",
            defaultMessage: "Pause"
          },
          decorative_video_replay_button_label: {
            id: "decorative_video_replay_button_label",
            description: "Decorative video replay button label",
            defaultMessage: "Replay"
          }
        });
      var et = "_197irmi6",
        tt = (0, R.c)({
          defaultClassName: "_197irmi1",
          variantClassNames: {
            landscapeViewportBehavior: {
              full_height: "_197irmi2",
              retain_aspect_ratio: "_197irmi3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        at = "var(--_197irmi0)";
      const rt = () => {
          const e = (0, o.useContext)(ot);
          if (!e) throw new Error("useDecorativeVideoContext must be used within VideoProvider");
          return e
        },
        ot = (0, o.createContext)({
          landscapeViewportBehavior: "retain_aspect_ratio",
          scrimColor: void 0,
          reducedMotion: window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          isPlaying: !1,
          setIsPlaying: () => {},
          error: !1,
          playOnce: !1,
          hasEnded: !1,
          setHasEnded: () => {},
          setError: () => {},
          videoRef: null,
          lastPlayingRef: null,
          bgImageRef: null
        }),
        nt = (0, o.forwardRef)(function({
          landscapeViewportBehavior: e,
          scrimColor: t,
          reducedMotion: a,
          playOnce: n,
          children: s,
          asChild: i,
          ...l
        }, c) {
          const [d, _] = (0, o.useState)(!a), [u, m] = (0, o.useState)(!1), [g, p] = (0, o.useState)(!1), f = (0, o.useRef)(null), h = (0, o.useRef)(!1), y = (0, o.useRef)(null), k = (0, w.v6)({
            className: tt({
              landscapeViewportBehavior: e
            })
          }, l), v = i ? b.DX : "div";
          return (0, r.jsx)(ot.Provider, {
            value: {
              landscapeViewportBehavior: e,
              scrimColor: t,
              videoRef: f,
              lastPlayingRef: h,
              bgImageRef: y,
              isPlaying: d,
              playOnce: n,
              hasEnded: u,
              setHasEnded: m,
              reducedMotion: a,
              setIsPlaying: _,
              error: g,
              setError: p
            },
            children: (0, r.jsx)(v, {
              ref: c,
              ...k,
              children: s
            })
          })
        }),
        st = (0, o.forwardRef)(function({
          onToggle: e,
          ...t
        }, a) {
          const {
            formatMessage: n
          } = (0, i.useIntl)(), {
            isPlaying: s,
            setIsPlaying: l,
            videoRef: d,
            lastPlayingRef: _,
            error: u,
            playOnce: m,
            hasEnded: b,
            setHasEnded: g,
            setError: p,
            reducedMotion: f
          } = rt(), [h, y] = (0, o.useState)("Pause"), k = (!m || !b) && _.current;
          (0, o.useEffect)(() => {
            y(s || k ? "Pause" : m && b ? "Replay" : "Play")
          }, [k, s, m, b]);
          const v = (0, o.useMemo)(() => n(m && b ? Qe.decorative_video_replay_button_label : k ? Qe.decorative_video_pause_button_label : Qe.decorative_video_play_button_label), [m, b]),
            x = (0, w.v6)({
              className: "_197irmi5",
              label: v,
              "aria-label": n(s ? Qe.decorative_video_play_button_label : Qe.decorative_video_pause_button_label)
            }, t);
          return f || u ? null : (0, r.jsx)(c.IconButton, {
            ref: a,
            ...x,
            icon: h,
            size: "SM",
            onPress: async () => {
              e?.(!s);
              const t = d.current;
              if (t)
                if (m && b) try {
                    g(!1), t.currentTime = 0, await t.play(), l(!0), _.current = !0
                  } catch {
                    p(!0), l(!1), _.current = !1
                  } else if (s || k) t?.pause(), l(!1), _.current = !1;
                  else try {
                    await (t?.play()), l(!0), _.current = !0
                  } catch {
                    p(!0), l(!1), _.current = !1
                  }
            }
          })
        }),
        it = (0, o.forwardRef)(function({
          src: e,
          poster: t,
          altText: a,
          autoPlay: n,
          muted: s,
          asChild: i,
          testId: l,
          ...c
        }, d) {
          const {
            videoRef: _,
            reducedMotion: u,
            lastPlayingRef: m,
            playOnce: g,
            setIsPlaying: p,
            error: f,
            setError: h,
            setHasEnded: y
          } = rt(), k = i ? b.DX : "div", v = (0, w.v6)({
            "data-testid": l
          }, c);
          return (0, o.useEffect)(() => {
            const t = _.current;
            if (!t || !e || u) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                p(!0), y(!1), m.current = !0
              },
              o = () => {
                t.paused || (p(!1), m.current = !1)
              },
              n = () => {
                console.warn("Play request interrupted :", t.error), h(!0), p(!1), m.current = !1
              },
              s = () => {
                p(!1), m.current = !1, y(!0)
              },
              i = () => {
                console.warn("Video failed to load sources."), h(!0), p(!1), m.current = !1
              };
            return t.addEventListener("play", r), t.addEventListener("pause", o), t.addEventListener("error", n), t.addEventListener("ended", s), a && a.addEventListener("error", i), () => {
              t.removeEventListener("play", r), t.removeEventListener("pause", o), t.removeEventListener("error", n), t.removeEventListener("ended", s), a && a.removeEventListener("error", i)
            }
          }, [_, e, u, p, h, y, m.current]), (() => {
            const {
              videoRef: e,
              lastPlayingRef: t,
              setIsPlaying: a,
              playOnce: r,
              hasEnded: n
            } = rt();
            (0, o.useEffect)(() => {
              const o = async () => {
                const o = e.current;
                if (o)
                  if (document.hidden) t.current = !o.paused && !n, o.paused || (o.pause(), a(!1));
                  else if (t.current && !n && o.paused && o.muted && (!r || !n)) try {
                  await o.play(), a(!0), t.current = !0
                } catch {
                  a(!1), t.current = !1
                }
              };
              return document.addEventListener("visibilitychange", o), () => document.removeEventListener("visibilitychange", o)
            }, [e, a, r, n, t])
          })(), ((e = 0) => {
            const {
              videoRef: t,
              lastPlayingRef: a,
              setIsPlaying: r,
              playOnce: n,
              hasEnded: s
            } = rt();
            (0, o.useEffect)(() => {
              const o = t.current;
              if (!o) return;
              const i = new IntersectionObserver(async e => {
                if (e[0].isIntersecting) {
                  if (a.current && !s && o.paused && o.muted && (!n || !s)) try {
                    await o.play(), r(!0), a.current = !0
                  } catch {
                    r(!1), a.current = !1
                  }
                } else a.current = !o.paused && !s, o.paused || (o.pause(), r(!1))
              }, {
                threshold: e
              });
              return i.observe(o), () => i.disconnect()
            }, [t, r, e, n, s, a])
          })(0), (0, r.jsx)(k, {
            ref: d,
            ...v,
            children: f || u || !e ? (0, r.jsx)("img", {
              "data-testid": "decorative-video-fallback",
              alt: a,
              src: t,
              className: et
            }) : (0, r.jsx)("video", {
              ref: _,
              className: et,
              src: e,
              poster: t,
              autoPlay: n,
              muted: s,
              loop: !g,
              playsInline: !0,
              onError: () => h(!0),
              "aria-hidden": "true",
              tabIndex: -1
            })
          })
        }),
        lt = (0, o.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            scrimColor: o
          } = rt(), n = (0, w.v6)({
            className: "_197irmi4",
            style: (0, j.DI)({
              [at]: o ?? "unset"
            })
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...n,
            children: e
          })
        }),
        ct = "WwwDecorativeVideo";
      var dt = (0, R.c)({
        defaultClassName: "_1asiojt0",
        variantClassNames: {
          size: {
            dimensions_25: "_1asiojt1",
            dimensions_50: "_1asiojt2",
            dimensions_100: "_1asiojt3",
            dimensions_150: "_1asiojt4",
            dimensions_175: "_1asiojt5"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const _t = (0, o.forwardRef)(function({
          gradientStyle: e = "",
          thickness: t = "dimensions_25",
          ...a
        }, o) {
          return (0, r.jsx)("div", {
            className: dt({
              size: t
            }),
            style: {
              background: e
            },
            tabIndex: -1,
            ref: o,
            ...a
          })
        }),
        ut = "WwwDivider";
      var mt = a(11215);
      const bt = s.gql`
fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {
    id: id_hash
    url
    title
    created
    created_formatted
    primary_tags {
        id
        name
    }
    secondary_tags {
        id
        name
    }
    preview_images_parsed {
        newswire_block {
            square
            d16x9
            _fallback
        }
    }
}`,
        gt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          layout: a = "primary",
          aspect: o = "wide",
          transparent: n = !1,
          asChild: s,
          ...i
        }, l) {
          const c = s ? b.DX : "div",
            d = (0, w.v6)({
              className: "sp6aw70",
              "data-layout": a,
              "data-aspect": o,
              "data-transparent": !!n || void 0,
              "data-testid": t
            }, i);
          return (0, r.jsx)(c, {
            ref: l,
            ...d,
            children: e
          })
        }),
        pt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              className: "sp6aw71",
              "data-testid": t
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: (0, r.jsx)("div", {
              className: "sp6aw72",
              children: e
            })
          })
        }),
        ft = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              className: "sp6aw73",
              "data-testid": t
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        ht = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : c.Text,
            i = (0, w.v6)({
              className: "sp6aw75 sp6aw74",
              "data-testid": t
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        yt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : c.Heading,
            i = (0, w.v6)({
              className: "sp6aw76 sp6aw74",
              "data-testid": t
            }, o);
          return (0, r.jsx)(s, {
            level: 4,
            ref: n,
            ...i,
            children: e
          })
        }),
        kt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "time",
            i = (0, w.v6)({
              className: "sp6aw77 sp6aw74",
              "data-testid": t
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        vt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              className: "sp6aw78",
              "data-testid": t
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        xt = ({
          width: e = "100%",
          height: t = "100%"
        }) => (0, r.jsx)("div", {
          className: "_9c411v3 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e,
            height: t
          }
        }),
        jt = ({
          width: e = "100%"
        }) => (0, r.jsx)("span", {
          className: "_9c411v2 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e
          }
        });
      var wt = "_17xncyz0";
      const Ct = ({
          layout: e,
          aspect: t,
          transparent: a,
          testId: o
        }) => (0, r.jsxs)(gt, {
          className: wt,
          layout: e,
          aspect: t,
          transparent: a,
          testId: o,
          children: [(0, r.jsx)(pt, {
            children: (0, r.jsx)(xt, {
              width: "100%"
            })
          }), (0, r.jsxs)(ft, {
            children: [(0, r.jsx)(ht, {
              children: (0, r.jsx)(jt, {
                width: "30%"
              })
            }), (0, r.jsxs)(yt, {
              children: [(0, r.jsx)(jt, {}), (0, r.jsx)(jt, {})]
            }), (0, r.jsx)(kt, {
              children: (0, r.jsx)(jt, {
                width: "40%"
              })
            })]
          })]
        }),
        Rt = ({
          loading: e,
          data: t,
          id: a,
          aspect: o,
          layout: n,
          transparent: s,
          handleStoryClick: i,
          testId: l
        }) => {
          const c = t?.preview_images_parsed.newswire_block["square" === o ? "square" : "d16x9"],
            d = `${c}?im=Resize,width=${"primary"===n?1200:600}`;
          return e || !t ? (0, r.jsx)(Ct, {
            layout: n,
            aspect: o,
            testId: l
          }) : (0, r.jsx)(x.N, {
            className: "_17xncyz1",
            href: t.url,
            onClick: i,
            children: (0, r.jsxs)(gt, {
              className: wt,
              layout: n,
              aspect: o,
              transparent: s,
              testId: l,
              children: [(0, r.jsx)(pt, {
                children: (0, r.jsx)("img", {
                  src: d,
                  loading: "lazy"
                })
              }), (0, r.jsxs)(ft, {
                children: [(0, r.jsxs)(vt, {
                  children: [(0, r.jsx)(ht, {
                    children: t.primary_tags[0].name
                  }), (0, r.jsx)(yt, {
                    children: t.title
                  })]
                }), (0, r.jsx)(kt, {
                  dateTime: t.created,
                  children: t.created_formatted
                })]
              })]
            })
          })
        },
        St = s.gql`
fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {
    id: id_hash
    url
    title
    created
    created_formatted
    primary_tags {
        id
        name
    }
    secondary_tags {
        id
        name
    }
    preview_images_parsed {
        newswire_block {
            square
            d16x9
            _fallback
        }
    }
}`,
        Nt = "WwwEditorialPost",
        It = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        At = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = (0, le.Ub)(C.f.tabletMediumAndLarger),
            i = a ? b.DX : "div",
            l = (0, w.v6)({
              "data-testid": t
            }, o);
          return (0, r.jsx)(i, {
            ref: n,
            ...l,
            className: s ? "_1hb4ou60 _1betujy6 _1betujy5" : "",
            children: e
          })
        }),
        Mt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          onCarouselSwipe: n,
          ...s
        }, i) {
          const {
            viewportRef: l
          } = (({
            defaultSlide: e = 0,
            onCarouselSwipe: t
          }) => {
            const a = {
                axis: "x",
                align: "start",
                startIndex: e,
                active: !0,
                containScroll: "trimSnaps",
                loop: !1,
                skipSnaps: !0,
                inViewThreshold: .9
              },
              [r, n] = (0, ze.A)(a, [(0, Pe.J)()]);
            return (0, o.useEffect)(() => {
              if (!n) return;
              let e = 0;
              const a = () => {
                  e = n.selectedScrollSnap()
                },
                r = () => {
                  const a = n.selectedScrollSnap();
                  e !== a && t?.()
                };
              return n.on("pointerDown", a), n.on("pointerUp", r), () => {
                n.off("pointerDown", a), n.off("pointerUp", r)
              }
            }, [n]), {
              embla: n,
              viewportRef: r
            }
          })({
            defaultSlide: 0,
            onCarouselSwipe: n
          }), c = a ? b.DX : "div", d = (0, w.v6)({
            "data-testid": t,
            className: "_1hb4ou65"
          }, s);
          return (0, r.jsx)(c, {
            className: "_1hb4ou63",
            ref: i,
            children: (0, r.jsx)(Ve, {
              ref: l,
              ...d,
              children: (0, r.jsx)(Xe, {
                children: e
              })
            })
          })
        }),
        Et = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const n = (0, w.v6)({
            "data-testid": t
          }, a);
          return (0, r.jsx)(He, {
            ref: o,
            ...n,
            children: e
          })
        }),
        Tt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = (0, w.v6)({
              "data-testid": t,
              className: "_1hb4ou62"
            }, o),
            i = a ? b.DX : "div";
          return (0, r.jsx)(i, {
            ref: n,
            ...s,
            children: e
          })
        }),
        zt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = (0, w.v6)({
              "data-testid": t,
              className: "_1hb4ou64"
            }, o),
            i = a ? b.DX : "div";
          return (0, r.jsx)(i, {
            ref: n,
            ...s,
            children: e
          })
        }),
        Pt = "WwwEditorialGridModule",
        Ft = (0, i.defineMessages)({
          featured_game_breadcrumbs_parent_item: {
            id: "featured_game_breadcrumbs_parent_item",
            description: "Breadcrumbs parent page item label",
            defaultMessage: "Games"
          }
        });
      var Dt = a(81270),
        Lt = a(93529),
        Gt = a(99206),
        Wt = a(57978);
      Lt.os.registerPlugin(Wt.u);
      const qt = (0, o.forwardRef)(function({
          src: e,
          context: t,
          className: a,
          loading: o = "lazy",
          testId: n,
          ...s
        }, i) {
          if (!e) return null;
          const c = (0, l.getOptimizedRsgImage)(e, t, {
            preferModernFormat: !0
          });
          if (!c?.url) return null;
          const d = (0, w.v6)({
            "data-testid": n,
            alt: c.alt,
            src: c.url,
            width: c.width,
            height: c.height,
            loading: o,
            className: a
          }, s);
          return (0, r.jsx)(_e, {
            ref: i,
            ...d
          })
        }),
        Bt = (0, i.defineMessages)({
          hp_hero_play_button_label: {
            id: "hp_hero_play_button_label",
            description: "Featured Game hero play button label",
            defaultMessage: "Video Playing"
          },
          hp_hero_stop_button_label: {
            id: "hp_hero_stop_button_label",
            description: "Featured Game hero stop button label",
            defaultMessage: "Video Stopped"
          }
        });
      var Vt = "_1crroc53";
      const Ot = (0, o.createContext)({
          videoRef: null,
          bgImageRef: null,
          isPlaying: !1,
          isLooping: !1,
          reducedMotion: !1,
          setIsPlaying: () => {},
          videoError: !1,
          setVideoError: () => {}
        }),
        $t = () => {
          const e = (0, o.useContext)(Ot);
          if (!e) throw new Error("useHeroContext must be used within HeroProvider");
          return e
        },
        Xt = (0, o.forwardRef)(function({
          testId: e,
          children: t,
          asChild: a,
          isLooping: n = !1,
          ...s
        }, i) {
          const l = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            [_, u] = (0, o.useState)(!l),
            [m, g] = (0, o.useState)(!1),
            p = (0, w.v6)({
              "data-testid": e,
              className: "_1crroc52"
            }, s),
            f = a ? b.DX : "div";
          return (0, r.jsx)(Ot.Provider, {
            value: {
              videoRef: c,
              bgImageRef: d,
              isPlaying: _,
              isLooping: n,
              reducedMotion: l,
              setIsPlaying: u,
              videoError: m,
              setVideoError: g
            },
            children: (0, r.jsx)(f, {
              ref: i,
              ...p,
              children: t
            })
          })
        }),
        Ut = (0, o.forwardRef)(function({
          videoSrc: e,
          backgroundImage: t,
          isPlaying: a,
          setIsPlaying: n,
          videoLabel: s,
          testId: i,
          asChild: c,
          ...d
        }, _) {
          const u = (0, le.Ub)(C.f.mobile),
            {
              videoRef: m,
              isLooping: g,
              reducedMotion: p,
              setVideoError: f
            } = $t(),
            [h, y] = (0, o.useState)(null),
            k = c ? b.DX : "div",
            v = (0, w.v6)({
              "data-testid": i,
              className: Vt
            }, d);
          return (0, o.useEffect)(() => {
            const t = m.current;
            if (!t || !e.mobile && !e.desktop || p) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                n(!0)
              },
              o = () => {
                n(!1)
              },
              s = () => {
                console.warn("Play request interrupted :", t.error), n(!1)
              },
              i = () => {
                console.warn("Video failed to load sources."), f(!0)
              };
            return t.addEventListener("play", r), t.addEventListener("error", s), t.addEventListener("pause", o), a && a.addEventListener("error", i), () => {
              t.removeEventListener("play", r), t.removeEventListener("error", s), t.removeEventListener("pause", o), a && a.removeEventListener("error", i)
            }
          }, [m.current, JSON.stringify(e), p]), (0, o.useEffect)(() => {
            const e = (0, l.getOptimizedRsgImage)(t, u ? "1:1" : "21:9", {
              preferModernFormat: !0
            });
            e && y(e)
          }, [t, u]), (0, r.jsxs)(k, {
            ref: _,
            ...v,
            children: [(0, r.jsxs)("video", {
              ref: m,
              className: Vt,
              loop: g,
              "aria-label": s,
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              poster: h?.url ?? void 0,
              children: [e.mobile && (0, r.jsx)("source", {
                media: C.f.mobile,
                src: e.mobile,
                type: "video/mp4"
              }), e.desktop && (0, r.jsx)("source", {
                media: C.f.tabletSmallAndLarger,
                src: e.desktop,
                type: "video/mp4"
              })]
            }), (0, r.jsx)(qt, {
              context: u ? "1:1" : "21:9",
              src: t,
              className: (0, Dt.default)(["_1crroc55", a ? "_1crroc57" : "_1crroc56"]),
              "aria-hidden": a
            })]
          })
        }),
        Ht = (0, o.forwardRef)(function({
          disabled: e,
          onButtonClick: t,
          isPlaying: a,
          testId: n,
          ...s
        }, l) {
          const {
            formatMessage: d
          } = (0, i.useIntl)(), {
            videoRef: _,
            reducedMotion: u,
            videoError: m
          } = $t(), b = (0, o.useCallback)(() => {
            (() => {
              const e = _.current;
              e && (a ? (e?.pause(), e.currentTime = 0) : e?.play())
            })(), t?.(a)
          }, [a]), g = (0, w.v6)({
            "data-testid": n,
            className: (0, Dt.default)("_1crroc5i", e ? "_1crroc5g" : ""),
            label: d(a ? Bt.hp_hero_stop_button_label : Bt.hp_hero_play_button_label),
            "aria-label": d(a ? Bt.hp_hero_play_button_label : Bt.hp_hero_stop_button_label)
          }, s);
          return u || m ? null : (0, r.jsx)("div", {
            className: "_1crroc5h",
            children: (0, r.jsx)(c.IconButton, {
              ref: l,
              ...g,
              icon: a ? "Stop" : "Play",
              appearance: "primary",
              size: "SM",
              onPress: b
            })
          })
        });
      (0, R.c)({
        defaultClassName: "_1betujy6 _1betujy5",
        variantClassNames: {
          columns: {
            1: "_16t2abv3",
            2: "_16t2abv4",
            3: "_16t2abv5",
            4: "_16t2abv6",
            5: "_16t2abv7",
            6: "_16t2abv8",
            7: "_16t2abv9",
            8: "_16t2abva",
            9: "_16t2abvb",
            10: "_16t2abvc",
            11: "_16t2abvd",
            12: "_16t2abve"
          },
          align: {
            start: "_16t2abvf",
            center: "_16t2abvg",
            end: "_16t2abvh"
          }
        },
        defaultVariants: {
          columns: 3,
          align: "start"
        },
        compoundVariants: []
      });
      const Kt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "section",
            i = (0, w.v6)({
              "data-testid": t,
              className: "_16t2abv0"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        Yt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "_16t2abv1"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        Zt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "_16t2abvi"
            }, o);
          return (0, r.jsx)("div", {
            className: "_1betujy6 _1betujy5",
            children: (0, r.jsx)(s, {
              ref: n,
              ...i,
              children: e
            })
          })
        });
      var Jt = (0, R.c)({
        defaultClassName: "_1xrjhoy4",
        variantClassNames: {
          reducedMotion: {
            false: "_1xrjhoy5",
            true: "_1xrjhoy6"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Qt = (0, o.createContext)({
          heroRef: (0, o.createRef)(),
          backgroundRef: (0, o.createRef)(),
          backgroundGradientRef: (0, o.createRef)(),
          playStopButtonRef: (0, o.createRef)(),
          collectionsRef: (0, o.createRef)(),
          gameDetailsRef: (0, o.createRef)(),
          reducedMotion: !1,
          isPlaying: !1,
          setIsPlaying: e => e
        }),
        ea = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const i = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            l = (0, o.useRef)(null),
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            _ = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            m = (0, o.useRef)(null),
            [g, p] = (0, o.useState)(!i);
          ! function({
            heroRef: e,
            backgroundRef: t,
            backgroundGradientRef: a,
            playStopButtonRef: r,
            collectionsRef: o,
            gameDetailsRef: n
          }) {
            (0, Gt.L)(() => {
              const s = e.current,
                i = t.current,
                l = a.current,
                c = r.current,
                d = o.current,
                _ = n.current;
              if (!(s && i && l && c && d && _)) return;
              const u = Lt.os.timeline({
                paused: !0,
                defaults: {
                  ease: "none",
                  duration: 100
                },
                scrollTrigger: {
                  invalidateOnRefresh: !0,
                  trigger: s,
                  start: "top top",
                  end: "+=100%",
                  scrub: !0,
                  onEnter: () => {
                    const e = document.activeElement;
                    u.scrollTrigger?.refresh(), e && e instanceof HTMLElement && Lt.os.delayedCall(.01, () => {
                      e.focus({
                        preventScroll: !0
                      })
                    })
                  }
                }
              });
              u.fromTo(i, {
                scale: 1
              }, {
                scale: 1.1
              }, 0), u.fromTo(l, {
                scale: 1
              }, {
                scale: 1.1
              }, 0);
              const m = Lt.os.timeline({
                paused: !0,
                defaults: {
                  ease: "none",
                  duration: 100
                },
                scrollTrigger: {
                  invalidateOnRefresh: !0,
                  trigger: s,
                  start: "top top",
                  endTrigger: d,
                  end: "top top",
                  scrub: !0,
                  onEnter: () => {
                    m.scrollTrigger?.refresh()
                  }
                }
              });
              return m.fromTo(l, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, 70%, rgba(0, 0, 0, 1) 100%)"
              }, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -100%, -100%, rgba(0, 0, 0, 1) 20%)"
              }, 0), m.fromTo(l, {
                backdropFilter: "blur(0px)"
              }, {
                backdropFilter: "blur(50px)",
                duration: 50
              }, 50), m.fromTo(c, {
                opacity: 1,
                pointerEvents: "auto"
              }, {
                opacity: 0,
                pointerEvents: "none",
                immediateRender: !1,
                duration: 10
              }, 70), d && Lt.os.utils.toArray(":scope > *", o.current).forEach(e => {
                const t = Lt.os.fromTo(e, {
                  opacity: 0
                }, {
                  opacity: 1,
                  ease: "none",
                  scrollTrigger: {
                    invalidateOnRefresh: !0,
                    trigger: e,
                    start: "top bottom",
                    end: "+=20%",
                    toggleActions: "play none none none",
                    scrub: !0,
                    fastScrollEnd: !0,
                    onEnter: () => {
                      t.scrollTrigger?.refresh()
                    }
                  }
                })
              }), () => {
                u?.kill(), m?.kill()
              }
            }, {
              dependencies: [e.current, t.current, a.current, r.current, n.current, o.current],
              revertOnUpdate: !0
            })
          }({
            heroRef: l,
            backgroundRef: c,
            backgroundGradientRef: d,
            playStopButtonRef: _,
            collectionsRef: u,
            gameDetailsRef: m
          });
          const f = a ? b.DX : "div",
            h = (0, w.v6)({
              "data-testid": t,
              className: "_1xrjhoy0"
            }, n);
          return (0, r.jsx)(Qt.Provider, {
            value: {
              heroRef: l,
              backgroundRef: c,
              backgroundGradientRef: d,
              playStopButtonRef: _,
              collectionsRef: u,
              gameDetailsRef: m,
              reducedMotion: i,
              isPlaying: g,
              setIsPlaying: p
            },
            children: (0, r.jsx)(f, {
              ref: s,
              ...h,
              children: e
            })
          })
        }),
        ta = (0, o.forwardRef)(function({
          backgroundImage: e,
          backgroundVideo: t,
          ...a
        }, n) {
          const {
            heroRef: s,
            backgroundRef: i,
            backgroundGradientRef: l,
            isPlaying: c,
            playStopButtonRef: d,
            reducedMotion: _,
            setIsPlaying: u
          } = (0, o.useContext)(Qt), {
            trackEvent: m
          } = q(), b = (0, le.UP)(s, n), g = (0, le.Ub)(C.f.mobile), p = t?.videoFilesCollection?.items?.find(e => "21:9" === e.context), f = t?.videoFilesCollection?.items?.find(e => "1:1" === e.context), h = {
            desktop: p?.url,
            mobile: f?.url ?? p?.url
          };
          return (0, r.jsx)(Xt, {
            ref: b,
            ...a,
            children: (0, r.jsx)("div", {
              className: "_1xrjhoye",
              children: (0, r.jsxs)("div", {
                className: "_1xrjhoyf",
                children: [(0, r.jsx)(Ut, {
                  backgroundImage: e,
                  isPlaying: c,
                  ref: i,
                  setIsPlaying: u,
                  videoSrc: h,
                  videoLabel: t?.title ?? ""
                }), !_ && (0, r.jsx)(Ht, {
                  ref: d,
                  isPlaying: c,
                  onButtonClick: e => {
                    const a = g ? f : p;
                    m({
                      event: "cta_other",
                      text: e ? "toggle pause" : "toggle play",
                      video_id: a?.sys?.id,
                      video_type: t?.type
                    }, t)
                  }
                }), (0, r.jsx)("div", {
                  ref: l,
                  className: Jt({
                    reducedMotion: _
                  })
                })]
              })
            })
          })
        }),
        aa = (0, o.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, w.v6)({
            className: "_1xrjhoy3"
          }, e);
          return (0, r.jsx)(ue, {
            ref: t,
            ...a
          })
        }),
        ra = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "_1xrjhoy7"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        oa = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "_1xrjhoy8 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        na = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "_1xrjhoy9"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        sa = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "_1xrjhoya"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        ia = (0, o.forwardRef)(function({
          testId: e,
          asChild: t,
          children: a,
          ...o
        }, n) {
          const s = t ? b.DX : qt,
            i = (0, w.v6)({
              "data-testid": e,
              className: "_1xrjhoyc"
            }, o);
          return (0, r.jsx)("div", {
            className: "_1xrjhoyb",
            children: (0, r.jsx)(s, {
              ref: n,
              ...i,
              children: a
            })
          })
        }),
        la = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const {
            gameDetailsRef: i
          } = (0, o.useContext)(Qt), l = (0, le.UP)(i, s), c = t ? b.DX : Kt, d = (0, w.v6)({
            "data-testid": a
          }, n);
          return (0, r.jsx)(c, {
            ref: l,
            ...d,
            children: e
          })
        }),
        ca = (0, o.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          ...n
        }, s) {
          const {
            collectionsRef: i
          } = (0, o.useContext)(Qt), l = (0, le.UP)(i, s), c = a ? b.DX : Kt, d = (0, w.v6)({
            className: (0, Dt.default)("_1xrjhoy1", t)
          }, n);
          return (0, r.jsx)(c, {
            ref: l,
            ...d,
            children: e
          })
        }),
        da = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : Zt,
            i = (0, w.v6)({
              "data-testid": t
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        _a = (0, o.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : Yt,
            i = (0, w.v6)({
              className: (0, Dt.default)("_1xrjhoy2", t)
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        ua = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = q(), {
            blockPosition: a
          } = (0, o.useContext)(l.BlockRendererContext), {
            ref: n
          } = t(), {
            formatMessage: s
          } = (0, i.useIntl)();
          if (!e) return null;
          const {
            logo: d,
            game: _,
            description: u,
            ctasCollection: m
          } = e;
          return (0, r.jsxs)(ea, {
            ref: n,
            children: [(0, r.jsx)(ta, {
              backgroundImage: e.backgroundImage,
              backgroundVideo: e.backgroundVideo,
              isLooping: !0
            }), (0, r.jsx)(la, {
              children: (0, r.jsxs)(ca, {
                children: [(0, r.jsxs)(da, {
                  children: [(0, r.jsx)(aa, {
                    src: d
                  }), (0, r.jsxs)(ra, {
                    children: [(0, r.jsxs)(_a, {
                      children: [(0, r.jsxs)(c.Breadcrumbs.Root, {
                        children: [(0, r.jsx)(c.Breadcrumbs.Item, {
                          href: "/games",
                          children: s(Ft.featured_game_breadcrumbs_parent_item)
                        }), (0, r.jsx)(c.Breadcrumbs.Item, {
                          href: _?.wwwPageLink?.url,
                          isCurrent: !0,
                          children: _?.title
                        })]
                      }), (0, r.jsx)(oa, {
                        asChild: !0,
                        children: (0, r.jsx)(c.Body, {
                          children: u
                        })
                      })]
                    }), (0, r.jsxs)(_a, {
                      className: "hg5jwy0",
                      children: [m?.items && (0, r.jsx)(na, {
                        children: m?.items?.map((e, t) => {
                          if (e?.text) return (0, r.jsx)(ae, {
                            block: e,
                            size: "LG"
                          }, t)
                        })
                      }), _?.platformsCollection?.items?.length && (0, r.jsx)(sa, {
                        children: _.platformsCollection.items.map((e, t) => (0, r.jsx)(ia, {
                          src: e?.logo,
                          context: "mobile"
                        }, `${e?.sys?.id}-${t}`))
                      })]
                    })]
                  })]
                }), e.childModulesCollection?.items.map(e => (0, r.jsx)(l.BlockRenderer, {
                  block: e,
                  blockPosition: a
                }, e.sys.id))]
              })
            })]
          })
        },
        ma = "WwwFeaturedGameSection";
      var ba = "var(--r3mkgz0)",
        ga = "r3mkgz3",
        pa = "r3mkgz2";
      const fa = {
          wrap: "flex-direction: row;",
          stack: "flex-direction: column;"
        },
        ha = {
          left: "\n        align-items: flex-start;\n        justify-content: flex-start;\n    ",
          center: "\n        align-items: center;\n        justify-content: center;\n    ",
          right: "\n        align-items: flex-end;\n        justify-content: flex-end;\n    "
        },
        ya = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          breakpoints: n,
          gap: s,
          ...i
        }, l) {
          const c = `grid-${(0,o.useId)()}`,
            d = t ? b.DX : "div",
            _ = (0, o.useMemo)(() => n?.map(({
              mediaQuery: e,
              columns: t,
              behavior: a = "wrap",
              alignment: r = "left"
            }) => `\n            @media ${e} {\n                #${CSS.escape(c)}.${pa} {\n                    ${fa[a]}\n                    ${ha[r]}\n                }\n                ${t.map((e,a)=>`\n                    #${CSS.escape(c)} .${ga}:nth-of-type(${t.length}n + ${a+1}) {\n                            --grid-col-span: ${e};\n                        }\n                    `).join(" ")}\n            }\n        `), [n, c]),
            u = (0, w.v6)({
              "data-testid": a,
              className: pa,
              style: (0, j.DI)({
                [ba]: s
              })
            }, i);
          return (0, r.jsxs)(d, {
            id: c,
            ref: l,
            ...u,
            children: [(0, r.jsx)("style", {
              children: _
            }), e]
          })
        }),
        ka = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": a,
              className: ga
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        va = "WwwGrid";
      var xa = "var(--_1tmcp2s0)";
      const ja = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gap: o,
          ...n
        }, s) {
          const i = t ? b.DX : "div",
            l = (0, w.v6)({
              "data-testid": a,
              className: "_1tmcp2s1 _1betujy5",
              style: (0, j.DI)({
                [xa]: o
              })
            }, n);
          return (0, r.jsx)(i, {
            ref: s,
            ...l,
            children: e
          })
        }),
        wa = "WwwGridWrapper",
        Ca = e => {
          if (!e) return "MD";
          const t = e.length;
          return t <= 20 ? "XL" : t > 20 && t <= 40 ? "LG" : t > 40 && t <= 60 ? "MD" : "SM"
        };
      var Ra = a(45866);
      Lt.os.registerPlugin(Wt.u);
      const Sa = "data-original-tabindex",
        Na = (e, t = 0, a = 1) => Math.min(Math.max(e, t), a),
        Ia = ["a[href]", "button:not([disabled])", "textarea:not([disabled])", "input:not([disabled])", "select:not([disabled])", '[tabindex]:not([tabindex="-1"])'].join(","),
        Aa = e => Array.from(e.querySelectorAll(Ia)).filter(e => {
          const t = e.hasAttribute("disabled"),
            a = "true" === e.getAttribute("aria-hidden"),
            r = !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          return !t && !a && r
        }),
        Ma = () => ({
          desktop: {
            enter: Lt.os.timeline({
              paused: !0
            }),
            exit: Lt.os.timeline({
              paused: !0
            })
          },
          mobile: {
            enter: Lt.os.timeline({
              paused: !0
            }),
            exit: Lt.os.timeline({
              paused: !0
            })
          }
        }),
        Ea = (e, t) => t ? e.mobile : e.desktop,
        Ta = e => {
          const t = {
              desktop: {
                enter: Lt.os.timeline({
                  paused: !0
                }),
                exit: Lt.os.timeline({
                  paused: !0
                })
              },
              mobile: {
                enter: Lt.os.timeline({
                  paused: !0
                }),
                exit: Lt.os.timeline({
                  paused: !0
                })
              }
            },
            a = e.fade?.current,
            r = e.content?.current;
          return a && r ? (t.mobile.enter.set(r, {
            opacity: 1,
            clearProps: "transform, y, yPercent"
          }).fromTo(r, {
            opacity: 0
          }, {
            opacity: 1,
            duration: .2,
            ease: "power1.inOut"
          }, 0), t.mobile.exit.set(r, {
            clearProps: "transform, y, yPercent"
          }, 0).fromTo(a, {
            opacity: 1
          }, {
            opacity: .2,
            duration: 1,
            ease: "power1.inOut"
          }, 0).fromTo(r, {
            x: 0
          }, {
            x: "70vw",
            duration: 1,
            ease: "none"
          }, 0), t.desktop.enter.set(r, {
            opacity: 1,
            clearProps: "transform, x, xPercent"
          }, 0).fromTo(r, {
            opacity: 0,
            yPercent: 25
          }, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.in"
          }, 0), t.desktop.exit.fromTo(a, {
            opacity: 1
          }, {
            opacity: .1,
            duration: 1,
            ease: "none"
          }, 0).fromTo(r, {
            opacity: 1,
            yPercent: 0
          }, {
            opacity: 0,
            yPercent: 0,
            duration: 1,
            ease: "none"
          }, 0), t) : Ma()
        },
        za = ({
          autoplay: e,
          defaultSlide: t = 0,
          delay: a,
          loop: r = !0,
          slideRefs: n,
          slides: s
        }) => {
          const i = (0, le.Ub)(C.f.mobile),
            {
              trackEvent: l
            } = q(),
            c = "boolean" != typeof e || e,
            [d, _] = (0, o.useState)(t),
            u = (0, o.useRef)(null),
            m = (0, o.useRef)(0),
            b = (0, o.useRef)(!c),
            g = (0, o.useRef)(!1),
            p = (0, o.useRef)(!1),
            f = (0, o.useRef)(t),
            h = (0, o.useRef)(null),
            y = (0, o.useRef)(null),
            k = (0, o.useRef)([]),
            v = (0, o.useRef)([]),
            x = (0, o.useRef)([]),
            j = (0, o.useRef)("auto"),
            w = (0, o.useRef)({}),
            R = (0, o.useRef)(a),
            S = (0, o.useRef)(t),
            [N, I] = (0, ze.A)({
              axis: "x",
              align: "start",
              active: s.length > 1,
              containScroll: "trimSnaps",
              duration: 50,
              loop: r,
              startIndex: t
            }, [(0, Pe.J)()]);
          Pa(I, k.current, {
            isMobile: i,
            loop: r
          });
          const A = (0, o.useCallback)((e, t) => {
              v.current[t] = e
            }, []),
            M = (0, o.useCallback)(e => w.current[e] ?? {
              value: 0,
              remainingMs: a
            }, [a]),
            E = (0, o.useCallback)(() => {
              const e = h.current,
                t = S.current;
              if (!e) return void(w.current[t] = M(t));
              const a = Na(e.progress()),
                r = m.current,
                o = Na(a * (1 - r) + r),
                n = R.current,
                s = n * a,
                i = Math.max(n - s, 0);
              w.current[t] = {
                value: o,
                remainingMs: i
              }
            }, [M]),
            T = (0, o.useCallback)(() => {
              h.current && (h.current.kill(), h.current = null)
            }, []),
            z = (0, o.useCallback)(() => {
              E(), T()
            }, [T, E]),
            P = (0, o.useCallback)(e => {
              v.current.forEach((t, a) => {
                if (!t) return;
                const r = a == e;
                Lt.os.to(t, {
                  width: r ? 80 : 10,
                  duration: .5,
                  ease: "power2.inOut"
                })
              }), x.current.forEach((t, a) => {
                if (!t) return;
                if (a !== e) return void Lt.os.set(t, {
                  opacity: 0,
                  width: "0%"
                });
                const r = M(a);
                Lt.os.set(t, {
                  opacity: 1,
                  width: 100 * r.value + "%"
                })
              })
            }, [M]),
            F = (0, o.useCallback)(e => {
              T(), S.current = e, P(e)
            }, [P, T]),
            D = (0, o.useCallback)(e => {
              w.current[e] = {
                value: 0,
                remainingMs: a
              }
            }, [a]),
            L = (0, o.useCallback)((e, t) => {
              if (g.current) return;
              const r = x.current[e];
              if (!r || !I) return;
              T(), S.current = e, P(e);
              const o = t?.fromStored ? M(e) : {
                  value: 0,
                  remainingMs: a
                },
                n = Na(o.value),
                s = n >= 1 ? a : Math.max(o.remainingMs, 0);
              m.current = n, 0 === n && (w.current[e] = {
                value: 0,
                remainingMs: a
              }), Lt.os.set(r, {
                opacity: 1,
                width: 100 * n + "%"
              }), R.current = s, h.current = Lt.os.to(r, {
                width: "100%",
                ease: "none",
                duration: s / 1e3,
                onUpdate() {
                  const t = Na(this.progress()),
                    a = Na(t * (1 - n) + n),
                    r = Math.max(s - s * t, 0);
                  w.current[e] = {
                    value: a,
                    remainingMs: r
                  }
                },
                onComplete() {
                  if (w.current[e] = {
                      value: 1,
                      remainingMs: 0
                    }, b.current || !I) return;
                  j.current = "auto";
                  const t = I.selectedScrollSnap() + 1,
                    a = t >= I.scrollSnapList().length ? 0 : t;
                  I.scrollTo(a)
                }
              })
            }, [P, a, I, M, T]),
            G = (0, o.useCallback)((e, t) => {
              x.current[t] = e, e && t === f.current && !b.current && g.current && L(t, {
                fromStored: !0
              })
            }, [L]),
            W = (0, o.useCallback)(() => {
              p.current = !1, b.current = !0, z(), F(f.current)
            }, [z, F]),
            B = (0, o.useCallback)(() => {
              p.current = !1, b.current = !1, L(f.current, {
                fromStored: !0
              })
            }, [L]),
            V = (0, o.useCallback)(() => {
              b.current || (p.current = !0, b.current = !0, z(), F(f.current))
            }, [z, F]),
            O = (0, o.useCallback)(() => {
              p.current && (p.current = !1, b.current = !1, L(f.current))
            }, [L]),
            $ = (0, o.useCallback)(e => {
              I && I.slideNodes().forEach((t, a) => {
                const r = a === e,
                  o = Aa(t);
                t.setAttribute("aria-hidden", String(!r)), o.forEach(e => {
                  if (!r) {
                    if (!e.hasAttribute(Sa)) {
                      const t = e.getAttribute("tabindex");
                      e.setAttribute(Sa, null === t ? "__none__" : t)
                    }
                    return void e.setAttribute("tabindex", "-1")
                  }
                  const t = e.getAttribute(Sa);
                  null !== t && ("__none__" === t ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", t), e.removeAttribute(t))
                })
              })
            }, [I]),
            X = (0, o.useCallback)((e, t) => {
              f.current = e, _(e), $(e), v.current.forEach((t, a) => {
                const r = t?.parentElement;
                if (!r) return;
                const o = a === e;
                o ? r.setAttribute("tabindex", "-1") : r.removeAttribute("tabindex"), r.setAttribute("aria-current", o ? "true" : "false")
              });
              const a = (e => "auto" === e || "drag" === e || "bullet" === e || "keyboard" === e)(t);
              a && D(e), b.current ? F(e) : L(e, {
                fromStored: !a
              })
            }, [F, D, L, $]);
          (0, o.useLayoutEffect)(() => {
            if (!I) return;
            const e = I.slideNodes(),
              t = [];
            for (let r = 0; r < e.length; r++) {
              const e = n.current[r];
              t.push(e ? Ta(e) : Ma()), w.current[r] || (w.current[r] = {
                value: 0,
                remainingMs: a
              })
            }
            return k.current = t, () => {
              t.forEach(e => {
                e.mobile.enter.kill(), e.mobile.exit.kill(), e.desktop.enter.kill(), e.desktop.exit.kill()
              })
            }
          }, [a, I, n]), (0, o.useEffect)(() => {
            if (!I) return;
            const e = () => {
                const e = I.selectedScrollSnap();
                X(e, j.current), j.current = "auto", window.postMessage({
                  source: "navColorTheme",
                  mode: s[e].navColor ?? "dark"
                })
              },
              t = n.current.map(e => e?.background.current).filter(Boolean);
            let a = !1;
            const r = new Map;
            return Promise.all(t.map(e => new Promise(t => {
              if (e.complete) return void t();
              const a = () => {
                e.removeEventListener("load", a), r.delete(e), t()
              };
              e.addEventListener("load", a), r.set(e, a)
            }))).then(() => {
              a || (j.current = "resize-sync", X(I.selectedScrollSnap(), "resize-sync"))
            }), I.on("select", e), I.on("reInit", e), I.on("init", e), () => {
              a = !0, I.off("select", e), I.off("reInit", e), I.off("init", e), z(), r.forEach((e, t) => {
                t.removeEventListener("load", e)
              })
            }
          }, [I, X, z, s, n]), (0, o.useEffect)(() => {
            if (!I) return;
            let e = f.current;
            const t = () => {
                e = f.current, S.current = e, E(), T(), F(e)
              },
              a = () => {
                const t = I.selectedScrollSnap();
                if (e !== t) return j.current = "drag", void l({
                  event: "carousel_swipe"
                });
                b.current || (f.current = t, S.current = t, L(t, {
                  fromStored: !0
                })), requestAnimationFrame(() => {
                  const e = I.selectedScrollSnap();
                  b.current || h.current || (f.current = e, S.current = e, L(e, {
                    fromStored: !0
                  }))
                })
              };
            return I.on("pointerDown", t), I.on("pointerUp", a), () => {
              I.off("pointerDown", t), I.off("pointerUp", a)
            }
          }, [I, T, F, L, E, l]), (0, o.useEffect)(() => {
            const e = () => {
              y.current && clearTimeout(y.current);
              const e = I?.selectedScrollSnap() ?? f.current;
              g.current = !0, S.current = e, E(), T(), F(e), y.current = setTimeout(() => {
                j.current = "resize-sync";
                const e = I?.selectedScrollSnap() ?? f.current;
                S.current = e, g.current = !1, b.current ? F(e) : (L(e, {
                  fromStored: !0
                }), Wt.u.refresh())
              }, 250)
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e), y.current && clearTimeout(y.current), g.current = !1
            }
          }, [I, g, T, F, L, E]);
          const U = (0, o.useCallback)(e => {
              I && I.selectedScrollSnap() !== e && (E(), j.current = "bullet", I.scrollTo(e), l({
                event: "carousel_thumbnail_click",
                position: e + 1,
                position_max: I.slideNodes().length
              }))
            }, [I, E, l]),
            H = (0, o.useCallback)(e => t => {
              I && ("Enter" !== t.key && " " !== t.key || (t.preventDefault(), I.selectedScrollSnap() !== e && (E(), j.current = "bullet", I?.scrollTo(e))))
            }, [I, E]);
          return (0, o.useEffect)(() => {
            if (!I) return;
            const e = I.rootNode();
            if (!e) return;
            const t = t => {
              const a = document.activeElement,
                r = !!a && e.contains(a),
                o = a?.tagName.toLowerCase();
              if (!r || "input" === o || "textarea" === o || a?.isContentEditable) return;
              if ("ArrowRight" === t.key) return t.preventDefault(), E(), j.current = "keyboard", void I.scrollNext();
              if ("ArrowLeft" === t.key) return t.preventDefault(), E(), j.current = "keyboard", void I.scrollPrev();
              if ("Tab" !== t.key) return;
              const n = e.querySelector("[data-carousel-pagination]"),
                s = !!n?.contains(a);
              if (t.shiftKey && s) {
                const e = I.slideNodes()[f.current];
                if (!e) return;
                const a = Aa(e);
                if (!a.length) return;
                return t.preventDefault(), void a[a.length - 1].focus()
              }
              null !== u.current && cancelAnimationFrame(u.current), u.current = requestAnimationFrame(() => {
                u.current = null;
                const t = document.activeElement;
                if (!t || !e.contains(t)) return;
                const a = (e => {
                  const t = I.slideNodes();
                  for (let a = 0; a < t.length; a++)
                    if (t[a].contains(e)) return a;
                  return -1
                })(t);
                var r; - 1 !== a && ((r = a) < 0 || I.selectedScrollSnap() !== r && (E(), j.current = "keyboard", I.scrollTo(r)))
              })
            };
            return e.addEventListener("keydown", t), () => {
              e.removeEventListener("keydown", t), null !== u.current && cancelAnimationFrame(u.current)
            }
          }, [I, E]), {
            embla: I,
            viewportRef: N,
            activeSlide: d,
            currentSlideRef: f,
            isPausedRef: b,
            pauseProgress: W,
            resumeProgress: B,
            pausedForVisibility: V,
            resumeForVisibility: O,
            onBulletClick: U,
            onBulletKeyDown: H,
            setDotRef: A,
            setFillRef: G
          }
        },
        Pa = (e, t, {
          isMobile: a = !1,
          loop: r = !1
        }) => {
          (0, o.useEffect)(() => {
            if (!e || 0 === t.length) return;
            const o = e.scrollSnapList(),
              n = o.length,
              s = () => {
                const s = e.scrollProgress();
                let i = 0,
                  l = 0,
                  c = 0;
                for (let e = 0; e < n; e++) {
                  const d = o[e],
                    _ = o[(e + 1) % n];
                  if (r) {
                    const t = _ > d ? _ - d : 1 + _ - d,
                      a = (s - d + 1) % 1;
                    if (a >= 0 && a <= t) {
                      i = e, l = (e + 1) % n, c = a / t;
                      break
                    }
                    c = Math.min(a / t, 1)
                  } else {
                    const t = o[e + 1] ?? 1,
                      a = t - d;
                    if (s >= d && s <= t) {
                      i = e, l = e + 1, c = (s - d) / a;
                      break
                    }
                    c = Math.max(0, Math.min((s - d) / a, 1))
                  }
                  const u = t[e];
                  if (u) {
                    const e = Ea(u, a);
                    e?.enter.progress(c).pause(), e?.exit.progress(0).pause()
                  }
                }
                const d = t[i];
                if (d) {
                  const e = Ea(d, a);
                  e?.enter.progress(1 - c).pause(), e?.exit.progress(c).pause()
                }
                if (!a) {
                  const e = t[l];
                  if (e) {
                    const t = Ea(e, !1);
                    t?.enter.progress(c).pause(), t?.exit.progress(0).pause()
                  }
                }
                t.forEach((e, t) => {
                  if (t !== i && t !== l) {
                    const t = Ea(e, a);
                    t?.enter.progress(0).pause(), t?.exit.progress(0).pause()
                  }
                })
              };
            return t.length > 1 && (e.on("scroll", s), e.on("resize", s)), () => {
              e.off("scroll", s), e.off("resize", s)
            }
          }, [e, t, a, r])
        },
        Fa = () => w.X3 ? null : document.body,
        Da = (0, i.defineMessages)({
          hero_carousel_play_button: {
            id: "hero_carousel_play_button",
            description: "Aria label for the icon button to play the hero carousel",
            defaultMessage: "Play"
          },
          hero_carousel_pause_button: {
            id: "hero_carousel_pause_button",
            description: "Aria label for the icon button to pause the hero carousel",
            defaultMessage: "Pause"
          },
          hero_carousel_scroll_down_label: {
            id: "hero_carousel_scroll_down_label",
            description: "Hero carousel scroll down label",
            defaultMessage: "Scroll Down"
          }
        });
      var La = a(80135),
        Ga = (0, R.c)({
          defaultClassName: "wai7970",
          variantClassNames: {
            inLayout: {
              true: "wai7971",
              false: "wai7972"
            },
            appearance: {
              dark: "wai7973",
              light: "wai7974",
              adaptive: "wai7975",
              ghost: "wai7976"
            },
            size: {
              large: "wai7977",
              small: "wai7978"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              appearance: "ghost",
              size: "large"
            }, "wai7979"],
            [{
              appearance: "ghost",
              size: "small"
            }, "wai797a"]
          ]
        }),
        Wa = (0, R.c)({
          defaultClassName: "wai797f",
          variantClassNames: {
            appearance: {
              dark: "wai797g",
              light: "wai797h",
              adaptive: "wai797i",
              ghost: "wai797j"
            },
            type: {
              pagination: "wai797k",
              progress: "wai797l",
              line: "wai797m"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              appearance: "ghost",
              type: "pagination"
            }, "wai797n"],
            [{
              appearance: "ghost",
              type: "line"
            }, "wai797o"]
          ]
        }),
        qa = (0, R.c)({
          defaultClassName: "wai797p",
          variantClassNames: {
            appearance: {
              dark: "wai797q",
              light: "wai797r",
              adaptive: "wai797s",
              ghost: "wai797t"
            },
            type: {
              pagination: "wai797u",
              progress: "wai797v",
              line: "wai797w"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ba = ({
          appearance: e,
          type: t,
          onClick: a,
          onBulletKeyDown: o,
          dotRef: n,
          fillRef: s
        }) => (0, r.jsx)("button", {
          className: "wai797b",
          onClick: a,
          onKeyDown: o,
          children: (0, r.jsx)("span", {
            ref: n,
            className: (0, Dt.default)("wai797c", Wa({
              appearance: e,
              type: t
            })),
            children: (0, r.jsx)("span", {
              ref: s,
              className: qa({
                appearance: e,
                type: t
              })
            })
          })
        }),
        Va = ({
          progress: e = 0
        }) => (0, r.jsx)("span", {
          className: "wai797d",
          children: (0, r.jsx)("span", {
            className: "wai797e",
            style: {
              width: `${e}%`
            }
          })
        }),
        Oa = (0, o.forwardRef)(function({
          type: e,
          appearance: t = "adaptive",
          pages: a,
          current: o,
          size: n,
          setDotRef: s,
          setFillRef: i,
          onBulletClick: l,
          onBulletKeyDown: c,
          testId: d,
          asChild: _,
          ...u
        }, m) {
          const g = _ ? b.DX : "div",
            p = (0, w.v6)({
              "data-testid": d,
              className: Ga({
                appearance: t,
                size: n
              })
            }, u),
            f = 100 * o / a;
          return (0, r.jsxs)(g, {
            ref: m,
            ...p,
            children: [("pagination" === e || "line" === e) && (0, La.A)(a)?.map(a => (0, r.jsx)(Ba, {
              type: e,
              appearance: t,
              onClick: () => l(a),
              onBulletKeyDown: c?.(a),
              dotRef: e => s?.(e, a),
              fillRef: e => i?.(e, a)
            }, a)), "progress" === e && (0, r.jsx)(Va, {
              progress: f
            })]
          })
        });
      var $a = (0, R.c)({
        defaultClassName: "_1obdf6x2",
        variantClassNames: {
          variant: {
            default: "_1obdf6x3",
            full_height: "_1obdf6x4"
          }
        },
        defaultVariants: {
          variant: "default"
        },
        compoundVariants: []
      });
      const Xa = (0, o.createContext)({
          variant: "default",
          slides: [],
          defaultSlide: 0,
          loop: !0,
          delay: 6e3,
          totalSlides: 0,
          slideRefs: null,
          currentSlideRef: null,
          activeSlide: 0,
          emblaApi: null,
          inView: !1,
          intersectionRef: null,
          isPausedRef: null,
          viewportRef: null,
          onBulletClick: null,
          onBulletKeyDown: null,
          setDotRef: null,
          setFillRef: null,
          pauseProgress: null,
          resumeProgress: null,
          pausedForVisibility: null,
          resumeForVisibility: null
        }),
        Ua = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          autoplay: a,
          slides: n,
          variant: i,
          delay: l,
          slideRefs: c,
          loop: d = !0,
          defaultSlide: _,
          ...u
        }, m) {
          const g = (0, o.useRef)(null),
            p = (0, o.useRef)(null),
            {
              ref: f,
              inView: h
            } = (0, s.useScrollVisibility)(1 / 3),
            {
              embla: y,
              viewportRef: k,
              currentSlideRef: v,
              activeSlide: x,
              onBulletClick: j,
              onBulletKeyDown: R,
              setDotRef: S,
              setFillRef: N,
              isPausedRef: I,
              pauseProgress: A,
              resumeProgress: M,
              pausedForVisibility: E,
              resumeForVisibility: T
            } = za({
              autoplay: a,
              defaultSlide: _,
              delay: l,
              loop: d,
              slideRefs: c,
              slides: n,
              totalSlides: n.length
            });
          (({
            embla: e,
            slides: t,
            target: a = Fa(),
            enabled: r = !0,
            defaultSlideColor: n = "#000",
            backgroundRef: s
          }) => {
            const i = (0, o.useRef)([]),
              l = (0, o.useRef)([]),
              c = e => {
                const t = s.current?.getContext("2d");
                t && s.current && (t.fillStyle = e, t.fillRect(0, 0, s.current.width, s.current.height))
              },
              d = e => {
                const t = document.getElementById("navigation-gradient"),
                  a = t?.getContext("2d");
                e && a && t && (a.fillStyle = e, a.fillRect(0, 0, t.width, t.height))
              };
            (0, o.useEffect)(() => {
              if (!(e && r && t?.length && a)) return;
              const o = () => {
                  i.current = e.scrollSnapList(), l.current = t?.map(e => [e.topGradientColor || n, e.bottomGradientColor || n]), s()
                },
                s = () => {
                  const t = Math.min(Math.max(e?.scrollProgress() ?? 0, 0), 1),
                    a = i.current,
                    r = Math.max(a.findIndex(e => e > t), 0),
                    o = r - 1 >= 0 ? r - 1 : a.length - 1,
                    [s, _] = l.current[r] ?? n,
                    [u, m] = l.current[o] ?? n,
                    b = Math.max(a[o] ?? 0, 0),
                    g = a[1] ?? 1,
                    p = Math.round((t - b) / g * 100);
                  if (u.length < 2 || s.length < 2) return;
                  const f = `color-mix(in srgb, ${m}, ${_} ${p}%)`;
                  d(`color-mix(in srgb, ${u}, ${s} ${p}%)`), c(f)
                };
              return 1 === t?.length ? ((() => {
                const [e, t] = l.current[0] ?? [n, n];
                d(e), c(t)
              })(), o()) : (s(), e.on("scroll", s), e.on("reInit", s), e.on("slidesChanged", o), o()), () => {
                e.off("scroll", s), e.off("reInit", s), e.off("slidesChanged", o)
              }
            }, [r, e, t, n, a])
          })({
            embla: y,
            slides: n,
            backgroundRef: g
          }), (({
            backgroundRef: e,
            contentRef: t
          }) => {
            const a = (0, le.Ub)(C.f.mobileSmall);
            (0, o.useLayoutEffect)(() => {
              const e = document.getElementById("main");
              if (!e) return;
              const t = "static" === getComputedStyle(e).position,
                a = e.style.position,
                r = e.style.zIndex;
              return t && (e.style.position = "relative"), e.style.zIndex = "1", () => {
                t && (e.style.position = a), e.style.zIndex = r
              }
            }, []), (0, Gt.L)(() => {
              const t = e.current;
              if (!t) return;
              const a = t.parentElement;
              Lt.os.to(t, {
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: a,
                  start: "top bottom",
                  end: "top top",
                  scrub: !0,
                  invalidateOnRefresh: !0
                },
                overwrite: "auto"
              }), Lt.os.to(t, {
                autoAlpha: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: a,
                  start: "top top-=10%",
                  end: "bottom 25%",
                  scrub: !0,
                  invalidateOnRefresh: !0
                },
                overwrite: "auto"
              })
            }, {
              dependencies: [e]
            }), (({
              contentRef: e,
              isMobileSmall: t
            }) => {
              (0, Gt.L)(() => {
                const a = e.current;
                if (!a) return;
                const r = a.parentElement;
                if (!r) return;
                Lt.os.set(a, {
                  clearProps: "opacity"
                }), Lt.os.set(a, {
                  opacity: 1
                });
                const o = Lt.os.to(a, {
                  opacity: 0,
                  ease: "none",
                  paused: !0,
                  scrollTrigger: {
                    trigger: r,
                    start: t ? "bottom 45%" : "bottom 75%",
                    end: "bottom top",
                    scrub: !0,
                    invalidateOnRefresh: !0,
                    onLeaveBack: () => {
                      Lt.os.set(a, {
                        opacity: 1
                      })
                    }
                  }
                });
                return () => {
                  o.scrollTrigger?.kill(), o.kill(), Lt.os.set(a, {
                    clearProps: "opacity"
                  })
                }
              }, {
                dependencies: [t, e],
                scope: e,
                revertOnUpdate: !0
              })
            })({
              contentRef: t,
              isMobileSmall: a
            })
          })({
            backgroundRef: g,
            contentRef: p
          });
          const z = t ? b.DX : Ve,
            P = (0, w.v6)({
              className: "_1obdf6x0",
              role: "region",
              "aria-label": "Featured Content Carousel",
              tabIndex: 0
            }, u);
          return (0, r.jsx)(Xa.Provider, {
            value: {
              slides: n,
              defaultSlide: _,
              loop: d,
              variant: i,
              delay: l,
              slideRefs: c,
              emblaApi: y,
              inView: h,
              currentSlideRef: v,
              activeSlide: x,
              intersectionRef: f,
              isPausedRef: I,
              viewportRef: k,
              onBulletClick: j,
              onBulletKeyDown: R,
              setDotRef: S,
              setFillRef: N,
              pauseProgress: A,
              resumeProgress: M,
              pausedForVisibility: E,
              resumeForVisibility: T
            },
            children: (0, r.jsxs)(z, {
              ref: m,
              ...P,
              children: [(0, r.jsx)("canvas", {
                ref: g,
                className: "_1obdf6x5",
                "aria-hidden": !0
              }), (0, r.jsx)("div", {
                ref: p,
                children: e
              })]
            })
          })
        }),
        Ha = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, n) {
          const {
            inView: s,
            intersectionRef: i,
            viewportRef: l
          } = (0, o.useContext)(Xa), c = (0, le.UP)(l, n), d = t ? b.DX : Ue;
          return (0, r.jsx)("div", {
            ref: i,
            children: (0, r.jsx)(d, {
              ref: c,
              appearance: "ghost",
              className: "_1obdf6x1",
              "data-disabled": String(!s),
              ...a,
              children: e
            })
          })
        }),
        Ka = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, n) {
          const {
            variant: s
          } = (0, o.useContext)(Xa), i = (0, w.v6)({
            className: $a({
              variant: s
            })
          }, a), l = t ? b.DX : He;
          return (0, r.jsx)(l, {
            ref: n,
            ...i,
            children: e
          })
        }),
        Ya = (0, o.forwardRef)(function({
          label: e,
          asChild: t,
          ...a
        }, n) {
          const {
            inView: s,
            activeSlide: l,
            slides: d,
            variant: _,
            setDotRef: u,
            setFillRef: m,
            onBulletClick: g,
            onBulletKeyDown: p,
            isPausedRef: f,
            pauseProgress: h,
            resumeProgress: y,
            pausedForVisibility: k,
            resumeForVisibility: v
          } = (0, o.useContext)(Xa), x = !s, [, j] = (0, o.useState)(0), R = (0, le.Ub)(C.f.mobile), {
            formatMessage: S
          } = (0, i.useIntl)(), {
            trackEvent: N
          } = q(), I = t ? b.DX : "div", A = (0, w.v6)({
            className: "_1obdf6xd"
          }, a), M = !f.current, E = d.length, T = (0, o.useCallback)(() => {
            f.current ? (N({
              event: "cta_other",
              text: "toggle play"
            }), y()) : (N({
              event: "cta_other",
              text: "toggle pause"
            }), h()), j(e => e + 1)
          }, [h, y, f, N]);
          (0, o.useEffect)(() => {
            s ? v() : k(), j(e => e + 1)
          }, [s, k, v]);
          const z = (0, r.jsx)(c.IconButton, {
            className: "_1obdf6x6",
            icon: M ? "Pause" : "Play",
            label: S(M ? Da.hero_carousel_pause_button : Da.hero_carousel_play_button),
            "aria-label": S(M ? Da.hero_carousel_play_button : Da.hero_carousel_pause_button),
            size: "SM",
            appearance: "ghost",
            onPress: T
          });
          return (0, r.jsx)(I, {
            ref: n,
            ...A,
            children: (0, r.jsxs)("div", {
              className: "_1obdf6xg",
              "data-disabled": String(x),
              children: [E > 1 && (0, r.jsxs)("div", {
                className: "_1obdf6xe",
                "data-carousel-pagination": !0,
                children: [!R && z, (0, r.jsx)(Oa, {
                  type: R ? "line" : "pagination",
                  size: "large",
                  appearance: "ghost",
                  current: l,
                  pages: E,
                  onBulletClick: g,
                  onBulletKeyDown: p,
                  setDotRef: u,
                  setFillRef: m
                }), R && z]
              }), !R && e && (0, r.jsxs)("div", {
                className: "_1obdf6xh",
                children: [(0, r.jsx)(c.Label, {
                  size: "XS",
                  appearance: "bold",
                  className: "_1obdf6xi",
                  children: "full_height" === _ ? S(Da.hero_carousel_scroll_down_label) : void 0
                }), (0, r.jsx)(Ra.ArrowDown, {
                  size: "MD",
                  label: e
                })]
              })]
            })
          })
        });
      var Za = "var(--uw9ioi2)",
        Ja = "var(--uw9ioi3)",
        Qa = "var(--uw9ioi1)",
        er = (0, R.c)({
          defaultClassName: "uw9ioie",
          variantClassNames: {
            invisible: {
              true: "uw9ioif"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        tr = ((0, R.c)({
          defaultClassName: "uw9ioio",
          variantClassNames: {
            appearance: {
              link: "uw9ioip",
              danger: "uw9ioiq",
              information: "uw9ioir",
              primary: "uw9iois",
              secondary: "uw9ioit",
              tertiary: "uw9ioiu",
              ghost: "uw9ioiv",
              accent: "uw9ioiw"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }), (0, R.c)({
          defaultClassName: "uw9ioi6",
          variantClassNames: {
            size: {
              SM: "uw9ioi7",
              MD: "uw9ioi8",
              LG: "uw9ioi9",
              XL: "uw9ioia"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }));
      const ar = (0, o.forwardRef)(function({
          children: e,
          bottomGradientColor: t,
          horizontalBackgroundPosition: a,
          verticalBackgroundPosition: o,
          asChild: n,
          testId: s,
          size: i = "MD",
          ...l
        }, c) {
          const d = n ? b.DX : "div",
            _ = (0, w.v6)({
              "data-testid": s,
              className: tr({
                size: i
              }),
              style: (0, j.DI)({
                [Qa]: t,
                [Za]: a,
                [Ja]: o
              })
            }, l);
          return (0, r.jsx)(d, {
            ref: c,
            ..._,
            children: e
          })
        }),
        rr = (0, o.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const n = (0, le.Ub)("(max-width: 500px) or (max-aspect-ratio: 0.9)"),
            {
              isUltraWideLandscape: s
            } = (() => {
              const e = (0, o.useCallback)(() => {
                  const e = window.innerWidth / window.innerHeight;
                  return [e >= 21 / 9, e <= 9 / 21]
                }, []),
                [t, a] = e(),
                [r, n] = (0, o.useState)(t),
                [s, i] = (0, o.useState)(a);
              return (0, o.useEffect)(() => {
                const t = () => {
                  const [t, a] = e();
                  n(t), i(a)
                };
                return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
              }, []), {
                isUltraWideLandscape: r,
                isUltraTallPortrait: s
              }
            })(),
            i = (0, w.v6)({
              className: "uw9ioic",
              src: e
            }, t);
          return (0, r.jsx)(qt, {
            ref: a,
            ...i,
            loading: "eager",
            context: n ? "2:3" : s ? "32:9" : "21:9"
          })
        }),
        or = (0, o.forwardRef)(function({
          invisible: e,
          children: t,
          asChild: a,
          testId: o,
          ...n
        }, s) {
          const i = a ? b.DX : "div",
            l = (0, w.v6)({
              "data-testid": o,
              className: er({
                invisible: e
              })
            }, n);
          return (0, r.jsx)("div", {
            className: "uw9ioid _1betujy6 _1betujy5",
            children: (0, r.jsx)(i, {
              ref: s,
              ...l,
              children: t
            })
          })
        }),
        nr = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": a,
              className: "uw9ioig"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        sr = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : c.Label,
            i = (0, w.v6)({
              "data-testid": a,
              className: "uw9ioih foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        ir = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "h2",
            i = (0, w.v6)({
              "data-testid": a,
              className: "uw9ioii foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        lr = (0, o.forwardRef)(function({
          asChild: e,
          src: t,
          ...a
        }, o) {
          const n = e ? b.DX : "div",
            s = (0, w.v6)({
              className: "uw9ioij"
            }, a);
          return (0, r.jsx)(n, {
            ref: o,
            ...s,
            children: (0, r.jsx)(ue, {
              src: t,
              alt: t?.altText ?? "",
              className: "uw9ioik",
              style: t?.source?.width && t?.source?.height ? {
                aspectRatio: `${t.source.width}/${t.source.height}`
              } : {},
              loading: "eager"
            })
          })
        }),
        cr = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": a,
              className: "uw9ioin"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        dr = ({
          slideRefs: e,
          slide: t,
          currentSlideIndex: a
        }) => {
          const {
            isPausedRef: n,
            emblaApi: s
          } = (0, o.useContext)(Xa), i = () => {
            n.current || s?.plugins()?.autoplay?.stop()
          };
          return (0, r.jsxs)(ar, {
            bottomGradientColor: t.bottomGradientColor,
            size: Ca(t.title),
            children: [(0, r.jsx)(rr, {
              ref: e.current[a].background,
              src: t.background
            }), (0, r.jsxs)(or, {
              ref: e.current[a].content,
              invisible: 0 === a,
              children: [(0, r.jsx)(lr, {
                ref: e.current[a].logo,
                src: t.logo
              }), (0, r.jsxs)(nr, {
                ref: e.current[a].heading,
                children: [t.eyebrow && (0, r.jsx)(sr, {
                  size: "LG",
                  appearance: "bold",
                  children: t.eyebrow
                }), t.title && (0, r.jsx)(ir, {
                  children: t.title
                })]
              }), t?.ctasCollection?.items && (0, r.jsx)(cr, {
                ref: e?.current[a]?.ctas,
                children: t?.ctasCollection?.items?.map(e => (0, r.jsx)(ae, {
                  block: e,
                  size: "LG",
                  onClick: i
                }, e.sys.id))
              })]
            })]
          })
        },
        _r = (0, o.forwardRef)(function({
          autoplay: e,
          slides: t,
          size: a,
          delay: n = 6e3,
          defaultSlide: s = 0,
          loop: i = !0,
          ...l
        }, c) {
          const {
            trackEvent: d
          } = q(), {
            emblaApi: _,
            inView: u
          } = (0, o.useContext)(Xa), m = (0, o.useRef)(t?.map(() => ({
            background: (0, o.createRef)(),
            content: (0, o.createRef)(),
            logo: (0, o.createRef)(),
            heading: (0, o.createRef)(),
            ctas: (0, o.createRef)(),
            fade: (0, o.createRef)(),
            tag: (0, o.createRef)()
          })));
          return (0, o.useEffect)(() => {
            const e = e => {
              const a = e.selectedScrollSnap();
              u && d({
                event: "banner_item_impression",
                card_id: t[a].sys.id,
                card_name: t[a].title,
                position: a + 1,
                position_max: t.length
              }, t[a])
            };
            return _ && (e(_), _?.on("select", e)), () => {
              _?.off("select", e)
            }
          }, [_]), t?.length ? (0, r.jsxs)(Ua, {
            ref: c,
            autoplay: e,
            slides: t,
            variant: a,
            tabIndex: -1,
            delay: n,
            slideRefs: m,
            defaultSlide: s,
            onNext: () => {
              d({
                event: "carousel_next"
              })
            },
            onPrev: () => {
              d({
                event: "carousel_previous"
              })
            },
            onSwipe: () => {
              d({
                event: "carousel_swipe"
              })
            },
            loop: i,
            ...l,
            children: [(0, r.jsx)(Ha, {
              children: t?.map((e, t) => (0, r.jsx)(Ka, {
                ref: m?.current[t]?.fade,
                variant: "full",
                children: (0, r.jsx)(dr, {
                  currentSlideIndex: t,
                  slideRefs: m,
                  slide: e
                })
              }, t))
            }), t?.length > 1 && (0, r.jsx)(Ya, {})]
          }) : null
        }),
        ur = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = q(), {
            ref: a
          } = t();
          return e ? (0, r.jsx)(_r, {
            ref: a,
            autoplay: e?.autoplay,
            size: e.size,
            slides: e.slidesCollection?.items
          }) : null
        },
        mr = "WwwFeaturedContentCarousel";
      var br = (0, R.c)({
        defaultClassName: "_1cw0rgk3",
        variantClassNames: {
          textAlignment: {
            left: "_1cw0rgk4",
            center: "_1cw0rgk5",
            right: "_1cw0rgk6"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const gr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "_1cw0rgk0"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        pr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "_1cw0rgk1"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        fr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          textAlignment: o = "left",
          ...n
        }, s) {
          const i = a ? b.DX : "div",
            l = (0, w.v6)({
              "data-testid": t,
              className: br({
                textAlignment: o
              })
            }, n);
          return (0, r.jsx)(i, {
            ref: s,
            ...l,
            children: e
          })
        }),
        hr = "WwwImageBlock";
      var yr = a(26182),
        kr = (0, R.c)({
          defaultClassName: "_1scye89e",
          variantClassNames: {
            size: {
              small: "_1scye89f",
              medium: "_1scye89g",
              large: "_1scye89h",
              xlarge: "_1scye89i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vr = (0, R.c)({
          defaultClassName: "_1scye899",
          variantClassNames: {
            size: {
              small: "_1scye89a",
              medium: "_1scye89b",
              large: "_1scye89c",
              xlarge: "_1scye89d"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xr = (0, R.c)({
          defaultClassName: "_1scye89y",
          variantClassNames: {
            size: {
              small: "_1scye89z",
              medium: "_1scye8910",
              large: "_1scye8911",
              xlarge: "_1scye8912"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jr = (0, R.c)({
          defaultClassName: "_1scye89r",
          variantClassNames: {
            theme: {
              dark: "_1scye89s",
              light: "_1scye89t"
            },
            size: {
              small: "_1scye89u",
              medium: "_1scye89v",
              large: "_1scye89w",
              xlarge: "_1scye89x"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wr = "var(--_1scye890)",
        Cr = "var(--_1scye891)",
        Rr = "var(--_1scye892)",
        Sr = (0, R.c)({
          defaultClassName: "_1scye896",
          variantClassNames: {
            interactive: {
              false: "_1scye897",
              true: "_1scye898"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Nr = (0, R.c)({
          defaultClassName: "_1scye893",
          variantClassNames: {
            gradient: {
              linear: "_1scye894",
              radial: "_1scye895"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ir = (0, R.c)({
          defaultClassName: "_1scye89k",
          variantClassNames: {
            theme: {
              light: "_1scye89l",
              dark: "_1scye89m"
            },
            size: {
              small: "_1scye89n",
              medium: "_1scye89o",
              large: "_1scye89p",
              xlarge: "_1scye89q"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ar = (0, R.c)({
          defaultClassName: "_1hsn8lx0",
          variantClassNames: {
            size: {
              SM: "_1hsn8lx1",
              MD: "_1hsn8lx2",
              LG: "_1hsn8lx3",
              XL: "_1hsn8lx4",
              auto: "_1hsn8lx5"
            }
          },
          defaultVariants: {
            size: "MD"
          },
          compoundVariants: []
        });
      const Mr = (0, o.forwardRef)(function({
          image: e,
          size: t = "auto",
          testId: a,
          asChild: o,
          ...n
        }, s) {
          if (!e) return;
          const i = o ? b.DX : "div",
            l = (0, w.v6)({
              "data-testid": a,
              className: Ar({
                size: t
              })
            }, n);
          return (0, r.jsx)(i, {
            ref: s,
            ...l,
            children: (0, r.jsx)(ue, {
              src: e,
              className: "_1hsn8lx6"
            })
          })
        }),
        Er = (0, o.createContext)({
          size: void 0,
          interactive: !1,
          gradientColor: void 0,
          theme: "dark"
        }),
        Tr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          size: o = "medium",
          gradientColor: n,
          gradientType: s = "linear",
          interactive: i = !1,
          theme: l = "dark",
          ...c
        }, d) {
          const _ = ((e = "") => {
              if (!e || "string" != typeof e) return null;
              let t = e.replace("#", "");
              return 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
                r: parseInt(t.substring(0, 2), 16).toString(),
                g: parseInt(t.substring(2, 4), 16).toString(),
                b: parseInt(t.substring(4, 6), 16).toString()
              }
            })(n),
            u = _ && (0, j.DI)({
              [wr]: _.r,
              [Rr]: _.b,
              [Cr]: _.g
            }),
            m = a ? b.DX : "div",
            g = (0, w.v6)({
              "data-testid": t,
              className: Nr({
                gradient: s
              }),
              style: {
                ...u
              }
            }, c);
          return (0, r.jsx)(Er.Provider, {
            value: {
              size: o,
              gradientColor: n,
              interactive: i,
              theme: l
            },
            children: (0, r.jsx)(m, {
              ref: d,
              ...g,
              children: e
            })
          })
        }),
        zr = (0, o.forwardRef)(function({
          testId: e,
          asChild: t,
          children: a,
          ...n
        }, s) {
          const {
            interactive: i
          } = (0, o.useContext)(Er), l = t ? b.DX : "div", c = (0, w.v6)({
            "data-testid": e,
            className: Sr({
              interactive: i
            })
          }, n);
          return (0, r.jsx)(l, {
            ref: s,
            ...c,
            children: a
          })
        }),
        Pr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const i = (0, o.useContext)(Er);
          if (!i) return;
          const {
            size: l
          } = i, c = a ? b.DX : "div", d = (0, w.v6)({
            "data-testid": t,
            className: vr({
              size: l
            })
          }, n);
          return (0, r.jsx)(c, {
            ref: s,
            ...d,
            children: e
          })
        }),
        Fr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, o.useContext)(Er);
          if (!s) return;
          const {
            size: i
          } = s, l = (0, w.v6)({
            "data-testid": t,
            className: kr({
              size: i
            })
          }, a);
          return (0, r.jsx)("span", {
            ref: n,
            ...l,
            children: e
          })
        }),
        Dr = (0, o.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, w.v6)({
            className: "_1scye89j"
          }, e);
          return (0, r.jsx)(Mr, {
            ref: t,
            ...a
          })
        }),
        Lr = (0, o.forwardRef)(function({
          children: e,
          level: t = 5,
          testId: a,
          ...n
        }, s) {
          const i = (0, o.useContext)(Er);
          if (!i) return;
          const {
            size: d,
            theme: _
          } = i, u = (0, w.v6)({
            "data-testid": a,
            className: Ir({
              theme: _,
              size: d
            })
          }, n);
          return (0, r.jsx)(l.RsgMdTextComponent, {
            markdown: e,
            rsgRichTextOptions: {
              renderNode: {
                [yr.BLOCKS.HEADING_1]: (e, a) => (0, r.jsx)(c.Heading, {
                  level: t,
                  ref: s,
                  ...u,
                  children: a
                })
              }
            }
          })
        }),
        Gr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const i = (0, o.useContext)(Er);
          if (!i) return;
          const {
            size: l
          } = i, c = a ? b.DX : "div", d = (0, w.v6)({
            "data-testid": t,
            className: jr({
              size: l
            })
          }, n);
          return (0, r.jsx)(c, {
            ref: s,
            ...d,
            children: e
          })
        }),
        Wr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, o.useContext)(Er);
          if (!s) return;
          const {
            size: i,
            theme: l
          } = s, d = (0, h.m)(l, "normal"), _ = (0, w.v6)({
            "data-testid": t,
            className: (0, Dt.default)(d, xr({
              size: i
            }))
          }, a);
          return (0, r.jsx)(c.Button, {
            ref: n,
            ..._,
            children: e
          })
        });
      var qr = (0, R.c)({
        defaultClassName: "_120g2g73",
        variantClassNames: {
          appearance: {
            link: "_120g2g74",
            accent: "_120g2g75",
            primary: "_120g2g76",
            secondary: "_120g2g77",
            tertiary: "_120g2g78",
            ghost: "_120g2g79",
            information: "_120g2g7a",
            danger: "_120g2g7b"
          }
        },
        defaultVariants: {
          appearance: "primary"
        },
        compoundVariants: []
      });
      const Br = "WwwImageCard",
        Vr = (0, i.defineMessages)({
          image_carousel_screen_reader_announcer_label: {
            id: "image_carousel_screen_reader_announcer_label",
            description: "Image carousel screen reader announcer label",
            defaultMessage: "Now showing {selectedTab} of {total}"
          }
        });
      var Or = "var(--iast650)",
        $r = (0, R.c)({
          defaultClassName: "iast655",
          variantClassNames: {
            isActive: {
              true: "iast656",
              false: "iast657"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xr = (0, R.c)({
          defaultClassName: "iast659",
          variantClassNames: {
            overflowLeft: {
              true: "iast65a"
            },
            overflowRight: {
              true: "iast65b"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              overflowLeft: !0,
              overflowRight: !0
            }, "iast65c"]
          ]
        });
      const Ur = (0, o.createContext)({
          theme: "light",
          items: null,
          activeIndex: 0,
          focusedIndex: 0,
          setActiveIndex: null,
          setFocusedIndex: null
        }),
        Hr = (0, o.forwardRef)(function({
          theme: e = "light",
          items: t,
          children: a,
          asChild: n,
          testId: s,
          ...l
        }, c) {
          const [d, _] = (0, o.useState)(0), [u, m] = (0, o.useState)(0), {
            formatMessage: g
          } = (0, i.useIntl)(), p = (0, o.useMemo)(() => ({
            theme: e,
            items: t,
            activeIndex: d,
            focusedIndex: u,
            setActiveIndex: _,
            setFocusedIndex: m
          }), [e, t, d, u]), f = (0, h.m)(e), y = n ? b.DX : "div", k = (0, w.v6)({
            className: (0, Dt.default)("iast651", f),
            "data-testid": s
          }, l);
          return (0, r.jsxs)(Ur.Provider, {
            value: p,
            children: [(0, r.jsx)(y, {
              ref: c,
              ...k,
              children: a
            }), (0, r.jsx)(ao, {
              total: t.length,
              announcer: (e, t) => g(Vr.image_carousel_screen_reader_announcer_label, {
                selectedTab: `${e+1}`,
                total: `${t}`
              })
            })]
          })
        }),
        Kr = (0, o.createContext)(null),
        Yr = (0, o.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            activeIndex: n,
            setActiveIndex: s,
            focusedIndex: i,
            setFocusedIndex: l,
            theme: c
          } = (0, o.useContext)(Ur), {
            containerRef: d,
            buttonRefs: _,
            highlight: u,
            overflow: m
          } = ((e = 0, t = []) => {
            const a = (0, o.useRef)(null),
              r = (0, o.useRef)([]),
              [n, s] = (0, o.useState)({
                left: 0,
                width: 0
              }),
              [i, l] = (0, o.useState)({
                left: !1,
                right: !1
              }),
              c = (0, o.useCallback)(() => {
                const t = a.current,
                  o = r.current[e];
                if (!t || !o) return;
                const n = o.offsetLeft,
                  i = o.offsetWidth;
                s(e => e.left === n && e.width === i ? e : {
                  left: n,
                  width: i
                })
              }, [e]);
            return (0, o.useLayoutEffect)(() => {
              const e = () => requestAnimationFrame(c),
                t = "function" == typeof document.fonts?.ready?.then ? document.fonts.ready : void 0;
              t ? t.then(e) : e()
            }, [e, c, ...t]), (0, o.useEffect)(() => {
              const t = r.current[e];
              if (!t) return;
              const a = new ResizeObserver(() => c());
              return a.observe(t), () => a.disconnect()
            }, [e, c]), (0, o.useEffect)(() => {
              const e = a.current;
              if (!e) return;
              const t = () => {
                l({
                  left: e.scrollLeft > 0,
                  right: e.scrollWidth - e.clientWidth > 1 + e.scrollLeft
                })
              };
              t();
              const r = new ResizeObserver(t);
              return r.observe(e), e.addEventListener("scroll", t), () => {
                r.disconnect(), e.removeEventListener("scroll", t)
              }
            }, []), {
              containerRef: a,
              buttonRefs: r,
              highlight: n,
              overflow: i,
              remeasure: c
            }
          })(n, [e]), {
            onKeyDown: b
          } = (({
            count: e,
            focusedIndex: t,
            setFocusedIndex: a,
            setActiveIndex: r,
            buttonRefs: n
          }) => ({
            onKeyDown: (0, o.useCallback)(o => {
              if (!(e <= 0)) switch (o.key) {
                case "ArrowRight": {
                  o.preventDefault();
                  const r = (t + 1) % e;
                  a(r), n.current[r]?.focus(), n.current[r]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break
                }
                case "ArrowLeft": {
                  o.preventDefault();
                  const r = (t - 1 + e) % e;
                  a(r), n.current[r]?.focus(), n.current[r]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break
                }
                case "Home":
                  o.preventDefault(), a(0), n.current[0]?.focus();
                  break;
                case "End":
                  o.preventDefault(), a(e - 1), n.current[e - 1]?.focus();
                  break;
                case "Enter":
                case " ":
                  o.preventDefault(), r(t), a(t)
              }
            }, [e, t, a, r, n])
          }))({
            count: o.Children.count(e),
            focusedIndex: i,
            setFocusedIndex: l,
            setActiveIndex: s,
            buttonRefs: _
          }), g = (e, t) => {
            _.current[e] = t
          }, p = (e, t) => {
            if (!l || !s) return;
            s(e), l(e);
            const a = t ?? _.current[e];
            a && (a.focus(), "function" == typeof a.scrollIntoView && a.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest"
            }))
          }, f = (0, o.useMemo)(() => ({
            setButtonRef: g,
            onTabKeyDown: b,
            activateIndex: p
          }), [b]), y = (0, h.m)(c), k = (0, le.UP)(d, a), v = (0, w.v6)({
            className: (0, Dt.default)(Xr({
              overflowLeft: m.left,
              overflowRight: m.right
            }), y),
            role: "tablist"
          }, t);
          return (0, r.jsx)("div", {
            className: (0, Dt.default)("iast658", y),
            children: (0, r.jsxs)("div", {
              ref: k,
              ...v,
              onKeyDown: b,
              children: [(0, r.jsx)("div", {
                className: (0, Dt.default)("iast65e", y),
                style: {
                  transform: `translateX(calc(${u.left}px - ${j.LU.global.spacing.gap[50]}))`,
                  width: u.width
                }
              }), (0, r.jsx)(Kr.Provider, {
                value: f,
                children: e
              })]
            })
          })
        }),
        Zr = (0, o.forwardRef)(function({
          children: e,
          index: t,
          onClick: a,
          onKeyDown: n,
          ...s
        }, i) {
          const {
            activeIndex: l,
            focusedIndex: c,
            theme: d
          } = (0, o.useContext)(Ur), {
            setButtonRef: _,
            onTabKeyDown: u,
            activateIndex: m
          } = (() => {
            const e = (0, o.useContext)(Kr);
            if (!e) throw new Error("ImageCarousel.Tab must be used inside ImageCarousel.Tabs");
            return e
          })(), b = l === t, g = c === t, p = (0, h.m)(d), f = (0, le.UP)(e => _(t, e), i), y = (0, w.v6)({
            className: (0, Dt.default)("iast65d foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj", p)
          }, s);
          return (0, r.jsx)("button", {
            ref: f,
            ...y,
            role: "tab",
            type: "button",
            tabIndex: g ? 0 : -1,
            "aria-selected": b,
            "data-selected": b,
            onClick: e => {
              a?.(e), m(t, e.currentTarget)
            },
            onKeyDown: e => {
              n?.(e), u(e)
            },
            children: e
          })
        }),
        Jr = (0, o.memo)(Zr, (e, t) => e.children === t.children && e.index === t.index && e.appearance === t.appearance),
        Qr = (0, o.forwardRef)(function({
          children: e,
          mobileAspectRatio: t = "1/1",
          desktopAspectRatio: a = "16/9",
          ...o
        }, n) {
          const s = (0, le.Ub)(C.f.mobile),
            i = (0, w.v6)({
              className: "iast652",
              style: (0, j.DI)({
                [Or]: s ? t : a
              })
            }, o);
          return (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: e
          })
        }),
        eo = (0, o.forwardRef)(function({
          index: e,
          children: t,
          ...a
        }, n) {
          const {
            theme: s,
            activeIndex: i
          } = (0, o.useContext)(Ur), l = i === e, c = (0, h.m)(s), d = (0, w.v6)({
            className: (0, Dt.default)($r({
              isActive: l
            }), c),
            role: "tabpanel",
            hidden: !l,
            "aria-hidden": !l
          }, a);
          return (0, r.jsx)("div", {
            ref: n,
            ...d,
            children: t
          })
        }),
        to = (0, o.memo)(eo),
        ao = ({
          total: e,
          announcer: t
        }) => {
          const {
            activeIndex: a
          } = (0, o.useContext)(Ur);
          return e <= 0 || !a ? null : (0, r.jsx)(b.s6, {
            "aria-live": "polite",
            "aria-atomic": "true",
            children: t(a, e)
          })
        },
        ro = ({
          index: e,
          children: t
        }) => {
          const {
            activeIndex: a
          } = (0, o.useContext)(Ur), n = a !== e ? -1 : void 0;
          return (0, r.jsx)(b.DX, {
            tabIndex: n,
            children: t
          })
        },
        oo = "WwwImageCarousel";
      var no = a(13335);
      const so = (0, i.defineMessages)({
          image_marquee_cta_pause_label: {
            id: "image_marquee_cta_pause_label",
            description: "Image Marquee pause button label",
            defaultMessage: "Marquee Pause"
          },
          image_marquee_cta_play_label: {
            id: "image_marquee_cta_play_label",
            description: "Image Marquee play button label",
            defaultMessage: "Marquee Play"
          }
        }),
        io = (0, o.createContext)({
          imagesLoaded: !1,
          setImagesLoaded: () => {}
        }),
        lo = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const [i, l] = (0, o.useState)(!1), c = a ? b.DX : "section", d = (0, w.v6)({
            "data-testid": t,
            className: "b8qqdy0"
          }, n);
          return (0, r.jsx)(io.Provider, {
            value: {
              imagesLoaded: i,
              setImagesLoaded: l
            },
            children: (0, r.jsx)(c, {
              ref: s,
              ...d,
              children: e
            })
          })
        }),
        co = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          topGamesArray: n,
          bottomGamesArray: s,
          ...l
        }, d) {
          const {
            formatMessage: _
          } = (0, i.useIntl)(), u = a ? b.DX : "div", m = (0, w.v6)({
            "data-testid": t,
            className: "b8qqdy2"
          }, l), [g, p] = (0, o.useState)(!0), f = (0, o.useRef)(g);
          (0, o.useEffect)(() => {
            f.current = g
          }, [g]);
          const h = (0, o.useCallback)(e => (f.current || setTimeout(() => {
              e.plugins().autoScroll?.stop()
            }, 0), !0), []),
            [y, k] = (0, ze.A)({
              loop: !0,
              dragFree: !0,
              startIndex: 0,
              watchDrag: !1,
              containScroll: "keepSnaps",
              watchResize: h
            }, [(0, no.A)({
              playOnInit: !0,
              speed: .2,
              direction: "forward",
              startDelay: 0,
              stopOnInteraction: !1,
              stopOnMouseEnter: !1,
              stopOnFocusIn: !1,
              rootNode: null
            })]),
            [v, x] = (0, ze.A)({
              loop: !0,
              dragFree: !0,
              startIndex: 0,
              watchDrag: !1,
              containScroll: "keepSnaps",
              watchResize: h
            }, [(0, no.A)({
              playOnInit: !0,
              speed: .16,
              direction: "forward",
              startDelay: 10,
              stopOnInteraction: !1,
              stopOnMouseEnter: !1,
              stopOnFocusIn: !1,
              rootNode: null
            })]),
            j = (0, o.useRef)([]);
          (0, o.useEffect)(() => {
            j.current = [k, x].filter(Boolean)
          }, [k, x]);
          const C = (0, o.useCallback)(() => {
            const e = !g;
            j.current.forEach(t => {
              const a = t?.plugins().autoScroll;
              a && (e ? a.play() : a.stop())
            }), p(e)
          }, [g]);
          return (0, r.jsxs)("div", {
            className: "b8qqdy1",
            children: [(0, r.jsx)(c.IconButton, {
              appearance: "tertiary",
              label: _(g ? so.image_marquee_cta_pause_label : so.image_marquee_cta_play_label),
              "aria-label": _(g ? so.image_marquee_cta_play_label : so.image_marquee_cta_pause_label),
              size: "SM",
              icon: g ? "Pause" : "Play",
              onPress: C,
              className: "b8qqdy6"
            }), (0, r.jsxs)(u, {
              ref: d,
              ...m,
              children: [n && (0, r.jsx)(uo, {
                gamesArray: n,
                ref: y
              }), s && (0, r.jsx)(uo, {
                gamesArray: s,
                ref: v
              }), e]
            })]
          })
        }),
        _o = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "b8qqdy9 _1betujy6 _1betujy5"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        uo = (0, o.forwardRef)(function({
          gamesArray: e
        }, t) {
          if (e) return (0, r.jsx)("div", {
            className: "b8qqdy3",
            ref: t,
            children: (0, r.jsx)("div", {
              className: "b8qqdy4",
              children: e.map((e, t) => {
                if (e.boxArt) return (0, r.jsx)(mo, {
                  asChild: !0,
                  children: (0, r.jsx)(qt, {
                    src: e.boxArt,
                    context: "mobile",
                    sizes: "(min-width: 1570px) 260px, 20vw",
                    loading: "eager"
                  })
                }, `${t}-${e?.boxArt?.altText}`)
              })
            })
          })
        }),
        mo = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }) {
          const n = (0, w.v6)({
              "data-testid": t,
              className: "b8qqdy8"
            }, o),
            s = a ? b.DX : "div";
          return (0, r.jsx)(s, {
            ...n,
            children: e
          })
        }),
        bo = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t,
              className: "b8qqdya"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        go = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const n = (0, w.v6)({
            "data-testid": t,
            className: "b8qqdyb"
          }, a);
          return (0, r.jsx)(c.Heading, {
            ref: o,
            ...n,
            level: 3,
            children: e
          })
        }),
        po = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const n = (0, w.v6)({
            "data-testid": t,
            className: "b8qqdyc"
          }, a);
          return (0, r.jsx)(c.Body, {
            ref: o,
            ...n,
            size: "LG",
            appearance: "bold",
            children: e
          })
        }),
        fo = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          link: a,
          ...o
        }, n) {
          const s = (0, w.v6)({
            "data-testid": t,
            className: "b8qqdyd"
          }, o);
          return a?.url ? (0, r.jsx)(c.Button, {
            ref: n,
            ...s,
            size: "XL",
            asChild: !0,
            children: (0, r.jsx)(x.N, {
              href: a?.url,
              rel: "noreferrer",
              target: "_self",
              children: e
            })
          }) : (0, r.jsx)(c.Button, {
            ref: n,
            ...s,
            size: "LG",
            children: e
          })
        }),
        ho = ({
          block: e
        }) => {
          const {
            trackEvent: t,
            useTrackPageSectionImpression: a
          } = q(), {
            ref: o
          } = a();
          if (!e) return null;
          const {
            cta: n,
            description: s,
            title: i
          } = e, l = e?.marqueeingElementsCollection?.items[0]?.referencesCollection?.items, c = l ? Math.floor(l.length / 2) : 0, d = l?.slice(0, c) || [], _ = l?.slice(c) || [];
          return (0, r.jsxs)(lo, {
            ref: o,
            children: [(0, r.jsx)(co, {
              topGamesArray: d,
              bottomGamesArray: _
            }), (0, r.jsxs)(_o, {
              children: [(0, r.jsxs)(bo, {
                children: [(0, r.jsx)(go, {
                  children: i
                }), (0, r.jsx)(po, {
                  children: s
                })]
              }), n && (0, r.jsx)(fo, {
                appearance: n?.appearance,
                override_backgroundColor: n?.backgroundColor,
                iconLeft: n?.iconLeft?.icon,
                iconRight: n?.iconRight?.icon,
                link: n?.link,
                onPress: (u = n, () => t(u.analyticsData, u)),
                children: n?.text
              })]
            })]
          });
          var u
        },
        yo = "WwwImagesMarqueeModule",
        ko = "WwwLightboxImage",
        vo = "WwwLinkOutImage";
      var xo = (0, R.c)({
          defaultClassName: "_64q2nvi",
          variantClassNames: {
            appearance: {
              primary: "_64q2nvj",
              secondary: "_64q2nvk",
              tertiary: "_64q2nvl",
              ghost: "_64q2nvm",
              information: "_64q2nvn",
              danger: "_64q2nvo",
              accent: "_64q2nvp",
              link: "_64q2nvq"
            }
          },
          defaultVariants: {
            appearance: "primary"
          },
          compoundVariants: []
        }),
        jo = ((0, R.c)({
          defaultClassName: "_64q2nv1",
          variantClassNames: {
            layout: {
              primary: "_64q2nv2",
              secondary: "_64q2nv3",
              default: "_64q2nv4"
            }
          },
          defaultVariants: {
            layout: "default"
          },
          compoundVariants: []
        }), (0, R.c)({
          defaultClassName: "_64q2nv5 _1betujy7",
          variantClassNames: {
            grid: {
              "4_up_a": "_64q2nv6",
              "4_up_b": "_64q2nv7",
              "4_up_c": "_64q2nv8",
              "4_up_d": "_64q2nv9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        })),
        wo = (0, R.c)({
          defaultClassName: "_64q2nva",
          variantClassNames: {
            type: {
              primary: "_64q2nvb",
              secondary: "_64q2nvc",
              tertiary: "_64q2nvd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Co = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              className: "_64q2nv0 _1betujy6 _1betujy5",
              "data-testid": a
            }, o);
          return (0, r.jsx)(s, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Ro = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gridType: o,
          ...n
        }, s) {
          const i = t ? b.DX : "div",
            l = (0, w.v6)({
              className: jo({
                grid: o
              }),
              "data-testid": a
            }, n);
          return (0, r.jsx)(i, {
            ...l,
            ref: s,
            children: e
          })
        }),
        So = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gridType: n,
          ...s
        }, i) {
          const l = t ? b.DX : "div",
            c = (0, w.v6)({
              className: (0, Dt.default)(jo({
                grid: n || "4_up_a"
              })),
              "data-testid": a
            }, s);
          return (0, r.jsx)(l, {
            ...c,
            ref: i,
            children: o.Children.map(e, (e, t) => (0, o.isValidElement)(e) && (0, o.cloneElement)(e, {
              style: {
                gridArea: String.fromCharCode(97 + t)
              }
            }))
          })
        }),
        No = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          type: o,
          ...n
        }, s) {
          const i = t ? b.DX : "div",
            l = (0, w.v6)({
              className: wo({
                type: o
              }),
              "data-testid": a
            }, n);
          return (0, r.jsx)(i, {
            ...l,
            ref: s,
            children: e
          })
        }),
        Io = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          defaultSlide: a = 0,
          onCarouselSwipe: n,
          ...s
        }, i) {
          const [l, c] = (0, o.useState)(!1), {
            ref: d,
            api: _,
            currentSlide: u
          } = (({
            autoScrollEnabled: e = !1,
            defaultSlide: t,
            duration: a = 40
          }) => {
            const r = (0, o.useRef)(null),
              [n, s] = (0, o.useState)(t),
              [i, l] = (0, o.useState)(0),
              [c, d] = (0, o.useState)(!1),
              [_, u] = (0, ze.A)({
                axis: "x",
                align: "start",
                startIndex: t,
                active: !0,
                containScroll: "trimSnaps",
                watchDrag: c,
                duration: a
              }, []),
              m = (0, o.useCallback)(() => {
                u && (l(u?.scrollSnapList()?.length ?? 0), d(u?.canScrollNext() || u?.canScrollPrev()))
              }, [u]),
              b = (0, o.useCallback)(() => {
                u && s(u?.selectedScrollSnap() ?? 0)
              }, [u]);
            return (0, o.useEffect)(() => {
              u && r?.current && (e ? r?.current.play() : r.current.stop())
            }, [e, u]), (0, o.useEffect)(() => {
              if (u) return u.on("init", m), u.on("reInit", m), u.on("select", b), m(), () => {
                u.off("init", m), u.off("reInit", m), u.off("select", b)
              }
            }, [u, m, b]), {
              ref: _,
              currentSlide: n,
              totalSlides: i,
              api: u
            }
          })({
            defaultSlide: a
          }), m = (0, le.UP)(d, i), b = (0, w.v6)({
            className: "_64q2nve",
            "data-testid": t
          }, s);
          return (0, o.useEffect)(() => {
            const e = () => {
              c(!0)
            };
            return _?.on("pointerUp", e), l && n?.(), c(!1), () => {
              _?.off("pointerUp", e)
            }
          }, [_, u]), (0, r.jsx)(Ue, {
            ...b,
            ref: m,
            children: e
          })
        }),
        Ao = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const n = (0, w.v6)({
            className: "_64q2nvf",
            "data-testid": t
          }, a);
          return (0, r.jsx)(He, {
            ...n,
            ref: o,
            children: e
          })
        }),
        Mo = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          textColor: a,
          size: o,
          ...n
        }, s) {
          const i = (0, w.v6)({
            className: "_64q2nvg",
            "data-testid": t,
            gradientType: "radial",
            theme: "dark" === a ? "light" : "dark",
            interactive: !0,
            size: o
          }, n);
          return (0, r.jsx)(Tr, {
            ...i,
            ref: s,
            children: e
          })
        }),
        Eo = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const n = (0, w.v6)({
            className: "_64q2nvh",
            "data-testid": t
          }, a);
          return (0, r.jsx)(Pr, {
            ...n,
            ref: o,
            children: e
          })
        }),
        To = Fr,
        zo = Lr,
        Po = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const n = (0, w.v6)({
            "data-testid": t
          }, a);
          return (0, r.jsx)(Wr, {
            ...n,
            ref: o,
            asChild: !0,
            children: (0, r.jsx)("span", {
              className: xo({
                appearance: a.appearance
              }),
              tabIndex: -1,
              children: e
            })
          })
        }),
        Fo = zr,
        Do = (0, i.defineMessages)({
          masonry_grid_external_store_link: {
            id: "masonry_grid_external_store_link",
            description: "Tells the user this is an external link to the store.",
            defaultMessage: "External link to Store"
          }
        });
      var Lo = "_18nij4j0";
      const Go = {
          small: 6,
          medium: 5,
          large: 4,
          xlarge: 4
        },
        Wo = ({
          card: e,
          context: t,
          size: a
        }) => {
          const {
            textColor: o,
            badgeText: n,
            text: s,
            cta: i,
            backgroundImage: l
          } = e, c = Go[a];
          return (0, r.jsxs)(Mo, {
            size: a,
            textColor: o,
            children: [(0, r.jsxs)(Eo, {
              children: [n && (0, r.jsx)(To, {
                children: n
              }), s && (0, r.jsx)(zo, {
                level: c,
                children: s
              }), i && (0, r.jsx)(Po, {
                iconLeft: i.iconLeft?.icon,
                iconRight: i.iconRight?.icon,
                appearance: i.appearance,
                override_backgroundColor: i?.backgroundColor,
                size: "LG",
                children: i.text
              })]
            }), l && (0, r.jsx)(Fo, {
              asChild: !0,
              children: (0, r.jsx)(qt, {
                alt: l?.altText,
                src: l,
                context: t
              })
            })]
          })
        },
        qo = "WwwMasonryGrid";
      var Bo = a(68196),
        Vo = a(51135),
        Oo = a(26161),
        $o = a(49906),
        Xo = a(60150);
      const Uo = (0, i.defineMessages)({
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            description: "Newsletter Subscription Alert - Successfully Subscribed title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details_amp: {
            id: "ns_successfully_subscribed_details_amp",
            description: "Newsletter Subscription Alert - Successfully Subscribed details post AMP launch",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings."
          },
          ns_error_preferences_title: {
            id: "ns_error_preferences_title",
            description: "Newsletter Subscription Alert - Error (Check Preferences) title",
            defaultMessage: "Error"
          },
          ns_error_preferences_details: {
            id: "ns_error_preferences_details",
            description: "Newsletter Subscription Alert - Error (Check Preferences) details",
            defaultMessage: "We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later."
          },
          ns_error_generic_title: {
            id: "ns_error_generic_title",
            description: "Newsletter Subscription Alert - Error (Generic) title",
            defaultMessage: "Error"
          },
          ns_error_generic_details: {
            id: "ns_error_generic_details",
            description: "Newsletter Subscription Alert - Error (Generic) details",
            defaultMessage: "We cannot sign up this email address to our newsletter at this time."
          },
          ns_already_subbed_title: {
            id: "ns_already_subbed_title",
            description: "Newsletter Subscription Alert - Already Subscribed title",
            defaultMessage: "Already Subscribed"
          },
          ns_already_subbed_details_amp: {
            id: "ns_already_subbed_details_amp",
            description: "Newsletter Subscription Alert - Already Subscribed details post AMP launch",
            defaultMessage: "You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings."
          },
          ns_check_email_title: {
            id: "ns_check_email_title",
            description: "Newsletter Subscription Alert - Check Email title",
            defaultMessage: "Check Your Email"
          },
          ns_check_email_details: {
            id: "ns_check_email_details",
            description: "Newsletter Subscription Alert - Check Email details",
            defaultMessage: "To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with."
          },
          ns_confirm_title: {
            id: "ns_confirm_title",
            description: "Newsletter Subscription Alert - Confirm your subsciption title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_details: {
            id: "ns_confirm_details",
            description: "Newsletter Subscription Alert - Confirm your subsciption details",
            defaultMessage: "Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below."
          },
          ns_confirm_after_register_title: {
            id: "ns_confirm_after_register_title",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_after_register_details: {
            id: "ns_confirm_after_register_details",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation details",
            defaultMessage: "You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?"
          },
          ns_ok_button_text: {
            id: "ns_ok_button_text",
            description: "Newsletter Subscription Alert - OK button text",
            defaultMessage: "OK"
          },
          ns_manage_prefs_button_text: {
            id: "ns_manage_prefs_button_text",
            description: "Newsletter Subscription Alert - Manage Preferences button text",
            defaultMessage: "Manage Preferences"
          },
          ns_yes_subscribe_text: {
            id: "ns_yes_subscribe_text",
            description: "Newsletter Subscription Alert - Yes, Subscribe button text",
            defaultMessage: "Yes, Subscribe"
          },
          ns_go_back_text: {
            id: "ns_go_back_text",
            description: "Newsletter Subscription Alert - No, go back button text",
            defaultMessage: "No, Go Back"
          }
        }),
        Ho = {
          SUCCESS: {
            icon: "check",
            heading: Uo.ns_successfully_subscribed_title,
            bodyText: Uo.ns_successfully_subscribed_details_amp,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: Uo.ns_check_email_title,
            bodyText: Uo.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: Uo.ns_error_preferences_title,
            bodyText: Uo.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: Uo.ns_error_generic_title,
            bodyText: Uo.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: Uo.ns_already_subbed_title,
            bodyText: Uo.ns_already_subbed_details_amp,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: Uo.ns_confirm_after_register_title,
            bodyText: Uo.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: Uo.ns_confirm_title,
            bodyText: Uo.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        Ko = {
          0: Ho.ERROR_PREFERENCES,
          1: Ho.SUCCESS,
          2: Ho.ERROR_PREFERENCES,
          3: Ho.ERROR_PREFERENCES,
          4: Ho.ERROR_GENERIC
        },
        Yo = (0, $o.eU)(null),
        Zo = (e, t) => {
          const [a, r] = (0, o.useState)(), [n, l] = (0, o.useState)(!1), [c, d] = (0, o.useState)(!1), [_, u] = (0, o.useState)(!1), [m, b] = (0, o.useState)(!1), [g, f] = (0, Xo.fp)(Yo), h = (0, i.useIntl)(), {
            track: y
          } = (0, p.useGtmTrack)(), k = {
            preferences: `https://${e.www}.rockstargames.com/account/communications`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          };
          (0, o.useEffect)(() => {
            a ? (d(!0), u(!1)) : d(!1)
          }, [a]);
          const v = {
              ...Ho.NEW_ACCOUNT,
              closeOnOutsideClick: !1,
              buttons: [{
                buttonText: h.formatMessage(Uo.ns_yes_subscribe_text),
                style: "monochrome",
                onClick: () => {
                  x()
                }
              }, {
                buttonText: h.formatMessage(Uo.ns_go_back_text),
                onClick: () => {
                  r(null)
                }
              }]
            },
            x = async () => (y({
              event: "cta_subscribe_news",
              section_layout: t.loggedIn ? "signed in" : "signed out",
              element_placement: "newsletter subscribe",
              text: "subscribe now"
            }), t.loggedIn || window.location.assign(k.auth), t.loggedIn && t.isAMinor ? (r(Ho.ERROR_GENERIC), b(!1), void y({
              event: "alert_error",
              text: "error message with no preferences link",
              element_placement: "newsletter subscribe"
            })) : t.loggedIn && !g || t.loggedIn && 3 == g ? void await j() : t.loggedIn && g ? (y({
              event: "alert_update",
              text: "alert - user already subscribed",
              element_placement: "newsletter subscribe"
            }), r(Ho.ALREADY_SUBSCRIBED), void b(!1)) : void 0), j = async () => {
              const {
                error: e = null,
                result: a
              } = await (0, s.coreScApiFetch)("marketing/update", {
                fetchOptions: {
                  method: "POST"
                },
                pingBearer: t.pingBearer,
                query: {
                  subscribe: !0
                }
              });
              if (e) f(0), r(Ho.ERROR_GENERIC), y({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              });
              else {
                const e = a.status;
                f(e), r(Ko[e]), 1 === e ? (y({
                  event: "subscribe_news_success",
                  element_placement: "newsletter subscribe"
                }), y({
                  event: "alert_update",
                  text: "user subscribed successfully",
                  element_placement: "newsletter subscribe"
                })) : y({
                  event: "alert_error",
                  text: "error message with preferences link",
                  element_placement: "newsletter subscribe"
                })
              }
            };
          return (0, o.useEffect)(() => {
            l(1 === g)
          }, [g]), (0, o.useEffect)(() => {
            (async () => {
              await (async () => {
                void 0 !== t.loggedIn && (t.loggedIn ? await (async () => {
                  if (-1 === g) return;
                  f(-1), u(!0);
                  const {
                    error: a = null,
                    result: o
                  } = await (0, s.coreScApiFetch)("marketing/status", {
                    pingBearer: t.pingBearer
                  });
                  if (a) f(0), u(!1);
                  else {
                    const a = o.status;
                    f(a), t.isFromAuth && (a => {
                      if (e.navigate(".", {
                          replace: !0
                        }), t.loggedIn) switch (a) {
                        case 1:
                          t.isNewAccount ? (y({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), y({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), r(Ho.SUCCESS)) : (y({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), r(Ho.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          y({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), r(Ho.ERROR_GENERIC);
                          break;
                        default:
                          t.isNewAccount ? (r(v), y({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : j()
                      }
                    })(a), u(!1)
                  }
                })() : u(!1))
              })()
            })()
          }, [t.loggedIn]), {
            dialog: a,
            handleSubscribeButton: x,
            isButtonLoading: m,
            isLoading: _,
            isSubscribed: n,
            setShowDialog: d,
            showDialog: c,
            subscriptionStatus: g,
            urls: k,
            setDialog: r
          }
        },
        Jo = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": a,
              className: "l1gjt90 _1betujy6 _1betujy5"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        Qo = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : c.Heading,
            i = (0, w.v6)({
              "data-testid": a,
              className: "l1gjt91"
            }, o);
          return (0, r.jsx)(s, {
            level: 2,
            ref: n,
            ...i,
            children: e
          })
        }),
        en = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": a,
              className: "l1gjt92"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        tn = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": a,
              className: "l1gjt94"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        an = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          isDisabled: a,
          ...o
        }, n) {
          const s = (0, w.v6)({
            "data-testid": t,
            isDisabled: a
          }, o);
          return (0, r.jsx)(c.Button, {
            appearance: "primary",
            size: "LG",
            ref: n,
            ...s,
            children: e
          })
        }),
        rn = "WwwNewsletterSubscribe";
      var on = (0, R.c)({
          defaultClassName: "_1ozycm4b",
          variantClassNames: {
            imagePlacement: {
              left: "_1ozycm4c",
              right: "_1ozycm4d",
              vertical: "_1ozycm4e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nn = (0, R.c)({
          defaultClassName: "_1ozycm4f",
          variantClassNames: {
            imagePlacement: {
              left: "_1ozycm4g",
              right: "_1ozycm4h",
              vertical: "_1ozycm4i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        sn = "var(--_1ozycm40)",
        ln = "_1ozycm4o",
        cn = (0, R.c)({
          defaultClassName: "_1ozycm44",
          variantClassNames: {
            contentAlignment: {
              center: "_1ozycm45",
              left: "_1ozycm46"
            },
            imagePlacement: {
              left: "_1ozycm47",
              right: "_1ozycm48",
              vertical: "_1ozycm49"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const dn = (0, o.createContext)(void 0),
        _n = (0, o.forwardRef)(function({
          colorMode: e = "dark",
          backgroundColor: t,
          gradientEnabled: a = !0,
          imagePlacement: n = "left",
          children: s,
          asChild: i,
          testId: l,
          ...c
        }, d) {
          const _ = i ? b.DX : "div",
            u = "dark" === e ? "#000000" : "lightgrey",
            m = (0, w.v6)({
              "data-testid": l,
              className: "_1ozycm42 _1betujy6 _1betujy5",
              style: (0, j.DI)({
                [sn]: t ?? u
              })
            }, c),
            g = (0, le.Ub)(C.f.mobile),
            p = g ? "vertical" : n,
            f = "left" === n ? s : o.Children.toArray(s).reverse();
          return (0, r.jsx)(dn.Provider, {
            value: {
              colorMode: e,
              backgroundColor: t,
              imagePlacement: p,
              gradientEnabled: a
            },
            children: (0, r.jsx)(_, {
              ref: d,
              ...m,
              children: g ? s : f
            })
          })
        }),
        un = (0, o.forwardRef)(function({
          contentAlignment: e,
          children: t,
          testId: a,
          asChild: n,
          ...s
        }, i) {
          const l = (0, o.useContext)(dn);
          if (!l) return;
          const {
            colorMode: c,
            gradientEnabled: d,
            imagePlacement: _
          } = l, u = n ? b.DX : "div", m = (0, h.m)(c ?? "dark", "normal"), g = (0, w.v6)({
            "data-testid": a,
            className: (0, Dt.default)(m, "_1ozycm43", cn({
              contentAlignment: e,
              imagePlacement: _
            }), !d && "_1ozycm4a")
          }, s);
          return (0, r.jsx)(u, {
            ref: i,
            ...g,
            children: t
          })
        }),
        mn = (0, o.forwardRef)(function({
          image: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const i = (0, le.Ub)(C.f.tabletMediumAndLarger) ? "16:9" : "1:1",
            l = (0, o.useContext)(dn);
          if (!l || !e) return;
          const {
            imagePlacement: c,
            gradientEnabled: d
          } = l, _ = a ? b.DX : "div", u = (0, w.v6)({
            "data-testid": t,
            className: on({
              imagePlacement: c
            })
          }, n);
          return (0, r.jsxs)(_, {
            ref: s,
            ...u,
            children: [d && (0, r.jsx)("div", {
              className: nn({
                imagePlacement: c
              })
            }), (0, r.jsx)(qt, {
              src: e,
              context: i,
              className: "_1ozycm4j"
            })]
          })
        }),
        bn = (0, o.forwardRef)(function({
          ...e
        }, t) {
          return (0, r.jsx)(Mr, {
            ref: t,
            ...e
          })
        }),
        gn = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          if (!e) return;
          const n = (0, w.v6)({
            "data-testid": t,
            className: "_1ozycm4k"
          }, a);
          return (0, r.jsx)(c.Button, {
            ref: o,
            ...n,
            children: e
          })
        }),
        pn = (0, o.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const o = (0, w.v6)({
            className: "_1ozycm4l"
          }, t);
          return (0, r.jsx)(c.Heading, {
            ref: a,
            ...o,
            children: e
          })
        }),
        fn = (0, o.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const o = (0, w.v6)({
            className: "_1ozycm4m"
          }, t);
          return (0, r.jsx)(c.Body, {
            ref: a,
            ...o,
            children: e
          })
        }),
        hn = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          if (!e) return;
          const n = (0, w.v6)({
            "data-testid": t,
            className: "_1ozycm4n"
          }, a);
          return (0, r.jsx)("div", {
            ref: o,
            ...n,
            children: e
          })
        }),
        yn = (0, o.forwardRef)(function({
          markdown: e,
          onHyperlinkClick: t,
          testId: a,
          ...o
        }, n) {
          if (!e) return;
          const s = (0, w.v6)({
              "data-testid": a,
              className: ln
            }, o),
            i = {
              [l.ContentfulTypes.BLOCKS.PARAGRAPH]: (e, t) => (0, r.jsx)(c.Body, {
                size: "XS",
                className: ln,
                children: t
              }),
              [l.ContentfulTypes.INLINES.HYPERLINK]: (e, a) => {
                return (0, r.jsx)("a", {
                  href: e.data.uri,
                  className: "_1ozycm4p",
                  onClick: (o = e, () => t?.(o)),
                  children: a
                });
                var o
              }
            };
          return (0, r.jsx)("div", {
            ref: n,
            ...s,
            children: (0, r.jsx)(l.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: i
              }
            })
          })
        }),
        kn = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          if (!e) return;
          const n = (0, w.v6)({
            "data-testid": t,
            className: "_1ozycm4q"
          }, a);
          return (0, r.jsx)(c.Label, {
            ref: o,
            ...n,
            size: "XS",
            appearance: "bold",
            children: e
          })
        }),
        vn = "WwwPromoModule",
        xn = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": a,
              className: "_174ett30 _1betujy6 _1betujy5"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            style: {
              backgroundImage: "\n        linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.5) 50%),\n        url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c0a5c2692eb47690bbaa34cde2f2173.jpg)"
            },
            ...i,
            children: e
          })
        }),
        jn = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": a,
              className: "_174ett31"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        wn = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, o) {
          const n = t ? b.DX : "div",
            s = (0, w.v6)({
              className: "_174ett32"
            }, a);
          return (0, r.jsx)(n, {
            ref: o,
            ...s,
            children: e
          })
        }),
        Cn = (0, o.forwardRef)(function({
          asChild: e,
          testId: t,
          altText: a,
          ...o
        }, n) {
          const s = e ? b.DX : "div",
            i = (0, w.v6)({
              "data-testid": t
            }, o);
          return (0, r.jsxs)(s, {
            ref: n,
            ...i,
            children: [(0, r.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90e8a0c40853b90840df2c9de1542722.svg",
              className: "_174ett34",
              alt: a
            }), (0, r.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/def13a31001678085d3deddd9381ae73.svg",
              className: "_174ett35",
              alt: a
            })]
          })
        }),
        Rn = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, n) {
          const s = t ? b.DX : c.Body,
            i = (0, w.v6)({
              "data-testid": a,
              className: "_174ett36 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        Sn = "WwwSupportCalloutModule";
      var Nn = "var(--lgxyya7)",
        In = (0, R.c)({
          defaultClassName: "lgxyyac",
          variantClassNames: {
            align: {
              left: "lgxyyad",
              center: "lgxyyae",
              right: "lgxyyaf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        An = "var(--lgxyya9)",
        Mn = "var(--lgxyyaa)",
        En = (0, R.c)({
          defaultClassName: "lgxyya0",
          variantClassNames: {
            align: {
              left: "lgxyya1",
              center: "lgxyya2",
              right: "lgxyya3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Tn = (0, o.createContext)({
          align: "left"
        }),
        zn = (0, o.forwardRef)(function({
          align: e = "left",
          children: t,
          testId: a,
          asChild: o,
          ...n
        }, s) {
          const i = o ? b.DX : "div",
            l = (0, w.v6)({
              "data-testid": a,
              className: En({
                align: e
              })
            }, n);
          return (0, r.jsx)(Tn.Provider, {
            value: {
              align: e
            },
            children: (0, r.jsx)(i, {
              ref: s,
              ...l,
              children: t
            })
          })
        }),
        Pn = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const n = (0, w.v6)({
            "data-testid": t,
            className: "lgxyya6"
          }, a);
          return (0, r.jsx)("div", {
            className: "lgxyya5",
            children: (0, r.jsx)(c.Badge.Root, {
              appearance: "primary",
              ref: o,
              ...n,
              children: (0, r.jsx)(c.Badge.Label, {
                children: e
              })
            })
          })
        }),
        Fn = (0, o.forwardRef)(function({
          bodyTextWrap: e,
          children: t,
          testId: a,
          ...o
        }, n) {
          const s = (0, w.v6)({
            "data-testid": a,
            className: "lgxyya8",
            style: (0, j.DI)({
              [Nn]: e
            })
          }, o);
          return t ? (0, r.jsx)("div", {
            ref: n,
            ...s,
            children: t
          }) : null
        }),
        Dn = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          size: a = "SM",
          ...o
        }, n) {
          const s = (0, w.v6)({
            "data-testid": t,
            className: "lgxyya4"
          }, o);
          return (0, r.jsx)(c.Label, {
            size: a,
            appearance: "bold",
            ref: n,
            ...s,
            children: e
          })
        }),
        Ln = (0, o.forwardRef)(function({
          headerSize: e,
          textColor: t,
          headerTextWrap: a,
          children: n,
          testId: s,
          ...i
        }, l) {
          const d = (0, le.Ub)(C.f.desktopSmallAndLarger),
            [_, u] = (0, o.useState)(2),
            m = (0, w.v6)({
              "data-testid": s,
              className: (0, Dt.default)("lgxyyag", t && "lgxyyab"),
              style: (0, j.DI)({
                [An]: t,
                [Mn]: a
              }),
              asChild: !0
            }, i);
          return (0, o.useEffect)(() => {
            "XS" === e ? u(d ? 5 : 6) : "SM" === e ? u(d ? 4 : 5) : "MD" === e ? u(d ? 3 : 4) : "LG" === e ? u(d ? 2 : 3) : "XL" === e && u(d ? 1 : 2)
          }, [e, d]), (0, r.jsx)(c.Heading, {
            level: _,
            ref: l,
            ...m,
            children: (0, r.jsx)("h2", {
              children: n
            })
          })
        }),
        Gn = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, n) {
          const s = a ? b.DX : "p",
            i = (0, w.v6)({
              "data-testid": t,
              className: "lgxyyah"
            }, o);
          return (0, r.jsx)(s, {
            ref: n,
            ...i,
            children: e
          })
        }),
        Wn = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const {
            align: s
          } = (0, o.useContext)(Tn), i = (0, w.v6)({
            "data-testid": t,
            className: In({
              align: s
            })
          }, a);
          return (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: e
          })
        }),
        qn = "WwwTextBlock";
      var Bn = (0, R.c)({
        defaultClassName: "ftz7gr3 _1betujy6 _1betujy5",
        variantClassNames: {
          alignment: {
            image_left: "ftz7gr4",
            image_right: "ftz7gr5"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Vn = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          variant: o = "image_right",
          ...n
        }, s) {
          const i = a ? b.DX : "div",
            l = (0, w.v6)({
              "data-testid": t,
              className: Bn({
                alignment: o
              })
            }, n);
          return (0, r.jsx)(i, {
            ref: s,
            ...l,
            children: e
          })
        }),
        On = (0, o.forwardRef)(function({
          testId: e,
          altText: t,
          ...a
        }, o) {
          const n = (0, w.v6)({
            "data-testid": e,
            className: "ftz7gr6",
            alt: t
          }, a);
          return (0, r.jsx)("img", {
            ref: o,
            ...n
          })
        }),
        $n = (0, o.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const o = (0, w.v6)({
            className: "ftz7gr7"
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...o,
            children: e
          })
        }),
        Xn = "WwwTextWithBadge";
      var Un = a(31879),
        Hn = a.n(Un);
      const Kn = "WwwVideoPlayer";
      var Yn = a(20155);
      const Zn = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        Jn = (0, i.defineMessages)({
          engagement_legal_text: {
            id: "engagement_legal_text",
            description: "Legal Text",
            defaultMessage: "Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms."
          },
          engagement_faq: {
            id: "engagement_faq",
            description: "FAQ Text",
            defaultMessage: "FAQ"
          },
          engagement_faqs: {
            id: "engagement_faqs",
            description: "FAQs Text in plural",
            defaultMessage: "FAQs"
          },
          engagement_link_account: {
            id: "engagement_link_account",
            description: "Text for button to link another account",
            defaultMessage: "Link Another Account"
          },
          engagement_link_console_account: {
            id: "engagement_link_console_account",
            description: "Text for button to link another game/console account",
            defaultMessage: "Link Game Account"
          }
        });
      var Qn = a(17301);
      const es = ({
        legalText: e
      }) => (0, r.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: e
        }
      });
      var ts = "_3rocp6l",
        as = (0, R.c)({
          defaultClassName: "_3rocp6n",
          variantClassNames: {
            slideName: {
              success: "_3rocp6o",
              error: "_3rocp6p"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        rs = "_3rocp6m",
        os = "_3rocp6i",
        ns = "_3rocp6g",
        ss = "_3rocp65",
        is = "_3rocp66",
        ls = "_3rocp6q",
        cs = "_3rocp6j",
        ds = "_3rocp63",
        _s = "_3rocp68",
        us = "_3rocp6z",
        ms = "_3rocp6a",
        bs = "_3rocp6h",
        gs = "_3rocp67";
      const ps = ({
        content: e,
        loggedIn: t,
        addClaim: a,
        signin: o,
        landingSlide: n
      }) => (0, r.jsxs)("div", {
        className: (0, Dt.default)(ss, "_3rocp6c _3rocp6b", "onScreen" === n ? _s : "", "hidden" === n ? is : "", "visible" === n ? gs : ""),
        children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
          src: e.introScreen.image.sources.mobile,
          className: ds,
          alt: e.introScreen.image.alt
        }), (0, r.jsxs)("div", {
          className: bs,
          children: [(0, r.jsx)("div", {
            className: ms,
            children: (0, r.jsxs)("div", {
              className: ts,
              children: [(0, r.jsx)(c.Badge.Root, {
                className: "_3rocp6k",
                appearance: "primary",
                children: (0, r.jsx)(c.Badge.Label, {
                  children: e.introScreen.tag
                })
              }), (0, r.jsxs)("div", {
                className: (0, Dt.default)(rs, "override"),
                children: [(0, r.jsx)(c.Heading, {
                  level: 3,
                  children: e.introScreen.headline
                }), (0, r.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.introScreen.body
                  }
                })]
              }), (0, r.jsx)("div", {
                className: ns,
                children: (0, r.jsx)(c.Button, {
                  className: us,
                  appearance: "primary",
                  size: "LG",
                  onClick: t ? a : o,
                  children: t ? e.introScreen.btnText.loggedIn : e.introScreen.btnText.loggedOut
                })
              })]
            })
          }), (0, r.jsx)("div", {
            className: os,
            children: (0, r.jsx)("div", {
              className: (0, Dt.default)(cs, "override"),
              children: (0, r.jsx)(es, {
                legalText: e.legalText
              })
            })
          })]
        })]
      });
      var fs = a(14653),
        hs = a(18168),
        ys = a(15437),
        ks = a(21297),
        vs = a(36421),
        xs = a(37996),
        js = a(46991),
        ws = a(69364);
      const Cs = (0, i.defineMessages)({
          character_card_a11y_intro: {
            id: "character_card_a11y_intro",
            description: "The a11y intro for the charcter card.",
            defaultMessage: "Character Card:"
          },
          character_card_a11y_player: {
            id: "character_card_a11y_player",
            description: "The a11y player name for the charcter card.",
            defaultMessage: "Player {player}."
          },
          character_card_a11y_rank: {
            id: "character_card_a11y_rank",
            description: "The a11y rank for the charcter card.",
            defaultMessage: "Rank {rank}."
          }
        }),
        Rs = "rockstargames-sites-rockstargamesb2d75ee6d468c7fde9ad28ba90ca2804",
        Ss = (0, o.forwardRef)(function({
          children: e,
          className: t,
          testId: a,
          ...o
        }, n) {
          const {
            formatMessage: s
          } = (0, i.useIntl)(), l = (0, vs.v6)(o, {
            "data-testid": a,
            className: (0, Dt.default)("rockstargames-sites-rockstargamesd738b88fa09e0960678501900af6dae1", t)
          });
          return (0, r.jsxs)("div", {
            ref: n,
            ...l,
            children: [(0, r.jsx)(ks.s6, {
              children: s(Cs.character_card_a11y_intro)
            }), e]
          })
        }),
        Ns = (0, ws.g)(Ss),
        Is = (0, o.forwardRef)(function({
          src: e,
          alt: t,
          testId: n,
          ...s
        }, i) {
          const [l, c] = (0, o.useState)(e), d = (0, vs.v6)(s, {
            className: "rockstargames-sites-rockstargamesa0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": n
          });
          return e ? (0, r.jsx)("div", {
            ref: i,
            ...d,
            children: (0, r.jsx)("img", {
              className: Rs,
              src: l,
              alt: t ?? "",
              onError: () => c(a(14804)),
              "aria-hidden": !t
            })
          }) : (0, r.jsx)("div", {
            ref: i,
            ...d,
            children: (0, r.jsx)("img", {
              className: Rs,
              src: a(14804),
              alt: t ?? "",
              "aria-hidden": !t
            })
          })
        }),
        As = (0, o.forwardRef)(function({
          asChild: e,
          testId: t,
          className: a,
          ...o
        }, n) {
          const s = e ? ks.DX : "div",
            i = (0, vs.v6)(o, {
              className: (0, Dt.default)("rockstargames-sites-rockstargamesfbe57172570573357e040787d9307835", a),
              "data-testid": t
            });
          return (0, r.jsx)(s, {
            ref: n,
            ...i
          })
        }),
        Ms = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const n = (0, vs.v6)(a, {
            className: "rockstargames-sites-rockstargamesd9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": t
          });
          return (0, r.jsx)("div", {
            ref: o,
            ...n,
            children: e
          })
        }),
        Es = ({
          testId: e,
          ...t
        }) => {
          const a = (0, vs.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(xs.Ay, {
            ...a
          })
        },
        Ts = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          userName: a,
          ...o
        }, n) {
          const {
            formatMessage: s
          } = (0, i.useIntl)(), l = (0, vs.v6)(o, {
            "data-testid": t
          });
          return (0, r.jsxs)("div", {
            className: "rockstargames-sites-rockstargamescd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...l,
            ref: n,
            children: [(0, r.jsx)(ks.s6, {
              children: s(Cs.character_card_a11y_player, {
                player: a
              })
            }), (0, r.jsx)("div", {
              "aria-hidden": !0,
              children: e
            })]
          })
        }),
        zs = (0, o.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, o) {
          const n = (0, vs.v6)(a, {
            "data-testid": e
          });
          return (0, r.jsx)("div", {
            ...n,
            ref: o,
            children: t
          })
        }),
        Ps = ({
          testId: e,
          ...t
        }) => {
          const {
            formatMessage: a
          } = (0, i.useIntl)(), o = (0, vs.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(ks.s6, {
              children: a(Cs.character_card_a11y_rank, {
                rank: t.rank
              })
            }), (0, r.jsx)(js.L, {
              ...o,
              "aria-hidden": !0
            })]
          })
        };
      var Fs = a(33337);
      const Ds = ({
        content: e,
        successSlide: t,
        characterList: a,
        linkAccountUrl: n,
        linkMoreAccounts: s,
        linkAccountBtn: i
      }) => {
        const l = (0, o.createRef)(),
          d = (0, o.createRef)(),
          _ = (0, o.createRef)(),
          [u, m] = (0, o.useState)(),
          [b, g] = (0, o.useState)(!1),
          [p, f] = (0, o.useState)(),
          [h, y] = (0, o.useState)(!1),
          [k, v] = (0, o.useState)(!0);
        return (0, o.useEffect)(() => {
          const e = () => {
            l?.current && g(l?.current?.scrollWidth > l?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }, [l]), (0, o.useEffect)(() => {
          m({
            nextEl: d?.current,
            prevEl: _?.current
          })
        }, [_?.current, d?.current]), (0, r.jsxs)("div", {
          className: (0, Dt.default)(ss, "_3rocp6d _3rocp6b", "onScreen" === t ? _s : "", "hidden" === t ? is : "", "visible" === t ? gs : ""),
          children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: e.introScreen.image.sources.mobile,
            className: ds,
            alt: e.introScreen.image.alt
          }), (0, r.jsxs)("div", {
            className: bs,
            children: [(0, r.jsxs)("div", {
              className: ts,
              children: [(0, r.jsx)("div", {
                className: as({
                  slideName: "success"
                }),
                children: (0, r.jsx)(Ra.Check, {
                  className: ls,
                  label: "succcess check label"
                })
              }), (0, r.jsxs)("div", {
                className: (0, Dt.default)(rs, "override"),
                children: [(0, r.jsx)(c.Heading, {
                  level: 3,
                  children: e.successScreen.headline
                }), (0, r.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.successScreen.body
                  }
                })]
              }), (0, r.jsxs)("div", {
                className: "_3rocp6s",
                children: [(0, r.jsx)("div", {
                  className: "_3rocp6t",
                  ref: l,
                  children: (0, r.jsx)(fs.RC, {
                    mousewheel: {
                      releaseOnEdges: !0
                    },
                    touchReleaseOnEdges: !0,
                    loop: !1,
                    grabCursor: b,
                    slidesPerView: "auto",
                    speed: 700,
                    slidesOffsetAfter: 100,
                    navigation: u,
                    modules: [hs.A, ys.A],
                    onInit: e => {
                      f(e)
                    },
                    onSlideChange: e => {
                      y(e?.isEnd), v(e?.isBeginning)
                    },
                    children: a.map(e => (0, r.jsx)(fs.qr, {
                      tabIndex: 0,
                      children: (0, r.jsxs)(Ns, {
                        className: "_3rocp6x",
                        children: [(0, r.jsx)(Is, {
                          src: e.mugshotUrl
                        }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, r.jsxs)(As, {
                          children: [(0, r.jsx)(Ms, {
                            children: (0, r.jsx)(Es, {
                              tagSize: xs.YT.large,
                              platform: e.platform
                            })
                          }), (0, r.jsx)(Ts, {
                            userName: e.platformUsername,
                            children: e.platformUsername
                          }), (0, r.jsx)(zs, {
                            children: (0, r.jsx)(Ps, {
                              rank: e.stats.overview.rank.value
                            })
                          })]
                        })]
                      })
                    }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                  })
                }), (0, r.jsx)(c.Button, {
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "",
                  asChild: !0,
                  children: (0, r.jsx)(Fs.A, {
                    className: "_3rocp6r",
                    to: n,
                    onClick: s,
                    children: i
                  })
                }), (0, r.jsx)(c.Button, {
                  className: "_3rocp6u",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowLeft",
                  iconRightLabel: "Previous",
                  ref: _,
                  onClick: () => {
                    p?.slidePrev()
                  },
                  isDisabled: k,
                  "data-hidden": !b
                }), (0, r.jsx)(c.Button, {
                  className: "_3rocp6v",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "Previous",
                  ref: d,
                  onClick: () => {
                    p?.slideNext()
                  },
                  isDisabled: h,
                  "data-hidden": !b
                })]
              })]
            }), (0, r.jsx)("div", {
              className: os,
              children: (0, r.jsx)("div", {
                className: (0, Dt.default)(cs, "override"),
                children: (0, r.jsx)(es, {
                  legalText: e.legalText
                })
              })
            })]
          })]
        })
      };
      a(79955);
      const Ls = {
          applestore: "rockstargames-sites-rockstargamese68d88a0e9f24a2f0bcf7da8a0e1b388",
          buttonText: "rockstargames-sites-rockstargamesc240c5768c5acdd2bc6022568ef877f0",
          closeButton: "rockstargames-sites-rockstargamesee432a5defea7b8181973d3a9ad3190b",
          container: "rockstargames-sites-rockstargamesfc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-rockstargamesb12c469ae4536819db4253c10b2cd11d",
          expandedArea: "rockstargames-sites-rockstargamese752e3ffffce454f84c993a62a279f87",
          expandedButton: "rockstargames-sites-rockstargamesbb945d977a4db6fdd9206dbfe8581304",
          googleplay: "rockstargames-sites-rockstargamesd0d623dce429f6ae2fd898e1d551257e",
          pc: "rockstargames-sites-rockstargamesffc20241c500599d4ee134fcffd66961",
          pcalt: "rockstargames-sites-rockstargamesa2ef6590cf9e642c1a2a8c589a792928",
          pillBtn: "rockstargames-sites-rockstargamesed7115facef4ace39e8c7486e9066fe1",
          platformButton: "rockstargames-sites-rockstargamesfa40c93ee13fdec88bb8dc08ce36353a",
          platformButtons: "rockstargames-sites-rockstargamese950c05307f67ce36d561a09027fd844",
          ps: "rockstargames-sites-rockstargamesdd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-rockstargamesed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-rockstargamesf046700558956d566323b32d87c4a54f",
          selected: "rockstargames-sites-rockstargamese7705468e2dbcfc45d23ef5047671698",
          switch: "rockstargames-sites-rockstargamese8e3ea0f1d334667f3928f696308060e",
          unexpandedButton: "rockstargames-sites-rockstargameseaa10e0601812da4ea334974165d92ec",
          xbox: "rockstargames-sites-rockstargamese6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-rockstargamesc03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-rockstargamesdde1b553776bdd59373d22a43479de29"
        },
        Gs = ({
          buttonText: e = "",
          link: t = "",
          platform: o = "",
          target: n = null,
          onClick: s,
          tabIndex: i,
          className: l,
          ...c
        }) => {
          const d = n ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            u = [Ls.platformButton, Ls[o], l].join(" "),
            m = o ? a(5328)(`./${o}.svg`) : null,
            b = (0, r.jsxs)(r.Fragment, {
              children: [m ? (0, r.jsx)("img", {
                src: m,
                alt: e
              }) : "", !m && (0, r.jsx)("div", {
                className: Ls.buttonText,
                children: e
              })]
            });
          return t ? t.startsWith("http") ? (0, r.jsx)("a", {
            href: t,
            className: u,
            target: d,
            onClick: s,
            "aria-label": e,
            tabIndex: i,
            ...c,
            children: b
          }) : (0, r.jsx)(_.NavLink, {
            className: u,
            onClick: s,
            to: t,
            "aria-label": e,
            ...c,
            children: b
          }) : (0, r.jsx)("button", {
            className: u,
            onClick: s,
            "aria-label": e,
            tabIndex: i,
            ...c,
            children: b
          })
        },
        Ws = ({
          content: e,
          unlinkedSlide: t,
          returnUrl: a,
          giftId: o
        }) => {
          const n = (0, s.useRockstarTokenPing)(),
            {
              track: i
            } = (0, p.useGtmTrack)(),
            l = async e => {
              const t = (0, s.findPlatform)(e)?.onlineService;
              if (t && "sc" !== t) {
                i({
                  element_placement: "woc",
                  event: "cta_link_account",
                  o_id: o,
                  text: `link ${t}`
                });
                const e = await (0, s.generateTpaLink)({
                  pingBearer: n,
                  returnUrl: a || window.location.pathname,
                  service: t
                });
                window.location.assign(e.href)
              }
            };
          return (0, r.jsxs)("div", {
            className: (0, Dt.default)(ss, "_3rocp6e _3rocp6b", "onScreen" === t ? _s : "", "hidden" === t ? is : "", "visible" === t ? gs : ""),
            children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
              src: e.introScreen.image.sources.mobile,
              className: ds,
              alt: e.introScreen.image.alt
            }), (0, r.jsxs)("div", {
              className: bs,
              children: [(0, r.jsx)("div", {
                className: ms,
                children: (0, r.jsxs)("div", {
                  className: ts,
                  children: [(0, r.jsx)("div", {
                    className: as({
                      slideName: "error"
                    }),
                    children: (0, r.jsx)(Ra.TriangleAlert, {
                      className: ls,
                      label: ""
                    })
                  }), (0, r.jsxs)("div", {
                    className: (0, Dt.default)(rs, "override"),
                    children: [(0, r.jsx)(c.Heading, {
                      level: 3,
                      children: e.unlinkedScreen.headline
                    }), (0, r.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: e.unlinkedScreen.body
                      }
                    })]
                  }), (0, r.jsxs)("div", {
                    className: "_3rocp610",
                    children: [(0, r.jsx)(Gs, {
                      buttonText: (0, s.findPlatform)("xbox")?.friendlyName,
                      platform: "xbox",
                      target: "_blank",
                      onClick: () => l("xbox"),
                      tabIndex: 0
                    }), (0, r.jsx)(Gs, {
                      buttonText: (0, s.findPlatform)("ps")?.friendlyName,
                      platform: "ps",
                      target: "_blank",
                      onClick: () => l("ps"),
                      tabIndex: 0
                    })]
                  })]
                })
              }), (0, r.jsx)("div", {
                className: os,
                children: (0, r.jsx)("div", {
                  className: (0, Dt.default)(cs, "override"),
                  children: (0, r.jsx)(es, {
                    legalText: e.legalText
                  })
                })
              })]
            })]
          })
        },
        qs = ({
          errorSlide: e,
          content: t
        }) => (0, r.jsxs)("div", {
          className: (0, Dt.default)(ss, "_3rocp6f _3rocp6b", "onScreen" === e ? _s : "", "hidden" === e ? is : "", "visible" === e ? gs : ""),
          children: [t?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: t.introScreen.image.sources.mobile,
            className: ds,
            alt: t.introScreen.image.alt
          }), (0, r.jsxs)("div", {
            className: bs,
            children: [(0, r.jsx)("div", {
              className: ms,
              children: (0, r.jsxs)("div", {
                className: ts,
                children: [(0, r.jsx)("div", {
                  className: as({
                    slideName: "error"
                  }),
                  children: (0, r.jsx)(Ra.TriangleAlert, {
                    className: ls,
                    label: ""
                  })
                }), (0, r.jsxs)("div", {
                  className: (0, Dt.default)(rs, "override"),
                  children: [(0, r.jsx)(c.Heading, {
                    level: 3,
                    children: t.errorScreen.headline
                  }), (0, r.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: t.errorScreen.body
                    }
                  })]
                }), (0, r.jsx)("div", {
                  className: ns,
                  children: (0, r.jsx)(c.Button, {
                    className: us,
                    appearance: "primary",
                    size: "LG",
                    onClick: () => window.location.reload(),
                    children: t.errorScreen.btnText
                  })
                })]
              })
            }), (0, r.jsx)("div", {
              className: os,
              children: (0, r.jsx)("div", {
                className: (0, Dt.default)(cs, "override"),
                children: (0, r.jsx)(es, {
                  legalText: t.legalText
                })
              })
            })]
          })]
        });
      var Bs = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(Bs || {});
      const Vs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        {
          currentSite: Os
        } = (0, Bo.A)(),
        $s = (0, i.withIntl)(({
          giftId: e,
          location: t = "gtaplus_site",
          introScreen: a,
          errorScreen: n,
          unlinkedScreen: l,
          successScreen: c,
          jumpLinkId: d,
          legalText: u,
          fontTheme: m = "chalet",
          usePadding: b = !0,
          ...g
        }) => {
          const h = {
              errorScreen: {
                btnText: n?.errorButton || "",
                headline: n?.errorHeadline || "",
                body: n?.errorContent || ""
              },
              introScreen: {
                body: a?.introContent || "",
                btnText: {
                  loggedIn: a?.btnTextLoggedIn || "",
                  loggedOut: a?.btnTextLoggedOut || ""
                },
                headline: a?.introHeadline || "",
                image: {
                  alt: a?.image?.alt || a?.introHeadline || "",
                  sources: {
                    desktop: (0, Qn.useGetCdnSource)(a?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, Qn.useGetCdnSource)(a?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: a?.tag || ""
              },
              legalText: u,
              successScreen: {
                body: c?.successContent || "",
                headline: c?.successHeadline || ""
              },
              unlinkedScreen: {
                body: l?.unlinkedContent || "",
                btnText: l?.unlinkedButtonText || "",
                headline: l?.unlinkedHeadline || ""
              }
            },
            [y] = (0, _.useSearchParams)(),
            {
              data: k,
              loggedIn: v
            } = (0, p.useRockstarUser)(),
            x = (0, s.useRockstarTokenPing)(),
            j = `https://${Os?.subDomain}.rockstargames.com/account/connections`,
            w = (0, i.useIntl)(),
            {
              track: C
            } = (0, p.useGtmTrack)(),
            R = (0, o.useRef)(null),
            {
              ref: S,
              inView: N
            } = (0, f.useInView)({
              threshold: .6
            }),
            I = 1280,
            A = (0, o.createRef)(),
            [M, E] = (0, o.useState)(null),
            [T, z] = (0, o.useState)([]),
            [P, F] = (0, o.useState)(!1),
            [D, L] = (0, o.useState)(),
            [G, W] = (0, o.useState)("hidden"),
            [q, B] = (0, o.useState)("hidden"),
            [V, O] = (0, o.useState)("hidden"),
            [$, X] = (0, o.useState)("hidden"),
            [U, H] = (0, o.useState)(!1),
            [K, Y] = (0, o.useState)(Bs.landing),
            [Z, J] = (0, o.useState)(h.introScreen.image.sources.mobile || Vs),
            Q = `${document.location.pathname}${document.location.search}#${d}`,
            ee = (0, s.usePrevious)(D),
            te = (0, s.usePrevious)(v),
            {
              signInUrl: ae
            } = (0, s.useScAuthLinks)(Q),
            re = e => {
              e === Bs.landing ? (Y(Bs.landing), B("onScreen"), W("hidden"), X("hidden"), O("hidden")) : e === Bs.success ? (Y(Bs.success), B("offScreen"), W("visible"), setTimeout(() => {
                B("hidden"), X("hidden")
              }, 300), setTimeout(() => {
                W("onScreen")
              }, 100)) : e === Bs.error ? (Y(Bs.error), B("offScreen"), X("visible"), setTimeout(() => {
                B("hidden")
              }, 300), setTimeout(() => {
                X("onScreen")
              }, 100)) : e === Bs.unlinked && (Y(Bs.unlinked), B("offScreen"), O("visible"), setTimeout(() => {
                B("hidden"), X("hidden")
              }, 300), setTimeout(() => {
                O("onScreen")
              }, 100))
            };
          return (0, o.useEffect)(() => {
            let e;
            return d && window.location.hash === `#${d}` && R.current && (e = window.setTimeout(() => {
              R.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }, 1e3)), () => window.clearTimeout(e)
          }, [d]), (0, o.useEffect)(() => {
            const e = () => {
                window.innerWidth >= 2560 && "newswire" !== t ? J(h.introScreen.image.sources.mobile || Vs) : J(h.introScreen.image.sources.desktop || Vs)
              },
              a = () => {
                window.innerWidth <= I && !P ? (F(!0), re(K)) : window.innerWidth > I && P && F(!1), e()
              };
            return F(window.innerWidth <= I), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, [K, P]), (0, o.useEffect)(() => {
            const e = k?.characters?.gtao;
            z(e || [])
          }, [k?.characters?.gtao]), (0, o.useEffect)(() => {
            "boolean" != typeof ee && "boolean" != typeof te || !e || D && v && (async () => {
              try {
                const {
                  result: t
                } = await (0, s.coreScApiFetch)("marketing/engagement/claim/exists", {
                  pingBearer: x,
                  query: {
                    giftUId: e
                  }
                });
                E("boolean" == typeof t && t)
              } catch (e) {
                E(!1)
              }
            })()
          }, [D, v, e]), (0, o.useEffect)(() => {
            "boolean" == typeof v ? v ? L(!0) : (L(!1), B("onScreen")) : L(!0)
          }, [v]), (0, o.useEffect)(() => {
            "boolean" == typeof M && k?.accountSynced && L(!1)
          }, [M, k?.accountSynced, L]), (0, o.useEffect)(() => {
            D || (async () => {
              T.length > 0 && M ? re(Bs.success) : re(M ? Bs.unlinked : Bs.landing)
            })()
          }, [D]), (0, o.useEffect)(() => {
            if (N && !U) {
              if (void 0 === v) return;
              C({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: v ? "signed in" : "signed out"
              }), H(!0)
            }
          }, [N, v]), (0, o.useEffect)(() => {
            "onScreen" === G && C({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e,
              text: "Almost there!"
            })
          }, [G]), (0, o.useEffect)(() => {
            "onScreen" === V && C({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e,
              text: "No Qualifying Character Found"
            })
          }, [V]), (0, o.useEffect)(() => {
            "onScreen" === $ && C({
              element_placement: "event_label",
              event: "alert_error",
              o_id: e,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }, [$]), (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: "_3rocp60",
              "data-font": m,
              "data-use-padding": b,
              ref: R,
              id: d || "",
              ...g,
              children: (0, r.jsxs)(Yn.motion.div, {
                className: "_3rocp61",
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  duration: .4,
                  ease: "easeIn"
                },
                "data-context": "interestTracker",
                ref: S,
                children: [(0, r.jsx)("div", {
                  className: "_3rocp62",
                  style: {
                    "--engagement-image": `url(${Z})`
                  }
                }), (0, r.jsx)("div", {
                  className: (0, Dt.default)("_3rocp64", D ? "loader" : ""),
                  ref: A,
                  children: D ? (0, r.jsx)("div", {
                    className: "_3rocp6w",
                    children: (0, r.jsx)(Oo.A, {
                      type: "SPINNING"
                    })
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [K === Bs.landing && (0, r.jsx)(ps, {
                      content: h,
                      loggedIn: v,
                      addClaim: async () => {
                        const a = {
                            giftUId: e,
                            location: t,
                            utmCampaign: y.get("utm_campaign"),
                            utmContent: y.get("utm_content"),
                            utmMedium: y.get("utm_medium"),
                            utmSource: y.get("utm_source")
                          },
                          {
                            status: r
                          } = await (0, s.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: x,
                            query: a
                          }) ?? [];
                        re(r ? Bs.success : Bs.error), C({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: e,
                          text: "claim now",
                          section_layout: "signed in"
                        })
                      },
                      signin: () => {
                        C({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: ae,
                          text: "claim now",
                          section_layout: "signed out"
                        }), window.location.assign(ae)
                      },
                      landingSlide: q
                    }), K === Bs.success && (0, r.jsx)(Ds, {
                      content: h,
                      successSlide: G,
                      characterList: T,
                      linkAccountUrl: j,
                      linkMoreAccounts: () => {
                        C({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: j,
                          text: Jn.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: w.formatMessage(Jn.engagement_link_account)
                    }), K === Bs.unlinked && (0, r.jsx)(Ws, {
                      content: h,
                      unlinkedSlide: V,
                      returnUrl: Q,
                      giftId: e
                    }), K === Bs.error && (0, r.jsx)(qs, {
                      errorSlide: $,
                      content: h
                    })]
                  })
                })]
              })
            })
          })
        }, Zn);
      var Xs = a(69429);
      const Us = "WwwWebOfferClaim";
      var Hs = a(3854);
      const Ks = "RsgContentRating",
        Ys = {
          RsgCta: ae,
          [ye]: ({
            block: e
          }) => {
            const t = e.imageFilesCollection?.items,
              a = e.altText,
              o = he(t?.map(e => e?.context)),
              n = t?.find(e => e.context === o) || t?.[0],
              s = n?.source?.url;
            return t && s && o ? (0, r.jsxs)(be, {
              children: [t?.map((e, t) => {
                const a = e.sys.id + t,
                  n = e.source?.url,
                  s = fe.get(e?.context || o);
                return n ? (0, r.jsx)(ge, {
                  src: n,
                  media: s,
                  width: e.source?.width,
                  height: e.source?.height
                }, a) : null
              }), (0, r.jsx)(pe, {
                src: s,
                alt: a
              })]
            }) : null
          },
          [me]: ({
            block: e
          }) => e ? (0, r.jsx)(ue, {
            src: e
          }) : null,
          [Ks]: ({
            block: e
          }) => {
            if (!e) return;
            const {
              titleSlug: t
            } = e;
            return t && (0, r.jsx)(Hs.A, {
              titleSlug: t
            })
          },
          [Ce]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = q();
            if (!e) return null;
            const {
              altText: a,
              backgroundColor: o,
              backgroundImage: n,
              link: s,
              foregroundImage: i
            } = e, c = (0, l.getOptimizedRsgImage)(n, "5:1", {
              preferModernFormat: !0
            });
            return (0, r.jsx)(ve, {
              testId: "www-brand-banner",
              children: (0, r.jsx)(xe, {
                altText: a ?? "",
                backgroundColor: o,
                onClick: () => {
                  t({
                    event: "card_click",
                    card_id: e.sys.id,
                    card_name: "brand banner",
                    link_url: e.link?.url
                  })
                },
                asChild: !0,
                children: (0, r.jsxs)(x.N, {
                  href: s?.url ?? "",
                  children: [(0, r.jsx)(je, {
                    src: c?.url ?? ""
                  }), i && (0, r.jsx)(we, {
                    src: i
                  })]
                })
              })
            })
          },
          [Je]: ({
            block: e,
            ...t
          }) => {
            const {
              blockPosition: a
            } = (0, o.useContext)(l.BlockRendererContext), {
              primaryAccentColor: n,
              secondaryAccentColor: s
            } = (0, o.useContext)(y), {
              trackEvent: i
            } = q(), c = e.cardsCollection?.items?.length ?? 0;
            if (e) return (0, r.jsxs)(Ve, {
              ...t,
              onNext: () => {
                i({
                  event: "carousel_next"
                })
              },
              onPrev: () => {
                i({
                  event: "carousel_previous"
                })
              },
              onSwipe: () => {
                i({
                  event: "carousel_swipe"
                })
              },
              style: {
                paddingBottom: "3px"
              },
              navStyle: e?.navStyle ?? "arrows",
              children: [(0, r.jsxs)(Oe, {
                children: [(0, r.jsx)($e, {
                  level: 5,
                  children: e.title
                }), (0, r.jsx)(Ye.Arrows, {
                  appearance: e.navigationButtonAppearance ?? "secondary",
                  size: "SM",
                  override_backgroundColor: n,
                  override_textColor: s
                })]
              }), (0, r.jsx)(Xe, {
                children: e.cardsCollection?.items?.map((t, o) => (0, r.jsx)(Ze.Provider, {
                  value: {
                    totalItems: c,
                    itemIndex: o
                  },
                  children: (0, r.jsx)(He, {
                    variant: e.variant,
                    children: (0, r.jsx)(l.BlockRenderer, {
                      block: t,
                      blockPosition: a
                    }, e.sys.id)
                  }, `${t?.sys?.id}-${o}`)
                }, `${t?.sys?.id}-${o}`))
              }), (0, r.jsx)(Ye.Dots, {})]
            })
          },
          [ct]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = q(), {
              landscapeViewportBehavior: a,
              scrimColor: n,
              video: s,
              overlayElements: i,
              playbackBehavior: c
            } = e, {
              primaryAccentColor: d,
              secondaryAccentColor: _
            } = (0, o.useContext)(y), u = (0, le.Ub)(C.f.landscape), m = "play_once" === c, b = (0, o.useCallback)(e => t({
              event: "cta_other",
              text: "toggle " + (e ? "play" : "pause"),
              element_placement: "decorative video"
            }), []);
            if (!s) return null;
            const g = s.videoFilesCollection?.items?.find(e => "desktop" === e.context),
              p = s.videoFilesCollection?.items?.find(e => "mobile" === e.context),
              f = u ? g : p,
              h = f?.url ?? f?.upload?.url,
              k = f?.posterImage?.source?.url;
            return (0, r.jsxs)(nt, {
              playOnce: m,
              landscapeViewportBehavior: a,
              scrimColor: n,
              children: [i && (0, r.jsx)(lt, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: i
                })
              }), h && (0, r.jsx)(st, {
                appearance: d ? "accent" : "primary",
                override_backgroundColor: d,
                override_textColor: _,
                onToggle: b
              }), (0, r.jsx)(it, {
                src: h,
                poster: k,
                altText: s.posterImage?.altText,
                autoPlay: !0,
                muted: !0
              })]
            })
          },
          [ut]: ({
            block: e
          }) => e ? (0, r.jsx)(_t, {
            gradientStyle: e.style || "",
            thickness: e.thickness || "dimensions_25"
          }) : null,
          [Pt]: ({
            block: e
          }) => {
            const [t] = (0, i.getLocale)(), {
              trackEvent: a
            } = q(), n = e.contentCollection?.items, l = n?.map(e => e.tinaId), c = (0, o.useMemo)(() => ((e, t) => {
              const a = ((e, t) => e.reduce((e, a) => e + ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}", allowNull: true) {\n        ...postFields\n    }\n`)(a, t), ""))(e, t);
              return s.gql`
        ${bt}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(l, t.iso), [l]), {
              loading: d,
              data: _,
              error: u
            } = (0, s.useQuery)(c, {
              autoSetError: !1
            }), m = (e, t) => () => {
              const r = e.block,
                o = {
                  position: t,
                  position_max: b.length,
                  event: "card_click",
                  card_name: r?.url.split("/").pop() ?? r?.title,
                  card_id: e.tinaId,
                  link_url: r?.url
                };
              a(o)
            };
            if (u) return (0, mt.captureMessage)("Failed to load Newswire Unit", {
              level: mt.Severity.Error,
              extra: {
                error: u
              }
            }), null;
            if (!e || !n) return null;
            const b = n?.map(e => ({
              id: e.sys.id,
              tinaId: e.tinaId,
              block: _?.[`post${e.tinaId}`] ? _[`post${e.tinaId}`] : null
            })).filter(e => !!e.tinaId && e?.block?.created);
            if (d || !b?.length) return null;
            const g = b[0];
            return (0, r.jsx)(It, {
              testId: "editorial-grid-module",
              children: (0, r.jsxs)(At, {
                children: [(0, r.jsx)(N, {
                  showOn: "tabletMediumAndSmaller",
                  children: (0, r.jsx)(Mt, {
                    testId: "newswire-carousel",
                    onCarouselSwipe: () => a({
                      event: "carousel_swipe"
                    }),
                    children: b?.map((e, t) => (0, r.jsx)(Et, {
                      children: (0, r.jsx)(Rt, {
                        loading: d,
                        data: e.block,
                        id: e.id,
                        layout: "secondary",
                        aspect: "wide",
                        handleStoryClick: m(e, t + 1),
                        testId: e.tinaId
                      })
                    }, e.id))
                  })
                }), (0, r.jsx)(N, {
                  showOn: "tabletMediumAndLarger",
                  children: (0, r.jsx)(Tt, {
                    testId: "primary-story",
                    children: (0, r.jsx)(Rt, {
                      loading: d,
                      data: g.block,
                      id: g.id,
                      layout: "primary",
                      aspect: "wide",
                      handleStoryClick: m(g, 1),
                      testId: g.tinaId
                    })
                  })
                }), (0, r.jsx)(N, {
                  showOn: "tabletMediumAndLarger",
                  children: (0, r.jsx)(zt, {
                    children: b?.slice?.(1)?.map((e, t) => (0, r.jsx)(Rt, {
                      loading: d,
                      data: e.block,
                      id: e.id,
                      layout: "tertiary",
                      aspect: "square",
                      transparent: !0,
                      handleStoryClick: m(e, t + 1),
                      testId: e.tinaId
                    }, e.id))
                  })
                })]
              })
            })
          },
          [Nt]: ({
            block: e
          }) => {
            const [t] = (0, i.getLocale)(), a = e.tinaId, n = (0, o.useMemo)(() => ((e, t) => {
              const a = ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}", allowNull: true) {\n        ...postFields\n    }\n`)(e, t);
              return s.gql`
        ${St}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(a, t.iso), [a]), {
              loading: l,
              data: c,
              error: d
            } = (0, s.useQuery)(n, {
              autoSetError: !1
            });
            if (d) return (0, mt.captureMessage)("Failed to load Newswire Unit", {
              level: mt.Severity.Error,
              extra: {
                error: d
              }
            }), null;
            if (!e) return null;
            const _ = {
              tinaId: a,
              block: c?.[`post${a}`] ? c[`post${a}`] : null
            };
            return _.block ? (0, r.jsx)(Rt, {
              loading: l,
              data: _.block,
              id: e.sys.id,
              layout: "secondary",
              aspect: "wide"
            }) : null
          },
          [ma]: ({
            block: e
          }) => (0, r.jsx)(G.Provider, {
            value: {
              analyticsData: {
                element_placement: `featured game section: ${e.game?.title}`
              }
            },
            children: (0, r.jsx)(ua, {
              block: e
            })
          }),
          [va]: ({
            block: e
          }) => {
            const t = (0, le.Ub)("(max-width: 768px)"),
              a = (0, o.useMemo)(() => e?.layout?.breakpointsCollection?.items.map(e => ({
                mediaQuery: e.mediaQuery || "all",
                behavior: e.behavior || "wrap",
                alignment: e.alignment || "left",
                columns: e.columns
              })), [e.layout]);
            if (e) return e?.isCollapsible && t ? (0, r.jsx)(ya, {
              breakpoints: a,
              children: (0, r.jsxs)(Ve, {
                navStyle: "dots",
                isInGrid: !0,
                children: [(0, r.jsx)(Xe, {
                  children: e?.contentCollection?.items.map((t, a) => (0, r.jsx)(He, {
                    variant: "grid",
                    children: (0, r.jsx)(l.BlockRenderer, {
                      block: t,
                      blockPosition: {
                        blockIndex: a,
                        totalBlocks: e?.contentCollection?.items.length || 0
                      }
                    })
                  }, t.sys?.id))
                }), (0, r.jsx)(Ye.Dots, {})]
              }, `${t}`)
            }) : (0, r.jsx)(ya, {
              breakpoints: a,
              children: e?.contentCollection?.items.map((t, a) => (0, r.jsx)(ka, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: t,
                  blockPosition: {
                    blockIndex: a,
                    totalBlocks: e?.contentCollection?.items.length || 0
                  }
                })
              }, t.sys?.id))
            })
          },
          [wa]: ({
            block: e
          }) => {
            const {
              colorMode: t
            } = (0, o.useContext)(y);
            if (!e) return;
            const {
              contentCollection: a,
              gap: n,
              theme: s
            } = e;
            if (!a?.items?.length) return null;
            const i = e.theme?.colorMode ?? t,
              c = (e => {
                if (!e) return "";
                const t = e?.replace("gap_", "");
                return j.LU.global.spacing.gap[t] ? j.LU.global.spacing.gap[t] : ""
              })(n);
            return (0, r.jsx)(k, {
              theme: s,
              children: (0, r.jsx)(ja, {
                gap: c,
                className: (0, h.m)(i ?? "dark"),
                children: a?.items.map((e, t) => (0, r.jsx)(l.BlockRenderer, {
                  block: e,
                  blockPosition: {
                    blockIndex: t,
                    totalBlocks: a.items.length
                  }
                }, e.sys.id))
              })
            })
          },
          [mr]: ({
            block: e
          }) => (0, r.jsx)(G.Provider, {
            value: {
              analyticsData: {
                element_placement: "featured content hero carousel"
              }
            },
            children: (0, r.jsx)(ur, {
              block: e
            })
          }),
          [hr]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, o.useContext)(l.BlockRendererContext), a = (0, le.Ub)(C.f.desktopSmallAndLarger);
            if (!e?.image) return null;
            const {
              image: n,
              title: s,
              titleSize: i,
              description: d,
              descriptionSize: _,
              textAlignment: u
            } = e, m = {
              XS: 6,
              SM: 5,
              MD: 4,
              LG: 3,
              XL: 2
            } [i || "MD"] - (a ? 1 : 0), b = {
              "body-xs": "XS",
              "body-sm": "SM",
              "body-md": "MD",
              "body-lg": "LG"
            } [_ ?? "body-md"];
            return (0, r.jsxs)(gr, {
              children: [(0, r.jsx)(pr, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: n,
                  blockPosition: t
                })
              }), (0, r.jsxs)(fr, {
                textAlignment: u,
                children: [s && (0, r.jsx)(c.Heading, {
                  level: m,
                  asChild: !0,
                  children: (0, r.jsx)("h3", {
                    className: "_1cw0rgk2",
                    children: s
                  })
                }), d && (0, r.jsx)(l.RsgMdTextComponent, {
                  markdown: d,
                  bodySize: b
                })]
              })]
            })
          },
          [Br]: ({
            block: e
          }) => {
            const {
              totalItems: t,
              itemIndex: a
            } = (0, o.useContext)(Ze), {
              trackEvent: n
            } = q(), s = !!e.cta?.link?.url, i = (0, r.jsxs)(Tr, {
              gradientColor: e?.gradientColor,
              interactive: !0,
              children: [(0, r.jsx)(zr, {
                asChild: !0,
                children: (0, r.jsx)(qt, {
                  alt: e?.ariaLabel,
                  src: e.backgroundImage,
                  context: "2:3"
                })
              }), (0, r.jsx)(Dr, {
                image: e.logo,
                size: e.logoSize
              }), (0, r.jsxs)(Pr, {
                children: [e.text && (0, r.jsx)(Gr, {
                  asChild: !0,
                  children: (0, r.jsx)(c.Body, {
                    children: e.text
                  })
                }), e.cta && (0, r.jsx)(Wr, {
                  appearance: e.cta.appearance,
                  iconLeft: e.cta.iconLeft?.icon,
                  iconRight: e.cta.iconRight?.icon,
                  override_backgroundColor: e.cta.backgroundColor,
                  size: "MD",
                  asChild: !0,
                  children: (0, r.jsx)("span", {
                    className: qr({
                      appearance: e.cta.appearance
                    }),
                    tabIndex: -1,
                    children: e.cta?.text
                  })
                })]
              })]
            });
            return s ? (0, r.jsx)(ae, {
              block: e.cta,
              className: "_120g2g72",
              onClick: () => {
                n({
                  event: "card_click",
                  card_id: e?.sys?.id,
                  card_name: e?.text,
                  position: a + 1,
                  position_max: t
                }, e)
              },
              asChild: !0,
              children: i
            }) : i
          },
          [oo]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = q(), {
              blockPosition: a
            } = (0, o.useContext)(l.BlockRendererContext), n = (e, {
              label: a,
              analyticsData: r
            }) => () => {
              t({
                event: "component_tab_click",
                text: a,
                position: e + 1,
                ...r
              })
            };
            if (!e) return;
            const {
              contentCollection: s,
              mobileAspectRatio: i = "1/1",
              desktopAspectRatio: c = "16/9"
            } = e, d = s?.items ?? [], _ = d.map(t => ({
              label: t.title,
              analyticsData: "analyticsData" in t ? t.analyticsData : e.analyticsData
            }));
            return (0, r.jsxs)(Hr, {
              items: d,
              children: [(0, r.jsx)(Qr, {
                mobileAspectRatio: i,
                desktopAspectRatio: c,
                children: !!d.length && d.map((e, t) => (0, r.jsx)(to, {
                  index: t,
                  children: (0, r.jsx)(gr, {
                    children: (0, r.jsx)(pr, {
                      children: (0, r.jsx)(ro, {
                        index: t,
                        children: (0, r.jsx)(l.BlockRenderer, {
                          block: e.image,
                          blockPosition: a
                        })
                      })
                    })
                  })
                }, e?.sys?.id))
              }), !!d.length && (0, r.jsx)(Yr, {
                children: _.map((e, t) => (0, r.jsx)(Jr, {
                  appearance: "ghost",
                  index: t,
                  onClick: n(t, e),
                  children: e.label
                }, e.label))
              })]
            })
          },
          [yo]: ({
            block: e
          }) => (0, r.jsx)(G.Provider, {
            value: {
              analyticsData: {
                element_placement: "images marquee section"
              }
            },
            children: (0, r.jsx)(ho, {
              block: e
            })
          }),
          [ko]: ({
            block: e,
            ...t
          }) => {
            const a = (0, o.useContext)(l.BlockRendererContext),
              {
                blockPosition: n
              } = a,
              {
                trackEvent: s
              } = q(),
              {
                primaryAccentColor: i,
                secondaryAccentColor: d
              } = (0, o.useContext)(y),
              _ = t?.tabIndex,
              u = () => {
                let t = "";
                if (e.image?.source?.url) try {
                  t = new URL(e.image.source.url).pathname.split("/").pop() ?? ""
                } catch {
                  t = e.image?.source?.url.split("/").pop() ?? ""
                }
                return {
                  card_id: e.sys.id,
                  card_name: t,
                  position: n?.blockIndex && Number.isFinite(n.blockIndex) ? n.blockIndex + 1 : void 0
                }
              };
            if (!e?.image) return null;
            const {
              image: m,
              caption: b,
              downloadButton: g,
              thumbnailAspectRatio: p,
              thumbnailObjectPosition: f,
              zoomControls: h
            } = e;
            return (0, r.jsxs)(c.Lightbox.Root, {
              altText: m?.altText || "",
              onOpenChange: e => {
                e && window.dispatchEvent(new CustomEvent("header:hideNav", {
                  detail: {
                    isHidden: !0
                  }
                }))
              },
              children: [(0, r.jsxs)(c.Lightbox.Trigger, {
                tabIndex: _,
                className: "_1ynyi8s0",
                style: {
                  aspectRatio: p,
                  ...(0, j.DI)({
                    [c.Lightbox.CssVars.TriggerBorder]: i,
                    [c.Lightbox.CssVars.TriggerIconBg]: i,
                    [c.Lightbox.CssVars.TriggerIconFg]: d,
                    [c.Lightbox.CssVars.TriggerIconBgActive]: i,
                    [c.Lightbox.CssVars.TriggerIconFgActive]: d
                  })
                },
                onClick: () => {
                  s({
                    event: "card_click",
                    ...u()
                  }, e)
                },
                children: [(0, r.jsx)(c.Lightbox.Thumbnail, {
                  src: m?.source?.url,
                  style: {
                    objectPosition: f
                  }
                }), (0, r.jsx)(c.Lightbox.OpenIcon, {
                  className: "_1ynyi8s2",
                  asChild: !0,
                  children: (0, r.jsx)(Ra.Maximize2, {
                    label: ""
                  })
                })]
              }), (0, r.jsxs)(c.Lightbox.Portal, {
                children: [(0, r.jsx)(c.Lightbox.Overlay, {}), (0, r.jsxs)(c.Lightbox.Content, {
                  children: [(0, r.jsx)(c.Lightbox.ZoomPan, {
                    children: (0, r.jsx)(c.Lightbox.Image, {
                      className: "_1ynyi8s1",
                      src: m?.source?.url
                    })
                  }), (0, r.jsxs)(c.Lightbox.Controls, {
                    children: [b && (0, r.jsx)(c.Lightbox.Caption, {
                      children: b
                    }), (0, r.jsx)(c.Lightbox.Close, {
                      onPress: () => {
                        s({
                          event: "modal_close",
                          ...u()
                        }, e)
                      }
                    }), h && (0, r.jsx)(c.Lightbox.Zoom, {}), g && (0, r.jsx)(c.Lightbox.Download, {})]
                  })]
                })]
              })]
            })
          },
          [vo]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = q(), a = e?.image?.imageFilesCollection?.items, o = e?.image?.altText, n = he(a?.map(e => e?.context)), s = a?.find(e => e.context === n) || a?.[0], i = s?.source?.url, l = e.link?.url;
            return a && i && n && l ? (0, r.jsx)("div", {
              className: "_1eo5pzj0",
              children: (0, r.jsx)(x.N, {
                href: l,
                className: "_1eo5pzj1",
                onClick: () => {
                  t({
                    event: "cta_other"
                  }, e)
                },
                children: (0, r.jsxs)(be, {
                  children: [a?.map((e, t) => {
                    const a = e.sys.id + t,
                      o = e.source?.url,
                      s = fe.get(e?.context || n);
                    return o ? (0, r.jsx)(ge, {
                      src: o,
                      media: s,
                      width: e.source?.width,
                      height: e.source?.height
                    }, a) : null
                  }), (0, r.jsx)(pe, {
                    src: i,
                    alt: o
                  })]
                })
              })
            }) : null
          },
          [qo]: ({
            block: e
          }) => {
            const t = (0, i.useIntl)(),
              {
                trackEvent: a
              } = q();
            if (!e) return null;
            const o = e.cardsCollection?.items || [],
              [n, ...s] = o,
              l = (e, t) => ie[e]?.[t] ?? "1:1",
              c = (e, t) => () => {
                a({
                  event: "card_click",
                  card_id: e?.sys?.id,
                  position: t + 1,
                  position_max: o.length,
                  ...e.link?.url && {
                    link_url: e.link?.url
                  },
                  ...e.analyticsData
                }, e.cta)
              };
            return (0, r.jsxs)(Co, {
              children: [(0, r.jsx)(N, {
                showOn: "mobile",
                forceMount: !0,
                children: (0, r.jsxs)(Ro, {
                  gridType: e.variant,
                  children: [(0, r.jsx)(No, {
                    type: se(0),
                    children: (0, r.jsx)(x.N, {
                      href: n.link?.url,
                      target: "_blank",
                      title: t.formatMessage(Do.masonry_grid_external_store_link),
                      onClick: () => c(n, 0),
                      children: (0, r.jsx)(Wo, {
                        card: n,
                        context: "4:5",
                        size: "medium"
                      })
                    })
                  }), (0, r.jsx)(Io, {
                    defaultSlide: 0,
                    onCarouselSwipe: () => a({
                      event: "carousel_swipe"
                    }),
                    children: s.map((e, a) => (0, r.jsx)(Ao, {
                      children: (0, r.jsx)(x.N, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Do.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: Lo,
                        children: (0, r.jsx)(Wo, {
                          card: e,
                          context: "4:3",
                          size: "small"
                        })
                      })
                    }, e.sys.id))
                  })]
                })
              }), (0, r.jsx)(N, {
                showOn: "tabletSmall",
                forceMount: !0,
                children: (0, r.jsx)(So, {
                  gridType: e.variant,
                  children: o.map((e, a) => {
                    const o = se(a),
                      n = l("tabletSmall", o),
                      s = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(No, {
                      type: o,
                      children: (0, r.jsx)(x.N, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Do.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: Lo,
                        children: (0, r.jsx)(Wo, {
                          card: e,
                          context: n,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(N, {
                showOn: "tabletMedium",
                forceMount: !0,
                children: (0, r.jsx)(So, {
                  gridType: e.variant,
                  children: o.map((e, a) => {
                    const o = se(a),
                      n = l("tabletMedium", o),
                      s = 0 === a ? "medium" : "small";
                    return (0, r.jsx)(No, {
                      type: o,
                      children: (0, r.jsx)(x.N, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Do.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: Lo,
                        children: (0, r.jsx)(Wo, {
                          card: e,
                          context: n,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(N, {
                showOn: "tabletLarge",
                forceMount: !0,
                children: (0, r.jsx)(So, {
                  gridType: e.variant,
                  children: o.map((e, a) => {
                    const o = se(a),
                      n = l("tabletLarge", o),
                      s = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(No, {
                      type: o,
                      children: (0, r.jsx)(x.N, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Do.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: Lo,
                        children: (0, r.jsx)(Wo, {
                          card: e,
                          context: n,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(N, {
                showOn: "desktopSmallAndLarger",
                forceMount: !0,
                children: (0, r.jsx)(So, {
                  gridType: e.variant,
                  children: o.map((e, a) => {
                    const o = se(a),
                      n = l("desktopSmallAndLarger", o),
                      s = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(No, {
                      type: o,
                      children: (0, r.jsx)(x.N, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Do.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: Lo,
                        children: (0, r.jsx)(Wo, {
                          card: e,
                          context: n,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              })]
            })
          },
          [rn]: ({
            block: e,
            renderSectionWrapper: t
          }) => {
            const a = (0, i.useIntl)(),
              n = (0, s.useRockstarTokenPing)(),
              {
                loggedIn: d,
                data: u,
                loading: m
              } = (0, p.useRockstarUser)(),
              b = (0, _.useNavigate)(),
              [{
                iso: g
              }] = (0, i.getLocale)(),
              f = (0, s.toScLocaleString)(g),
              {
                login: h
              } = (0, s.getConfigForDomain)(),
              y = (0, Bo.A)(),
              [k] = (0, _.useSearchParams)(),
              v = "true" === k.get("marketing"),
              [x, j] = (0, o.useState)(!0),
              w = {
                lang: f,
                location: location.pathname,
                login: h,
                navigate: b,
                www: y.sites.www
              },
              C = {
                ...u,
                isFromAuth: v,
                loggedIn: d,
                pingBearer: n,
                userLoading: m
              },
              R = Zo(w, C),
              {
                dialog: S,
                urls: N,
                handleSubscribeButton: I,
                isButtonLoading: A,
                isLoading: M,
                isSubscribed: E,
                setShowDialog: T,
                showDialog: z
              } = R;
            let P;
            P = null === d || d && M ? "loading" : "ready";
            const F = "ready" == (m ? "loading" : "ready"),
              D = "ready" === P;
            if ((0, o.useEffect)(() => {
                F && j(d && !E || !d)
              }, [F, d, E]), (0, o.useEffect)(() => {
                t && F && D && t(z || x)
              }, [x, t, F, D, z]), !e) return null;
            const L = S?.buttons || [{
                buttonText: a.formatMessage(Uo.ns_ok_button_text),
                onClick: () => {
                  T(!1)
                },
                testId: "ok-btn",
                style: "secondary"
              }, {
                buttonText: S?.showManagePreferences ? a.formatMessage(Uo.ns_manage_prefs_button_text) : "",
                isLink: !0,
                link: N.preferences,
                testId: "preferences-btn",
                style: "ghost"
              }],
              G = (e, t) => (0, r.jsx)(c.Heading, {
                level: 3,
                className: "_4fo4mk1",
                children: t
              }),
              W = {
                [l.ContentfulTypes.BLOCKS.HEADING_1]: G,
                [l.ContentfulTypes.BLOCKS.HEADING_2]: G,
                [l.ContentfulTypes.BLOCKS.HEADING_3]: G,
                [l.ContentfulTypes.BLOCKS.HEADING_4]: G,
                [l.ContentfulTypes.BLOCKS.HEADING_5]: G,
                [l.ContentfulTypes.BLOCKS.HEADING_6]: G
              },
              q = d && !D;
            return (0, r.jsxs)(r.Fragment, {
              children: [x && (0, r.jsx)(Jo, {
                children: q ? (0, r.jsx)(Oo.A, {}) : (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(Qo, {
                    asChild: !0,
                    children: e.image && (0, r.jsx)(ue, {
                      src: e.image
                    })
                  }), (0, r.jsxs)(en, {
                    children: [e.textContent && (0, r.jsx)(tn, {
                      children: (0, r.jsx)(l.RsgMdTextComponent, {
                        markdown: e.textContent,
                        rsgRichTextOptions: {
                          renderNode: W
                        }
                      })
                    }), (0, r.jsx)(an, {
                      onClick: I,
                      isDisabled: A,
                      children: e.cta?.text
                    })]
                  })]
                })
              }), S && (0, r.jsx)(Vo.A, {
                icon: S.icon,
                title: a.formatMessage(S.heading),
                secondaryText: a.formatMessage(S.bodyText),
                closeOnOutsideClick: S.closeOnOutsideClick,
                buttons: L,
                showDialog: z,
                onClose: () => T(!1)
              })]
            })
          },
          [vn]: ({
            block: e
          }) => {
            const {
              trackEvent: t,
              trackRichTextHyperlink: a
            } = q();
            return (0, r.jsxs)(_n, {
              colorMode: "dark",
              backgroundColor: e.backgroundColor,
              gradientEnabled: e.enableGradient,
              imagePlacement: e.imagePlacement,
              children: [(0, r.jsx)(mn, {
                image: e.backgroundImage
              }), (0, r.jsxs)(un, {
                contentAlignment: e.contentAlignment,
                children: [(0, r.jsx)(kn, {
                  children: e.badge
                }), (0, r.jsx)(bn, {
                  image: e.foregroundImage,
                  size: e.foregroundImageSize
                }), (0, r.jsxs)(hn, {
                  children: [(0, r.jsx)(pn, {
                    level: 4,
                    children: e.headline
                  }), (0, r.jsx)(fn, {
                    size: "MD",
                    children: e.description
                  })]
                }), e.cta && (0, r.jsx)(gn, {
                  appearance: e.cta.appearance,
                  override_backgroundColor: e.cta.backgroundColor,
                  size: "MD",
                  onPress: (o = e.cta, () => t(o.analyticsData, o)),
                  asChild: !0,
                  children: (0, r.jsx)("a", {
                    href: e.cta.link?.url,
                    children: e.cta.text
                  })
                }), (0, r.jsx)(yn, {
                  markdown: e.legalText,
                  onHyperlinkClick: e => a(e)
                })]
              })]
            });
            var o
          },
          [W]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, o.useContext)(l.BlockRendererContext), {
              trackEvent: a,
              useTrackPageSectionImpression: n
            } = q(), {
              ref: c
            } = n(e.analyticsData), [d, _] = (0, o.useState)(!1), [u, m] = (0, o.useState)(!0), {
              formatMessage: b
            } = (0, i.useIntl)(), {
              isMobile: g
            } = (0, s.useWindowResize)(), p = e.title, f = e.cta, y = p || f;
            (0, o.useEffect)(() => {
              if (e?.cta?.link?.url) try {
                new URL(e.cta.link.url).origin !== window.location.origin && _(!0)
              } catch {
                _(!1)
              }
            }, [e]);
            const x = (0, o.useCallback)(e => {
              m(e)
            }, []);
            if (!e || !u) return null;
            const j = {
                topPaddingMultiplier: L[e.topPadding] ?? L.default,
                bottomPaddingMultiplier: L[e.bottomPadding] ?? L.default,
                backgroundCss: e.backgroundCss,
                backgroundImage: g ? e.mobileBackgroundImage?.source?.url : e.desktopBackgroundImage?.source?.url,
                className: (0, h.m)(e.theme?.colorMode ?? "dark")
              },
              w = (0, r.jsxs)(T, {
                ref: c,
                ...j,
                children: [y && (0, r.jsxs)(z, {
                  children: [p && (0, r.jsx)(P, {
                    level: 2,
                    children: p
                  }), f?.text && f.link?.url && (0, r.jsx)(F, {
                    label: `${f.text}${d&&b(v.aria_label_open_new_window)}`,
                    url: f.link.url,
                    isExternal: d,
                    iconRight: f.iconRight?.icon,
                    onClick: () => a(f?.analyticsData, f),
                    children: f.text
                  })]
                }), e.contentCollection?.items && (0, r.jsx)(D, {
                  children: e.contentCollection.items?.map(e => (0, r.jsx)(l.BlockRenderer, {
                    block: e,
                    blockPosition: t,
                    renderSectionWrapper: x
                  }, e.sys?.id))
                })]
              });
            let C;
            return C = (0, r.jsx)(k, {
              theme: e.theme,
              children: w
            }), C
          },
          [Sn]: ({
            block: e
          }) => {
            if (!e) return null;
            const {
              cta: t
            } = e;
            return (0, r.jsx)(xn, {
              children: (0, r.jsxs)(jn, {
                children: [(0, r.jsxs)(wn, {
                  children: [(0, r.jsx)(Cn, {
                    altText: e.title
                  }), (0, r.jsx)(Rn, {
                    children: e.description
                  })]
                }), t && (0, r.jsx)(ae, {
                  block: t,
                  size: "LG"
                })]
              })
            })
          },
          [qn]: ({
            block: e
          }) => {
            const {
              primaryAccentColor: t,
              headerTextColor: a
            } = (0, o.useContext)(y), {
              alignment: n,
              badge: s,
              eyebrow: i,
              eyebrowSize: c,
              header: d,
              headerSize: _,
              body: u,
              bodySize: m,
              ctasCollection: b,
              footnote: g,
              headerTextWrap: p,
              bodyTextWrap: f
            } = e;
            return (0, r.jsxs)(zn, {
              align: n || "left",
              children: [s && (0, r.jsx)(Pn, {
                children: s
              }), (0, r.jsxs)(Fn, {
                bodyTextWrap: f,
                children: [i && (0, r.jsx)(Dn, {
                  size: c,
                  children: i
                }), d && (0, r.jsx)(Ln, {
                  headerSize: _,
                  textColor: a,
                  headerTextWrap: p,
                  children: d
                }), u && (0, r.jsx)(Gn, {
                  asChild: !0,
                  children: (0, r.jsx)(l.RsgMdTextComponent, {
                    markdown: u,
                    bodySize: m
                  })
                })]
              }), b && b?.items?.length > 0 && (0, r.jsx)(Wn, {
                children: b.items.map(e => (0, r.jsx)(ae, {
                  block: e,
                  backgroundColor: t
                }, e.text))
              }), g && (0, r.jsx)(l.RsgMdTextComponent, {
                markdown: g,
                bodySize: "XS"
              })]
            })
          },
          [Xn]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, o.useContext)(l.BlockRendererContext);
            if (!e?.content) return null;
            const {
              image: a,
              content: n,
              variant: s
            } = e;
            return (0, r.jsxs)(Vn, {
              variant: s ?? "image_right",
              children: [(0, r.jsx)(On, {
                altText: a?.altText ?? "",
                src: a?.source?.url ?? ""
              }), (0, r.jsx)($n, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: n,
                  blockPosition: t
                })
              })]
            })
          },
          [Kn]: ({
            block: e
          }) => {
            if (e) return (0, r.jsx)(r.Fragment, {
              children: e.videos?.referencesCollection?.items.map(e => {
                if ("Link" === e.type && e?.link?.url) {
                  const t = new URL(e?.link?.url),
                    a = "www.rockstargames.com" === t.hostname,
                    o = t.pathname.split("/");
                  if (a && "videos" === o[1]) {
                    const t = o[2];
                    return (0, r.jsx)(Hn(), {
                      id: t,
                      autoplay: !0
                    }, e.sys.id)
                  }
                }
              })
            })
          },
          [Us]: ({
            block: e
          }) => {
            const {
              data: t
            } = (0, s.useQuery)(Xs.MetaUrlInfo, {
              variables: {
                url: e?.tinaPageUrl ?? ""
              },
              setTitleDataPath: "metaUrlInfo.title"
            });
            if (!t || !e) return null;
            const a = (e => {
              if (!e) return null;
              const {
                content: t
              } = e.metaUrlInfo.tina.payload;
              if (!t) return null;
              let a = {
                _template: ""
              };
              return t.forEach(e => {
                if ("gen9.TinaWrapper" === e?._template) {
                  const t = e.content.find(e => "Engagement" === e?._template);
                  t && (a = t)
                }
              }), a
            })(t);
            return (0, r.jsx)($s, {
              fontTheme: "helvetica",
              usePadding: !1,
              giftId: a?.giftId || "",
              location: a?.location || "",
              jumpLinkId: a?.jumpLinkId || "",
              legalText: a?._memoq?.legalText || "",
              successScreen: {
                successContent: a?.successScreen?._memoq?.successContent || "",
                successHeadline: a?.successScreen?._memoq?.successHeadline || ""
              },
              errorScreen: {
                errorHeadline: a?.errorScreen?._memoq?.errorHeadline || "",
                errorButton: a?.errorScreen?._memoq?.errorButton || ""
              },
              unlinkedScreen: {
                unlinkedContent: a?.unlinkedScreen?._memoq?.unlinkedContent || "",
                unlinkedHeadline: a?.unlinkedScreen?._memoq?.unlinkedHeadline || "",
                unlinkedButtonText: a?.unlinkedScreen?._memoq?.unlinkedButtonText || ""
              },
              introScreen: {
                tag: a?.introScreen?._memoq?.tag || "",
                introHeadline: a?.introScreen?._memoq?.introHeadline || "",
                introContent: a?.introScreen?._memoq?.introContent || "",
                btnTextLoggedIn: a?.introScreen?._memoq?.btnTextLoggedIn || "",
                btnTextLoggedOut: a?.introScreen?._memoq?.btnTextLoggedOut || "",
                image: {
                  alt: a?.introScreen?.image?._memoq?.alt || "",
                  sources: a?.introScreen?.image?.sources
                }
              }
            })
          }
        },
        Zs = ({
          data: e
        }) => (0, r.jsx)(m, {
          children: (0, r.jsx)(l.PageRenderer, {
            data: e.items[0],
            customBlocks: Ys,
            children: (0, r.jsx)(Z, {})
          })
        }),
        Js = ({
          slug: e
        }) => {
          let t = e;
          const {
            data: a,
            loading: o
          } = (0, l.useContentfulQuery)({
            query: d.wwwPageQuery,
            variables: {
              slug: t
            }
          });
          return !o && a && a.wwwPageCollection.items[0] ? (0, r.jsx)(Zs, {
            data: a.wwwPageCollection
          }) : null
        },
        Qs = (ei = ({
          slug: e
        }) => {
          const [{
            iso: t
          }] = (0, i.getLocale)(), a = (0, o.useMemo)(() => (0, s.createDeferredScrollTriggerRefresh)(), []);
          return (0, o.useEffect)(() => () => {
            a.cleanup()
          }, [a]), (0, r.jsx)(n.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            className: "_1dx15kv0",
            locale: t,
            onPlatformScaleChange: a.refresh,
            children: (0, r.jsx)(Js, {
              slug: e
            })
          })
        }, (0, i.withIntl)(ei, Q));
      var ei
    },
    5328(e, t, a) {
      const r = {
        "./applestore.svg": 49733,
        "./googleplay.svg": 62749,
        "./left.svg": 84941,
        "./pc.svg": 39821,
        "./pcalt.svg": 29886,
        "./ps.svg": 65437,
        "./ps3.svg": 33492,
        "./ps4.svg": 65115,
        "./ps5.svg": 23146,
        "./right.svg": 80304,
        "./switch.svg": 22454,
        "./x.svg": 66426,
        "./xbox.svg": 59129,
        "./xboxone.svg": 42659,
        "./xboxseriesxs.svg": 36773
      };

      function o(e) {
        const t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(r, e)) {
          const t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      o.keys = function() {
        return Object.keys(r)
      }, o.resolve = n, e.exports = o, o.id = 5328
    },
    49733(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    62749(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    84941(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    39821(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    29886(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg"
    },
    65437(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    33492(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    65115(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    23146(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    80304(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    22454(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    66426(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    59129(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    42659(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    36773(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    14804(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    }
  }
]);