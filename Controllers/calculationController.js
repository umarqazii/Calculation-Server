// Controller for addition
export const add = (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ message: "Invalid numbers provided" });
  }

  const result = num1 + num2;
  res.status(200).json({
    operation: "addition",
    num1,
    num2,
    result,
  });
};

// Controller for subtraction
export const subtract = (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ message: "Invalid numbers provided" });
  }

  const result = num1 - num2;
  res.status(200).json({
    operation: "subtraction",
    num1,
    num2,
    result,
  });
};

// Controller for multiplication
export const multiply = (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ message: "Invalid numbers provided" });
  }

  const result = num1 * num2;
  res.status(200).json({
    operation: "multiplication",
    num1,
    num2,
    result,
  });
};

// Controller for division
export const divide = (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ message: "Invalid numbers provided" });
  }

  if (num2 === 0) {
    return res.status(400).json({ message: "Division by zero is not allowed" });
  }

  const result = num1 / num2;
  res.status(200).json({
    operation: "division",
    num1,
    num2,
    result,
  });
};

// Controller for Remainder
export const remainder = (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ message: "Invalid numbers provided" });
  }

  const result = num1 % num2;
  res.status(200).json({
    operation: "Remainder",
    num1,
    num2,
    result,
  });
};
