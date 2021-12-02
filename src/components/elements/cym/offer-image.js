export const OfferImageType = (editor) => {
  editor.DomComponents.addType('offer-image', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'offer__image'
        },
        components: `
        <div class="offer__header">
          <div class="offer__img">
            <a href="{{href}}" target="_blank">
              <img src="https://dpe0m9czqa0it.cloudfront.net/77sdaz/ckt3mrbzyava809t12vgrcqao.png" alt="{{name}}">
            </a>
          </div>
        </div>
        `,
        styles: `
          .offer__image {
            display: flex;
            flex-direction: column;
            order: 1;
            flex: 0 0 calc(50% - 10px);
          }
          .offer__img {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .offer__image img {
            width: 100%;
            height: intrinsic;
            max-width: 132px;
            padding-bottom: 5px;
          }
          @media (min-width: 840px) {
            .offer__image {
              flex: 0 0 20%;
            }
          }
        `
      }
    }
  })
}
