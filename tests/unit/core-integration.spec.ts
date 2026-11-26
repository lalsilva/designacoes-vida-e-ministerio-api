import { describe, expect, it } from 'vitest';
import {
  AssignmentStatus,
  Gender,
  Privilege,
  suggestAssignees,
  suggestAssistants,
  validateAssigneeEligibility,
  validateAssistantEligibility,
  validateMeetingDateAvailability,
  validatePublisherScheduleConflicts,
} from '@lalsilva/designacoes-vida-e-ministerio-core';

describe('Core package integration', () => {
  it('should expose domain enums and S-38 validation/ranking functions', () => {
    expect(Gender).toBeDefined();
    expect(Privilege).toBeDefined();
    expect(AssignmentStatus).toBeDefined();

    expect(typeof validateAssigneeEligibility).toBe('function');
    expect(typeof validateAssistantEligibility).toBe('function');
    expect(typeof validateMeetingDateAvailability).toBe('function');
    expect(typeof validatePublisherScheduleConflicts).toBe('function');
    expect(typeof suggestAssignees).toBe('function');
    expect(typeof suggestAssistants).toBe('function');
  });
});
