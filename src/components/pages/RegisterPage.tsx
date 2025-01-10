import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string(),
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(5, { message: "Password is too short" }),
});

type FormData = z.infer<typeof schema>;

function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  function onSubmit(data: FormData) {
    console.log("Submitted", data);
    navigate("/foods");
  }

  return (
    <div className="vh-100 d-grid justify-content-center align-content-center">
      <h1 className="mb-4 text-center">Register Page</h1>
      <div className="p-5 shadow rounded-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              {...register("name")}
              className="form-control"
              style={{ width: 360 }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              {...register("username")}
              className="form-control"
              style={{ width: 360 }}
            />
            {errors.username && (
              <p className="text-danger">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              {...register("password")}
              className="form-control"
              style={{ width: 360 }}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <div className="d-grid justify-content-center mt-4">
            <button className="btn btn-primary" disabled={!isValid}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
