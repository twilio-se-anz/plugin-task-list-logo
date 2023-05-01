import React from 'react';
import * as FlexUI from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import TaskListItemIcon from './components/TaskListIcon';
import { Flex } from '@twilio-paste/core';

const PLUGIN_NAME = 'DynamicTaskIconPlugin';

export default class DynamicTaskIconPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof FlexUI }
   */
  async init(flex: typeof FlexUI, manager: FlexUI.Manager): Promise<void> {
    flex.TaskListItem.Content.addWrapper((OriginalComponent) => (props) => {
      return (
        <>
          <Flex>
            <Flex>
              <TaskListItemIcon />
            </Flex>
            <Flex grow>
              <OriginalComponent {...props} />
            </Flex>
          </Flex>
        </>
      );
    });
  }
}
