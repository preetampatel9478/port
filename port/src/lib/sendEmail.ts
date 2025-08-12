interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    // For now, we'll just log the data
    // In production, you would integrate with a service like SendGrid, Resend, or similar
    console.log('Sending email...', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate success response
    return {
      success: true,
      message: 'Email sent successfully!'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.'
    };
  }
}
