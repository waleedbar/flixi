// src/pages/SignUp.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // ---==[ مهم: استيراد Link ]==---
import SecurityBanner from '../components/SecurityBanner';

export default function SignUp() {
  // ... كل الكود الذي كتبته يبقى كما هو (useState, useEffect, functions) ...
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    company: '',
    agreeTerms: false,
    subscribeNewsletter: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    document.title = "FlexiGate - Create Account";
  }, []);

  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 10;
    if (/[a-z]/.test(password)) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^A-Za-z0-9]/.test(password)) strength += 15;
    return Math.min(strength, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({ ...prev, [name]: newValue }));

    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the Terms and Conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Account created successfully! Please check your email to activate your account.');
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPasswordStrengthColor = (): string => {
    if (passwordStrength < 30) return '#ef4444';
    if (passwordStrength < 60) return '#f59e0b';
    if (passwordStrength < 80) return '#eab308';
    return '#10b981';
  };

  const getPasswordStrengthText = (): string => {
    if (passwordStrength < 30) return 'Very Weak';
    if (passwordStrength < 60) return 'Weak';
    if (passwordStrength < 80) return 'Good';
    return 'Strong';
  };

  return (
    <main>
      <SecurityBanner />
      <section className="container section-padding">
        <div className="signup-container">
          <div className="signup-header">
            <h2><i className="fas fa-user-plus"></i> Create Your Account</h2>
            <p>Join FlexiGate and experience enterprise-grade security solutions</p>
          </div>
          <form id="signupForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className={errors.firstName ? 'error' : ''} required />
                <i className="fas fa-user"></i>
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              <div className="input-group">
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className={errors.lastName ? 'error' : ''} required />
                <i className="fas fa-user"></i>
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>
            <div className="input-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={errors.email ? 'error' : ''} required />
              <i className="fas fa-envelope"></i>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="input-group">
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Password" className={errors.password ? 'error' : ''} required />
              <i className="fas fa-lock"></i>
              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}><i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i></button>
              {errors.password && <span className="error-message">{errors.password}</span>}
              {formData.password && (
                <div className="password-strength">
                  <div className="strength-bar"><div className="strength-fill" style={{ width: `${passwordStrength}%`, backgroundColor: getPasswordStrengthColor() }}></div></div>
                  <span className="strength-text" style={{ color: getPasswordStrengthColor() }}>{getPasswordStrengthText()}</span>
                </div>
              )}
            </div>
            <div className="input-group">
              <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className={errors.confirmPassword ? 'error' : ''} required />
              <i className="fas fa-lock"></i>
              <button type="button" className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}><i className={showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i></button>
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className={errors.agreeTerms ? 'error' : ''} />
                <span className="checkmark"></span>
                I agree to the <Link to="/terms" className="link">Terms and Conditions</Link>
              </label>
              {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
            </div>
            <button type="submit" className="btn btn-primary btn-glow signup-btn" disabled={isSubmitting}>
              {isSubmitting ? (<><i className="fas fa-spinner fa-spin"></i> Creating Account...</>) : (<><i className="fas fa-user-plus"></i> Create Account</>)}
            </button>
            {/* ---==[ هنا الجزء الجديد والمهم للربط ]==--- */}
            <div className="form-footer">
              <p>Already have an account? <Link to="/login" className="link">Sign in here</Link></p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}