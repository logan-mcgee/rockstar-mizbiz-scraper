! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "de95ba3d-b5b8-4f38-8d1d-948281bae684", e._sentryDebugIdIdentifier = "sentry-dbid-de95ba3d-b5b8-4f38-8d1d-948281bae684")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [124], {
    1124: (e, a, l) => {
      l.r(a), l.d(a, {
        AnimationWrapper: () => n
      });
      var t = l(9468);
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
      }
    }
  }
]);
//# sourceMappingURL=a95ca25dd7e23fbab05a47baed04fff5.js.map