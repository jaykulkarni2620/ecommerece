import asyncHandler from 'express-async-handler';

const handleContactForm = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  // Process the contact form data here (e.g., save to a database or send an email)
  res.status(200).json({ message: 'Message received successfully' });
  console.log('Message received successfully');
  
});

export { handleContactForm };
