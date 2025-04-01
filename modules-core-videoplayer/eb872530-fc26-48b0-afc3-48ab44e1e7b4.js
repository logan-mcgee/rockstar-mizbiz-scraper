! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "eb872530-fc26-48b0-afc3-48ab44e1e7b4", e._sentryDebugIdIdentifier = "sentry-dbid-eb872530-fc26-48b0-afc3-48ab44e1e7b4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [7459], {
    67459: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        RockstarVideoPlayer: () => H,
        VideoField: () => O,
        default: () => K
      });
      var o = n(16188),
        t = n.n(o),
        i = n(95966),
        l = n(53178),
        r = n.n(l),
        s = n(27835),
        d = n.n(s),
        c = n(17529),
        m = n.n(c),
        A = n(72162),
        p = n.n(A),
        u = n(82510),
        f = n.n(u),
        g = n(90675),
        b = n.n(g),
        v = n(53627),
        y = {};
      y.styleTagTransform = b(), y.setAttributes = p(), y.insert = m().bind(null, "head"), y.domAPI = d(), y.insertStyleElement = f(), r()(v.A, y);
      const C = v.A && v.A.locals ? v.A.locals : void 0;
      var h = n(73855);
      const k = e => {
        let {
          color: a
        } = e;
        return (0, h.jsxs)("div", {
          className: C.loadingDots,
          style: {
            "--loader-color": a
          },
          children: [(0, h.jsx)("div", {
            className: C.loadingDotsDot
          }), (0, h.jsx)("div", {
            className: C.loadingDotsDot
          }), (0, h.jsx)("div", {
            className: C.loadingDotsDot
          })]
        })
      };
      var x = n(81569);
      const w = {
        alt: "Images Need Alt Text",
        badge: null,
        splitter: " ",
        role: "",
        caption: ""
      };
      var _ = n(62229);
      const B = (0, i.setContextItem)({
          context: (0, _.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: I
        } = B,
        D = e => e.full_src,
        E = e => {
          const a = e?.previewSrc ?? e?.preview_src ?? e;
          return a?.startsWith("http") ? a : `${(0,i.getCdnPrefix)(!1)}${a}`
        },
        F = e => e.meta.uploads_directory,
        S = function() {
          return {
            name: "key",
            component: "text",
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              label: "TranslationKey",
              description: "This value must begin with `key_` and MUST BE UNIQUE."
            }
          }
        },
        N = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, h.jsx)("hr", {})
          }
        },
        z = e => {
          let {
            name: a,
            label: n = a
          } = e;
          return {
            name: a,
            label: n,
            component: "group",
            description: "If responsive, only the Mobile Source is needed.",
            fields: [{
              name: "mobile",
              label: "Mobile Source",
              component: "image",
              clearable: !0,
              uploadDir: F,
              parse: D,
              previewSrc: E
            }, {
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: F,
              parse: D,
              previewSrc: E
            }]
          }
        },
        T = [{
          ...N("Background Image Gradient")
        }, {
          ... function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
            return {
              label: e,
              name: e.toLowerCase().split(" ").join("_"),
              component: () => (0, h.jsx)("h3", {
                style: {
                  marginBottom: "var(--tina-padding-small)",
                  "--color-h3": "var(--tina-color-grey-8)"
                },
                children: e
              })
            }
          }("Background Image Gradient")
        }, {
          name: "style.--gradient-height",
          label: "Gradient Height",
          description: "Select the height of the gradient. Smaller size means less of the selected gradient color(s).",
          component: "select",
          options: [{
            value: "",
            label: "Off"
          }, {
            value: "3",
            label: "xs"
          }, {
            value: "5",
            label: "small"
          }, {
            value: "10",
            label: "medium"
          }, {
            value: "15",
            label: "large"
          }, {
            value: "20",
            label: "xl"
          }]
        }, {
          name: "style.--gradient-start-color",
          label: "Top Color",
          component: "color"
        }, {
          name: "style.--gradient-end-color",
          label: "Bottom Color",
          component: "color"
        }, {
          ...N("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        L = e => {
          let {
            game: a = null,
            label: n = "Image Configuration"
          } = e;
          const o = [q({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), q({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, z({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => z({
              name: e
            })))
          }, q({
            name: "frame",
            label: "Choose Frame",
            component: "select",
            options: [{
              value: "",
              label: "None"
            }, {
              value: "frame_1",
              label: "Frame 1"
            }, {
              value: "frame_2",
              label: "Frame 2"
            }, {
              value: "frame_3",
              label: "Frame 3"
            }, {
              value: "frame_4",
              label: "Frame 4"
            }, {
              value: "frame_5",
              label: "Frame 5"
            }, {
              value: "frame_6",
              label: "Frame 6"
            }]
          }), q({
            name: "caption",
            label: "Caption",
            component: "html"
          }), S({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== a && "rdr2" !== a || o.push({
            name: "role",
            label: "Role",
            description: "Add a role icon.",
            component: "select",
            options: [{
              value: "",
              label: "None"
            }, {
              value: "bounty",
              label: "Bounty Hunter"
            }, {
              value: "collector",
              label: "Collector"
            }, {
              value: "moonshiner",
              label: "Moonshiner"
            }, {
              value: "naturalist",
              label: "Naturalist"
            }, {
              value: "trader",
              label: "Trader"
            }]
          }), o.push({
            label: "Border Style",
            name: "style.--image-border-style",
            description: "(ex. 1px solid #fff)",
            component: "text"
          }, {
            label: "Border Radius",
            name: "style.--image-border-radius",
            component: "text"
          }, {
            name: "style.--background-image-size",
            label: "Background Size",
            component: "text"
          }, {
            name: "style.--background-image-repeat",
            label: "Background Repeat",
            component: "select",
            options: ["", "repeat", "no-repeat", "repeat-y", "repeat-x", "initial", "inherit"]
          }), "Background Image" === n && o.push(...T), {
            name: "image",
            label: n,
            component: "group",
            fields: o,
            defaultItem: () => Q(w),
            itemProps: e => J(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      n(81788);
      const j = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, h.jsx)("hr", {})
        }
      };
      var $ = n(92255),
        U = n(36877),
        G = {};
      G.styleTagTransform = b(), G.setAttributes = p(), G.insert = m().bind(null, "head"), G.domAPI = d(), G.insertStyleElement = f(), r()(U.A, G);
      const M = U.A && U.A.locals ? U.A.locals : void 0,
        R = e => {
          let {
            style: a,
            width: n,
            height: o,
            resizable: t,
            field: i,
            input: l,
            meta: r,
            name: s,
            label: d,
            description: c,
            error: m,
            children: A
          } = e;
          const p = () => t ? (0, h.jsx)($.c, {
            defaultSize: {
              width: n || "100%",
              height: o || "500px"
            },
            style: {
              paddingBottom: "10px"
            },
            children: (0, _.cloneElement)(A, ...l)
          }) : A;
          return (0, h.jsxs)("div", {
            className: `${M.FieldWrapper_sc_custom} FieldWrapper-sc-custom jpQZXK`,
            style: a,
            children: [(0, h.jsxs)("label", {
              className: `${M.FieldLabel_sc_custom} FieldLabel-sc-custom dzLxXV`,
              htmlFor: s ?? i?.name,
              children: [d ?? i?.label, (0, h.jsx)("span", {
                className: `${M.FieldDescription_sc_custom} FieldDescription-sc-custom cyKzVM`,
                children: c ?? i?.description
              })]
            }), (0, h.jsx)(p, {}), (m || r?.error) && (0, h.jsx)("div", {
              className: "FieldError_sc_custom",
              children: m ?? r?.error
            })]
          })
        },
        V = (j("Background Image Gradient"), function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          e.toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), j("Background Image Gradient"), () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => Q({
            hero: !1
          })
        }));
      n(61398);
      const Q = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,x.v4)()}`
          }
        },
        J = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        q = e => ({
          ...e,
          name: `_memoq.${e.name}`
        }),
        P = i.gql`
query VideosList($locale: String!, $cache: Boolean = true, $limit: Int) {
    videos(locale: $locale, limit: $limit) {
        results {
            id
            title
            game {
                title
            }
        }
    }
}
`,
        W = e => {
          let {
            field: a,
            input: n,
            meta: o
          } = e;
          const {
            data: l
          } = (0, i.useQuery)(P, {
            variables: {
              limit: 1e3
            }
          }), r = t()(l?.videos?.results).groupBy("game.title").map(((e, a) => ({
            gameTitle: a,
            videos: e.map((e => ({
              id: e.id,
              title: e.title
            })))
          }))).value();
          return (0, h.jsx)(R, {
            name: n.name || a.name || a.label,
            label: a.label,
            description: a.description,
            meta: o,
            children: l && r?.length ? (0, h.jsxs)("select", {
              ...n,
              children: [(0, h.jsx)("option", {
                value: "",
                children: "-- Select a video --"
              }), r.map((e => (0, h.jsx)("optgroup", {
                label: e.gameTitle,
                children: e.videos.map((e => (0, h.jsxs)("option", {
                  value: e.id,
                  children: ["(", e.id, ")", " ", e.title]
                }, e.id)))
              }, e.gameTitle)))]
            }) : (0, h.jsx)(k, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        O = function() {
          let {
            label: e = "Video",
            name: a = "id"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: e,
            name: a,
            component: e => {
              let {
                field: a,
                input: n,
                meta: o
              } = e;
              return (0, h.jsx)(W, {
                field: a,
                input: n,
                meta: o
              })
            }
          }
        },
        H = () => ({
          label: "Video",
          fields: [{
            label: "Name",
            name: "name",
            component: "text",
            description: "Block label for internal use only"
          }, O(), {
            name: "autoplay",
            label: "Auto Play",
            description: "Should the video play as soon as it is loaded?",
            component: "toggle"
          }, V(), L({
            label: "Background Image"
          })],
          defaultItem: () => Q({
            wrapper: !0,
            autoplay: !1
          }),
          itemProps: e => J(e, {
            label: e?.name ? `${e.name} [Video]` : "New [Video]"
          })
        }),
        K = H
    },
    53627: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => r
      });
      var o = n(42587),
        t = n.n(o),
        i = n(15081),
        l = n.n(i)()(t());
      l.push([e.id, "@keyframes rockstargames-modules-core-videoplayerb48ab03a26289abeddf8b8e89b8c8a29{0%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}to{opacity:.4;transform:scale(1)}}.rockstargames-modules-core-videoplayere83fe07aa054242e9023d2f9e7a3fd25{display:block;text-align:center;width:100%}.rockstargames-modules-core-videoplayera19bcd2b98d91e60c43b9de146e20f4e{animation:rockstargames-modules-core-videoplayerb48ab03a26289abeddf8b8e89b8c8a29 1.5s ease-in-out infinite;background-color:var(--loader-color,#000);border-radius:10px;display:inline-block;height:10px;width:10px}.rockstargames-modules-core-videoplayera19bcd2b98d91e60c43b9de146e20f4e:nth-child(2){animation-delay:.5s;margin:0 5px}.rockstargames-modules-core-videoplayera19bcd2b98d91e60c43b9de146e20f4e:nth-child(3){animation-delay:1s}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/DotLoader/index.less"],
        names: [],
        mappings: "AAcA,kFACI,GACI,UAAA,CACA,kBACN,CACE,IACI,SAAA,CACA,oBACN,CACE,GACI,UAAA,CACA,kBACN,CACF,CACA,wEAGI,aAAA,CAFA,iBAAA,CACA,UAEJ,CACA,wEACI,0GAAA,CACA,yCAAA,CACA,kBAAA,CACA,oBAAA,CACA,WAAA,CACA,UACJ,CACA,qFAEI,mBAAA,CADA,YAEJ,CACA,qFACI,kBACJ",
        sourcesContent: ["@-webkit-keyframes dot-keyframes {\n    0% {\n        opacity: 0.4;\n        transform: scale(1, 1);\n    }\n    50% {\n        opacity: 1;\n        transform: scale(1.2, 1.2);\n    }\n    100% {\n        opacity: 0.4;\n        transform: scale(1, 1);\n    }\n}\n@keyframes dot-keyframes {\n    0% {\n        opacity: 0.4;\n        transform: scale(1, 1);\n    }\n    50% {\n        opacity: 1;\n        transform: scale(1.2, 1.2);\n    }\n    100% {\n        opacity: 0.4;\n        transform: scale(1, 1);\n    }\n}\n.loadingDots {\n    text-align: center;\n    width: 100%;\n    display: block;\n}\n.loadingDotsDot {\n    animation: dot-keyframes 1.5s infinite ease-in-out;\n    background-color: var(--loader-color, #000);\n    border-radius: 10px;\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n}\n.loadingDotsDot:nth-child(2) {\n    margin: 0px 5px;\n    animation-delay: 0.5s;\n}\n.loadingDotsDot:nth-child(3) {\n    animation-delay: 1s;\n}\n"],
        sourceRoot: ""
      }]), l.locals = {
        loadingDots: "rockstargames-modules-core-videoplayere83fe07aa054242e9023d2f9e7a3fd25",
        loadingDotsDot: "rockstargames-modules-core-videoplayera19bcd2b98d91e60c43b9de146e20f4e",
        "dot-keyframes": "rockstargames-modules-core-videoplayerb48ab03a26289abeddf8b8e89b8c8a29"
      };
      const r = l
    },
    36877: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => A
      });
      var o = n(42587),
        t = n.n(o),
        i = n(15081),
        l = n.n(i),
        r = n(79908),
        s = n.n(r),
        d = new URL(n(75958), n.b),
        c = l()(t()),
        m = s()(d);
      c.push([e.id, `.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67{margin-bottom:var(--tina-padding-big,20px);position:relative}.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67,.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 *{box-sizing:border-box;font-family:Inter,sans-serif}.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 .rockstargames-modules-core-videoplayerceac2b2784e621f05ce51dade558df8d{all:unset;color:var(--tina-color-grey-8,#433e52);display:block;font-family:Inter,sans-serif;font-size:var(--tina-font-size-1,13px);font-weight:600;-webkit-letter-spacing:.01em;-moz-letter-spacing:.01em;-ms-letter-spacing:.01em;letter-spacing:.01em;line-height:1.35;margin-bottom:8px;overflow:hidden;text-overflow:ellipsis;width:100%}.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 .rockstargames-modules-core-videoplayera0b2c6a5b66b849b487834caa1f6e3c8{all:unset;color:var(--tina-color-grey-6,#716c7f);display:block;font-family:Inter,sans-serif;font-size:var(--tina-font-size-0,12px);font-style:italic;font-weight:lighter;margin:0;padding-top:4px;white-space:normal}.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 input{box-shadow:0 0 0 2px transparent}.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 input,.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 select{background:var(--tina-color-grey-0,#fff);background-color:var(--tina-color-grey-0,#fff);border:1px solid var(--tina-color-grey-2,#edecf3);border-radius:var(--tina-radius-small,5px);font-size:var(--tina-font-size-2,15px);line-height:1.35;margin:0;outline:none;padding:var(--tina-padding-small,12px);position:relative;transition:all 85ms ease-out;width:100%}.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(${m});background-position:right .7em top 50%;background-repeat:no-repeat;background-size:.65em auto;display:block;font-family:inherit;max-width:100%}.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 .rockstargames-modules-core-videoplayerd9b75ea1bc84f8562bd9c7c730ce7317,.rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 .rockstargames-modules-core-videoplayerd84706d08967f65d5d2384427474feb5{color:var(--tina-color-error,#ec4815)}[class^=BlockMenuList-] button,button[class^=CreateButton-]{color:#000}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/tina/src/ui/FieldWrapper/index.less"],
        names: [],
        mappings: "AAAA,wEAII,0CAAA,CADA,iBAEJ,CALA,kJACI,qBAAA,CACA,4BAOJ,CATA,gJAWQ,SAAA,CAUA,sCAAA,CATA,aAAA,CACA,4BAAA,CACA,sCAAA,CACA,eAAA,CACA,4BAAA,CACA,yBAAA,CACA,wBAAA,CACA,oBAAA,CACA,gBAAA,CAEA,iBAAA,CAGA,eAAA,CAFA,sBAAA,CACA,UAER,CA1BA,gJA6BQ,SAAA,CAMA,sCAAA,CALA,aAAA,CACA,4BAAA,CACA,sCAAA,CACA,iBAAA,CACA,mBAAA,CAIA,QAAA,CAFA,eAAA,CACA,kBACR,CAtCA,8EAuDQ,gCADR,CAtDA,6JA4CQ,wCAAA,CAIA,8CAAA,CAGA,iDAAA,CARA,0CAAA,CAEA,sCAAA,CACA,gBAAA,CAOA,QAAA,CACA,YAAA,CAZA,sCAAA,CAKA,iBAAA,CAGA,4BAAA,CAEA,UA2BR,CA/EA,+EA0EQ,uBAAA,CACA,oBAAA,CACA,eAAA,CAEA,wDAAA,CAEA,sCAAA,CADA,2BAAA,CAEA,0BAAA,CAtBA,aAAA,CACA,mBAAA,CACA,cAkBR,CA/EA,gSAsFQ,qCAHR,CAaA,4DACI,UARJ",
        sourcesContent: [".FieldWrapper_sc_custom {\n    box-sizing: border-box;\n    font-family: 'Inter', sans-serif;\n    position: relative;\n    margin-bottom: var(--tina-padding-big, 20px);\n    * {\n        box-sizing: border-box;\n        font-family: 'Inter', sans-serif;\n    }\n\n    .FieldLabel_sc_custom {\n        all: unset;\n        display: block;\n        font-family: 'Inter', sans-serif;\n        font-size: var(--tina-font-size-1, 13px);\n        font-weight: 600;\n        -webkit-letter-spacing: 0.01em;\n        -moz-letter-spacing: 0.01em;\n        -ms-letter-spacing: 0.01em;\n        letter-spacing: 0.01em;\n        line-height: 1.35;\n        color: var(--tina-color-grey-8, #433e52);\n        margin-bottom: 8px;\n        text-overflow: ellipsis;\n        width: 100%;\n        overflow: hidden;\n    }\n\n    .FieldDescription_sc_custom {\n        all: unset;\n        display: block;\n        font-family: 'Inter', sans-serif;\n        font-size: var(--tina-font-size-0, 12px);\n        font-style: italic;\n        font-weight: lighter;\n        color: var(--tina-color-grey-6, #716c7f);\n        padding-top: 4px;\n        white-space: normal;\n        margin: 0;\n    }\n\n    input {\n        padding: var(--tina-padding-small, 12px);\n        border-radius: var(--tina-radius-small, 5px);\n        background: var(--tina-color-grey-0, #ffffff);\n        font-size: var(--tina-font-size-2, 15px);\n        line-height: 1.35;\n        position: relative;\n        background-color: var(--tina-color-grey-0, #ffffff);\n        -webkit-transition: all 85ms ease-out;\n        transition: all 85ms ease-out;\n        border: 1px solid var(--tina-color-grey-2, #edecf3);\n        width: 100%;\n        margin: 0;\n        outline: none;\n        box-shadow: 0 0 0 2px transparent;\n    }\n\n    select {\n        display: block;\n        font-family: inherit;\n        max-width: 100%;\n        padding: var(--tina-padding-small, 12px);\n        border-radius: var(--tina-radius-small, 5px);\n        background: var(--tina-color-grey-0, #ffffff);\n        font-size: var(--tina-font-size-2, 15px);\n        line-height: 1.35;\n        position: relative;\n        background-color: var(--tina-color-grey-0, #ffffff);\n        -webkit-transition: all 85ms ease-out;\n        transition: all 85ms ease-out;\n        border: 1px solid var(--tina-color-grey-2, #edecf3);\n        width: 100%;\n        margin: 0;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        outline: none;\n        background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);\n        background-repeat: no-repeat;\n        background-position: right 0.7em top 50%;\n        background-size: 0.65em auto;\n    }\n\n    .field-error,\n    .FieldError_sc_custom {\n        color: var(--tina-color-error, #ec4815);\n    }\n}\n\n[class^='BlockMenuList-'] {\n    button {\n        color: black;\n    }\n}\n\nbutton[class^='CreateButton-'] {\n    color: black;\n}\n"],
        sourceRoot: ""
      }]), c.locals = {
        FieldWrapper_sc_custom: "rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67",
        FieldLabel_sc_custom: "rockstargames-modules-core-videoplayerceac2b2784e621f05ce51dade558df8d",
        FieldDescription_sc_custom: "rockstargames-modules-core-videoplayera0b2c6a5b66b849b487834caa1f6e3c8",
        FieldError_sc_custom: "rockstargames-modules-core-videoplayerd9b75ea1bc84f8562bd9c7c730ce7317",
        "field-error": "rockstargames-modules-core-videoplayerd84706d08967f65d5d2384427474feb5"
      };
      const A = c
    },
    61398: e => {
      var a = {
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

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var o = e.type;
          "NamedType" === o.kind && a.add(o.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var o = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var o = e.definitions[n];
          if (o.name && o.name.value == a) return o
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), o[e.name.value] = a
        }
      })), e.exports = a, e.exports.TagList = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = o[a] || new Set,
          l = new Set,
          r = new Set;
        for (i.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            l.has(e) || (l.add(e), (o[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var o = t(e, a);
          o && n.definitions.push(o)
        })), n
      }(a, "TagList")
    },
    75958: e => {
      "use strict";
      e.exports = "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"
    }
  }
]);