import { z } from 'zod';

// Zod schema for UserName
const userNameSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

// Zod schema for Guardian
const guardianSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

// Zod schema for LocalGuardian
const localGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contractNo: z.string(),
  address: z.string(),
});

// Zod schema for Student
const studentSchema = z.object({
  id: z.string(),
  name: userNameSchema,
  gender: z.enum(['male', 'female', 'other']),

  dateOfBirth: z.string(),
  email: z.string().email(),
  contractNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),

  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().nullable(),

  isActive: z.enum(['active', 'blocked']).optional(),
});

export default studentSchema;
