import { PageComponent } from '@shared/ui';

import { DarkModeCard, VersionCard } from '../ui';

export const settingsComponents = {
  VersionCard: <VersionCard />,
  DarkModeCard: <DarkModeCard />,
} satisfies PageComponent;
