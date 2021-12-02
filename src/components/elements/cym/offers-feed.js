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
          .offers .offer .offer__banner{
            display: none;
          }
          .offers .offer:nth-of-type(1) .offer__banner {
            display: block;
          }
          .offers .offer:nth-of-type(1) .offer__number {
            background: #3869a1;
          }
          .offers .offer[data-bg=""] .offer__number::after {
            counter-increment: offer;
            content: counter(offer);
          }
          .offers .offer:nth-of-type(1) .number--right {
            border-left: 13px solid #3869a1;
            top: 4px;
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
