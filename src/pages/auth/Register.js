import Input from 'components/Input';
import { AiFillFacebook } from 'react-icons/ai';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { register } from 'firebase.js';
import { Formik, Form } from 'formik';
import { RegisterSchema } from 'validation';
import Button from 'components/Button';
import Seperator from 'components/Separator';

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await register(values);
    if (response) {
      navigate(location.state?.return_url || '/', {
        replace: true,
      });
    }
  };

  return (
    <div className="w-[350px] grid gap-y-3">
      <div className="bg-white border px-[40px] pt-10 pb-6">
        <a href="#" className="flex justify-center mb-4">
          <img
            className="h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            alt=""
          />
        </a>
        <p className="text-[17px] font-semibold text-[#8e8e8e] text-center mb-6">
          Sign up to see photos and videosregister from your friends.
        </p>
        <Button>
          <AiFillFacebook />
          Log in with Facebook
        </Button>

        <Seperator />
        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            email: '',
            full_name: '',
            username: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty, values }) => (
            <Form className="grid gap-y-1.5">
              <Input name="email" label="Email" />
              <Input name="full_name" label="Full Name" />
              <Input name="username" label="Username" />
              <Input type="password" name="password" label="Password" />
              <p className="text-xs text-[#8e8e8e] py-2">
                People who use our service may have uploaded your contact
                information to Instagram.
                <a className="font-semibold">Learn More </a>
                <br />
                <br />
                By signing up, you agree to our{' '}
                <a className="font-semibold">Terms </a>,{' '}
                <a className="font-semibold">Data Policy </a> and{' '}
                <a className="font-semibold">Cookies Policy</a>
              </p>
              <Button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="bg-white border p-4 text-sm text-center">
        Have an account?{' '}
        <Link to={'/auth/login'} className="font-semibold text-brand">
          Log In
        </Link>
      </div>
    </div>
  );
}
