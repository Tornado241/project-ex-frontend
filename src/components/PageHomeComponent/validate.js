import * as Yup from 'yup';

const messageRequired = 'Vui lòng điền thông tin';

export const validateProjectForm = Yup.object({
  title: Yup.string().required(messageRequired),
  description: Yup.string().required(messageRequired),
  teacher: Yup.string().required(messageRequired),
  student: Yup.string().required(messageRequired),
  codeStudent: Yup.string().required(messageRequired),
  classStudent: Yup.string().required(messageRequired),
});
