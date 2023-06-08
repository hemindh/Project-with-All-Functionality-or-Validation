import React from "react";
import { useForm } from 'react-hook-form';


const HookFormOne = () => {

      const { register , handleSubmit , formState: { errors } , control } = useForm();
    
    const onSubmit = data => console.log(data);
    

    
  return (
    <>

      <div className="container py-3 ">
        <div className="card border-0 shadow w-50 p-3 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* onSubmit={handleSubmit(onSubmit)} */}
          <div className="form-group">
            <label htmlFor="name" className="text">Name*</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              name="name"
            {...register("name", { required: true })}
            />
          </div>
          {
            errors.name && <span className="Errors">Full Name is Required*</span>
          }

          <div className="form-group">
            <label htmlFor="email" className="text">E-mail Address*</label>
            <input
              name="email"
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Your E-mail Address"
              {...register("email", { required: true })}
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please Enter a valid email address"
                }
              })}
              
              />
          </div>


          {
            errors.email && <span className="Errors">Valid E-mail Address is Required*</span>
          }

          <div className="form-group">
          <label htmlFor="phone" className="text">Phone Number*</label>
          <input
            className="form-control"
            id="phone"
            placeholder="Enter Your Phone Number"
            name="phone"
            {...register("phone", { required: true })}
          />
        </div>

        {
          
            errors.phone && <span className="Errors">Phone Number is Required*</span>
          
        }

        <div className="form-group">
          <label htmlFor="password" className="text">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Enter Your Password"
            name="password"
            {...register("password", { required: true })}

          />
        </div>
        {
            errors.password && <span className="Errors">Password is Required*</span>
          }

        <div className="form-group">
          <label htmlFor="state" className="text" >Choose Your State</label>
          <select className="form-control" id="state" name='state' {...register("state", { required: true })}>
          {/* ref={register} */}
            <option value="">--- Select Your State ---</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Assam">Assam</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Punjab">Punjab</option>
          </select>
        </div>




        <div className="form-group">
          <label htmlFor="gender" className="text">Choose Your Gender -</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              name="gender"
              {...register("gender", { required: true })}

            />
            
            <label className="form-check-label" htmlFor="male">male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              value="female"
              name="gender"
              {...register("gender", { required: true })}

            />
            <label className="form-check-label" htmlFor="female">female</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="other"
              value="other"
              name="gender"
              {...register("gender", { required: true })}
              />
            <label className="form-check-label" htmlFor="other">other</label>
          </div>
        </div>


        <div className="form-group">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="tnc" name="tnc" {...register("tnc", { required: true })}/>  
            <label className="form-check-label" htmlFor="tnc"
              >I agree all terms & conditions</label
            >
          </div>
        </div>

       <input type="submit" className="btn_submit"  />
            </form>
        </div>
      </div>
    </>
  );
 };   

export default HookFormOne;