import { Page, tw } from '@shared/ui';
import { PageWidget } from '@widgets/page';

export const SignInPage = () => (
  <Page
    edges={['top', 'bottom']}
    style={tw`flex-1 bg-background dark:bg-dark-background`}
  >
    <PageWidget id="sign-in-page" />
  </Page>
);
