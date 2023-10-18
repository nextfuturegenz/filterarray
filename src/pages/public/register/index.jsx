import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import { useForm } from "react-hook-form";
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../../atoms';
import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { creativeTeam } from '../../../components/common/ImageLoader';

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
}).required();

const Register = () => {
    const navigate = useNavigate();
    const auth = useRecoilValue(authAtom);
    const { register: registerUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // redirect to home if already logged in
        if (auth) navigate('/app/dashboard');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async ({ email, password }) => {
        try {
            setIsLoading(true);
            const user = await registerUser(email, password)
            navigate('/login')
        } catch (error) {
            setIsLoading(false);
            alert(error);
        }
    }

    const onError = (errors) => {
        console.error(errors);
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center" >
                <div className="col-lg-6 col-md-5 px-3" data-aos="slide-left" data-aos-delay="50"
                    data-aos-easing="ease-in-back"><img className="my-3 img-fluid" src={creativeTeam}
                        alt="creative-team" /></div>
                <div className="col-md-4 my-5">
                <div className="text-center mb-5">
                        <h2 className="marker marker-center">Register</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <div className="form-group my-2">
                            <input disabled={isLoading} type="text" name='email' className="form-control" {...register('email')} placeholder="Your Email" />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div className="form-group">
                            <input disabled={isLoading} type="password" name='password' className="form-control" {...register('password')} placeholder="Password" />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <div className="form-group">
                            <button disabled={isLoading} type="submit" value="Login" className={`btn btn-primary my-3 `} >
                                {isLoading ? <Dna
                                    visible={isLoading}
                                    height="30"
                                    width="40"
                                    ariaLabel="dna-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="dna-wrapper"
                                /> : 'Register'}
                            </button>

                            <Link style={{ paddingLeft: "20px" }} to={'/login'}>Already have an account ?</Link>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    )
}

export default Register