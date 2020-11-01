/*
 *
 * LanguageProvider
 *
 * This component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import { IntlProvider } from 'react-intl';

interface LanguageProps {
  locale: 'en';
  messages: any;
  children?: any;
}

export default function LanguageProvider(
  props: LanguageProps,
): React.ReactChild {
  return (
    <IntlProvider locale={props.locale} messages={props.messages[props.locale]}>
      {React.Children.only(props.children)}
    </IntlProvider>
  );
}
