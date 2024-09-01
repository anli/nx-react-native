import {
  usePageContent,
  renderPageContent,
  PageComponent,
} from '@entities/page';
import {
  DarkModeCardProps,
  DarkModeCard,
  VersionCard,
} from '@entities/settings';
import { SignInButton, SignOutCard } from '@features/authentication';
import { DarkModeSwitch } from '@features/settings';

const DarkModeWidget = (props: DarkModeCardProps) => (
  <DarkModeCard {...props} titleProps={{ right: () => <DarkModeSwitch /> }} />
);

const pageComponents = {
  SignInButton: <SignInButton />,
  VersionCard: <VersionCard />,
  DarkModeCard: <DarkModeCard />,
  DarkModeWidget: <DarkModeWidget />,
  SignOutCard: <SignOutCard />,
};

type PageWidgetProps = {
  id: string;
  components?: PageComponent;
};

export const PageWidget = ({ id, components }: PageWidgetProps) => {
  const { data } = usePageContent(id);

  if (!data) {
    return null;
  }

  return renderPageContent(data.children, { ...pageComponents, ...components });
};
