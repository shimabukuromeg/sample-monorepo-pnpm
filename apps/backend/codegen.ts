import type { CodegenConfig } from '@graphql-codegen/cli'
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'

const config: CodegenConfig = {
    schema: '**/schema.graphql',
    generates: {
        "src/schema.gen.graphql": {
            plugins: [
                {
                    add: {
                        content: "# Code generated by graphql-codegen; DO NOT EDIT.\n\n",
                    },
                },
                "schema-ast",
            ],
            config: {
                includeDirectives: true,
            },
        },
        'src/schema': defineConfig(
            {
                mappersSuffix: "_Mapper",
            }
        )
    }
}
export default config
