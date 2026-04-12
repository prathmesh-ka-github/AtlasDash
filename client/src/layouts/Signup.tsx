import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/auth.css';

const eyeIcon = '/assets/eye-on.svg';
const eyeOffIcon = '/assets/eye-off.svg';

type SignupErrors = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  server?: string;
};

export default function Signup() {
  const server = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<SignupErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateFirstname = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) return 'First name is required.';
    if (trimmed.length < 3) return 'First name must be at least 3 characters.';
    if (trimmed.length > 20) return 'First name must not exceed 20 characters.';
    return '';
  };

  const validateLastname = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) return 'Last name is required.';
    if (trimmed.length < 1) return 'Last name must be at least 1 character.';
    if (trimmed.length > 20) return 'Last name must not exceed 20 characters.';
    return '';
  };

  const validateUsername = (value: string) => {
    const trimmed = value.trim().toLowerCase();

    if (!trimmed) return 'Username is required.';
    if (trimmed.length < 3) return 'Username must be at least 3 characters.';
    if (trimmed.length > 20) return 'Username must not exceed 20 characters.';
    return '';
  };

  const validateEmail = (value: string) => {
    const trimmed = value.trim().toLowerCase();

    if (!trimmed) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return 'Enter a valid email address.';
    }
    return '';
  };

  const validatePassword = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) return 'Password is required.';
    return '';
  };

  const validateConfirmPassword = (value: string, currentPassword: string) => {
    const trimmedConfirm = value.trim();
    const trimmedPassword = currentPassword.trim();

    if (!trimmedConfirm) return 'Confirm password is required.';
    if (trimmedConfirm !== trimmedPassword) return 'Passwords do not match.';
    return '';
  };

  const validateForm = () => {
    const newErrors: SignupErrors = {};

    const sanitizedData = {
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      username: username.trim().toLowerCase(),
      email: email.trim().toLowerCase(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
    };

    const firstnameError = validateFirstname(sanitizedData.firstname);
    const lastnameError = validateLastname(sanitizedData.lastname);
    const usernameError = validateUsername(sanitizedData.username);
    const emailError = validateEmail(sanitizedData.email);
    const passwordError = validatePassword(sanitizedData.password);
    const confirmPasswordError = validateConfirmPassword(
      sanitizedData.confirmPassword,
      sanitizedData.password
    );

    if (firstnameError) newErrors.firstname = firstnameError;
    if (lastnameError) newErrors.lastname = lastnameError;
    if (usernameError) newErrors.username = usernameError;
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;

    setErrors(newErrors);

    return {
      isValid: Object.keys(newErrors).length === 0,
      sanitizedData: {
        name: {
          firstname: sanitizedData.firstname,
          lastname: sanitizedData.lastname,
        },
        username: sanitizedData.username,
        email: sanitizedData.email,
        password: sanitizedData.password,
        roomID: [],
        token: 'none',
      },
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = validateForm();
    if (!result.isValid) return;

    try {
      setIsSubmitting(true);
      setErrors({});

      const response = await fetch(`${server}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result.sanitizedData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors((prev) => ({
          ...prev,
          server: data?.err || 'Registration failed. Please try again.',
        }));
        return;
      }
      else {
        navigate('/Login')
      }

      navigate('/login');
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        server: 'Unable to connect to server. Please try again.',
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

        <div className="auth-overlay auth-overlay-scroll">
          <h2 className="auth-title auth-title-signup">Create User</h2>

          <div className="auth-server-error-slot">
            <p
              id="errorlog"
              className={`auth-server-error ${
                errors.server
                  ? 'auth-server-error-visible'
                  : 'auth-server-error-hidden'
              }`}
            >
              {errors.server || 'placeholder'}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="auth-form auth-form-gap-md auth-signup-form"
            noValidate
          >
            <div className="auth-split-row">
              <div className="auth-split-col">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      firstname: '',
                      server: '',
                    }));
                  }}
                  onBlur={() => {
                    const sanitized = firstname.trim();
                    setFirstname(sanitized);
                    setErrors((prev) => ({
                      ...prev,
                      firstname: validateFirstname(sanitized),
                    }));
                  }}
                  className={`auth-input auth-input-split ${
                    errors.firstname ? 'auth-input-error' : ''
                  }`}
                />
                <div className="auth-field-error-slot-split">
                  <p
                    className={`auth-field-error auth-field-error-split ${
                      errors.firstname
                        ? 'auth-field-error-visible'
                        : 'auth-field-error-hidden'
                    }`}
                  >
                    {errors.firstname || 'placeholder'}
                  </p>
                </div>
              </div>

              <div className="auth-split-col">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      lastname: '',
                      server: '',
                    }));
                  }}
                  onBlur={() => {
                    const sanitized = lastname.trim();
                    setLastname(sanitized);
                    setErrors((prev) => ({
                      ...prev,
                      lastname: validateLastname(sanitized),
                    }));
                  }}
                  className={`auth-input auth-input-split ${
                    errors.lastname ? 'auth-input-error' : ''
                  }`}
                />
                <div className="auth-field-error-slot-split">
                  <p
                    className={`auth-field-error auth-field-error-split ${
                      errors.lastname
                        ? 'auth-field-error-visible'
                        : 'auth-field-error-hidden'
                    }`}
                  >
                    {errors.lastname || 'placeholder'}
                  </p>
                </div>
              </div>
            </div>

            <div className="auth-field-wrap">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    username: '',
                    server: '',
                  }));
                }}
                onBlur={() => {
                  const sanitized = username.trim().toLowerCase();
                  setUsername(sanitized);
                  setErrors((prev) => ({
                    ...prev,
                    username: validateUsername(sanitized),
                  }));
                }}
                className={`auth-input ${errors.username ? 'auth-input-error' : ''}`}
              />
              <div className="auth-field-error-slot">
                <p
                  className={`auth-field-error ${
                    errors.username
                      ? 'auth-field-error-visible'
                      : 'auth-field-error-hidden'
                  }`}
                >
                  {errors.username || 'placeholder'}
                </p>
              </div>
            </div>

            <div className="auth-field-wrap">
              <input
                type="email"
                name="email"
                placeholder="Email id"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    email: '',
                    server: '',
                  }));
                }}
                onBlur={() => {
                  const sanitized = email.trim().toLowerCase();
                  setEmail(sanitized);
                  setErrors((prev) => ({
                    ...prev,
                    email: validateEmail(sanitized),
                  }));
                }}
                className={`auth-input ${errors.email ? 'auth-input-error' : ''}`}
              />
              <div className="auth-field-error-slot">
                <p
                  className={`auth-field-error ${
                    errors.email
                      ? 'auth-field-error-visible'
                      : 'auth-field-error-hidden'
                  }`}
                >
                  {errors.email || 'placeholder'}
                </p>
              </div>
            </div>

            <div className="auth-field-wrap">
              <div className="auth-input-icon-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Set password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      password: '',
                      confirmPassword: '',
                      server: '',
                    }));
                  }}
                  onBlur={() => {
                    const sanitized = password.trim();
                    setPassword(sanitized);
                    setErrors((prev) => ({
                      ...prev,
                      password: validatePassword(sanitized),
                      confirmPassword: confirmPassword.trim()
                        ? validateConfirmPassword(confirmPassword, sanitized)
                        : prev.confirmPassword,
                    }));
                  }}
                  className={`auth-input ${errors.password ? 'auth-input-error' : ''}`}
                />
                <button
                  type="button"
                  className="auth-eye-btn"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <img
                    src={showPassword ? eyeOffIcon : eyeIcon}
                    alt={showPassword ? 'Hide password' : 'Show password'}
                    width="18"
                    height="18"
                  />
                </button>
              </div>
              <div className="auth-field-error-slot">
                <p
                  className={`auth-field-error ${
                    errors.password
                      ? 'auth-field-error-visible'
                      : 'auth-field-error-hidden'
                  }`}
                >
                  {errors.password || 'placeholder'}
                </p>
              </div>
            </div>

            <div className="auth-field-wrap">
              <div className="auth-input-icon-wrap">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword: '',
                      server: '',
                    }));
                  }}
                  onBlur={() => {
                    const sanitized = confirmPassword.trim();
                    setConfirmPassword(sanitized);
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword: validateConfirmPassword(
                        sanitized,
                        password
                      ),
                    }));
                  }}
                  className={`auth-input ${
                    errors.confirmPassword ? 'auth-input-error' : ''
                  }`}
                />
                <button
                  type="button"
                  className="auth-eye-btn"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  <img
                    src={showConfirmPassword ? eyeOffIcon : eyeIcon}
                    alt={showConfirmPassword ? 'Hide password' : 'Show password'}
                    width="18"
                    height="18"
                  />
                </button>
              </div>
              <div className="auth-field-error-slot">
                <p
                  className={`auth-field-error ${
                    errors.confirmPassword
                      ? 'auth-field-error-visible'
                      : 'auth-field-error-hidden'
                  }`}
                >
                  {errors.confirmPassword || 'placeholder'}
                </p>
              </div>
            </div>

            <p className="auth-helper-text">
              <span className="auth-helper-muted">Already a User? </span>
              <span className="auth-link" onClick={() => navigate('/login')}>
                Go to Login
              </span>
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="auth-submit-btn"
            >
              {isSubmitting ? 'Creating...' : 'Create'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}