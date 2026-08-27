try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a6acaf70-ac60-402b-9df1-51621930d3e3", e._sentryDebugIdIdentifier = "sentry-dbid-a6acaf70-ac60-402b-9df1-51621930d3e3")
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
  [4179, 6538, 6560, 6593], {
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

      function n(e, t) {
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
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = r[t] || new Set,
          s = new Set,
          i = new Set;
        for (o.forEach(function(e) {
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
          var r = n(e, t);
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
        n = a(93082),
        o = a(29443),
        s = a(99225),
        i = a(42909);
      const l = (0, n.forwardRef)(function({
        href: e,
        testId: t,
        ...a
      }, n) {
        const l = (0, i.linkWithLocale)(e || ""),
          c = (0, o.v6)(a, {
            "data-testid": t
          });
        return l.isExternal ? (0, r.jsx)("a", {
          href: l.link,
          target: "_blank",
          rel: "noreferrer",
          ...c,
          ref: n
        }) : (0, r.jsx)(s.Link, {
          to: l.link,
          target: "_self",
          ...c,
          ref: n
        })
      })
    },
    51135(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => _
      });
      var r = a(39793),
        n = a(93082),
        o = a(13331),
        s = a(32552),
        i = a(81270);
      const l = ({
          button: e,
          closeDialog: t,
          style: a = "primary"
        }) => {
          const {
            buttonIcon: n,
            buttonText: o,
            extraClasses: l,
            isDisabled: c,
            isLink: _,
            link: d,
            onClick: u,
            testId: m
          } = e;
          return _ ? o && (0, r.jsx)(s.Button, {
            asChild: !0,
            appearance: a,
            size: "LG",
            children: (0, r.jsx)("a", {
              href: d,
              ...m && {
                "data-testid": m
              },
              children: o
            })
          }) : (0, r.jsx)(s.Button, {
            autoFocus: !0,
            iconRight: n,
            className: (0, i.default)(l),
            isDisabled: c,
            onPress: e => (e => {
              u && u(), t && t(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: a,
            size: "LG",
            "aria-label": o,
            ...m && {
              "data-testid": m
            },
            children: o
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
        _ = ({
          icon: e,
          title: t,
          secondaryText: a,
          buttons: s,
          showDialog: i,
          onClose: _ = () => {},
          closeOnOutsideClick: d = !0,
          extraClasses: u
        }) => {
          const m = (0, n.useRef)(null),
            {
              setBodyIsLocked: b
            } = (0, o.useBodyScrollable)("AlertDialog");
          (0, n.useEffect)(() => {
            i && m?.current && (m.current?.showModal?.(), b(!0))
          }, [i]);
          const p = () => {
            b(!1), _(), m.current?.close?.()
          };
          if (i) return (0, r.jsxs)("dialog", {
            ref: m,
            className: c.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && d && (b(!1), _(), e.currentTarget.close())
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
                closeDialog: p
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
        n = a(57821),
        o = a.n(n);
      const s = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        i = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        l = ({
          type: e = "spinning"
        }) => {
          let t;
          return t = "threeDots" === e ? i : s, (0, r.jsx)(o(), {
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
        n = a(21297);
      var o = a(81270);
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
            className: (0, o.default)("rockstargames-sites-rockstargamesb0ff0045ed0326a46ca1e0867d2050c1", a),
            "data-testid": "platform-tag",
            "data-platform": t,
            "data-tag-size": e,
            src: s,
            alt: "",
            "aria-hidden": !0
          }), (0, r.jsx)(n.s6, {
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
        n = a(93082),
        o = a(36421);
      var s = a(81270);
      const i = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        l = (0, n.forwardRef)(function({
          rank: e,
          size: t = "large",
          className: a,
          alt: n,
          testId: l,
          ...c
        }, _) {
          const d = i(e),
            u = (0, o.v6)(c, {
              className: (0, s.default)("rockstargames-sites-rockstargamesf54750ef62f8600000c94f0caba85986", a),
              "data-testid": l
            });
          return (0, r.jsxs)("div", {
            "data-size": t,
            ref: _,
            ...u,
            children: [(0, r.jsx)("svg", {
              role: "svg",
              "aria-label": n,
              className: "rockstargames-sites-rockstargamesa3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": i(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: d
              })
            }), (0, r.jsx)("span", {
              className: "rockstargames-sites-rockstargamesd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        })
    },
    33337(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var r = a(39793),
        n = a(93082),
        o = a(42909);
      const s = (0, o.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          description: "Aria label to indicate when a link opens in new window/tab",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var i = a(99225);
      const l = "rockstargames-sites-rockstargamesea8cf4797c830e5b5dad68b2ec814e67",
        c = (0, a(69364).g)(({
          children: e,
          to: t = "#",
          reloadDocument: a = !1,
          alt: c = "",
          autoBlank: _ = !1,
          role: d = "link",
          onClick: u = () => {},
          focused: m = !1,
          ...b
        }) => {
          const p = (0, n.useRef)(null),
            g = (0, o.useIntl)(),
            f = !/^(https?|mailto):/i.test(t),
            h = /^#/.test(t),
            y = b?.target ?? (_ ? "_blank" : "_self"),
            {
              ...k
            } = b,
            w = k["aria-current"] ?? !1;
          let v = "";
          if ("aria-label" in k && k["aria-label"] && (v = "_blank" === y ? `${k["aria-label"]} ${g.formatMessage(s.aria_label_open_new_window)}` : k["aria-label"]), (0, n.useEffect)(() => {
              m && p?.current && p.current.focus()
            }, [p?.current, m]), h) {
            const a = e => {
              e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), u && u(e)
            };
            return (0, r.jsxs)("a", {
              title: c,
              href: t,
              onClick: a,
              ...k,
              "aria-label": v,
              "aria-current": w,
              ref: p,
              role: d,
              children: [e, "_blank" === y && !v && (0, r.jsx)("span", {
                className: l,
                children: g.formatMessage(s.aria_label_open_new_window)
              })]
            })
          }
          if (f) return (0, r.jsxs)(i.NavLink, {
            title: c,
            to: t,
            onClick: u,
            ...k,
            "aria-label": v,
            "aria-current": w,
            ref: p,
            reloadDocument: a,
            children: [e, "_blank" === y && !v && (0, r.jsx)("span", {
              className: l,
              children: g.formatMessage(s.aria_label_open_new_window)
            })]
          });
          const x = Object.keys(k).filter(e => !["activeClassName", "key", "end"].includes(e)).reduce((e, t) => ({
            ...e,
            [t]: b[t]
          }), {});
          return "function" == typeof x?.className && delete x.className, (0, r.jsxs)("a", {
            href: t,
            title: c,
            onClick: u,
            target: y,
            ...x,
            "aria-label": v,
            "aria-current": w,
            ref: p,
            role: d,
            children: [e, "_blank" === y && !v && (0, r.jsx)("span", {
              className: l,
              children: g.formatMessage(s.aria_label_open_new_window)
            })]
          })
        })
    },
    69364(e, t, a) {
      "use strict";
      a.d(t, {
        g: () => o
      });
      var r = a(42909);
      const n = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","carousel_learn_more":"Mehr erfahren","carousel_next_slide_label":"Nächstes Element","carousel_previous_slide_label":"Vorheriges Element","carousel_watch_more":"Jetzt anschauen","character_card_a11y_intro":"Charakterkarte:","character_card_a11y_player":"Spieler {player}.","character_card_a11y_rank":"Rang {rank}.","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","modal_pagination_group_sr_only_label":"Jetzt angezeigt: {index} von {total}","next_button_label":"Nächste Videoseite","ns_already_subbed_details_amp":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_cta_title_twitchdrops":"Verpass nicht dein nächstes Gratisgeschenk in GTA Online.","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details_amp":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","rp_icon":"RP-Kategorie","wasted_error_404_new":"Die Seite, die du suchst, existiert nicht, oder es ist ein anderer Fehler aufgetreten.","wasted_home":"Startseite"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","carousel_learn_more":"Learn More","carousel_next_slide_label":"Next Slide","carousel_previous_slide_label":"Previous Slide","carousel_watch_more":"Watch Now","character_card_a11y_intro":"Character Card:","character_card_a11y_player":"Player {player}.","character_card_a11y_rank":"Rank {rank}.","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","modal_pagination_group_sr_only_label":"Now showing {index} of {total}","next_button_label":"Next video page","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_cta_title_twitchdrops":"Don\'t miss the next free GTA Online gift","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","rp_icon":"RP Category","wasted_error_404_new":"The page you\'re looking for doesn\'t exist or another error occurred.","wasted_home":"Home"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_next_slide_label":"Diapositiva siguiente","carousel_previous_slide_label":"Diapositiva anterior","carousel_watch_more":"Ya disponible","character_card_a11y_intro":"Tarjeta del personaje:","character_card_a11y_player":"Jugador {player}.","character_card_a11y_rank":"Nivel {rank}.","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","modal_pagination_group_sr_only_label":"Mostrando {index} de {total}","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","rp_icon":"Categoría de RP","wasted_error_404_new":"La página que buscas no existe o ha habido otro error.","wasted_home":"Inicio"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_next_slide_label":"Siguiente imagen","carousel_previous_slide_label":"Imagen anterior","carousel_watch_more":"Ya disponible","character_card_a11y_intro":"Tarjeta de personaje:","character_card_a11y_player":"Jugador: {player}","character_card_a11y_rank":"Nivel: {rank}","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","modal_pagination_group_sr_only_label":"Mostrando {index} de {total}","next_button_label":"Página de video siguiente","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","rp_icon":"Categoría de RP","wasted_error_404_new":"Ocurrió un problema o la página que estás buscando no existe.","wasted_home":"Inicio"},"fr-FR":{"aria_label_open_new_window":"(S\'ouvre dans une nouvelle fenêtre)","carousel_learn_more":"En savoir plus","carousel_next_slide_label":"Page suivante","carousel_previous_slide_label":"Page précédente","carousel_watch_more":"Visionner maintenant","character_card_a11y_intro":"Carte de personnage :","character_card_a11y_player":"Joueur {player}.","character_card_a11y_rank":"Rang {rank}.","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","modal_pagination_group_sr_only_label":"Affichage de {index} sur {total}","next_button_label":"Page vidéo suivante","ns_already_subbed_details_amp":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_cta_title_twitchdrops":"Ne manquez pas le prochain cadeau gratuit dans GTA Online.","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","rp_icon":"Catégorie : RP","wasted_error_404_new":"La page que vous recherchez n\'existe pas ou une autre erreur est survenue.","wasted_home":"Accueil"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","carousel_learn_more":"Altre informazioni","carousel_next_slide_label":"Scheda successiva","carousel_previous_slide_label":"Scheda precedente","carousel_watch_more":"Guarda ora","character_card_a11y_intro":"Scheda personaggio:","character_card_a11y_player":"Giocatore {player}.","character_card_a11y_rank":"Rango {rank}.","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","modal_pagination_group_sr_only_label":"In riproduzione: {index} di {total}","next_button_label":"Pagina di video successiva","ns_already_subbed_details_amp":"Stai già usando questo indirizzo email per ricevere la newsletter. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_cta_title_twitchdrops":"Non perdere il prossimo omaggio di GTA Online","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","rp_icon":"Categoria RP","wasted_error_404_new":"La pagina che stai cercando non esiste o si è verificato un altro errore.","wasted_home":"Home"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","carousel_learn_more":"詳細を見る","carousel_next_slide_label":"次のスライド","carousel_previous_slide_label":"前のスライド","carousel_watch_more":"今すぐ視聴","character_card_a11y_intro":"キャラクターカード：","character_card_a11y_player":"プレイヤー {player}","character_card_a11y_rank":"ランク {rank}","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","modal_pagination_group_sr_only_label":"{total}のうち{index}を表示中","next_button_label":"次のビデオページ","ns_already_subbed_details_amp":"このメールアドレスで既にニュースレターアップデートを受け取っています。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_cta_title_twitchdrops":"次回の「GTAオンライン」の無料ギフトをお見逃しなく","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","rp_icon":"RPカテゴリー","wasted_error_404_new":"お探しのページが存在しない、もしくはエラーが起こりました。","wasted_home":"ホーム"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","carousel_learn_more":"더 알아보기","carousel_next_slide_label":"다음 슬라이드","carousel_previous_slide_label":"이전 슬라이드","carousel_watch_more":"지금 감상하기","character_card_a11y_intro":"캐릭터 카드:","character_card_a11y_player":"플레이어 {player}.","character_card_a11y_rank":"랭크 {rank}.","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","modal_pagination_group_sr_only_label":"{total}의 {index} 이미지","next_button_label":"다음 비디오 페이지","ns_already_subbed_details_amp":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_cta_title_twitchdrops":"다음 무료 GTA 온라인 선물을 놓치지 마십시오","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details_amp":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","rp_icon":"RP 카테고리","wasted_error_404_new":"찾고 계신 페이지가 존재하지 않거나 오류가 발생했습니다.","wasted_home":"홈"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","carousel_learn_more":"Dowiedz się więcej","carousel_next_slide_label":"Następny slajd","carousel_previous_slide_label":"Poprzedni slajd","carousel_watch_more":"Obejrzyj","character_card_a11y_intro":"Karta postaci:","character_card_a11y_player":"Gracz {player}.","character_card_a11y_rank":"Ranga {rank}.","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","modal_pagination_group_sr_only_label":"Wyświetlane {index} z {total}","next_button_label":"Następna strona z filmami","ns_already_subbed_details_amp":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_cta_title_twitchdrops":"Nie przegap kolejnych darmowych korzyści w GTA Online","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","rp_icon":"Poziom RP","wasted_error_404_new":"Strona, której szukasz, nie istnieje lub wystąpił inny błąd.","wasted_home":"Strona główna"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","carousel_learn_more":"Saiba mais","carousel_next_slide_label":"Próximo","carousel_previous_slide_label":"Anterior","carousel_watch_more":"Assistir agora","character_card_a11y_intro":"Cartão de Personagem:","character_card_a11y_player":"Jogador {player}.","character_card_a11y_rank":"Nível {rank}.","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","modal_pagination_group_sr_only_label":"Mostrando {index} de {total}","next_button_label":"Próxima página de vídeos","ns_already_subbed_details_amp":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_cta_title_twitchdrops":"Não perca o próximo presente gratuito do GTA Online","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","rp_icon":"Categoria de RP","wasted_error_404_new":"A página que você procura não existe ou ocorreu um erro.","wasted_home":"Início"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","carousel_learn_more":"Подробности","carousel_next_slide_label":"Следующий слайд","carousel_previous_slide_label":"Предыдущий слайд","carousel_watch_more":"Смотреть сейчас","character_card_a11y_intro":"Карточка персонажа:","character_card_a11y_player":"Игрок {player}.","character_card_a11y_rank":"Уровень {rank}.","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","modal_pagination_group_sr_only_label":"На экране {index} из {total}","next_button_label":"Следующая страница с видео","ns_already_subbed_details_amp":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_cta_title_twitchdrops":"Не пропустите следующий подарок в GTA Online","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","rp_icon":"Категория опыта","wasted_error_404_new":"Запрашиваемой вами страницы не существует, или возникла ошибка.","wasted_home":"Главная страница"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","carousel_learn_more":"了解更多","carousel_next_slide_label":"下一页","carousel_previous_slide_label":"上一页","carousel_watch_more":"马上观看","character_card_a11y_intro":"角色卡：","character_card_a11y_player":"玩家{player}。","character_card_a11y_rank":"等级{rank}。","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","modal_pagination_group_sr_only_label":"正在显示{index}（共{total}）","next_button_label":"下一页视频","ns_already_subbed_details_amp":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置中随时管理您的通信偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games邮件通知，请通过发送到您订阅时使用的电子邮件地址中的链接验证您的电子邮件地址。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自Rockstar Games以及我们附属公司的游戏公告和更新、特别活动与优惠的信息，及更多内容。","ns_cta_title":"订阅Rockstar Games邮件通知","ns_cta_title_twitchdrops":"不要错过下一份GTA在线模式免费礼物","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details_amp":"您现已订阅Rockstar Games邮件通知，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置中随时管理您的通信偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","rp_icon":"声望值类别","wasted_error_404_new":"您想找的页面不存在，或者出现了其他错误。","wasted_home":"主页"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","carousel_learn_more":"了解更多","carousel_next_slide_label":"下一頁","carousel_previous_slide_label":"上一頁","carousel_watch_more":"馬上觀看","character_card_a11y_intro":"角色卡：","character_card_a11y_player":"玩家 {player}。","character_card_a11y_rank":"等級 {rank}。","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","modal_pagination_group_sr_only_label":"現正顯示 {index} 個（共 {total} 個）","next_button_label":"下一個影片頁面","ns_already_subbed_details_amp":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_cta_title_twitchdrops":"別錯過下一個免費的 GTA 線上模式好禮","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details_amp":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","rp_icon":"聲望值類別","wasted_error_404_new":"您所找的頁面不存在，或者發生了其他錯誤。","wasted_home":"首頁"}}'),
        o = e => (0, r.withIntl)(e, n)
    },
    17607(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        RSG_CONTENT_RATING_FRAGMENT: () => n,
        RSG_CTA_FRAGMENT: () => o,
        RSG_GAME_FRAGMENT: () => s,
        RSG_ICON_FRAGMENT: () => i,
        RSG_IMAGE_FILE_FRAGMENT: () => l,
        RSG_IMAGE_FRAGMENT: () => c,
        RSG_RICH_TEXT_FRAGMENT: () => F,
        RSG_VIDEO_FILE_FRAGMENT: () => D,
        RSG_VIDEO_FRAGMENT: () => L,
        SYS_FRAGMENT: () => _,
        WWW_BANNER_FRAGMENT: () => d,
        WWW_DECK_FRAGMENT: () => u,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => m,
        WWW_DIVIDER_FRAGMENT: () => b,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => p,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => g,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => f,
        WWW_GRID_FRAGMENT: () => h,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => y,
        WWW_GRID_WRAPPER_FRAGMENT: () => k,
        WWW_IMAGE_BLOCK_FRAGMENT: () => w,
        WWW_IMAGE_CARD_FRAGMENT: () => v,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => x,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => j,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => C,
        WWW_LINKOUT_IMAGE_FRAGMENT: () => R,
        WWW_MASONRY_GRID_FRAGMENT: () => S,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => N,
        WWW_PROMO_MODULE_FRAGMENT: () => I,
        WWW_REACT_COMPONENT_FRAGMENT: () => A,
        WWW_SECTION_WRAPPER_FRAGMENT: () => E,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => M,
        WWW_TEXT_BLOCK_FRAGMENT: () => T,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => P,
        WWW_THEME_PROVIDER_FRAGMENT: () => G,
        WWW_VIDEO_PLAYER_FRAGMENT: () => q,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => z,
        wwwBottomSheetQuery: () => V,
        wwwPageQuery: () => W
      });
      var r = a(94935);
      const n = r.gql`
fragment RsgContentRatingFragment on RsgContentRating {
  __typename
  sys {
    ...SysFragment
  }
  titleSlug
}
`,
        o = r.gql`
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
        _ = r.gql`
fragment SysFragment on Sys {
  __typename
  id
}
`,
        d = r.gql`
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
        p = r.gql`
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
        g = r.gql`
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
        w = r.gql`
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
        v = r.gql`
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
        x = r.gql`
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
        j = r.gql`
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
        z = r.gql`
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
        M = r.gql`
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
        T = r.gql`
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
        G = r.gql`
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
        F = r.gql`
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
        D = r.gql`
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
        L = r.gql`
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
        q = r.gql`
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
        W = r.gql`
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
  
  ${n}
  ${o}
  ${i}
  ${l}
  ${c}
  ${F}
  ${D}
  ${L}
  ${_}
  ${d}
  ${u}
  ${m}
  ${b}
  ${p}
  ${g}
  ${f}
  ${h}
  ${y}
  ${k}
  
  ${w}
  ${v}
  ${x}
  ${j}
  ${C}
  ${R}
  ${S}
  ${N}
  ${I}
  
  ${E}
  ${M}
  ${T}
  ${P}
  ${G}
  ${z}
`,
        V = r.gql`
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
  
  ${n}
  ${o}
  ${i}
  ${l}
  ${c}
  ${F}
  ${D}
  ${L}
  ${_}
  ${d}
  ${u}
  ${m}
  ${b}
  ${p}
  ${h}
  ${y}
  ${k}
  ${w}
  ${v}
  ${x}
  ${C}
  ${R}
  ${S}
  ${N}
  ${I}
  
  ${E}
  ${M}
  ${T}
  ${P}
  ${G}
  ${q}
  ${z}
`
    },
    25944(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        default: () => Qs
      });
      var r = a(39793),
        n = a(93082),
        o = a(820),
        s = a(13331),
        i = a(42909),
        l = a(72701),
        c = a(20005),
        _ = a(17607),
        d = a(99225);
      const u = (0, n.createContext)({
          slug: "",
          open: !1,
          onOpenChange: () => {}
        }),
        m = ({
          children: e
        }) => {
          const [t, a] = (0, d.useSearchParams)(), [o, s] = (0, n.useState)(""), [i, l] = (0, n.useState)(!1), c = () => {
            const e = !i;
            l(e), e || (s(""), a(e => (e.delete("view"), e), {
              replace: !0
            }))
          };
          (0, n.useEffect)(() => {
            const e = t.get("view");
            e ? (s(e), l(!0)) : (s(""), l(!1))
          }, [t]);
          const _ = (0, n.useMemo)(() => ({
            open: i,
            onOpenChange: c,
            slug: o
          }), [i, o]);
          return (0, r.jsx)(u.Provider, {
            value: _,
            children: e
          })
        };
      var b = a(55267);
      const p = (0, i.defineMessages)({
        bottom_sheet_modal_close_icon: {
          id: "bottom_sheet_modal_close_icon",
          description: "Label for X icon to close modal in Bottom Sheet",
          defaultMessage: "Close"
        }
      });
      var g = a(82199),
        f = a(42285),
        h = a(84390);
      const y = (0, n.createContext)({
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
        w = (0, i.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var v = a(1358),
        x = a(60172),
        j = a(29443),
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
        const o = (0, j.v6)(a, {
            className: S({
              showOn: e
            })
          }),
          s = (0, n.useMemo)(() => t ? void 0 : window?.matchMedia?.(C.f[e]), [e, window]);
        return (s?.matches ?? !0) && (0, r.jsx)(b.DX, {
          ...o
        })
      };
      a(66503);
      var I = "var(--uf2gjf2)",
        A = "var(--uf2gjf1)",
        z = "uf2gjf6",
        E = "var(--uf2gjf0)";
      const M = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          topPaddingMultiplier: n,
          bottomPaddingMultiplier: o,
          backgroundCss: s,
          backgroundImage: i,
          ...l
        }, c) {
          const _ = t ? b.DX : "section",
            d = (0, j.v6)({
              "data-testid": a,
              className: "uf2gjf3",
              style: (0, x.DI)({
                [E]: n ?? "0.5",
                [A]: o ?? "0.5",
                [I]: s,
                backgroundImage: i ? `url(${i})` : ""
              })
            }, l);
          return (0, r.jsx)(_, {
            ref: c,
            ...d,
            children: e
          })
        }),
        T = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          if (!e) return;
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": a,
              className: "uf2gjf4 _1betujy5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        P = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : c.Heading,
            i = (0, j.v6)({
              "data-testid": a,
              className: "uf2gjf5 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        G = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          label: a,
          url: n,
          iconRight: o = "ArrowRight",
          isExternal: s = !1,
          ...i
        }, l) {
          const _ = (0, j.v6)({
            "data-testid": e
          }, i);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(N, {
              forceMount: !0,
              showOn: "mobile",
              children: (0, r.jsx)(c.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: o,
                className: z,
                label: a,
                ..._,
                ref: l,
                asChild: !0,
                children: (0, r.jsx)(v.N, {
                  href: n,
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
                icon: o,
                className: z,
                label: a,
                ..._,
                ref: l,
                asChild: !0,
                children: (0, r.jsx)(v.N, {
                  href: n,
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
                iconRight: o,
                className: "uf2gjf7",
                "aria-label": a,
                ..._,
                ref: l,
                "data-testid": `${e}:desktopButton`,
                asChild: !0,
                children: (0, r.jsx)(v.N, {
                  href: n,
                  target: s ? "_blank" : "_self",
                  role: "link",
                  children: t
                })
              })
            })]
          })
        }),
        F = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": a,
              className: "uf2gjf8"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        D = {
          none: 0,
          default: .5,
          double: 1
        },
        L = (0, n.createContext)({
          analyticsData: void 0
        }),
        q = "WwwSectionWrapper",
        W = () => {
          const {
            analyticsData: e
          } = (0, n.useContext)(L), {
            track: t
          } = (0, g.useGtmTrack)(), a = e?.element_placement;
          return {
            trackEvent: (e, r) => {
              const n = r?.analyticsData || {};
              return t({
                ...r?.link?.url && {
                  link_url: r?.link?.url
                },
                ...e,
                element_placement: a,
                ...n
              })
            },
            trackRichTextHyperlink: e => t({
              event: "site_link_click",
              link_url: e.data.uri,
              text: e.content[0].value,
              element_placement: a
            }),
            useTrackPageSectionImpression: e => {
              const r = (0, n.useCallback)(r => {
                  r && t({
                    event: "page_section_impression",
                    element_placement: a,
                    ...e
                  })
                }, [t]),
                {
                  ref: o,
                  inView: s
                } = (0, f.useInView)({
                  threshold: .6,
                  triggerOnce: !0,
                  onChange: r
                });
              return {
                ref: o,
                inView: s
              }
            }
          }
        };
      var V = a(75921);
      const B = ({
          testId: e,
          ...t
        }) => {
          const a = (0, j.v6)(t, {
            "data-testid": e,
            autoFocus: !0
          });
          return (0, r.jsx)(V.bL, {
            ...a
          })
        },
        O = ({
          testId: e,
          ...t
        }) => {
          const a = (0, j.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(V.ZL, {
            ...a
          })
        },
        $ = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, j.v6)(t, {
            "data-testid": e,
            className: "_1ykqld07"
          });
          return (0, r.jsx)(V.hJ, {
            ref: a,
            ...n
          })
        }),
        X = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, n) {
          const o = (0, j.v6)(a, {
            "data-testid": e,
            className: "_1ykqld08"
          });
          return (0, r.jsx)(V.UC, {
            ref: n,
            ...o,
            children: t
          })
        }),
        U = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, n) {
          const o = (0, j.v6)(a, {
            "data-testid": e,
            className: "_1ykqld09"
          });
          return (0, r.jsx)("div", {
            ref: n,
            ...o,
            children: t
          })
        }),
        H = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, j.v6)(t, {
            asChild: !0,
            className: "_1ykqld0a",
            "data-testid": e
          });
          return (0, r.jsx)(V.bm, {
            ref: a,
            ...n
          })
        }),
        K = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, j.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(V.hE, {
            ref: a,
            ...n
          })
        }),
        Y = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, j.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(V.VY, {
            ref: a,
            ...n
          })
        }),
        J = () => {
          const {
            trackEvent: e
          } = W(), {
            formatMessage: t
          } = (0, i.useIntl)(), [a, o] = (0, n.useState)(!1), {
            slug: d,
            open: m,
            onOpenChange: g
          } = (() => {
            const e = (0, n.useContext)(u);
            if (void 0 === e) throw new Error("useBottomSheet must be used within a Bottom Sheet Provider");
            return {
              open: e.open,
              slug: e.slug,
              onOpenChange: e.onOpenChange
            }
          })(), f = (0, s.usePrevious)(d), [h, y] = (0, n.useState)(null), {
            loading: k,
            error: w,
            data: v
          } = (0, l.useContentfulQuery)({
            query: _.wwwBottomSheetQuery,
            variables: {
              slug: d
            },
            skip: !d
          });
          if ((0, n.useEffect)(() => {
              a !== m && (o(m), y(document.activeElement), m ? e({
                event: "modal_open",
                card_id: d,
                card_name: d,
                text: d
              }) : (e({
                event: "modal_close",
                card_id: f,
                card_name: f,
                text: f
              }), h?.focus(), y(null)))
            }, [m, a]), !d) return;
          let x = null;
          return !v || k || w || (x = v?.wwwBottomSheetCollection?.items?.[0]), (0, r.jsx)(B, {
            open: m,
            onOpenChange: g,
            children: (0, r.jsxs)(O, {
              children: [(0, r.jsx)($, {}), (0, r.jsxs)(X, {
                children: [(0, r.jsxs)(b.s6, {
                  children: [(0, r.jsx)(K, {}), (0, r.jsx)(Y, {})]
                }), (0, r.jsx)(H, {
                  children: (0, r.jsx)(c.IconButton, {
                    size: "MD",
                    icon: "X",
                    appearance: "tertiary",
                    label: t(p.bottom_sheet_modal_close_icon)
                  })
                }), (0, r.jsx)(U, {
                  children: x && (0, r.jsx)(Z, {
                    block: x.contentCollection
                  })
                })]
              })]
            })
          })
        },
        Z = ({
          block: e
        }) => {
          const {
            blockPosition: t
          } = (0, n.useContext)(l.BlockRendererContext);
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
          asChild: o,
          ...s
        }) => {
          const i = (0, d.useLocation)(),
            [, l] = (0, d.useSearchParams)(),
            {
              trackEvent: _
            } = W(),
            u = e?.link?.url ?? "",
            m = (0, n.useMemo)(() => ((e, t) => {
              const a = ee(e);
              if (!a) return {
                mode: "link",
                href: e,
                viewParam: ""
              };
              const r = a.searchParams.get("view") ?? "",
                n = r ? "bottom-sheet" : "link";
              return {
                mode: n,
                href: "bottom-sheet" === n ? te(e, t) : e,
                viewParam: r
              }
            })(u, i.search), [u, i.search]),
            p = "bottom-sheet" === m.mode,
            g = m.href,
            f = m.viewParam,
            h = e?.openInNewTab ? "_blank" : "_self";
          if (!e) return null;
          const y = e => {
              _({
                event: "cta_other",
                text: e.text?.toLowerCase(),
                link_url: g,
                ...e.analyticsData
              }, e)
            },
            k = (0, j.v6)({
              size: t,
              appearance: e?.appearance,
              iconLeft: e?.iconLeft?.icon,
              iconRight: e?.iconRight?.icon,
              onPress: p ? () => {
                p && p && f && l(e => {
                  const t = new URLSearchParams(e);
                  return t.set("view", f), t
                }, {
                  replace: !0
                }), y(e)
              } : () => y(e),
              override_backgroundColor: e?.backgroundColor ?? a,
              asChild: !p
            }, s);
          return o ? (0, r.jsx)(v.N, {
            href: g,
            target: h,
            children: (0, r.jsx)(b.DX, {
              ...s
            })
          }) : (0, r.jsx)(c.Button, {
            ...k,
            children: p ? e.text : (0, r.jsx)(v.N, {
              href: g,
              target: h,
              children: e.text
            })
          })
        },
        re = e => e.endsWith(".svg") || e.endsWith(".gif"),
        ne = [320, 400, 480, 620, 768, 900, 1024, 1280, 1440, 1640, 1920, 2e3, 2560, 3840],
        oe = (e, t = ne, a = {}) => {
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
      const _e = [{
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
        de = (0, n.forwardRef)(function({
          src: e,
          width: t,
          height: a,
          testId: o,
          style: s,
          aspectRatio: i,
          ...l
        }, c) {
          const [_, d] = (0, n.useState)(!1), u = (0, n.useRef)(null), m = (0, le.UP)(u, c);
          (0, n.useEffect)(() => {
            if (!u.current) return;
            if ("loading" in HTMLImageElement.prototype) return void d(!0);
            const e = new IntersectionObserver((e, t) => {
              e.some(e => e.isIntersecting) && (d(!0), t.disconnect())
            }, {
              rootMargin: "200px"
            });
            return e.observe(u.current), () => {
              e.disconnect()
            }
          }, [u.current]);
          const b = (0, n.useMemo)(() => {
            const r = !e || !re(e),
              n = r ? (e => {
                if (!Array.isArray(e) || 0 === e.length) return "100vw";
                const t = e.filter(e => e?.slot).map(e => e.media ? `${e.media} ${e.slot}` : e.slot);
                return [...t.filter(e => e.includes("max-width")), t.find(e => !e.includes("max-width")) ?? "100vw"].join(", ")
              })(_e) : void 0,
              c = i ?? `${t||1} / ${a||1}`,
              d = (0, x.DI)({
                [ce]: c
              });
            return (0, j.v6)({
              "data-testid": o,
              srcSet: _ && r ? oe(e)?.map(e => `${e.url} ${e.width}w`).join(", ") : void 0,
              src: e,
              sizes: _ && r ? n : void 0,
              className: "_1dbiq9u1",
              loading: "lazy",
              decoding: "async",
              width: t,
              height: a,
              style: {
                ...d,
                ...s
              }
            }, l)
          }, [o, e, l, _]);
          return _ ? (0, r.jsx)("img", {
            ref: m,
            ...b
          }) : (0, r.jsx)("div", {
            ref: m
          })
        }),
        ue = (0, n.forwardRef)(function({
          src: e,
          className: t,
          loading: a = "lazy",
          testId: n,
          ...o
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
          const c = (0, j.v6)({
            "data-testid": n,
            alt: i.alt,
            src: i.url,
            width: i.width,
            height: i.height,
            loading: a,
            className: t
          }, o);
          return (0, r.jsx)(de, {
            ref: s,
            ...c
          })
        }),
        me = "RsgImageFile",
        be = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, j.v6)(a, {
            "data-testid": t
          });
          return (0, r.jsx)("picture", {
            ...o,
            ref: n,
            children: e
          })
        }),
        pe = ({
          testId: e,
          src: t,
          ...a
        }) => {
          const n = (0, j.v6)(a, {
            "data-testid": e,
            srcSet: re(t) ? t : oe(t)?.map(e => `${e.url} ${e.width}w`).join(", ")
          });
          return (0, r.jsx)("source", {
            ...n
          })
        },
        ge = (0, n.forwardRef)(function({
          testId: e,
          src: t,
          ...a
        }, o) {
          const s = (0, j.v6)(a, {
              "data-testid": e
            }),
            i = (0, n.useRef)(null),
            l = (0, le.UP)(i, o);
          return (0, n.useEffect)(() => {
            i?.current && (re(t) ? i.current.src = t : i.current.srcset = oe(t)?.map(e => `${e.url} ${e.width}w`).join(", "))
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
      const we = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "dhgwc11 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ve = (0, n.forwardRef)(function({
          backgroundColor: e = "transparent",
          children: t,
          testId: a,
          asChild: n,
          altText: o,
          ...s
        }, i) {
          const l = n ? b.DX : "a",
            c = (0, j.v6)({
              "data-testid": a,
              className: "dhgwc12",
              "aria-label": o,
              style: (0, x.DI)({
                [ke]: e
              })
            }, s);
          return (0, r.jsx)(l, {
            ref: i,
            ...c,
            children: t
          })
        }),
        xe = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          src: n,
          ...o
        }, s) {
          const i = a ? b.DX : "div",
            l = (0, j.v6)({
              "data-testid": t,
              className: "dhgwc13",
              style: {
                backgroundImage: `url(${n})`
              }
            }, o);
          return (0, r.jsx)(i, {
            ref: s,
            ...l,
            children: e
          })
        }),
        je = (0, n.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const n = (0, j.v6)({
            src: e,
            className: "dhgwc14"
          }, t);
          return (0, r.jsx)(ue, {
            ref: a,
            ...n
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
      const Ne = (0, n.createContext)({
          totalPages: 0,
          currentPage: 0,
          showNavButtons: !1,
          nextButtonDisable: !1,
          prevButtonDisable: !1
        }),
        Ie = (0, n.forwardRef)(function({
          asChild: e,
          children: t,
          totalPages: a,
          currentPage: o,
          showNavButtons: s = !0,
          ...i
        }, l) {
          const c = e ? b.DX : "div",
            _ = (0, n.useMemo)(() => 0 === o, [o]),
            d = (0, n.useMemo)(() => o === a - 1, [o, a]),
            u = (0, n.useMemo)(() => ((e, t) => t < 6 || e < 3 ? 0 : e >= t - 2 ? t - 5 : e - 2)(o, a), [o, a]),
            m = (0, j.v6)({
              className: "tvfngv0",
              style: {
                "--dot-navigation-total-pages": a,
                "--dot-navigation-current-page": o,
                "--dot-navigation-offset": u
              },
              "data-testid": "dot-navigation"
            }, i);
          return a <= 1 ? null : (0, r.jsx)(Ne.Provider, {
            value: {
              totalPages: a,
              currentPage: o,
              showNavButtons: s,
              nextButtonDisable: d,
              prevButtonDisable: _
            },
            children: (0, r.jsx)(c, {
              ref: l,
              ...m,
              children: t
            })
          })
        }),
        Ae = (0, n.forwardRef)(function({
          dotOnPress: e = () => {},
          ...t
        }, a) {
          const {
            totalPages: o
          } = (0, n.useContext)(Ne), s = (0, j.v6)({
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
                length: o
              }).map((t, a) => (0, r.jsx)(ze, {
                index: a,
                dotOnPress: () => e(a)
              }, a))
            })
          })
        }),
        ze = (0, n.forwardRef)(function({
          index: e,
          dotOnPress: t = () => {},
          ...a
        }, o) {
          const {
            totalPages: s,
            currentPage: i
          } = (0, n.useContext)(Ne), l = (0, n.useCallback)(() => t(), [t]), {
            dotState: c,
            tabIndex: _,
            dotSize: d
          } = (({
            currentPage: e,
            index: t,
            totalPages: a
          }) => ({
            dotState: (0, n.useMemo)(() => e === t ? "selected" : "unselected", [e, t]),
            tabIndex: (0, n.useMemo)(() => ((e, t, a) => {
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
            dotSize: (0, n.useMemo)(() => ((e, t, a) => {
              if (a < 6) return "MD";
              const r = a - 2,
                n = a - 3;
              if (e === t) return "MD";
              if (e === a - 1 || 0 === e) return "MD";
              if (6 === a) {
                if (t <= 2) return e === r ? "SM" : "MD";
                if (t >= n) return 1 === e ? "SM" : "MD"
              }
              if (t <= 2) {
                if (e <= 2) return "MD";
                if (3 === e) return "SM"
              }
              if (t >= n) {
                if (e >= n) return "MD";
                if (e === a - 4) return "SM"
              }
              return 1 === e || e === r || 1 === Math.abs(e - t) ? "SM" : "XS"
            })(t, e, a), [t, e, a])
          }))({
            currentPage: i,
            index: e,
            totalPages: s
          }), u = (0, n.useRef)(null), {
            buttonProps: m
          } = (0, le.sL)((0, j.v6)(a, {
            onPress: l
          }), u), b = (0, j.v6)(m, {
            tabIndex: _,
            className: Re({
              size: d,
              state: c
            }),
            "aria-current": "selected" === c,
            "data-testid": "dot-navigation-dot"
          });
          return (0, r.jsx)("button", {
            ref: o,
            ...b
          })
        }),
        Ee = (0, n.forwardRef)(function({
          label: e,
          onPress: t,
          ...a
        }, o) {
          const {
            showNavButtons: s,
            nextButtonDisable: i
          } = (0, n.useContext)(Ne), l = (0, j.v6)({
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
            ref: o,
            ...l
          })
        }),
        Me = (0, n.forwardRef)(function({
          label: e,
          onPress: t,
          ...a
        }, o) {
          const {
            showNavButtons: s,
            prevButtonDisable: i
          } = (0, n.useContext)(Ne), l = (0, j.v6)({
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
            ref: o,
            ...l
          })
        });
      var Te = a(64634),
        Pe = a(64010),
        Ge = a(34708);
      const Fe = (0, i.defineMessages)({
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
      var De = (0, R.c)({
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
        Le = (0, R.c)({
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
        qe = "_1betujy6 _1betujy5",
        We = (0, R.c)({
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
      const Ve = (0, n.createContext)({
          defaultSlide: 0,
          embla: void 0,
          controlsVisible: !1,
          prevButtonDisabled: !1,
          nextButtonDisabled: !1,
          onPrevButtonClick: null,
          onNextButtonClick: null,
          navigationRef: (0, n.createRef)(),
          viewportRef: void 0,
          navStyle: "arrows",
          activeIndex: 0,
          totalPages: 0,
          isInGrid: !1
        }),
        Be = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          defaultSlide: o = 0,
          onNext: s,
          onPrev: i,
          onSwipe: l,
          navStyle: c = "arrows",
          isInGrid: _ = !1,
          ...d
        }, u) {
          const {
            navigationRef: m
          } = (0, n.useContext)(Ve), {
            embla: p,
            viewportRef: g,
            controlsVisible: f,
            prevButtonDisabled: h,
            nextButtonDisabled: y,
            onPrevButtonClick: k,
            onNextButtonClick: w,
            activeIndex: v,
            totalPages: x
          } = (({
            defaultSlide: e,
            onNext: t,
            onPrev: a,
            onSwipe: r
          }) => {
            const [o, s] = (0, n.useState)(!0), [i, l] = (0, n.useState)(!0), [c, _] = (0, n.useState)(e), [d, u] = (0, n.useState)(e), [m, b] = (0, n.useState)(!1), p = {
              axis: "x",
              align: "start",
              startIndex: e,
              active: !0,
              containScroll: "trimSnaps",
              loop: !1,
              skipSnaps: !0,
              inViewThreshold: .9
            }, [g, f] = (0, Te.A)(p, [(0, Pe.J)()]), h = (0, n.useCallback)(() => {
              f && (f.scrollPrev(), a?.())
            }, [f]), y = (0, n.useCallback)(() => {
              f && (f.scrollNext(), t?.())
            }, [f]), k = (0, n.useCallback)(() => {
              f && (s(!f.canScrollPrev()), l(!f.canScrollNext()), _(f.selectedScrollSnap()), u(f?.scrollSnapList().length))
            }, [f]), w = () => {
              if (!f) return;
              const e = f.internalEngine().scrollSnaps.length > 1;
              b(e), f.reInit({
                active: e
              })
            };
            return (0, n.useEffect)(() => {
              if (!f) return;
              k(), f.on("reInit", k).on("select", k);
              const e = (0, Ge.A)(w, 25);
              return window.addEventListener("resize", e), w(), () => {
                window.removeEventListener("resize", e)
              }
            }, [f, k]), (0, n.useEffect)(() => {
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
            }, [f]), (0, n.useEffect)(() => {
              if (!f) return;
              const e = e => {
                  e?.canScrollNext() || e?.canScrollPrev() ? e.reInit({
                    ...p,
                    watchDrag: !0
                  }) : e.reInit({
                    ...p,
                    watchDrag: !1
                  }), u(f?.scrollSnapList().length)
                },
                t = t => {
                  w(), e(t), u(f?.scrollSnapList().length)
                };
              return f?.on("init", e), f?.on("resize", e), f?.on("slidesChanged", t), () => {
                f?.off("init", e), f?.off("resize", e), f?.off("slidesChanged", t)
              }
            }, [f]), {
              embla: f,
              controlsVisible: m,
              prevButtonDisabled: o,
              nextButtonDisabled: i,
              onPrevButtonClick: h,
              onNextButtonClick: y,
              viewportRef: g,
              activeIndex: c ?? 0,
              totalPages: d ?? 0
            }
          })({
            defaultSlide: o,
            onNext: s,
            onPrev: i,
            onSwipe: l
          }), C = a ? b.DX : "div", R = (0, j.v6)({
            "data-testid": t,
            className: "lwwe800"
          }, d);
          return (0, r.jsx)(Ve.Provider, {
            value: {
              embla: p,
              defaultSlide: o,
              navigationRef: m,
              controlsVisible: f,
              prevButtonDisabled: h,
              nextButtonDisabled: y,
              onPrevButtonClick: k,
              onNextButtonClick: w,
              viewportRef: g,
              navStyle: c,
              activeIndex: v,
              totalPages: x,
              isInGrid: _
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
        Oe = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const {
            isInGrid: i
          } = (0, n.useContext)(Ve), l = a ? b.DX : "div", c = (0, j.v6)(o, {
            "data-testid": t,
            className: i ? "" : qe
          });
          return (0, r.jsx)(l, {
            ref: s,
            ...c,
            children: e
          })
        }),
        $e = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, j.v6)(a, {
            "data-testid": t,
            className: "lwwe801"
          });
          return (0, r.jsx)(c.Heading, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Xe = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const {
            viewportRef: s,
            isInGrid: i
          } = (0, n.useContext)(Ve), l = (0, j.v6)({
            "data-testid": t,
            className: i ? "" : qe
          }, a);
          return (0, r.jsx)("div", {
            ref: o,
            ...l,
            children: (0, r.jsx)("div", {
              ref: s,
              className: "lwwe802",
              children: (0, r.jsx)("div", {
                className: Le({
                  isInGrid: i
                }),
                children: e
              })
            })
          })
        }),
        Ue = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, n) {
          const o = t ? b.DX : "div",
            s = (0, j.v6)({
              className: "lwwe809",
              tabIndex: -1
            }, a);
          return (0, r.jsx)(o, {
            ref: n,
            ...s,
            children: (0, r.jsx)("div", {
              className: "lwwe806",
              children: e
            })
          })
        }),
        He = (0, n.forwardRef)(function({
          children: e,
          variant: t = "small",
          testId: a,
          ...n
        }, o) {
          const s = (0, j.v6)({
            "data-testid": a,
            className: De({
              variant: t
            })
          }, n);
          return (0, r.jsx)("div", {
            ref: o,
            ...s,
            children: e
          })
        }),
        Ke = (0, n.forwardRef)(function({
          override_textColor: e,
          override_backgroundColor: t,
          appearance: a,
          size: o,
          testId: s,
          asChild: l,
          ..._
        }, d) {
          const {
            controlsVisible: u,
            onPrevButtonClick: m,
            onNextButtonClick: p,
            prevButtonDisabled: g,
            nextButtonDisabled: f,
            navStyle: h
          } = (0, n.useContext)(Ve), {
            formatMessage: y
          } = (0, i.useIntl)();
          if ("arrows" !== h) return;
          const k = l ? b.DX : "div",
            w = (0, j.v6)({
              className: We({
                visible: u
              }),
              "data-testid": s
            }, _);
          return (0, r.jsxs)(k, {
            ref: d,
            ...w,
            children: [(0, r.jsx)(c.IconButton, {
              size: o,
              icon: "ArrowLeft",
              appearance: a,
              onClick: m,
              label: y(Fe.carousel_prev_button),
              override_backgroundColor: t,
              override_textColor: e,
              isDisabled: g
            }), (0, r.jsx)(c.IconButton, {
              size: o,
              icon: "ArrowRight",
              appearance: a,
              onClick: p,
              label: y(Fe.carousel_next_button),
              override_backgroundColor: t,
              override_textColor: e,
              isDisabled: f
            })]
          })
        }),
        Ye = {
          Dots: (0, n.forwardRef)(function({
            ...e
          }, t) {
            const {
              formatMessage: a
            } = (0, i.useIntl)(), {
              embla: o,
              onPrevButtonClick: s,
              onNextButtonClick: l,
              controlsVisible: c,
              navStyle: _,
              activeIndex: d,
              totalPages: u
            } = (0, n.useContext)(Ve);
            if (!c || "dots" != _) return null;
            const m = (0, j.v6)({
              className: "lwwe80m",
              totalPages: u,
              currentPage: d
            }, e);
            return (0, r.jsx)("div", {
              className: "_1betujy6 _1betujy5",
              children: (0, r.jsxs)(Ie, {
                ref: t,
                ...m,
                children: [(0, r.jsx)(Me, {
                  label: a(Fe.carousel_prev_button),
                  onClick: s
                }), (0, r.jsx)(Ae, {
                  dotOnPress: e => {
                    o?.scrollTo(e)
                  }
                }), (0, r.jsx)(Ee, {
                  label: a(Fe.carousel_next_button),
                  onClick: l
                })]
              })
            })
          }),
          Arrows: Ke
        },
        Je = (0, n.createContext)({
          totalItems: 0,
          itemIndex: 0
        }),
        Ze = "WwwDeck",
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
          const e = (0, n.useContext)(nt);
          if (!e) throw new Error("useDecorativeVideoContext must be used within VideoProvider");
          return e
        },
        nt = (0, n.createContext)({
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
        ot = (0, n.forwardRef)(function({
          landscapeViewportBehavior: e,
          scrimColor: t,
          reducedMotion: a,
          playOnce: o,
          children: s,
          asChild: i,
          ...l
        }, c) {
          const [_, d] = (0, n.useState)(!a), [u, m] = (0, n.useState)(!1), [p, g] = (0, n.useState)(!1), f = (0, n.useRef)(null), h = (0, n.useRef)(!1), y = (0, n.useRef)(null), k = (0, j.v6)({
            className: tt({
              landscapeViewportBehavior: e
            })
          }, l), w = i ? b.DX : "div";
          return (0, r.jsx)(nt.Provider, {
            value: {
              landscapeViewportBehavior: e,
              scrimColor: t,
              videoRef: f,
              lastPlayingRef: h,
              bgImageRef: y,
              isPlaying: _,
              playOnce: o,
              hasEnded: u,
              setHasEnded: m,
              reducedMotion: a,
              setIsPlaying: d,
              error: p,
              setError: g
            },
            children: (0, r.jsx)(w, {
              ref: c,
              ...k,
              children: s
            })
          })
        }),
        st = (0, n.forwardRef)(function({
          onToggle: e,
          ...t
        }, a) {
          const {
            formatMessage: o
          } = (0, i.useIntl)(), {
            isPlaying: s,
            setIsPlaying: l,
            videoRef: _,
            lastPlayingRef: d,
            error: u,
            playOnce: m,
            hasEnded: b,
            setHasEnded: p,
            setError: g,
            reducedMotion: f
          } = rt(), [h, y] = (0, n.useState)("Pause"), k = (!m || !b) && d.current;
          (0, n.useEffect)(() => {
            y(s || k ? "Pause" : m && b ? "Replay" : "Play")
          }, [k, s, m, b]);
          const w = (0, n.useMemo)(() => o(m && b ? Qe.decorative_video_replay_button_label : k ? Qe.decorative_video_pause_button_label : Qe.decorative_video_play_button_label), [m, b]),
            v = (0, j.v6)({
              className: "_197irmi5",
              label: w,
              "aria-label": o(s ? Qe.decorative_video_play_button_label : Qe.decorative_video_pause_button_label)
            }, t);
          return f || u ? null : (0, r.jsx)(c.IconButton, {
            ref: a,
            ...v,
            icon: h,
            size: "SM",
            onPress: async () => {
              e?.(!s);
              const t = _.current;
              if (t)
                if (m && b) try {
                    p(!1), t.currentTime = 0, await t.play(), l(!0), d.current = !0
                  } catch {
                    g(!0), l(!1), d.current = !1
                  } else if (s || k) t?.pause(), l(!1), d.current = !1;
                  else try {
                    await (t?.play()), l(!0), d.current = !0
                  } catch {
                    g(!0), l(!1), d.current = !1
                  }
            }
          })
        }),
        it = (0, n.forwardRef)(function({
          src: e,
          poster: t,
          altText: a,
          autoPlay: o,
          muted: s,
          asChild: i,
          testId: l,
          ...c
        }, _) {
          const {
            videoRef: d,
            reducedMotion: u,
            lastPlayingRef: m,
            playOnce: p,
            setIsPlaying: g,
            error: f,
            setError: h,
            setHasEnded: y
          } = rt(), k = i ? b.DX : "div", w = (0, j.v6)({
            "data-testid": l
          }, c);
          return (0, n.useEffect)(() => {
            const t = d.current;
            if (!t || !e || u) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                g(!0), y(!1), m.current = !0
              },
              n = () => {
                t.paused || (g(!1), m.current = !1)
              },
              o = () => {
                console.warn("Play request interrupted :", t.error), h(!0), g(!1), m.current = !1
              },
              s = () => {
                g(!1), m.current = !1, y(!0)
              },
              i = () => {
                console.warn("Video failed to load sources."), h(!0), g(!1), m.current = !1
              };
            return t.addEventListener("play", r), t.addEventListener("pause", n), t.addEventListener("error", o), t.addEventListener("ended", s), a && a.addEventListener("error", i), () => {
              t.removeEventListener("play", r), t.removeEventListener("pause", n), t.removeEventListener("error", o), t.removeEventListener("ended", s), a && a.removeEventListener("error", i)
            }
          }, [d, e, u, g, h, y, m.current]), (() => {
            const {
              videoRef: e,
              lastPlayingRef: t,
              setIsPlaying: a,
              playOnce: r,
              hasEnded: o
            } = rt();
            (0, n.useEffect)(() => {
              const n = async () => {
                const n = e.current;
                if (n)
                  if (document.hidden) t.current = !n.paused && !o, n.paused || (n.pause(), a(!1));
                  else if (t.current && !o && n.paused && n.muted && (!r || !o)) try {
                  await n.play(), a(!0), t.current = !0
                } catch {
                  a(!1), t.current = !1
                }
              };
              return document.addEventListener("visibilitychange", n), () => document.removeEventListener("visibilitychange", n)
            }, [e, a, r, o, t])
          })(), ((e = 0) => {
            const {
              videoRef: t,
              lastPlayingRef: a,
              setIsPlaying: r,
              playOnce: o,
              hasEnded: s
            } = rt();
            (0, n.useEffect)(() => {
              const n = t.current;
              if (!n) return;
              const i = new IntersectionObserver(async e => {
                if (e[0].isIntersecting) {
                  if (a.current && !s && n.paused && n.muted && (!o || !s)) try {
                    await n.play(), r(!0), a.current = !0
                  } catch {
                    r(!1), a.current = !1
                  }
                } else a.current = !n.paused && !s, n.paused || (n.pause(), r(!1))
              }, {
                threshold: e
              });
              return i.observe(n), () => i.disconnect()
            }, [t, r, e, o, s, a])
          })(0), (0, r.jsx)(k, {
            ref: _,
            ...w,
            children: f || u || !e ? (0, r.jsx)("img", {
              "data-testid": "decorative-video-fallback",
              alt: a,
              src: t,
              className: et
            }) : (0, r.jsx)("video", {
              ref: d,
              className: et,
              src: e,
              poster: t,
              autoPlay: o,
              muted: s,
              loop: !p,
              playsInline: !0,
              onError: () => h(!0),
              "aria-hidden": "true",
              tabIndex: -1
            })
          })
        }),
        lt = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            scrimColor: n
          } = rt(), o = (0, j.v6)({
            className: "_197irmi4",
            style: (0, x.DI)({
              [at]: n ?? "unset"
            })
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...o,
            children: e
          })
        }),
        ct = "WwwDecorativeVideo";
      var _t = (0, R.c)({
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
      const dt = (0, n.forwardRef)(function({
          gradientStyle: e = "",
          thickness: t = "dimensions_25",
          ...a
        }, n) {
          return (0, r.jsx)("div", {
            className: _t({
              size: t
            }),
            style: {
              background: e
            },
            tabIndex: -1,
            ref: n,
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
        pt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          layout: a = "primary",
          aspect: n = "wide",
          transparent: o = !1,
          asChild: s,
          ...i
        }, l) {
          const c = s ? b.DX : "div",
            _ = (0, j.v6)({
              className: "sp6aw70",
              "data-layout": a,
              "data-aspect": n,
              "data-transparent": !!o || void 0,
              "data-testid": t
            }, i);
          return (0, r.jsx)(c, {
            ref: l,
            ..._,
            children: e
          })
        }),
        gt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              className: "sp6aw71",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: (0, r.jsx)("div", {
              className: "sp6aw72",
              children: e
            })
          })
        }),
        ft = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              className: "sp6aw73",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ht = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : c.Text,
            i = (0, j.v6)({
              className: "sp6aw75 sp6aw74",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        yt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : c.Heading,
            i = (0, j.v6)({
              className: "sp6aw76 sp6aw74",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            level: 4,
            ref: o,
            ...i,
            children: e
          })
        }),
        kt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "time",
            i = (0, j.v6)({
              className: "sp6aw77 sp6aw74",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        wt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              className: "sp6aw78",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        vt = ({
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
        xt = ({
          width: e = "100%"
        }) => (0, r.jsx)("span", {
          className: "_9c411v2 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e
          }
        });
      var jt = "_17xncyz0";
      const Ct = ({
          layout: e,
          aspect: t,
          transparent: a,
          testId: n
        }) => (0, r.jsxs)(pt, {
          className: jt,
          layout: e,
          aspect: t,
          transparent: a,
          testId: n,
          children: [(0, r.jsx)(gt, {
            children: (0, r.jsx)(vt, {
              width: "100%"
            })
          }), (0, r.jsxs)(ft, {
            children: [(0, r.jsx)(ht, {
              children: (0, r.jsx)(xt, {
                width: "30%"
              })
            }), (0, r.jsxs)(yt, {
              children: [(0, r.jsx)(xt, {}), (0, r.jsx)(xt, {})]
            }), (0, r.jsx)(kt, {
              children: (0, r.jsx)(xt, {
                width: "40%"
              })
            })]
          })]
        }),
        Rt = ({
          loading: e,
          data: t,
          id: a,
          aspect: n,
          layout: o,
          transparent: s,
          handleStoryClick: i,
          testId: l
        }) => {
          const c = t?.preview_images_parsed.newswire_block["square" === n ? "square" : "d16x9"],
            _ = `${c}?im=Resize,width=${"primary"===o?1200:600}`;
          return e || !t ? (0, r.jsx)(Ct, {
            layout: o,
            aspect: n,
            testId: l
          }) : (0, r.jsx)(v.N, {
            className: "_17xncyz1",
            href: t.url,
            onClick: i,
            children: (0, r.jsxs)(pt, {
              className: jt,
              layout: o,
              aspect: n,
              transparent: s,
              testId: l,
              children: [(0, r.jsx)(gt, {
                children: (0, r.jsx)("img", {
                  src: _,
                  loading: "lazy"
                })
              }), (0, r.jsxs)(ft, {
                children: [(0, r.jsxs)(wt, {
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
        It = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        At = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = (0, le.Ub)(C.f.tabletMediumAndLarger),
            i = a ? b.DX : "div",
            l = (0, j.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsx)(i, {
            ref: o,
            ...l,
            className: s ? "_1hb4ou60 _1betujy6 _1betujy5" : "",
            children: e
          })
        }),
        zt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          onCarouselSwipe: o,
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
              [r, o] = (0, Te.A)(a, [(0, Pe.J)()]);
            return (0, n.useEffect)(() => {
              if (!o) return;
              let e = 0;
              const a = () => {
                  e = o.selectedScrollSnap()
                },
                r = () => {
                  const a = o.selectedScrollSnap();
                  e !== a && t?.()
                };
              return o.on("pointerDown", a), o.on("pointerUp", r), () => {
                o.off("pointerDown", a), o.off("pointerUp", r)
              }
            }, [o]), {
              embla: o,
              viewportRef: r
            }
          })({
            defaultSlide: 0,
            onCarouselSwipe: o
          }), c = a ? b.DX : "div", _ = (0, j.v6)({
            "data-testid": t,
            className: "_1hb4ou65"
          }, s);
          return (0, r.jsx)(c, {
            className: "_1hb4ou63",
            ref: i,
            children: (0, r.jsx)(Be, {
              ref: l,
              ..._,
              children: (0, r.jsx)(Xe, {
                children: e
              })
            })
          })
        }),
        Et = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, j.v6)({
            "data-testid": t
          }, a);
          return (0, r.jsx)(He, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Mt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = (0, j.v6)({
              "data-testid": t,
              className: "_1hb4ou62"
            }, n),
            i = a ? b.DX : "div";
          return (0, r.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        }),
        Tt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = (0, j.v6)({
              "data-testid": t,
              className: "_1hb4ou64"
            }, n),
            i = a ? b.DX : "div";
          return (0, r.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        }),
        Pt = "WwwEditorialGridModule",
        Gt = (0, i.defineMessages)({
          featured_game_breadcrumbs_parent_item: {
            id: "featured_game_breadcrumbs_parent_item",
            description: "Breadcrumbs parent page item label",
            defaultMessage: "Games"
          }
        });
      var Ft = a(81270),
        Dt = a(93529),
        Lt = a(99206),
        qt = a(57978);
      Dt.os.registerPlugin(qt.u);
      const Wt = (0, n.forwardRef)(function({
          src: e,
          context: t,
          className: a,
          loading: n = "lazy",
          testId: o,
          ...s
        }, i) {
          if (!e) return null;
          const c = (0, l.getOptimizedRsgImage)(e, t, {
            preferModernFormat: !0
          });
          if (!c?.url) return null;
          const _ = (0, j.v6)({
            "data-testid": o,
            alt: c.alt,
            src: c.url,
            width: c.width,
            height: c.height,
            loading: n,
            className: a
          }, s);
          return (0, r.jsx)(de, {
            ref: i,
            ..._
          })
        }),
        Vt = (0, i.defineMessages)({
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
      var Bt = "_1crroc53";
      const Ot = (0, n.createContext)({
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
          const e = (0, n.useContext)(Ot);
          if (!e) throw new Error("useHeroContext must be used within HeroProvider");
          return e
        },
        Xt = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          asChild: a,
          isLooping: o = !1,
          ...s
        }, i) {
          const l = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            c = (0, n.useRef)(null),
            _ = (0, n.useRef)(null),
            [d, u] = (0, n.useState)(!l),
            [m, p] = (0, n.useState)(!1),
            g = (0, j.v6)({
              "data-testid": e,
              className: "_1crroc52"
            }, s),
            f = a ? b.DX : "div";
          return (0, r.jsx)(Ot.Provider, {
            value: {
              videoRef: c,
              bgImageRef: _,
              isPlaying: d,
              isLooping: o,
              reducedMotion: l,
              setIsPlaying: u,
              videoError: m,
              setVideoError: p
            },
            children: (0, r.jsx)(f, {
              ref: i,
              ...g,
              children: t
            })
          })
        }),
        Ut = (0, n.forwardRef)(function({
          videoSrc: e,
          backgroundImage: t,
          isPlaying: a,
          setIsPlaying: o,
          videoLabel: s,
          testId: i,
          asChild: c,
          ..._
        }, d) {
          const u = (0, le.Ub)(C.f.mobile),
            {
              videoRef: m,
              isLooping: p,
              reducedMotion: g,
              setVideoError: f
            } = $t(),
            [h, y] = (0, n.useState)(null),
            k = c ? b.DX : "div",
            w = (0, j.v6)({
              "data-testid": i,
              className: Bt
            }, _);
          return (0, n.useEffect)(() => {
            const t = m.current;
            if (!t || !e.mobile && !e.desktop || g) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                o(!0)
              },
              n = () => {
                o(!1)
              },
              s = () => {
                console.warn("Play request interrupted :", t.error), o(!1)
              },
              i = () => {
                console.warn("Video failed to load sources."), f(!0)
              };
            return t.addEventListener("play", r), t.addEventListener("error", s), t.addEventListener("pause", n), a && a.addEventListener("error", i), () => {
              t.removeEventListener("play", r), t.removeEventListener("error", s), t.removeEventListener("pause", n), a && a.removeEventListener("error", i)
            }
          }, [m.current, JSON.stringify(e), g]), (0, n.useEffect)(() => {
            const e = (0, l.getOptimizedRsgImage)(t, u ? "1:1" : "21:9", {
              preferModernFormat: !0
            });
            e && y(e)
          }, [t, u]), (0, r.jsxs)(k, {
            ref: d,
            ...w,
            children: [(0, r.jsxs)("video", {
              ref: m,
              className: Bt,
              loop: p,
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
            }), (0, r.jsx)(Wt, {
              context: u ? "1:1" : "21:9",
              src: t,
              className: (0, Ft.default)(["_1crroc55", a ? "_1crroc57" : "_1crroc56"]),
              "aria-hidden": a
            })]
          })
        }),
        Ht = (0, n.forwardRef)(function({
          disabled: e,
          onButtonClick: t,
          isPlaying: a,
          testId: o,
          ...s
        }, l) {
          const {
            formatMessage: _
          } = (0, i.useIntl)(), {
            videoRef: d,
            reducedMotion: u,
            videoError: m
          } = $t(), b = (0, n.useCallback)(() => {
            (() => {
              const e = d.current;
              e && (a ? (e?.pause(), e.currentTime = 0) : e?.play())
            })(), t?.(a)
          }, [a]), p = (0, j.v6)({
            "data-testid": o,
            className: (0, Ft.default)("_1crroc5i", e ? "_1crroc5g" : ""),
            label: _(a ? Vt.hp_hero_stop_button_label : Vt.hp_hero_play_button_label),
            "aria-label": _(a ? Vt.hp_hero_play_button_label : Vt.hp_hero_stop_button_label)
          }, s);
          return u || m ? null : (0, r.jsx)("div", {
            className: "_1crroc5h",
            children: (0, r.jsx)(c.IconButton, {
              ref: l,
              ...p,
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
      const Kt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "section",
            i = (0, j.v6)({
              "data-testid": t,
              className: "_16t2abv0"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Yt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "_16t2abv1"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Jt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "_16t2abvi"
            }, n);
          return (0, r.jsx)("div", {
            className: "_1betujy6 _1betujy5",
            children: (0, r.jsx)(s, {
              ref: o,
              ...i,
              children: e
            })
          })
        });
      var Zt = (0, R.c)({
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
      const Qt = (0, n.createContext)({
          heroRef: (0, n.createRef)(),
          backgroundRef: (0, n.createRef)(),
          backgroundGradientRef: (0, n.createRef)(),
          playStopButtonRef: (0, n.createRef)(),
          collectionsRef: (0, n.createRef)(),
          gameDetailsRef: (0, n.createRef)(),
          reducedMotion: !1,
          isPlaying: !1,
          setIsPlaying: e => e
        }),
        ea = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const i = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            l = (0, n.useRef)(null),
            c = (0, n.useRef)(null),
            _ = (0, n.useRef)(null),
            d = (0, n.useRef)(null),
            u = (0, n.useRef)(null),
            m = (0, n.useRef)(null),
            [p, g] = (0, n.useState)(!i);
          ! function({
            heroRef: e,
            backgroundRef: t,
            backgroundGradientRef: a,
            playStopButtonRef: r,
            collectionsRef: n,
            gameDetailsRef: o
          }) {
            (0, Lt.L)(() => {
              const s = e.current,
                i = t.current,
                l = a.current,
                c = r.current,
                _ = n.current,
                d = o.current;
              if (!(s && i && l && c && _ && d)) return;
              const u = Dt.os.timeline({
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
                    u.scrollTrigger?.refresh(), e && e instanceof HTMLElement && Dt.os.delayedCall(.01, () => {
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
              const m = Dt.os.timeline({
                paused: !0,
                defaults: {
                  ease: "none",
                  duration: 100
                },
                scrollTrigger: {
                  invalidateOnRefresh: !0,
                  trigger: s,
                  start: "top top",
                  endTrigger: _,
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
              }, 70), _ && Dt.os.utils.toArray(":scope > *", n.current).forEach(e => {
                const t = Dt.os.fromTo(e, {
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
              dependencies: [e.current, t.current, a.current, r.current, o.current, n.current],
              revertOnUpdate: !0
            })
          }({
            heroRef: l,
            backgroundRef: c,
            backgroundGradientRef: _,
            playStopButtonRef: d,
            collectionsRef: u,
            gameDetailsRef: m
          });
          const f = a ? b.DX : "div",
            h = (0, j.v6)({
              "data-testid": t,
              className: "_1xrjhoy0"
            }, o);
          return (0, r.jsx)(Qt.Provider, {
            value: {
              heroRef: l,
              backgroundRef: c,
              backgroundGradientRef: _,
              playStopButtonRef: d,
              collectionsRef: u,
              gameDetailsRef: m,
              reducedMotion: i,
              isPlaying: p,
              setIsPlaying: g
            },
            children: (0, r.jsx)(f, {
              ref: s,
              ...h,
              children: e
            })
          })
        }),
        ta = (0, n.forwardRef)(function({
          backgroundImage: e,
          backgroundVideo: t,
          ...a
        }, o) {
          const {
            heroRef: s,
            backgroundRef: i,
            backgroundGradientRef: l,
            isPlaying: c,
            playStopButtonRef: _,
            reducedMotion: d,
            setIsPlaying: u
          } = (0, n.useContext)(Qt), {
            trackEvent: m
          } = W(), b = (0, le.UP)(s, o), p = (0, le.Ub)(C.f.mobile), g = t?.videoFilesCollection?.items?.find(e => "21:9" === e.context), f = t?.videoFilesCollection?.items?.find(e => "1:1" === e.context), h = {
            desktop: g?.url,
            mobile: f?.url ?? g?.url
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
                }), !d && (0, r.jsx)(Ht, {
                  ref: _,
                  isPlaying: c,
                  onButtonClick: e => {
                    const a = p ? f : g;
                    m({
                      event: "cta_other",
                      text: e ? "toggle pause" : "toggle play",
                      video_id: a?.sys?.id,
                      video_type: t?.type
                    }, t)
                  }
                }), (0, r.jsx)("div", {
                  ref: l,
                  className: Zt({
                    reducedMotion: d
                  })
                })]
              })
            })
          })
        }),
        aa = (0, n.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, j.v6)({
            className: "_1xrjhoy3"
          }, e);
          return (0, r.jsx)(ue, {
            ref: t,
            ...a
          })
        }),
        ra = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "_1xrjhoy7"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        na = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "_1xrjhoy8 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        oa = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "_1xrjhoy9"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        sa = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "_1xrjhoya"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ia = (0, n.forwardRef)(function({
          testId: e,
          asChild: t,
          children: a,
          ...n
        }, o) {
          const s = t ? b.DX : Wt,
            i = (0, j.v6)({
              "data-testid": e,
              className: "_1xrjhoyc"
            }, n);
          return (0, r.jsx)("div", {
            className: "_1xrjhoyb",
            children: (0, r.jsx)(s, {
              ref: o,
              ...i,
              children: a
            })
          })
        }),
        la = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, s) {
          const {
            gameDetailsRef: i
          } = (0, n.useContext)(Qt), l = (0, le.UP)(i, s), c = t ? b.DX : Kt, _ = (0, j.v6)({
            "data-testid": a
          }, o);
          return (0, r.jsx)(c, {
            ref: l,
            ..._,
            children: e
          })
        }),
        ca = (0, n.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          ...o
        }, s) {
          const {
            collectionsRef: i
          } = (0, n.useContext)(Qt), l = (0, le.UP)(i, s), c = a ? b.DX : Kt, _ = (0, j.v6)({
            className: (0, Ft.default)("_1xrjhoy1", t)
          }, o);
          return (0, r.jsx)(c, {
            ref: l,
            ..._,
            children: e
          })
        }),
        _a = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : Jt,
            i = (0, j.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        da = (0, n.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : Yt,
            i = (0, j.v6)({
              className: (0, Ft.default)("_1xrjhoy2", t)
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ua = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = W(), {
            blockPosition: a
          } = (0, n.useContext)(l.BlockRendererContext), {
            ref: o
          } = t(), {
            formatMessage: s
          } = (0, i.useIntl)();
          if (!e) return null;
          const {
            logo: _,
            game: d,
            description: u,
            ctasCollection: m
          } = e;
          return (0, r.jsxs)(ea, {
            ref: o,
            children: [(0, r.jsx)(ta, {
              backgroundImage: e.backgroundImage,
              backgroundVideo: e.backgroundVideo,
              isLooping: !0
            }), (0, r.jsx)(la, {
              children: (0, r.jsxs)(ca, {
                children: [(0, r.jsxs)(_a, {
                  children: [(0, r.jsx)(aa, {
                    src: _
                  }), (0, r.jsxs)(ra, {
                    children: [(0, r.jsxs)(da, {
                      children: [(0, r.jsxs)(c.Breadcrumbs.Root, {
                        children: [(0, r.jsx)(c.Breadcrumbs.Item, {
                          href: "/games",
                          children: s(Gt.featured_game_breadcrumbs_parent_item)
                        }), (0, r.jsx)(c.Breadcrumbs.Item, {
                          href: d?.wwwPageLink?.url,
                          isCurrent: !0,
                          children: d?.title
                        })]
                      }), (0, r.jsx)(na, {
                        asChild: !0,
                        children: (0, r.jsx)(c.Body, {
                          children: u
                        })
                      })]
                    }), (0, r.jsxs)(da, {
                      className: "hg5jwy0",
                      children: [m?.items && (0, r.jsx)(oa, {
                        children: m?.items?.map((e, t) => {
                          if (e?.text) return (0, r.jsx)(ae, {
                            block: e,
                            size: "LG"
                          }, t)
                        })
                      }), d?.platformsCollection?.items?.length && (0, r.jsx)(sa, {
                        children: d.platformsCollection.items.map((e, t) => (0, r.jsx)(ia, {
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
        pa = "r3mkgz3",
        ga = "r3mkgz2";
      const fa = {
          wrap: "flex-direction: row;",
          stack: "flex-direction: column;"
        },
        ha = {
          left: "\n        align-items: flex-start;\n        justify-content: flex-start;\n    ",
          center: "\n        align-items: center;\n        justify-content: center;\n    ",
          right: "\n        align-items: flex-end;\n        justify-content: flex-end;\n    "
        },
        ya = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          breakpoints: o,
          gap: s,
          ...i
        }, l) {
          const c = `grid-${(0,n.useId)()}`,
            _ = t ? b.DX : "div",
            d = (0, n.useMemo)(() => o?.map(({
              mediaQuery: e,
              columns: t,
              behavior: a = "wrap",
              alignment: r = "left"
            }) => `\n            @media ${e} {\n                #${CSS.escape(c)}.${ga} {\n                    ${fa[a]}\n                    ${ha[r]}\n                }\n                ${t.map((e,a)=>`\n                    #${CSS.escape(c)} .${pa}:nth-of-type(${t.length}n + ${a+1}) {\n                            --grid-col-span: ${e};\n                        }\n                    `).join(" ")}\n            }\n        `), [o, c]),
            u = (0, j.v6)({
              "data-testid": a,
              className: ga,
              style: (0, x.DI)({
                [ba]: s
              })
            }, i);
          return (0, r.jsxs)(_, {
            id: c,
            ref: l,
            ...u,
            children: [(0, r.jsx)("style", {
              children: d
            }), e]
          })
        }),
        ka = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": a,
              className: pa
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        wa = "WwwGrid";
      var va = "var(--_1tmcp2s0)";
      const xa = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gap: n,
          ...o
        }, s) {
          const i = t ? b.DX : "div",
            l = (0, j.v6)({
              "data-testid": a,
              className: "_1tmcp2s1 _1betujy5",
              style: (0, x.DI)({
                [va]: n
              })
            }, o);
          return (0, r.jsx)(i, {
            ref: s,
            ...l,
            children: e
          })
        }),
        ja = "WwwGridWrapper",
        Ca = e => {
          if (!e) return "MD";
          const t = e.length;
          return t <= 20 ? "XL" : t > 20 && t <= 40 ? "LG" : t > 40 && t <= 60 ? "MD" : "SM"
        };
      var Ra = a(45866);
      Dt.os.registerPlugin(qt.u);
      const Sa = "data-original-tabindex",
        Na = (e, t = 0, a = 1) => Math.min(Math.max(e, t), a),
        Ia = ["a[href]", "button:not([disabled])", "textarea:not([disabled])", "input:not([disabled])", "select:not([disabled])", '[tabindex]:not([tabindex="-1"])'].join(","),
        Aa = e => Array.from(e.querySelectorAll(Ia)).filter(e => {
          const t = e.hasAttribute("disabled"),
            a = "true" === e.getAttribute("aria-hidden"),
            r = !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          return !t && !a && r
        }),
        za = () => ({
          desktop: {
            enter: Dt.os.timeline({
              paused: !0
            }),
            exit: Dt.os.timeline({
              paused: !0
            })
          },
          mobile: {
            enter: Dt.os.timeline({
              paused: !0
            }),
            exit: Dt.os.timeline({
              paused: !0
            })
          }
        }),
        Ea = (e, t) => t ? e.mobile : e.desktop,
        Ma = e => {
          const t = {
              desktop: {
                enter: Dt.os.timeline({
                  paused: !0
                }),
                exit: Dt.os.timeline({
                  paused: !0
                })
              },
              mobile: {
                enter: Dt.os.timeline({
                  paused: !0
                }),
                exit: Dt.os.timeline({
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
          }, 0), t) : za()
        },
        Ta = ({
          autoplay: e,
          defaultSlide: t = 0,
          delay: a,
          loop: r = !0,
          slideRefs: o,
          slides: s
        }) => {
          const i = (0, le.Ub)(C.f.mobile),
            {
              trackEvent: l
            } = W(),
            c = "boolean" != typeof e || e,
            [_, d] = (0, n.useState)(t),
            u = (0, n.useRef)(null),
            m = (0, n.useRef)(0),
            b = (0, n.useRef)(!c),
            p = (0, n.useRef)(!1),
            g = (0, n.useRef)(!1),
            f = (0, n.useRef)(t),
            h = (0, n.useRef)(null),
            y = (0, n.useRef)(null),
            k = (0, n.useRef)([]),
            w = (0, n.useRef)([]),
            v = (0, n.useRef)([]),
            x = (0, n.useRef)("auto"),
            j = (0, n.useRef)({}),
            R = (0, n.useRef)(a),
            S = (0, n.useRef)(t),
            [N, I] = (0, Te.A)({
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
          const A = (0, n.useCallback)((e, t) => {
              w.current[t] = e
            }, []),
            z = (0, n.useCallback)(e => j.current[e] ?? {
              value: 0,
              remainingMs: a
            }, [a]),
            E = (0, n.useCallback)(() => {
              const e = h.current,
                t = S.current;
              if (!e) return void(j.current[t] = z(t));
              const a = Na(e.progress()),
                r = m.current,
                n = Na(a * (1 - r) + r),
                o = R.current,
                s = o * a,
                i = Math.max(o - s, 0);
              j.current[t] = {
                value: n,
                remainingMs: i
              }
            }, [z]),
            M = (0, n.useCallback)(() => {
              h.current && (h.current.kill(), h.current = null)
            }, []),
            T = (0, n.useCallback)(() => {
              E(), M()
            }, [M, E]),
            P = (0, n.useCallback)(e => {
              w.current.forEach((t, a) => {
                if (!t) return;
                const r = a == e;
                Dt.os.to(t, {
                  width: r ? 80 : 10,
                  duration: .5,
                  ease: "power2.inOut"
                })
              }), v.current.forEach((t, a) => {
                if (!t) return;
                if (a !== e) return void Dt.os.set(t, {
                  opacity: 0,
                  width: "0%"
                });
                const r = z(a);
                Dt.os.set(t, {
                  opacity: 1,
                  width: 100 * r.value + "%"
                })
              })
            }, [z]),
            G = (0, n.useCallback)(e => {
              M(), S.current = e, P(e)
            }, [P, M]),
            F = (0, n.useCallback)(e => {
              j.current[e] = {
                value: 0,
                remainingMs: a
              }
            }, [a]),
            D = (0, n.useCallback)((e, t) => {
              if (p.current) return;
              const r = v.current[e];
              if (!r || !I) return;
              M(), S.current = e, P(e);
              const n = t?.fromStored ? z(e) : {
                  value: 0,
                  remainingMs: a
                },
                o = Na(n.value),
                s = o >= 1 ? a : Math.max(n.remainingMs, 0);
              m.current = o, 0 === o && (j.current[e] = {
                value: 0,
                remainingMs: a
              }), Dt.os.set(r, {
                opacity: 1,
                width: 100 * o + "%"
              }), R.current = s, h.current = Dt.os.to(r, {
                width: "100%",
                ease: "none",
                duration: s / 1e3,
                onUpdate() {
                  const t = Na(this.progress()),
                    a = Na(t * (1 - o) + o),
                    r = Math.max(s - s * t, 0);
                  j.current[e] = {
                    value: a,
                    remainingMs: r
                  }
                },
                onComplete() {
                  if (j.current[e] = {
                      value: 1,
                      remainingMs: 0
                    }, b.current || !I) return;
                  x.current = "auto";
                  const t = I.selectedScrollSnap() + 1,
                    a = t >= I.scrollSnapList().length ? 0 : t;
                  I.scrollTo(a)
                }
              })
            }, [P, a, I, z, M]),
            L = (0, n.useCallback)((e, t) => {
              v.current[t] = e, e && t === f.current && !b.current && p.current && D(t, {
                fromStored: !0
              })
            }, [D]),
            q = (0, n.useCallback)(() => {
              g.current = !1, b.current = !0, T(), G(f.current)
            }, [T, G]),
            V = (0, n.useCallback)(() => {
              g.current = !1, b.current = !1, D(f.current, {
                fromStored: !0
              })
            }, [D]),
            B = (0, n.useCallback)(() => {
              b.current || (g.current = !0, b.current = !0, T(), G(f.current))
            }, [T, G]),
            O = (0, n.useCallback)(() => {
              g.current && (g.current = !1, b.current = !1, D(f.current))
            }, [D]),
            $ = (0, n.useCallback)(e => {
              I && I.slideNodes().forEach((t, a) => {
                const r = a === e,
                  n = Aa(t);
                t.setAttribute("aria-hidden", String(!r)), n.forEach(e => {
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
            X = (0, n.useCallback)((e, t) => {
              f.current = e, d(e), $(e), w.current.forEach((t, a) => {
                const r = t?.parentElement;
                if (!r) return;
                const n = a === e;
                n ? r.setAttribute("tabindex", "-1") : r.removeAttribute("tabindex"), r.setAttribute("aria-current", n ? "true" : "false")
              });
              const a = (e => "auto" === e || "drag" === e || "bullet" === e || "keyboard" === e)(t);
              a && F(e), b.current ? G(e) : D(e, {
                fromStored: !a
              })
            }, [G, F, D, $]);
          (0, n.useLayoutEffect)(() => {
            if (!I) return;
            const e = I.slideNodes(),
              t = [];
            for (let r = 0; r < e.length; r++) {
              const e = o.current[r];
              t.push(e ? Ma(e) : za()), j.current[r] || (j.current[r] = {
                value: 0,
                remainingMs: a
              })
            }
            return k.current = t, () => {
              t.forEach(e => {
                e.mobile.enter.kill(), e.mobile.exit.kill(), e.desktop.enter.kill(), e.desktop.exit.kill()
              })
            }
          }, [a, I, o]), (0, n.useEffect)(() => {
            if (!I) return;
            const e = () => {
                const e = I.selectedScrollSnap();
                X(e, x.current), x.current = "auto", window.postMessage({
                  source: "navColorTheme",
                  mode: s[e].navColor ?? "dark"
                })
              },
              t = o.current.map(e => e?.background.current).filter(Boolean);
            let a = !1;
            const r = new Map;
            return Promise.all(t.map(e => new Promise(t => {
              if (e.complete) return void t();
              const a = () => {
                e.removeEventListener("load", a), r.delete(e), t()
              };
              e.addEventListener("load", a), r.set(e, a)
            }))).then(() => {
              a || (x.current = "resize-sync", X(I.selectedScrollSnap(), "resize-sync"))
            }), I.on("select", e), I.on("reInit", e), I.on("init", e), () => {
              a = !0, I.off("select", e), I.off("reInit", e), I.off("init", e), T(), r.forEach((e, t) => {
                t.removeEventListener("load", e)
              })
            }
          }, [I, X, T, s, o]), (0, n.useEffect)(() => {
            if (!I) return;
            let e = f.current;
            const t = () => {
                e = f.current, S.current = e, E(), M(), G(e)
              },
              a = () => {
                const t = I.selectedScrollSnap();
                if (e !== t) return x.current = "drag", void l({
                  event: "carousel_swipe"
                });
                b.current || (f.current = t, S.current = t, D(t, {
                  fromStored: !0
                })), requestAnimationFrame(() => {
                  const e = I.selectedScrollSnap();
                  b.current || h.current || (f.current = e, S.current = e, D(e, {
                    fromStored: !0
                  }))
                })
              };
            return I.on("pointerDown", t), I.on("pointerUp", a), () => {
              I.off("pointerDown", t), I.off("pointerUp", a)
            }
          }, [I, M, G, D, E, l]), (0, n.useEffect)(() => {
            const e = () => {
              y.current && clearTimeout(y.current);
              const e = I?.selectedScrollSnap() ?? f.current;
              p.current = !0, S.current = e, E(), M(), G(e), y.current = setTimeout(() => {
                x.current = "resize-sync";
                const e = I?.selectedScrollSnap() ?? f.current;
                S.current = e, p.current = !1, b.current ? G(e) : (D(e, {
                  fromStored: !0
                }), qt.u.refresh())
              }, 250)
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e), y.current && clearTimeout(y.current), p.current = !1
            }
          }, [I, p, M, G, D, E]);
          const U = (0, n.useCallback)(e => {
              I && I.selectedScrollSnap() !== e && (E(), x.current = "bullet", I.scrollTo(e), l({
                event: "carousel_thumbnail_click",
                position: e + 1,
                position_max: I.slideNodes().length
              }))
            }, [I, E, l]),
            H = (0, n.useCallback)(e => t => {
              I && ("Enter" !== t.key && " " !== t.key || (t.preventDefault(), I.selectedScrollSnap() !== e && (E(), x.current = "bullet", I?.scrollTo(e))))
            }, [I, E]);
          return (0, n.useEffect)(() => {
            if (!I) return;
            const e = I.rootNode();
            if (!e) return;
            const t = t => {
              const a = document.activeElement,
                r = !!a && e.contains(a),
                n = a?.tagName.toLowerCase();
              if (!r || "input" === n || "textarea" === n || a?.isContentEditable) return;
              if ("ArrowRight" === t.key) return t.preventDefault(), E(), x.current = "keyboard", void I.scrollNext();
              if ("ArrowLeft" === t.key) return t.preventDefault(), E(), x.current = "keyboard", void I.scrollPrev();
              if ("Tab" !== t.key) return;
              const o = e.querySelector("[data-carousel-pagination]"),
                s = !!o?.contains(a);
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
                var r; - 1 !== a && ((r = a) < 0 || I.selectedScrollSnap() !== r && (E(), x.current = "keyboard", I.scrollTo(r)))
              })
            };
            return e.addEventListener("keydown", t), () => {
              e.removeEventListener("keydown", t), null !== u.current && cancelAnimationFrame(u.current)
            }
          }, [I, E]), {
            embla: I,
            viewportRef: N,
            activeSlide: _,
            currentSlideRef: f,
            isPausedRef: b,
            pauseProgress: q,
            resumeProgress: V,
            pausedForVisibility: B,
            resumeForVisibility: O,
            onBulletClick: U,
            onBulletKeyDown: H,
            setDotRef: A,
            setFillRef: L
          }
        },
        Pa = (e, t, {
          isMobile: a = !1,
          loop: r = !1
        }) => {
          (0, n.useEffect)(() => {
            if (!e || 0 === t.length) return;
            const n = e.scrollSnapList(),
              o = n.length,
              s = () => {
                const s = e.scrollProgress();
                let i = 0,
                  l = 0,
                  c = 0;
                for (let e = 0; e < o; e++) {
                  const _ = n[e],
                    d = n[(e + 1) % o];
                  if (r) {
                    const t = d > _ ? d - _ : 1 + d - _,
                      a = (s - _ + 1) % 1;
                    if (a >= 0 && a <= t) {
                      i = e, l = (e + 1) % o, c = a / t;
                      break
                    }
                    c = Math.min(a / t, 1)
                  } else {
                    const t = n[e + 1] ?? 1,
                      a = t - _;
                    if (s >= _ && s <= t) {
                      i = e, l = e + 1, c = (s - _) / a;
                      break
                    }
                    c = Math.max(0, Math.min((s - _) / a, 1))
                  }
                  const u = t[e];
                  if (u) {
                    const e = Ea(u, a);
                    e?.enter.progress(c).pause(), e?.exit.progress(0).pause()
                  }
                }
                const _ = t[i];
                if (_) {
                  const e = Ea(_, a);
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
        Ga = () => j.X3 ? null : document.body,
        Fa = (0, i.defineMessages)({
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
      var Da = a(80135),
        La = (0, R.c)({
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
        qa = (0, R.c)({
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
        Wa = (0, R.c)({
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
      const Va = ({
          appearance: e,
          type: t,
          onClick: a,
          onBulletKeyDown: n,
          dotRef: o,
          fillRef: s
        }) => (0, r.jsx)("button", {
          className: "wai797b",
          onClick: a,
          onKeyDown: n,
          children: (0, r.jsx)("span", {
            ref: o,
            className: (0, Ft.default)("wai797c", qa({
              appearance: e,
              type: t
            })),
            children: (0, r.jsx)("span", {
              ref: s,
              className: Wa({
                appearance: e,
                type: t
              })
            })
          })
        }),
        Ba = ({
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
        Oa = (0, n.forwardRef)(function({
          type: e,
          appearance: t = "adaptive",
          pages: a,
          current: n,
          size: o,
          setDotRef: s,
          setFillRef: i,
          onBulletClick: l,
          onBulletKeyDown: c,
          testId: _,
          asChild: d,
          ...u
        }, m) {
          const p = d ? b.DX : "div",
            g = (0, j.v6)({
              "data-testid": _,
              className: La({
                appearance: t,
                size: o
              })
            }, u),
            f = 100 * n / a;
          return (0, r.jsxs)(p, {
            ref: m,
            ...g,
            children: [("pagination" === e || "line" === e) && (0, Da.A)(a)?.map(a => (0, r.jsx)(Va, {
              type: e,
              appearance: t,
              onClick: () => l(a),
              onBulletKeyDown: c?.(a),
              dotRef: e => s?.(e, a),
              fillRef: e => i?.(e, a)
            }, a)), "progress" === e && (0, r.jsx)(Ba, {
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
      const Xa = (0, n.createContext)({
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
        Ua = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          autoplay: a,
          slides: o,
          variant: i,
          delay: l,
          slideRefs: c,
          loop: _ = !0,
          defaultSlide: d,
          ...u
        }, m) {
          const p = (0, n.useRef)(null),
            g = (0, n.useRef)(null),
            {
              ref: f,
              inView: h
            } = (0, s.useScrollVisibility)(1 / 3),
            {
              embla: y,
              viewportRef: k,
              currentSlideRef: w,
              activeSlide: v,
              onBulletClick: x,
              onBulletKeyDown: R,
              setDotRef: S,
              setFillRef: N,
              isPausedRef: I,
              pauseProgress: A,
              resumeProgress: z,
              pausedForVisibility: E,
              resumeForVisibility: M
            } = Ta({
              autoplay: a,
              defaultSlide: d,
              delay: l,
              loop: _,
              slideRefs: c,
              slides: o,
              totalSlides: o.length
            });
          (({
            embla: e,
            slides: t,
            target: a = Ga(),
            enabled: r = !0,
            defaultSlideColor: o = "#000",
            backgroundRef: s
          }) => {
            const i = (0, n.useRef)([]),
              l = (0, n.useRef)([]),
              c = e => {
                const t = s.current?.getContext("2d");
                t && s.current && (t.fillStyle = e, t.fillRect(0, 0, s.current.width, s.current.height))
              },
              _ = e => {
                const t = document.getElementById("navigation-gradient"),
                  a = t?.getContext("2d");
                e && a && t && (a.fillStyle = e, a.fillRect(0, 0, t.width, t.height))
              };
            (0, n.useEffect)(() => {
              if (!(e && r && t?.length && a)) return;
              const n = () => {
                  i.current = e.scrollSnapList(), l.current = t?.map(e => [e.topGradientColor || o, e.bottomGradientColor || o]), s()
                },
                s = () => {
                  const t = Math.min(Math.max(e?.scrollProgress() ?? 0, 0), 1),
                    a = i.current,
                    r = Math.max(a.findIndex(e => e > t), 0),
                    n = r - 1 >= 0 ? r - 1 : a.length - 1,
                    [s, d] = l.current[r] ?? o,
                    [u, m] = l.current[n] ?? o,
                    b = Math.max(a[n] ?? 0, 0),
                    p = a[1] ?? 1,
                    g = Math.round((t - b) / p * 100);
                  if (u.length < 2 || s.length < 2) return;
                  const f = `color-mix(in srgb, ${m}, ${d} ${g}%)`;
                  _(`color-mix(in srgb, ${u}, ${s} ${g}%)`), c(f)
                };
              return 1 === t?.length ? ((() => {
                const [e, t] = l.current[0] ?? [o, o];
                _(e), c(t)
              })(), n()) : (s(), e.on("scroll", s), e.on("reInit", s), e.on("slidesChanged", n), n()), () => {
                e.off("scroll", s), e.off("reInit", s), e.off("slidesChanged", n)
              }
            }, [r, e, t, o, a])
          })({
            embla: y,
            slides: o,
            backgroundRef: p
          }), (({
            backgroundRef: e,
            contentRef: t
          }) => {
            const a = (0, le.Ub)(C.f.mobileSmall);
            (0, n.useLayoutEffect)(() => {
              const e = document.getElementById("main");
              if (!e) return;
              const t = "static" === getComputedStyle(e).position,
                a = e.style.position,
                r = e.style.zIndex;
              return t && (e.style.position = "relative"), e.style.zIndex = "1", () => {
                t && (e.style.position = a), e.style.zIndex = r
              }
            }, []), (0, Lt.L)(() => {
              const t = e.current;
              if (!t) return;
              const a = t.parentElement;
              Dt.os.to(t, {
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
              }), Dt.os.to(t, {
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
              (0, Lt.L)(() => {
                const a = e.current;
                if (!a) return;
                const r = a.parentElement;
                if (!r) return;
                Dt.os.set(a, {
                  clearProps: "opacity"
                }), Dt.os.set(a, {
                  opacity: 1
                });
                const n = Dt.os.to(a, {
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
                      Dt.os.set(a, {
                        opacity: 1
                      })
                    }
                  }
                });
                return () => {
                  n.scrollTrigger?.kill(), n.kill(), Dt.os.set(a, {
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
            backgroundRef: p,
            contentRef: g
          });
          const T = t ? b.DX : Be,
            P = (0, j.v6)({
              className: "_1obdf6x0",
              role: "region",
              "aria-label": "Featured Content Carousel",
              tabIndex: 0
            }, u);
          return (0, r.jsx)(Xa.Provider, {
            value: {
              slides: o,
              defaultSlide: d,
              loop: _,
              variant: i,
              delay: l,
              slideRefs: c,
              emblaApi: y,
              inView: h,
              currentSlideRef: w,
              activeSlide: v,
              intersectionRef: f,
              isPausedRef: I,
              viewportRef: k,
              onBulletClick: x,
              onBulletKeyDown: R,
              setDotRef: S,
              setFillRef: N,
              pauseProgress: A,
              resumeProgress: z,
              pausedForVisibility: E,
              resumeForVisibility: M
            },
            children: (0, r.jsxs)(T, {
              ref: m,
              ...P,
              children: [(0, r.jsx)("canvas", {
                ref: p,
                className: "_1obdf6x5",
                "aria-hidden": !0
              }), (0, r.jsx)("div", {
                ref: g,
                children: e
              })]
            })
          })
        }),
        Ha = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, o) {
          const {
            inView: s,
            intersectionRef: i,
            viewportRef: l
          } = (0, n.useContext)(Xa), c = (0, le.UP)(l, o), _ = t ? b.DX : Ue;
          return (0, r.jsx)("div", {
            ref: i,
            children: (0, r.jsx)(_, {
              ref: c,
              appearance: "ghost",
              className: "_1obdf6x1",
              "data-disabled": String(!s),
              ...a,
              children: e
            })
          })
        }),
        Ka = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, o) {
          const {
            variant: s
          } = (0, n.useContext)(Xa), i = (0, j.v6)({
            className: $a({
              variant: s
            })
          }, a), l = t ? b.DX : He;
          return (0, r.jsx)(l, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Ya = (0, n.forwardRef)(function({
          label: e,
          asChild: t,
          ...a
        }, o) {
          const {
            inView: s,
            activeSlide: l,
            slides: _,
            variant: d,
            setDotRef: u,
            setFillRef: m,
            onBulletClick: p,
            onBulletKeyDown: g,
            isPausedRef: f,
            pauseProgress: h,
            resumeProgress: y,
            pausedForVisibility: k,
            resumeForVisibility: w
          } = (0, n.useContext)(Xa), v = !s, [, x] = (0, n.useState)(0), R = (0, le.Ub)(C.f.mobile), {
            formatMessage: S
          } = (0, i.useIntl)(), {
            trackEvent: N
          } = W(), I = t ? b.DX : "div", A = (0, j.v6)({
            className: "_1obdf6xd"
          }, a), z = !f.current, E = _.length, M = (0, n.useCallback)(() => {
            f.current ? (N({
              event: "cta_other",
              text: "toggle play"
            }), y()) : (N({
              event: "cta_other",
              text: "toggle pause"
            }), h()), x(e => e + 1)
          }, [h, y, f, N]);
          (0, n.useEffect)(() => {
            s ? w() : k(), x(e => e + 1)
          }, [s, k, w]);
          const T = (0, r.jsx)(c.IconButton, {
            className: "_1obdf6x6",
            icon: z ? "Pause" : "Play",
            label: S(z ? Fa.hero_carousel_pause_button : Fa.hero_carousel_play_button),
            "aria-label": S(z ? Fa.hero_carousel_play_button : Fa.hero_carousel_pause_button),
            size: "SM",
            appearance: "ghost",
            onPress: M
          });
          return (0, r.jsx)(I, {
            ref: o,
            ...A,
            children: (0, r.jsxs)("div", {
              className: "_1obdf6xg",
              "data-disabled": String(v),
              children: [E > 1 && (0, r.jsxs)("div", {
                className: "_1obdf6xe",
                "data-carousel-pagination": !0,
                children: [!R && T, (0, r.jsx)(Oa, {
                  type: R ? "line" : "pagination",
                  size: "large",
                  appearance: "ghost",
                  current: l,
                  pages: E,
                  onBulletClick: p,
                  onBulletKeyDown: g,
                  setDotRef: u,
                  setFillRef: m
                }), R && T]
              }), !R && e && (0, r.jsxs)("div", {
                className: "_1obdf6xh",
                children: [(0, r.jsx)(c.Label, {
                  size: "XS",
                  appearance: "bold",
                  className: "_1obdf6xi",
                  children: "full_height" === d ? S(Fa.hero_carousel_scroll_down_label) : void 0
                }), (0, r.jsx)(Ra.ArrowDown, {
                  size: "MD",
                  label: e
                })]
              })]
            })
          })
        });
      var Ja = "var(--uw9ioi2)",
        Za = "var(--uw9ioi3)",
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
      const ar = (0, n.forwardRef)(function({
          children: e,
          bottomGradientColor: t,
          horizontalBackgroundPosition: a,
          verticalBackgroundPosition: n,
          asChild: o,
          testId: s,
          size: i = "MD",
          ...l
        }, c) {
          const _ = o ? b.DX : "div",
            d = (0, j.v6)({
              "data-testid": s,
              className: tr({
                size: i
              }),
              style: (0, x.DI)({
                [Qa]: t,
                [Ja]: a,
                [Za]: n
              })
            }, l);
          return (0, r.jsx)(_, {
            ref: c,
            ...d,
            children: e
          })
        }),
        rr = (0, n.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const o = (0, le.Ub)("(max-width: 500px) or (max-aspect-ratio: 0.9)"),
            {
              isUltraWideLandscape: s
            } = (() => {
              const e = (0, n.useCallback)(() => {
                  const e = window.innerWidth / window.innerHeight;
                  return [e >= 21 / 9, e <= 9 / 21]
                }, []),
                [t, a] = e(),
                [r, o] = (0, n.useState)(t),
                [s, i] = (0, n.useState)(a);
              return (0, n.useEffect)(() => {
                const t = () => {
                  const [t, a] = e();
                  o(t), i(a)
                };
                return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
              }, []), {
                isUltraWideLandscape: r,
                isUltraTallPortrait: s
              }
            })(),
            i = (0, j.v6)({
              className: "uw9ioic",
              src: e
            }, t);
          return (0, r.jsx)(Wt, {
            ref: a,
            ...i,
            loading: "eager",
            context: o ? "2:3" : s ? "32:9" : "21:9"
          })
        }),
        nr = (0, n.forwardRef)(function({
          invisible: e,
          children: t,
          asChild: a,
          testId: n,
          ...o
        }, s) {
          const i = a ? b.DX : "div",
            l = (0, j.v6)({
              "data-testid": n,
              className: er({
                invisible: e
              })
            }, o);
          return (0, r.jsx)("div", {
            className: "uw9ioid _1betujy6 _1betujy5",
            children: (0, r.jsx)(i, {
              ref: s,
              ...l,
              children: t
            })
          })
        }),
        or = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": a,
              className: "uw9ioig"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        sr = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : c.Label,
            i = (0, j.v6)({
              "data-testid": a,
              className: "uw9ioih foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ir = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "h2",
            i = (0, j.v6)({
              "data-testid": a,
              className: "uw9ioii foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        lr = (0, n.forwardRef)(function({
          asChild: e,
          src: t,
          ...a
        }, n) {
          const o = e ? b.DX : "div",
            s = (0, j.v6)({
              className: "uw9ioij"
            }, a);
          return (0, r.jsx)(o, {
            ref: n,
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
        cr = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": a,
              className: "uw9ioin"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        _r = ({
          slideRefs: e,
          slide: t,
          currentSlideIndex: a
        }) => {
          const {
            isPausedRef: o,
            emblaApi: s
          } = (0, n.useContext)(Xa), i = () => {
            o.current || s?.plugins()?.autoplay?.stop()
          };
          return (0, r.jsxs)(ar, {
            bottomGradientColor: t.bottomGradientColor,
            size: Ca(t.title),
            children: [(0, r.jsx)(rr, {
              ref: e.current[a].background,
              src: t.background
            }), (0, r.jsxs)(nr, {
              ref: e.current[a].content,
              invisible: 0 === a,
              children: [(0, r.jsx)(lr, {
                ref: e.current[a].logo,
                src: t.logo
              }), (0, r.jsxs)(or, {
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
        dr = (0, n.forwardRef)(function({
          autoplay: e,
          slides: t,
          size: a,
          delay: o = 6e3,
          defaultSlide: s = 0,
          loop: i = !0,
          ...l
        }, c) {
          const {
            trackEvent: _
          } = W(), {
            emblaApi: d,
            inView: u
          } = (0, n.useContext)(Xa), m = (0, n.useRef)(t?.map(() => ({
            background: (0, n.createRef)(),
            content: (0, n.createRef)(),
            logo: (0, n.createRef)(),
            heading: (0, n.createRef)(),
            ctas: (0, n.createRef)(),
            fade: (0, n.createRef)(),
            tag: (0, n.createRef)()
          })));
          return (0, n.useEffect)(() => {
            const e = e => {
              const a = e.selectedScrollSnap();
              u && _({
                event: "banner_item_impression",
                card_id: t[a].sys.id,
                card_name: t[a].title,
                position: a + 1,
                position_max: t.length
              }, t[a])
            };
            return d && (e(d), d?.on("select", e)), () => {
              d?.off("select", e)
            }
          }, [d]), t?.length ? (0, r.jsxs)(Ua, {
            ref: c,
            autoplay: e,
            slides: t,
            variant: a,
            tabIndex: -1,
            delay: o,
            slideRefs: m,
            defaultSlide: s,
            onNext: () => {
              _({
                event: "carousel_next"
              })
            },
            onPrev: () => {
              _({
                event: "carousel_previous"
              })
            },
            onSwipe: () => {
              _({
                event: "carousel_swipe"
              })
            },
            loop: i,
            ...l,
            children: [(0, r.jsx)(Ha, {
              children: t?.map((e, t) => (0, r.jsx)(Ka, {
                ref: m?.current[t]?.fade,
                variant: "full",
                children: (0, r.jsx)(_r, {
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
          } = W(), {
            ref: a
          } = t();
          return e ? (0, r.jsx)(dr, {
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
      const pr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "_1cw0rgk0"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        gr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "_1cw0rgk1"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        fr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          textAlignment: n = "left",
          ...o
        }, s) {
          const i = a ? b.DX : "div",
            l = (0, j.v6)({
              "data-testid": t,
              className: br({
                textAlignment: n
              })
            }, o);
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
        wr = (0, R.c)({
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
        vr = (0, R.c)({
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
        xr = (0, R.c)({
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
        jr = "var(--_1scye890)",
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
      const zr = (0, n.forwardRef)(function({
          image: e,
          size: t = "auto",
          testId: a,
          asChild: n,
          ...o
        }, s) {
          if (!e) return;
          const i = n ? b.DX : "div",
            l = (0, j.v6)({
              "data-testid": a,
              className: Ar({
                size: t
              })
            }, o);
          return (0, r.jsx)(i, {
            ref: s,
            ...l,
            children: (0, r.jsx)(ue, {
              src: e,
              className: "_1hsn8lx6"
            })
          })
        }),
        Er = (0, n.createContext)({
          size: void 0,
          interactive: !1,
          gradientColor: void 0,
          theme: "dark"
        }),
        Mr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          size: n = "medium",
          gradientColor: o,
          gradientType: s = "linear",
          interactive: i = !1,
          theme: l = "dark",
          ...c
        }, _) {
          const d = ((e = "") => {
              if (!e || "string" != typeof e) return null;
              let t = e.replace("#", "");
              return 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
                r: parseInt(t.substring(0, 2), 16).toString(),
                g: parseInt(t.substring(2, 4), 16).toString(),
                b: parseInt(t.substring(4, 6), 16).toString()
              }
            })(o),
            u = d && (0, x.DI)({
              [jr]: d.r,
              [Rr]: d.b,
              [Cr]: d.g
            }),
            m = a ? b.DX : "div",
            p = (0, j.v6)({
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
              size: n,
              gradientColor: o,
              interactive: i,
              theme: l
            },
            children: (0, r.jsx)(m, {
              ref: _,
              ...p,
              children: e
            })
          })
        }),
        Tr = (0, n.forwardRef)(function({
          testId: e,
          asChild: t,
          children: a,
          ...o
        }, s) {
          const {
            interactive: i
          } = (0, n.useContext)(Er), l = t ? b.DX : "div", c = (0, j.v6)({
            "data-testid": e,
            className: Sr({
              interactive: i
            })
          }, o);
          return (0, r.jsx)(l, {
            ref: s,
            ...c,
            children: a
          })
        }),
        Pr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const i = (0, n.useContext)(Er);
          if (!i) return;
          const {
            size: l
          } = i, c = a ? b.DX : "div", _ = (0, j.v6)({
            "data-testid": t,
            className: wr({
              size: l
            })
          }, o);
          return (0, r.jsx)(c, {
            ref: s,
            ..._,
            children: e
          })
        }),
        Gr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const s = (0, n.useContext)(Er);
          if (!s) return;
          const {
            size: i
          } = s, l = (0, j.v6)({
            "data-testid": t,
            className: kr({
              size: i
            })
          }, a);
          return (0, r.jsx)("span", {
            ref: o,
            ...l,
            children: e
          })
        }),
        Fr = (0, n.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, j.v6)({
            className: "_1scye89j"
          }, e);
          return (0, r.jsx)(zr, {
            ref: t,
            ...a
          })
        }),
        Dr = (0, n.forwardRef)(function({
          children: e,
          level: t = 5,
          testId: a,
          ...o
        }, s) {
          const i = (0, n.useContext)(Er);
          if (!i) return;
          const {
            size: _,
            theme: d
          } = i, u = (0, j.v6)({
            "data-testid": a,
            className: Ir({
              theme: d,
              size: _
            })
          }, o);
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
        Lr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const i = (0, n.useContext)(Er);
          if (!i) return;
          const {
            size: l
          } = i, c = a ? b.DX : "div", _ = (0, j.v6)({
            "data-testid": t,
            className: xr({
              size: l
            })
          }, o);
          return (0, r.jsx)(c, {
            ref: s,
            ..._,
            children: e
          })
        }),
        qr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const s = (0, n.useContext)(Er);
          if (!s) return;
          const {
            size: i,
            theme: l
          } = s, _ = (0, h.m)(l, "normal"), d = (0, j.v6)({
            "data-testid": t,
            className: (0, Ft.default)(_, vr({
              size: i
            }))
          }, a);
          return (0, r.jsx)(c.Button, {
            ref: o,
            ...d,
            children: e
          })
        });
      var Wr = (0, R.c)({
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
      const Vr = "WwwImageCard",
        Br = (0, i.defineMessages)({
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
      const Ur = (0, n.createContext)({
          theme: "light",
          items: null,
          activeIndex: 0,
          focusedIndex: 0,
          setActiveIndex: null,
          setFocusedIndex: null
        }),
        Hr = (0, n.forwardRef)(function({
          theme: e = "light",
          items: t,
          children: a,
          asChild: o,
          testId: s,
          ...l
        }, c) {
          const [_, d] = (0, n.useState)(0), [u, m] = (0, n.useState)(0), {
            formatMessage: p
          } = (0, i.useIntl)(), g = (0, n.useMemo)(() => ({
            theme: e,
            items: t,
            activeIndex: _,
            focusedIndex: u,
            setActiveIndex: d,
            setFocusedIndex: m
          }), [e, t, _, u]), f = (0, h.m)(e), y = o ? b.DX : "div", k = (0, j.v6)({
            className: (0, Ft.default)("iast651", f),
            "data-testid": s
          }, l);
          return (0, r.jsxs)(Ur.Provider, {
            value: g,
            children: [(0, r.jsx)(y, {
              ref: c,
              ...k,
              children: a
            }), (0, r.jsx)(an, {
              total: t.length,
              announcer: (e, t) => p(Br.image_carousel_screen_reader_announcer_label, {
                selectedTab: `${e+1}`,
                total: `${t}`
              })
            })]
          })
        }),
        Kr = (0, n.createContext)(null),
        Yr = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            activeIndex: o,
            setActiveIndex: s,
            focusedIndex: i,
            setFocusedIndex: l,
            theme: c
          } = (0, n.useContext)(Ur), {
            containerRef: _,
            buttonRefs: d,
            highlight: u,
            overflow: m
          } = ((e = 0, t = []) => {
            const a = (0, n.useRef)(null),
              r = (0, n.useRef)([]),
              [o, s] = (0, n.useState)({
                left: 0,
                width: 0
              }),
              [i, l] = (0, n.useState)({
                left: !1,
                right: !1
              }),
              c = (0, n.useCallback)(() => {
                const t = a.current,
                  n = r.current[e];
                if (!t || !n) return;
                const o = n.offsetLeft,
                  i = n.offsetWidth;
                s(e => e.left === o && e.width === i ? e : {
                  left: o,
                  width: i
                })
              }, [e]);
            return (0, n.useLayoutEffect)(() => {
              const e = () => requestAnimationFrame(c),
                t = "function" == typeof document.fonts?.ready?.then ? document.fonts.ready : void 0;
              t ? t.then(e) : e()
            }, [e, c, ...t]), (0, n.useEffect)(() => {
              const t = r.current[e];
              if (!t) return;
              const a = new ResizeObserver(() => c());
              return a.observe(t), () => a.disconnect()
            }, [e, c]), (0, n.useEffect)(() => {
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
              highlight: o,
              overflow: i,
              remeasure: c
            }
          })(o, [e]), {
            onKeyDown: b
          } = (({
            count: e,
            focusedIndex: t,
            setFocusedIndex: a,
            setActiveIndex: r,
            buttonRefs: o
          }) => ({
            onKeyDown: (0, n.useCallback)(n => {
              if (!(e <= 0)) switch (n.key) {
                case "ArrowRight": {
                  n.preventDefault();
                  const r = (t + 1) % e;
                  a(r), o.current[r]?.focus(), o.current[r]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break
                }
                case "ArrowLeft": {
                  n.preventDefault();
                  const r = (t - 1 + e) % e;
                  a(r), o.current[r]?.focus(), o.current[r]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break
                }
                case "Home":
                  n.preventDefault(), a(0), o.current[0]?.focus();
                  break;
                case "End":
                  n.preventDefault(), a(e - 1), o.current[e - 1]?.focus();
                  break;
                case "Enter":
                case " ":
                  n.preventDefault(), r(t), a(t)
              }
            }, [e, t, a, r, o])
          }))({
            count: n.Children.count(e),
            focusedIndex: i,
            setFocusedIndex: l,
            setActiveIndex: s,
            buttonRefs: d
          }), p = (e, t) => {
            d.current[e] = t
          }, g = (e, t) => {
            if (!l || !s) return;
            s(e), l(e);
            const a = t ?? d.current[e];
            a && (a.focus(), "function" == typeof a.scrollIntoView && a.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest"
            }))
          }, f = (0, n.useMemo)(() => ({
            setButtonRef: p,
            onTabKeyDown: b,
            activateIndex: g
          }), [b]), y = (0, h.m)(c), k = (0, le.UP)(_, a), w = (0, j.v6)({
            className: (0, Ft.default)(Xr({
              overflowLeft: m.left,
              overflowRight: m.right
            }), y),
            role: "tablist"
          }, t);
          return (0, r.jsx)("div", {
            className: (0, Ft.default)("iast658", y),
            children: (0, r.jsxs)("div", {
              ref: k,
              ...w,
              onKeyDown: b,
              children: [(0, r.jsx)("div", {
                className: (0, Ft.default)("iast65e", y),
                style: {
                  transform: `translateX(calc(${u.left}px - ${x.LU.global.spacing.gap[50]}))`,
                  width: u.width
                }
              }), (0, r.jsx)(Kr.Provider, {
                value: f,
                children: e
              })]
            })
          })
        }),
        Jr = (0, n.forwardRef)(function({
          children: e,
          index: t,
          onClick: a,
          onKeyDown: o,
          ...s
        }, i) {
          const {
            activeIndex: l,
            focusedIndex: c,
            theme: _
          } = (0, n.useContext)(Ur), {
            setButtonRef: d,
            onTabKeyDown: u,
            activateIndex: m
          } = (() => {
            const e = (0, n.useContext)(Kr);
            if (!e) throw new Error("ImageCarousel.Tab must be used inside ImageCarousel.Tabs");
            return e
          })(), b = l === t, p = c === t, g = (0, h.m)(_), f = (0, le.UP)(e => d(t, e), i), y = (0, j.v6)({
            className: (0, Ft.default)("iast65d foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj", g)
          }, s);
          return (0, r.jsx)("button", {
            ref: f,
            ...y,
            role: "tab",
            type: "button",
            tabIndex: p ? 0 : -1,
            "aria-selected": b,
            "data-selected": b,
            onClick: e => {
              a?.(e), m(t, e.currentTarget)
            },
            onKeyDown: e => {
              o?.(e), u(e)
            },
            children: e
          })
        }),
        Zr = (0, n.memo)(Jr, (e, t) => e.children === t.children && e.index === t.index && e.appearance === t.appearance),
        Qr = (0, n.forwardRef)(function({
          children: e,
          mobileAspectRatio: t = "1/1",
          desktopAspectRatio: a = "16/9",
          ...n
        }, o) {
          const s = (0, le.Ub)(C.f.mobile),
            i = (0, j.v6)({
              className: "iast652",
              style: (0, x.DI)({
                [Or]: s ? t : a
              })
            }, n);
          return (0, r.jsx)("div", {
            ref: o,
            ...i,
            children: e
          })
        }),
        en = (0, n.forwardRef)(function({
          index: e,
          children: t,
          ...a
        }, o) {
          const {
            theme: s,
            activeIndex: i
          } = (0, n.useContext)(Ur), l = i === e, c = (0, h.m)(s), _ = (0, j.v6)({
            className: (0, Ft.default)($r({
              isActive: l
            }), c),
            role: "tabpanel",
            hidden: !l,
            "aria-hidden": !l
          }, a);
          return (0, r.jsx)("div", {
            ref: o,
            ..._,
            children: t
          })
        }),
        tn = (0, n.memo)(en),
        an = ({
          total: e,
          announcer: t
        }) => {
          const {
            activeIndex: a
          } = (0, n.useContext)(Ur);
          return e <= 0 || !a ? null : (0, r.jsx)(b.s6, {
            "aria-live": "polite",
            "aria-atomic": "true",
            children: t(a, e)
          })
        },
        rn = ({
          index: e,
          children: t
        }) => {
          const {
            activeIndex: a
          } = (0, n.useContext)(Ur), o = a !== e ? -1 : void 0;
          return (0, r.jsx)(b.DX, {
            tabIndex: o,
            children: t
          })
        },
        nn = "WwwImageCarousel";
      var on = a(13335);
      const sn = (0, i.defineMessages)({
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
        ln = (0, n.createContext)({
          imagesLoaded: !1,
          setImagesLoaded: () => {}
        }),
        cn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const [i, l] = (0, n.useState)(!1), c = a ? b.DX : "section", _ = (0, j.v6)({
            "data-testid": t,
            className: "b8qqdy0"
          }, o);
          return (0, r.jsx)(ln.Provider, {
            value: {
              imagesLoaded: i,
              setImagesLoaded: l
            },
            children: (0, r.jsx)(c, {
              ref: s,
              ..._,
              children: e
            })
          })
        }),
        _n = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          topGamesArray: o,
          bottomGamesArray: s,
          ...l
        }, _) {
          const {
            formatMessage: d
          } = (0, i.useIntl)(), u = a ? b.DX : "div", m = (0, j.v6)({
            "data-testid": t,
            className: "b8qqdy2"
          }, l), [p, g] = (0, n.useState)(!0), f = (0, n.useRef)(p);
          (0, n.useEffect)(() => {
            f.current = p
          }, [p]);
          const h = (0, n.useCallback)(e => (f.current || setTimeout(() => {
              e.plugins().autoScroll?.stop()
            }, 0), !0), []),
            [y, k] = (0, Te.A)({
              loop: !0,
              dragFree: !0,
              startIndex: 0,
              watchDrag: !1,
              containScroll: "keepSnaps",
              watchResize: h
            }, [(0, on.A)({
              playOnInit: !0,
              speed: .2,
              direction: "forward",
              startDelay: 0,
              stopOnInteraction: !1,
              stopOnMouseEnter: !1,
              stopOnFocusIn: !1,
              rootNode: null
            })]),
            [w, v] = (0, Te.A)({
              loop: !0,
              dragFree: !0,
              startIndex: 0,
              watchDrag: !1,
              containScroll: "keepSnaps",
              watchResize: h
            }, [(0, on.A)({
              playOnInit: !0,
              speed: .16,
              direction: "forward",
              startDelay: 10,
              stopOnInteraction: !1,
              stopOnMouseEnter: !1,
              stopOnFocusIn: !1,
              rootNode: null
            })]),
            x = (0, n.useRef)([]);
          (0, n.useEffect)(() => {
            x.current = [k, v].filter(Boolean)
          }, [k, v]);
          const C = (0, n.useCallback)(() => {
            const e = !p;
            x.current.forEach(t => {
              const a = t?.plugins().autoScroll;
              a && (e ? a.play() : a.stop())
            }), g(e)
          }, [p]);
          return (0, r.jsxs)("div", {
            className: "b8qqdy1",
            children: [(0, r.jsx)(c.IconButton, {
              appearance: "tertiary",
              label: d(p ? sn.image_marquee_cta_pause_label : sn.image_marquee_cta_play_label),
              "aria-label": d(p ? sn.image_marquee_cta_play_label : sn.image_marquee_cta_pause_label),
              size: "SM",
              icon: p ? "Pause" : "Play",
              onPress: C,
              className: "b8qqdy6"
            }), (0, r.jsxs)(u, {
              ref: _,
              ...m,
              children: [o && (0, r.jsx)(un, {
                gamesArray: o,
                ref: y
              }), s && (0, r.jsx)(un, {
                gamesArray: s,
                ref: w
              }), e]
            })]
          })
        }),
        dn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "b8qqdy9 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        un = (0, n.forwardRef)(function({
          gamesArray: e
        }, t) {
          if (e) return (0, r.jsx)("div", {
            className: "b8qqdy3",
            ref: t,
            children: (0, r.jsx)("div", {
              className: "b8qqdy4",
              children: e.map((e, t) => {
                if (e.boxArt) return (0, r.jsx)(mn, {
                  asChild: !0,
                  children: (0, r.jsx)(Wt, {
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
        mn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }) {
          const o = (0, j.v6)({
              "data-testid": t,
              className: "b8qqdy8"
            }, n),
            s = a ? b.DX : "div";
          return (0, r.jsx)(s, {
            ...o,
            children: e
          })
        }),
        bn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t,
              className: "b8qqdya"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        pn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, j.v6)({
            "data-testid": t,
            className: "b8qqdyb"
          }, a);
          return (0, r.jsx)(c.Heading, {
            ref: n,
            ...o,
            level: 3,
            children: e
          })
        }),
        gn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, j.v6)({
            "data-testid": t,
            className: "b8qqdyc"
          }, a);
          return (0, r.jsx)(c.Body, {
            ref: n,
            ...o,
            size: "LG",
            appearance: "bold",
            children: e
          })
        }),
        fn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          link: a,
          ...n
        }, o) {
          const s = (0, j.v6)({
            "data-testid": t,
            className: "b8qqdyd"
          }, n);
          return a?.url ? (0, r.jsx)(c.Button, {
            ref: o,
            ...s,
            size: "XL",
            asChild: !0,
            children: (0, r.jsx)(v.N, {
              href: a?.url,
              rel: "noreferrer",
              target: "_self",
              children: e
            })
          }) : (0, r.jsx)(c.Button, {
            ref: o,
            ...s,
            size: "LG",
            children: e
          })
        }),
        hn = ({
          block: e
        }) => {
          const {
            trackEvent: t,
            useTrackPageSectionImpression: a
          } = W(), {
            ref: n
          } = a();
          if (!e) return null;
          const {
            cta: o,
            description: s,
            title: i
          } = e, l = e?.marqueeingElementsCollection?.items[0]?.referencesCollection?.items, c = l ? Math.floor(l.length / 2) : 0, _ = l?.slice(0, c) || [], d = l?.slice(c) || [];
          return (0, r.jsxs)(cn, {
            ref: n,
            children: [(0, r.jsx)(_n, {
              topGamesArray: _,
              bottomGamesArray: d
            }), (0, r.jsxs)(dn, {
              children: [(0, r.jsxs)(bn, {
                children: [(0, r.jsx)(pn, {
                  children: i
                }), (0, r.jsx)(gn, {
                  children: s
                })]
              }), o && (0, r.jsx)(fn, {
                appearance: o?.appearance,
                override_backgroundColor: o?.backgroundColor,
                iconLeft: o?.iconLeft?.icon,
                iconRight: o?.iconRight?.icon,
                link: o?.link,
                onPress: (u = o, () => t(u.analyticsData, u)),
                children: o?.text
              })]
            })]
          });
          var u
        },
        yn = "WwwImagesMarqueeModule",
        kn = "WwwLightboxImage",
        wn = "WwwLinkOutImage";
      var vn = (0, R.c)({
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
        xn = ((0, R.c)({
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
        jn = (0, R.c)({
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
      const Cn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              className: "_64q2nv0 _1betujy6 _1betujy5",
              "data-testid": a
            }, n);
          return (0, r.jsx)(s, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Rn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gridType: n,
          ...o
        }, s) {
          const i = t ? b.DX : "div",
            l = (0, j.v6)({
              className: xn({
                grid: n
              }),
              "data-testid": a
            }, o);
          return (0, r.jsx)(i, {
            ...l,
            ref: s,
            children: e
          })
        }),
        Sn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gridType: o,
          ...s
        }, i) {
          const l = t ? b.DX : "div",
            c = (0, j.v6)({
              className: (0, Ft.default)(xn({
                grid: o || "4_up_a"
              })),
              "data-testid": a
            }, s);
          return (0, r.jsx)(l, {
            ...c,
            ref: i,
            children: n.Children.map(e, (e, t) => (0, n.isValidElement)(e) && (0, n.cloneElement)(e, {
              style: {
                gridArea: String.fromCharCode(97 + t)
              }
            }))
          })
        }),
        Nn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          type: n,
          ...o
        }, s) {
          const i = t ? b.DX : "div",
            l = (0, j.v6)({
              className: jn({
                type: n
              }),
              "data-testid": a
            }, o);
          return (0, r.jsx)(i, {
            ...l,
            ref: s,
            children: e
          })
        }),
        In = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          defaultSlide: a = 0,
          onCarouselSwipe: o,
          ...s
        }, i) {
          const [l, c] = (0, n.useState)(!1), {
            ref: _,
            api: d,
            currentSlide: u
          } = (({
            autoScrollEnabled: e = !1,
            defaultSlide: t,
            duration: a = 40
          }) => {
            const r = (0, n.useRef)(null),
              [o, s] = (0, n.useState)(t),
              [i, l] = (0, n.useState)(0),
              [c, _] = (0, n.useState)(!1),
              [d, u] = (0, Te.A)({
                axis: "x",
                align: "start",
                startIndex: t,
                active: !0,
                containScroll: "trimSnaps",
                watchDrag: c,
                duration: a
              }, []),
              m = (0, n.useCallback)(() => {
                u && (l(u?.scrollSnapList()?.length ?? 0), _(u?.canScrollNext() || u?.canScrollPrev()))
              }, [u]),
              b = (0, n.useCallback)(() => {
                u && s(u?.selectedScrollSnap() ?? 0)
              }, [u]);
            return (0, n.useEffect)(() => {
              u && r?.current && (e ? r?.current.play() : r.current.stop())
            }, [e, u]), (0, n.useEffect)(() => {
              if (u) return u.on("init", m), u.on("reInit", m), u.on("select", b), m(), () => {
                u.off("init", m), u.off("reInit", m), u.off("select", b)
              }
            }, [u, m, b]), {
              ref: d,
              currentSlide: o,
              totalSlides: i,
              api: u
            }
          })({
            defaultSlide: a
          }), m = (0, le.UP)(_, i), b = (0, j.v6)({
            className: "_64q2nve",
            "data-testid": t
          }, s);
          return (0, n.useEffect)(() => {
            const e = () => {
              c(!0)
            };
            return d?.on("pointerUp", e), l && o?.(), c(!1), () => {
              d?.off("pointerUp", e)
            }
          }, [d, u]), (0, r.jsx)(Ue, {
            ...b,
            ref: m,
            children: e
          })
        }),
        An = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, j.v6)({
            className: "_64q2nvf",
            "data-testid": t
          }, a);
          return (0, r.jsx)(He, {
            ...o,
            ref: n,
            children: e
          })
        }),
        zn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          textColor: a,
          size: n,
          ...o
        }, s) {
          const i = (0, j.v6)({
            className: "_64q2nvg",
            "data-testid": t,
            gradientType: "radial",
            theme: "dark" === a ? "light" : "dark",
            interactive: !0,
            size: n
          }, o);
          return (0, r.jsx)(Mr, {
            ...i,
            ref: s,
            children: e
          })
        }),
        En = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, j.v6)({
            className: "_64q2nvh",
            "data-testid": t
          }, a);
          return (0, r.jsx)(Pr, {
            ...o,
            ref: n,
            children: e
          })
        }),
        Mn = Gr,
        Tn = Dr,
        Pn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, j.v6)({
            "data-testid": t
          }, a);
          return (0, r.jsx)(qr, {
            ...o,
            ref: n,
            asChild: !0,
            children: (0, r.jsx)("span", {
              className: vn({
                appearance: a.appearance
              }),
              tabIndex: -1,
              children: e
            })
          })
        }),
        Gn = Tr,
        Fn = (0, i.defineMessages)({
          masonry_grid_external_store_link: {
            id: "masonry_grid_external_store_link",
            description: "Tells the user this is an external link to the store.",
            defaultMessage: "External link to Store"
          }
        });
      var Dn = "_18nij4j0";
      const Ln = {
          small: 6,
          medium: 5,
          large: 4,
          xlarge: 4
        },
        qn = ({
          card: e,
          context: t,
          size: a
        }) => {
          const {
            textColor: n,
            badgeText: o,
            text: s,
            cta: i,
            backgroundImage: l
          } = e, c = Ln[a];
          return (0, r.jsxs)(zn, {
            size: a,
            textColor: n,
            children: [(0, r.jsxs)(En, {
              children: [o && (0, r.jsx)(Mn, {
                children: o
              }), s && (0, r.jsx)(Tn, {
                level: c,
                children: s
              }), i && (0, r.jsx)(Pn, {
                iconLeft: i.iconLeft?.icon,
                iconRight: i.iconRight?.icon,
                appearance: i.appearance,
                override_backgroundColor: i?.backgroundColor,
                size: "LG",
                children: i.text
              })]
            }), l && (0, r.jsx)(Gn, {
              asChild: !0,
              children: (0, r.jsx)(Wt, {
                alt: l?.altText,
                src: l,
                context: t
              })
            })]
          })
        },
        Wn = "WwwMasonryGrid";
      var Vn = a(68196),
        Bn = a(51135),
        On = a(26161),
        $n = a(49906),
        Xn = a(60150);
      const Un = (0, i.defineMessages)({
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
        Hn = {
          SUCCESS: {
            icon: "check",
            heading: Un.ns_successfully_subscribed_title,
            bodyText: Un.ns_successfully_subscribed_details_amp,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: Un.ns_check_email_title,
            bodyText: Un.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: Un.ns_error_preferences_title,
            bodyText: Un.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: Un.ns_error_generic_title,
            bodyText: Un.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: Un.ns_already_subbed_title,
            bodyText: Un.ns_already_subbed_details_amp,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: Un.ns_confirm_after_register_title,
            bodyText: Un.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: Un.ns_confirm_title,
            bodyText: Un.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        Kn = {
          0: Hn.ERROR_PREFERENCES,
          1: Hn.SUCCESS,
          2: Hn.ERROR_PREFERENCES,
          3: Hn.ERROR_PREFERENCES,
          4: Hn.ERROR_GENERIC
        },
        Yn = (0, $n.eU)(null),
        Jn = (e, t) => {
          const [a, r] = (0, n.useState)(), [o, l] = (0, n.useState)(!1), [c, _] = (0, n.useState)(!1), [d, u] = (0, n.useState)(!1), [m, b] = (0, n.useState)(!1), [p, f] = (0, Xn.fp)(Yn), h = (0, i.useIntl)(), {
            track: y
          } = (0, g.useGtmTrack)(), k = {
            preferences: `https://${e.www}.rockstargames.com/account/communications`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          };
          (0, n.useEffect)(() => {
            a ? (_(!0), u(!1)) : _(!1)
          }, [a]);
          const w = {
              ...Hn.NEW_ACCOUNT,
              closeOnOutsideClick: !1,
              buttons: [{
                buttonText: h.formatMessage(Un.ns_yes_subscribe_text),
                style: "monochrome",
                onClick: () => {
                  v()
                }
              }, {
                buttonText: h.formatMessage(Un.ns_go_back_text),
                onClick: () => {
                  r(null)
                }
              }]
            },
            v = async () => (y({
              event: "cta_subscribe_news",
              section_layout: t.loggedIn ? "signed in" : "signed out",
              element_placement: "newsletter subscribe",
              text: "subscribe now"
            }), t.loggedIn || window.location.assign(k.auth), t.loggedIn && t.isAMinor ? (r(Hn.ERROR_GENERIC), b(!1), void y({
              event: "alert_error",
              text: "error message with no preferences link",
              element_placement: "newsletter subscribe"
            })) : t.loggedIn && !p || t.loggedIn && 3 == p ? void await x() : t.loggedIn && p ? (y({
              event: "alert_update",
              text: "alert - user already subscribed",
              element_placement: "newsletter subscribe"
            }), r(Hn.ALREADY_SUBSCRIBED), void b(!1)) : void 0), x = async () => {
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
              if (e) f(0), r(Hn.ERROR_GENERIC), y({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              });
              else {
                const e = a.status;
                f(e), r(Kn[e]), 1 === e ? (y({
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
          return (0, n.useEffect)(() => {
            l(1 === p)
          }, [p]), (0, n.useEffect)(() => {
            (async () => {
              await (async () => {
                void 0 !== t.loggedIn && (t.loggedIn ? await (async () => {
                  if (-1 === p) return;
                  f(-1), u(!0);
                  const {
                    error: a = null,
                    result: n
                  } = await (0, s.coreScApiFetch)("marketing/status", {
                    pingBearer: t.pingBearer
                  });
                  if (a) f(0), u(!1);
                  else {
                    const a = n.status;
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
                          }), r(Hn.SUCCESS)) : (y({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), r(Hn.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          y({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), r(Hn.ERROR_GENERIC);
                          break;
                        default:
                          t.isNewAccount ? (r(w), y({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : x()
                      }
                    })(a), u(!1)
                  }
                })() : u(!1))
              })()
            })()
          }, [t.loggedIn]), {
            dialog: a,
            handleSubscribeButton: v,
            isButtonLoading: m,
            isLoading: d,
            isSubscribed: o,
            setShowDialog: _,
            showDialog: c,
            subscriptionStatus: p,
            urls: k,
            setDialog: r
          }
        },
        Zn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": a,
              className: "l1gjt90 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Qn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : c.Heading,
            i = (0, j.v6)({
              "data-testid": a,
              className: "l1gjt91"
            }, n);
          return (0, r.jsx)(s, {
            level: 2,
            ref: o,
            ...i,
            children: e
          })
        }),
        eo = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": a,
              className: "l1gjt92"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        to = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": a,
              className: "l1gjt94"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ao = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          isDisabled: a,
          ...n
        }, o) {
          const s = (0, j.v6)({
            "data-testid": t,
            isDisabled: a
          }, n);
          return (0, r.jsx)(c.Button, {
            appearance: "primary",
            size: "LG",
            ref: o,
            ...s,
            children: e
          })
        }),
        ro = "WwwNewsletterSubscribe";
      var no = (0, R.c)({
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
        oo = (0, R.c)({
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
        so = "var(--_1ozycm40)",
        io = "_1ozycm4o",
        lo = (0, R.c)({
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
      const co = (0, n.createContext)(void 0),
        _o = (0, n.forwardRef)(function({
          colorMode: e = "dark",
          backgroundColor: t,
          gradientEnabled: a = !0,
          imagePlacement: o = "left",
          children: s,
          asChild: i,
          testId: l,
          ...c
        }, _) {
          const d = i ? b.DX : "div",
            u = "dark" === e ? "#000000" : "lightgrey",
            m = (0, j.v6)({
              "data-testid": l,
              className: "_1ozycm42 _1betujy6 _1betujy5",
              style: (0, x.DI)({
                [so]: t ?? u
              })
            }, c),
            p = (0, le.Ub)(C.f.mobile),
            g = p ? "vertical" : o,
            f = "left" === o ? s : n.Children.toArray(s).reverse();
          return (0, r.jsx)(co.Provider, {
            value: {
              colorMode: e,
              backgroundColor: t,
              imagePlacement: g,
              gradientEnabled: a
            },
            children: (0, r.jsx)(d, {
              ref: _,
              ...m,
              children: p ? s : f
            })
          })
        }),
        uo = (0, n.forwardRef)(function({
          contentAlignment: e,
          children: t,
          testId: a,
          asChild: o,
          ...s
        }, i) {
          const l = (0, n.useContext)(co);
          if (!l) return;
          const {
            colorMode: c,
            gradientEnabled: _,
            imagePlacement: d
          } = l, u = o ? b.DX : "div", m = (0, h.m)(c ?? "dark", "normal"), p = (0, j.v6)({
            "data-testid": a,
            className: (0, Ft.default)(m, "_1ozycm43", lo({
              contentAlignment: e,
              imagePlacement: d
            }), !_ && "_1ozycm4a")
          }, s);
          return (0, r.jsx)(u, {
            ref: i,
            ...p,
            children: t
          })
        }),
        mo = (0, n.forwardRef)(function({
          image: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const i = (0, le.Ub)(C.f.tabletMediumAndLarger) ? "16:9" : "1:1",
            l = (0, n.useContext)(co);
          if (!l || !e) return;
          const {
            imagePlacement: c,
            gradientEnabled: _
          } = l, d = a ? b.DX : "div", u = (0, j.v6)({
            "data-testid": t,
            className: no({
              imagePlacement: c
            })
          }, o);
          return (0, r.jsxs)(d, {
            ref: s,
            ...u,
            children: [_ && (0, r.jsx)("div", {
              className: oo({
                imagePlacement: c
              })
            }), (0, r.jsx)(Wt, {
              src: e,
              context: i,
              className: "_1ozycm4j"
            })]
          })
        }),
        bo = (0, n.forwardRef)(function({
          ...e
        }, t) {
          return (0, r.jsx)(zr, {
            ref: t,
            ...e
          })
        }),
        po = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          if (!e) return;
          const o = (0, j.v6)({
            "data-testid": t,
            className: "_1ozycm4k"
          }, a);
          return (0, r.jsx)(c.Button, {
            ref: n,
            ...o,
            children: e
          })
        }),
        go = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const n = (0, j.v6)({
            className: "_1ozycm4l"
          }, t);
          return (0, r.jsx)(c.Heading, {
            ref: a,
            ...n,
            children: e
          })
        }),
        fo = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const n = (0, j.v6)({
            className: "_1ozycm4m"
          }, t);
          return (0, r.jsx)(c.Body, {
            ref: a,
            ...n,
            children: e
          })
        }),
        ho = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          if (!e) return;
          const o = (0, j.v6)({
            "data-testid": t,
            className: "_1ozycm4n"
          }, a);
          return (0, r.jsx)("div", {
            ref: n,
            ...o,
            children: e
          })
        }),
        yo = (0, n.forwardRef)(function({
          markdown: e,
          onHyperlinkClick: t,
          testId: a,
          ...n
        }, o) {
          if (!e) return;
          const s = (0, j.v6)({
              "data-testid": a,
              className: io
            }, n),
            i = {
              [l.ContentfulTypes.BLOCKS.PARAGRAPH]: (e, t) => (0, r.jsx)(c.Body, {
                size: "XS",
                className: io,
                children: t
              }),
              [l.ContentfulTypes.INLINES.HYPERLINK]: (e, a) => {
                return (0, r.jsx)("a", {
                  href: e.data.uri,
                  className: "_1ozycm4p",
                  onClick: (n = e, () => t?.(n)),
                  children: a
                });
                var n
              }
            };
          return (0, r.jsx)("div", {
            ref: o,
            ...s,
            children: (0, r.jsx)(l.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: i
              }
            })
          })
        }),
        ko = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          if (!e) return;
          const o = (0, j.v6)({
            "data-testid": t,
            className: "_1ozycm4q"
          }, a);
          return (0, r.jsx)(c.Label, {
            ref: n,
            ...o,
            size: "XS",
            appearance: "bold",
            children: e
          })
        }),
        wo = "WwwPromoModule",
        vo = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": a,
              className: "_174ett30 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            style: {
              backgroundImage: "\n        linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.5) 50%),\n        url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c0a5c2692eb47690bbaa34cde2f2173.jpg)"
            },
            ...i,
            children: e
          })
        }),
        xo = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": a,
              className: "_174ett31"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        jo = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, n) {
          const o = t ? b.DX : "div",
            s = (0, j.v6)({
              className: "_174ett32"
            }, a);
          return (0, r.jsx)(o, {
            ref: n,
            ...s,
            children: e
          })
        }),
        Co = (0, n.forwardRef)(function({
          asChild: e,
          testId: t,
          altText: a,
          ...n
        }, o) {
          const s = e ? b.DX : "div",
            i = (0, j.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsxs)(s, {
            ref: o,
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
        Ro = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? b.DX : c.Body,
            i = (0, j.v6)({
              "data-testid": a,
              className: "_174ett36 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        So = "WwwSupportCalloutModule";
      var No = "var(--lgxyya7)",
        Io = (0, R.c)({
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
        Ao = "var(--lgxyya9)",
        zo = "var(--lgxyyaa)",
        Eo = (0, R.c)({
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
      const Mo = (0, n.createContext)({
          align: "left"
        }),
        To = (0, n.forwardRef)(function({
          align: e = "left",
          children: t,
          testId: a,
          asChild: n,
          ...o
        }, s) {
          const i = n ? b.DX : "div",
            l = (0, j.v6)({
              "data-testid": a,
              className: Eo({
                align: e
              })
            }, o);
          return (0, r.jsx)(Mo.Provider, {
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
        Po = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, j.v6)({
            "data-testid": t,
            className: "lgxyya6"
          }, a);
          return (0, r.jsx)("div", {
            className: "lgxyya5",
            children: (0, r.jsx)(c.Badge.Root, {
              appearance: "primary",
              ref: n,
              ...o,
              children: (0, r.jsx)(c.Badge.Label, {
                children: e
              })
            })
          })
        }),
        Go = (0, n.forwardRef)(function({
          bodyTextWrap: e,
          children: t,
          testId: a,
          ...n
        }, o) {
          const s = (0, j.v6)({
            "data-testid": a,
            className: "lgxyya8",
            style: (0, x.DI)({
              [No]: e
            })
          }, n);
          return t ? (0, r.jsx)("div", {
            ref: o,
            ...s,
            children: t
          }) : null
        }),
        Fo = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          size: a = "SM",
          ...n
        }, o) {
          const s = (0, j.v6)({
            "data-testid": t,
            className: "lgxyya4"
          }, n);
          return (0, r.jsx)(c.Label, {
            size: a,
            appearance: "bold",
            ref: o,
            ...s,
            children: e
          })
        }),
        Do = (0, n.forwardRef)(function({
          headerSize: e,
          textColor: t,
          headerTextWrap: a,
          children: o,
          testId: s,
          ...i
        }, l) {
          const _ = (0, le.Ub)(C.f.desktopSmallAndLarger),
            [d, u] = (0, n.useState)(2),
            m = (0, j.v6)({
              "data-testid": s,
              className: (0, Ft.default)("lgxyyag", t && "lgxyyab"),
              style: (0, x.DI)({
                [Ao]: t,
                [zo]: a
              }),
              asChild: !0
            }, i);
          return (0, n.useEffect)(() => {
            "XS" === e ? u(_ ? 5 : 6) : "SM" === e ? u(_ ? 4 : 5) : "MD" === e ? u(_ ? 3 : 4) : "LG" === e ? u(_ ? 2 : 3) : "XL" === e && u(_ ? 1 : 2)
          }, [e, _]), (0, r.jsx)(c.Heading, {
            level: d,
            ref: l,
            ...m,
            children: (0, r.jsx)("h2", {
              children: o
            })
          })
        }),
        Lo = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? b.DX : "p",
            i = (0, j.v6)({
              "data-testid": t,
              className: "lgxyyah"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        qo = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const {
            align: s
          } = (0, n.useContext)(Mo), i = (0, j.v6)({
            "data-testid": t,
            className: Io({
              align: s
            })
          }, a);
          return (0, r.jsx)("div", {
            ref: o,
            ...i,
            children: e
          })
        }),
        Wo = "WwwTextBlock";
      var Vo = (0, R.c)({
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
      const Bo = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          variant: n = "image_right",
          ...o
        }, s) {
          const i = a ? b.DX : "div",
            l = (0, j.v6)({
              "data-testid": t,
              className: Vo({
                alignment: n
              })
            }, o);
          return (0, r.jsx)(i, {
            ref: s,
            ...l,
            children: e
          })
        }),
        Oo = (0, n.forwardRef)(function({
          testId: e,
          altText: t,
          ...a
        }, n) {
          const o = (0, j.v6)({
            "data-testid": e,
            className: "ftz7gr6",
            alt: t
          }, a);
          return (0, r.jsx)("img", {
            ref: n,
            ...o
          })
        }),
        $o = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const n = (0, j.v6)({
            className: "ftz7gr7"
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...n,
            children: e
          })
        }),
        Xo = "WwwTextWithBadge";
      var Uo = a(31879),
        Ho = a.n(Uo);
      const Ko = "WwwVideoPlayer";
      var Yo = a(20155);
      const Jo = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        Zo = (0, i.defineMessages)({
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
      var Qo = a(17301);
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
        ns = "_3rocp6i",
        os = "_3rocp6g",
        ss = "_3rocp65",
        is = "_3rocp66",
        ls = "_3rocp6q",
        cs = "_3rocp6j",
        _s = "_3rocp63",
        ds = "_3rocp68",
        us = "_3rocp6z",
        ms = "_3rocp6a",
        bs = "_3rocp6h",
        ps = "_3rocp67";
      const gs = ({
        content: e,
        loggedIn: t,
        addClaim: a,
        signin: n,
        landingSlide: o
      }) => (0, r.jsxs)("div", {
        className: (0, Ft.default)(ss, "_3rocp6c _3rocp6b", "onScreen" === o ? ds : "", "hidden" === o ? is : "", "visible" === o ? ps : ""),
        children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
          src: e.introScreen.image.sources.mobile,
          className: _s,
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
                className: (0, Ft.default)(rs, "override"),
                children: [(0, r.jsx)(c.Heading, {
                  level: 3,
                  children: e.introScreen.headline
                }), (0, r.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.introScreen.body
                  }
                })]
              }), (0, r.jsx)("div", {
                className: os,
                children: (0, r.jsx)(c.Button, {
                  className: us,
                  appearance: "primary",
                  size: "LG",
                  onClick: t ? a : n,
                  children: t ? e.introScreen.btnText.loggedIn : e.introScreen.btnText.loggedOut
                })
              })]
            })
          }), (0, r.jsx)("div", {
            className: ns,
            children: (0, r.jsx)("div", {
              className: (0, Ft.default)(cs, "override"),
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
        ws = a(36421),
        vs = a(37996),
        xs = a(46991),
        js = a(69364);
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
        Ss = (0, n.forwardRef)(function({
          children: e,
          className: t,
          testId: a,
          ...n
        }, o) {
          const {
            formatMessage: s
          } = (0, i.useIntl)(), l = (0, ws.v6)(n, {
            "data-testid": a,
            className: (0, Ft.default)("rockstargames-sites-rockstargamesd738b88fa09e0960678501900af6dae1", t)
          });
          return (0, r.jsxs)("div", {
            ref: o,
            ...l,
            children: [(0, r.jsx)(ks.s6, {
              children: s(Cs.character_card_a11y_intro)
            }), e]
          })
        }),
        Ns = (0, js.g)(Ss),
        Is = (0, n.forwardRef)(function({
          src: e,
          alt: t,
          testId: o,
          ...s
        }, i) {
          const [l, c] = (0, n.useState)(e), _ = (0, ws.v6)(s, {
            className: "rockstargames-sites-rockstargamesa0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": o
          });
          return e ? (0, r.jsx)("div", {
            ref: i,
            ..._,
            children: (0, r.jsx)("img", {
              className: Rs,
              src: l,
              alt: t ?? "",
              onError: () => c(a(14804)),
              "aria-hidden": !t
            })
          }) : (0, r.jsx)("div", {
            ref: i,
            ..._,
            children: (0, r.jsx)("img", {
              className: Rs,
              src: a(14804),
              alt: t ?? "",
              "aria-hidden": !t
            })
          })
        }),
        As = (0, n.forwardRef)(function({
          asChild: e,
          testId: t,
          className: a,
          ...n
        }, o) {
          const s = e ? ks.DX : "div",
            i = (0, ws.v6)(n, {
              className: (0, Ft.default)("rockstargames-sites-rockstargamesfbe57172570573357e040787d9307835", a),
              "data-testid": t
            });
          return (0, r.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        zs = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, ws.v6)(a, {
            className: "rockstargames-sites-rockstargamesd9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": t
          });
          return (0, r.jsx)("div", {
            ref: n,
            ...o,
            children: e
          })
        }),
        Es = ({
          testId: e,
          ...t
        }) => {
          const a = (0, ws.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(vs.Ay, {
            ...a
          })
        },
        Ms = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          userName: a,
          ...n
        }, o) {
          const {
            formatMessage: s
          } = (0, i.useIntl)(), l = (0, ws.v6)(n, {
            "data-testid": t
          });
          return (0, r.jsxs)("div", {
            className: "rockstargames-sites-rockstargamescd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...l,
            ref: o,
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
        Ts = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, n) {
          const o = (0, ws.v6)(a, {
            "data-testid": e
          });
          return (0, r.jsx)("div", {
            ...o,
            ref: n,
            children: t
          })
        }),
        Ps = ({
          testId: e,
          ...t
        }) => {
          const {
            formatMessage: a
          } = (0, i.useIntl)(), n = (0, ws.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(ks.s6, {
              children: a(Cs.character_card_a11y_rank, {
                rank: t.rank
              })
            }), (0, r.jsx)(xs.L, {
              ...n,
              "aria-hidden": !0
            })]
          })
        };
      var Gs = a(33337);
      const Fs = ({
        content: e,
        successSlide: t,
        characterList: a,
        linkAccountUrl: o,
        linkMoreAccounts: s,
        linkAccountBtn: i
      }) => {
        const l = (0, n.createRef)(),
          _ = (0, n.createRef)(),
          d = (0, n.createRef)(),
          [u, m] = (0, n.useState)(),
          [b, p] = (0, n.useState)(!1),
          [g, f] = (0, n.useState)(),
          [h, y] = (0, n.useState)(!1),
          [k, w] = (0, n.useState)(!0);
        return (0, n.useEffect)(() => {
          const e = () => {
            l?.current && p(l?.current?.scrollWidth > l?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }, [l]), (0, n.useEffect)(() => {
          m({
            nextEl: _?.current,
            prevEl: d?.current
          })
        }, [d?.current, _?.current]), (0, r.jsxs)("div", {
          className: (0, Ft.default)(ss, "_3rocp6d _3rocp6b", "onScreen" === t ? ds : "", "hidden" === t ? is : "", "visible" === t ? ps : ""),
          children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: e.introScreen.image.sources.mobile,
            className: _s,
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
                className: (0, Ft.default)(rs, "override"),
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
                      y(e?.isEnd), w(e?.isBeginning)
                    },
                    children: a.map(e => (0, r.jsx)(fs.qr, {
                      tabIndex: 0,
                      children: (0, r.jsxs)(Ns, {
                        className: "_3rocp6x",
                        children: [(0, r.jsx)(Is, {
                          src: e.mugshotUrl
                        }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, r.jsxs)(As, {
                          children: [(0, r.jsx)(zs, {
                            children: (0, r.jsx)(Es, {
                              tagSize: vs.YT.large,
                              platform: e.platform
                            })
                          }), (0, r.jsx)(Ms, {
                            userName: e.platformUsername,
                            children: e.platformUsername
                          }), (0, r.jsx)(Ts, {
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
                  children: (0, r.jsx)(Gs.A, {
                    className: "_3rocp6r",
                    to: o,
                    onClick: s,
                    children: i
                  })
                }), (0, r.jsx)(c.Button, {
                  className: "_3rocp6u",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowLeft",
                  iconRightLabel: "Previous",
                  ref: d,
                  onClick: () => {
                    g?.slidePrev()
                  },
                  isDisabled: k,
                  "data-hidden": !b
                }), (0, r.jsx)(c.Button, {
                  className: "_3rocp6v",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "Previous",
                  ref: _,
                  onClick: () => {
                    g?.slideNext()
                  },
                  isDisabled: h,
                  "data-hidden": !b
                })]
              })]
            }), (0, r.jsx)("div", {
              className: ns,
              children: (0, r.jsx)("div", {
                className: (0, Ft.default)(cs, "override"),
                children: (0, r.jsx)(es, {
                  legalText: e.legalText
                })
              })
            })]
          })]
        })
      };
      a(79955);
      const Ds = {
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
        Ls = ({
          buttonText: e = "",
          link: t = "",
          platform: n = "",
          target: o = null,
          onClick: s,
          tabIndex: i,
          className: l,
          ...c
        }) => {
          const _ = o ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            u = [Ds.platformButton, Ds[n], l].join(" "),
            m = n ? a(5328)(`./${n}.svg`) : null,
            b = (0, r.jsxs)(r.Fragment, {
              children: [m ? (0, r.jsx)("img", {
                src: m,
                alt: e
              }) : "", !m && (0, r.jsx)("div", {
                className: Ds.buttonText,
                children: e
              })]
            });
          return t ? t.startsWith("http") ? (0, r.jsx)("a", {
            href: t,
            className: u,
            target: _,
            onClick: s,
            "aria-label": e,
            tabIndex: i,
            ...c,
            children: b
          }) : (0, r.jsx)(d.NavLink, {
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
        qs = ({
          content: e,
          unlinkedSlide: t,
          returnUrl: a,
          giftId: n
        }) => {
          const o = (0, s.useRockstarTokenPing)(),
            {
              track: i
            } = (0, g.useGtmTrack)(),
            l = async e => {
              const t = (0, s.findPlatform)(e)?.onlineService;
              if (t && "sc" !== t) {
                i({
                  element_placement: "woc",
                  event: "cta_link_account",
                  o_id: n,
                  text: `link ${t}`
                });
                const e = await (0, s.generateTpaLink)({
                  pingBearer: o,
                  returnUrl: a || window.location.pathname,
                  service: t
                });
                window.location.assign(e.href)
              }
            };
          return (0, r.jsxs)("div", {
            className: (0, Ft.default)(ss, "_3rocp6e _3rocp6b", "onScreen" === t ? ds : "", "hidden" === t ? is : "", "visible" === t ? ps : ""),
            children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
              src: e.introScreen.image.sources.mobile,
              className: _s,
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
                    className: (0, Ft.default)(rs, "override"),
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
                    children: [(0, r.jsx)(Ls, {
                      buttonText: (0, s.findPlatform)("xbox")?.friendlyName,
                      platform: "xbox",
                      target: "_blank",
                      onClick: () => l("xbox"),
                      tabIndex: 0
                    }), (0, r.jsx)(Ls, {
                      buttonText: (0, s.findPlatform)("ps")?.friendlyName,
                      platform: "ps",
                      target: "_blank",
                      onClick: () => l("ps"),
                      tabIndex: 0
                    })]
                  })]
                })
              }), (0, r.jsx)("div", {
                className: ns,
                children: (0, r.jsx)("div", {
                  className: (0, Ft.default)(cs, "override"),
                  children: (0, r.jsx)(es, {
                    legalText: e.legalText
                  })
                })
              })]
            })]
          })
        },
        Ws = ({
          errorSlide: e,
          content: t
        }) => (0, r.jsxs)("div", {
          className: (0, Ft.default)(ss, "_3rocp6f _3rocp6b", "onScreen" === e ? ds : "", "hidden" === e ? is : "", "visible" === e ? ps : ""),
          children: [t?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: t.introScreen.image.sources.mobile,
            className: _s,
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
                  className: (0, Ft.default)(rs, "override"),
                  children: [(0, r.jsx)(c.Heading, {
                    level: 3,
                    children: t.errorScreen.headline
                  }), (0, r.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: t.errorScreen.body
                    }
                  })]
                }), (0, r.jsx)("div", {
                  className: os,
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
              className: ns,
              children: (0, r.jsx)("div", {
                className: (0, Ft.default)(cs, "override"),
                children: (0, r.jsx)(es, {
                  legalText: t.legalText
                })
              })
            })]
          })]
        });
      var Vs = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(Vs || {});
      const Bs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        {
          currentSite: Os
        } = (0, Vn.A)(),
        $s = (0, i.withIntl)(({
          giftId: e,
          location: t = "gtaplus_site",
          introScreen: a,
          errorScreen: o,
          unlinkedScreen: l,
          successScreen: c,
          jumpLinkId: _,
          legalText: u,
          fontTheme: m = "chalet",
          usePadding: b = !0,
          ...p
        }) => {
          const h = {
              errorScreen: {
                btnText: o?.errorButton || "",
                headline: o?.errorHeadline || "",
                body: o?.errorContent || ""
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
                    desktop: (0, Qo.useGetCdnSource)(a?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, Qo.useGetCdnSource)(a?.image?.sources?.en_us?.mobile) || null
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
            [y] = (0, d.useSearchParams)(),
            {
              data: k,
              loggedIn: w
            } = (0, g.useRockstarUser)(),
            v = (0, s.useRockstarTokenPing)(),
            x = `https://${Os?.subDomain}.rockstargames.com/account/connections`,
            j = (0, i.useIntl)(),
            {
              track: C
            } = (0, g.useGtmTrack)(),
            R = (0, n.useRef)(null),
            {
              ref: S,
              inView: N
            } = (0, f.useInView)({
              threshold: .6
            }),
            I = 1280,
            A = (0, n.createRef)(),
            [z, E] = (0, n.useState)(null),
            [M, T] = (0, n.useState)([]),
            [P, G] = (0, n.useState)(!1),
            [F, D] = (0, n.useState)(),
            [L, q] = (0, n.useState)("hidden"),
            [W, V] = (0, n.useState)("hidden"),
            [B, O] = (0, n.useState)("hidden"),
            [$, X] = (0, n.useState)("hidden"),
            [U, H] = (0, n.useState)(!1),
            [K, Y] = (0, n.useState)(Vs.landing),
            [J, Z] = (0, n.useState)(h.introScreen.image.sources.mobile || Bs),
            Q = `${document.location.pathname}${document.location.search}#${_}`,
            ee = (0, s.usePrevious)(F),
            te = (0, s.usePrevious)(w),
            {
              signInUrl: ae
            } = (0, s.useScAuthLinks)(Q),
            re = e => {
              e === Vs.landing ? (Y(Vs.landing), V("onScreen"), q("hidden"), X("hidden"), O("hidden")) : e === Vs.success ? (Y(Vs.success), V("offScreen"), q("visible"), setTimeout(() => {
                V("hidden"), X("hidden")
              }, 300), setTimeout(() => {
                q("onScreen")
              }, 100)) : e === Vs.error ? (Y(Vs.error), V("offScreen"), X("visible"), setTimeout(() => {
                V("hidden")
              }, 300), setTimeout(() => {
                X("onScreen")
              }, 100)) : e === Vs.unlinked && (Y(Vs.unlinked), V("offScreen"), O("visible"), setTimeout(() => {
                V("hidden"), X("hidden")
              }, 300), setTimeout(() => {
                O("onScreen")
              }, 100))
            };
          return (0, n.useEffect)(() => {
            let e;
            return _ && window.location.hash === `#${_}` && R.current && (e = window.setTimeout(() => {
              R.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }, 1e3)), () => window.clearTimeout(e)
          }, [_]), (0, n.useEffect)(() => {
            const e = () => {
                window.innerWidth >= 2560 && "newswire" !== t ? Z(h.introScreen.image.sources.mobile || Bs) : Z(h.introScreen.image.sources.desktop || Bs)
              },
              a = () => {
                window.innerWidth <= I && !P ? (G(!0), re(K)) : window.innerWidth > I && P && G(!1), e()
              };
            return G(window.innerWidth <= I), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, [K, P]), (0, n.useEffect)(() => {
            const e = k?.characters?.gtao;
            T(e || [])
          }, [k?.characters?.gtao]), (0, n.useEffect)(() => {
            "boolean" != typeof ee && "boolean" != typeof te || !e || F && w && (async () => {
              try {
                const {
                  result: t
                } = await (0, s.coreScApiFetch)("marketing/engagement/claim/exists", {
                  pingBearer: v,
                  query: {
                    giftUId: e
                  }
                });
                E("boolean" == typeof t && t)
              } catch (e) {
                E(!1)
              }
            })()
          }, [F, w, e]), (0, n.useEffect)(() => {
            "boolean" == typeof w ? w ? D(!0) : (D(!1), V("onScreen")) : D(!0)
          }, [w]), (0, n.useEffect)(() => {
            "boolean" == typeof z && k?.accountSynced && D(!1)
          }, [z, k?.accountSynced, D]), (0, n.useEffect)(() => {
            F || (async () => {
              M.length > 0 && z ? re(Vs.success) : re(z ? Vs.unlinked : Vs.landing)
            })()
          }, [F]), (0, n.useEffect)(() => {
            if (N && !U) {
              if (void 0 === w) return;
              C({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: w ? "signed in" : "signed out"
              }), H(!0)
            }
          }, [N, w]), (0, n.useEffect)(() => {
            "onScreen" === L && C({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e,
              text: "Almost there!"
            })
          }, [L]), (0, n.useEffect)(() => {
            "onScreen" === B && C({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e,
              text: "No Qualifying Character Found"
            })
          }, [B]), (0, n.useEffect)(() => {
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
              id: _ || "",
              ...p,
              children: (0, r.jsxs)(Yo.motion.div, {
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
                    "--engagement-image": `url(${J})`
                  }
                }), (0, r.jsx)("div", {
                  className: (0, Ft.default)("_3rocp64", F ? "loader" : ""),
                  ref: A,
                  children: F ? (0, r.jsx)("div", {
                    className: "_3rocp6w",
                    children: (0, r.jsx)(On.A, {
                      type: "SPINNING"
                    })
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [K === Vs.landing && (0, r.jsx)(gs, {
                      content: h,
                      loggedIn: w,
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
                            pingBearer: v,
                            query: a
                          }) ?? [];
                        re(r ? Vs.success : Vs.error), C({
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
                      landingSlide: W
                    }), K === Vs.success && (0, r.jsx)(Fs, {
                      content: h,
                      successSlide: L,
                      characterList: M,
                      linkAccountUrl: x,
                      linkMoreAccounts: () => {
                        C({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: x,
                          text: Zo.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: j.formatMessage(Zo.engagement_link_account)
                    }), K === Vs.unlinked && (0, r.jsx)(qs, {
                      content: h,
                      unlinkedSlide: B,
                      returnUrl: Q,
                      giftId: e
                    }), K === Vs.error && (0, r.jsx)(Ws, {
                      errorSlide: $,
                      content: h
                    })]
                  })
                })]
              })
            })
          })
        }, Jo);
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
              n = he(t?.map(e => e?.context)),
              o = t?.find(e => e.context === n) || t?.[0],
              s = o?.source?.url;
            return t && s && n ? (0, r.jsxs)(be, {
              children: [t?.map((e, t) => {
                const a = e.sys.id + t,
                  o = e.source?.url,
                  s = fe.get(e?.context || n);
                return o ? (0, r.jsx)(pe, {
                  src: o,
                  media: s,
                  width: e.source?.width,
                  height: e.source?.height
                }, a) : null
              }), (0, r.jsx)(ge, {
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
            } = W();
            if (!e) return null;
            const {
              altText: a,
              backgroundColor: n,
              backgroundImage: o,
              link: s,
              foregroundImage: i
            } = e, c = (0, l.getOptimizedRsgImage)(o, "5:1", {
              preferModernFormat: !0
            });
            return (0, r.jsx)(we, {
              testId: "www-brand-banner",
              children: (0, r.jsx)(ve, {
                altText: a ?? "",
                backgroundColor: n,
                onClick: () => {
                  t({
                    event: "card_click",
                    card_id: e.sys.id,
                    card_name: "brand banner",
                    link_url: e.link?.url
                  })
                },
                asChild: !0,
                children: (0, r.jsxs)(v.N, {
                  href: s?.url ?? "",
                  children: [(0, r.jsx)(xe, {
                    src: c?.url ?? ""
                  }), i && (0, r.jsx)(je, {
                    src: i
                  })]
                })
              })
            })
          },
          [Ze]: ({
            block: e,
            ...t
          }) => {
            const {
              blockPosition: a
            } = (0, n.useContext)(l.BlockRendererContext), {
              primaryAccentColor: o,
              secondaryAccentColor: s
            } = (0, n.useContext)(y), {
              trackEvent: i
            } = W(), c = e.cardsCollection?.items?.length ?? 0;
            if (e) return (0, r.jsxs)(Be, {
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
                  override_backgroundColor: o,
                  override_textColor: s
                })]
              }), (0, r.jsx)(Xe, {
                children: e.cardsCollection?.items?.map((t, n) => (0, r.jsx)(Je.Provider, {
                  value: {
                    totalItems: c,
                    itemIndex: n
                  },
                  children: (0, r.jsx)(He, {
                    variant: e.variant,
                    children: (0, r.jsx)(l.BlockRenderer, {
                      block: t,
                      blockPosition: a
                    }, e.sys.id)
                  }, `${t?.sys?.id}-${n}`)
                }, `${t?.sys?.id}-${n}`))
              }), (0, r.jsx)(Ye.Dots, {})]
            })
          },
          [ct]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W(), {
              landscapeViewportBehavior: a,
              scrimColor: o,
              video: s,
              overlayElements: i,
              playbackBehavior: c
            } = e, {
              primaryAccentColor: _,
              secondaryAccentColor: d
            } = (0, n.useContext)(y), u = (0, le.Ub)(C.f.landscape), m = "play_once" === c, b = (0, n.useCallback)(e => t({
              event: "cta_other",
              text: "toggle " + (e ? "play" : "pause"),
              element_placement: "decorative video"
            }), []);
            if (!s) return null;
            const p = s.videoFilesCollection?.items?.find(e => "desktop" === e.context),
              g = s.videoFilesCollection?.items?.find(e => "mobile" === e.context),
              f = u ? p : g,
              h = f?.url ?? f?.upload?.url,
              k = f?.posterImage?.source?.url;
            return (0, r.jsxs)(ot, {
              playOnce: m,
              landscapeViewportBehavior: a,
              scrimColor: o,
              children: [i && (0, r.jsx)(lt, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: i
                })
              }), h && (0, r.jsx)(st, {
                appearance: _ ? "accent" : "primary",
                override_backgroundColor: _,
                override_textColor: d,
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
          }) => e ? (0, r.jsx)(dt, {
            gradientStyle: e.style || "",
            thickness: e.thickness || "dimensions_25"
          }) : null,
          [Pt]: ({
            block: e
          }) => {
            const [t] = (0, i.getLocale)(), {
              trackEvent: a
            } = W(), o = e.contentCollection?.items, l = o?.map(e => e.tinaId), c = (0, n.useMemo)(() => ((e, t) => {
              const a = ((e, t) => e.reduce((e, a) => e + ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}", allowNull: true) {\n        ...postFields\n    }\n`)(a, t), ""))(e, t);
              return s.gql`
        ${bt}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(l, t.iso), [l]), {
              loading: _,
              data: d,
              error: u
            } = (0, s.useQuery)(c, {
              autoSetError: !1
            }), m = (e, t) => () => {
              const r = e.block,
                n = {
                  position: t,
                  position_max: b.length,
                  event: "card_click",
                  card_name: r?.url.split("/").pop() ?? r?.title,
                  card_id: e.tinaId,
                  link_url: r?.url
                };
              a(n)
            };
            if (u) return (0, mt.captureMessage)("Failed to load Newswire Unit", {
              level: mt.Severity.Error,
              extra: {
                error: u
              }
            }), null;
            if (!e || !o) return null;
            const b = o?.map(e => ({
              id: e.sys.id,
              tinaId: e.tinaId,
              block: d?.[`post${e.tinaId}`] ? d[`post${e.tinaId}`] : null
            })).filter(e => !!e.tinaId && e?.block?.created);
            if (_ || !b?.length) return null;
            const p = b[0];
            return (0, r.jsx)(It, {
              testId: "editorial-grid-module",
              children: (0, r.jsxs)(At, {
                children: [(0, r.jsx)(N, {
                  showOn: "tabletMediumAndSmaller",
                  children: (0, r.jsx)(zt, {
                    testId: "newswire-carousel",
                    onCarouselSwipe: () => a({
                      event: "carousel_swipe"
                    }),
                    children: b?.map((e, t) => (0, r.jsx)(Et, {
                      children: (0, r.jsx)(Rt, {
                        loading: _,
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
                  children: (0, r.jsx)(Mt, {
                    testId: "primary-story",
                    children: (0, r.jsx)(Rt, {
                      loading: _,
                      data: p.block,
                      id: p.id,
                      layout: "primary",
                      aspect: "wide",
                      handleStoryClick: m(p, 1),
                      testId: p.tinaId
                    })
                  })
                }), (0, r.jsx)(N, {
                  showOn: "tabletMediumAndLarger",
                  children: (0, r.jsx)(Tt, {
                    children: b?.slice?.(1)?.map((e, t) => (0, r.jsx)(Rt, {
                      loading: _,
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
            const [t] = (0, i.getLocale)(), a = e.tinaId, o = (0, n.useMemo)(() => ((e, t) => {
              const a = ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}", allowNull: true) {\n        ...postFields\n    }\n`)(e, t);
              return s.gql`
        ${St}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(a, t.iso), [a]), {
              loading: l,
              data: c,
              error: _
            } = (0, s.useQuery)(o, {
              autoSetError: !1
            });
            if (_) return (0, mt.captureMessage)("Failed to load Newswire Unit", {
              level: mt.Severity.Error,
              extra: {
                error: _
              }
            }), null;
            if (!e) return null;
            const d = {
              tinaId: a,
              block: c?.[`post${a}`] ? c[`post${a}`] : null
            };
            return d.block ? (0, r.jsx)(Rt, {
              loading: l,
              data: d.block,
              id: e.sys.id,
              layout: "secondary",
              aspect: "wide"
            }) : null
          },
          [ma]: ({
            block: e
          }) => (0, r.jsx)(L.Provider, {
            value: {
              analyticsData: {
                element_placement: `featured game section: ${e.game?.title}`
              }
            },
            children: (0, r.jsx)(ua, {
              block: e
            })
          }),
          [wa]: ({
            block: e
          }) => {
            const t = (0, le.Ub)("(max-width: 768px)"),
              a = (0, n.useMemo)(() => e?.layout?.breakpointsCollection?.items.map(e => ({
                mediaQuery: e.mediaQuery || "all",
                behavior: e.behavior || "wrap",
                alignment: e.alignment || "left",
                columns: e.columns
              })), [e.layout]);
            if (e) return e?.isCollapsible && t ? (0, r.jsx)(ya, {
              breakpoints: a,
              children: (0, r.jsxs)(Be, {
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
          [ja]: ({
            block: e
          }) => {
            const {
              colorMode: t
            } = (0, n.useContext)(y);
            if (!e) return;
            const {
              contentCollection: a,
              gap: o,
              theme: s
            } = e;
            if (!a?.items?.length) return null;
            const i = e.theme?.colorMode ?? t,
              c = (e => {
                if (!e) return "";
                const t = e?.replace("gap_", "");
                return x.LU.global.spacing.gap[t] ? x.LU.global.spacing.gap[t] : ""
              })(o);
            return (0, r.jsx)(k, {
              theme: s,
              children: (0, r.jsx)(xa, {
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
          }) => (0, r.jsx)(L.Provider, {
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
            } = (0, n.useContext)(l.BlockRendererContext), a = (0, le.Ub)(C.f.desktopSmallAndLarger);
            if (!e?.image) return null;
            const {
              image: o,
              title: s,
              titleSize: i,
              description: _,
              descriptionSize: d,
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
            } [d ?? "body-md"];
            return (0, r.jsxs)(pr, {
              children: [(0, r.jsx)(gr, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: o,
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
                }), _ && (0, r.jsx)(l.RsgMdTextComponent, {
                  markdown: _,
                  bodySize: b
                })]
              })]
            })
          },
          [Vr]: ({
            block: e
          }) => {
            const {
              totalItems: t,
              itemIndex: a
            } = (0, n.useContext)(Je), {
              trackEvent: o
            } = W(), s = !!e.cta?.link?.url, i = (0, r.jsxs)(Mr, {
              gradientColor: e?.gradientColor,
              interactive: !0,
              children: [(0, r.jsx)(Tr, {
                asChild: !0,
                children: (0, r.jsx)(Wt, {
                  alt: e?.ariaLabel,
                  src: e.backgroundImage,
                  context: "2:3"
                })
              }), (0, r.jsx)(Fr, {
                image: e.logo,
                size: e.logoSize
              }), (0, r.jsxs)(Pr, {
                children: [e.text && (0, r.jsx)(Lr, {
                  asChild: !0,
                  children: (0, r.jsx)(c.Body, {
                    children: e.text
                  })
                }), e.cta && (0, r.jsx)(qr, {
                  appearance: e.cta.appearance,
                  iconLeft: e.cta.iconLeft?.icon,
                  iconRight: e.cta.iconRight?.icon,
                  override_backgroundColor: e.cta.backgroundColor,
                  size: "MD",
                  asChild: !0,
                  children: (0, r.jsx)("span", {
                    className: Wr({
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
                o({
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
          [nn]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W(), {
              blockPosition: a
            } = (0, n.useContext)(l.BlockRendererContext), o = (e, {
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
            } = e, _ = s?.items ?? [], d = _.map(t => ({
              label: t.title,
              analyticsData: "analyticsData" in t ? t.analyticsData : e.analyticsData
            }));
            return (0, r.jsxs)(Hr, {
              items: _,
              children: [(0, r.jsx)(Qr, {
                mobileAspectRatio: i,
                desktopAspectRatio: c,
                children: !!_.length && _.map((e, t) => (0, r.jsx)(tn, {
                  index: t,
                  children: (0, r.jsx)(pr, {
                    children: (0, r.jsx)(gr, {
                      children: (0, r.jsx)(rn, {
                        index: t,
                        children: (0, r.jsx)(l.BlockRenderer, {
                          block: e.image,
                          blockPosition: a
                        })
                      })
                    })
                  })
                }, e?.sys?.id))
              }), !!_.length && (0, r.jsx)(Yr, {
                children: d.map((e, t) => (0, r.jsx)(Zr, {
                  appearance: "ghost",
                  index: t,
                  onClick: o(t, e),
                  children: e.label
                }, e.label))
              })]
            })
          },
          [yn]: ({
            block: e
          }) => (0, r.jsx)(L.Provider, {
            value: {
              analyticsData: {
                element_placement: "images marquee section"
              }
            },
            children: (0, r.jsx)(hn, {
              block: e
            })
          }),
          [kn]: ({
            block: e,
            ...t
          }) => {
            const a = (0, n.useContext)(l.BlockRendererContext),
              {
                blockPosition: o
              } = a,
              {
                trackEvent: s
              } = W(),
              {
                primaryAccentColor: i,
                secondaryAccentColor: _
              } = (0, n.useContext)(y),
              d = t?.tabIndex,
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
                  position: o?.blockIndex && Number.isFinite(o.blockIndex) ? o.blockIndex + 1 : void 0
                }
              };
            if (!e?.image) return null;
            const {
              image: m,
              caption: b,
              downloadButton: p,
              thumbnailAspectRatio: g,
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
                tabIndex: d,
                className: "_1ynyi8s0",
                style: {
                  aspectRatio: g,
                  ...(0, x.DI)({
                    [c.Lightbox.CssVars.TriggerBorder]: i,
                    [c.Lightbox.CssVars.TriggerIconBg]: i,
                    [c.Lightbox.CssVars.TriggerIconFg]: _,
                    [c.Lightbox.CssVars.TriggerIconBgActive]: i,
                    [c.Lightbox.CssVars.TriggerIconFgActive]: _
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
                    }), h && (0, r.jsx)(c.Lightbox.Zoom, {}), p && (0, r.jsx)(c.Lightbox.Download, {})]
                  })]
                })]
              })]
            })
          },
          [wn]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W(), a = e?.image?.imageFilesCollection?.items, n = e?.image?.altText, o = he(a?.map(e => e?.context)), s = a?.find(e => e.context === o) || a?.[0], i = s?.source?.url, l = e.link?.url;
            return a && i && o && l ? (0, r.jsx)("div", {
              className: "_1eo5pzj0",
              children: (0, r.jsx)(v.N, {
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
                      n = e.source?.url,
                      s = fe.get(e?.context || o);
                    return n ? (0, r.jsx)(pe, {
                      src: n,
                      media: s,
                      width: e.source?.width,
                      height: e.source?.height
                    }, a) : null
                  }), (0, r.jsx)(ge, {
                    src: i,
                    alt: n
                  })]
                })
              })
            }) : null
          },
          [Wn]: ({
            block: e
          }) => {
            const t = (0, i.useIntl)(),
              {
                trackEvent: a
              } = W();
            if (!e) return null;
            const n = e.cardsCollection?.items || [],
              [o, ...s] = n,
              l = (e, t) => ie[e]?.[t] ?? "1:1",
              c = (e, t) => () => {
                a({
                  event: "card_click",
                  card_id: e?.sys?.id,
                  position: t + 1,
                  position_max: n.length,
                  ...e.link?.url && {
                    link_url: e.link?.url
                  },
                  ...e.analyticsData
                }, e.cta)
              };
            return (0, r.jsxs)(Cn, {
              children: [(0, r.jsx)(N, {
                showOn: "mobile",
                forceMount: !0,
                children: (0, r.jsxs)(Rn, {
                  gridType: e.variant,
                  children: [(0, r.jsx)(Nn, {
                    type: se(0),
                    children: (0, r.jsx)(v.N, {
                      href: o.link?.url,
                      target: "_blank",
                      title: t.formatMessage(Fn.masonry_grid_external_store_link),
                      onClick: () => c(o, 0),
                      children: (0, r.jsx)(qn, {
                        card: o,
                        context: "4:5",
                        size: "medium"
                      })
                    })
                  }), (0, r.jsx)(In, {
                    defaultSlide: 0,
                    onCarouselSwipe: () => a({
                      event: "carousel_swipe"
                    }),
                    children: s.map((e, a) => (0, r.jsx)(An, {
                      children: (0, r.jsx)(v.N, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Fn.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: Dn,
                        children: (0, r.jsx)(qn, {
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
                children: (0, r.jsx)(Sn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = se(a),
                      o = l("tabletSmall", n),
                      s = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(Nn, {
                      type: n,
                      children: (0, r.jsx)(v.N, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Fn.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: Dn,
                        children: (0, r.jsx)(qn, {
                          card: e,
                          context: o,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(N, {
                showOn: "tabletMedium",
                forceMount: !0,
                children: (0, r.jsx)(Sn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = se(a),
                      o = l("tabletMedium", n),
                      s = 0 === a ? "medium" : "small";
                    return (0, r.jsx)(Nn, {
                      type: n,
                      children: (0, r.jsx)(v.N, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Fn.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: Dn,
                        children: (0, r.jsx)(qn, {
                          card: e,
                          context: o,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(N, {
                showOn: "tabletLarge",
                forceMount: !0,
                children: (0, r.jsx)(Sn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = se(a),
                      o = l("tabletLarge", n),
                      s = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(Nn, {
                      type: n,
                      children: (0, r.jsx)(v.N, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Fn.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: Dn,
                        children: (0, r.jsx)(qn, {
                          card: e,
                          context: o,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(N, {
                showOn: "desktopSmallAndLarger",
                forceMount: !0,
                children: (0, r.jsx)(Sn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = se(a),
                      o = l("desktopSmallAndLarger", n),
                      s = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(Nn, {
                      type: n,
                      children: (0, r.jsx)(v.N, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Fn.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: Dn,
                        children: (0, r.jsx)(qn, {
                          card: e,
                          context: o,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              })]
            })
          },
          [ro]: ({
            block: e,
            renderSectionWrapper: t
          }) => {
            const a = (0, i.useIntl)(),
              o = (0, s.useRockstarTokenPing)(),
              {
                loggedIn: _,
                data: u,
                loading: m
              } = (0, g.useRockstarUser)(),
              b = (0, d.useNavigate)(),
              [{
                iso: p
              }] = (0, i.getLocale)(),
              f = (0, s.toScLocaleString)(p),
              {
                login: h
              } = (0, s.getConfigForDomain)(),
              y = (0, Vn.A)(),
              [k] = (0, d.useSearchParams)(),
              w = "true" === k.get("marketing"),
              [v, x] = (0, n.useState)(!0),
              j = {
                lang: f,
                location: location.pathname,
                login: h,
                navigate: b,
                www: y.sites.www
              },
              C = {
                ...u,
                isFromAuth: w,
                loggedIn: _,
                pingBearer: o,
                userLoading: m
              },
              R = Jn(j, C),
              {
                dialog: S,
                urls: N,
                handleSubscribeButton: I,
                isButtonLoading: A,
                isLoading: z,
                isSubscribed: E,
                setShowDialog: M,
                showDialog: T
              } = R;
            let P;
            P = null === _ || _ && z ? "loading" : "ready";
            const G = "ready" == (m ? "loading" : "ready"),
              F = "ready" === P;
            if ((0, n.useEffect)(() => {
                G && x(_ && !E || !_)
              }, [G, _, E]), (0, n.useEffect)(() => {
                t && G && F && t(T || v)
              }, [v, t, G, F, T]), !e) return null;
            const D = S?.buttons || [{
                buttonText: a.formatMessage(Un.ns_ok_button_text),
                onClick: () => {
                  M(!1)
                },
                testId: "ok-btn",
                style: "secondary"
              }, {
                buttonText: S?.showManagePreferences ? a.formatMessage(Un.ns_manage_prefs_button_text) : "",
                isLink: !0,
                link: N.preferences,
                testId: "preferences-btn",
                style: "ghost"
              }],
              L = (e, t) => (0, r.jsx)(c.Heading, {
                level: 3,
                className: "_4fo4mk1",
                children: t
              }),
              q = {
                [l.ContentfulTypes.BLOCKS.HEADING_1]: L,
                [l.ContentfulTypes.BLOCKS.HEADING_2]: L,
                [l.ContentfulTypes.BLOCKS.HEADING_3]: L,
                [l.ContentfulTypes.BLOCKS.HEADING_4]: L,
                [l.ContentfulTypes.BLOCKS.HEADING_5]: L,
                [l.ContentfulTypes.BLOCKS.HEADING_6]: L
              },
              W = _ && !F;
            return (0, r.jsxs)(r.Fragment, {
              children: [v && (0, r.jsx)(Zn, {
                children: W ? (0, r.jsx)(On.A, {}) : (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(Qn, {
                    asChild: !0,
                    children: e.image && (0, r.jsx)(ue, {
                      src: e.image
                    })
                  }), (0, r.jsxs)(eo, {
                    children: [e.textContent && (0, r.jsx)(to, {
                      children: (0, r.jsx)(l.RsgMdTextComponent, {
                        markdown: e.textContent,
                        rsgRichTextOptions: {
                          renderNode: q
                        }
                      })
                    }), (0, r.jsx)(ao, {
                      onClick: I,
                      isDisabled: A,
                      children: e.cta?.text
                    })]
                  })]
                })
              }), S && (0, r.jsx)(Bn.A, {
                icon: S.icon,
                title: a.formatMessage(S.heading),
                secondaryText: a.formatMessage(S.bodyText),
                closeOnOutsideClick: S.closeOnOutsideClick,
                buttons: D,
                showDialog: T,
                onClose: () => M(!1)
              })]
            })
          },
          [wo]: ({
            block: e
          }) => {
            const {
              trackEvent: t,
              trackRichTextHyperlink: a
            } = W();
            return (0, r.jsxs)(_o, {
              colorMode: "dark",
              backgroundColor: e.backgroundColor,
              gradientEnabled: e.enableGradient,
              imagePlacement: e.imagePlacement,
              children: [(0, r.jsx)(mo, {
                image: e.backgroundImage
              }), (0, r.jsxs)(uo, {
                contentAlignment: e.contentAlignment,
                children: [(0, r.jsx)(ko, {
                  children: e.badge
                }), (0, r.jsx)(bo, {
                  image: e.foregroundImage,
                  size: e.foregroundImageSize
                }), (0, r.jsxs)(ho, {
                  children: [(0, r.jsx)(go, {
                    level: 4,
                    children: e.headline
                  }), (0, r.jsx)(fo, {
                    size: "MD",
                    children: e.description
                  })]
                }), e.cta && (0, r.jsx)(po, {
                  appearance: e.cta.appearance,
                  override_backgroundColor: e.cta.backgroundColor,
                  size: "MD",
                  onPress: (n = e.cta, () => t(n.analyticsData, n)),
                  asChild: !0,
                  children: (0, r.jsx)("a", {
                    href: e.cta.link?.url,
                    children: e.cta.text
                  })
                }), (0, r.jsx)(yo, {
                  markdown: e.legalText,
                  onHyperlinkClick: e => a(e)
                })]
              })]
            });
            var n
          },
          [q]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, n.useContext)(l.BlockRendererContext), {
              trackEvent: a,
              useTrackPageSectionImpression: o
            } = W(), {
              ref: c
            } = o(e.analyticsData), [_, d] = (0, n.useState)(!1), [u, m] = (0, n.useState)(!0), {
              formatMessage: b
            } = (0, i.useIntl)(), {
              isMobile: p
            } = (0, s.useWindowResize)(), g = e.title, f = e.cta, y = g || f;
            (0, n.useEffect)(() => {
              if (e?.cta?.link?.url) try {
                new URL(e.cta.link.url).origin !== window.location.origin && d(!0)
              } catch {
                d(!1)
              }
            }, [e]);
            const v = (0, n.useCallback)(e => {
              m(e)
            }, []);
            if (!e || !u) return null;
            const x = {
                topPaddingMultiplier: D[e.topPadding] ?? D.default,
                bottomPaddingMultiplier: D[e.bottomPadding] ?? D.default,
                backgroundCss: e.backgroundCss,
                backgroundImage: p ? e.mobileBackgroundImage?.source?.url : e.desktopBackgroundImage?.source?.url,
                className: (0, h.m)(e.theme?.colorMode ?? "dark")
              },
              j = (0, r.jsxs)(M, {
                ref: c,
                ...x,
                children: [y && (0, r.jsxs)(T, {
                  children: [g && (0, r.jsx)(P, {
                    level: 2,
                    children: g
                  }), f?.text && f.link?.url && (0, r.jsx)(G, {
                    label: `${f.text}${_&&b(w.aria_label_open_new_window)}`,
                    url: f.link.url,
                    isExternal: _,
                    iconRight: f.iconRight?.icon,
                    onClick: () => a(f?.analyticsData, f),
                    children: f.text
                  })]
                }), e.contentCollection?.items && (0, r.jsx)(F, {
                  children: e.contentCollection.items?.map(e => (0, r.jsx)(l.BlockRenderer, {
                    block: e,
                    blockPosition: t,
                    renderSectionWrapper: v
                  }, e.sys?.id))
                })]
              });
            let C;
            return C = (0, r.jsx)(k, {
              theme: e.theme,
              children: j
            }), C
          },
          [So]: ({
            block: e
          }) => {
            if (!e) return null;
            const {
              cta: t
            } = e;
            return (0, r.jsx)(vo, {
              children: (0, r.jsxs)(xo, {
                children: [(0, r.jsxs)(jo, {
                  children: [(0, r.jsx)(Co, {
                    altText: e.title
                  }), (0, r.jsx)(Ro, {
                    children: e.description
                  })]
                }), t && (0, r.jsx)(ae, {
                  block: t,
                  size: "LG"
                })]
              })
            })
          },
          [Wo]: ({
            block: e
          }) => {
            const {
              primaryAccentColor: t,
              headerTextColor: a
            } = (0, n.useContext)(y), {
              alignment: o,
              badge: s,
              eyebrow: i,
              eyebrowSize: c,
              header: _,
              headerSize: d,
              body: u,
              bodySize: m,
              ctasCollection: b,
              footnote: p,
              headerTextWrap: g,
              bodyTextWrap: f
            } = e;
            return (0, r.jsxs)(To, {
              align: o || "left",
              children: [s && (0, r.jsx)(Po, {
                children: s
              }), (0, r.jsxs)(Go, {
                bodyTextWrap: f,
                children: [i && (0, r.jsx)(Fo, {
                  size: c,
                  children: i
                }), _ && (0, r.jsx)(Do, {
                  headerSize: d,
                  textColor: a,
                  headerTextWrap: g,
                  children: _
                }), u && (0, r.jsx)(Lo, {
                  asChild: !0,
                  children: (0, r.jsx)(l.RsgMdTextComponent, {
                    markdown: u,
                    bodySize: m
                  })
                })]
              }), b && b?.items?.length > 0 && (0, r.jsx)(qo, {
                children: b.items.map(e => (0, r.jsx)(ae, {
                  block: e,
                  backgroundColor: t
                }, e.text))
              }), p && (0, r.jsx)(l.RsgMdTextComponent, {
                markdown: p,
                bodySize: "XS"
              })]
            })
          },
          [Xo]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, n.useContext)(l.BlockRendererContext);
            if (!e?.content) return null;
            const {
              image: a,
              content: o,
              variant: s
            } = e;
            return (0, r.jsxs)(Bo, {
              variant: s ?? "image_right",
              children: [(0, r.jsx)(Oo, {
                altText: a?.altText ?? "",
                src: a?.source?.url ?? ""
              }), (0, r.jsx)($o, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: o,
                  blockPosition: t
                })
              })]
            })
          },
          [Ko]: ({
            block: e
          }) => {
            if (e) return (0, r.jsx)(r.Fragment, {
              children: e.videos?.referencesCollection?.items.map(e => {
                if ("Link" === e.type && e?.link?.url) {
                  const t = new URL(e?.link?.url),
                    a = "www.rockstargames.com" === t.hostname,
                    n = t.pathname.split("/");
                  if (a && "videos" === n[1]) {
                    const t = n[2];
                    return (0, r.jsx)(Ho(), {
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
        Js = ({
          data: e
        }) => (0, r.jsx)(m, {
          children: (0, r.jsx)(l.PageRenderer, {
            data: e.items[0],
            customBlocks: Ys,
            children: (0, r.jsx)(J, {})
          })
        }),
        Zs = ({
          slug: e
        }) => {
          let t = e;
          const {
            data: a,
            loading: n
          } = (0, l.useContentfulQuery)({
            query: _.wwwPageQuery,
            variables: {
              slug: t
            }
          });
          return !n && a && a.wwwPageCollection.items[0] ? (0, r.jsx)(Js, {
            data: a.wwwPageCollection
          }) : null
        },
        Qs = (ei = ({
          slug: e
        }) => {
          const [{
            iso: t
          }] = (0, i.getLocale)(), a = (0, n.useMemo)(() => (0, s.createDeferredScrollTriggerRefresh)(), []);
          return (0, n.useEffect)(() => () => {
            a.cleanup()
          }, [a]), (0, r.jsx)(o.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            className: "_1dx15kv0",
            locale: t,
            onPlatformScaleChange: a.refresh,
            children: (0, r.jsx)(Zs, {
              slug: e
            })
          })
        }, (0, i.withIntl)(ei, Q));
      var ei
    },
    68196(e, t, a) {
      "use strict";
      var r = a(57202),
        n = a(50573);
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
      a.d(t, ["A", 0, () => {
        let e;
        const {
          location: t
        } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = o.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === a && (e = {
          site: t,
          subDomain: r
        }, !0)) >= 0), i = o[s >= 0 ? s : 0], l = o.find(e => e.id === i.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, n.A)((0, r.A)({}, l, {
          currentSite: e
        }, i), "fallbackEnvironment")
      }, "C", 0, {
        www: "www",
        socialClub: "socialClub",
        support: "support",
        store: "store",
        circoloco: "circoloco",
        supportNew: "support"
      }])
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

      function n(e) {
        const t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(r, e)) {
          const t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      n.keys = function() {
        return Object.keys(r)
      }, n.resolve = o, e.exports = n, n.id = 5328
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