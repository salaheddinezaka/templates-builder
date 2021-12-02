import mustache from 'mustache'
import { defaultValues } from '../../../utils/default-values'

export const OffersFeed = (editor) => {
  editor.DomComponents.addType('offers-feed', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'offers'
        },
        components: [`{{#ads}}`, { type: 'offer-container' }, `{{/ads}}`],
        styles: `
          .offers {
            counter-reset: offer;
            max-width: 839px;
            margin: 0 auto;
            -webkit-text-size-adjust: 100%;
          }        
        `
      }
    },
    view: {
      onRender() {
        const componentTemplate = mustache.render(
          this.el.innerHTML,
          defaultValues
        )
        this.el.innerHTML = componentTemplate
      }
    }
  })
}
