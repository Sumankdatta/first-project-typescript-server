import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema(
  {
    id: {
      type: String,
      required: [true, 'Id is required'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['in-progress', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_round));
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
