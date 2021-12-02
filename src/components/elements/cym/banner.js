export const bannerType = (editor) => {
  editor.DomComponents.addType('cym-banner', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'offer__banner'
        },
        components: `
          <span>**** EDITOR'S CHOICE 2021 ****</span>
        `,
        styles: `
          .offer__banner {
            background: #ffbf00;
            display: block;
            color: white;
            text-align: center;
            padding: 5px 0;
          }
        `
      }
    }
  })
}
