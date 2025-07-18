'use server';

import { signIn, signOut } from '@/auth';
import { signInFormSchema } from '@/lib/validators/auth.validator';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

// Sign in action
export async function signInAction(prevState: unknown, formData: FormData) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);
    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return { success: false, message: 'Incorrect email or password' };
  }
}

// Sign out action
export async function signOutAction() {
  await signOut({ redirectTo: '/sign-in' });
}
