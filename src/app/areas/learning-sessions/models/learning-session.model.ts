import { IIdentifiable } from 'app/infrastructure/model-abstractions';

export class LearningSession implements IIdentifiable {
  public sessionName: string | undefined = undefined;
  public id: string | undefined = undefined;
}
