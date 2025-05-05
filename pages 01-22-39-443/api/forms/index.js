import formTemplateService from '../../../app/services/FormTemplateService';

/**
 * API endpoint to get all form templates
 * @param {object} req - Next.js request object
 * @param {object} res - Next.js response object
 */
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        // Handle query parameters
        const activeOnly = req.query.activeOnly !== 'false';
        
        // Get all form templates
        const formTemplates = await formTemplateService.getAllFormTemplates(activeOnly);
        return res.status(200).json(formTemplates);
        
      case 'POST':
        // Validate request body
        if (!req.body || !req.body.id || !req.body.name || !req.body.fields) {
          return res.status(400).json({ error: 'Invalid form template data' });
        }
        
        // Create new form template
        const newTemplate = await formTemplateService.saveFormTemplate(req.body);
        return res.status(201).json(newTemplate);
        
      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling form templates request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 