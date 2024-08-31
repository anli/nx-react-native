import { Page, renderPageContent, tw } from '@shared/ui';

import { signInPageConfig, pageComponents } from '../model/page-config';

export const SignInPage = () => (
  <Page
    edges={['top', 'bottom']}
    style={tw`flex-1 bg-background dark:bg-dark-background`}
  >
    {renderPageContent(signInPageConfig.children, pageComponents)}
  </Page>
);
