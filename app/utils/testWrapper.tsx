import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import LanguageProvider from 'components/LanguageProvider';
import { translationMessages } from 'i18n';

function render(
  ui: React.ReactElement<
    any,
    | string
    | ((
        props: any,
      ) => React.ReactElement<
        any,
        string | any | (new (props: any) => React.Component<any, any, any>)
      > | null)
    | (new (props: any) => React.Component<any, any, any>)
  >,
  { locale = 'en', ...renderOptions } = {},
) {
  const Wrapper: React.FC = ({ children }) => (
    <LanguageProvider locale="en" messages={translationMessages}>
      {children}
    </LanguageProvider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react-native';

// override React Testing Library's render with our own
export { render };
