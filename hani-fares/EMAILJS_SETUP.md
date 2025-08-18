# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality in your contact form.

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended for personal use)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Project Type: {{project_type}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to **Account** in your dashboard
2. Find your **Public Key** (User ID)

## 5. Update Environment Variables

1. Update your `.env` file with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- Ensure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is properly configured
- Make sure your template variable names match the ones in the code

## Security Note

Never commit your actual EmailJS credentials to version control. The `.env` file is already added to `.gitignore` for security.