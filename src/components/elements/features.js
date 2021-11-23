export const featuresType = (editor) => {
  editor.DomComponents.addType('ad-features', {
    model: {
      defaults: {
        tagName: 'ul',
        components: [
          {
            tagName: 'li',
            type: 'text'
          }
        ]
      },
      traits: [
        'name',
      ],
    }
  })
}
