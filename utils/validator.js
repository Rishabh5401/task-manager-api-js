const { z } = require('zod');

exports.taskSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  status: z.enum(['PENDING', 'COMPLETED', 'IN_PROGRESS']),
});
