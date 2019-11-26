'use strict';

const path = require('path');

require('source-map-support').install();

require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017'
    }
});

exports.createPages = async ({ graphql, actions }) => {
    const pages = await graphql(`
        query {
            allSanityYtelsePage(filter: { isPublic: { eq: true } }) {
                edges {
                    node {
                        ytelse {
                            id
                            name
                            formUrl
                        }
                        slug {
                            current
                        }
                        _rawTitle
                        _rawIntro
                        _rawInShortTitle
                        _rawBanner(resolveReferences: { maxDepth: 4 })
                        _rawIllustration(resolveReferences: { maxDepth: 4 })
                        _rawInShort
                        _rawContent(resolveReferences: { maxDepth: 10 })
                    }
                }
            }
        }
    `);

    const { createPage } = actions;
    pages.data.allSanityYtelsePage.edges.forEach(({ node }) => {
        createPage({
            path: node.slug.current,
            component: path.resolve(`./src/templates/ytelsePageTemplate.tsx`),
            context: {
                slug: node.slug.current
            }
        });
    });
};

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
    actions.setWebpackConfig({
        externals: {
            canvas: 'commonjs canvas'
        }
    });
};
