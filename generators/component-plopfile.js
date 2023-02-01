module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        default: 'My Component',
        message: 'Component name:',
      },
    ],
    actions: function (data) {
      const actions = [];
      actions.push(
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'templates/component/Component.test.tsx.hbs',
        },
        {
          type: 'modify',
          path: '../src/components/index.ts',
          pattern: /$/g,
          template:
            "export * from './{{pascalCase name}}/{{pascalCase name}}';\n",
        }
      );

      actions.push(
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'templates/component/Component.styles.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component/StyledComponents.tsx.hbs',
        }
      );

      return actions;
    },
  });
};
