# Multiline TextField on Storybook error

This project is a CRA application with Storybook and MUI5 that demonstrates 
that the TextField component fails on Storybook when using the multiline prop:

```
TypeError: The provided value is not of type 'Element'.

      at Object.exports.convert (node_modules/jsdom/lib/jsdom/living/generated/Element.js:26:9)
      at Window.getComputedStyle (node_modules/jsdom/lib/jsdom/browser/Window.js:783:19)
      at node_modules/@mui/base/node/TextareaAutosize/TextareaAutosize.js:74:43
      at node_modules/@mui/base/node/TextareaAutosize/TextareaAutosize.js:145:22
      at node_modules/@mui/base/node/TextareaAutosize/TextareaAutosize.js:205:5
      at commitHookEffectListMount (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12999:26)
      at commitLayoutEffectOnFiber (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:13114:15)
      at commitLayoutMountEffects_complete (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14330:9)
      at commitLayoutEffects_begin (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14316:7)
      at commitLayoutEffects (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14301:3)
```

To reproduce this, just run `npm install` and then `npm run test`.