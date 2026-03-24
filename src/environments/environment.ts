export const environment = {
  production: false,
  emailjs: {
    serviceID: process.env['EMAILJS_SERVICE_ID'] || '',
    templateID: process.env['EMAILJS_TEMPLATE_ID'] || '',
    publicKey: process.env['EMAILJS_PUBLIC_KEY'] || ''
  }
};