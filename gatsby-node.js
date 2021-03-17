// import path from 'path';
const path = require(`path`);

const turnProductsIntoPages = async ({ graphql, actions }) => {
  // get template for this page
  const productTemplate = path.resolve('./src/templates/singleProduct.jsx');
  const homeProductTemplate = path.resolve(
    './src/templates/singleHomepageProduct.js'
  );

  // query all shirts
  const { data } = await graphql(`
    query {
      products: allSanityProducts {
        nodes {
          description
          id
          slug {
            current
          }
          category
          name
        }
      }
      homepageProducts: allSanityHomePageProducts {
        nodes {
          description
          id
          slug {
            current
          }
          name
        }
      }
    }
  `);

  // console.log(data.products.node, 'na me be this?');
  console.log(data, 'na me be this?');

  // loop over each product and create a page for it
  data.products.nodes.forEach((product) => {
    console.log('creating a page for ', product.name);
    actions.createPage({
      // url for new page
      path: `product/${product.slug.current}`,
      component: productTemplate,
      context: {
        gcode: 'testing passing props through context',
        slug: product.slug.current,
        productData: product,
      },
    });
  });

  data.homepageProducts.nodes.forEach((product) => {
    console.log('creating a page for ', product.name);
    actions.createPage({
      // url for new page
      path: `product/${product.slug.current}`,
      component: homeProductTemplate,
      context: {
        gcode: 'testing passing props through context',
        slug: product.slug.current,
        productData: product,
      },
    });
  });
};

export async function createPages(params) {
  await Promise.all([turnProductsIntoPages(params)]);
}
