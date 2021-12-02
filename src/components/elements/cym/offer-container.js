export const offerContainer = (editor) => {
  editor.DomComponents.addType('offer-container', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'offer__element'
        },
        components: [{ type: 'cym-banner' }, { type: 'offer-content' }],
        styles: `
          .offer__element {
            margin: 20px 0px 0px 29px;
            position: relative;
          }
        `
      }
    }
  })
}
