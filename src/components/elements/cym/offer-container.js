export const offerContainer = (editor) => {
  editor.DomComponents.addType('offer-container', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'offer'
        },
        components: [{ type: 'cym-banner' }, { type: 'offer-number' }, { type: 'offer-content' }],
        styles: `
          .offer {
            margin: 20px 0px 0px 29px;
            position: relative;
          }
        `
      }
    }
  })
}
