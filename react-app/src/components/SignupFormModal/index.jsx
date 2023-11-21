import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useModal } from "../../context/Modal";
import { signup } from "../../store/session";

import "./SignupForm.css";

const SignupFormModal = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});

	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password === confirmPassword) {
      const payload = {
        firstName,
        lastName,
        username,
        email,
        password
      }

      return dispatch(signup(payload))
        .then(closeModal)
        .catch(async (err) => setErrors(err.errors))
    }

    return setErrors({
      confirmPassword: 'Confirm Password field must be the same as the password field'
    })
	};

	return (
		<>
			<h2>Sign Up</h2>
			<form onSubmit={handleSubmit}>
				{errors.server && <p>{errors.server}</p>}
				{errors.firstName && <p>{errors.firstName}</p>}
				<label>
					First Name
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</label>

				{errors.lastName && <p>{errors.lastName}</p>}
				<label>
					Last Name
					<input
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</label>

				{errors.username && <p>{errors.username}</p>}
				<label>
					Username
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>

				{errors.email && <p>{errors.email}</p>}
				<label>
					Email
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>

				{errors.password && <p>{errors.password}</p>}
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>

				{errors.confirmPassword && <p>{errors.confirmPassword}</p>}
				<label>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;
