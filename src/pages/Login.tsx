import * as yup from "yup";

import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import toast, { Toaster } from "react-hot-toast";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CircularProgress, SvgIcon } from "@mui/material";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import { LoginData } from "../types";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../store/auth/auth.action";
import { clearAuthError } from "../store/auth/auth.slice";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const { error, loading, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password }: LoginData) => {
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAuthError());
    }

    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, error, navigate]);

  console.log("error :>> ", error);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{ ml: 2, fontWeight: "bold" }}
          >
            LOGIN
          </Typography>
          <SvgIcon sx={{ fontSize: 44 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="logo"
              viewBox="0 0 41 43"
            >
              <path
                style={{ fill: "rgb(1,112,105)" }}
                d="M22.704,9.569c1.141,-3.979 -1.163,-8.136 -5.142,-9.277c-3.979,-1.141 -8.136,1.163 -9.277,5.142l-7.993,27.877c-1.141,3.979 1.163,8.136 5.142,9.277c3.979,1.14 8.136,-1.164 9.277,-5.143l7.993,-27.876Z"
              ></path>
              <path
                style={{ fill: "rgb(164,217,108)" }}
                d="M40.397,15.104c1.141,-3.979 -1.163,-8.136 -5.142,-9.277c-3.979,-1.141 -8.136,1.163 -9.277,5.142l-1.378,4.807c-1.141,3.979 1.163,8.135 5.142,9.276c3.979,1.141 8.136,-1.163 9.277,-5.142l1.378,-4.806Z"
              ></path>
            </svg>
          </SvgIcon>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1, width: "100%" }}
        >
          <Typography sx={{ fontWeight: "bold", color: "#444444" }}>
            Email
          </Typography>

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                required
                {...field}
                sx={{ mb: 2 }}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          <Typography sx={{ fontWeight: "bold", color: "#444444" }}>
            Password
          </Typography>

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                required
                {...field}
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={25} /> : "Login"}
          </Button>
        </Box>
      </Box>
      <Typography sx={{ fontSize: 12, color: "gray" }}>
        Email: <span style={{ fontWeight: "bold" }}>eve.holt@reqres.in</span>
      </Typography>
      <Toaster />
      <Footer />
    </Container>
  );
}
