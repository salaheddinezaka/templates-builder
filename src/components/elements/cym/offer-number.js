export const OfferNumberType = (editor) => {
  editor.DomComponents.addType('offer-number', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'offer__number'
        },
        components: `
          <div class="number--right"></div>
        `,
        styles: `
          .offer__number {
            width: 19px;
            height: 19px;
            font-size: 18px;
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            position: absolute;
            top: 0;
            left: -29px;
            background: #ccc;
            top: 6px;
            box-sizing: content-box;
          }
          .number--right {
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-left: 13px solid #ccc;
            border-bottom: 10px solid transparent;
            position: absolute;
            left: 26px;
            top: 6px;
          }
          .offer__number::after {
            counter-increment: offer;
            content: counter(offer);
          }
        `
      }
    }
  })
}
