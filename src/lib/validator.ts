import z from "zod";

export const validate = <T extends typeof z.ZodObject>(zObj: z.ZodObject, formData: FormData) => {
  const validatedFormData = zObj.safeParse(Object.fromEntries(formData));

  if (!validatedFormData.success) {
    return { success: false, error: z.treeifyError(validatedFormData.error).properties };
  }

  return { success: true, data: validatedFormData.data };
};
