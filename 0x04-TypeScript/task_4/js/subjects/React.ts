import { Teacher } from './Teacher';
import { Subject } from './Subject';

export interface ReactTeacher extends Teacher {
  experienceTeachingReact?: number;
}

export class React extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    if (!this.teacher || !(this.teacher as ReactTeacher).experienceTeachingReact) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
