module.exports = {
    plugins: ['stylelint-order'],
    extends: 'stylelint-config-standard',
    rules: {
        'indentation': 4,
        'no-missing-end-of-source-newline': null,
        'no-descending-specificity': null,
        'number-leading-zero': null,
        'at-rule-no-unknown': null,
        'order/order': [
            'at-rules',
            'dollar-variables',
            'custom-properties',
            'declarations',
            'rules',
            {
                type: 'at-rule',
                name: 'media'
            },
        ],
        'selector-pseudo-class-no-unknown': [true, {
            'ignorePseudoClasses': ['global', 'local']
        }],
        'selector-pseudo-element-no-unknown': [true, {
            'ignorePseudoElements': ['global', 'local']
        }]
    },
};
