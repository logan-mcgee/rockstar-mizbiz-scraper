"use strict";
(self.webpackChunk_rockstargames_modules_core_engagement = self.webpackChunk_rockstargames_modules_core_engagement || []).push([
  [290], {
    290: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => n
      });
      var l = a(616);
      const n = () => ({
        label: "Engagement",
        fields: [(0, l.translatedField)({
          name: "title",
          label: "Title",
          description: "Title for engagement module.",
          component: "text"
        })],
        itemProps: e => (0, l.itemPropsWithKey)(e, {
          label: `${e?.[l.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Engagement]`
        }),
        defaultItem: () => (0, l.defaultItemUnique)()
      })
    }
  }
]);