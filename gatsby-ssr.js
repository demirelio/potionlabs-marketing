const React = require('react')

const HeadComponents = [
  <script key="gumroad-script" src="https://store.potionlabs.io/js/gumroad.js" crossOrigin='anonymous' async type="text/javascript"/>
]

exports.onRenderBody =({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}