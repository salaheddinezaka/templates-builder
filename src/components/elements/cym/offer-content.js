export const ContentType = (editor) => {
  editor.DomComponents.addType('offer-content', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'offer__content'
        },
        components: [{ type: 'offer-image' }, { type: 'offer-features' }, { type: 'offer-cta' }],
        styles: `
          .offer__content {
            background: white;
            border: 1px solid #c0cacc;
            border-radius: 5px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 8px;
            font-family: Roboto, Arial, Helvetica, sans-serif;
          }
        `
      }
    }
  })
}
