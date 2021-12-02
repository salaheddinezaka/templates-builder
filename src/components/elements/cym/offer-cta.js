import Mustach from 'mustache'

export const OfferCTAType = (editor) => {
  editor.DomComponents.addType('offer-cta', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'offer__footer'
        },
        components: `
          <a
            class="offer__phone"
            href="tel:{{phone}}"
            >{{phone}}</a
          >
          <a
            class="offer__cta"
            href="{{href}}"
            target="_blank"
            >{{ cta_lang }}</a
          >
          <p class="offer__lang">{{ lang }}</p>
        `,
        styles: `
          .offer__footer {
            display: flex;
            flex-direction: column;
            order: 2;
            flex: 0 0 calc(50% - 10px);
            align-items: center;
            padding-top: 10px;
          }
          
          @media only screen and (min-width: 840px) {
            .offer__footer {
              order: 3;
              flex: 0 0 20%;
            }
          }
          .offer__phone {
            text-decoration: none;
            color: #477fbe;
            font-size: 12px;
            font-weight: 700;
          }
          
          .offer__phone:empty {
            display: none;
            margin: 0;
          }
          
          .offer__cta {
            background: #477fbe;
            color: white;
            text-decoration: none;
            padding: 8px 12px;
            border-radius: 5px;
            display: block;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 14px;
            font-family: Arial;
            margin-top: 15px;
          }
          .offer__lang {
            font-size: 12px;
            color: #707070;
            font-weight: normal;
            line-height: 23px;
            text-align: center;
            width: 110px;
          }
        `
      }
    }
  })
}
