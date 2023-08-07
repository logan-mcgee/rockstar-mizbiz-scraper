"use strict";
(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [156], {
    156: (e, a, l) => {
      l.r(a), l.d(a, {
        AnimationWrapper: () => n
      });
      var t = l(616);
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