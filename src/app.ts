import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRouts } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorhandler from './app/middlewears/global.errorhandler';
import notFound from './app/middlewears/notfound';
import { academicSemesterRoute } from './app/modules/academicSemester/academicSemester.route';
const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

app.use('/api/v1/student', StudentRouts);
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semester', academicSemesterRoute);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

//global errorhandler
app.use(globalErrorhandler);

//not Found

app.use(notFound);

export default app;
