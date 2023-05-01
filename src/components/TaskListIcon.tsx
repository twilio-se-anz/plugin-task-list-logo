import React from "react";
import {
  ITask,
  TaskContextProps,
  withTaskContext,
  Manager,
} from "@twilio/flex-ui";

function isCurrentTask(task: ITask | undefined): boolean {
  if (!task) {
    return false;
  }

  const manager = Manager.getInstance();
  const selectedTask = manager.store.getState().flex?.view.selectedTaskSid;

  if (!selectedTask) {
    return false;
  }

  return task.sid === selectedTask;
}

const imgStyle = {
  height: '100%'
}

const TaskListItemIcon = (props: TaskContextProps) => {
  console.log("ATTRIBUTES", props.task?.attributes);

  const task = props.task;

  const backgroundColor = isCurrentTask(task) ? 'rgb(225, 227, 234)' : undefined

  const divStyle = {
    width: '52px',
    height: '52px',
    padding: '6px',
    borderColor: 'rgb(202, 205, 216)',
    borderStyle: 'solid',
    borderWidth: '0px 0px 1px',
    backgroundColor
  }

  const cbaLogoUrl = "http://www.commbank.com.au/content/dam/commbank/commBank-logo.svg";
  const bwLogoUrl = "http://www.bankwest.com.au/content/dam/bankwest/web-assets/images/global/logo/logo-bankwest-footer.png";

  return (<>
    <div style={divStyle}>
      <img src={props.task?.attributes.brand === "bw" ? bwLogoUrl : cbaLogoUrl} alt="Company logo" style={imgStyle} />
    </div>
  </>)

}

export default withTaskContext(TaskListItemIcon);