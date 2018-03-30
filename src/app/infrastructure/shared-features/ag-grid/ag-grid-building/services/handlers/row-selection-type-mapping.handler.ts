import { RowSelectionType } from '../../models';

export class RowSelectionTypeMappingHandler {
  static map(type: RowSelectionType): string {
    switch (type) {
      case RowSelectionType.Multiple: {
        return 'multiple';
      }

      case RowSelectionType.Single: {
        return 'single';
      }
    }
  }
}
