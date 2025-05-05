import formTemplateService from '../../../app/services/FormTemplateService';

/**
 * API endpoint to get form templates by key
 * @param {object} req - Next.js request object
 * @param {object} res - Next.js response object
 */
export default async function handler(req, res) {
  const { formKey } = req.query;

  if (!formKey) {
    return res.status(400).json({ error: 'Form key is required' });
  }

  try {
    switch (req.method) {
      case 'GET':
        const formTemplate = await formTemplateService.getFormTemplateByKey(formKey);
        
        if (!formTemplate) {
          return res.status(404).json({ error: 'Form template not found' });
        }
        
        return res.status(200).json(formTemplate);
        
      case 'PUT':
        // Validate request body
        if (!req.body || !req.body.name || !req.body.fields) {
          return res.status(400).json({ error: 'Invalid form template data' });
        }
        
        // Update form template
        const updatedTemplate = await formTemplateService.saveFormTemplate({
          id: formKey,
          ...req.body
        });
        
        return res.status(200).json(updatedTemplate);
        
      case 'DELETE':
        const deleted = await formTemplateService.deleteFormTemplate(formKey);
        
        if (!deleted) {
          return res.status(404).json({ error: 'Form template not found' });
        }
        
        return res.status(200).json({ success: true });
        
      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling form template request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 