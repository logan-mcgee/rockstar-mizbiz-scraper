! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4bcd1aad-9bf5-4092-9881-73b2b5071966", e._sentryDebugIdIdentifier = "sentry-dbid-4bcd1aad-9bf5-4092-9881-73b2b5071966")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [977], {
    6977: (e, a, l) => {
      l.r(a), l.d(a, {
        AnimationWrapper: () => n,
        LightboxTemplate: () => s
      });
      var t = l(5140);
      const n = e => {
        let {
          templates: a = null,
          styleDefaults: l = {}
        } = e;
        const n = [(0, t.NameField)(), {
          label: "Animation",
          name: "animationClass",
          component: "select",
          options: [{
            label: "-- Select Animation --",
            value: ""
          }, {
            label: "Fade In",
            value: "animate__fadeIn"
          }, {
            label: "Fade In-Up",
            value: "animate__fadeInUp"
          }]
        }, {
          label: "Delay",
          name: "delayClass",
          component: "select",
          options: [{
            label: "-- Select Delay --",
            value: ""
          }, {
            label: "2 Seconds",
            value: "animate__delay-2s"
          }, {
            label: "3 Seconds",
            value: "animate__delay-3s"
          }, {
            label: "4 Seconds",
            value: "animate__delay-4s"
          }, {
            label: "5 Seconds",
            value: "animate__delay-5s"
          }]
        }, {
          label: "Speed",
          name: "speedClass",
          component: "select",
          options: [{
            label: "-- Select Speed --",
            value: ""
          }, {
            label: "Slower (3s)",
            value: "animate__slower"
          }, {
            label: "Slow (2s)",
            value: "animate__slow"
          }, {
            label: "Fast (800ms)",
            value: "animate__fast"
          }, {
            label: "Faster (500ms)",
            value: "animate__faster"
          }]
        }, {
          label: "Repeat",
          name: "repeatClass",
          component: "select",
          options: [{
            label: "-- Select Repeat --",
            value: ""
          }, {
            label: "1 Repeat",
            value: "animate__repeat-1"
          }, {
            label: "2 Repeat",
            value: "animate__repeat-2"
          }, {
            label: "3 Repeat",
            value: "animate__repeat-3"
          }, {
            label: "Infinite Repeat",
            value: "animate__repeat-infinite"
          }]
        }, {
          label: "Trigger Always?",
          name: "triggerAlways",
          description: "Trigger this animation each time the component is scrolled into view?",
          component: "toggle"
        }, {
          label: "Items",
          name: t.TINA_PARSER_KEY,
          component: "blocks",
          templates: a
        }, (0, t.StyleField)({
          filter: "animation"
        })];
        return {
          name: "animationWrapper",
          label: "Animation Wrapper",
          component: "group",
          fields: [...n, (0, t.MediaQueryField)({
            fields: n
          })],
          defaultItem: () => (0, t.defaultItemUnique)({
            style: l
          }),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Animation Wrapper]`
          })
        }
      };
      var o = l(1736),
        i = l(8235);
      const m = e => {
          let {
            name: a = "",
            label: l = ""
          } = e;
          return {
            name: a,
            label: l,
            component: "image",
            clearable: !0,
            uploadDir: i.uploadDir,
            parse: i.parse,
            previewSrc: i.previewSrc
          }
        },
        s = function() {
          return {
            label: "Lightbox Image",
            fields: [m({
              name: "src",
              label: "Image Source"
            }), m({
              name: "thumbnail",
              label: "Thumbnail Image Source"
            }), {
              name: "thumbnailAspectRatio",
              label: "Thumbnail Aspect Ratio",
              component: "text"
            }, {
              name: "showOpenButton",
              label: "Show Open Button?",
              description: "Show the lightbox indicator icon on trigger?",
              component: "toggle"
            }, {
              name: "showDownloadButton",
              label: "Show Download Button?",
              description: "Show the download button in the lightbox?",
              component: "toggle"
            }, {
              name: "thumbnailPosition",
              label: "Thumbnail Position",
              description: "Any valid CSS Object Position value for the thumbnail.",
              component: "text"
            }, (0, o.translatedField)({
              name: "alt",
              label: "Alt Text",
              description: "(If both alt text and caption are present, caption will be used.)",
              component: "text"
            }), (0, o.translatedField)({
              name: "caption",
              label: "Caption",
              component: "text"
            }), {
              name: "defaultOpen",
              label: "Open by default?",
              description: "The open state of the dialog when it is initially displayed. (Use when you do not need to control its open state.)",
              component: "toggle"
            }, {
              name: "defaultZoomLevel",
              label: "Default Zoom Level",
              description: "The zoom level in percentage of the lightbox when it is initially displayed. (Use when you do not need to control its zoom level.)",
              component: "number"
            }, {
              name: "zoomLevel",
              label: "Zoom Level",
              description: "The controlled zoom level in percentage of the lightbox.",
              component: "number"
            }, {
              name: "minZoomLevel",
              label: "Min Zoom Level",
              description: "The minimum zoom level in percentage of the lightbox.",
              component: "number"
            }, {
              name: "maxZoomLevel",
              label: "Max Zoom Level",
              description: "The maximum zoom level in percentage of the lightbox.",
              component: "number"
            }, {
              name: "zoomLevelStep",
              label: "Zoom Level Step",
              description: "The step amount in percentage to zoom in the lightbox.",
              component: "number"
            }, {
              name: "loading",
              label: "Loading Method",
              component: "select",
              options: [{
                value: "",
                label: "-- Select Loading Method --"
              }, {
                value: "eager",
                label: "Eager"
              }, {
                value: "lazy",
                label: "Lazy"
              }]
            }],
            defaultItem: () => (0, o.defaultItemUnique)({
              thumbnailPosition: "center",
              defaultZoomLevel: 100,
              minZoomLevel: 100,
              maxZoomLevel: 300,
              zoomLevelStep: 100
            }),
            itemProps: e => (0, o.itemPropsWithKey)(e, {
              label: `${e?.content??"New"} [Lightbox]`
            })
          }
        }
    }
  }
]);