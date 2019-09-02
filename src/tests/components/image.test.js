import React from "react"
import { render, cleanup } from "@testing-library/react"
import Image from "../../components/image"

const data = {
  images: {
    edges: [
      {
        node: {
          relativePath: "404.js",
          name: "404",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "cart.js",
          name: "cart",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "page-2.js",
          name: "page-2",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "index.js",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "anime-pullover-hoodie/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "darts-fire-t-shirt/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "dmt-pullover-hoodie/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "dripping-space-pullover-hoodie/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "lion-pullover-hoodie/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "fluffly-cat-t-shirt/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "fire-angel-t-shirt/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "dragon-sword-t-shirt/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "polygon-pullover-hoodie/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "joker-pullover-hoodie/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "psychedelic-t-shirt/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "space-cat-t-shirt/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "scary-clown-pullover-hoodie/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "us-eagle-t-shirt/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "psychedelic-forest-pullover-hoodie/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "toons-pullover-hoodie/index.md",
          name: "index",
          childImageSharp: null,
        },
      },
      {
        node: {
          relativePath: "lion-pullover-hoodie/lion-hoodie-back.jpg",
          name: "lion-hoodie-back",
          childImageSharp: {
            sizes: {
              base64:
                "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB62K3NL2kVEagrSGf/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAAwQREhP/2gAIAQEAAQUCvs8wLmQzKWMuyo5V1DqKh1P/xAAXEQEBAQEAAAAAAAAAAAAAAAABEAMx/9oACAEDAQE/ATQOkJ//xAAXEQADAQAAAAAAAAAAAAAAAAABEBEx/9oACAECAQE/ASBdUX//xAAdEAEAAgEFAQAAAAAAAAAAAAABABEQAhIhQVFh/9oACAEBAAY/AvrL1c43dQIHkpg2tY//xAAcEAADAQACAwAAAAAAAAAAAAAAARFBEDEhYeH/2gAIAQEAAT8hir4CIyXlwTqq0a52iHvZnnWxB4stqKx3iTfH/9oADAMBAAIAAwAAABBsCPz/xAAaEQACAgMAAAAAAAAAAAAAAAABERBxkbHB/9oACAEDAQE/EBas4oIrOo//xAAXEQEBAQEAAAAAAAAAAAAAAAABEBEh/9oACAECAQE/EFF4iF1J/8QAHRABAQABBQEBAAAAAAAAAAAAAREAITFBUXEQkf/aAAgBAQABPxAQt2DdnLhMUJLfXuEaUFHF5SEXZun7jNgsi3RZBzgIa7mKwFAsRGiZR6chL26fP//Z",
              aspectRatio: 1,
              src:
                "/static/0c53e68e81253f430c2baeb778efe059/bc3a8/lion-hoodie-back.jpg",
              srcSet:
                "/static/0c53e68e81253f430c2baeb778efe059/298f9/lion-hoodie-back.jpg 258w,\n/static/0c53e68e81253f430c2baeb778efe059/34d33/lion-hoodie-back.jpg 515w,\n/static/0c53e68e81253f430c2baeb778efe059/bc3a8/lion-hoodie-back.jpg 800w",
              sizes: "(max-width: 800px) 100vw, 800px",
            },
          },
        },
      },
      {
        node: {
          relativePath: "joker-pullover-hoodie/joker-hoodie.jpg",
          name: "joker-hoodie",
          childImageSharp: {
            sizes: {
              base64:
                "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAUDAgQG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGp1MJk17BxXOc0LAP/xAAcEAACAwADAQAAAAAAAAAAAAABAwACBAUREhT/2gAIAQEAAQUC0vCF/VStpyQMcDK9+XUDFZ81Ayf/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPwEI/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIAERAxEkEDIVH/2gAIAQEABj8Cvs6iWrLyx4z1E92SIL3Craga2PH7j//EABsQAAIDAQEBAAAAAAAAAAAAAAERACFREDGB/9oACAEBAAE/IXQCaAE04C+HYWPsKWsoKIwLj9myNaPAIc//2gAMAwEAAgADAAAAECvAfP/EABYRAQEBAAAAAAAAAAAAAAAAABEQAf/aAAgBAwEBPxBcYz//xAAWEQEBAQAAAAAAAAAAAAAAAAABESD/2gAIAQIBAT8QWY//xAAeEAEAAgEFAQEAAAAAAAAAAAABESEAEDFBUXFhkf/aAAgBAQABPxCQK3uI38yOQEWwCVN3fOk+yMz0oT9jJOSQrS0H3bCHtE9ReK8BFWCQyRPmcvpQCvPun//Z",
              aspectRatio: 1,
              src:
                "/static/2043680ac0fd340fabdc063a5a35055f/0a89a/joker-hoodie.jpg",
              srcSet:
                "/static/2043680ac0fd340fabdc063a5a35055f/298f9/joker-hoodie.jpg 258w,\n/static/2043680ac0fd340fabdc063a5a35055f/34d33/joker-hoodie.jpg 515w,\n/static/2043680ac0fd340fabdc063a5a35055f/0a89a/joker-hoodie.jpg 960w",
              sizes: "(max-width: 960px) 100vw, 960px",
            },
          },
        },
      },
      {
        node: {
          relativePath: "festival.jpg",
          name: "festival",
          childImageSharp: {
            sizes: {
              base64:
                "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAAByXJ5UoxFgv8A/8QAGRABAAMBAQAAAAAAAAAAAAAAAQACEgMR/9oACAEBAAEFAq56BUJbwRSaZpn/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAwEBPwGlv//EABYRAQEBAAAAAAAAAAAAAAAAAAASE//aAAgBAgEBPwG2j//EABYQAQEBAAAAAAAAAAAAAAAAAAAhMf/aAAgBAQAGPwLVRGtf/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFhUXH/2gAIAQEAAT8heAjkI0a3Ek0lKqvka+vYGYU//9oADAMBAAIAAwAAABC33//EABYRAQEBAAAAAAAAAAAAAAAAAAAhEf/aAAgBAwEBPxCKy//EABYRAQEBAAAAAAAAAAAAAAAAACEBEP/aAAgBAgEBPxCBz//EABwQAQEAAgIDAAAAAAAAAAAAAAERAEEhMVFh0f/aAAgBAQABPxCj5hCd/Meoh4PvrKpo2bwxJ2NZWqZR7YABngc//9k=",
              aspectRatio: 1.5,
              src:
                "/static/5b97ffe20018219ba61e3400999ae409/b596b/festival.jpg",
              srcSet:
                "/static/5b97ffe20018219ba61e3400999ae409/298f9/festival.jpg 258w,\n/static/5b97ffe20018219ba61e3400999ae409/34d33/festival.jpg 515w,\n/static/5b97ffe20018219ba61e3400999ae409/b596b/festival.jpg 1030w,\n/static/5b97ffe20018219ba61e3400999ae409/ed6aa/festival.jpg 1545w,\n/static/5b97ffe20018219ba61e3400999ae409/9ac6f/festival.jpg 2060w,\n/static/5b97ffe20018219ba61e3400999ae409/1bd72/festival.jpg 3300w",
              sizes: "(max-width: 1030px) 100vw, 1030px",
            },
          },
        },
      },
      {
        node: {
          relativePath: "dripping-space-pullover-hoodie/space-paint-back.PNG",
          name: "space-paint-back",
          childImageSharp: {
            sizes: {
              base64:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABYlAAAWJQFJUiTwAAADWElEQVQ4y21US0iUURT+1ZnRcZ6+DaYSioSSiBbuWmhpWdJCJKhEMikDg5YqFWJmplAbUSqoaKG1EYJokyatbWdg4Nr3pPMexxn165zzz/3nV7zD4T7+e777ne+cORpMY29vzzAey8vL+DUzg08fPuLN6CjNH/B7dhY7OzvGfYhlMDQzGI9UKiXz8OAgCh0OOHJykK1p0MhsZLz+MjEhd7a3twXLIEI/zQy2u7trvFR16pQ4F+bno8BuR7HDiTK3W4AfdXYa95itGdRgqMCSxPB5X5+AlLjcAlLm9qDc40EprT15eSh2uXCvrQ1Li4sGKMctgAd1u9HUJCxcVquAlhHQsdJSHCkogJf2bpsNTotF7pzwHcXf+fk0IR1Uy7wATP/4IWGyE5snN1eAvcSK96wn79mKnU4Bvd7QkAldMVSJeNDejiy6xMwYjIF4ZmNW8pDVZpzl0N3O+x2GZAKotAuFQqg8XgE7A6YZMRN2dNt0ph5bBsxK986dPo3A5iZSyWRGQ8Xu8/i4hJCfnU0srHrItlwjfJfFKiyZdZnXK3c77t4V30gkYpSepvQbGxnBSZ8PFeXlsGdlSc05cyxiCpBnX0kJJcMngK+GhpAkdsFgcH8dMstoNEr0A/gzN4efU1O4XFMjGqmsckKcZKyvyvLr4WEKNwW/32/kQVMVzxomaOY168qvPuzogIUcvaRZERU4h8v782eqcLO5GU+6uwVkk3U0AzIAA4YIhFlubGzIx8H+fmFiT2eejavgzq3biMVimJmeRjgclugMDVVBb21tibiJRALBQFDOHnd14UJ1NZoaG6U+i/Id8sCV2lrEojFDpqRkGfv/KTzi9Cq/yEzj8RgWFhYQCATwdmxM//eQdmcrK/Gi75mUyz+TdjqGqTmoDsQMGVDXNCFnXycnkZfuOP29vXK2urIiYZvB9OaQBlMseWawSCRKDnEJix0b6+sF8GlPj94rF5cQoWgO9lHNfKASxFlj0C1iqwTnIuZC//7tm9Tb2uoqyRLHfn8FaAqbZ9aHw+bwldPVi5fQ3toqay4p/9q6fMehDfYAy3AoTJkOCLtwOqxrdXVoa2mRtX/dj39kqg8oPxwGyGsuAy4jZqdCfjkwgPfv3umNJEgJo+/mZCiG/wEdyNX79BfYiQAAAABJRU5ErkJggg==",
              aspectRatio: 0.9331585845347313,
              src:
                "/static/90eb2489deced6accb3e53ffccc7493d/bba84/space-paint-back.png",
              srcSet:
                "/static/90eb2489deced6accb3e53ffccc7493d/541bf/space-paint-back.png 258w,\n/static/90eb2489deced6accb3e53ffccc7493d/73d34/space-paint-back.png 515w,\n/static/90eb2489deced6accb3e53ffccc7493d/bba84/space-paint-back.png 712w",
              sizes: "(max-width: 712px) 100vw, 712px",
            },
          },
        },
      },
    ],
  },
}

test("renders correctly with props", () => {
  const { container } = render(<Image data={data} filename={"festival.jpg"} />)
  expect(container().firstChild()).toHaveClass("gatsby-image-wrapper")
})
