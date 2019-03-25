module.exports = {
  // 빌드 시, core-js 오류 발생할 경우
  // 참고: https://cli.vuejs.org/guide/browser-compatibility.html#usebuiltins-usage
  presets: [['@vue/app', { useBuiltIns: 'entry' }]],
}
