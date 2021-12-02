export const cymType = (editor) => {
  editor.DomComponents.addType('cym-layout', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'offer__banner'
        },
        components: [
          {
            tagName: 'span',
            type: 'text',
            title: "**** EDITOR'S CHOICE 2021 ****"
          }
        ]
      }
    }
  })
}
