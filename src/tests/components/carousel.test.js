import React from 'react'
import {render} from '@testing-library/react'
import {PureCarousel as Carousel } from '../../components/carousel'

test('renders', () => {

    const data =  {
        "CarouselImages": {
          "edges": [
            {
              "node": {
                "childImageSharp": {
                  "resize": {
                    "src": "/static/3d918829ff7c56c4d1585f9db25d00db/d5c1a/daytime-facial-expression-fashion-859057.jpg"
                  },
                  "fluid": {
                    "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB6uLQxSKH/8QAGhAAAwEAAwAAAAAAAAAAAAAAAAECAxMhIv/aAAgBAQABBQJFtql6JZrpXNPR/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgMBAQAAAAAAAAAAAAAAAAEREkEQgf/aAAgBAQAGPwITsq6ieRkpHp//xAAaEAEAAwADAAAAAAAAAAAAAAABABEhQVFh/9oACAEBAAE/ISVCIANCIOK4mMyNVoV3ME9T/9oADAMBAAIAAwAAABBs/wD/xAAXEQADAQAAAAAAAAAAAAAAAAABECEx/9oACAEDAQE/EBtX/8QAFREBAQAAAAAAAAAAAAAAAAAAAHH/2gAIAQIBAT8QV//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExUUGB/9oACAEBAAE/EBDETAbYL43O7jS701FRiCTXErWBXPyJKzac2z//2Q==",
                    "aspectRatio": 1.5,
                    "src": "/static/3d918829ff7c56c4d1585f9db25d00db/91194/daytime-facial-expression-fashion-859057.jpg",
                    "srcSet": "/static/3d918829ff7c56c4d1585f9db25d00db/c6906/daytime-facial-expression-fashion-859057.jpg 325w,\n/static/3d918829ff7c56c4d1585f9db25d00db/00201/daytime-facial-expression-fashion-859057.jpg 650w,\n/static/3d918829ff7c56c4d1585f9db25d00db/91194/daytime-facial-expression-fashion-859057.jpg 1300w,\n/static/3d918829ff7c56c4d1585f9db25d00db/15715/daytime-facial-expression-fashion-859057.jpg 1950w,\n/static/3d918829ff7c56c4d1585f9db25d00db/f234e/daytime-facial-expression-fashion-859057.jpg 2600w,\n/static/3d918829ff7c56c4d1585f9db25d00db/962d5/daytime-facial-expression-fashion-859057.jpg 5265w",
                    "sizes": "(max-width: 1300px) 100vw, 1300px"
                  }
                }
              }
            },
            {
              "node": {
                "childImageSharp": {
                  "resize": {
                    "src": "/static/8565d81975436f1659bbbbf123d543ad/d5c1a/beautiful-bright-colours-colors-1158670.jpg"
                  },
                  "fluid": {
                    "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUCBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAGnxJo2GEf/xAAaEAEAAgMBAAAAAAAAAAAAAAABAgMRISMx/9oACAEBAAEFAjzLYzQbJcabklPb/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAICAwAAAAAAAAAAAAAAAAABAhARMXH/2gAIAQEABj8CE1JrDqXDVf/EABkQAQADAQEAAAAAAAAAAAAAAAEAESExQf/aAAgBAQABPyGhZ4RBQBolbR5EnpCHhmewm8//2gAMAwEAAgADAAAAEPj/AP/EABYRAAMAAAAAAAAAAAAAAAAAABARQf/aAAgBAwEBPxBKP//EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAECAQE/EFf/xAAcEAEAAwADAQEAAAAAAAAAAAABABEhUWFxofD/2gAIAQEAAT8QTkALXghmSFu2Gfu4ZQW2esy7Sov3IEKGaeEfsspbCse5/9k=",
                    "aspectRatio": 1.5,
                    "src": "/static/8565d81975436f1659bbbbf123d543ad/91194/beautiful-bright-colours-colors-1158670.jpg",
                    "srcSet": "/static/8565d81975436f1659bbbbf123d543ad/c6906/beautiful-bright-colours-colors-1158670.jpg 325w,\n/static/8565d81975436f1659bbbbf123d543ad/00201/beautiful-bright-colours-colors-1158670.jpg 650w,\n/static/8565d81975436f1659bbbbf123d543ad/91194/beautiful-bright-colours-colors-1158670.jpg 1300w,\n/static/8565d81975436f1659bbbbf123d543ad/15715/beautiful-bright-colours-colors-1158670.jpg 1950w,\n/static/8565d81975436f1659bbbbf123d543ad/f234e/beautiful-bright-colours-colors-1158670.jpg 2600w,\n/static/8565d81975436f1659bbbbf123d543ad/39b3c/beautiful-bright-colours-colors-1158670.jpg 5472w",
                    "sizes": "(max-width: 1300px) 100vw, 1300px"
                  }
                }
              }
            }
          ]
        }
      }
    const {asFragment} = render(<Carousel data={data}/>)
    expect(asFragment()).toMatchSnapshot();
} )