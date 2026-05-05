import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import {Navbar} from "../components/Navbar";
import "../styles/auth.css";
import Cookies from "js-cookie";

const eyeIcon = "/assets/eye-on.svg";
const eyeOffIcon = "/assets/eye-off.svg";

type LoginErrors = {
  email?: string;
  password?: string;
  server?: string;
};

export function Login() {
  const server = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (value: string) => {
    const trimmed = value.trim().toLowerCase();
    if (!trimmed) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return "Enter a valid email address.";
    }
    return "";
  };

  const validatePassword = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "Password is required.";
    return "";
  };

  const validateForm = () => {
    const newErrors: LoginErrors = {};

    const sanitizedData = {
      email: email.trim().toLowerCase(),
      password: password.trim(),
    };

    const emailError = validateEmail(sanitizedData.email);
    const passwordError = validatePassword(sanitizedData.password);

    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);

    return {
      isValid: Object.keys(newErrors).length === 0,
      sanitizedData,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = validateForm();
    if (!result.isValid) return;

    try {
      setIsSubmitting(true);
      setErrors({});
      console.log(result.sanitizedData);
      const toastId = toast.loading('Logging in...');
      const response = await fetch(`${server}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.sanitizedData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.err || 'Login failed. Please try again.', { id: toastId });
        setErrors((prev) => ({
          ...prev,
          server: data?.err || "Login failed. Please try again.",
        }));
        return;
      }

      toast.success('Welcome back!', { id: toastId });
      Cookies.set("authtoken", data.token, { expires: 3 });
      navigate("/");
    } catch (error) {
      toast.error('Unable to connect to server. Please try again.');
      setErrors((prev) => ({
        ...prev,
        server: "Unable to connect to server. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <Navbar showIcons={false} />

      <div className="auth-brand-block">
        <h1 className="auth-brand-title">AtlasDash</h1>
        <p className="auth-brand-tagline">Can you master the map?</p>
      </div>

      <div className="auth-main">
        <div className="auth-map-shell">
          <img
            src="/assets/Map.png"
            alt="World map"
            className="auth-map-image"
          />
          <div className="auth-map-gradient" />
          <div className="auth-map-pattern" />
        </div>

        <div className="auth-overlay auth-overlay-gap">
          <h2 className="auth-title auth-title-login">User Login</h2>

          <div className="auth-server-error-slot">
            <p
              id="errorlog"
              className={`auth-server-error ${
                errors.server
                  ? "auth-server-error-visible"
                  : "auth-server-error-hidden"
              }`}
            >
              {errors.server || "placeholder"}
            </p>
          </div>

          <form
            id="loginform"
            onSubmit={handleSubmit}
            className="auth-form auth-form-gap-lg"
            noValidate
          >
            <div className="auth-field-wrap">
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "", server: "" }));
                }}
                onBlur={() => {
                  const sanitized = email.trim().toLowerCase();
                  setEmail(sanitized);
                  setErrors((prev) => ({
                    ...prev,
                    email: validateEmail(sanitized),
                  }));
                }}
                className={`auth-input ${errors.email ? "auth-input-error" : ""}`}
              />
              <div className="auth-field-error-slot">
                <p
                  className={`auth-field-error ${
                    errors.email
                      ? "auth-field-error-visible"
                      : "auth-field-error-hidden"
                  }`}
                >
                  {errors.email || "placeholder"}
                </p>
              </div>
            </div>

            <div className="auth-field-wrap">
              <div className="auth-input-icon-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      password: "",
                      server: "",
                    }));
                  }}
                  onBlur={() => {
                    const sanitized = password.trim();
                    setPassword(sanitized);
                    setErrors((prev) => ({
                      ...prev,
                      password: validatePassword(sanitized),
                    }));
                  }}
                  className={`auth-input ${errors.password ? "auth-input-error" : ""}`}
                />
                <button
                  type="button"
                  className="auth-eye-btn"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img
                    src={showPassword ? eyeOffIcon : eyeIcon}
                    alt={showPassword ? "Hide password" : "Show password"}
                    width="18"
                    height="18"
                  />
                </button>
              </div>
              <div className="auth-field-error-slot">
                <p
                  className={`auth-field-error ${
                    errors.password
                      ? "auth-field-error-visible"
                      : "auth-field-error-hidden"
                  }`}
                >
                  {errors.password || "placeholder"}
                </p>
              </div>
            </div>

            <p className="auth-helper-text">
              <span className="auth-helper-muted">Not a User yet? </span>
              <span className="auth-link" onClick={() => navigate("/signup")}>
                Create account
              </span>
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="auth-submit-btn"
            >
              {isSubmitting ? "Joining..." : "Join"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
