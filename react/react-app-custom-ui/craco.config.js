const { addAfterLoader, loaderByName } = require('@craco/craco')

module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
          @import "src/assets/style/variables.scss";
          @import "src/assets/style/mixin.scss";
        `,
            },
        },
    }
}
