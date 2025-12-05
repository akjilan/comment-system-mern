import { loginUser, registerUser } from "../services/auth.service";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const token = await registerUser(name, email, password);

    return res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await loginUser(email, password);

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
