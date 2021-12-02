export const OfferFeaturesType = (editor) => {
  editor.DomComponents.addType('offer-features', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'offer__body'
        },
        components: `
          <div class="offer__features">
            <ul class="disclaimerPopup" data-url="">
            {{#bullets}}
              <li>
                {{{.}}}
              </li>
            {{/bullets}}
            </ul>
            <div class="offer__rates">
              <a href="{{href}}"  target="_blank">View Rates »</a>
            </div>
          </div>
        `,
        styles: `
          .offer__body {
            order: 3;
            flex: 0 0 100%;
          }
          @media only screen and (min-width: 840px) {
            .offer__body {
              order: 2;
              flex: 0 0 60%;
              border-left: 1px solid #e0e0e0;
              margin-top: 10px;
              padding-left: 15px;
            }
          }
          .offer__features {
            margin-top: 20px;
          }
          
          
          @media only screen and (min-width: 840px) {
            .offer__features {
              visibility: visible;
              position: relative;
              opacity: 1;
              margin: 0;
            }
          }
          .offer__features ul {
            padding: 10px 20px 0 20px;
            margin: 0;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #707070;
            font-weight: normal;
            line-height: 23px;
          }
          @media only screen and (min-width: 840px) {

            .offer__features ul{
              font-size: 15px;
              border-top: 0;
              padding-top: 0;
            }
          }
          .offer__rates {
            margin: 5px 0 0 20px;
          }
          
          @media only screen and (min-width: 840px) {
            .offer__rates {
              display: none;
            }
          }
          
          .offer__rates a {
            text-decoration: none;
            color: #477fbe;
            font-size: 13px;
            font-weight: 700;
          }
        `
      }
    }
  })
}
